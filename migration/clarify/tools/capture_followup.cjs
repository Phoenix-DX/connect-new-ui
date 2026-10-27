#!/usr/bin/env node
/*
 * capture_followup.cjs: four read-only captures on TST for the follow-up pass of clarify-screens
 * (migration/clarify/review/followup.md §3), plus one free check on HomeFeed. Allowed by the user on 2026-10-27.
 *
 *   node migration/clarify/tools/capture_followup.cjs [--only osg,updates,notes,orbit,home] [--headed]
 *
 * It uses the skill's own modules (.claude/skills/outsystems-screen-spec/scripts/):
 *   site_auth.cjs       sign-in and PIN with the site profile; only that module reads the secrets
 *   readonly_guard.cjs  screenservice calls that are not reads are aborted; migration/capture-plan.json
 *                       defaults.allowActions are the names the user confirmed (CLAUDE.md rule 6)
 * Entry routes with test parameters come from migration/capture-plan.json and are kept in memory only.
 * Privacy: the outputs keep request names, parameter names, body shapes, timings and element states. Query values,
 * ids, texts, tokens and response bodies are never written. A body is reduced to its shape (key names, types, list
 * lengths); a boolean is kept only for a sort or flag key.
 * Output: migration/clarify/review/captures.json and captures.md (with --only, the other captures are kept).
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
const OUT_JSON = 'migration/clarify/review/captures.json';
const OUT_MD = 'migration/clarify/review/captures.md';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const log = m => console.log(m);
const argv = process.argv.slice(2);
const opt = n => { const i = argv.indexOf('--' + n); return i < 0 ? null : (argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : true); };

const LD_FLAG = 'Mobile-Directory-list-virtualization';
const UPDATE_ITEM = "[data-block='ConnectCorePatterns.Update_ListItem']";
const OSG_CARD = "[data-block='Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List'] [data-block='ConnectCorePatterns.ImageCard_LazyLoading']";
const OSG_TAG = "[data-block='ConnectPatterns.TagToggle']";
const FILTER_LABEL = "[data-block='App_CommonBlocks_Filter.FilterSheet_Icon_Label']";
const FILTER_SHEET = "[data-block='App_CommonBlocks_Filter.FilterSheet']";

let PROFILE, SECRETS, ALLOW, PLAN_DATA;
const abs = r => new URL(r, PROFILE.base).toString();
const pathOf = u => { try { return new URL(u).pathname; } catch { return '?'; } };
const paramNames = u => { try { return [...new URL(u).searchParams.keys()]; } catch { return []; } };
/* error text without query values, e-mail addresses or long tokens */
const clean = e => String((e && e.message) || e).split('\n')[0].replace(/\?[^\s'"]*/g, '?<redacted>')
  .replace(/[\w.+-]+@[\w.-]+/g, '<email>').replace(/[A-Za-z0-9_-]{32,}/g, '<redacted>').slice(0, 220);

/* ---------- network log: screenservice names with times, bodies kept in memory only ---------- */
const NET = { t0: Date.now(), events: [], bodies: [], ld: [], flagHits: [], scanFlags: false };
const now = () => Date.now();
function attachNet(ctx) {
  ctx.on('request', r => {
    const u = r.url();
    if (/\/screenservices\//.test(u)) {
      let name; try { name = guard.actionOf(u); } catch { return; }
      const ev = { t: now(), name, req: r };
      NET.events.push(ev);
      if (/GetNotes|GetOneSchoolGlobalDetails/.test(name)) {
        let body = null; try { body = JSON.parse(r.postData() || 'null'); } catch { /* not JSON */ }
        NET.bodies.push({ t: ev.t, name, body });
      }
    }
  });
  ctx.on('requestfinished', r => { const ev = NET.events.find(e => e.req === r); if (ev) { ev.end = now(); } });
  ctx.on('requestfailed', r => { const ev = NET.events.find(e => e.req === r); if (ev) { ev.end = now(); ev.failed = (r.failure() || {}).errorText || 'failed'; } });
  ctx.on('response', async res => {
    const u = res.url();
    if (/launchdarkly/i.test(u)) {
      const host = (() => { try { return new URL(u).host; } catch { return '?'; } })();
      const seg = pathOf(u).split('/').filter(Boolean);
      const rec = { t: now(), method: res.request().method(), host, path: '/' + seg.slice(0, 2).join('/') + (seg.length > 2 ? '/<redacted>' : ''), status: res.status() };
      try {
        const txt = await res.text();
        if (txt.includes(LD_FLAG)) {
          const j = JSON.parse(txt);
          const f = j[LD_FLAG];
          rec.flag = { key: LD_FLAG, present: true, value: f && typeof f === 'object' ? f.value : f };
        } else rec.flag = { key: LD_FLAG, present: false };
      } catch { rec.flag = { key: LD_FLAG, present: 'unreadable (stream or not JSON)' }; }
      NET.ld.push(rec);
    } else if (NET.scanFlags && /\/screenservices\//.test(u)) {
      try {
        const txt = await res.text();
        if (/virtualiz/i.test(txt)) {
          const hits = [];
          const walk = (o, p) => {
            if (!o || typeof o !== 'object') return;
            for (const k of Object.keys(o)) {
              const v = o[k];
              if (/virtualiz/i.test(k)) hits.push({ path: p + '.' + k, type: typeof v, value: typeof v === 'boolean' ? v : undefined });
              else if (typeof v === 'string' && /virtualiz/i.test(v)) hits.push({ path: p.replace(/\.\d+$/, '') + '.' + (/^\d+$/.test(k) ? '[i]' : k), type: 'text', equalsFlagKey: v === LD_FLAG });
              walk(v, p + '.' + k);
            }
          };
          walk(JSON.parse(txt), '$');
          NET.flagHits.push({ name: guard.actionOf(u), hits });
        }
      } catch { /* body not readable */ }
    }
  });
}
const callsSince = (t, until = Infinity) => NET.events.filter(e => e.t >= t && e.t <= until)
  .map(e => ({ name: e.name, atMs: e.t - t, ms: e.end ? e.end - e.t : null, ...(e.failed ? { failed: e.failed } : {}) }));
const namesSince = (t, until) => [...new Set(callsSince(t, until).map(c => c.name))];

/* shape of a JSON body: key names, types and list lengths; booleans only for sort and flag keys */
function shape(o, depth = 0, key = '') {
  if (o === null || o === undefined) return 'null';
  if (Array.isArray(o)) return { list: o.length, item: o.length && depth < 6 ? shape(o[0], depth + 1) : undefined };
  if (typeof o === 'object') {
    if (depth >= 6) return 'object';
    const r = {};
    for (const k of Object.keys(o)) r[k] = shape(o[k], depth + 1, k);
    return r;
  }
  if (typeof o === 'boolean') return /sort|newest|flag|virtualiz|has[A-Z]/i.test(key) ? `boolean ${o}` : 'boolean';
  return typeof o === 'number' ? 'number' : 'text';
}
function findKeys(o, re, p = '$', out = []) {
  if (!o || typeof o !== 'object') return out;
  for (const k of Object.keys(o)) {
    const v = o[k], here = Array.isArray(o) ? `${p}[${k}]` : `${p}.${k}`;
    const osList = v && typeof v === 'object' && Array.isArray(v.List) ? v.List : null;   // OutSystems list: { List: [...] }
    const arr = Array.isArray(v) ? v : osList;
    if (re.test(k)) out.push({ path: here, type: arr ? `${osList ? 'OutSystems list' : 'list'} of ${arr.length}` : typeof v,
                                ...(typeof v === 'boolean' ? { value: v } : {}),
                                ...(typeof v === 'string' && /sort/i.test(k) && v.length <= 12 ? { value: v } : {}),
                                ...(arr && arr.length ? { itemType: typeof arr[0] } : {}) });
    if (!Array.isArray(o) || Number(k) < 1) findKeys(v, re, here, out);
  }
  return out;
}

/* ---------- session ---------- */
async function newContext(browser) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });   // a service worker would bypass the guard
  await guard.installGuard(ctx, ALLOW);
  attachNet(ctx);
  return ctx;
}
async function ensure(page, o) {
  const ctx = page.context();
  ctx.__authing = true;   // sign-in and PIN calls pass the guard
  try { await auth.ensureSession(page, PROFILE, SECRETS, m => log(`    [auth] ${m}`), o); } finally { ctx.__authing = false; }
}
async function waitReady(page, ms = 2500) { await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {}); await sleep(ms); }
async function settleAuth(page, url) {
  const end = Date.now() + 35000, target = new URL(url).pathname;
  while (Date.now() < end) {
    if ((await auth.whereNow(page, PROFILE)) !== 'app') {
      await ensure(page);
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await waitReady(page);
      return;
    }
    if (new URL(page.url()).pathname !== target) return;
    await sleep(500);
  }
}
async function signIn(page) {
  const home = abs(PROFILE.home || '/UBTConnect/HomeFeed');
  await page.goto(home, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitReady(page);
  if ((await auth.whereNow(page, PROFILE)) !== 'app') await ensure(page);
  await page.goto(home, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitReady(page);
  await settleAuth(page, home);
}
const pending = page => /\/AcceptPendingPolicies/i.test(pathOf(page.url()));
async function open(page, route, settle = 3000) {
  const url = abs(route);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitReady(page, settle);
  if ((await auth.whereNow(page, PROFILE)) !== 'app') {
    await ensure(page);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await waitReady(page, settle);
  }
  if (pending(page)) throw new Error('a policy waits for acceptance (AcceptPendingPolicies); accepting writes data');
  const target = new URL(url).pathname.toLowerCase();
  for (let i = 0; i < 2 && pathOf(page.url()).toLowerCase() !== target; i++) {   // a late start redirect (HomeFeed): open again
    log(`    the app showed ${pathOf(page.url())}; opening ${new URL(url).pathname} again`);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await waitReady(page, settle + 1500);
  }
  if (pathOf(page.url()).toLowerCase() !== target) throw new Error(`the app shows ${pathOf(page.url())} instead of ${new URL(url).pathname}`);
  return pathOf(page.url());
}
const planRoute = screen => { const s = (PLAN_DATA.screens || []).find(x => x.screen === screen); return s ? s.route : null; };
const blockedSince = (ctx, n) => [...new Set((ctx.__blocked || []).slice(n))];

/* the app's own navigation (OutSystems client runtime); a full page load is detected with a window marker */
async function appNavigate(page, url) {
  return page.evaluate(u => {
    window.__capNoReload = 1;
    try {
      const M = window.require('OutSystems/ClientRuntime/Main');
      const nav = (M.Internal && M.Internal.Navigation) || M.Navigation;
      if (nav && typeof nav.navigateTo === 'function') {
        const r = nav.navigateTo(u);
        if (r && typeof r.catch === 'function') r.catch(() => {});
        return 'OutSystems client runtime: require("OutSystems/ClientRuntime/Main").Internal.Navigation.navigateTo(url)';
      }
    } catch (e) { /* fall through */ }
    history.pushState({}, '', u);
    window.dispatchEvent(new PopStateEvent('popstate', { state: {} }));
    return 'history.pushState + popstate event';
  }, url);
}

/* ---------- capture 1: OneSchoolGlobalDetails, navigation to the open screen with another id ---------- */
async function captureOSG(page) {
  const r = { row: 'Directory_OneSchoolGlobal-056', screen: 'OneSchoolGlobalDetails', dataAction: 'DataActionGetOneSchoolGlobalDetails' };
  const loc = planRoute('Locality_Details');
  if (!loc) throw new Error('no Locality_Details route in the capture plan');
  r.entry = { screen: 'Locality_Details', params: paramNames(abs(loc)), source: 'capture-plan route (values not copied)' };
  await open(page, loc);
  const showTab = async () => {
    if (await page.locator(OSG_CARD).first().isVisible().catch(() => false)) return;
    await page.locator(OSG_TAG).nth(3).click({ timeout: 15000 });
    await page.locator(OSG_CARD).first().waitFor({ state: 'visible', timeout: 25000 });
    await sleep(1200);
  };
  await showTab();
  const n = await page.locator(OSG_CARD).count();
  r.cardsInList = n;
  const openCard = async i => {
    await page.locator(OSG_CARD).nth(i).click({ timeout: 15000 });
    await page.waitForURL(u => /\/OneSchoolGlobalDetails/i.test(u.pathname), { timeout: 30000 });
    await waitReady(page, 2500);
    return new URL(page.url()).searchParams.get('In_OneSchoolGlobalId');
  };
  let idB = null;
  if (n >= 2) {
    idB = await openCard(1);
    await page.evaluate(() => history.back());
    await page.waitForURL(u => /\/Locality_Details/i.test(u.pathname), { timeout: 20000 });
    await waitReady(page, 2000);
    await showTab();
  }
  const tA = now();
  const idA = await openCard(0);
  r.firstOpen = { from: 'Locality_Details OneSchool Global card (in-app tap)', params: paramNames(page.url()),
                  calls: callsSince(tA).filter(c => /OneSchool|Student|LaunchDarkly/i.test(c.name)), allCallNames: namesSince(tA) };
  if (!idB) {
    const p = planRoute('OneSchoolGlobalDetails');
    const planId = p ? new URL(abs(p)).searchParams.get('In_OneSchoolGlobalId') : null;
    if (planId && planId !== idA) idB = planId;
  }
  if (!idB || idB === idA) { r.result = 'not run: no second OneSchool Global id in the locality list or the plan'; return r; }
  r.secondIdSource = n >= 2 ? 'second card of the same locality list' : 'capture-plan route';
  // an in-app link to another OneSchool Global page on the open screen?
  const link = await page.evaluate(a => {
    const l = [...document.querySelectorAll('a[href*="OneSchoolGlobalDetails"]')].find(x => !x.href.includes('In_OneSchoolGlobalId=' + a));
    return !!l;
  }, idA);
  const before = await page.evaluate(() => {
    const sc = [...document.querySelectorAll('.screen-container')];
    sc.forEach(e => e.setAttribute('data-cap-mark', 'before'));
    const main = sc[sc.length - 1];
    window.__capText = main ? main.innerText : '';
    window.__capNoReload = 1;
    return { title: document.title, screenContainers: sc.length };
  });
  const t0 = now();
  const samples = [];
  let method;
  if (link) {
    method = 'in-app link on the open screen';
    await page.evaluate(a => { [...document.querySelectorAll('a[href*="OneSchoolGlobalDetails"]')].find(x => !x.href.includes('In_OneSchoolGlobalId=' + a)).click(); }, idA);
  } else {
    method = await appNavigate(page, `/UBTConnect/OneSchoolGlobalDetails?In_OneSchoolGlobalId=${encodeURIComponent(idB)}`);
    method += ' (no link to another OneSchool Global page exists on the screen)';
  }
  for (let i = 0; i < 40; i++) {   // 100 ms samples for 4 s: screen containers and the marker
    samples.push(await page.evaluate(() => ({ sc: document.querySelectorAll('.screen-container').length,
      marked: document.querySelectorAll('[data-cap-mark="before"]').length })).catch(() => ({ sc: -1, marked: -1 })));
    await sleep(100);
  }
  await waitReady(page, 2500);
  const after = await page.evaluate(() => {
    const sc = [...document.querySelectorAll('.screen-container')];
    const main = sc[sc.length - 1];
    return { title: document.title, screenContainers: sc.length, markerKept: document.querySelectorAll('[data-cap-mark="before"]').length > 0,
             mainMarked: !!(main && main.getAttribute('data-cap-mark') === 'before'), textChanged: (main ? main.innerText : '') !== window.__capText,
             noReload: window.__capNoReload === 1 };
  });
  const urlId = new URL(page.url()).searchParams.get('In_OneSchoolGlobalId');
  const calls = callsSince(t0);
  const details = calls.filter(c => c.name === 'DataActionGetOneSchoolGlobalDetails');
  const bodies = NET.bodies.filter(b => b.t >= t0 && b.name === 'DataActionGetOneSchoolGlobalDetails');
  r.secondNavigation = {
    method, path: pathOf(page.url()), urlIdChanged: urlId === idB, fullPageLoad: !after.noReload,
    dataActionRanAgain: details.length > 0, dataActionCount: details.length, dataActionTimings: details,
    requestBodyShape: bodies.length ? shape(bodies[bodies.length - 1].body) : null,
    requestBodyCarriesNewId: bodies.length ? JSON.stringify(bodies[bodies.length - 1].body).includes(String(idB)) : null,
    requestBodyCarriesOldId: bodies.length ? JSON.stringify(bodies[bodies.length - 1].body).includes(String(idA)) : null,
    allCalls: calls,
    dom: { titleMentionsOneSchool: /OneSchool/i.test(before.title), titleChanged: before.title !== after.title,
           screenContainersBefore: before.screenContainers, screenContainersAfter: after.screenContainers,
           maxScreenContainersDuringTransition: Math.max(...samples.map(s => s.sc)),
           oldScreenElementKept: after.markerKept, currentScreenIsOldElement: after.mainMarked, screenTextChanged: after.textChanged },
  };
  r.result = `${details.length ? 'DataActionGetOneSchoolGlobalDetails ran again' : 'DataActionGetOneSchoolGlobalDetails did not run again'}; `
    + `${after.mainMarked ? 'the screen element was kept (no new screen mounted)' : 'a new screen element was mounted (re-initialised)'}; `
    + `text ${after.textChanged ? 'changed' : 'did not change'}; URL id ${urlId === idB ? 'changed' : 'did not change'}`;
  return r;
}

/* ---------- capture 2: Updates_SingleList scroll anchor ---------- */
const STORAGE_PROBE = () => {
  const out = [];
  const kind = v => { const s = String(v); return /^-?\d+(\.\d+)?$/.test(s) ? 'number' : s.replace(/[0-9]/g, '9').replace(/[A-Za-z]/g, 'a').slice(0, 40); };
  for (const [area, st] of [['localStorage', window.localStorage], ['sessionStorage', window.sessionStorage]]) {
    for (let i = 0; i < st.length; i++) {
      const k = st.key(i), v = st.getItem(k) || '';
      const keyHit = /scroll|anchor/i.test(k), valHit = /scrollAnchor/i.test(v);
      if (!keyHit && !valHit) continue;
      if (/^\$OS_.*\$ApplicationInfo$/.test(k)) continue;   // the runtime manifest: only script file names mention ScrollAnchor
      const rec = { area, key: k.replace(/\d{5,}/g, '<n>'), valueLength: v.length };
      if (/delta/i.test(k) && /^-?\d+(\.\d+)?$/.test(v)) rec.value = Number(v);   // a pixel offset, not member data
      else rec.valueShape = kind(v);
      if (valHit) {
        try {
          const j = JSON.parse(v), inner = [];
          const walk = (o, p) => { if (!o || typeof o !== 'object') return; for (const x of Object.keys(o)) {
            const y = o[x]; if (/scrollAnchor|delta|index/i.test(x)) inner.push({ path: p + '.' + x, type: typeof y, ...(typeof y === 'number' && /delta|index/i.test(x) ? { value: y } : {}) });
            walk(y, p + '.' + x); } };
          walk(j, '$'); rec.innerKeys = inner;
        } catch { rec.innerKeys = 'not JSON'; }
      }
      out.push(rec);
    }
  }
  try {
    const hs = history.state, inner = [];
    const walk = (o, p, d) => { if (!o || typeof o !== 'object' || d > 5) return; for (const x of Object.keys(o)) {
      const y = o[x]; if (/scroll|anchor|delta/i.test(x)) inner.push({ path: p + '.' + x, type: typeof y, ...(typeof y === 'number' && /delta|index|top/i.test(x) ? { value: y } : {}) });
      walk(y, p + '.' + x, d + 1); } };
    walk(hs, 'history.state', 0);
    out.push({ area: 'history.state', topLevelKeys: hs && typeof hs === 'object' ? Object.keys(hs) : typeof hs, scrollKeys: inner });
  } catch { /* no history state */ }
  return out;
};
async function scrollInfo(page) {
  return page.evaluate(sel => {
    const item = document.querySelector(sel);
    let el = item && item.parentElement, host = null;
    while (el && el !== document.body) {
      const cs = getComputedStyle(el);
      if (/(auto|scroll)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight + 5) { host = el; break; }
      el = el.parentElement;
    }
    const h = host || document.scrollingElement;
    window.__capHost = h;
    const desc = h === document.scrollingElement ? 'document.scrollingElement' : `${h.tagName.toLowerCase()}.${[...h.classList].slice(0, 3).join('.')}`;
    return { host: desc, scrollTop: Math.round(h.scrollTop), scrollHeight: h.scrollHeight, clientHeight: h.clientHeight,
             renderedItems: document.querySelectorAll(sel).length,
             itemsHaveScrollAnchorAttr: !!document.querySelector(sel + ' [data-dx-scroll-anchor-id], [data-dx-scroll-anchor-id] ' + sel + ', [data-dx-scroll-anchor-id]' + sel) || !!document.querySelector('[data-dx-scroll-anchor-id]') };
  }, UPDATE_ITEM);
}
async function captureUpdates(page) {
  const ctx = page.context();
  const r = { row: 'Directory_Updates-073/074', screen: 'Updates_SingleList', rounds: [] };
  await open(page, '/UBTConnect/Updates_SingleList', 3500);
  await page.locator(UPDATE_ITEM).first().waitFor({ state: 'visible', timeout: 25000 });
  r.storageAtStart = await page.evaluate(STORAGE_PROBE);
  for (let round = 1; round <= 2; round++) {
    const rec = { round };
    await page.mouse.move(195, 500);
    for (let i = 0; i < 3; i++) { await page.mouse.wheel(0, 600); await sleep(400); }
    await sleep(1500);
    rec.beforeTap = await scrollInfo(page);
    // the tapped item: a fully visible item near the middle of the viewport, a further one in round 2
    const pick = await page.evaluate(([sel, round]) => {
      const items = [...document.querySelectorAll(sel)];
      const vis = items.map((e, i) => ({ i, b: e.getBoundingClientRect() })).filter(x => x.b.top > 120 && x.b.bottom < window.innerHeight - 90 && x.b.height > 20);
      if (!vis.length) return null;
      const x = vis[Math.min(vis.length - 1, round === 1 ? Math.floor(vis.length / 2) : vis.length - 1)];
      items.forEach(e => e.removeAttribute('data-cap-tap'));
      items[x.i].setAttribute('data-cap-tap', String(round));
      const anchor = items[x.i].closest('[data-dx-scroll-anchor-id]') || items[x.i].querySelector('[data-dx-scroll-anchor-id]');
      window.__capAnchor = anchor ? anchor.getAttribute('data-dx-scroll-anchor-id') : null;
      return { renderedIndex: x.i, topInViewport: Math.round(x.b.top), hasScrollAnchorAttr: !!anchor };
    }, [UPDATE_ITEM, round]);
    if (!pick) { rec.result = 'no fully visible update item to tap'; r.rounds.push(rec); continue; }
    rec.tappedItem = pick;
    const nb = (ctx.__blocked || []).length, t0 = now();
    await page.locator(`[data-cap-tap="${round}"]`).click({ timeout: 10000 }).catch(e => { rec.tapError = clean(e); });
    const left = await page.waitForURL(u => !/\/Updates_SingleList/i.test(u.pathname), { timeout: 12000 }).then(() => true).catch(() => false);
    rec.tap = { navigated: left, openedScreen: left ? pathOf(page.url()) : null, params: left ? paramNames(page.url()) : [],
                calls: callsSince(t0), blocked: blockedSince(ctx, nb), ms: now() - t0 };
    rec.storageAfterTap = await page.evaluate(STORAGE_PROBE).catch(() => 'unreadable');
    if (!left) {
      rec.result = `the tap did not open a screen; the guard blocked ${rec.tap.blocked.join(', ') || 'nothing'}`;
      rec.scrollAfterBlockedTap = await scrollInfo(page);
      r.rounds.push(rec);
      continue;
    }
    await waitReady(page, 2500);
    const tb = now();
    await page.evaluate(() => history.back());   // the device Back (popstate), handled by the app's NavigationHandler
    await page.waitForURL(u => /\/Updates_SingleList/i.test(u.pathname), { timeout: 15000 });
    rec.afterBack = [];
    for (const at of [300, 1000, 2500, 4000]) {
      await sleep(at - (now() - tb) > 0 ? at - (now() - tb) : 0);
      const s = await page.evaluate(sel => {
        const h = window.__capHost && window.__capHost.isConnected ? window.__capHost : null;
        const a = window.__capAnchor ? document.querySelector(`[data-dx-scroll-anchor-id="${CSS.escape(window.__capAnchor)}"]`) : null;
        let host = h;
        if (!host) { const item = document.querySelector(sel); let el = item && item.parentElement;
          while (el && el !== document.body) { const cs = getComputedStyle(el); if (/(auto|scroll)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight + 5) { host = el; break; } el = el.parentElement; }
          host = host || document.scrollingElement; }
        return { scrollTop: Math.round(host.scrollTop), sameHostElement: !!h, tappedAnchorTopInViewport: a ? Math.round(a.getBoundingClientRect().top) : null };
      }, UPDATE_ITEM);
      rec.afterBack.push({ msAfterBack: now() - tb, ...s });
    }
    rec.backCalls = callsSince(tb);
    rec.storageAfterBack = await page.evaluate(STORAGE_PROBE);
    const last = rec.afterBack[rec.afterBack.length - 1];
    rec.result = `offset ${rec.beforeTap.scrollTop} before the tap, ${last.scrollTop} after Back (${last.msAfterBack} ms)`;
    r.rounds.push(rec);
  }
  // when the item tap is blocked: leave the screen through the app navigation and come back, to see if the offset stays
  if (r.rounds.every(x => !x.tap || !x.tap.navigated)) {
    const fb = { method: 'not the item tap: app navigation to HomeFeed, then history.back()' };
    try {
      fb.before = await scrollInfo(page);
      const tb = now();
      fb.navigation = await appNavigate(page, '/UBTConnect/HomeFeed');
      fb.left = await page.waitForURL(u => /\/HomeFeed/i.test(u.pathname), { timeout: 15000 }).then(() => true).catch(() => false);
      await waitReady(page, 2000);
      fb.fullPageLoad = !(await page.evaluate(() => window.__capNoReload === 1));
      fb.callsOnHomeFeed = namesSince(tb);
      const tback = now();
      await page.evaluate(() => history.back());
      await page.waitForURL(u => /\/Updates_SingleList/i.test(u.pathname), { timeout: 15000 });
      fb.after = [];
      for (const at of [1000, 2500, 5000, 8000]) {
        await sleep(Math.max(0, at - (now() - tback)));
        fb.after.push({ msAfterBack: now() - tback, ...(await scrollInfo(page)) });
      }
      fb.callsAfterBack = callsSince(tback);
      fb.storage = await page.evaluate(STORAGE_PROBE);
    } catch (e) { fb.error = clean(e); }
    r.fallback = fb;
  }
  r.result = r.rounds.map(x => `round ${x.round}: ${x.result}`).join('; ');
  return r;
}

/* ---------- capture 3: Notes, filter by one year ---------- */
async function captureNotes(page) {
  const r = { row: 'Notes-110', screen: 'Notes', dataAction: 'DataActionGetNotes' };
  const tOpen = now();
  await open(page, '/UBTConnect/Notes', 3500);
  const initial = NET.bodies.filter(b => b.t >= tOpen && b.name === 'DataActionGetNotes');
  r.onOpen = { getNotesCalls: initial.length, keys: initial.length ? findKeys(initial[initial.length - 1].body, /^(Years?|SortByNewest|.*Year.*|.*Sort.*)$/i) : [],
               calls: namesSince(tOpen) };
  const lbl = page.locator(FILTER_LABEL).first();
  await lbl.waitFor({ state: 'visible', timeout: 20000 });
  await sleep(1500);
  await lbl.click({ timeout: 10000 });
  const sheet = page.locator(FILTER_SHEET).first();
  await sleep(1500);
  r.sheetRootVisible = await sheet.isVisible().catch(() => false);
  const years = sheet.getByText(/^\s*(19|20)\d{2}\s*$/);
  const nYears = await years.count();
  let visibleYears = 0;
  for (let i = 0; i < nYears; i++) if (await years.nth(i).isVisible().catch(() => false)) visibleYears++;
  r.yearOptions = visibleYears;
  r.sheetGroups = await sheet.evaluate(s => [...s.querySelectorAll('[data-block]')].map(b => b.getAttribute('data-block'))
    .filter((v, i, a) => a.indexOf(v) === i)).catch(() => []);
  if (!visibleYears) { r.result = 'not run: the filter sheet shows no year option (the test user has no notes on TST)'; return r; }
  for (let i = 0; i < nYears; i++) if (await years.nth(i).isVisible().catch(() => false)) { await years.nth(i).click({ timeout: 8000 }); break; }
  await sleep(600);
  const apply = sheet.getByText('Apply filters', { exact: true });
  r.applyEnabledAfterYear = await apply.isEnabled().catch(() => null);
  const ta = now();
  await apply.click({ timeout: 8000 });
  await waitReady(page, 3000);
  const after = NET.bodies.filter(b => b.t >= ta && b.name === 'DataActionGetNotes');
  r.afterApply = { getNotesCalls: after.length, calls: callsSince(ta) };
  if (after.length) {
    const body = after[after.length - 1].body;
    r.afterApply.bodyTopLevel = body ? Object.keys(body) : null;
    r.afterApply.keys = findKeys(body, /^(Years?|SortByNewest|.*Year.*|.*Sort.*)$/i);
    const vars = body && body.screenData && body.screenData.variables;
    r.afterApply.variablesShape = vars ? shape(vars) : shape(body);
  }
  const yrs = (r.afterApply.keys || []).filter(k => /^Years$/i.test(k.path.split('.').pop()));
  const sort = (r.afterApply.keys || []).filter(k => /^SortByNewest$/i.test(k.path.split('.').pop()));
  r.result = !after.length ? 'DataActionGetNotes did not run after Apply'
    : `Years ${yrs.length ? yrs.map(k => `${k.path} (${k.type})`).join(', ') : 'absent'}; SortByNewest ${sort.length ? sort.map(k => `${k.path} (${'value' in k ? k.value : k.type})`).join(', ') : 'absent'}`;
  return r;
}

/* ---------- capture 4: OrbitAdminLanding and the LaunchDarkly flag ---------- */
async function captureOrbit(page) {
  const r = { row: 'Legacy_OrbitAdminFlow-031', screen: 'OrbitAdminLanding', flag: LD_FLAG,
              access: 'direct route /UBTConnect/OrbitAdminLanding: J26 records that no test account is an Orbit admin (no Orbit Admin item in Services)' };
  const ld0 = NET.ld.length, t0 = now();
  NET.scanFlags = true;
  r.openedPath = await open(page, '/UBTConnect/OrbitAdminLanding', 4000);
  await sleep(2000);
  NET.scanFlags = false;
  r.callsOnOpen = callsSince(t0);
  r.launchDarklyRequests = NET.ld.slice(ld0);
  r.launchDarklyRequestsSinceAppStart = NET.ld.map(x => ({ method: x.method, host: x.host, path: x.path, status: x.status, flag: x.flag }));
  r.screenserviceResponsesMentioningVirtualization = NET.flagHits;
  const tc = now();
  r.clientEvaluation = await page.evaluate(async key => {
    const req = ids => new Promise((res, rej) => window.require(ids, (...m) => res(m), rej));
    const out = {};
    try {
      const [mod] = await req(['UBTConnect_Utils.controller']);
      const ctl = mod.default;
      await req(['UBTConnect_Utils.controller$IsListVirtualizationDisabled']).catch(() => {});
      const a = await Promise.resolve(ctl.isListVirtualizationDisabled$Action());
      out.IsListVirtualizationDisabled = a && 'hasListVirtualizationDisabledOut' in a ? a.hasListVirtualizationDisabledOut : 'no output';
    } catch (e) { out.IsListVirtualizationDisabled = 'error: ' + String(e).slice(0, 120); }
    try {
      const [model] = await req(['UBTConnect_Utils.model']);
      const m = model.default || model;
      const rec = m.staticEntities.launchDarkly_FF.mobileDirectoryListVirtualization;
      if (typeof rec === 'string') { out.staticRecord = rec; out.staticRecordIsFlagKey = rec === key; return out; }
      const attrs = {};
      for (const k of Object.keys(rec || {})) { const v = rec[k]; if (['string', 'number', 'boolean'].includes(typeof v)) attrs[k] = v; }
      if (rec && rec.attributes) for (const k of Object.keys(rec.attributes)) attrs[k] = rec.attributes[k];
      out.staticRecordAttributes = attrs;
      out.staticRecordMentionsKey = JSON.stringify(rec).includes(key);
    } catch (e) { out.staticRecord = 'error: ' + String(e).slice(0, 120); }
    return out;
  }, LD_FLAG).catch(e => ({ error: clean(e) }));
  r.callsDuringClientEvaluation = namesSince(tc);
  r.dom = await page.evaluate(() => {
    const lists = [...document.querySelectorAll('.list, [data-list], [disable-virtualization]')];
    return { listsOnScreen: lists.length,
             withDisableVirtualizationAttr: document.querySelectorAll('[disable-virtualization]').length,
             disableVirtualizationValues: [...new Set([...document.querySelectorAll('[disable-virtualization]')].map(e => e.getAttribute('disable-virtualization')))],
             withDisableVirtualizationClass: document.querySelectorAll('[class*="disable-virtualization"]').length,
             lists: lists.slice(0, 6).map(e => ({ classes: [...e.classList].slice(0, 5).join(' '), disableVirtualization: e.getAttribute('disable-virtualization'), children: e.children.length })),
             adminLandingBlock: !!document.querySelector("[data-block*='AdminLanding']"),
             // the List widget reads the extended property in code (shouldVirtualizeList): read its React props
             listWidgetProps: [...document.querySelectorAll('.list')].slice(0, 6).map(el => {
               const fk = Object.keys(el).find(k => /^__react(InternalInstance|Fiber)\$/.test(k));
               let f = fk ? el[fk] : null;
               for (let i = 0; f && i < 15; i++, f = f.return) {
                 const pr = f.memoizedProps || (f.stateNode && f.stateNode.props);
                 if (pr && pr.extendedProperties !== undefined && pr.source !== undefined) {
                   const ep = pr.extendedProperties || {};
                   return { extendedPropertyNames: Object.keys(ep), disableVirtualization: ep['disable-virtualization'] === undefined ? 'not set' : String(ep['disable-virtualization']),
                            virtualized: !ep || String(ep['disable-virtualization']).toLowerCase() !== 'true', levelsUp: i };
                 }
               }
               return { found: false, reactKey: !!fk };
             }) };
  });
  // localStorage cache of the LaunchDarkly client, if any (key names redacted)
  r.ldLocalStorage = await page.evaluate(key => {
    const out = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!/^ld[:_$]/i.test(k) && !/launchdarkly/i.test(k)) continue;
      const v = localStorage.getItem(k) || '';
      let val;
      try { const j = JSON.parse(v); const f = j[key] !== undefined ? j[key] : (j.flags || {})[key]; val = f === undefined ? 'absent' : (f && typeof f === 'object' ? f.value : f); } catch { val = 'not JSON'; }
      out.push({ key: k.split(/[:$]/)[0] + ':<redacted>', flagValue: val });
    }
    return out;
  }, LD_FLAG).catch(() => []);
  const ldVals = r.launchDarklyRequestsSinceAppStart.filter(x => x.flag && x.flag.present === true).map(x => x.flag.value);
  r.result = `${r.openedPath}; IsListVirtualizationDisabled (Connect_LaunchDarkly_PermissionCheck.HasAccess) = ${JSON.stringify(r.clientEvaluation.IsListVirtualizationDisabled)}`
    + `; LD client responses with the flag: ${ldVals.length ? JSON.stringify([...new Set(ldVals)]) : 'none seen'}`
    + `; SynchAppContext PermissionList holds the flag key: ${NET.flagHits.some(h => h.hits.some(x => x.equalsFlagKey))}`
    + `; List widget disable-virtualization: ${JSON.stringify(r.dom.listWidgetProps.map(x => x.disableVirtualization))}`;
  return r;
}

/* ---------- free check: HomeFeed, open an update and go Back (Home-111) ---------- */
async function captureHome(page) {
  const ctx = page.context();
  const r = { row: 'Home-111', screen: 'HomeFeed' };
  const t0 = now();
  await open(page, '/UBTConnect/HomeFeed', 4000);
  r.callsOnOpen = namesSince(t0);
  const item = page.locator(UPDATE_ITEM).first();
  const roundTrip = async (label, go) => {
    const x = { via: label };
    const nb = (ctx.__blocked || []).length, ts = now();
    await go().catch(e => { x.tapError = clean(e); });
    x.navigated = await page.waitForURL(u => !/\/HomeFeed/i.test(u.pathname), { timeout: 12000 }).then(() => true).catch(() => false);
    x.openCalls = callsSince(ts); x.blocked = blockedSince(ctx, nb);
    if (!x.navigated) return x;
    x.openedScreen = pathOf(page.url());
    await waitReady(page, 2500);
    const tb = now();
    await page.evaluate(() => history.back());
    await page.waitForURL(u => /\/HomeFeed/i.test(u.pathname), { timeout: 15000 });
    await waitReady(page, 4000);
    x.backCalls = callsSince(tb);
    x.fetchUpdatesAgain = x.backCalls.some(c => /FetchUpdates/.test(c.name));
    x.getServicesAgain = x.backCalls.some(c => /GetServices/.test(c.name));
    return x;
  };
  r.updateTap = await item.isVisible().catch(() => false) || await item.count() ? await roundTrip('an update item on HomeFeed', () => item.click({ timeout: 10000 })) : { navigated: false, note: 'no update item on HomeFeed' };
  if (!r.updateTap.navigated) {
    await open(page, '/UBTConnect/HomeFeed', 4000);
    r.fallback = await roundTrip("Updates 'View all' (J5 step 1), not an update item", () => page.locator('text=View all').first().click({ timeout: 10000 }));
  }
  const used = r.updateTap.navigated ? r.updateTap : r.fallback;
  r.servicesCallNamesOnOpen = r.callsOnOpen.filter(n => /Services/i.test(n));
  r.result = used && used.navigated
    ? `${used === r.updateTap ? 'update opened' : 'update tap blocked, View all used'}; after Back: FetchUpdates ${used.fetchUpdatesAgain ? 'ran again' : 'did not run'}, GetServices ${used.getServicesAgain ? 'ran again' : 'did not run'}`
    : `not run: ${r.updateTap.blocked && r.updateTap.blocked.length ? `the guard blocked ${r.updateTap.blocked.join(', ')}` : 'no navigation'}`;
  return r;
}

/* ---------- report ---------- */
function writeMd(all) {
  const L = [];
  const j = x => '`' + JSON.stringify(x) + '`';
  L.push('# Follow-up captures on TST (clarify-screens)', '');
  L.push(`Run: ${all.ranAt}. Script: \`migration/clarify/tools/capture_followup.cjs\`. Source: \`followup.md\` §3. Read-only: the skill guard`
    + ` was on (${all.allowedActions} confirmed app-start actions allowed). Viewport 390x844, headless Chromium, service workers blocked.`, '');
  L.push('Privacy: the file keeps request names, parameter names, body shapes, timings and element states. It keeps no query value,'
    + ' id, member text, token or response body.', '');
  L.push(`Account: ${all.account}. Guard blocks in the whole run: ${all.blockedAll.length ? all.blockedAll.map(x => '`' + x + '`').join(', ') : 'none'}.`, '');
  L.push('| Capture | Row | Result |', '|---|---|---|');
  for (const c of all.captures) L.push(`| ${c.key} | ${c.row || ''} | ${(c.error ? 'error: ' + c.error : c.result || '').replace(/\|/g, '/')} |`);
  L.push('');
  for (const c of all.captures) {
    L.push(`## ${c.key}: ${c.row || ''}`, '');
    if (c.error) { L.push(`Stopped: ${c.error}`, ''); continue; }
    L.push(`Result: ${c.result}`, '');
    if (c.key === 'osg') {
      L.push(`- Entry: ${c.entry.screen} (params ${j(c.entry.params)}, ${c.entry.source}); OneSchool Global cards in the list: ${c.cardsInList}.`);
      if (c.firstOpen) L.push(`- First open (card tap): params ${j(c.firstOpen.params)}; OneSchool calls ${j(c.firstOpen.calls)}.`);
      const s = c.secondNavigation;
      if (s) {
        L.push(`- Second id: ${c.secondIdSource}. Navigation: ${s.method}.`);
        L.push(`- URL id changed: ${s.urlIdChanged}; full page load: ${s.fullPageLoad}; path ${s.path}.`);
        L.push(`- \`DataActionGetOneSchoolGlobalDetails\` ran again: ${s.dataActionRanAgain} (${s.dataActionCount}x) ${j(s.dataActionTimings)}; body carries the new id: ${s.requestBodyCarriesNewId}, the old id: ${s.requestBodyCarriesOldId}.`);
        L.push(`- Request body shape: ${j(s.requestBodyShape)}`);
        L.push(`- All calls after the navigation: ${j(s.allCalls)}`);
        L.push(`- DOM: ${j(s.dom)}`);
      }
    } else if (c.key === 'updates') {
      L.push(`- Storage at start (keys matching scroll/anchor): ${j(c.storageAtStart)}`);
      for (const x of c.rounds) {
        L.push(`- Round ${x.round}: before tap ${j(x.beforeTap)}; tapped ${j(x.tappedItem)}`);
        if (x.tap) L.push(`  - Tap: ${j(x.tap)}`);
        L.push(`  - Storage after tap: ${j(x.storageAfterTap)}`);
        if (x.afterBack) { L.push(`  - After Back: ${j(x.afterBack)}`); L.push(`  - Calls after Back: ${j(x.backCalls)}`); L.push(`  - Storage after Back: ${j(x.storageAfterBack)}`); }
        if (x.scrollAfterBlockedTap) L.push(`  - Scroll after the blocked tap: ${j(x.scrollAfterBlockedTap)}`);
      }
      if (c.fallback) L.push(`- Fallback (${c.fallback.method}): ${j(c.fallback)}`);
    } else if (c.key === 'notes') {
      L.push(`- On open: ${j(c.onOpen)}`);
      L.push(`- Filter sheet root visible: ${c.sheetRootVisible}; visible year options: ${c.yearOptions}; blocks in the sheet: ${j(c.sheetGroups)}`);
      if (c.afterApply) {
        L.push(`- Apply enabled after a year: ${c.applyEnabledAfterYear}`);
        L.push(`- After Apply: ${c.afterApply.getNotesCalls} DataActionGetNotes call(s); calls ${j(c.afterApply.calls)}`);
        L.push(`- Body top level: ${j(c.afterApply.bodyTopLevel)}; year and sort keys: ${j(c.afterApply.keys)}`);
        L.push(`- Variables shape: ${j(c.afterApply.variablesShape)}`);
      }
    } else if (c.key === 'orbit') {
      L.push(`- Access: ${c.access}. Path reached: ${c.openedPath}.`);
      L.push(`- Client evaluation (UBTConnect_Utils.IsListVirtualizationDisabled → Connect_LaunchDarkly_PermissionCheck(launchDarkly_FF.mobileDirectoryListVirtualization)): ${j(c.clientEvaluation)}; calls during it: ${j(c.callsDuringClientEvaluation)}`);
      L.push(`- LaunchDarkly client requests on this screen: ${j(c.launchDarklyRequests)}; since app start: ${j(c.launchDarklyRequestsSinceAppStart)}`);
      L.push(`- LaunchDarkly localStorage cache: ${j(c.ldLocalStorage)}`);
      L.push(`- Screenservice responses mentioning virtualization: ${j(c.screenserviceResponsesMentioningVirtualization)}`);
      L.push(`- Calls on open: ${j(c.callsOnOpen)}`);
      L.push(`- DOM: ${j(c.dom)}`);
    } else if (c.key === 'home') {
      L.push(`- Calls on open: ${j(c.callsOnOpen)}`);
      L.push(`- Update tap: ${j(c.updateTap)}`);
      if (c.fallback) L.push(`- Fallback: ${j(c.fallback)}`);
    }
    L.push('');
  }
  fs.writeFileSync(OUT_MD, L.join('\n'));
}

async function main() {
  PLAN_DATA = JSON.parse(fs.readFileSync(PLAN, 'utf8'));
  ALLOW = new Set((PLAN_DATA.defaults || {}).allowActions || []);
  PROFILE = auth.resolveProfile({});
  SECRETS = PROFILE ? auth.loadSecrets(PROFILE, {}) : null;
  if (!PROFILE || !SECRETS) { console.error('site profile or secrets not found: ask the user (see site_auth.cjs)'); process.exit(1); }
  log(`site profile: ${PROFILE.name}; secrets: found; guard on, ${ALLOW.size} confirmed action(s) allowed`);
  const only = opt('only') ? new Set(String(opt('only')).split(',')) : null;
  const plan = [['osg', captureOSG], ['updates', captureUpdates], ['notes', captureNotes], ['orbit', captureOrbit], ['home', captureHome]]
    .filter(([k]) => !only || only.has(k));
  const prev = only && fs.existsSync(OUT_JSON) ? JSON.parse(fs.readFileSync(OUT_JSON, 'utf8')) : null;
  const all = { ranAt: new Date().toISOString(), site: PROFILE.name, account: 'the test account of site_auth (not named)', allowedActions: ALLOW.size, captures: [], blockedAll: [] };
  const browser = await pw.chromium.launch({ headless: !opt('headed') });
  try {
    const ctx = await newContext(browser);
    const page = await ctx.newPage();
    log('signing in');
    ctx.__authing = false;
    await signIn(page);
    if (pending(page)) throw new Error('a policy waits for acceptance (AcceptPendingPolicies): no capture can run');
    log(`signed in; at ${pathOf(page.url())}`);
    for (const [key, fn] of plan) {
      const t = now();
      let res;
      try { res = await fn(page); } catch (e) { res = { error: clean(e), at: pathOf(page.url()) }; }
      res.key = key; res.seconds = Math.round((now() - t) / 1000);
      all.captures.push(res);
      log(`${key}: ${res.error ? 'error: ' + res.error : res.result}`);
    }
    all.blockedAll = [...new Set(ctx.__blocked || [])];
  } finally { await browser.close(); }
  if (prev) {
    const mine = new Set(all.captures.map(c => c.key));
    all.captures = [...prev.captures.filter(c => !mine.has(c.key)), ...all.captures];
    all.blockedAll = [...new Set([...(prev.blockedAll || []), ...all.blockedAll])];
  }
  const order = ['osg', 'updates', 'notes', 'orbit', 'home'];
  all.captures.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
  fs.writeFileSync(OUT_JSON, JSON.stringify(all, null, 1));
  writeMd(all);
  log(`guard blocked: ${all.blockedAll.join(', ') || 'nothing'}`);
  log(`→ ${OUT_JSON}, ${OUT_MD}`);
}

main().catch(e => { console.error(clean(e)); process.exit(1); });
