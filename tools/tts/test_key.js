// Confere que a chave de tools/tts/collect.js e a de audio.js são iguais.
// Uso: node tools/tts/test_key.js
"use strict";
const fs = require("fs"), vm = require("vm"), path = require("path");
const C = require("./collect.js");
const ROOT = path.join(__dirname, "..", "..");
let lang = "de";
const ctx = { window: {}, document: { head: { appendChild(){} }, createElement: () => ({}) }, Audio: function(){}, Math, String, Date };
ctx.window = ctx; ctx.addEventListener = () => {};
ctx.window.speak = function(){};
vm.createContext(ctx);
vm.runInContext("var lang='de';" + fs.readFileSync(path.join(ROOT, "audio.js"), "utf8"), ctx);
const A = ctx.VBAUDIO;
if (!A || typeof A.key !== "function") { console.error("VBAUDIO.key ausente"); process.exit(1); }
const samples = [
  ["de", "der Mensch"], ["de", "  Ich  bin\tmüde. "], ["it", "l'acqua"], ["fr", "Bonjour! Comment allez-vous aujourd'hui?"],
  ["es", "¿Cómo estás hoy?"], ["pt", "Bom dia! Como você está hoje?"], ["de", "„Straße“ – Größe 😀"], ["en", ""]
];
let bad = 0, n = 0;
const check = (l, t) => { n++; const a = C.key(l, t), b = A.key(t, l); if (a !== b) { bad++; if (bad < 10) console.error(`diferente [${l}] ${JSON.stringify(t)}: node ${a} x audio.js ${b}`); } };
samples.forEach(([l, t]) => check(l, t));
// vetor conhecido de FNV-1a 32 bits
if (C.fnv("a") !== "e40c292c" || C.fnv("") !== "811c9dc5") { bad++; console.error("FNV-1a não bate com os vetores de referência"); }
["de", "it", "fr", "en", "es", "pt"].forEach(l => {
  const f = path.join(__dirname, `jobs-${l}.json`);
  if (!fs.existsSync(f)) return;
  JSON.parse(fs.readFileSync(f, "utf8")).forEach(j => { check(l, j.t); if (C.key(l, j.t) !== j.k) { bad++; console.error(`chave salva diferente em ${l}: ${j.k}`); } });
});
// has() usa VB_AUDIO
ctx.VB_AUDIO = { de: new Set([C.key("de", "der Mensch")]) };
if (!A.has(" der  Mensch ", "de") || A.has("die Frau", "de")) { bad++; console.error("has() incorreto"); }
console.log(bad ? `FALHOU: ${bad} diferenças em ${n} textos` : `OK: ${n} textos com a mesma chave no Node e no audio.js`);
process.exit(bad ? 1 : 0);
