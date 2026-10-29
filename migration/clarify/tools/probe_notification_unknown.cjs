#!/usr/bin/env node
/*
 * probe_notification_unknown.cjs: read-only probe for NotificationDetails Q3 (user decision I10-8 (a), 2026-10-29).
 * It opens /UBTConnect/NotificationDetails?MessageInstanceId=<id> on TST with an id that does not exist (default 1) and
 * records what FetchMessageInstance answers (the key paths with empty or not, or the exception name), the toasts, the
 * active view and the path after 8 s. The read-only guard stays on.
 *
 *   node migration/clarify/tools/probe_notification_unknown.cjs [--id 1]
 *
 * Privacy: key paths, booleans, exception names and fixed UI texts only.
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
const idArg = process.argv.indexOf('--id');
const ID = idArg > 0 ? process.argv[idArg + 1] : '1';

/* key paths of a response, with "empty" or "set" for each leaf (no values) */
function shape(o, p = '', acc = {}) {
  if (Array.isArray(o)) { acc[p + '[]'] = o.length ? `${o.length} item(s)` : 'empty'; if (o.length) shape(o[0], p + '[0]', acc); }
  else if (o && typeof o === 'object') for (const k of Object.keys(o)) shape(o[k], p + '.' + k, acc);
  else acc[p] = (o === '' || o === null || o === 0 || o === '0' || o === false || /^1900-01-01/.test(String(o))) ? `default (${JSON.stringify(o)})` : 'set';
  return acc;
}

(async () => {
  const plan = JSON.parse(fs.readFileSync('migration/capture-plan.json', 'utf8'));
  const allow = new Set((plan.defaults || {}).allowActions || []);
  const profile = auth.resolveProfile({});
  const secrets = profile ? auth.loadSecrets(profile, {}) : null;
  if (!profile || !secrets) { console.error('site profile or secrets not found: ask the user'); process.exit(1); }
  const browser = await pw.chromium.launch({ headless: true });
  const out = { ranAt: new Date().toISOString(), id: ID, responses: [] };
  try {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });
    await guard.installGuard(ctx, allow);
    const page = await ctx.newPage();
    page.on('response', async r => {
      if (!/DataActionFetchMessageInstance/.test(r.url())) return;
      const rec = { status: r.status() };
      try {
        const body = await r.json();
        if (body.exception) rec.exception = { name: body.exception.name, specificType: body.exception.specificType, message: String(body.exception.message || '').slice(0, 160) };
        if (body.data) rec.data = shape(body.data);
      } catch (e) { rec.error = String(e).slice(0, 120); }
      out.responses.push(rec);
    });
    const view = () => page.evaluate(() => { try { const s = window.require('OutSystems/ClientRuntime/Main').Internal.Controller.BaseViewController.activeScreen; return s ? s.viewName : null; } catch { return null; } });
    const go = async route => { await page.goto(new URL(route, profile.base).toString(), { waitUntil: 'domcontentloaded', timeout: 60000 }); await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {}); await sleep(2500); };
    const route = `/UBTConnect/NotificationDetails?MessageInstanceId=${ID}`;
    for (let i = 0; i < 3; i++) {
      out.responses = [];
      await go(route);
      for (let t = 0; t < 20000 && !/NotificationDetails|Login|PIN|Splash/i.test(String(await view())); t += 500) await sleep(500);
      if (/NotificationDetails/.test(String(await view()))) break;
      ctx.__authing = true;
      try { await auth.ensureSession(page, profile, secrets, m => console.log('  [auth] ' + m)); } finally { ctx.__authing = false; }
    }
    const toasts = [];
    for (let t = 0; t < 8000; t += 500) {
      const now = await page.evaluate(() => [...document.querySelectorAll('.feedback-message, [class*="feedback-message"]')].map(e => e.innerText.trim()).filter(Boolean));
      for (const x of now) if (!toasts.includes(x)) toasts.push(x);
      await sleep(500);
    }
    out.toasts = toasts.map(x => x.slice(0, 160));
    out.view = await view();
    out.path = new URL(page.url()).pathname;
    out.title = await page.evaluate(() => { const el = document.querySelector('[data-block$="IconText"]'); return el ? { empty: !el.innerText.trim() } : null; });
    out.blocked = [...new Set(ctx.__blocked || [])];
  } finally { await browser.close(); }
  console.log(JSON.stringify(out, null, 1));
})().catch(e => { console.error(String(e && e.message || e).slice(0, 300)); process.exit(1); });
