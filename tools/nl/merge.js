// Junta tools/nl/<lang>/w-*.json em data/<lang>.js. Uso: node tools/nl/merge.js en
const fs = require("fs"), path = require("path"), lang = process.argv[2], dir = `tools/nl/${lang}`;
const parts = fs.readdirSync(dir).filter(f => /^w-\d+\.json$/.test(f)).sort((a, b) => parseInt(a.slice(2)) - parseInt(b.slice(2)));
const rows = []; parts.forEach(f => rows.push(...JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"))));
fs.writeFileSync(`data/${lang}.js`, `window.VB_DATA=window.VB_DATA||{};VB_DATA.${lang}=[\n` + rows.map(r => JSON.stringify(r)).join(",\n") + "\n];\n");
console.log("ok", lang, rows.length);
