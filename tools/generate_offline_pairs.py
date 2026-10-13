#!/usr/bin/env python3
"""Build self-contained translations for target/base language pairs.

Run on GitHub Actions (internet to download permissively licensed Argos translation
models at BUILD time only). Runtime application never contacts a translator.
Outputs JS bundles data/ov/<target>-<base>.js.
"""
import argparse
import json
import os
from pathlib import Path
import subprocess
import sys
import time

LANGUAGES = ("de", "it", "fr", "en", "es", "pt")
ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "ov"
os.environ.setdefault("ARGOS_DEVICE_TYPE", "cpu")
os.environ.setdefault("ARGOS_CHUNK_TYPE", "MINISBD")
os.environ.setdefault("OMP_NUM_THREADS", "2")

def load_data():
    path = Path("/tmp/vokabel-sources-export.json")
    subprocess.run(["node", "tools/export_translation_sources.js", str(path)], cwd=ROOT, check=True)
    return json.loads(path.read_text(encoding="utf-8"))

def setup_translators(base, smoke):
    import argostranslate.package as packages
    import argostranslate.translate as translate
    packages.update_package_index()
    items = packages.get_available_packages()
    needs = [("pt", "en")]
    if base != "en":
        needs.append(("en", base))
    for src, dst in needs:
        candidates = [p for p in items if p.from_code == src and p.to_code == dst]
        if not candidates:
            raise RuntimeError(f"Argos model unavailable: {src}->{dst}")
        model = candidates[-1]
        print(f"Installing Argos model {src}->{dst}: {model.package_version}", flush=True)
        path = model.download()
        packages.install_from_path(path)
    langs = {l.code: l for l in translate.get_installed_languages()}
    trans = {}
    for src, dst in needs:
        trans[(src, dst)] = langs[src].get_translation(langs[dst])
    return trans

def generate(base, smoke=False):
    data = load_data()
    models = setup_translators(base, smoke)
    cache = {}
    calls = [0]
    def tx(source, text):
        text = str(text or "").strip()
        if not text or source == base:
            return text
        k = (source, text)
        if k in cache:
            return cache[k]
        if source == "pt":
            e_key = ("pt-en", text)
            if e_key not in cache:
                cache[e_key] = models[("pt", "en")].translate(text).strip()
                calls[0] += 1
            english = cache[e_key]
            result = english if base == "en" else translate_en(english)
        elif source == "en":
            result = translate_en(text)
        else:
            raise ValueError(f"Unexpected primary language {source}")
        result = (result or text).strip()
        if not result:
            raise RuntimeError(f"Empty Argos translation: {source}->{base}: {text[:50]}")
        cache[k] = result
        return result
    def translate_en(text):
        k = ("en-base", text)
        if k not in cache:
            if ("en", base) not in models:
                raise RuntimeError(f"Missing English->{base} model")
            cache[k] = models[("en", base)].translate(text).strip()
            calls[0] += 1
        return cache[k]

    DATA.mkdir(parents=True, exist_ok=True)
    results = []
    for target in LANGUAGES:
        if target == base or base == data[target]["primary"]:
            continue
        doc = data[target]
        source = doc["primary"]
        n = 8 if smoke else None

        def rows(blocks):
            return [[tx(source, full), [tx(source, b) for b in chunks]] for full, chunks in blocks[:n]]

        words = [[tx(source, gloss), tx(source, example)] for gloss, example in doc["words"][:n]]
        phrases = rows(doc["phrases"])
        texts = rows(doc["texts"])
        stories = {}
        for h in doc["stories"][:1 if smoke else None]:
            scenes = {}
            for scene_id, scene in h["scenes"].items():
                scenes[scene_id] = {
                    "p": rows(scene["paragraphs"]),
                    "e": [tx(source, c) for c in scene["choices"]],
                }
            stories[h["id"]] = scenes
        out = {"w": words, "f": phrases, "t": texts, "h": stories}
        name = f"{target}-{base}"
        file = DATA / f"{name}.js"
        file.write_text("window.VB_OFFLINE=window.VB_OFFLINE||{};VB_OFFLINE["+
                        json.dumps(name)+"]="+json.dumps(out, ensure_ascii=False, separators=(',', ':'))+";\n",
                        encoding="utf-8")
        size = file.stat().st_size
        results.append({"name": name, "words": len(words), "phrases": len(phrases), "texts": len(texts),
                        "stories": len(stories), "bytes": size})
        print(f"READY {name}: {len(words)} words, {len(phrases)} phrases, "
              f"{len(texts)} texts, {len(stories)} stories, {size} bytes; "
              f"model calls {calls[0]}", flush=True)
    manifest = DATA / f".stats-{base}.json"
    manifest.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"DONE base={base} calls={calls[0]} total cached segments={len(cache)}", flush=True)

if __name__ == "__main__":
    p=argparse.ArgumentParser()
    p.add_argument("--base", choices=LANGUAGES, required=True)
    p.add_argument("--smoke", action="store_true")
    args=p.parse_args()
    t=time.monotonic()
    generate(args.base, args.smoke)
    print(f"Took {time.monotonic()-t:.1f} s", flush=True)
