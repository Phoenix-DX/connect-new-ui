/*
 * site_auth.cjs: automatic sign-in for the app being migrated, driven by a SITE PROFILE (no secrets) and a
 * local SECRETS file (never in the skill, never in git). Used by batch_capture.cjs (login --auto, run) and
 * record_har.cjs, so every capture and recording session signs in and unlocks by itself.
 *
 * Profile (JSON, see assets/site-profiles/): resolved as --profile <file>, else migration/site.json, else the skill's
 * assets/site-profiles/default.json.
 *   { "name", "base": "https://<host>/<App>/", "home": "/<App>/<Home>",
 *     "login": { "url": "/<App>/Login", "match": "<regex on the app URL of the login page>",
 *                "start": { "click": "<selector of the button that opens the identity provider>" },
 *                "idp": "<regex on the identity provider URL>",
 *                "transit": "<regex on an app URL that only forwards after sign-in (OAuth callback); waited out, never 'app'>",
 *                "user": ["<selectors>"], "password": ["<selectors>"], "next": ["<selectors>"], "submit": ["<selectors>"] },
 *     "pin": { "match": "<regex on the PIN page URL>", "input": ["<selectors>"], "submit": ["<selectors>"],
 *              "overlay": "<selector of a PIN lock shown in place over a screen (same URL)>",
 *              "overlayIgnore": "<regex on URLs of PIN screens whose own content matches the overlay selector>",
 *              "register": { "match": "<regex on the first-sign-in PIN register page>", "times": <entries, e.g. 2 = enter + confirm> } },
 *     "secrets": { "user": "UBT_USER", "password": "UBT_PASSWORD", "pin": "UBT_PIN" } }   (env variable names)
 *
 * Secrets: environment variables named in profile.secrets, else --credentials <file>, else .auth/credentials.json:
 *   { "user": "...", "password": "...", "pin": "..." }
 * Rules: test environment and test account only; the values are typed by this script and never printed, logged,
 * written to captures, or read by an agent. The file must not be tracked by git (checked).
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const SKILL = path.resolve(__dirname, '..');

function resolveProfile(o = {}) {
  const cands = [o.profile, 'migration/site.json', path.join(SKILL, 'assets', 'site-profiles', 'default.json')].filter(Boolean);
  for (const p of cands) if (fs.existsSync(p)) {
    const prof = JSON.parse(fs.readFileSync(p, 'utf8'));
    prof._file = p;
    return prof;
  }
  return null;
}

function loadSecrets(profile, o = {}) {
  const names = (profile && profile.secrets) || {};
  const env = { user: process.env[names.user || 'OS_USER'], password: process.env[names.password || 'OS_PASSWORD'], pin: process.env[names.pin || 'OS_PIN'] };
  if (env.user || env.pin) return { ...env, _source: 'environment' };
  const file = o.credentials || '.auth/credentials.json';
  if (!fs.existsSync(file)) return null;
  const tracked = spawnSync('git', ['ls-files', '--error-unmatch', file], { encoding: 'utf8' });
  if (tracked.status === 0) throw new Error(`${file} is tracked by git: remove it from the repository (git rm --cached) before using it`);
  const s = JSON.parse(fs.readFileSync(file, 'utf8'));
  return { user: s.user, password: s.password, pin: s.pin != null ? String(s.pin) : undefined, _source: file };
}

const re = x => (x ? new RegExp(x, 'i') : null);
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function firstVisible(page, selectors, timeout = 15000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) {
    for (const sel of selectors || []) {
      const loc = page.locator(sel).first();
      try { if (await loc.isVisible()) return loc; } catch { /* detached while navigating */ }
    }
    await sleep(250);
  }
  return null;
}

function where(page, profile) {
  const u = page.url();
  if (profile.login && re(profile.login.idp) && re(profile.login.idp).test(u)) return 'idp';
  if (profile.login && re(profile.login.transit) && re(profile.login.transit).test(u)) return 'transit';
  if (profile.pin && profile.pin.register && re(profile.pin.register.match) && re(profile.pin.register.match).test(u)) return 'register';
  if (profile.pin && re(profile.pin.match) && re(profile.pin.match).test(u)) return 'pin';
  if (profile.login && re(profile.login.match) && re(profile.login.match).test(u)) return 'login';
  return 'app';
}

/* where(), plus a PIN lock shown in place over an app screen (the URL does not change) */
async function whereNow(page, profile) {
  const w = where(page, profile);
  if (w !== 'app' || !profile.pin || !profile.pin.overlay) return w;
  if (profile.pin.overlayIgnore && re(profile.pin.overlayIgnore).test(page.url())) return w;   // e.g. PINChange's own keypad
  const locked = await page.locator(profile.pin.overlay).first().isVisible().catch(() => false);
  return locked ? 'pin' : 'app';
}

async function signInAtIdp(page, profile, secrets, log) {
  const L = profile.login;
  if (!secrets || !secrets.user || !secrets.password) throw new Error('sign-in needs user and password in the secrets (see site_auth.cjs header)');
  const user = await firstVisible(page, L.user, 30000);
  if (!user) throw new Error('identity provider page: user field not found (adjust login.user selectors in the profile)');
  await user.fill(secrets.user);
  let pwd = await firstVisible(page, L.password, 1500);
  if (!pwd) {   // two-step page: user first, then "Next"
    const next = await firstVisible(page, L.next, 3000);
    if (next) await next.click();
    pwd = await firstVisible(page, L.password, 15000);
  }
  if (!pwd) throw new Error('identity provider page: password field not found (adjust login.password selectors)');
  await pwd.fill(secrets.password);
  const submit = await firstVisible(page, L.submit, 5000);
  if (submit) await submit.click(); else await pwd.press('Enter');
  log('signed in at the identity provider');
  const appOrigin = new URL(profile.base).origin;
  await page.waitForURL(u => u.origin === appOrigin, { timeout: 60000 }).catch(async () => {
    const err = await page.locator('.error:visible, [role=alert]:visible, .pageLevel:visible').first().textContent({ timeout: 1000 }).catch(() => '');
    throw new Error(`did not return to the app after sign-in${err ? ': identity provider says "' + err.trim().slice(0, 120) + '"' : ' (MFA, captcha or wrong account?)'}`);
  });
}

async function pinFields(page, P, onlyEmpty) {
  const fields = [];
  for (const sel of P.input || []) {
    for (const loc of await page.locator(sel).all()) {
      if (!(await loc.isVisible().catch(() => false))) continue;
      if (onlyEmpty && (await loc.inputValue().catch(() => '')) !== '') continue;
      fields.push(loc);
    }
    if (fields.length) break;
  }
  return fields;
}

/* Type the PIN once into the visible boxes, field or keypad; onlyEmpty skips boxes already filled (confirm row). */
async function typePin(page, P, pin, onlyEmpty = false) {
  const fields = await pinFields(page, P, onlyEmpty);
  if (fields.length >= pin.length) {                       // one box per digit (auto-advance or not)
    for (let i = 0; i < pin.length; i++) { await fields[i].click(); await fields[i].fill(''); await page.keyboard.type(pin[i], { delay: 60 }); }
  } else if (fields.length >= 1) {                          // one field for the whole PIN
    await fields[0].click(); await fields[0].fill(''); await page.keyboard.type(pin, { delay: 60 });
  } else {                                                  // on-screen keypad
    for (const d of pin) {
      const key = await firstVisible(page, [`button:text-is("${d}")`, `[role=button]:text-is("${d}")`, `a:text-is("${d}")`, `div:text-is("${d}")`, `span:text-is("${d}")`], 5000);
      if (!key) throw new Error(`PIN keypad: no visible key "${d}" (set pin.input or pin.keys selectors in the profile)`);
      await key.click(); await sleep(120);
      await traceState(page, `keypad press #${++traceKey}`, false);
    }
  }
  const submit = await firstVisible(page, P.submit, 1500);
  if (submit) await submit.click();
}

async function unlockPin(page, profile, secrets, log) {
  const P = profile.pin || {};
  if (!secrets || !secrets.pin) throw new Error('PIN page reached but no pin in the secrets');
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await sleep(500);
  if ((await whereNow(page, profile)) !== 'pin') return;   // the app moved on (e.g. to PIN register) before the PIN was typed
  const inPlace = where(page, profile) === 'app';             // lock shown over the screen, same URL
  await typePin(page, P, String(secrets.pin));
  const end = Date.now() + 30000;
  while (Date.now() < end && (await whereNow(page, profile)) === 'pin') await sleep(300);
  if ((await whereNow(page, profile)) === 'pin') throw new Error('still locked after entering the PIN (wrong PIN, or adjust pin selectors)');
  log(`PIN entered${inPlace ? ' (lock over the screen)' : ''}; now at ${new URL(page.url()).pathname}`);
}

/* First sign-in in a fresh browser: the app asks for a new PIN, entered pin.register.times times (enter, confirm). */
/* OS_AUTH_TRACE=<dir>: page structure (no values), app paths and service call names while signing in; screenshots only
   before anything is typed. Never secrets, never identity provider URLs beyond their origin. */
const TRACE = process.env.OS_AUTH_TRACE || '';
let traceN = 0, traceKey = 0;
function trace(m) {
  if (!TRACE) return;
  fs.mkdirSync(TRACE, { recursive: true });
  fs.appendFileSync(path.join(TRACE, 'auth-trace.log'), `${new Date().toISOString()} ${m}\n`);
  console.log(`  [trace] ${m}`);
}
async function traceState(page, label, shot) {
  if (!TRACE) return;
  const d = await page.evaluate(() => {
    const vis = e => !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    const inputs = [...document.querySelectorAll('input')].filter(vis).map(i =>
      `${i.type}${i.id ? '#' + i.id : ''}${i.name ? '[name=' + i.name + ']' : ''}${i.maxLength > 0 ? '[max=' + i.maxLength + ']' : ''}${i.inputMode ? '[im=' + i.inputMode + ']' : ''}${i.value ? ' filled' : ' empty'}${document.activeElement === i ? ' focus' : ''}`);
    const buttons = [...document.querySelectorAll('button, [role=button], a.btn, .btn')].filter(vis).map(b => (b.innerText || b.getAttribute('aria-label') || '').trim().slice(0, 40)).filter(Boolean);
    const texts = [...document.querySelectorAll('h1,h2,h3,.title,.heading,[class*=title],[class*=error],[class*=feedback]')].filter(vis).map(t => t.innerText.trim().slice(0, 80)).filter(Boolean);
    const dots = `${document.querySelectorAll('.ubt-pincode .selected-icon').length}/${document.querySelectorAll('.ubt-pincode .selected-icon, .ubt-pincode .empty-icon').length}`;
    return { dots, inputs, buttons: [...new Set(buttons)].slice(0, 15), texts: [...new Set(texts)].slice(0, 10) };
  }).catch(e => ({ error: String(e).slice(0, 120) }));
  trace(`${label} @ ${new URL(page.url()).pathname} ${JSON.stringify(d)}`);
  if (shot) await page.screenshot({ path: path.join(TRACE, `auth-${String(++traceN).padStart(2, '0')}.png`) }).catch(() => {});
}
function traceAttach(page, profile) {
  if (!TRACE) return;
  const app = new URL(profile.base).origin;
  page.on('framenavigated', f => {
    if (f !== page.mainFrame()) return;
    const u = new URL(f.url());
    trace(`nav ${u.origin === app ? u.pathname : u.origin}`);
  });
  page.on('response', r => {
    const u = new URL(r.url());
    if (u.origin === app && /\/(screenservices|moduleservices)\//.test(u.pathname)) trace(`call ${r.status()} ${u.pathname}`);
  });
}

async function registerPin(page, profile, secrets, log) {
  const P = profile.pin || {};
  const R = P.register || {};
  if (!secrets || !secrets.pin) throw new Error('PIN register page reached but no pin in the secrets');
  const pin = String(secrets.pin);
  const regRe = re(R.match);
  await traceState(page, 'register: arrived', true);
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await sleep(500);
  const times = R.times || 1;
  for (let k = 0; k < times; k++) {
    if (k > 0) {   // wait for the confirm step (empty boxes, or keypad keys enabled again), or the app already moved on
      const keypad = !(await pinFields(page, P, false)).length;
      const key = page.locator('button:text-is("0"), [role=button]:text-is("0")').first();
      const ready = async () => (keypad ? await key.isEnabled().catch(() => false) : (await pinFields(page, P, true)).length > 0);
      const end = Date.now() + 10000;
      while (Date.now() < end && regRe.test(page.url()) && !(await ready())) await sleep(250);
      if (!regRe.test(page.url())) break;
      await sleep(300);
    }
    await traceState(page, `register entry ${k + 1}: before`, true);
    await typePin(page, P, pin, k > 0);
    await traceState(page, `register entry ${k + 1}: after`, true);
    log(`PIN register: entry ${k + 1}/${times} typed`);
    await sleep(800);
  }
  await page.waitForURL(u => !regRe.test(u.toString()), { timeout: 30000 }).catch(() => {
    throw new Error('still on the PIN register page after entering the PIN twice (adjust pin.input / pin.submit selectors)');
  });
  log(`PIN registered; now at ${new URL(page.url()).pathname}`);
  // On success the app resumes its last URL, which is the login page when the sign-in started there: go home instead
  // of signing in again.
  if (where(page, profile) === 'login' && profile.home) {
    await page.goto(new URL(profile.home, profile.base).toString(), { waitUntil: 'domcontentloaded', timeout: 60000 });
    await sleep(1500);
    log(`resumed at the login page after registering; opened home: now at ${new URL(page.url()).pathname}`);
  }
}

/* Bring the page from wherever the app sent it (login, identity provider, PIN) back into the app. */
async function ensureSession(page, profile, secrets, log = () => {}, opts = {}) {
  if (!profile) return false;
  let acted = false;
  for (let i = 0; i < 6; i++) {
    const w = await whereNow(page, profile);
    if (w === 'app' || (opts.stopAt && w === opts.stopAt)) return acted;   // stopAt: e.g. 'register' to capture that page
    acted = true;
    if (w === 'transit') {   // let the callback finish its own redirect instead of navigating away from it
      const tr = re(profile.login.transit);
      await page.waitForURL(u => !tr.test(u.toString()), { timeout: 60000 }).catch(() => {
        throw new Error(`still on the sign-in callback after 60s (${new URL(page.url()).pathname})`);
      });
      log(`sign-in callback done; now at ${new URL(page.url()).pathname}`);
    } else if (w === 'login') {
      const btn = await firstVisible(page, [profile.login.start.click], 30000);
      if (!btn) throw new Error(`login page: "${profile.login.start.click}" not found`);
      await Promise.all([page.waitForURL(re(profile.login.idp), { timeout: 60000 }), btn.click()]);
    } else if (w === 'idp') await signInAtIdp(page, profile, secrets, log);
    else if (w === 'pin') await unlockPin(page, profile, secrets, log);
    else if (w === 'register') await registerPin(page, profile, secrets, log);
    await page.waitForLoadState('domcontentloaded').catch(() => {});
    await sleep(800);
  }
  const last = await whereNow(page, profile);
  if (last !== 'app') throw new Error(`could not reach the app (stuck at ${last})`);
  return acted;
}

/* Fresh sign-in: open the login page, sign in, unlock, save the session for later runs. */
async function autoLogin(browser, ctxOpts, profile, secrets, storage, log = console.log) {
  const ctx = await browser.newContext({ ...ctxOpts, serviceWorkers: 'block' });
  try {
    const page = await ctx.newPage();
    traceAttach(page, profile);
    await page.goto(new URL(profile.login.url, profile.base).toString(), { waitUntil: 'domcontentloaded', timeout: 60000 });
    await sleep(1500);
    await ensureSession(page, profile, secrets, log);
    if (profile.home) {   // the PIN can also appear on the first in-app page
      await page.goto(new URL(profile.home, profile.base).toString(), { waitUntil: 'domcontentloaded', timeout: 60000 });
      await sleep(1500);
      await ensureSession(page, profile, secrets, log);
    }
    fs.mkdirSync(path.dirname(storage), { recursive: true });
    await ctx.storageState({ path: storage });
    log(`session saved to ${storage} (secret: keep out of git, delete after the campaign); now at ${new URL(page.url()).pathname}`);
  } finally { await ctx.close(); }
}

module.exports = { resolveProfile, loadSecrets, ensureSession, autoLogin, where, whereNow };
