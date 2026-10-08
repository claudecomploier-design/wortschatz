/* Vokabel: amigos e gato compacto, adaptados do projeto Forja do mesmo usuário. */
(function community(){
"use strict";
const FRIEND_KEY="vb-friends-v1",PROFILE_KEY="vb-social-profile-v1",LANGS=["de","fr","it"];
const $=id=>document.getElementById(id);
const esc=t=>String(t==null?"":t).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const get=(key,def)=>{try{const value=localStorage.getItem(key);return value?JSON.parse(value):def}catch(e){return def}};
const put=(key,data)=>{try{localStorage.setItem(key,JSON.stringify(data));return true}catch(e){return false}};
const clean=t=>String(t||"").trim().slice(0,25);
const allowed=(list,value,fallback)=>list.some(x=>x.id===value)?value:fallback;
const today=()=>{const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const monday=()=>{const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()-(d.getDay()+6)%7);return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
let profile=get(PROFILE_KEY,null);
if(!profile||typeof profile!=="object")profile={};
if(!profile.id)profile.id="v-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10);
if(!profile.name)profile.name="Você";
if(!profile.cat)profile.cat={pelo:"laranja",padrao:"tigrado",olhos:"verde"};
if(!profile.equip)profile.equip={chapeu:"bone"};
put(PROFILE_KEY,profile);
let mode="semana",notice="",importMessage="";
function H(){return window.Heroi}
function normalizeCat(cat){
 const h=H();const p=cat||{};
 if(!h)return {pelo:"laranja",padrao:"tigrado",olhos:"verde"};
 return {pelo:allowed(h.PELAGENS,p.pelo,"laranja"),padrao:h.PADROES.some(x=>x[0]===p.padrao)?p.padrao:"tigrado",olhos:allowed(h.OLHOS,p.olhos,"verde")};
}
function cleanEquip(eq){
 const a=window.Acess?.ITENS||[], slots=["chapeu","rosto","pescoco"];
 const o={};for(const slot of slots){const item=eq&&eq[slot];if(a.some(x=>x.id===item&&x.slot===slot))o[slot]=item;}
 return o;
}
function miniature(cat,equip){
 if(!H())return '<span class="cm-fallback" aria-hidden="true">🐈</span>';
 return H().render({avatar:normalizeCat(cat),equip:cleanEquip(equip),soCabeca:true,roupa:"nenhuma",humor:"feliz"});
}
function stats(){
 const days={};let total=0;
 for(const l of LANGS){
  const xp=get("vb-xp-"+l,{total:0,days:{}});
  total+=Math.max(0,Math.floor(Number(xp.total)||0));
  for(const [key,value] of Object.entries(xp.days||{})){if(/^\d{4}-\d{2}-\d{2}$/.test(key))days[key]=(days[key]||0)+Math.max(0,Math.floor(Number(value)||0))}
 }
 const w=monday();const week=Object.entries(days).reduce((n,[k,v])=>n+(k>=w&&k<=today()?v:0),0);
 return {total,week,sid:w};
}
const level=x=>{let n=1;while(x>=50*n*(n+1)&&n<500)n++;return n};
const tier=n=>n>=5000?"Lenda das palavras":n>=2500?"Explorador experiente":n>=900?"Leitor dedicado":n>=200?"Curioso das línguas":"Primeiros passos";
function me(){
 const x=stats();return {v:1,id:profile.id,n:clean(profile.name)||"Você",av:normalizeCat(profile.cat),eq:cleanEquip(profile.equip),xp:x.total,sem:x.week,sid:x.sid,nv:level(x.total),ts:today()};
}
function encode(t){
 const bytes=new TextEncoder().encode(t);let str="";for(const b of bytes)str+=String.fromCharCode(b);
 return btoa(str).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
}
function decode(t){
 const raw=atob(t.replace(/-/g,"+").replace(/_/g,"/"));return new TextDecoder().decode(Uint8Array.from(raw,c=>c.charCodeAt(0)));
}
function shareCode(){return "VOK-"+encode(JSON.stringify(me()))}
function shareUrl(){return location.origin+location.pathname+"#amigo="+shareCode()}
function parse(text){
 try{
  const raw=String(text||"");
  if(raw.length>3500)return null;
  const m=raw.match(/VOK-([A-Za-z0-9_-]{15,2800})/);if(!m)return null;
  const o=JSON.parse(decode(m[1]));
  if(!o||o.v!==1||typeof o.id!=="string"||!/^v-[a-z0-9-]{8,60}$/.test(o.id))return null;
  if(!Number.isSafeInteger(o.xp)||o.xp<0||o.xp>1e9)return null;
  if(!Number.isSafeInteger(o.sem)||o.sem<0||o.sem>1e8)return null;
  if(typeof o.sid!=="string"||!(/^\d{4}-\d{2}-\d{2}$/.test(o.sid)))return null;
  if(typeof o.ts!=="string"||!(/^\d{4}-\d{2}-\d{2}$/.test(o.ts)))return null;
  return {v:1,id:o.id,n:clean(o.n)||"Amigo",av:normalizeCat(o.av),eq:cleanEquip(o.eq),xp:o.xp,sem:o.sem,sid:o.sid,nv:level(o.xp),ts:o.ts};
 }catch(e){return null}
}
function friends(){const obj=get(FRIEND_KEY,[]);return Array.isArray(obj)?obj.filter(x=>x&&typeof x==="object").slice(0,50):[]}

/* Competidores simulados: perfis distintos e sessões de estudo determinísticas.
   Eles nunca entram na lista de amigos reais e aparecem sempre marcados como BOT. */
const BOT_ORIGIN_KEY="vb-bots-origin-v1",BOT_VIS_KEY="vb-show-bots-v1";
const BOT_PROFILES=[
 {id:"bot-hana",n:"Hana",av:{pelo:"creme",padrao:"siames",olhos:"azul"},eq:{chapeu:"gorro"},base:1880,range:[130,230],chance:.90},
 {id:"bot-mila",n:"Mila",av:{pelo:"cinza",padrao:"tigrado",olhos:"verde"},eq:{rosto:"oculos_redondo"},base:740,range:[60,135],chance:.86},
 {id:"bot-rafa",n:"Rafa",av:{pelo:"preto",padrao:"liso",olhos:"amarelo"},eq:{chapeu:"bone"},base:540,range:[30,100],chance:.71},
 {id:"bot-bia",n:"Bia",av:{pelo:"branco",padrao:"malhado",olhos:"cobre"},eq:{pescoco:"cachecol"},base:1020,range:[70,155],chance:.81},
 {id:"bot-davi",n:"Davi",av:{pelo:"marrom",padrao:"liso",olhos:"verde"},eq:{chapeu:"cowboy"},base:340,range:[20,70],chance:.46},
 {id:"bot-teo",n:"Téo",av:{pelo:"laranja",padrao:"tigrado",olhos:"amarelo"},eq:{},base:220,range:[12,54],chance:.31},
 {id:"bot-iris",n:"Íris",av:{pelo:"cinza",padrao:"liso",olhos:"azul"},eq:{chapeu:"cartola"},base:1550,range:[90,190],chance:.83},
 {id:"bot-noah",n:"Noah",av:{pelo:"preto",padrao:"liso",olhos:"cobre"},eq:{pescoco:"gravata"},base:910,range:[40,125],chance:.58}
];
let showBots=get(BOT_VIS_KEY,true)!==false;
function botHash(source){let n=2166136261;for(let i=0;i<source.length;i++){n^=source.charCodeAt(i);n=Math.imul(n,16777619)}return n>>>0}
const botRandom=key=>botHash(key)/4294967296;
function botDateKey(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function botWeekKey(d){const x=new Date(d);x.setHours(12,0,0,0);x.setDate(x.getDate()-(x.getDay()+6)%7);return botDateKey(x)}
function botActivityForDay(bot,key){
 const date=new Date(key+"T12:00:00"),weekend=date.getDay()===0||date.getDay()===6;
 const probability=Math.min(.97,bot.chance+(weekend?-.07:0));
 if(botRandom(bot.id+key+"rest")>=probability)return [];
 const dailyXP=Math.round((bot.range[0]+botRandom(bot.id+key+"effort")*(bot.range[1]-bot.range[0]))/4)*4;
 const steps=Math.max(1,Math.min(12,Math.round(dailyXP/(15+botRandom(bot.id+key+"chunks")*11))));
 const sessions=dailyXP>=130?3:dailyXP>=60?2:1;
 const windows=sessions===3?[460,760,1120]:sessions===2?[760,1120]:[botRandom(bot.id+key+"period")>.43?1120:570];
 const points=[],value=Math.floor(dailyXP/steps);
 for(let i=0;i<steps;i++){
  const group=Math.min(sessions-1,Math.floor(i*sessions/steps));
  const prior=Math.ceil(group*steps/sessions);
  const moment=windows[group]+Math.floor(botRandom(bot.id+key+"start"+group)*95)+(i-prior)*Math.floor(13+botRandom(bot.id+key+"spacing"+group)*15);
  const xp=value+(i<dailyXP%steps?1:0);
  points.push({minute:Math.min(1435,moment),xp});
 }
 return points.sort((a,b)=>a.minute-b.minute);
}
function botOrigin(now){
 const candidate=get(BOT_ORIGIN_KEY,null);
 if(candidate&&typeof candidate.start==="string"&&/^\d{4}-\d\d-\d\d$/.test(candidate.start)&&candidate.start<=botDateKey(now))return candidate.start;
 const start=botWeekKey(now);
 put(BOT_ORIGIN_KEY,{start});
 return start;
}
function simulatedBots(at){
 const now=at instanceof Date?at:new Date(),todayKey=botDateKey(now),weekKey=botWeekKey(now);
 const start=botOrigin(now),time=now.getHours()*60+now.getMinutes();
 return BOT_PROFILES.map(bot=>{
  let earnedTotal=0,earnedWeek=0,earnedToday=0;
  const date=new Date(start+"T12:00:00"),stop=new Date(todayKey+"T12:00:00");
  for(let i=0;i<1800&&date<=stop;i++,date.setDate(date.getDate()+1)){
   const key=botDateKey(date),sum=botActivityForDay(bot,key).reduce((n,point)=>n+(key!==todayKey||point.minute<=time?point.xp:0),0);
   earnedTotal+=sum;
   if(key>=weekKey)earnedWeek+=sum;
   if(key===todayKey)earnedToday=sum;
  }
  const xp=bot.base+earnedTotal;
  return {v:1,id:bot.id,n:bot.n,av:bot.av,eq:bot.eq,xp,sem:earnedWeek,sid:weekKey,nv:level(xp),ts:todayKey,todayXP:earnedToday,bot:true};
 });
}

function saveFriend(data){
 if(data.id===profile.id){importMessage="Este código é do seu próprio perfil.";return false}
 let all=friends();const i=all.findIndex(x=>x.id===data.id);if(i>=0)all[i]=data;else if(all.length<50)all.push(data);else {importMessage="Limite de 50 amigos atingido.";return false}
 if(!put(FRIEND_KEY,all)){importMessage="Não foi possível salvar neste navegador.";return false}
 importMessage=i>=0?"Progresso de "+data.n+" atualizado.":data.n+" entrou no seu ranking.";
 return true;
}
function copy(text,button){
 if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(text).then(()=>{if(button)button.textContent="Copiado ✓"}).catch(()=>fallback(text));
 else fallback(text);
}
function fallback(text){
 const box=$("cm-share-code");if(box){box.hidden=false;box.value=text;box.focus();box.select();}
 notice="Se a cópia automática não funcionar, selecione o código abaixo.";
}
function header(){
 const meButton=$("me");if(meButton){meButton.innerHTML=miniature(profile.cat,profile.equip);meButton.classList.add("cm-profile-header");meButton.title="Personalizar meu gato";meButton.onclick=()=>{if(typeof tab==="function")tab("avatar")}}
 const avChange=$("av-change");if(avChange){avChange.textContent="Personalizar avatar";avChange.onclick=()=>{if(typeof tab==="function")tab("avatar")}}
}
function avatar(){
 const node=$("cm-avatar-root");if(!node)return;
 const x=stats(),h=H();
 if(!h){node.innerHTML='<p>Carregando opções de avatar…</p>';return}
 const fur=(h.PELAGENS||[]).map(x=>`<button type="button" class="cm-chip" data-cat="pelo" data-value="${x.id}" aria-pressed="${profile.cat.pelo===x.id}"><span class="cm-dot" style="background:${x.c}"></span>${esc(x.nome)}</button>`).join("");
 const patterns=(h.PADROES||[]).map(([id,label])=>`<button type="button" class="cm-chip" data-cat="padrao" data-value="${id}" aria-pressed="${profile.cat.padrao===id}">${esc(label)}</button>`).join("");
 const eyes=(h.OLHOS||[]).map(x=>`<button type="button" class="cm-chip" data-cat="olhos" data-value="${x.id}" aria-pressed="${profile.cat.olhos===x.id}"><span class="cm-dot" style="background:${x.c}"></span>${esc(x.nome)}</button>`).join("");
 const accessories=[["nenhum","Sem acessório"],...window.Acess.ITENS.filter(x=>["chapeu","rosto","pescoco"].includes(x.slot)).slice(0,27).map(x=>[x.slot+":"+x.id,x.nome])];
 const acc=accessories.map(([key,label])=>`<button type="button" class="cm-chip" data-equip="${key}" aria-pressed="${key==="nenhum"?Object.keys(cleanEquip(profile.equip)).length===0:key.split(":")[1]===profile.equip[key.split(":")[0]]}">${esc(label)}</button>`).join("");
 node.innerHTML=`<div class="cm-heading"><span class="cm-eyebrow">PERSONAGEM</span><h2>Seu gato, seu estilo.</h2><p>Inspirado nos personagens do Forja, agora em versão compacta para o Vokabel.</p></div>
 <div class="cm-avatar-overview"><div class="cm-mini-hero" aria-label="Prévia do seu gato">${miniature(profile.cat,profile.equip)}</div><div class="cm-hero-text"><strong>${esc(profile.name)}</strong><span>${tier(x.total)}</span><small>Nível ${level(x.total)} · ${x.total.toLocaleString("pt-BR")} XP</small><div class="cm-mini-caption">Um personagem pequeno, sem ocupar a tela de estudo.</div></div></div>
 <section class="cm-panel"><h3>Seu nome</h3><div class="cm-inline"><input id="cm-name" maxlength="25" value="${esc(profile.name)}" aria-label="Nome para o seu perfil"><button type="button" id="cm-save-name" class="btn">Salvar</button></div></section>
 <section class="cm-panel"><h3>Pelagem</h3><div class="cm-options">${fur}</div><h3>Padrão</h3><div class="cm-options">${patterns}</div><h3>Cor dos olhos</h3><div class="cm-options">${eyes}</div></section>
 <section class="cm-panel"><h3>Acessórios</h3><p class="cm-muted">Combine chapéus, óculos e acessórios de pescoço com o seu gato.</p><div class="cm-options">${acc}</div>
 <button type="button" class="btn cm-shuffle" id="cm-shuffle">Sortear visual</button></section>
 <p class="cm-fine">As escolhas ficam salvas neste navegador e aparecem também no seu ranking de amigos.</p>`;
 $("cm-save-name").onclick=()=>{const value=clean($("cm-name").value);if(!value){$("cm-name").focus();return}profile.name=value;put(PROFILE_KEY,profile);avatar();header()};
 node.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{profile.cat[b.dataset.cat]=b.dataset.value;put(PROFILE_KEY,profile);avatar();header()});
 node.querySelectorAll("[data-equip]").forEach(b=>b.onclick=()=>{const v=b.dataset.equip;if(v==="nenhum")profile.equip={};else{const [slot,id]=v.split(":");profile.equip[slot]=id}put(PROFILE_KEY,profile);avatar();header()});
 $("cm-shuffle").onclick=()=>{const pick=a=>a[Math.floor(Math.random()*a.length)];profile.cat={pelo:pick(h.PELAGENS).id,padrao:pick(h.PADROES)[0],olhos:pick(h.OLHOS).id};profile.equip={chapeu:pick(["bone","gorro","cowboy","cartola","coroa"])};put(PROFILE_KEY,profile);avatar();header()};
}
function rank(){
 const node=$("cm-friends-root");if(!node)return;
 const self=me(),week=monday(),people=[{...self,self:true},...friends(),...(showBots?simulatedBots():[])];
 const value=o=>mode==="semana"?(o.sid===week?o.sem:0):o.xp;
 people.sort((a,b)=>value(b)-value(a)||b.xp-a.xp||a.n.localeCompare(b.n));
 const rows=people.map((p,i)=>{
  const stale=!p.self&&!p.bot&&p.ts<today();const score=value(p);
  return `<div class="cm-rank-row${p.self?" cm-me":""}">
    <span class="cm-rank-n">${i+1}</span>
    <span class="cm-rank-cat">${miniature(p.av,p.eq)}</span>
    <div class="cm-rank-person"><strong>${esc(p.n)}${p.self?" (você)":""}${p.bot?'<span class="cm-bot-label">BOT</span>':""}</strong><small>${p.bot?(p.todayXP?`+${p.todayXP} XP hoje`:"Sem atividade hoje"):p.self?"Seu progresso atual":stale?"Enviado em "+esc(p.ts.split("-").reverse().join("/")):"Compartilhado hoje"}</small></div>
    <div class="cm-rank-points"><strong>${score.toLocaleString("pt-BR")}</strong><small>XP</small></div>
    ${p.self||p.bot?"":`<button type="button" class="cm-remove" data-remove="${esc(p.id)}" aria-label="Remover ${esc(p.n)}">×</button>`}
  </div>`
 }).join("");
 node.innerHTML=`<div class="cm-heading"><span class="cm-eyebrow">DESAFIO ENTRE AMIGOS</span><h2>Quem estudou mais?</h2><p>Dispute XP com amigos reais e competidores virtuais, sempre identificados como bots.</p></div>
 <div class="cm-ranking-score"><span class="cm-cat-summary">${miniature(profile.cat,profile.equip)}</span><div><strong>${self.sem.toLocaleString("pt-BR")} XP</strong><span>seus pontos nesta semana</span><small>${self.xp.toLocaleString("pt-BR")} XP acumulados · Nível ${self.nv}</small></div></div>
 <div class="cm-tabs"><button type="button" data-mode="semana" aria-pressed="${mode==="semana"}">Esta semana</button><button type="button" data-mode="total" aria-pressed="${mode==="total"}">XP total</button></div>
 <div class="cm-bot-controls"><span>🤖 ${BOT_PROFILES.length} bots de treino · pontuações simuladas conforme sessões ao longo do dia</span><button type="button" id="cm-toggle-bots" aria-pressed="${showBots}">${showBots?"Ocultar bots":"Mostrar bots"}</button></div>
 <div class="cm-board"><div class="cm-board-title">Classificação <span>${people.length} participante${people.length===1?"":"s"}</span></div>${rows}</div>
 <section class="cm-panel"><h3>Convidar amigo</h3><p class="cm-muted">Compartilhe seu código; ele contém apenas seu nome, avatar e XP. Nada de senhas.</p>
  <div class="cm-inline"><button class="btn primary" id="cm-copy" type="button">Copiar meu código</button><button class="btn" id="cm-share-link" type="button">Copiar convite</button></div>
  <textarea id="cm-share-code" aria-label="Meu código de convite" rows="2" readonly hidden></textarea>
  <div class="cm-divider"></div><h3>Adicionar ou atualizar amigo</h3>
  <textarea id="cm-import" rows="3" placeholder="Cole aqui o código ou link VOK-... que seu amigo enviou." aria-label="Código de seu amigo"></textarea>
  <button class="btn" id="cm-add" type="button">Adicionar ao ranking</button>
  <p id="cm-import-status" class="cm-muted" role="status">${esc(importMessage)}</p>
 </section>
 <p class="cm-fine">Bots: simulação local de hábitos de estudo, com dias de descanso e ganhos graduais ao longo do dia; não representam pessoas reais. Amigos reais: a pontuação só muda quando compartilham um novo código. O ranking fica neste aparelho.</p>`;
 node.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>{mode=b.dataset.mode;rank()});
 $("cm-toggle-bots").onclick=()=>{showBots=!showBots;put(BOT_VIS_KEY,showBots);rank()};
 node.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{put(FRIEND_KEY,friends().filter(x=>x.id!==b.dataset.remove));rank()});
 $("cm-copy").onclick=()=>{const code=shareCode();$("cm-share-code").value=code;$("cm-share-code").hidden=false;copy(code,$("cm-copy"))};
 $("cm-share-link").onclick=()=>{const url=shareUrl();$("cm-share-code").value=url;$("cm-share-code").hidden=false;copy(url,$("cm-share-link"))};
 $("cm-add").onclick=()=>{const obj=parse($("cm-import").value);if(!obj){importMessage="Código inválido. Copie o código VOK- completo.";rank();return}saveFriend(obj);rank()};
}
function importHash(){
 const m=location.hash.match(/^#amigo=(VOK-[A-Za-z0-9_-]+)$/);if(!m)return;
 const f=parse(m[1]);if(f&&saveFriend(f)){history.replaceState(null,"",location.pathname+location.search);if(typeof tab==="function")tab("amigos")}
}
function start(){header();importHash()}
window.VB_COMMUNITY={openFriends:rank,openAvatar:avatar,mountHeader:header,stats,parse,shareCode,importHash,_debug:{normalizeCat,cleanEquip,simulatedBots,botActivityForDay,BOT_PROFILES}};
start();
window.addEventListener("storage",e=>{if([PROFILE_KEY,FRIEND_KEY,"vb-xp-de","vb-xp-fr","vb-xp-it"].includes(e.key)){profile=get(PROFILE_KEY,profile);header();if($("view-amigos")&&!$("view-amigos").hidden)rank();if($("view-avatar")&&!$("view-avatar").hidden)avatar()}});
window.addEventListener("hashchange",importHash);
function refreshVisibleRanking(){
 const view=$("view-amigos");
 if(!view||view.hidden)return;
 const active=document.activeElement;
 if(active&&active.closest&&active.closest("#cm-friends-root .cm-panel"))return;
 rank();
}
setInterval(refreshVisibleRanking,60000);
window.addEventListener("focus",refreshVisibleRanking);
window.addEventListener("vb-xp-updated",refreshVisibleRanking);
})();