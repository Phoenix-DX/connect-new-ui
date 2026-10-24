// @os-block Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks
import { useEffect, useReducer, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import {
  CommunicationException,
  Exception,
  NotRegisteredException,
  SystemException,
  UserException,
} from '@/legacy/os/os-exceptions';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { MenuAction } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { Spinner } from '@/shared/Connect2_LegacyShared/Spinner';
import { NoBookmarks } from '@/shared/Connect2_MyBookmarks_MUI/NoBookmarks';
import { MyBookmarks_Group, MyBookmarks_ObjectType } from '@/shared/UBTConnect/lib/staticEntities';
import { connect_LaunchDarkly_PermissionCheck, textToLongInteger } from '@/shared/UBTConnect_Utils/lib/actions';
import { Dialog_AccessRestrictedAction_Legacy } from '@/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { setPreloadObject, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getBookmarkById, getGroupSummaries } from '@/pages/MyBookmarks/api';
import type { BookmarkItem, GroupSummaries, GroupSummary, MyBookmarksModel } from '@/pages/MyBookmarks/types';
import { MyBookmarks_Album } from './MyBookmarks_Album';
import { MyBookmarks_Card } from './MyBookmarks_Card';
import { NetworkWarning } from './NetworkWarning';
import { CommunityBusinessType2 } from './staticEntities';

export interface ScreenBlock_MyBookmarksProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Event NavigateTo_Households(SelectedHouseholdId, ItemsLength, ItemPosition, SearchString, HouseholdIdList). */
  onNavigateToHouseholds: (
    selectedHouseholdId: string,
    itemsLength: string,
    itemPosition: number,
    searchString: string,
    householdIdList: string[],
  ) => void;
  /** Event NavigateTo_Locality(LocalityId, LocalityName, InitialTab). */
  onNavigateToLocality: (localityId: string, localityName: string, initialTab: number) => void;
  /** Event NavigateTo_Subdivision(SubdivisionId). */
  onNavigateToSubdivision: (subdivisionId: string) => void;
  /** Event NavigateTo_CommunityBusinessCarousel(CommunityBusinessId, ObjectType, ItemsLength, ItemPosition). */
  onNavigateToCommunityBusinessCarousel: (
    communityBusinessId: string,
    objectType: string,
    itemsLength: string,
    itemPosition: number,
  ) => void;
  /** Event NavigateTo_BookmarkGroup(BookmarkGroup). */
  onNavigateToBookmarkGroup: (bookmarkGroup: string) => void;
}

const emptySummary = (): GroupSummary => ({ group: '', totalCount: '0', bookmarks: [] });

/** Variable defaults (S:40-80). */
const INITIAL: MyBookmarksModel = {
  hasBookmarks: false,
  isFetchingBookmarks: false,
  countSize: 4,
  contacts: emptySummary(),
  locations: emptySummary(),
  communityBusinesses: emptySummary(),
  allContacts: [],
  allLocations: [],
  allCommunityBusiness: [],
  isNavigationFromHistory: false,
  hasNetworkError: false,
};

const T = MyBookmarks_ObjectType;
const ERROR = PLATFORM_MESSAGE_TYPE.error;

/** Connect2_LegacyShared IsRequestFailedExceptionMessage (runtime-sources/Connect2_LegacyShared.controller.js). */
const isRequestFailedExceptionMessage = (message: string) => message === 'Request failed with an error';
/** Connect2_LegacyShared IsTimeoutExceptionMessage (same file). */
const isTimeoutExceptionMessage = (message: string) =>
  message === 'The operation has timed out' || message === 'The connection has timed out';

/** Connect2_MyBookmarks_MUI SendBookmarkedHiddenFeedbackMessage(ObjectType) (Connect2_MyBookmarks_MUI.controller.js). */
function sendBookmarkedHiddenFeedbackMessage(objectType: string) {
  const what =
    objectType === T.Contact
      ? ' household '
      : objectType === T.Locality
        ? ' locality '
        : objectType === T.Subdivision
          ? ' Supper Meeting '
          : objectType === T.CampusCo || objectType === T.OneSchoolGlobal
            ? ' entity '
            : ' ';
  showFeedbackMessage('This' + what + 'is no longer available.', PLATFORM_MESSAGE_TYPE.info);
}

/** MyBookmarksFlow.ScreenBlock_MyBookmarks (p:Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc.js:
    model :1-140, view :142-650, controller :653-1400). Layout with the back arrow (MenuAction Menu) and "My Bookmarks";
    content: the group cards and the FreeSubscriptionAlert dialog, NoBookmarks, NetworkWarning or the Spinner (S:264-612).
    OnInitialize (S:1250-1275): IsNavigationFromHistory = view restored from the cache (P-BACK: the block variables come
    back with the view). OnReady (S:950-975): ClearLocalLists unless restored, then RefreshBookmarkData. */
export function ScreenBlock_MyBookmarks({
  id,
  bottomBar,
  commonUIElements,
  onNavigateToHouseholds,
  onNavigateToLocality,
  onNavigateToSubdivision,
  onNavigateToCommunityBusinessCarousel,
  onNavigateToBookmarkGroup,
}: ScreenBlock_MyBookmarksProps) {
  const scope = id.replace('$', '');
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<MyBookmarksModel | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: MyBookmarksModel, patch: Partial<MyBookmarksModel>): MyBookmarksModel => ({ ...s, ...patch }),
    null,
    () => (restored && saved ? { ...saved, isNavigationFromHistory: true } : INITIAL),
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): MyBookmarksModel => latest.current;
  const set = (patch: Partial<MyBookmarksModel>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** OnAfterFetch_GetGroupSummaries (S:703-750). */
  const onAfterFetch = (out: GroupSummaries) => {
    set({
      ...out,
      isFetchingBookmarks: false,
      hasBookmarks:
        out.contacts.bookmarks.length > 0 ||
        out.locations.bookmarks.length > 0 ||
        out.communityBusinesses.bookmarks.length > 0,
      hasNetworkError: false,
    });
  };

  /** Refresh Query GetGroupSummaries, then its OnAfterFetch. */
  const refreshGetGroupSummaries = async () => {
    onAfterFetch(await getGroupSummaries(m()));
  };

  /** ClearLocalLists (S:752-790). */
  const clearLocalLists = () => {
    set({
      contacts: emptySummary(),
      locations: emptySummary(),
      communityBusinesses: emptySummary(),
      allContacts: [],
      allLocations: [],
      allCommunityBusiness: [],
    });
  };

  /** RefreshBookmarkData (S:826-945). Raised exceptions (NotRegistered, UserException1, system) go to the flow handler. */
  const refreshBookmarkData = async () => {
    set({ isFetchingBookmarks: true });
    try {
      await refreshGetGroupSummaries();
    } catch (ex) {
      const message = ex instanceof Error ? ex.message : '';
      if (ex instanceof CommunicationException) {
        set({ isFetchingBookmarks: false, hasNetworkError: true });
        showFeedbackMessage(
          isRequestFailedExceptionMessage(message)
            ? 'No internet connection. Please check your network setting and try again…'
            : message,
          ERROR,
        );
        return;
      }
      if (ex instanceof NotRegisteredException) throw new NotRegisteredException(message, 'NotRegistered');
      if (ex instanceof Exception && !(ex instanceof SystemException)) {
        set({ isFetchingBookmarks: false });
        if (message.includes('distributed transaction'))
          throw new UserException(message, 'Connect2_MyBookmarks_MUI.UserException1');
        if (isTimeoutExceptionMessage(message) || isRequestFailedExceptionMessage(message))
          set({ hasNetworkError: true });
        showFeedbackMessage(message, ERROR);
        return;
      }
      throw ex;
    }
  };

  const ready = useRef(false);
  useEffect(() => {
    if (ready.current) return;
    ready.current = true;
    if (!m().isNavigationFromHistory) clearLocalLists();
    refreshBookmarkData().catch(raiseToFlowHandler);
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** NavigateTo_BookmarkedItem(BookmarkId, CurrentItemPosition, ObjectType) (S:980-1140): the client action
      GetBookmarkById, whose GetHasBookmarNote reads mobileDirectoryBookmarkNote when it runs (CR-MyBookmarks-1). */
  const navigateTo_BookmarkedItem = async (bookmarkId: string, itemPosition: number, objectTypeIn: string) => {
    const { item, isBookmarkFound } = await getBookmarkById(
      bookmarkId,
      connect_LaunchDarkly_PermissionCheck('mobileDirectoryBookmarkNote'),
    );
    let currentItemPosition = itemPosition;
    if (item.objectType === T.Contact)
      currentItemPosition = m().allContacts.findIndex((p) => p.objectId === item.objectId);
    if (!isBookmarkFound) {
      showFeedbackMessage('That bookmark isn’t available', ERROR);
      await refreshGetGroupSummaries();
      return;
    }
    const selectedObjectId = textToLongInteger(item.objectId);
    if (item.recordNotAvailable) {
      sendBookmarkedHiddenFeedbackMessage(item.objectType);
      return;
    }
    if (item.recordDisabled) {
      await showUpgradePopUp();
      return;
    }
    const model = m();
    if (item.objectType === T.Contact) {
      setPreloadObject({ IsPreloaded: true, PreloadedCarouselItems: model.allContacts.map(householdPreloadItem) });
      onNavigateToHouseholds(
        selectedObjectId,
        model.contacts.totalCount,
        currentItemPosition,
        '',
        model.allContacts.map((c) => textToLongInteger(c.objectId)),
      );
    } else if (item.objectType === T.Locality) {
      onNavigateToLocality(selectedObjectId, item.title, initialTab(item.objectType));
    } else if (item.objectType === T.Subdivision) {
      onNavigateToSubdivision(selectedObjectId);
    } else if (item.objectType === T.CampusCo || item.objectType === T.OneSchoolGlobal) {
      setPreloadObject({
        IsPreloaded: true,
        PreloadedCarouselItems: model.allCommunityBusiness.map(communityBusinessPreloadItem),
      });
      onNavigateToCommunityBusinessCarousel(
        selectedObjectId,
        objectTypeIn,
        model.communityBusinesses.totalCount,
        currentItemPosition,
      );
    }
  };

  const groups: {
    summary: GroupSummary;
    group: string;
    card: string;
    album: string;
    alias: [string, string];
    list: string;
  }[] = [
    {
      summary: state.contacts,
      group: MyBookmarks_Group.Contacts,
      card: 'MyBookmarks_Contacts',
      album: 'MyBookmarksAlbum_Contacts',
      alias: ['b3', 'b4'],
      list: '57',
    },
    {
      summary: state.locations,
      group: MyBookmarks_Group.Locations,
      card: 'MyBookmarks_Locations',
      album: 'MyBookmarksAlbum_Locations',
      alias: ['b5', 'b6'],
      list: '58',
    },
    /* Entities: not captured (no entity bookmark on TST); list number follows the two captured ones. */
    {
      summary: state.communityBusinesses,
      group: MyBookmarks_Group.Entities,
      card: 'MyBookmarks_Entities',
      album: 'MyBookmarksAlbum_Entities',
      alias: ['b7', 'b8'],
      list: '59',
    },
  ];

  const content =
    !state.isFetchingBookmarks || state.isNavigationFromHistory ? (
      !state.hasNetworkError ? (
        state.hasBookmarks ? (
          <>
            {groups.map(
              ({ summary, group, card, album, alias, list }) =>
                summary.bookmarks.length > 0 && (
                  <MyBookmarks_Card
                    key={group}
                    id={`${scope}-${card}`}
                    scope={`${scope}-${alias[0]}`}
                    objectGroup={group}
                    showViewAll={Number(summary.totalCount) >= 1}
                    onNavigateToViewAll={onNavigateToBookmarkGroup}
                  >
                    <MyBookmarks_Album
                      id={`${scope}-${album}`}
                      scope={`${scope}-${alias[1]}`}
                      listNumber={list}
                      bookmarkItemList={summary.bookmarks}
                      bookmarkGroup={group}
                      onHandleBookmarkedItem={(bookmarkId, position, objectType) => {
                        navigateTo_BookmarkedItem(bookmarkId, position, objectType).catch(raiseToFlowHandler);
                      }}
                    />
                  </MyBookmarks_Card>
                ),
            )}
            <Dialog_AccessRestrictedAction_Legacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b9`} />
          </>
        ) : (
          <NoBookmarks
            id={`${scope}-$b10`}
            isToDisplay={!state.hasBookmarks}
            titlePlaceholder={
              <div className="no-bookmark-top-message" data-container="">
                You&apos;ll find your
                <br /> bookmarks here
              </div>
            }
            textPlaceholder={
              <div className="no-bookmark-bottom-message" data-container="">
                You can get back to a page that&apos;s
                <br />
                important to you by adding a bookmark{' '}
              </div>
            }
          />
        )
      ) : (
        <NetworkWarning
          id={`${scope}-$b11`}
          onTryAgain={() => {
            refreshBookmarkData().catch(raiseToFlowHandler);
          }}
        />
      )
    ) : (
      <Spinner id={`${scope}-$b12`} showLoader={state.isFetchingBookmarks} />
    );

  return (
    <OSBlock name="MyBookmarksFlow.ScreenBlock_MyBookmarks" id={id}>
      <LegacyLayout
        id={`${scope}-$b1`}
        menu={<div id={`${scope}-Menu`} />}
        headerLeft={<MenuIcon id={`${scope}-$b2`} menuAction={MenuAction.Menu} />}
        title={
          <div data-container="" style={{ textAlign: 'center' }}>
            My Bookmarks
          </div>
        }
        content={content}
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
    </OSBlock>
  );
}

/** InitialTab of NavigateTo_Locality (S:1068): 3 for OneSchool Global, 4 for Campus&Co, else 0 (inside the Locality
    branch it is always 0, as compiled). */
const initialTab = (objectType: string) => (objectType === T.OneSchoolGlobal ? 3 : objectType === T.CampusCo ? 4 : 0);

/** Set Preload Info of the Contact branch (S:1040-1050): HouseholdCarouselPreloadedItem {Id, Name, IsDeceased, Image}. */
const householdPreloadItem = (c: BookmarkItem) => ({
  Id: textToLongInteger(c.objectId),
  Name: c.title,
  IsDeceased: c.isDeceased,
  Image: c.image,
});

/** Set Preload Info of the Campus&Co / OneSchool Global branch (S:1083-1095): CommunityBusinessCarouselPreloadedItem. */
const communityBusinessPreloadItem = (c: BookmarkItem) => ({
  Id: textToLongInteger(c.objectId),
  Name: c.title,
  SignedURL: c.image,
  CommunityBusinessTypeId:
    c.objectType === T.CampusCo
      ? CommunityBusinessType2.CampusCo
      : c.objectType === T.OneSchoolGlobal
        ? CommunityBusinessType2.OneSchoolGlobal
        : '',
});
