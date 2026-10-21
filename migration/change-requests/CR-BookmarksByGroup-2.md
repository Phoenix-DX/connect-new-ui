# CR-BookmarksByGroup-2: shell local bookmarks — legacy Delete_LocalBookmarkByBookmarkId

- Status: applied
- Raised by: BookmarksByGroup, 2026-10-15
- Block: `app/src/shell/localEntities/localBookmarks.ts` (foundation owner)
- Other routes using it: MyBookmarks (likely, same Unmark flow), any legacy bookmark toggle
- Related question: BookmarksByGroup Q3 (decision, recommended A, pending orchestrator answer)

## Evidence
- After `DeleteBookmarkByBookmarkId` succeeds, `OnHandle_BookmarkToggle` runs
  `Connect2_LegacyShared.Delete_LocalBookmarkByBookmarkId(BookmarkId)` (ScreenBlock_BookmarkGroup.mvc.js:3171).
- Raw `Connect2_LegacyShared.controller.js` (prettified :2911-2975): `Get_LocalBookmarkByBookmarkId(BookmarkId)` then
  `Delete_LocalBookmarkById(LocalBookmark.Id)` on the legacy `Connect2_LegacyShared.LocalBookmark` entity.
- `localBookmarks.ts` exports only the C2 (`UBTConnect_Bookmarks_MCS`) `delete_LocalBookmarkByBookmarkId`; the legacy
  entity has get-by-object and sync only.

## Expected change
Add the legacy `get_LocalBookmarkByBookmarkId`, `delete_LocalBookmarkById` and `delete_LocalBookmarkByBookmarkId`
(Connect2_LegacyShared) next to the C2 ones. Optional, same area: the mock user's legacy local bookmarks
(`mockLocalBookmarks`, 2 households) and the BookmarksByGroup mock (7 contacts with the captured object ids, one of
them 42438) describe different bookmark sets; a shared seed would keep HouseholdDetails' "Unmark" and this list
consistent.

## Workaround in the route until applied
`onBookmarkToggle` skips the local delete (comment in `components/ScreenBlock_BookmarkGroup.tsx`); the server mock
row is removed and the list, total and MyBookmarks cache are updated as in the original.

## Resolution (foundation owner)
Foundation F7b, 2026-10-15. `app/src/shell/localEntities/localBookmarks.ts` (exported from `index.ts`):
`get_LocalBookmarkByBookmarkId` (LC:2190 ff., aggregate LA:132 ff., the user's rows by BookmarkId sorted by Note),
`legacyDelete_LocalBookmarkById` (LC:1977 ff.) and `legacyDelete_LocalBookmarkByBookmarkId` (LC:1921-1976), LC/LA =
migration/runtime-sources/Connect2_LegacyShared.controller.js / .aggregates.IDB.js; the `legacy` prefix avoids the C2
actions of the same names. Test in localBookmarks.test.ts. BookmarksByGroup `onBookmarkToggle` awaits it after
UpdatedTotal and before PutCachedMyBookmarks, as ScreenBlock_BookmarkGroup.mvc.js:3159-3175. The optional shared seed is
done too (CR-MyBookmarks-2): 42438 (HouseholdDetails "Unmark") is a row of the one collection the list, GetBookmarkById
and the shell's device copy share.
