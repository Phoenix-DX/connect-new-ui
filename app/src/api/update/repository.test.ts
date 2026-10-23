import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { collection } from '@/mocks/store';
import {
  fetchFeedUpdates,
  fetchUnreadUpdateItemsCount,
  fetchUpdateDateRangeIds,
  fetchUpdatesList,
  markAllUpdateItemsAsRead,
  markCarouselUpdateItemAsRead,
  markUpdateItemAsRead,
  markUpdateItemAsUnread,
} from './repository';
import type { FilterUpdates, UpdatesListVariables } from './types';

/* The MSW mocks of the test setup: the fictional update items of HomeFeed (shared/UBTConnect/Directory_Updates/mocks.ts,
   three unread items, changed by the read-state handlers) and of Updates_SingleList (88 items, 4 read), and the
   recorded date ranges of Updates_SingleList and unread count of all the update items. */
const feedItems = collection('HomeFeed.updateItems', () => [], 'UpdateItemId');
const listItems = collection('Updates_SingleList.updateItems', () => [], 'UpdateItemId');

const emptyFilter: FilterUpdates = {
  dateFrom: '',
  dateTo: '',
  searchText: '',
  updateTypeId: '',
  countryIds: [],
  localitiesIds: [],
  readOnly: '',
  sortByNewest: '',
};
/** The variables of Updates_SingleList at its first fetch. */
const variables: UpdatesListVariables = {
  filter_UpdateTypeOptions: [{ text: 'All', identifier: '', isSelected: true }],
  filter_BottomSheetId: '',
  filter_Updates: emptyFilter,
  filter_DefaultState: emptyFilter,
  hasFiltersApplied: false,
  showMarkAll: false,
  dateRanges: [],
  isLoading: true,
  bottomSheetId_IsLoaded: false,
  bottomSheetId_ShowSubscription: false,
  breakpoints: [],
  currentBreakpoint: { position: 0, sectionName: 'Today', badgeCount: 0, dateRange: { range: '', from: '', to: '' } },
  isHeaderScrolled: false,
  shareableUpdateItem: {
    updateItemId: '0',
    updateItemTypeId: '',
    householdId: '0',
    memberId: '',
    name: '',
    date: '',
    genderId: '',
    locationString: '',
    parentsNames: '',
    birthType: '',
    isRead: false,
    hasAccess: false,
    hasShare: false,
  },
  isShareOpen: false,
  shareableObjectId: '',
  isToggleSearch: false,
  focusedScrollAnchorId: '',
  currentSearchString: '',
};
const SCREEN_VARIABLE_NAMES = [
  'BottomSheetId_IsLoaded',
  'BottomSheetId_ShowSubscription',
  'Breakpoints',
  'CurrentBreakpoint',
  'CurrentSearchString',
  'DateRanges',
  'Filter_BottomSheetId',
  'Filter_DefaultState',
  'Filter_UpdateTypeOptions',
  'Filter_Updates',
  'FocusedScrollAnchorId',
  'HasFiltersApplied',
  'IsHeaderScrolled',
  'IsShareOpen',
  'IsToggleSearch',
  'ShareableObjectId',
  'ShareableUpdateItem',
  'ShowMarkAll',
  'isLoading',
];

const isRead = (rows: ReturnType<typeof feedItems.all>, id: string) => rows.find((r) => r.UpdateItemId === id)?.IsRead;

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('update repository', () => {
  it('fetchFeedUpdates calls DataActionFetchUpdates of FeedBlock_Updates with CarouselPreloadedHouseholds only', async () => {
    const items = await fetchFeedUpdates();
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'FeedBlock_Updates',
        action: 'DataActionFetchUpdates',
        inputNames: ['CarouselPreloadedHouseholds'],
      }),
    ]);
    expect(items.map((i) => i.updateItemId)).toEqual(['9101', '9102', '9103']);
    expect(items[0]).toEqual(
      expect.objectContaining({ name: 'James Hargreaves', date: '2026-10-08', householdId: '8101', isRead: false }),
    );
  });

  it('fetchUpdatesList calls DataActionFetchUpdates of Updates_SingleList with every screen variable', async () => {
    const list = await fetchUpdatesList(variables);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Updates_SingleList',
        action: 'DataActionFetchUpdates',
        inputNames: SCREEN_VARIABLE_NAMES,
      }),
    ]);
    expect(list.items).toHaveLength(88);
    expect(list.unreadCount).toBe(84);
    expect(list.items[0]).toEqual(expect.objectContaining({ updateItemId: '980100', name: 'James Hargreaves' }));
    expect(list.items[0]?.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('fetchUpdateDateRangeIds calls DataActionGetDateRanges of Updates_SingleList with every screen variable', async () => {
    const ids = await fetchUpdateDateRangeIds(variables);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Updates_SingleList',
        action: 'DataActionGetDateRanges',
        inputNames: SCREEN_VARIABLE_NAMES,
      }),
    ]);
    expect(ids).toEqual(['Today', 'Last 7 Days', 'Last 30 Days', 'Older']);
  });

  it('markUpdateItemAsRead and markUpdateItemAsUnread call the two service actions with UpdateItemId', async () => {
    await markUpdateItemAsRead('9101');
    expect(isRead(feedItems.all(), '9101')).toBe(true);
    await markUpdateItemAsUnread('9101');
    expect(isRead(feedItems.all(), '9101')).toBe(false);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ServiceAPIAction_UI_UpdateItem_MarkAsRead',
        inputNames: ['UpdateItemId'],
      }),
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ServiceAPIAction_UI_UpdateItem_MarkAsUnread',
        inputNames: ['UpdateItemId'],
      }),
    ]);
  });

  it('markCarouselUpdateItemAsRead calls the server action UpdateItem_MarkAsRead with In_UpdateItemId', async () => {
    await markCarouselUpdateItemAsRead('9102');
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ActionUpdateItem_MarkAsRead',
        inputNames: ['In_UpdateItemId'],
      }),
    ]);
    expect(isRead(feedItems.all(), '9102')).toBe(true);
    feedItems.upsert({ UpdateItemId: '9102', IsRead: false });
  });

  it('markAllUpdateItemsAsRead calls Action_UI_UpdateItem_MarkAllAsRead with Filter_Updates', async () => {
    const before = listItems.all().map((r) => ({ ...r }));
    await markAllUpdateItemsAsRead(emptyFilter);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ServiceAPIAction_UI_UpdateItem_MarkAllAsRead',
        inputNames: ['Filter_Updates'],
      }),
    ]);
    expect(listItems.all().every((r) => r.IsRead === true)).toBe(true);
    for (const row of before) listItems.upsert(row);
  });

  it('fetchUnreadUpdateItemsCount calls Get_UI_UpdateItems_UnreadCount_All with no input', async () => {
    expect(await fetchUnreadUpdateItemsCount()).toBe(414);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ServiceAPIGet_UI_UpdateItems_UnreadCount_All',
        inputNames: [],
      }),
    ]);
  });

  it('a failed call raises the exception of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(fetchFeedUpdates()).rejects.toThrow('Request failed with status 500');
    await expect(markUpdateItemAsRead('9101')).rejects.toThrow('Request failed with status 500');
  });
});
