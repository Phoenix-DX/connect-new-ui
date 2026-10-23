/** @origin UBTConnect.Home.HomeFeed */
import { useCallback, useEffect, useState } from 'react';
import { DialogExitConfirmation, useViewState } from '@/platform/navigation';
import { App_NotificationIcon } from '@/shared/UBTConnect/App_NotificationIcon';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { FeedBlock_CommunityPopulation } from '@/shared/UBTConnect/FeedBlock_CommunityPopulation';
import { Feed_Embeded } from '@/shared/UBTConnect/Feed_Embeded';
import { Type_ShareObject } from '@/shared/UBTConnect/lib/staticEntities';
import { HomeLayout } from '@/components/layout/HomeLayout';
import { UBT_Color, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Update_ListItem } from '@/shared/UBTConnectLibrary/Update_ListItem';
import { Connect_BottomBar_Items, Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import type { UI_ShareableObject_Generic } from '@/shared/UBTConnect_Utils/lib/structures';
import { ShareableObject_Generic } from '@/shared/UBTConnect_Utils/ShareableObject_Generic';
import { ShareSheet } from '@/shared/UBTConnect_Utils/ShareSheet';
import { useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { NULL_DATE } from './api';
import { AppLogo_White } from './components/AppLogo_White';
import { FeedBlock_Services } from './components/FeedBlock_Services';
import { FeedBlock_Updates } from './components/FeedBlock_Updates';
import { Section_FeedWrapper } from './components/Section_FeedWrapper';
import type { UpdateItem } from './types';

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

/** UBTConnect Home.HomeFeed (p:UBTConnect.Home.HomeFeed.mvc.js: model :1-79, view :140-640, controller :645-1150). */
export default function HomeFeed() {
  const navigate = useOsNavigate();
  // Screen variables kept by the view cache (P-BACK).
  const [hasUpdates, setHasUpdates] = useViewState('HasUpdates', true);
  const [shareableUpdateItem, setShareableUpdateItem] = useViewState('ShareableUpdateItem', EMPTY_UPDATE_ITEM);
  const [isShareOpen, setIsShareOpen] = useViewState('IsShareOpen', false);
  const [shareableObjectId, setShareableObjectId] = useViewState('ShareableObjectId', '');
  const [shareObjectTypeId, setShareObjectTypeId] = useViewState('ShareObjectTypeId', '');
  const [shareableFeedItem, setShareableFeedItem] = useViewState<UI_ShareableObject_Generic>('ShareableFeedItem', {});
  // OnInitialize: IsScreenInitialized = False; OnReady: True (:700-720, :820-830).
  const [isScreenInitialized, setIsScreenInitialized] = useState(false);
  useEffect(() => {
    let alive = true;
    void Promise.resolve().then(() => {
      if (alive) setIsScreenInitialized(true);
    });
    return () => {
      alive = false;
    };
  }, []);

  const onNoUpdates = useCallback(() => {
    setHasUpdates(false);
  }, [setHasUpdates]); // Handler_NoUpdates
  // Handler_ShareUpdate (:840-860)
  const onShareUpdate = useCallback(
    (_updateItemId: string, item: UpdateItem) => {
      setShareObjectTypeId(Type_ShareObject.Update);
      setShareableObjectId(item.memberId);
      setShareableUpdateItem(item);
      setIsShareOpen(true);
    },
    [setShareObjectTypeId, setShareableObjectId, setShareableUpdateItem, setIsShareOpen],
  );
  // Handler_ShareFeed (:745-790)
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
        // OnSearchClick → OnClick_Search: navigate to /UBTConnect/Search (HomeFeed.mvc.js:159-166, :708-723)
        onOnSearchClick={() => {
          navigate(`/${APP_ID}/Search`);
        }}
        placeholderHeaderTitle={<AppLogo_White id="$b2" />}
        placeholderHeaderRight={<App_NotificationIcon id="$b3" />}
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
              <FeedBlock_Services id="$b5" forceAddService={false} />
            </Section_FeedWrapper>
            <Section_FeedWrapper
              id="Section_CommunityPopulation"
              scope="b6"
              showHeader={false}
              isTransparentBackground
              showViewAll={false}
            >
              <FeedBlock_CommunityPopulation id="$b7" />
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
                <FeedBlock_Updates id="$b9" onEventNoUpdates={onNoUpdates} onEventShare={onShareUpdate} />
              </Section_FeedWrapper>
            )}
            <Feed_Embeded id="$b10" onEventShare={onShareFeed} />
            {isScreenInitialized && <DialogExitConfirmation id="$b11" />}
          </>
        }
        bottom={<BottomBar id="$b12" activeItem={Connect_BottomBar_Items.Home} isRootPage />}
        placeholderCommonUIInsideLayout={<CommonUiLayout id="$b13" />}
      />
      <ShareSheet
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
          <Update_ListItem
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
          <ShareableObject_Generic id="$b16" inShareableObject={shareableFeedItem} />
        )}
      </ShareSheet>
    </>
  );
}
