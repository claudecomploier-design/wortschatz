const CACHE="vokabel-v36";
const PAIR_PACKS=["data/ov/de-it.js?v=1","data/ov/de-fr.js?v=1","data/ov/de-en.js?v=1","data/ov/de-es.js?v=1","data/ov/it-de.js?v=1","data/ov/it-fr.js?v=1","data/ov/it-en.js?v=1","data/ov/it-es.js?v=1","data/ov/fr-de.js?v=1","data/ov/fr-it.js?v=1","data/ov/fr-en.js?v=1","data/ov/fr-es.js?v=1","data/ov/en-de.js?v=1","data/ov/en-it.js?v=1","data/ov/en-fr.js?v=1","data/ov/en-es.js?v=1","data/ov/es-de.js?v=1","data/ov/es-it.js?v=1","data/ov/es-fr.js?v=1","data/ov/es-en.js?v=1","data/ov/pt-de.js?v=1","data/ov/pt-it.js?v=1","data/ov/pt-fr.js?v=1","data/ov/pt-es.js?v=1"];
const FILES=[...PAIR_PACKS,"pair.js?v=2","voice.js?v=2","data/en.js?v=4","data/frases-en.js?v=1","data/textos-en.js?v=1","data/historias-en.js?v=2","data/metodo-en.js?v=1","data/es.js?v=4","data/frases-es.js?v=1","data/textos-es.js?v=1","data/historias-es.js?v=2","data/metodo-es.js?v=1","data/pt.js?v=4","data/frases-pt.js?v=1","data/textos-pt.js?v=1","data/historias-pt.js?v=2","data/metodo-pt.js?v=1","./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","icon-180.png","data/de.js?v=4","data/it.js?v=4","data/fr.js?v=4","relatorio.js?v=1","forja-acessorios.js?v=1","forja-gato.js?v=1","comunidade.js?v=2","xp-ui.js?v=1","frases.js?v=8","historias.js?v=2","data/historias-de.js?v=2","data/historias-extra-de.js?v=1","data/historias-it.js?v=2","data/historias-fr.js?v=2","data/frases-de.js?v=1","data/frases-it.js?v=1","data/frases-fr.js?v=1","data/textos-de.js?v=1","data/textos-it.js?v=1","data/textos-fr.js?v=1","img/av/01-cowboy.webp","img/av/02-gorro.webp","img/av/03-chuva.webp","img/av/04-mago.webp","img/av/05-esboco.webp","img/av/06-bone.webp","img/av/07-explorador.webp","img/av/08-surfista.webp","img/av/09-neve.webp","img/av/10-girassol.webp","img/av/11-acampamento.webp","img/av/12-outono.webp","img/av/13-leitor.webp","img/av/14-pirata.webp","img/av/15-rede.webp","img/av/16-noite.webp"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(FILES.map(f=>c.add(f)))));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET")return;
  if(u.origin===location.origin){
    // Bundle versioned with SW: cache-first enables offline navigations and all games.
    e.respondWith((async()=>{
      const c=await caches.open(CACHE);
      const saved=(e.request.mode==="navigate")
        ? (await c.match("index.html")||await c.match("./"))
        : await c.match(e.request);
      if(saved)return saved;
      const response=await fetch(e.request,{cache:"no-cache"});
      if(response.ok)await c.put(e.request,response.clone());
      return response;
    })());
  }else if(u.host.includes("fonts.g")){
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{const c=n.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return n})));
  }
});
