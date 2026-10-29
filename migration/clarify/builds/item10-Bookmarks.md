# Item 10: build note of Bookmarks (wave of 2026-10-29)

Status: built, NOT parity-clean. Notes stays clean after the block move. Budget used: 90 tool calls (limit 90).

## Files

Code (new):
- `app/src/pages/Bookmarks/BookmarksPage.tsx`, `hooks/useBookmarks.ts`, `hooks/bookmarksState.ts`,
  `components/Bookmarks_Card_List.tsx`, `components/Bookmarks_Card_Item.tsx`, `components/Bookmarks_FilterSheet.tsx`.
- `app/src/api/bookmark/bookmarkCards.ts` (interim form, I10-6) and its exports in `app/src/api/bookmark/index.ts`.
- `app/src/components/ui/os/blockIds.ts` (`scopeOf`, `child`, shared by the moved blocks).

Blocks moved out of `pages/Notes/components/` (export names kept):
- `components/filter/HorizontalFilterTagList/Horizontal_Filter_TagList.tsx`
- `components/filter/FilterSheetIconLabel/FilterSheet_Icon_Label.tsx`: new prop `onShowUpgradePopUp` (a component
  imports no `platform/`, as `FilterSheetIcon`); Notes and Bookmarks pass `showUpgradePopUp`.
- `components/note/ItemCardWithNotes/ItemCard_WithNotes.tsx`
- `components/note/ItemCardActions/ItemCardActions.tsx` + `ItemCard_ActionBar.tsx`: Unmark added (ShowUnbookmark,
  `connect-icon-check`, primary; ids `$b2`/`$b3`, dom/default.html:398-430). ItemCardActions takes
  `toggleBookmarkItem_C2` and raises `onEventItemUnbookmarked` (ItemCardActions.mvc.js:326-358).
- Notes: only imports changed (`NotesPage.tsx`, `components/NoteCard_Item.tsx`) and the moved constants left
  `components/staticEntities.ts`. `notesState.ts` and the click flow are not touched.

Retired routes:
- Deleted `app/src/pages/MyBookmarks/`, `app/src/pages/BookmarksByGroup/`, `app/src/components/bookmark/NoBookmarks/`.
- `app/src/app/routes.ts`: the `Bookmarks` and `MyBookmarks` rows of `FLAG_REDIRECTS` removed; `routes.test.ts` fixed
  (the 3 red "flag redirects" tests).
- `app/src/components/layout/BottomBar/BottomBar.tsx`: Bookmarks with no condition (BottomBarMenu.mvc.js:623-626);
  `BottomBar.test.tsx` updated.
- `app/src/lib/legacyShared/actions.test.ts`: it imported the deleted BookmarksByGroup page; the describe "MyBookmarks
  cache filled by BookmarksByGroup…" (old lines 335-377) and the imports that only it used are removed. **Done with a
  Python exact-match edit (not Edit), as was the table-name fix in `useBookmarks.ts`, to fit the budget.**

Mocks: `app/src/pages/Bookmarks/mocks.ts` (statefulHandler; scenarios real and empty; 7 fictional cards: Household ×3,
OneSchool Global ×2, Supper Meeting, Member; 9 pills as captured, the masked 5th one is "Feeds"). The user reviews them.
Tests (written with the state module): `app/src/pages/Bookmarks/hooks/bookmarksState.test.ts`. Docs: `route-spec.md`.

## Parity (`route.py parity`, after the last code change)

- Notes: clean (all states).
- Bookmarks `loading`: clean. `default`: structure 15, text 15, class 14, layout 63 (pixels 16 %). `offline`: class 12,
  text 8, layout 113.
- Seen cause in `default`: the React page stays in the skeleton (pills "Dumyy size", "All" not selected), so the OnReady
  flow (pills, then DataActionGetBookmarks) does not end on the dev server. Not found within the budget. Candidates:
  the page mocks reach `app/src/mocks/handlers.ts` for operations that are not in the contract; module
  `UBTConnect_Bookmarks_MCS` missing from the module map of `api/client/callAction.ts`; the LOCAL_BOOKMARK transaction.
- Second cause: the capture shows 3 cards and 9 pills, not an empty list (question Q2).

## Differences from TST, with evidence

- Pills mock: 9 pills for any ids (TST answered 9 to the test account, dom/default.html:169-250). Not the server rule.
- `Get_RecentYears(3)` is ported from its comments only (current year and 2 before; UBTConnect.controller.js:7412).
- NoteListActions and NotesSheet get the bookmark category as note category (the getCachedValue at
  Bookmarks_Card_Item.mvc.js:253 and :400 is not read).

## Not done (orchestrator)

- `app/src/app/routes.css.generated.ts` (BookmarksByGroup, MyBookmarks, New_BookmarksByGroup, New_MyBookmarks rows) and
  `platform/flags/registry.ts` + `flags.generated.json` route lists: not edited (budget); the regeneration after the
  wave can drop them. Comments that name the routes in `platform/bootstrap/mocks.ts:135-137`,
  `mocks/modules/Connect2_Assemble_MUI/mocks.ts:7-8,18`, `mocks/fictional/directory.ts:399-401`: not edited.
  `platform/navigation/navigationGate.ts:7` cites a path in `migration/screens/BookmarksByGroup/` that still exists: kept.
- Code that only the deleted pages used, left for `npm run unused`: `api/bookmark` (`hooks.ts`, `fetchBookmarkGroup`,
  `fetchBookmarkGroupSummaries`, `fetchBookmarkById`, `deleteBookmark`, `updateBookmarkNote`, `toBookmark`,
  `bookmarkKeys` and their mappers/types), `legacyBookmarksOfGroup` and `emptyLegacyBookmarkItem` and the
  GetBookmarkById/Delete/UpdateNote handlers of `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts` (the module stays: the
  legacy bookmark collection is used by Assemble, app start and legacyShared), `components/ui/legacy/GridGallery`.
- Flags: `getHasNewBookmarks` / `C2NewBookmarks` has no reader left outside tests and its definition (grep of
  `app/src`). `mobileDirectoryBookmarkNote` lost its BottomBar reader; other readers not checked. Definitions kept.

## Questions

- Bookmarks Q2 (decision, parity-scenario): the capture of default shows 3 cards and 9 pills, capture-plan.json says no
  bookmarks. Options: a) a "captured" mock scenario with 3 cards of the captured kinds and lengths; b) keep empty and
  exempt the card list; c) re-capture. Recommendation: a.

## Checks

- `npx tsc --noEmit`: clean, except `OrbitAdminMilestoneDetail.test.tsx` (another agent).
- eslint and prettier on the changed files: clean.
- vitest (Bookmarks, Notes, BottomBar, routes, lib/legacyShared): 11 files, 88 tests passed, no Errors line.
- `npm run arch`: 2 errors, both in files of other agents (OrbitAdminMilestoneDetail hook, OrbitBlankLayout).

## Skeleton fix (2026-10-29, second pass)

Cause: `get_LocalDynamicBookmarkPills` in `useBookmarks.ts` opened a raw transaction on the entity *name*
(`LocalBookmark`). The IndexedDB store is the entity's `tableName` (`OSUSR_HCR_LOCALBOOKMARK`) and its rows are
serialised, so the transaction rejected. The flow handler took the error (no console output), OnReady stopped before
the pills call, and the page kept its skeleton. A browser probe (Playwright, scratchpad) showed no
`ActionGet_BookmarkPills_ByBookmarkCategoryIds` and no `DataActionGetBookmarks` request. Fix: read through
`entityService(localBookmarksDatabase).getAllByIndex(LOCAL_BOOKMARK, 'UserId', …)`, as `localBookmarks.ts` does.
After the fix the probe shows the TST call order (pills, GetBookmarks, pills) and the page loads the 9 pills and the cards.

The two other suspects were not the cause:
- `mocks/handlers.ts` loads `pages/*/mocks.ts` by glob: the Bookmarks handlers answer (HTTP 200 after the fix).
- `UBTConnect_Bookmarks_MCS` is not in `SERVER_REQUEST_TIMEOUT` of `api/client/callAction.ts`: the call then has no
  timeout (TST: 10 s, `UBTConnect_Bookmarks_MCS.controller.js:1218`). Not changed: the map is typed
  `Record<ContractModule, number>` and the module is not in the contract yet, so the row would not compile. Add it when
  the contract is regenerated.

Test written first: `app/src/pages/Bookmarks/hooks/useBookmarks.test.tsx` (in-memory local bookmark database, two
LocalBookmark rows). It failed before the fix ("expected true to be false", loading never ended), and it passes after.

Two more fixes from the parity report (compiled code):
- `BottomBarMenu` gets `ActiveItem = Bookmarks` (`Bookmarks.mvc.js` pretty:549-553). This fixed the active item,
  the order of the bottom bar items and the slider.
- `FilterSheet_Icon_Label` `isLoaded = not Bookmarks_Loading` (pretty:456). The search input has no IsEnabled on TST
  (pretty:295-302), so it is `true`; the Notes value had been copied.

Parity after the last code change (route.py parity):
- Bookmarks default: structure 5, class 4, attr 0, text 7, style 3, pseudo 7, layout 38, position 6, pixel 1, call 0
- Bookmarks loading: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0
- Bookmarks offline: structure 0, class 7, attr 0, text 6, style 0, pseudo 6, layout 111, position 31, pixel 0, call 0
- Notes: parity clean; reports in migration/screens/Notes/parity/

Left in Bookmarks:
- `default`: the 3 captured cards against the empty scenario (Q2, the user decides).
- `offline`: skeleton cards. ItemCard_WithNotes changed on TST after the Notes capture: the total-notes text is ""
  for 0 (pretty:645) and a container gets margin-top-s (:736, :915). This is question Q3 (decision; options a/b/c,
  recommendation a: update the shared block to TST and re-capture Notes). Not changed: Notes must stay clean.

Checks: tsc [clean], eslint pages/Bookmarks [clean], vitest:  Test Files 12 passed (12); Tests 89 passed (89);. Tool calls in this pass: 30.

## Parity follow-up (2026-10-29)

User decisions applied: Bookmarks Q2 (a) (mock scenario `captured`), Q3 (a) (shared block to the live TST code).

### Cause of the rise (structure 2 / class 1 / style 1 → structure 5, class 4, text 7, style 3, pseudo 7, layout 38)

Not the search input. `IsEnabled: true` is the record default: `SearchInputRec` IsEnabled defaults to `true`
(`migration/runtime-sources/UBTConnectLibrary.model.js:1482-1484`), and `Input` `withDefaults` gives the same value. The
TST page sets no IsEnabled (`sources/UBTConnect.Bookmarks.Bookmarks.mvc.js:281-288`). The line is kept.

The cause is the mock. The parity run of 03:28 used `mock: captured` (`parity/default.json`), because
`capture-plan.json` `scenarios.default` was set to `captured` before the scenario existed. The handler only knew
`empty`, so `captured` fell through to the 7 demo cards (2 notes on card 0). With cards on the page, the ItemCard_WithNotes
change of TST (Q3) also showed. Every diff of that report maps to one of the two:
- 7 cards against 3: structure 4 (cards 112_3 to 112_6), NoteListActions of card 0 (structure 1), titles and subtitles
  of cards 1 and 2 (text 4, pseudo 4), BottomSheet offsets (position 2), layout.
- Q3: total-notes text "2"/"0"/"0" against "" (text 3, pseudo 3, Column2 offset), `margin-top-s` missing on the title
  container (class 3, style 3, positions).
- The 4th class diff, `search-placeholder-ellipsis` on the search input, was already there (the "class 1" before).

### Changes

- `app/src/pages/Bookmarks/mocks.ts`: scenario `captured`, the 3 captured cards in order (FICTIONAL texts, captured
  lengths): card 0 Household, initials 1, title 20 (`Hayes D Melton Grove`), subtitle 23 (`Ashcombe Valley Meeting`);
  card 1 Household, initials 1, empty title and subtitle; card 2 OneSchool Global, item id `1430`, SVG icon, empty title
  and subtitle; no notes. Pills unchanged (9, the masked 5th one keeps 5 characters). Scenarios `real` (7 demo cards)
  and `empty` kept.
- `app/src/components/note/ItemCardWithNotes/ItemCard_WithNotes.tsx` to the live TST block
  (`sources/UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc.js`, extracted 2026-10-29; the line numbers of
  this file are 32 lower than the pretty numbers of the decision): total-notes text "" for 0, "9+" above 9 (:612-614);
  title container `margin-top-s` (:883); ids follow the TST aliases (title container `$b16`, title `$b17`, subtitle
  `$b18`, notes `$b20`, actions `$b21`, as captured). Done with a Python exact-match replace (6 unique strings), not Edit.
- Test written first: `app/src/components/note/ItemCardWithNotes/ItemCard_WithNotes.test.tsx` (3 tests; red before
  the change: "expected '0' to be ''", missing `$b16`, missing title).
- Not built: the channel row of the live block (aliases 12-15, :692-870), shown only with ChannelName, ChannelLogo and
  PublishedAt; no captured card has one. Question Q5.

### Parity (`route.py parity … --app http://localhost:5174`, after the last code change)

| Route | State | Result |
|---|---|---|
| Bookmarks | default (mock captured) | class 1 (`search-placeholder-ellipsis`), pixels 0.02 % |
| Bookmarks | loading | clean |
| Bookmarks | offline | class 1 (`search-placeholder-ellipsis`), pixels 0.02 % |
| Notes | default (mock empty) | structure 14, style 4, class 1, layout 3, position 2, pixel 1 (53.2 %) |
| Notes | loading | clean |
| Notes | offline | structure 3, class 2, style 3, pseudo 12, position 2, pixel 1 (1.29 %) |

Notes: the skeleton cards of loading and offline show the new block with no diff. The Notes differences come from
the Notes re-capture of today (TST changes in the Notes page and in shared blocks), not from the block update: search
input enabled on TST, 10 more pill TagToggles, EmptyListBorderless, 3 year options in the filter sheet, the card
SkeletonSection still loading in offline. They are outside this agent's scope (`pages/Notes/**`, `components/ui/**`).
A second Notes run at 04:02 (not by this agent) gave the same counts.

### Questions (route.py ask)

- Bookmarks Q4 (decision, shared-block-input): the live TST Input adds `search-placeholder-ellipsis` (survey,
  `ConnectPatterns.Input` `Input_Search.Style`; also StaticInput). 10 routes have older captures without it. Options:
  a) update Input and StaticInput, re-capture and re-check the 10 routes; b) update and exempt the 10 older captures;
  c) keep and exempt on Bookmarks and Notes. Recommendation: a.
- Bookmarks Q5 (decision, shared-block-itemcard): build the channel row of ItemCard_WithNotes (port PreetyFormatDate to
  `lib/`, 3 new inputs, a feed card in the demo mock)? Options: a) now; b) when a capture with a channel card exists;
  c) not. Recommendation: a.
- Notes Q6 (decision, recapture-2026-10-29): the Notes differences above. Options: a) a Notes follow-up task from the
  live `migration/screens/Notes/sources/UBTConnect.Notes.Notes.mvc.js` (item 1 is one line: NotesPage.tsx:59
  `IsEnabled: v.getNotesList.length > 1`, TST sets none, :293-300); b) accept until the next Notes wave; c) re-capture
  first. Recommendation: a.

### Checks

- `npx tsc --noEmit`: 2 errors, both in `components/orbit/MilestoneCard/MilestoneCard.test.tsx` (another agent); none
  in the changed files.
- eslint and prettier on the 3 changed files: clean.
- `npx vitest run src/pages/Bookmarks src/pages/Notes src/components/note src/components/filter`: Test Files 17 passed
  (17); Tests 87 passed (87); no Errors line.
- `npm run arch`: no dependency violations (140 known ignored).
- Tool calls in this pass: 50.
