// Validate all 24 pre-built language directions and prevent broken offline deployment.
const fs=require("node:fs"),vm=require("node:vm"),path=require("node:path");
const {load,PRIMARY}=require("./ov/lib");
const languages=["de","it","fr","en","es","pt"];
const source=Object.fromEntries(languages.map(l=>[l,load(l)]));
let count=0,totalBytes=0;
const problems=[];
for(const target of languages)for(const base of languages){
 if(target===base||base===PRIMARY(target))continue;
 const id=target+"-"+base, file=path.join(__dirname,"..","data","ov",id+".js");
 if(!fs.existsSync(file)){problems.push("missing "+id);continue}
 const content=fs.readFileSync(file,"utf8"),ctx={window:{VB_OFFLINE:{}}};ctx.VB_OFFLINE=ctx.window.VB_OFFLINE;
 try{vm.runInNewContext(content,ctx,{timeout:3000})}catch(e){problems.push(id+": JS "+e.message);continue}
 const d=ctx.VB_OFFLINE[id],original=source[target];
 if(!d){problems.push(id+": missing VB_OFFLINE entry");continue}
 if(!Array.isArray(d.w)||d.w.length!==original.words.length)problems.push(id+": wrong word count");
 if(!Array.isArray(d.f)||d.f.length!==original.frases.length)problems.push(id+": wrong phrase count");
 if(!Array.isArray(d.t)||d.t.length!==original.textos.length)problems.push(id+": wrong paragraph count");
 if(Object.keys(d.h||{}).length!==original.hist.length)problems.push(id+": wrong story count");
 const valid=(x)=>typeof x==="string"&&x.trim().length>0;
 for(let i=0;i<(d.w||[]).length;i++){
  if(!Array.isArray(d.w[i])||d.w[i].length!==2||!d.w[i].every(valid))problems.push(id+": word "+i+" incomplete");
 }
 for(const [key,sourceKey] of [["f","frases"],["t","textos"]]){
  for(let i=0;i<Math.min((d[key]||[]).length,original[sourceKey].length);i++){
   const r=d[key][i],orig=original[sourceKey][i];
   if(!Array.isArray(r)||r.length!==2||!valid(r[0])||!Array.isArray(r[1])||r[1].length!==orig[3].length||!r[1].every(valid))
    problems.push(id+":"+key+"["+i+"] incomplete");
  }
 }
 for(const h of original.hist){
  const t=d.h?.[h.id];
  if(!t){problems.push(id+": story "+h.id+" missing");continue}
  for(const [sceneId,c] of Object.entries(h.cenas)){
   const v=t[sceneId];
   if(!v||!Array.isArray(v.p)||v.p.length!==c.p.length||!Array.isArray(v.e)||v.e.length!==(c.escolhas||[]).length){
    problems.push(id+": scene "+h.id+"/"+sceneId+" incomplete");continue
   }
   for(let p=0;p<c.p.length;p++){
    const tr=v.p[p];if(!Array.isArray(tr)||tr.length!==2||!valid(tr[0])||!Array.isArray(tr[1])||
      tr[1].length!==c.p[p][2].length||!tr[1].every(valid))problems.push(id+": paragraph "+h.id+"/"+sceneId+"/"+p);
   }
   if(!v.e.every(valid))problems.push(id+": choices "+h.id+"/"+sceneId);
  }
 }
 count++;totalBytes+=Buffer.byteLength(content);
 console.log(id+": "+d.w.length+" words, "+d.f.length+" phrases, "+d.t.length+" texts, "+
  Object.keys(d.h||{}).length+" stories; "+Math.round(Buffer.byteLength(content)/1024)+" KB");
}
console.log("Validated "+count+"/24 offline packs, "+Math.round(totalBytes/1048576*10)/10+" MiB");
if(problems.length){console.error("PROBLEMS "+problems.length+"\n"+problems.slice(0,50).join("\n"));process.exitCode=1}
else if(count!==24){console.error("Missing packs");process.exitCode=1}
