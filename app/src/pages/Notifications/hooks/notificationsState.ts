import type {
  NotificationBreakpoint,
  NotificationDateRange,
  NotificationFilter,
  NotificationItem,
  NotificationsVariables,
} from '@/api/notification';
import { isInRange } from '@/pages/Notifications/components/actions';
import { Updates_DateRanges } from '@/pages/Notifications/components/staticEntities';
import { Choice } from '@/shared/UBTConnect/lib/staticEntities';

/** The state of the Notifications screen and its reducer, with the client actions of the screen as pure functions.
    @origin UBTConnect.App_Notifications.Notifications */

/** Filter_Updates with its default values. A null date or a null identifier is "" here; the mapper of
    api/notification sends a null date as the OutSystems null date. */
export const EMPTY_FILTER: NotificationFilter = {
  dateFrom: '',
  dateTo: '',
  searchText: '',
  updateTypeId: '',
  readOnly: '',
  sortByNewest: '',
};

/** UI_UpdateItem_Breakpoint with its default values. */
export const EMPTY_BREAKPOINT: NotificationBreakpoint = {
  position: 0,
  sectionName: '',
  badgeCount: 0,
  dateRange: { range: '', from: '', to: '' },
};

/** The screen variables that the view cache keeps (P-BACK): a back navigation to Notifications keeps the search text,
    the filter and HasFiltersApplied. The OutSystems name of each variable is in brackets. */
export interface NotificationsCachedVariables {
  /** [CurrentSearchString] The text of the search input. */
  currentSearchString: string;
  /** [Filter_Updates] The filter that FetchNotifications sends. */
  filter_Updates: NotificationFilter;
  /** [HasFiltersApplied] The filter dot of Notifications_Action. No flow of the screen changes it. */
  hasFiltersApplied: boolean;
}

/** The cached variables of a new visit. */
export const INITIAL_CACHED_VARIABLES: NotificationsCachedVariables = {
  currentSearchString: '',
  filter_Updates: EMPTY_FILTER,
  hasFiltersApplied: false,
};

/** The screen variables (with their OutSystems names, see NotificationsVariables) and the outputs of
    FetchNotifications that the screen reads. Both data actions send all the screen variables. */
export interface NotificationsState extends NotificationsVariables {
  /** [FetchNotifications.UI_NotificationItemList] */
  items: NotificationItem[];
  /** [FetchNotifications.IsDataFetched] */
  isDataFetched: boolean;
  /** [FetchNotifications.UnreadNotificationsCount] */
  unreadNotificationsCount: number;
}

/** The changes of the state, one per assignment group of the screen's flows. */
export type NotificationsAction =
  /** OnReady, Handler_FilterSearchText and Handler_ApplyFilters before the refresh: isLoading True. */
  | { type: 'loadingStarted' }
  /** The handled exceptions of OnAfterFetch_GetDateRanges and OnAfterFetch_FetchNotifications: isLoading False. */
  | { type: 'loadingEnded' }
  /** OnAfterFetch_GetDateRanges: DateRanges = App_Notifications_AugmentDateRanges, then SetDefaultFilters. */
  | { type: 'dateRangesAugmented'; dateRanges: NotificationDateRange[] }
  /** The outputs of FetchNotifications. */
  | { type: 'notificationsFetched'; items: NotificationItem[]; unreadNotificationsCount: number }
  /** OnAfterFetch_FetchNotifications: Breakpoints, CurrentBreakpoint (the first one), ShowMarkAll and isLoading
      False. */
  | { type: 'breakpointsSet'; breakpoints: NotificationBreakpoint[] }
  /** Handler_FilterSearchText: CurrentSearchString. */
  | { type: 'searchStringSet'; text: string }
  /** Handler_FilterSearchText with a new text: Filter_Updates.SearchText and ShowMarkAll False. */
  | { type: 'searchTextFiltered'; text: string }
  /** Handler_OnChangeSearchInput: CurrentSearchString; IsToggleSearch True when In_IsToggleSearch is True. */
  | { type: 'searchInputChanged'; text: string; inIsToggleSearch: boolean }
  /** Handler_ToggleSearch: IsToggleSearch = not IsToggleSearch. */
  | { type: 'searchToggled' }
  /** Handler_ApplyFilters: HasFiltersApplied (the value it has) and ShowMarkAll False. */
  | { type: 'filtersApplied' }
  /** OnHeaderScrolled of Layout_MainPages_Upgrade: IsHeaderScrolled. */
  | { type: 'headerScrolled'; isHeaderScrolled: boolean }
  /** SheetInitialized of Notifications_SortSheet: Filter_BottomSheetId. */
  | { type: 'filterSheetInitialized'; sheetId: string }
  /** SheetInitialized of Notifications_MoreActionSheet: MoreAction_BottomSheetId. */
  | { type: 'moreActionSheetInitialized'; sheetId: string };

/** The screen variables with their compiled defaults, then ScreenEvent_OnInitialize: SelectedFilter_* (True, True,
    False), InitializeSetting (the route is protected, so GetUserId is set: ShowWarning True, the message types from
    the selected ones, OrderASC False and OrderDESC True) and CurrentBreakpoint {0, Today, 0}. A view that the view
    cache restores keeps the cached variables; the carousel swipe preload of that branch has no caller on this
    screen. */
export function initialNotificationsState(cached: NotificationsCachedVariables): NotificationsState {
  return {
    filter_BottomSheetId: '',
    filter_Updates: cached.filter_Updates,
    hasFiltersApplied: cached.hasFiltersApplied,
    showMarkAll: false,
    dateRanges: [],
    isLoading: false,
    bottomSheetId_IsLoaded: false,
    bottomSheetId_ShowSubscription: false,
    breakpoints: [],
    currentBreakpoint: { ...EMPTY_BREAKPOINT, sectionName: Updates_DateRanges.Today },
    isHeaderScrolled: false,
    isToggleSearch: false,
    currentSearchString: cached.currentSearchString,
    badgeNumber: 0,
    selectedHistorySearch: '',
    deviceHardwareId: '',
    filter_MessageTypePrivate: true,
    filter_MessageTypePublic: true,
    orderByIsAscending: false,
    maxRecords: 20,
    showWarning: true,
    selectedFilter_OrderASC: false,
    filter_OrderASC: false,
    filter_OrderDESC: true,
    selectedFilter_MessageTypePrivate: true,
    selectedFilter_MessageTypePublic: true,
    moreAction_BottomSheetId: '',
    items: [],
    isDataFetched: false,
    unreadNotificationsCount: 0,
  };
}

/** The variables of the state that the view cache keeps. */
export const cachedVariablesOf = (state: NotificationsState): NotificationsCachedVariables => ({
  currentSearchString: state.currentSearchString,
  filter_Updates: state.filter_Updates,
  hasFiltersApplied: state.hasFiltersApplied,
});

export function notificationsReducer(state: NotificationsState, action: NotificationsAction): NotificationsState {
  switch (action.type) {
    case 'loadingStarted':
      return { ...state, isLoading: true };
    case 'loadingEnded':
      return { ...state, isLoading: false };
    case 'dateRangesAugmented':
      return {
        ...state,
        dateRanges: action.dateRanges,
        filter_Updates: setDefaultFilters(state.filter_Updates, action.dateRanges),
      };
    case 'notificationsFetched':
      return {
        ...state,
        items: action.items,
        unreadNotificationsCount: action.unreadNotificationsCount,
        isDataFetched: true,
      };
    case 'breakpointsSet':
      return {
        ...state,
        breakpoints: action.breakpoints,
        currentBreakpoint: action.breakpoints[0] ?? EMPTY_BREAKPOINT,
        showMarkAll: state.unreadNotificationsCount > 0,
        isLoading: false,
      };
    case 'searchStringSet':
      return { ...state, currentSearchString: action.text };
    case 'searchTextFiltered':
      return { ...state, filter_Updates: { ...state.filter_Updates, searchText: action.text }, showMarkAll: false };
    case 'searchInputChanged':
      return action.inIsToggleSearch
        ? { ...state, currentSearchString: action.text, isToggleSearch: true }
        : { ...state, currentSearchString: action.text };
    case 'searchToggled':
      return { ...state, isToggleSearch: !state.isToggleSearch };
    case 'filtersApplied':
      // The sheets raise ApplyFilters without a value: HasFiltersApplied = HasFiltersApplied.
      return { ...state, hasFiltersApplied: state.hasFiltersApplied, showMarkAll: false };
    case 'headerScrolled':
      return { ...state, isHeaderScrolled: action.isHeaderScrolled };
    case 'filterSheetInitialized':
      return { ...state, filter_BottomSheetId: action.sheetId };
    case 'moreActionSheetInitialized':
      return { ...state, moreAction_BottomSheetId: action.sheetId };
  }
}

/* ---- The client actions of the screen ---- */

const pad = (n: number) => String(n).padStart(2, '0');
/** A local Date as an OutSystems Date "yyyy-MM-dd". */
const osDateOf = (d: Date): string => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const addMonths = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth() + n, d.getDate());

/** App_Notifications_AugmentDateRanges (UBTConnect): one UI_Updates_DateRange per known range, From and To from
    CurrDate: Today [today, today], Last 7 Days [-7, -1], Last 30 Days [-30, -8], Older [-6 months, -31]. Other ids are
    skipped. */
export function app_Notifications_AugmentDateRanges(ids: string[], now = new Date()): NotificationDateRange[] {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const out: NotificationDateRange[] = [];
  for (const id of ids) {
    if (id === Updates_DateRanges.Today) out.push({ range: id, from: osDateOf(today), to: osDateOf(today) });
    else if (id === Updates_DateRanges.Last7Days)
      out.push({ range: id, from: osDateOf(addDays(today, -7)), to: osDateOf(addDays(today, -1)) });
    else if (id === Updates_DateRanges.Last30Days)
      out.push({ range: id, from: osDateOf(addDays(today, -30)), to: osDateOf(addDays(today, -8)) });
    else if (id === Updates_DateRanges.Older)
      out.push({ range: id, from: osDateOf(addMonths(today, -6)), to: osDateOf(addDays(today, -31)) });
  }
  return out;
}

/** App_Notifications_GetBreakpoints (UBTConnect): for each range with items, Position = the index of its first item,
    SectionName = the range, BadgeCount = the unread items of the range; sorted by Position. Empty when there is no
    notification. */
export function app_Notifications_GetBreakpoints(
  items: NotificationItem[],
  dateRanges: NotificationDateRange[],
): NotificationBreakpoint[] {
  if (items.length === 0) return [];
  const out: NotificationBreakpoint[] = [];
  for (const r of dateRanges) {
    const inR = items.filter((i) => isInRange(i, r));
    if (inR.length === 0) continue;
    out.push({
      position: items.findIndex((i) => isInRange(i, r)),
      sectionName: r.range,
      badgeCount: inR.filter((i) => !i.isRead).length,
      dateRange: r,
    });
  }
  return out.sort((a, b) => a.position - b.position);
}

/** SetDefaultFilters (screen action): when a date is null, the dates are Older.From to Today.To; a null ReadOnly is
    None; a null Sort_ByNewest is Yes. */
export function setDefaultFilters(f: NotificationFilter, dateRanges: NotificationDateRange[]): NotificationFilter {
  const next = { ...f };
  if (f.dateFrom === '' || f.dateTo === '') {
    next.dateFrom = dateRanges.find((r) => r.range === Updates_DateRanges.Older)?.from ?? '';
    next.dateTo = dateRanges.find((r) => r.range === Updates_DateRanges.Today)?.to ?? '';
  }
  if (f.readOnly === '') next.readOnly = Choice.None;
  if (f.sortByNewest === '') next.sortByNewest = Choice.Yes;
  return next;
}
