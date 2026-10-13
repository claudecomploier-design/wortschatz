// Mostra o material de origem para traduzir um par.
// Uso:
//   node tools/ov/source.js <alvo> w <de> <até>     palavras (índices, inclusive)
//   node tools/ov/source.js <alvo> f               frases curtas
//   node tools/ov/source.js <alvo> t               parágrafos
//   node tools/ov/source.js <alvo> m               texto do Método (HTML)
//   node tools/ov/source.js <alvo> h               lista de histórias
//   node tools/ov/source.js <alvo> h <id>          história (JSON com contexto)
//   node tools/ov/source.js <alvo> skel <id>       esqueleto da história no formato de saída
const { load, storySource, storySkeleton, PRIMARY, NAMES } = require("./lib");
const [target, kind, a, b] = process.argv.slice(2);
const D = load(target);
const prim = NAMES[PRIMARY(target)];
if (kind === "w") {
  const from = +a || 0, to = Math.min(b === undefined ? from + 99 : +b, D.words.length - 1);
  console.log(`# ${target}: palavras ${from} a ${to} de ${D.words.length - 1}. Colunas: índice | palavra | gênero | tradução (${prim}) | exemplo | tradução do exemplo (${prim}) | gancho original (${prim}, só referência)`);
  for (let i = from; i <= to; i++) { const r = D.words[i]; console.log([i, r[0], r[1] || "-", r[2], r[6], r[7], r[5]].join(" | ")); }
} else if (kind === "f" || kind === "t") {
  const L = kind === "f" ? D.frases : D.textos;
  console.log(`# ${target}: ${L.length} ${kind === "f" ? "frases" : "parágrafos"}. Para cada item: tema, texto estrangeiro, tradução (${prim}), e os blocos [estrangeiro => tradução].`);
  L.forEach((s, i) => {
    console.log(`\n[${i}] tema: ${s[0]}\n  ${s[1]}\n  = ${s[2]}`);
    s[3].forEach((c, j) => console.log(`    ${j}. ${c[0]}  =>  ${c[1]}`));
  });
} else if (kind === "m") {
  console.log(D.metodo);
} else if (kind === "h" && !a) {
  D.hist.forEach(h => console.log(h.id, "|", h.titulo, "|", Object.keys(h.cenas).length, "cenas"));
} else if (kind === "h") {
  const h = D.hist.find(x => x.id === a); if (!h) throw new Error("história não encontrada: " + a);
  console.log(JSON.stringify(storySource(h), null, 1));
} else if (kind === "skel") {
  const h = D.hist.find(x => x.id === a); if (!h) throw new Error("história não encontrada: " + a);
  console.log(JSON.stringify(storySkeleton(h), null, 1));
} else {
  console.log("uso: node tools/ov/source.js <alvo> w|f|t|m|h|skel ...");
}
