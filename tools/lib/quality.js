// Detecta conteúdo de modelo (ganchos, pronúncias e exemplos repetidos com só a palavra trocada).
const strip = (s, words) => {
  let t = String(s || "").toLowerCase();
  words.filter(Boolean).forEach(w => { String(w).toLowerCase().split(/\s*\/\s*|,\s*/).filter(x => x.length > 1).forEach(p => { t = t.split(p).join("X"); }); });
  return t.replace(/[«»"“”'‘’][^«»"“”'‘’]{0,40}[«»"“”'‘’]/g, "Q").replace(/\d+/g, "N").replace(/\s+/g, " ").trim();
};
function skeletons(items, max, label){
  const m = new Map();
  items.forEach(([text, words, tag]) => { const k = strip(text, words); if (k.length < 12) return; if (!m.has(k)) m.set(k, []); m.get(k).push(tag); });
  const out = [];
  for (const [k, tags] of m) if (tags.length > max) out.push(`${label} repetido ${tags.length}x (máx. ${max}): "${k.slice(0, 90)}" em ${tags.slice(0, 6).join(", ")}${tags.length > 6 ? "..." : ""}`);
  return out;
}
const BANNED_PRON = /áudio|audio|confirme|confira|aproximad|approximate|ouça|listen|escucha|ascolta|écoute|anhören/i;
const BANNED_TEXT = /learned the word|aprendi a (palavra|expressão)|la palabra «|la palabra "|a palavra «|a palavra "|the word "|aparece aqu|hoje aprendemos|hoy hablamos de|is important\.$|es importante\.$|é importante\.$|is useful\.$|é útil\.$|imagine essa cena|associe «|ligue a palavra|imagine uma etiqueta|quando pensar em «|compare a forma|picture \w+ and label|associate the portuguese|aparece com frequência|imagine a situation involving/i;
module.exports = { skeletons, BANNED_PRON, BANNED_TEXT };
