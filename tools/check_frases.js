// Uso: node tools/check_frases.js de [frases|textos]
// Confere: lemas existem na lista das 1000; blocos estrangeiros reconstroem a frase; estatísticas de cobertura.
const fs = require("fs"), vm = require("vm");
const lang = process.argv[2], kind = process.argv[3] || "frases";
const ctx = { window: {} }; ctx.window.VB_DATA = {}; ctx.window.VB_FRASES = {}; ctx.window.VB_TEXTOS = {};
ctx.VB_DATA = ctx.window.VB_DATA; ctx.VB_FRASES = ctx.window.VB_FRASES; ctx.VB_TEXTOS = ctx.window.VB_TEXTOS;
vm.runInNewContext(fs.readFileSync(`data/${lang}.js`, "utf8"), ctx);
vm.runInNewContext(fs.readFileSync(`data/${kind}-${lang}.js`, "utf8"), ctx);
const words = ctx.VB_DATA[lang], list = (kind === "textos" ? ctx.VB_TEXTOS : ctx.VB_FRASES)[lang];
const rank = {}; words.forEach((r, i) => rank[r[0]] = i);
const norm = t => t.replace(/\s+/g, " ").replace(/ ([,.!?;:])/g, "$1").trim();
let bad = 0; const used = new Map(); const fls = new Set();
list.forEach((s, i) => {
  const [theme, fl, pt, ch] = s;
  if (fls.has(fl)) { console.log(`#${i} frase repetida: ${fl}`); bad++; } fls.add(fl);
  const join = norm(ch.map(c => c[0]).join(" "));
  if (join !== norm(fl)) { console.log(`#${i} blocos != frase\n   ${join}\n   ${fl}`); bad++; }
  ch.forEach(c => {
    if (c.length !== 3) { console.log(`#${i} bloco mal formado`, c); bad++; return; }
    (c[2] ? c[2].split("|") : []).forEach(l => {
      if (!(l in rank)) { console.log(`#${i} lema ausente: "${l}" em "${c[0]}"`); bad++; }
      else used.set(l, (used.get(l) || 0) + 1);
    });
  });
});
const ranks = [...used.keys()].map(l => rank[l]).sort((a, b) => a - b);
const top = n => ranks.filter(r => r < n).length;
const nb = list.map(s => s[3].length), nw = list.map(s => s[1].split(/\s+/).length);
console.log(`blocos por item: ${Math.min(...nb)} a ${Math.max(...nb)}; palavras por item: ${Math.min(...nw)} a ${Math.max(...nw)} (média ${Math.round(nw.reduce((a,b)=>a+b,0)/nw.length)})`);
console.log(`${lang} ${kind}: ${list.length} itens, ${used.size} palavras distintas, problemas: ${bad}`);
console.log(`cobertura: top100=${top(100)} top300=${top(300)} top600=${top(600)} top1000=${top(1000)}`);
process.exit(bad ? 1 : 0);
