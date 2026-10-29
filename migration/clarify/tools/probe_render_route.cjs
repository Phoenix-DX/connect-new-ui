#!/usr/bin/env node
/*
 * probe_render_route.cjs: what does the TST runtime show for a render error and for an unknown route? Read-only probe
 * for item 9 (migration/clarify/review/item9-render-route-errors.md §6, U4 and U5), asked on 2026-10-28.
 *
 *   node migration/clarify/tools/probe_render_route.cjs [--headed] [--screen=/UBTConnect/BrowseCountries]
 *     [--inner=ConnectCorePatterns.Statistics_ListItem]
 *
 * U4, on the TST runtime of the signed-in app (client side only, no server write):
 *   The probe walks the React fiber tree and finds the View instances (BaseWebScreen, BaseWebBlock) and the
 *   ErrorBoundary instances. For each case it replaces `internalRender` of one View instance and calls `forceUpdate()`.
 *   - blockChild: the block renders a child component that throws (a widget inside the block).
 *   - blockOwn / outerBlockOwn: the own render of a block throws (an expression of the block).
 *   - screenOwn: the own render of the screen throws (an expression of the screen).
 *   It records the boundary that caught the error, what stays on the page, the feedback messages, and the URL.
 *   The page is loaded again before each case.
 * U5:
 *   - laterNav: from the active screen, `OS.Navigation.navigateTo('/UBTConnect/NoSuchScreen', …, ctx, true)`.
 *   - firstLoad: a first page load of /UBTConnect/ThisScreenDoesNotExist, with a valid session.
 * Safety: the skill's readonly_guard.cjs stays on (allow list of capture-plan defaults.allowActions). The probe also
 * aborts the POSTs to moduleservices/log, so the error logs do not reach the TST server. Service workers are blocked.
 * It uses the skill's modules site_auth.cjs (sign-in; only that module reads the secrets) and readonly_guard.cjs.
 * Privacy: the output keeps view names, error names, paths, static UI texts and lengths only.
 * Output: migration/clarify/review/probe-render-route.json
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
const OUT_JSON = 'migration/clarify/review/probe-render-route.json';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const log = m => console.log(m);
const headed = process.argv.includes('--headed');
const SCREEN = (process.argv.find(a => a.startsWith('--screen=')) || '--screen=/UBTConnect/BrowseCountries').slice(9);
// the nested block for blockChild and blockOwn: a list item block of BrowseCountries (its parent is a block)
const INNER = (process.argv.find(a => a.startsWith('--inner=')) || '--inner=ConnectCorePatterns.Statistics_ListItem').slice(8);

let PROFILE, SECRETS, ALLOW;
const abs = r => new URL(r, PROFILE.base).toString();
const pathOf = u => { try { return new URL(u).pathname; } catch { return '?'; } };
/* error text without query values, e-mail addresses or long tokens */
const clean = e => String((e && e.message) || e).split('\n')[0].replace(/\?[^\s'"]*/g, '?<redacted>')
  .replace(/[\w.+-]+@[\w.-]+/g, '<email>').replace(/[A-Za-z0-9_-]{32,}/g, '<redacted>').slice(0, 220);

async function ensure(page) {
  const ctx = page.context();
  ctx.__authing = true;   // sign-in and PIN calls pass the guard
  try { await auth.ensureSession(page, PROFILE, SECRETS, m => log(`    [auth] ${m}`)); } finally { ctx.__authing = false; }
}
async function waitReady(page, ms = 2500) { await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {}); await sleep(ms); }
async function open(page, route) {
  await page.goto(abs(route), { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitReady(page);
  if ((await auth.whereNow(page, PROFILE)) !== 'app') { await ensure(page); await page.goto(abs(route), { waitUntil: 'domcontentloaded', timeout: 60000 }); await waitReady(page); }
}
const activeView = page => page.evaluate(() => {
  try { const s = window.require('OutSystems/ClientRuntime/Main').Internal.Controller.BaseViewController.activeScreen; return s ? s.viewName : null; } catch { return null; }
});
async function openScreen(page) {
  const want = SCREEN.split('/').pop();
  await open(page, SCREEN);
  for (let i = 0; i < 40 && !String(await activeView(page)).endsWith(want); i++) {
    if (i === 10 && (await auth.whereNow(page, PROFILE)) !== 'app') { await ensure(page); await open(page, SCREEN); }
    await sleep(500);
  }
  if (!String(await activeView(page)).endsWith(want)) throw new Error(`${want} did not become the active screen`);
  await sleep(1500);
}

/* in every document, from the first script on: record each feedback message that is added (it can close itself
   before a sample), each unhandled rejection and each uncaught error */
function recorder() {
  window.__probe = { toasts: [], rejections: [], errors: [] };
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
  window.addEventListener('error', e => { window.__probe.errors.push(String(e.message || '').slice(0, 200)); });
}

/* in the page: the View and ErrorBoundary instances of the React tree (React 16: __reactInternalInstance$ keys) */
function SCAN(INNER) {
  const RV = window.require('OutSystems/ReactView/BaseView');
  const EB = window.require('OutSystems/ReactView/ErrorBoundary').default;
  const keyOf = el => Object.keys(el).find(k => k.startsWith('__reactInternalInstance$'));
  const first = [...document.querySelectorAll('body *')].find(e => keyOf(e));
  if (!first) return { error: 'no React node' };
  let root = first[keyOf(first)];
  while (root.return) root = root.return;
  const views = [], boundaries = [];
  const stack = [[root, -1]];
  while (stack.length) {
    const [f, parent] = stack.pop();
    let here = parent;
    const sn = f.stateNode;
    if (sn && sn instanceof RV.View) {
      here = views.length;
      views.push({ inst: sn, fiber: f, parent, kind: sn instanceof RV.BaseWebBlock ? 'block' : sn instanceof RV.BaseWebScreen ? 'screen' : 'view',
        name: (sn.constructor && sn.constructor.displayName) || '?', children: 0 });
      if (parent >= 0) views[parent].children++;
    }
    if (sn && sn instanceof EB) boundaries.push({ inst: sn, owner: f.return && f.return.stateNode instanceof RV.View ? here : -1 });
    for (let c = f.child; c; c = c.sibling) stack.push([c, here]);
  }
  /* the top DOM nodes of a fiber (first host fibers below it) */
  const hosts = f => { const out = [], st = f.child ? [f.child] : []; while (st.length) { const x = st.pop(); if (x.sibling) st.push(x.sibling); if (x.tag === 5) out.push(x.stateNode); else if (x.child) st.push(x.child); } return out; };
  for (const v of views) v.hosts = hosts(v.fiber);
  const textLen = v => v.hosts.filter(n => n.isConnected).reduce((s, n) => s + (n.innerText || '').trim().length, 0);
  const vis = v => v.hosts.some(n => n.isConnected && n.getBoundingClientRect().height > 0);
  window.__u4 = { views, boundaries, textLen, vis };
  const screen = views.findIndex(v => v.kind === 'screen');
  /* targets: outer = a visible block whose parent is the screen; inner = a visible leaf block below another block */
  const outer = views.findIndex(v => v.kind === 'block' && v.parent === screen && vis(v) && textLen(v) > 0);
  const nested = (v, i) => v.kind === 'block' && i !== outer && v.parent >= 0 && v.parent !== outer
    && views[v.parent].kind === 'block' && vis(v) && textLen(v) > 0;
  let inner = views.findIndex((v, i) => v.name === INNER && nested(v, i));
  if (inner < 0) inner = views.findIndex(nested);
  window.__u4.targets = { screen, outer, inner };
  return {
    views: views.map((v, i) => ({ i, kind: v.kind, name: v.name, parent: v.parent, children: v.children, textLength: textLen(v) })).slice(0, 60),
    viewCount: views.length, boundaryCount: boundaries.length, rootBoundaries: boundaries.filter(b => b.owner === -1).length,
    targets: { screen, outer, inner },
  };
}

/* in the page: make one View's render throw and re-render it with forceUpdate (client side only) */
function THROW({ target, mode }) {
  const { views, boundaries, textLen } = window.__u4;
  const idx = window.__u4.targets[target];
  if (idx == null || idx < 0) return { skipped: `no ${target} target` };
  const v = views[idx];
  const React = window.require('react');
  const msg = `Probe U4 ${target} ${mode}`;
  const chain = []; for (let p = v.parent; p >= 0; p = views[p].parent) chain.push(`${views[p].kind}:${views[p].name}`);
  const before = { targetText: textLen(v), parentText: v.parent >= 0 ? textLen(views[v.parent]) : null, bodyText: document.body.innerText.length };
  if (mode === 'child') { const Thrower = () => { throw new Error(msg); }; v.inst.internalRender = () => React.createElement(Thrower); }
  else v.inst.internalRender = () => { throw new Error(msg); };
  window.__u4.case = { idx, at: Date.now() };
  let thrown = null;
  try { v.inst.forceUpdate(); } catch (e) { thrown = String(e && e.message).slice(0, 160); }
  const caught = boundaries.filter(b => b.inst.state && b.inst.state.hasError)
    .map(b => (b.owner === -1 ? 'root boundary (Router)' : `boundary of ${views[b.owner].kind}:${views[b.owner].name}`));
  return { target: `${v.kind}:${v.name}`, parentChain: chain, mode, message: msg, before, thrownToCaller: thrown, caughtBy: caught };
}

/* in the page: what the user sees after a case */
function SEEN() {
  const vis = el => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
  const u = window.__u4;
  const at = (u && u.case && u.case.at) || 0;
  const pr = window.__probe || { toasts: [], rejections: [], errors: [] };
  const seen = new Map(); for (const t of pr.toasts) if (t.at >= at) seen.set(t.class + '|' + t.text, { class: t.class, text: t.text });
  const msgs = [...document.querySelectorAll('[class*="feedback-message"], [role="alert"], .osui-feedback-toast')].filter(vis)
    .filter(el => !el.parentElement || !el.parentElement.closest('[class*="feedback-message"]'))
    .map(el => ({ class: String(el.className).slice(0, 120), text: (el.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 160) }));
  let active = null;
  try { const s = window.require('OutSystems/ClientRuntime/Main').Internal.Controller.BaseViewController.activeScreen; active = s ? s.viewName : null; } catch { active = 'no runtime'; }
  const out = { path: location.pathname, title: document.title, activeScreen: active, bodyTextLength: (document.body && document.body.innerText || '').length,
    toastsAdded: [...seen.values()].slice(0, 8), feedbackVisible: msgs.slice(0, 8), rejections: pr.rejections.slice(-5), windowErrors: pr.errors.slice(-5) };
  if (/_error\.html$/.test(location.pathname)) out.errorPageText = (document.body && document.body.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 300);
  if (u && u.case) {
    const v = u.views[u.case.idx];
    out.target = { domConnected: v.hosts.some(n => n.isConnected), textLength: u.textLen(v), visible: u.vis(v) };
    if (v.parent >= 0) { const p = u.views[v.parent]; out.parent = { name: `${p.kind}:${p.name}`, domConnected: p.hosts.some(n => n.isConnected), textLength: u.textLen(p), visible: u.vis(p) }; }
    const s = u.views[u.targets.screen];
    if (s) out.screen = { domConnected: s.hosts.some(n => n.isConnected), textLength: u.textLen(s), visible: u.vis(s) };
  }
  /* the feedback message boxes themselves: on screen or not */
  out.toastBoxes = [...document.querySelectorAll('.feedback-message')].map(el => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
    return { visible: vis(el), top: Math.round(r.top), height: Math.round(r.height), opacity: cs.opacity, text: (el.innerText || '').trim().slice(0, 80) }; }).slice(0, 3);
  out.headerTexts = [...document.querySelectorAll('h1, .header-title, [class*="title"]')].filter(vis)
    .map(el => (el.innerText || '').trim().replace(/\s+/g, ' ')).filter(t => t && t.length <= 60).slice(0, 4);
  return out;
}

async function main() {
  const plan = JSON.parse(fs.readFileSync(PLAN, 'utf8'));
  ALLOW = new Set((plan.defaults || {}).allowActions || []);
  PROFILE = auth.resolveProfile({});
  SECRETS = PROFILE ? auth.loadSecrets(PROFILE, {}) : null;
  if (!PROFILE || !SECRETS) { console.error('site profile or secrets not found: ask the user (see site_auth.cjs)'); process.exit(1); }
  log(`site profile: ${PROFILE.name}; secrets: found; guard on, ${ALLOW.size} confirmed action(s) allowed`);
  const out = { ranAt: new Date().toISOString(), site: PROFILE.name, account: 'the test account of site_auth (not named)',
    screen: SCREEN, serviceWorkers: 'block', logPostsAborted: 0, u4: {}, u5: {} };
  const browser = await pw.chromium.launch({ headless: !headed });
  try {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });
    await guard.installGuard(ctx, ALLOW);
    await ctx.route('**/moduleservices/log**', r => { out.logPostsAborted++; return r.abort('blockedbyclient'); });
    await ctx.addInitScript(recorder);
    const page = await ctx.newPage();
    let consoleErrors = [];
    page.on('console', m => { if (m.type() === 'error') consoleErrors.push(`console: ${clean(m.text())}`); });
    page.on('pageerror', e => consoleErrors.push(`pageerror: ${clean(e)}`));
    log('signing in');
    await open(page, PROFILE.home || '/UBTConnect/HomeFeed');
    if (/\/AcceptPendingPolicies/i.test(pathOf(page.url()))) throw new Error('a policy waits for acceptance: no probe can run');

    // U4: render errors
    const cases = [['blockChild', 'inner', 'child'], ['blockOwn', 'inner', 'own'], ['outerBlockOwn', 'outer', 'own'], ['screenOwn', 'screen', 'own']];
    for (const [label, target, mode] of cases) {
      await openScreen(page);
      consoleErrors = [];
      const tree = await page.evaluate(SCAN, INNER);
      if (!out.u4.tree) out.u4.tree = tree;
      let tgt = target;
      if (target === 'inner' && tree.targets && tree.targets.inner < 0) tgt = 'outer';   // no nested block: use the outer one
      const r = { act: await page.evaluate(THROW, { target: tgt, mode }) };
      r.at300ms = (await sleep(300), await page.evaluate(SEEN).catch(e => ({ error: clean(e) })));
      await sleep(3500);
      await page.waitForLoadState('domcontentloaded').catch(() => {});
      r.after4s = await page.evaluate(SEEN).catch(e => ({ error: clean(e) }));
      r.consoleErrors = [...new Set(consoleErrors)].slice(0, 12);
      out.u4[label] = r;
      log(`U4 ${label}: ${JSON.stringify(r.act.caughtBy || r.act.skipped)} → ${r.after4s.path}; toasts ${JSON.stringify((r.after4s.toastsAdded || []).map(t => t.text))}`);
    }

    // U5: a later in-app navigation to an unknown path
    await openScreen(page);
    consoleErrors = [];
    const nav = await page.evaluate(() => {
      const OS = window.require('OutSystems/ClientRuntime/Main').Internal;
      const active = OS.Controller.BaseViewController.activeScreen;
      window.__u4 = { case: { at: Date.now() } };
      /* is the unknown path internal for the runtime? (getUrlInfo → urlBelongsToCurrentApplication) */
      const defined = (window.require.s && window.require.s.contexts._.defined) || {};
      const env = Object.values(defined).find(m => m && typeof m.getEnvParams === 'function');
      const info = u => { const i = OS.Navigation.getUrlInfo(u); return { url: u, isInternal: i.isInternal }; };
      const checks = { allowInterAppNavigationWhenAppIsRoot: env ? env.getEnvParams().AllowInterAppNavigationWhenAppIsRoot : 'getEnvParams not found',
        unknown: info('/UBTConnect/NoSuchScreen'), known: info('/UBTConnect/BrowseDirectory') };
      try {
        OS.Navigation.navigateTo(OS.Navigation.generateScreenURL('/UBTConnect/NoSuchScreen', {}),
          OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), active.callContext(), true);
        return { checks, thrown: null };
      } catch (e) { return { checks, thrown: e && e.name }; }
    });
    await sleep(4000);
    await page.waitForLoadState('domcontentloaded').catch(() => {});
    out.u5.laterNav = { call: nav, after4s: await page.evaluate(SEEN).catch(e => ({ error: clean(e) })), consoleErrors: [...new Set(consoleErrors)].slice(0, 12) };
    log(`U5 laterNav: ${JSON.stringify(out.u5.laterNav.after4s.path)} ${out.u5.laterNav.after4s.errorPageText || ''}`);

    // U5: a first page load of an unknown path, with the valid session of this context
    consoleErrors = [];
    const resp = await page.goto(abs('/UBTConnect/ThisScreenDoesNotExist'), { waitUntil: 'domcontentloaded', timeout: 60000 }).catch(() => null);
    const first = { status: resp ? resp.status() : null };
    first.at1s = (await sleep(1000), await page.evaluate(() => ({ path: location.pathname, title: document.title, appRuntime: typeof window.require === 'function',
      splash: !!document.querySelector('[class*="splash" i]'), text: (document.body && document.body.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 200) })));
    await waitReady(page, 4000);
    first.after6s = await page.evaluate(() => ({ path: location.pathname, title: document.title, appRuntime: typeof window.require === 'function',
      splash: !!document.querySelector('[class*="splash" i]'), text: (document.body && document.body.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 200) }));
    first.consoleErrors = [...new Set(consoleErrors)].slice(0, 12);
    out.u5.firstLoad = first;
    log(`U5 firstLoad: HTTP ${first.status}, ${first.after6s.title}`);
    out.u7 = 'not probed: it needs a screen whose role check fails for a signed-in user (U6 open), and the logout of the SecurityException branch is a server call that the guard blocks';
    out.blocked = [...new Set(ctx.__blocked || [])];
  } finally { await browser.close(); }
  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 1));
  log(`→ ${OUT_JSON}`);
}
main().catch(e => { console.error(clean(e)); process.exit(1); });
