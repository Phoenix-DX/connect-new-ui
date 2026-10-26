import { useEffect, useState } from 'react';
import { markUpdateItemAsRead, markUpdateItemAsUnread, useFeedUpdatesQuery, type UpdateItem } from '@/api/update';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { getPreloadObject, setPreloadObject, useOsNavigate, useWasRestoredFromCache } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { directory_Updates_GetCarouselPreloadedHouseholds } from '@/lib/ubtConnect/actions';
import { loadingItems, swipedItemsRead, withReadOverrides, type ReadOverrides } from './feedUpdatesState';

/** The variables and the flows of the updates card of HomeFeed: the data action FetchUpdates, the read state of the
    items on the client, Event_ListItemOnClick, the actions of the context menu and the subscription upgrade. The page
    gives the result to the component FeedBlock_Updates.
    The flows do not check that the block is still open: after MarkAsRead, the jump to HouseholdCarousel runs also when
    the user left HomeFeed (W23, as before the hook).
    @origin UBTConnect.Home.FeedBlock_Updates */

/** The events of the block. */
export interface FeedUpdatesEvents {
  /** Event_NoUpdates: FetchUpdates answered an empty list. */
  onEventNoUpdates?: () => void;
  /** Event_Share(UpdateItemId, ShareableUpdateItem). */
  onEventShare?: (updateItemId: string, item: UpdateItem) => void;
}

/** The flags that the flows read: GetHasCarouselEnabled (`C2EnableCarousel`) and GetHasExtendedShare
    (`C2ExtendedShare`). */
export interface FeedUpdatesFlags {
  hasCarouselEnabled: boolean;
  hasExtendedShare: boolean;
}

export interface FeedUpdatesView {
  /** UI_UpdateItemList with the read state of the client: the three loading rows until FetchUpdates answers. */
  items: UpdateItem[];
  /** FetchUpdates has data: the list keys of the fetched rows. */
  hasData: boolean;
  /** FetchUpdates runs: the skeleton. */
  isLoading: boolean;
  /** FetchUpdates failed: the list shows `list-error`. */
  hasFetchError: boolean;
  /** Event_ListItemOnClick. */
  onItemClick: (item: UpdateItem) => void;
  /** Handler__Share: the share action of the context menu. */
  onShare: (item: UpdateItem) => void;
  /** The send gift action of the context menu. */
  onSendGift: () => void;
  /** MarkAsRead of the context menu. */
  onMarkAsRead: (item: UpdateItem) => void;
  /** MarkAsUnread of the context menu. */
  onMarkAsUnread: (item: UpdateItem) => void;
  /** OnClick_SubscriptionUpgrade: the banner of an item without access. */
  onClickUpgrade: () => void;
}

export function useFeedUpdates(
  { onEventNoUpdates, onEventShare }: FeedUpdatesEvents,
  { hasCarouselEnabled, hasExtendedShare }: FeedUpdatesFlags,
): FeedUpdatesView {
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  const updates = useFeedUpdatesQuery();
  // OnInitialize: in a restored view, the items swiped in the carousel are read.
  const [readOverrides, setReadOverrides] = useState<ReadOverrides>(() =>
    restored ? swipedItemsRead(getPreloadObject()) : {},
  );
  const [placeholders] = useState<UpdateItem[]>(() => (restored ? [] : loadingItems()));

  // FetchUpdatesOnAfterFetch: an empty list raises Event_NoUpdates.
  const fetched = updates.data;
  useEffect(() => {
    if (fetched && fetched.length === 0) onEventNoUpdates?.();
  }, [fetched, onEventNoUpdates]);

  const items = withReadOverrides(fetched ?? placeholders, readOverrides);
  const setRead = (itemId: string, isRead: boolean) => {
    setReadOverrides((r) => ({ ...r, [itemId]: isRead }));
  };

  /** Event_ListItemOnClick: without access, the upgrade popup. Otherwise MarkAsRead, then (GetHasCarouselEnabled) the
      households of the items with access as the preload object and HouseholdCarousel(In_StartingHouseholdId). The
      branch with the carousel off (HouseholdDetails) is not built: default-only. */
  const itemClick = async (item: UpdateItem) => {
    if (!item.hasAccess) {
      await showUpgradePopUp();
      return;
    }
    await markUpdateItemAsRead(item.updateItemId); // then ScreenModel_Flush, which React does not need
    if (hasCarouselEnabled) {
      // ListFilter(UI_UpdateItemList, HasAccess) → Directory_Updates_GetCarouselPreloadedHouseholds → SetPreloadObject,
      // shared since CR-HomeFeed-2.
      const preloaded = directory_Updates_GetCarouselPreloadedHouseholds(
        items
          .filter((p) => p.hasAccess)
          .map((p) => ({
            HouseholdId: p.householdId,
            IsRead: p.isRead,
            Updates_CarouselSwipeCallbackParameters: { UpdateItemId: p.updateItemId },
          })),
      );
      setPreloadObject({ CarouselHouseholdItem: preloaded.CarouselHouseholdItem });
      navigate(`/${APP_ID}/HouseholdCarousel`, { In_StartingHouseholdId: item.householdId });
    }
  };

  return {
    items,
    hasData: fetched !== undefined,
    isLoading: !updates.isSuccess && !updates.isError,
    hasFetchError: updates.isError,
    onItemClick: (item) => void itemClick(item),
    onShare: (item) => {
      // Handler__Share: GetHasExtendedShare → Event_Share. The other branch (ShowComingSoonMessage) is not built.
      if (hasExtendedShare) onEventShare?.(item.updateItemId, item);
    },
    onSendGift: () => {
      showFeedbackMessage('Send gift', PLATFORM_MESSAGE_TYPE.info);
    },
    onMarkAsRead: (item) => {
      void markUpdateItemAsRead(item.updateItemId).then(() => {
        setRead(item.updateItemId, true);
      });
    },
    onMarkAsUnread: (item) => {
      void markUpdateItemAsUnread(item.updateItemId).then(() => {
        setRead(item.updateItemId, false);
      });
    },
    onClickUpgrade: () => void showUpgradePopUp(),
  };
}
