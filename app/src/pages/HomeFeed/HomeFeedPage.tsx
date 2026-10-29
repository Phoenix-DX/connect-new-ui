import { useCallback } from 'react';
import { useCommunityPopulationQuery } from '@/api/member';
import type { UpdateItem } from '@/api/update';
import { DialogExitConfirmation, useOsNavigate, useViewState } from '@/platform/navigation';
import { useFlagOn } from '@/platform/flags/flags';
import { APP_ID } from '@/platform/navigation/paths';
import { useEmbeddedFeed } from '@/platform/session/useEmbeddedFeed';
import { useNotificationIcon } from '@/platform/session/useNotificationIcon';
import { NotificationIcon } from '@/components/notification/NotificationIcon';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { HomeLayout } from '@/components/layout/HomeLayout';
import { CommunityPopulation } from '@/components/feed/CommunityPopulation';
import { EmbeddedFeed } from '@/components/feed/EmbeddedFeed';
import { UpdateListItem } from '@/components/feed/UpdateListItem';
import { ShareableObject } from '@/components/share/ShareableObject';
import { ShareSheetContainer } from '@/containers/ShareSheet';
import { Type_ShareObject } from '@/lib/ubtConnect/staticEntities';
import { UBT_Color, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { Connect_BottomBar_Items, Connect_Entity } from '@/lib/ubtConnectUtils/staticEntities';
import type { UI_ShareableObject_Generic } from '@/lib/ubtConnectUtils/structures';
import { AppLogo_White } from './components/AppLogo_White';
import { FeedBlock_Services } from './components/FeedBlock_Services';
import { FeedBlock_Updates } from './components/FeedBlock_Updates';
import { Section_FeedWrapper } from './components/Section_FeedWrapper';
import { useFeedServices } from './hooks/useFeedServices';
import { useFeedUpdates, type FeedUpdatesEvents } from './hooks/useFeedUpdates';
import { useHomeFeedReady } from './hooks/useHomeFeedReady';

/** OutSystems NullDate() as it travels on the wire: the In_UpdateDate of ShareSheet when nothing is shared. */
const NULL_DATE = '1900-01-01';

const EMPTY_UPDATE_ITEM: UpdateItem = {
  updateItemId: '0',
  updateItemTypeId: '',
  householdId: '0',
  memberId: '',
  name: '',
  date: NULL_DATE,
  genderId: '',
  locationString: '',
  parentsNames: '',
  birthType: '',
  isRead: false,
  hasAccess: false,
  hasShare: false,
};

/* The two blocks of the screen with flows. Each one is a small component that calls the hook of the block and gives the
   result to the view of the block, so the flows live as long as the block, and a change of the block state renders only
   the block, as in OutSystems:
   - FeedBlock_Services `$b5`, with the inputs of HomeFeed (ItemPerPage default 6, ForceAddService False).
   - FeedBlock_Updates `$b9`. Section_Updates removes it after Event_NoUpdates, so a view that the view cache restores
     with HasUpdates False does not fetch the updates. */

function FeedServices() {
  const hasCustomEvents = useFlagOn('C2EnableCustomServices'); // GetHasCustomEvents (default-only, on)
  const hasNewLDM = useFlagOn('C2NewLDM'); // GetHasNewLDM (default-only, on)
  const services = useFeedServices({ itemPerPage: 6, forceAddService: false }, { hasNewLDM });
  return <FeedBlock_Services id="$b5" hasCustomEvents={hasCustomEvents} {...services} />;
}

function FeedUpdates(events: FeedUpdatesEvents) {
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel'); // GetHasCarouselEnabled (default-only, on)
  const hasExtendedShare = useFlagOn('C2ExtendedShare'); // GetHasExtendedShare (default-only, on)
  return <FeedBlock_Updates id="$b9" {...useFeedUpdates(events, { hasCarouselEnabled, hasExtendedShare })} />;
}

/** @origin UBTConnect.Home.HomeFeed
    The home screen: the home layout with the logo, the notification bell and the search, then the services card, the
    community population, the latest updates (with "View all") and the feed, the bottom bar, and the share sheet for an
    update or a feed item. The flows of the shared blocks are in their hooks (useNotificationIcon,
    useCommunityPopulationQuery, useEmbeddedFeed); the flows of the blocks of the screen are in useFeedServices and
    useFeedUpdates. */
export default function HomeFeed() {
  const navigate = useOsNavigate();
  // The flows of the shared blocks: App_NotificationIcon, FeedBlock_CommunityPopulation (DataActionFetchCount) and
  // Feed_Embeded (the feed list: no FeedItemId).
  const notificationIcon = useNotificationIcon();
  const communityPopulation = useCommunityPopulationQuery();
  const embeddedFeed = useEmbeddedFeed();
  // Screen variables that the view cache keeps (P-BACK).
  const [hasUpdates, setHasUpdates] = useViewState('HasUpdates', true);
  const [shareableUpdateItem, setShareableUpdateItem] = useViewState('ShareableUpdateItem', EMPTY_UPDATE_ITEM);
  const [isShareOpen, setIsShareOpen] = useViewState('IsShareOpen', false);
  const [shareableObjectId, setShareableObjectId] = useViewState('ShareableObjectId', '');
  const [shareObjectTypeId, setShareObjectTypeId] = useViewState('ShareObjectTypeId', '');
  const [shareableFeedItem, setShareableFeedItem] = useViewState<UI_ShareableObject_Generic>('ShareableFeedItem', {});
  // ScreenEvent_OnReady: IsScreenInitialized (False in OnInitialize, True in OnReady) and GetCommunityStatistics.
  const isScreenInitialized = useHomeFeedReady();

  // Handler_NoUpdates
  const onNoUpdates = useCallback(() => {
    setHasUpdates(false);
  }, [setHasUpdates]);
  // Handler_ShareUpdate
  const onShareUpdate = useCallback(
    (_updateItemId: string, item: UpdateItem) => {
      setShareObjectTypeId(Type_ShareObject.Update);
      setShareableObjectId(item.memberId);
      setShareableUpdateItem(item);
      setIsShareOpen(true);
    },
    [setShareObjectTypeId, setShareableObjectId, setShareableUpdateItem, setIsShareOpen],
  );
  // Handler_ShareFeed
  const onShareFeed = (shareId: string, title: string, subtitle: string, imageUrl: string) => {
    setShareObjectTypeId(Type_ShareObject.Feed);
    setShareableObjectId(shareId);
    setIsShareOpen(true);
    setShareableFeedItem((f) => ({
      ...f,
      ConnectEntityTypeId: Connect_Entity.FeedItem,
      SignedURL: imageUrl,
      Title: title,
      Subtitle: subtitle,
    }));
  };
  const isUpdate = shareObjectTypeId === Type_ShareObject.Update;

  return (
    <>
      <HomeLayout
        id="$b1"
        sVGHeight="260px"
        contentBackgroundColor={UBT_Color.Neutral4}
        // OnSearchClick → OnClick_Search
        onOnSearchClick={() => {
          navigate(`/${APP_ID}/Search`);
        }}
        placeholderHeaderTitle={<AppLogo_White id="$b2" />}
        placeholderHeaderRight={<NotificationIcon id="$b3" {...notificationIcon} />}
        content={
          <>
            <Section_FeedWrapper
              id="Section_Services"
              scope="b4"
              marginTopSizeId={UBT_Size.Base}
              isTransparentBackground
              showHeader={false}
              showViewAll={false}
            >
              <FeedServices />
            </Section_FeedWrapper>
            <Section_FeedWrapper
              id="Section_CommunityPopulation"
              scope="b6"
              showHeader={false}
              isTransparentBackground
              showViewAll={false}
            >
              <CommunityPopulation
                id="$b7"
                isLoading={communityPopulation.isPending}
                total={communityPopulation.data ?? '0'}
                onClick={() => {
                  navigate(`/${APP_ID}/Updates_SingleList`);
                }} // OnClick_Block
              />
            </Section_FeedWrapper>
            {hasUpdates && (
              <Section_FeedWrapper
                id="Section_Updates"
                scope="b8"
                isTransparentBackground={false}
                title="Updates"
                showViewAll
                showHeader
                marginTopSizeId={UBT_Size.Small}
                onOnClickViewAll={() => {
                  navigate(`/${APP_ID}/Updates_SingleList`);
                }} // Section_UpdatesOnClick_ViewAll
              >
                <FeedUpdates onEventNoUpdates={onNoUpdates} onEventShare={onShareUpdate} />
              </Section_FeedWrapper>
            )}
            <EmbeddedFeed id="$b10" {...embeddedFeed} onEventShare={onShareFeed} />
            {isScreenInitialized && <DialogExitConfirmation id="$b11" />}
          </>
        }
        bottom={<BottomBar id="$b12" activeItem={Connect_BottomBar_Items.Home} isRootPage />}
        placeholderCommonUIInsideLayout={<CommonUiLayout id="$b13" />}
      />
      <ShareSheetContainer
        id="$b14"
        inShareObjectTypeId={shareObjectTypeId}
        inShareableObjectId={shareableObjectId}
        inUpdateType={isUpdate ? shareableUpdateItem.updateItemTypeId : ''}
        inUpdateDate={isUpdate ? shareableUpdateItem.date : NULL_DATE}
        inIsOpen={isShareOpen}
        onEventClosedShareSheet={() => {
          setIsShareOpen(false);
        }} // Handler_CloseShareSheet
      >
        {isUpdate && (
          <UpdateListItem
            id="$b15"
            hasBorderBottom={false}
            showImage={false}
            inDate={shareableUpdateItem.date}
            inBirthType={shareableUpdateItem.birthType}
            inLocation={shareableUpdateItem.locationString}
            isEnabled={false}
            inInitialsList={[{ Gender: shareableUpdateItem.genderId }]}
            ignoreReadBackground
            inName={shareableUpdateItem.name}
            inIsRead={false}
            inTypeUpdateFeedItem={shareableUpdateItem.updateItemTypeId}
            inParentsNames={shareableUpdateItem.parentsNames}
          />
        )}
        {shareObjectTypeId === Type_ShareObject.Feed && (
          <ShareableObject id="$b16" inShareableObject={shareableFeedItem} />
        )}
      </ShareSheetContainer>
    </>
  );
}
