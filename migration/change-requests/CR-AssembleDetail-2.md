# CR-AssembleDetail-2: Connect2_Assemble_MUI ToggleBookmarkItem (AddBookmark / DeleteBookmarkByBookmarkId)

- **From:** route AssembleDetail (no-capture). **Owner:** foundation (`src/api/openapi.yaml` via `contract_gen.py`,
  `app/src/shared/Connect2_Assemble_MUI/lib/actions.ts`, a P-MUTATION collection in `src/mocks/store.ts`).
- **Change:** add the Connect2_Assemble_MUI server actions `AddBookmark(ObjectType, ObjectId, Group, Note)` and
  `DeleteBookmarkByBookmarkId(BookmarkId)` to the contract and port `ToggleBookmarkItem(IsBookmarked, In_ObjectType,
  In_ObjectId, In_Group, In_Note)` (migration/screens/AssembleEvents/analysis/sources/pretty/Connect2_Assemble_MUI
  .controller.js:1493-1613): delete → Get_LocalBookmarkByObjectId, DeleteBookmarkByBookmarkId, RemoveBookmarkFromCache,
  Delete_LocalBookmarkByBookmarkId, SendBookmarkedFeedbackMessage(False) or "Bookmark could not be removed. Please try
  again later."; add → AddBookmark, Create_LocalBookmark, AddBookmarkToCache, SendBookmarkedFeedbackMessage(True). The
  local copies are the shell's legacy local bookmarks (`shell/localEntities/localBookmarks.ts`).
- **Why:** the household ContextMenu bookmark of AssembleEventDetail_AttendeeSubdivision (sources/…AttendeeSubdivision
  .mvc.js:1901-2080) ends in ToggleBookmarkItem (object type Contact, group Contacts, note from BookmarkNoteAddEdit).
- **Route side today:** the subscription check and the Bookmark_Note dialog run as compiled; the toggle renders
  `<NotCaptured name="CR-AssembleDetail-2: …">` in the row, no call, IsBookmarked unchanged (Q2, recommendation A).

## Status

Applied (foundation F15, 2026-10-16).

## Resolution

- **Contract:** `extra-actions.json` gains `screenservices/Connect2_Assemble_MUI/ActionAddBookmark` (ObjectType,
  ObjectId, Group, Note Text → Success, CreatedBookmarkResponse Connect2_MyBookmarks_IS BookmarkItem) and
  `…/ActionDeleteBookmarkByBookmarkId` (BookmarkId Long Integer → Success), evidence Connect2_Assemble_MUI.controller.js
  (AssembleEvents pretty) :1687-1749; both emitted as writes (`x-os-writes: true`).
- **Port:** `toggleBookmarkItem`, `addBookmark`, `deleteBookmarkByBookmarkId` in
  `app/src/shared/Connect2_Assemble_MUI/lib/actions.ts` (:1493-1686, both branches 1:1); the Connect2_LegacyShared helpers
  it calls in `shared/Connect2_LegacyShared/lib/actions.ts`: Get/PutCachedMyBookmarks, AddBookmarkToCache,
  RemoveBookmarkFromCache (its ObjectId-vs-BookmarkId compare kept 1:1, known original bug B12),
  SendBookmarkedFeedbackMessage; the legacy `Create_LocalBookmark` (LC:1555-1720, CheckForRepeatRecord IDB LA:427-540) as
  `legacyCreate_LocalBookmark` in `app/src/shell/localEntities/localBookmarks.ts` (the legacy delete already existed).
  `MyBookmarks_Group` added to the Assemble static entities.
- **Mocks (P-MUTATION):** `app/src/shared/Connect2_Assemble_MUI/lib/mocks.ts` writes the mock user's legacy bookmarks
  collection shared with MyBookmarks / BookmarksByGroup / the app start's device copy
  (`addLegacyBookmark` in `shared/Connect2_MyBookmarks_MUI/mocks.ts`, rows in the seed's form; seed unchanged), never a
  real server.
- **Route:** the ContextMenu bookmark now calls ToggleBookmarkItem(row IsBookmarked, Contact, row Id, Contacts,
  BookmarkNote), then IsBookmarked = not IsItemBookmarked (whatever the result, B13) and BookmarkNote = ""; exceptions go
  to the flow handler. The `<NotCaptured>` is gone.
- **Checks:** unit tests (add, delete, delete without local copy); CI green; parity 0 on MyBookmarks, BookmarksByGroup,
  HouseholdDetails, Locality_Details, AssembleEvents, Assemble_BrowseByCountry; smoke test: Bookmark → ActionAddBookmark +
  "Added to your Bookmarks", Unmark on the Vitale household → ActionDeleteBookmarkByBookmarkId + "Removed from your
  Bookmarks".
