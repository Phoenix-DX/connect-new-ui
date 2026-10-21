// Read-only observation (PINUnlock Q1): a fresh signed-in tab opens a screen, the app sends it to the PIN lock, the PIN
// is entered by site_auth (secrets read by the script itself), and the screen reached after the unlock is printed.
// Guard on with the plan allow list, service workers blocked.
// Usage: node migration/tools/unlock_target.cjs [/UBTConnect/Menu] [--then /UBTConnect/Splash]  (then: open that path in the
// unlocked tab and print where the app goes in the next 15 s)
const path = require('path');
const fs = require('fs');
const { chromium } = require(require.resolve('playwright', { paths: [process.cwd()] }));
const SK = path.resolve('.claude/skills/outsystems-screen-spec/scripts');
const auth = require(path.join(SK, 'site_auth.cjs'));
const guard = require(path.join(SK, 'readonly_guard.cjs'));
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const start = process.argv[2] || '/UBTConnect/Menu';
  const plan = JSON.parse(fs.readFileSync('migration/capture-plan.json', 'utf8'));
  const profile = auth.resolveProfile({});
  const secrets = auth.loadSecrets(profile, {});
  const browser = await chromium.launch();
  try {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block', storageState: '.auth/state.json' });
    await guard.installGuard(ctx, new Set(plan.defaults.allowActions || []));
    const page = await ctx.newPage();
    const steps = [];
    page.on('framenavigated', f => { if (f === page.mainFrame()) steps.push(new URL(f.url()).pathname); });
    await page.goto(new URL(start, profile.base).toString(), { waitUntil: 'domcontentloaded', timeout: 60000 });
    const end = Date.now() + 40000;
    while (Date.now() < end && (await auth.whereNow(page, profile)) === 'app') await sleep(500);
    console.log('before unlock:', new URL(page.url()).pathname, '| state:', await auth.whereNow(page, profile));
    await auth.ensureSession(page, profile, secrets, m => console.log('  [auth]', m));
    await sleep(6000);
    console.log('after unlock:', new URL(page.url()).pathname + (new URL(page.url()).search ? ' (+query)' : ''));
    console.log('navigation:', steps.join(' → '));
    const ti = process.argv.indexOf('--then');
    if (ti > 0) {
      steps.length = 0;
      await page.goto(new URL(process.argv[ti + 1], profile.base).toString(), { waitUntil: 'domcontentloaded', timeout: 60000 });
      await sleep(15000);
      console.log(`then ${process.argv[ti + 1]}: now at`, new URL(page.url()).pathname, '| navigation:', steps.join(' → '));
    }
    if (ctx.__blocked.length) console.log('guard blocked:', [...new Set(ctx.__blocked)].join(', '));
  } finally { await browser.close(); }
})().catch(e => { console.error(String(e).slice(0, 300)); process.exit(1); });
