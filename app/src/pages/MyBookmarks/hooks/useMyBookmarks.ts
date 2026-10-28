import { fetchBookmarkById, fetchBookmarkGroupSummaries } from '@/api/bookmark';
import {
  CommunicationException,
  Exception,
  NotRegisteredException,
  SystemException,
  UserException,
} from '@/legacy/os/exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { setPreloadObject, useFlowState } from '@/platform/navigation';
import { MyBookmarks_ObjectType } from '@/lib/ubtConnect/staticEntities';
import { connect_LaunchDarkly_PermissionCheck, textToLongInteger } from '@/lib/ubtConnectUtils/actions';
import {
  bookmarkedHiddenFeedbackMessage,
  clearedLocalLists,
  communityBusinessPreloadItem,
  groupSummariesFetched,
  householdPreloadItem,
  initialTab,
  INITIAL_MY_BOOKMARKS_STATE,
  isRequestFailedExceptionMessage,
  isTimeoutExceptionMessage,
  myBookmarksReducer,
  restoreMyBookmarks,
  type MyBookmarksState,
} from './myBookmarksState';

/** The events of the block ScreenBlock_MyBookmarks that its flows raise. The screen handles them (OnHandle_*). */
export interface MyBookmarksEvents {
  /** NavigateTo_Households(SelectedHouseholdId, ItemsLength, ItemPosition, SearchString, HouseholdIdList). */
  onNavigateToHouseholds: (
    selectedHouseholdId: string,
    itemsLength: string,
    itemPosition: number,
    searchString: string,
    householdIdList: string[],
  ) => void;
  /** NavigateTo_Locality(LocalityId, LocalityName, InitialTab). */
  onNavigateToLocality: (localityId: string, localityName: string, initialTab: number) => void;
  /** NavigateTo_Subdivision(SubdivisionId). */
  onNavigateToSubdivision: (subdivisionId: string) => void;
  /** NavigateTo_CommunityBusinessCarousel(CommunityBusinessId, ObjectType, ItemsLength, ItemPosition). */
  onNavigateToCommunityBusinessCarousel: (
    communityBusinessId: string,
    objectType: string,
    itemsLength: string,
    itemPosition: number,
  ) => void;
}

/** What the view renders and the handlers of its widgets. */
export interface MyBookmarksFlows {
  /** The block variables (rendered). */
  state: MyBookmarksState;
  /** OnHandle_BookmarkedItem(BookmarkId, ItemPosition, ObjectType) of an album: NavigateTo_BookmarkedItem. */
  onBookmarkedItem: (bookmarkId: string, itemPosition: number, objectType: string) => void;
  /** TryAgain of NetworkWarning: RefreshBookmarkData. */
  onTryAgain: () => void;
}

/** The name under which the view cache keeps the block variables. */
const VIEW_NAME = 'Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks';

const T = MyBookmarks_ObjectType;
const ERROR = PLATFORM_MESSAGE_TYPE.error;

/** The flows of the block ScreenBlock_MyBookmarks (the block controller).
    - OnInitialize: IsNavigationFromHistory = the view cache restored the view; the other variables come back with
      the view (restoreMyBookmarks).
    - OnReady: ClearLocalLists unless IsNavigationFromHistory, then RefreshBookmarkData. A raised exception goes to the
      flow handler.
    - RefreshBookmarkData: IsFetchingBookmarks True, the refresh of DataActionGetGroupSummaries (on demand only; it
      sends every block variable) and OnAfterFetch_GetGroupSummaries. A CommunicationException sets HasNetworkError
      and shows "No internet connection…" (or its own message). NotRegistered is raised again. Any other user
      exception stops the fetching, raises UserException1 for a distributed transaction, sets HasNetworkError for a
      timeout or a failed request, and shows its message. A system exception goes up as it is.
    - NavigateTo_BookmarkedItem(BookmarkId, ItemPosition, ObjectType): the client action GetBookmarkById, whose
      GetHasBookmarNote reads the flag mobileDirectoryBookmarkNote when it runs (CR-MyBookmarks-1). Not found: the
      error message and the refresh of GetGroupSummaries. Hidden: SendBookmarkedHiddenFeedbackMessage. Disabled: the
      upgrade pop-up. Otherwise the preload of the carousel (Contact, Campus&Co, OneSchool Global) and the event of the
      object type.
    - Flow scope (item 8): GetGroupSummaries is a data action (R1, `flow.fetch`): after the unmount its answer and its
      failure are dropped (no message, no raise). GetBookmarkById is a module client action: its flow goes on after
      the unmount (the messages, the upgrade pop-up, the refresh call and the preload run, R5), and the NavigateTo_*
      events stop (R3: the parent handlers OnHandle_NavigateTo_* start with ensureControllerAlive; `flow.events`).
    @origin Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks */
export function useMyBookmarks(events: MyBookmarksEvents): MyBookmarksFlows {
  const {
    state,
    dispatch: write,
    latest,
    flow,
  } = useFlowState({
    viewName: VIEW_NAME,
    reducer: myBookmarksReducer,
    initial: INITIAL_MY_BOOKMARKS_STATE,
    restore: restoreMyBookmarks,
    parameters: null,
    events,
    // The flow is defined below; the hook calls the one of the newest render (once per instance: useFlowState).
    onReady: () => onReady(),
  });

  /** Refresh Query GetGroupSummaries, then OnAfterFetch_GetGroupSummaries. */
  const refreshGetGroupSummaries = async () => {
    write(groupSummariesFetched(await flow.fetch(fetchBookmarkGroupSummaries(latest.current)))); // R1
  };

  /** RefreshBookmarkData. */
  const refreshBookmarkData = async () => {
    write({ isFetchingBookmarks: true });
    try {
      await refreshGetGroupSummaries();
    } catch (ex) {
      const message = ex instanceof Error ? ex.message : '';
      if (ex instanceof CommunicationException) {
        write({ isFetchingBookmarks: false, hasNetworkError: true });
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
        write({ isFetchingBookmarks: false });
        if (message.includes('distributed transaction'))
          throw new UserException(message, 'Connect2_MyBookmarks_MUI.UserException1');
        if (isTimeoutExceptionMessage(message) || isRequestFailedExceptionMessage(message))
          write({ hasNetworkError: true });
        showFeedbackMessage(message, ERROR);
        return;
      }
      throw ex;
    }
  };

  /** OnReady. useFlowState sends a rejection to the flow handler. */
  const onReady = async () => {
    if (!latest.current.isNavigationFromHistory) write(clearedLocalLists());
    await refreshBookmarkData();
  };

  /** NavigateTo_BookmarkedItem(BookmarkId, ItemPosition, ObjectType). */
  const navigateToBookmarkedItem = async (bookmarkId: string, itemPosition: number, objectTypeIn: string) => {
    // A module client action (GetBookmarkById): not wrapped, its flow goes on after the unmount.
    const { item, isBookmarkFound } = await fetchBookmarkById(
      bookmarkId,
      connect_LaunchDarkly_PermissionCheck('mobileDirectoryBookmarkNote'),
    );
    let currentItemPosition = itemPosition;
    if (item.objectType === T.Contact)
      currentItemPosition = latest.current.allContacts.findIndex((p) => p.objectId === item.objectId);
    if (!isBookmarkFound) {
      showFeedbackMessage('That bookmark isn’t available', ERROR);
      await refreshGetGroupSummaries();
      return;
    }
    const selectedObjectId = textToLongInteger(item.objectId);
    if (item.recordNotAvailable) {
      showFeedbackMessage(bookmarkedHiddenFeedbackMessage(item.objectType), PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    if (item.recordDisabled) {
      await showUpgradePopUp();
      return;
    }
    const model = latest.current;
    if (item.objectType === T.Contact) {
      setPreloadObject({ IsPreloaded: true, PreloadedCarouselItems: model.allContacts.map(householdPreloadItem) });
      flow.events.onNavigateToHouseholds(
        selectedObjectId,
        model.contacts.totalCount,
        currentItemPosition,
        '',
        model.allContacts.map((c) => textToLongInteger(c.objectId)),
      );
    } else if (item.objectType === T.Locality) {
      flow.events.onNavigateToLocality(selectedObjectId, item.title, initialTab(item.objectType));
    } else if (item.objectType === T.Subdivision) {
      flow.events.onNavigateToSubdivision(selectedObjectId);
    } else if (item.objectType === T.CampusCo || item.objectType === T.OneSchoolGlobal) {
      setPreloadObject({
        IsPreloaded: true,
        PreloadedCarouselItems: model.allCommunityBusiness.map(communityBusinessPreloadItem),
      });
      flow.events.onNavigateToCommunityBusinessCarousel(
        selectedObjectId,
        objectTypeIn,
        model.communityBusinesses.totalCount,
        currentItemPosition,
      );
    }
  };

  return {
    state,
    onBookmarkedItem: (bookmarkId, itemPosition, objectType) => {
      flow.run(() => navigateToBookmarkedItem(bookmarkId, itemPosition, objectType));
    },
    onTryAgain: () => {
      flow.run(refreshBookmarkData);
    },
  };
}
