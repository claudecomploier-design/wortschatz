// Uso: node tools/check_words.js <lang>      (ex.: en, es, pt)
// Confere data/<lang>.js: 1000 linhas, 8 colunas, sem repetição, gênero válido, tipo de gancho válido,
// exemplo contém a palavra (lacuna encontrada pelo app) e traduções preenchidas.
const fs = require("fs"), vm = require("vm"), appCtx = require("./lib/app");
const lang = process.argv[2];
const ctx = { window: {} }; ctx.window.VB_DATA = {}; ctx.VB_DATA = ctx.window.VB_DATA;
vm.runInNewContext(fs.readFileSync(`data/${lang}.js`, "utf8"), ctx);
const rows = ctx.VB_DATA[lang]; const app = appCtx(lang);
const TYPES = ["NOME","EN","PT","ES","IT","FR","LA","CA","DE","SOM","IMG","REGRA","FALSO","ONO","PAD","FRASE"];
let bad = 0, nogap = []; const seen = new Set();
const err = (i, m) => { console.log(`#${i} ${rows[i] && rows[i][0]}: ${m}`); bad++; };
if (!Array.isArray(rows)) { console.log("VB_DATA." + lang + " não encontrado"); process.exit(1); }
if (rows.length !== 1000) console.log(`ATENÇÃO: ${rows.length} linhas (esperado 1000)`), bad++;
rows.forEach((r, i) => {
  if (!Array.isArray(r) || r.length !== 8) return err(i, "precisa de 8 colunas");
  const [w, g, gl, pron, tipo, hook, ex, exTr] = r;
  if (!w || /\s{2,}/.test(w) || w !== w.trim()) err(i, "palavra vazia ou com espaços extras");
  const k = w.toLowerCase(); if (seen.has(k)) err(i, "palavra repetida"); seen.add(k);
  if (!["", "m", "f", "n"].includes(g)) err(i, `gênero inválido "${g}"`);
  if (["es", "pt", "it", "fr"].includes(lang) && g === "n") err(i, "neutro não existe nesta língua");
  if (lang === "en" && g) err(i, "inglês não usa gênero: deixe \"\"");
  if (!gl || !pron || !hook || !ex || !exTr) err(i, "campo vazio (tradução, pronúncia, gancho, exemplo ou tradução do exemplo)");
  if (!TYPES.includes(tipo)) err(i, `tipo de gancho "${tipo}" fora da lista ${TYPES.join(",")}`);
  if (ex && !app.gapOf({ w, g, ex })) nogap.push(`#${i} ${w} | ${ex}`);
  if (/—/.test(r.join(" "))) err(i, "não use travessão (—)");
});
if (nogap.length) { console.log(`\n${nogap.length} exemplos em que o app não acha a palavra (a lacuna fica sem palavra). Use a forma da palavra no exemplo, ou aceite se for verbo irregular:`); nogap.slice(0, 60).forEach(x => console.log("  " + x)); }
const gapBad = nogap.length > 60;
console.log(`\n${lang}: ${rows.length} palavras, problemas: ${bad}${gapBad ? ", exemplos sem lacuna demais (máx. 60)" : ""}`);
process.exit(bad || gapBad ? 1 : 0);
