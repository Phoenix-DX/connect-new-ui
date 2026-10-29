#!/usr/bin/env node
/*
 * probe_leave_rules.cjs: what does the TST runtime do with a flow of a screen that the user left? Read-only probe for
 * item 8 (migration/clarify/review/item8-w23-errorpage.md, rules R3 and R4), asked by the user on 2026-10-28.
 *
 *   node migration/clarify/tools/probe_leave_rules.cjs [--headed]
 *
 * Steps, on the TST runtime of the signed-in app (no server write, the read-only guard stays on):
 * 1. Open BrowseCountries. Keep its controller and one call context (the screen's own, as a compiled flow keeps it).
 * 2. Control: the context is in context; the controller is not disposed.
 * 3. Leave with the browser Back. Sample `isOutOfContext` and `isDisposed` at once and after the transition.
 * 4. R4: call `OS.Navigation.navigateTo(BrowseDirectory, …, oldContext)`. Record the exception name and whether the
 *    URL changed.
 * 5. R3: call the screen's own action `_handler_StatisticsList_Clicked$Action("", oldContext)` (an empty id: when the
 *    controller is alive the action does nothing). Record the exception name.
 * It uses the skill's modules site_auth.cjs (sign-in; only that module reads the secrets) and readonly_guard.cjs.
 * Privacy: the output keeps view names, exception names and paths only.
 * Output: migration/clarify/review/probe-leave-rules.json
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
const OUT_JSON = 'migration/clarify/review/probe-leave-rules.json';
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
  await page.goto(abs(route), { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitReady(page);
  if ((await auth.whereNow(page, PROFILE)) !== 'app') { await ensure(page); await page.goto(abs(route), { waitUntil: 'domcontentloaded', timeout: 60000 }); await waitReady(page); }
}

/* in the page: the runtime handles */
const KEEP = () => {
  const OS = window.require('OutSystems/ClientRuntime/Main').Internal;
  const screen = OS.Controller.BaseViewController.activeScreen;
  window.__leave = { OS, screen, ctx: screen.callContext() };
  return { viewName: screen.viewName, outOfContext: window.__leave.ctx.isOutOfContext, disposed: !!screen.isDisposed,
    hasHandler: typeof screen._handler_StatisticsList_Clicked$Action === 'function' };
};
const SAMPLE = () => {
  const { OS, screen, ctx } = window.__leave;
  const active = OS.Controller.BaseViewController.activeScreen;
  return { activeViewName: active && active.viewName, outOfContext: ctx.isOutOfContext, disposed: !!screen.isDisposed, path: location.pathname };
};
const NAVIGATE = () => {
  const { OS, ctx } = window.__leave;
  try {
    const r = OS.Navigation.navigateTo(OS.Navigation.generateScreenURL('/UBTConnect/BrowseDirectory', { CountryCode: 'ZZ' }),
      OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), ctx, true);
    return { thrown: null, returned: typeof r };
  } catch (e) { return { thrown: e && e.name, message: String(e && e.message || '').slice(0, 120) }; }
};
const OWN_ACTION = () => {
  const { screen, ctx } = window.__leave;
  try {
    const r = screen._handler_StatisticsList_Clicked$Action('', ctx);
    return { thrown: null, returned: typeof r };
  } catch (e) { return { thrown: e && e.name, message: String(e && e.message || '').slice(0, 160) }; }
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
    log('signing in');
    await open(page, PROFILE.home || '/UBTConnect/HomeFeed');
    if (/\/AcceptPendingPolicies/i.test(pathOf(page.url()))) throw new Error('a policy waits for acceptance: no probe can run');
    await open(page, '/UBTConnect/BrowseCountries');
    const activeView = () => page.evaluate(() => {
      try { const s = window.require('OutSystems/ClientRuntime/Main').Internal.Controller.BaseViewController.activeScreen; return s ? s.viewName : null; } catch { return null; }
    });
    for (let i = 0; i < 40 && !/BrowseCountries/.test(String(await activeView())); i++) {
      if (i === 10 && (await auth.whereNow(page, PROFILE)) !== 'app') { await ensure(page); await open(page, '/UBTConnect/BrowseCountries'); }
      await sleep(500);
    }
    log(`active screen: ${await activeView()} at ${pathOf(page.url())}`);
    if (!/BrowseCountries/.test(String(await activeView()))) throw new Error('BrowseCountries did not become the active screen');
    out.steps.kept = await page.evaluate(KEEP);
    log(`kept: ${JSON.stringify(out.steps.kept)}`);
    // control: the screen's own context, while the screen is active
    out.steps.controlBeforeLeave = await page.evaluate(SAMPLE);
    // leave inside the app: navigate with the runtime to Menu (as a tap on the bottom bar does)
    out.steps.leave = await page.evaluate(() => {
      const { OS } = window.__leave;
      const active = OS.Controller.BaseViewController.activeScreen;
      // a compiled Destination passes `true`: the runtime throws RedirectOccurredException after it navigates
      try {
        OS.Navigation.navigateTo(OS.Navigation.generateScreenURL('/UBTConnect/Menu', {}),
          OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), active.callContext(), true);
        return { thrown: null };
      } catch (e) { return { thrown: e && e.name }; }
    });
    out.steps.atOnce = await page.evaluate(SAMPLE);
    await sleep(150);
    out.steps.after150ms = await page.evaluate(SAMPLE);
    await waitReady(page, 2000);
    out.steps.afterTransition = await page.evaluate(SAMPLE);
    log(`after leaving: ${JSON.stringify(out.steps.afterTransition)}`);
    out.steps.r4Navigate = await page.evaluate(NAVIGATE);
    await sleep(2000);
    out.steps.r4PathAfter = pathOf(page.url());
    log(`R4: ${JSON.stringify(out.steps.r4Navigate)}; path after: ${out.steps.r4PathAfter}`);
    out.steps.r3OwnAction = await page.evaluate(OWN_ACTION);
    await sleep(1000);
    out.steps.r3PathAfter = pathOf(page.url());
    log(`R3: ${JSON.stringify(out.steps.r3OwnAction)}; path after: ${out.steps.r3PathAfter}`);
    out.blocked = [...new Set(ctx.__blocked || [])];
  } finally { await browser.close(); }
  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 1));
  log(`→ ${OUT_JSON}`);
}
main().catch(e => { console.error(String(e && e.message || e).slice(0, 400)); process.exit(1); });
