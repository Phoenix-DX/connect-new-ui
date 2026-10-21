# CR-MyBookmarks-2: shared mock collection of the legacy bookmarks (Connect2_MyBookmarks)

- Status: applied
- Raised by: MyBookmarks, 2026-10-15
- Block: mock layer (`src/shared/…` or `src/shell/mocks.ts`), P-MUTATION
- Other routes using it: BookmarksByGroup (GetAllBookmarksByGroup, DeleteBookmarkByBookmarkId), the shell
  (Sync_Info_GetMain LocalEntities_App.LocalBookmark = `mockLocalBookmarks`, `src/shell/mocks.ts:100-115`)
- Related question: MyBookmarks Q2 (recommended A), Q3 (fact, open)

## Evidence
- MyBookmarks reads the legacy bookmarks with `DataActionGetGroupSummaries` (summaries of Contacts / Locations /
  Entities, `ScreenBlock_MyBookmarks.mvc.js:673-700`); BookmarksByGroup lists and deletes the same bookmarks
  (`/api/Connect2_MyBookmarks_MUI/ActionDeleteBookmarkByBookmarkId`, `…/ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup`
  in the contract). A delete there must show in MyBookmarks (P-MUTATION), and both should agree with the device copy the
  shell seeds (`mockLocalBookmarks`: households 42438 and 91001 as Contact / Contacts).
- Capture (MyBookmarks dom/default.html:55-174): 4 contacts (one without photo) and 4 locations; no entities.

## Expected change
One shared collection of legacy BookmarkItem rows (Id, Group, ObjectType, ObjectId, Title, Image, DetailsJson…), seeded
fictionally with the captured counts and including the households of `mockLocalBookmarks`, used by GetGroupSummaries,
GetAllBookmarksByGroup, DeleteBookmarkByBookmarkId and GetBookmarkById (CR-MyBookmarks-1). Q3 decides whether C2
bookmarks (`Connect_Bookmarks_CS.bookmarks`, AddBookmark2) also appear in it.

## Workaround in the route until applied
`app/src/screens/MyBookmarks/mocks.ts` keeps its own collection `MyBookmarks.legacyBookmarks` (4 contacts, 4 locations,
fictional) and builds the summaries from it; when applied, the handler reads the shared collection instead.

## Resolution (foundation owner)
Foundation F7b, 2026-10-15. One collection `Connect2_MyBookmarks.legacyBookmarks` in
`app/src/shared/Connect2_MyBookmarks_MUI/mocks.ts` (full BookmarkItem rows): 7 contacts = the BookmarksByGroup capture
(captured order, photo pattern, children and tag lengths; MyBookmarks shows its first 4, whose masked titles have the
same word lengths, MyBookmarks dom/default.html:83-107), 4 locations = the MyBookmarks capture, no entity (none in the
MyBookmarks capture; the former fictional Entities / 2 Locations rows of BookmarksByGroup are gone). Object ids are the
captured ScrollAnchor ids except row 2 = 91001 (Locality_Details' bookmarked household; scroll-anchor ids are not compared
by parity); 42438 is row 4. The first 4 titles keep MyBookmarks' narrow letters (one line in the album). Readers:
MyBookmarks GetGroupSummaries, BookmarksByGroup GetAllBookmarksByGroup, the shared GetBookmarkById / New_GetBookmarkById /
DeleteBookmarkByBookmarkId / New_UpdateBookmarkNote handlers (moved out of the BookmarksByGroup mocks), and the shell:
`mockLocalBookmarks` (Sync_Info_GetMain LocalBookmark and the `unlocked` test-session seed) is now the device copy of that
collection (Id = BookmarkId = row Id), still synced in one transaction (`synchBookmarks` → `entityService.replaceAll`,
ADR-8). Q3 unchanged: C2 bookmarks are not in it.
