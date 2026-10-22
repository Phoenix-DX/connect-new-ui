## Result
status: pass
summary: Gate passed. ci 0, strict parity both refs 64/64 clean, bundle within 5 percent, depcruise has 0 edges shared to screens/app/pages. F1, F2, F3 hold.

## Files changed
migration/refactor/handoffs/P3-1/test.md
app/docs/refactor/reports/P3-1.md (written by the parity tool)

## Commands run
curl http://localhost:5174/UBTConnect/HomeFeed → 200; server cwd = <root>/app
cd app && npm run ci → exit 0 (build ok)
npm --prefix app run lint:arch → exit 0; 239 violations (1 error no-circular session, pre-existing; 238 warnings, dev reported 240 → 238); no hit for shared-no-import-of-screens-or-app or pages-imported-by-own-route-only
python3 migration/tools/refactor_parity.py --level strict --changed --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P3-1.md → exit 0, PASS; outsystems 64/64 clean, self 64/64 clean
node app/build/bundle-report.mjs → HomeFeed 236.42 gzip (baseline 236.40), Login 184.71 (baseline 184.61): within 5 percent
parity_sweep.py: not run (only required before P0-2). diffcheck --move: not run (change step).
Step Check: no edge from shared/ to screens/ or app/ (depcruise, 0 hits); parity strict passed.
Follow-ups: F1 (hooks, state, mocks in containers/HouseholdDetails; handlers glob and test updated, order kept; new depcruise rule) OK. F2 (api.ts renamed to inputs.ts, types.ts folded, @origin tag) OK. F3 (docs_gen.py and move-map.mjs changed to read @origin) present in diff; checked by reading the diff only.

Diff review
1. openapi.yaml, mock fixtures, css: unchanged. src/mocks/handlers.ts and handlers.test.ts changed (code, not fixtures; asked by F1). pass
2. Deleted files: pages/HouseholdDetails/api.ts (renamed to inputs.ts) and types.ts (folded). No test deleted; householdDetailsState.test.ts moved. pass
3. Scope: 64 files, over "about 40"; explained by the codemod import rewrites for NotCaptured and by F1 to F3. Judged acceptable. pass
4. @origin: inputs.ts has it; no new port of a screen or block otherwise. pass
5. Not a move step. n/a
6. Behavior: updateItems collection moved to the shared Directory_Updates mock with the same key and seed; MSW order kept (containers group before shared); PINRegister test uses PATHS.home (same value). No behavior change seen; parity strict clean. pass
7. No secret, password, PIN or email in the diff. pass

Note: the dev.md lists 60 files; git shows 64 (includes log.md, state.json, test files of the master). No concern.

## Deviations from the brief
none

## Questions for the user
none
