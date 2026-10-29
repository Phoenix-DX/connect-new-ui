import { useCallback, useEffect, useReducer, useRef } from 'react';
import {
  deleteNotifications,
  fetchNotificationDateRanges,
  fetchNotifications,
  markAllAsReadNotifications,
  markNotificationAsRead,
} from '@/api/notification';
import { UserException, exceptionMessage, isSystemException } from '@/legacy/os/exceptions';
import { useFlowScope, useOsNavigate, useViewState } from '@/platform/navigation';
import { directory_Updates_RefreshBottomBarCount, scrollTop } from '@/lib/ubtConnect/actions';
import { bottomSheetOpen } from '@/components/ui/lib/actions';
import {
  INITIAL_CACHED_VARIABLES,
  app_Notifications_AugmentDateRanges,
  app_Notifications_GetBreakpoints,
  cachedVariablesOf,
  initialNotificationsState,
  notificationsReducer,
  type NotificationsAction,
  type NotificationsCachedVariables,
  type NotificationsState,
} from './notificationsState';

/** The flows of the Notifications screen (TST publish of 2026-10-27): OnReady (GetDateRanges, then
    FetchNotifications), RefreshNotifications, the search input of the header, the kebab button, ApplyFilters of the two
    sheets, the only-unread switch, the read count, mark all as read, delete all, and the events that set a variable.
    @origin UBTConnect.App_Notifications.Notifications */

/** The name under which the view cache keeps the cached variables. */
const VIEW_NAME = 'App_Notifications.Notifications';

/** What the page renders and the handlers of its events. */
export interface NotificationsFlows {
  /** The screen variables and the outputs of FetchNotifications. */
  state: NotificationsState;
  /** OnHeaderScrolled of Layout_MainPages_Upgrade. */
  onHeaderScrolled: (isHeaderScrolled: boolean) => void;
  /** Handler_ToggleSearch: the search icon and the back arrow of the scrolled header. */
  onToggleSearch: () => void;
  /** Handler_FilterSearchText: Submit of a search input, with its text. */
  onFilterSearchText: (text: string) => void;
  /** Handler_OnChangeSearchInput: OnChange of a search input, with In_IsToggleSearch. */
  onChangeSearchInput: (text: string, inIsToggleSearch: boolean) => void;
  /** OnClick_KebabButton: opens Notifications_MoreActionSheet. */
  onKebab: () => void;
  /** Handler_ApplyFilters(HasFiltersApplied, IsNewestToOldest): ApplyFilters of both sheets (the more-actions sheet
      passes True). */
  onApplyFilters: (isNewestToOldest: boolean) => void;
  /** Handler_OnlyShowUnread: OnlyShowUnread of Notifications_Action. */
  onOnlyShowUnread: (onlyShowUnread: boolean) => void;
  /** Handler_UpdateReadCount: UpdateReadCount(AddToCount, IsDelete, IsRead) of NotificationsListBreakpoints. */
  onUpdateReadCount: (addToCount: boolean, isDelete: boolean, isRead: boolean) => void;
  /** Handler_MoreActionSheetMarkAllAsRead: MarkAllAsRead of Notifications_MoreActionSheet. */
  onMarkAllAsRead: () => void;
  /** Handler_MoreActionSheetDeleteAll: DeleteAll of Notifications_MoreActionSheet. */
  onDeleteAll: () => void;
  /** SheetInitialized of Notifications_SortSheet. */
  onFilterSheetInitialized: (sheetId: string) => void;
  /** SheetInitialized of Notifications_MoreActionSheet. */
  onMoreActionSheetInitialized: (sheetId: string) => void;
  /** Handler_NotificationDetail: NotificationDetail of the list, with the notification id and IsRead. */
  onNotificationDetail: (messageInstanceId: string, isRead: boolean) => void;
}

/** The view cache keeps three variables, not the whole state: a restored view starts without the list and fetches it
    again from OnReady. useFlowState keeps the whole state, so the hook keeps the reducer and the latest state itself,
    with the flow scope of `useFlowScope` (item 8). After the screen unmounts, `dispatch` is a no-op: TST drops the
    answer of a disposed screen (R1). The scope is alive again (StrictMode mounts twice) in a layout effect, before the
    passive effects of the blocks, which raise events such as SheetInitialized, run. */
function useNotificationsState() {
  const flow = useFlowScope();
  const [cached, setCached] = useViewState<NotificationsCachedVariables>(VIEW_NAME, INITIAL_CACHED_VARIABLES);
  // ScreenEvent_OnInitialize, before the first render (a restored view starts from its cached variables).
  const [state, dispatchToView] = useReducer(notificationsReducer, cached, initialNotificationsState);
  // The screen variables as the flows read them: OutSystems assigns a variable at once, before the next render.
  const latest = useRef(state);
  const dispatch = useCallback(
    (action: NotificationsAction) => {
      if (!flow.alive()) return;
      const previous = latest.current;
      latest.current = notificationsReducer(previous, action);
      const next = latest.current;
      if (
        next.currentSearchString !== previous.currentSearchString ||
        next.filter_Updates !== previous.filter_Updates ||
        next.hasFiltersApplied !== previous.hasFiltersApplied
      )
        setCached(cachedVariablesOf(next));
      dispatchToView(action);
    },
    [setCached, flow],
  );
  return { state, latest, dispatch, flow };
}

/** Flow scope (item 8): FetchNotifications and GetDateRanges are data actions (R1, `flow.fetch`,
    Notifications.js:1363 and :1335): after the unmount their answers and failures are dropped, so their OnAfterFetch
    (the bottom bar count, RefreshNotifications) does not run and no failure reaches the flow handler. */
export function useNotifications(): NotificationsFlows {
  const { state, latest, dispatch, flow } = useNotificationsState();
  const navigate = useOsNavigate();

  /** A handled exception of an OnAfterFetch: isLoading False, then BubbleGenericException. A system exception goes up
      as it is. */
  const bubbleGenericException = (error: unknown): never => {
    if (isSystemException(error)) throw error;
    dispatch({ type: 'loadingEnded' });
    throw new UserException(exceptionMessage(error), 'UBTConnect.BubbleGenericException');
  };

  /* RefreshNotifications → FetchNotifications, then OnAfterFetch_FetchNotifications: Breakpoints, CurrentBreakpoint,
     ShowMarkAll, isLoading False, the scroll listener (no element: nothing) and the bottom bar count. */
  const refreshNotifications = async () => {
    const list = await flow.fetch(fetchNotifications(latest.current)); // R1
    dispatch({
      type: 'notificationsFetched',
      items: list.items,
      unreadNotificationsCount: list.unreadNotificationsCount,
    });
    try {
      const breakpoints = app_Notifications_GetBreakpoints(list.items, latest.current.dateRanges);
      dispatch({ type: 'breakpointsSet', breakpoints });
      await directory_Updates_RefreshBottomBarCount(true);
    } catch (error) {
      bubbleGenericException(error);
    }
  };

  /* ScreenEvent_OnReady: isLoading, the skeleton list (not shown: no breakpoint yet), GetDateRanges, then
     OnAfterFetch_GetDateRanges: AugmentDateRanges, SetDefaultFilters, RefreshNotifications. The scroll threshold and
     scroll end scripts target the floating header, which is in a Container with Visible False, so they find no element
     and do nothing. SetStickyHeaderHeight runs before any `.updates-list__header` exists (nothing), and FocusCursor
     focuses the wrapper of the Input block (nothing). */
  const onReady = async () => {
    dispatch({ type: 'loadingStarted' });
    const ranges = await flow.fetch(fetchNotificationDateRanges(latest.current)); // R1
    try {
      const dateRanges = app_Notifications_AugmentDateRanges(ranges.map((r) => r.id));
      dispatch({ type: 'dateRangesAugmented', dateRanges });
      await refreshNotifications();
    } catch (error) {
      bubbleGenericException(error);
    }
  };

  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    flow.run(onReady);
    /* OnReady runs once, also when StrictMode runs the effects twice. Its flows read `latest` and call `dispatch`,
       which do not change. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Handler_FilterSearchText after its assignments: ScrollTop, isLoading, then RefreshNotifications. */
  const scrollTopAndRefresh = () => {
    scrollTop('.active-screen', 'instant');
    dispatch({ type: 'loadingStarted' });
    flow.run(refreshNotifications);
  };

  // Handler_FilterSearchText: the same text as the filter does nothing more.
  const onFilterSearchText = (text: string) => {
    dispatch({ type: 'searchStringSet', text });
    if (text === latest.current.filter_Updates.searchText) return;
    dispatch({ type: 'searchTextFiltered', text });
    scrollTopAndRefresh();
  };

  const onChangeSearchInput = (text: string, inIsToggleSearch: boolean) => {
    dispatch({ type: 'searchInputChanged', text, inIsToggleSearch });
  };

  const onToggleSearch = () => {
    dispatch({ type: 'searchToggled' });
  };

  const onKebab = () => {
    bottomSheetOpen(latest.current.moreAction_BottomSheetId);
  };

  /* Handler_ApplyFilters (Notifications.mvc.js:2781-2810): the assignments (isLoading True, OrderByIsAscending), then
     RefreshNotifications; no ScrollTop in the TST publish of 2026-10-27. */
  const onApplyFilters = (isNewestToOldest: boolean) => {
    dispatch({ type: 'filtersApplied', isNewestToOldest });
    flow.run(refreshNotifications);
  };

  // Handler_OnlyShowUnread (:1604-1630): Local_OnlyShowUnread, then FetchNotifications again (no isLoading).
  const onOnlyShowUnread = (onlyShowUnread: boolean) => {
    dispatch({ type: 'onlyShowUnreadSet', onlyShowUnread });
    flow.run(refreshNotifications);
  };

  const onUpdateReadCount = (addToCount: boolean, _isDelete: boolean, isRead: boolean) => {
    dispatch({ type: 'readCountUpdated', addToCount, isRead });
  };

  /* Handler_MoreActionSheetMarkAllAsRead (:2611-2662): isLoading, MarkAllAsReadNotifications (a server action: R2,
     not wrapped) with the message types, the device and CurrentSearchString, SetBadgeCountsToZero, isLoading False,
     the bottom bar count, then RefreshNotifications. */
  const markAllAsRead = async () => {
    dispatch({ type: 'loadingStarted' });
    const v = latest.current;
    await markAllAsReadNotifications({
      isPublic: v.filter_MessageTypePublic,
      isPrivate: v.filter_MessageTypePrivate,
      deviceHardwareId: v.deviceHardwareId,
      searchTerm: v.currentSearchString,
    });
    dispatch({ type: 'badgeCountsZeroed' });
    dispatch({ type: 'loadingEnded' });
    await directory_Updates_RefreshBottomBarCount(true);
    await refreshNotifications();
  };

  /* Handler_MoreActionSheetDeleteAll (:2704-2743): isLoading, Delete_Notifications with the fetched list, isLoading
     False, then RefreshNotifications. */
  const deleteAll = async () => {
    dispatch({ type: 'loadingStarted' });
    await deleteNotifications(latest.current.items);
    dispatch({ type: 'loadingEnded' });
    await refreshNotifications();
  };

  const onHeaderScrolled = (isHeaderScrolled: boolean) => {
    dispatch({ type: 'headerScrolled', isHeaderScrolled });
  };

  const onFilterSheetInitialized = (sheetId: string) => {
    dispatch({ type: 'filterSheetInitialized', sheetId });
  };

  const onMoreActionSheetInitialized = (sheetId: string) => {
    dispatch({ type: 'moreActionSheetInitialized', sheetId });
  };

  /* Handler_NotificationDetail (live TST copy, Notifications.mvc.js:2986-3003): MarkAsRead when the notification is
     not read (a server action: R2, not wrapped), then NotificationDetails with its id and the Default transition (R4
     in useOsNavigate). The click of the list starts the flow (R6). */
  const notificationDetail = async (messageInstanceId: string, isRead: boolean) => {
    if (!isRead) await markNotificationAsRead(messageInstanceId);
    navigate('/UBTConnect/NotificationDetails', { MessageInstanceId: messageInstanceId });
  };

  const onNotificationDetail = (messageInstanceId: string, isRead: boolean) => {
    flow.run(() => notificationDetail(messageInstanceId, isRead));
  };

  return {
    state,
    onHeaderScrolled,
    onToggleSearch,
    onFilterSearchText,
    onChangeSearchInput,
    onKebab,
    onApplyFilters,
    onOnlyShowUnread,
    onUpdateReadCount,
    onMarkAllAsRead: () => {
      flow.run(markAllAsRead);
    },
    onDeleteAll: () => {
      flow.run(deleteAll);
    },
    onFilterSheetInitialized,
    onMoreActionSheetInitialized,
    onNotificationDetail,
  };
}
