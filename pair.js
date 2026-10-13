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
  c.pron="Ouça a pronúncia pelo botão de áudio.";
  c.hook="Compare a palavra com seu exemplo e repita em voz alta.";
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
  const pieces=await Promise.all([translateBlock(c.pt),...c.chunks.map(x=>translateBlock(x.pt))]);
  if(lang!==target||base!==from)return false;
  c.pt=pieces[0];c.chunks.forEach((ch,i)=>ch.pt=pieces[i+1]);
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
window.VBPAIR={base:()=>base,primary:defaults,isPrimary,setBase,allowedTarget,translated,card,built,scene,restoreCards,glossary,clearErrors:()=>errors.clear(),name:NAME};
})();