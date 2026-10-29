#!/usr/bin/env node
/*
 * probe_fetch_errors.cjs: does a failed data fetch of a block reach the flow handler on TST? Read-only probe for item 2
 * of the user's work list (migration/clarify/RESUME.md), allowed by the user on 2026-10-28.
 *
 *   node migration/clarify/tools/probe_fetch_errors.cjs [--headed] [--late]
 *
 * Question: the compiled blocks have `handleError = function (ex) { return controller.handleError(ex); }`, and no
 * module or runtime file declares `controller`. A screen calls its flow controller instead. The probe aborts one read
 * of a block (HomeFeed, FeedBlock_CommunityPopulation DataActionFetchCount), one read of a screen (CountryDetails
 * DataActionGetLocalityStatistics) and one read of the B4 block SupperMeeting_DetailsBlock (DataActionGetSubdivision),
 * as a failed request (CommunicationException), and records what the app shows. A control run opens HomeFeed and
 * aborts nothing.
 * It uses the skill's modules: site_auth.cjs (sign-in and PIN; only that module reads the secrets) and
 * readonly_guard.cjs (calls that are not reads are aborted). The aborted calls are reads: they do not reach the server.
 * Privacy: the output keeps request names, the class and text of a feedback message (UI text), console error texts
 * (query values, e-mail addresses and long tokens redacted) and `typeof window.controller`. No data of the answers.
 * Output: migration/clarify/review/probe-fetch-errors.json
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
const OUT_JSON = 'migration/clarify/review/probe-fetch-errors.json';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const log = m => console.log(m);
const headed = process.argv.includes('--headed');

let PROFILE, SECRETS, ALLOW, PLAN_DATA;
const abs = r => new URL(r, PROFILE.base).toString();
const pathOf = u => { try { return new URL(u).pathname; } catch { return '?'; } };
/* error text without query values, e-mail addresses or long tokens */
const clean = e => String((e && e.message) || e).split('\n')[0].replace(/\?[^\s'"]*/g, '?<redacted>')
  .replace(/[\w.+-]+@[\w.-]+/g, '<email>').replace(/[A-Za-z0-9_-]{32,}/g, '<redacted>').slice(0, 220);

/* in every document, from the first script on: record each feedback message that is added (it can close itself
   before a sample) and each unhandled rejection (a ReferenceError of the block handleError would show here) */
function recorder() {
  window.__probe = { toasts: [], rejections: [] };
  const note = el => {
    if (!(el instanceof Element)) return;
    const hits = [el, ...el.querySelectorAll('*')].filter(x => /feedback|toast|notification-message/i.test(String(x.className || '')));
    for (const x of hits) {
      const text = (x.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 160);
      if (text) window.__probe.toasts.push({ class: String(x.className).slice(0, 120), text, at: Date.now() });
    }
  };
  new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(note))).observe(document, { childList: true, subtree: true });
  window.addEventListener('unhandledrejection', e => {
    const r = e.reason;
    window.__probe.rejections.push(String((r && (r.name ? r.name + ': ' : '') + (r.message || '')) || r).slice(0, 200));
  });
}
async function newContext(browser) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });   // a service worker would bypass the guard
  await guard.installGuard(ctx, ALLOW);
  await ctx.addInitScript(recorder);
  return ctx;
}
async function ensure(page, o) {
  const ctx = page.context();
  ctx.__authing = true;   // sign-in and PIN calls pass the guard
  try { await auth.ensureSession(page, PROFILE, SECRETS, m => log(`    [auth] ${m}`), o); } finally { ctx.__authing = false; }
}
async function waitReady(page, ms = 2500) { await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {}); await sleep(ms); }
async function signIn(page) {
  const home = abs(PROFILE.home || '/UBTConnect/HomeFeed');
  await page.goto(home, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitReady(page);
  if ((await auth.whereNow(page, PROFILE)) !== 'app') await ensure(page);
  await page.goto(home, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitReady(page);
}
const pending = page => /\/AcceptPendingPolicies/i.test(pathOf(page.url()));
const planRoute = screen => { const s = (PLAN_DATA.screens || []).find(x => x.screen === screen); return s ? s.route : null; };

/* what the page shows: feedback messages and alerts (class and text), and whether a global `controller` exists */
async function shown(page) {
  return page.evaluate(() => {
    const vis = el => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
    const els = [...document.querySelectorAll('[class*="feedback-message"], [role="alert"], .popup-dialog, .osui-feedback-toast')]
      .filter(vis).filter(el => !el.parentElement || !el.parentElement.closest('[class*="feedback-message"]'));
    return {
      messages: els.map(el => ({ class: String(el.className).slice(0, 120), text: (el.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 160) })),
      typeofController: typeof window.controller,
      // a global lexical binding (let/const/class of a classic script) is not a window property
      lexicalController: (() => { try { return typeof controller === 'undefined' ? 'undefined' : `${typeof controller}:${controller && controller.constructor && controller.constructor.name}`; } catch (e) { return 'error: ' + e.message; } })(),
    };
  });
}

/* one probe: abort the reads whose path ends with `action`, open `route`, record what the app shows */
async function probe(page, label, route, action, act) {
  const r = { label, action, kind: null };
  const consoleErrors = [];
  const onConsole = m => { if (m.type() === 'error' || m.type() === 'warning') consoleErrors.push(`${m.type()}: ${clean(m.text())}`); };
  const onPageError = e => consoleErrors.push(`pageerror: ${clean(e)}`);
  page.on('console', onConsole);
  page.on('pageerror', onPageError);
  let aborted = 0;
  const pattern = `**/screenservices/**/${action}`;
  await page.route(pattern, rt => { aborted++; return rt.abort('failed'); });
  try {
    await page.goto(abs(route), { waitUntil: 'domcontentloaded', timeout: 60000 });
    await waitReady(page, 1500);
    if ((await auth.whereNow(page, PROFILE)) !== 'app') {
      await ensure(page);
      await page.goto(abs(route), { waitUntil: 'domcontentloaded', timeout: 60000 });
      await waitReady(page, 1500);
    }
    if (pending(page)) throw new Error('a policy waits for acceptance (AcceptPendingPolicies); accepting writes data');
    r.at = pathOf(page.url());
    if (act) { r.act = await act(page).then(() => 'done', e => 'failed: ' + clean(e)); await sleep(2500); }
    // the toast of ShowCommunicationExceptionMessage can close itself: sample the page several times
    r.samples = [];
    for (let i = 0; i < 6; i++) { r.samples.push(await shown(page)); await sleep(700); }
    const rec = await page.evaluate(() => window.__probe || { toasts: [], rejections: [] });
    const seen = new Map();
    for (const t of rec.toasts) seen.set(t.class + '|' + t.text, { class: t.class, text: t.text });
    r.toastsAdded = [...seen.values()].slice(0, 12);
    r.unhandledRejections = [...new Set(rec.rejections)].slice(0, 10);
  } finally {
    await page.unroute(pattern);
    page.off('console', onConsole);
    page.off('pageerror', onPageError);
  }
  r.aborted = aborted;
  r.consoleErrors = [...new Set(consoleErrors)].slice(0, 20);
  const msgs = new Map();
  for (const s of r.samples) for (const m of s.messages) msgs.set(m.class + '|' + m.text, m);
  r.messagesSeen = [...msgs.values()];
  r.typeofController = r.samples.length ? r.samples[0].typeofController : null;
  r.lexicalController = r.samples.length ? r.samples[0].lexicalController : null;
  delete r.samples;
  const texts = [...new Set([...r.messagesSeen, ...(r.toastsAdded || [])].map(m => m.text))];
  r.result = `${aborted} aborted; ${texts.length ? 'message added: ' + texts.map(t => `"${t.slice(0, 60)}"`).join(', ') : 'no message added'}; `
    + `unhandled rejections: ${(r.unhandledRejections || []).join(' / ') || 'none'}; `
    + `typeof window.controller = ${r.typeofController}; lexical controller = ${r.lexicalController}; console: ${r.consoleErrors.filter(c => /controller|ReferenceError/i.test(c)).join(' / ') || 'no controller error'}`;
  return r;
}

/* the app's own navigation (OutSystems client runtime), so the app does not reload and a held request stays open */
async function appNavigate(page, url) {
  return page.evaluate(u => {
    const M = window.require('OutSystems/ClientRuntime/Main');
    const nav = (M.Internal && M.Internal.Navigation) || M.Navigation;
    const r = nav.navigateTo(u);
    if (r && typeof r.catch === 'function') r.catch(() => {});
  }, url);
}

/* --late: the read of a screen is held open; the user leaves the screen (Back); then the read fails. Does TST still
   show the message of the screen it left? (W23: not verified on TST before 2026-10-28.) */
async function probeLate(page, label, route, action, stay = false) {
  const r = { label, action, kind: 'late' };
  let release, held = 0;
  const gate = new Promise(res => { release = res; });
  const pattern = `**/screenservices/**/${action}`;
  await page.route(pattern, async rt => { held++; await gate; return rt.abort('failed'); });
  try {
    await page.goto(abs('/UBTConnect/HomeFeed'), { waitUntil: 'domcontentloaded', timeout: 60000 });
    await waitReady(page, 2000);
    if ((await auth.whereNow(page, PROFILE)) !== 'app') { await ensure(page); await page.goto(abs('/UBTConnect/HomeFeed'), { waitUntil: 'domcontentloaded', timeout: 60000 }); await waitReady(page, 2000); }
    await appNavigate(page, abs(route));
    const until = Date.now() + 20000;
    while (!held && Date.now() < until) await sleep(200);
    r.held = held;
    r.openedScreen = pathOf(page.url());
    await sleep(800);
    if (!stay) {
      await page.evaluate(() => history.back());
      await page.waitForURL(u => /\/HomeFeed/i.test(u.pathname), { timeout: 15000 }).catch(() => {});
    }
    await sleep(1500);
    r.atRelease = pathOf(page.url());
    const releasedAt = await page.evaluate(() => Date.now());
    release();
    await sleep(4000);
    const rec = await page.evaluate(() => window.__probe || { toasts: [], rejections: [] });
    const seen = new Map();
    for (const t of rec.toasts) if (t.at >= releasedAt) seen.set(t.class + '|' + t.text, { class: t.class, text: t.text });
    r.toastsAfterRelease = [...seen.values()].slice(0, 12);
    r.unhandledRejections = [...new Set(rec.rejections)].slice(0, 10);
    r.atEnd = pathOf(page.url());
  } finally {
    release();
    await page.unroute(pattern);
  }
  const texts = [...new Set(r.toastsAfterRelease.map(m => m.text))];
  r.result = `held ${r.held}; opened ${r.openedScreen}; released at ${r.atRelease}; `
    + `${texts.length ? 'message after release: ' + texts.map(t => `"${t.slice(0, 60)}"`).join(', ') : 'no message after release'}; `
    + `unhandled rejections: ${r.unhandledRejections.join(' / ') || 'none'}`;
  return r;
}

async function main() {
  PLAN_DATA = JSON.parse(fs.readFileSync(PLAN, 'utf8'));
  ALLOW = new Set((PLAN_DATA.defaults || {}).allowActions || []);
  PROFILE = auth.resolveProfile({});
  SECRETS = PROFILE ? auth.loadSecrets(PROFILE, {}) : null;
  if (!PROFILE || !SECRETS) { console.error('site profile or secrets not found: ask the user (see site_auth.cjs)'); process.exit(1); }
  log(`site profile: ${PROFILE.name}; secrets: found; guard on, ${ALLOW.size} confirmed action(s) allowed`);
  const countryRoute = planRoute('CountryDetails');
  if (!countryRoute) { console.error('no CountryDetails route in the capture plan'); process.exit(1); }
  const out = { ranAt: new Date().toISOString(), site: PROFILE.name, account: 'the test account of site_auth (not named)', probes: [] };
  const browser = await pw.chromium.launch({ headless: !headed });
  try {
    const ctx = await newContext(browser);
    const page = await ctx.newPage();
    log('signing in');
    await signIn(page);
    if (pending(page)) throw new Error('a policy waits for acceptance (AcceptPendingPolicies): no probe can run');
    log(`signed in; at ${pathOf(page.url())}`);
    if (process.argv.includes('--late')) {
      const late = [
        ['late control: CountryDetails held, the user stays, then its read fails (a message is expected)', 'CountryDetails', 'DataActionGetLocalityStatistics', true],
        ['late: CountryDetails (screen data action at start) left with Back, then its read fails', 'CountryDetails', 'DataActionGetLocalityStatistics'],
        ['late: SupperMeeting_DetailsBlock (Refresh in the block OnReady) left with Back, then its read fails', 'SupperMeeting_Details', 'DataActionGetSubdivision'],
      ];
      for (const [label, screen, action, stay] of late) {
        const route = planRoute(screen);
        if (!route) continue;
        const res = await probeLate(page, label, route, action, stay).catch(e => ({ label, error: clean(e) }));
        out.probes.push(res);
        log(`${label}: ${res.error ? 'error: ' + res.error : res.result}`);
      }
    }
    const plan = process.argv.includes('--late') ? [] : [
      ['control: HomeFeed, nothing aborted', '/UBTConnect/HomeFeed', 'DataActionNoSuchAction', 'control'],
      ['block: HomeFeed / FeedBlock_CommunityPopulation', '/UBTConnect/HomeFeed', 'DataActionFetchCount', 'block'],
      ['screen: CountryDetails', countryRoute, 'DataActionGetLocalityStatistics', 'screen'],
    ];
    const smRoute = !process.argv.includes('--late') && planRoute('SupperMeeting_Details');
    if (smRoute) plan.push(['block: SupperMeeting_Details / SupperMeeting_DetailsBlock (B4)', smRoute, 'DataActionGetSubdivision', 'block']);
    if (plan.length) plan.push(['block of UBTConnect_EmbedFeed: HomeFeed / Embedded_FeedCMS', '/UBTConnect/HomeFeed', 'DataActionGetFeedConfig', 'block-other-module']);
    const meRoute = plan.length && planRoute('MyEntertaining');
    if (meRoute) plan.push(['block of UBTConnect_EmbedMyEntertaining: MyEntertaining / Embedded_MyEntertaining (B4)', meRoute, 'DataActionGetEntertainingConfig', 'block-other-module']);
    const lsRoute = plan.length && planRoute('LegacyShareObject');
    // the search of ProfileList runs only when the user types: type three letters (a read; the guard stays on)
    const typeSearch = async pg => { const i = pg.locator("[data-block='Share_UI.ProfileList'] input").first(); await i.click({ timeout: 10000 }); await i.type('abc', { delay: 120 }); };
    if (lsRoute) plan.push(['block of Connect2_LegacyShared: LegacyShareObject / ProfileList search', lsRoute, 'DataActionGetAvailableUsers', 'block-other-module', typeSearch]);
    for (const [label, route, action, kind, act] of plan) {
      let res;
      try { res = await probe(page, label, route, action, act); } catch (e) { res = { label, action, error: clean(e), at: pathOf(page.url()) }; }
      res.kind = kind;
      out.probes.push(res);
      log(`${label}: ${res.error ? 'error: ' + res.error : res.result}`);
    }
    out.blocked = [...new Set(ctx.__blocked || [])];
  } finally { await browser.close(); }
  fs.writeFileSync(process.argv.includes('--late') ? OUT_JSON.replace('.json', '-late.json') : OUT_JSON, JSON.stringify(out, null, 1));
  log(`→ ${process.argv.includes('--late') ? OUT_JSON.replace('.json', '-late.json') : OUT_JSON}`);
}

main().catch(e => { console.error(clean(e)); process.exit(1); });
