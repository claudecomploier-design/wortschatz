/* Vokabel 1000: prefer online/high-fidelity voices when the browser exposes them.
   No user API keys or unofficial speech endpoints are required. */
(function(){
"use strict";
const KEY="vb-voice-prefs-v1";
const prefs=()=>{try{return JSON.parse(localStorage.getItem(KEY)||"{}")||{}}catch(e){return {}}};
const put=p=>{try{localStorage.setItem(KEY,JSON.stringify(p))}catch(e){}};
const available=()=>("speechSynthesis" in window)?speechSynthesis.getVoices():[];
const langCode=l=>(typeof LANGS==="object"&&LANGS[l]&&LANGS[l].voice)||"pt-BR";
const matching=l=>{const locale=langCode(l).toLowerCase(),short=locale.split("-")[0];return available().filter(v=>String(v.lang).replace("_","-").toLowerCase().startsWith(short))};
function rank(v,l){
 const name=(v.name||"").toLowerCase(),voiceLang=String(v.lang||"").toLowerCase().replace("_","-");
 let points=voiceLang===langCode(l).toLowerCase()?32:10;
 if(v.localService===false)points+=34;
 if(/natural|neural|premium|enhanced|online|cloud/.test(name))points+=70;
 if(/microsoft|google|siri|apple/.test(name))points+=16;
 if(/compact|legacy|espeak|robot/.test(name))points-=70;
 if(v.default)points+=2;
 return points;
}
function selected(l){const p=prefs(),choices=matching(l);const wanted=p[l];return choices.find(v=>v.voiceURI===wanted)||choices.sort((a,b)=>rank(b,l)-rank(a,l))[0]||null}
function speak(text,l){
 try{
 if(!window.speechSynthesis||!window.SpeechSynthesisUtterance)return false;
 const s=speechSynthesis; s.cancel();
 const utterance=new SpeechSynthesisUtterance(String(text||"").slice(0,1100));
 utterance.lang=langCode(l);utterance.rate=.96;utterance.pitch=1;utterance.volume=1;
 const voice=selected(l);if(voice){utterance.voice=voice;utterance.lang=voice.lang}
 s.speak(utterance);return true;
 }catch(e){return false}
}
function mount(){
 const el=document.getElementById("voice-settings");
 if(!el)return;
 const language=typeof lang==="string"?lang:"de";
 const voices=matching(language).sort((a,b)=>rank(b,language)-rank(a,language));
 const options=['<option value="">Automática (melhor disponível)</option>'].concat(voices.map(v=>'<option value="'+esc(v.voiceURI)+'">'+esc(v.name)+' · '+esc(v.lang)+(v.localService===false?" · online":"")+'</option>'));
 el.innerHTML='<h2>Pronúncia e voz</h2><p class="hintline">O app prioriza vozes online de melhor qualidade, quando seu navegador as disponibiliza. As vozes e a disponibilidade variam conforme o aparelho; no Microsoft Edge, experimente uma voz Natural.</p><label for="voice-select">Voz de '+esc(LANGS[language].name)+'</label><div class="voice-row"><select id="voice-select">'+options.join("")+'</select><button type="button" class="btn small" id="voice-preview">▶ Ouvir exemplo</button></div><p class="hintline" id="voice-status">'+(voices.length?voices.length+" vozes disponíveis.":"Nenhuma voz detectada neste navegador.")+'</p>';
 const select=document.getElementById("voice-select");
 const wanted=prefs()[language]||"";select.value=voices.some(v=>v.voiceURI===wanted)?wanted:"";
 select.onchange=()=>{const p=prefs();p[language]=select.value;put(p)};
 document.getElementById("voice-preview").onclick=()=>speak(({de:"Guten Morgen! Wie geht es dir heute?",it:"Buongiorno! Come stai oggi?",fr:"Bonjour! Comment allez-vous aujourd'hui?",en:"Good morning! How are you today?",es:"Buenos días. ¿Cómo estás hoy?",pt:"Bom dia! Como você está hoje?"})[language],language);
}
const s=window.speechSynthesis;
if(s){if(typeof s.addEventListener==="function")s.addEventListener("voiceschanged",mount);else s.onvoiceschanged=mount}
window.VBTTS={speak,mount,voices:matching};
})();
