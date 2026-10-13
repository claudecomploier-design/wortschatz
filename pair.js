/* Vokabel 1000: base/target language pair, using free online translation
   for non-native pairs, with per-browser caching. No personal API keys. */
(function(){
"use strict";
const keys=Object.keys(LANGS), defaults=t=>t==="pt"?"en":"pt";
const NAME=l=>LANGS[l]?LANGS[l].name:l;
let base=store.get("vb-base","pt");
if(!keys.includes(base))base="pt";
const mem=new Map(), inflight=new Map();
const key=(a,b,t)=>"vb-pair:"+a+":"+b+":"+t;
const isPrimary=(target=lang)=>base===defaults(target);
function setBase(next){
 if(!keys.includes(next))return false;
 if(next===lang)return false;
 base=next;store.set("vb-base",base);
 window.dispatchEvent(new CustomEvent("vb-base-changed",{detail:{base,target:lang}}));
 return true;
}
function allowedTarget(target){
 if(base===target){base=defaults(target);store.set("vb-base",base)}
 return base;
}
function translated(from,to,text){
 text=String(text||"").trim();if(!text||from===to)return Promise.resolve(text);
 if(!keys.includes(from)||!keys.includes(to))return Promise.reject(Error("Par inválido"));
 const k=key(from,to,text),cached=mem.get(k)||store.get(k,null);
 if(typeof cached==="string"&&cached&&cached!==text){mem.set(k,cached);return Promise.resolve(cached)}
 if(inflight.has(k))return inflight.get(k);
 // The MyMemory GET endpoint has a 500-byte request limit; avoid silent truncation.
 if(new TextEncoder().encode(text).length>490)return Promise.reject(Error("Trecho muito longo"));
 const url="https://api.mymemory.translated.net/get?q="+encodeURIComponent(text)+"&langpair="+encodeURIComponent(from+"|"+to);
 const task=(async()=>{
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),8500);
  try{
   const res=await fetch(url,{signal:controller.signal,mode:"cors",headers:{Accept:"application/json"}});
   if(!res.ok)throw Error("HTTP "+res.status);
   const body=await res.json();const response=body.responseData;
   const value=String(response?.translatedText||"").trim();
   if(Number(body.responseStatus)!==200||!value||/MYMEMORY WARNING|QUOTA EXCEEDED/i.test(value))throw Error("Tradução indisponível");
   if(/<[^>]+>/.test(value))throw Error("Resposta inesperada");
   mem.set(k,value);
   // Bounded single-entry caches are used because full-corpus translations are too large for localStorage.
   try{localStorage.setItem(k,JSON.stringify(value))}catch(e){}
   return value;
  }finally{clearTimeout(timer);inflight.delete(k)}
 })();inflight.set(k,task);return task;
}
const errors=new Map();
const failed=(l,target)=>errors.set(target+":"+l,Date.now());
const recentFail=(l,target)=>Date.now()-(errors.get(target+":"+l)||0)<30000;
async function card(c,target=lang,from=base){
 if(!c||from===defaults(target))return true;
 const signature=target+":"+from;
 if(c._pair===signature)return true;
 if(recentFail(from,target))return false;
 const saved=c._source||{pt:c.pt,exPt:c.exPt,pron:c.pron,hook:c.hook};c._source=saved;
 try{
  const [gloss,example]=await Promise.all([translated(target,from,c.w),translated(target,from,c.ex)]);
  if(lang!==target||base!==from)return false;
  c.pt=gloss;c.exPt=example;
  const help={
    pt:["Ouça a pronúncia pelo botão de áudio.","Compare a palavra com seu exemplo e repita em voz alta."],
    en:["Listen using the audio button.","Connect the word to its example and repeat it aloud."],
    es:["Escucha la pronunciación con el botón de audio.","Relaciona la palabra con su ejemplo y repítela en voz alta."],
    it:["Ascolta la pronuncia con il pulsante audio.","Associa la parola all'esempio e ripetila ad alta voce."],
    fr:["Écoutez la prononciation avec le bouton audio.","Associez le mot à son exemple et répétez-le à voix haute."],
    de:["Höre die Aussprache mit der Audio-Taste an.","Verbinde das Wort mit dem Beispiel und wiederhole es laut."]
  };
  [c.pron,c.hook]=help[from]||help.pt;
  c._pair=signature;return true;
 }catch(e){failed(from,target);return false}
}
async function built(c,target=lang,from=base){
 if(!c||from===defaults(target))return true;
 const signature=target+":"+from;
 if(c._pair===signature)return true;
 if(recentFail(from,target))return false;
 try{
  const original=defaults(target);
  const translateBlock=p=>translated(original,from,p);
  const pieces=await Promise.all(c.chunks.map(x=>translateBlock(x.pt)));
  if(lang!==target||base!==from)return false;
  c.pt=pieces.join(" ").replace(/ ([,.!?;:])/g,"$1");
  c.chunks.forEach((ch,i)=>ch.pt=pieces[i]);
  c._pair=signature;return true;
 }catch(e){failed(from,target);return false}
}
async function scene(p,target=lang,from=base){
 if(!p||from===defaults(target))return true;
 const signature=target+":"+from;
 if(p._pair===signature)return true;
 const src=defaults(target);
 try{
  const txt=await Promise.all([translated(src,from,p[1]),...p[2].map(ch=>translated(src,from,ch[1]))]);
  if(lang!==target||base!==from)return false;
  p[1]=txt[0];p[2].forEach((ch,i)=>ch[1]=txt[i+1]);p._pair=signature;
  return true;
 }catch(e){return false}
}
function restoreCards(cards,target){
 if(!cards)return;
 cards.forEach(c=>{if(c._source){Object.assign(c,c._source);delete c._pair;}});
}
function glossary(){const from=base,target=lang;return [...mem.entries()].filter(([k])=>k.startsWith("vb-pair:"+target+":"+from+":")).map(([,v])=>v).filter(Boolean)}

const LABELS={
pt:["Eu sei","Aprender","Exercícios","Progresso semanal","Amigos","Método","Perfil","← Voltar aos exercícios","Central de exercícios","Escolha como quer praticar. Todos os modos ficam reunidos aqui.","Histórias","Vocabulário","Frases híbridas","Quiz de compreensão","Consultar palavras","Mostrar resposta","Ouvir palavra","Ouvir frase e repetir","Errei","Difícil","Sabia","Dica: primeira letra","O que significa?"],
en:["I speak","Learn","Exercises","Weekly progress","Friends","Method","Profile","← Back to exercises","Exercise hub","Choose how to practice. All activities are here.","Stories","Vocabulary","Mixed-language sentences","Comprehension quiz","Word list","Show answer","Listen to word","Listen and repeat","I missed it","Difficult","I knew it","Hint: first letter","What does it mean?"],
es:["Hablo","Aprender","Ejercicios","Progreso semanal","Amigos","Método","Perfil","← Volver a ejercicios","Centro de ejercicios","Elige cómo quieres practicar. Todas las actividades están aquí.","Historias","Vocabulario","Frases mixtas","Prueba de comprensión","Lista de palabras","Mostrar respuesta","Escuchar palabra","Escuchar y repetir","Fallé","Difícil","Lo sabía","Pista: primera letra","¿Qué significa?"],
it:["Parlo","Imparare","Esercizi","Progresso settimanale","Amici","Metodo","Profilo","← Torna agli esercizi","Centro esercizi","Scegli come esercitarti. Tutte le attività sono qui.","Storie","Vocabolario","Frasi miste","Quiz di comprensione","Elenco parole","Mostra risposta","Ascolta la parola","Ascolta e ripeti","Sbagliato","Difficile","Lo sapevo","Indizio: prima lettera","Che cosa significa?"],
fr:["Je parle","Apprendre","Exercices","Progrès hebdomadaires","Amis","Méthode","Profil","← Retour aux exercices","Espace exercices","Choisissez comment vous entraîner. Toutes les activités sont ici.","Histoires","Vocabulaire","Phrases mixtes","Quiz de compréhension","Liste des mots","Afficher la réponse","Écouter le mot","Écouter et répéter","Raté","Difficile","Je savais","Indice : première lettre","Que signifie ce mot ?"],
de:["Ich spreche","Lernen","Übungen","Wochenfortschritt","Freunde","Methode","Profil","← Zurück zu den Übungen","Übungsbereich","Wähle aus, wie du üben möchtest.","Geschichten","Wortschatz","Gemischte Sätze","Verständnistest","Wortliste","Antwort zeigen","Wort anhören","Anhören und wiederholen","Falsch","Schwierig","Gewusst","Hinweis: erster Buchstabe","Was bedeutet das?"]
};
const UI_IDS=["speak","learn","exercises","weekly","friends","method","profile","back","hub","intro","stories","vocabulary","phrases","quiz","words","reveal","listenword","listenphrase","wrong","hard","knew","hint","meaning"];
const UI=Object.fromEntries(UI_IDS.map((k,i)=>[k,i]));
const msg=(id,l=base)=>{const row=LABELS[l]||LABELS.pt;return row[UI[id]]||LABELS.pt[UI[id]]||id};
function applyUI(){
 const label=document.querySelector('label[for="base-language"]');
 if(label)label.textContent=msg("speak");
 const name=document.querySelector("#lang-toggle > span:nth-child(2)");
 if(name)name.textContent=msg("learn");
 const tabs=["exercises","weekly","friends","method","profile"];
 document.querySelectorAll(".bottom-nav .dock-action").forEach((b,i)=>{
  const name=b.querySelector(".dock-label");if(name&&tabs[i])name.textContent=msg(tabs[i]);
 });
 const title=document.querySelector(".exercise-intro h2");if(title)title.textContent=msg("hub");
 const intro=document.querySelector(".exercise-intro p");if(intro)intro.textContent=msg("intro");
 document.querySelectorAll(".exercise-back").forEach(b=>b.textContent=msg("back"));
 document.querySelectorAll(".exercise-link strong").forEach((e,i)=>e.textContent=msg(["stories","vocabulary","phrases","quiz","words"][i]));
}
function decorateCard(root){
 if(!root)return;
 const ids={"reveal":"reveal","say-w":"listenword","say-e":"listenphrase","hint":"hint"};
 for(const [id,t] of Object.entries(ids)){const el=root.querySelector("#"+id);if(el&&!el.disabled)el.textContent=msg(t)}
 root.querySelectorAll(".grade button").forEach((b,i)=>{
  const t=b.firstChild;if(t&&t.nodeType===Node.TEXT_NODE)t.textContent=msg(["wrong","hard","knew"][i]);
 });
 const labels=root.querySelectorAll(".hintline");
 labels.forEach(e=>{if(e.textContent.trim()==="O que significa?")e.textContent=msg("meaning")});
}


const METHOD={
pt:"<h2>Estude na língua que você conhece</h2><p>Leia a tradução antes de virar o cartão. Ouça a palavra, repita a frase e faça o teste de compreensão. Os outros pares usam tradução automática gratuita e precisam de internet na primeira utilização.</p>",
en:"<h2>Learn from a language you already know</h2><p>Read the translation, say the target word aloud, then flip the card. Listen to the complete example sentence and test your understanding. New language pairs use an online free translation service the first time.</p>",
es:"<h2>Aprende desde tu propio idioma</h2><p>Lee el significado, pronuncia la palabra y después gira la tarjeta. Escucha el ejemplo completo y comprueba si lo entiendes. Los pares nuevos necesitan conexión a internet para la traducción automática.</p>",
it:"<h2>Impara partendo dalla tua lingua</h2><p>Leggi la traduzione, pronuncia la nuova parola, poi gira la scheda. Ascolta la frase intera e verifica quanto hai capito. Le nuove combinazioni di lingue richiedono internet per la traduzione automatica.</p>",
fr:"<h2>Apprenez à partir de votre langue</h2><p>Lisez la traduction, prononcez le mot, puis retournez la carte. Écoutez l'exemple complet et testez votre compréhension. Les nouvelles paires de langues nécessitent une connexion pour la traduction automatique.</p>",
de:"<h2>Lerne von deiner eigenen Sprache aus</h2><p>Lies die Übersetzung, sprich das Wort aus und drehe dann die Karte um. Höre den ganzen Beispielsatz und teste dein Verständnis. Neue Sprachpaare benötigen beim ersten Mal Internet für die automatische Übersetzung.</p>"
};
function methodHTML(target){
 const baseName=NAME(base),targetName=NAME(target);
 return '<section>'+METHOD[base]+'</section><section><h2>'+baseName+' → '+targetName+'</h2><p>MyMemory · translation service. Online translations may have usage limits and mistakes. Source text is sent to a third-party translation service.</p></section>';
}

window.VBPAIR={base:()=>base,primary:defaults,isPrimary,setBase,allowedTarget,translated,card,built,scene,restoreCards,glossary,clearErrors:()=>errors.clear(),name:NAME,msg,applyUI,decorateCard,methodHTML};
allowedTarget(lang);
// The inline app initializes before this module is loaded; refresh once with the persisted source language.
if(typeof setLang==="function")setLang(lang);
applyUI();
})();