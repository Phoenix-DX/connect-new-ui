#!/usr/bin/env node
/*
 * probe_passport_entry.cjs: read-only probe for the PassportScan capture (item 10). The batch capture "via" OrbitLanding
 * timed out waiting for /UBTConnect/PassportScan. This probe opens OrbitLanding on TST, describes the "View Passport
 * details" element, clicks it (OnHandle_ViewPassportDetails → GetHasOrbitAccess → navigation; no server write), and
 * records the path, the active view, the service calls and the hosts of the other requests for 20 s.
 *
 *   node migration/clarify/tools/probe_passport_entry.cjs
 *
 * Privacy: view names, paths, class names, hosts and call names only. The read-only guard stays on.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..');
process.chdir(ROOT);
const SK = path.join(ROOT, '.claude', 'skills', 'outsystems-screen-spec', 'scripts');
const pw = require('playwright');
const auth = require(path.join(SK, 'site_auth.cjs'));
const guard = require(path.join(SK, 'readonly_guard.cjs'));
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const plan = JSON.parse(fs.readFileSync('migration/capture-plan.json', 'utf8'));
  const allow = new Set((plan.defaults || {}).allowActions || []);
  const profile = auth.resolveProfile({});
  const secrets = profile ? auth.loadSecrets(profile, {}) : null;
  if (!profile || !secrets) { console.error('site profile or secrets not found: ask the user'); process.exit(1); }
  const browser = await pw.chromium.launch({ headless: true });
  const out = { ranAt: new Date().toISOString() };
  try {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });
    await guard.installGuard(ctx, allow);
    const page = await ctx.newPage();
    const calls = [], hosts = new Set(), consoleErrors = [];
    page.on('request', r => {
      const u = new URL(r.url());
      if (/screenservices|moduleservices/.test(u.pathname)) calls.push(u.pathname.replace(/^.*(screenservices|moduleservices)\//, ''));
      else if (u.host !== new URL(profile.base).host) hosts.add(u.host + ' ' + r.method());
    });
    page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text().slice(0, 160)); });
    const go = async route => { await page.goto(new URL(route, profile.base).toString(), { waitUntil: 'domcontentloaded', timeout: 60000 }); await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {}); await sleep(2500); };
    const view = () => page.evaluate(() => { try { const s = window.require('OutSystems/ClientRuntime/Main').Internal.Controller.BaseViewController.activeScreen; return s ? s.viewName : null; } catch { return null; } });
    for (let i = 0; i < 3; i++) {
      await go('/UBTConnect/OrbitLanding');
      for (let t = 0; t < 20000 && !/OrbitLanding|Login|PIN|Splash/i.test(String(await view())); t += 500) await sleep(500);
      if (/OrbitLanding/.test(String(await view()))) break;
      ctx.__authing = true;
      try { await auth.ensureSession(page, profile, secrets, m => console.log('  [auth] ' + m)); } finally { ctx.__authing = false; }
    }
    await sleep(3000);
    out.before = { view: await view(), path: new URL(page.url()).pathname };
    out.element = await page.evaluate(() => {
      const el = document.querySelector('.orbit-landing-passport-cont');
      if (!el) return null;
      const d = e => e ? `${e.tagName.toLowerCase()}.${[...e.classList].join('.')}` : null;
      const clickable = [...el.querySelectorAll('*')].concat([el]).filter(e => e.onclick || e.getAttribute('role') === 'button' || e.tagName === 'A' || e.tagName === 'BUTTON').map(d);
      const r = el.getBoundingClientRect();
      return { self: d(el), parent: d(el.parentElement), children: [...el.children].map(d), clickable, rect: [r.x, r.y, r.width, r.height].map(Math.round), text: el.innerText.trim() };
    });
    calls.length = 0;
    await page.locator('.orbit-landing-passport-cont').first().click({ timeout: 15000 });
    out.after = [];
    for (let t = 0; t <= 20000; t += 2500) { await sleep(2500); out.after.push({ t: t + 2500, path: new URL(page.url()).pathname, view: await view() }); }
    out.query = [...new URL(page.url()).searchParams.keys()];
    out.calls = [...new Set(calls)];
    out.otherHosts = [...hosts];
    out.consoleErrors = consoleErrors.slice(0, 15);
    out.blocked = [...new Set(ctx.__blocked || [])];
  } finally { await browser.close(); }
  console.log(JSON.stringify(out, null, 1));
})().catch(e => { console.error(String(e && e.message || e).slice(0, 300)); process.exit(1); });
