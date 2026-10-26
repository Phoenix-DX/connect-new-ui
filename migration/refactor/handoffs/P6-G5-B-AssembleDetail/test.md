## Result
status: pass
summary: ci, arch baseline (69 rows, 0 new, 0 gone), bundle and the visual parity (both refs) pass; the only parity difference (HostSurvey, outsystems ref, an unrelated route) did not repeat in 2 reruns. Rule 4 and W23 hold; the diff review has no finding.

## Files changed
migration/refactor/handoffs/P6-G5-B-AssembleDetail/test.md
app/docs/refactor/reports/P6-G5-B-AssembleDetail.md (written by the parity tool; it records the first run, with the HostSurvey flake)

## Commands run
- dev server http://localhost:5174 → 200; cwd of vite is /Users/khaitruong/Projects/connect-new/app
- `npm --prefix app run ci` → exit 0 (608 files, 3666 tests, build ok; no flake)
- `python3 migration/tools/refactor/arch_baseline.py check` → exit 0, 69 warnings, 69 baseline rows, 0 new, 0 gone (the 6 owned rows are deleted from the csv)
- `npm --prefix app run lint:arch` → 0 errors, 70 warnings (all in the baseline); `npx eslint` on the changed folders (containers/AssembleSummaryCard, components/assemble/AssembleSummaryCard and VirtualMeetingUrl, pages/AssembleDetail, pages/AssembleEvents, platform/feedback/flowErrors.ts) → exit 0
- `refactor_parity.py --level visual --changed --ref both --app http://localhost:5174` → exit 1. 80 changed files; the re-export in platform/feedback/flowErrors.ts is a "global path", so all 64 routes ran (298 runs). outsystems 64 routes, 63 clean, 1 with a difference: HostSurvey/default style 1, layout 2, position 1. self 64/64 clean. AssembleDetail and AssembleEvents: clean on both refs.
- Rerun `--routes HostSurvey AssembleDetail AssembleEvents --ref both` twice → PASS both times (3/3 clean on outsystems and on self). HostSurvey is not touched by this step (no file of it in the diff), and the difference did not repeat: a render flake, not a new difference.
- `npx vite build` + `node app/build/bundle-report.mjs HomeFeed Login AssembleDetail AssembleEvents` → HomeFeed 244.39 kB gzip (limit 248.22), Login 184.42 (limit 193.84), AssembleDetail 244.98, AssembleEvents 232.20
- Rule 4: grep of `@/api|platform|containers|pages|app` and the relative forms in components/assemble/AssembleSummaryCard and VirtualMeetingUrl (code, tests, stories) → no match
- W23: see the review below

## Review
1. openapi.yaml, src/mocks, public/UBTConnect/css: no change. pass
2. Deleted files: api.ts, types.ts, 4 multi-block tsx files; no test file deleted. pass
3. Scope: the files outside AssembleDetail are the two components, the new container, the AssembleEvents caller AssembleSummary_List.tsx, platform/feedback/flowErrors.ts (one re-export of UserException) and the baseline csv. All named in dev.md and needed by the step (the 6 owned rows). pass
4. @origin: every new .tsx that ports a block carries one. pass
5. n/a (change step)
6. Behavior: none found. Parity is clean on both refs; the developer's old-vs-new harness reports equal snapshots (AssembleDetail 139/139, AssembleEvents 84/84; not rerun by me). One note, not a failure: useAssembleEventDetail.ts line 88 skips onUpdateTitle after unmount (the old port at HEAD called it always). It writes only the title state of the parent AssembleDetailBlock, which unmounts with the child (the child is always rendered inside it, and the key sits on the parent), so no observable difference.
7. Secrets: none. The fixtures with `@example.org` addresses and the mock meeting passcode in tests are fictional.

W23: no app-level side effect is skipped after unmount. useAssembleEventDetail: the service interruption message (showUnknownErrorMessage), the call and the reducer-free path run; isAlive guards state writes only (plus the note above). useAttendeeSubdivision (lines 96, 103-124): confirmAction, toggleBookmarkItem, setPreloadObject, navigation run after unmount; only write() is guarded. useAssembleEventContact: showFeedbackMessage, onEmailContact and the navigation are not guarded; only setPopupData and setCallPopup are. useAssembleEventContactList: state write only. Holds.

## Deviations from the brief
- `--changed` expanded to all 64 routes because of the flowErrors.ts re-export; I ran it as the brief says.

## Questions for the user
none
