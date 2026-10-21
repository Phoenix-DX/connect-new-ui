# CR-BookmarksByGroup-1: API contract — add GetBookmarkById / New_GetBookmarkById (Connect2_MyBookmarks_MUI)

- Status: applied
- Raised by: BookmarksByGroup, 2026-10-15
- Block: `app/src/api/openapi.yaml` (+ generated `schema.d.ts`), mock in `app/src/screens/BookmarksByGroup/mocks.ts`
- Other routes using it: MyBookmarks (likely: same Connect2_MyBookmarks_MUI client action GetBookmarkById)
- Related question: BookmarksByGroup Q1 (decision, recommended A, pending orchestrator answer)

## Evidence
- A bookmark row click runs `OnClick_BookmarkedItem` (ScreenBlock_BookmarkGroup.mvc.js:2728-2892), whose first step is
  the client action `Connect2_MyBookmarks_MUI.GetBookmarkById(In_BookmarkId)` (raw `Connect2_MyBookmarks_MUI.controller.js`,
  prettified :17-142): GetHasBookmarNote → server action `New_GetBookmarkById`, else `GetBookmarkById`
  (`screenservices/Connect2_MyBookmarks_MUI/ActionGetBookmarkById`, :313-378; `ActionNew_GetBookmarkById`, :379-).
- Inputs: `BookmarkId` (Long Integer). Outputs: `GetBookmarkByIdResponse` (Connect2_MyBookmarks_IS.BookmarkItemRec,
  already in the contract as `Connect2_MyBookmarks_IS__BookmarkItem`) and `IsBookmarkFound` (Boolean).
- `grep GetBookmarkById app/src/api/openapi.yaml`: no hit, so `callAction` cannot type the call.

## Expected change
Add both server actions to the contract with those inputs and outputs (TST branch: GetHasBookmarNote off → only
`ActionGetBookmarkById` is called). The route then replaces the `getBookmarkById = null` adapter of
`app/src/screens/BookmarksByGroup/api.ts` with the call and adds a mock answer from its bookmarks collection
(IsBookmarkFound = the row exists).

## Workaround in the route until applied
The whole flow (not available / disabled / navigation per group / not found + refresh) is built in
`components/ScreenBlock_BookmarkGroup.tsx` `onClickBookmarkedItem`, behind the null adapter: a row click does nothing.

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
