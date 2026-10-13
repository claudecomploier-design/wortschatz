// Carrega trechos do app (index.html) no Node para os validadores: article, gapOf, STOPW, ARTS, CLOZE_FIX.
const fs = require("fs"), vm = require("vm"), path = require("path");
module.exports = function appCtx(lang){
  const root = path.join(__dirname, "..", "..");
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const js = html.split("<script>")[1].split("</script>")[0];
  const a = js.indexOf("const LANGS="), b = js.indexOf("window.VB_DATA=window.VB_DATA||{};");
  const c = js.indexOf("/* ===== artigo ===== */"), d = js.indexOf("function full(c){");
  const ctx = { window: {}, console };
  vm.createContext(ctx);
  vm.runInContext(js.slice(a, b).replace(/^const /gm, "var "), ctx);
  vm.runInContext(`var lang=${JSON.stringify(lang)};const esc=x=>String(x);` + js.slice(c, d).replace(/^const /gm, "var "), ctx);
  return ctx;
};
