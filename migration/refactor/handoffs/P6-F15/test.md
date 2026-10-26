## Result
status: pass
summary: Login first load 193.08 -> 186.87 kB gzip (-6.21, target <= 190.6); HomeFeed 245.51 (limit 236.40 +5% = 248.22). Parity strict --all, both references: 64/64 clean, call check included. ci, arch baseline and diff review pass.

## Files changed
none (test.md only)

## Commands run
curl 5174 /UBTConnect/HomeFeed -> 200; vite cwd = <root>/app
npm --prefix app run ci -> exit 0
node app/build/bundle-report.mjs -> HomeFeed 245.51 gzip, Login 186.87 gzip
python3 migration/tools/refactor_parity.py --level strict --all --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P6-F15.md -> exit 0; outsystems 64/64 clean, self 64/64 clean
python3 migration/tools/refactor/arch_baseline.py check -> exit 0 (47 warnings, 0 new, 0 gone)
npx eslint on changed files -> 0 errors, 4 warnings, all pre-existing (components/version rule 4 imports, not in changed lines); the two deep imports add none

## Diff review
1. openapi, mocks, css: untouched. Pass.
2. Tests: the two describe blocks moved from actions.test.ts to unsupportedVersion.test.ts. Pass.
3. Scope: only the files named in the step. Pass.
4. @origin: no new screen/block port (new module is an action split; origin cited in its JSDoc). Pass.
5. n/a (change step).
6. Behavior: only import paths and the move of get_IsUnsupportedVersion/System with identical body; no behavior change. startup.ts imports statically (no import() call), same order. Pass.
7. No secret in the diff. Pass.

## Deviations from the brief
none

## Questions for the user
none
