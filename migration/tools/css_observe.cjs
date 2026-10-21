// Read-only observation: which stylesheets the original app has in the document as the user moves between screens
// in-app (HomeFeed → bell → MessageList → back). Guard on with the plan allow list, service workers blocked.
// Usage: node migration/tools/css_observe.cjs
const path = require('path');
const fs = require('fs');
const { chromium } = require(require.resolve('playwright', { paths: [process.cwd()] }));
const SK = path.resolve('.claude/skills/outsystems-screen-spec/scripts');
const auth = require(path.join(SK, 'site_auth.cjs'));
const guard = require(path.join(SK, 'readonly_guard.cjs'));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const sheets = page => page.evaluate(() => [...document.styleSheets].map(s => (s.href ? s.href.split('/').pop().split('?')[0] : `<style ${s.ownerNode && s.ownerNode.id || ''}>`)));
(async () => {
  const plan = JSON.parse(fs.readFileSync('migration/capture-plan.json', 'utf8'));
  const profile = auth.resolveProfile({});
  const secrets = auth.loadSecrets(profile, {});
  const browser = await chromium.launch();
  try {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block', storageState: '.auth/state.json' });
    await guard.installGuard(ctx, new Set(plan.defaults.allowActions || []));
    const page = await ctx.newPage();
    await page.goto(new URL('/UBTConnect/HomeFeed', profile.base).toString(), { waitUntil: 'domcontentloaded', timeout: 60000 });
    const end = Date.now() + 40000;
    while (Date.now() < end && (await auth.whereNow(page, profile)) === 'app') await sleep(500);
    await auth.ensureSession(page, profile, secrets, () => {});
    await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
    await sleep(2000);
    const a = await sheets(page);
    console.log(`1. ${new URL(page.url()).pathname}: ${a.length} sheets\n   ${a.join(', ')}`);
    await page.locator('[data-block="App_Common_Blocks.App_NotificationIcon"]').first().click({ timeout: 15000 });
    await page.waitForURL(u => !u.pathname.endsWith('/HomeFeed'), { timeout: 20000 }).catch(() => {});
    await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
    await sleep(2500);
    const b = await sheets(page);
    console.log(`2. ${new URL(page.url()).pathname}: ${b.length} sheets; added: ${b.filter(x => !a.includes(x)).join(', ') || '-'}; removed: ${a.filter(x => !b.includes(x)).join(', ') || '-'}`);
    console.log(`   order: ${b.join(', ')}`);
    await page.goBack();
    await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
    await sleep(2500);
    const c = await sheets(page);
    console.log(`3. back ${new URL(page.url()).pathname}: ${c.length} sheets; added vs 2: ${c.filter(x => !b.includes(x)).join(', ') || '-'}; removed vs 2: ${b.filter(x => !c.includes(x)).join(', ') || '-'}`);
    if (ctx.__blocked.length) console.log('guard blocked:', [...new Set(ctx.__blocked)].join(', '));
  } finally { await browser.close(); }
})().catch(e => { console.error(String(e).slice(0, 300)); process.exit(1); });
