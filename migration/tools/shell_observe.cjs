// Read-only observation of the original app shell on TST (app-shell.spec.md section 12: U1, U2, U3).
// Run A: a fresh browser with no session opens the module root and a protected screen; logs where the app goes.
// Run B: the saved session opens a screen in a fresh tab, then reloads it; logs where the app goes (Splash? PIN lock?)
//        and prints ONLY whitelisted, non-secret settings from the SynchAppContext answer (PIN and device-check
//        switches). The answer also holds keys and connection strings: they are never printed or stored.
// Guard: read-only guard with the plan's allow list (CLAUDE.md rule 6); service workers blocked; no sign-in, no PIN.
// Usage (project root): node migration/tools/shell_observe.cjs [--secs 40]
const path = require('path');
const fs = require('fs');
const { chromium } = require(require.resolve('playwright', { paths: [process.cwd()] }));
const SK = path.resolve('.claude/skills/outsystems-screen-spec/scripts');
const auth = require(path.join(SK, 'site_auth.cjs'));
const guard = require(path.join(SK, 'readonly_guard.cjs'));

const SECS = Number(process.argv[process.argv.indexOf('--secs') + 1]) || 40;
const SETTINGS = ['Environment', 'PIN_Use', 'PIN_SessionInactivity_Use', 'PIN_SessionInactivity_Seconds', 'PIN_SessionInactivity_Navigate',
  'PIN_EnforceOnReady', 'PIN_EnableFingerprint', 'CheckDeviceOnReady', 'MinWebViewVersion_Chrome', 'MinWebViewVersion_Safari',
  'MinNativeAppVersion', 'Firebase_CloudMessage_Use', 'Firebase_RealTimeDatabase_Use', 'AzureInsights_Use', 'DeviceAwareness_Use',
  'Streamline_Use', 'Streamline_TOTP_LoginCheck', 'PluginUse_PrivacyScreen', 'EnableFrameworkExtension'];
const sleep = ms => new Promise(r => setTimeout(r, ms));

function pick(obj, out = {}) {   // whitelisted keys only, anywhere in the answer
  if (Array.isArray(obj)) obj.forEach(x => pick(x, out));
  else if (obj && typeof obj === 'object') for (const [k, v] of Object.entries(obj)) {
    if (SETTINGS.includes(k) && (typeof v !== 'object' || v === null)) out[k] = v;
    else pick(v, out);
  }
  return out;
}

async function timeline(page, url, label, profile) {
  const t0 = Date.now(), steps = [], calls = [];
  const mark = u => { const p = new URL(u).pathname + (new URL(u).search ? ' (+query)' : ''); if (!steps.length || steps[steps.length - 1].p !== p) steps.push({ s: ((Date.now() - t0) / 1000).toFixed(1), p }); };
  page.on('framenavigated', fr => { if (fr === page.mainFrame()) mark(fr.url()); });
  page.on('request', r => { if (r.url().includes('/screenservices/')) calls.push(r.url().split('/').pop()); });
  if (url) await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 }).catch(e => steps.push({ s: '-', p: 'goto failed: ' + e.message.split('\n')[0] }));
  else await page.reload({ waitUntil: 'domcontentloaded', timeout: 60000 });
  const end = Date.now() + SECS * 1000;
  let where = '';
  while (Date.now() < end) {
    mark(page.url());
    if (profile) { const w = await auth.whereNow(page, profile).catch(() => '?'); if (w !== where) { steps.push({ s: ((Date.now() - t0) / 1000).toFixed(1), p: `[state: ${w}]` }); where = w; } }
    await sleep(500);
  }
  console.log(`\n== ${label}\n` + steps.map(x => `  ${x.s}s ${x.p}`).join('\n') + `\n  calls: ${[...new Set(calls)].join(', ')}`);
}

(async () => {
  const plan = JSON.parse(fs.readFileSync('migration/capture-plan.json', 'utf8'));
  const allow = new Set((plan.defaults && plan.defaults.allowActions) || []);
  const profile = auth.resolveProfile({});
  const base = profile.base.replace(/\/$/, '');
  const browser = await chromium.launch();
  try {
    // Run A: no session
    for (const target of ['/', '/HomeFeed']) {
      const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });
      await guard.installGuard(ctx, allow);
      await timeline(await ctx.newPage(), base + target, `A: no session, open /UBTConnect${target}`, profile);
      if ((ctx.__blocked || []).length) console.log('  guard blocked:', [...new Set(ctx.__blocked)].join(', '));
      await ctx.close();
    }
    // Run B: saved session, fresh tab, then reload in the same tab
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block', storageState: '.auth/state.json' });
    await guard.installGuard(ctx, allow);
    const page = await ctx.newPage();
    let settings = null;
    page.on('response', async r => {
      if (!r.url().endsWith('/ActionAppManager_SynchAppContext') || settings) return;
      try { settings = pick(await r.json()); } catch { /* not JSON */ }
    });
    await timeline(page, base + '/HomeFeed', 'B: session, fresh tab, open /UBTConnect/HomeFeed', profile);
    await timeline(page, null, 'B: same tab, reload (not unlocked)', profile);
    console.log('\n== SynchAppContext settings (whitelisted, non-secret)\n' + JSON.stringify(settings, null, 1));
    if ((ctx.__blocked || []).length) console.log('guard blocked:', [...new Set(ctx.__blocked)].join(', '));
    await ctx.close();
  } finally { await browser.close(); }
})().catch(e => { console.error(String(e).slice(0, 300)); process.exit(1); });
