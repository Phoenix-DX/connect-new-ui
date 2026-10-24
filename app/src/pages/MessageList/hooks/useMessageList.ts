import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import {
  fetchMessageInstanceExists,
  fetchMessages,
  markMessageAsClear,
  markMessageAsRead,
  type MessageListCallInputs,
  type MessagesResult,
} from '@/api/message';
import { markAllNotificationsAsRead, type NotificationReadFilter } from '@/api/notification';
import { synchronizeNumberUnreadMessages } from '@/platform/bootstrap/startup';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, useWasRestoredFromCache, type BackNavigationEvent } from '@/platform/navigation';
import { getClientVar } from '@/platform/session/session';
import { decrementReadMessagesCounter } from '@/platform/session/unreadCounters';
import { currDateTime } from '@/lib/osDateTime';
import type { MessageListViewEvents, MessageListViewState } from '@/pages/MessageList/components/MessageListView';
import { INCREMENT_RECORDS, initialMessageListState, messageListReducer } from './messageListState';
import { setUnreadNotificationsNumber } from './unreadNotifications';

/** The flows of the message list block: OnInitialize, OnReady, OnParametersChanged and the screen actions of the
    view. The state and the triggers come from useFlowState: the flows read `latest`, `parameters` and `events`, as
    OutSystems assigns variables at once.
    @origin Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList */

/** The inputs of the block, and the session state that the block reads. */
export interface MessageListInputs {
  /** The user is signed in (InitializeSetting and OnClick_ResetFilters read it). */
  signedIn: boolean;
  /** Input Trigger_PullToRefresh. */
  triggerPullToRefresh: boolean;
}

/** The events of the block. */
export interface MessageListEvents {
  /** Event NavigateTo_MessageDetail(MessageInstanceId). */
  onNavigateToMessageDetail: (messageInstanceId: string) => void;
  /** Event PullToRefreshTriggered. */
  onPullToRefreshTriggered: () => void;
}

/** What the page gives the view, and the BackNavigationHandler event. */
export interface MessageListFlows extends MessageListViewState, MessageListViewEvents {
  /** BackNavigationHandler: the filters or the search are open → PreventNavigation and close them. */
  onBackNavigation: (event: BackNavigationEvent) => void;
}

/** The name under which the view cache keeps the block variables. */
const VIEW_NAME = 'Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList';
/** GetMessages refreshes on demand only (OnReady, RefreshMessages). The key does not change, so the view cache
    restores the data (P-BACK). */
const GET_MESSAGES_KEY = ['MessageList', 'DataActionGetMessages'] as const;

/** FocusCursor JS (OnInitialize, OnClick_Search, OnClick_CloseSearchAndFilter): focus Input_SearchMessages after
    200 ms. */
const focusCursor = () => {
  window.setTimeout(() => document.getElementById('b1-Input_SearchMessages')?.focus(), 200);
};
/** ScrollToTop / SetScrollToTop JS: scroll `.content` to the top. */
const scrollContentToTop = () => {
  const content = document.querySelector('.content');
  if (content) content.scrollTop = 0;
};

/** Wrapper_MarkAllAsReadNotifications(IsPublic, IsPrivate, DeviceHardwareId, SearchTerm): the message type filters,
    the device and the selected search of the block. */
const markAllAsReadFilter = (v: MessageListCallInputs): NotificationReadFilter => ({
  isPublic: v.Filter_MessageTypePublic,
  isPrivate: v.Filter_MessageTypePrivate,
  deviceHardwareId: v.DeviceHardwareId,
  searchTerm: v.SelectedHistorySearch,
});

export function useMessageList(
  { signedIn, triggerPullToRefresh }: MessageListInputs,
  events: MessageListEvents,
): MessageListFlows {
  const restoredFromCache = useWasRestoredFromCache();
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
  } = useFlowState({
    viewName: VIEW_NAME,
    reducer: messageListReducer,
    // OnInitialize: DeviceHardwareId = the device UUID (AppManager_GetDeviceContext; "" on the web).
    initial: initialMessageListState(signedIn, getClientVar('UBT_AppManager.DeviceInfo_UUID')),
    parameters: { triggerPullToRefresh },
    events,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: () => onReady(),
    onParametersChanged: () => onParametersChanged(),
  });

  // Both data actions send the block variables, the list and the input Trigger_PullToRefresh.
  const getMessages = useQuery({
    queryKey: GET_MESSAGES_KEY,
    queryFn: () =>
      fetchMessages(latest.current.variables, latest.current.messagesList, parameters.current.triggerPullToRefresh),
    enabled: false,
    retry: false,
  });

  /** OnAfterFetch_GetMessages: the list, SetUnreadNotificationsNumber(CountUnreadMessages), the unread totals per
      type, HasUnread, IsRefreshing False. */
  const onAfterFetchGetMessages = (result: MessagesResult) => {
    dispatch({ type: 'messagesFetched', result });
    setUnreadNotificationsNumber(result.countUnreadMessages);
  };

  /** Refresh Query GetMessages; a failure goes to the flow handler. Returns false when the flow stops. */
  const refreshGetMessages = async (): Promise<boolean> => {
    const result = await getMessages.refetch();
    if (result.isSuccess) {
      onAfterFetchGetMessages(result.data);
      return true;
    }
    raiseToFlowHandler(result.error);
    return false;
  };

  /** RefreshMessages(IsScrollToTop): IsRefreshing True, refresh GetMessages, ScrollToTop JS. */
  const refreshMessages = async (isScrollToTop: boolean): Promise<boolean> => {
    dispatch({ type: 'refreshStarted' });
    const ok = await refreshGetMessages();
    if (ok && isScrollToTop) scrollContentToTop();
    return ok;
  };

  // OnInitialize of a view that the view cache restores: FocusCursor only (the variables come back with the view).
  const initializedRef = useRef<true | null>(null);
  if (initializedRef.current == null) {
    initializedRef.current = true;
    if (restoredFromCache) focusCursor();
  }

  // OnReady: Refresh Query GetMessages, once (StrictMode runs the effects twice).
  const readyRef = useRef(false);
  async function onReady() {
    if (readyRef.current) return;
    readyRef.current = true;
    await refreshGetMessages();
  }

  /** OnParametersChanged: Trigger_PullToRefresh → PullToRefresh, then the event PullToRefreshTriggered. */
  async function onParametersChanged() {
    if (!parameters.current.triggerPullToRefresh) return;
    await pullToRefresh();
    eventsRef.current.onPullToRefreshTriggered();
  }

  /** PullToRefresh: not refreshing → RefreshMessages(False). */
  async function pullToRefresh() {
    if (!latest.current.variables.IsRefreshing) await refreshMessages(false);
  }

  /** ToggleShowFilters. */
  const toggleShowFilters = () => {
    dispatch({ type: 'filtersToggled' });
  };
  /** ToggleShowSearch. */
  const toggleShowSearch = () => {
    dispatch({ type: 'searchToggled' });
  };

  /** OnClick_ApplyFilters: SaveSetting, RefreshMessages(False), then ToggleShowFilters. */
  const onClickApplyFilters = async () => {
    dispatch({ type: 'settingSaved' });
    if (!(await refreshMessages(false))) return;
    toggleShowFilters();
  };
  /** OnClick_ResetFilters: the default filters, SaveSetting, RefreshMessages(False), then ToggleShowFilters. */
  const onClickResetFilters = async () => {
    dispatch({ type: 'filtersReset', signedIn });
    dispatch({ type: 'settingSaved' });
    if (!(await refreshMessages(false))) return;
    toggleShowFilters();
  };

  /** OnHandle_SearchHistorySelectedItem(SelectedString). */
  const onHandleSearchHistorySelectedItem = async (selectedString: string) => {
    dispatch({ type: 'historySearchSelected', selectedString });
    await refreshMessages(true);
  };
  /** OnClickSearchClear: SearchMessageString "", SetScrollToTop, OnHandle_SearchHistorySelectedItem(""). */
  const onClickSearchClear = async () => {
    dispatch({ type: 'searchCleared' });
    scrollContentToTop();
    await onHandleSearchHistorySelectedItem('');
  };

  /** OnClick_Search: ShowFilters False, ToggleShowSearch, FocusCursor. */
  const onClickSearch = () => {
    dispatch({ type: 'filtersHidden' });
    toggleShowSearch();
    focusCursor();
  };
  /** OnClick_Filter: ShowSearch False, ToggleShowFilters. */
  const onClickFilter = () => {
    dispatch({ type: 'searchHidden' });
    toggleShowFilters();
  };
  /** OnClick_CloseSearchAndFilter: search → toggle it and, unless restored from the cache, clear the search;
      filters → toggle and revert them; then FocusCursor. */
  const onClickCloseSearchAndFilter = async () => {
    if (latest.current.variables.ShowSearch) {
      toggleShowSearch();
      if (!restoredFromCache) await onClickSearchClear();
    } else {
      toggleShowFilters();
      dispatch({ type: 'filtersReverted' });
    }
    focusCursor();
  };

  /** OnClick_GoToMessageDetail(MessageInstanceId): GetMessageInstanceById2; Exist → NavigateTo_MessageDetail,
      otherwise the info message and a GetMessages refresh. */
  const onClickGoToMessageDetail = async (messageInstanceId: string): Promise<void> => {
    dispatch({ type: 'currentMessageSet', messageInstanceId });
    let exists: boolean;
    try {
      exists = await fetchMessageInstanceExists(
        latest.current.variables,
        latest.current.messagesList,
        parameters.current.triggerPullToRefresh,
      );
    } catch (e) {
      raiseToFlowHandler(e);
      return;
    }
    if (exists) {
      eventsRef.current.onNavigateToMessageDetail(messageInstanceId);
      return;
    }
    showFeedbackMessage('This message is no longer available', PLATFORM_MESSAGE_TYPE.info);
    await refreshGetMessages();
  };

  /** OnClick_MarkAllAsRead: IsShowLoading, Wrapper_MarkAllAsReadNotifications; TotalChange > 0 → RefreshMessages and
      SynchronizeNumberUnreadMessages; IsShowLoading False. */
  const onClickMarkAllAsRead = async () => {
    dispatch({ type: 'showLoadingSet', isShowLoading: true });
    try {
      const totalChange = await markAllNotificationsAsRead(markAllAsReadFilter(latest.current.variables));
      if (totalChange > 0) {
        if (!(await refreshMessages(false))) return;
        await synchronizeNumberUnreadMessages();
      }
    } catch (e) {
      raiseToFlowHandler(e);
      return;
    }
    dispatch({ type: 'showLoadingSet', isShowLoading: false });
  };

  /** UpdateMessageRead(MessageInstanceId): DecrementReadMessagesCounter, the row IsRead = True. */
  const updateMessageRead = (messageInstanceId: string) => {
    decrementReadMessagesCounter();
    dispatch({ type: 'messageRead', messageInstanceId });
  };
  /** Swipe_EventsRead: MarkMessageAsRead → MessagesList.HasUnreadMessages, UpdateMessageRead. */
  const swipeEventsRead = async (messageInstanceId: string) => {
    try {
      const hasUnreadMessages = await markMessageAsRead(messageInstanceId, latest.current.variables);
      dispatch({ type: 'unreadMessagesChanged', hasUnreadMessages });
      updateMessageRead(messageInstanceId);
    } catch (e) {
      raiseToFlowHandler(e);
    }
  };
  /** Swipe_EventsClear: HideMessageClear, MarkMessageAsClear → HasUnreadMessages; no message left → IsEmptyMessage;
      UpdateMessageClear(IsRead): not read → DecrementReadMessagesCounter. */
  const swipeEventsClear = async (messageInstanceId: string) => {
    dispatch({ type: 'messageHidden', messageInstanceId });
    try {
      const out = await markMessageAsClear(messageInstanceId, latest.current.variables);
      dispatch({ type: 'unreadMessagesChanged', hasUnreadMessages: out.hasUnreadMessages });
      if (!out.isHaveMessage) dispatch({ type: 'messagesEmptied' });
      if (!out.isRead) decrementReadMessagesCounter();
    } catch (e) {
      raiseToFlowHandler(e);
    }
  };

  /** OnScrollEnding: not refreshing → isLoadMore; when fetched and the list holds at least MaxRecords - 20 rows,
      MaxRecords + 20 and RefreshMessages; isLoadMore False. */
  const onScrollEnding = async (): Promise<void> => {
    if (latest.current.variables.IsRefreshing) return;
    dispatch({ type: 'loadMoreSet', isLoadMore: true });
    if (!getMessages.isSuccess) return;
    if (latest.current.messagesList.items.length >= latest.current.variables.MaxRecords - INCREMENT_RECORDS) {
      dispatch({ type: 'maxRecordsIncreased', increment: INCREMENT_RECORDS });
      await refreshMessages(false);
    }
    dispatch({ type: 'loadMoreSet', isLoadMore: false });
  };

  /** BackNavigationHandler: the filters or the search are open → PreventNavigation and close them. */
  const onBackNavigation = (event: BackNavigationEvent) => {
    if (latest.current.variables.ShowFilters) {
      event.preventDefault();
      toggleShowFilters();
    }
    if (latest.current.variables.ShowSearch) {
      event.preventDefault();
      toggleShowSearch();
    }
  };

  return {
    variables: state.variables,
    messagesList: state.messagesList,
    isDataFetched: getMessages.isSuccess,
    onPullToRefresh: () => void pullToRefresh(),
    onCloseSearchAndFilter: () => void onClickCloseSearchAndFilter(),
    onSearchStringChange: (value) => {
      dispatch({ type: 'searchStringChanged', value });
    },
    onSearchSubmit: () => void onHandleSearchHistorySelectedItem(''),
    onSearchClear: () => void onClickSearchClear(),
    onSearch: onClickSearch,
    onFilter: onClickFilter,
    onNavigateToLogin: () => {
      dispatch({ type: 'loginRequested', dateTime: currDateTime() });
    },
    onDismissWarning: () => {
      dispatch({ type: 'warningDismissed' });
    },
    onSwipeEventsClear: swipeEventsClear,
    onMarkAllRead: () => void onClickMarkAllAsRead(),
    onGoToMessageDetail: onClickGoToMessageDetail,
    onSwipeEventsRead: swipeEventsRead,
    onScrollEnding,
    onMessageSort: (isAscending) => {
      dispatch({ type: 'sortChanged', isAscending });
    },
    onResetFilters: () => void onClickResetFilters(),
    onApplyFilters: () => void onClickApplyFilters(),
    onBackNavigation,
  };
}
