## Result
status: pass
summary: All gate checks pass: parity 0 in default, loading, offline (offline uses the master-extended exemption and its -PIXEL rule); consistency OK; typecheck, arch, eslint, vitest (76 tests) clean; sweep WITH DIFFS 0. Diff review clean.

## Files changed
migration/sync/handoffs/AssembleDetail/test.md

## Commands run
curl HomeFeed → 200; lsof cwd → /Users/khaitruong/Projects/connect-new/app
sync.py scope AssembleDetail → exit 0 (all inside scope)
route.py parity AssembleDetail --app http://localhost:5173 → clean; default/loading/offline all 0 in every count (pixels 0.01% / 0.00% / 0.13%); offline exempted by ...OFFLINE-EMPTY-TITLE x4 and -PIXEL x1
consistency_check.py --screen AssembleDetail → OK
npm --prefix app run typecheck → no errors
npm --prefix app run arch → exit 0 (139 known ignored)
eslint of the 3 changed files → exit 0
cd app && npx vitest run src/pages/AssembleDetail → 9 files, 76 tests passed
parity_sweep.py AssembleEvents Assemble_BrowseByCountry → both OK, WITH DIFFS 0

## Deviations from the brief
none

## Questions for the user
none

## Diff review
1 exemptions: only the master's authorized change (extended OFFLINE-EMPTY-TITLE, new -PIXEL rule); no change in fixtures, openapi, css, package.json, capture-plan.
2 nothing outside allowed paths (scope exit 0).
3 no deleted test; one test renamed and one added.
4 @origin untouched (not in the diff).
5 no new CSS, inline style, fetch, storage or console.
6 mock values fictional (Ruth Hadley, Wexley, Elm Street).
7 no secrets.
8 dev.md names all changed files (parity files by group).
