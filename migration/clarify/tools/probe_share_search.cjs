#!/usr/bin/env node
/*
 * probe_share_search.cjs: read-only probe for LegacyShareObject (drift wave M-Q4 (b), user 2026-10-29). The group type
 * of GetAvailableUsers comes from the external Directory API (API_Directory_Share_SuggestedUsers_Grouped_GET; MCP row
 * 11b of mcp-session-2026-10-29.md). The probe opens the captured route on TST, types search terms in the ProfileList
 * input (Input_SearchFilterOnChange refreshes the data action; a read, no share), and prints, for each answer of
 * DataActionGetAvailableUsers: the search term sent, Label, Response.Type and the number of items. No click on a
 * profile and no Send. The read-only guard stays on, with the allow list of capture-plan.json. Model: probe_message_ids.cjs.
 *
 *   node migration/clarify/tools/probe_share_search.cjs [term ...]      (default terms: "", "an", "zzqx")
 *
 * Privacy: the output keeps the search terms, the label, the type and counts only (no names, emails or places).
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

const TERMS = process.argv.slice(2).length ? process.argv.slice(2) : ['an', 'zzqx'];

(async () => {
  const plan = JSON.parse(fs.readFileSync('migration/capture-plan.json', 'utf8'));
  const allow = new Set((plan.defaults || {}).allowActions || []);
  const entry = plan.screens.find(s => s.screen === 'LegacyShareObject');
  const profile = auth.resolveProfile({});
  const secrets = profile ? auth.loadSecrets(profile, {}) : null;
  if (!profile || !secrets) { console.error('site profile or secrets not found: ask the user'); process.exit(1); }
  const browser = await pw.chromium.launch({ headless: true });
  const out = { ranAt: new Date().toISOString(), answers: [] };
  try {
    const storage = '.auth/state.json';   // the saved session of batch_capture (path only, Playwright reads it)
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block',
      ...(fs.existsSync(storage) ? { storageState: storage } : {}) });
    await guard.installGuard(ctx, allow);
    const page = await ctx.newPage();
    out.calls = [];
    page.on('request', r => { if (/screenservices/.test(r.url())) out.calls.push(new URL(r.url()).pathname.replace(/^.*screenservices\//, '')); });
    page.on('response', async r => {
      if (!/ProfileList\/DataActionGetAvailableUsers$/.test(new URL(r.url()).pathname)) return;
      try {
        const sent = JSON.parse(r.request().postData() || '{}');
        const vars = (sent.screenData && sent.screenData.variables) || {};
        const body = await r.json();
        const d = body.data || {};
        const items = d.Response && d.Response.Items && d.Response.Items.List;
        out.answers.push({ searchFilter: vars.SearchFilter, maxRecords: vars.MaxRecords, label: d.Label,
          type: d.Response && d.Response.Type, items: Array.isArray(items) ? items.length : null,
          exception: body.exception ? { name: body.exception.name, specificType: body.exception.specificType } : undefined });
      } catch (e) { out.answers.push({ error: String(e).slice(0, 120) }); }
    });
    const go = async route => { await page.goto(new URL(route, profile.base).toString(), { waitUntil: 'domcontentloaded', timeout: 60000 }); await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {}); await sleep(2500); };
    const view = () => page.evaluate(() => { try { const s = window.require('OutSystems/ClientRuntime/Main').Internal.Controller.BaseViewController.activeScreen; return s ? s.viewName : null; } catch { return null; } });
    for (let i = 0; i < 3; i++) {
      out.answers = [];
      await go(entry.route);
      for (let t = 0; t < 20000 && !/LegacyShareObject|Login|PIN|Splash/i.test(String(await view())); t += 500) await sleep(500);
      if (/LegacyShareObject/.test(String(await view()))) break;
      ctx.__authing = true;
      try { await auth.ensureSession(page, profile, secrets, m => console.log('  [auth] ' + m)); } finally { ctx.__authing = false; }
    }
    await sleep(4000);
    out.view = await view();
    const input = page.locator('input[id$="Input_SearchFilter"]').first();
    out.inputFound = (await input.count()) > 0;
    out.inputs = await page.locator('input[id$="Input_SearchFilter"]').count();
    out.calls = [];
    for (const term of TERMS) {
      if (!out.inputFound) break;
      // OnChange (blur) refreshes GetAvailableUsers; Enter runs SearchProfile and blurs the field
      await input.fill('');
      await input.type(term, { delay: 80 });
      await input.press('Enter');   // Input_SearchFilterOnKeyup: keyCode 13 runs SearchProfile, then blur
      await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
      await sleep(3000);
    }
    out.blocked = [...new Set(ctx.__blocked || [])];
  } finally { await browser.close(); }
  console.log(JSON.stringify(out, null, 1));
})().catch(e => { console.error(String(e && e.message || e).slice(0, 300)); process.exit(1); });
