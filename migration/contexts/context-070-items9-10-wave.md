# context-070: items 9 and 10 wave, render/route errors and the new TST screens (2026-10-29)

## Result
- Item 9 done (`../clarify/review/item9-solution.md`): a `RenderErrorBoundary` per screen; `_error.html` for root
  errors and chunk-load failures; a full page load for unknown paths (404 on dev/preview); Login redirect replaces.
- Item 10: NotificationDetails, Bookmarks, PassportScan, OrbitAdminMilestones and OrbitAdminMilestoneDetail built
  and reviewed (Fable, window 7). OneSchoolGlobalCarousel built, held at the parity step (shared block
  EntityDetailsActions). MyBookmarks and BookmarksByGroup retired (`retired.json`).
- Contract regenerated (178 operations). Pipeline (`route.py`, `scope_guard.py`, `consistency_check.py`) follows the
  page layout. Notes, Input/StaticInput, ItemCard_WithNotes and OneSchoolGlobalDetails follow the live TST code.
- Gates: `npm run ci` 724 files / 4686 tests; final sweep 65 routes, 53 clean, 12 with known TST drift; e2e:pwa 10/10.
  Commits 0bddcb0f, 1ae4e483, 04e00b21, 2601955c and the final commit of this context.

## Decisions (who, date)
- User 2026-10-29: I10-1 to I10-12 (`../clarify/review/item10-new-screens.md` §10), item 9 design §12, PassportScan
  camera re-asked (web camera as TST), scope (a): drift goes to a separate wave.
- Auto decisions, window 7 (user instruction 2026-10-29, Fable + Opus, Fable wins a split): rows 1-23 in
  `../clarify/auto-decisions-2026-10-29.md`.
- Corrected facts: the TST Bookmarks list is not empty (3 cards); TST CameraPlugin works in a PWA. Both decisions were
  asked again.

## Facts learned (evidence)
- TST: a render error in a block empties the screen and shows a toast; an unknown path gets the server 404 page
  (`../clarify/review/item9-render-route-errors.md` §7). All 37 UBTConnect flows use the App_Common handler; no
  screen checks a role (`../clarify/review/mcp-session-2026-10-29.md`).
- GetScanMilestoneQRCode writes (Orbit API + local record); the six admin milestone types: Name "Admin", Green,
  IsTransportMilestone False (MCP rows 5-7 and addendum).
- Knowledge: `../knowledge/error-handling-tst.md`, `../knowledge/runtime-sources.md` (new rows).

## Files changed
- App: the 6 pages, `platform/{feedback,navigation,device}`, `app/{router,screens}.ts*`, `build/unknownPaths.ts`,
  shared Orbit/notes-card code, `api/openapi.yaml`. Pipeline: skill scripts and docs, `stack.json`, `contract_gen.py`.

## Open issues
- Drift wave (I10-12): re-capture all routes, sort, fix per shared block (`../clarify/builds/item10-finish.md`).
- MCP: U1, PINUnlock history, success `QRCodeErrorTypeId` (F2), unknown milestone. Notes pixel band (0.58 %).

## Next
- The user's choice; proposal: the drift wave (`../clarify/RESUME.md`, "Next: the drift wave").
