# Tester report: P6-G6-B-LegacyShareObject

## Result
status: pass
summary: All gate checks and review items pass. ci exit 0 (631 files, 3861 tests). Parity visual --changed ran 64 routes against both references, 0 differences; LegacyShareObject has default, loading and offline states, all OK on both. Bundle HomeFeed 244.52 (limit 248.22), Login 184.51 (limit 193.84) kB gzip.

## Files changed
none (test.md only)

## Commands run
- dev server check: http://localhost:5174/UBTConnect/HomeFeed → 200; cwd = /Users/khaitruong/Projects/connect-new/app
- npm --prefix app run ci → exit 0 (first run, no flake); 631 files, 3861 tests pass
- npm --prefix app run lint:arch → 0 errors, 70 warnings; eslint on src/pages/LegacyShareObject, src/api/share, src/api/household, src/api/locality → exit 0, no output (no warning in the step's files)
- python3 migration/tools/refactor/arch_baseline.py check → exit 0 (69 warnings, 69 baseline rows, 0 new, 0 gone)
- refactor_parity.py --app http://localhost:5174 --level visual --changed --ref both --report app/docs/refactor/reports/P6-G6-B-LegacyShareObject.md → exit 0; outsystems 64/64 clean, self 64/64 clean; LegacyShareObject default/loading/offline OK on both
- npm --prefix app run build && bundle-report.mjs HomeFeed Login LegacyShareObject → HomeFeed 244.52 kB gzip (limit 248.22), Login 184.51 (limit 193.84), LegacyShareObject 205.64
- git diff --cached for api/share, api/household, api/locality: 0 removed lines in all three, so no ConnectShare line and no existing household/locality block is lost

## Diff review
1. openapi.yaml, src/mocks fixtures, public css: no change. pages/LegacyShareObject/mocks.ts changes only an import line (wire types now from @/api/share). PASS
2. Deleted files: api.ts, types.ts (no tests); ScreenBlock_ShareObject.tsx renamed to ShareObjectView.tsx. No test deleted; new tests added. PASS
3. Scope: only LegacyShareObject, api/share, api/household, api/locality and handoff/state/log files. PASS
4. @origin: present in ShareObjectView, ProfileList, useShareObject, useProfileList. PASS
5. Not a move step. n/a
6. Change step, no unrequested behavior change seen. Both hooks use restore to the start state, as the old port kept no variables; OnReady in an effect as before. PASS
7. No secret, password, PIN or email in added lines. PASS

## W23 (old port at HEAD vs new)
- Old ScreenBlock_ShareObject: OnReady ran in a useEffect with no unmount guard; only setState after awaits. New useShareObject: `write` skips dispatch only; fetchHouseholdShareCard / fetchCommunityBusinessShareCard and exceptions (raiseToFlowHandler via useFlowState) still run. No skipped side effect.
- Old ProfileList: share call (HEAD lines 137-160), showFeedbackMessage (152) and onSubscriptionDenied (160) ran with no guard. New useProfileList: shareObject call, showFeedbackMessage and `eventsRef.current.onSubscriptionDenied()` run unconditionally; only `write(...)` state patches are skipped after unmount. The GetAvailableUsers OnAfterFetch dispatch stays in an effect, as in the old effect. No app-level side effect skipped. PASS

## Deviations from the brief
none

## Questions for the user
none
