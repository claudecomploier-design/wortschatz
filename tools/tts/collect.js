// Junta todos os textos que o app fala (speak) em cada língua alvo e grava tools/tts/jobs-<lang>.json.
// Uso: node tools/tts/collect.js [lang ...]   (sem argumentos: todas as línguas com data/<lang>.js)
// Chave = FNV-1a 32 bits (unidades UTF-16) de lang+"|"+norm(t), hex de 8 dígitos. Igual ao audio.js.
"use strict";
const fs = require("fs"), vm = require("vm"), path = require("path");
const ROOT = path.join(__dirname, "..", "..");
const P = (...a) => path.join(ROOT, ...a);
const ALL = ["de", "it", "fr", "en", "es", "pt"];

function norm(t){ return String(t == null ? "" : t).trim().replace(/\s+/g, " "); }
function fnv(s){
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return ("0000000" + h.toString(16)).slice(-8);
}
function key(lang, t){ return fnv(lang + "|" + norm(t)); }

/* artigo, igual a article(w,g) de index.html */
const ARTS_DE = { m: "der", f: "die", n: "das" };
function article(lang, w, g){
  if (!g) return "";
  if (lang !== "de" && /^(les|i|gli|le) /i.test(w)) return "";
  if (lang === "de") return ARTS_DE[g] || "";
  const v = /^[aeiouàâäéèêëíìîïóòôöúùûüœæh]/i.test(w);
  if (lang === "it") { if (g === "f") return /^[aeiouàéèìòù]/i.test(w) ? "l'" : "la"; if (/^[aeiouàéèìòù]/i.test(w)) return "l'"; if (/^(s[^aeiou]|z|gn|ps|x|y|pn)/i.test(w)) return "lo"; return "il"; }
  if (lang === "fr") { if (v) return "l'"; return g === "f" ? "la" : "le"; }
  if (lang === "es") return g === "f" ? "la" : g === "m" ? "el" : "";
  if (lang === "pt") return g === "f" ? "a" : g === "m" ? "o" : "";
  return "";
}
function full(lang, w, g){ const a = article(lang, w, g); if (!a) return w; return a.endsWith("'") ? a + w : a + " " + w; }
/* clean de historias.js (popup de trecho) */
const clean = t => String(t).replace(/[,.!?;:„“"»«]+/g, "").trim();

function load(lang){
  const ctx = { window: {} };
  ["VB_DATA", "VB_FRASES", "VB_TEXTOS", "VB_HIST"].forEach(k => { ctx.window[k] = {}; ctx[k] = ctx.window[k]; });
  const run = f => { if (fs.existsSync(P(f))) vm.runInNewContext(fs.readFileSync(P(f), "utf8"), ctx, { filename: f }); };
  run(`data/${lang}.js`);
  run(`data/frases-${lang}.js`);
  run(`data/textos-${lang}.js`);
  run(`data/historias-${lang}.js`);
  if (lang === "de") run("data/historias-extra-de.js");
  return {
    words: ctx.VB_DATA[lang] || [],
    frases: ctx.VB_FRASES[lang] || [],
    textos: ctx.VB_TEXTOS[lang] || [],
    hist: ctx.VB_HIST[lang] || []
  };
}

function collect(lang){
  const d = load(lang), seen = new Map(), cnt = {};
  const add = (kind, t) => {
    const n = norm(t); if (!n) return;
    const k = key(lang, n);
    if (seen.has(k)) { if (seen.get(k) !== n) console.warn(`[${lang}] colisão de chave ${k}: "${seen.get(k)}" x "${n}"`); return; }
    seen.set(k, n); cnt[kind] = (cnt[kind] || 0) + 1;
  };
  // Treinar: speak(full(cur)) e speak(cur.ex) (index.html)
  d.words.forEach(r => { add("palavra", full(lang, r[0], r[1])); add("exemplo", r[6]); });
  // Frases e parágrafos híbridos: speak(cur.fl) (frases.js); hybEx do Treinar também usa s[1]
  d.frases.forEach(s => add("frase", s[1]));
  d.textos.forEach(s => add("paragrafo", s[1]));
  // Histórias (historias.js): cena inteira (parágrafos unidos por espaço), parágrafos, trechos (clean) e escolhas
  d.hist.forEach(h => Object.values(h.cenas || {}).forEach(c => {
    const ps = c.p || [];
    if (ps.length) add("cena", ps.map(p => p[0]).join(" "));
    ps.forEach(p => { add("hist-paragrafo", p[0]); (p[2] || []).forEach(b => add("hist-bloco", clean(b[0]))); });
    (c.escolhas || []).forEach(e => add("escolha", e.fl || e.de));
  }));
  const jobs = [...seen].map(([k, t]) => ({ k, t }));
  fs.writeFileSync(path.join(__dirname, `jobs-${lang}.json`), JSON.stringify(jobs));
  const curtos = jobs.filter(j => j.t.split(" ").length <= 6).length;
  console.log(`${lang}: ${jobs.length} textos (${curtos} curtos, ${jobs.length - curtos} longos) ` + JSON.stringify(cnt));
  return jobs;
}

if (require.main === module) {
  const want = process.argv.slice(2).filter(l => ALL.includes(l));
  let total = 0;
  (want.length ? want : ALL).forEach(l => { if (fs.existsSync(P(`data/${l}.js`))) total += collect(l).length; else console.log(`${l}: sem data/${l}.js, pulando`); });
  console.log(`total: ${total}`);
}
module.exports = { norm, fnv, key, article, full, collect };
