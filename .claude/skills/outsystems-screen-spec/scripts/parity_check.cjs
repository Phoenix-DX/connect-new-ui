#!/usr/bin/env node
/*
 * parity_check.cjs: compare one captured state of the original screen with the React build.
 * The output is a short list of differences an agent can act on, after applying NAMED exemptions,
 * so known, accepted differences are never re-investigated screen after screen.
 *
 * Normally run through `route.py parity <S> --app <url>`, which runs every captured state with the right options and
 * stamps each report with a fingerprint of the code it checked (the finish gates refuse stale or relaxed reports).
 *
 *   node parity_check.cjs --app http://localhost:5173 --route "/<App>/<Screen>?<Param>=<value>" \
 *        --expect migration/screens/<S>/analysis/dom/<state>.raw.html \
 *        [--states migration/screens/<S>/analysis/states.json --state <state>]   viewport, classes, flags, steps, scenario
 *        [--calls migration/screens/<S>/analysis/calls.json]                     call parity for this state's phases
 *        [--mock real] [--viewport 390x844] [--flags "Name=on,Other=off"] [--steps '[{"click":"text=Share"}]']
 *        [--exemptions migration/parity-exemptions.json] [--root "#reactContainer"] [--fingerprint <hex>]
 *        [--out migration/screens/<S>/parity/<state>.json]     (also writes <state>.diff.png, .expected.png and .build.png)
 *        [--no-text] [--no-style] [--no-pixel]   relax a local run; such reports are marked full=false and never pass the gate
 *        [--replay builder|parser]   how the reference is rebuilt (default builder; parser = the old load, for A/B checks)
 *        [--skip-kinds structure,class,attr] [--visible-only]   refactor parity (migration/tools/refactor_parity.py), default off
 *        [--record-self <dir>]   save tree.json, screenshot.png and calls of the build in <dir>; no comparison
 *        [--diff-ref <path>]     the diff png path named in pixel differences (exemptions match on it); default the --out one
 *        [--fixed-time <iso>]    fix the page clock (Date.now, new Date) at this time, timers keep running (self reference: clocks)
 *        [--freeze-animations]   before the snapshot: finish finite animations and transitions, pause endless ones at their start
 *        [--preload-fonts]       start loading every @font-face font as soon as a stylesheet is in (both pages), so no
 *                                font arrives after the first paint of the content (see preloadFonts)
 *        [--hold-third-party]    with --fixed-time: connections to third-party hosts (map tiles) wait until the page's own
 *                                requests are idle and its queued timers and two frames have run (see thirdPartyHold)
 *        [--self-ref <dir>]      compare against such a record (the self-parity reference) instead of --expect
 *   node parity_check.cjs --self-test             checks buildDom against a fixture (nested <a>, svg/xlink, entities, ...)
 *
 * Replay of the reference: the capture is outerHTML of the live page. Loading it through the HTML parser rebuilds
 * structures the live DOM really had (an <a> inside an <a> is split, a <div> leaves its <p>, <tbody> is added, a nested
 * <form> is dropped), so the reference would differ from TST where the clone does not. The parser therefore builds only
 * a shell: the <html> / <body> start tags with their attributes, and <head> with <base>, the app's stylesheets and
 * inline CSS. A blocking script then runs buildDom, a stack-based builder (createElement, createElementNS for SVG and
 * MathML, setAttribute / setAttributeNS for xlink:, xml:, xmlns), on the <body> content. The report records
 * options.replay and the builder's counts (replay). --replay parser keeps the old behaviour.
 *
 * Compares, element by element (children aligned by tag + data-block + classes):
 *   structure  missing / extra elements, tag changes
 *   class      class list differences on matched elements, and on <html> and <body> (device classes)
 *   attr       role, aria-*, data-block, type, tabindex (others only if listed in exemptions.compareAttributes)
 *   text       own text of elements whose captured text is a static label (masked user text • is never compared)
 *   style      computed properties (STYLE_PROPS: box, flex/grid, typography, borders, shadows, transforms, position)
 *   pseudo     ::before / ::after (content, icon font, color, size): where icon fonts live
 *   layout     width / height beyond the tolerance (skipped for elements containing masked user text)
 *   position   x / y relative to the parent (skipped after masked user text in the same parent, and for elements
 *              whose own text is masked)
 *   pixel      screenshot diff of the whole page with user-text and user-image areas masked on both sides
 *   call       service calls per phase (load, each plan step) vs the runtime capture: data actions as a set,
 *              server actions in order, server action input names
 * Exit code 0 when no unexempted difference remains, 1 otherwise. Exemptions: assets/parity-exemptions.example.json.
 */
const fs = require('fs');
const path = require('path');
const { normalizeOrigins } = require('./origin_normalize.cjs');
let pw;
try { pw = require('playwright'); } catch { console.error('playwright not found: npm i -D playwright'); process.exit(2); }

const STYLE_PROPS = ['display', 'position', 'top', 'right', 'bottom', 'left', 'z-index', 'float', 'box-sizing',
  'flex-direction', 'flex-wrap', 'flex-grow', 'flex-shrink', 'flex-basis', 'justify-content', 'align-items', 'align-self', 'align-content', 'order',
  'gap', 'row-gap', 'column-gap', 'grid-template-columns', 'grid-template-rows', 'grid-column-start', 'grid-column-end',
  'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'min-width', 'max-width', 'min-height', 'max-height',
  'color', 'background-color', 'background-image', 'background-size', 'background-position', 'opacity', 'visibility', 'overflow-x', 'overflow-y',
  'font-family', 'font-size', 'font-weight', 'font-style', 'line-height', 'letter-spacing', 'text-align', 'text-transform',
  'text-decoration-line', 'text-overflow', 'white-space', 'word-break', 'vertical-align', 'list-style-type',
  'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width',
  'border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style',
  'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color',
  'border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius',
  'box-shadow', 'outline-style', 'transform', 'filter', 'object-fit', 'cursor', 'pointer-events'];
const PSEUDO_PROPS = ['content', 'display', 'position', 'font-family', 'font-size', 'font-weight', 'color', 'background-color', 'background-image',
  'width', 'height', 'border-top-width', 'border-top-style', 'border-top-color', 'transform'];

function args(argv) {
  const o = {};
  for (let i = 0; i < argv.length; i++) if (argv[i].startsWith('--')) {
    const k = argv[i].slice(2); o[k] = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
  }
  return o;
}

/* runs in the browser: serialize the tree under root */
function serialize({ root, props, pseudoProps, attrsWanted }) {
  const r = document.querySelector(root) || document.body;
  const R = r.getBoundingClientRect();
  const sx = window.scrollX, sy = window.scrollY;
  const textRect = el => {
    let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
    for (const n of el.childNodes) if (n.nodeType === 3 && n.textContent.trim()) {
      const rg = document.createRange(); rg.selectNodeContents(n);
      for (const q of rg.getClientRects()) { x1 = Math.min(x1, q.left); y1 = Math.min(y1, q.top); x2 = Math.max(x2, q.right); y2 = Math.max(y2, q.bottom); }
    }
    return x1 === Infinity ? null : [Math.floor(x1 + sx), Math.floor(y1 + sy), Math.ceil(x2 - x1) + 1, Math.ceil(y2 - y1) + 1];
  };
  const pseudo = (el, which) => {
    const cs = getComputedStyle(el, which);
    const c = cs.getPropertyValue('content');
    if (!c || c === 'none' || c === 'normal') return null;
    return Object.fromEntries(pseudoProps.map(p => [p, cs.getPropertyValue(p)]));
  };
  // painted rectangle (page coordinates) of an absolutely or fixed positioned ::before/::after: getBoundingClientRect
  // never includes pseudo-elements, so an ignored subtree that paints only through one (the bottom-bar slider is a
  // 0 px tall fixed box whose 2 px line is a ::before of its child) needs it as its pixel mask
  const pseudoBox = (el, which) => {
    const ps = getComputedStyle(el, which), v = k => parseFloat(ps.getPropertyValue(k)) || 0;
    const bb = ps.boxSizing === 'border-box';
    const w = v('width') + (bb ? 0 : v('padding-left') + v('padding-right') + v('border-left-width') + v('border-right-width'));
    const h = v('height') + (bb ? 0 : v('padding-top') + v('padding-bottom') + v('border-top-width') + v('border-bottom-width'));
    if (!(w > 0 && h > 0)) return null;
    let ox = 0, oy = 0;
    if (ps.position === 'absolute') {   // containing block: the padding box of the nearest positioned ancestor-or-self
      let cb = el;
      while (cb.parentElement && getComputedStyle(cb).position === 'static' && getComputedStyle(cb).transform === 'none') cb = cb.parentElement;
      const q = cb.getBoundingClientRect(), cc = getComputedStyle(cb);
      ox = q.left + (parseFloat(cc.borderLeftWidth) || 0); oy = q.top + (parseFloat(cc.borderTopWidth) || 0);
    }
    return [Math.floor(ox + v('left') + v('margin-left') + sx), Math.floor(oy + v('top') + v('margin-top') + sy), Math.ceil(w), Math.ceil(h)];
  };
  const walk = el => {
    const cs = getComputedStyle(el), rect = el.getBoundingClientRect();
    const before = pseudo(el, '::before'), after = pseudo(el, '::after');
    const pboxes = [['::before', before], ['::after', after]]
      .filter(([, p]) => p && /^(absolute|fixed)$/.test(p.position)).map(([w]) => pseudoBox(el, w)).filter(Boolean);
    const attrs = {};
    for (const a of el.attributes) if (attrsWanted.includes(a.name) || a.name.startsWith('aria-')) attrs[a.name] = a.value;
    const own = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join(' ').replace(/\s+/g, ' ').trim();
    return {
      masked: /•/.test(el.textContent || ''), ownMasked: /•/.test(own),
      maskedImg: el.hasAttribute('data-masked-src'),
      tag: el.tagName.toLowerCase(), cls: [...el.classList].sort(), block: el.getAttribute('data-block') || '', id: el.id || '',
      attrs, text: own.slice(0, 160), style: Object.fromEntries(props.map(p => [p, cs.getPropertyValue(p)])),
      before, after, pboxes,
      w: Math.round(rect.width), h: Math.round(rect.height),
      x: Math.round(rect.left - R.left), y: Math.round(rect.top - R.top),             // relative to root
      box: [Math.floor(rect.left + sx), Math.floor(rect.top + sy), Math.ceil(rect.width), Math.ceil(rect.height)],   // page coordinates
      trect: textRect(el),
      kids: [...el.children].filter(c => !['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE', 'LINK'].includes(c.tagName)).map(walk),
    };
  };
  /* returned as a JSON string: Playwright cannot hand back a deeply nested object (a 65-level tree fails with
     "Execution context was destroyed"); the caller parses it in Node */
  return JSON.stringify({ tree: walk(r), htmlClass: [...document.documentElement.classList].sort(), bodyClass: [...document.body.classList].sort() });
}

/* runs in the reference page: build the captured <body> content into `target` with DOM calls, not the HTML parser, so
 * the tree keeps the nesting the live page had (the parser rebuilds <a> in <a>, <div> in <p>, rows without <tbody>,
 * nested <form>, ...). The input is serializer output (outerHTML): every non-void element closed, attribute values
 * quoted. A stack of open elements; namespaces follow the parser's rules (svg/math start foreign content, foreignObject,
 * desc, title, mi/mo/mn/ms/mtext and HTML annotation-xml hold HTML); xlink:/xml:/xmlns attributes of foreign elements
 * get their namespace; raw text in style/xmp/iframe/noembed/noframes/noscript/plaintext; <script> is dropped (a
 * created script would run); <template> children go to .content; stray <html>/<head>/<body> tags are ignored.
 * Returns counts; endTagMismatch or unclosed > 0 means the input was not plain serializer output. */
function buildDom(src, target) {
  const NS = { html: 'http://www.w3.org/1999/xhtml', svg: 'http://www.w3.org/2000/svg', math: 'http://www.w3.org/1998/Math/MathML',
    xlink: 'http://www.w3.org/1999/xlink', xml: 'http://www.w3.org/XML/1998/namespace', xmlns: 'http://www.w3.org/2000/xmlns/' };
  const VOID = new Set(['area', 'base', 'basefont', 'bgsound', 'br', 'col', 'embed', 'frame', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
  const RAW = new Set(['style', 'script', 'xmp', 'iframe', 'noembed', 'noframes', 'noscript', 'plaintext']);
  const WRAP = new Set(['html', 'head', 'body']);
  const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00a0' };
  const doc = target.ownerDocument, ta = doc.createElement('textarea');
  const stats = { elements: 0, texts: 0, comments: 0, dropped: 0, endTagMismatch: 0, unclosed: 0, badNames: 0 };
  // character references: the common ones directly, any other one through an RCDATA element (decoding only, no tree)
  const decode = s => (s.indexOf('&') < 0 ? s : s.replace(/&(?:#[xX][0-9a-fA-F]+|#[0-9]+|[A-Za-z][A-Za-z0-9]*);?/g, m => {
    const k = m.slice(1, -1);
    if (m.endsWith(';') && ENT[k] !== undefined) return ENT[k];
    ta.innerHTML = m; return ta.textContent;
  }));
  const isWs = ch => ch === ' ' || ch === '\n' || ch === '\t' || ch === '\f' || ch === '\r';
  src = src.replace(/\r\n?/g, '\n');   // the parser's input stream normalisation
  const n = src.length, stack = [{ lname: '#root', ns: NS.html, node: target, box: target }];
  const top = () => stack[stack.length - 1];
  let i = 0, text = '';
  const flush = () => { if (text) { top().box.appendChild(doc.createTextNode(decode(text))); stats.texts++; text = ''; } };
  const viaParser = (markup, pick) => { const t = doc.createElement('template'); t.innerHTML = markup; stats.badNames++; return doc.importNode(pick(t.content), false); };
  const create = (name, lname, ns) => {
    try { return ns === NS.html ? doc.createElement(lname) : doc.createElementNS(ns, name); }
    catch { return ns === NS.svg ? viaParser(`<svg><${name}></svg>`, c => c.firstChild.firstChild) : viaParser(`<${lname}>`, c => c.firstChild); }
  };
  const setAttr = (el, name, value, ns) => {
    if (el.hasAttribute(name)) return;   // the parser keeps the first of duplicate attributes
    try {
      if (ns !== NS.html && (name === 'xmlns' || name.startsWith('xmlns:'))) el.setAttributeNS(NS.xmlns, name, value);
      else if (ns !== NS.html && name.startsWith('xlink:')) el.setAttributeNS(NS.xlink, name, value);
      else if (ns !== NS.html && name.startsWith('xml:')) el.setAttributeNS(NS.xml, name, value);
      else el.setAttribute(name, value);
    } catch {   // a name setAttribute refuses but the parser accepts (e.g. "@click")
      try { const a = viaParser(`<i ${name.replace(/[\s"'>/=]/g, '')}=""></i>`, c => c.firstChild.attributes[0]); a.value = value; el.setAttributeNode(a); } catch { /* skip */ }
    }
  };
  const nsFor = (lname, p) => {
    if (lname === 'svg') return NS.svg;
    if (lname === 'math') return NS.math;
    if (p.ns === NS.svg) return ['foreignobject', 'desc', 'title'].includes(p.lname) ? NS.html : NS.svg;
    if (p.ns === NS.math) {
      if (['mi', 'mo', 'mn', 'ms', 'mtext'].includes(p.lname) && lname !== 'mglyph' && lname !== 'malignmark') return NS.html;
      if (p.lname === 'annotation-xml' && /^(text\/html|application\/xhtml\+xml)$/i.test(p.node.getAttribute('encoding') || '')) return NS.html;
      return NS.math;
    }
    return NS.html;
  };
  const rawEnd = (lname, from) => {   // [start of "</name", index after its ">"]
    const re = new RegExp(`</${lname}(?=[\\s/>])`, 'ig'); re.lastIndex = from;
    const m = re.exec(src); if (!m) return [n, n];
    const gt = src.indexOf('>', m.index); return [m.index, gt < 0 ? n : gt + 1];
  };
  const NAME = /[^\s/>]+/y, ATTR = /[^\s/>][^\s/>=]*/y, UNQ = /[^\s>]*/y;
  while (i < n) {
    const lt = src.indexOf('<', i);
    if (lt < 0) { text += src.slice(i); break; }
    text += src.slice(i, lt); i = lt;
    const c1 = src[i + 1] || '';
    if (src.startsWith('<!--', i)) {   // comment: data is literal up to "-->"
      flush();
      const e = src.indexOf('-->', i + 4), end = e < 0 ? n : e;
      top().box.appendChild(doc.createComment(src.slice(i + 4, end))); stats.comments++;
      i = e < 0 ? n : e + 3; continue;
    }
    if (c1 === '!' || c1 === '?') { flush(); const e = src.indexOf('>', i); i = e < 0 ? n : e + 1; stats.dropped++; continue; }   // doctype, PI
    if (c1 === '/' && /[A-Za-z]/.test(src[i + 2] || '')) {   // end tag: closes the nearest open element of that name
      flush();
      NAME.lastIndex = i + 2; const lname = NAME.exec(src)[0].toLowerCase();
      const gt = src.indexOf('>', NAME.lastIndex); i = gt < 0 ? n : gt + 1;
      let k = stack.length - 1;
      while (k > 0 && stack[k].lname !== lname) k--;
      if (k > 0) { if (k !== stack.length - 1) { stats.endTagMismatch++; stats.unclosed += stack.length - 1 - k; } stack.length = k; }
      else if (!WRAP.has(lname)) stats.endTagMismatch++;
      continue;
    }
    if (!/[A-Za-z]/.test(c1)) { text += '<'; i++; continue; }   // a lone "<" is text
    flush();
    NAME.lastIndex = i + 1; const name = NAME.exec(src)[0], lname = name.toLowerCase();
    let j = NAME.lastIndex, selfClose = false;
    const attrs = [];
    for (;;) {
      while (j < n && isWs(src[j])) j++;
      if (j >= n) break;
      if (src[j] === '>') { j++; break; }
      if (src[j] === '/') { if (src[j + 1] === '>') { selfClose = true; j += 2; break; } j++; continue; }
      ATTR.lastIndex = j; const an = ATTR.exec(src)[0]; j = ATTR.lastIndex;
      let k = j; while (k < n && isWs(src[k])) k++;
      let value = '';
      if (src[k] === '=') {
        k++; while (k < n && isWs(src[k])) k++;
        const q = src[k];
        if (q === '"' || q === "'") { const e = src.indexOf(q, k + 1); value = src.slice(k + 1, e < 0 ? n : e); j = e < 0 ? n : e + 1; }
        else { UNQ.lastIndex = k; value = UNQ.exec(src)[0]; j = UNQ.lastIndex; }
      }
      attrs.push([an, decode(value)]);
    }
    i = j;
    const p = top(), ns = nsFor(lname, p);
    if (ns === NS.html && lname === 'script') { i = rawEnd(lname, i)[1]; stats.dropped++; continue; }
    if (ns === NS.html && WRAP.has(lname)) { stats.dropped++; continue; }   // the reference page has its own wrappers
    const el = create(name, lname, ns);
    for (const [an, av] of attrs) setAttr(el, an, av, ns);
    p.box.appendChild(el); stats.elements++;
    if (selfClose || (ns === NS.html && VOID.has(lname))) continue;
    if (ns === NS.html && RAW.has(lname)) {
      const [s, e] = rawEnd(lname, i);
      if (s > i) el.appendChild(doc.createTextNode(src.slice(i, s)));
      i = e; continue;
    }
    stack.push({ lname, ns, node: el, box: ns === NS.html && lname === 'template' ? el.content : el });
    if (ns === NS.html && (lname === 'pre' || lname === 'textarea' || lname === 'listing') && src[i] === '\n') i++;   // as the parser does
  }
  flush();
  stats.unclosed += stack.length - 1;
  return stats;
}

/* the parts of a captured document (normally body.outerHTML): <html> and <head> attributes and content, <body> attributes
 * and content. Attribute strings keep their leading space; quoted values may contain ">". */
function splitCapture(html) {
  const TAG = `((?:[^>"']|"[^"]*"|'[^']*')*)>`;
  const ht = new RegExp(`<html\\b${TAG}`, 'i').exec(html);
  const hd = new RegExp(`<head\\b${TAG}([\\s\\S]*?)</head\\s*>`, 'i').exec(html);
  const bd = new RegExp(`<body\\b${TAG}`, 'i').exec(html);
  let body;
  if (bd) { const s = bd.index + bd[0].length, e = html.toLowerCase().lastIndexOf('</body'); body = html.slice(s, e >= s ? e : html.length); }
  else body = (hd ? html.replace(hd[0], '') : html).replace(/<!doctype[^>]*>|<\/?html\b[^>]*>/gi, '');
  return { htmlAttrs: ht ? ht[1] : null, headAttrs: hd ? hd[1] : '', head: hd ? hd[2] : '', bodyAttrs: bd ? bd[1] : '', body };
}

function compile(ex, state) {
  const re = list => (list || []).map(x => new RegExp(x));
  const px = Object.assign({ threshold: 0.1, maxRatio: 0.002, maxCellRatio: 0.03 }, ex.pixel || {}, (ex.pixelByState || {})[state] || {});
  // ignoreSubtrees entries may carry `states` (a regex on the state name), like rules
  const subs = (ex.ignoreSubtrees || []).filter(s => !s.states || new RegExp(s.states).test(state));
  return {
    ignoreClasses: re(ex.ignoreClasses), ignoreSelectorsClass: re(subs.map(s => s.classRegex).filter(Boolean)),
    ignoreBlocks: re(subs.map(s => s.blockRegex).filter(Boolean)), ignoreIds: re(subs.map(s => s.idRegex).filter(Boolean)),
    ignoreStyle: new Set(ex.ignoreStyleProps || []), layoutTolerance: ex.layoutTolerancePx ?? 2,
    listTolerance: (ex.listTolerance || []).map(x => ({ ...x, re: new RegExp(x.containerClassRegex) })),
    // callOrderFree: server calls whose position among the app-start calls depends on network timing; their count is
    // still compared, only their place in the order is not (entries may carry `states`)
    callOrderFree: new Set((ex.callOrderFree || []).filter(x => !x.states || new RegExp(x.states).test(state)).flatMap(x => x.actions || [])),
    // entries with countFree: true also skip the count (batched calls whose number depends on cache timing)
    callCountFree: new Set((ex.callOrderFree || []).filter(x => x.countFree && (!x.states || new RegExp(x.states).test(state))).flatMap(x => x.actions || [])),
    rules: (ex.rules || []).map(x => ({ ...x, re: x.pathRegex ? new RegExp(x.pathRegex) : null, kinds: x.kinds || null,
      detailRe: x.detailRegex ? new RegExp(x.detailRegex) : null,
      states: x.states ? new RegExp(x.states) : null })).filter(r => !r.states || r.states.test(state)),
    attrs: ['role', 'data-block', 'type', 'tabindex', ...(ex.compareAttributes || [])],
    ignoreCalls: re(ex.ignoreCalls), pixel: px,
    // appStartCalls: calls the app makes on every app open. A state captured `via` another screen (states.json) recorded
    // only the calls made after arriving, so the app-start calls ran on the source screen; parity opens the route by URL,
    // where they run on this screen. For such states they are not compared unless the capture has them too.
    appStartCalls: new Set(((ex.appStartCalls || {}).actions) || []), viaAppStart: false,
  };
}

/* a rule exempts a difference of one of its kinds whose path matches pathRegex and, when given, whose detail matches
   detailRegex (e.g. only "missing .list-error extra .list-loading", not every class difference at that path) */
const ruleHits = (r, d) => !r.props && (!r.kinds || r.kinds.includes(d.kind)) && (!r.re || r.re.test(d.path)) && (!r.detailRe || r.detailRe.test(d.detail));

function diffTrees(a, b, X, opts) {
  const out = [], used = {}, masks = [], skipped = [];
  const use = id => { used[id] = (used[id] || 0) + 1; };
  const cls = n => n.cls.filter(c => !X.ignoreClasses.some(r => r.test(c)));
  const key = n => `${n.tag}|${n.block}|${cls(n).join('.')}`;
  const label = n => `${n.tag}${n.id ? '#' + n.id : ''}${cls(n).slice(0, 3).map(c => '.' + c).join('')}${n.block ? `[${n.block}]` : ''}`;
  const skip = n => X.ignoreBlocks.some(r => n.block && r.test(n.block)) || X.ignoreSelectorsClass.some(r => n.cls.some(c => r.test(c)))
    || X.ignoreIds.some(r => n.id && r.test(n.id));
  const push = (d) => {
    for (const r of X.rules) if (ruleHits(r, d)) { use(r.id); return; }
    out.push(d);
  };
  // rules with `props` exempt only those style properties (e.g. cursor), never the element's other style differences
  const propRules = X.rules.filter(r => r.props);
  const exemptProps = (p, sd) => {
    for (const r of propRules) if ((!r.kinds || r.kinds.includes('style')) && (!r.re || r.re.test(p))) {
      const n = sd.length; sd = sd.filter(k => !r.props.includes(k)); if (sd.length < n) use(r.id);
    }
    return sd;
  };
  const pseudoDiff = (p, which, u, v) => {
    if (!u && !v) return;
    if (!u || !v) { push({ kind: 'pseudo', path: p, detail: `${which} ${u ? 'missing in build' : 'extra in build'}${u ? ` (content ${u.content})` : ''}` }); return; }
    const d = PSEUDO_PROPS.filter(k => !X.ignoreStyle.has(k) && u[k] !== v[k]);
    if (d.length) push({ kind: 'pseudo', path: p, detail: `${which} ` + d.slice(0, 4).map(k => `${k} ${u[k]} → ${v[k]}`).join('; ') });
  };

  // an ignored subtree is masked by its box and by the positioned ::before/::after its nodes paint (pboxes)
  const paint = n => [...(n.pboxes || []), ...n.kids.flatMap(paint)];
  const skipSubtree = (u, v) => {
    use('ignoreSubtrees'); skipped.push(u ? u.box : null, v ? v.box : null);
    if (u) paint(u).forEach(r => skipped.push(r, null));
    if (v) paint(v).forEach(r => skipped.push(null, r));
  };

  function cmpNode(x, y, p, maskedBefore) {
    if (skip(x) || skip(y)) { skipSubtree(x, y); return; }
    if (x.ownMasked && x.trect) masks.push({ side: 'both', a: x.trect, b: y.trect || y.box });
    if (x.maskedImg) masks.push({ side: 'both', a: x.box, b: y.box });
    if (x.tag !== y.tag) push({ kind: 'structure', path: p, detail: `tag ${x.tag} → ${y.tag}` });
    const cx = cls(x), cy = cls(y);
    const miss = cx.filter(c => !cy.includes(c)), extra = cy.filter(c => !cx.includes(c));
    if (miss.length || extra.length) push({ kind: 'class', path: p, detail: `${miss.length ? 'missing .' + miss.join(' .') : ''}${extra.length ? ' extra .' + extra.join(' .') : ''}`.trim() });
    for (const k of new Set([...Object.keys(x.attrs), ...Object.keys(y.attrs)]))
      if (X.attrs.includes(k) || k.startsWith('aria-')) if ((x.attrs[k] ?? null) !== (y.attrs[k] ?? null)) push({ kind: 'attr', path: p, detail: `${k}: ${x.attrs[k] ?? '∅'} → ${y.attrs[k] ?? '∅'}` });
    if (opts.text && !x.ownMasked && x.text !== y.text) push({ kind: 'text', path: p, detail: `"${x.text}" → "${y.text}"` });
    const vis = n => n.w > 0 && n.h > 0 && n.style.display !== 'none' && n.style.visibility !== 'hidden';
    if (opts.style && (!opts.visibleOnly || (vis(x) && vis(y)))) {
      const sd = exemptProps(p, STYLE_PROPS.filter(k => !X.ignoreStyle.has(k) && x.style[k] !== y.style[k]));
      if (sd.length) push({ kind: 'style', path: p, detail: sd.slice(0, 5).map(k => `${k} ${x.style[k]} → ${y.style[k]}`).join('; ') + (sd.length > 5 ? ` (+${sd.length - 5})` : '') });
      pseudoDiff(p, '::before', x.before, y.before);
      pseudoDiff(p, '::after', x.after, y.after);
    }
    if (opts.style) {
      const tol = X.layoutTolerance;
      if (x.w > 0 && !x.masked && (Math.abs(x.w - y.w) > tol || Math.abs(x.h - y.h) > tol))
        push({ kind: 'layout', path: p, detail: `${x.w}×${x.h} → ${y.w}×${y.h}` });
    }
    // align children with LCS on key
    const A = x.kids, B = y.kids, n = A.length, m = B.length;
    const L = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
      L[i][j] = key(A[i]) === key(B[j]) ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    let i = 0, j = 0; const pairs = [], ma = [], mb = [];
    while (i < n && j < m) {
      if (key(A[i]) === key(B[j])) { pairs.push([A[i], B[j]]); i++; j++; }
      else if (L[i + 1][j] >= L[i][j + 1]) ma.push(A[i++]); else mb.push(B[j++]);
    }
    while (i < n) ma.push(A[i++]); while (j < m) mb.push(B[j++]);
    // pair leftovers with the same tag + block (class-only differences)
    for (const u of [...ma]) {
      const k = mb.findIndex(v => v.tag === u.tag && v.block === u.block);
      if (k >= 0) { pairs.push([u, mb[k]]); mb.splice(k, 1); ma.splice(ma.indexOf(u), 1); }
    }
    const lt = X.listTolerance.find(t => x.cls.some(c => t.re.test(c)));
    const sameKind = arr => arr.length && arr.every(v => key(v) === key(arr[0]));
    if (lt && (ma.length === 0 || mb.length === 0) && (sameKind(ma) || sameKind(mb)) && ma.length + mb.length <= lt.max) { use(lt.id); }
    else {
      ma.filter(v => !skip(v)).forEach(v => push({ kind: 'structure', path: `${p} > ${label(v)}`, detail: 'missing in build' }));
      mb.filter(v => !skip(v)).forEach(v => push({ kind: 'structure', path: `${p} > ${label(v)}`, detail: 'extra in build' }));
      // an ignored subtree present on one side only is masked in the pixel comparison too
      // (skipped holds [expected box, build box] pairs)
      ma.filter(skip).forEach(v => skipSubtree(v, null));
      mb.filter(skip).forEach(v => skipSubtree(null, v));
    }
    // masked user text earlier in the same parent moves everything after it: positions are not comparable there
    const mbIdx = new Map(); let seen = x.ownMasked || maskedBefore;
    A.forEach(k => { mbIdx.set(k, seen); seen = seen || k.masked; });
    for (const [u, v] of pairs) {
      const cp = `${p} > ${label(u)}`;
      // an element whose own text is masked has the mask's width, so its offset moves when centred or right-aligned
      if (opts.style && !mbIdx.get(u) && !u.ownMasked && u.w > 0 && !skip(u)) {
        const du = [u.x - x.x, u.y - x.y], dv = [v.x - y.x, v.y - y.y], tol = X.layoutTolerance;
        if (Math.abs(du[0] - dv[0]) > tol || Math.abs(du[1] - dv[1]) > tol)
          push({ kind: 'position', path: cp, detail: `offset in parent ${du[0]},${du[1]} → ${dv[0]},${dv[1]}` });
      }
      cmpNode(u, v, cp, false);
    }
  }
  cmpNode(a, b, label(a), false);
  return { diffs: out, exemptionsUsed: used, masks, skipped };
}

/* --preload-fonts, an init script of both pages: a browser loads a web font only when some text needs it, so an icon
 * font can arrive after the content that uses it has painted. The layout then moves, and a composited layer (for
 * example `.btn { transform: translateZ(0) }` of the legacy CSS) keeps the sub-pixel offset of its first position:
 * the text in it renders 0.33 px apart from a run where the font came first (EventDetail/default, P4-F6). Loading every
 * declared font at once makes the font come first in every run. The final render does not change: the snapshot waits
 * for document.fonts.ready anyway, and a loaded font that no text uses paints nothing. */
function preloadFonts() {
  const loadAll = () => { for (const f of document.fonts) if (f.status === 'unloaded') f.load().catch(() => {}); };
  document.addEventListener('load', e => { if (e.target && e.target.tagName === 'LINK') loadAll(); }, true);
  document.addEventListener('DOMContentLoaded', loadAll);
}

/* --hold-third-party (self runs, which fix the page clock): the app context goes through a local proxy that holds every
 * connection to a third-party host (all hosts but the app's and loopback) until the page's own requests are idle
 * (Playwright's networkidle rule: none for 500 ms, at most 15 s) and the page has run its queued timers and two
 * animation frames. A host counts as third-party once the browser connects to it through the proxy; MSW answers mocked
 * hosts in the service worker, so they stay own requests.
 * Cause (CountryDetails/default, P5-F9): Leaflet fades a loaded tile in with Date steps. Under a fixed clock no tile ever
 * becomes active, so Leaflet keeps every loaded tile of an earlier zoom level as a stand-in (GridLayer._pruneTiles,
 * _retainChildren). The map opens at zoom 5 and fits the bounds (zoom 4) in a setTimeout(…, 0) and the next frame; a
 * zoom-5 map tile (server.arcgisonline.com) that loaded in this gap stayed in the tree as a second tile level. With the
 * hold, every zoom-5 tile is still loading at the zoom change and Leaflet cancels it. The page's requests for held
 * resources stay in flight, so networkidle waits for them: the tiles of the final view load before the settle time, as
 * before, and the final render does not change.
 * Why a proxy and not page.route: any Playwright route turns on request interception, and then Playwright reports the
 * requests that the MSW service worker answers only when their response arrives. networkidle then misses the mocked
 * calls in flight (in a test, HouseholdDetails/default took its snapshot about 3.3 s after the start, with 7 skeleton
 * sections still on the page; without the route there were none from 4.0 s). `upstream` maps a host and port to the
 * address to connect to (--self-test). */
async function thirdPartyHold(appHost, upstream = (host, port) => [host, port]) {
  const http = require('http'), net = require('net');
  const sockets = new Set(), proxied = new Set(), inflight = new Set();
  let page = null, changed = Date.now(), closed = false;   // closed: no new upstream connection after close()
  const track = s => { sockets.add(s); s.on('close', () => sockets.delete(s)); s.on('error', () => {}); return s; };
  const hostOf = url => { try { return new URL(url).hostname.replace(/^\[|\]$/g, ''); } catch { return ''; } };
  const thirdParty = host => { proxied.add(host); for (const r of inflight) if (hostOf(r.url()) === host) inflight.delete(r); };
  const wait = async until => {
    const end = Date.now() + 15000;
    while (page && !page.isClosed() && Date.now() < end && !until()) await new Promise(r => setTimeout(r, 25));
  };
  const gate = async () => {
    await wait(() => !inflight.size && Date.now() - changed >= 500);
    if (page && !page.isClosed()) await page.evaluate(() => new Promise(r => setTimeout(() => requestAnimationFrame(() => requestAnimationFrame(r)), 0))).catch(() => {});
  };
  const server = http.createServer(async (req, res) => {   // plain http (absolute-form request line)
    track(req.socket);
    let u;
    try { u = new URL(req.url); } catch { res.writeHead(400).end(); return; }
    thirdParty(u.hostname);
    await gate();
    if (closed || req.destroyed) { res.destroy(); return; }
    const [host, port] = upstream(u.hostname, Number(u.port) || 80);
    const up = http.request({ host, port, method: req.method, path: u.pathname + u.search, headers: req.headers }, r => { res.writeHead(r.statusCode, r.headers); r.pipe(res); });
    up.on('socket', track);
    up.on('error', () => { if (!res.headersSent) res.writeHead(502); res.end(); });
    req.pipe(up);
  });
  server.on('connect', async (req, client, head) => {   // https: a tunnel
    track(client);
    const i = req.url.lastIndexOf(':'), host0 = req.url.slice(0, i).replace(/^\[|\]$/g, '');
    thirdParty(host0);
    await gate();
    if (closed || client.destroyed) { client.destroy(); return; }
    const [host, port] = upstream(host0, Number(req.url.slice(i + 1)) || 443);
    const up = track(net.connect(port, host, () => {
      client.write('HTTP/1.1 200 Connection Established\r\n\r\n');
      if (head.length) up.write(head);
      up.pipe(client);
      client.pipe(up);
    }));
    up.on('error', () => client.destroy());
  });
  server.on('connection', track);
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  return {
    proxy: { server: `http://127.0.0.1:${server.address().port}`, bypass: [appHost, 'localhost', '127.0.0.1', '[::1]'].join(',') },
    attach(p) {   // the app page, before it loads
      page = p;
      p.on('request', r => { if (!proxied.has(hostOf(r.url()))) { inflight.add(r); changed = Date.now(); } });
      const done = r => { if (inflight.delete(r)) changed = Date.now(); };
      p.on('requestfinished', done);
      p.on('requestfailed', done);
    },
    close() { closed = true; for (const s of sockets) s.destroy(); server.close(); },
  };
}

/* runs in a blank page: pixel diff of two PNGs (base64) with masked rectangles, pixelmatch-style YIQ distance */
async function pixelDiff({ a, b, masksA, masksB, threshold }) {
  const img = async src => { const i = new Image(); i.src = 'data:image/png;base64,' + src; await i.decode(); return i; };
  const [ia, ib] = await Promise.all([img(a), img(b)]);
  const W = Math.max(ia.width, ib.width), H = Math.max(ia.height, ib.height);
  const draw = (im, masks) => {
    const c = new OffscreenCanvas(W, H), g = c.getContext('2d');
    g.fillStyle = '#fff'; g.fillRect(0, 0, W, H); g.drawImage(im, 0, 0);
    g.fillStyle = '#ff00ff'; for (const m of masks) g.fillRect(m[0], m[1], m[2], m[3]);
    return g.getImageData(0, 0, W, H).data;
  };
  const all = [...masksA, ...masksB];
  const da = draw(ia, all), db = draw(ib, all);
  const maxDelta = 35215 * threshold * threshold;
  const out = new OffscreenCanvas(W, H), og = out.getContext('2d'); const od = og.createImageData(W, H);
  const CELL = 40, cells = new Map();
  let diff = 0, compared = 0;
  for (let i = 0; i < da.length; i += 4) {
    const masked = da[i] === 255 && da[i + 1] === 0 && da[i + 2] === 255 && db[i] === 255 && db[i + 1] === 0 && db[i + 2] === 255;
    const r1 = da[i], g1 = da[i + 1], b1 = da[i + 2], r2 = db[i], g2 = db[i + 1], b2 = db[i + 2];
    const y = (r1 - r2) * 0.29889531 + (g1 - g2) * 0.58662247 + (b1 - b2) * 0.11448223;
    const ii = (r1 - r2) * 0.59597799 - (g1 - g2) * 0.2741761 - (b1 - b2) * 0.32180189;
    const q = (r1 - r2) * 0.21147017 - (g1 - g2) * 0.52261711 + (b1 - b2) * 0.31114694;
    const delta = 0.5053 * y * y + 0.299 * ii * ii + 0.1957 * q * q;
    const gray = 255 - (255 - (0.299 * r1 + 0.587 * g1 + 0.114 * b1)) * 0.25;
    if (masked) { od.data[i] = 255; od.data[i + 1] = 245; od.data[i + 2] = 200; od.data[i + 3] = 255; continue; }
    compared++;
    if (delta > maxDelta) {
      diff++; od.data[i] = 230; od.data[i + 1] = 0; od.data[i + 2] = 40; od.data[i + 3] = 255;
      const px = (i / 4) % W, py = Math.floor(i / 4 / W), k = `${Math.floor(px / CELL)},${Math.floor(py / CELL)}`;
      cells.set(k, (cells.get(k) || 0) + 1);
    } else { od.data[i] = od.data[i + 1] = od.data[i + 2] = gray; od.data[i + 3] = 255; }
  }
  og.putImageData(od, 0, 0);
  const blob = await out.convertToBlob({ type: 'image/png' });
  const png = await new Promise(r => { const fr = new FileReader(); fr.onload = () => r(fr.result.split(',')[1]); fr.readAsDataURL(blob); });
  const hot = [...cells.entries()].sort((p, q) => q[1] - p[1]).slice(0, 5)
    .map(([k, n]) => { const [cx, cy] = k.split(',').map(Number); return `${cx * CELL},${cy * CELL} (${n}px)`; });
  const maxCell = cells.size ? Math.max(...cells.values()) / (CELL * CELL) : 0;   // a small local change is not diluted by the page size
  return { width: W, height: H, sizeA: [ia.width, ia.height], sizeB: [ib.width, ib.height], diff, compared, ratio: compared ? diff / compared : 0, maxCell, hot, png };
}

/* call parity: the runtime capture (calls.json) vs what the React app called (window.__osCalls, written by src/lib/api.ts) */
function diffCalls(ref, actual, phases, X, push) {
  const viaSkipped = new Set();
  const exp = ref.filter(c => c.scope === 'this screen' && phases.includes(c.phase));
  const other = new Set(ref.filter(c => c.scope !== 'this screen').map(c => c.action));
  const ign = n => X.ignoreCalls.some(r => r.test(n));
  for (const ph of phases) {
    const e = exp.filter(c => c.phase === ph && !ign(c.action));
    const viaSkip = c => X.viaAppStart && ph === 'load' && X.appStartCalls.has(c.action) && !e.some(x => x.action === c.action);
    for (const c of actual) if ((c.phase || 'load') === ph && viaSkip(c)) viaSkipped.add(c.action);
    const g = actual.filter(c => (c.phase || 'load') === ph && !ign(c.action) && !viaSkip(c) && !(other.has(c.action) && !e.some(x => x.action === c.action)));
    const eData = [...new Set(e.filter(c => c.kind === 'data').map(c => c.action))];
    const gNames = new Set(g.map(c => c.action));
    for (const n of eData) if (!gNames.has(n)) push({ kind: 'call', path: `calls:${ph}`, detail: `data action ${n} not called` });
    const eSrv = e.filter(c => c.kind === 'server'), gSrv = g.filter(c => !/^(DataAction|ScreenDataSet|Aggregate)/.test(c.action));
    const known = new Set(e.map(c => c.action));
    for (const c of g) if (!known.has(c.action)) push({ kind: 'call', path: `calls:${ph}`, detail: `extra call ${c.module}/${c.action}` });
    // calls the capture shows starting within 2 ms of each other ran in parallel: their order is not defined (captures
    // differ), so the build may make them in any order. Only the capture is grouped; the build's own timing is not used
    // (mocks answer at once, so sequential build calls can start within 2 ms too).
    const free = X.callOrderFree || new Set();
    for (const a of free) {
      const ce = eSrv.filter(c => c.action === a).length, cg = gSrv.filter(c => c.action === a).length;
      if (X.callCountFree && X.callCountFree.has(a) && (ce > 0) === (cg > 0)) continue;   // only presence is compared
      if (ce !== cg) push({ kind: 'call', path: `calls:${ph}`, detail: `${a} called ${cg}× in build, ${ce}× in capture (order-free call)` });
    }
    const groups = [];
    let last = null;
    for (const c of eSrv.filter(x => !free.has(x.action))) {
      const t = Number(c.ts);
      if (last !== null && Number.isFinite(t) && Math.abs(t - last) <= 2 && groups.length) groups[groups.length - 1].push(c.action);
      else groups.push([c.action]);
      last = Number.isFinite(t) ? t : null;
    }
    const built = gSrv.filter(c => known.has(c.action) && !free.has(c.action)).map(c => c.action);
    const fmt = g => (g.length > 1 ? '{' + [...g].sort().join(' + ') + '}' : g[0]);
    const es = groups.map(fmt).join(' → ');
    let i = 0, ok = true;
    const gsParts = [];
    for (const g of groups) {
      const slice = built.slice(i, i + g.length);
      i += g.length;
      if (slice.length !== g.length || [...slice].sort().join('|') !== [...g].sort().join('|')) ok = false;
      gsParts.push(g.length > 1 ? '{' + [...slice].sort().join(' + ') + '}' : (slice[0] ?? '(none)'));
    }
    if (i < built.length) { ok = false; gsParts.push(...built.slice(i)); }
    const gs = ok ? es : gsParts.join(' → ');
    if (es !== gs) push({ kind: 'call', path: `calls:${ph}`, detail: `server actions ${es || '(none)'} → build ${gs || '(none)'}` });
    for (const c of eSrv) {
      const hit = gSrv.find(x => x.action === c.action);
      if (hit && c.inputNames && hit.inputNames) {
        const miss = c.inputNames.filter(k => !hit.inputNames.includes(k)), extra = hit.inputNames.filter(k => !c.inputNames.includes(k));
        if (miss.length || extra.length) push({ kind: 'call', path: `calls:${ph}`, detail: `${c.action} inputs${miss.length ? ' missing ' + miss.join(',') : ''}${extra.length ? ' extra ' + extra.join(',') : ''}` });
      }
    }
  }
  return { expected: exp.length, actual: actual.length, ...(viaSkipped.size ? { viaAppStartSkipped: [...viaSkipped].sort() } : {}) };
}

async function replay(page, steps) {
  for (const [i, st] of steps.entries()) {
    await page.evaluate(l => { window.__osPhase = l; }, st.label || `step${i + 1}`);
    if (st.click) await page.click(st.click, { timeout: 10000 });
    if (st.fill) await page.fill(st.fill.selector, st.fill.value);
    if (st.waitFor) await page.waitForSelector(st.waitFor, { timeout: 15000 });
    await page.waitForTimeout(st.waitMs || 600);
    await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
    if (i < steps.length - 1 || st.backLast) {
      if (st.back === 'history') { await page.goBack(); await page.waitForTimeout(st.waitMs || 1000); }
      else if (st.back) { await page.keyboard.press(st.back); await page.waitForTimeout(400); }
    }
  }
}

/* --self-test: buildDom and splitCapture on fixtures with the cases the HTML parser rebuilds or that need care */
async function selfTest() {
  const fixture = '<div class="list"><a href="/a" class="item">One<a class="badge" href="/b">3</a></a>' +
    '<p>para<div class="block">in p</div></p><table><tr><td>cell</td></tr></table><form id="f1"><form id="f2"></form></form>' +
    '<svg viewBox="0 0 10 10" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#i"></use><foreignObject><span>fo</span></foreignObject></svg>' +
    'Tom &amp; Jerry&nbsp;&lt;3&gt; &quot;x&quot; &eacute;&#233;&#xe9;<img src="data:," alt="a &amp; b &quot;c&quot;"><br><input type="text" value="&lt;v&gt;">' +
    '<!-- note --><template><b>t</b></template><style>.x > .y { color: red }</style><pre>\nkeep</pre><math><mi><b>m</b></mi></math></div>';
  const expected = String.raw`div[class="list"](a[href="/a" class="item"]("One",a[class="badge" href="/b"]("3")),p("para",div[class="block"]("in p")),` +
    String.raw`table(tr(td("cell"))),form[id="f1"](form[id="f2"]()),svg:svg[viewBox="0 0 10 10" {xmlns}xmlns:xlink="http://www.w3.org/1999/xlink"](` +
    String.raw`svg:use[{xlink}xlink:href="#i"](),svg:foreignObject(span("fo"))),"Tom & Jerry\u00a0<3> \"x\" ééé",img[src="data:," alt="a & b \"c\""](),` +
    String.raw`br(),input[type="text" value="<v>"](),<!-- note -->,template(#content(b("t"))),style(".x > .y { color: red }"),pre("keep"),math:math(math:mi(b("m"))))`;
  const fails = [];
  const sp = splitCapture('<!doctype html><html lang="en" class="a"><head><title>t</title></head><body class="phone" data-x="a>b">X<i>y</i>\n</body></html>');
  const spWant = { htmlAttrs: ' lang="en" class="a"', headAttrs: '', head: '<title>t</title>', bodyAttrs: ' class="phone" data-x="a>b"', body: 'X<i>y</i>\n' };
  if (JSON.stringify(sp) !== JSON.stringify(spWant)) fails.push(`splitCapture: ${JSON.stringify(sp)}`);
  const sb = splitCapture('<body class="b"><a></a></body>');
  if (sb.htmlAttrs !== null || sb.bodyAttrs !== ' class="b"' || sb.body !== '<a></a>') fails.push(`splitCapture (body only): ${JSON.stringify(sb)}`);
  const browser = await pw.chromium.launch();
  try {
    const page = await browser.newPage();
    await page.setContent('<!doctype html><html><head></head><body><div id="b"></div><div id="p"></div></body></html>');
    await page.addScriptTag({ content: `window.buildDom = ${buildDom};` });
    const r = await page.evaluate(src => {
      const xns = { 'http://www.w3.org/1999/xlink': '{xlink}', 'http://www.w3.org/2000/xmlns/': '{xmlns}' };
      const ens = { 'http://www.w3.org/2000/svg': 'svg:', 'http://www.w3.org/1998/Math/MathML': 'math:' };
      const walk = nd => {
        if (nd.nodeType === 3) return JSON.stringify(nd.data).replace(/\u00a0/g, '\\u00a0');
        if (nd.nodeType === 8) return `<!--${nd.data}-->`;
        if (nd.nodeType === 11) return `#content(${[...nd.childNodes].map(walk).join(',')})`;
        const at = [...nd.attributes].map(a => `${xns[a.namespaceURI] || ''}${a.name}=${JSON.stringify(a.value)}`).join(' ');
        return `${ens[nd.namespaceURI] || ''}${nd.localName}${at ? `[${at}]` : ''}(${(nd.localName === 'template' ? [nd.content] : [...nd.childNodes]).map(walk).join(',')})`;
      };
      const b = document.getElementById('b'), p = document.getElementById('p');
      const stats = window.buildDom(src, b);
      p.innerHTML = src;
      return { stats, built: [...b.childNodes].map(walk).join(','), parsed: [...p.childNodes].map(walk).join(',') };
    }, fixture);
    if (r.built !== expected) fails.push(`buildDom tree:\n  got  ${r.built}\n  want ${expected}`);
    if (r.parsed === r.built) fails.push('the HTML parser keeps the fixture as is: it no longer tests a rebuilt structure');
    if (r.stats.endTagMismatch || r.stats.unclosed || r.stats.elements !== 24) fails.push(`buildDom stats ${JSON.stringify(r.stats)}`);
    // preloadFonts (--preload-fonts): a declared font that no text uses starts to load; without the script it stays unloaded
    const fontStatus = async withPreload => {
      const c = await browser.newContext();
      if (withPreload) await c.addInitScript(preloadFonts);
      const pg = await c.newPage();
      await pg.route('http://parity.test/**', rt => {
        const url = rt.request().url();
        if (url.endsWith('/f.css')) return rt.fulfill({ contentType: 'text/css', body: '@font-face { font-family: Unused; src: url(/f.woff2); }' });
        if (url.endsWith('/f.woff2')) return rt.fulfill({ status: 404, body: '' });
        return rt.fulfill({ contentType: 'text/html', body: '<!doctype html><html><head><link rel="stylesheet" href="/f.css"></head><body>text</body></html>' });
      });
      await pg.goto('http://parity.test/', { waitUntil: 'load' });
      await pg.waitForTimeout(200);
      const s = await pg.evaluate(() => [...document.fonts].filter(f => f.family.replace(/"/g, '') === 'Unused').map(f => f.status).join(','));
      await c.close();
      return s;
    };
    const [preloaded, plain] = [await fontStatus(true), await fontStatus(false)];
    if (!['loading', 'loaded', 'error'].includes(preloaded)) fails.push(`preloadFonts: an unused font is "${preloaded}" with the init script (want loading, loaded or error)`);
    if (plain !== 'unloaded') fails.push(`preloadFonts: an unused font is "${plain}" without the init script (want unloaded)`);
    // thirdPartyHold (--hold-third-party): one task requests a third-party "tile" (a local server answers 150 ms after the
    // proxy passes the request on) and queues setTimeout(0) + a frame (the "zoom"). Case "own": the task also starts an
    // own request, answered after 400 ms. Case "busy": a timer queued before keeps the main thread for 800 ms, longer
    // than the idle wait. With the hold, the tile loads after the own request and after the zoom, and networkidle waits
    // for the held tile. Without the hold (a route answers the tile after 150 ms), the tile comes before the own request.
    const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');
    let served = false;
    const answerTile = res => { served = true; res.writeHead(200, { 'content-type': 'image/png' }); res.end(png); };
    const tileServer = require('http').createServer((req, res) => setTimeout(() => answerTile(res), 150));
    await new Promise(r => tileServer.listen(0, '127.0.0.1', r));
    const tileOrder = async (withHold, kase) => {
      served = false;
      const hold = withHold ? await thirdPartyHold('parity.test', (h, p) => (h === 'tiles.parity.test' ? ['127.0.0.1', tileServer.address().port] : [h, p])) : null;
      const c = await browser.newContext(hold ? { proxy: hold.proxy } : {});
      const pg = await c.newPage();
      if (hold) hold.attach(pg);
      await pg.clock.setFixedTime(new Date('2026-03-12T10:30:00Z'));
      if (!hold) await c.route('http://tiles.parity.test/**', async rt => { await new Promise(r => setTimeout(r, 150)); served = true; return rt.fulfill({ contentType: 'image/png', body: png }); });
      await c.route('http://parity.test/**', async rt => {
        if (rt.request().url().endsWith('/api')) { await new Promise(r => setTimeout(r, 400)); return rt.fulfill({ contentType: 'application/json', body: '{}' }); }
        return rt.fulfill({ contentType: 'text/html', body: '<!doctype html><html><body><script>window.__order = [];' +
          (kase === 'own' ? "fetch('/api').then(() => __order.push('own'));" : '') +
          (kase === 'busy' ? 'setTimeout(() => { const t0 = performance.now(); while (performance.now() - t0 < 800); }, 0);' : '') +
          "const img = new Image(); img.onload = () => __order.push('tile'); img.src = 'http://tiles.parity.test/5/1/2.png';" +
          "setTimeout(() => requestAnimationFrame(() => __order.push('zoom')), 0);</script></body></html>" });
      });
      const t0 = Date.now();
      await pg.goto('http://parity.test/', { waitUntil: 'domcontentloaded' });
      const servedBefore = served;
      await pg.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
      const servedAtIdle = served;
      if (Date.now() - t0 > 5000) fails.push(`thirdPartyHold: networkidle after ${Date.now() - t0} ms in case ${kase} (want under 5 s: the hold must not wait for its 15 s limit)`);
      await pg.waitForFunction(n => window.__order.length === n, kase === 'own' ? 3 : 2, { timeout: 20000 }).catch(() => {});
      const order = await pg.evaluate(() => window.__order.join(','));
      await c.close();
      if (hold) hold.close();
      return kase === 'own' && withHold ? `${order} ${servedBefore}/${servedAtIdle}` : order;
    };
    try {
      const [held, busy, unheld] = [await tileOrder(true, 'own'), await tileOrder(true, 'busy'), await tileOrder(false, 'own')];
      if (!/^(own,zoom|zoom,own),tile false\/true$/.test(held)) fails.push(`thirdPartyHold: order, then served at load/at networkidle: ${held} (want the tile after the own request and the zoom, served before networkidle)`);
      if (busy !== 'zoom,tile') fails.push(`thirdPartyHold: order ${busy} with a busy main thread (want zoom,tile)`);
      if (unheld.indexOf('tile') > unheld.indexOf('own')) fails.push(`thirdPartyHold: without the hold the order is ${unheld}: the test no longer shows a held tile`);
    } finally { tileServer.close(); }
  } finally { await browser.close(); }
  console.log(fails.length ? `self-test FAILED\n${fails.join('\n')}` : 'self-test ok: buildDom keeps nested <a>, <div> in <p>, rows without <tbody>, nested <form>, svg/xlink, entities, void elements; preloadFonts loads an unused font; thirdPartyHold passes a third-party request on after the own requests and the queued frame');
  process.exitCode = fails.length ? 1 : 0;
}

async function main() {
  const o = args(process.argv.slice(2));
  if (o['self-test']) return selfTest();
  if (!o.app || !o.route || !o.expect) { console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]); process.exit(2); }
  const ex = o.exemptions && fs.existsSync(o.exemptions) ? JSON.parse(fs.readFileSync(o.exemptions, 'utf8')) : {};
  const state = o.state || path.basename(o.expect).replace(/(\.raw)?\.html$/, '');
  if ((ex.ignoreStates || {})[state]) { console.log(`state ${state} exempt: ${ex.ignoreStates[state]}`); process.exit(0); }
  const meta = o.states ? (JSON.parse(fs.readFileSync(o.states, 'utf8'))[state] || {}) : {};
  const X = compile(ex, state);
  X.viaAppStart = !!meta.via;
  // rules may carry `routeRegex` (tested against --route): an artifact seen on some routes only
  X.rules = X.rules.filter(r => !r.routeRegex || new RegExp(r.routeRegex).test(o.route));
  const [w, h] = String(o.viewport || meta.viewport || '390x844').split('x').map(Number);
  const root = o.root || '#reactContainer';
  const mock = o.mock || meta.scenario || 'real';
  const steps = o.steps ? JSON.parse(o.steps) : (meta.steps || []);
  const flags = o.flags ? Object.fromEntries(String(o.flags).split(',').map(x => x.split('='))) : (meta.flags || {});
  const opts = { text: !o['no-text'], style: !o['no-style'], pixel: !o['no-pixel'], calls: !!o.calls, visibleOnly: !!o['visible-only'] };
  const skipKinds = new Set(String(o['skip-kinds'] === true ? '' : (o['skip-kinds'] || '')).split(',').filter(Boolean));
  const replayMode = o.replay || 'builder';
  if (!['builder', 'parser'].includes(replayMode)) { console.error('--replay builder|parser'); process.exit(2); }
  const browser = await pw.chromium.launch();
  const ctxOpts = { viewport: { width: w, height: h }, deviceScaleFactor: 1, reducedMotion: 'reduce' };
  const hold = o['hold-third-party'] ? await thirdPartyHold(new URL(o.app).hostname) : null;
  const ctx = await browser.newContext(hold ? { ...ctxOpts, proxy: hold.proxy } : ctxOpts);
  const expCtx = await browser.newContext({ ...ctxOpts, serviceWorkers: 'block' });
  if (o['preload-fonts']) for (const c of [ctx, expCtx]) await c.addInitScript(preloadFonts);
  try {
    const app = await ctx.newPage();
    if (hold) hold.attach(app);
    const u = new URL(o.route, o.app);
    u.searchParams.set('mock', mock);
    // deterministic: mocks answer at once, timing is the capture's; --latency <ms> (capture-plan `latencies` per state) when
    // a screen's look depends on data arriving after a timed check, as on TST (e.g. a 200 ms layout check)
    u.searchParams.set('latency', mock === 'loading' ? 'infinite' : String(o.latency ?? '0'));
    if (Object.keys(flags).length) u.searchParams.set('ff', Object.entries(flags).map(([k, v]) => `${k}:${v}`).join(','));
    if (o['fixed-time']) await app.clock.setFixedTime(new Date(o['fixed-time']));
    await app.addInitScript(() => { window.__osPhase = 'load'; });
    await app.goto(u.toString(), { waitUntil: 'load', timeout: 60000 });
    if (mock !== 'loading') await app.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    if (o.waitFor && mock !== 'loading') await app.waitForSelector(o.waitFor, { timeout: 30000 });
    await app.waitForTimeout(Number(o.settle || 1500));
    await replay(app, steps);
    await app.evaluate(() => document.fonts && document.fonts.ready);
    if (o['freeze-animations']) await app.evaluate(() => document.getAnimations().forEach(a => { if (Number.isFinite(a.effect.getComputedTiming().endTime)) a.finish(); else { a.pause(); a.currentTime = 0; } }));
    const sheets = await app.evaluate(() => [...document.querySelectorAll('link[rel=stylesheet]')].map(l => l.href));
    const inlineCss = await app.evaluate(() => [...document.querySelectorAll('style')].map(s => s.textContent).join('\n'));
    const actual = JSON.parse(await app.evaluate(serialize, { root, props: STYLE_PROPS, pseudoProps: PSEUDO_PROPS, attrsWanted: X.attrs }));
    const appCalls = (opts.calls || o['record-self'] || o['self-ref']) ? await app.evaluate(() => window.__osCalls || []) : [];

    if (o['record-self']) {   // the self-parity reference: what the build renders now
      fs.mkdirSync(o['record-self'], { recursive: true });
      fs.writeFileSync(path.join(o['record-self'], 'tree.json'), JSON.stringify({ route: o.route, state, mock, viewport: `${w}x${h}`, at: new Date().toISOString(), actual, appCalls }));
      fs.writeFileSync(path.join(o['record-self'], 'screenshot.png'), await app.screenshot({ fullPage: true, animations: 'disabled', caret: 'hide' }));
      console.log(`${state}: self reference recorded in ${o['record-self']}`);
      return;
    }
    let selfRef = null, replayStats = { mode: 'self-ref' }, expected, exp = null;
    if (o['self-ref']) selfRef = JSON.parse(fs.readFileSync(path.join(o['self-ref'], 'tree.json'), 'utf8'));
    else {
    exp = await expCtx.newPage();
    let html = fs.readFileSync(o.expect, 'utf8').replace(/<script\b[\s\S]*?<\/script>/gi, '');   // captured DOM must stay inert
    const head = `<meta charset="utf-8"><base href="${u.origin}/">` + sheets.map(s => `<link rel="stylesheet" href="${s}">`).join('') + (o['inline-css'] ? `<style>${inlineCss}</style>` : '');
    const htmlCls = (meta.htmlClass || '').replace(/"/g, '');
    const blank = u.origin + '/__parity_expected__';
    if (replayMode === 'parser') {   // old replay: the whole capture through the HTML parser
      html = /<html[^>]*>/i.test(html) ? html.replace(/<head[^>]*>/i, m => m + head)
        : `<!doctype html><html class="${htmlCls}"><head>${head}</head>${html}</html>`;
    } else {   // the parser builds only the shell (html/body attributes, head); buildDom builds the body content
      const d = splitCapture(html);
      const js = `try { window.__parityReplay = (${buildDom})(${JSON.stringify(d.body)}, document.body); }\n` +
        `catch (e) { window.__parityReplay = { error: String(e && e.stack || e) }; }\ndocument.currentScript.remove();`;
      await exp.route(blank + '.js', r => r.fulfill({ status: 200, contentType: 'application/javascript; charset=utf-8', body: js }));
      html = `<!doctype html><html${d.htmlAttrs ?? ` class="${htmlCls}"`}><head${d.headAttrs}>${head}${d.head}</head>` +
        `<body${d.bodyAttrs}><script src="${blank}.js"></script></body></html>`;   // a blocking script: images it adds still delay "load"
    }
    await exp.route(blank, r => r.fulfill({ status: 200, contentType: 'text/html; charset=utf-8', body: html }));
    await exp.goto(blank, { waitUntil: 'load' });
    replayStats = replayMode === 'parser' ? { mode: 'parser' } : { mode: 'builder', ...(await exp.evaluate(() => window.__parityReplay || { error: 'builder did not run' })) };
    if (replayStats.error) throw new Error(`reference replay failed: ${replayStats.error}`);
    if (replayStats.endTagMismatch || replayStats.unclosed)
      console.error(`replay: ${replayStats.endTagMismatch} unmatched end tag(s), ${replayStats.unclosed} unclosed element(s): ${o.expect} is not plain outerHTML`);
    await exp.evaluate(() => document.fonts && document.fonts.ready);
    await exp.waitForTimeout(300);
    expected = JSON.parse(await exp.evaluate(serialize, { root, props: STYLE_PROPS, pseudoProps: PSEUDO_PROPS, attrsWanted: X.attrs }));
    }
    if (selfRef) expected = selfRef.actual;
    // self runs: local origins (any port) are normalized on both sides, see origin_normalize.cjs
    const selfOrigin = selfRef ? { exp: normalizeOrigins(expected), act: normalizeOrigins(actual), refCalls: normalizeOrigins(selfRef.appCalls || []), calls: normalizeOrigins(appCalls) } : null;
    if (selfOrigin) expected = selfOrigin.exp;

    const res = diffTrees(expected.tree, selfOrigin ? selfOrigin.act.tree : actual.tree, X, opts);
    const push = d => { for (const r of X.rules) if (ruleHits(r, d)) { res.exemptionsUsed[r.id] = (res.exemptionsUsed[r.id] || 0) + 1; return; } res.diffs.push(d); };
    for (const [k, e, g] of [['html', expected.htmlClass, actual.htmlClass], ['body', expected.bodyClass, actual.bodyClass]]) {
      const f = l => l.filter(c => !X.ignoreClasses.some(r => r.test(c)));
      const miss = f(e).filter(c => !g.includes(c)), extra = f(g).filter(c => !e.includes(c));
      if (miss.length || extra.length) push({ kind: 'class', path: k, detail: `${miss.length ? 'missing .' + miss.join(' .') : ''}${extra.length ? ' extra .' + extra.join(' .') : ''}`.trim() + ' (device classes: src/shell/device.ts)' });
    }

    let pixel = null;
    if (opts.pixel) {
      const shot = async p => (await p.screenshot({ fullPage: true, animations: 'disabled', caret: 'hide' })).toString('base64');
      const [sa, sb] = [selfRef ? fs.readFileSync(path.join(o['self-ref'], 'screenshot.png')).toString('base64') : await shot(exp), await shot(app)];
      const masksA = [...res.masks.map(m => m.a), ...res.skipped.filter((_, i) => i % 2 === 0)].filter(Boolean);
      const masksB = [...res.masks.map(m => m.b), ...res.skipped.filter((_, i) => i % 2 === 1)].filter(Boolean);
      const cmp = await (await browser.newPage()).evaluate(pixelDiff, { a: sa, b: sb, masksA, masksB, threshold: X.pixel.threshold });
      const pngPath = o.out ? o.out.replace(/\.json$/, '') + '.diff.png' : null;
      if (pngPath) {
        fs.mkdirSync(path.dirname(pngPath), { recursive: true });
        fs.writeFileSync(pngPath, Buffer.from(cmp.png, 'base64'));
        // both screenshots, for the side-by-side review page (migration/tools/review_page.py)
        fs.writeFileSync(pngPath.replace(/\.diff\.png$/, '.expected.png'), Buffer.from(sa, 'base64'));
        fs.writeFileSync(pngPath.replace(/\.diff\.png$/, '.build.png'), Buffer.from(sb, 'base64'));
      }
      pixel = { ratio: Number(cmp.ratio.toFixed(5)), maxCell: Number(cmp.maxCell.toFixed(4)), maxCellRatio: X.pixel.maxCellRatio,
                diffPixels: cmp.diff, comparedPixels: cmp.compared, maxRatio: X.pixel.maxRatio,
                threshold: X.pixel.threshold, expectedSize: cmp.sizeA, buildSize: cmp.sizeB, masks: masksA.length, hotspots: cmp.hot, diffPng: pngPath };
      if (cmp.sizeA[1] !== cmp.sizeB[1] && Math.abs(cmp.sizeA[1] - cmp.sizeB[1]) > X.layoutTolerance)
        push({ kind: 'pixel', path: 'screenshot', detail: `page height ${cmp.sizeA[1]} → ${cmp.sizeB[1]}` });
      if (cmp.ratio > X.pixel.maxRatio || cmp.maxCell > X.pixel.maxCellRatio)
        push({ kind: 'pixel', path: 'screenshot', detail: `${(cmp.ratio * 100).toFixed(2)}% pixels differ (max ${(X.pixel.maxRatio * 100).toFixed(2)}%), worst 40px tile ${(cmp.maxCell * 100).toFixed(1)}% (max ${(X.pixel.maxCellRatio * 100).toFixed(1)}%), hotspots ${cmp.hot.join('; ')}; see ${o['diff-ref'] || pngPath || 'the diff png (use --out)'}` });
    }

    let callStats = null;
    if (opts.calls && !meta.auto) {
      const ref = JSON.parse(fs.readFileSync(o.calls, 'utf8'));
      const list = meta.variant && ref.variants && ref.variants[meta.variant] ? ref.variants[meta.variant] : ref.calls;
      const phases = ['load', ...steps.map((s, i) => s.label || `step${i + 1}`)];
      callStats = { phases, ...diffCalls(list, appCalls, phases, X, push) };
    }

    if (selfRef) {   // call parity against the recorded calls: same distinct calls per phase, order and repeats free
      const key = c => `${c.phase || 'load'}|${c.module || ''}/${c.action}`;
      const uniq = l => [...new Set(l)].sort();   // presence per phase: how often a call repeats depends on timing (timers, retries)
      const [ea, ga] = [uniq(selfOrigin.refCalls.map(key)), uniq(selfOrigin.calls.map(key))];
      if (ea.join('\n') !== ga.join('\n')) {
        const miss = ea.filter(k => !ga.includes(k)), extra = ga.filter(k => !ea.includes(k));
        push({ kind: 'call', path: 'calls', detail: `self reference ${ea.length} call(s), build ${ga.length}${miss.length ? '; missing ' + [...new Set(miss)].join(', ') : ''}${extra.length ? '; extra ' + [...new Set(extra)].join(', ') : ''}` });
      }
      callStats = { expected: ea.length, actual: ga.length, distinct: true };
    }
    if (skipKinds.size) res.diffs = res.diffs.filter(d => !skipKinds.has(d.kind));
    const counts = res.diffs.reduce((c, d) => (c[d.kind] = (c[d.kind] || 0) + 1, c), {});
    const full = opts.text && opts.style && opts.pixel;   // route.py also requires call parity when calls.json exists
    const report = { state, route: o.route, mock, viewport: `${w}x${h}`, flags, steps: steps.length, fingerprint: o.fingerprint || null,
      options: { ...opts, full, replay: replayMode, skipKinds: [...skipKinds], selfRef: !!selfRef }, replay: replayStats, at: new Date().toISOString(), counts, exemptionsUsed: res.exemptionsUsed, pixel, calls: callStats, diffs: res.diffs };
    if (o.out) { fs.mkdirSync(path.dirname(o.out), { recursive: true }); fs.writeFileSync(o.out, JSON.stringify(report, null, 1)); }
    const order = ['structure', 'class', 'attr', 'text', 'style', 'pseudo', 'layout', 'position', 'pixel', 'call'];
    console.log(`${state}: ` + (order.map(k => `${k} ${counts[k] || 0}`).join(', ')) + (pixel ? `; pixels ${(pixel.ratio * 100).toFixed(2)}%, worst tile ${(pixel.maxCell * 100).toFixed(1)}%` : '') +
      (Object.keys(res.exemptionsUsed).length ? `; exempted: ${Object.entries(res.exemptionsUsed).map(([k, v]) => `${k}×${v}`).join(', ')}` : '') +
      (full ? '' : ' [relaxed run: not accepted by the gate]') + (replayMode === 'parser' ? ' [replay: parser]' : ''));
    for (const d of res.diffs.slice(0, Number(o.max || 25))) console.log(`  [${d.kind}] ${d.path}: ${d.detail}`);
    if (res.diffs.length > Number(o.max || 25)) console.log(`  … ${res.diffs.length - Number(o.max || 25)} more in ${o.out || '(use --out)'}`);
    process.exitCode = res.diffs.length ? 1 : 0;
  } finally {
    if (hold) hold.close();
    await browser.close();
  }
}
main().catch(e => { console.error(e.message); process.exit(2); });
