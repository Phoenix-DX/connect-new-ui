## Result
status: pass
summary: ci passes (445 files, 2381 tests). Parity visual --changed ran all 64 routes: 64/0 against OutSystems and 64/0 against self. Arch baseline has 0 new warnings. Bundle: HomeFeed 245.91 kB (limit 248.22), Login 186.95 kB (limit 193.84).

## Files changed
none (test.md only)

## Commands run
curl http://localhost:5174/UBTConnect/HomeFeed → 200; vite cwd = /Users/khaitruong/Projects/connect-new/app
npm --prefix app run ci → exit 0 (445 files, 2381 tests, build ok)
python3 migration/tools/arch_baseline check → 61 warnings, 61 baseline rows, 0 new, 0 gone
cd app && npx eslint <35 staged changed src files> → exit 0
refactor_parity.py --app http://localhost:5174 --level visual --changed --ref both → PASS: outsystems 64/0, self 64/0 (the tool took the full set as changed)
node app/build/bundle-report.mjs → HomeFeed 245.91 kB gzip (raw 756.67), Login 186.95 kB (raw 608.95)
F17 tripwire (W21): HomeFeed margin to 248.22 = 2.31 kB (above 1.0); step change vs the last commit (245.99) = -0.08 kB (below 0.3); against the dev base 245.57 = +0.34 kB. Login 186.99 → 186.95.
Request bodies and call order: no live check of calls; covered by the dev's 12-case old-vs-new test (not rerun, temporary) and by the new repository.test.ts, hooks.test.tsx, useServices.test.tsx, Services.test.tsx, which ci ran. Repository FETCH_VARIABLES and body mapping read the same as the old api.ts.

## Diff review
1. openapi.yaml, mocks fixtures, public css: unchanged (pages/Services/mocks.ts is a route mock file; it only swaps wire types). OK
2. Deleted files: api.ts and types.ts only (not tests); replaced by api/service. OK
3. Scope: only Services, the new api/service domain and platform/feedback/bubbleErrors. OK
4. @origin: present on the page, components and repository. Not on servicesState.ts (holds Action_ChangeOrderLocal) and serviceRowOptions.ts (plain helper). Neither is a screen or block port; minor, not a failure.
5. n/a (change step)
6. No behavior change seen. Only query key changed (['Services', ...] to ['service','user']); no other reader. The dev reports DOM, calls, bodies and feedback equal.
7. No secret in the diff.

## Deviations from the brief
- The dev used `git rm`/`git mv` (staged). Changes are staged, not committed.
- The bundle rose +0.34 kB against the dev's base (245.57) but this is below the last commit's 245.99.

## Questions for the user
none
