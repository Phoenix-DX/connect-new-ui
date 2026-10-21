# CR-Updates_SingleList-1: mocks — one shared UI_UpdateItem collection with the Mark* write handlers

- Status: open
- Raised by: Updates_SingleList, 2026-10-15
- Block: mock layer (no block): `ServiceAPIAction_UI_UpdateItem_MarkAsRead` / `_MarkAsUnread` handlers, today in
  `app/src/screens/HomeFeed/mocks.ts` on collection `HomeFeed.updateItems` → a shared mocks module (e.g.
  `app/src/shared/UBTConnect/mocks.ts` or `app/src/mocks/`)
- Other routes using it: HomeFeed (FeedBlock_Updates), Updates_SingleList; later HouseholdCarousel swipe (IsRead)
- Related question: none (mock architecture; P-MUTATION)

## Evidence
- Contract: `/api/UBTConnect/ServiceAPIAction_UI_UpdateItem_MarkAsRead` and `_MarkAsUnread` are one path for both
  screens (`x-os-screens: ['HomeFeed', 'Updates_SingleList']`, openapi.yaml :2186-2251); MSW answers with the first
  handler (glob order: HomeFeed before Updates_SingleList), so the Updates screen cannot answer them itself.
- HomeFeed's handler does `updateItems.upsert({ UpdateItemId, IsRead })`: for an id that is not in
  `HomeFeed.updateItems` (every Updates_SingleList item) `Collection.upsert` unshifts a partial row
  (`app/src/mocks/store.ts` upsert), so HomeFeed then shows an empty update card.
- Updates_SingleList's FetchUpdates reads its own collection `Updates_SingleList.updateItems` (88 fictional items,
  the captured list); a later refresh (search, tag, filter) brings back IsRead as before the click.

## Expected change
One collection of Connect_Updates_CS.UI_UpdateItem rows for both data actions (HomeFeed FetchUpdates = the newest
rows, Updates_SingleList FetchUpdates = the whole list), and the three write handlers (MarkAsRead, MarkAsUnread,
MarkAllAsRead) on it, updating only existing rows. Updates_SingleList then drops its own collection and its
MarkAllAsRead handler (`app/src/screens/Updates_SingleList/mocks.ts`).

## Workaround in the route until applied
None visible on the screen: the route keeps IsRead locally after the call, as the original does
(Handler_MarkAsRead / _MarkAsUnread / OnClickUpdateItem); MarkAllAsRead is handled in the route's mocks.ts.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change:
- Regression parity run on:
