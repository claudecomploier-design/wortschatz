/* Modo Frases: imersão por frases híbridas.
   Usa as palavras de data/<lang>.js (CARDS, ranking = posição) e o progresso dos flashcards (prog).
   Estado próprio em vb-hyb-<lang>. Frases em data/frases-<lang>.js (VB_FRASES[lang]).
   Lobby na aba Frases; partida de 10 frases em tela própria (#hgame).
   Proporção (vb-ratio): "auto" (adaptativa) ou 30/50/70/100 (% do idioma estrangeiro). Compartilhada com as cartas. */
(function(){
  window.VB_FRASES = window.VB_FRASES || {};

  const T_NEW = 0.15, T_SHOW = 0.45, T_FAM = 0.75;   // faixas de familiaridade
  const MAXT = { f: [3, 2], t: [6, 4] };               // alvos e novas por item (modo automático): frase / parágrafo
  const RECENT = 25;                                  // frases recentes não se repetem
  const LOG_MAX = 300;
  const ROUNDS = { f: 10, t: 3 };                     // itens por partida: frases curtas / parágrafos
  window.VB_TEXTOS = window.VB_TEXTOS || {};
  const RATIOS = ["auto", 30, 50, 70, 100];

  let H = null;           // estado do modo para a língua atual
  let rank = {};          // lema -> posição na lista das 1000
  let cur = null;         // frase atual montada
  let opened = false;     // tradução aberta nesta frase
  let peeked = new Set(); // blocos tocados para tradução rápida
  let loadedFor = null;
  let playing = false, ses = null;
  let K = "f";            // tipo da partida: "f" frases curtas, "t" parágrafos
  const ROUND = () => ROUNDS[K];
  const list = () => (K === "t" ? VB_TEXTOS : VB_FRASES)[lang] || [];
  const sk = idx => K === "t" ? "t" + idx : idx;     // chave da estatística por item
  const recentArr = () => K === "t" ? (H.recentT || (H.recentT = [])) : H.recent;

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
    const ra = recentArr(), lim = Math.min(RECENT, Math.floor(list().length * 0.6));
    const rec = ra.lastIndexOf(idx);
    if (rec !== -1 && rec >= ra.length - lim) return -Infinity;
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
    const st = H.s[sk(idx)]; if (st) score -= Math.min(st.n, 6) * 0.6;
    if (ratio !== "auto" && ratio < 100) {                                      // modo fixo: frase precisa permitir a % pedida
      const n = s[3].filter(ch => lemmas(ch).length).length;
      const ach = n ? Math.max(1, Math.round(n * ratio / 100)) / n : 0;
      score -= Math.abs(ach - ratio / 100) * 12;
    }
    return score + Math.random() * 0.8;                                          // variedade
  }

  function pick(){
    const L = list();
    if (!L.length) return null;
    const fr = frontier();
    let best = -Infinity, bi = -1;
    L.forEach((s, i) => { const sc = scoreSentence(s, i, fr); if (sc > best) { best = sc; bi = i; } });
    if (bi === -1) bi = Math.floor(Math.random() * L.length);
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
    const s = list()[idx];
    const chunks = chunkInfo(s, fr);
    const targets = new Set(); let newCnt = 0;
    const order = chunks.filter(c => !c.foreign && !c.tooFar && c.ids.length)
      .sort((a, b) => (b.due - a.due) || (a.unknown.length - b.unknown.length) ||
        (Math.min(...a.ids.map(i => rank[i])) - Math.min(...b.ids.map(i => rank[i]))));
    for (const c of order) {
      const add = c.unknown.filter(id => !targets.has(id));
      const addNew = add.filter(id => !introduced(id)).length;
      if (targets.size + add.length > MAXT[K][0] || newCnt + addNew > MAXT[K][1]) continue;
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
  function buildFixed(idx, r, forceId, src){
    const s = (src || list())[idx];
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
    const st = H.s[sk(cur.idx)] || (H.s[sk(cur.idx)] = { n: 0, o: 0, l: 0 });
    st.n++; if (opened) st.o++; st.l = H.tick;
    const ra = recentArr(); ra.push(cur.idx); if (ra.length > 60) ra.splice(0, ra.length - 60);
    H.log.push({ i: sk(cur.idx), k: H.tick, r: Math.round(cur.ratio * 100), o: opened ? 1 : 0, p: peeked.size, m: ratio, tg: cur.targets });
    if (H.log.length > LOG_MAX) H.log.splice(0, H.log.length - LOG_MAX);
    save();
    if (ses) { ses.n++; if (opened) ses.opened++; ses.peeks += peeked.size; ses.r += cur.ratio; }
    const gain = award();
    if (typeof addActivity === "function") addActivity();
    return gain;
  }

  /* ---------- camada de jogo: XP, combo, nível, som ---------- */
  const xpKey = () => "vb-xp-" + lang;
  let XP = null;
  const xpLoad = () => { XP = store.get(xpKey(), null) || { total: 0, best: 0, days: {} }; };
  const xpSave = () => store.set(xpKey(), XP);
  const today = () => (typeof dayKey === "function" ? dayKey() : new Date().toISOString().slice(0, 10));
  const lvlAt = x => { let L = 1; while (x >= 50 * L * (L + 1)) L++; return L; };      // 100, 300, 600, 1000...
  const lvlSpan = L => [50 * (L - 1) * L, 50 * L * (L + 1)];
  function award(){
    if (!ses) return null;
    const nF = cur.allForeign ? cur.chunks.length : cur.chunks.filter(c => c.foreign).length;
    let base = (K === "t" ? 24 : 8) + nF * (K === "t" ? 2 : 3);
    if (opened) base = Math.round(base * 0.35);
    else base = Math.max(Math.round(base * 0.5), base - peeked.size * 2);
    if (!opened) ses.combo++; else ses.combo = 0;
    ses.bestCombo = Math.max(ses.bestCombo, ses.combo);
    const mult = opened ? 1 : 1 + Math.min(Math.max(ses.combo - 1, 0), 4) * 0.25;   // x1 a x2
    const gain = Math.round(base * mult);
    const before = lvlAt(XP.total);
    XP.total += gain; XP.days[today()] = (XP.days[today()] || 0) + gain;
    const ks = Object.keys(XP.days).sort(); while (ks.length > 120) delete XP.days[ks.shift()];
    XP.best = Math.max(XP.best, ses.bestCombo);
    xpSave(); ses.xp += gain;
    return { gain, mult, combo: ses.combo, levelUp: lvlAt(XP.total) > before ? lvlAt(XP.total) : 0 };
  }
  let AC = null, sound = store.get("vb-sound", true);
  function tone(freq, t0, dur, type, vol){
    if (!sound) return;
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      const o = AC.createOscillator(), g = AC.createGain(), now = AC.currentTime + (t0 || 0);
      o.type = type || "sine"; o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, now); g.gain.exponentialRampToValueAtTime(vol || 0.12, now + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, now + (dur || 0.18));
      o.connect(g); g.connect(AC.destination); o.start(now); o.stop(now + (dur || 0.18) + 0.02);
    } catch (e) {}
  }
  const SCALE = [523.25, 587.33, 659.25, 698.46, 783.99, 880, 987.77, 1046.5, 1174.66, 1318.5];
  const sfx = {
    good: c => { const f = SCALE[Math.min(c - 1, SCALE.length - 1)] || SCALE[0]; tone(f, 0, .16, "triangle", .13); tone(f * 1.5, .07, .2, "sine", .07); },
    help: () => tone(330, 0, .18, "sine", .08),
    peek: () => tone(880, 0, .06, "sine", .05),
    milestone: () => [0, .08, .16, .24].forEach((t, i) => tone([659.25, 783.99, 987.77, 1318.5][i], t, .22, "triangle", .11)),
    level: () => [0, .1, .2, .3, .45].forEach((t, i) => tone([523.25, 659.25, 783.99, 1046.5, 1318.5][i], t, .3, "triangle", .12))
  };
  const buzz = p => { try { navigator.vibrate && navigator.vibrate(p); } catch (e) {} };

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
  const KIND = {
    f: { name: "Frases curtas", unit: "frase", units: "frases", desc: "10 frases rápidas do dia a dia." },
    t: { name: "Parágrafos", unit: "texto", units: "textos", desc: "3 textos de um parágrafo, cerca de 4x maiores. Mais XP por texto." }
  };
  function levelHTML(){
    const L = lvlAt(XP.total), [a, b] = lvlSpan(L), pc = Math.round((XP.total - a) / (b - a) * 100);
    const td = XP.days[today()] || 0;
    return `<div class="hy-lvl">
      <div class="hy-lvl-badge" aria-hidden="true">${L}</div>
      <div class="hy-lvl-info">
        <div class="hy-lvl-top"><b>Nível ${L}</b><span>${XP.total - a} / ${b - a} XP</span></div>
        <div class="hy-lvl-bar"><i style="width:${pc}%"></i></div>
        <div class="hy-lvl-sub"><span>Hoje: <b>${td} XP</b></span><span>Maior combo: <b>${XP.best || 0}</b></span></div>
      </div>
    </div>`;
  }
  const soundBtn = id => `<button type="button" class="hy-snd${sound ? "" : " off"}" id="${id}" aria-pressed="${sound}" aria-label="${sound ? "Silenciar sons" : "Ativar sons"}">${sound ? "♪" : "♪̸"}</button>`;
  function bindSound(id, after){
    const b = $(id); if (!b) return;
    b.onclick = () => { sound = !sound; store.set("vb-sound", sound); if (sound) sfx.peek(); after(); };
  }
  function renderLobby(){
    const el = $("frases"); if (!el) return;
    if (!VB_FRASES[lang] || !VB_FRASES[lang].length) {
      el.innerHTML = `<div class="hy-empty"><p>As frases de ${LANGS[lang].name.toLowerCase()} ainda estão sendo preparadas.</p></div>`; return;
    }
    if (!XP) xpLoad();
    const p = counts(), L = LANGS[lang].name.toLowerCase();
    const hasT = (VB_TEXTOS[lang] || []).length > 0;
    el.innerHTML = `
      <div class="card start hy-lobby">
        <div class="hy-lb-head"><h2>Frases em ${esc(L)}</h2>${soundBtn("hy-snd-l")}</div>
        ${levelHTML()}
        <p class="hintline">Leia textos que misturam português e ${esc(L)}. Entenda pelo contexto e siga sem abrir a tradução para manter o combo e multiplicar o XP.</p>
        <div class="hy-modes">
          <button type="button" class="hy-mode" id="hy-play"><b>${KIND.f.name}</b><span>${KIND.f.desc}</span><em>Jogar</em></button>
          ${hasT ? `<button type="button" class="hy-mode hy-mode-t" id="hy-play-t"><b>${KIND.t.name}</b><span>${KIND.t.desc}</span><em>Jogar</em></button>` : ""}
        </div>
        <div class="hy-lb-stats">
          <div><b>${p.learn}</b><span>aprendendo</span></div>
          <div><b>${p.fam_}</b><span>familiares</span></div>
          <div><b>${p.dom}</b><span>dominadas</span></div>
          <div><b>${p.pct}%</b><span>em ${esc(L)} nas últimas</span></div>
        </div>
        <h3 class="hy-lb-h">Quanto de ${esc(L)} por frase</h3>
        ${ratioPicker("hl")}
      </div>`;
    bindRatio(el, renderLobby);
    bindSound("hy-snd-l", renderLobby);
    $("hy-play").onclick = () => startGame("f");
    if ($("hy-play-t")) $("hy-play-t").onclick = () => startGame("t");
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
        <span class="hg-combo" id="hg-combo" aria-live="polite"></span>
        <span class="hg-xp" id="hg-xp"></span>
        <span id="hg-snd-wrap"></span>
      </div>
      <div class="hg-bar"><i id="hg-bar"></i></div>
      <section class="hy" id="hy-play-area" aria-live="polite"></section>
      <div class="hg-fx" id="hg-fx" aria-hidden="true"></div>
      <div class="hg-toast" id="hg-toast" role="status"></div>
    </div>`;
    document.body.appendChild(sec);
    $("hg-close").onclick = closeGame;
    document.addEventListener("keydown", e => { if (e.key === "Escape" && playing) closeGame(); });
  }
  const newSes = () => ({ n: 0, opened: 0, peeks: 0, r: 0, help: {}, combo: 0, bestCombo: 0, xp: 0, lvl0: lvlAt(XP.total), xp0: XP.total });
  function startGame(kind){
    ensureGameShell(); if (!XP) xpLoad();
    K = kind === "t" ? "t" : "f";
    ses = newSes();
    playing = true; cur = null; opened = false; peeked = new Set();
    const g = $("hgame"); g.hidden = false; g.classList.toggle("hg-t", K === "t"); g.className = g.className.replace(/\bheat-\d\b/g, "").trim();
    document.body.classList.add("playing"); g.scrollTop = 0;
    renderGame(true); setTimeout(() => { try { $("hg-close").focus({ preventScroll: true }); } catch (e) {} }, 50);
  }
  function closeGame(){
    playing = false; ses = null; cur = null; K = "f";
    if ($("hgame")) $("hgame").hidden = true;
    document.body.classList.remove("playing");
    renderLobby();
  }
  function setHeat(c){
    const g = $("hgame"); if (!g) return;
    g.classList.remove("heat-1", "heat-2", "heat-3");
    if (c >= 10) g.classList.add("heat-3"); else if (c >= 5) g.classList.add("heat-2"); else if (c >= 3) g.classList.add("heat-1");
  }
  function topBar(){
    const kd = KIND[K];
    $("hg-prog").textContent = ses.n < ROUND() ? `${kd.unit[0].toUpperCase() + kd.unit.slice(1)} ${ses.n + 1} de ${ROUND()}` : "Resumo";
    $("hg-bar").style.width = Math.min(100, ses.n / ROUND() * 100) + "%";
    const cb = $("hg-combo"), c = ses.combo;
    const mult = 1 + Math.min(Math.max(c, 0), 4) * 0.25;          // multiplicador que a próxima vale
    cb.innerHTML = c > 0 && ses.n < ROUND() ? `<i aria-hidden="true">🔥</i>${c}<small>x${mult.toFixed(2).replace(/\.?0+$/, "")}</small>` : "";
    cb.classList.toggle("lost", opened && c > 0);
    cb.setAttribute("aria-label", c > 0 ? `Combo de ${c}, próximo vale x${mult}` : "");
    $("hg-xp").textContent = ses.xp ? `+${ses.xp} XP` : "";
    $("hg-snd-wrap").innerHTML = soundBtn("hg-snd");
    bindSound("hg-snd", topBar);
  }
  function renderGame(enter){
    const el = $("hy-play-area"); if (!el) return;
    const L = LANGS[lang].name.toLowerCase(), kd = KIND[K];
    topBar();
    if (ses.n >= ROUND()) { renderSummary(el); return; }
    if (!cur) { cur = pick(); opened = false; peeked = new Set(); }
    if (!cur) { ses.n = ROUND(); renderSummary(el); return; }
    const last = ses.n + 1 >= ROUND();
    el.innerHTML = `
      <figure class="hy-stage${K === "t" ? " hy-para" : ""}${enter ? " hy-enter" : ""}">
        ${K === "t" ? `<p class="hy-theme">${esc(cur.theme)}</p>` : ""}
        <blockquote class="hy-sent" lang="${lang}">${sentenceHTML(cur)}</blockquote>
        ${peekHTML(cur)}
        ${opened ? `<figcaption class="hy-trans"><p class="hy-full">${esc(cur.pt)}</p>${cur.allForeign ? "" : `<p class="hy-orig" lang="${lang}">${esc(cur.fl)}</p>`}${glossHTML(cur)}</figcaption>` : ""}
      </figure>
      <p class="hintline hy-tip">${opened ? (ses.combo > 0 ? "Combo zerado. Na próxima ele recomeça." : "") : "Toque num trecho em " + esc(L) + " para traduzir só ele." + (ses.combo > 0 ? " Abrir a tradução inteira zera o combo." : "")}</p>
      <div class="hy-actions">
        ${opened ? "" : `<button class="btn" id="hy-show">Mostrar tradução</button>`}
        <button class="btn ${opened ? "primary" : "hy-next"}" id="hy-next">${last ? "Concluir" : K === "t" ? "Próximo texto" : "Próxima frase"}</button>
        <button class="btn small hy-say" id="hy-say" aria-label="Ouvir em ${esc(L)}">Ouvir</button>
      </div>`;
    const sh = $("hy-show"); if (sh) sh.onclick = () => { opened = true; sfx.help(); renderGame(); };
    $("hy-next").onclick = e => next(e.currentTarget);
    el.querySelectorAll(".hy-sent [data-ci]").forEach(b => b.onclick = () => {
      const i = +b.dataset.ci; if (peeked.has(i)) peeked.delete(i); else { peeked.add(i); sfx.peek(); } renderGame();
    });
    $("hy-say").onclick = () => speak(cur.fl);
  }
  function next(btn){
    const wasOpened = opened;
    const r = commit();
    cur = null; peeked = new Set(); opened = false;
    if (r) {
      floatXP(btn, r);
      if (wasOpened) sfx.help(); else sfx.good(r.combo);
      setHeat(r.combo);
      const ms = [3, 5, 10, 15, 20, 30];
      if (!wasOpened && ms.includes(r.combo)) milestone(r.combo, r.mult);
      if (r.levelUp) setTimeout(() => levelUp(r.levelUp), ms.includes(r.combo) ? 900 : 250);
    }
    renderGame(true); $("hgame").scrollTop = 0;
  }
  function floatXP(btn, r){
    const fx = $("hg-fx"); if (!fx) return;
    const b = btn.getBoundingClientRect();
    const d = document.createElement("span");
    d.className = "hg-pop" + (r.mult > 1 ? " big" : "");
    d.textContent = `+${r.gain} XP` + (r.mult > 1 ? ` x${String(r.mult).replace(/\.?0+$/, "")}` : "");
    d.style.left = (b.left + b.width / 2) + "px"; d.style.top = (b.top) + "px";
    fx.appendChild(d); setTimeout(() => d.remove(), 1100);
  }
  function toast(html, cls){
    const t = $("hg-toast"); if (!t) return;
    t.className = "hg-toast show " + (cls || ""); t.innerHTML = html;
    clearTimeout(toast._t); toast._t = setTimeout(() => { t.className = "hg-toast"; }, 1600);
  }
  function confetti(n){
    const fx = $("hg-fx"); if (!fx) return;
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cols = ["#d4a24c", "#e8c37a", "#7fb2a0", "#e07a5f", "#f4efe6"];
    for (let i = 0; i < n; i++) {
      const p = document.createElement("i");
      p.className = "hg-cf";
      p.style.left = (50 + (Math.random() - .5) * 30) + "vw"; p.style.top = "38vh";
      p.style.background = cols[i % cols.length];
      p.style.setProperty("--dx", ((Math.random() - .5) * 90) + "vw");
      p.style.setProperty("--dy", (-(20 + Math.random() * 35)) + "vh");
      p.style.setProperty("--r", (Math.random() * 720 - 360) + "deg");
      p.style.animationDelay = (Math.random() * .12) + "s";
      fx.appendChild(p); setTimeout(() => p.remove(), 1500);
    }
  }
  function milestone(c, mult){
    const word = c >= 10 ? "Imparável!" : c >= 5 ? "Em chamas!" : "Combo!";
    toast(`<b>${word}</b><span>${c} seguidas sem tradução · XP x${String(Math.min(2, 1 + Math.min(c, 4) * .25)).replace(/\.?0+$/, "")}</span>`, "ms");
    sfx.milestone(); buzz(c >= 10 ? [30, 40, 30, 40, 60] : [25, 40, 40]); confetti(c >= 10 ? 40 : c >= 5 ? 26 : 16);
  }
  function levelUp(L){
    toast(`<b>Nível ${L}!</b><span>Você subiu de nível em ${esc(LANGS[lang].name.toLowerCase())}</span>`, "lv");
    sfx.level(); buzz([40, 50, 80]); confetti(44);
  }
  function renderSummary(el){
    const L = LANGS[lang].name.toLowerCase(), kd = KIND[K];
    const avg = ses.n ? Math.round(ses.r / ses.n * 100) : 0;
    const clean_ = ses.n ? (ses.n - ses.opened) / ses.n : 0;
    const stars = clean_ >= 1 ? 3 : clean_ >= .6 ? 2 : 1;
    const Lv = lvlAt(XP.total), [a, b] = lvlSpan(Lv), pc = Math.round((XP.total - a) / (b - a) * 100);
    const hard = Object.entries(ses.help).sort((x, y) => y[1] - x[1]).slice(0, 5)
      .map(([id]) => { const c = CARDS[rank[id]]; return c ? `<li><b lang="${lang}">${esc(id)}</b><span>${esc(c.pt)}</span></li>` : ""; }).join("");
    const msg = stars === 3 ? "Perfeito, sem abrir nenhuma tradução!" : stars === 2 ? "Muito bem! Quase tudo pelo contexto." : "Partida concluída. As palavras difíceis voltam logo.";
    el.innerHTML = `
      <div class="card done hy-sum">
        <div class="hy-stars" aria-label="${stars} de 3 estrelas">${[1, 2, 3].map(i => `<span class="${i <= stars ? "on" : ""}" style="animation-delay:${.15 + i * .22}s">★</span>`).join("")}</div>
        <h2>${msg}</h2>
        <div class="hy-xpbig"><b id="hy-xpcount">+0</b><span>XP</span></div>
        <div class="hy-lvl-top"><b>Nível ${Lv}</b><span>${XP.total - a} / ${b - a} XP</span></div>
        <div class="hy-lvl-bar"><i id="hy-sumbar" style="width:0%"></i></div>
        ${Lv > ses.lvl0 ? `<p class="hy-lvlup">Subiu para o nível ${Lv}!</p>` : ""}
        <div class="hy-lb-stats">
          <div><b>${ses.n}</b><span>${kd.units} lidos</span></div>
          <div><b>${ses.bestCombo}</b><span>maior combo</span></div>
          <div><b>${avg}%</b><span>em ${esc(L)}</span></div>
          <div><b>${ses.peeks}</b><span>trechos tocados</span></div>
        </div>
        ${hard ? `<h3 class="hy-lb-h">Vão voltar logo, em outros textos</h3><ul class="hy-hard">${hard}</ul>` : ""}
        <h3 class="hy-lb-h">Proporção da próxima partida</h3>
        ${ratioPicker("hs")}
        <div class="more">
          <button class="btn primary" id="hy-again">Jogar mais ${ROUND()} ${kd.units}</button>
          <button class="btn" id="hy-other">${K === "t" ? "Jogar frases curtas" : "Jogar parágrafos"}</button>
          <button class="btn" id="hy-tolobby">Voltar ao lobby</button>
        </div>
      </div>`.replace(`${kd.units} lidos`, K === "t" ? "textos lidos" : "frases lidas");
    bindRatio(el, () => renderSummary(el));
    if (!(VB_TEXTOS[lang] || []).length) $("hy-other").remove();
    else $("hy-other").onclick = () => startGame(K === "t" ? "f" : "t");
    $("hy-again").onclick = () => startGame(K);
    $("hy-tolobby").onclick = closeGame;
    if (!renderSummary._done || renderSummary._done !== ses) {
      renderSummary._done = ses;
      const target = ses.xp, t0 = performance.now(), dur = 900;
      const step = now => { const k = Math.min(1, (now - t0) / dur), e = $("hy-xpcount"); if (!e) return; e.textContent = "+" + Math.round(target * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
      if (stars === 3) setTimeout(() => { sfx.milestone(); confetti(36); }, 500);
    } else { const e = $("hy-xpcount"); if (e) e.textContent = "+" + ses.xp; }
    setTimeout(() => { const bar = $("hy-sumbar"); if (bar) bar.style.width = pc + "%"; }, 60);
  }

  /* ---------- dados ---------- */
  function loadScript(src, ok, fail){ const s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = fail; document.head.appendChild(s); }
  function ensureData(cb){
    let n = 0; const done = () => { if (++n === 2) cb(); };
    if (VB_FRASES[lang]) done(); else loadScript(`data/frases-${lang}.js?v=1`, done, () => { VB_FRASES[lang] = VB_FRASES[lang] || []; done(); });
    if (VB_TEXTOS[lang]) done(); else loadScript(`data/textos-${lang}.js?v=1`, done, () => { VB_TEXTOS[lang] = VB_TEXTOS[lang] || []; done(); });
  }
  function prepare(cb){ ensureData(() => { if (loadedFor !== lang && CARDS.length) { load(); xpLoad(); } if (cb) cb(); }); }

  /* frase de exemplo misturada para uma carta (usada pelo Treinar) */
  const hashStr = t => { let h = 0; for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) | 0; return Math.abs(h); };
  function hybridFor(id, r){
    if (!H || loadedFor !== lang || !VB_FRASES[lang] || !(id in rank)) return null;
    const cand = []; VB_FRASES[lang].forEach((s, i) => { if (s[3].some(ch => lemmas(ch).includes(id))) cand.push(i); });
    if (!cand.length) return null;
    const nC = i => VB_FRASES[lang][i][3].filter(ch => lemmas(ch).length).length;
    const SRC = VB_FRASES[lang];
    cand.sort((a, b) => nC(b) - nC(a));                      // frases com mais blocos misturam melhor
    const top = cand.slice(0, Math.min(3, cand.length));
    const idx = top[hashStr(id + (typeof dayKey === "function" ? dayKey() : "")) % top.length];
    const b = buildFixed(idx, r === "auto" ? 50 : r, id, SRC);
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
