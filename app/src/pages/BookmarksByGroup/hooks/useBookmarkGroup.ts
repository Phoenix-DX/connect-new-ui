import { useRef } from 'react';
import {
  deleteBookmark,
  fetchBookmarkById,
  fetchBookmarkGroup,
  updateBookmarkNote,
  type Bookmark,
} from '@/api/bookmark';
import { exceptionMessage, isSystemException } from '@/legacy/os/exceptions';
import { showFeedbackMessage } from '@/platform/feedback';
import { confirmAction, showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { setPreloadObject, useFlowState, type BackNavigationEvent, type IsAlive } from '@/platform/navigation';
import { legacyDelete_LocalBookmarkByBookmarkId } from '@/platform/storage/localEntities';
import { getCachedMyBookmarks, putCachedMyBookmarks } from '@/shared/Connect2_LegacyShared/lib/actions';
import {
  CommunityBusinessType2,
  Connect_Entity,
  MyBookmarks_Group,
  MyBookmarks_ObjectType,
} from '@/pages/BookmarksByGroup/staticEntities';
import type { BookmarkNote } from '@/pages/BookmarksByGroup/types';
import {
  auditBookmarkSubscriptionEvent,
  fromCacheRecord,
  sendBookmarkedFeedbackMessage,
  sendBookmarkedHiddenFeedbackMessage,
  toCacheRecord,
} from './bookmarkGroupActions';
import {
  bookmarkGroupCallInputs,
  bookmarkGroupIds,
  bookmarkGroupReducer,
  INITIAL_BOOKMARK_GROUP_STATE,
  restoredBookmarkGroupState,
  withNote,
  withoutRow,
  type BookmarkGroupAction,
  type BookmarkGroupState,
} from './bookmarkGroupState';

/** The flows of the block ScreenBlock_BookmarkGroup: OnInitialize, OnReady (RefreshBookmarkData), the row click, the
    bookmark toggle, the share, the note save and the back navigation. The page calls this hook and passes the result
    to BookmarkGroupView.
    @origin Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup */

/** The input of the block. */
export interface BookmarkGroupInputs {
  /** Input BookmarkGroup (a MyBookmarks_Group identifier). */
  bookmarkGroup: string;
}

/** The flags that the block reads (the page reads them). */
export interface BookmarkGroupFlags {
  /** GetHasBookmarNote (mobileDirectoryBookmarkNote, off on TST): New_GetBookmarkById and the BookmarkNote block. */
  hasBookmarkNote: boolean;
  /** GetHasExtendedShare (C2ExtendedShare, on on TST): the ShareSheet opens on a share. */
  hasExtendedShare: boolean;
}

/** The events of the block: the screen handles them (NavigateTo_*). */
export interface BookmarkGroupEvents {
  /** NavigateTo_HouseholdCarousel(SelectedHouseholdId, ItemPosition, HouseholdIdList). */
  onNavigateToHouseholdCarousel: (selectedHouseholdId: string, itemPosition: number, householdIdList: string[]) => void;
  /** NavigateTo_CommunityBusinessCarousel(CommunityBusinessId, ItemPosition, ObjectType). */
  onNavigateToCommunityBusinessCarousel: (
    communityBusinessId: string,
    itemPosition: number,
    objectType: string,
  ) => void;
  /** NavigateTo_Locality(LocalityId). */
  onNavigateToLocality: (localityId: string) => void;
  /** NavigateTo_Subdivision(SubdivisionId). */
  onNavigateToSubdivision: (subdivisionId: string) => void;
}

/** What the page gives the view, the share sheet and the BackNavigationHandler. */
export interface BookmarkGroupFlows {
  /** The block variables (rendered). */
  state: BookmarkGroupState;
  /** OnClick_BookmarkedItem(BookmarkItemId, CurrentRowNumber). */
  onClickBookmarkedItem: (bookmarkItemId: string, currentRowNumber: number) => void;
  /** OnHandle_BookmarkToggle(BookmarkId, CurrentPosition): ItemOptionsMenu BookmarkToggle. */
  onBookmarkToggle: (bookmarkId: string, currentPosition: number) => void;
  /** OnHandle_ShareItem: ItemOptionsMenu ShareToConnect. */
  onShareItem: (
    item: Bookmark,
    shareObjectTypeId: string,
    objectId: string,
    isRecordDisabled: boolean,
    entityTypeId: string,
  ) => void;
  /** Handler_OnSaveBookmarkNote: BookmarkNoteAddEdit Save_Note, BookmarkNoteDelete DeleteNoteConfirm (note ""). */
  onSaveBookmarkNote: (note: BookmarkNote) => void;
  /** Handler_CloseShareSheet: ShareSheet Event_ClosedShareSheet. */
  onCloseShareSheet: () => void;
  /** BackNavigationHandler. */
  onBackNavigation: (event: BackNavigationEvent) => void;
}

/** The name under which the view cache keeps the block variables. */
const VIEW_NAME = 'Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup';

/** SetScrollToTop JS of RefreshBookmarkData. */
const setScrollToTop = () => {
  document.querySelector('.content')?.scroll({ top: 0, left: 0, behavior: 'instant' });
};

/** The state and the flows of the block. `blockId` is the block instance id (`$b1`).
    - OnInitialize: IsFromNavigationHistory = WasCurrentViewRestoredFromCache. A restored view takes the rows of the
      MyBookmarks cache (restoredBookmarkGroupState); a new visit starts with an empty list.
    - OnReady: RefreshBookmarkData(False), unless the view was restored.
    - Decision W23: after an unmount, a started flow skips its state writes only. Its calls, the MyBookmarks cache
      writes, the feedback messages, the dialogs and the navigation events still run. */
export function useBookmarkGroup(
  blockId: string,
  { bookmarkGroup }: BookmarkGroupInputs,
  { hasBookmarkNote, hasExtendedShare }: BookmarkGroupFlags,
  events: BookmarkGroupEvents,
): BookmarkGroupFlows {
  const ids = bookmarkGroupIds(blockId);
  /* OnReady runs once per block. StrictMode (dev) runs the mount effect again on the same block: the second call only
     replaces the liveness check, so the first flow writes the state while the block is there and calls each action
     once. */
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
  } = useFlowState({
    viewName: VIEW_NAME,
    reducer: bookmarkGroupReducer,
    initial: INITIAL_BOOKMARK_GROUP_STATE,
    // PreloadListSource_Bookmarks: GetCachedMyBookmarks(BookmarkGroup); on a hit BookmarkedItems and UpdatedTotal.
    restore: () => restoredBookmarkGroupState(getCachedMyBookmarks(bookmarkGroup).bookmarks.map(fromCacheRecord)),
    parameters: { bookmarkGroup },
    events,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (isAlive, restored) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      return onReady(restored);
    },
  });

  /** A state write, skipped after the unmount (W23). */
  const write = (action: BookmarkGroupAction) => {
    if (newestReadyRun.current()) dispatch(action);
  };

  /** PutCachedMyBookmarks(BookmarkGroup, BookmarkedItems): the Connect2_LegacyShared cache of BookmarkItem records. */
  const putCachedBookmarkedItems = (rows: readonly Bookmark[]) => {
    const group = parameters.current.bookmarkGroup;
    putCachedMyBookmarks(
      group,
      rows.map((row) => toCacheRecord(row, group)),
    );
  };

  /** Refresh Query GetAllBookmarksByGroup, then OnAfterFetch_GetAllBookmarksByGroup: BookmarkedItems, UpdatedTotal,
      IsFetchingBookmarks False, PutCachedMyBookmarks. */
  const fetchBookmarks = async () => {
    const out = await fetchBookmarkGroup(bookmarkGroupCallInputs(parameters.current.bookmarkGroup, latest.current));
    write({ type: 'fetched', result: out });
    putCachedBookmarkedItems(out.results);
  };

  /** RefreshBookmarkData(IsScrollToTop): IsFetchingBookmarks True, refresh, SetScrollToTop when asked. AllExceptions:
      IsFetchingBookmarks False and an error message with the exception text; a system exception goes on. */
  const refreshBookmarkData = async (isScrollToTop: boolean) => {
    write({ type: 'fetchStarted' });
    try {
      await fetchBookmarks();
      if (isScrollToTop) setScrollToTop();
    } catch (e) {
      if (isSystemException(e)) throw e;
      write({ type: 'fetchFailed' });
      showFeedbackMessage(exceptionMessage(e), 3);
    }
  };

  /** OnReady: RefreshBookmarkData(False) unless the view cache restored the view. useFlowState sends a rejection to
      the flow handler. */
  const onReady = async (restored: boolean) => {
    if (restored) return;
    await refreshBookmarkData(false);
  };

  /** UpgradeSubscription(ObjectId): AuditBookmarkSubscriptionEvent (the object id in the slot of the group), then
      ConfirmAction of FreeSubscriptionAlert. */
  const upgradeSubscription = async (objectId: string) => {
    const group = parameters.current.bookmarkGroup;
    const slot = (of: string) => (group === of ? objectId : '0');
    auditBookmarkSubscriptionEvent(
      slot(MyBookmarks_Group.Contacts),
      slot(MyBookmarks_Group.Locations),
      '',
      slot(MyBookmarks_Group.Entities),
    );
    await confirmAction(ids.freeSubscriptionAlert);
  };

  /** OnHandle_BookmarkToggle(BookmarkId, CurrentPosition): DeleteBookmarkByBookmarkId; on Success ListRemove,
      "Removed from your Bookmarks", UpdatedTotal - 1, Delete_LocalBookmarkByBookmarkId (the legacy local copy,
      CR-BookmarksByGroup-2) and PutCachedMyBookmarks; else an info message. */
  const onBookmarkToggle = async (bookmarkId: string, currentPosition: number) => {
    const success = await deleteBookmark(bookmarkId);
    if (success) {
      const next = withoutRow(latest.current.bookmarkedItems, currentPosition);
      write({ type: 'bookmarkRemoved', currentPosition });
      sendBookmarkedFeedbackMessage(false);
      await legacyDelete_LocalBookmarkByBookmarkId(bookmarkId);
      putCachedBookmarkedItems(next);
    } else {
      showFeedbackMessage('Bookmark could not be removed. Please try again later.', 0);
    }
  };

  /** OnHandle_ShareItem: no share type → "Coming soon"; a disabled record → UpgradeSubscription; with
      GetHasExtendedShare the ShareSheet opens for the row (OneSchool Global: the location from AreasServed and the
      photo). Without it the block raises NavigateTo_ShareObject: not built (the flag is on on TST). */
  const onShareItem = async (
    item: Bookmark,
    shareObjectTypeId: string,
    objectId: string,
    isRecordDisabled: boolean,
    entityTypeId: string,
  ) => {
    if (shareObjectTypeId === '') {
      showFeedbackMessage('Coming soon', 0);
      return;
    }
    if (isRecordDisabled) {
      await upgradeSubscription(objectId);
      return;
    }
    if (!hasExtendedShare) return;
    const d = item.details;
    const isOneSchool = entityTypeId === Connect_Entity.OneSchoolGlobal;
    dispatch({
      type: 'shareOpened',
      objectId: item.objectId,
      typeId: shareObjectTypeId,
      object: {
        ConnectEntityTypeId: entityTypeId,
        Id: item.objectId,
        Title: item.title,
        Subtitle: d.childrenNames,
        Location: isOneSchool ? d.areasServed + ', ' + d.countryName : d.localityName + ', ' + d.countryName,
        SignedURL: isOneSchool ? item.image : '',
      },
    });
  };

  /** Handler_OnSaveBookmarkNote: UpdateNote (New_UpdateBookmarkNote with the trimmed note; on failure an error
      message), then the row's Note = Trim(note) and PutCachedMyBookmarks. */
  const onSaveBookmarkNote = (note: BookmarkNote) => {
    updateBookmarkNote(note.bookmarkId, note.note.trim())
      .then((success) => {
        if (!success) showFeedbackMessage('There was an error, please try again.', 3);
      })
      .catch(raiseToFlowHandler);
    const next = withNote(latest.current.bookmarkedItems, note.bookmarkId, note.note.trim());
    dispatch({ type: 'noteSaved', bookmarkId: note.bookmarkId, note: note.note.trim() });
    putCachedBookmarkedItems(next);
  };

  /** OnClick_BookmarkedItem(BookmarkItemId, CurrentRowNumber): GetBookmarkById (CR-BookmarksByGroup-1). Found → not
      available (hidden message), disabled (App_Subscription_ShowUpgradePopUp), or RememberFocusedScrollAnchor (the
      view cache keeps the scroll), PutCachedMyBookmarks and the navigation of the group. Not found → an error message
      and a refresh. */
  const onClickBookmarkedItem = async (bookmarkItemId: string, currentRowNumber: number) => {
    const found = await fetchBookmarkById(bookmarkItemId, hasBookmarkNote);
    if (!found.isBookmarkFound) {
      showFeedbackMessage('That bookmark isn’t available', 3);
      await fetchBookmarks();
      return;
    }
    const item = found.item;
    if (item.recordNotAvailable) {
      sendBookmarkedHiddenFeedbackMessage(item.objectType);
      return;
    }
    if (item.recordDisabled) {
      await showUpgradePopUp();
      return;
    }
    const rows = latest.current.bookmarkedItems;
    putCachedBookmarkedItems(rows);
    const group = parameters.current.bookmarkGroup;
    if (group === MyBookmarks_Group.Contacts) {
      // NavigateTo_HouseholdsCarousel: the block's preload, then the screen's (which replaces it).
      setPreloadObject({
        IsPreloaded: true,
        PreloadedCarouselItems: rows.map((b) => ({
          Id: b.objectId,
          Name: b.title,
          IsDeceased: b.details.isDeceased,
          Image: b.image,
        })),
      });
      eventsRef.current.onNavigateToHouseholdCarousel(
        item.objectId,
        currentRowNumber,
        rows.map((b) => b.objectId),
      );
    } else if (group === MyBookmarks_Group.Entities) {
      // NavigateTo_CommunityBusinessDetail.
      setPreloadObject({
        IsPreloaded: true,
        PreloadedCarouselItems: rows.map((b) => ({
          Id: b.objectId,
          Name: b.title,
          SignedURL: b.image,
          CommunityBusinessTypeId:
            b.objectType === MyBookmarks_ObjectType.CampusCo
              ? CommunityBusinessType2.CampusCo
              : b.objectType === MyBookmarks_ObjectType.OneSchoolGlobal
                ? CommunityBusinessType2.OneSchoolGlobal
                : '',
        })),
      });
      eventsRef.current.onNavigateToCommunityBusinessCarousel(item.objectId, currentRowNumber, item.objectType);
    } else if (group === MyBookmarks_Group.Locations) {
      if (item.objectType === MyBookmarks_ObjectType.Locality) {
        eventsRef.current.onNavigateToLocality(item.details.localityId);
      } else {
        eventsRef.current.onNavigateToSubdivision(item.objectId);
      }
    }
  };

  return {
    state,
    onClickBookmarkedItem: (bookmarkItemId, currentRowNumber) => {
      onClickBookmarkedItem(bookmarkItemId, currentRowNumber).catch(raiseToFlowHandler);
    },
    onBookmarkToggle: (bookmarkId, currentPosition) => {
      onBookmarkToggle(bookmarkId, currentPosition).catch(raiseToFlowHandler);
    },
    onShareItem: (item, shareObjectTypeId, objectId, isRecordDisabled, entityTypeId) => {
      onShareItem(item, shareObjectTypeId, objectId, isRecordDisabled, entityTypeId).catch(raiseToFlowHandler);
    },
    onSaveBookmarkNote,
    onCloseShareSheet: () => {
      dispatch({ type: 'shareClosed' });
    },
    // BackNavigationHandler: SearchString and ShowSearch never change here, so only the Contacts branch runs:
    // SetPreloadObject(BookmarkedItems) for the previous screen.
    onBackNavigation: () => {
      if (parameters.current.bookmarkGroup === MyBookmarks_Group.Contacts) {
        setPreloadObject(latest.current.bookmarkedItems);
      }
    },
  };
}
