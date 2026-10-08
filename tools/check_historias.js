// Uso: node tools/check_historias.js <arquivo.js> [<arquivo2.js> ...]   (padrão: data/historias-de.js)
// Valida estrutura (cenas, escolhas, finais, alcance, ciclos) e os parágrafos híbridos (blocos e lemas).
const fs = require("fs"), vm = require("vm");
const files = process.argv.slice(2); if (!files.length) files.push("data/historias-de.js");
const ctx = { window: {} }; ctx.window.VB_DATA = {}; ctx.window.VB_HIST = { de: [] };
ctx.VB_DATA = ctx.window.VB_DATA; ctx.VB_HIST = ctx.window.VB_HIST;
vm.runInNewContext(fs.readFileSync("data/de.js", "utf8"), ctx);
files.forEach(f => vm.runInNewContext(fs.readFileSync(f, "utf8"), ctx));
const rank = {}; ctx.VB_DATA.de.forEach((r, i) => rank[r[0]] = i);
const norm = t => t.replace(/\s+/g, " ").replace(/ ([,.!?;:])/g, "$1").trim();
const GEN = ["Mistério", "Viagem", "Cotidiano", "Relações", "Suspense", "Trabalho", "Ficção científica", "Sobrevivência"];
let bad = 0; const err = (s, m) => { console.log(`[${s}] ${m}`); bad++; };
const ids = new Set();
for (const h of ctx.VB_HIST.de) {
  const S = h.id || "?";
  if (ids.has(h.id)) err(S, "id repetido"); ids.add(h.id);
  for (const k of ["id", "titulo", "genero", "nivel", "desc", "inicio", "cenas"]) if (!h[k]) err(S, `falta ${k}`);
  if (!GEN.includes(h.genero)) err(S, `gênero fora da lista: ${h.genero}`);
  const C = h.cenas || {}; if (!C[h.inicio]) err(S, "início inexistente");
  const flagsSet = new Set(), flagsUsed = new Set();
  let paras = 0, words = 0, chunks = 0, withLemma = 0; const used = new Set();
  for (const [cid, c] of Object.entries(C)) {
    const T = `${S}/${cid}`;
    if (!Array.isArray(c.p) || !c.p.length) err(T, "sem parágrafos");
    (c.p || []).forEach((p, pi) => {
      if (!Array.isArray(p) || p.length !== 3) { err(T, `parágrafo ${pi} mal formado`); return; }
      const [fl, pt, ch] = p; paras++;
      const nw = fl.split(/\s+/).length; words += nw;
      if (nw < 20 || nw > 70) err(T, `parágrafo ${pi} com ${nw} palavras (use 20 a 70)`);
      const join = norm(ch.map(x => x[0]).join(" "));
      if (join !== norm(fl)) err(T, `p${pi} blocos != texto\n   ${join}\n   ${fl}`);
      ch.forEach(x => {
        if (x.length !== 3 || typeof x[0] !== "string" || typeof x[1] !== "string") { err(T, `bloco mal formado ${JSON.stringify(x)}`); return; }
        chunks++; const ls = x[2] ? x[2].split("|") : []; if (ls.length) withLemma++;
        ls.forEach(l => { if (!(l in rank)) err(T, `lema ausente "${l}" em "${x[0]}"`); else used.add(l); });
      });
      if (!pt || pt.length < 20) err(T, `p${pi} sem tradução`);
    });
    const E = c.escolhas || [];
    if (c.fim) {
      if (E.length) err(T, "final com escolhas");
      if (!["bom", "neutro", "ruim"].includes(c.fim.tipo) || !c.fim.titulo) err(T, "fim precisa de tipo (bom|neutro|ruim) e titulo");
    } else {
      if (E.length < 2 || E.length > 3) err(T, `precisa de 2 ou 3 escolhas (tem ${E.length})`);
      E.forEach((e, ei) => {
        if (!e.pt || !e.de) err(T, `escolha ${ei} sem pt/de`);
        if (!C[e.ir]) err(T, `escolha ${ei} vai para cena inexistente ${e.ir}`);
        if (e.marca) flagsSet.add(e.marca); if (e.req) flagsUsed.add(e.req); if (e.sem) flagsUsed.add(e.sem);
      });
      const plain = E.filter(e => !e.req && !e.sem);
      if (plain.length < 2 && E.length >= 2 && !E.some(e => e.sem)) err(T, "com req, deixe pelo menos 2 escolhas sem condição");
      const tg = E.filter(e => !e.req && !e.sem).map(e => e.ir);
      if (new Set(tg).size !== tg.length) err(T, "escolhas sem condição levam à mesma cena");
    }
    if (c.marca) flagsSet.add(c.marca);
  }
  flagsUsed.forEach(f => { if (!flagsSet.has(f)) err(S, `flag ${f} usada mas nunca marcada`); });
  // alcance, ciclos e comprimento dos caminhos
  const seen = new Set(), paths = []; let cyc = false;
  (function dfs(id, path){
    if (path.includes(id)) { cyc = true; return; }
    seen.add(id); const c = C[id]; if (!c) return;
    if (c.fim) { paths.push(path.length + 1); return; }
    (c.escolhas || []).forEach(e => dfs(e.ir, [...path, id]));
  })(h.inicio, []);
  if (cyc) err(S, "há ciclo entre cenas");
  Object.keys(C).forEach(k => { if (!seen.has(k)) err(S, `cena ${k} inalcançável`); });
  const ends = Object.values(C).filter(c => c.fim);
  if (ends.length < 3) err(S, `poucos finais (${ends.length}, mínimo 3)`);
  if (paths.length && Math.min(...paths) < 4) err(S, `caminho curto demais (${Math.min(...paths)} cenas, mínimo 4)`);
  const pct = chunks ? Math.round(withLemma / chunks * 100) : 0;
  if (pct < 75) err(S, `só ${pct}% dos blocos têm lema (mínimo 75%)`);
  console.log(`${S}: ${Object.keys(C).length} cenas, ${ends.length} finais, caminhos ${Math.min(...paths)} a ${Math.max(...paths)} cenas, ${paras} parágrafos (média ${Math.round(words / paras)} palavras), ${used.size} palavras da lista, ${pct}% blocos com lema`);
}
console.log(`problemas: ${bad}`);
process.exit(bad ? 1 : 0);
