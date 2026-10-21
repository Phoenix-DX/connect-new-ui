// Find real test-account ids for routes with parameters (scope-plan Q2 a, 2026-10-14). For each job: open a screen
// with the saved session (read-only guard on with the plan's allow list; PIN unlock / sign-in by site_auth.cjs), click
// the nth element matching a selector, and record the URL the app navigates to. Only id / code parameter values are
// kept; text parameters are recorded by name (the capture plan uses fictional text, Q3 a). No response body is read.
// Usage (project root): node migration/tools/route_discovery.cjs <jobs.json> [--out migration/capture-ids.json]
//   jobs: [ { "from": "/UBTConnect/MessageList", "click": "<css selector>", "nth": 0, "expect": "MessageDetail" } ]
//   "keepText": true keeps text values too: only for app labels (menu subjects, place names), never personal data.
//   "pre": ["<selector>", …] clicked first (e.g. a tab); "dump": true lists the block names on the target (names only).
const path = require('path');
const fs = require('fs');
const { chromium } = require(require.resolve('playwright', { paths: [process.cwd()] }));
const SK = path.resolve('.claude/skills/outsystems-screen-spec/scripts');
const auth = require(path.join(SK, 'site_auth.cjs'));
const guard = require(path.join(SK, 'readonly_guard.cjs'));

const STORAGE = '.auth/state.json';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const log = m => console.log(`  [auth] ${m}`);
const ID_PARAM = /(Id|ID|Code|Group|GUID)$/;

async function settle(page, profile, secrets, url) {
  // a fresh tab is sent to the PIN lock 16-20 s after the load on TST: wait for it, unlock, reload in this tab
  const end = Date.now() + 35000;
  const target = new URL(url).pathname;
  while (Date.now() < end) {
    if ((await auth.whereNow(page, profile)) !== 'app') {
      const ctx = page.context();
      ctx.__authing = true;
      try { await auth.ensureSession(page, profile, secrets, log); } finally { ctx.__authing = false; }
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      break;
    }
    if (new URL(page.url()).pathname !== target) break;
    await sleep(500);
  }
  await page.waitForSelector('.layout', { timeout: 20000 }).catch(() => {});
  await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
  await sleep(1500);
}

(async () => {
  const jobs = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
  const outArg = process.argv.indexOf('--out');
  const out = outArg > 0 ? process.argv[outArg + 1] : 'migration/capture-ids.json';
  const plan = JSON.parse(fs.readFileSync('migration/capture-plan.json', 'utf8'));
  const allow = new Set((plan.defaults && plan.defaults.allowActions) || []);
  const profile = auth.resolveProfile({});
  const secrets = auth.loadSecrets(profile, {});
  if (!profile || !secrets) throw new Error('site profile or secrets missing (see site_auth.cjs)');
  const results = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, 'utf8')) : {};
  const browser = await chromium.launch();
  try {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block', storageState: STORAGE });
    await guard.installGuard(ctx, allow);
    const page = await ctx.newPage();
    let unlocked = false;
    for (const job of jobs) {
      const url = new URL(job.from, profile.base).toString();
      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
        if (!unlocked) { await settle(page, profile, secrets, url); unlocked = true; }   // same tab keeps the unlock
        else { await page.waitForSelector('.layout', { timeout: 20000 }).catch(() => {}); await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {}); await sleep(1500); }
        for (const sel of job.pre || []) { await page.locator(sel).first().click({ timeout: 15000 }); await sleep(2000); }
        if (!job.click) {   // look only: list the blocks shown after the pre clicks (names only)
          await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {}); await sleep(1500);
          const names = await page.evaluate(() => { const c = {}; for (const e of document.querySelectorAll('[data-block]')) { const n = e.getAttribute('data-block'); c[n] = (c[n] || 0) + 1; } return c; });
          console.log(`look ${job.from} after ${JSON.stringify(job.pre || [])}:`, Object.entries(names).filter(([n]) => !/^(BasePatterns|Adaptive|Layout|Layouts|NavigationHandler|LayoutRuntime|Utilities|Private|App_PIN|PIN|Fingerprint|OutSystemsUIOverrides)\.|SkeletonSection|Icon$|IconInline/.test(n)).sort((x, y) => y[1] - x[1]).slice(0, 18).map(([n, k]) => `${n}×${k}`).join(', '));
          continue;
        }
        const loc = page.locator(job.click).nth(job.nth || 0);
        await loc.waitFor({ state: 'visible', timeout: 15000 });
        const before = new URL(page.url()).pathname;
        await loc.click();
        await page.waitForURL(u => new URL(u).pathname !== before, { timeout: 20000 });
        const to = new URL(page.url());
        const screen = to.pathname.split('/').pop();
        const params = {}, textParams = [];
        for (const [k, v] of to.searchParams) { if (job.keepText || ID_PARAM.test(k) || /^-?\d+$/.test(v)) params[k] = v; else textParams.push(k); }
        const ok = !job.expect || screen === job.expect;
        results[job.expect || screen] = { from: job.from, click: job.click, screen, params, textParams, at: new Date().toISOString() };
        console.log(`${ok ? 'ok ' : 'UNEXPECTED'} ${job.from} → ${screen} ${JSON.stringify(params)}${textParams.length ? ' (text: ' + textParams.join(', ') + ')' : ''}`);
        if (job.dump) {
          await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {}); await sleep(2000);
          const names = await page.evaluate(() => { const c = {}; for (const e of document.querySelectorAll('[data-block]')) { const n = e.getAttribute('data-block'); c[n] = (c[n] || 0) + 1; } return c; });
          const skip = /^(BasePatterns|Adaptive|Layout|Layouts|NavigationHandler|LayoutRuntime|Utilities|Private|App_PIN|PIN|Fingerprint|OutSystemsUIOverrides)\.|SkeletonSection|Icon$|IconInline/;
          console.log('   blocks:', Object.entries(names).filter(([n]) => !skip.test(n)).sort((a, b) => b[1] - a[1]).slice(0, 25).map(([n, k]) => `${n}×${k}`).join(', '));
        }
      } catch (e) { console.log(`FAILED ${job.from} [${job.click}]: ${String(e.message).split('\n')[0].slice(0, 160)}`); }
    }
    const blocked = [...new Set(ctx.__blocked)];
    if (blocked.length) console.log('guard blocked:', blocked.join(', '));
  } finally { await browser.close(); }
  fs.writeFileSync(out, JSON.stringify(results, null, 1));
  console.log(`→ ${out}`);
})().catch(e => { console.error(String(e).slice(0, 300)); process.exit(1); });
