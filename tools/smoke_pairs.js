const {chromium}=require('playwright-core');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:320,height:768}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('https://api.mymemory.translated.net/**',async route=>{
  const u=new URL(route.request().url()),query=u.searchParams.get('q')||'';
  const pair=u.searchParams.get('langpair')||'xx|yy';
  await route.fulfill({status:200,contentType:'application/json',headers:{'access-control-allow-origin':'*'},body:JSON.stringify({responseStatus:200,responseData:{translatedText:'['+pair+'] '+query}})});
 });
 try{
 await page.goto('http://127.0.0.1:8765/',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>window.VBPAIR&&eval('CARDS.length')>=1000);
 for(const width of [320,360,390,768]){
  await page.setViewportSize({width,height:768});
  await page.locator('#lang-toggle').click();
  const r=await page.locator('#lang-menu').boundingBox();
  assert(r&&r.x>=-1&&r.x+r.width<=width+1,'menu clipped horizontally '+width+': '+JSON.stringify(r));
  for(const opt of await page.locator('#lang-menu .lang-option').all()){
   const o=await opt.boundingBox();assert(o&&o.x>=r.x&&o.x+o.width<=r.x+r.width+1,'option clipped');
  }
  await page.locator('#lang-toggle').click();
 }
 const languages=['de','en','it','es','fr','pt'];
 for(const target of languages){
  await page.locator('#lang-toggle').click();
  await page.locator('[data-lang="'+target+'"]').click();
  await page.waitForFunction(t=>eval('lang')===t&&eval('CARDS.length')>=1000,target);
  for(const base of languages.filter(l=>l!==target)){
   await page.locator('#base-language').selectOption(base);
   await page.waitForFunction(([b,t])=>window.VBPAIR.base()===b&&eval('lang')===t,[base,target]);
   assert.equal(await page.locator('#base-language').inputValue(),base);
  }
 }
 // exercise translated word from Spanish to Italian
 await page.locator('#lang-toggle').click();await page.locator('[data-lang="es"]').click();
 await page.locator('#base-language').selectOption('it');
 await page.locator('[data-exercise="vocabulario"]').click();
 await page.locator('#play').click();
 await page.waitForFunction(()=>document.getElementById('game')&&!document.getElementById('game').hidden);
 await page.waitForFunction(()=>document.querySelector('#train .prompt')||document.querySelector('#pair-retry'),null,{timeout:15000});
 assert(!(await page.locator('#pair-retry').count()),'vocab translation failed');
 assert((await page.locator('#train .prompt').textContent()).includes('[es|it]'),'vocab did not use base');
 await page.locator('#g-close').click();
 // phrases use base and verify quiz remains available
 await page.locator('[data-exercise="frases"]').click();
 await page.waitForSelector('#hy-play');await page.locator('#hy-play').click();
 await page.waitForSelector('#hy-test',{timeout:20000});
 let translated=await page.locator('#hy-play-area').textContent();
 assert(translated.includes('[pt|it]'),'phrase did not use Italian');
 await page.locator('#hg-close').click();
 await page.locator('#view-frases .exercise-back').click();
 // stories use base in story choices
 await page.locator('[data-exercise="historias"]').click();
 await page.waitForSelector('#historias [data-open]',{timeout:10000});
 await page.locator('#historias [data-open]').first().click();
 await page.waitForSelector('#sg-area [data-ch]',{timeout:30000});
 assert((await page.locator('#sg-area').textContent()).includes('[pt|it]'),'story not translated to base');
 await page.locator('#sg-close').click();
 console.log('30 target/base combinations, mobile menu, Spanish→Italian vocabulary, phrases and stories OK');
 assert.deepEqual(errors,[],'page errors '+errors.join('|'));
 } finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});