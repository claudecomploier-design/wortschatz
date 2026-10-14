// Uso: node tools/check_words.js <lang>      (ex.: en, es, pt)
// Confere data/<lang>.js: 1000 linhas, 8 colunas, sem repetição, gênero válido, tipo de gancho válido,
// exemplo contém a palavra (lacuna encontrada pelo app) e traduções preenchidas.
const fs = require("fs"), vm = require("vm"), appCtx = require("./lib/app"), Q = require("./lib/quality");
// Parte de um lote: node tools/check_words.js <lang> tools/nl/<lang>/w-500.json   (confere só essas linhas)
const lang = process.argv[2], part = process.argv[3];
const ctx = { window: {} }; ctx.window.VB_DATA = {}; ctx.VB_DATA = ctx.window.VB_DATA;
let rows, others = [];
if (part) {
  rows = JSON.parse(fs.readFileSync(part, "utf8"));
  const start = parseInt((part.match(/w-(\d+)\.json$/) || [0, 0])[1]);
  try { vm.runInNewContext(fs.readFileSync(`data/${lang}.js`, "utf8"), ctx); others = (ctx.VB_DATA[lang] || []).filter((r, i) => i < start || i >= start + 500).map(r => String(r[0]).toLowerCase()); } catch (e) {}
  const dir = require("path").dirname(part);
  fs.readdirSync(dir).filter(f => /^w-\d+\.json$/.test(f) && require("path").join(dir, f) !== require("path").normalize(part)).forEach(f => { try { JSON.parse(fs.readFileSync(require("path").join(dir, f), "utf8")).forEach(r => others.push(String(r[0]).toLowerCase())); } catch (e) {} });
} else {
  vm.runInNewContext(fs.readFileSync(`data/${lang}.js`, "utf8"), ctx);
  rows = ctx.VB_DATA[lang];
}
const otherSet = new Set(others);
const app = appCtx(lang);
const TYPES = ["NOME","EN","PT","ES","IT","FR","LA","CA","DE","SOM","IMG","REGRA","FALSO","ONO","PAD","FRASE"];
let bad = 0, nogap = []; const seen = new Set();
const err = (i, m) => { console.log(`#${i} ${rows[i] && rows[i][0]}: ${m}`); bad++; };
if (!Array.isArray(rows)) { console.log("VB_DATA." + lang + " não encontrado"); process.exit(1); }
if (!part && rows.length !== 1000) console.log(`ATENÇÃO: ${rows.length} linhas (esperado 1000)`), bad++;
rows.forEach((r, i) => {
  if (!Array.isArray(r) || r.length !== 8) return err(i, "precisa de 8 colunas");
  const [w, g, gl, pron, tipo, hook, ex, exTr] = r;
  if (!w || /\s{2,}/.test(w) || w !== w.trim()) err(i, "palavra vazia ou com espaços extras");
  const k = w.toLowerCase(); if (seen.has(k)) err(i, "palavra repetida"); seen.add(k);
  if (otherSet.has(k)) err(i, "palavra já existe em outra parte da lista");
  if (!["", "m", "f", "n"].includes(g)) err(i, `gênero inválido "${g}"`);
  if (["es", "pt", "it", "fr"].includes(lang) && g === "n") err(i, "neutro não existe nesta língua");
  if (lang === "en" && g) err(i, "inglês não usa gênero: deixe \"\"");
  if (!gl || !pron || !hook || !ex || !exTr) err(i, "campo vazio (tradução, pronúncia, gancho, exemplo ou tradução do exemplo)");
  if (!TYPES.includes(tipo)) err(i, `tipo de gancho "${tipo}" fora da lista ${TYPES.join(",")}`);
  if (ex && !app.gapOf({ w, g, ex })) nogap.push(`#${i} ${w} | ${ex}`);
  if (/—/.test(r.join(" "))) err(i, "não use travessão (—)");
});
// qualidade: nada de modelo repetido
rows.forEach((r, i) => { if (!Array.isArray(r) || r.length !== 8) return;
  if (Q.BANNED_PRON.test(r[3])) err(i, `pronúncia vaga ("${r[3]}"): escreva como se lê`);
  if (Q.BANNED_TEXT.test(r[5]) || Q.BANNED_TEXT.test(r[6]) || Q.BANNED_TEXT.test(r[7])) err(i, "gancho ou exemplo de modelo genérico");
});
const valid = rows.filter(r => Array.isArray(r) && r.length === 8);
[...Q.skeletons(valid.map((r, i) => [r[5], [r[0], r[2]], "#" + i]), 4, "gancho"),
 ...Q.skeletons(valid.map((r, i) => [r[6], [r[0]], "#" + i]), 6, "exemplo")].forEach(m => { console.log(m); bad++; });
if (nogap.length) { console.log(`\n${nogap.length} exemplos em que o app não acha a palavra (a lacuna fica sem palavra). Use a forma da palavra no exemplo, ou aceite se for verbo irregular:`); nogap.slice(0, 60).forEach(x => console.log("  " + x)); }
const gapBad = nogap.length > 60;
console.log(`\n${lang}: ${rows.length} palavras, problemas: ${bad}${gapBad ? ", exemplos sem lacuna demais (máx. 60)" : ""}`);
process.exit(bad || gapBad ? 1 : 0);
