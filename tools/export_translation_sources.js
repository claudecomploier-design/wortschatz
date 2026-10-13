// Export canonical data for offline translation build. No network calls.
const fs=require("node:fs");
const {load,PRIMARY}=require("./ov/lib");
const languages=["de","it","fr","en","es","pt"];
const output={};
for(const target of languages){
 const D=load(target);
 output[target]={
  primary:PRIMARY(target),
  words:D.words.map(r=>[r[2]||"",r[7]||""]),
  phrases:D.frases.map(r=>[r[2],r[3].map(c=>c[1])]),
  texts:D.textos.map(r=>[r[2],r[3].map(c=>c[1])]),
  stories:D.hist.map(h=>({
   id:h.id,
   title:h.titulo,
   description:h.desc,
   scenes:Object.fromEntries(Object.entries(h.cenas).map(([id,c])=>[id,{
    cap:c.cap,nota:c.nota||"",
    paragraphs:(c.p||[]).map(p=>[p[1],p[2].map(b=>b[1])]),
    choices:(c.escolhas||[]).map(e=>e.pt),
    ending:c.fim?c.fim.titulo:""
   }]))
  }))
 };
}
const dest=process.argv[2]||"/tmp/vokabel-translation-sources.json";
fs.writeFileSync(dest,JSON.stringify(output));
for(const [lang,d] of Object.entries(output)) console.log(lang,d.words.length,d.phrases.length,d.texts.length,d.stories.length);
