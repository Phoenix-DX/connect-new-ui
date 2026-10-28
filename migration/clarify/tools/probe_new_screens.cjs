#!/usr/bin/env node
/*
 * probe_new_screens.cjs: read-only probe for item 10 (migration/clarify/review/item10-new-screens.md), the screens that
 * the TST publish of 2026-10-27 added (survey-drift-2026-10-28.md, "Screens added on TST").
 *
 *   node migration/clarify/tools/probe_new_screens.cjs [--headed]
 *
 * Steps, on the TST runtime of the signed-in app (no server write, the read-only guard stays on):
 * 1. Open the source screens of the entries and check that the entry is there. No click on an entry:
 *    Notifications (list items), OrbitLanding ("View Passport details"), OrbitAdminLanding (event cards, then the
 *    screen's own server action GetMilestoneScanFF), Notes (pills and cards), Bookmarks (the screen itself).
 * 2. Open /UBTConnect/MyBookmarks and /UBTConnect/BookmarksByGroup: HTTP status, final path, active screen.
 * 3. Last, on HomeFeed with the session in place: evaluate the UBTConnect_Utils helpers that gate the entries (as
 *    migration/tools/flag_probe.cjs does), and read the labels of the bottom bar.
 * It uses the skill's modules site_auth.cjs (sign-in; only that module reads the secrets) and readonly_guard.cjs with
 * the allow list of migration/capture-plan.json defaults.allowActions.
 * Privacy: the output keeps view names, block names, counts, category labels and service names only.
 * Output: migration/clarify/review/probe-new-screens.json
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..');
process.chdir(ROOT);
const SK = path.join(ROOT, '.claude', 'skills', 'outsystems-screen-spec', 'scripts');
let pw;
try { pw = require('playwright'); } catch { console.error('playwright not found'); process.exit(1); }
const auth = require(path.join(SK, 'site_auth.cjs'));
const guard = require(path.join(SK, 'readonly_guard.cjs'));

const PLAN = 'migration/capture-plan.json';
const OUT_JSON = 'migration/clarify/review/probe-new-screens.json';
const HELPERS = ['getHasOrbitAccess', 'getHasC1DirectoryView', 'getHasNewNotifications', 'getHasNewBookmarks',
  'getHasBookmarNote', 'getHasCarouselEnabled'];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const log = m => console.log(m);
const headed = process.argv.includes('--headed');

let PROFILE, SECRETS, ALLOW;
const abs = r => new URL(r, PROFILE.base).toString();
const pathOf = u => { try { return new URL(u).pathname; } catch { return '?'; } };

async function ensure(page) {
  const ctx = page.context();
  ctx.__authing = true;   // sign-in and PIN calls pass the guard
  try { await auth.ensureSession(page, PROFILE, SECRETS, m => log(`    [auth] ${m}`)); } finally { ctx.__authing = false; }
}
async function waitReady(page, ms = 2500) { await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {}); await sleep(ms); }
async function open(page, route) {
  let resp = await page.goto(abs(route), { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitReady(page);
  if ((await auth.whereNow(page, PROFILE)) !== 'app') {
    await ensure(page);
    resp = await page.goto(abs(route), { waitUntil: 'domcontentloaded', timeout: 60000 });
    await waitReady(page);
  }
  return resp ? resp.status() : null;
}
const activeView = page => page.evaluate(() => {
  try { const s = window.require('OutSystems/ClientRuntime/Main').Internal.Controller.BaseViewController.activeScreen; return s ? s.viewName : null; } catch { return null; }
});
async function waitView(page, rx, ms = 20000) {
  for (let t = 0; t < ms; t += 500) { if (rx.test(String(await activeView(page)))) return true; await sleep(500); }
  return false;
}

/* in the page: the gate helpers (flag_probe.cjs way: each client action is its own AMD module) */
const FLAGS = async names => {
  const req = ids => new Promise((res, rej) => window.require(ids, (...m) => res(m), rej));
  const [mod] = await req(['UBTConnect_Utils.controller']);
  const ctl = mod.default;
  const res = {};
  for (const n of names) {
    try {
      await req(['UBTConnect_Utils.controller$' + n[0].toUpperCase() + n.slice(1)]).catch(() => {});
      const r = await Promise.resolve(ctl[n + '$Action']());
      const v = {};
      for (const k in r) if (/Out$/.test(k) && typeof r[k] !== 'function') v[k] = r[k];
      res[n] = Object.keys(v).length === 1 ? Object.values(v)[0] : v;
    } catch (e) { res[n] = 'error: ' + String(e).slice(0, 120); }
  }
  return res;
};
/* in the page: block counts whose name matches a pattern, and the text lines of the first block that matches */
const BLOCKS = ([pattern, textOf]) => {
  const rx = new RegExp(pattern);
  const counts = {};
  document.querySelectorAll('[data-block]').forEach(e => {
    const b = e.getAttribute('data-block');
    if (rx.test(b)) counts[b] = (counts[b] || 0) + 1;
  });
  let lines = null;
  if (textOf) {
    const el = document.querySelector(`[data-block$="${textOf}"]`);
    lines = el ? el.innerText.split('\n').map(s => s.trim()).filter(Boolean).slice(0, 20) : null;
  }
  return { counts, lines };
};

async function main() {
  const plan = JSON.parse(fs.readFileSync(PLAN, 'utf8'));
  ALLOW = new Set((plan.defaults || {}).allowActions || []);
  PROFILE = auth.resolveProfile({});
  SECRETS = PROFILE ? auth.loadSecrets(PROFILE, {}) : null;
  if (!PROFILE || !SECRETS) { console.error('site profile or secrets not found: ask the user (see site_auth.cjs)'); process.exit(1); }
  log(`site profile: ${PROFILE.name}; secrets: found; guard on, ${ALLOW.size} confirmed action(s) allowed`);
  const out = { ranAt: new Date().toISOString(), site: PROFILE.name, account: 'the test account of site_auth (not named)', steps: {} };
  const browser = await pw.chromium.launch({ headless: !headed });
  try {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });
    await guard.installGuard(ctx, ALLOW);
    const page = await ctx.newPage();
    let calls = [];
    page.on('request', r => {
      const p = pathOf(r.url());
      if (/\/(screenservices|moduleservices)\//.test(p)) calls.push(p.replace(/^.*\/(screenservices|moduleservices)\//, ''));
    });
    const takeCalls = () => { const c = [...new Set(calls)]; calls = []; return c; };

    log('signing in');
    await open(page, PROFILE.home || '/UBTConnect/HomeFeed');
    if (/\/AcceptPendingPolicies/i.test(pathOf(page.url()))) throw new Error('a policy waits for acceptance: no probe can run');
    const visit = async (key, route, viewRx, pattern, textOf, extra) => {
      const r = { route };
      try {
        r.httpStatus = await open(page, route);
        r.reachedView = await waitView(page, viewRx);
        await sleep(2500);
        r.view = await activeView(page);
        r.path = pathOf(page.url());
        r.title = await page.title();
        Object.assign(r, await page.evaluate(BLOCKS, [pattern, textOf]));
        if (extra) Object.assign(r, await extra());
      } catch (e) { r.error = String(e && e.message || e).slice(0, 200); }
      r.calls = takeCalls();
      out.steps[key] = r;
      log(`${key}: ${JSON.stringify(r).slice(0, 400)}`);
    };

    // NotificationDetails: the entry is a click on a list item of Notifications (not clicked: MarkAsRead is a write)
    await visit('notifications', '/UBTConnect/Notifications', /Notifications/, 'Notification', null, async () => ({
      listItems: await page.evaluate(() => document.querySelectorAll('.updates-list__list-item').length),
    }));
    // PassportScan: the entry is "View Passport details" of ScreenBlock_OrbitLanding
    await visit('orbitLanding', '/UBTConnect/OrbitLanding', /OrbitLanding/, 'Orbit|Card_', null, async () => ({
      passportLink: await page.evaluate(() => {
        const el = document.querySelector('.orbit-landing-passport-cont');
        return { exists: !!el, visible: !!(el && el.offsetParent !== null), text: el ? el.innerText.trim() : null };
      }),
    }));
    // OrbitAdminMilestones: the entry is an event card of OrbitAdminLanding, gated by GetMilestoneScanFF
    await visit('orbitAdminLanding', '/UBTConnect/OrbitAdminLanding', /OrbitAdminLanding/, 'Orbit|Card_|NoInformation', null, async () => ({
      getMilestoneScanFF: await page.evaluate(async () => {
        try {
          const s = window.require('OutSystems/ClientRuntime/Main').Internal.Controller.BaseViewController.activeScreen;
          if (!s || typeof s.getMilestoneScanFF$ServerAction !== 'function') return { error: 'no server action on the active screen' };
          const r = await s.getMilestoneScanFF$ServerAction(s.callContext());
          return { isScanPerMilestone: r.isScanPerMilestoneOut };
        } catch (e) { return { error: (e && e.name) + ': ' + String(e && e.message || '').slice(0, 120) }; }
      }),
    }));
    // OneSchoolGlobalCarousel: the entry is a OneSchool Global note card while the Notes filter is OneSchool Global
    await visit('notes', '/UBTConnect/Notes', /Notes/, 'Note|ItemCard|Horizontal_Filter|EmptyList', 'Horizontal_Filter_TagList');
    // Bookmarks: the bottom bar opens it with no condition on TST
    await visit('bookmarks', '/UBTConnect/Bookmarks', /Bookmarks/, 'Bookmark|ItemCard|Horizontal_Filter|EmptyList', 'Horizontal_Filter_TagList');
    // The React routes MyBookmarks and BookmarksByGroup: what TST shows at their URLs now
    for (const [key, route] of [['myBookmarks', '/UBTConnect/MyBookmarks'], ['bookmarksByGroup', '/UBTConnect/BookmarksByGroup']]) {
      await visit(key, route, /./, 'Layout|NotFound|Error|Bookmark', null, async () => ({
        notFoundText: await page.evaluate(() => /not found|404|does not exist|doesn't exist|no longer/i.test(document.body.innerText)),
        topBlocks: await page.evaluate(() => [...new Set([...document.querySelectorAll('[data-block]')].slice(0, 6).map(e => e.getAttribute('data-block')))]),
      }));
    }
    // the gate helpers, on HomeFeed once the session is surely there (a first run evaluated them before the redirect
    // to the sign-in, and all came back false)
    await open(page, PROFILE.home || '/UBTConnect/HomeFeed');
    await waitView(page, /HomeFeed/);
    await sleep(3000);
    const home = { view: await activeView(page), path: pathOf(page.url()) };
    home.flags = await page.evaluate(FLAGS, HELPERS);
    home.bottomBar = (await page.evaluate(BLOCKS, ['BottomBarMenu$', 'BottomBarMenu'])).lines;
    home.calls = takeCalls();
    out.steps.homeFeed = home;
    log(`flags: ${JSON.stringify(home.flags)}; bottom bar: ${JSON.stringify(home.bottomBar)}`);
    out.blocked = [...new Set(ctx.__blocked || [])];
    log(`blocked by the guard: ${JSON.stringify(out.blocked)}`);
  } finally { await browser.close(); }
  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 1));
  log(`→ ${OUT_JSON}`);
}
main().catch(e => { console.error(String(e && e.message || e).slice(0, 400)); process.exit(1); });
