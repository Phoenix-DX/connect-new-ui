# context-018 · All 41 in-scope screens built (2026-10-15, auto mode)

## Result
- 41/41 `build` screens finished (`route.py plan`: skip (finished) 41). Waves 4–7 completed in auto mode after context-017:
  wave 4 rest, wave 5 (9), wave 6 (2), wave 7 (2). Foundation batches F4a/F4b, F5, F6, F7a/F7b; waves 5–7 blocks W5-A/W5-B
  (12 blocks, catalog queue 0). Regression sweep over all finished routes: see "Open issues".
- CI green twice before every finish batch (252 test files, 1080 tests at the end).

## Decisions (who, date)
- 64 auto-accepted answers (user instruction 2026-10-15 16:59): full list `migration/knowledge/auto-decisions-2026-10-15.md`.
- **ADR-8** (auto-accepted, for review): bookmark sync replaces LocalBookmark rows in one IndexedDB transaction (original: two);
  `app/docs/known-original-bugs.md` B5.
- **ContactByEmailMember Q4 NOT the recommended option**: CR-ContactByEmailMember-2 rejected (TST renders `rows`; capture stripped it).
- **To confirm with the user (no source)**: LegacyShareObject Q2 (GetAvailableUsers rule), MyBookmarks Q3 (C2 bookmarks in
  GetGroupSummaries), ConnectShare Q1 (Get_ShareDetails error message). Conservative mocks in place.
- User, 2026-10-15 evening: at most 2 subagents in parallel (memory `feedback-review-and-cost`).

## Facts learned (evidence)
- capture.js dropped `rows`/`maxlength` (KEEP_ATTR); now kept. Textarea exemptions on ContactUsDetails / ContactByEmail*.
- App validation messages come from `UBTConnect.languageResources.js` ("This field is required.", "Enter a valid email.");
  `app/src/components/OSValidation/` ports the runtime (CR-Profile-2).
- MemoryClientCache UnlimitedTimeToLiveSeconds = 604800 s; Legacy_Share / ContactFlow handleError → App_Common handleError.
- TST static scripts fetched under the standing rule: `migration/knowledge/runtime-sources.md` (6 new files).

## Files changed (tooling)
- `parity_check.cjs`: JSON-string tree, `appStartCalls` (via states), rule `detailRegex`, rule `routeRegex`.
- `capture.js` (rows/maxlength), `migration/stack.json` rules (src/vendor import root, NO-WIRE lookbehind),
  `migration/capture-plan.json` (scenarios Menu=householder, Profile=spouse; latencies HouseholdDetails default 600).

## Open issues
- Backlog in `migration/foundation-plan.md`: request timeouts in callAction; Locality_Details uncaptured tags; Login /
  ContactUsDetails onto OSValidation; block instances as validation scopes; bookmark 91001 fiction vs Locality mock.
- Regression sweep (2026-10-15 23:48): 41/41 routes re-run; 40 clean, Search loading pixel 0.66% (focus border of the FocusOnReady input + masked badge glyph width) → rule CAPTURE-FOCUS-BADGE-SEARCH-LOADING-PIXEL, Search re-stamped; ContactByEmail* re-stamped after F7b.

## Next
User review of the auto decisions above; then the phase after the mock build (backend / production plan).
