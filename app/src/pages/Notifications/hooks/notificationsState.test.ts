import { describe, expect, it } from 'vitest';
import type { NotificationItem } from '@/api/notification';
import {
  EMPTY_BREAKPOINT,
  EMPTY_FILTER,
  INITIAL_CACHED_VARIABLES,
  app_Notifications_AugmentDateRanges,
  app_Notifications_GetBreakpoints,
  cachedVariablesOf,
  initialNotificationsState,
  notificationsReducer,
  updatedReadCount,
  setDefaultFilters,
} from './notificationsState';

/* A fixed day (Friday 2026-10-16, local time) for the date ranges. */
const NOW = new Date(2026, 9, 16, 9, 30);
const RANGES = app_Notifications_AugmentDateRanges(['Today', 'Last 7 Days', 'Last 30 Days', 'Older'], NOW);

const item = (id: string, dateTimeCreated: string, isRead = false): NotificationItem => ({
  id,
  title: `Choir practice ${id}`,
  dateTimeCreated,
  isRead,
  profileIconURL: '',
});

describe('Notifications client actions', () => {
  it('App_Notifications_AugmentDateRanges gives From and To of each known range and skips the others', () => {
    expect(
      app_Notifications_AugmentDateRanges(['Today', 'Unknown', 'Last 7 Days', 'Last 30 Days', 'Older'], NOW),
    ).toEqual([
      { range: 'Today', from: '2026-10-16', to: '2026-10-16' },
      { range: 'Last 7 Days', from: '2026-10-09', to: '2026-10-15' },
      { range: 'Last 30 Days', from: '2026-09-16', to: '2026-10-08' },
      { range: 'Older', from: '2026-04-16', to: '2026-09-15' },
    ]);
  });

  it('App_Notifications_GetBreakpoints: one breakpoint per range with items, its first position and unread count', () => {
    const items = [
      item('1', '2026-10-16T08:00:00'),
      item('2', '2026-10-01T10:00:00', true),
      item('3', '2026-09-30T10:00:00'),
      item('4', '2026-07-01T10:00:00', true),
    ];
    expect(app_Notifications_GetBreakpoints(items, RANGES)).toEqual([
      { position: 0, sectionName: 'Today', badgeCount: 1, dateRange: RANGES[0] },
      { position: 1, sectionName: 'Last 30 Days', badgeCount: 1, dateRange: RANGES[2] },
      { position: 3, sectionName: 'Older', badgeCount: 0, dateRange: RANGES[3] },
    ]);
    expect(app_Notifications_GetBreakpoints([], RANGES)).toEqual([]);
  });

  it('SetDefaultFilters fills the null dates, ReadOnly and Sort_ByNewest, and keeps the set values', () => {
    expect(setDefaultFilters(EMPTY_FILTER, RANGES)).toEqual({
      ...EMPTY_FILTER,
      dateFrom: '2026-04-16',
      dateTo: '2026-10-16',
      readOnly: 'None',
      sortByNewest: 'Yes',
    });
    const set = {
      ...EMPTY_FILTER,
      dateFrom: '2026-01-01',
      dateTo: '2026-02-01',
      readOnly: 'No',
      sortByNewest: 'No',
    };
    expect(setDefaultFilters(set, RANGES)).toEqual(set);
  });
});

describe('Notifications state', () => {
  it('OnInitialize: the defaults, CurrentBreakpoint Today, and the cached variables of a restored view', () => {
    const fresh = initialNotificationsState(INITIAL_CACHED_VARIABLES);
    expect(fresh).toMatchObject({
      isLoading: false,
      isDataFetched: false,
      items: [],
      maxRecords: 20,
      showWarning: true,
      filter_OrderDESC: true,
      filter_MessageTypePrivate: true,
      filter_MessageTypePublic: true,
      currentBreakpoint: { ...EMPTY_BREAKPOINT, sectionName: 'Today' },
    });
    const cached = {
      currentSearchString: 'camp',
      filter_Updates: { ...EMPTY_FILTER, searchText: 'camp' },
      hasFiltersApplied: false,
    };
    const restored = initialNotificationsState(cached);
    expect(cachedVariablesOf(restored)).toEqual(cached);
    expect(restored.items).toEqual([]);
  });

  it('the fetch flow: date ranges with the default filter, then the list and its breakpoints', () => {
    let state = notificationsReducer(initialNotificationsState(INITIAL_CACHED_VARIABLES), { type: 'loadingStarted' });
    state = notificationsReducer(state, { type: 'dateRangesAugmented', dateRanges: RANGES });
    expect(state.dateRanges).toBe(RANGES);
    expect(state.filter_Updates).toMatchObject({ dateFrom: '2026-04-16', dateTo: '2026-10-16' });
    const items = [item('1', '2026-10-16T08:00:00')];
    state = notificationsReducer(state, { type: 'notificationsFetched', items, unreadNotificationsCount: 1 });
    expect(state).toMatchObject({ items, unreadNotificationsCount: 1, isDataFetched: true, isLoading: true });
    const breakpoints = app_Notifications_GetBreakpoints(items, RANGES);
    state = notificationsReducer(state, { type: 'breakpointsSet', breakpoints });
    expect(state).toMatchObject({
      breakpoints,
      currentBreakpoint: breakpoints[0],
      showMarkAll: true,
      isLoading: false,
    });
    state = notificationsReducer(state, { type: 'breakpointsSet', breakpoints: [] });
    expect(state.currentBreakpoint).toEqual(EMPTY_BREAKPOINT);
    expect(notificationsReducer(state, { type: 'loadingEnded' }).isLoading).toBe(false);
  });

  it('the search input, the toggle, ApplyFilters and the events that set a variable', () => {
    let state = { ...initialNotificationsState(INITIAL_CACHED_VARIABLES), showMarkAll: true };
    state = notificationsReducer(state, { type: 'searchInputChanged', text: 'ca', inIsToggleSearch: false });
    expect(state).toMatchObject({ currentSearchString: 'ca', isToggleSearch: false });
    state = notificationsReducer(state, { type: 'searchInputChanged', text: 'cam', inIsToggleSearch: true });
    expect(state).toMatchObject({ currentSearchString: 'cam', isToggleSearch: true });
    state = notificationsReducer(state, { type: 'searchToggled' });
    expect(state.isToggleSearch).toBe(false);
    state = notificationsReducer(state, { type: 'searchStringSet', text: 'camp' });
    state = notificationsReducer(state, { type: 'searchTextFiltered', text: 'camp' });
    expect(state).toMatchObject({ currentSearchString: 'camp', showMarkAll: false });
    expect(state.filter_Updates.searchText).toBe('camp');
    state = notificationsReducer({ ...state, showMarkAll: true }, { type: 'filtersApplied', isNewestToOldest: true });
    expect(state).toMatchObject({ showMarkAll: false, hasFiltersApplied: false });
    state = notificationsReducer(state, { type: 'headerScrolled', isHeaderScrolled: true });
    state = notificationsReducer(state, { type: 'filterSheetInitialized', sheetId: 'sort-sheet' });
    state = notificationsReducer(state, { type: 'moreActionSheetInitialized', sheetId: 'more-sheet' });
    expect(state).toMatchObject({
      isHeaderScrolled: true,
      filter_BottomSheetId: 'sort-sheet',
      moreAction_BottomSheetId: 'more-sheet',
    });
  });

  it('read count, only unread, mark all as read and the search text (TST publish of 2026-10-27)', () => {
    expect(updatedReadCount(2, true, false)).toBe(3);
    expect(updatedReadCount(2, false, false)).toBe(1);
    expect(updatedReadCount(2, false, true)).toBe(2);
    const s0 = initialNotificationsState(INITIAL_CACHED_VARIABLES);
    expect(s0.readCount).toBe(0);
    const fetched = notificationsReducer(s0, { type: 'notificationsFetched', items: [], unreadNotificationsCount: 2 });
    const withBreakpoints = notificationsReducer(fetched, {
      type: 'breakpointsSet',
      breakpoints: [
        { position: 0, sectionName: 'Older', badgeCount: 2, dateRange: { range: 'Older', from: '', to: '' } },
      ],
    });
    expect(withBreakpoints.readCount).toBe(2);
    const read = notificationsReducer(withBreakpoints, { type: 'readCountUpdated', addToCount: false, isRead: false });
    expect(read.readCount).toBe(1);
    const zeroed = notificationsReducer(read, { type: 'badgeCountsZeroed' });
    expect(zeroed.breakpoints[0]?.badgeCount).toBe(0);
    expect(zeroed.currentBreakpoint.badgeCount).toBe(0);
    expect(notificationsReducer(s0, { type: 'onlyShowUnreadSet', onlyShowUnread: true }).local_OnlyShowUnread).toBe(
      true,
    );
    expect(notificationsReducer(s0, { type: 'searchTextFiltered', text: 'hall' }).selectedHistorySearch).toBe('hall');
    expect(notificationsReducer(s0, { type: 'filtersApplied', isNewestToOldest: false }).orderByIsAscending).toBe(true);
  });
});
