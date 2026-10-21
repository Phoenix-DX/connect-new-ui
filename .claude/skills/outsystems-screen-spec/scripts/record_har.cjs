#!/usr/bin/env node
/*
 * record_har.cjs: record the real app's screenservice calls (request + response bodies) into a HAR, as the
 * source of anonymized mock fixtures (har_to_fixtures.py). Raw data: the HAR goes to a folder that ignores
 * itself in git; agents never open it; convert it, have the user review, then delete it.
 *
 * The person logs in first (the script never sees credentials):
 *   node batch_capture.cjs login --base https://<host>/<App>/ --storage .auth/state.json
 * or, with a site profile and a secrets file (site_auth.cjs), the script signs in and unlocks the PIN by itself, at
 * the start and whenever the app sends a page back to the login, identity provider or PIN page. The calls made while
 * signing in are not recorded as fixtures: their names go to <out>.auth.json, which har_to_fixtures.py skips.
 *
 * Three ways to drive the browser (combine --plan and --crawl):
 *   manual   node record_har.cjs --base https://<host>/<App>/ --storage .auth/state.json --out migration/.raw/s.har
 *            a visible browser opens; the person clicks through, then presses Enter.
 *   plan     ... --plan migration/capture-plan.json [--only A,B]
 *            replays the capture plan of batch_capture.cjs: each screen's route (with its test parameters),
 *            waitFor, and steps (click / fill / waitFor / back). Screens whose route still has <placeholders>
 *            are skipped (crawl can reach them through links).
 *   crawl    ... --crawl [--depth 3] [--per-pattern 3] [--max-pages 150] [--exclude "<regex>"]
 *            starts from the base URL and the plan's routes, follows in-app links (<a href>) breadth-first and
 *            records each page. A list page's links carry real ids, so the details opened from it are
 *            recorded with matching ids. Pages are grouped by pattern (path + parameter names); at most
 *            --per-pattern pages per pattern. Crawl never clicks buttons; use plan steps for that.
 *
 * Read-only guard (on in plan and crawl; --allow-writes turns it off, not recommended):
 *   screenservice calls are let through only when the action name looks like a read: DataAction*,
 *   ScreenDataSet*, Aggregate*, Action(Get|List|Load|Fetch|Search|Find|Read|Count)<Word> with no write verb in
 *   the name, or a name in --allow-actions "A,B". Calls made by the automatic sign-in / PIN unlock pass. Every other action (save, delete, submit, send...) is aborted
 *   and listed in the coverage report. Links matching logout/login/delete/remove/cancel are never followed.
 *   Use a TEST environment and a TEST account all the same.
 *
 * Data minimisation: --record-actions <file.json | A,B> saves only those actions in the HAR (a JSON file with a
 *   "record" array of action names, e.g. migration/mock-scope.json). Every other call still runs (the app needs it)
 *   but its request and response are not written; the coverage report lists them as "passed, not saved".
 * Output: the HAR, plus migration/recording-coverage.md (--coverage to change; names only, no data): pages visited, actions recorded per
 * pattern, actions blocked, and build screens (from --board-dir) never reached.
 * Other options: --lock-wait 35000 (ms to wait for the PIN lock of a fresh tab before recording), --viewport 390x844, --headed, --settle 1500 (ms after network idle), --board-dir migration.
 */
const fs = require('fs');
const path = require('path');
const readline = require('readline');
let pw;
try { pw = require('playwright'); } catch { console.error('playwright not found: npm i -D playwright && npx playwright install chromium'); process.exit(2); }

const o = {};
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) if (argv[i].startsWith('--')) o[argv[i].slice(2)] = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
const auth = require('./site_auth.cjs');
let PROFILE = o['no-auto'] ? null : auth.resolveProfile(o);
const SECRETS = PROFILE ? auth.loadSecrets(PROFILE, o) : null;
if (PROFILE && !SECRETS) PROFILE = null;
if (!o.base && PROFILE) o.base = PROFILE.base;
let authing = false;
const authActions = new Set(), authWindows = [];
if (!o.base || !o.out) {
  console.error('usage: --base <url> --out <file.har> [--storage .auth/state.json] [--plan plan.json] [--crawl] [--headed] (see header)');
  process.exit(2);
}
const auto = Boolean(o.plan || o.crawl);
const guard = auto && !o['allow-writes'];
// A read is a data action / aggregate, or an Action<ReadVerb><Rest> whose name contains no write verb anywhere.
// Check/Validate/Is/Has are NOT reads by default (CheckIn, ValidateAndSubmit, HasSeen_Set...): confirm with --allow-actions.
const READ = /^(DataAction|ScreenDataSet|Aggregate)[A-Z0-9_]|^Action(Get|List|Load|Fetch|Search|Find|Read|Count)(?=[A-Z0-9_]|$)/;
const WRITE = /(Save|Create|Update|Delete|Remove|Submit|Send|Set(?![a-z])|Add|Insert|Upsert|Mark|Approve|Reject|Cancel|Confirm|Register|Login|Logout|Reset|Change|Assign|Upload|Post|Put|Patch|Sync|Check(In|Out)|Pay|Book|Accept|Invite|Join|Leave|Start|Stop|Finish|Complete|Close|Lock|Unlock|Enable|Disable|Toggle|Track|Log(?![a-z])|Increment|Decrement|Store|Write|Generate|Process|Execute|Run|Trigger|Notify|Subscribe|Unsubscribe|Archive|Restore|Move|Copy|Import|Export|Merge|Link|Unlink|Grant|Revoke|Claim|Redeem|Consume|Ack)/;
const isRead = name => READ.test(name) && !(name.startsWith('Action') && WRITE.test(name.slice(6)));
const allowNames = new Set(String(o['allow-actions'] || '').split(',').map(s => s.trim()).filter(Boolean));
const recordOnly = !o['record-actions'] ? null : new Set(String(o['record-actions']).endsWith('.json')
  ? JSON.parse(fs.readFileSync(o['record-actions'], 'utf8')).record
  : String(o['record-actions']).split(',').map(s => s.trim()).filter(Boolean));
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// what goes into the HAR: every screenservice call, or only the listed actions (last URL segment)
const HAR_FILTER = recordOnly
  ? new RegExp(`/screenservices/.*/(${[...recordOnly].map(escRe).join('|')})(\\?|$)`)
  : /\/screenservices\//;
const EXCLUDE = new RegExp(o.exclude || '(logout|logoff|signout|sign-out|login|delete|remove|cancel)', 'i');
const DEPTH = Number(o.depth || 3), PER = Number(o['per-pattern'] || 3), MAX = Number(o['max-pages'] || 150);
const SETTLE = Number(o.settle || 1500);
const sleep = ms => new Promise(r => setTimeout(r, ms));

const base = new URL(o.base);
const appPrefix = '/' + base.pathname.split('/').filter(Boolean)[0] + '/';
const actionOf = url => new URL(url).pathname.split('/').pop();
const patternOf = u => {
  const x = new URL(u), keys = [...x.searchParams.keys()].sort();
  return x.pathname.replace(/\/\d+(?=\/|$)/g, '/:n') + (keys.length ? '?' + keys.join('&') : '');
};

const cov = { pages: [], paths: new Set(), recorded: new Map(), passed: new Map(), blocked: new Map(), errors: [] };
const bump = (m, k, v) => { if (!m.has(k)) m.set(k, new Set()); m.get(k).add(v); };

async function settle(page, waitFor) {
  if (waitFor) await page.waitForSelector(waitFor, { timeout: 30000 }).catch(() => {});
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await sleep(SETTLE);
}

function sessionLost(page) {
  return /\/(login|signin)/i.test(new URL(page.url()).pathname);
}

async function signInIfNeeded(page, url, waitFor) {
  if (!PROFILE || (await auth.whereNow(page, PROFILE)) === 'app') return;
  authing = true;   // calls of the sign-in / unlock pass the guard; their time window goes to <out>.auth.json (not fixtures)
  const from = new Date(Date.now() - 1000).toISOString();
  try { await auth.ensureSession(page, PROFILE, SECRETS, m => console.log(`  [auth] ${m}`)); }
  finally { authing = false; authWindows.push({ from, to: new Date().toISOString() }); }
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await settle(page, waitFor);
}

async function visit(page, url, label, waitFor) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await settle(page, waitFor);
  await signInIfNeeded(page, url, waitFor);
  if (PROFILE ? (await auth.whereNow(page, PROFILE)) !== 'app' : sessionLost(page)) throw new Error('SESSION: redirected to a login page; log in again (batch_capture.cjs login)');
  const now = new URL(page.url());
  cov.paths.add(now.pathname.toLowerCase());
  cov.pages.push(`${label}: ${now.pathname}${now.search ? ' (with parameters)' : ''}`);
}

async function runPlan(page) {
  const plan = JSON.parse(fs.readFileSync(o.plan, 'utf8'));
  const only = o.only ? new Set(String(o.only).split(',')) : null;
  const starts = [];
  for (const sc of plan.screens || []) {
    if (only && !only.has(sc.screen)) continue;
    if (/<[^>]+>/.test(sc.route)) { cov.errors.push(`plan: ${sc.screen} skipped (route parameters not filled)`); continue; }
    const url = new URL(sc.route, base.origin).toString();
    starts.push(url);
    try {
      await visit(page, url, `plan ${sc.screen}`, sc.waitFor);
      for (const st of sc.steps || []) {
        try {
          if (st.click) await page.click(st.click, { timeout: 10000 });
          if (st.fill) await page.fill(st.fill.selector, st.fill.value);
          await settle(page, st.waitFor);
          if (st.waitMs) await sleep(st.waitMs);
          if (st.back === 'history') { await page.goBack(); await settle(page); }
          else if (st.back) { await page.keyboard.press(st.back); await sleep(400); }
        } catch (e) { cov.errors.push(`plan: ${sc.screen} step ${st.label || st.click}: ${e.message.split('\n')[0]}`); }
      }
    } catch (e) {
      if (/^SESSION/.test(e.message)) throw e;
      cov.errors.push(`plan: ${sc.screen}: ${e.message.split('\n')[0]}`);
    }
  }
  return starts;
}

async function runCrawl(page, extraStarts) {
  const queue = [[o.base, 0], ...extraStarts.map(u => [u, 0])];
  const seen = new Set(), perPattern = new Map();
  let n = 0;
  while (queue.length && n < MAX) {
    const [url, depth] = queue.shift();
    const key = new URL(url).pathname + new URL(url).search;
    if (seen.has(key)) continue;
    seen.add(key);
    const pat = patternOf(url);
    if ((perPattern.get(pat) || 0) >= PER) continue;
    perPattern.set(pat, (perPattern.get(pat) || 0) + 1);
    try { await visit(page, url, `crawl d${depth}`); n++; } catch (e) {
      if (/^SESSION/.test(e.message)) throw e;
      cov.errors.push(`crawl ${new URL(url).pathname}: ${e.message.split('\n')[0]}`); continue;
    }
    if (depth >= DEPTH) continue;
    const links = await page.$$eval('a[href]', as => as.map(a => ({ href: a.href, text: (a.textContent || '').trim().slice(0, 40) })));
    for (const l of links) {
      let u;
      try { u = new URL(l.href); } catch { continue; }
      if (u.origin !== base.origin || !u.pathname.startsWith(appPrefix)) continue;
      if (EXCLUDE.test(u.pathname + u.search) || EXCLUDE.test(l.text)) continue;
      if (/\.(pdf|zip|xlsx?|docx?|png|jpe?g|svg)$/i.test(u.pathname)) continue;
      u.hash = '';
      queue.push([u.toString(), depth + 1]);
    }
  }
  if (queue.length) cov.errors.push(`crawl stopped at --max-pages ${MAX}; ${queue.length} link(s) not visited`);
}

function boardScreens() {
  const f = path.join(o['board-dir'] || 'migration', 'board.md');
  if (!fs.existsSync(f)) return [];
  return fs.readFileSync(f, 'utf8').split('\n')
    .filter(l => l.startsWith('| ') && !l.startsWith('| Screen ') && !l.startsWith('|---'))
    .map(l => l.slice(1, -1).split(' | ').map(x => x.trim()))
    .filter(c => c[5] === 'build').map(c => ({ screen: c[0], route: c[1].replace(/`/g, '') }));
}

function writeCoverage() {
  const lines = [`# Recording coverage (${new Date().toISOString().slice(0, 10)})`, '',
    `Mode: ${[o.plan && 'plan', o.crawl && 'crawl'].filter(Boolean).join(' + ') || 'manual'}; read-only guard: ${guard ? 'on' : 'off'}. Names only, no data.`, '',
    `## Pages visited (${cov.pages.length})`, ...cov.pages.map(p => `- ${p}`), '',
    '## Actions recorded, by page pattern', ...[...cov.recorded].map(([p, s]) => `- \`${p}\`: ${[...s].sort().join(', ')}`), ''];
  if (recordOnly) {
    lines.push(`## Actions passed, not saved (--record-actions: ${recordOnly.size} allowed)`,
      ...[...cov.passed.keys()].sort().map(a => `- ${a}`), '');
    const never = [...recordOnly].filter(a => ![...cov.recorded.values()].some(s => s.has(a)));
    if (never.length) lines.push('## Allowed actions never called', ...never.sort().map(a => `- ${a}`), '');
  }
  if (cov.blocked.size) lines.push('## Actions blocked by the read-only guard', '(add a name to --allow-actions only if the user confirms it does not write)',
    ...[...cov.blocked].map(([a, s]) => `- ${a} (from ${[...s].join(', ')})`), '');
  const missing = boardScreens().filter(s => !cov.paths.has(s.route.split('?')[0].toLowerCase()));
  if (missing.length) lines.push('## Build screens never reached', '(add them to the capture plan with test parameters, or reach them by plan steps)',
    ...missing.map(s => `- ${s.screen} \`${s.route}\``), '');
  if (cov.errors.length) lines.push('## Problems', ...cov.errors.map(e => `- ${e}`), '');
  const f = o.coverage || path.join(o['board-dir'] || 'migration', 'recording-coverage.md');
  fs.mkdirSync(path.dirname(path.resolve(f)), { recursive: true });
  fs.writeFileSync(f, lines.join('\n'));
  return f;
}

(async () => {
  const dir = path.dirname(path.resolve(o.out));
  fs.mkdirSync(dir, { recursive: true });
  const gi = path.join(dir, '.gitignore');
  if (!fs.existsSync(gi)) fs.writeFileSync(gi, '*\n');   // the raw folder ignores itself in git
  const [w, h] = String(o.viewport || '390x844').split('x').map(Number);
  const browser = await pw.chromium.launch({ headless: auto ? !o.headed : false });
  const context = await browser.newContext({
    viewport: { width: w, height: h },
    // the app's service worker would take over its requests after a few pages: routing (guard) and HAR recording
    // would no longer see them (same setting as batch_capture.cjs)
    serviceWorkers: 'block',
    storageState: o.storage && fs.existsSync(o.storage) ? o.storage : undefined,
    recordHar: { path: o.out, content: 'embed', urlFilter: HAR_FILTER },
  });
  const page = await context.newPage();
  if (PROFILE) console.log(`site profile: ${PROFILE.name}; automatic sign-in and PIN unlock on (${SECRETS._source})`);
  page.on('framenavigated', fr => {   // pages reached by clicks count as visited too
    if (fr === page.mainFrame()) { try { cov.paths.add(new URL(fr.url()).pathname.toLowerCase()); } catch { /* about:blank */ } }
  });
  await context.route('**/screenservices/**', route => {
    const req = route.request(), name = actionOf(req.url());
    if (authing) { authActions.add(name); return route.continue(); }
    let pat;
    try { pat = patternOf(req.frame().url()); } catch { pat = patternOf(o.base); }
    if (guard && req.method() === 'POST' && !isRead(name) && !allowNames.has(name)) {
      bump(cov.blocked, name, pat);
      return route.abort('blockedbyclient');
    }
    if (recordOnly && !recordOnly.has(name)) bump(cov.passed, name, pat);   // ran, not saved in the HAR
    else bump(cov.recorded, pat, name);
    return route.continue();
  });

  let fatal = null;
  try {
    if (!auto) {
      await page.goto(o.base);
      const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
      await new Promise(r => rl.question('Browse the screens and states you need, then press Enter to save the HAR... ', r));
      rl.close();
    } else {
      if (PROFILE) {   // TST sends a fresh tab to the PIN lock 16-20 s after the load: wait for it once and unlock; the tab then
        // stays unlocked across page loads (sessionStorage), so later pages are not locked in the middle of a recording
        await page.goto(o.base, { waitUntil: 'domcontentloaded', timeout: 45000 });
        const end = Date.now() + Number(o['lock-wait'] || 35000);
        while (Date.now() < end && (await auth.whereNow(page, PROFILE)) === 'app') await sleep(500);
        await signInIfNeeded(page, o.base);
        console.log(`unlocked before recording: ${(await auth.whereNow(page, PROFILE)) === 'app'}`);
      }
      const starts = o.plan ? await runPlan(page) : [];
      if (o.crawl) await runCrawl(page, starts);
    }
  } catch (e) { fatal = e; }
  await context.close();   // the HAR is written on close
  if (authWindows.length) fs.writeFileSync(o.out + '.auth.json', JSON.stringify({ windows: authWindows, actions: [...authActions].sort(),
    why: 'calls started inside these windows were made by the automatic sign-in / PIN unlock: not fixtures' }, null, 1));
  await browser.close();
  const covFile = writeCoverage();
  if (fatal) { console.error(fatal.message); console.error(`partial HAR kept: ${o.out}`); process.exit(1); }
  console.log(`saved ${o.out} (RAW: do not commit; run har_to_fixtures.py convert next)\ncoverage: ${covFile} ` +
    `(${cov.pages.length} page(s), ${[...cov.blocked.keys()].length} action(s) blocked)`);
})().catch(e => { console.error(e); process.exit(1); });
