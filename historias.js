/* Histórias Interativas: narrativas ramificadas com parágrafos híbridos.
   Dados: data/historias-<lang>.js (VB_HIST[lang]); hoje só alemão.
   Usa o motor das Frases (window.HYB): proporção compartilhada (vb-ratio), montagem dos parágrafos, familiaridade das palavras.
   Progresso em vb-story-<lang>: { last, h: { id: { cena, rota:[{c, e}], flags:{}, fim, finais:[] } } } */
(function(){
  window.VB_HIST = window.VB_HIST || {};
  const ICON = {
    "Mistério": '<circle cx="10.5" cy="10.5" r="5.5"/><path d="M14.6 14.6 20 20"/>',
    "Viagem": '<rect x="6" y="3.5" width="12" height="14" rx="3"/><path d="M6 11h12M9 21l1.5-3.5M15 21l-1.5-3.5"/><circle cx="9.5" cy="14.5" r=".6"/><circle cx="14.5" cy="14.5" r=".6"/>',
    "Cotidiano": '<path d="M4 11.5 12 5l8 6.5M6.5 9.5V19h11V9.5"/><path d="M10.5 19v-5h3v5"/>',
    "Relações": '<circle cx="9" cy="12" r="5"/><circle cx="15" cy="12" r="5"/>',
    "Suspense": '<path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.5"/>',
    "Trabalho": '<rect x="3.5" y="7.5" width="17" height="11" rx="2"/><path d="M9 7.5V5.5h6v2M3.5 12.5h17"/>',
    "Ficção científica": '<circle cx="12" cy="12" r="2.2"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(-25 12 12)"/>',
    "Sobrevivência": '<path d="M3 19 9.5 8l3.5 6 2-3 6 8Z"/><path d="m8 10.5 1.5 1.5 1.3-1.3"/>'
  };
  const HUE = { "Mistério": 210, "Viagem": 32, "Cotidiano": 140, "Relações": 350, "Suspense": 260, "Trabalho": 190, "Ficção científica": 280, "Sobrevivência": 100 };
  const FIM = { bom: "Final bom", neutro: "Final em aberto", ruim: "Final difícil" };
  const icon = g => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICON[g] || ICON["Viagem"]}</svg>`;

  let S = null, loadedFor = null, filtro = "Todas";
  let story = null, scene = null, built = [], opened = new Set(), peeked = [], busy = false, reading = false;
  const key = () => "vb-story-" + lang;
  const list = () => VB_HIST[lang] || [];
  const byId = id => list().find(h => h.id === id);
  const st = id => S.h[id] || (S.h[id] = { cena: null, rota: [], flags: {}, fim: null, finais: [] });
  const saveS = () => store.set(key(), S);
  const nEnds = h => Object.values(h.cenas).filter(c => c.fim).length;
  function depth(h){                                   // comprimento típico de um caminho (para "cena X de ~Y")
    const memo = {}; const d = id => { if (memo[id] !== undefined) return memo[id]; const c = h.cenas[id]; memo[id] = 0;
      return memo[id] = c.fim ? 1 : 1 + Math.max(...c.escolhas.map(e => d(e.ir))); };
    return d(h.inicio);
  }

  /* ---------- dados ---------- */
  function ensureData(cb, fail){
    if (VB_HIST[lang]) { cb(); return; }
    if (lang !== "de") { VB_HIST[lang] = []; cb(); return; }
    const s = document.createElement("script"); s.src = `data/historias-${lang}.js?v=1`;
    s.onload = () => {
      if (!VB_HIST[lang]) VB_HIST[lang] = [];
      const extra = document.createElement("script");
      extra.src = "data/historias-extra-de.js?v=1";
      extra.onload = () => cb();
      extra.onerror = () => { extra.remove(); cb(); };
      document.head.appendChild(extra);
    };
    s.onerror = () => { s.remove(); fail && fail(); };
    document.head.appendChild(s);
  }
  function prepare(cb){
    const el = $("historias");
    if (el && !VB_HIST[lang]) el.innerHTML = `<div class="st-msg"><span class="st-spin" aria-hidden="true"></span>Carregando histórias…</div>`;
    const go = () => (window.HYB ? HYB.prepare(done) : done());
    const done = () => { if (loadedFor !== lang) { S = store.get(key(), null) || { last: null, h: {} }; loadedFor = lang; } cb(); };
    ensureData(go, () => {
      if (!el) return;
      el.innerHTML = `<div class="st-msg"><p>Não foi possível carregar as histórias. Verifique a conexão.</p><button class="btn" id="st-retry">Tentar de novo</button></div>`;
      $("st-retry").onclick = () => prepare(cb);
    });
  }

  /* ---------- biblioteca ---------- */
  function progLine(h){
    const s = S.h[h.id], n = nEnds(h);
    if (!s || (!s.cena && !s.finais.length)) return { t: "Nova", cls: "" };
    if (s.cena && !s.fim) return { t: `Em andamento · cena ${s.rota.length + 1}`, cls: "on" };
    return { t: `${s.finais.length} de ${n} finais descobertos`, cls: "done" };
  }
  function cover(h, big){
    return `<div class="st-cover${big ? " big" : ""}" style="--h:${HUE[h.genero] || 30}">${icon(h.genero)}</div>`;
  }
  function renderLibrary(){
    const el = $("historias"); if (!el) return;
    const L = LANGS[lang].name.toLowerCase();
    if (!list().length) {
      el.innerHTML = `<div class="card start st-lib"><h2>Histórias interativas</h2><p class="hintline">As histórias estão disponíveis por enquanto só em alemão. Troque a língua no topo para ler.</p></div>`;
      return;
    }
    const gens = ["Todas", ...new Set(list().map(h => h.genero))];
    if (!gens.includes(filtro)) filtro = "Todas";
    const last = S.last && byId(S.last), ls = last && S.h[last.id];
    const cont = last && ls && ls.cena && !ls.fim ? `
      <button type="button" class="st-cont" id="st-cont">
        ${cover(last)}
        <span class="st-cont-t"><small>Continuar de onde parou</small><b>${esc(last.titulo)}</b><span>${esc(last.cenas[ls.cena].cap)} · cena ${ls.rota.length + 1}</span></span>
        <span class="st-go" aria-hidden="true">›</span>
      </button>` : "";
    const items = list().filter(h => filtro === "Todas" || h.genero === filtro).map(h => {
      const p = progLine(h), s = S.h[h.id], started = s && (s.cena || s.finais.length);
      const inProg = s && s.cena && !s.fim;
      return `<article class="st-item">
        ${cover(h)}
        <div class="st-item-b">
          <p class="st-meta">${esc(h.genero)} · ${esc(h.nivel)} · ${Object.keys(h.cenas).length} cenas · ${nEnds(h)} finais</p>
          <h3>${esc(h.titulo)}</h3>
          <p class="st-desc">${esc(h.desc)}</p>
          <p class="st-prog ${p.cls}">${p.t}</p>
          <div class="st-act">
            <button class="btn primary small" data-open="${h.id}">${inProg ? "Continuar" : started ? "Jogar de novo" : "Começar"}</button>
            ${inProg ? `<button class="btn small" data-restart="${h.id}">Recomeçar</button>` : ""}
          </div>
        </div>
      </article>`;
    }).join("");
    el.innerHTML = `
      <div class="card start st-lib">
        <h2>Histórias interativas</h2>
        <p class="hintline">Você decide o que acontece. O texto mistura português e ${esc(L)} na proporção escolhida; toque num trecho em ${esc(L)} para ver a tradução sem sair da história.</p>
        ${cont}
        <div class="st-chips" role="group" aria-label="Gêneros">${gens.map(g => `<button type="button" aria-pressed="${g === filtro}" data-g="${esc(g)}">${esc(g)}</button>`).join("")}</div>
        <div class="st-list">${items}</div>
      </div>`;
    el.querySelectorAll("[data-g]").forEach(b => b.onclick = () => { filtro = b.dataset.g; renderLibrary(); });
    el.querySelectorAll("[data-open]").forEach(b => b.onclick = () => openStory(b.dataset.open, false));
    el.querySelectorAll("[data-restart]").forEach(b => b.onclick = () => openStory(b.dataset.restart, true));
    const c = $("st-cont"); if (c) c.onclick = () => openStory(last.id, false);
  }

  /* ---------- leitura ---------- */
  function ensureShell(){
    if ($("sgame")) return;
    const sec = document.createElement("section");
    sec.className = "game sgame"; sec.id = "sgame"; sec.hidden = true; sec.setAttribute("aria-label", "História interativa");
    sec.innerHTML = `<div class="game-in">
      <div class="g-top">
        <button class="g-x" id="sg-close" aria-label="Voltar à biblioteca (o progresso fica salvo)">×</button>
        <span class="sg-title" id="sg-title"></span>
        <button class="btn small sg-rbtn" id="sg-ratio" aria-haspopup="true" aria-expanded="false"></button>
      </div>
      <div class="hg-bar"><i id="sg-bar"></i></div>
      <div class="sg-ratio" id="sg-ratio-box" hidden></div>
      <section id="sg-area" aria-live="polite"></section>
      <div class="sg-pop" id="sg-pop" role="dialog" aria-modal="false" aria-label="Tradução do trecho" hidden></div>
    </div>`;
    document.body.appendChild(sec);
    $("sg-close").onclick = closeStory;
    $("sg-ratio").onclick = () => toggleRatio();
    document.addEventListener("keydown", e => {
      if (!reading) return;
      if (e.key === "Escape") { if (!$("sg-pop").hidden) closePop(); else closeStory(); }
    });
    sec.addEventListener("click", e => {
      const pop = $("sg-pop"); if (pop.hidden) return;
      if (!pop.contains(e.target) && !e.target.closest("[data-pi]")) closePop();
    });
  }
  function openStory(id, restart){
    const h = byId(id); if (!h) return;
    const s = st(id);
    if (restart || !s.cena || s.fim) { s.cena = h.inicio; s.rota = []; s.flags = {}; s.fim = null; }
    S.last = id; saveS();
    story = h; ensureShell();
    reading = true; busy = false;
    $("sgame").hidden = false; document.body.classList.add("playing");
    enterScene(true);
    setTimeout(() => { try { $("sg-close").focus({ preventScroll: true }); } catch (e) {} }, 50);
  }
  function closeStory(){
    reading = false; story = null; scene = null; closePop();
    if ($("sgame")) $("sgame").hidden = true;
    document.body.classList.remove("playing");
    renderLibrary();
  }
  function enterScene(anim){
    const s = st(story.id); scene = story.cenas[s.cena];
    built = scene.p.map(p => HYB.para(p) || plainPara(p));
    opened = new Set(); peeked = scene.p.map(() => new Set());
    renderScene(anim);
  }
  function plainPara(p){              // reserva caso o motor não esteja pronto: texto todo em português
    return { fl: p[0], pt: p[1], allForeign: false, targets: [], ratio: 0, chunks: p[2].map(c => ({ fl: c[0], pt: c[1], ids: [], foreign: false })) };
  }
  const rName = () => { const r = HYB.ratio(); return r === "auto" ? "Auto" : `${r}% ${LANGS[lang].code}`; };
  function toggleRatio(force){
    const box = $("sg-ratio-box"), open = force !== undefined ? force : box.hidden;
    box.hidden = !open; $("sg-ratio").setAttribute("aria-expanded", open);
    if (!open) return;
    const r = HYB.ratio();
    box.innerHTML = `<div class="hy-ratio" role="radiogroup" aria-label="Proporção de ${esc(LANGS[lang].name.toLowerCase())}">${
      HYB.RATIOS.map(x => `<button type="button" role="radio" aria-checked="${x === r}" data-r="${x}">${x === "auto" ? "Auto" : x + "%"}</button>`).join("")
    }</div><p class="hintline hy-ratio-desc">${esc(HYB.ratioDesc(r))}</p>`;
    box.querySelectorAll("[data-r]").forEach(b => b.onclick = () => {
      HYB.setRatio(b.dataset.r === "auto" ? "auto" : +b.dataset.r);
      built = scene.p.map(p => HYB.para(p) || plainPara(p)); peeked = scene.p.map(() => new Set());
      toggleRatio(true); renderScene(false);
    });
  }
  function paraHTML(c, pi){
    return c.chunks.map((ch, i) => (ch.foreign || c.allForeign)
      ? `<button type="button" class="hy-fl${peeked[pi].has(i) ? " hy-peeked" : ""}" data-pi="${pi}" data-ci="${i}" aria-label="Traduzir: ${esc(ch.fl)}">${esc(ch.fl)}</button>`
      : `<span class="hy-pt">${esc(ch.pt)}</span>`).join(" ").replace(/ ([,.!?;:])/g, "$1");
  }
  function choiceHTML(e, i){
    const r = HYB.ratio(), deFirst = r !== "auto" && r >= 70;
    const main = r === 100 ? e.de : deFirst ? e.de : e.pt, sub = r === 100 ? "" : deFirst ? e.pt : e.de;
    return `<button type="button" class="st-choice" data-ch="${i}"><span class="st-l" aria-hidden="true">${"ABC"[i]}</span><span class="st-ct"><b${deFirst || r === 100 ? ` lang="${lang}"` : ""}>${esc(main)}</b>${sub ? `<small${deFirst ? "" : ` lang="${lang}"`}>${esc(sub)}</small>` : ""}</span></button>`;
  }
  const visible = (es, flags) => es.map((e, i) => [e, i]).filter(([e]) => (!e.req || flags[e.req]) && (!e.sem || !flags[e.sem]));
  function renderScene(anim){
    const el = $("sg-area"), s = st(story.id), D = depth(story);
    $("sg-title").textContent = story.titulo;
    $("sg-ratio").textContent = rName();
    $("sg-bar").style.width = scene.fim ? "100%" : Math.min(95, s.rota.length / Math.max(D - 1, 1) * 100) + "%";
    const prev = s.rota.length ? s.rota[s.rota.length - 1] : null;
    const prevC = prev ? story.cenas[prev.c].escolhas[prev.e] : null;
    const paras = built.map((c, pi) => `
      <div class="st-para">
        <p class="hy-sent st-text" lang="${lang}">${paraHTML(c, pi)}</p>
        ${opened.has(pi) ? `<p class="st-trans">${esc(scene.p[pi][1])}</p>` : `<button type="button" class="st-tbtn" data-tr="${pi}">Ver tradução do parágrafo</button>`}
      </div>`).join("");
    let tail;
    if (scene.fim) {
      const n = nEnds(story), got = s.finais.length;
      tail = `<div class="st-end st-end-${scene.fim.tipo}">
        <p class="st-end-k">${FIM[scene.fim.tipo] || "Final"}</p>
        <h3>${esc(scene.fim.titulo)}</h3>
        <p class="hintline">Você descobriu ${got} de ${n} finais desta história.${got < n ? " Volte e tome outras decisões para ver o resto." : " Você viu todos os finais."}</p>
        <div class="st-route">${s.rota.map(r => `<span>${esc(story.cenas[r.c].escolhas[r.e].pt)}</span>`).join("")}</div>
        <div class="more">
          <button class="btn primary" id="st-again">Recomeçar e escolher diferente</button>
          <button class="btn" id="st-lib">Voltar à biblioteca</button>
        </div>
      </div>`;
    } else {
      const vis = visible(scene.escolhas, s.flags);
      tail = `<div class="st-choices" role="group" aria-label="O que você decide fazer?">
        <p class="st-q">O que você decide fazer?</p>
        ${vis.map(([e, i], k) => choiceHTML(e, i).replace(`>${"ABC"[i]}<`, `>${"ABC"[k]}<`)).join("")}
      </div>`;
    }
    el.innerHTML = `
      <article class="st-scene${anim ? " hy-enter" : ""}">
        <p class="st-cap">${scene.fim ? "Final" : `Cena ${s.rota.length + 1}`} · ${esc(scene.cap)}</p>
        ${prevC ? `<p class="st-prev">Você escolheu: ${esc(prevC.pt)}</p>` : ""}
        ${scene.nota ? `<p class="st-nota">${esc(scene.nota)}</p>` : ""}
        ${paras}
        <div class="st-tools"><button class="btn small" id="st-say">Ouvir a cena</button></div>
        ${tail}
      </article>`;
    el.querySelectorAll("[data-pi]").forEach(b => b.onclick = ev => { ev.stopPropagation(); openPop(+b.dataset.pi, +b.dataset.ci, b); });
    el.querySelectorAll("[data-tr]").forEach(b => b.onclick = () => { opened.add(+b.dataset.tr); renderScene(false); });
    el.querySelectorAll("[data-ch]").forEach(b => b.onclick = () => choose(+b.dataset.ch));
    $("st-say").onclick = () => speak(scene.p.map(p => p[0]).join(" "));
    if (scene.fim) {
      $("st-again").onclick = () => openStory(story.id, true);
      $("st-lib").onclick = closeStory;
    }
  }
  function commitScene(){
    built.forEach((c, pi) => HYB.learn(c, opened.has(pi), peeked[pi], `h:${story.id}:${st(story.id).cena}:${pi}`));
  }
  function choose(i){
    if (busy) return; busy = true;                                   // evita clique duplo
    $("sg-area").querySelectorAll("[data-ch]").forEach(b => { b.disabled = true; if (+b.dataset.ch === i) b.classList.add("picked"); });
    closePop();
    const s = st(story.id), e = scene.escolhas[i];
    commitScene();
    HYB.xp(10 + built.reduce((a, c) => a + c.chunks.filter(x => x.foreign || c.allForeign).length, 0));
    s.rota.push({ c: s.cena, e: i });
    if (e.marca) s.flags[e.marca] = 1;
    s.cena = e.ir;
    const nx = story.cenas[e.ir];
    if (nx.fim) { s.fim = e.ir; if (!s.finais.includes(e.ir)) s.finais.push(e.ir); }
    saveS();
    setTimeout(() => { busy = false; enterScene(true); $("sgame").scrollTop = 0; if (nx.fim) commitScene(); }, 260);
  }

  /* ---------- tradução de um trecho (não interrompe a história) ---------- */
  function openPop(pi, ci, btn){
    const c = built[pi], ch = c.chunks[ci], pop = $("sg-pop");
    if (!peeked[pi].has(ci)) { peeked[pi].add(ci); btn.classList.add("hy-peeked"); }
    const clean = t => t.replace(/[,.!?;:„“"»«]+/g, "").trim();
    const words = ch.ids.map(id => {
      const k = HYB.lemmaInfo(id); if (!k) return "";
      const art = k.g === "m" ? "der " : k.g === "f" ? "die " : k.g === "n" ? "das " : "";
      const has = !!prog[id];
      return `<li><span><b lang="${lang}">${esc(art + id)}</b> <i>${esc(k.pt)}</i></span>
        <button type="button" class="st-add${has ? " on" : ""}" data-add="${esc(id)}"${has ? " disabled" : ""}>${has ? "Nos cartões" : "+ Cartões"}</button></li>`;
    }).join("");
    pop.innerHTML = `
      <div class="sg-pop-h"><b lang="${lang}">${esc(clean(ch.fl))}</b><button type="button" class="sg-pop-x" aria-label="Fechar">×</button></div>
      <p class="sg-pop-pt">${esc(clean(ch.pt))}</p>
      <p class="sg-pop-k">Neste contexto. Palavras do trecho:</p>
      ${words ? `<ul class="sg-pop-w">${words}</ul>` : `<p class="hintline">Sem palavras da lista neste trecho.</p>`}
      <button type="button" class="btn small" id="sg-pop-say">Ouvir</button>`;
    pop.hidden = false;
    const r = btn.getBoundingClientRect(), W = Math.min(340, innerWidth - 32);
    pop.style.width = W + "px";
    pop.style.left = Math.max(16, Math.min(innerWidth - W - 16, r.left + r.width / 2 - W / 2)) + "px";
    const below = r.bottom + 10, h = pop.offsetHeight;
    pop.style.top = (below + h < innerHeight - 8 ? below : Math.max(8, r.top - h - 10)) + "px";
    pop.querySelector(".sg-pop-x").onclick = closePop;
    $("sg-pop-say").onclick = () => speak(clean(ch.fl));
    pop.querySelectorAll("[data-add]").forEach(b => b.onclick = () => {
      const id = b.dataset.add, now = Date.now();
      if (!prog[id]) { prog[id] = { box: 0, first: now, due: now }; store.set("vb-prog-" + lang, prog); }
      b.textContent = "Nos cartões"; b.classList.add("on"); b.disabled = true;
    });
    speak(clean(ch.fl));
  }
  function closePop(){ const p = $("sg-pop"); if (p) p.hidden = true; }

  window.HIST = {
    open(){ prepare(() => { if (!reading) renderLibrary(); }); },
    onLang(){ loadedFor = null; if (reading) closeStory(); if ($("view-historias") && !$("view-historias").hidden) this.open(); },
    playing: () => reading,
    _state: () => ({ S, story: story && story.id, scene, built })
  };
})();
