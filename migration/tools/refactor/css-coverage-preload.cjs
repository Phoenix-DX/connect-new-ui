/*
 * CSS rule-usage tracking for parity_check.cjs runs (P8-2, again in P9-3). Preloaded with `node -r`: it wraps
 * playwright's chromium.launch so every page of every context records Chromium CSS rule usage (CDP
 * CSS.startRuleUsageTracking) from creation until the browser closes. The app page and the page that replays the
 * OutSystems capture are both tracked, so a rule used on either side counts as used. Usage is polled with
 * CSS.takeCoverageDelta because the app removes the stylesheets of the leaving screen.
 * One JSON file per run goes to $CSS_COVERAGE_DIR: { sheets: { <sourceURL>: [[start, end], ...] } } (used ranges, in
 * UTF-16 offsets of the stylesheet text). Use through migration/tools/refactor/css-coverage-node.sh and
 * `refactor_parity.py --node`. Aggregation: css-coverage.py.
 */
const Module = require('module');
const fs = require('fs');
const path = require('path');

const dir = process.env.CSS_COVERAGE_DIR;
if (dir) {
  const load = Module._load;
  Module._load = function (request, ...rest) {
    const m = load.call(this, request, ...rest);
    if (request === 'playwright' && !m.__cssCoverage) {
      m.__cssCoverage = true;
      patch(m.chromium);
    }
    return m;
  };
}

function patch(chromium) {
  const launch = chromium.launch.bind(chromium);
  chromium.launch = async (...a) => {
    const browser = await launch(...a);
    const trackers = [];
    const track = async (page) => {
      const t = { page, sheets: new Map(), used: new Map(), timer: null, cdp: null };
      trackers.push(t);
      try {
        const cdp = await page.context().newCDPSession(page);
        t.cdp = cdp;
        cdp.on('CSS.styleSheetAdded', ({ header }) => t.sheets.set(header.styleSheetId, header.sourceURL || ''));
        await cdp.send('DOM.enable');
        await cdp.send('CSS.enable');
        await cdp.send('CSS.startRuleUsageTracking');
        t.timer = setInterval(() => poll(t).catch(() => {}), 80);
      } catch { /* page closed */ }
    };
    const watch = (ctx) => {
      ctx.on('page', track);
    };
    const newContext = browser.newContext.bind(browser);
    browser.newContext = async (...a2) => { const c = await newContext(...a2); watch(c); return c; };
    const newPage = browser.newPage.bind(browser);
    browser.newPage = async (...a2) => { const p = await newPage(...a2); return p; };
    const close = browser.close.bind(browser);
    browser.close = async () => {
      const sheets = {};
      for (const t of trackers) {
        if (t.timer) clearInterval(t.timer);
        try { await poll(t); } catch { /* closed */ }
        for (const [id, ranges] of t.used) {
          const url = t.sheets.get(id);
          if (!url || !url.includes('/UBTConnect/css/')) continue;
          const key = url.slice(url.lastIndexOf('/') + 1);
          (sheets[key] = sheets[key] || []).push(...ranges);
        }
      }
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, `${process.pid}-${Date.now()}.json`), JSON.stringify({ route: argVal('--route'), state: argVal('--state'), sheets }));
      return close();
    };
    return browser;
  };
}

function argVal(k) {
  const i = process.argv.indexOf(k);
  return i >= 0 ? process.argv[i + 1] : null;
}

async function poll(t) {
  if (!t.cdp) return;
  const { coverage } = await t.cdp.send('CSS.takeCoverageDelta');
  for (const r of coverage) {
    if (!r.used) continue;
    let l = t.used.get(r.styleSheetId);
    if (!l) t.used.set(r.styleSheetId, (l = []));
    l.push([r.startOffset, r.endOffset]);
  }
}
