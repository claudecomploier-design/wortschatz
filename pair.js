/* Vokabel 1000: content bundled for 30 language directions.
   No runtime remote translation service. The cross-language packs are generated
   at build time and installed into the site's offline cache. */
(function(){
"use strict";
const keys=Object.keys(LANGS), defaults=t=>t==="pt"?"en":"pt";
const NAME=l=>LANGS[l]?LANGS[l].name:l;
let base=store.get("vb-base","pt");
if(!keys.includes(base))base="pt";
window.VB_OFFLINE=window.VB_OFFLINE||{};
const requests=new Map();
const key=(target,known)=>target+"-"+known;
const isPrimary=(target=lang)=>base===defaults(target);

function setBase(next){
 if(!keys.includes(next)||next===lang)return false;
 base=next;store.set("vb-base",base);
 window.dispatchEvent(new CustomEvent("vb-base-changed",{detail:{base,target:lang}}));
 return true;
}
function allowedTarget(target){
 if(base===target){base=defaults(target);store.set("vb-base",base)}
 return base;
}
function load(target=lang,known=base){
 if(target===known)return Promise.reject(Error("Idiomas precisam ser diferentes."));
 if(known===defaults(target))return Promise.resolve(null);
 const id=key(target,known);
 if(window.VB_OFFLINE[id])return Promise.resolve(window.VB_OFFLINE[id]);
 if(requests.has(id))return requests.get(id);
 const task=new Promise((resolve,reject)=>{
  const script=document.createElement("script");
  script.src="data/ov/"+id+".js?v=1";
  script.async=true;
  script.onload=()=>window.VB_OFFLINE[id]?resolve(window.VB_OFFLINE[id]):reject(Error("Pacote offline inválido: "+id));
  script.onerror=()=>{script.remove();reject(Error("Pacote offline não encontrado: "+id))};
  document.head.appendChild(script);
 }).finally(()=>requests.delete(id));
 requests.set(id,task);
 return task;
}
function lookupWord(doc,c){
 const row=doc&&doc.w&&doc.w[c.i];
 if(!Array.isArray(row)||row.length!==2||!row.every(x=>typeof x==="string"&&x.trim()))throw Error("Palavra sem tradução offline: "+c.i);
 return row;
}
async function card(c,target=lang,known=base){
 if(!c||known===defaults(target))return true;
 const signature=key(target,known);
 if(c._pair===signature)return true;
 try{
  const doc=await load(target,known);
  const [gloss,example]=lookupWord(doc,c);
  if(lang!==target||base!==known)return false;
  c._source=c._source||{pt:c.pt,exPt:c.exPt,pron:c.pron,hook:c.hook};
  c.pt=gloss;c.exPt=example;
  const hints={
    pt:["Ouça pelo botão de áudio.","Compare com o exemplo e repita em voz alta."],
    en:["Listen using the audio button.","Connect the word to its example and repeat aloud."],
    es:["Escucha con el botón de audio.","Relaciona la palabra con el ejemplo y repítela."],
    it:["Ascolta con il pulsante audio.","Associa la parola all'esempio e ripetila."],
    fr:["Écoutez avec le bouton audio.","Associez le mot à l'exemple et répétez-le."],
    de:["Höre mit der Audiotaste zu.","Verbinde das Wort mit dem Beispiel und wiederhole es."]
  };
  [c.pron,c.hook]=hints[known]||hints.pt;
  c._pair=signature;return true;
 }catch(e){console.warn(e);return false}
}
async function built(c,target=lang,known=base,kind="f"){
 if(!c||known===defaults(target))return true;
 const signature=key(target,known);
 if(c._pair===signature)return true;
 try{
  const doc=await load(target,known);
  const pair=(kind==="t"?doc.t:doc.f)[c.idx];
  if(!Array.isArray(pair)||!Array.isArray(pair[1])||pair[1].length!==c.chunks.length
      ||pair[1].some(t=>!t||typeof t!=="string"))throw Error("Frase incompleta: "+target+"-"+known+":"+c.idx);
  if(lang!==target||base!==known)return false;
  c.pt=pair[0];c.chunks.forEach((chunk,i)=>chunk.pt=pair[1][i]);
  c._pair=signature;return true;
 }catch(e){console.warn(e);return false}
}
async function story(storyId,sceneId,target=lang,known=base){
 const doc=await load(target,known);
 const scene=doc?.h?.[storyId]?.[sceneId];
 if(!scene||!Array.isArray(scene.p)||!Array.isArray(scene.e))throw Error("Cena offline incompleta: "+storyId+"/"+sceneId);
 return scene;
}
function restoreCards(cards){
 if(!cards)return;
 cards.forEach(c=>{if(c._source){Object.assign(c,c._source);delete c._pair;}});
}
function glossary(){
 const doc=window.VB_OFFLINE[key(lang,base)];
 if(!doc)return [];
 const out=new Set();
 for(const data of [doc.f||[],doc.t||[]])for(const row of data)for(const chunk of row[1]||[])if(chunk)out.add(chunk);
 return [...out];
}
function clearErrors(){requests.clear()}
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
pt:"<h2>Aprenda no seu idioma</h2><p>Você tem pacotes de tradução instalados para estudar sem internet, inclusive entre idiomas diferentes. Leia o significado e teste seus conhecimentos. As traduções automáticas foram geradas previamente e podem conter imprecisões.</p>",
en:"<h2>Learn from your own language</h2><p>Language pair translations are bundled for offline study. Read the meaning, say the answer aloud and test your understanding. The automatically produced translations may occasionally contain errors.</p>",
es:"<h2>Aprende desde tu idioma</h2><p>Los paquetes de traducción ya están incluidos para estudiar sin conexión. Lee el significado, practica la respuesta y comprueba tu comprensión. Las traducciones automáticas pueden contener errores.</p>",
it:"<h2>Impara dalla tua lingua</h2><p>I pacchetti di traduzione sono inclusi per studiare senza internet. Leggi il significato, pronuncia la risposta e metti alla prova la tua comprensione. Le traduzioni automatiche possono contenere errori.</p>",
fr:"<h2>Apprenez depuis votre langue</h2><p>Les packs de traduction sont intégrés pour apprendre hors ligne. Lisez le sens, prononcez la réponse et testez votre compréhension. Les traductions automatiques peuvent comporter des erreurs.</p>",
de:"<h2>Lerne in deiner Sprache</h2><p>Die Übersetzungspakete sind bereits für die Offline-Nutzung enthalten. Lies die Bedeutung, sprich die Antwort aus und teste dein Verständnis. Automatische Übersetzungen können Fehler enthalten.</p>"
};
function methodHTML(target){
 return '<section>'+METHOD[base]+'</section><section><h2>'+NAME(base)+' → '+NAME(target)+'</h2><p>Offline-Übersetzung / Offline translations / Traduções offline: open-source Argos Translate. Bundled content; no online translation requests during lessons.</p></section>';
}
window.VBPAIR={base:()=>base,primary:defaults,isPrimary,setBase,allowedTarget,load,card,built,story,restoreCards,glossary,clearErrors,name:NAME,msg,applyUI,decorateCard,methodHTML};
allowedTarget(lang);
if(typeof setLang==="function")setLang(lang);
applyUI();
})();
