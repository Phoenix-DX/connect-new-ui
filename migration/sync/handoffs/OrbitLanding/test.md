# Test: OrbitLanding

## Result
status: pass
summary: Parity, consistency, arch and vitest pass. The scope guard exits 1 on one file that this item did not change (app/.knip-known-unused.json, from the master checkpoint commit 8454500b).

## Commands run
- sync.py scope OrbitLanding: exit 1; "changed 1 file(s) outside its scope: app/.knip-known-unused.json" (diff base a71b8fbd...HEAD; last commit of the file is 8454500b, "master checkpoint", knip baseline rows removed). Not in dev.md; master file, not an OrbitLanding change.
- route.py parity OrbitLanding --app http://localhost:5173: clean. default, loading, offline, popup-filters, popup-filters-closed, popup-sort: all counts 0 (structure, class, attr, text, style, pseudo, layout, position, pixel, call). Pixels 0.00-0.06%, worst tile 8.1% (popup-sort, under exemption ORBITLANDING-POPUP-TOP-AND-RADIO-CHECKED).
- consistency_check.py --screen OrbitLanding: OK
- npm --prefix app run arch: no dependency violations (139 known ignored)
- vitest run src/pages/OrbitLanding: 4 files, 48 tests passed
- typecheck, eslint: not run (no code change in this item)
- dev server: 200, cwd = <root>/app

## Diff review
1. Protected paths: no change from this item. app/src/mocks/fictional/notifications.ts and Directory_Updates/mocks.ts changed, but they belong to Notifications and Updates_SingleList (granted).
2. No code change in OrbitLanding paths; the only changes are the fresh capture, analysis and parity files.
3. No test deleted.
4. @origin tags: untouched.
5. No new CSS, inline style, fetch, storage or console.log (no code change).
6. Mock data: not changed.
7. Secrets: I did not open .auth or .raw; the diff has only capture and analysis files.
8. dev.md: states "none" for code; the capture files are named as a group (acceptable).

## Failures
- Scope guard exit 1 (app/.knip-known-unused.json). The master can grant or accept it; no OrbitLanding action is needed.

## Questions for the user
none


## Master verification (2026-11-07)
`app/.knip-known-unused.json` is the master's baseline edit (two stale rows removed after the CountryList cleanup); `sync.py scope` now allows the baseline files and exits 0. Status set to pass by the master; every other check passed.
