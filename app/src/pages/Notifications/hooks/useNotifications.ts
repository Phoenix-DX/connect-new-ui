import { useCallback, useEffect, useLayoutEffect, useReducer, useRef } from 'react';
import { fetchNotificationDateRanges, fetchNotifications } from '@/api/notification';
import { UserException, exceptionMessage, isSystemException } from '@/legacy/os/exceptions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useViewState } from '@/platform/navigation';
import { directory_Updates_RefreshBottomBarCount, scrollTop } from '@/shared/UBTConnect/lib/actions';
import { bottomSheetOpen } from '@/shared/osui/lib/actions';
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

/** The flows of the Notifications screen: OnReady (GetDateRanges, then FetchNotifications), RefreshNotifications, the
    search input of the header, the kebab button, ApplyFilters of the two sheets, and the events that set a variable.
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
  /** Handler_ApplyFilters: ApplyFilters of both sheets. */
  onApplyFilters: () => void;
  /** SheetInitialized of Notifications_SortSheet. */
  onFilterSheetInitialized: (sheetId: string) => void;
  /** SheetInitialized of Notifications_MoreActionSheet. */
  onMoreActionSheetInitialized: (sheetId: string) => void;
}

/** The view cache keeps three variables, not the whole state: a restored view starts without the list and fetches it
    again from OnReady. useFlowState keeps the whole state, so the hook keeps the reducer and the latest state itself.
    After the screen unmounts, a flow that already started goes on (decision W23): `latest` still changes, so its next
    server calls send the same variables as before, but `dispatch` writes no screen state and no view cache. */
function useNotificationsState() {
  const [cached, setCached] = useViewState<NotificationsCachedVariables>(VIEW_NAME, INITIAL_CACHED_VARIABLES);
  // ScreenEvent_OnInitialize, before the first render (a restored view starts from its cached variables).
  const [state, dispatchToView] = useReducer(notificationsReducer, cached, initialNotificationsState);
  // The screen variables as the flows read them: OutSystems assigns a variable at once, before the next render.
  const latest = useRef(state);
  /* True after the unmount. A layout effect, so the flag is false again (StrictMode mounts twice) before the passive
     effects of the blocks, which raise events such as SheetInitialized, run. */
  const unmounted = useRef(false);
  useLayoutEffect(() => {
    unmounted.current = false;
    return () => {
      unmounted.current = true;
    };
  }, []);
  const dispatch = useCallback(
    (action: NotificationsAction) => {
      const previous = latest.current;
      latest.current = notificationsReducer(previous, action);
      if (unmounted.current) return;
      const next = latest.current;
      if (
        next.currentSearchString !== previous.currentSearchString ||
        next.filter_Updates !== previous.filter_Updates ||
        next.hasFiltersApplied !== previous.hasFiltersApplied
      )
        setCached(cachedVariablesOf(next));
      dispatchToView(action);
    },
    [setCached],
  );
  return { state, latest, dispatch };
}

export function useNotifications(): NotificationsFlows {
  const { state, latest, dispatch } = useNotificationsState();

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
    const list = await fetchNotifications(latest.current);
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
    const ranges = await fetchNotificationDateRanges(latest.current);
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
    onReady().catch(raiseToFlowHandler);
    /* OnReady runs once, also when StrictMode runs the effects twice. Its flows read `latest` and call `dispatch`,
       which do not change. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Handler_ApplyFilters and Handler_FilterSearchText after their assignments: ScrollTop, isLoading, then
     RefreshNotifications. */
  const scrollTopAndRefresh = () => {
    scrollTop('.active-screen', 'instant');
    dispatch({ type: 'loadingStarted' });
    refreshNotifications().catch(raiseToFlowHandler);
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

  const onApplyFilters = () => {
    dispatch({ type: 'filtersApplied' });
    scrollTopAndRefresh();
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

  return {
    state,
    onHeaderScrolled,
    onToggleSearch,
    onFilterSearchText,
    onChangeSearchInput,
    onKebab,
    onApplyFilters,
    onFilterSheetInitialized,
    onMoreActionSheetInitialized,
  };
}
