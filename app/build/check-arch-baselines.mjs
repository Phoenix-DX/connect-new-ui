#!/usr/bin/env node
// Fails when a row of .dependency-cruiser-known-violations.json no longer occurs (P9-1, W38). The file only shrinks:
// `npm run arch` (depcruise --ignore-known) fails on a NEW violation, this script fails on a STALE row. Fix: delete the
// rows that this script prints (or regenerate with `npx depcruise-baseline src --config .dependency-cruiser.cjs
// --output-to .dependency-cruiser-known-violations.json` after the violations are fixed, never to hide a new one).
// Usage: node build/check-arch-baselines.mjs (from app/)
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const appDir = resolve(import.meta.dirname, '..');
const rowKey = (v) => `${v.rule.name} | ${v.from} -> ${v.to}`;

const known = JSON.parse(readFileSync(resolve(appDir, '.dependency-cruiser-known-violations.json'), 'utf8'));
const now = JSON.parse(
  execFileSync(
    resolve(appDir, 'node_modules/.bin/depcruise-baseline'),
    ['src', '--config', '.dependency-cruiser.cjs', '--output-to', '-'],
    { cwd: appDir, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  ),
);
const nowKeys = new Set(now.map(rowKey));
const stale = known.map(rowKey).filter((k) => !nowKeys.has(k));
for (const k of stale) console.log(`STALE ${k}  (delete this row from .dependency-cruiser-known-violations.json)`);
console.log(`dependency-cruiser baseline: ${known.length} rows, ${now.length} violations, ${stale.length} stale`);
process.exit(stale.length > 0 ? 1 : 0);
