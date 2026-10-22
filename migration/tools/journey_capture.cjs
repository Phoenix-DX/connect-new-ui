#!/usr/bin/env node
/*
 * journey_capture.cjs: run the main user journeys (migration/journeys/journeys.json) on TST, read-only, and record
 * each step: the path reached, the element that the step used, the screenservice actions it called and a screenshot
 * of the masked DOM. The result is the evidence that a journey works on the real app, and the base for e2e tests.
 *
 *   node migration/tools/journey_capture.cjs run [--only J5,J11] [--skip-verified] [--headed] [--keep-dom]
 *   --debug: when a step stops, also save the masked DOM and a screenshot of the page at that moment (popups included)
 *            as runs/<J>/debug-<Screen>.{html,png}
 *   --skip-verified: leave out the journeys whose last run (runs/<J>/run.json) is verified and still has its screenshots
 *
 * Several accounts (user, 2026-10-21): when .auth/accounts.json exists, each journey that is not verified yet runs with
 * the accounts in order (default global, regional, local) until one verifies it; a verified journey is not run again
 * (--all runs them too). An account with a pending policy is left out (accepting writes data), except for journeys
 * through AcceptPendingPolicies. A stopped attempt saves a debug snapshot in runs/<J>.debug/. run.json records the
 * account role that verified the journey and every attempt; when none verifies it, runs/<J> is the furthest attempt. Only this process reads the file; the values go to
 * site_auth.cjs and are never printed or written. Format (the owner writes it):
 *   { "password": "…", "pin": "…", "accounts": { "global": "<user>", "regional": "<user>", "local": "<user>",
 *     "householder": "<user>" }, "order": ["global", "regional", "local"] }
 *
 * Run from the project root. It uses the skill's own modules:
 *   site_auth.cjs       sign-in and PIN with the site profile (migration/site.json); only that module reads the secrets
 *   readonly_guard.cjs  screenservice calls that are not reads are aborted; the plan's defaults.allowActions are the
 *                       names the user confirmed (CLAUDE.md rule 6); no option turns the guard off
 *   capture.js          masked DOM snapshot (user text becomes "•", user images are dropped)
 * Output: migration/journeys/runs/<J>/run.json, <nn>-<Screen>.png (and dom/ with --keep-dom); runs/summary.json.
 * Privacy: query values are never written (parameter names only); screenshots render the masked snapshot, never the
 * live page, with a second pass: data-bound text is masked unless it is a label of the reviewed captures, and the
 * render loads only the app's own static images (no user photos). An entry route with test parameters (journey start.plan) is read from migration/capture-plan.json here
 * and is not copied to any output.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
process.chdir(ROOT);
const SK = path.join(ROOT, '.claude', 'skills', 'outsystems-screen-spec', 'scripts');
let pw;
try { pw = require('playwright'); } catch { console.error('playwright not found: npm i -D playwright'); process.exit(1); }
const auth = require(path.join(SK, 'site_auth.cjs'));
const guard = require(path.join(SK, 'readonly_guard.cjs'));
const CAPTURE_JS = fs.readFileSync(path.join(SK, 'capture.js'), 'utf8');

const JOURNEYS = 'migration/journeys/journeys.json';
const OUT = 'migration/journeys/runs';
const PLAN = 'migration/capture-plan.json';
const ACCOUNTS = '.auth/accounts.json';
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* Second privacy pass for the screenshots. capture.js keeps a word when the app's own code contains it, so a short
   first name can pass (seen 2026-10-21, also inside a search highlight <mark>). So every text of the page is masked
   unless the same text is in the reviewed screen captures (migration/screens/<S>/analysis/dom) or is only numbers. */
const textsOf = html => html.replace(/<(style|script)\b[\s\S]*?<\/\1>/gi, '');
function reviewedLabels() {
  const set = new Set();
  const dir = 'migration/screens';
  for (const s of fs.readdirSync(dir)) {
    const d = path.join(dir, s, 'analysis', 'dom');
    if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d).filter(x => x.endsWith('.raw.html'))) {
      for (const m of textsOf(fs.readFileSync(path.join(d, f), 'utf8')).matchAll(/>([^<]+)</g)) {
        const t = m[1].trim();
        if (t && !t.includes('•')) set.add(t);
      }
    }
  }
  return set;
}
let LABELS = new Set();
const maskText = t => t.replace(/[^\s]/g, '•');
const keepText = x => !x || x.includes('•') || LABELS.has(x) || /^[\d\s.,:;%()+\-\/&;#]+$/.test(x);
function strictMask(dom) {
  // split out style and script blocks, mask the text between tags in the rest
  return dom.split(/(<(?:style|script)\b[\s\S]*?<\/(?:style|script)>)/gi).map((part, i) => (i % 2 ? part
    : part.replace(/>([^<]+)</g, (m, t) => (keepText(t.trim()) ? m : `>${maskText(t)}<`)))).join('');
}
/* the screenshot loads only the app's own static resources: style sheets, fonts and images under /img/ */
const STATIC_IMG = /\/img\/[^/?#]+\.(png|jpe?g|gif|svg|webp)$/i;
const log = m => console.log(m);

function args(argv) {
  const o = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) o[a.slice(2)] = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
    else o._.push(a);
  }
  return o;
}

function readPlan() {
  try { return JSON.parse(fs.readFileSync(PLAN, 'utf8')); } catch { return { defaults: {}, screens: [] }; }
}

let PROFILE, SECRETS, ALLOW, PLAN_DATA, VIEWPORT, DEVICE;

async function newContext(browser, secrets) {
  const opts = DEVICE ? { ...pw.devices[DEVICE] } : { viewport: VIEWPORT };
  opts.serviceWorkers = 'block';   // a PWA service worker would bypass the guard
  const ctx = await browser.newContext(opts);
  await guard.installGuard(ctx, ALLOW);
  await ctx.addInitScript({ content: CAPTURE_JS });
  ctx.__calls = [];
  ctx.__secrets = secrets || SECRETS;
  ctx.on('request', r => {
    if (!/\/screenservices\//.test(r.url())) return;
    try { ctx.__calls.push(guard.actionOf(r.url())); } catch { /* not an action URL */ }
  });
  return ctx;
}

async function ensure(page, opts) {
  const ctx = page.context();
  ctx.__authing = true;   // sign-in and PIN calls pass the read-only guard
  try { await auth.ensureSession(page, PROFILE, ctx.__secrets || SECRETS, m => log(`    [auth] ${m}`), opts); } finally { ctx.__authing = false; }
}

async function waitReady(page, settleMs) {
  await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
  await sleep(settleMs ?? 2500);
}

/* A fresh tab is sent to the PIN lock or the sign-in some seconds after the app starts (batch_capture.cjs, settleAuth). */
async function settleAuth(page, url) {
  const end = Date.now() + 35000;
  const target = new URL(url).pathname;
  while (Date.now() < end) {
    if ((await auth.whereNow(page, PROFILE)) !== 'app') {
      await ensure(page);
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await waitReady(page);
      return true;
    }
    if (new URL(page.url()).pathname !== target) return false;
    await sleep(500);
  }
  return false;
}

async function signIn(page) {
  const home = new URL(PROFILE.home || '/UBTConnect/HomeFeed', PROFILE.base).toString();
  await page.goto(home, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitReady(page);
  if ((await auth.whereNow(page, PROFILE)) !== 'app') await ensure(page);
  await page.goto(home, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitReady(page);
  await settleAuth(page, home);
}

/* the steps to run: the setup steps of the journey it starts from, then its own steps (recorded) */
function chainOf(j, byId) {
  if (!j.start || !j.start.journey) return j.steps.map(s => ({ ...s, record: true }));
  const from = byId[j.start.journey];
  const setup = chainOf(from, byId).slice(0, j.start.step).map(s => ({ ...s, record: false }));
  return [...setup, ...j.steps.map(s => ({ ...s, record: true }))];
}

function startRoute(j, chain) {
  if (j.start && j.start.plan) {
    const sc = (PLAN_DATA.screens || []).find(s => s.screen === j.start.plan);
    if (!sc) throw new Error(`no route for ${j.start.plan} in the capture plan`);
    return sc.route;
  }
  return (j.start && j.start.route) || `/UBTConnect/${chain[0].screen}`;
}

const quick0 = chain => (chain[0].action || {}).kind === 'auto' && chain[0].screen === 'Splash';
/* the URL shows the screen: /<Module>/<Screen>, or the step's own path `at` (the start URL /UBTConnect/ shows the default screen) */
const shows = (u, screen, at) => { const p = new URL(u).pathname.toLowerCase(); return p.endsWith('/' + screen.toLowerCase()) || (!!at && p === at.toLowerCase()); };
const onScreen = (page, screen, at) => shows(page.url(), screen, at);

async function firstVisible(page, sel, nth) {
  const loc = page.locator(sel);
  const n = await loc.count().catch(() => 0);
  const order = [...Array(Math.min(n, 12)).keys()];
  if (nth) order.unshift(...order.splice(order.indexOf(Math.min(nth, n - 1)), 1));
  for (const i of order) if (await loc.nth(i).isVisible().catch(() => false)) return { el: loc.nth(i), index: i };
  return null;
}

async function clickOne(page, cands, nth) {
  for (const sel of cands) {
    const hit = await firstVisible(page, sel, nth);
    if (!hit) continue;
    try { await hit.el.click({ timeout: 8000 }); }
    catch { await hit.el.dispatchEvent('click'); return { selector: sel, index: hit.index, dispatched: true }; }   // covered or moving element
    return { selector: sel, index: hit.index };
  }
  throw new Error(`no visible element for: ${cands.join(' | ')}`);
}

/* perform the action of a step; returns how the element was found (null for automatic and auth steps) */
async function act(page, step, next) {
  const a = step.action || {};
  const kind = a.kind || 'click';
  if (kind === 'auto') return null;
  if (kind === 'pin') { await ensure(page); return null; }
  if (kind === 'signin') { await ensure(page, { stopAt: 'register' }); return null; }
  for (const sel of a.pre || []) { await clickOne(page, [sel], 0); await waitReady(page, 1500); }
  for (const sel of a.preOptional || []) {   // clicks that apply only in some states (an unticked box): skipped when absent
    try { await clickOne(page, [sel], 0); await waitReady(page, 800); } catch { /* not on the page */ }
  }
  if (a.fill) {
    await page.locator(a.fill.selector).first().fill(a.fill.value, { timeout: 10000 });
    if (a.fill.press) await page.locator(a.fill.selector).first().press(a.fill.press);
    await waitReady(page, a.fill.waitMs || 3000);
  }
  return clickOne(page, [...(a.selectors || []), `a[href*="/${next}"]`], a.nth || 0);
}

async function snapshot(page) {
  const sum = await page.evaluate(o => window.__osCapture.snapshotUI(o),
    { label: 'journey', includeSources: false, includeCss: false, includeAssets: false, download: false });
  let text = '';
  for (let i = 0; i < sum.chunks200k; i++) text += await page.evaluate(k => window.__osCapture.chunk(k), i);
  return { dom: JSON.parse(text).dom, masked: sum.report ? sum.report.maskedTexts : null };
}

/* render the masked DOM with the live page's own stylesheets, in a separate context with no session */
async function renderMasked(renderCtx, page, dom) {
  const origin = new URL(page.url()).origin;
  const sheets = await page.evaluate(() => [...document.querySelectorAll('link[rel=stylesheet]')].map(l => l.href));
  const inline = await page.evaluate(() => [...document.querySelectorAll('style')].map(s => s.textContent).join('\n'));
  const html = strictMask(dom.replace(/<script\b[\s\S]*?<\/script>/gi, ''));   // inert, and data-bound text masked
  const head = `<meta charset="utf-8"><base href="${origin}/">` + sheets.map(s => `<link rel="stylesheet" href="${s}">`).join('') + `<style>${inline}</style>`;
  const doc = /<head[^>]*>/i.test(html) ? html.replace(/<head[^>]*>/i, m => m + head) : `<!doctype html><html><head>${head}</head>${html}</html>`;
  const rp = await renderCtx.newPage();
  const blank = origin + '/__journey_shot__';
  await rp.route(blank, r => r.fulfill({ status: 200, contentType: 'text/html; charset=utf-8', body: doc }));
  await rp.route(u => !u.href.startsWith(blank), r => {
    const req = r.request(), t = req.resourceType(), u = new URL(req.url());
    if (u.origin === origin && (t === 'stylesheet' || t === 'font' || (t === 'image' && STATIC_IMG.test(u.pathname)))) return r.continue();
    return r.abort();   // user photos, avatars, service calls
  });
  await rp.goto(blank, { waitUntil: 'load', timeout: 30000 }).catch(() => {});
  await rp.evaluate(() => document.fonts && document.fonts.ready).catch(() => {});
  await sleep(400);
  const buf = await rp.screenshot({ type: 'png' });
  await rp.close();
  return buf;
}

async function record(ctx, renderCtx, page, rec, dir, index, keepDom) {
  const u = new URL(page.url());
  rec.path = u.pathname;
  rec.params = [...u.searchParams.keys()];
  const { dom, masked } = await snapshot(page);
  const name = `${String(index + 1).padStart(2, '0')}-${rec.screen}`;
  fs.writeFileSync(path.join(dir, `${name}.png`), await renderMasked(renderCtx, page, dom));
  if (keepDom) { fs.mkdirSync(path.join(dir, 'dom'), { recursive: true }); fs.writeFileSync(path.join(dir, 'dom', `${name}.html`), strictMask(dom)); }
  rec.shot = `${name}.png`;
  rec.maskedTexts = masked;
}

async function runJourney(browser, session, renderCtx, j, byId, o) {
  const mainPage = session.page;
  const final = path.join(OUT, j.id);
  const dir = `${final}.tmp`;   // the last good run stays until this run ends
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const result = { journey: j.id, title: j.title, ranAt: new Date().toISOString(), viewport: DEVICE || `${VIEWPORT.width}x${VIEWPORT.height}`,
                   account: session.role || null, steps: [] };
  if (j.requires && j.requires.tst !== j.requires.value && !session.role) {   // with several accounts, another user may have the value
    Object.assign(result, { status: 'not-run', reason: `Needs the flag ${j.requires.flag} ${j.requires.value}; it is ${j.requires.tst} on TST.` });
    fs.writeFileSync(path.join(dir, 'run.json'), JSON.stringify(result, null, 1));
    fs.rmSync(final, { recursive: true, force: true }); fs.renameSync(dir, final);
    return result;
  }
  const chain = chainOf(j, byId);
  let ctx = mainPage.context(), page = mainPage, own = null;
  const started = Date.now();
  let at = -1, blockedBefore = 0;
  let shown = null;   // the recorded step whose action has not passed yet: on a stop, it is the screen where the run stops
  try {
    if (j.auth === 'register') { own = await newContext(browser, session.secrets); ctx = own; page = await own.newPage(); }
    else if (j.auth === 'locked') page = await ctx.newPage();   // a fresh tab of a signed-in context starts locked
    const url = new URL(startRoute(j, chain), PROFILE.base).toString();
    await page.goto(url, { waitUntil: quick0(chain) ? 'commit' : 'domcontentloaded', timeout: 60000 });
    if (quick0(chain)) await page.waitForLoadState('domcontentloaded').catch(() => {}); else await waitReady(page, 2500);
    // the main tab is already unlocked (a reload keeps the unlock): check once instead of waiting for a late redirect
    if (!j.auth && (await auth.whereNow(page, PROFILE)) !== 'app') {
      await ensure(page);
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await waitReady(page);
    }
    let recorded = 0;
    for (let i = 0; i < chain.length; i++) {
      at = i;
      const step = chain[i];
      const rec = { screen: step.screen };
      const nextStep = chain[i + 1];
      const nextScreen = nextStep && nextStep.screen;
      if (!onScreen(page, step.screen, step.at) && (step.action || {}).kind === 'auto' && nextScreen) {   // the start URL (/UBTConnect/) opens Splash some time later
        await page.waitForURL(u => shows(u, step.screen, step.at) || shows(u, nextScreen, nextStep.at), { timeout: 45000 }).catch(() => {});
      }
      if (!onScreen(page, step.screen, step.at)) {
        // an automatic step (Splash) can move on before the snapshot: note it and go on from the next screen
        if ((step.action || {}).kind === 'auto' && nextScreen && onScreen(page, nextScreen, nextStep.at)) {
          if (step.record) result.steps.push({ ...rec, passed: 'The app opened the next screen before the snapshot.', action: { label: step.action.label, kind: 'auto' } });
          continue;
        }
        throw new Error(`expected ${step.screen}, the app shows ${new URL(page.url()).pathname}`);
      }
      if (step.record) {
        ctx.__calls = [];
        await record(ctx, renderCtx, page, rec, dir, recorded++, o['keep-dom']);
        shown = rec;
      }
      if (i === chain.length - 1) { if (step.record) result.steps.push(rec); break; }
      const next = chain[i + 1].screen;
      blockedBefore = (ctx.__blocked || []).length;
      ctx.__calls = [];
      const t0 = Date.now();
      const used = await act(page, step, next);
      await page.waitForURL(u => shows(u, next, chain[i + 1].at), { timeout: (step.action || {}).kind ? 45000 : 25000 });
      const nextQuick = (chain[i + 1].action || {}).kind === 'auto';
      await waitReady(page, nextQuick ? 800 : 2500);
      if (step.record) {
        rec.action = { label: (step.action || {}).label || '', kind: (step.action || {}).kind || 'click', element: used, ms: Date.now() - t0 };
        rec.calls = [...new Set(ctx.__calls)];
        rec.blocked = [...new Set((ctx.__blocked || []).slice(blockedBefore))];
        result.steps.push(rec);
      }
      shown = null;
    }
    result.status = 'verified';
  } catch (e) {
    if (/has been closed|Browser closed/i.test(e.message)) {   // the run was stopped: keep the last good result
      fs.rmSync(dir, { recursive: true, force: true });
      throw e;
    }
    if (o.debug || session.role) {   // the page at the moment the step stopped, popups included
      try {
        const { dom } = await snapshot(page);
        const ddir = `${final}.debug`;
        fs.mkdirSync(ddir, { recursive: true });
        const name = `${session.role || 'debug'}-${chain[at] ? chain[at].screen : 'start'}`;
        fs.writeFileSync(path.join(ddir, `${name}.html`), strictMask(dom));
        fs.writeFileSync(path.join(ddir, `${name}.png`), await renderMasked(renderCtx, page, dom));
        result.debug = `${path.basename(ddir)}/${name}.png`;
      } catch (err) { result.debug = `failed: ${err.message.split('\n')[0]}`; }
    }
    const where = PROFILE ? await auth.whereNow(page, PROFILE).catch(() => '?') : '?';
    const msg = e.message.split('\n')[0];
    result.status = 'blocked';
    if (shown) result.steps.push({ ...shown, stopped: true, calls: [...new Set(ctx.__calls || [])] });
    result.blockedAt = { step: at, screen: chain[at] ? chain[at].screen : null, setup: chain[at] ? !chain[at].record : false,
      error: where !== 'app' ? `sent to ${where}: ${msg}` : msg, path: new URL(page.url()).pathname,
      blocked: [...new Set((ctx.__blocked || []).slice(blockedBefore))] };
    if (j.knownBlock) result.knownBlock = j.knownBlock;
  } finally {
    if (j.auth === 'locked') await page.close().catch(() => {});
    if (own) await own.close().catch(() => {});
  }
  result.seconds = Math.round((Date.now() - started) / 1000);
  fs.writeFileSync(path.join(dir, 'run.json'), JSON.stringify(result, null, 1));
  fs.rmSync(final, { recursive: true, force: true }); fs.renameSync(dir, final);
  return result;
}

/* the accounts of .auth/accounts.json, in memory only; null when the file does not exist */
function loadAccounts() {
  if (!fs.existsSync(ACCOUNTS)) return null;
  const tracked = require('child_process').spawnSync('git', ['ls-files', '--error-unmatch', ACCOUNTS], { encoding: 'utf8' });
  if (tracked.status === 0) throw new Error(`${ACCOUNTS} is tracked by git: remove it from the repository first`);
  const a = JSON.parse(fs.readFileSync(ACCOUNTS, 'utf8'));
  const order = a.order || ['global', 'regional', 'local'];
  const roles = order.filter(r => a.accounts && a.accounts[r]);
  const missing = order.filter(r => !(a.accounts && a.accounts[r]));
  if (missing.length) log(`accounts: no user for ${missing.join(', ')} (left out)`);
  return roles.map(role => ({ role, secrets: { user: a.accounts[role], password: a.password, pin: a.pin != null ? String(a.pin) : undefined, _source: `accounts:${role}` } }));
}

async function main() {
  const o = args(process.argv.slice(2));
  if (o._[0] !== 'run') { console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]); process.exit(2); }
  PLAN_DATA = readPlan();
  LABELS = reviewedLabels();
  const d = PLAN_DATA.defaults || {};
  ALLOW = new Set(d.allowActions || []);
  const J = JSON.parse(fs.readFileSync(JOURNEYS, 'utf8'));
  const [w, h] = String((J.run && J.run.viewport) || d.viewport || '390x844').split('x').map(Number);
  VIEWPORT = { width: w, height: h };
  DEVICE = d.device || null;
  PROFILE = auth.resolveProfile({});
  const accounts = o['single-account'] ? null : loadAccounts();
  SECRETS = PROFILE && !accounts ? auth.loadSecrets(PROFILE, {}) : null;
  if (!PROFILE || (!SECRETS && !accounts)) { console.error('site profile or secrets not found: ask the user (see site_auth.cjs)'); process.exit(1); }
  log(`site profile: ${PROFILE.name}; ${accounts ? `accounts: ${accounts.map(a => a.role).join(' → ')}` : 'secrets: found'}; guard on, ${ALLOW.size} confirmed action(s) allowed`);
  if (accounts && !o.all) o['skip-verified'] = true;   // a verified journey is not run again

  const byId = Object.fromEntries(J.journeys.map(x => [x.id, x]));
  const only = o.only ? new Set(String(o.only).split(',').map(s => s.trim())) : null;
  const first = (J.run && J.run.order) || [], last = (J.run && J.run.last) || [];
  const verifiedWithShots = id => {
    try {
      const r = JSON.parse(fs.readFileSync(path.join(OUT, id, 'run.json'), 'utf8'));
      return r.status === 'verified' && r.steps.every(s => !s.shot || fs.existsSync(path.join(OUT, id, s.shot)));
    } catch { return false; }
  };
  const ids = J.journeys.map(x => x.id).filter(id => (!only || only.has(id)) && !(o['skip-verified'] && verifiedWithShots(id)));
  log(`journeys to run: ${ids.join(', ') || 'none'}`);
  const ordered = [...first.filter(id => ids.includes(id)), ...ids.filter(id => !first.includes(id) && !last.includes(id)), ...last.filter(id => ids.includes(id))];

  const browser = await pw.chromium.launch({ headless: !o.headed });
  const summaryPath = path.join(OUT, 'summary.json');
  const summary = fs.existsSync(summaryPath) ? JSON.parse(fs.readFileSync(summaryPath, 'utf8')) : { journeys: {} };
  try {
    const renderCtx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1, serviceWorkers: 'block' });
    const sessions = {};
    const sessionOf = async acc => {   // one sign-in per account and run, when the account is first needed
      if (sessions[acc.role]) return sessions[acc.role];
      const s = { role: acc.role, secrets: acc.secrets, pendingPolicy: false, failed: null };
      sessions[acc.role] = s;
      try {
        const ctx = await newContext(browser, acc.secrets);
        s.page = await ctx.newPage();
        log(`signing in: ${acc.role}`);
        await signIn(s.page);
        if (onScreen(s.page, 'AcceptPendingPolicies')) { s.pendingPolicy = true; log(`   ${acc.role}: a policy waits for acceptance; left out`); }
      } catch (e) { if (/has been closed/i.test(e.message)) throw e; s.failed = e.message.split('\n')[0]; log(`   ${acc.role}: sign-in failed: ${s.failed}`); }
      return s;
    };
    const say = (id, r, role) => {
      log(`${id}${role ? ` [${role}]` : ''} ${r.status}${r.blockedAt ? ` at ${r.blockedAt.screen}: ${r.blockedAt.error}` : ''}${r.reason ? `: ${r.reason}` : ''}`);
      const blocked = [...new Set(r.steps.flatMap(st => st.blocked || []).concat((r.blockedAt && r.blockedAt.blocked) || []))];
      if (blocked.length) log(`   guard blocked: ${blocked.join(', ')}`);
    };
    for (const id of ordered) {
      const j = byId[id];
      let r;
      if (!accounts) {
        const s = sessions.single || (sessions.single = await (async () => {
          const ctx = await newContext(browser, SECRETS); const page = await ctx.newPage(); log('signing in'); await signIn(page); return { page, secrets: SECRETS, role: null };
        })());
        r = await runJourney(browser, s, renderCtx, j, byId, o);
        say(id, r);
      } else {
        fs.rmSync(path.join(OUT, `${id}.debug`), { recursive: true, force: true });
        const viaPolicies = j.steps.some(st => st.screen === 'AcceptPendingPolicies');
        const attempts = [];
        // when no account verifies the journey, runs/<J> keeps the attempt that went furthest (the first one on a tie)
        const progress = x => (x.status === 'verified' ? Infinity : x.blockedAt ? x.blockedAt.step : -1);
        const keep = path.join(OUT, `${id}.best`);
        let best = null;
        for (const acc of accounts) {
          const s = await sessionOf(acc);
          if (s.failed) { attempts.push({ account: acc.role, status: 'skipped', reason: 'sign-in failed' }); continue; }
          if (s.pendingPolicy && !viaPolicies) { attempts.push({ account: acc.role, status: 'skipped', reason: 'a policy waits for acceptance' }); continue; }
          r = await runJourney(browser, s, renderCtx, j, byId, o);
          say(id, r, acc.role);
          if (r.blockedAt && /AcceptPendingPolicies/.test(r.blockedAt.error || '') && !viaPolicies) s.pendingPolicy = true;
          attempts.push({ account: acc.role, status: r.status, at: r.blockedAt ? r.blockedAt.screen : null, error: r.blockedAt ? r.blockedAt.error : (r.reason || null), debug: r.debug || null });
          if (r.status === 'verified') break;
          if (!best || progress(r) > progress(best)) {
            best = r;
            fs.rmSync(keep, { recursive: true, force: true });
            fs.cpSync(path.join(OUT, id), keep, { recursive: true });
          }
        }
        if (best && r !== best && r.status !== 'verified') { fs.rmSync(path.join(OUT, id), { recursive: true, force: true }); fs.renameSync(keep, path.join(OUT, id)); }
        fs.rmSync(keep, { recursive: true, force: true });
        const runPath = path.join(OUT, id, 'run.json');
        if (fs.existsSync(runPath)) {   // the final run.json is the last attempt: add the list of attempts
          const fr = JSON.parse(fs.readFileSync(runPath, 'utf8'));
          fr.attempts = attempts;
          fs.writeFileSync(runPath, JSON.stringify(fr, null, 1));
          r = fr;
        }
        if (!r) r = { status: 'blocked', steps: [], reason: 'no account could run it' };
      }
      summary.journeys[id] = { status: r.status, account: r.account || null, steps: (r.steps || []).length, at: r.blockedAt || null,
                               reason: r.reason || null, ranAt: r.ranAt || new Date().toISOString(), attempts: r.attempts || null };
    }
  } finally {
    // merge into the file as it is now: another run may have written it meanwhile
    const latest = fs.existsSync(summaryPath) ? JSON.parse(fs.readFileSync(summaryPath, 'utf8')) : { journeys: {} };
    for (const id of ordered) if (summary.journeys[id]) latest.journeys[id] = summary.journeys[id];
    latest.ranAt = new Date().toISOString();
    fs.writeFileSync(summaryPath, JSON.stringify(latest, null, 1));
    await browser.close();
  }
}

main().catch(e => { console.error(e); process.exit(1); });
