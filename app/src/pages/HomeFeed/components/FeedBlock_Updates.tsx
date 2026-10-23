// @os-block UBTConnect.Home.FeedBlock_Updates
import { useEffect, useState } from 'react';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { useFlagOn } from '@/platform/flags/flags';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { getPreloadObject, setPreloadObject, useOsNavigate, useWasRestoredFromCache } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { directory_Updates_GetCarouselPreloadedHouseholds } from '@/shared/UBTConnect/lib/actions';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import {
  Connect_UpdateTypeId,
  Gender,
  UBT_Color,
  UBT_Shape,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { UpdateListItem } from '@/components/feed/UpdateListItem';
import { markAsRead, markAsUnread, useFetchUpdates } from '@/pages/HomeFeed/api';
import type { UpdateItem } from '@/pages/HomeFeed/types';

/** CurrDate() as OutSystems Date text (local day). */
const currDate = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

/** OnReady (Updates.mvc.js:960-990): unless restored, three placeholder rows are appended while FetchUpdates runs
    (texts as in the compiled code). */
const loadingItems = (): UpdateItem[] =>
  Array.from({ length: 3 }, () => ({
    updateItemId: '0',
    updateItemTypeId: Connect_UpdateTypeId.Birth,
    householdId: '0',
    memberId: '',
    name: 'Loadin Name',
    date: currDate(),
    genderId: Gender.MALE,
    locationString: 'Loadinf Location',
    parentsNames: '',
    birthType: '',
    isRead: true,
    hasAccess: true,
    hasShare: false,
  }));

/** EntitiesCarousel_SwippedItems rows of the preload object (EntityItemId: Long Integer as text). */
const swipedIds = (preload: unknown): string[] =>
  Array.isArray(preload)
    ? preload.flatMap((r: unknown) =>
        r && typeof r === 'object' && 'EntityItemId' in r ? [String(r.EntityItemId)] : [],
      )
    : [];

export interface FeedBlock_UpdatesProps {
  /** Block instance id (HomeFeed: `$b9`). */
  id: string;
  /** Event Event_NoUpdates. */
  onEventNoUpdates?: () => void;
  /** Event Event_Share(UpdateItemId, ShareableUpdateItem). */
  onEventShare?: (updateItemId: string, item: UpdateItem) => void;
}

/** UBTConnect Home.FeedBlock_Updates (p:UBTConnect.Home.FeedBlock_Updates.mvc.js view :143-560, controller
    :575-1240): the latest update items in a skeleton, each in a card (cyan when unread) with Update_ListItem and its
    context menu. Captured dom/default.html:550-918 (data), dom/offline.html (fetch failed: list-error, loading rows). */
export function FeedBlock_Updates({ id, onEventNoUpdates, onEventShare }: FeedBlock_UpdatesProps) {
  const scope = id.replace('$', '');
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel'); // GetHasCarouselEnabled (default-only, on)
  const hasExtendedShare = useFlagOn('C2ExtendedShare'); // GetHasExtendedShare (default-only, on)
  const updates = useFetchUpdates();
  // IsRead changed on the client (MarkAsRead / MarkAsUnread, swiped items of the carousel), by UpdateItemId.
  const [readOverrides, setReadOverrides] = useState<Record<string, boolean>>(() => {
    // OnInitialize (:880-930): restored with data → items swiped in the carousel are read.
    if (!restored) return {};
    return Object.fromEntries(swipedIds(getPreloadObject()).map((itemId) => [itemId, true]));
  });
  const [placeholders] = useState<UpdateItem[]>(() => (restored ? [] : loadingItems()));

  // FetchUpdatesOnAfterFetch (:860-868): an empty list raises Event_NoUpdates.
  const fetched = updates.data;
  useEffect(() => {
    if (fetched && fetched.length === 0) onEventNoUpdates?.();
  }, [fetched, onEventNoUpdates]);

  const items = (fetched ?? placeholders).map((u) => ({ ...u, isRead: readOverrides[u.updateItemId] ?? u.isRead }));
  const isLoading = !updates.isSuccess && !updates.isError;
  const setRead = (itemId: string, isRead: boolean) => {
    setReadOverrides((r) => ({ ...r, [itemId]: isRead }));
  };

  // Event_ListItemOnClick (:628-680)
  const onItemClick = async (item: UpdateItem) => {
    if (!item.hasAccess) {
      await showUpgradePopUp(); // OnClick_SubscriptionUpgrade
      return;
    }
    await markAsRead(item.updateItemId); // then ScreenModel_Flush (no React equivalent needed)
    if (hasCarouselEnabled) {
      // ListFilter(UI_UpdateItemList, HasAccess) → Directory_Updates_GetCarouselPreloadedHouseholds → SetPreloadObject
      // (FeedBlock_Updates.mvc.js:674-695, shared since CR-HomeFeed-2), then HouseholdCarousel(In_StartingHouseholdId).
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
    } // off branch (HouseholdDetails) not built: default-only
  };

  const listKey = fetched ? '89' : '58'; // runtime list keys of the capture (data / loading rows)
  return (
    <OSBlock name="Home.FeedBlock_Updates" id={id}>
      <SkeletonSection id={`${scope}-$b1`} inIsLoading={isLoading}>
        <div
          className={`list list-group home-page--update-list${updates.isError ? ' list-error' : ''} OSFillParent`}
          data-list=""
          style={{ position: 'relative' }}
        >
          {items.map((item, i) => {
            const itemScope = `${scope}-l1-${listKey}_${i}`;
            return (
              <CustomContainer
                key={itemScope}
                id={`${itemScope}-$b2`}
                extendedClasses="overflow-hidden"
                options={{
                  Background: { BackgroundColor: item.isRead ? undefined : UBT_Color.CyanLightest },
                  PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall, HorizontalSizeId: UBT_Size.Base },
                  MarginSize: { VerticalSizeId: UBT_Size.Small },
                  BorderOptions: {
                    Color: UBT_Color.Neutral3,
                    Size: { GeneralSizeId: UBT_Size.Small },
                    Radius: { GeneralSizeId: UBT_Shape.Large },
                  },
                }}
              >
                <UpdateListItem
                  id={`${itemScope}-$b3`}
                  inDate={item.date}
                  isEnabled={item.hasAccess}
                  showImage={false}
                  inBirthType={item.birthType}
                  inInitialsList={[{ Gender: item.genderId }]}
                  inIsRead={item.isRead}
                  inParentsNames={item.parentsNames}
                  hasBorderBottom={!item.hasAccess}
                  paddingSizeId={{ BottomSizeId: item.hasAccess ? undefined : UBT_Size.Small }}
                  inHasShare={item.hasShare}
                  ignoreReadBackground
                  inName={item.name}
                  inTypeUpdateFeedItem={item.updateItemTypeId}
                  inLocation={item.locationString}
                  onOnClick={() => void onItemClick(item)}
                  onEventShare={() => {
                    // Handler__Share: GetHasExtendedShare → Event_Share (off branch, ShowComingSoonMessage, not built)
                    if (hasExtendedShare) onEventShare?.(item.updateItemId, item);
                  }}
                  onEventSendGift={() => {
                    showFeedbackMessage('Send gift', PLATFORM_MESSAGE_TYPE.info);
                  }}
                  onEventMarkAsRead={() => {
                    void markAsRead(item.updateItemId).then(() => {
                      setRead(item.updateItemId, true);
                    });
                  }}
                  onEventMarkAsUnread={() => {
                    void markAsUnread(item.updateItemId).then(() => {
                      setRead(item.updateItemId, false);
                    });
                  }}
                />
                {!item.hasAccess && (
                  <NotCaptured name="FeedBlock_Updates subscription upgrade (HasAccess False, compiled view :420-520)">
                    <CustomContainer
                      options={{
                        Background: { BackgroundColor: UBT_Color.Neutral2 },
                        PaddingSize: { HorizontalSizeId: UBT_Size.Small },
                        MarginSize: { VerticalSizeId: UBT_Size.Small },
                        BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Large } },
                      }}
                      onClicked={() => void showUpgradePopUp()}
                    >
                      Subscription upgrade required
                    </CustomContainer>
                  </NotCaptured>
                )}
                <div data-container="" />
              </CustomContainer>
            );
          })}
        </div>
      </SkeletonSection>
    </OSBlock>
  );
}
