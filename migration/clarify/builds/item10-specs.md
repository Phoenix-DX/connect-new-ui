# Item 10: spec update after the recorded answers (2026-10-29)

Scope: docs only. The six routes had answers recorded after their first `route.py spec-done`. Each `route-spec.md` is
updated and `route.py spec-done` is run again. No code file, no `.claude/settings.json`, no commit, no `git add`.
Sources: `migration/screens/<S>/questions.md`, `auto-decisions-2026-10-29.md`, the `item10-*.md` notes, the MCP facts of
`migration/clarify/review/mcp-session-2026-10-29.md`.

## Per route

| Route | Sections changed | spec-done output | Gate problems |
|---|---|---|---|
| NotificationDetails | Unclear points (Q1-Q3 settled; contract regenerated, Q2 route row, Q3 probe); new "Unknown id"; Decisions to confirm | spec recorded; a reset keeps it while its inputs are unchanged | parity default, loading, offline: stale |
| Bookmarks | States (`captured`, Q2); Calls (contract lists both operations); new "Shared blocks changed by the answers" (Q3 ItemCard_WithNotes, Q4 Input, Q5 channel row); new "Feature flags"; Unclear points; Decisions to confirm (Q2-Q5, retirement of MyBookmarks, auto rows 1, 2, 3, 11, 12) | spec recorded; a reset keeps it while its inputs are unchanged | parity default, loading, offline: stale |
| OneSchoolGlobalCarousel | Summary (capture via Bookmarks); Blocks (block form, `placement`); Entries (Bookmarks entry, Notes mock); States (`captured` for default and loading, default scenario for offline, Q4 actions menu); Unclear points; Decisions to confirm (Q1-Q5, auto rows 7 and 14) | spec recorded; a reset keeps it while its inputs are unchanged | parity default, loading, offline: stale |
| OrbitAdminMilestones | Behaviour (mock scenarios, Q1); Unclear points (Admin* ids settled, Q2); Decisions to confirm (Q1, Q2); Change requests (done); Parity | spec recorded (pack could not be generated here: coarser inputs used) | none |
| OrbitAdminMilestoneDetail | Data table (GetScanMilestoneQRCode writes); new "Server facts" (MCP rows 5, 5b, 6, 7); Unclear points (Q1, Q2 settled; F2); Decisions to confirm (auto rows 8, 9, 10, 13); Server-side notes | spec recorded (pack could not be generated here: coarser inputs used) | none |
| PassportScan | Behaviour (web camera port, `item10-camera-web.md`); Patterns used (ADR-17, `vendor/orbitpassport`); Unclear points (Q1-Q3 settled); Decisions to confirm (Q1-Q3, auto rows 4, 5, 6) | spec recorded (pack could not be generated here: coarser inputs used) | none |

Gate function: `route.build_gates` with `no_scope_guard=True`, read only. `route.py ready` was not run. The only problems
are stale parity reports of NotificationDetails, Bookmarks and OneSchoolGlobalCarousel (3 states each). The
orchestrator's final sweep clears them.

## Bookmarks: feature flags

`flags.py questions --route Bookmarks` prints nothing: no flag lacks an MCP answer or a decision. `flags.py route Bookmarks`
lists 8 candidates. The new "Feature flags" section lists them with the TST values of
`migration/knowledge/flag-values-tst.json`.

Problem to report (no decision recorded by this task): the decision on record for `getHasNewBookmarks` (key
`C2NewBookmarks`) in `migration/flags.json` is "default-only: TST value off (user, 2026-10-14)". TST has the value true
since 2026-10-21. The user retired MyBookmarks and BookmarksByGroup on 2026-10-28. The build has no reader of the flag.
The user can record the update with `flags.py decide`. `mobileDirectoryBookmarkNote` lost its BottomBar reader. Its other
readers are not checked.

## Points for the orchestrator

- The Bookmarks spec says the interim form of the two Bookmarks operations can go, because the regenerated `openapi.yaml`
  lists them (grep). The code change is outside this task.
- OneSchoolGlobalCarousel: the build note says the offline mock uses the one-school preload. Row 14 chooses the default
  scenario for offline. The spec states row 14 and asks the sweep to confirm.
- OrbitAdminMilestoneDetail: the success `QRCodeErrorTypeId` is not in MCP row 5 (auto row 8, F2). The spec records it as
  unclear.
- STE lint: the sentences and paragraphs added by this task have no error (rules 3.1 and 4.3). The remaining errors are
  older text of the specs (for example Bookmarks line 53, PassportScan lines 3, 11, 48, 137, OrbitAdminMilestoneDetail
  lines 3, 50, 106, 140, OrbitAdminMilestones lines 13, 32, 61, NotificationDetails line 15).

Tool calls: 29.
