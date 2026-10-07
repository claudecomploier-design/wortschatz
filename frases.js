/* Modo Frases: imersão por frases híbridas.
   Usa as palavras de data/<lang>.js (CARDS, ranking = posição) e o progresso dos flashcards (prog).
   Estado próprio em vb-hyb-<lang>. Frases em data/frases-<lang>.js (VB_FRASES[lang]). */
(function(){
  window.VB_FRASES = window.VB_FRASES || {};

  const T_NEW = 0.15, T_SHOW = 0.45, T_FAM = 0.75;   // faixas de familiaridade
  const MAX_TARGETS = 3, MAX_NEW = 2;                 // por frase
  const RECENT = 25;                                  // frases recentes não se repetem
  const LOG_MAX = 300;

  let H = null;          // estado do modo para a língua atual
  let rank = {};         // lema -> posição na lista das 1000
  let cur = null;        // frase atual montada
  let opened = false;    // tradução aberta nesta frase
  let peeked = new Set(); // blocos tocados para tradução rápida
  let loadedFor = null;

  /* ---------- estado ---------- */
  const key = () => "vb-hyb-" + lang;
  function load(){
    H = store.get(key(), null) || { tick: 0, w: {}, s: {}, log: [], recent: [] };
    rank = {}; CARDS.forEach((c, i) => { rank[c.id] = i; });
  }
  const save = () => store.set(key(), H);
  const W = id => H.w[id] || (H.w[id] = { h: 0, s: 0, t: 0, st: 0, d: 0, l: 0 });

  /* familiaridade 0..1: combina este modo com os flashcards */
  function fam(id){
    const w = H.w[id], p = prog[id];
    const h = w ? w.h : 0, b = p ? p.box : 0;
    return Math.max(h, (b / 5) * 0.9);
  }
  function stage(f){ return f < T_NEW ? "nova" : f < T_SHOW ? "aprendendo" : f < T_FAM ? "familiar" : "dominada"; }
  const introduced = id => (H.w[id] && H.w[id].s > 0) || !!prog[id];

  /* fronteira de frequência: até onde novas palavras podem entrar */
  function frontier(){
    let n = 0; for (const id in rank) if (introduced(id)) n++;
    return Math.min(CARDS.length, 30 + Math.round(n * 1.4));
  }

  /* ---------- escolha da frase ---------- */
  function lemmas(ch){ return ch[2] ? ch[2].split("|").filter(x => x in rank) : []; }

  function scoreSentence(s, idx, fr){
    const rec = H.recent.indexOf(idx);
    if (rec !== -1 && rec >= H.recent.length - RECENT) return -Infinity;
    let score = 0, newCnt = 0, usable = 0;
    const seen = new Set();
    for (const ch of s[3]) for (const id of lemmas(ch)) {
      if (seen.has(id)) continue; seen.add(id);
      const f = fam(id), w = H.w[id], r = rank[id];
      if (f >= T_SHOW) { score += f >= T_FAM ? 0.15 : 0.4; continue; }         // contexto conhecido
      if (introduced(id)) {                                                      // em aprendizagem
        const due = !w || w.d <= H.tick;
        score += due ? 3 + (w ? Math.min(w.t, 4) * 0.5 : 0) : 0.6; usable++;
      } else if (r < fr) { score += 1.2 * (1 - r / CARDS.length) + 0.4; newCnt++; usable++; }
      else score -= 0.3;                                                         // além da fronteira: fica em PT
    }
    if (!usable) return -50;
    if (newCnt > 3) score -= (newCnt - 3) * 1.5;
    const st = H.s[idx]; if (st) score -= Math.min(st.n, 6) * 0.6;
    return score + Math.random() * 0.8;                                          // variedade
  }

  function pick(){
    const list = VB_FRASES[lang] || [];
    if (!list.length) return null;
    const fr = frontier();
    let best = -Infinity, bi = -1;
    list.forEach((s, i) => { const sc = scoreSentence(s, i, fr); if (sc > best) { best = sc; bi = i; } });
    if (bi === -1) { bi = Math.floor(Math.random() * list.length); }
    return build(bi, fr);
  }

  /* monta a frase: decide quais blocos aparecem no idioma estrangeiro */
  function build(idx, fr){
    const s = VB_FRASES[lang][idx];
    const chunks = s[3].map(ch => {
      const ids = lemmas(ch);
      const unknown = ids.filter(id => fam(id) < T_SHOW);
      const learning = unknown.filter(id => introduced(id));
      const fresh = unknown.filter(id => !introduced(id));
      const tooFar = fresh.some(id => rank[id] >= fr);
      const due = learning.some(id => !H.w[id] || H.w[id].d <= H.tick);
      return { fl: ch[0], pt: ch[1], ids, unknown, fresh, tooFar, due, foreign: unknown.length === 0 && ids.length > 0 };
    });
    const targets = new Set(); let newCnt = 0;
    const order = chunks.filter(c => !c.foreign && !c.tooFar && c.ids.length)
      .sort((a, b) => (b.due - a.due) || (a.unknown.length - b.unknown.length) ||
        (Math.min(...a.ids.map(i => rank[i])) - Math.min(...b.ids.map(i => rank[i]))));
    for (const c of order) {
      const add = c.unknown.filter(id => !targets.has(id));
      const addNew = add.filter(id => !introduced(id)).length;
      if (targets.size + add.length > MAX_TARGETS || newCnt + addNew > MAX_NEW) continue;
      add.forEach(id => targets.add(id)); newCnt += addNew; c.foreign = true;
    }
    for (const c of chunks) if (!c.foreign && c.unknown.length && c.unknown.every(id => targets.has(id))) c.foreign = true;
    if (!chunks.some(c => c.foreign)) {                 // garante ao menos um bloco
      const c = chunks.filter(c => c.ids.length).sort((a, b) => a.unknown.length - b.unknown.length)[0];
      if (c) { c.foreign = true; c.unknown.forEach(id => targets.add(id)); }
    }
    const allForeign = chunks.every(c => c.foreign || !c.ids.length);
    const nF = chunks.filter(c => c.foreign).length;
    return { idx, theme: s[0], fl: s[1], pt: s[2], chunks, targets: [...targets], allForeign,
             ratio: allForeign ? 1 : nF / chunks.length };
  }

  /* ---------- registro ---------- */
  function commit(){
    if (!cur) return;
    H.tick++;
    const shown = new Set(); cur.chunks.forEach(c => { if (c.foreign) c.ids.forEach(id => shown.add(id)); });
    if (cur.allForeign) cur.chunks.forEach(c => c.ids.forEach(id => shown.add(id)));
    const tg = new Set(cur.targets);
    const peekIds = new Set(); peeked.forEach(i => cur.chunks[i].ids.forEach(id => peekIds.add(id)));
    shown.forEach(id => {
      const w = W(id); w.s++; w.l = Date.now();
      if (!opened && peekIds.has(id)) {                          // tocou só nesse trecho: dificuldade pontual
        w.t++; w.st = 0;
        w.h = Math.max(0, w.h - (tg.has(id) ? 0.1 : 0.05));
        w.d = H.tick + 2 + Math.floor(Math.random() * 3);
      } else if (opened) {
        w.t++; w.st = 0;
        w.h = Math.max(0, w.h - (tg.has(id) ? 0.12 : 0.06));
        w.d = H.tick + 2 + Math.floor(Math.random() * 3);        // volta logo, em outra frase
      } else {
        w.st++;
        const cap = w.s < 3 ? 0.44 : (w.s < 6 || w.st < 3) ? 0.74 : 1;   // um contato não prova domínio
        w.h = Math.min(cap, w.h + (tg.has(id) ? 0.12 : 0.05));
        w.d = H.tick + Math.round(3 * Math.pow(2, Math.min(w.st, 6)));   // espaçamento cresce
      }
    });
    const st = H.s[cur.idx] || (H.s[cur.idx] = { n: 0, o: 0, l: 0 });
    st.n++; if (opened) st.o++; st.l = H.tick;
    H.recent.push(cur.idx); if (H.recent.length > 60) H.recent.splice(0, H.recent.length - 60);
    H.log.push({ i: cur.idx, k: H.tick, r: Math.round(cur.ratio * 100), o: opened ? 1 : 0, p: peeked.size, tg: cur.targets });
    if (H.log.length > LOG_MAX) H.log.splice(0, H.log.length - LOG_MAX);
    save();
    if (typeof addActivity === "function") addActivity();
  }

  /* ---------- tela ---------- */
  function sentenceHTML(c){
    return c.chunks.map((ch, i) => (ch.foreign || c.allForeign)
      ? `<button type="button" class="hy-fl${!c.allForeign && ch.ids.some(id => c.targets.includes(id)) ? " hy-tg" : ""}${peeked.has(i) ? " hy-peeked" : ""}" data-ci="${i}" aria-label="Traduzir: ${esc(ch.fl)}">${esc(ch.fl)}</button>`
      : `<span class="hy-pt">${esc(ch.pt)}</span>`).join(" ")
      .replace(/ ([,.!?;:])/g, "$1");
  }
  const clean = t => t.replace(/[,.!?;:]+$/, "").replace(/^[¿¡]/, "");
  function peekHTML(c){
    if (!peeked.size || opened) return "";
    const rows = [...peeked].sort((a, b) => a - b).map(i => {
      const ch = c.chunks[i];
      const words = ch.ids.filter(id => clean(ch.fl).toLowerCase() !== id.toLowerCase())
        .map(id => { const card = CARDS[rank[id]]; return card ? `<span>${esc(id)}: ${esc(card.pt)}</span>` : ""; }).join("");
      return `<li><b>${esc(clean(ch.fl))}</b> <i>→</i> ${esc(clean(ch.pt))}${words ? `<small>${words}</small>` : ""}</li>`;
    }).join("");
    return `<ul class="hy-peek" aria-live="polite">${rows}</ul>`;
  }
  function glossHTML(c){
    const seen = new Set(), rows = [];
    c.chunks.forEach(ch => {
      if (!(ch.foreign || c.allForeign) || !ch.ids.length || seen.has(ch.fl)) return;
      seen.add(ch.fl);
      const isT = ch.ids.some(id => c.targets.includes(id));
      if (!isT && rows.length >= 4) return;
      rows.push(`<li${isT ? ' class="hy-new"' : ""}><span>${esc(ch.fl.replace(/[,.!?;:]+$/, ""))}</span><span>${esc(ch.pt.replace(/[,.!?;:]+$/, ""))}</span></li>`);
    });
    return rows.length ? `<ul class="hy-gloss">${rows.join("")}</ul>` : "";
  }
  function progressLine(){
    let fam_ = 0, dom = 0, learn = 0;
    for (const id in H.w) { const f = fam(id); if (f >= T_FAM) dom++; else if (f >= T_SHOW) fam_++; else if (H.w[id].s) learn++; }
    const last = H.log.slice(-20); const pct = last.length ? Math.round(last.reduce((a, b) => a + b.r, 0) / last.length) : 0;
    return { pct, learn, fam_, dom };
  }

  function render(){
    const el = $("frases"); if (!el) return;
    if (!VB_FRASES[lang] || !VB_FRASES[lang].length) {
      el.innerHTML = `<div class="hy-empty"><p>As frases de ${LANGS[lang].name.toLowerCase()} ainda estão sendo preparadas.</p></div>`; return;
    }
    if (!cur) { cur = pick(); opened = false; peeked = new Set(); }
    const p = progressLine();
    el.innerHTML = `
      <div class="hy-top" aria-label="Progresso">
        <span>${p.pct}% em ${LANGS[lang].name.toLowerCase()} nas últimas frases</span>
        <span>${p.learn} aprendendo · ${p.fam_} familiares · ${p.dom} dominadas</span>
      </div>
      <div class="hy-bar"><i style="width:${p.pct}%"></i></div>
      <figure class="hy-stage">
        <blockquote class="hy-sent" lang="${lang}">${sentenceHTML(cur)}</blockquote>
        ${peekHTML(cur)}
        ${opened ? `<figcaption class="hy-trans"><p class="hy-full">${esc(cur.pt)}</p>${cur.allForeign ? "" : `<p class="hy-orig" lang="${lang}">${esc(cur.fl)}</p>`}${glossHTML(cur)}</figcaption>` : ""}
      </figure>
      <div class="hy-actions">
        ${opened ? "" : `<button class="btn" id="hy-show">Mostrar tradução</button>`}
        <button class="btn ${opened ? "primary" : "hy-next"}" id="hy-next">Próxima frase</button>
        <button class="btn small hy-say" id="hy-say" aria-label="Ouvir a frase em ${LANGS[lang].name.toLowerCase()}">Ouvir</button>
      </div>`;
    const sh = $("hy-show"); if (sh) sh.onclick = () => { opened = true; render(); };
    $("hy-next").onclick = () => { commit(); cur = null; peeked = new Set(); render(); };
    el.querySelectorAll(".hy-sent [data-ci]").forEach(b => b.onclick = () => {
      const i = +b.dataset.ci; if (peeked.has(i)) peeked.delete(i); else peeked.add(i); render();
    });
    $("hy-say").onclick = () => speak(cur.fl);
  }

  function ensureData(cb){
    if (VB_FRASES[lang]) return cb();
    const s = document.createElement("script");
    s.src = `data/frases-${lang}.js?v=1`; s.onload = cb;
    s.onerror = () => { VB_FRASES[lang] = VB_FRASES[lang] || []; cb(); };
    document.head.appendChild(s);
  }

  window.HYB = {
    open(){ ensureData(() => { if (loadedFor !== lang) { load(); loadedFor = lang; cur = null; } render(); }); },
    onLang(){ loadedFor = null; cur = null; peeked = new Set(); if (!$("view-frases").hidden) this.open(); },
    /* para depuração no console */
    _state(){ return { H, cur, frontier: frontier() }; },
    _fam: id => ({ f: fam(id), stage: stage(fam(id)) })
  };
})();
