import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { expect, test } from 'vitest';
import { ROUTE_CSS } from '@/app/routes.css.generated';

/* tokens.css is in the app layer, so a token wins over the value that the original CSS sets on :root. While the
   original files load, each token must equal that value on every route screen, or the token changes the rendering
   (rule of migration/tools/refactor/p8-1-tokens.py, which wrote the file). */

// Vitest runs from app/ (jsdom: import.meta.url is not a file URL)
const read = (path: string) => readFileSync(resolve(process.cwd(), path), 'utf8');
const FAMILY = /^--(color|space|font)-/;
const BYTE_ORDER_MARK = String.fromCharCode(0xfeff);

/** Hex case and white space do not change a value (prettier writes tokens.css). */
const normalized = (value: string) =>
  value
    .replace(/\s+/g, ' ')
    .replace(/\s*([(),])\s*/g, '$1')
    .trim()
    .toLowerCase();

function declarations(body: string): [string, string][] {
  return body
    .split(/;(?![^()]*\))/)
    .map((decl) => decl.split(/:(.*)/s))
    .filter((parts): parts is [string, string, ...string[]] => parts.length > 1)
    .map(([prop, value]) => [prop.trim(), value.trim()]);
}

/** Family properties set by top-level rules whose selector list holds :root or html; the last one wins. */
function rootValues(css: string): Map<string, string> {
  const text = css.replaceAll(BYTE_ORDER_MARK, '').replace(/\/\*[\s\S]*?\*\//g, '');
  const values = new Map<string, string>();
  let start = 0;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === ';' && text.slice(start, i).trim().startsWith('@')) start = i + 1;
    else if (char === '}') start = i + 1;
    else if (char === '{') {
      let depth = 1;
      let end = i + 1;
      for (; end < text.length && depth > 0; end += 1) {
        if (text[end] === '{') depth += 1;
        else if (text[end] === '}') depth -= 1;
      }
      const selector = text.slice(start, i).trim();
      const isRoot = selector.split(',').some((s) => [':root', 'html'].includes(s.trim()));
      if (!selector.startsWith('@') && isRoot) {
        for (const [prop, value] of declarations(text.slice(i + 1, end - 1))) {
          if (FAMILY.test(prop) && !/!\s*important$/i.test(value)) values.set(prop, value);
        }
      }
      i = end - 1;
      start = end;
    }
  }
  return values;
}

const tokensCss = read('src/styles/tokens.css').replace(/\/\*[\s\S]*?\*\//g, '');
const tokens = new Map(declarations(/:root\s*\{([^}]*)\}/.exec(tokensCss)?.[1] ?? ''));
const originals = new Map<string, Map<string, string>>();
const originalValues = (file: string) => {
  let values = originals.get(file);
  if (!values) {
    values = rootValues(read(`public/UBTConnect/css/${file}`));
    originals.set(file, values);
  }
  return values;
};

test('tokens.css puts the tokens in the app layer, which comes after the legacy layer', () => {
  expect(tokensCss.trim().startsWith('@layer app {')).toBe(true);
  expect(read('src/styles/layers.css')).toContain('@layer legacy, app;');
  expect(tokens.size).toBeGreaterThan(200);
  expect(tokens.get('--color-neutral-7')).toBe('#6a7178');
  expect(tokens.get('--space-base')).toBe('16px');
});

test('every token equals the value of the original CSS on :root, on every route screen', () => {
  const differences: string[] = [];
  for (const [screen, files] of Object.entries(ROUTE_CSS)) {
    const root = new Map<string, string>();
    for (const file of files) for (const [prop, value] of originalValues(file)) root.set(prop, value);
    for (const [prop, value] of tokens) {
      const original = root.get(prop);
      if (original === undefined || normalized(original) !== normalized(value)) {
        differences.push(`${screen} ${prop}: token ${value}, original ${original ?? 'not set'}`);
      }
    }
  }
  expect(differences).toEqual([]);
});
