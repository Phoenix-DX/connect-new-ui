import { describe, expect, it } from 'vitest';
import {
  toFeedUpdateItems,
  toFilterUpdatesWire,
  toUnreadCount,
  toUpdateDateRangeIds,
  toUpdatesList,
  toUpdatesListVariablesWire,
  type UpdateItemWire,
  type UpdatesListWire,
} from './mapper';
import type { FilterUpdates, UpdateItem, UpdatesListVariables } from './types';

/** An update item as the server sends it. */
const itemWire = (fields: Partial<UpdateItemWire> = {}): UpdateItemWire => ({
  UpdateItemId: '9101',
  UpdateItemTypeId: 'Birth',
  HouseholdId: '8101',
  MemberId: '7101',
  Name: 'James Hargreaves',
  Date: '2026-10-08',
  GenderId: 'Gender.MALE',
  LocationString: 'Geelong, Australia',
  ParentsNames: 'Thomas & Sophie Hargreaves',
  BirthType: '',
  IsRead: false,
  HasAccess: true,
  HasShare: true,
  ...fields,
});

/** The same item in the domain shape. */
const item = (fields: Partial<UpdateItem> = {}): UpdateItem => ({
  updateItemId: '9101',
  updateItemTypeId: 'Birth',
  householdId: '8101',
  memberId: '7101',
  name: 'James Hargreaves',
  date: '2026-10-08',
  genderId: 'Gender.MALE',
  locationString: 'Geelong, Australia',
  parentsNames: 'Thomas & Sophie Hargreaves',
  birthType: '',
  isRead: false,
  hasAccess: true,
  hasShare: true,
  ...fields,
});

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

describe('update mapper', () => {
  it('toFeedUpdateItems keeps every field and the null date as the server sends it', () => {
    expect(
      toFeedUpdateItems({
        UI_UpdateItemList: { List: [itemWire(), itemWire({ UpdateItemId: '9102', Date: '1900-01-01' })] },
      }),
    ).toEqual([item(), item({ updateItemId: '9102', date: '1900-01-01' })]);
  });

  it('toUpdatesList gives "" for the null date and a number for the unread count', () => {
    const wire = {
      UI_UpdateItemList: {
        List: [
          itemWire({ IsRead: true }),
          itemWire({ UpdateItemId: '9102', Date: '1900-01-01' }),
          itemWire({ Date: '' }),
        ],
      },
      UnreadCount: '2',
    } as unknown as UpdatesListWire; // a Long Integer or an Integer can come as text
    expect(toUpdatesList(wire)).toEqual({
      items: [item({ isRead: true }), item({ updateItemId: '9102', date: '' }), item({ date: '' })],
      unreadCount: 2,
    });
  });

  it('toUpdateDateRangeIds keeps the ids in the order of the server', () => {
    expect(
      toUpdateDateRangeIds({
        DateRangesList: {
          List: [
            { Id: 'Today', Order: 1 },
            { Id: 'Last 7 Days', Order: 2 },
            { Id: 'Older', Order: 4 },
          ],
        },
      }),
    ).toEqual(['Today', 'Last 7 Days', 'Older']);
  });

  it('toUnreadCount keeps the count as the server sends it', () => {
    expect(toUnreadCount({ UnreadCount: 414 })).toBe(414);
  });

  it('toFilterUpdatesWire sends the null date for "" and wraps the id lists', () => {
    expect(
      toFilterUpdatesWire({
        ...emptyFilter,
        dateFrom: '2026-09-14',
        searchText: 'hughes',
        updateTypeId: 'Marriage',
        countryIds: ['AU'],
        localitiesIds: ['310', '311'],
      }),
    ).toEqual({
      Filter_Date: { Date_From: '2026-09-14', Date_To: '1900-01-01' },
      Filter_SearchText: 'hughes',
      Filter_UpdateTypeId: 'Marriage',
      CountryIds: { List: ['AU'] },
      LocalitiesIds: { List: ['310', '311'] },
      Filter_ReadOnly: '',
      Sort_ByNewest: '',
    });
  });

  it('toUpdatesListVariablesWire sends every screen variable with its OutSystems name, in the order of the screen', () => {
    const variables: UpdatesListVariables = {
      filter_UpdateTypeOptions: [{ text: 'All', identifier: '', isSelected: true }],
      filter_BottomSheetId: 'b1',
      filter_Updates: emptyFilter,
      filter_DefaultState: emptyFilter,
      hasFiltersApplied: false,
      showMarkAll: true,
      dateRanges: [{ range: 'Today', from: '2026-10-14', to: '' }],
      isLoading: true,
      bottomSheetId_IsLoaded: false,
      bottomSheetId_ShowSubscription: false,
      breakpoints: [],
      currentBreakpoint: {
        position: 0,
        sectionName: 'Today',
        badgeCount: 3,
        dateRange: { range: '', from: '', to: '' },
      },
      isHeaderScrolled: false,
      shareableUpdateItem: item({ date: '' }),
      isShareOpen: false,
      shareableObjectId: '',
      isToggleSearch: false,
      focusedScrollAnchorId: '',
      currentSearchString: 'grace',
    };
    const wire = toUpdatesListVariablesWire(variables);
    expect(Object.keys(wire)).toEqual([
      'Filter_UpdateTypeOptions',
      'Filter_BottomSheetId',
      'Filter_Updates',
      'Filter_DefaultState',
      'HasFiltersApplied',
      'ShowMarkAll',
      'DateRanges',
      'isLoading',
      'BottomSheetId_IsLoaded',
      'BottomSheetId_ShowSubscription',
      'Breakpoints',
      'CurrentBreakpoint',
      'IsHeaderScrolled',
      'ShareableUpdateItem',
      'IsShareOpen',
      'ShareableObjectId',
      'IsToggleSearch',
      'FocusedScrollAnchorId',
      'CurrentSearchString',
    ]);
    expect(wire.Filter_UpdateTypeOptions).toEqual({
      List: [{ Text: 'All', Identifier: '', IconId: '', IsSelected: true, Enabled: true }],
    });
    expect(wire.DateRanges).toEqual({ List: [{ Range: 'Today', From: '2026-10-14', To: '1900-01-01' }] });
    expect(wire.Breakpoints).toEqual({ List: [] });
    expect(wire.CurrentBreakpoint).toEqual({
      Position: 0,
      SectionName: 'Today',
      BadgeCount: 3,
      DateRange: { Range: '', From: '1900-01-01', To: '1900-01-01' },
    });
    expect(wire.ShareableUpdateItem).toEqual(itemWire({ Date: '1900-01-01' }));
    expect(wire.Filter_Updates).toEqual(toFilterUpdatesWire(emptyFilter));
    expect(wire.CurrentSearchString).toBe('grace');
  });

  it('empty wire lists give empty lists', () => {
    expect(toFeedUpdateItems({ UI_UpdateItemList: { List: [] } })).toEqual([]);
    expect(toUpdatesList({ UI_UpdateItemList: { List: [] }, UnreadCount: 0 })).toEqual({ items: [], unreadCount: 0 });
    expect(toUpdateDateRangeIds({ DateRangesList: { List: [] } })).toEqual([]);
  });
});
