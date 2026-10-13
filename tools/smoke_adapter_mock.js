const {chromium}=require("playwright-core");
const assert=require("node:assert/strict"),{load}=require("./ov/lib");
const langs=["de","it","fr","en","es","pt"],cache={};
function mock(target,base){
 const id=target+"-"+base;
 if(cache[id])return cache[id];
 const D=load(target),tr=s=>"["+base+"] "+s;
 const rows=L=>L.map(r=>[tr(r[2]),r[3].map(c=>tr(c[1]))]);
 const h=Object.fromEntries(D.hist.map(st=>[st.id,Object.fromEntries(Object.entries(st.cenas).map(([id,c])=>[id,{
  p:c.p.map(p=>[tr(p[1]),p[2].map(ch=>tr(ch[1]))]),
  e:(c.escolhas||[]).map(x=>tr(x.pt))
 }]))]));
 return cache[id]={w:D.words.map(r=>[tr(r[2]),tr(r[7])]),f:rows(D.frases),t:rows(D.textos),h};
}
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROME_BIN||"/usr/bin/google-chrome",headless:true,args:["--no-sandbox"]});
 const context=await browser.newContext({viewport:{width:390,height:844},serviceWorkers:"block"});
 const page=await context.newPage(),errors=[],network=[];
 page.on("pageerror",e=>errors.push(e.message));
 page.on("request",r=>{if(r.url().includes("mymemory.translated.net"))network.push(r.url())});
 await context.route("**/data/ov/*.js*",async route=>{
  const name=route.request().url().split("/").pop().split("?")[0].slice(0,-3);
  const [target,base]=name.split("-");
  if(!langs.includes(target)||!langs.includes(base))return route.abort();
  await route.fulfill({status:200,contentType:"text/javascript",body:"window.VB_OFFLINE=window.VB_OFFLINE||{};VB_OFFLINE["+JSON.stringify(name)+"]="+JSON.stringify(mock(target,base))+";"});
 });
 try{
  await page.goto("http://127.0.0.1:8765/",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>window.VBPAIR&&eval("CARDS.length")>999);
  for(const [target,base] of [["es","it"],["de","en"],["pt","fr"]]){
   await page.locator("#lang-toggle").click();
   await page.locator('.lang-option[data-lang="'+target+'"]').click();
   await page.locator("#base-language").selectOption(base);
   await page.locator('[data-exercise="vocabulario"]').click();
   await page.locator("#play").click();
   await page.waitForFunction(([t,b])=>eval("cur")?eval("cur")._pair===t+":"+b:false,[target,base],{timeout:15000});
   assert.equal(await page.locator("#pair-retry").count(),0);
   const gloss=await page.evaluate(()=>eval("cur").pt);
   assert(gloss.startsWith("["+base+"]"),"Card did not use offline base");
   await page.locator("#g-close").click();
   await page.locator("#view-train .exercise-back").click();
   await page.locator('[data-exercise="frases"]').click();
   await page.locator("#hy-play").click();
   await page.waitForFunction(([t,b])=>HYB._state().cur?HYB._state().cur._pair===t+":"+b:false,[target,base],{timeout:15000});
   await page.locator("#hg-close").click();
   await page.locator("#view-frases .exercise-back").click();
   await page.locator('[data-exercise="historias"]').click();
   await page.locator("#historias [data-open]").first().click();
   await page.locator("#sg-area [data-ch]").first().waitFor({timeout:15000});
   assert((await page.locator("#sg-area").textContent()).includes("["+base+"]"),"Story not translated");
   await page.locator("#sg-close").click();
   await page.locator("#view-historias .exercise-back").click();
   console.log(target+"<-"+base+" synthetic-pack UI success");
  }
  assert.deepEqual(errors,[],"JavaScript exceptions: "+errors.join(" / "));
  assert.deepEqual(network,[],"Runtime API calls");
  console.log("MOCK PACK E2E SUCCESS");
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
