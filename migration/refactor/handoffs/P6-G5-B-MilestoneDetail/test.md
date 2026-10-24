## Result
status: pass
summary: All gates pass. ci exit 0 (551 files, 3250 tests), parity visual --changed both refs 64/64 clean each, bundle HomeFeed 244.44 kB and Login 184.47 kB gzip (limits 248.22 / 193.84). Diff review has no failure; the 2 "old: crash, new: reload" paths are accepted per W27.

## Files changed
none (test.md only; gate tools wrote app/docs/refactor/reports/P6-G5-B-MilestoneDetail.md)

## Commands run
Dev server http://localhost:5174 → HomeFeed 200, cwd /Users/khaitruong/Projects/connect-new/app
npm --prefix app run ci → exit 0; 551 test files, 3250 tests passed; build ok (no rerun needed)
cd app && npx eslint src/pages/MilestoneDetail src/platform/feedback/flowErrors.ts → exit 0
npm --prefix app run lint:arch (filter MilestoneDetail) → 1 warning: rule-9 mocks.ts → legacy/os/os-wire.ts (unchanged, in baseline)
python3 migration/tools/refactor/arch_baseline.py check → exit 0; 75 warnings, 75 baseline rows, 0 new, 0 gone
python3 migration/tools/refactor_parity.py --level visual --changed --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P6-G5-B-MilestoneDetail.md → PASS; outsystems 64/64 clean, self 64/64 clean, 0 differences (MilestoneDetail in the report)
node app/build/bundle-report.mjs (after the ci build) → HomeFeed 244.44 kB gzip (limit 248.22), Login 184.47 kB gzip (limit 193.84)

## Diff review
1. openapi.yaml, mocks fixtures, public css: no change (0 diff lines in app/src/api, app/src/mocks, app/public). mocks.ts of the page only changes local types: ok.
2. Deleted test files: none deleted; 10 test files added.
3. Scope: only pages/MilestoneDetail, platform/feedback/flowErrors.ts (one re-export), tooling/handoff files. api/image and flowState are already in the base commit. ok.
4. @origin: present in page, inputs, both views, both hooks, both state files. ok (test files exempt).
5. Not a move step.
6. Change step: behavior differences are only the 2 former crash paths (back navigation with a missing optional input, and from a notification), "old: crash, new: reload", accepted per W27 (a). No other found.
7. No secret, password, PIN or email in the added lines (grep clean).
W23: useAccommodationHost.ts: state writes are guarded by isAlive (lines 128-159: ref from onReady, `write`/`popup`); onReady guards at lines 149-152. App-level effects after unmount are NOT skipped: onNavigateToHouseholdDetail, onApplicationEvent_ViewHousehold, showUpgradePopUp (lines 224-239), onApplicationEvent_CallMember (line ~318), feedbackMessageAutoClose, raiseToFlowHandler. useMilestoneWrapper.ts line 58 guards only the dispatch. No violation.

## Deviations from the brief
none

## Questions for the user
none
