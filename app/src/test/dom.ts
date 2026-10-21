import { expect } from 'vitest';

/* DOM snapshot check of a shared block against a captured state (references/foundation-and-freeze.md, step 5).
   Same dimensions as the parity check where jsdom can tell: structure (tags, children), classes, data-block,
   role / aria-* / type / tabindex, the inline style attribute (the capture's own inline styles), and static text.
   Ignored: ids (generated per instance by OutSystems), data-container / data-expression (runtime markers), text that
   the capture masked (•), and the content of nested blocks marked `<!-- nested block … -->` in a block pack. */
export interface DomDiff {
  path: string;
  kind: 'structure' | 'class' | 'attr' | 'style' | 'text';
  expected: string;
  actual: string;
}

const ATTRS = ['data-block', 'role', 'type', 'tabindex'];

const classes = (el: Element) => [...el.classList].sort().join(' ');
const style = (el: Element) =>
  (el.getAttribute('style') ?? '')
    .split(';')
    .map((d) => d.trim().replace(/\s*:\s*/, ': '))
    .filter(Boolean)
    .sort()
    .join('; ');
const ownText = (el: Element) =>
  [...el.childNodes]
    .filter((n) => n.nodeType === 3)
    .map((n) => n.textContent ?? '')
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
const attrsOf = (el: Element) =>
  [...el.attributes]
    .map((a) => a.name)
    .filter((n) => ATTRS.includes(n) || n.startsWith('aria-'))
    .sort();
const isNestedMarker = (el: Element) =>
  [...el.childNodes].some((n) => n.nodeType === 8 && (n.textContent ?? '').includes('nested block'));

function compare(exp: Element, act: Element, path: string, out: DomDiff[], text: boolean) {
  if (out.length >= 50) return;
  if (exp.tagName !== act.tagName) {
    out.push({ path, kind: 'structure', expected: exp.tagName.toLowerCase(), actual: act.tagName.toLowerCase() });
    return;
  }
  if (classes(exp) !== classes(act)) out.push({ path, kind: 'class', expected: classes(exp), actual: classes(act) });
  for (const name of new Set([...attrsOf(exp), ...attrsOf(act)])) {
    const e = exp.getAttribute(name) ?? '(none)';
    const a = act.getAttribute(name) ?? '(none)';
    if (e !== a) out.push({ path: `${path}@${name}`, kind: 'attr', expected: e, actual: a });
  }
  if (style(exp) !== style(act)) out.push({ path, kind: 'style', expected: style(exp), actual: style(act) });
  if (isNestedMarker(exp)) return; // the nested block is checked by its own tests
  const et = ownText(exp);
  if (text && !et.includes('•') && et !== ownText(act))
    out.push({ path, kind: 'text', expected: et, actual: ownText(act) });
  const ec = [...exp.children];
  const ac = [...act.children];
  if (ec.length !== ac.length) {
    out.push({ path, kind: 'structure', expected: `${ec.length} children`, actual: `${ac.length} children` });
  }
  ec.forEach((c, i) => {
    const other = ac[i];
    if (other) compare(c, other, `${path} > ${c.tagName.toLowerCase()}[${i}]`, out, text);
  });
}

/** Differences between a rendered element and the captured HTML of the same element (outer HTML). */
export function diffAgainstCapture(actual: Element, capturedHtml: string, opts: { text?: boolean } = {}): DomDiff[] {
  const tpl = document.createElement('template');
  tpl.innerHTML = capturedHtml.trim();
  const expected = tpl.content.firstElementChild;
  if (!expected) throw new Error('captured HTML has no element');
  const out: DomDiff[] = [];
  compare(expected, actual, actual.tagName.toLowerCase(), out, opts.text ?? true);
  return out;
}

/** Test assertion: the rendered element matches the captured state. */
export function expectToMatchCapture(actual: Element | null, capturedHtml: string, opts: { text?: boolean } = {}) {
  if (!actual) throw new Error('nothing rendered');
  expect(diffAgainstCapture(actual, capturedHtml, opts)).toEqual([]);
}
