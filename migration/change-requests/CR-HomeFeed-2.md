# CR-HomeFeed-2: UBTConnect client action — Directory_Updates_GetCarouselPreloadedHouseholds

- Status: applied
- Raised by: HomeFeed, 2026-10-15
- Block: UBTConnect client action `Directory_Updates_GetCarouselPreloadedHouseholds(List of {HouseholdId, IsRead,
  Updates_CarouselSwipeCallbackParameters.UpdateItemId})` → `Out_CarouselPreloadedHouseholds` →
  `app/src/shared/UBTConnect/lib/actions.ts`
- Other routes using it (survey sources): Home.FeedBlock_Updates (HomeFeed), Directory_Updates.Updates_SingleList
- Related question: none

## Evidence
- Expression / handler: `sources/pretty/UBTConnect.Home.FeedBlock_Updates.mvc.js:640-668` (Event_ListItemOnClick,
  GetHasCarouselEnabled branch: ListFilter(HasAccess) → Directory_Updates_GetCarouselPreloadedHouseholds →
  CarouselPreloadedHouseholds.CarouselHouseholdItem → SetPreloadObject → HouseholdCarousel(In_StartingHouseholdId)).
- The action body is not in the downloaded code (UBTConnect.controller.js not in the survey sources).
- Parity difference it explains: none in the captured states (no click captured).

## Expected change
A shared function returning `Out_CarouselPreloadedHouseholds` (CarouselHouseholdItem list) for the filtered update
items, ported from the compiled UBTConnect controller (MCP / TST download), so HouseholdCarousel gets the same preload
object as in the original.

## Workaround in the route until applied
The click marks the item read and navigates to `HouseholdCarousel?In_StartingHouseholdId=…` without calling
SetPreloadObject (comment with this CR id). Listed under Decisions to confirm.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change: `directory_Updates_GetCarouselPreloadedHouseholds(in_ParametersList)` in
  `app/src/shared/UBTConnect/lib/actions.ts` (structures in `lib/structures.ts`, opaque `Type_CarouselItemSwipeAction`
  in `lib/staticEntities.ts`), ported from `UBTConnect.controller.js:1828-1925`: per item in order, read → empty swipe
  callback (:1849-1856), unread → UpdatesCarousel_SetIsRead + JSON Serialize of the parameters, defaults left out
  (:1858-1866), ListAppend {Household, SwipeAction} (:1869-1875). FeedBlock_Updates' click now runs ListFilter(HasAccess) →
  this action → `setPreloadObject` → HouseholdCarousel (mvc :674-697). Tests in `UBTConnect/lib/actions.test.ts`.
  Not settled: the JSON form of a Long Integer (number assumed); the identifier value is opaque.
- Regression parity run on: Login, PINUnlock, PINRegister, Splash (2026-10-15).
