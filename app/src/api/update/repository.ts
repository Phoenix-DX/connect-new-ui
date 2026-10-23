import { callAction } from '@/api/client/callAction';
import { wireList } from '@/legacy/os/os-wire';
import {
  toFeedUpdateItems,
  toFilterUpdatesWire,
  toUnreadCount,
  toUpdateDateRangeIds,
  toUpdatesList,
  toUpdatesListVariablesWire,
} from './mapper';
import type { FilterUpdates, UpdateItem, UpdatesList, UpdatesListVariables } from './types';

/* The server calls of the update domain, called with their OutSystems names and owners: the update items of the block
   FeedBlock_Updates (HomeFeed) and of the screen Updates_SingleList, the read state of an update item and the unread
   count of the bottom bar. Each function makes one call. The callers decide when to call (screen flows, the query
   hook, the bottom bar). */

/** DataActionFetchUpdates of FeedBlock_Updates: the latest update items of the home feed. The call sends the block
    variable CarouselPreloadedHouseholds, which is empty at fetch time. */
export async function fetchFeedUpdates(): Promise<UpdateItem[]> {
  return toFeedUpdateItems(
    await callAction('UBTConnect', 'FeedBlock_Updates/DataActionFetchUpdates', {
      CarouselPreloadedHouseholds: { CarouselHouseholdItem: wireList([]) },
    }),
  );
}

/** DataActionFetchUpdates of Updates_SingleList: the update items that match the filter of the screen, and the unread
    count. The call sends every screen variable. */
export async function fetchUpdatesList(variables: UpdatesListVariables): Promise<UpdatesList> {
  return toUpdatesList(
    await callAction('UBTConnect', 'Updates_SingleList/DataActionFetchUpdates', toUpdatesListVariablesWire(variables)),
  );
}

/** DataActionGetDateRanges of Updates_SingleList: the ids of the date ranges (Updates_DateRanges), in the order of the
    server. The call sends every screen variable. */
export async function fetchUpdateDateRangeIds(variables: UpdatesListVariables): Promise<string[]> {
  return toUpdateDateRangeIds(
    await callAction('UBTConnect', 'Updates_SingleList/DataActionGetDateRanges', toUpdatesListVariablesWire(variables)),
  );
}

/** The service action Action_UI_UpdateItem_MarkAsRead (FeedBlock_Updates and Updates_SingleList). UpdateItemId is a
    Long Integer, as text. No outputs. */
export async function markUpdateItemAsRead(updateItemId: string): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPIAction_UI_UpdateItem_MarkAsRead', { UpdateItemId: updateItemId });
}

/** The service action Action_UI_UpdateItem_MarkAsUnread (FeedBlock_Updates and Updates_SingleList). No outputs. */
export async function markUpdateItemAsUnread(updateItemId: string): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPIAction_UI_UpdateItem_MarkAsUnread', { UpdateItemId: updateItemId });
}

/** The service action Action_UI_UpdateItem_MarkAllAsRead (Updates_SingleList): marks read every update item that
    matches the filter. No outputs. */
export async function markAllUpdateItemsAsRead(filter: FilterUpdates): Promise<void> {
  await callAction('UBTConnect', 'ServiceAPIAction_UI_UpdateItem_MarkAllAsRead', {
    Filter_Updates: toFilterUpdatesWire(filter),
  });
}

/** The server action UpdateItem_MarkAsRead (In_UpdateItemId), which the client action
    Directory_Updates_CarouselSwipeAction calls when the user swipes to an unread update in HouseholdCarousel. It is not
    the service action of markUpdateItemAsRead. No outputs. */
export async function markCarouselUpdateItemAsRead(updateItemId: string): Promise<void> {
  await callAction('UBTConnect', 'ActionUpdateItem_MarkAsRead', { In_UpdateItemId: updateItemId });
}

/** The service action Get_UI_UpdateItems_UnreadCount_All: the unread count of all the update items (the badge of the
    bottom bar). */
export async function fetchUnreadUpdateItemsCount(): Promise<number> {
  return toUnreadCount(await callAction('UBTConnect', 'ServiceAPIGet_UI_UpdateItems_UnreadCount_All', {}));
}
