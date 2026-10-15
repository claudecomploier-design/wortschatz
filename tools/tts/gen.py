#!/usr/bin/env python3
"""Gera audio/<lang>/<k>.mp3 com vozes neurais do edge-tts a partir de tools/tts/jobs-<lang>.json.

Uso: python tools/tts/gen.py de [it fr ...]   (sem argumentos: todas as línguas com jobs)
Só gera chaves que ainda não têm arquivo; no fim grava audio/<lang>/index.js e apaga mp3 órfãos.
"""
import asyncio
import json
import os
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
TOOLS = os.path.dirname(os.path.abspath(__file__))
VOICES = {
    "de": "de-DE-KatjaNeural",
    "it": "it-IT-ElsaNeural",
    "fr": "fr-FR-DeniseNeural",
    "en": "en-US-AriaNeural",
    "es": "es-MX-DaliaNeural",
    "pt": "pt-BR-FranciscaNeural",
}
CONCURRENCY = 8
RETRIES = 3


def rate_for(text):
    return "-8%" if len(text.split()) <= 6 else "-4%"


async def make_one(edge_tts, voice, job, out_dir, sem, stats):
    dest = os.path.join(out_dir, job["k"] + ".mp3")
    tmp = dest + ".part"
    async with sem:
        for attempt in range(1, RETRIES + 1):
            try:
                com = edge_tts.Communicate(job["t"], voice, rate=rate_for(job["t"]))
                await com.save(tmp)
                if os.path.getsize(tmp) < 200:
                    raise RuntimeError("arquivo vazio")
                os.replace(tmp, dest)
                stats["ok"] += 1
                if stats["ok"] % 200 == 0:
                    print(f"  {stats['ok']} gerados...", flush=True)
                return
            except Exception as e:  # noqa: BLE001
                if os.path.exists(tmp):
                    os.remove(tmp)
                if attempt == RETRIES:
                    stats["fail"] += 1
                    print(f"  falhou {job['k']} ({job['t'][:50]!r}): {e}", flush=True)
                    return
                await asyncio.sleep(2 * attempt * attempt)


def write_index(lang, out_dir):
    keys = sorted(f[:-4] for f in os.listdir(out_dir) if f.endswith(".mp3"))
    body = ",".join(json.dumps(k) for k in keys)
    with open(os.path.join(out_dir, "index.js"), "w", encoding="utf-8") as fh:
        fh.write(f"window.VB_AUDIO=window.VB_AUDIO||{{}};VB_AUDIO.{lang}=new Set([{body}]);\n")
    return len(keys)


async def run(lang):
    import edge_tts

    jobs_file = os.path.join(TOOLS, f"jobs-{lang}.json")
    if not os.path.exists(jobs_file):
        print(f"{lang}: sem {jobs_file}, rode antes node tools/tts/collect.js")
        return 0
    with open(jobs_file, encoding="utf-8") as fh:
        jobs = json.load(fh)
    out_dir = os.path.join(ROOT, "audio", lang)
    os.makedirs(out_dir, exist_ok=True)
    wanted = {j["k"] for j in jobs}

    # remove órfãos e restos de execuções interrompidas
    removed = 0
    for f in os.listdir(out_dir):
        if f.endswith(".part") or (f.endswith(".mp3") and f[:-4] not in wanted):
            os.remove(os.path.join(out_dir, f))
            removed += 1

    todo = [j for j in jobs if not os.path.exists(os.path.join(out_dir, j["k"] + ".mp3"))]
    print(f"{lang}: {len(jobs)} textos, {len(todo)} a gerar, {removed} órfãos apagados", flush=True)
    stats = {"ok": 0, "fail": 0}
    sem = asyncio.Semaphore(CONCURRENCY)
    await asyncio.gather(*(make_one(edge_tts, VOICES[lang], j, out_dir, sem, stats) for j in todo))
    n = write_index(lang, out_dir)
    print(f"{lang}: {stats['ok']} gerados, {stats['fail']} falhas, {n} no index.js", flush=True)
    return stats["fail"]


def main():
    langs = [a for a in sys.argv[1:] if a in VOICES]
    if not langs:
        langs = [l for l in VOICES if os.path.exists(os.path.join(TOOLS, f"jobs-{l}.json"))]
    fails = 0
    for lang in langs:
        fails += asyncio.run(run(lang))
    if fails:
        print(f"aviso: {fails} textos não geraram áudio (o app usa a voz do navegador para eles)")


if __name__ == "__main__":
    main()
