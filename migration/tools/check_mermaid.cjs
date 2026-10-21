// Check that every Mermaid diagram in migration/sitemap.html renders. Usage: node migration/tools/check_mermaid.cjs migration/sitemap.html
// Open the sitemap page headless, wait for mermaid, report diagrams rendered vs failed.
const { chromium } = require(require.resolve('playwright', { paths: [process.cwd()] }));
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)); });
  await page.goto('file://' + path.resolve(process.argv[2]));
  await page.waitForFunction(() => [...document.querySelectorAll('pre.mermaid')].every(p => p.getAttribute('data-processed')), null, { timeout: 30000 }).catch(() => {});
  const r = await page.evaluate(() => [...document.querySelectorAll('pre.mermaid')].map((p, i) => ({
    i: i + 1, svg: !!p.querySelector('svg'), err: /Syntax error|Parse error/i.test(p.textContent) ? p.textContent.slice(0, 150) : '' })));
  console.log(JSON.stringify(r)); if (errors.length) console.log('console errors:', errors.slice(0, 5));
  await browser.close();
})();
