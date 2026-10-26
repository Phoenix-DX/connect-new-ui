#!/usr/bin/env node
// Gate for unused exports and unused exported types (P9-1, W41). knip reports them; this script compares the report
// with .knip-known-unused.json (rows keyed on file | kind | name, never on line numbers or counts, sorted).
// A NEW unused export/type fails; a STALE row (no longer reported) fails too, so the file only shrinks.
// Fix a failure: use or remove the export; delete a stale row. Generated files and the legacy/os maps are on the
// ignoreIssues list of knip.json, not in the baseline.
// Usage: node build/check-unused-exports.mjs [--write] (from app/; --write only creates the first baseline)
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const appDir = resolve(import.meta.dirname, '..');
const baselinePath = resolve(appDir, '.knip-known-unused.json');

const run = spawnSync(
  resolve(appDir, 'node_modules/.bin/knip'),
  ['--include', 'exports,types', '--reporter', 'json', '--no-exit-code'],
  { cwd: appDir, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
);
let report;
try {
  report = JSON.parse(run.stdout);
} catch {
  console.error('knip did not print JSON:\n' + run.stdout + run.stderr);
  process.exit(2);
}
const kind = { exports: 'export', types: 'type' };
const now = new Set();
for (const issue of report.issues ?? []) {
  for (const key of Object.keys(kind)) {
    for (const e of issue[key] ?? []) now.add(`${issue.file} | ${kind[key]} | ${e.name}`);
  }
}
const sorted = [...now].sort();

if (process.argv.includes('--write')) {
  writeFileSync(baselinePath, JSON.stringify(sorted, null, 2) + '\n');
  console.log(`wrote ${sorted.length} rows`);
  process.exit(0);
}

const known = existsSync(baselinePath) ? JSON.parse(readFileSync(baselinePath, 'utf8')) : [];
const knownSet = new Set(known);
const added = sorted.filter((k) => !knownSet.has(k));
const stale = known.filter((k) => !now.has(k));
for (const k of added) console.log(`NEW   ${k}  (use it, or remove the export)`);
for (const k of stale) console.log(`STALE ${k}  (delete this row from .knip-known-unused.json)`);
console.log(
  `knip unused exports/types: ${known.length} baseline rows, ${now.size} found, ${added.length} new, ${stale.length} stale`,
);
process.exit(added.length + stale.length > 0 ? 1 : 0);
