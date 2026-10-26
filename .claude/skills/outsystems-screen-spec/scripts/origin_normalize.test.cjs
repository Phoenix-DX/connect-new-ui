'use strict';
// Run: node --test .claude/skills/outsystems-screen-spec/scripts/origin_normalize.test.cjs
const test = require('node:test');
const assert = require('node:assert');
const { normalizeOrigins } = require('./origin_normalize.cjs');

test('localhost and 127.0.0.1 origins with any port are equal after normalization', () => {
  const a = normalizeOrigins('url("http://localhost:5175/mock-images/a.svg")');
  const b = normalizeOrigins('url("http://127.0.0.1:5174/mock-images/a.svg")');
  assert.strictEqual(a, b);
  assert.strictEqual(a, 'url("http://localhost:*/mock-images/a.svg")');
});

test('walks objects and arrays, leaves other strings and values alone', () => {
  const out = normalizeOrigins({ attrs: { src: 'http://localhost:5173/x.png' }, list: ['https://example.com/y', 3, null] });
  assert.deepStrictEqual(out, { attrs: { src: 'http://localhost:*/x.png' }, list: ['https://example.com/y', 3, null] });
});

test('a different path still differs', () => {
  assert.notStrictEqual(normalizeOrigins('http://localhost:5175/a.png'), normalizeOrigins('http://localhost:5174/b.png'));
});
