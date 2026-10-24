# Test · F22-26

## Result
status: pass
summary: All gates pass. One flaky test seen in the first `npm run ci` run (passed on the 2 reruns and in the second full ci).

## Commands run
- dev server check: 200 on /UBTConnect/HomeFeed, cwd = <root>/app
- `npm --prefix app run ci` run 1 → exit 1: 1 failure, `SupperMeeting_Details.test.tsx` "a new visit after the back navigation calls both data actions again" (line 89, `isSkeleton` false right after the forward navigate). Passed 3 of 3 alone.
- `npm --prefix app run ci` run 2 → exit 0; 639 files, 3963 tests; lint 0 errors
- eslint on the 25 changed files of dev.md → exit 0, no warning
- `arch_baseline.py check` → exit 0; 72 warnings, 72 baseline rows, 0 new, 0 gone
- `refactor_parity.py --level visual --all --ref both --app http://localhost:5174` → exit 0; outsystems 64/64 clean, self 64/64 clean; report parity.md
- `npm --prefix app run build` → exit 0; bundle-report: HomeFeed 244.82 kB gzip (baseline 236.40, +3.6 %, limit +5 %), Login 184.85 (baseline 184.61)
- `vitest run src/pages/MilestoneDetail -t crash` → 3 passed (the 2 former crash paths + 1)

## Failures
none blocking. Risk: the test "a new visit after the back navigation..." is timing-sensitive under load (asserts the skeleton right after `router.navigate`, line 87-89). Suggest a follow-up to make it deterministic.

## Diff review
1. openapi.yaml, mocks, public css: no change. Pass.
2. No test file deleted. Pass.
3. Scope: the 25 files of dev.md only. HostSurvey.test.tsx, navigationGate.* in the tree belong to F25. `app/src/platform/navigation` not touched by F22-26. Pass.
4. @origin: new `useLocalitySubdivisionList.ts` has it (line 6); the new test files are tests. Pass.
5. Not a move step.
6. Behavior changes are the ones the brief asks (restore saved state, skip calls). Pass.
7. No secret in the diff (grep). Pass.

## Deviations of dev.md (checked)
- Skip rule "restored AND the saved state has the block's data" (not "restored" alone): differs from the brief text, but it is the brief's own F24 rule applied to all blocks, covered by tests ("no saved state -> call", "saved before the answer -> call"). Accepted; the master may confirm. Edge: user left before the answer -> OutSystems keeps the skeleton, the port calls again.
- Hall OnParametersChanged not added: the port never had it, it is a local bookmarks read; the restored view still runs the local bookmarks read. Consistent with the brief (not a refresh of a skipped call). Follow-up candidate.
- Contact popups restored as saved (useFlowState in useAssembleEventContact): matches the brief item 3; the popup is closed by every leaving flow.
- MilestoneDetail 2 crash paths: tested (`MilestoneDetail.test.tsx` it.each, line 163-166: restored, no call, no crash) and a hook test for restored without saved state (fetch, no crash). Pass.

## Questions for the user
none

## Re-test after loop 1

status: pass

- Diff scope: the working tree holds the whole step (uncommitted). Its file list equals the "Files changed" list of dev.md, plus the documenter Markdown files (page-template.md, CHANGELOG.md, SupperMeetingDetails/README.md, ledger, auto-decisions). The loop 1 files are the 8 test files listed in dev.md; no other app code is outside the first list. Parity of the first run stays valid.
- `npm --prefix app run ci`, run 1: exit 0, 639 files, 3963 tests passed. Run 2: exit 0, 639 files, 3963 tests passed. No flake in the files of this step.
- Review of the 8 test files:
  - No fixed timer added. Two timers remain, both older than loop 1 and not in the diff: `wait(600)` in MilestoneDetail.test.tsx (waits for a real 600 ms transition delay of the feedback message, followed by a positive assertion) and `settle()` in useSupperMeetingDetails.test.tsx (setTimeout 0, helper of other tests).
  - Each restore test waits (`waitFor`) for the state before leaving, so the later check has a stable baseline (counts 1/1/3, 6/0, 11 cards).
  - Each "no call" check runs after an effects flush (`act(async () => { await Promise.resolve(); })`) and compares to a count taken before leaving. The Details test also uses `neverAnswer`, so a hidden call would show a skeleton and fail.
  - The forward-visit test asserts the skeleton only after waiting for the 2 new calls, with never-answering handlers: it cannot be flipped by load.
  - No always-true assertion found.
