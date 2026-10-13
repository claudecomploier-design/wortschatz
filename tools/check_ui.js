// Verificações estáticas do aplicativo sem dependências externas.
// Uso: node tools/check_ui.js
const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const html = fs.readFileSync("index.html", "utf8");
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map(m => m[1]).filter(Boolean);
assert(scripts.length > 0, "Script principal ausente");
scripts.forEach((code, i) => new vm.Script(code, { filename: "index.html#script-" + i }));

const sourceFiles = ["frases.js", "historias.js", "xp-ui.js", "relatorio.js",
  "comunidade.js", "perfil-avatar.js", "forja-gato.js", "forja-acessorios.js"];
sourceFiles.forEach(file => {
  if (fs.existsSync(file)) new vm.Script(fs.readFileSync(file, "utf8"), { filename: file });
});

const ctx = { window: {} };
ctx.window.VB_DATA = {}; ctx.VB_DATA = ctx.window.VB_DATA;
for (const language of ["de", "it", "fr"]) {
  const file = "data/" + language + ".js";
  vm.runInNewContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
  const rows = ctx.VB_DATA[language];
  assert(Array.isArray(rows) && rows.length >= 900, language + ": vocabulário ausente");
  assert(rows.every(r => Array.isArray(r) && r.length === 8), language + ": formato de cartas inválido");
  console.log(language + ": " + rows.length + " cartas disponíveis");
}
assert(html.includes("createExerciseQuestions()"), "Quiz contextual não encontrado");
assert(!html.includes("EXERCISE_QUESTIONS"), "Quiz fixo em alemão ainda presente");
assert(html.includes("Racha: uma atividade concluída por dia"), "Regra da racha desatualizada");
console.log("UI e scripts: OK");
