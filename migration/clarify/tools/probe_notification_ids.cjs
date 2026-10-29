#!/usr/bin/env node
/*
 * probe_notification_ids.cjs: read-only probe for the NotificationDetails capture (item 10, user decision of
 * 2026-10-28 "build NotificationDetails"). It opens /UBTConnect/Notifications on TST, reads the response of the data
 * action FetchNotifications, and prints the message instance ids and their read state. No click (a click on an unread
 * item calls the write MarkAsRead). The read-only guard stays on, with the allow list of capture-plan.json.
 *
 *   node migration/clarify/tools/probe_notification_ids.cjs
 *
 * Privacy: the output keeps numeric ids, read flags and key names only (no titles, no texts, no names).
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

/* the ids and read flags of the records of a list in the response, with the key names of the first record */
function scan(o, found, keyPath = '') {
  if (Array.isArray(o)) { o.forEach((v, i) => scan(v, found, keyPath + '[]')); return; }
  if (!o || typeof o !== 'object') return;
  const keys = Object.keys(o);
  const idKey = keys.find(k => /^(MessageInstanceId|Id)$/.test(k));
  const readKey = keys.find(k => /^Is_?Read$/i.test(k));
  if (idKey && readKey) found.push({ at: keyPath, id: o[idKey], idKey, isRead: o[readKey] });
  for (const k of keys) scan(o[k], found, keyPath + '.' + k);
}

/* key paths of the response, with the type of the leaf (no values) */
function keyPaths(o, p = '', acc = new Set()) {
  if (Array.isArray(o)) { if (o.length) keyPaths(o[0], p + '[]', acc); else acc.add(p + '[] (empty)'); }
  else if (o && typeof o === 'object') for (const k of Object.keys(o)) keyPaths(o[k], p + '.' + k, acc);
  else acc.add(p + ': ' + typeof o);
  return [...acc].slice(0, 80);
}

(async () => {
  const plan = JSON.parse(fs.readFileSync('migration/capture-plan.json', 'utf8'));
  const allow = new Set((plan.defaults || {}).allowActions || []);
  const profile = auth.resolveProfile({});
  const secrets = profile ? auth.loadSecrets(profile, {}) : null;
  if (!profile || !secrets) { console.error('site profile or secrets not found: ask the user'); process.exit(1); }
  const browser = await pw.chromium.launch({ headless: true });
  const out = { ranAt: new Date().toISOString(), items: [], recordKeys: null };
  try {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });
    await guard.installGuard(ctx, allow);
    const page = await ctx.newPage();
    const calls = [];
    page.on('request', r => { if (/screenservices/.test(r.url())) calls.push(new URL(r.url()).pathname.replace(/^.*screenservices\//, '')); });
    page.on('response', async r => {
      if (!/DataActionFetchNotifications/.test(r.url())) return;
      try {
        const body = await r.json();
        const found = [];
        scan(body, found);
        out.items.push(...found.map(({ at, id, idKey, isRead }) => ({ at, idKey, id, isRead })));
        if (!found.length) out.keyPaths = keyPaths(body);
      } catch (e) { out.error = String(e).slice(0, 120); }
    });
    const go = async route => { await page.goto(new URL(route, profile.base).toString(), { waitUntil: 'domcontentloaded', timeout: 60000 }); await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {}); await sleep(2500); };
    const view = () => page.evaluate(() => { try { const s = window.require('OutSystems/ClientRuntime/Main').Internal.Controller.BaseViewController.activeScreen; return s ? s.viewName : null; } catch { return null; } });
    // open Notifications; when the app went to the sign-in, sign in and open it again (as probe_new_screens.cjs)
    for (let i = 0; i < 3; i++) {
      out.items = [];
      await go('/UBTConnect/Notifications');
      for (let t = 0; t < 20000 && !/Notifications|Login|PIN|Splash/i.test(String(await view())); t += 500) await sleep(500);
      if (/Notifications/.test(String(await view()))) break;
      ctx.__authing = true;
      try { await auth.ensureSession(page, profile, secrets, m => console.log('  [auth] ' + m)); } finally { ctx.__authing = false; }
    }
    await sleep(4000);
    out.view = await view();
    out.finalPath = new URL(page.url()).pathname;
    out.calls = calls;
    out.blocked = [...new Set(ctx.__blocked || [])];
  } finally { await browser.close(); }
  console.log(JSON.stringify(out, null, 1));
})().catch(e => { console.error(String(e && e.message || e).slice(0, 300)); process.exit(1); });
