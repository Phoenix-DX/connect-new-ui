import { describe, expect, it } from 'vitest';
import {
  toNotificationDateRangeRecords,
  toNotificationItem,
  toNotificationList,
  toNotificationReadFilterWire,
  toNotificationsVariablesWire,
  type NotificationItemWire,
} from './mapper';
import type { NotificationBreakpoint, NotificationsVariables } from './types';

/** Connect2_Notification_CS MessageListItem as the server sends it. */
const itemWire = (fields: Partial<NotificationItemWire> = {}): NotificationItemWire => ({
  CreatedByUserId: 0,
  DateTimeCreated: '1900-01-01T00:00:00',
  Id: '0',
  IsClear: false,
  IsRead: false,
  MessageInfoTypeId: 0,
  MessageSenderTargetName: '',
  MessageTemplatePriorityId: 0,
  MessageTemplateTypeId: 0,
  ProfileIconURL: '',
  Summary: '',
  Title: '',
  ...fields,
});

const rosterWire = itemWire({
  Id: '920114',
  Title: 'Hall cleaning roster for Saturday',
  DateTimeCreated: '2026-10-12T08:45:10',
  ProfileIconURL: '/UBT_CW/img/UBT_CW.logo_assemble.svg',
  Summary: 'The roster is ready',
  MessageTemplateTypeId: 1,
});
const supperWire = itemWire({
  Id: '920113',
  Title: 'Supper meeting moved to Thursday',
  DateTimeCreated: '2026-09-30T19:05:00',
  IsRead: true,
});

/** The variables of the screen Notifications after ScreenEvent_OnInitialize (the compiled defaults). */
const variables = (fields: Partial<NotificationsVariables> = {}): NotificationsVariables => ({
  filter_BottomSheetId: '',
  filter_Updates: { dateFrom: '', dateTo: '', searchText: '', updateTypeId: '', readOnly: '', sortByNewest: '' },
  hasFiltersApplied: false,
  showMarkAll: false,
  dateRanges: [],
  isLoading: true,
  bottomSheetId_IsLoaded: false,
  bottomSheetId_ShowSubscription: false,
  breakpoints: [],
  currentBreakpoint: { position: 0, sectionName: 'Today', badgeCount: 0, dateRange: { range: '', from: '', to: '' } },
  isHeaderScrolled: false,
  isToggleSearch: false,
  currentSearchString: '',
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
  ...fields,
});

const NULL_RANGE = { Range: '', From: '1900-01-01', To: '1900-01-01' };

describe('notification mapper: outputs', () => {
  it('toNotificationItem keeps the fields that the list reads', () => {
    expect(toNotificationItem(rosterWire)).toEqual({
      id: '920114',
      title: 'Hall cleaning roster for Saturday',
      dateTimeCreated: '2026-10-12T08:45:10',
      isRead: false,
      profileIconURL: '/UBT_CW/img/UBT_CW.logo_assemble.svg',
    });
  });

  it('toNotificationList unwraps the list and gives the unread count (a Long Integer) as a number', () => {
    expect(
      toNotificationList({
        UI_NotificationItemList: { List: [rosterWire, supperWire] },
        HasUnreadMessages: true,
        UnreadNotificationsCount: '1',
      }),
    ).toEqual({
      items: [
        expect.objectContaining({ id: '920114', isRead: false }),
        {
          id: '920113',
          title: 'Supper meeting moved to Thursday',
          dateTimeCreated: '2026-09-30T19:05:00',
          isRead: true,
          profileIconURL: '',
        },
      ],
      hasUnreadMessages: true,
      unreadNotificationsCount: 1,
    });
    expect(
      toNotificationList({
        UI_NotificationItemList: { List: [] },
        HasUnreadMessages: false,
        UnreadNotificationsCount: '',
      }),
    ).toEqual({ items: [], hasUnreadMessages: false, unreadNotificationsCount: 0 });
  });

  it('toNotificationDateRangeRecords keeps the Updates_DateRanges records in the order of the server', () => {
    expect(
      toNotificationDateRangeRecords({
        DateRangesList: {
          List: [
            { Id: 'Today', Order: 1 },
            { Id: 'Last 7 Days', Order: 2 },
            { Id: 'Older', Order: 4 },
          ],
        },
      }),
    ).toEqual([
      { id: 'Today', order: 1 },
      { id: 'Last 7 Days', order: 2 },
      { id: 'Older', order: 4 },
    ]);
  });
});

describe('notification mapper: inputs', () => {
  it('toNotificationsVariablesWire sends every screen variable with its OutSystems name, in the order of the model', () => {
    const wire = toNotificationsVariablesWire(variables());
    expect(wire).toEqual({
      Filter_BottomSheetId: '',
      Filter_Updates: {
        Filter_Date: { Date_From: '1900-01-01', Date_To: '1900-01-01' },
        Filter_SearchText: '',
        Filter_UpdateTypeId: '',
        CountryIds: { List: [] },
        LocalitiesIds: { List: [] },
        Filter_ReadOnly: '',
        Sort_ByNewest: '',
      },
      HasFiltersApplied: false,
      ShowMarkAll: false,
      DateRanges: { List: [] },
      isLoading: true,
      BottomSheetId_IsLoaded: false,
      BottomSheetId_ShowSubscription: false,
      Breakpoints: { List: [] },
      CurrentBreakpoint: { Position: 0, SectionName: 'Today', BadgeCount: 0, DateRange: NULL_RANGE },
      IsHeaderScrolled: false,
      IsToggleSearch: false,
      CurrentSearchString: '',
      BadgeNumber: 0,
      SelectedHistorySearch: '',
      DeviceHardwareId: '',
      Filter_MessageTypePrivate: true,
      Filter_MessageTypePublic: true,
      OrderByIsAscending: false,
      MaxRecords: 20,
      ShowWarning: true,
      SelectedFilter_OrderASC: false,
      Filter_OrderASC: false,
      Filter_OrderDESC: true,
      SelectedFilter_MessageTypePrivate: true,
      SelectedFilter_MessageTypePublic: true,
      MoreAction_BottomSheetId: '',
    });
    expect(Object.keys(wire)).toEqual([
      'Filter_BottomSheetId',
      'Filter_Updates',
      'HasFiltersApplied',
      'ShowMarkAll',
      'DateRanges',
      'isLoading',
      'BottomSheetId_IsLoaded',
      'BottomSheetId_ShowSubscription',
      'Breakpoints',
      'CurrentBreakpoint',
      'IsHeaderScrolled',
      'IsToggleSearch',
      'CurrentSearchString',
      'BadgeNumber',
      'SelectedHistorySearch',
      'DeviceHardwareId',
      'Filter_MessageTypePrivate',
      'Filter_MessageTypePublic',
      'OrderByIsAscending',
      'MaxRecords',
      'ShowWarning',
      'SelectedFilter_OrderASC',
      'Filter_OrderASC',
      'Filter_OrderDESC',
      'SelectedFilter_MessageTypePrivate',
      'SelectedFilter_MessageTypePublic',
      'MoreAction_BottomSheetId',
    ]);
  });

  it('toNotificationsVariablesWire sends "" as the null date and keeps the dates, the ranges and the breakpoints', () => {
    const lastWeek: NotificationBreakpoint = {
      position: 3,
      sectionName: 'Last 7 Days',
      badgeCount: 2,
      dateRange: { range: 'Last 7 Days', from: '2026-10-07', to: '2026-10-13' },
    };
    const wire = toNotificationsVariablesWire(
      variables({
        filter_Updates: {
          dateFrom: '2026-10-07',
          dateTo: '',
          searchText: 'supper',
          updateTypeId: '',
          readOnly: 'Choice.Yes',
          sortByNewest: 'Choice.No',
        },
        dateRanges: [
          { range: 'Today', from: '2026-10-14', to: '2026-10-14' },
          { range: 'Older', from: '', to: '2026-09-13' },
        ],
        breakpoints: [lastWeek],
        currentBreakpoint: lastWeek,
        currentSearchString: 'supper',
      }),
    );
    expect(wire.Filter_Updates).toEqual({
      Filter_Date: { Date_From: '2026-10-07', Date_To: '1900-01-01' },
      Filter_SearchText: 'supper',
      Filter_UpdateTypeId: '',
      CountryIds: { List: [] },
      LocalitiesIds: { List: [] },
      Filter_ReadOnly: 'Choice.Yes',
      Sort_ByNewest: 'Choice.No',
    });
    expect(wire.DateRanges).toEqual({
      List: [
        { Range: 'Today', From: '2026-10-14', To: '2026-10-14' },
        { Range: 'Older', From: '1900-01-01', To: '2026-09-13' },
      ],
    });
    const lastWeekWire = {
      Position: 3,
      SectionName: 'Last 7 Days',
      BadgeCount: 2,
      DateRange: { Range: 'Last 7 Days', From: '2026-10-07', To: '2026-10-13' },
    };
    expect(wire.Breakpoints).toEqual({ List: [lastWeekWire] });
    expect(wire.CurrentBreakpoint).toEqual(lastWeekWire);
    expect(wire.CurrentSearchString).toBe('supper');
  });

  it('toNotificationsVariablesWire sends only the screen variables (a caller model can have more fields)', () => {
    const model = { ...variables(), items: [], isDataFetched: true, unreadNotificationsCount: 4 };
    const wire = toNotificationsVariablesWire(model);
    expect(wire).not.toHaveProperty('items');
    expect(wire).not.toHaveProperty('isDataFetched');
    expect(wire).not.toHaveProperty('unreadNotificationsCount');
    expect(Object.keys(wire)).toHaveLength(27);
  });

  it('toNotificationReadFilterWire gives the inputs of Wrapper_MarkAllAsReadNotifications', () => {
    expect(
      toNotificationReadFilterWire({
        isPublic: true,
        isPrivate: false,
        deviceHardwareId: 'WEB_7f3c',
        searchTerm: 'camp',
      }),
    ).toEqual({ IsPublic: true, IsPrivate: false, DeviceHardwareId: 'WEB_7f3c', SearchTerm: 'camp' });
  });
});
