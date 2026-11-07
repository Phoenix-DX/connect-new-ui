import { describe, expect, it } from 'vitest';
import type { UpdateItem } from '@/api/update';
import { Choice } from '@/lib/ubtConnect/staticEntities';
import {
  dateToText,
  directory_Updates_AugmentDateRanges,
  directory_Updates_GetBreakpoints,
  directory_Updates_GetListBreakpoint,
  directory_Updates_GetUpdatedBreakpoints,
  directory_Updates_MarkAllAsRead,
  EMPTY_BREAKPOINT,
  getSkeletonList_UI_Updates,
  INITIAL_UPDATES_SINGLE_LIST_STATE,
  listKeyOf,
  osDateInput,
  restoreUpdatesSingleListState,
  sameFilter,
  setDefaultFilters,
  textToDate,
  updatesSingleListReducer,
  type UpdatesSingleListState,
} from './updatesSingleListState';

/* A fixed "now": Wednesday 14 October 2026, local time. */
const NOW = new Date(2026, 9, 14, 10, 30);

const item = (id: string, date: string, isRead = false): UpdateItem => ({
  updateItemId: id,
  updateItemTypeId: 'Taken',
  householdId: '0',
  memberId: '',
  name: `Update ${id}`,
  date,
  genderId: '',
  locationString: '',
  parentsNames: '',
  birthType: '',
  isRead,
  hasAccess: false,
  hasShare: false,
});

const RANGES = directory_Updates_AugmentDateRanges(['Today', 'Last 7 Days', 'Last 30 Days', 'Older'], 6, NOW);
const ITEMS = [
  item('1', '2026-10-14'),
  item('2', '2026-10-12'),
  item('3', '2026-10-10', true),
  item('4', '2026-09-30'),
  item('5', '2026-08-01'),
];

describe('updatesSingleListState', () => {
  it('the initial state: All selected, CurrentBreakpoint Today, nothing fetched', () => {
    const s = INITIAL_UPDATES_SINGLE_LIST_STATE;
    expect(s.filter_UpdateTypeOptions.map((o) => [o.text, o.isSelected])).toEqual([
      ['All', true],
      ['Birth', false],
      ['Marriage', false],
      ['Taken', false],
    ]);
    expect(s.currentBreakpoint).toEqual({ ...EMPTY_BREAKPOINT, sectionName: 'Today' });
    expect([s.fetchStatus, s.isDataFetched, s.items, s.scrollListenerSeq]).toEqual(['notFetched', false, [], 0]);
  });

  it('the reducer assigns the variables of the patch and keeps the others', () => {
    const next = updatesSingleListReducer(INITIAL_UPDATES_SINGLE_LIST_STATE, { isLoading: true, unreadCount: 3 });
    expect(next).toEqual({ ...INITIAL_UPDATES_SINGLE_LIST_STATE, isLoading: true, unreadCount: 3 });
    expect(INITIAL_UPDATES_SINGLE_LIST_STATE.isLoading).toBe(false);
  });

  describe('restoreUpdatesSingleListState (OnInitialize of a restored view)', () => {
    const saved: UpdatesSingleListState = {
      ...INITIAL_UPDATES_SINGLE_LIST_STATE,
      items: ITEMS,
      unreadCount: 4,
      breakpoints: directory_Updates_GetBreakpoints(ITEMS, RANGES),
    };

    it('the updates swiped in the carousel become read; UnreadCount and their badge go down by one', () => {
      const out = restoreUpdatesSingleListState(saved, [
        { ListPosition: 1, EntityItemId: 2 },
        { ListPosition: 3, EntityItemId: '4' },
        { ListPosition: 4, EntityItemId: 'another update' },
        { ListPosition: 9, EntityItemId: '9' },
        { EntityItemId: '1' },
      ]);
      expect(out.items.map((i) => i.isRead)).toEqual([false, true, true, true, false]);
      expect(out.unreadCount).toBe(2);
      expect(out.breakpoints.map((b) => [b.sectionName, b.badgeCount])).toEqual([
        ['Today', 1],
        ['Last 7 Days', 0],
        ['Last 30 Days', 0],
        ['Older', 1],
      ]);
      expect(saved.items[1]?.isRead).toBe(false); // the saved state is not changed
    });

    it('any other preload object leaves the saved variables as they are', () => {
      expect(restoreUpdatesSingleListState(saved, null)).toBe(saved);
      expect(restoreUpdatesSingleListState(saved, { CarouselHouseholdItem: [] })).toBe(saved);
    });
  });

  it('the runtime list key and the share sheet date', () => {
    expect(listKeyOf({ fetchStatus: 'ok', dateRangesFailed: true })).toBe('478');
    expect(listKeyOf({ fetchStatus: 'notFetched', dateRangesFailed: true })).toBe('129');
    expect(listKeyOf({ fetchStatus: 'error', dateRangesFailed: false })).toBe('106');
    expect(osDateInput('')).toBe('1900-01-01');
    expect(osDateInput('2026-10-12')).toBe('2026-10-12');
  });

  it('DateToText and TextToDate', () => {
    expect(dateToText('2026-10-03')).toBe('03/10/2026');
    expect(dateToText('')).toBe('01/01/1900');
    expect(textToDate('03/10/2026')).toBe('2026-10-03');
    expect(textToDate(null)).toBe('');
  });

  it('AugmentDateRanges: Today, Last 7 Days, Last 30 Days and Older from the months to show', () => {
    expect(RANGES).toEqual([
      { range: 'Today', from: '2026-10-14', to: '2026-10-14' },
      { range: 'Last 7 Days', from: '2026-10-07', to: '2026-10-13' },
      { range: 'Last 30 Days', from: '2026-09-14', to: '2026-10-06' },
      { range: 'Older', from: '2026-04-14', to: '2026-09-13' },
    ]);
    expect(directory_Updates_AugmentDateRanges(['Older', 'Unknown'], 0, NOW)).toEqual([
      { range: 'Older', from: '', to: '2026-09-13' },
    ]);
  });

  it('GetBreakpoints, GetListBreakpoint and GetUpdatedBreakpoints', () => {
    const breakpoints = directory_Updates_GetBreakpoints(ITEMS, RANGES);
    expect(breakpoints.map((b) => [b.position, b.sectionName, b.badgeCount])).toEqual([
      [0, 'Today', 1],
      [1, 'Last 7 Days', 1],
      [3, 'Last 30 Days', 1],
      [4, 'Older', 1],
    ]);
    expect(directory_Updates_GetBreakpoints([], RANGES)).toEqual([]);
    // Descending: the boundary between the previous and the current date names the section of the current one.
    expect(directory_Updates_GetListBreakpoint(breakpoints, '2026-10-12', '2026-10-14', false, NOW).sectionName).toBe(
      'Last 7 Days',
    );
    expect(directory_Updates_GetListBreakpoint(breakpoints, '2026-09-30', '2026-10-10', false, NOW).sectionName).toBe(
      'Last 30 Days',
    );
    expect(directory_Updates_GetListBreakpoint(breakpoints, '2026-10-12', '', false, NOW)).toBe(EMPTY_BREAKPOINT);
    const read = ITEMS.map((i) => (i.updateItemId === '2' ? { ...i, isRead: true } : i));
    const updated = directory_Updates_GetUpdatedBreakpoints(read, 2, RANGES, breakpoints);
    expect([updated.changedBreakpoint.sectionName, updated.changedBreakpoint.badgeCount]).toEqual(['Last 7 Days', 0]);
    expect(updated.updatedBreakpoints[1]?.badgeCount).toBe(0);
    expect(breakpoints[1]?.badgeCount).toBe(1);
  });

  it('MarkAllAsRead, the skeleton list, SetDefaultFilters and the filter equality', () => {
    expect(directory_Updates_MarkAllAsRead(ITEMS).every((i) => i.isRead)).toBe(true);
    const skeleton = getSkeletonList_UI_Updates(10);
    expect(skeleton).toHaveLength(10);
    expect(skeleton[0]).toMatchObject({ name: 'Example & Example', locationString: 'Example, Example', date: '' });
    const empty = INITIAL_UPDATES_SINGLE_LIST_STATE.filter_Updates;
    const d = setDefaultFilters(empty, empty, RANGES);
    expect(d.filter).toEqual({
      ...empty,
      dateFrom: '2026-04-14',
      dateTo: '2026-10-14',
      readOnly: Choice.None,
      sortByNewest: Choice.Yes,
      countryIds: [Choice.None],
      localitiesIds: [Choice.None],
    });
    expect(d.defaultState).toBe(d.filter);
    expect(setDefaultFilters(d.filter, d.filter, RANGES).defaultState).toBe(d.filter);
    expect(sameFilter(d.filter, { ...d.filter })).toBe(true);
    expect(sameFilter(d.filter, { ...d.filter, searchText: 'Hughes' })).toBe(false);
  });
});
