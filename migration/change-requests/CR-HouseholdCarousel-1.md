# CR-HouseholdCarousel-1: API contract — server action UBTConnect UpdateItem_MarkAsRead (carousel swipe action)

- Status: applied
- Raised by: HouseholdCarousel, 2026-10-15
- Block: API contract (`app/src/api/openapi.yaml`, generated) and the mock layer (shared update items, see
  CR-Updates_SingleList-1)
- Other routes using it: none directly; the preload items with a swipe action come from HomeFeed (FeedBlock_Updates)
  and Updates_SingleList
- Related question: HouseholdCarousel Q2 (recommended A)

## Evidence
- `HouseholdCarousel.mvc.js:511-605` (Handler_EventMoved): on Event_Moved, an item whose SwipeAction.ActionId is
  `UpdatesCarousel_SetIsRead` runs `Directory_Updates_CarouselSwipeAction(SwipeAction.Parameters)`.
- `UBTConnect.controller.js:1625-1660` (copy in `migration/screens/HouseholdCarousel/analysis/sources/raw/`):
  JSON Deserialize Updates_CarouselSwipeCallbackParameters, server action `UpdateItem_MarkAsRead(UpdateItemId)`,
  Out_ItemId = UpdateItemId as text, client variable `Directory_Updates_UnreadCount` - 1.
- `UBTConnect.controller.js:18574-18584`: `callServerAction("UpdateItem_MarkAsRead",
  "screenservices/UBTConnect/ActionUpdateItem_MarkAsRead", …, { In_UpdateItemId: Long Integer })`, no output.
- The contract has only `ServiceAPIAction_UI_UpdateItem_MarkAsRead` (HomeFeed, Updates_SingleList), a different action.

## Expected change
Add `UBTConnect` / `ActionUpdateItem_MarkAsRead` (input `In_UpdateItemId`: Long Integer as text, empty output) to the
contract, and a mock write handler that sets IsRead True on the shared update item (same collection as the
ServiceAPI MarkAsRead handlers, CR-Updates_SingleList-1), so HomeFeed/Updates show it read after a swipe.

## Workaround in the route until applied
`app/src/screens/HouseholdCarousel/api.ts` exports `updateItemMarkAsRead = undefined`; Handler_EventMoved then skips
the swipe-action branch (no call, item stays unread, no SwippedItems handed back). Once applied, the route replaces the
stub with `callAction('UBTConnect', 'ActionUpdateItem_MarkAsRead', { In_UpdateItemId })`; nothing else changes.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change (F4a foundation owner, 2026-10-15): `migration/contract/extra-actions.json` entry
  `screenservices/UBTConnect/ActionUpdateItem_MarkAsRead` (evidence UBTConnect.controller.js:18574-18584), contract
  regenerated (`migration/tools/contract_gen.py`: one operation added, input In_UpdateItemId Long Integer, empty output),
  `npm run gen:api`; mock `app/src/shared/UBTConnect/Directory_Updates/mocks.ts` marks the existing update read in
  HomeFeed.updateItems (the collection of the ServiceAPI MarkAsRead handlers; no partial row for unknown ids);
  `app/src/screens/HouseholdCarousel/api.ts` adapter `updateItemMarkAsRead` = callAction(..., { In_UpdateItemId }),
  `index.tsx` Handler_EventMoved no longer skips the swipe branch.
- Regression parity run on: see the F4a report (HouseholdCarousel, HomeFeed).
