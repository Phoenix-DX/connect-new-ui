#!/usr/bin/env node
/*
 * probe_message_ids.cjs: read-only probe for the MessageDetail capture (drift wave M-Q5 a, user 2026-10-29: the plan id
 * 5965247 is no longer available to the test account, TST goes to MessageList). It opens /UBTConnect/MessageList on TST,
 * reads the response of the data action GetMessages, and prints the message ids, their read flags and their numeric
 * type ids. No click (opening an unread message marks it as read). The read-only guard stays on, with the allow list
 * of capture-plan.json. Model: probe_notification_ids.cjs.
 *
 *   node migration/clarify/tools/probe_message_ids.cjs
 *
 * Privacy: the output keeps numeric ids, read flags, numeric type ids and key names only (no titles, texts or names).
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

/* the records of the message list: id, read flag and the numeric type ids (no texts) */
function scan(o, found, keyPath = '') {
  if (Array.isArray(o)) { o.forEach((v, i) => scan(v, found, keyPath + '[]')); return; }
  if (!o || typeof o !== 'object') return;
  const keys = Object.keys(o);
  const idKey = keys.find(k => /^(MessageInstanceId|Id)$/.test(k));
  const readKey = keys.find(k => /^Is_?Read$/i.test(k));
  if (idKey && readKey) found.push({ at: keyPath, idKey, id: o[idKey], isRead: o[readKey], isClear: o.IsClear,
    templateTypeId: o.MessageTemplateTypeId, infoTypeId: o.MessageInfoTypeId, priorityId: o.MessageTemplatePriorityId });
  for (const k of keys) scan(o[k], found, keyPath + '.' + k);
}

/* key paths of the response, with the type of the leaf, and the list lengths (no values) */
function keyPaths(o, p = '', acc = new Set()) {
  if (Array.isArray(o)) { acc.add(`${p}[] length ${o.length}`); if (o.length) keyPaths(o[0], p + '[]', acc); }
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
  const out = { ranAt: new Date().toISOString(), items: [] };
  try {
    // the saved session of batch_capture (path only, Playwright reads it): a fresh browser got a DataBaseException
    // from GetMessages on 2026-10-29, the saved session (as the MessageList capture) gets the list
    const storage = '.auth/state.json';
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block',
      ...(fs.existsSync(storage) ? { storageState: storage } : {}) });
    await guard.installGuard(ctx, allow);
    const page = await ctx.newPage();
    const calls = [];
    page.on('request', r => { if (/screenservices/.test(r.url())) calls.push(new URL(r.url()).pathname.replace(/^.*screenservices\//, '')); });
    page.on('response', async r => {
      if (!/DataActionGetMessages$/.test(new URL(r.url()).pathname)) return;
      try {
        const body = await r.json();
        const found = [];
        scan(body, found);
        out.items.push(...found);
        if (!found.length) out.keyPaths = keyPaths(body);   // shape only, to see why nothing was found
        if (body.exception) out.exception = { name: body.exception.name, specificType: body.exception.specificType,
          message: String(body.exception.message || '').slice(0, 160).replace(/\S+@\S+/g, '<email>').replace(/\d{4,}/g, '<n>') };
      } catch (e) { out.error = String(e).slice(0, 120); }
    });
    const go = async route => { await page.goto(new URL(route, profile.base).toString(), { waitUntil: 'domcontentloaded', timeout: 60000 }); await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {}); await sleep(2500); };
    const view = () => page.evaluate(() => { try { const s = window.require('OutSystems/ClientRuntime/Main').Internal.Controller.BaseViewController.activeScreen; return s ? s.viewName : null; } catch { return null; } });
    // open MessageList; when the app went to the sign-in or PIN, sign in and open it again (as probe_notification_ids.cjs)
    for (let i = 0; i < 3; i++) {
      out.items = [];
      await go('/UBTConnect/MessageList');
      for (let t = 0; t < 20000 && !/MessageList|Login|PIN|Splash/i.test(String(await view())); t += 500) await sleep(500);
      if (/MessageList/.test(String(await view()))) break;
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
