// Junta tools/hist-src/*.js em data/historias-de.js (ordem fixa abaixo).
const fs = require("fs");
const ORDER = ["ultima-estacao", "quarto-livre", "apartamento-4b", "trem-noturno", "primeira-semana", "velhos-amigos", "sinal-sete", "tempestade"];
const out = ["// Histórias interativas (alemão). Gerado por tools/build_historias.js a partir de tools/hist-src. Validar: node tools/check_historias.js",
  "window.VB_HIST=window.VB_HIST||{};VB_HIST.de=[];"];
ORDER.forEach(id => out.push(fs.readFileSync(`tools/hist-src/${id}.js`, "utf8").trim()));
fs.writeFileSync("data/historias-de.js", out.join("\n") + "\n");
console.log("ok", ORDER.length);
