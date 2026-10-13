/* End-to-end OFFLINE regression. Run after data/ov packs are generated.
 * Starts online only long enough to install PWA; then disables networking. */
const {chromium}=require("playwright-core");
const assert=require("node:assert/strict");
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROME_BIN||"/usr/bin/google-chrome",headless:true,args:["--no-sandbox"]});
 const context=await browser.newContext({viewport:{width:390,height:844},serviceWorkers:"allow"});
 const page=await context.newPage();
 const errors=[],requests=[];
 page.on("pageerror",e=>errors.push(e.message));
 page.on("request",req=>{if(req.url().includes("mymemory.translated.net")||req.url().includes("/translate?"))requests.push(req.url())});
 const LANGUAGES=["de","it","fr","en","es","pt"];
 const primary=t=>t==="pt"?"en":"pt";
 try{
  await page.goto("http://127.0.0.1:8765/",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(async()=>{
   if(!navigator.serviceWorker?.controller)return false;
   const cache=await caches.open("vokabel-v35");
   const entries=await Promise.all([
    cache.match("pair.js?v=2"),
    cache.match("data/ov/de-en.js?v=1"),
    cache.match("data/ov/es-it.js?v=1"),
    cache.match("data/ov/pt-fr.js?v=1"),
   ]);
   return entries.every(Boolean);
  },null,{timeout:180000});
  console.log("Offline cache installed including cross-pair translations");
  await context.setOffline(true);
  await page.reload({waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>window.VBPAIR&&eval("CARDS.length")>=1000,{timeout:30000});
  // Verify all non-primary bundles can be loaded offline.
  const loaded=await page.evaluate(async (languages)=>{
   const result=[];
   for(const target of languages)for(const known of languages){
    if(target===known)continue;
    if(known===(target==="pt"?"en":"pt")){result.push([target,known,"primary"]);continue}
    const doc=await VBPAIR.load(target,known);
    result.push([target,known,doc.w.length,doc.f.length,doc.t.length,Object.keys(doc.h).length]);
   }
   return result;
  },LANGUAGES);
  assert.equal(loaded.length,30);
  for(const entry of loaded.filter(x=>x[2]!=="primary")){
   assert(entry[2]>=1000&&entry[3]>=100&&entry[4]>=15&&entry[5]>=3,
     "Incomplete offline pair: "+JSON.stringify(entry));
  }
  console.log("All 30 choices load offline: 6 originals + 24 pair bundles");
  // Real UI flows using three distinct language pairs in fully disconnected browser.
  for(const [target,known] of [["es","it"],["de","en"],["pt","fr"]]){
   await page.locator("#lang-toggle").click();
   await page.locator('.lang-option[data-lang="'+target+'"]').click();
   await page.locator("#base-language").selectOption(known);
   await page.waitForFunction(([t,b])=>eval("lang")===t&&VBPAIR.base()===b,[target,known]);
   await page.locator('[data-exercise="vocabulario"]').click();
   await page.locator("#play").click();
   await page.waitForFunction(([t,b])=>
    eval("cur")?eval("cur._pair")===(t+"-"+b):false,[target,known],{timeout:10000});
   assert.equal(await page.locator("#pair-retry").count(),0);
   await page.locator("#g-close").click();
   await page.locator("#view-train .exercise-back").click();
   await page.locator('[data-exercise="frases"]').click();
   await page.locator("#hy-play").click();
   await page.waitForFunction(([t,b])=>HYB._state().cur?HYB._state().cur._pair===t+"-"+b:false,[target,known],{timeout:15000});
   await page.locator("#hg-close").click();
   await page.locator("#view-frases .exercise-back").click();
   await page.locator('[data-exercise="historias"]').click();
   await page.locator("#historias [data-open]").first().click();
   await page.locator("#sg-area [data-ch]").first().waitFor({timeout:30000});
   await page.locator("#sg-close").click();
   await page.locator("#view-historias .exercise-back").click();
   console.log(target+"<-"+known+": card, phrases and story offline OK");
  }
  assert.deepEqual(requests,[],"Unexpected external translation API calls");
  assert.deepEqual(errors,[],"JavaScript errors: "+errors.join(" | "));
  console.log("OFFLINE E2E SUCCESS");
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
