/* QA of the demo build against the dev server: each URL of qa-urls.json is opened on both (fresh context, 390×844 mobile,
   service workers allowed), then the visible text, console/page errors, failed requests and broken images are compared.
   Run from the project root, with the dev server (npm --prefix app run dev) and the demo (node app/dist-demo/serve.mjs
   8099) up:
     node migration/tools/qa_dev_demo.cjs [--settle 9000] [--out <dir>]
   --settle: wait after load in ms (default 9000; the first demo visit also installs the service worker, so shorter
   settles show timing differences that are not bugs). Writes <dir>/results.json and <dir>/shots/<Screen>.{dev,demo}.png
   (default dir: a new folder under the OS temp dir) and prints the screens that differ. */
const fs = require('fs');
const os = require('os');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const { chromium } = require(path.join(ROOT, 'node_modules/playwright'));
const urls = require('./qa-urls.json');

const arg = (name, fallback) => {
  const i = process.argv.indexOf(name);
  return i > 0 ? process.argv[i + 1] : fallback;
};
const settle = Number(arg('--settle', '9000'));
const out = arg('--out', fs.mkdtempSync(path.join(os.tmpdir(), 'qa-dev-demo-')));
const shots = path.join(out, 'shots');
fs.mkdirSync(shots, { recursive: true });

const DEV = 'http://localhost:5173';
const DEMO = 'http://localhost:8099';
const UA = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36';

async function probe(browser, base, item, tag) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, userAgent: UA, isMobile: true, hasTouch: true, serviceWorkers: 'allow' });
  const page = await ctx.newPage();
  const r = { consoleErrors: [], pageErrors: [], failed: [] };
  page.on('console', (m) => { if (m.type() === 'error') r.consoleErrors.push(m.text().slice(0, 200)); });
  page.on('pageerror', (e) => r.pageErrors.push(String(e).slice(0, 200)));
  page.on('requestfailed', (q) => { const f = q.failure()?.errorText || ''; if (!/ERR_ABORTED/.test(f)) r.failed.push(q.url().replace(base, '') + ' ' + f); });
  page.on('response', (s) => { if (s.status() >= 400) r.failed.push(s.url().replace(base, '') + ' ' + s.status()); });
  try {
    await page.goto(base + item.url, { waitUntil: 'load', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
    await page.waitForTimeout(settle);
    r.finalPath = new URL(page.url()).pathname;
    Object.assign(r, await page.evaluate(() => ({
      text: document.body.innerText.replace(/\s+/g, ' ').trim(),
      broken: [...document.querySelectorAll('img')].filter((i) => i.complete && i.getAttribute('src') && i.naturalWidth === 0).map((i) => i.getAttribute('src').slice(0, 80)),
    })));
    await page.screenshot({ path: path.join(shots, `${item.screen}.${tag}.png`) });
  } catch (e) {
    r.error = String(e).slice(0, 200);
  }
  await ctx.close();
  return r;
}

(async () => {
  const browser = await chromium.launch();
  const results = [];
  const queue = [...urls];
  const worker = async () => {
    while (queue.length) {
      const item = queue.shift();
      const dev = await probe(browser, DEV, item, 'dev');
      const demo = await probe(browser, DEMO, item, 'demo');
      results.push({ screen: item.screen, url: item.url, dev, demo });
      process.stdout.write('.');
    }
  };
  await Promise.all([worker(), worker(), worker(), worker()]);
  await browser.close();
  results.sort((a, b) => a.screen.localeCompare(b.screen));
  fs.writeFileSync(path.join(out, 'results.json'), JSON.stringify(results, null, 1));
  const problems = results.flatMap(({ screen, dev, demo }) => {
    const p = [];
    if (dev.text !== demo.text) p.push(`text differs (dev ${dev.text?.length ?? '-'} chars, demo ${demo.text?.length ?? '-'})`);
    if (dev.finalPath !== demo.finalPath) p.push(`ends on ${dev.finalPath} vs ${demo.finalPath}`);
    for (const [tag, r] of [['dev', dev], ['demo', demo]]) {
      if (r.error) p.push(`${tag}: ${r.error}`);
      if (r.pageErrors.length) p.push(`${tag}: ${r.pageErrors.length} page error(s)`);
      if (r.broken?.length) p.push(`${tag}: ${r.broken.length} broken image(s)`);
    }
    return p.length ? [`${screen}: ${p.join('; ')}`] : [];
  });
  console.log(`\n${results.length} screens, ${results.length - problems.length} identical, ${problems.length} to look at`);
  for (const line of problems) console.log('  ' + line);
  console.log(`results: ${out}`);
})();
