## Result
status: pass
summary: All gate checks pass on the main tree (dev server 5174 serves this repo). CI exit 0 (389 files, 2092 tests). Parity visual --changed: 64 routes, 0 differences against both references. Bundle within 5 percent of baseline. Diff review passes.

## Files changed
none (only this test.md; parity wrote app/docs/refactor/reports/P6-G1-B-AcceptPendingPolicies.md)

## Commands run
- curl http://localhost:5174/UBTConnect/HomeFeed → 200; vite cwd = /Users/khaitruong/Projects/connect-new/app
- npm run ci → exit 0; 389 test files, 2092 tests passed; build ok
- npx eslint (all added/modified/renamed src files of the diff) → exit 0
- npm run lint:arch → 181 warnings in the app, 0 errors; in the step folders only one: AcceptPendingPoliciesPage.tsx → legacy/os/os-assets (rule-9, unchanged from before; none in api/policy or flowErrors.ts)
- refactor_parity.py --app http://localhost:5174 --level visual --changed --ref both → 64 routes (shared flowErrors.ts makes all routes changed); outsystems 64 clean / 0 differences; self 64 clean / 0 differences; PASS
- npm run build && node build/bundle-report.mjs → HomeFeed 244.34 kB gzip (baseline 236.40, limit 248.2); Login 192.51 kB gzip (baseline 184.61, limit 193.84). Both within 5 percent (Login is close to the limit; the same effect appears from earlier G1 steps, not from this diff alone).
- parity_sweep.py: not run (the brief does not list it; after P0-2)

## Diff review
1. openapi.yaml, mocks fixtures, public css: no change (mocks.ts of the page only changes the import of the wire type; it is not under src/mocks). Pass.
2. Deleted files: api.ts, types.ts, Policy_Custom_AcceptPendingPolicies.tsx (renamed/replaced). No test file deleted. Pass.
3. Scope: only AcceptPendingPolicies, new api/policy, one line in platform/feedback/flowErrors.ts, move-map.csv rows. Pass.
4. @origin: present in the ported block, header, both hooks and repository. Not present in the plain support files (types, mapper, keys, hooks, index of api/policy, actions.ts, staticEntities.ts); these are domain or moved files, not new ports of a screen or block. Pass (note only).
5. Not a move step.
6. Change step: no behavior change seen. The developer's old-vs-new temporary comparison (same DOM and calls) is credible; the query key change is internal. Pass.
7. No secret, password, PIN or email found in the diff. Pass.

## Deviations from the brief
none

## Questions for the user
none
