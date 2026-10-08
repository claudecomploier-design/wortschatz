/* Modo Frases: imersão por frases híbridas.
   Usa as palavras de data/<lang>.js (CARDS, ranking = posição) e o progresso dos flashcards (prog).
   Estado próprio em vb-hyb-<lang>. Frases em data/frases-<lang>.js (VB_FRASES[lang]).
   Lobby na aba Frases; partida de 10 frases em tela própria (#hgame).
   Proporção (vb-ratio): "auto" (adaptativa) ou 30/50/70/100 (% do idioma estrangeiro). Compartilhada com as cartas. */
(function(){
  window.VB_FRASES = window.VB_FRASES || {};

  const T_NEW = 0.15, T_SHOW = 0.45, T_FAM = 0.75;   // faixas de familiaridade
  const MAX_TARGETS = 3, MAX_NEW = 2;                 // por frase (modo automático)
  const RECENT = 25;                                  // frases recentes não se repetem
  const LOG_MAX = 300, ROUND = 10;                    // frases por partida
  const RATIOS = ["auto", 30, 50, 70, 100];

  let H = null;           // estado do modo para a língua atual
  let rank = {};          // lema -> posição na lista das 1000
  let cur = null;         // frase atual montada
  let opened = false;     // tradução aberta nesta frase
  let peeked = new Set(); // blocos tocados para tradução rápida
  let loadedFor = null;
  let playing = false, ses = null;

  /* ---------- proporção (compartilhada com as cartas) ---------- */
  let ratio = store.get("vb-ratio", "auto"); if (!RATIOS.includes(ratio)) ratio = "auto";
  const ratioName = r => r === "auto" ? "Automático" : `${r}%`;
  function ratioDesc(r){
    const L = LANGS[lang].name.toLowerCase();
    return r === "auto" ? `O app decide pelo seu nível: começa quase tudo em português e vai trocando por ${L} conforme você aprende.`
      : r === 100 ? `Frases inteiras em ${L}. Toque num trecho para traduzir.`
      : `Cerca de ${r}% de cada frase em ${L} e ${100 - r}% em português.`;
  }

  /* ---------- estado ---------- */
  const key = () => "vb-hyb-" + lang;
  function load(){
    H = store.get(key(), null) || { tick: 0, w: {}, s: {}, log: [], recent: [] };
    rank = {}; CARDS.forEach((c, i) => { rank[c.id] = i; });
    loadedFor = lang;
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
      else score -= 0.3;                                                         // além da fronteira
    }
    if (!usable) return ratio === "auto" ? -50 : -5;                            // nos fixos, frases conhecidas também servem
    if (newCnt > 3) score -= (newCnt - 3) * (ratio === "auto" ? 1.5 : 0.6);
    const st = H.s[idx]; if (st) score -= Math.min(st.n, 6) * 0.6;
    if (ratio !== "auto" && ratio < 100) {                                      // modo fixo: frase precisa permitir a % pedida
      const n = s[3].filter(ch => lemmas(ch).length).length;
      const ach = n ? Math.max(1, Math.round(n * ratio / 100)) / n : 0;
      score -= Math.abs(ach - ratio / 100) * 12;
    }
    return score + Math.random() * 0.8;                                          // variedade
  }

  function pick(){
    const list = VB_FRASES[lang] || [];
    if (!list.length) return null;
    const fr = frontier();
    let best = -Infinity, bi = -1;
    list.forEach((s, i) => { const sc = scoreSentence(s, i, fr); if (sc > best) { best = sc; bi = i; } });
    if (bi === -1) bi = Math.floor(Math.random() * list.length);
    return ratio === "auto" ? build(bi, fr) : buildFixed(bi, ratio);
  }

  function chunkInfo(s, fr){
    return s[3].map(ch => {
      const ids = lemmas(ch);
      const unknown = ids.filter(id => fam(id) < T_SHOW);
      const learning = unknown.filter(id => introduced(id));
      const fresh = unknown.filter(id => !introduced(id));
      const tooFar = fresh.some(id => rank[id] >= fr);
      const due = learning.some(id => !H.w[id] || H.w[id].d <= H.tick);
      const avg = ids.length ? ids.reduce((a, id) => a + fam(id), 0) / ids.length : 0;
      return { fl: ch[0], pt: ch[1], ids, unknown, fresh, tooFar, due, avg, foreign: unknown.length === 0 && ids.length > 0 };
    });
  }
  function finish(idx, s, chunks, targets){
    const content = chunks.filter(c => c.ids.length);
    const allForeign = content.every(c => c.foreign);
    const nF = content.filter(c => c.foreign).length;
    return { idx, theme: s[0], fl: s[1], pt: s[2], chunks, targets: [...targets], allForeign,
             ratio: allForeign ? 1 : (content.length ? nF / content.length : 0) };
  }

  /* modo automático: decide pelo conhecimento de cada palavra */
  function build(idx, fr){
    const s = VB_FRASES[lang][idx];
    const chunks = chunkInfo(s, fr);
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
    return finish(idx, s, chunks, targets);
  }

  /* proporção fixa: escolhe os blocos mais adequados até atingir a % pedida */
  function buildFixed(idx, r, forceId){
    const s = VB_FRASES[lang][idx];
    const chunks = chunkInfo(s, frontier());
    const content = chunks.filter(c => c.ids.length);
    const want = r >= 100 ? content.length : Math.max(1, Math.round(content.length * r / 100));
    content.forEach(c => c.foreign = false);
    const forced = forceId ? content.filter(c => c.ids.includes(forceId)) : [];
    const rest = content.filter(c => !forced.includes(c))
      .sort((a, b) => (b.due - a.due) || (b.avg - a.avg) || (a.tooFar - b.tooFar) ||
        (Math.min(...a.ids.map(i => rank[i])) - Math.min(...b.ids.map(i => rank[i]))));
    [...forced, ...rest].slice(0, Math.max(want, forced.length)).forEach(c => c.foreign = true);
    if (r >= 100) chunks.forEach(c => c.foreign = true);
    const targets = new Set(); chunks.forEach(c => { if (c.foreign) c.unknown.forEach(id => targets.add(id)); });
    if (forceId) targets.add(forceId);
    return finish(idx, s, chunks, targets);
  }

  /* ---------- registro ---------- */
  function commit(){
    if (!cur) return;
    H.tick++;
    const shown = new Set(); cur.chunks.forEach(c => { if (c.foreign || cur.allForeign) c.ids.forEach(id => shown.add(id)); });
    const tg = new Set(cur.targets);
    const peekIds = new Set(); peeked.forEach(i => cur.chunks[i].ids.forEach(id => peekIds.add(id)));
    shown.forEach(id => {
      const w = W(id); w.s++; w.l = Date.now();
      if (!opened && peekIds.has(id)) {                          // tocou só nesse trecho: dificuldade pontual
        w.t++; w.st = 0;
        w.h = Math.max(0, w.h - (tg.has(id) ? 0.1 : 0.05));
        w.d = H.tick + 2 + Math.floor(Math.random() * 3);
        if (ses) ses.help[id] = (ses.help[id] || 0) + 1;
      } else if (opened) {
        w.t++; w.st = 0;
        w.h = Math.max(0, w.h - (tg.has(id) ? 0.12 : 0.06));
        w.d = H.tick + 2 + Math.floor(Math.random() * 3);        // volta logo, em outra frase
        if (ses && tg.has(id)) ses.help[id] = (ses.help[id] || 0) + 1;
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
    H.log.push({ i: cur.idx, k: H.tick, r: Math.round(cur.ratio * 100), o: opened ? 1 : 0, p: peeked.size, m: ratio, tg: cur.targets });
    if (H.log.length > LOG_MAX) H.log.splice(0, H.log.length - LOG_MAX);
    save();
    if (ses) { ses.n++; if (opened) ses.opened++; ses.peeks += peeked.size; ses.r += cur.ratio; }
    if (typeof addActivity === "function") addActivity();
  }

  /* ---------- pedaços de tela ---------- */
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
      rows.push(`<li${isT ? ' class="hy-new"' : ""}><span>${esc(clean(ch.fl))}</span><span>${esc(clean(ch.pt))}</span></li>`);
    });
    return rows.length ? `<ul class="hy-gloss">${rows.join("")}</ul>` : "";
  }
  function counts(){
    let fam_ = 0, dom = 0, learn = 0;
    for (const id in H.w) { const f = fam(id); if (f >= T_FAM) dom++; else if (f >= T_SHOW) fam_++; else if (H.w[id].s) learn++; }
    const last = H.log.slice(-20); const pct = last.length ? Math.round(last.reduce((a, b) => a + b.r, 0) / last.length) : 0;
    return { pct, learn, fam_, dom };
  }
  function ratioPicker(idp){
    return `<div class="hy-ratio" role="radiogroup" aria-label="Proporção de ${esc(LANGS[lang].name.toLowerCase())}">${
      RATIOS.map(r => `<button type="button" role="radio" aria-checked="${r === ratio}" data-ratio="${r}" id="${idp}-${r}" aria-label="${ratioName(r)}">${r === "auto" ? "Auto" : ratioName(r)}</button>`).join("")
    }</div><p class="hintline hy-ratio-desc">${esc(ratioDesc(ratio))}</p>`;
  }
  function bindRatio(root, after){
    root.querySelectorAll("[data-ratio]").forEach(b => b.onclick = () => {
      const v = b.dataset.ratio === "auto" ? "auto" : +b.dataset.ratio;
      setRatio(v); after();
    });
  }
  function setRatio(v){
    ratio = RATIOS.includes(v) ? v : "auto"; store.set("vb-ratio", ratio);
    if (typeof window.onRatioChange === "function") window.onRatioChange(ratio);
  }

  /* ---------- lobby (aba Frases) ---------- */
  function renderLobby(){
    const el = $("frases"); if (!el) return;
    if (!VB_FRASES[lang] || !VB_FRASES[lang].length) {
      el.innerHTML = `<div class="hy-empty"><p>As frases de ${LANGS[lang].name.toLowerCase()} ainda estão sendo preparadas.</p></div>`; return;
    }
    const p = counts(), L = LANGS[lang].name.toLowerCase();
    el.innerHTML = `
      <div class="card start hy-lobby">
        <h2>Frases em ${esc(L)}</h2>
        <p class="hintline">Leia frases que misturam português e ${esc(L)}. Sem testes: entenda pelo contexto, toque num trecho se precisar e siga em frente.</p>
        <div class="hy-lb-stats">
          <div><b>${p.learn}</b><span>aprendendo</span></div>
          <div><b>${p.fam_}</b><span>familiares</span></div>
          <div><b>${p.dom}</b><span>dominadas</span></div>
          <div><b>${p.pct}%</b><span>em ${esc(L)} nas últimas</span></div>
        </div>
        <h3 class="hy-lb-h">Quanto de ${esc(L)} por frase</h3>
        ${ratioPicker("hl")}
        <button class="btn play" id="hy-play">Jogar ${ROUND} frases</button>
      </div>`;
    bindRatio(el, renderLobby);
    $("hy-play").onclick = startGame;
  }

  /* ---------- partida ---------- */
  function ensureGameShell(){
    if ($("hgame")) return;
    const sec = document.createElement("section");
    sec.className = "game hgame"; sec.id = "hgame"; sec.hidden = true; sec.setAttribute("aria-label", "Partida de frases");
    sec.innerHTML = `<div class="game-in">
      <div class="g-top">
        <button class="g-x" id="hg-close" aria-label="Sair da partida e voltar ao lobby">×</button>
        <span class="hg-prog" id="hg-prog" aria-live="polite"></span>
        <span class="g-chip" id="hg-mode" title="Proporção"></span>
      </div>
      <div class="hg-bar"><i id="hg-bar"></i></div>
      <section class="hy" id="hy-play-area" aria-live="polite"></section>
    </div>`;
    document.body.appendChild(sec);
    $("hg-close").onclick = closeGame;
    document.addEventListener("keydown", e => { if (e.key === "Escape" && playing) closeGame(); });
  }
  function startGame(){
    ensureGameShell();
    ses = { n: 0, opened: 0, peeks: 0, r: 0, help: {} };
    playing = true; cur = null; opened = false; peeked = new Set();
    $("hgame").hidden = false; document.body.classList.add("playing"); $("hgame").scrollTop = 0;
    renderGame(); setTimeout(() => { try { $("hg-close").focus({ preventScroll: true }); } catch (e) {} }, 50);
  }
  function closeGame(){
    playing = false; ses = null; cur = null;
    if ($("hgame")) $("hgame").hidden = true;
    document.body.classList.remove("playing");
    renderLobby();
  }
  function renderGame(){
    const el = $("hy-play-area"); if (!el) return;
    const L = LANGS[lang].name.toLowerCase();
    $("hg-mode").textContent = ratioName(ratio) + (ratio === "auto" ? "" : ` ${LANGS[lang].code}`);
    $("hg-prog").textContent = ses.n < ROUND ? `Frase ${ses.n + 1} de ${ROUND}` : "Resumo";
    $("hg-bar").style.width = Math.min(100, ses.n / ROUND * 100) + "%";
    if (ses.n >= ROUND) { renderSummary(el); return; }
    if (!cur) { cur = pick(); opened = false; peeked = new Set(); }
    el.innerHTML = `
      <figure class="hy-stage">
        <blockquote class="hy-sent" lang="${lang}">${sentenceHTML(cur)}</blockquote>
        ${peekHTML(cur)}
        ${opened ? `<figcaption class="hy-trans"><p class="hy-full">${esc(cur.pt)}</p>${cur.allForeign ? "" : `<p class="hy-orig" lang="${lang}">${esc(cur.fl)}</p>`}${glossHTML(cur)}</figcaption>` : ""}
      </figure>
      <p class="hintline hy-tip">${opened ? "" : "Toque num trecho em " + esc(L) + " para traduzir só ele."}</p>
      <div class="hy-actions">
        ${opened ? "" : `<button class="btn" id="hy-show">Mostrar tradução</button>`}
        <button class="btn ${opened ? "primary" : "hy-next"}" id="hy-next">${ses.n + 1 >= ROUND ? "Concluir" : "Próxima frase"}</button>
        <button class="btn small hy-say" id="hy-say" aria-label="Ouvir a frase em ${esc(L)}">Ouvir</button>
      </div>`;
    const sh = $("hy-show"); if (sh) sh.onclick = () => { opened = true; renderGame(); };
    $("hy-next").onclick = () => { commit(); cur = null; peeked = new Set(); renderGame(); $("hgame").scrollTop = 0; };
    el.querySelectorAll(".hy-sent [data-ci]").forEach(b => b.onclick = () => {
      const i = +b.dataset.ci; if (peeked.has(i)) peeked.delete(i); else peeked.add(i); renderGame();
    });
    $("hy-say").onclick = () => speak(cur.fl);
  }
  function renderSummary(el){
    const L = LANGS[lang].name.toLowerCase();
    const avg = ses.n ? Math.round(ses.r / ses.n * 100) : 0;
    const hard = Object.entries(ses.help).sort((a, b) => b[1] - a[1]).slice(0, 5)
      .map(([id]) => { const c = CARDS[rank[id]]; return c ? `<li><b lang="${lang}">${esc(id)}</b><span>${esc(c.pt)}</span></li>` : ""; }).join("");
    el.innerHTML = `
      <div class="card done hy-sum">
        <h2>Partida concluída!</h2>
        <div class="hy-lb-stats">
          <div><b>${ses.n}</b><span>frases lidas</span></div>
          <div><b>${avg}%</b><span>em ${esc(L)}</span></div>
          <div><b>${ses.opened}</b><span>traduções abertas</span></div>
          <div><b>${ses.peeks}</b><span>trechos tocados</span></div>
        </div>
        ${hard ? `<h3 class="hy-lb-h">Vão voltar logo, em outras frases</h3><ul class="hy-hard">${hard}</ul>` : `<p class="hintline">Você não precisou de ajuda. As palavras dessas frases ganharam familiaridade.</p>`}
        <h3 class="hy-lb-h">Proporção da próxima partida</h3>
        ${ratioPicker("hs")}
        <div class="more">
          <button class="btn primary" id="hy-again">Jogar mais ${ROUND} frases</button>
          <button class="btn" id="hy-tolobby">Voltar ao lobby</button>
        </div>
      </div>`;
    bindRatio(el, () => renderSummary(el));
    $("hy-again").onclick = () => { ses = { n: 0, opened: 0, peeks: 0, r: 0, help: {} }; cur = null; renderGame(); $("hgame").scrollTop = 0; };
    $("hy-tolobby").onclick = closeGame;
  }

  /* ---------- dados ---------- */
  function ensureData(cb){
    if (VB_FRASES[lang]) return cb();
    const s = document.createElement("script");
    s.src = `data/frases-${lang}.js?v=1`; s.onload = cb;
    s.onerror = () => { VB_FRASES[lang] = VB_FRASES[lang] || []; cb(); };
    document.head.appendChild(s);
  }
  function prepare(cb){ ensureData(() => { if (loadedFor !== lang && CARDS.length) load(); if (cb) cb(); }); }

  /* frase de exemplo misturada para uma carta (usada pelo Treinar) */
  const hashStr = t => { let h = 0; for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) | 0; return Math.abs(h); };
  function hybridFor(id, r){
    if (!H || loadedFor !== lang || !VB_FRASES[lang] || !(id in rank)) return null;
    const cand = []; VB_FRASES[lang].forEach((s, i) => { if (s[3].some(ch => lemmas(ch).includes(id))) cand.push(i); });
    if (!cand.length) return null;
    const nC = i => VB_FRASES[lang][i][3].filter(ch => lemmas(ch).length).length;
    cand.sort((a, b) => nC(b) - nC(a));                      // frases com mais blocos misturam melhor
    const top = cand.slice(0, Math.min(3, cand.length));
    const idx = top[hashStr(id + (typeof dayKey === "function" ? dayKey() : "")) % top.length];
    const b = buildFixed(idx, r === "auto" ? 50 : r, id);
    return { fl: b.fl, pt: b.pt, chunks: b.chunks.map(c => ({ fl: c.fl, pt: c.pt, foreign: c.foreign || b.allForeign, target: c.ids.includes(id) })) };
  }

  window.HYB = {
    open(){ prepare(() => renderLobby()); },
    prepare,
    onLang(){ loadedFor = null; cur = null; peeked = new Set(); if (playing) closeGame(); prepare(() => { if (!$("view-frases").hidden) renderLobby(); }); },
    ratio: () => ratio,
    setRatio(v){ setRatio(v); if (!$("view-frases").hidden && !playing) renderLobby(); },
    ratioName, ratioDesc, RATIOS,
    hybridFor,
    playing: () => playing,
    /* para depuração e testes */
    _state(){ return { H, cur, frontier: frontier(), ratio, ses }; },
    _fam: id => ({ f: fam(id), stage: stage(fam(id)) })
  };
})();
