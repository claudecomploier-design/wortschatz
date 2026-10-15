/* Vokabel 1000: toca áudio neural pré-gerado (audio/<lang>/<k>.mp3, edge-tts no GitHub Actions).
   Envolve window.speak; quando não há mp3 para o texto, ou ele falha, usa a voz do navegador.
   Carregar depois do script principal e de voice.js. */
(function(){
"use strict";
var orig=null,player=null,loaded={};
function norm(t){return String(t==null?"":t).trim().replace(/\s+/g," ")}
function fnv(s){var h=0x811c9dc5;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0}return ("0000000"+h.toString(16)).slice(-8)}
function key(t,l){return fnv(l+"|"+norm(t))}
function curLang(){try{return typeof lang==="string"?lang:"de"}catch(e){return "de"}}
function today(){var d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function has(t,l){try{l=l||curLang();var s=window.VB_AUDIO&&window.VB_AUDIO[l];return !!(s&&s.has(key(t,l)))}catch(e){return false}}
function loadIndex(l){
 try{
  l=l||curLang();if(loaded[l])return;loaded[l]=1;
  var s=document.createElement("script");s.src="audio/"+l+"/index.js?v="+today();s.async=true;
  s.onerror=function(){loaded[l]=0};
  document.head.appendChild(s);
 }catch(e){}
}
function stop(){try{if(player){player.onerror=null;player.pause()}}catch(e){}}
function fallback(t){try{if(orig)return orig(t)}catch(e){}}
function play(t,l){
 try{
  l=l||curLang();
  if(!has(t,l))return false;
  try{if(window.speechSynthesis)speechSynthesis.cancel()}catch(e){}
  stop();
  if(!player){player=new Audio();player.preload="auto"}
  var done=false,fail=function(){if(done)return;done=true;fallback(t)};
  player.onerror=fail;
  player.src="audio/"+l+"/"+key(t,l)+".mp3";
  var p=player.play();
  if(p&&typeof p.catch==="function")p.catch(function(err){if(!err||err.name!=="AbortError")fail()});
  return true;
 }catch(e){return false}
}
function speak(t){
 try{if(play(t,curLang()))return}catch(e){}
 stop();
 return fallback(t);
}
try{
 if(typeof window.speak==="function"&&!window.speak.__vbAudio){
  orig=window.speak;speak.__vbAudio=true;window.speak=speak;
 }
}catch(e){}
try{loadIndex(curLang());window.addEventListener("vb-lang-changed",function(){loadIndex(curLang())})}catch(e){}
window.VBAUDIO={key:key,has:has,play:play};
})();
