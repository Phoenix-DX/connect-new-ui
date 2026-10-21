# CR-MyBookmarks-1: API contract — server action Connect2_MyBookmarks_MUI GetBookmarkById (bookmark click)

- Status: applied
- Raised by: MyBookmarks, 2026-10-15
- Block: API contract (`app/src/api/openapi.yaml`, generated from `migration/contract/extra-actions.json`) and its mock
- Other routes using it: any route with the client action Connect2_MyBookmarks_MUI GetBookmarkById (BookmarksByGroup
  shares the module; not checked from here)
- Related question: MyBookmarks Q1 (recommended A)

## Evidence
- `migration/screens/MyBookmarks/analysis/sources/pretty/Connect2_MyBookmarks_MUI.controller.js` GetBookmarkById:
  GetHasBookmarNote off (TST, D2(a)) → server action GetBookmarkById(BookmarkId Long Integer) → GetBookmarkByIdResponse
  (Connect2_MyBookmarks_IS BookmarkItem), IsBookmarkFound (Boolean); path
  `screenservices/Connect2_MyBookmarks_MUI/ActionGetBookmarkById` (same file, ServerAction.GetBookmarkById).
- Caller: ScreenBlock_MyBookmarks NavigateTo_BookmarkedItem (`…ScreenBlock_MyBookmarks.mvc.js:980-1140`), on a click
  on an album item. The contract has no GetBookmarkById.

## Expected change
Add `Connect2_MyBookmarks_MUI` / `ActionGetBookmarkById` (input BookmarkId: Long Integer as text; outputs
GetBookmarkByIdResponse BookmarkItem, IsBookmarkFound Boolean) and a fictional mock that answers the bookmark of the
legacy bookmarks collection (CR-MyBookmarks-2) with IsBookmarkFound True, or an empty record and False when it is gone.

## Workaround in the route until applied
`app/src/screens/MyBookmarks/api.ts` exports `getBookmarkById = undefined`; NavigateTo_BookmarkedItem (written in full in
`components/ScreenBlock_MyBookmarks.tsx`) returns at once, so a click does nothing (no call). Once applied, `api.ts`
calls `callAction('Connect2_MyBookmarks_MUI', 'ActionGetBookmarkById', { BookmarkId })`; nothing else changes.

## Resolution (foundation owner)
Foundation F7b, 2026-10-15. `migration/contract/extra-actions.json` gained
`screenservices/Connect2_MyBookmarks_MUI/ActionGetBookmarkById` and `…/ActionNew_GetBookmarkById` (screens MyBookmarks,
BookmarksByGroup; evidence Connect2_MyBookmarks_MUI.controller.js prettified :1-75 client action, :195-229 / :230-264
server actions); `contract_gen.py` + `gen:api` regenerated `openapi.yaml` / `schema.d.ts` (inputs BookmarkId LongInteger;
outputs GetBookmarkByIdResponse `Connect2_MyBookmarks_IS__BookmarkItem`, IsBookmarkFound). Both are added because the
client action calls New_GetBookmarkById when GetHasBookmarNote is on (default-only flag, TST off), and the routes evaluate
that flag. Mock: one handler per action in `app/src/shared/Connect2_MyBookmarks_MUI/mocks.ts` on the shared legacy
collection (row → IsBookmarkFound True; gone → empty record, False). Routes: `api.ts` `getBookmarkById(bookmarkId,
hasBookmarkNote)` calls the contract; MyBookmarks passes `connect_LaunchDarkly_PermissionCheck('mobileDirectoryBookmarkNote')`
at click time, BookmarksByGroup its `useFlagOn` value; the no-op guards are gone, and the BookmarksByGroup disabled-record
branch now runs App_Subscription_ShowUpgradePopUp (`showUpgradePopUp`, ScreenBlock_BookmarkGroup.mvc.js:2822-2829).
Navigation targets checked (HouseholdCarousel In_StartingHouseholdId, HouseholdDetails HouseholdId, Locality_Details
LocalityId, SupperMeeting_Details In_SubdivsionId, OneSchoolGlobalDetails In_OneSchoolGlobalId,
CommunityBusinessDetails_CoomingSoon In_CommunityBusinessId; all built). Parity: see the batch report.
