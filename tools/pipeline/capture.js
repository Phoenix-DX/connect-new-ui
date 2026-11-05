/*
 * capture.js — in-page capture for OutSystems 11 Reactive / Mobile (PWA) screens.
 *
 * Inject once into the page (browser MCP "evaluate" tool, or DevTools console).
 * It installs window.__osCapture with:
 *
 *   __osCapture.startRuntime()          patch fetch + XHR, record screenservices calls as SHAPES
 *   __osCapture.stopRuntime()           restore, return { calls, otherRequests, environment }  (small)
 *   await __osCapture.snapshotUI(opts)  sanitized DOM + block JS + CSS + assets, downloaded as JSON;
 *                                       returns a short summary only
 *   __osCapture.mark(label)             mark the start of an interaction phase (batch_capture calls it before each
 *                                       plan step), so calls can be compared per phase (call parity)
 *   __osCapture.chunk(i, size)          read the last snapshot JSON in slices (fallback when downloads
 *                                       cannot be retrieved by the agent)
 *
 * snapshotUI options:
 *   label           string, used in the file name (default "default")
 *   includeSources  include block .mvc.js / module controller / model sources (default true)
 *   includeCss      include stylesheet sources (default true)
 *   includeAssets   include fonts/images referenced by CSS and DOM, base64 (default true)
 *   download        trigger a file download (default true)
 *   keepText        extra static strings that must never be masked
 *
 * Security inventory: header NAMES of service calls, cookie names visible to JS, storage keys with a
 * category (token, auth config, lock, identity, permissions...), document security headers and
 * third-party hosts. Never values.
 *
 * Privacy: request/response bodies are reduced to shapes (field names + types). Text in the DOM is
 * kept only if every word appears in the app's own JS (static labels); everything else is masked
 * with "•". Cross-origin images (user photos, signed URLs) are dropped. Digit runs in links are
 * zeroed. Nothing leaves the browser except through the download / returned values.
 */
(() => {
  if (window.__osCapture) return 'already-installed';

  const app = location.pathname.split('/')[1];
  const origin = location.origin;
  const screenName = () => location.pathname.split('/').filter(Boolean).pop() || 'Screen';

  /* ---------------- shapes ---------------- */
  const KEEP_KEYS = new Set(['viewName', 'moduleVersion', 'apiVersion', 'hasModuleVersionChanged', 'hasApiVersionChanged']);
  const shape = (v, key) =>
    KEEP_KEYS.has(key) ? v
    : Array.isArray(v) ? (v.length ? [shape(v[0])] : ['(empty array)'])
    : v === null ? 'null'
    : typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, shape(x, k)]))
    : v === '' ? 'string (EMPTY)'
    : v === 0 ? 'number (0)'
    : typeof v === 'string' && /^1900-01-01/.test(v) ? 'date (1900 default)'
    : typeof v === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(v) ? 'datetime string'
    : typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) ? 'date string'
    : typeof v === 'string' && /^-?\d+$/.test(v) ? 'numeric string'
    : typeof v === 'string' && /^-?\d+\.\d+$/.test(v) ? 'decimal string'
    : typeof v;
  const toShape = t => { try { return shape(JSON.parse(t)); } catch { return t ? '(non-JSON, omitted)' : '(empty)'; } };
  const redact = s => String(s)
    .replace(/[\w.+-]+@[\w.-]+/g, '<email>')
    .replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, '<guid>')
    .replace(/\d{5,}/g, '<number>');
  const pathOnly = u => { try { const x = new URL(u, location.href); return x.origin === origin ? x.pathname : x.origin + x.pathname; } catch { return '(bad url)'; } };

  /* ---------------- runtime capture ---------------- */
  const R = { on: false, t0: 0, calls: [], marks: [], other: new Map(), orig: null, observer: null };
  const since = () => Math.round(performance.now() - R.t0);
  function mark(label) { if (R.on) R.marks.push({ label: String(label), t: since() }); return R.marks.length; }
  const isService = url => /\/screenservices\/|\/rest\//.test(url);
  const record = (url, reqBody, resText, status, reqHeaders = [], resHeaders = [], ts = null) => {
    const path = pathOnly(url);
    R.calls.push({
      order: R.calls.length + 1, t: Math.round(performance.now() - R.t0), ts,   // ts = request start (ms since startRuntime)
      action: path.split('/').pop(), path, status,
      requestHeaders: [...new Set(reqHeaders.map(h => h.toLowerCase()))].sort(),   // names only, never values
      responseHeaders: [...new Set(resHeaders.map(h => h.toLowerCase()))].sort(),
      request: toShape(reqBody), response: toShape(resText),
    });
  };
  const headerNames = h => {
    try {
      if (!h) return [];
      if (typeof h.keys === 'function' && typeof h.get === 'function') return [...h.keys()];
      if (Array.isArray(h)) return h.map(x => x[0]);
      return Object.keys(h);
    } catch { return []; }
  };

  function startRuntime() {
    if (R.on) return 'runtime-already-started';
    R.on = true; R.t0 = performance.now(); R.calls = []; R.marks = []; R.other = new Map();
    const of = window.fetch, XO = XMLHttpRequest.prototype.open, XS = XMLHttpRequest.prototype.send, XH = XMLHttpRequest.prototype.setRequestHeader;
    R.orig = { of, XO, XS, XH };
    XMLHttpRequest.prototype.setRequestHeader = function (name) { (this.__h = this.__h || []).push(String(name)); return XH.apply(this, arguments); };

    window.fetch = async function (input, init) {
      const url = typeof input === 'string' ? input : (input && input.url) || String(input);
      let body = '', reqH = [];
      const ts = since();
      if (isService(url)) {
        try { body = typeof (init && init.body) === 'string' ? init.body : (typeof Request !== 'undefined' && input instanceof Request) ? await input.clone().text() : ''; } catch {}
        reqH = [...headerNames(init && init.headers), ...((typeof Request !== 'undefined' && input instanceof Request) ? headerNames(input.headers) : [])];
      }
      const res = await of.apply(this, arguments);
      if (isService(url)) res.clone().text().then(t => record(url, body, t, res.status, reqH, headerNames(res.headers), ts)).catch(() => {});
      return res;
    };
    XMLHttpRequest.prototype.open = function (m, url) { this.__u = String(url); return XO.apply(this, arguments); };
    XMLHttpRequest.prototype.send = function (body) {
      if (isService(this.__u || '')) {
        const ts = since();
        this.addEventListener('load', () => {
          try {
            const text = (this.responseType === '' || this.responseType === 'text') ? this.responseText : JSON.stringify(this.response);
            const resH = (this.getAllResponseHeaders() || '').split(/\r?\n/).map(l => l.split(':')[0]).filter(Boolean);
            record(this.__u, typeof body === 'string' ? body : '', text, this.status, this.__h || [], resH, ts);
          } catch {}
        });
      }
      return XS.apply(this, arguments);
    };
    try {
      R.observer = new PerformanceObserver(list => {
        for (const e of list.getEntries()) {
          const p = pathOnly(e.name);
          if (isService(e.name)) continue;
          const k = `${e.initiatorType} ${p}`;
          R.other.set(k, (R.other.get(k) || 0) + 1);
        }
      });
      R.observer.observe({ type: 'resource', buffered: false });
    } catch {}
    return 'runtime-capture-started';
  }

  /* ---------------- security inventory (names and categories only, never values) ---------------- */
  const CATEGORIES = [
    ['token/secret', /(token|jwt|bearer|secret|password(?!reset)|passwd|apikey|api_key|connectionstring|sas$|signature|credential|refresh|session_?key|localstoragekey)/i],
    ['auth config', /(b2c|oauth|oidc|idp|authorize|authority|clientid|client_id|tenant|frontegg|login|logout|signup|resetpass|passwordreset|totp|mfa|sso)/i],
    ['lock / re-auth', /((^|[_$])pin([_$]|$)|fingerprint|biometric|faceid|touchid|inactivity|lock)/i],
    ['identity / personal', /(user(name|id|extended|externalid)?$|member|contact|email|phone|birth|address|externalid|session_user_id|deviceinfo_uuid|^uuid$)/i],
    ['permissions / entitlements', /(role|permission|license|entitle|subscription|grant|scope)/i],
    ['feature flags', /(darkly|^ld:|feature|flag|toggle|isenabled|_use$|enabled$)/i],
    ['telemetry', /(insights|tracing|^ai_|log|diagnostic|analytics|crash)/i],
    ['device / app info', /(deviceinfo|platform|browser|version|build|package|environment|applicationinfo|espace)/i],
    ['third-party sdk', /(firebase|onesignal|streamline|sentry)/i],
  ];
  // "$OS_Users$Module$ClientVars$Name" → "Name": classify on the variable name, not the OutSystems prefix
  const coreName = k => k.replace(/^\$OS_[^$]*\$(?:[^$]*\$ClientVars\$+)?/, '');
  const classify = k => (CATEGORIES.find(([, re]) => re.test(coreName(k))) || ['other'])[0];
  async function securityInventory() {
    const cookies = document.cookie ? document.cookie.split(';').map(c => redact(c.split('=')[0].trim())).filter(Boolean) : [];
    const storage = store => Object.keys(store).map(k => ({ key: redact(k), category: classify(k) }));
    const docHeaders = {};
    try {
      const r = await fetch(location.href, { method: 'HEAD', credentials: 'include', cache: 'no-store' });
      for (const h of ['content-security-policy', 'content-security-policy-report-only', 'strict-transport-security', 'x-frame-options',
                       'x-content-type-options', 'referrer-policy', 'permissions-policy', 'cross-origin-opener-policy', 'cross-origin-resource-policy', 'cache-control']) {
        const v = r.headers.get(h); if (v) docHeaders[h] = v.slice(0, 600);
      }
    } catch {}
    const hosts = new Set();
    try { performance.getEntriesByType('resource').forEach(e => { const u = new URL(e.name); if (u.origin !== origin) hosts.add(u.host); }); } catch {}
    return {
      isSecureContext: window.isSecureContext,
      cookieNamesVisibleToJS: cookies,   // HttpOnly cookies are invisible here by design: check them in DevTools > Application > Cookies
      localStorage: storage(localStorage), sessionStorage: storage(sessionStorage),
      documentSecurityHeaders: docHeaders,
      thirdPartyHosts: [...hosts].sort(),
    };
  }

  async function environment() {
    let serviceWorkers = [], idb = [];
    try { serviceWorkers = (await navigator.serviceWorker?.getRegistrations() ?? []).map(r => ({ scope: pathOnly(r.scope), script: r.active ? pathOnly(r.active.scriptURL) : null })); } catch {}
    try { idb = (await indexedDB.databases()).map(d => redact(d.name || '')); } catch {}
    return {
      path: location.pathname, collectedAt: new Date().toISOString(), userAgent: navigator.userAgent,
      viewport: { width: innerWidth, height: innerHeight, dpr: devicePixelRatio },
      htmlClass: document.documentElement.className, bodyClass: document.body.className,
      htmlStyle: document.documentElement.getAttribute('style') || '', bodyStyle: document.body.getAttribute('style') || '',
      title: document.title,
      manifestLink: document.querySelector('link[rel="manifest"]') ? pathOnly(document.querySelector('link[rel="manifest"]').href) : null,
      serviceWorkers, indexedDBNames: idb,
      localStorageKeys: Object.keys(localStorage).map(redact),
      sessionStorageKeys: Object.keys(sessionStorage).map(redact),
      security: await securityInventory(),
    };
  }

  async function stopRuntime() {
    if (R.orig) {
      window.fetch = R.orig.of;
      XMLHttpRequest.prototype.open = R.orig.XO;
      XMLHttpRequest.prototype.send = R.orig.XS;
      XMLHttpRequest.prototype.setRequestHeader = R.orig.XH;
    }
    try { R.observer && R.observer.disconnect(); } catch {}
    R.on = false;
    await new Promise(r => setTimeout(r, 300)); // let pending clones resolve
    return {
      kind: 'runtime', screen: screenName(), path: location.pathname,
      calls: R.calls, marks: R.marks,
      otherRequests: [...R.other.entries()].map(([k, n]) => ({ request: k, count: n })),
      environment: await environment(),
    };
  }

  /* ---------------- UI snapshot ---------------- */
  let LAST = null;

  async function snapshotUI(opts = {}) {
    const o = Object.assign({ label: 'default', includeSources: true, includeCss: true, includeAssets: true, download: true, keepText: [], meta: null }, opts);
    const SCREEN = screenName();
    const report = { maskedTexts: 0, keptTexts: 0, removedUserImages: 0, failed: [] };
    // Freeze the page first: a transient screen (splash, toast, a page about to redirect) can be gone by the time the
    // sources below are fetched, so the DOM, image sizes, block list, stylesheets and environment are read right now.
    const frozenBody = document.body.cloneNode(true);
    const frozenImgSizes = [...document.body.querySelectorAll('img')].map(i => `${i.clientWidth}x${i.clientHeight}`);
    const frozenBlocks = [...new Set([...document.querySelectorAll('[data-block]')].map(e => e.getAttribute('data-block')))];
    const frozenCssLinks = [...document.querySelectorAll('link[rel="stylesheet"]')].map(l => l.href);
    const frozenInlineCss = [...document.querySelectorAll('style')].map(st => st.textContent);
    const frozenEnv = environment();
    const getText = async u => {
      try { const r = await fetch(u, { credentials: 'include' }); if (!r.ok) throw new Error('HTTP ' + r.status); return await r.text(); }
      catch (e) { report.failed.push(pathOnly(u) + ' (' + e.message + ')'); return null; }
    };
    const getDataUrl = async u => {
      try {
        const r = await fetch(u, { credentials: 'include' }); if (!r.ok) throw new Error('HTTP ' + r.status);
        const b = await r.blob();
        if (b.size > 1500000) return { skipped: true, size: b.size, type: b.type };
        const dataUrl = await new Promise(res => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.readAsDataURL(b); });
        return { dataUrl, size: b.size, type: b.type };
      } catch (e) { report.failed.push(pathOnly(u) + ' (' + e.message + ')'); return null; }
    };
    const isSameOrigin = u => { try { return new URL(u, location.href).origin === origin; } catch { return false; } };

    // 1. manifest of every resource the app can load
    let manifestUrls = [];
    try {
      const info = await (await fetch(`/${app}/moduleservices/moduleinfo`, { credentials: 'include' })).json();
      manifestUrls = Object.entries(info.manifest?.urlVersions ?? {}).map(([u, v]) => new URL(u + (v || ''), origin).href);
    } catch (e) { report.failed.push('moduleinfo (' + e.message + ')'); }
    const findScripts = suffix => manifestUrls.filter(u => new URL(u).pathname.endsWith(suffix));

    // 2. blocks on the page and their sources (also used as the "static text" corpus)
    const blockNames = frozenBlocks;
    const jsUrls = new Set();
    findScripts(`.${SCREEN}.mvc.js`).forEach(u => jsUrls.add(u));
    for (const b of blockNames) findScripts(`.${b}.mvc.js`).forEach(u => jsUrls.add(u));
    const modules = new Set([...jsUrls].map(u => new URL(u).pathname.split('/').pop().split('.')[0]));
    for (const m of modules) {
      for (const suf of ['controller.js', 'model.js', 'languageResources.js']) findScripts(`/${m}.${suf}`).forEach(u => jsUrls.add(u));
    }
    const js = {};
    for (const u of jsUrls) { const t = await getText(u); if (t != null) js[new URL(u).pathname.split('/').pop()] = t; }
    const corpus = Object.values(js).join('\n');

    // 3. stylesheets
    const css = {}, cssAssetUrls = new Set();
    const urlRe = /url\(\s*(['"]?)([^'")]+)\1\s*\)/g;
    if (o.includeCss || o.includeAssets) {
      for (const href of frozenCssLinks) {
        const t = await getText(href);
        if (t == null) continue;
        css[new URL(href).pathname] = t;
        for (const m of t.matchAll(urlRe)) {
          if (m[2].startsWith('data:')) continue;
          const a = new URL(m[2], href).href;
          if (isSameOrigin(a)) cssAssetUrls.add(a);
        }
      }
      frozenInlineCss.forEach((t, i) => { css[`inline-style-${i}`] = t; });
    }

    // 4. sanitized DOM
    const words = s => s.split(/[^\p{L}\p{N}']+/u).filter(w => w.length > 1);
    const isStatic = text => {
      const t = text.trim();
      if (!t || o.keepText.includes(t)) return true;
      if (!/[\p{L}\p{N}]/u.test(t)) return true;
      if (/\d{3,}/.test(t)) return false;
      const ws = words(t);
      return ws.length > 0 && ws.every(w => corpus.includes(w));
    };
    const mask = s => s.replace(/[^\s]/g, '•');
    const KEEP_ATTR = /^(class|style|role|id|type|tabindex|aria-(?!label)[\w-]+|data-[\w-]+|width|height|rows|maxlength|disabled|hidden|dir|lang|viewbox|d|fill|stroke|stroke-width|points|cx|cy|r|x|y|rx|ry|transform|xmlns|offset|stop-color)$/i;
    const TEXT_ATTR = /^(alt|title|placeholder|aria-label)$/i;
    const domAssetUrls = new Set();

    const clone = frozenBody;
    [...clone.querySelectorAll('img')].forEach((img, i) => {
      if (frozenImgSizes[i]) img.setAttribute('data-rendered-size', frozenImgSizes[i]);
    });
    clone.querySelectorAll('script, noscript, iframe, template').forEach(n => n.remove());
    clone.querySelectorAll('[id^="__ejoy"], [class*="ejoy"]').forEach(n => n.remove()); // common translation extension

    const walk = node => {
      if (node.nodeType === Node.TEXT_NODE) {
        if (isStatic(node.nodeValue)) { if (node.nodeValue.trim()) report.keptTexts++; }
        else { node.nodeValue = mask(node.nodeValue); report.maskedTexts++; }
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      for (const attr of [...node.attributes]) {
        const n = attr.name;
        if (n === 'src' || n === 'href' || n === 'srcset' || n === 'xlink:href') {
          let a = null; try { a = new URL(attr.value, location.href).href; } catch {}
          if (n === 'href' && node.tagName !== 'use' && node.tagName !== 'LINK') {
            node.setAttribute('data-original-href', attr.value === '' || attr.value === '#' ? attr.value : (a ? pathOnly(a).replace(/\d+/g, '0') : ''));
            node.removeAttribute('href');
          } else if (a && a.startsWith('data:image/svg')) {
            // inline icon: keep
          } else if (a && isSameOrigin(a) && !/screenservices|[?&](token|sig|signature)=/i.test(a)) {
            domAssetUrls.add(a); node.setAttribute(n, new URL(a).pathname);
          } else {
            node.setAttribute(n, ''); node.setAttribute('data-masked-src', 'user-image'); report.removedUserImages++;
          }
          continue;
        }
        if (TEXT_ATTR.test(n)) { if (!isStatic(attr.value)) { node.setAttribute(n, mask(attr.value)); report.maskedTexts++; } continue; }
        if (n === 'value') { node.removeAttribute(n); continue; }
        if (!KEEP_ATTR.test(n)) node.removeAttribute(n);
      }
      node.childNodes.forEach(walk);
    };
    walk(clone);

    // 5. assets referenced by CSS and DOM (same origin only)
    const assets = {};
    if (o.includeAssets) {
      for (const u of new Set([...cssAssetUrls, ...domAssetUrls])) {
        const a = await getDataUrl(u);
        if (a) assets[new URL(u).pathname] = a;
      }
    }

    const out = {
      kind: 'ui', label: o.label, screen: SCREEN,
      meta: o.meta,   // how this state was reached (batch_capture): viewport, flags variant, steps, mock scenario
      env: await frozenEnv,
      blocks: { onPage: blockNames, sources: o.includeSources ? js : {} },
      dom: clone.outerHTML,
      css: o.includeCss ? css : {},
      assets, report,
    };
    const text = JSON.stringify(out);
    LAST = text;
    const file = `capture-${SCREEN}-${o.label}.json`;
    if (o.download) {
      const link = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([text], { type: 'application/json' })), download: file });
      document.body.appendChild(link); link.click(); link.remove();
    }
    return {
      file, bytes: text.length, chunks200k: Math.ceil(text.length / 200000),
      blocksOnPage: blockNames.length, jsFiles: Object.keys(out.blocks.sources).length,
      cssFiles: Object.keys(out.css).length, assets: Object.keys(assets).length, report,
    };
  }

  const chunk = (i, size = 200000) => (LAST ? LAST.slice(i * size, (i + 1) * size) : null);

  window.__osCapture = { startRuntime, stopRuntime, snapshotUI, mark, chunk, version: 3 };
  return 'installed';
})();
