// Junta tools/hist-src-<lang>/*.js em data/historias-<lang>.js. Uso: node tools/build_historias_lang.js en
// Cada arquivo começa com VB_HIST.<lang>.push({ ... }); a ordem é a do arquivo ORDEM.txt (um id por linha) ou alfabética.
const fs = require("fs"), lang = process.argv[2], dir = `tools/hist-src-${lang}`;
let ids = fs.readdirSync(dir).filter(f => f.endsWith(".js")).map(f => f.slice(0, -3)).sort();
if (fs.existsSync(`${dir}/ORDEM.txt`)) { const o = fs.readFileSync(`${dir}/ORDEM.txt`, "utf8").split(/\s+/).filter(Boolean); ids = o.filter(i => ids.includes(i)).concat(ids.filter(i => !o.includes(i))); }
const out = [`// Histórias interativas (${lang}). Gerado por tools/build_historias_lang.js. Validar: node tools/check_historias.js --lang=${lang}`,
  `window.VB_HIST=window.VB_HIST||{};VB_HIST.${lang}=[];`];
ids.forEach(id => out.push(fs.readFileSync(`${dir}/${id}.js`, "utf8").trim()));
fs.writeFileSync(`data/historias-${lang}.js`, out.join("\n") + "\n");
console.log("ok", lang, ids.length, ids.join(", "));
