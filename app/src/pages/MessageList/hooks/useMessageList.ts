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
import { clientVar } from '@/platform/session/session';
import { decrementReadMessagesCounter } from '@/platform/session/unreadCounters';
import { currDateTime } from '@/lib/osDateTime';
import type { MessageListViewEvents, MessageListViewState } from '@/pages/MessageList/components/MessageListView';
import { INCREMENT_RECORDS, initialMessageListState, messageListReducer } from './messageListState';
import { setUnreadNotificationsNumber } from './unreadNotifications';

/** The flows of the message list block: OnInitialize, OnReady, OnParametersChanged and the screen actions of the
    view. The state and the triggers come from useFlowState: the flows read `latest` and `parameters`, as OutSystems
    assigns variables at once.
    Flow scope (item 8): GetMessages and GetMessageInstanceById2 are data actions (R1, `flow.fetch`): after the unmount
    their answer and their failure are dropped, so OnAfterFetch_GetMessages (the unread number), ScrollToTop, the block
    events, the info message and the refresh do not run. Wrapper_MarkAllAsReadNotifications, MarkMessageAsRead and
    MarkMessageAsClear are server actions (R2): their flows go on, and stop at the next own action of the block
    (RefreshMessages MessageList.js:1661, UpdateMessageRead :1952, UpdateMessageClear :1910: R3, `flow.own`). The
    block events go through `flow.events` (R3).
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
  const { state, dispatch, latest, parameters, flow } = useFlowState({
    viewName: VIEW_NAME,
    reducer: messageListReducer,
    // OnInitialize: DeviceHardwareId = the device UUID (AppManager_GetDeviceContext; "" on the web).
    initial: initialMessageListState(signedIn, clientVar.deviceUuid.get()),
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
    // The flows await the refresh and raise a failure themselves (refreshGetMessages): not the cache subscription.
    meta: { errorFlow: 'caller' },
  });

  /** OnAfterFetch_GetMessages: the list, SetUnreadNotificationsNumber(CountUnreadMessages), the unread totals per
      type, HasUnread, IsRefreshing False. */
  const onAfterFetchGetMessages = (result: MessagesResult) => {
    dispatch({ type: 'messagesFetched', result });
    setUnreadNotificationsNumber(result.countUnreadMessages);
  };

  /** Refresh Query GetMessages (R1, `flow.fetch`); a failure goes to the flow handler with the flow scope. Returns
      false when the flow stops. */
  const refreshGetMessages = async (): Promise<boolean> => {
    const result = await flow.fetch(getMessages.refetch());
    if (result.isSuccess) {
      onAfterFetchGetMessages(result.data);
      return true;
    }
    raiseToFlowHandler(result.error, flow);
    return false;
  };

  /** RefreshMessages(IsScrollToTop): IsRefreshing True, refresh GetMessages, ScrollToTop JS. An own action of the
      block (R3, MessageList.js:1661). */
  const refreshMessages = flow.own(async (isScrollToTop: boolean): Promise<boolean> => {
    dispatch({ type: 'refreshStarted' });
    const ok = await refreshGetMessages();
    if (ok && isScrollToTop) scrollContentToTop();
    return ok;
  });

  // OnInitialize of a view that the view cache restores: FocusCursor only (the variables come back with the view).
  const initializedRef = useRef<true | null>(null);
  if (initializedRef.current == null) {
    initializedRef.current = true;
    if (restoredFromCache) focusCursor();
  }

  /** OnReady: Refresh Query GetMessages. useFlowState runs it once per instance, also in StrictMode (item 8 §2.3). */
  async function onReady() {
    await refreshGetMessages();
  }

  /** OnParametersChanged: Trigger_PullToRefresh → PullToRefresh, then the event PullToRefreshTriggered (R3,
      `flow.events`). */
  async function onParametersChanged() {
    if (!parameters.current.triggerPullToRefresh) return;
    await pullToRefresh();
    flow.events.onPullToRefreshTriggered();
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

  /** OnClick_GoToMessageDetail(MessageInstanceId): GetMessageInstanceById2 (R1, `flow.fetch`); Exist →
      NavigateTo_MessageDetail (R3, `flow.events`), otherwise the info message and a GetMessages refresh. */
  const onClickGoToMessageDetail = async (messageInstanceId: string): Promise<void> => {
    dispatch({ type: 'currentMessageSet', messageInstanceId });
    const exists = await flow.fetch(
      fetchMessageInstanceExists(
        latest.current.variables,
        latest.current.messagesList,
        parameters.current.triggerPullToRefresh,
      ),
    );
    if (exists) {
      flow.events.onNavigateToMessageDetail(messageInstanceId);
      return;
    }
    showFeedbackMessage('This message is no longer available', PLATFORM_MESSAGE_TYPE.info);
    await refreshGetMessages();
  };

  /** OnClick_MarkAllAsRead: IsShowLoading, Wrapper_MarkAllAsReadNotifications (R2); TotalChange > 0 → RefreshMessages
      (R3: stops the flow after the unmount) and SynchronizeNumberUnreadMessages; IsShowLoading False. */
  const onClickMarkAllAsRead = async () => {
    dispatch({ type: 'showLoadingSet', isShowLoading: true });
    const totalChange = await markAllNotificationsAsRead(markAllAsReadFilter(latest.current.variables));
    if (totalChange > 0) {
      if (!(await refreshMessages(false))) return;
      await synchronizeNumberUnreadMessages();
    }
    dispatch({ type: 'showLoadingSet', isShowLoading: false });
  };

  /** UpdateMessageRead(MessageInstanceId): DecrementReadMessagesCounter, the row IsRead = True. An own action of the
      block (R3, MessageList.js:1952). */
  const updateMessageRead = flow.own((messageInstanceId: string) => {
    decrementReadMessagesCounter();
    dispatch({ type: 'messageRead', messageInstanceId });
  });
  /** UpdateMessageClear(IsRead): not read → DecrementReadMessagesCounter. An own action of the block (R3,
      MessageList.js:1910). */
  const updateMessageClear = flow.own((isRead: boolean) => {
    if (!isRead) decrementReadMessagesCounter();
  });
  /** Swipe_EventsRead: MarkMessageAsRead (R2) → MessagesList.HasUnreadMessages, UpdateMessageRead. */
  const swipeEventsRead = async (messageInstanceId: string) => {
    const hasUnreadMessages = await markMessageAsRead(messageInstanceId, latest.current.variables);
    dispatch({ type: 'unreadMessagesChanged', hasUnreadMessages });
    updateMessageRead(messageInstanceId);
  };
  /** Swipe_EventsClear: HideMessageClear, MarkMessageAsClear (R2) → HasUnreadMessages; no message left →
      IsEmptyMessage; UpdateMessageClear(IsRead). */
  const swipeEventsClear = async (messageInstanceId: string) => {
    dispatch({ type: 'messageHidden', messageInstanceId });
    const out = await markMessageAsClear(messageInstanceId, latest.current.variables);
    dispatch({ type: 'unreadMessagesChanged', hasUnreadMessages: out.hasUnreadMessages });
    if (!out.isHaveMessage) dispatch({ type: 'messagesEmptied' });
    updateMessageClear(out.isRead);
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

  /** A flow that a widget event starts and whose Promise the widget awaits (OSListItem keeps the class "active" until
      it settles; OSList starts no new OnScrollEnding before): an unhandled error goes to the flow handler with the
      flow scope, as `flow.run` does. */
  const runAwaited =
    <A extends unknown[]>(handler: (...args: A) => Promise<void>) =>
    (...args: A): Promise<void> =>
      handler(...args).catch((error: unknown) => {
        raiseToFlowHandler(error, flow);
      });

  return {
    variables: state.variables,
    messagesList: state.messagesList,
    isDataFetched: getMessages.isSuccess,
    onPullToRefresh: () => {
      flow.run(pullToRefresh);
    },
    onCloseSearchAndFilter: () => {
      flow.run(onClickCloseSearchAndFilter);
    },
    onSearchStringChange: (value) => {
      dispatch({ type: 'searchStringChanged', value });
    },
    onSearchSubmit: () => {
      flow.run(() => onHandleSearchHistorySelectedItem(''));
    },
    onSearchClear: () => {
      flow.run(onClickSearchClear);
    },
    onSearch: onClickSearch,
    onFilter: onClickFilter,
    onToggleShowFilters: toggleShowFilters,
    onNavigateToLogin: () => {
      dispatch({ type: 'loginRequested', dateTime: currDateTime() });
    },
    onDismissWarning: () => {
      dispatch({ type: 'warningDismissed' });
    },
    onSwipeEventsClear: runAwaited(swipeEventsClear),
    onMarkAllRead: () => {
      flow.run(onClickMarkAllAsRead);
    },
    onGoToMessageDetail: runAwaited(onClickGoToMessageDetail),
    onSwipeEventsRead: runAwaited(swipeEventsRead),
    onScrollEnding: runAwaited(onScrollEnding),
    onMessageSort: (isAscending) => {
      dispatch({ type: 'sortChanged', isAscending });
    },
    onResetFilters: () => {
      flow.run(onClickResetFilters);
    },
    onApplyFilters: () => {
      flow.run(onClickApplyFilters);
    },
    onBackNavigation,
  };
}
