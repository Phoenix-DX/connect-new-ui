## Result
status: pass
summary: Rerun after tool fix (also verifies P6-F12): diffcheck --move ok with origin tags 10; bundle report finds Login. Earlier: all gates pass (ci, parity strict 64/64 both refs, bundle within 5%, diff review) except `rf.py diffcheck --move`, which exits FAIL only because of the 10 `@origin` lines that the plan requires in step A. Two tool gaps: diffcheck rejects @origin lines; bundle-report.mjs looks for screens/<R>/index.tsx and cannot find the new route chunks.

## Files changed
none (gate tool wrote app/docs/refactor/reports/P6-G1-A.md)

## Commands run
- dev server http://localhost:5174 → 200, cwd = /Users/khaitruong/Projects/connect-new/app
- npm --prefix app run ci → exit 0
- npm --prefix app run lint:arch → exit 0; 7 rule-9 (legacy/os importer) warnings in src/pages/{Profile,Menu,AcceptPendingPolicies}, same imports as before the move (path rename only); 1 components/ warning outside the step
- refactor_parity.py --app http://localhost:5174 --level strict --changed --ref both → exit 0, PASS; outsystems 64/64 clean, self 64/64 clean, 0 new differences
- npm run build + bundle-report.mjs → HomeFeed 244.43 kB gzip (baseline 236.40, +3.4%); Login "route chunk not found" (script hard-codes screens/<R>/index.tsx). Measured with a temporary copy of the script patched to pages/<R>/<R>Page.tsx (copy removed): Login 192.48 kB gzip (baseline 184.61, +4.3%). Both under +5%.
- rf.py diffcheck --move → FAIL: renames 61; 10 "NOT A MOVE" lines, all the added `/** @origin UBTConnect.<flow>.<R> */` line of each <R>Page.tsx; other files: ledger.csv (master), reports/P6-G1-A.md (gate), tools/refactor/add-origin-g1.py (dev helper). No other logic line flagged.

## Diff review
1. openapi.yaml, mocks fixtures, public/css: no change. Pass.
2. No test file deleted; Profile.test.tsx moved, import './index' -> './ProfilePage'. Pass.
3. Scope: only the 10 G1 routes plus 5 codemod import rewrites (Menu, AcceptPendingPolicies, Profile) and the helper script. Pass.
4. @origin on all 10 <R>Page.tsx. Pass.
5. No logic change beyond import paths and the @origin lines (checked the full non-origin diff). Pass.
6. n/a (move step).
7. No secret, PIN or email in the diff. Pass.

## Deviations from the brief
none

## Questions for the user
Master: the diffcheck FAIL is caused only by the @origin lines the plan asks for in step A; accept it, or change the tool to allow `@origin` lines. bundle-report.mjs should be updated to find pages/<R>/<R>Page.tsx (needed for later P6 steps too).

## Rerun (verifies P6-F12)
- rf.py diffcheck --move -> ok; renames 61, origin tags: 10. Other files: ledger.csv (master), reports/P6-G1-A.md (gate report), tools/refactor/add-origin-g1.py (untracked dev helper; one-shot script that prepends the 10 @origin lines; it belongs to the step and may be committed, or dropped since the work is done).
- npm run build exit 0; bundle-report.mjs: HomeFeed 244.43 kB gzip (baseline 236.40, +3.4%), Login 192.48 kB gzip (baseline 184.61, +4.3%, route chunk LoginPage found). Both under +5%.
