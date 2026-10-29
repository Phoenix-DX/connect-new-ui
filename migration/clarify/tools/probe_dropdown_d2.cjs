#!/usr/bin/env node
/*
 * probe_dropdown_d2.cjs: read-only probe on TST for item 3, open point O2 (migration/clarify/review/item3-solution.md):
 * does a closed Custom dropdown that shows a validation message carry the classes dropdown-expanded and
 * dropdown-expanded-down|up (runtime updateState reads childNodes[1], OutSystemsReactWidgets.js W14151)?
 * Allowed by the user on 2026-10-28. The way: OrbitLanding, an event card, "View Host Survey" (capture plan), the
 * first dropdown in edit mode, open it, choose the empty row (OnChange sets Valid False and the message on the
 * client). The guard aborts every call that is not a read. Output: the classes and the child tags of the dropdown, the
 * empty-value text and the validation message (UI texts). No data of the answers.
 *   node migration/clarify/tools/probe_dropdown_d2.cjs [--headed]
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
const sleep = ms => new Promise(r => setTimeout(r, ms));
const log = m => console.log(m);
const headed = process.argv.includes('--headed');

let PROFILE, SECRETS, ALLOW, PLAN_DATA;
const abs = r => new URL(r, PROFILE.base).toString();
const pathOf = u => { try { return new URL(u).pathname; } catch { return '?'; } };
/* error text without query values, e-mail addresses or long tokens */
const clean = e => String((e && e.message) || e).split('\n')[0].replace(/\?[^\s'"]*/g, '?<redacted>')
  .replace(/[\w.+-]+@[\w.-]+/g, '<email>').replace(/[A-Za-z0-9_-]{32,}/g, '<redacted>').slice(0, 220);

async function newContext(browser) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });   // a service worker would bypass the guard
  await guard.installGuard(ctx, ALLOW);
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


const OUT = 'migration/clarify/review/probe-dropdown-d2.json';
const pick = (o, keys) => Object.fromEntries(keys.filter(k => k in o).map(k => [k, o[k]]));

/* the structure of each dropdown on the page: classes of the container and of its direct children, the empty-value
   span text (a UI text) and the validation message text (a UI text) */
async function dropdowns(page) {
  return page.evaluate(() => [...document.querySelectorAll('[data-dropdown].dropdown-container, .dropdown-container')].map(el => ({
    id: el.id,
    class: String(el.className),
    children: [...el.childNodes].map(c => (c.nodeType === 1 ? `${c.tagName.toLowerCase()}.${String(c.className).trim().replace(/\s+/g, '.')}` : `#${c.nodeType}`)),
    displayText: (el.querySelector('.dropdown-display .dropdown-display-content span') || {}).innerText || null,
    message: (el.querySelector(':scope > .validation-message') || {}).innerText || null,
  })));
}

async function main() {
  PLAN_DATA = JSON.parse(fs.readFileSync(PLAN, 'utf8'));
  ALLOW = new Set((PLAN_DATA.defaults || {}).allowActions || []);
  PROFILE = auth.resolveProfile({});
  SECRETS = PROFILE ? auth.loadSecrets(PROFILE, {}) : null;
  if (!PROFILE || !SECRETS) { console.error('site profile or secrets not found: ask the user (see site_auth.cjs)'); process.exit(1); }
  const plan = (PLAN_DATA.screens || []).find(x => x.screen === 'HostSurvey');
  if (!plan || !plan.via) { console.error('no HostSurvey via in the capture plan'); process.exit(1); }
  log(`site profile: ${PROFILE.name}; guard on, ${ALLOW.size} confirmed action(s) allowed`);
  const out = { ranAt: new Date().toISOString(), site: PROFILE.name, account: 'the test account of site_auth (not named)', steps: [] };
  const browser = await pw.chromium.launch({ headless: !process.argv.includes('--headed') });
  let ctx;
  try {
    ctx = await newContext(browser);
    const page = await ctx.newPage();
    await signIn(page);
    if (pending(page)) throw new Error('a policy waits for acceptance: no probe');
    // the way of the capture plan: OrbitLanding, the first event card, "View Host Survey"
    await page.goto(abs(plan.via.from), { waitUntil: 'domcontentloaded', timeout: 60000 });
    await waitReady(page, 3000);
    if ((await auth.whereNow(page, PROFILE)) !== 'app') {
      await ensure(page);
      await page.goto(abs(plan.via.from), { waitUntil: 'domcontentloaded', timeout: 60000 });
      await waitReady(page, 4000);
    }
    if (pending(page)) throw new Error('a policy waits for acceptance: no probe');
    for (let i = 0; i < 20 && !(await page.locator((plan.via.pre || [])[0] || 'body').count()); i++) await sleep(1000);
    out.blocksOnLanding = await page.evaluate(() => [...new Set([...document.querySelectorAll('[data-block]')].map(e => e.getAttribute('data-block')))].filter(b => /Orbit|Card|Event|NoResults|Empty/i.test(b)).slice(0, 40));
    log('blocks: ' + JSON.stringify(out.blocksOnLanding));
    out.landing = { at: pathOf(page.url()), cards: await page.locator((plan.via.pre || [])[0] || 'body').count(), hostSurveyLinks: await page.locator(plan.via.click).count() };
    log('landing: ' + JSON.stringify(out.landing));
    for (const sel of plan.via.pre || []) { await page.locator(sel).first().click({ timeout: 15000 }); await waitReady(page, 2500); }
    out.afterPre = { at: pathOf(page.url()), hostSurveyLinks: await page.locator(plan.via.click).count() };
    log('after pre: ' + JSON.stringify(out.afterPre));
    await page.locator(plan.via.click).nth(plan.via.nth || 0).click({ timeout: 15000 });
    await waitReady(page, 3500);
    out.at = pathOf(page.url());
    out.steps.push({ step: 'opened', at: out.at, dropdowns: await dropdowns(page) });
    // edit mode: the first Edit of a room or vehicle or helper card, else an Add button (client-side)
    let list = await dropdowns(page);
    if (!list.length) {
      const edit = page.locator('text=/^\\s*Edit\\s*$/').first();
      if (await edit.count()) { await edit.click({ timeout: 10000 }).catch(() => {}); await waitReady(page, 1500); }
      list = await dropdowns(page);
      out.steps.push({ step: 'after Edit', found: list.length });
    }
    if (!list.length) throw new Error('no dropdown on the opened HostSurvey step (edit mode not reached)');
    const target = list.find(d => d.id) || list[0];
    out.target = pick(target, ['id']);
    out.before = target;
    const root = page.locator(`#${target.id}`);
    await root.locator('.dropdown-display').click({ timeout: 10000 });
    await page.waitForTimeout(500);
    out.open = (await dropdowns(page)).find(d => d.id === target.id);
    const empty = root.locator('.drowpdown-empty-value-row, .dropdown-empty-value-row').first();
    if (await empty.count()) await empty.click({ timeout: 10000 }); else await page.keyboard.press('Escape');
    await page.waitForTimeout(1200);
    out.afterEmpty = (await dropdowns(page)).find(d => d.id === target.id);
  } catch (e) {
    out.error = clean(e);
  } finally {
    if (ctx) out.blocked = [...new Set(ctx.__blocked || [])];
    await browser.close();
  }
  fs.writeFileSync(OUT, JSON.stringify(out, null, 1));
  log(JSON.stringify(pick(out, ['at', 'error', 'target', 'blocked']))); log('before: ' + JSON.stringify(out.before)); log('open: ' + JSON.stringify(out.open)); log('after empty row: ' + JSON.stringify(out.afterEmpty));
  log(`→ ${OUT}`);
}

main().catch(e => { console.error(clean(e)); process.exit(1); });
