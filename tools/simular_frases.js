// Uso: node tools/simular_frases.js <lang> <n_frases> <prob_abrir_traducao>  (simula um usuário e mostra a progressão)
const fs=require("fs"),vm=require("vm");
const L=process.argv[2]||"de", N=+process.argv[3]||120, openP=+process.argv[4]||0;
const mem={};const g={window:{},console,Math,Date,JSON,Set,Map,Object,Array,String,Number,Infinity,setTimeout};
g.window=g;g.VB_DATA={};g.VB_FRASES={};g.localStorage={getItem:k=>mem[k]||null,setItem:(k,v)=>mem[k]=v};
vm.createContext(g);
vm.runInContext(fs.readFileSync(`data/${L}.js`,"utf8"),g);
vm.runInContext(`var lang="${L}";var LANGS={${L}:{name:"X",code:"X"}};var prog={};
var store={get(k,d){const v=localStorage.getItem(k);return v?JSON.parse(v):d},set(k,v){localStorage.setItem(k,JSON.stringify(v))}};
var esc=s=>String(s);var speak=()=>{};var addActivity=()=>{};
var CARDS=VB_DATA.${L}.map((r,i)=>({i,id:r[0]}));
var OUT={innerHTML:""};var hidden={hidden:false};
var $=id=>id==="frases"?OUT:id==="view-frases"?hidden:BTN[id]||(BTN[id]={onclick:null});var BTN={};`,g);
vm.runInContext(fs.readFileSync(`data/frases-${L}.js`,"utf8"),g);
vm.runInContext(fs.readFileSync("frases.js","utf8"),g);
g.HYB.open();
for(let k=0;k<N;k++){
  const st=g.HYB._state(); const c=st.cur;
  const line=c.allForeign?("[FULL] "+c.fl):c.chunks.map(x=>x.foreign?x.fl.toUpperCase():x.pt).join(" ");
  if(k<12||k%15===0||k>N-6) console.log(String(k).padStart(3),`fr=${st.frontier}`.padEnd(7),`${Math.round(c.ratio*100)}%`.padStart(4),line);
  if(Math.random()<openP&&g.BTN["hy-show"]&&g.BTN["hy-show"].onclick) g.BTN["hy-show"].onclick();
  g.BTN["hy-next"].onclick();
}
const H=g.HYB._state().H;const ws=Object.keys(H.w);
const lv={nova:0,aprendendo:0,familiar:0,dominada:0};ws.forEach(w=>lv[g.HYB._fam(w).stage]++);
console.log("palavras tocadas:",ws.length,lv);
