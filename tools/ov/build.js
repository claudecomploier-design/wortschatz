// Monta data/ov/<alvo>-<base>.js (palavras, frases, parágrafos, método) e data/ov/h-<alvo>-<base>.js (histórias)
// a partir de tools/ov-src/<alvo>-<base>/. Uso: node tools/ov/build.js <alvo> <base>   ou   node tools/ov/build.js all
const fs = require("fs"), path = require("path");
const { P, load, readJSON, PRIMARY } = require("./lib");
const LANGS = ["pt", "en", "es", "de", "it", "fr"];
function build(target, base){
  const dir = P("tools/ov-src", `${target}-${base}`);
  if (!fs.existsSync(dir)) return false;
  const D = load(target), key = `${target}-${base}`;
  const out = {};
  const parts = fs.readdirSync(dir).filter(f => /^w-\d+\.json$/.test(f)).sort((a, b) => parseInt(a.slice(2)) - parseInt(b.slice(2)));
  if (parts.length) { out.w = []; parts.forEach(f => { const s = parseInt(f.slice(2)); readJSON(path.join(dir, f)).forEach((r, k) => out.w[s + k] = r); }); out.w.length = Math.min(out.w.length, D.words.length); }
  if (fs.existsSync(path.join(dir, "f.json"))) out.f = readJSON(path.join(dir, "f.json"));
  if (fs.existsSync(path.join(dir, "t.json"))) out.t = readJSON(path.join(dir, "t.json"));
  if (fs.existsSync(path.join(dir, "m.html"))) out.m = fs.readFileSync(path.join(dir, "m.html"), "utf8");
  fs.mkdirSync(P("data/ov"), { recursive: true });
  fs.writeFileSync(P("data/ov", `${key}.js`), `window.VB_OV=window.VB_OV||{};VB_OV[${JSON.stringify(key)}]=${JSON.stringify(out)};\n`);
  const hdir = path.join(dir, "h");
  if (fs.existsSync(hdir)) {
    const H = {};
    fs.readdirSync(hdir).filter(f => f.endsWith(".json")).forEach(f => H[f.slice(0, -5)] = readJSON(path.join(hdir, f)));
    fs.writeFileSync(P("data/ov", `h-${key}.js`), `window.VB_OVH=window.VB_OVH||{};VB_OVH[${JSON.stringify(key)}]=${JSON.stringify(H)};\n`);
  }
  console.log("ok", key, Object.keys(out).join(","), fs.existsSync(hdir) ? "h" : "");
  return true;
}
const [t, b] = process.argv.slice(2);
if (t === "all") LANGS.forEach(x => LANGS.forEach(y => { if (y !== x && y !== PRIMARY(x)) build(x, y); }));
else build(t, b);
