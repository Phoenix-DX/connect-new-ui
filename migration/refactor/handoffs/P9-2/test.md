## Result
status: pass
summary: `npm --prefix app run ci` exits 0 with the flags step; `npm run flags` prints "4 = 1 by design + 3 owned, target 0". The check fails in all 4 proofs (temporary changes removed, git status clean in app/src).

## Files changed
none (only this test.md)

## Commands run
npm --prefix app run ci → exit 0 (includes flags, dup, unused, arch:baselines, test, vite build)
npm --prefix app run flags → exit 0: 21 keys, 18 with a reader, 0 unknown, 0 expired (today 2026-10-24); "4 = 1 by design + 3 owned, target 0"; 3 allowed-without-reader lines
Proof 1 (new unread registry key zzTempKey in registry.ts) → exit 1, "NO READER zzTempKey"
Proof 2 (new components/zzTemp/X.tsx with useFlagOn('mobilePhotobook')) → exit 1, "NEW OUTSIDE READER components/zzTemp/X.tsx | mobilePhotobook"
Proof 3 (new pages/ZzTemp/X.tsx reading allow-listed mobileAssemble) → exit 1, "STALE ALLOW mobileAssemble (has a reader now)"
Proof 4 (copy of src in scratchpad, removeBy '2026-01-01' in UNSET) → "EXPIRED mobileAssemble ..." (failures path exits 1); with --today=2025-12-31 no EXPIRED
git status after proofs → app/ only app/build/check-flags.mjs (A) and app/package.json (M); no change in app/src
Parity, bundle: not run (parity level none; ci build passed)

## Diff review
1. openapi.yaml, mocks, public css: untouched.
2. No deleted test.
3. Scope: only app/build/check-flags.mjs and app/package.json (plus handoff/log files).
4. @origin: not needed (build tool, no OutSystems port).
5/6. Tool step: no app behavior change; `ci` gains the flags step as asked. Script is .mjs in app/build, not scripts/check-flags.ts (documented deviation, matches P9-1 checks).
7. No secret, password, PIN or email in the diff.
Note: actions.ts connect_LaunchDarkly_PermissionCheck(flag) reads a non-literal key, which the literal scan cannot see (known, in dev.md).

## Deviations from the brief
none beyond the developer's .mjs choice.

## Questions for the user
none
