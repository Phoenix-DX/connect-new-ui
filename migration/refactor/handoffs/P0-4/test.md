## Result
status: pass
summary: Integration run on the main tree. measure.mjs reproduces inventory.csv, routes.csv and calls-by-domain.md byte-identical (no difference to explain). `npm run ci` exit 0; bundle report matches baseline.md. The prefetch run (worktree) also passed.

## Files changed
none (test.md only; regenerated measure outputs are identical, no change)

## Commands run
- node migration/tools/refactor/measure.mjs + prettier on calls-by-domain.md -> 265 rows (237 + 28), 64 routes, 70 callAction files; cmp of the 3 outputs vs the staged copies: identical
- npm --prefix app run ci -> exit 0
- npm --prefix app run build -> exit 0; node app/build/bundle-report.mjs -> HomeFeed 730.63 kB raw / 236.40 gzip; Login 602.89 raw / 184.61 gzip (equal to baseline.md row; 0 percent over)
- cd app && npx eslint build/bundle-report.mjs -> exit 0
- Diff review: no change in openapi, mocks, css, app/src; no deleted tests; scope limited to the tool, docs and handoff files; no secrets; no screen port (no @origin needed); no behavior change.
- Prefetch run (worktree): passed (earlier test.md).

## Deviations from the brief
Note: 70 callAction files by AST scan vs 71 in the plan (developer note, gap unexplained, probably lib/api.ts). Not a failure.

## Questions for the user
none
