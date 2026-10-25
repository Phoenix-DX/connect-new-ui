#!/usr/bin/env node
// Flag check (P9-2, plan v2 §3.1 rule 4). Fails in three cases:
//   1. a key of the registry (src/platform/flags/registry.ts) has no reader in src/;
//   2. a reader uses a key that is not in the registry (TypeScript fails too; this catches a literal that a cast hides);
//   3. `removeBy` of a flag is a date in the past (today, UTC). `permanent` and null never expire.
// A reader is a literal key in useFlag('K'), useFlagOn('K'), flagValue('K'), isOn('K'), in `flag: 'K'` (route table) or in
// `FLAG_x = 'K'` (a constant that a page gives to useFlag). Tests, platform/flags/, legacy/ and mocks/ do not count.
// It also prints the metric of plan v2 §7: readers of flags outside pages, hooks and containers (target 0; not a
// failure, the report is for the step P9-2 and the later reviews).
// Usage: node build/check-flags.mjs [--today=YYYY-MM-DD] [--src=<dir>] (from app/; Node 24 reads registry.ts directly)
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const appDir = resolve(import.meta.dirname, '..');
const arg = (name) => process.argv.find((a) => a.startsWith(`--${name}=`))?.slice(name.length + 3);
const srcDir = resolve(arg('src') ?? join(appDir, 'src'));
const today = arg('today') ?? new Date().toISOString().slice(0, 10);

const { FLAGS } = await import(join(srcDir, 'platform/flags/registry.ts'));
const keys = Object.keys(FLAGS);

const files = [];
(function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (/\.(ts|tsx)$/.test(entry.name) && !/\.(test|stories)\.tsx?$/.test(entry.name)) files.push(path);
  }
})(srcDir);

const CALL = /\b(useFlag|useFlagOn|flagValue|isOn)\(\s*(['"])([^'"]+)\2/g;
const ROUTE_FLAG = /\bflag:\s*(['"])([^'"]+)\1/g;
const FLAG_CONST = /\bFLAG_\w+\s*=\s*(['"])([^'"]+)\1/g;
const CALL_ANY = /\b(useFlag|useFlagOn|flagValue|isOn)\(/g;
const counted = (rel) => !/^(platform\/flags|legacy|mocks)\//.test(rel);
// pages, containers and hooks (a use* file or a hooks folder) may read a flag
const allowed = (rel) =>
  /^(pages|containers)\//.test(rel) || /(^|\/)hooks\//.test(rel) || /(^|\/)use[A-Z]\w*\.tsx?$/.test(rel);

// Registry keys that have no reader yet. Frozen and shrink-only: the check fails when a key gains a reader or leaves the
// registry (delete the row), and for any other key without a reader. Each row has a reason, an owner, an exit condition.
const UNREAD_ALLOWED = {
  mobileAssemble: {
    reason: 'reader pending: MessageDetail Assemble/Sharing parts not built (Q1, NotCaptured)',
    owner: 'MessageDetail port',
    exit: 'remove when the Assemble/Sharing parts are built',
  },
  mobileDirectoryUpdateFeedDeceasedProfile: {
    reason: 'reader pending: MessageDetail Assemble/Sharing parts not built (Q1, NotCaptured)',
    owner: 'MessageDetail port',
    exit: 'remove when the Assemble/Sharing parts are built',
  },
  getHasOrbitEventBooklet: {
    reason: 'alias of mobileOrbitEventBooklet (read in EventDetail)',
    owner: 'flag registry owner',
    exit: 'remove when the owner confirms deleting the alias',
  },
};

// Readers outside pages, hooks and containers (plan v2 section 3.1 rule 1; target 0), keyed on exact file + flag.
// BY_DESIGN: allowed for good (section 3.1 rule 2: the route table reads the flag of a route). OWNED: frozen,
// shrink-only; a new pair fails, and a pair that is gone must be deleted from the list.
const OUTSIDE_BY_DESIGN = new Set(['app/routes.ts']); // plan v2 section 3.1 rule 2: any flag
// By design, keyed on file + flag (a new flag read in the same file still fails).
const OUTSIDE_BY_DESIGN_PAIRS = {
  // app-start sync, same point as OutSystems SyncAllOrbitStaticEntities (user, 2026-10-25, F52)
  'platform/storage/localEntities/orbitStaticEntities.ts': ['mobileOrbitHostSurvey'],
};
const designPairs = new Set(Object.entries(OUTSIDE_BY_DESIGN_PAIRS).flatMap(([f, ks]) => ks.map((k) => `${f} | ${k}`)));
const OUTSIDE_OWNED = {
  // owner F35 (OutSystems helper wrappers over flagValue)
  'lib/ubtConnectUtils/actions.ts': [
    'C2NewNotifications',
    'C2NewBookmarks',
    'C2EnableC1DirectoryView',
    'C2ExtendedShare',
    'C2EnableFeed',
    'mobilePhotobook',
  ],
  // follow-up: flags via props
  'components/bookmark/ItemOptionsMenu/ItemOptionsMenu.tsx': ['C2ExtendedShare', 'WalletAccess'],
};

const used = new Map(); // key -> files
const unknown = [];
const outside = new Set();
const outsidePairs = new Set(); // 'file | flag' of literal reads outside pages, hooks, containers
for (const file of files) {
  const rel = relative(srcDir, file).split('\\').join('/');
  if (!counted(rel)) continue;
  const text = readFileSync(file, 'utf8');
  const found = [];
  for (const m of text.matchAll(CALL)) found.push({ key: m[3], call: true });
  for (const m of text.matchAll(ROUTE_FLAG)) found.push({ key: m[2], call: false });
  for (const m of text.matchAll(FLAG_CONST)) found.push({ key: m[2], call: false });
  for (const { key, call } of found) {
    if (FLAGS[key]) used.set(key, [...(used.get(key) ?? []), rel]);
    else if (call) unknown.push(`${rel}: '${key}'`);
  }
  if (CALL_ANY.test(text) || found.length) {
    CALL_ANY.lastIndex = 0;
    if (!allowed(rel) && (text.match(CALL_ANY) ?? []).length) {
      outside.add(rel);
      for (const m of text.matchAll(CALL)) outsidePairs.add(`${rel} | ${m[3]}`);
    }
  }
  CALL_ANY.lastIndex = 0;
}

const failures = [];
for (const key of keys)
  if (!used.has(key) && !UNREAD_ALLOWED[key])
    failures.push(`NO READER  ${key} (registry key; no reader in src/. Add the reader or delete the flag)`);
for (const key of Object.keys(UNREAD_ALLOWED)) {
  if (!FLAGS[key]) failures.push(`STALE ALLOW ${key} (not in the registry any more; delete it from UNREAD_ALLOWED)`);
  else if (used.has(key)) failures.push(`STALE ALLOW ${key} (has a reader now; delete it from UNREAD_ALLOWED)`);
}
const ownedPairs = new Set(Object.entries(OUTSIDE_OWNED).flatMap(([f, ks]) => ks.map((k) => `${f} | ${k}`)));
for (const pair of outsidePairs)
  if (!ownedPairs.has(pair) && !designPairs.has(pair) && !OUTSIDE_BY_DESIGN.has(pair.split(' | ')[0]))
    failures.push(`NEW OUTSIDE READER ${pair} (read the flag in a page, hook or container and pass it down)`);
for (const pair of ownedPairs)
  if (!outsidePairs.has(pair)) failures.push(`STALE OWNED ${pair} (reader is gone; delete it from OUTSIDE_OWNED)`);
for (const pair of designPairs)
  if (!outsidePairs.has(pair))
    failures.push(`STALE BY DESIGN ${pair} (reader is gone; delete it from OUTSIDE_BY_DESIGN_PAIRS)`);
for (const row of unknown) failures.push(`UNKNOWN KEY ${row} (not in the registry)`);
for (const key of keys) {
  const by = FLAGS[key].removeBy;
  if (by && by !== 'permanent' && by < today)
    failures.push(`EXPIRED  ${key} (removeBy ${by} is before ${today}; remove the flag or move the date)`);
}

for (const f of failures) console.log(f);
console.log(
  `flags: ${keys.length} in the registry, ${used.size} with a reader, ${unknown.length} unknown keys, ` +
    `${keys.filter((k) => FLAGS[k].removeBy && FLAGS[k].removeBy !== 'permanent' && FLAGS[k].removeBy < today).length} expired (today ${today})`,
);
const byDesign = [...outside].filter((f) => OUTSIDE_BY_DESIGN.has(f) || f in OUTSIDE_BY_DESIGN_PAIRS).length;
console.log(
  `readers of flags outside pages, hooks, containers: ${outside.size} = ${byDesign} by design + ${outside.size - byDesign} owned, target 0` +
    (outside.size ? ` -> ${[...outside].sort().join(', ')}` : ''),
);
for (const key of Object.keys(UNREAD_ALLOWED))
  if (FLAGS[key] && !used.has(key))
    console.log(
      `allowed without reader: ${key} (${UNREAD_ALLOWED[key].reason}; owner ${UNREAD_ALLOWED[key].owner}; ${UNREAD_ALLOWED[key].exit})`,
    );
process.exit(failures.length ? 1 : 0);
