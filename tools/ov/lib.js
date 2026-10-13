// Utilidades comuns das traduções por par de línguas (overlays).
// Par = <alvo>-<base>: conteúdo da língua <alvo> explicado na língua <base>.
const fs = require("fs"), vm = require("vm"), path = require("path");
const ROOT = path.join(__dirname, "..", "..");
const P = (...a) => path.join(ROOT, ...a);
const PRIMARY = t => (t === "pt" ? "en" : "pt");
const NAMES = { pt: "português", en: "inglês", es: "espanhol", de: "alemão", it: "italiano", fr: "francês" };

function load(target){
  const ctx = { window: {} };
  ["VB_DATA", "VB_FRASES", "VB_TEXTOS", "VB_HIST", "VB_METODO"].forEach(k => { ctx.window[k] = {}; ctx[k] = ctx.window[k]; });
  const run = f => { if (fs.existsSync(P(f))) vm.runInNewContext(fs.readFileSync(P(f), "utf8"), ctx); };
  run(`data/${target}.js`);
  run(`data/frases-${target}.js`);
  run(`data/textos-${target}.js`);
  run(`data/historias-${target}.js`);
  if (target === "de") run("data/historias-extra-de.js");
  run(`data/metodo-${target}.js`);
  return {
    words: ctx.VB_DATA[target] || [],
    frases: ctx.VB_FRASES[target] || [],
    textos: ctx.VB_TEXTOS[target] || [],
    hist: ctx.VB_HIST[target] || [],
    metodo: ctx.VB_METODO[target] || ""
  };
}

/* esqueleto de uma história com só os textos na língua primária (o que precisa ser traduzido) */
function storySkeleton(h){
  const out = { titulo: h.titulo, desc: h.desc, cenas: {} };
  for (const [cid, c] of Object.entries(h.cenas)) {
    const o = { cap: c.cap };
    if (c.nota) o.nota = c.nota;
    o.p = (c.p || []).map(p => [p[1], p[2].map(b => b[1])]);
    if (c.escolhas && c.escolhas.length) o.e = c.escolhas.map(e => e.pt);
    if (c.fim) o.fim = c.fim.titulo;
    out.cenas[cid] = o;
  }
  return out;
}
/* mesmo esqueleto com o texto estrangeiro ao lado, para dar contexto a quem traduz */
function storySource(h){
  const out = { id: h.id, titulo: h.titulo, desc: h.desc, cenas: {} };
  for (const [cid, c] of Object.entries(h.cenas)) {
    const o = { cap: c.cap };
    if (c.nota) o.nota = c.nota;
    o.p = (c.p || []).map(p => ({ texto: p[0], traducao: p[1], blocos: p[2].map(b => [b[0], b[1]]) }));
    if (c.escolhas && c.escolhas.length) o.e = c.escolhas.map(e => ({ estrangeiro: e.fl || e.de, traducao: e.pt }));
    if (c.fim) o.fim = c.fim.titulo;
    out.cenas[cid] = o;
  }
  return out;
}
function shapeDiff(a, b, where, errs){
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return errs.push(`${where}: esperado lista`);
    if (a.length !== b.length) return errs.push(`${where}: esperado ${a.length} itens, veio ${b.length}`);
    a.forEach((x, i) => shapeDiff(x, b[i], `${where}[${i}]`, errs));
  } else if (a && typeof a === "object") {
    if (!b || typeof b !== "object" || Array.isArray(b)) return errs.push(`${where}: esperado objeto`);
    for (const k of Object.keys(a)) if (!(k in b)) errs.push(`${where}.${k}: falta`);
    for (const k of Object.keys(b)) if (!(k in a)) errs.push(`${where}.${k}: sobrando`);
    for (const k of Object.keys(a)) if (k in b) shapeDiff(a[k], b[k], `${where}.${k}`, errs);
  } else if (typeof a === "string") {
    if (typeof b !== "string") errs.push(`${where}: esperado texto`);
    else if (a.trim() && !b.trim()) errs.push(`${where}: vazio`);
  }
}
const readJSON = f => JSON.parse(fs.readFileSync(f, "utf8"));
module.exports = { ROOT, P, PRIMARY, NAMES, load, storySkeleton, storySource, shapeDiff, readJSON };
