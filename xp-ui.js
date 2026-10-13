/* XP visível em todos os jogos: selo de nível, "+N XP" flutuante e total da partida.
   Usa o mesmo armazenamento do modo Frases (vb-xp-<língua>) para não duplicar pontos. */
(function(){
  "use strict";
  const lvlAt = x => { let L = 1; while (x >= 50 * L * (L + 1)) L++; return L; };
  const lvlSpan = L => [50 * (L - 1) * L, 50 * L * (L + 1)];
  const total = () => { try { return Number((store.get("vb-xp-" + lang, null) || {}).total) || 0; } catch (e) { return 0; } };
  let sess = 0, combo = 0;
  const T = (k, d) => (window.t ? t(k, d) : d);

  function chipHTML(){
    const x = total(), L = lvlAt(x), [a, b] = lvlSpan(L), pc = Math.round((x - a) / (b - a) * 100);
    return `<span class="xp-star" aria-hidden="true">★</span><span class="xp-lv">${T("xp.lv","Nv")} ${L}</span><span class="xp-bar" aria-hidden="true"><i style="width:${pc}%"></i></span><span class="xp-n">${x.toLocaleString()} XP</span>`;
  }
  function render(){ document.querySelectorAll(".xp-chip").forEach(c => { c.innerHTML = chipHTML(); c.title = total() + " XP"; }); }
  function chip(){ const s = document.createElement("span"); s.className = "xp-chip"; s.setAttribute("aria-live", "polite"); s.innerHTML = chipHTML(); return s; }

  /* coloca o selo no topo das partidas (as telas são criadas sob demanda) */
  function mount(){
    [["game", ".g-top"], ["sgame", ".g-top"]].forEach(([id, sel]) => {
      const g = document.getElementById(id); if (!g) return;
      const top = g.querySelector(sel); if (!top || top.querySelector(".xp-chip")) return;
      const c = chip(); const close = top.querySelector(".g-x");
      if (close && close.nextSibling) top.insertBefore(c, close.nextSibling); else top.appendChild(c);
    });
    const q = document.getElementById("view-quiz");
    if (q && !q.querySelector(".xp-chip")) { const w = document.createElement("div"); w.className = "xp-row"; w.appendChild(chip()); const back = q.querySelector(".exercise-back"); back ? back.after(w) : q.prepend(w); }
  }

  let toastBox = null;
  function pop(n, extra){
    if (!toastBox) { toastBox = document.createElement("div"); toastBox.className = "xp-toasts"; toastBox.setAttribute("aria-hidden", "true"); document.body.appendChild(toastBox); }
    const el = document.createElement("div"); el.className = "xp-toast" + (extra ? " big" : "");
    el.textContent = extra || ("+" + n + " XP");
    toastBox.appendChild(el);
    setTimeout(() => el.remove(), extra ? 2200 : 1300);
  }

  function gained(n, before){
    if (!n) return;
    sess += n;
    pop(n);
    const after = lvlAt(total());
    if (after > before) setTimeout(() => pop(0, "★ " + T("xp.levelup","Nível") + " " + after + "!"), 350);
    render();
  }

  /* intercepta os pontos dados por Vocabulário, Quiz e Histórias */
  function hook(){
    if (!window.HYB || HYB.__xpHooked) return false;
    const a = HYB.addXP, x = HYB.xp;
    HYB.addXP = function(n, l){ const b = lvlAt(total()); const r = a.apply(this, arguments); if (!l || l === lang) gained(Math.max(0, Math.floor(Number(n) || 0)), b); return r; };
    HYB.xp = function(n){ const b = lvlAt(total()); const r = x.apply(this, arguments); gained(n, b); return r; };
    HYB.__xpHooked = true; return true;
  }

  window.VBXP = {
    /* pontos com combo para jogos de acerto/erro */
    answer(ok, base){
      combo = ok ? combo + 1 : 0;
      const mult = ok ? 1 + Math.min(Math.max(combo - 1, 0), 4) * 0.25 : 1;
      const n = Math.round((ok ? base : Math.max(2, Math.round(base / 4))) * mult);
      if (window.HYB && HYB.addXP) HYB.addXP(n, lang);
      return { n, combo, mult };
    },
    combo: () => combo,
    reset(){ sess = 0; combo = 0; },
    session: () => sess,
    sumHTML(){ return sess ? `<p class="xp-sum"><b>+${sess} XP</b> ${T("xp.thisgame","nesta partida")}</p>` : ""; },
    render, mount
  };

  hook();
  mount(); render();
  new MutationObserver(() => mount()).observe(document.body, { childList: true });
  window.addEventListener("vb-xp-updated", render);
  window.addEventListener("vb-lang-changed", render);
})();
