// Smoke test browser for the six supported languages.
const { chromium } = require('playwright-core');
const assert = require('node:assert/strict');
const path = require('node:path');
const bin = process.env.CHROME_BIN || '/usr/bin/google-chrome';
(async () => {
  const browser = await chromium.launch({ executablePath: bin, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const pageErrors = [];
  page.on('pageerror', err => pageErrors.push(err.message));
  try {
    await page.goto('http://127.0.0.1:8765/', { waitUntil: 'domcontentloaded' });
    for (const lang of ['en', 'es', 'pt', 'de', 'it', 'fr']) {
      await page.locator('#lang-toggle').click();
      const option = page.locator('.lang-option[data-lang="' + lang + '"]');
      assert.equal(await option.isDisabled(), false, lang + ' should be selectable');
      await option.click();
      await page.waitForFunction(l => eval('lang') === l && eval('CARDS.length') >= 900, lang, {timeout: 18000});
      const cards = await page.evaluate(() => eval('CARDS.length'));
      assert(cards >= 900, lang + ': cards not loaded');
      await page.locator('[data-exercise="frases"]').click();
      await page.waitForFunction(l => Array.isArray(window.VB_FRASES?.[l]) && Array.isArray(window.VB_TEXTOS?.[l]),lang, {timeout:18000});
      const phraseCount = await page.evaluate(l => window.VB_FRASES[l].length,lang);
      assert(phraseCount >= 120, lang + ' phrases missing');
      await page.locator('#view-frases .exercise-back').click();
      await page.locator('[data-exercise="historias"]').click();
      await page.waitForFunction(l => Array.isArray(window.VB_HIST?.[l]),lang,{timeout:18000});
      const storyCount = await page.evaluate(l => window.VB_HIST[l].length,lang);
      assert(storyCount >= 3,lang+' stories missing');
      await page.locator('#view-historias .exercise-back').click();
      await page.locator('[data-exercise="quiz"]').click();
      await page.waitForFunction(() => document.querySelector('#exercise-quiz [data-answer]') !== null,null,{timeout:10000});
      const question = await page.locator('#exercise-quiz h3').textContent();
      assert(question && question.length > 12,lang+' quiz missing question');
      await page.locator('#view-quiz .exercise-back').click();
      console.log(lang + ': '+cards+' cards, '+phraseCount+' phrases, '+storyCount+' stories, quiz OK');
    }
    assert.deepEqual(pageErrors, [],'page errors: '+pageErrors.join('; '));
    console.log('BROWSER SMOKE SUCCESS');
  } finally {
    await browser.close();
  }
})().catch(err => { console.error(err); process.exit(1); });
