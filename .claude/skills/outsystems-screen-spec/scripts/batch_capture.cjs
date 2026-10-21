#!/usr/bin/env node
/*
 * batch_capture.cjs: capture many OutSystems screens with Playwright, outside any LLM conversation.
 * Same capture.js, same files as the manual/MCP flow, but zero tokens: the agent only reads the results.
 *
 *   npm i -D playwright && npx playwright install chromium        (once, in the migration repo)
 *
 *   node batch_capture.cjs login     --base https://host/App/ --storage .auth/state.json
 *        Opens a visible browser. YOU log in (the script never sees or types credentials), then press
 *        Enter in the terminal; the session is saved to --storage. Keep .auth/ out of git and delete it
 *        when the capture campaign ends.
 *   node batch_capture.cjs login --auto [--profile <site.json>] [--credentials .auth/credentials.json] --storage .auth/state.json
 *        Signs in by itself with the site profile (site_auth.cjs: login page → identity provider → PIN) and the
 *        test account in the secrets file or environment. --base defaults to the profile's base.
 *   With a site profile and secrets available, "run" also signs in again and unlocks the PIN by itself whenever the
 *   app sends a page to the login, identity provider or PIN page (the capture of that page is then redone).
 *
 *   node batch_capture.cjs survey [--page /<App>/<Home>] [--include "<regex>"] [--out capture/survey-<App>.json]
 *        Phase 0 without DevTools: opens the app with the saved session (signing in / unlocking by itself with a
 *        site profile), injects survey.js, runs it and saves the static survey (compiled code only, no user data).
 *
 *   node batch_capture.cjs init-plan --board-dir migration --out migration/capture-plan.json
 *        Skeleton plan for every screen with decision=build and status todo/capture. Fill in the input
 *        parameters (test-account ids), wait selectors and interaction steps.
 *
 *   node batch_capture.cjs run --base https://host --plan migration/capture-plan.json \
 *        --storage .auth/state.json --out migration/screens [--only A,B] [--analyze] [--headed]
 *        For each screen: load with capture.js + startRuntime() as an init script (first load is captured),
 *        snapshot "default", run the plan's steps (click → snapshot label → optional back), stop the runtime,
 *        then the automatic states: "loading" (service calls held) and "offline" (service calls aborted).
 *        Read-only guard on by default (readonly_guard.cjs, same rule as record_har.cjs): screenservice calls that are
 *        not reads are aborted and listed per screen in capture/blocked-calls*.json; names the user confirmed as
 *        non-writing go in the plan's defaults.allowActions (or --allow-actions "A,B"). --allow-writes turns the guard
 *        off: not allowed on the real app (CLAUDE.md).
 *        Writes <out>/<Screen>/capture/{runtime,capture-*}.json; --analyze runs analyze_capture.py into
 *        <out>/<Screen>/analysis. When everything succeeded it writes capture/.complete (route.py then
 *        reuses the capture when a route is restarted). A screen that failed half-way has no .complete.
 *
 * Plan format (JSON):
 *   { "defaults": { "viewport": "390x844", "device": null, "settleMs": 2500, "autoStates": ["loading", "offline"],
 *                   "viewports": { "phone": "390x844", "tablet": "820x1180", "desktop": "1440x900" },   (optional)
 *                   "primaryViewport": "phone" },
 *     "flagVariants": [ { "id": "NewHome=on", "flags": { "NewHome": "on" },                         (optional)
 *                         "localStorage": { "<key>": "<value>" },       client variable / flag key set before load
 *                         "storage": ".auth/other-account.json",        another test account whose flag value differs
 *                         "base": "https://other-test-env/",            another environment whose flag value differs
 *                         "overrides": [ { "url": "<glob of the flag service URL>", "json": { } } ] } ],   flag service answer
 *     (a variant reproduces a flag value the user decided to build: flags.py decide; how to set it comes from the MCP answer)
 *     "screens": [ { "screen": "<Screen>", "route": "/<App>/<Screen>?<Param>=<test value>",
 *                    "waitFor": "<selector of main content>", "autoStates": ["loading"],
 *                    "steps": [ { "label": "popup-share", "click": "<selector>", "waitMs": 800, "back": "Escape" },
 *                               { "label": "next-page", "click": "<selector>", "waitFor": "<selector>" } ] } ] }
 *   back: "history" (browser back), "Escape" (key), or omitted.
 *   "waitForCall" (per screen): capture right after this screenservice action answers (+ settleMs), for screens that
 *   navigate away on their own once their data is in (e.g. an empty "accept policies" list).
 *   "via" (per screen): { "from": "<route>", "click": "<selector>", "nth": 0, "pre": ["<selector>"] } opens the screen the way a
 *   user does, from another screen (needed when that screen hands over preloaded data, e.g. carousels); the runtime capture
 *   restarts right before the click, so only this screen's calls are recorded. Auto states follow the same path.
 *   "auth" (per screen, for sign-in / lock screens): "none" = context without the saved session, "locked" = saved
 *   session but no automatic PIN unlock or sign-in (to capture the lock page itself), "register" = fresh browser that
 *   signs in and stops on the first-time PIN register page without registering; default: sign in / unlock as needed.
 *   A screen may narrow "viewports": ["phone", "desktop"] and "flagVariants": ["NewHome=on"].
 *   State labels: <state> on the primary viewport, <state>@<viewport> on the others, <state>+<variant> for a flag variant
 *   (for example default@desktop, popup-share+NewHome=on). Every snapshot carries meta (viewport, device/body classes, flags,
 *   the steps that reach it, the mock scenario) that analyze_capture.py writes to analysis/states.json for route.py parity.
 *   Primary viewport, no variant: runtime + steps + auto states. Other viewports and variants: default + steps
 *   (and a runtime file per variant, runtime-<Screen>+<variant>.json).
 * Privacy: capture.js reduces bodies to shapes and masks user text; nothing is uploaded anywhere.
 */
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { spawnSync } = require('child_process');

let pw;
try { pw = require('playwright'); } catch { console.error('playwright not found: npm i -D playwright && npx playwright install chromium'); process.exit(1); }
const { chromium, devices } = pw;
const auth = require('./site_auth.cjs');
const guard = require('./readonly_guard.cjs');
let PROFILE = null, SECRETS = null;
let GUARD = true, ALLOW = new Set();
const authLog = m => console.log(`  [auth] ${m}`);
/* sign in / unlock if the app sent the page elsewhere, then come back to url; true if it had to act */
async function backInApp(page, url, sc, defaults) {
  if (!PROFILE || (await auth.whereNow(page, PROFILE)) === 'app') return false;
  if (!SECRETS) throw new Error('redirected to sign-in/PIN: no secrets (.auth/credentials.json or environment); see site_auth.cjs');
  const ctx = page.context();
  ctx.__authing = true;   // sign-in and PIN unlock calls pass the read-only guard
  try { await auth.ensureSession(page, PROFILE, SECRETS, authLog); } finally { ctx.__authing = false; }
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitReady(page, sc, defaults);
  return true;
}

/* A fresh tab may be sent to the PIN lock or the sign-in only once the app has initialised: on UBTConnect TST the
   redirect came 16-20 s after the load (measured 2026-10-14), about 8 s after the last start-up call, so no call is a
   reliable signal. Poll until it happens (moving on at once) or defaults.lockWaitMs (35 s) passes. Fresh tabs of a
   signed-in context were always locked; a reload in an unlocked tab keeps the unlock (sessionStorage). */
async function settleAuth(page, url, sc, defaults) {
  if (!PROFILE) return false;
  const end = Date.now() + (defaults.lockWaitMs || 35000);
  const target = new URL(url).pathname;
  while (Date.now() < end) {
    if ((await auth.whereNow(page, PROFILE)) !== 'app') return backInApp(page, url, sc, defaults);
    if (new URL(page.url()).pathname !== target) break;   // moved elsewhere on its own: not an auth redirect
    await sleep(500);
  }
  return false;
}

/* via: open the source screen (unlocking if needed), optional pre clicks, then click into this screen. */
async function openVia(page, sc, defaults, base, url, beforeClick, settle) {
  const fromUrl = new URL(sc.via.from, base).toString();
  await page.goto(fromUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitReady(page, {}, defaults).catch(() => {});
  if (settle && !sc.auth && await settleAuth(page, fromUrl, sc, defaults)) await waitReady(page, {}, defaults).catch(() => {});
  for (const sel of sc.via.pre || []) { await page.locator(sel).first().click({ timeout: 15000 }); await sleep(2000); }
  if (beforeClick) await beforeClick();
  await page.locator(sc.via.click).nth(sc.via.nth || 0).click({ timeout: 15000 });
  const target = new URL(url).pathname;
  await page.waitForURL(u => new URL(u).pathname === target, { timeout: 30000 });
}

const HERE = __dirname;
const CAPTURE_JS = fs.readFileSync(path.join(HERE, 'capture.js'), 'utf8');

function args(argv) {
  const o = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const k = a.slice(2);
      const v = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
      o[k] = v;
    } else o._.push(a);
  }
  return o;
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
const writeJson = (p, d) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, typeof d === 'string' ? d : JSON.stringify(d)); };

async function contextFor(browser, o, defaults, sc, run) {
  const dev = !run.vpExplicit && (sc.device || defaults.device || o.device);
  const opts = dev ? { ...devices[dev] } : { viewport: { width: run.vp[0], height: run.vp[1] } };
  const storage = (run.variant && run.variant.storage) || o.storage;
  if (storage && sc.auth !== 'none' && sc.auth !== 'register') opts.storageState = storage;   // "none"/"register": no saved session
  opts.serviceWorkers = 'block'; // a PWA service worker would bypass request interception
  const ctx = await browser.newContext(opts);
  if (GUARD) await guard.installGuard(ctx, ALLOW);
  const ls = (run.variant && run.variant.localStorage) || null;
  if (ls) await ctx.addInitScript(entries => { try { for (const [k, v] of Object.entries(entries)) localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v)); } catch {} }, ls);
  for (const ov of (run.variant && run.variant.overrides) || [])
    await ctx.route(ov.url, r => r.fulfill({ status: ov.status || 200, contentType: ov.contentType || 'application/json', body: ov.body ?? JSON.stringify(ov.json ?? {}) }));
  await ctx.addInitScript({ content: CAPTURE_JS + '\n;try{window.__osCapture&&window.__osCapture.startRuntime()}catch(e){}' });
  return ctx;
}

async function readSnapshot(page, opts) {
  const sum = await page.evaluate(o => window.__osCapture.snapshotUI(o), { ...opts, download: false });
  let text = '';
  for (let i = 0; i < sum.chunks200k; i++) text += await page.evaluate(k => window.__osCapture.chunk(k), i);
  return { sum, text };
}

async function waitReady(page, sc, defaults) {
  // waitForCall: a screenservice action whose answer marks the moment to capture (for screens that leave on their own)
  if (sc.waitForCall) await page.waitForResponse(r => { try { return new URL(r.url()).pathname.endsWith('/' + sc.waitForCall); } catch { return false; } }, { timeout: 30000 });
  else if (sc.waitFor) await page.waitForSelector(sc.waitFor, { timeout: 30000 });
  else await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await sleep(sc.settleMs || defaults.settleMs || 2500);
}

function looksLoggedOut(page, base) {
  return /\/(Login|Splash)(\?|$)/i.test(new URL(page.url()).pathname) ? page.url() : null;
}

const safe = x => String(x).replace(/[^A-Za-z0-9_.=-]/g, '_');
const stepOf = st => Object.fromEntries(Object.entries(st).filter(([k]) => ['click', 'fill', 'waitFor', 'waitMs', 'back'].includes(k)));

/* the runs of one screen: primary viewport without variant, other viewports, flag variants (on the primary viewport) */
function runsFor(plan, defaults, sc, o) {
  const vps = defaults.viewports || { [defaults.primaryViewport || 'default']: sc.viewport || defaults.viewport || o.viewport || '390x844' };
  const primary = defaults.primaryViewport || Object.keys(vps)[0];
  const parse = v => String(v).split('x').map(Number);
  const runs = [{ vpName: primary, vp: parse(sc.viewport && !defaults.viewports ? sc.viewport : vps[primary]), vpExplicit: !!defaults.viewports, variant: null, primary: true, suffix: '' }];
  for (const name of (sc.viewports || Object.keys(vps)).filter(n => n !== primary && vps[n]))
    runs.push({ vpName: name, vp: parse(vps[name]), vpExplicit: true, variant: null, primary: false, suffix: `@${safe(name)}` });
  const variants = plan.flagVariants || [];
  for (const id of sc.flagVariants || []) {
    const v = variants.find(x => x.id === id);
    if (!v) throw new Error(`flag variant ${id} is not defined in plan.flagVariants`);
    runs.push({ vpName: primary, vp: runs[0].vp, vpExplicit: runs[0].vpExplicit, variant: v, primary: false, suffix: `+${safe(v.id)}` });
  }
  return runs;
}

async function captureRun(browser, o, defaults, sc, run, dir, log) {
  const small = { includeSources: false, includeCss: false, includeAssets: false };
  const base = (run.variant && run.variant.base) || o.base;
  const url = new URL(sc.route, base).toString();
  const metaBase = { viewport: run.vp.join('x'), viewportName: run.vpName, variant: run.variant ? run.variant.id : null,
                     flags: run.variant ? run.variant.flags || {} : {}, route: sc.route };
  const ctx = await contextFor(browser, o, defaults, sc, run);
  const tag = run.suffix ? ` [${run.suffix}]` : '';
  fs.rmSync(path.join(dir, `blocked-calls${run.suffix}.json`), { force: true });   // a list from an earlier run must not linger
  try {
    const page = await ctx.newPage();
    if (sc.auth === 'register') {   // fresh browser: sign in, stop on the PIN register page, record only from there
      await page.goto(new URL(PROFILE.login.url, PROFILE.base).toString(), { waitUntil: 'domcontentloaded', timeout: 60000 });
      await sleep(1500);
      ctx.__authing = true;
      try { await auth.ensureSession(page, PROFILE, SECRETS, authLog, { stopAt: 'register' }); } finally { ctx.__authing = false; }
      if (auth.where(page, PROFILE) !== 'register') throw new Error(`expected the PIN register page, got ${new URL(page.url()).pathname}`);
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });   // reload here: the runtime capture restarts on this page
      await waitReady(page, sc, defaults);
    } else if (sc.via) {   // reach the screen from its source; record only this screen's calls
      await openVia(page, sc, defaults, base, url, () => page.evaluate(async () => { await window.__osCapture.stopRuntime(); window.__osCapture.startRuntime(); }), true);
      await waitReady(page, sc, defaults);
      metaBase.via = sc.via;
    } else {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      // signed out or PIN-locked pages never show the screen's waitFor: check where we are before failing
      const first = await waitReady(page, sc, defaults).then(() => null, e => e);
      const acted = sc.auth ? false : await settleAuth(page, url, sc, defaults);   // new document: the runtime capture restarts clean
      if (first && !acted) throw first;
    }
    const out = PROFILE ? ((await auth.whereNow(page, PROFILE)) !== 'app' ? page.url() : null) : looksLoggedOut(page, base);
    if (out && !sc.auth && !/Login|Splash/i.test(sc.screen)) throw new Error(`redirected to ${out}: session expired or no access; run "login" again`);
    const label0 = `default${run.suffix}`;
    let { sum, text } = await readSnapshot(page, { label: label0, ...(run.primary ? {} : small),
      meta: { ...metaBase, steps: [], scenario: 'real', auto: null } });
    writeJson(path.join(dir, `capture-${sc.screen}-${label0}.json`), text);
    log.push(`${label0} ${Math.round(sum.bytes / 1024)} KB, ${sum.blocksOnPage} blocks, masked ${sum.report.maskedTexts}`);
    const done = [];
    for (const [i, st] of (sc.steps || []).entries()) {
      try {
        await page.evaluate(l => window.__osCapture.mark(l), st.label || `step${i + 1}`);
        if (st.click) await page.click(st.click, { timeout: 10000 });
        if (st.fill) await page.fill(st.fill.selector, st.fill.value);
        if (st.waitFor) await page.waitForSelector(st.waitFor, { timeout: 15000 });
        await sleep(st.waitMs || 800);
        if (st.label) {
          const steps = [...done, { ...stepOf(st), back: undefined, label: st.label }];
          ({ text } = await readSnapshot(page, { label: st.label + run.suffix, ...small,
            meta: { ...metaBase, steps, scenario: 'real', auto: null, phase: st.label } }));
          writeJson(path.join(dir, `capture-${sc.screen}-${st.label}${run.suffix}.json`), text);
          log.push(`step ${st.label}${tag}`);
        }
        done.push({ ...stepOf(st), label: st.label || `step${i + 1}` });
        if (st.back === 'history') { await page.goBack(); await sleep(st.waitMs || 1200); }
        else if (st.back) { await page.keyboard.press(st.back); await sleep(400); }
      } catch (e) { log.push(`step ${st.label || st.click}${tag} FAILED: ${e.message.split('\n')[0]}`); }
    }
    if (run.primary || run.variant) {
      const runtime = await page.evaluate(() => window.__osCapture.stopRuntime());
      runtime.meta = metaBase;
      writeJson(path.join(dir, `runtime-${sc.screen}${run.variant ? run.suffix : ''}.json`), runtime);
      log.push(`runtime${tag} ${runtime.calls.length} calls, ${runtime.marks.length} phase mark(s)`);
    }
    // automatic states reuse this tab: loading it again keeps its PIN unlock (sessionStorage); a new tab would be
    // locked again and cost another app start. data-block exists only in capture.js snapshots, so wait for .layout.
    for (const st of run.primary ? (sc.autoStates || defaults.autoStates || ['loading', 'offline']) : []) {
      if (!['loading', 'offline'].includes(st)) continue;
      const held = [];
      const handler = st === 'loading' ? r => { held.push(r); } : r => r.abort('internetdisconnected');
      try {
        if (sc.via) await openVia(page, sc, defaults, base, url, () => page.route('**/screenservices/**', handler), false);   // this tab is already unlocked
        else { await page.route('**/screenservices/**', handler); await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 }); }
        await page.waitForSelector('.layout', { timeout: 15000 }).catch(() => {});
        await sleep(st === 'loading' ? 1200 : (sc.settleMs || defaults.settleMs || 2500));
        ({ text } = await readSnapshot(page, { label: st, ...small,
          meta: { ...metaBase, steps: [], scenario: st === 'loading' ? 'loading' : 'error', auto: st } }));
        writeJson(path.join(dir, `capture-${sc.screen}-${st}.json`), text);
        log.push(`auto ${st}${st === 'loading' ? ` (${held.length} call(s) held)` : ''}`);
      } catch (e) { log.push(`auto ${st} FAILED: ${e.message.split('\n')[0]}`); }
      await page.unroute('**/screenservices/**', handler).catch(() => {});
      for (const r of held) await r.abort().catch(() => {});
    }
    await page.close();
    const blocked = [...new Set(ctx.__blocked || [])].sort();
    if (blocked.length) {
      writeJson(path.join(dir, `blocked-calls${run.suffix}.json`), JSON.stringify({ blocked, note: 'aborted by the read-only guard' }, null, 1));
      log.push(`guard blocked${tag}: ${blocked.join(', ')}`);
    }
  } finally { await ctx.close(); }
}

async function captureScreen(browser, o, defaults, sc, plan) {
  const dir = path.join(o.out, sc.screen, 'capture');
  const log = [];
  fs.rmSync(path.join(dir, '.complete'), { force: true });   // a checkpoint from an earlier run must not survive a failed rerun
  for (const run of runsFor(plan, defaults, sc, o)) {
    try { await captureRun(browser, o, defaults, sc, run, dir, log); }
    catch (e) { if (run.primary || /session expired/.test(e.message)) throw e; log.push(`run ${run.suffix} FAILED: ${e.message.split('\n')[0]}`); }
  }

  if (o.analyze) {
    const files = fs.readdirSync(dir);
    const main = `capture-${sc.screen}-default.json`;
    const states = files.filter(f => f.startsWith(`capture-${sc.screen}-`) && f !== main).map(f => ['--state', path.join(dir, f)]).flat();
    const variantRuntimes = files.filter(f => f.startsWith(`runtime-${sc.screen}+`)).map(f => ['--variant-runtime', path.join(dir, f)]).flat();
    const r = spawnSync(o.python || 'python3', [path.join(HERE, 'analyze_capture.py'), '--ui', path.join(dir, main),
      '--runtime', path.join(dir, `runtime-${sc.screen}.json`), ...states, ...variantRuntimes, '--out', path.join(o.out, sc.screen, 'analysis')], { encoding: 'utf8' });
    log.push(r.status === 0 ? 'analyzed' : `analyze FAILED: ${(r.stderr || '').trim().split('\n').pop()}`);
    if (r.status !== 0) return log;
  }
  if (log.some(l => /FAILED/.test(l))) return log;   // incomplete: no checkpoint, the route will be captured again
  // checkpoint read by route.py: the capture of this screen is complete and need not be redone
  fs.writeFileSync(path.join(dir, '.complete'), JSON.stringify({ at: new Date().toISOString(), analyzed: !!o.analyze, files: fs.readdirSync(dir) }));
  return log;
}

function parseBoard(dir) {
  const rows = [];
  for (const line of fs.readFileSync(path.join(dir, 'board.md'), 'utf8').split('\n')) {
    if (!line.startsWith('| ') || line.startsWith('| Screen ') || line.startsWith('|---')) continue;
    const c = line.slice(1, -1).split(' | ').map(x => x.trim());
    rows.push({ screen: c[0], route: c[1].replace(/`/g, ''), decision: c[5], status: c[7] });
  }
  return rows;
}

async function main() {
  const o = args(process.argv.slice(2));
  GUARD = o['allow-writes'] === undefined;
  for (const n of String(o['allow-actions'] || '').split(',').map(x => x.trim()).filter(Boolean)) ALLOW.add(n);
  const cmd = o._[0];
  PROFILE = auth.resolveProfile(o);
  if (PROFILE && o['no-auto'] !== undefined) PROFILE = null;
  if (PROFILE) {
    SECRETS = auth.loadSecrets(PROFILE, o);
    o.base = o.base || PROFILE.base;
    console.log(`site profile: ${PROFILE.name} (${PROFILE._file}); secrets: ${SECRETS ? 'found (' + SECRETS._source + ')' : 'NOT found: automatic sign-in off'}`);
    if (!SECRETS) PROFILE = null;
  }
  if (cmd === 'login' && o.auto) {
    if (!PROFILE) throw new Error('login --auto needs a site profile and secrets (.auth/credentials.json or environment)');
    const storage = o.storage || '.auth/state.json';
    const browser = await chromium.launch({ headless: !o.headed });
    const vp = String(o.viewport || '390x844').split('x').map(Number);
    try { await auth.autoLogin(browser, o.device ? { ...devices[o.device] } : { viewport: { width: vp[0], height: vp[1] } }, PROFILE, SECRETS, storage, authLog); }
    finally { await browser.close(); }
    return;
  }
  if (cmd === 'login') {
    if (!o.base || !o.storage) throw new Error('login needs --base and --storage');
    const browser = await chromium.launch({ headless: false });
    const ctx = await browser.newContext(o.device ? { ...devices[o.device] } : { viewport: { width: 390, height: 844 } });
    const page = await ctx.newPage();
    await page.goto(o.base);
    console.log('Log in in the browser window (test account, non-production). Press Enter here when the app home is visible.');
    await new Promise(r => readline.createInterface({ input: process.stdin }).once('line', r));
    fs.mkdirSync(path.dirname(o.storage), { recursive: true });
    await ctx.storageState({ path: o.storage });
    console.log(`session saved to ${o.storage} (secret: keep out of git, delete after the campaign)`);
    await browser.close();
    return;
  }
  if (cmd === 'survey') {
    if (!o.base) throw new Error('survey needs --base (or a site profile)');
    const browser = await chromium.launch({ headless: !o.headed });
    try {
      if (PROFILE && (!o.storage || !fs.existsSync(o.storage))) {
        o.storage = o.storage || '.auth/state.json';
        await auth.autoLogin(browser, { viewport: { width: 390, height: 844 } }, PROFILE, SECRETS, o.storage, authLog);
      }
      const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block',
                                             storageState: o.storage && fs.existsSync(o.storage) ? o.storage : undefined });
      if (GUARD) await guard.installGuard(ctx, ALLOW);
      const page = await ctx.newPage();
      const url = new URL(o.page || (PROFILE && PROFILE.home) || o.base, o.base).toString();
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await sleep(2500);
      if (PROFILE && (await auth.whereNow(page, PROFILE)) !== 'app') {
        ctx.__authing = true;
        try { await auth.ensureSession(page, PROFILE, SECRETS, authLog); } finally { ctx.__authing = false; }
        await sleep(1500);
      }
      await page.addScriptTag({ content: fs.readFileSync(path.join(HERE, 'survey.js'), 'utf8') });
      const sum = await page.evaluate(async inc => window.__osSurvey.run({ download: false, ...(inc ? { include: new RegExp(inc) } : {}) }), o.include || null);
      let text = '';
      for (let i = 0; i < sum.chunks200k; i++) text += await page.evaluate(k => window.__osSurvey.chunk(k), i);
      const app = JSON.parse(text).app;
      const out = o.out || path.join('capture', `survey-${app}.json`);
      writeJson(out, text);
      console.log(`survey: ${sum.files} compiled file(s), ${sum.manifestEntries} manifest entries, ${sum.failed} failed → ${out}`);
    } finally { await browser.close(); }
    return;
  }
  if (cmd === 'init-plan') {
    const dir = o['board-dir'] || 'migration';
    const meta = JSON.parse(fs.readFileSync(path.join(dir, 'board.meta.json'), 'utf8')).screens;
    const rows = parseBoard(dir).filter(r => r.decision === 'build' && ['todo', 'capture'].includes(r.status));
    const plan = { defaults: { viewport: '390x844', device: null, settleMs: 2500, autoStates: ['loading', 'offline'],
                               viewports: { phone: '390x844' }, primaryViewport: 'phone' },
      flagVariants: [],
      screens: rows.map(r => {
        const ins = (meta[r.screen] || {}).inputs || [];
        const qs = ins.map(x => `${x.split(':')[0].trim()}=<${x.split(':')[1] ? x.split(':')[1].trim() : 'value'}>`).join('&');
        return { screen: r.screen, route: r.route + (qs ? `?${qs}` : ''), waitFor: null, steps: [], viewports: null, flagVariants: [] };
      }) };
    writeJson(o.out || path.join(dir, 'capture-plan.json'), JSON.stringify(plan, null, 1));
    console.log(`${plan.screens.length} screen(s) → ${o.out || path.join(dir, 'capture-plan.json')}. Replace every <...> with test-account values.`);
    return;
  }
  if (cmd === 'run') {
    if (!o.base || !o.plan) throw new Error('run needs --base and --plan');
    o.out = o.out || 'migration/screens';
    const plan = JSON.parse(fs.readFileSync(o.plan, 'utf8'));
    for (const n of (plan.defaults && plan.defaults.allowActions) || []) ALLOW.add(n);   // confirmed non-writing by the user
    console.log(`read-only guard: ${GUARD ? 'on' : 'OFF'}${ALLOW.size ? `; allowed: ${[...ALLOW].join(', ')}` : ''}`);
    const only = o.only ? new Set(String(o.only).split(',')) : null;
    const todo = plan.screens.filter(s => !only || only.has(s.screen));
    const bad = todo.filter(s => /<[^>]+>/.test(s.route));
    if (bad.length) throw new Error(`fill in route parameters first: ${bad.map(s => s.screen).join(', ')}`);
    const browser = await chromium.launch({ headless: !o.headed });
    if (PROFILE && (!o.storage || !fs.existsSync(o.storage))) {   // no saved session yet: sign in once, reuse it for every screen
      o.storage = o.storage || '.auth/state.json';
      await auth.autoLogin(browser, { viewport: { width: 390, height: 844 } }, PROFILE, SECRETS, o.storage, authLog);
    }
    const summary = {};
    for (const sc of todo) {
      process.stdout.write(`${sc.screen} … `);
      try { summary[sc.screen] = await captureScreen(browser, o, plan.defaults || {}, sc, plan); console.log(summary[sc.screen].join('; ')); }
      catch (e) { summary[sc.screen] = [`FAILED: ${e.message.split('\n')[0]}`]; console.log(summary[sc.screen][0]); if (/session expired/.test(e.message)) break; }
    }
    await browser.close();
    writeJson(path.join(o.out, '_capture-summary.json'), JSON.stringify(summary, null, 1));
    return;
  }
  console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]);
}

main().catch(e => { console.error(e.message); process.exit(1); });
