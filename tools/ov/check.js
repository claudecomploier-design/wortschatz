// Valida as traduções de um par em tools/ov-src/<alvo>-<base>/.
// Uso: node tools/ov/check.js <alvo> <base> [w|f|t|m|h]   (sem a parte, confere tudo o que existe)
const fs = require("fs"), path = require("path");
const { P, load, storySkeleton, shapeDiff, readJSON, PRIMARY } = require("./lib");
const Q = require("../lib/quality");
const [target, base, only] = process.argv.slice(2);
if (!target || !base || base === target || base === PRIMARY(target)) { console.log("par inválido"); process.exit(1); }
const dir = P("tools/ov-src", `${target}-${base}`);
const D = load(target);
const TYPES = ["NOME","EN","PT","ES","IT","FR","LA","CA","DE","SOM","IMG","REGRA","FALSO","ONO","PAD","FRASE"];
let bad = 0; const errs = [];
const E = m => { errs.push(m); bad++; };
const dash = (s, where) => { if (/—/.test(s)) E(`${where}: não use travessão (—)`); };
const want = k => !only || only === k;
const has = f => fs.existsSync(path.join(dir, f));

function wordRows(){
  if (!fs.existsSync(dir)) return null;
  const parts = fs.readdirSync(dir).filter(f => /^w-\d+\.json$/.test(f)).sort((a, b) => parseInt(a.slice(2)) - parseInt(b.slice(2)));
  const rows = []; let expect = 0;
  for (const f of parts) {
    const start = parseInt(f.slice(2));
    let arr; try { arr = readJSON(path.join(dir, f)); } catch (e) { E(`${f}: JSON inválido (${e.message})`); continue; }
    if (start !== expect) E(`${f}: começa em ${start}, esperado ${expect} (faltam ou sobram linhas antes)`);
    arr.forEach((r, k) => rows[start + k] = r);
    expect = start + arr.length;
  }
  return { rows, parts: parts.length };
}

if (want("w")) {
  const W = wordRows();
  if (!W || !W.parts) E("palavras: nenhum arquivo w-<início>.json");
  else {
    let same = 0;
    for (let i = 0; i < D.words.length; i++) {
      const r = W.rows[i], src = D.words[i], tag = `w#${i} ${src[0]}`;
      if (!r) { E(`${tag}: falta`); continue; }
      if (!Array.isArray(r) || r.length !== 5) { E(`${tag}: precisa de 5 campos [tradução, pronúncia, tipo, gancho, tradução do exemplo]`); continue; }
      if (r.some(x => typeof x !== "string" || !x.trim())) E(`${tag}: campo vazio`);
      if (!TYPES.includes(r[2])) E(`${tag}: tipo "${r[2]}" fora da lista`);
      if (base !== "pt" && r[2] === "PT") E(`${tag}: tipo PT (parente em português) não serve para quem fala ${base}`);
      if (r[0] === src[2]) same++;
      r.forEach(x => dash(String(x), tag));
    }
    const rr = D.words.map((src, i) => [W.rows[i], src, i]).filter(x => Array.isArray(x[0]) && x[0].length === 5);
    rr.forEach(([r, src, i]) => { if (Q.BANNED_PRON.test(r[1])) E(`w#${i} ${src[0]}: pronúncia vaga`); if (Q.BANNED_TEXT.test(r[3])) E(`w#${i} ${src[0]}: gancho de modelo`); });
    Q.skeletons(rr.map(([r, src, i]) => [r[3], [src[0], r[0]], "#" + i]), 4, "gancho").forEach(E);
    if (W.rows.length > D.words.length) E(`palavras: ${W.rows.length} linhas, a lista tem ${D.words.length}`);
    if (same > D.words.length * 0.25) E(`palavras: ${same} traduções idênticas à língua primária; parece não traduzido`);
    console.log(`palavras: ${Math.min(W.rows.filter(Boolean).length, D.words.length)}/${D.words.length}`);
  }
}
function listCheck(kind, L, file){
  if (!has(file)) { E(`${file}: falta`); return; }
  let arr; try { arr = readJSON(path.join(dir, file)); } catch (e) { E(`${file}: JSON inválido (${e.message})`); return; }
  if (arr.length !== L.length) E(`${file}: ${arr.length} itens, esperado ${L.length}`);
  L.forEach((s, i) => {
    const r = arr[i], tag = `${kind}#${i}`;
    if (!r) return;
    if (!Array.isArray(r) || r.length !== 2 || typeof r[0] !== "string" || !Array.isArray(r[1])) { E(`${tag}: formato [tradução completa, [blocos...]]`); return; }
    if (!r[0].trim()) E(`${tag}: tradução vazia`);
    if (r[1].length !== s[3].length) E(`${tag}: ${r[1].length} blocos, esperado ${s[3].length} (${s[1]})`);
    r[1].forEach((b, j) => { if (typeof b !== "string" || !b.trim()) E(`${tag} bloco ${j}: vazio`); });
    dash(r[0] + r[1].join(" "), tag);
  });
  console.log(`${file}: ${arr.length}/${L.length}`);
}
if (want("f") && D.frases.length) listCheck("f", D.frases, "f.json");
if (want("t") && D.textos.length) listCheck("t", D.textos, "t.json");
if (want("m") && D.metodo) {
  if (!has("m.html")) E("m.html: falta");
  else { const m = fs.readFileSync(path.join(dir, "m.html"), "utf8"); if (m.length < D.metodo.length * 0.5) E("m.html: curto demais"); dash(m, "m.html"); console.log("m.html: ok"); }
}
if (want("h")) {
  let n = 0;
  D.hist.forEach(h => {
    const f = `h/${h.id}.json`;
    if (!has(f)) { E(`${f}: falta`); return; }
    let o; try { o = readJSON(path.join(dir, f)); } catch (e) { E(`${f}: JSON inválido (${e.message})`); return; }
    const before = errs.length;
    shapeDiff(storySkeleton(h), o, h.id, errs);
    bad += errs.length - before;
    dash(JSON.stringify(o), f);
    n++;
  });
  console.log(`histórias: ${n}/${D.hist.length}`);
}
errs.slice(0, 80).forEach(e => console.log("  " + e));
if (errs.length > 80) console.log(`  ... e mais ${errs.length - 80}`);
console.log(`${target}-${base}: problemas: ${bad}`);
process.exit(bad ? 1 : 0);
