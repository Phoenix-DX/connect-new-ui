// Read the per-user feature-flag helpers (UBTConnect_Utils.GetHas…) of the test account on TST. Read-only:
// opens the home screen with the skill's sign-in (site_auth.cjs handles secrets and the saved session), calls the
// client helpers in the page, and prints only flag names and values. Service calls made while probing are listed so
// a write would be visible. See migration/knowledge/feature-flag-helpers.md.
// Usage (project root): node migration/tools/flag_probe.cjs [--out migration/knowledge/flag-values-tst.json]
const path = require('path');
const fs = require('fs');
const { chromium } = require(require.resolve('playwright', { paths: [process.cwd()] }));
const auth = require(path.resolve('.claude/skills/outsystems-screen-spec/scripts/site_auth.cjs'));

const HELPERS = ['getHasNewLDM', 'getHasNewBookmarks', 'getHasBookmarNote', 'getHasNewNotifications', 'getHasCarouselEnabled',
  'getHasC1DirectoryView', 'getHasMapsEnabled', 'getHasPhotobookAccess', 'getHasOrbitAccess', 'getHasOrbitEventBooklet',
  'getHasOrbitHostSurvey', 'getHasAssemble', 'getHasFeedEnabled', 'getHasCustomEvents', 'getHasExtendedShare',
  'getHasDeceasedProfileAccess', 'getHasPersonalEvents', 'getHasAncestry4thGenerationAccess', 'getHasHiddenMembersAccess'];
// flags checked directly with a permission-check wrapper and a static entity record (not through a GetHas… helper)
const RECORDS = [['connect_OutSystems_PermissionCheck', 'outSystems_FF', 'c2EnableSearchByBirthday'],
                 ['connect_LaunchDarkly_PermissionCheck', 'launchDarkly_FF', 'mobileStudentInformation'],
                 ['connect_LaunchDarkly_PermissionCheck', 'launchDarkly_FF', 'mobileDirectoryHouseholdGallery']];
const STORAGE = '.auth/state.json';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const log = m => console.log(`  [auth] ${m}`);

(async () => {
  const outArg = process.argv.indexOf('--out');
  const out = outArg > 0 ? process.argv[outArg + 1] : 'migration/knowledge/flag-values-tst.json';
  const profile = auth.resolveProfile({});
  const secrets = auth.loadSecrets(profile, {});
  if (!profile || !secrets) throw new Error('site profile or secrets missing (see site_auth.cjs)');
  const browser = await chromium.launch();
  try {
    if (!fs.existsSync(STORAGE)) await auth.autoLogin(browser, { viewport: { width: 390, height: 844 } }, profile, secrets, STORAGE, log);
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block', storageState: STORAGE });
    const page = await ctx.newPage();
    await page.goto(new URL(profile.home, profile.base).toString(), { waitUntil: 'domcontentloaded', timeout: 60000 });
    // the app may lock (PIN) or ask to register a moment after the first paint: settle before probing
    for (let i = 0; i < 4; i++) {
      await sleep(3000);
      if ((await auth.whereNow(page, profile)) === 'app') continue;
      await auth.ensureSession(page, profile, secrets, log);
    }
    await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
    const calls = [];
    page.on('request', r => { const u = new URL(r.url()); if (/\/(screenservices|moduleservices)\//.test(u.pathname)) calls.push(u.pathname); });
    const values = await page.evaluate(async ([names, recs]) => {
      const req = ids => new Promise((res, rej) => window.require(ids, (...m) => res(m), rej));
      const [mod] = await req(['UBTConnect_Utils.controller']);
      const ctl = mod.default;
      const res = {};
      for (const n of names) {
        try {
          // each client action is its own AMD module that attaches the function to the controller
          await req(['UBTConnect_Utils.controller$' + n[0].toUpperCase() + n.slice(1)]).catch(() => {});
          const r = await Promise.resolve(ctl[n + '$Action']());
          const v = {};
          for (const k in r) if (/Out$/.test(k) && typeof r[k] !== 'function') v[k] = r[k];
          res[n] = Object.keys(v).length === 1 ? Object.values(v)[0] : v;
        } catch (e) { res[n] = 'error: ' + String(e).slice(0, 120); }
      }
      const [model] = await req(['UBTConnect.model']).catch(() => [null]);
      for (const [fn, ent, rec] of recs) {
        try {
          await req(['UBTConnect_Utils.controller$' + fn[0].toUpperCase() + fn.slice(1)]).catch(() => {});
          const r = await Promise.resolve(ctl[fn + '$Action'](model.default ? model.default.staticEntities[ent][rec] : model.staticEntities[ent][rec]));
          res[`${ent}.${rec}`] = r && 'hasAccessOut' in r ? r.hasAccessOut : 'unknown';
        } catch (e) { res[`${ent}.${rec}`] = 'error: ' + String(e).slice(0, 120); }
      }
      return res;
    }, [HELPERS, RECORDS]);
    await sleep(1500);
    const at = new URL(page.url()).pathname;
    const result = { app: profile.name, account: 'test account (not named)', at, probedAt: new Date().toISOString(), values, callsDuringProbe: [...new Set(calls)] };
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, JSON.stringify(result, null, 1));
    console.log(`page: ${at}`);
    for (const [k, v] of Object.entries(values)) console.log(`  ${k.padEnd(36)} ${JSON.stringify(v)}`);
    console.log(`service calls during probe: ${result.callsDuringProbe.length ? result.callsDuringProbe.join(', ') : 'none'}`);
    console.log(`→ ${out}`);
  } finally { await browser.close(); }
})().catch(e => { console.error(String(e).slice(0, 300)); process.exit(1); });
