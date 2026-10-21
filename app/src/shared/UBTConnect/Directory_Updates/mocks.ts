import type { RequestHandler } from 'msw';
import { contractHandler } from '../../../mocks/contract';
import { updateItems } from '../../../screens/HomeFeed/mocks';

/* Server action UBTConnect UpdateItem_MarkAsRead(In_UpdateItemId) (UBTConnect.controller.js:18574-18584, copy in
   migration/screens/HouseholdCarousel/analysis/sources/raw/), called by Directory_Updates_CarouselSwipeAction
   (:1625-1660) when an updates carousel item is swiped (CR-HouseholdCarousel-1). A write, never recorded: it marks the
   update read in the update items the ServiceAPI MarkAsRead / MarkAsUnread handlers change (HomeFeed.updateItems, the
   collection HomeFeed's FetchUpdates reads; one shared collection for every Updates screen is CR-Updates_SingleList-1),
   so HomeFeed shows it read after the swipe. Only an existing update changes (no partial row for an unknown id). No
   output. */
export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'ActionUpdateItem_MarkAsRead', ({ In_UpdateItemId }) => {
    const row = updateItems.get(In_UpdateItemId);
    if (row) updateItems.upsert({ ...row, IsRead: true });
    return {};
  }),
];
