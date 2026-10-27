# Notes of the reader: flow Bookmarks (2026-10-27)

## Scope

- DEV flow `Bookmarks`: screen `Bookmarks` (board: skip) and 3 own blocks. TST runs the flow `Legacy_MyBookmarks`.
- TST screens built in React: `MyBookmarks`, `BookmarksByGroup`. Rows come from the TST compiled code, not from the pack.
- Row groups in draft.json: `MyBookmarks` (screen wrapper), `MyBookmarks (ScreenBlock_MyBookmarks)`,
  `BookmarksByGroup` (wrapper), `BookmarksByGroup (ScreenBlock_BookmarkGroup)`, the 3 DEV blocks, 3 board rows.
- Line numbers "show:N" are lines of the output of `tst_source.py show <file>`. Lines with "~" are approximate.

## Board lines (not built)

- `| Bookmarks | /UBTConnect/Bookmarks | | 117 | | skip | V3d · D2 · skip:variant · branch 1, revisit if C2NewBookmarks=true (needs bottom bar routing: foundation CR) (user, 2026-10-14) |`
- `| New_MyBookmarks | ... | 85 | | skip | ... branch 2, revisit if LD mobileDirectoryBookmarkNote=true and C2NewBookmarks=false (user, 2026-10-14) |`
- `| New_BookmarksByGroup | ... | 94 | | skip | same text as New_MyBookmarks |`
- Built: `MyBookmarks` (route-mybookmarks), `BookmarksByGroup` (route-bookmarksbygroup), both `D2(a): TST branch (C2NewBookmarks=false, LD BookmarkNote=false); tab always opens MyBookmarks (user, 2026-10-14)`.
- Redirects in React: app/src/app/routes.ts:72-73 (`Bookmarks` -> `MyBookmarks` when C2NewBookmarks is off; `MyBookmarks` -> `New_MyBookmarks` when mobileDirectoryBookmarkNote is on).

## TST presence check

- Pack elements absent on TST: none found. The screen `Bookmarks` and the 3 blocks exist as TST files
  (`UBTConnect.Bookmarks.Bookmarks.mvc.js`, `Bookmarks_Card_Item`, `Bookmarks_Card_List`, `Bookmarks_FilterSheet`).
  The client actions `GetBookmarks_FilterYear`, `GetBookmarks_Pills` are called in `UBTConnect.Bookmarks.Bookmarks.mvc.js:1090,1178`
  and defined in `UBTConnect.controller.js:7268`. `Get_RecentYears` was not found by `tst_source.py grep` (output cut to 8 lines; not checked further).
- Block details checked on TST (equal to the pack): Card_Item ActionBarOptions (show:316-322), Card_List texts (show:258,280,307),
  FilterSheet labels (show:169-170) and title (show:17).
- TST elements absent in the pack (TST-only, see pack/tst-only.md): screens `MyBookmarks`, `BookmarksByGroup`, `New_MyBookmarks`,
  `New_BookmarksByGroup`; blocks `ScreenBlock_MyBookmarks`, `ScreenBlock_BookmarkGroup`, `New_ScreenBlock_*`, `MyBookmarks_Album`,
  `MyBookmarks_Card`, `NoBookmarks`, `BookmarkNote`, `BookmarkNoteAddEdit`, `BookmarkNoteDelete`; module `UBTConnect_Bookmarks_MCS`.
- TST fact for the judge: in `ScreenBlock_BookmarkGroup` the search actions (ToggleShowSearch, OnClick_Search, OnKeyup_SearchBookmarkItems,
  OnClickSearchClear, ResetSearch) have no caller in the compiled view (no Input widget; both header Ifs are constant `true` and empty on the right).
  React has no search code (BookmarksByGroupPage.tsx:23).

## Pack gaps seen

- The pack has no model of the TST screens (by design). Only the first 6 hits per action were listed in app.md.
- `blocks.md`: AvatarImage args of ItemCard_WithNotes cut at `Notes.Total`. OnInitialize/OnReady of Bookmarks_Card_List are empty ('assign:' with no content).
- TST extract (`tst_source.py show`) cuts long lines at 330 chars in my filtered reading: the `InitialTab` conditional expression of NavigateTo_Locality (ScreenBlock_MyBookmarks) and the first argument of AuditBookmarkSubscriptionEvent (UpgradeSubscription) were not read in full.
- Not read: `Connect2_LegacyShared` actions (IsRequestFailedExceptionMessage, IsTimeoutExceptionMessage texts, GetCachedMyBookmarks, MenuAction values), `MyBookmarks_Album`, `MyBookmarks_Card`, `BookmarkNote*`, `KebabButton_BookmarkNotes`; the per-row widget trees of the three lists of `ScreenBlock_BookmarkGroup` (rows for Locations and Entities are not checked line by line against bookmarkGroupRows.tsx).
- Flag values (C2EnableCarousel, C2ExtendedShare, mobileDirectoryBookmarkNote, C2NewBookmarks) were taken from React comments and the board; `migration/knowledge/flag-values-tst.json` was not read for them.

## React facts for the judge

- Not implemented in React: Handler_EditNote / Handler_AddNote / Handler_DeleteNote and the BookmarkNote block (flag off on TST; `<NotCaptured .../>` at bookmarkGroupRows.tsx:57-65);
  NavigateTo_ShareObject (flag C2ExtendedShare on TST, branch not wired, useBookmarkGroup.ts:241); RememberFocusedScrollAnchor call (comment at useBookmarkGroup.ts:274).
- React `OnHandle_NavigateTo_Locality` drops LocalityName and InitialTab as the TST action does (MyBookmarksPage.tsx:31-33).
- DEV-only services (`Connect_Bookmarks_CS`: GetBookmarks, AddBookmark2, DeleteBookmarkByBookmarkId2) have no use in the TST screens; app.md shows no mock handler for GetBookmarks/DeleteBookmarkByBookmarkId2 (DEV names).

## Mock files per screen

- MyBookmarks: app/src/pages/MyBookmarks/mocks.ts (DataActionGetGroupSummaries, error scenario); shared app/src/mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts (GetBookmarkById, New_GetBookmarkById, DeleteBookmarkByBookmarkId, New_UpdateBookmarkNote).
- BookmarksByGroup: app/src/pages/BookmarksByGroup/mocks.ts (DataActionGetAllBookmarksByGroup, scenarios real/empty/error/loading); same shared module file.
- Bookmarks, New_MyBookmarks, New_BookmarksByGroup, the 3 DEV blocks: none.
