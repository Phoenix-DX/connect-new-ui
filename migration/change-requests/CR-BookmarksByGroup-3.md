# CR-BookmarksByGroup-3: shared bookmark pieces for MyBookmarks and BookmarksByGroup (optional consolidation)

- Status: rejected (foundation F7b, 2026-10-15: MyBookmarks does not use them)
- Raised by: BookmarksByGroup, 2026-10-15 (built in parallel with MyBookmarks)
- Block: `app/src/shared/Connect2_LegacyShared/lib/actions.ts`, `app/src/shared/Connect2_LegacyShared/`
- Other routes using it: MyBookmarks (to be checked by its owner)
- Related question: none

## Evidence
- `Connect2_LegacyShared.PutCachedMyBookmarks` / `GetCachedMyBookmarks` (raw controller, prettified :9770-9833,
  :6928-7016; memory cache type DirectoryCacheType.MyBookmarks) are module actions; BookmarksByGroup ported them in
  `app/src/screens/BookmarksByGroup/components/actions.ts` (TTL UnlimitedTimeToLiveSeconds = no expiry, Q4).
- `Connect2_LegacyShared.Utility.ItemOptionsMenu` and `Widgets.PopupMenu` are catalogued "own" (BookmarksByGroup only)
  and built in `app/src/screens/BookmarksByGroup/components/`; `Widgets_PopupMenu` reuses the shared `popupPosition`.

## Expected change
If MyBookmarks needs any of these, move them to `src/shared/Connect2_LegacyShared/` (lib actions and the two blocks)
and let both routes import them; otherwise close this request.

## Workaround in the route until applied
None: the route keeps its own copies.

## Resolution (foundation owner)
Foundation F7b, 2026-10-15: rejected. MyBookmarks needs none of these pieces: its compiled block
(migration/screens/MyBookmarks/analysis/sources/pretty/Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc.js)
references neither PutCachedMyBookmarks / GetCachedMyBookmarks nor Utility.ItemOptionsMenu / Widgets.PopupMenu (0 hits),
and its source set has no ItemOptionsMenu / PopupMenu mvc. They stay in app/src/screens/BookmarksByGroup/components/
until a second route uses them.
