# Drift wave, WP4 + WP8: EntityDetailsActions, NotesSheet, C2 bookmarks, two flag values (2026-10-29)

Rows: `../review/drift-triage-household.md` R1, R2, R3, R5; `../review/drift-triage-messages.md` A3. User decisions
H-Q1 to H-Q3 (a), 2026-10-29 (`../review/drift-decisions-2026-10-29.md`). Source: the TST code of 2026-10-27
(`migration/screens/HouseholdDetails/analysis/sources/pretty/`).

## Changes

| Row | Change | Files |
|---|---|---|
| R1, A3 | NotesSheet in its own always-shown popup: a `<body>` portal `portal-class > popup-backdrop > popup-dialog connect-share-portal > popup-content` per block instance, before the share portal (TST DOM order), id `<scope>-$b8`, and an `OSPopupWidget showPopup` (html `popup-disable-scroll`, `aria-hidden` on `#reactContainer`) | `containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`, `__captures__/v1.html` (inline NotesSheet removed, as the new TST tree) |
| R1, A3 | Action_RefreshFetchNotes in OnReady after the C2 lookup and in Handler_AddNotesOnClick; EntityNotes state set by OnAfterFetch, Handler_OnSheetNotesChanged, Handler_OnNoteDeleted; EntityNotes sent with the contract variables | `useEntityDetailsActions.ts` |
| R1 | New input `inLocalityId` (In_LocalityId) replaces `entityExtraDataJSON`; NotesSheet In_ItemId = `<In_LocalityId>:<EntityId>` for an interchange with a locality (Notes_InterchangeId_ComposeId, ported from UBTConnect.controller.js) | `types.ts`, `entityDetailsActionsState.ts`, `useEntityDetailsActions.ts` |
| R1 | NotesSheet: In_ItemId Text (default ''), BottomSheet OnToggle → BottomSheetOnToggle (close while In_IsOpen → Handler_OnNoteSheet_Closed), footer CustomContainer `notes-sheet-footer`, CommunicationException → UserException `UBTConnect_Utils.CommunicationError` ("NoteCommunicationError"). The stylesheet was already linked per route | `components/note/NotesSheet/NotesSheet.tsx`, `README.md` |
| R2 | C2 bookmarks only: GetBookmarkCategoryId_ByEntityTypeId, GetLocalBookmarkByObjectId_C2, Local_isBookmarked / Local_BookmarkTypeId; legacy branch, Local_isBookmarked_C2, Local_BookmarkType, Local_BookmarkGroup and the flag read removed; the menu reads Local_isBookmarked | `useEntityDetailsActions.ts`, `EntityDetailsActionsContainer.tsx`, `README.md` |
| R2 (B) | C2 mock store seeded to the captured states: empty (household 42438 and the carousel households not bookmarked), school 1430 in scenario `captured`; Sync_Info_GetMain sends the C2 collection as LocalBookmarksC2; the `unlocked` test session also syncs it | `containers/EntityDetailsActions/mocks.ts`, `platform/bootstrap/mocks.ts` (reads the collection by name, no container import), `platform/session/testSession.ts` |
| R3, R5 | C2NewBookmarks on, C2EnableMaps on (registry defaults, flags.generated.json values only); `flags.py decide` for `action:getHasNewBookmarks` and `action:getHasMapsEnabled` (`--by user`, H-Q2/H-Q3 a). Locality_Details already renders the explore icon with the flag on; its click opens the not-migrated Map route, like other not-built targets | `platform/flags/registry.ts`, `platform/flags/flags.generated.json`, `migration/flags.json`, comment in `pages/Locality_Details/hooks/useLocalityHouseholdList.ts` |

Notes:
- `flags.py export` also re-added retired routes (BookmarksByGroup, MyBookmarks, New_*) to several flags. I kept only
  the two values and decisions in `flags.generated.json` (diff: 4 lines).
- Edits were made with Edit/Write and one-off exact-match Python replacements (each match asserted once).
- Orchestrator note fixed: no platform → containers import (the bootstrap mock reads the store collection
  `Connect_Bookmarks_CS.bookmarks` by name); NotesSheet imports `UserException` from `@/legacy/os/exceptions`, as its
  other exception helpers; the container mocks use the constant `BookmarkCategory.OneSchoolGlobal`, so they load no
  value of `lib/ubtConnect/actions` before the tests' `vi.mock`. `npm run arch` clean;
  `npx vitest run src/pages/EventDetail src/pages/LDM_EventDetail_V2 src/pages/Notes` passes (with my folders: 22 files, 214 tests).

## Tests

- `bookmarks.test.tsx`: Bookmark/Unmark through the C2 store with no flag; OnReady reads the C2 row with C2NewBookmarks off.
- `EntityDetailsActionsContainer.test.tsx`: NotesSheet in the body portal with id `b2-b33-$b8`, html class and
  aria-hidden while mounted and removed at unmount, DataActionFetchNotes on ready; Notes_InterchangeId_ComposeId.
- `mocks.test.ts`: the C2 seed of school 1430 (scenario `captured`, once).
- `NotesSheet.test.tsx`: CommunicationError raise, `notes-sheet-footer` around AddNote.
- `platform/flags/flags.test.tsx`: defaults of the two flags.

Checks: `tsc` clean for these files (errors seen in other packages: `api/notification/*`, `pages/Notifications/*`,
`pages/Updates_SingleList/mocks.ts`); eslint 0 errors (7 old layer warnings in NotesSheet); prettier clean; `npm run arch`
clean; `npm run dup` no clone in these files. Owned test folders pass. `src/pages/Locality_Details` has 9 failing tests
(tags 5 vs 4, flow-handler calls) in files changed by WP3; my only change there is a comment.

Page scroll (Playwright one-off, 390×844, port 5174): HouseholdDetails and Profile have `popup-disable-scroll` and
`aria-hidden`, 3 NotesSheet portals each, and the screen container scrolls (218 px, 605 px). SupperMeeting_Details and
Locality_Details scroll too. OneSchoolGlobalDetails did not scroll; it has 1 portal and no html class.

## Parity (after the last change; counts are shared with the other packages of the wave)

| Route | Before | After | Left (class) |
|---|---|---|---|
| OneSchoolGlobalDetails | 20 | 0 | clean |
| OneSchoolGlobalCarousel | 35 | 15 | default 1: html `popup-disable-scroll` (Q2); offline 14: bookmark state, the offline state runs the default scenario, not `captured` (C, Q1) |
| HouseholdDetails | 17 | 0 | clean |
| HouseholdCarousel | 396 | 370 | default 40 masked images (C, R8, WP1) + 1 html class (Q2); offline 329 ignore-rule id (C, R10, WP1) |
| SupperMeeting_Details | 113 | 110 | 110 masked images (C, R8, WP1) |
| SupperMeeting_Carousel | 304 | 281 | masked images and off-screen slide ids (C, R8/R9, WP1); slide data (B, R7, WP2) |
| Locality_Details | 119 | 43 | 42 masked images in two tags (C, R8, WP1); 1 call count ActionGetSignedImagesInBulk (not WP4) |
| Profile | 41 | 37 | 1 html class (Q2); 36 account role / members (B, M-Q3, `member` scenario) |
| HomeFeed | 25 | 0 | clean |
| Notifications | 56 | 352 | 340 cursor and positions of the list being reworked by WP5 (not WP4); no maps icon on this route |
| Updates_SingleList | 538 | 0 | clean |

No NotesSheet, DataActionFetchNotes, bookmark or maps-icon difference is left, except the two items below.

## Open items and questions

- **Q1 (OneSchoolGlobalCarousel offline, C).** TST shows "Unmark" offline too. The capture plan maps only
  default/loading to scenario `captured`. a) add `offline: captured` to `capture-plan.json` (orchestrator / WP1);
  b) seed the C2 bookmark of school 1430 in every scenario (OneSchoolGlobalDetails, same school opened directly,
  then shows "Unmark" while its TST capture shows "Bookmark"); c) exemption. Recommendation: a.
- **Q2 (html `popup-disable-scroll` missing at capture time on Profile, OneSchoolGlobalCarousel default, HouseholdCarousel
  default).** The NotesSheet popup sets the class; a later closed popup removes it on re-render (the flush order
  described in `components/ui/os/OSPopup/usePopupWidget.ts`). This is the same symptom as the existing rule
  CAPTURE-POPUP-SCROLL-CLASS-FLUSH-ORDER-SUPPERMEETING_DETAILS. I did not prove the cause on these routes. a) extend
  that rule to these 3 routes (WP1 owns the exemptions); b) trace the popup order per route first. Recommendation: b,
  then a if it is the same order.
- AddNote inputs In_Note / IsSubmitting (NotesSheet NoteText, IsSubmittingNote): not ported. `components/note/AddNote`
  is not in this package, and the new TST AddNote source is not captured. Needs a fetch of
  `UBTConnectLibrary.ConnectPatterns.AddNote.mvc.js` from TST, then a small change in AddNote. No parity effect (the
  sheet is closed in every capture).
- TST NotesSheet calls UBTConnect_Notes_MCS Create_LocalNote (was CreateOrUpdate_LocalNote); React keeps
  createOrUpdate_LocalNote (no port in `platform/storage`); the same row for a new note id.
- FetchNoteId is a TST block variable that the contract inputs do not list; the call does not send it.
- Known original bug B4 (empty bookmark category while C2NewBookmarks was off) is gone from the TST code;
  `app/docs/known-original-bugs.md` still lists it (docs not in this package).
