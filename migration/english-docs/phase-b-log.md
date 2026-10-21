# Phase B log

One line for each reviewed batch: meaning fixes by the reviewer, stale facts corrected with evidence, notes.
Details are in the reviewer reports of the session (2026-10-21).

| Batch | Files | Meaning fixes | Stale facts corrected | Notes |
|---|---|---|---|---|
| route-03 | 5 | 4 | 12 | AssembleEvents Q2: the Start URL text is the UTC instant (`yyyy-MM-ddTHH:mm:ss.fffZ`), not the wall-clock text. LegacyShareObject Q2 stays provisional. |
| route-02 | 5 | 0 | 13 | Open for the user: the code comment `app/src/screens/LDM_EventDetail_V2/index.tsx:15` says ContactByEmailLDMCoordinator "is not built yet" (route code: a change needs a re-stamp). |
| route-04 | 5 | 1 | 20 | Lost nesting restored (Assemble_BrowseByCountry). Proposed exemptions now point to `parity-exemptions.json`; parity rows follow `parity/*.json` (2026-10-17). |
| route-01 | 5 | 2 | 15 | AssembleDetail `__Error` label is "subtitle" (compiled input). MessageList §9 scroll rule follows the compiled OnScrollEnding. Open for the user: `CR-MessageList-2.md` still says "Status: open", but the work is done (files in `app/public/os-assets/UBT_CW/img/`). |
| route-05 | 6 | 2 | 20 | A dropped cause restored (BrowseCountries); a subject change undone (EventDetail §13). |
| route-06 | 5 | 2 | 15 | A false clarification removed: the HouseholdCarousel adapter calls ActionUpdateItem_MarkAsRead (it does not "do nothing"). An invented actor ("the team") removed (PINRegister). |
| route-07 | 5 | 2 | 10 | A browser popup window is not a tab (AcceptPendingPolicies); "mid-animation" restored (Splash). Out of the batch: `CR-QRCodeGenerate-1.md` line 8 still says "pending orchestrator answer". |
| route-08 | 5 | 2 | 15 | MyEntertaining: two DOM nesting errors of the writer fixed. Open for the user: Updates_SingleList §14 "None open" vs CR-Updates_SingleList-1 "Status: open"; Notifications Q4 call-order exemption not in `exemptionsUsed`. |
| route-09 | 5 | 2 | 12 | ContactUsDetails structure nesting restored (compiled view :684-1195); LDM_Email_V2 "would show" → "can show" undone. Open for the user: TransportDetail Q2 answer says "to confirm with the user". |
| route-10 | 5 | 1 | 20 | An added actor removed (EmailContact "the developer"). Profile keeps 2 lint errors: two long lines of its component tree (nested list), accepted. Open for the user: MyBookmarks Q3 "no source; to confirm with the user". |
| route-11 | 5 | 3 | 10 | MilestoneDetail "not possible" → "was not possible" (a result, not a rule); FeedItemDetail subject and reason restored. 3 accepted lint errors: long component tree lines (ContactUsMenu, MilestoneDetail, Search). |
| readme-01 | 26 (14 changed) | 0 | 0 | Approved without fixes. |
| readme-03 | 25 (17 changed) | 0 | 0 | Approved without fixes. |
| route-12 | 5 | 3 | 15 | ConnectShare: the original does not clear the timer (ensureControllerAlive stops it); OrbitAdminEventDetail: the block, not the screen, sends ScannerAdminInfo; PINChange: added actor removed. Open for the user: Services "fixture review by the user is pending" (the user review of 2026-10-15 may not cover the re-recorded fixture). |
| readme-02 | 25 (15 changed) | 1 | 0 | SharePopup: "the dialog shows an entity" → "the dialog is open for an entity". |
| readme-05 | 25 (12 changed) | 0 | 0 | Approved without fixes. |
| readme-04 | 25 (13 changed) | 0 | 0 | Approved; all four flagged rewordings confirmed in the code. |
| readme-06 | 26 (13 changed) | 1 | 0 | Embedded_FeedCMS: the condition of "the original throws" restored. Its guard ERR is a tokenizer false positive (inline code broken across two lines); the reviewer checked the text by hand. |
| readme-07 | 25 (11 changed) | 1 | 0 | HouseholdDetails_Block: the block pack tool (not the captures) collapses the built children. |
| readme-08 | 25 (13 changed) | 1 | 0 | ErrorScreen: "page" restored (`.main-content` is an element of the document, not a screen). |
| readme-09 | 25 (13 changed) | 1 | 0 | Assemble_FilterLocalityByCountry: "instead" added back (chevron-down or a blue chevron-up). |
| other-01 | 6 | 0 | 5 | PWA plan: summary and status line follow the later sections (F2 answered 2026-10-17; phase 1 done); rows of 2026-10-16 keep the old text with the newer state added. |
| other-02 | 8 | 2 | 0 | pwa.md: the NetworkFirst reason stays a hypothetical; the empty Orbit table is a rule (no sync on this device), not an event. |
| other-04 | 8 | 3 | 0 | shell-observed U3 stays an open question; shell-facts U9 and the OrbitLanding cache sentence back to the original meaning. |
| other-05 | 10 | 2 | 0 | runtime-sources: the standing rule stays a permission ("can be fetched"), not an order; pwa-tst-service-worker: "should" stays a recommendation. |
| other-03 | 8 | 2 | 1 | shell.md: the Back-queue stop condition covers all handlers again; the `?mocksession` "until the screens exist" end date is outdated (parity still uses `cloneQuery`). "DOM capture test" kept (it compares with a TST capture, not a test-tool snapshot). |

## Totals (2026-10-21)

- 26 batches, 328 files: 61 route specs, 227 shared README files, 40 other docs. 232 of the 342 files of the pilot and
  phase B changed; the others were already clear.
- Reviewers fixed 38 meaning problems that the writers made. They corrected 183 stale facts with evidence.
- Subagent tokens of phase B: 4.52 M (writers 2.49 M, reviewers 2.03 M). Estimate was 5.1–6.8 M.
- Final checks: lint 5 errors, all long lines of component trees written as nested lists (ContactUsMenu, MilestoneDetail,
  Profile ×2, Search). The guard reports ERR on 27 files, all from intended corrections (stale facts, quote
  translations in headings) or one tokenizer false positive (Embedded_FeedCMS).
- `route.py spec-done` for all 64 routes after the last change; `route.py plan`: 64 finished.
