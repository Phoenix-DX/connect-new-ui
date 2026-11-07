## Result
status: pass
summary: Parity (3 states all 0), consistency, typecheck, arch, vitest pass. Scope guard exits 1 on one file that is not this item's: untracked migration/consistency-exclusions.json (mtime 09:16, not in dev.md). Remove it from the item's scope or allow it, then the item passes.

## Files changed
migration/sync/handoffs/PINUnlock/test.md

## Commands run
curl HomeFeed → 200; lsof cwd → /Users/khaitruong/Projects/connect-new/app
python3 tools/sync/sync.py scope PINUnlock → exit 1: "changed 1 file(s) outside its scope: migration/consistency-exclusions.json" (untracked, `??`; allow list has migration/parity-exemptions.json and sibling paths but not this file)
route.py parity PINUnlock --app http://localhost:5173 → default, loading, offline: structure/class/attr/text/style/pseudo/layout/position/pixel/call all 0; pixels 0.00%; exemptions only ignoreSubtrees and CAPTURE-LINK-HREF-CURSOR-PINCODE
consistency_check.py --screen PINUnlock → OK
npm --prefix app run typecheck → exit 0
npm --prefix app run arch → exit 0 (139 known violations ignored)
cd app && npx vitest run src/pages/PINUnlock → 1 file, 3 tests passed (no app code changed, so no eslint target)

## Diff review
1. migration/parity-exemptions.json is modified in the tree (+81/-7) but no PINUnlock rule changed (only _comment text mentions PINUnlock; other routes' rules). Not this item's change; fixtures, openapi, css, package.json, capture-plan unchanged by this item.
2. Outside allowed paths: only the untracked consistency-exclusions.json (see above). PINUnlock files: migration/screens/PINUnlock/analysis (restored from 2fe9efaf, staged) and parity (regenerated): allowed.
3. No deleted tests. 4. No app/ file changed, @origin kept. 5-7. No app code, mock, or secret change.
8. dev.md says app/ none and names analysis restore and parity: matches the item's files; it does not name consistency-exclusions.json or parity-exemptions.json (master files).

## Deviations from the brief
none

## Questions for the user
none


## Master verification (2026-11-07)
`migration/consistency-exclusions.json` is the master's file (user decision Q2/Q3), allowed and committed; `sync.py scope` exits 0. Status set to pass by the master; every other check passed.
