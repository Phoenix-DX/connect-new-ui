import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { collection } from '@/mocks/store';
import { recordBodies } from '@/test/testSupport';
import { toNotificationsVariablesWire } from './mapper';
import {
  fetchNotificationDateRanges,
  fetchNotifications,
  markAllNotificationsAsRead,
  markNotificationOpened,
} from './repository';
import type { NotificationReadFilter, NotificationsVariables } from './types';

/* The MSW mocks of the test setup: the screen Notifications (the recorded date ranges Today, Last 7 Days, Last 30 Days
   and Older; 19 fictional notifications, 16 unread), and the blocks ScreenBlock_MessageDetail and
   ScreenBlock_MessageList (19 fictional messages in the collection MessageList.messages, 16 unread). The wrappers
   change this collection, so the tests run in order. */
const messages = () => collection('MessageList.messages', () => [], 'Id');
const unreadIds = () =>
  messages()
    .all()
    .filter((m) => m.IsRead !== true && m.IsClear !== true)
    .map((m) => m.Id);

/** The variables of the screen Notifications at OnReady (the compiled defaults, isLoading True). */
const variables: NotificationsVariables = {
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
};

const allMessages: NotificationReadFilter = {
  isPublic: true,
  isPrivate: true,
  deviceHardwareId: 'WEB_test',
  searchTerm: '',
};

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('notification repository: the screen Notifications', () => {
  it('fetchNotificationDateRanges calls DataActionGetDateRanges with every screen variable', async () => {
    const bodies = recordBodies('UBTConnect/Notifications/DataActionGetDateRanges');
    const ranges = await fetchNotificationDateRanges(variables);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Notifications',
        action: 'DataActionGetDateRanges',
        inputNames: Object.keys(toNotificationsVariablesWire(variables)).sort(),
      }),
    ]);
    expect(bodies).toEqual([toNotificationsVariablesWire(variables)]);
    expect(ranges).toEqual([
      { id: 'Today', order: 1 },
      { id: 'Last 7 Days', order: 2 },
      { id: 'Last 30 Days', order: 3 },
      { id: 'Older', order: 4 },
    ]);
  });

  it('fetchNotifications calls DataActionFetchNotifications with every screen variable', async () => {
    const bodies = recordBodies('UBTConnect/Notifications/DataActionFetchNotifications');
    const list = await fetchNotifications(variables);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        owner: 'Notifications',
        action: 'DataActionFetchNotifications',
        inputNames: Object.keys(toNotificationsVariablesWire(variables)).sort(),
      }),
    ]);
    expect(bodies).toEqual([toNotificationsVariablesWire(variables)]);
    expect(list.items).toHaveLength(68);
    const first = list.items.find((i) => i.id === '910019');
    expect(first && Object.keys(first).sort()).toEqual(['dateTimeCreated', 'id', 'isRead', 'profileIconURL', 'title']);
    expect(first).toMatchObject({
      id: '910019',
      title: 'Test Noti 56',
      isRead: true,
      profileIconURL: '/UBT_CW/img/UBT_CW.directory_entity_logo.png',
    });
    expect(first?.dateTimeCreated).toMatch(/^\d{4}-\d{2}-\d{2}T10:50:23$/);
    // The TST capture of 2026-10-29: 2 unread notifications.
    expect(list.items.filter((n) => !n.isRead)).toHaveLength(2);
    expect(list.hasUnreadMessages).toBe(true);
    expect(list.unreadNotificationsCount).toBe(2);
  });

  it('fetchNotifications sends only the screen variables of a caller model', async () => {
    const bodies = recordBodies('UBTConnect/Notifications/DataActionFetchNotifications');
    const model = { ...variables, items: [], isDataFetched: false, unreadNotificationsCount: 0 };
    await fetchNotifications(model);
    expect(bodies).toEqual([toNotificationsVariablesWire(variables)]);
  });
});

describe('notification repository: the wrappers of Connect2_LegacyShared', () => {
  it('markNotificationOpened calls Wrapper_NotificationOpened with the message and answers IsRetracted', async () => {
    // The MessageList capture of 2026-10-29 has 2 unread messages (the MessageList mock); the first one is opened.
    const before = unreadIds();
    expect(before).toHaveLength(2);
    const id = String(before[0]);
    await expect(markNotificationOpened(id)).resolves.toBe(false);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_LegacyShared',
        owner: undefined,
        action: 'ActionWrapper_NotificationOpened',
        inputNames: ['MessageInstanceId'],
      }),
    ]);
    expect(unreadIds()).not.toContain(id);
    expect(unreadIds()).toHaveLength(1);
  });

  it('markAllNotificationsAsRead sends the filter of the message list and answers TotalChange', async () => {
    const bodies = recordBodies('Connect2_LegacyShared/ActionWrapper_MarkAllAsReadNotifications');
    // The MessageList capture of 2026-10-29 has 2 unread messages; the test above opened one (the store is shared).
    await expect(markAllNotificationsAsRead(allMessages)).resolves.toBe(1);
    await expect(markAllNotificationsAsRead(allMessages)).resolves.toBe(0);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_LegacyShared',
        owner: undefined,
        action: 'ActionWrapper_MarkAllAsReadNotifications',
        inputNames: ['DeviceHardwareId', 'IsPrivate', 'IsPublic', 'SearchTerm'],
      }),
      expect.objectContaining({ action: 'ActionWrapper_MarkAllAsReadNotifications' }),
    ]);
    const body = { IsPublic: true, IsPrivate: true, DeviceHardwareId: 'WEB_test', SearchTerm: '' };
    expect(bodies).toEqual([body, body]);
    expect(unreadIds()).toEqual([]);
  });
});

describe('notification repository: errors', () => {
  it('a failed call raises the exception of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(fetchNotificationDateRanges(variables)).rejects.toThrow('Request failed with status 500');
    await expect(fetchNotifications(variables)).rejects.toThrow('Request failed with status 500');
    await expect(markNotificationOpened('81018')).rejects.toThrow('Request failed with status 500');
    await expect(markAllNotificationsAsRead(allMessages)).rejects.toThrow('Request failed with status 500');
  });
});
