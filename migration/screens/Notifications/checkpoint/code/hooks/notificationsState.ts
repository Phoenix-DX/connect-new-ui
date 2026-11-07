import type {
  NotificationBreakpoint,
  NotificationDateRange,
  NotificationFilter,
  NotificationItem,
  NotificationsVariables,
} from '@/api/notification';
import { isInRange } from '@/pages/Notifications/components/actions';
import { Updates_DateRanges } from '@/pages/Notifications/components/staticEntities';
import { Choice } from '@/lib/ubtConnect/staticEntities';
import { currDateTime } from '@/lib/osDateTime';

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
  /** [Screen_NotificationItemList] The list that the screen renders (live TST 2026-11-07): the skeleton list of OnReady,
      then the fetched list. */
  screenItems: NotificationItem[];
  /** [StartIndex] Set by ResetNotifications only (live TST 2026-11-07). */
  startIndex: number;
  /** [PageNumber] Set by ResetNotifications only: OnLoadMore of the screen is empty, so it stays 1. */
  pageNumber: number;
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
  /** ScreenEvent_OnReady: isLoading True, then Screen_NotificationItemList and Breakpoints from
      GetSkeletonList_UI_Notification(10). */
  | { type: 'skeletonSet' }
  /** ResetNotifications: StartIndex 0, PageNumber 1, ListClear(Screen_NotificationItemList). */
  | { type: 'notificationsReset' }
  /** The outputs of FetchNotifications. */
  | { type: 'notificationsFetched'; items: NotificationItem[]; unreadNotificationsCount: number }
  /** OnAfterFetch_FetchNotifications (live TST 2026-11-07): the breakpoints only while the skeleton breakpoint is in
      place (Breakpoints[0].Position = -1), ShowMarkAll, MaxRecords and Screen_NotificationItemList (PageNumber 1),
      ReadCount and isLoading False. */
  | { type: 'afterFetch' }
  /** Handler_FilterSearchText: CurrentSearchString. */
  | { type: 'searchStringSet'; text: string }
  /** Handler_FilterSearchText with a new text: Filter_Updates.SearchText, SelectedHistorySearch and ShowMarkAll False. */
  | { type: 'searchTextFiltered'; text: string }
  /** Handler_OnChangeSearchInput: CurrentSearchString; IsToggleSearch True when In_IsToggleSearch is True. */
  | { type: 'searchInputChanged'; text: string; inIsToggleSearch: boolean }
  /** Handler_ToggleSearch: IsToggleSearch = not IsToggleSearch. */
  | { type: 'searchToggled' }
  /** Handler_ApplyFilters(Event_HasFiltersApplied, IsNewestToOldest): HasFiltersApplied (the screen passes the value it
      has), ShowMarkAll False, isLoading True and OrderByIsAscending = not IsNewestToOldest. */
  | { type: 'filtersApplied'; isNewestToOldest: boolean }
  /** Handler_OnlyShowUnread: Local_OnlyShowUnread (then isLoading True and ResetNotifications, live TST 2026-11-07). */
  | { type: 'onlyShowUnreadSet'; onlyShowUnread: boolean }
  /** Handler_UpdateReadCount(AddToCount, IsDelete, IsRead): ReadCount + 1, or - 1 when the item was not read. */
  | { type: 'readCountUpdated'; addToCount: boolean; isRead: boolean }
  /** SetBadgeCountsToZero (Handler_MoreActionSheetMarkAllAsRead): BadgeCount 0 on every breakpoint and on
      CurrentBreakpoint. */
  | { type: 'badgeCountsZeroed' }
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
    local_OnlyShowUnread: false,
    readCount: 0,
    items: [],
    screenItems: [],
    startIndex: 0,
    pageNumber: 1,
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
    case 'skeletonSet': {
      const skeleton = getSkeletonList_UI_Notification(10);
      return { ...state, isLoading: true, screenItems: skeleton.items, breakpoints: skeleton.breakpoints };
    }
    case 'notificationsReset':
      return { ...state, startIndex: 0, pageNumber: 1, screenItems: [] };
    case 'notificationsFetched':
      return {
        ...state,
        items: action.items,
        unreadNotificationsCount: action.unreadNotificationsCount,
        isDataFetched: true,
      };
    case 'afterFetch': {
      const next = { ...state };
      /* "Is have breakpoint yet?": Breakpoints[0].Position = -1 (the skeleton breakpoint). The breakpoints of a later
         fetch stay as they are, as compiled. An empty Breakpoints list (a first fetch without notifications) is not
         captured: it counts as no skeleton breakpoint here. */
      if (state.breakpoints[0]?.position === -1) {
        const breakpoints = app_Notifications_GetBreakpoints(state.items, state.dateRanges);
        next.breakpoints = breakpoints;
        next.currentBreakpoint = breakpoints[0] ?? EMPTY_BREAKPOINT;
      }
      next.showMarkAll = state.unreadNotificationsCount > 0;
      if (state.pageNumber === 1) {
        next.maxRecords = state.items.length;
        next.screenItems = state.items;
      } else {
        next.screenItems = [...state.screenItems, ...state.items];
      }
      next.readCount = state.unreadNotificationsCount;
      next.isLoading = false;
      return next;
    }
    case 'searchStringSet':
      return { ...state, currentSearchString: action.text };
    case 'searchTextFiltered':
      return {
        ...state,
        filter_Updates: { ...state.filter_Updates, searchText: action.text },
        selectedHistorySearch: action.text,
        showMarkAll: false,
      };
    case 'searchInputChanged':
      return action.inIsToggleSearch
        ? { ...state, currentSearchString: action.text, isToggleSearch: true }
        : { ...state, currentSearchString: action.text };
    case 'searchToggled':
      return { ...state, isToggleSearch: !state.isToggleSearch };
    case 'filtersApplied':
      // The sheets raise ApplyFilters without a value: HasFiltersApplied = HasFiltersApplied.
      return {
        ...state,
        hasFiltersApplied: state.hasFiltersApplied,
        showMarkAll: false,
        isLoading: true,
        orderByIsAscending: !action.isNewestToOldest,
      };
    case 'onlyShowUnreadSet':
      return { ...state, local_OnlyShowUnread: action.onlyShowUnread };
    case 'readCountUpdated':
      return { ...state, readCount: updatedReadCount(state.readCount, action.addToCount, action.isRead) };
    case 'badgeCountsZeroed':
      return {
        ...state,
        breakpoints: state.breakpoints.map((b) => ({ ...b, badgeCount: 0 })),
        currentBreakpoint: { ...state.currentBreakpoint, badgeCount: 0 },
      };
    case 'headerScrolled':
      return { ...state, isHeaderScrolled: action.isHeaderScrolled };
    case 'filterSheetInitialized':
      return { ...state, filter_BottomSheetId: action.sheetId };
    case 'moreActionSheetInitialized':
      return { ...state, moreAction_BottomSheetId: action.sheetId };
  }
}

/* ---- The client actions of the screen ---- */

/** Handler_UpdateReadCount (Notifications.mvc.js:2845-2880): AddToCount → ReadCount + 1; otherwise ReadCount - 1
    unless the item was read (IsRead). IsDelete is not read. */
export function updatedReadCount(readCount: number, addToCount: boolean, isRead: boolean): number {
  if (addToCount) return readCount + 1;
  return isRead ? readCount : readCount - 1;
}

/** GetSkeletonList_UI_Notification(ListLength) (UBTConnect.controller@029189b7.js, live TST 2026-11-07): one dummy
    breakpoint (Position -1, SectionName Today, BadgeCount 10, the Today range CurrDate to CurrDate) and ListLength
    copies of GetSkeleton_UI_NotificationContent (Title "Example & Example", Summary "Example, Example", DateTimeCreated
    CurrDateTime; the other fields keep their defaults: unread, no icon, null ids). */
export function getSkeletonList_UI_Notification(
  listLength: number,
  now = new Date(),
): { items: NotificationItem[]; breakpoints: NotificationBreakpoint[] } {
  const today = osDateOf(now);
  const item: NotificationItem = {
    id: '0',
    title: 'Example & Example',
    dateTimeCreated: currDateTime(now),
    isRead: false,
    profileIconURL: '',
    messageTemplateId: '0',
    createdByMemberId: '',
    createdByUserId: 0,
  };
  return {
    items: Array.from({ length: Math.max(listLength, 0) }, () => ({ ...item })),
    breakpoints: [
      {
        position: -1,
        sectionName: Updates_DateRanges.Today,
        badgeCount: 10,
        dateRange: { range: Updates_DateRanges.Today, from: today, to: today },
      },
    ],
  };
}

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
