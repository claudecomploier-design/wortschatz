const CACHE="vokabel-v18";
const FILES=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","icon-180.png","data/de.js?v=4","data/it.js?v=4","data/fr.js?v=4","frases.js?v=3","data/frases-de.js?v=1","data/frases-it.js?v=1","data/frases-fr.js?v=1","img/av/01-cowboy.webp","img/av/02-gorro.webp","img/av/03-chuva.webp","img/av/04-mago.webp","img/av/05-esboco.webp","img/av/06-bone.webp","img/av/07-explorador.webp","img/av/08-surfista.webp","img/av/09-neve.webp","img/av/10-girassol.webp","img/av/11-acampamento.webp","img/av/12-outono.webp","img/av/13-leitor.webp","img/av/14-pirata.webp","img/av/15-rede.webp","img/av/16-noite.webp"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(FILES.map(f=>c.add(f).catch(()=>{})))));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET")return;
  if(u.origin===location.origin){
    // rede primeiro (pega atualizacoes), cache quando estiver offline
    e.respondWith(fetch(e.request,{cache:"no-cache"}).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match("index.html"))));
  }else if(u.host.includes("fonts.g")){
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{const c=n.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return n})));
  }
});
