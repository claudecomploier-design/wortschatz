const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
for(const lang of ['en','es','pt']){
  const ctx={window:{}};
  for(const kind of ['VB_DATA','VB_FRASES','VB_TEXTOS','VB_METODO']){ctx.window[kind]={};ctx[kind]=ctx.window[kind];}
  const files=[`data/${lang}.js`,`data/frases-${lang}.js`,`data/textos-${lang}.js`,`data/metodo-${lang}.js`];
  for(const file of files)vm.runInNewContext(fs.readFileSync(file,'utf8'),ctx,{filename:file});
  const cards=ctx.VB_DATA[lang],phrases=ctx.VB_FRASES[lang],texts=ctx.VB_TEXTOS[lang];
  assert(Array.isArray(cards)&&cards.length===1000,`${lang}: esperado exatamente 1000 palavras`);
  assert.equal(phrases.length,130,`${lang}: esperado 130 frases`);
  assert.equal(texts.length,18,`${lang}: esperado 18 parágrafos`);
  assert.equal(new Set(cards.map(r=>r[0].toLowerCase())).size,cards.length,`${lang}: palavras repetidas`);
  assert(cards.every(r=>r.length===8&&r[0]&&r[2]&&r[3]&&r[4]&&r[5]&&r[6]&&r[7]),`${lang}: carta incompleta`);
  assert(phrases.every(r=>Array.isArray(r[3])&&r[3].length>=2),`${lang}: frases sem blocos`);
  assert(texts.every(r=>Array.isArray(r[3])&&r[3].length>=8),`${lang}: parágrafos sem blocos suficientes`);
  assert(ctx.VB_METODO[lang].includes('<section>'),`${lang}: método ausente`);
  console.log(`${lang}: ${cards.length} palavras, ${phrases.length} frases, ${texts.length} textos, método OK (estrutura validada)`);
}
