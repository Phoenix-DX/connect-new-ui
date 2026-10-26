import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  useMarkAllNotificationsAsReadMutation,
  useMarkNotificationOpenedMutation,
  useNotificationDateRangesQuery,
  useNotificationsQuery,
} from './hooks';
import { notificationKeys } from './keys';
import type { NotificationReadFilter, NotificationsVariables } from './types';

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
};

const allMessages: NotificationReadFilter = {
  isPublic: true,
  isPrivate: true,
  deviceHardwareId: 'WEB_test',
  searchTerm: '',
};

/** A client with the library defaults (retry 3), so the tests see the options of the hooks. */
function providerOf(client: QueryClient) {
  return function Provider({ children }: { children: ReactNode }) {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
  };
}
const calls = () => (window.__osCalls ?? []).map((c) => c.action);

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('notification query keys', () => {
  it('the screen variables are part of the key', () => {
    expect(notificationKeys.dateRanges(variables)).toEqual(['notification', 'dateRanges', variables]);
    expect(notificationKeys.list(variables)).toEqual(['notification', 'list', variables]);
  });
});

describe('useNotificationDateRangesQuery', () => {
  it('calls the server on each mount and keeps nothing in the cache (staleTime 0, gcTime 0)', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useNotificationDateRangesQuery(variables), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.map((r) => r.id)).toEqual(['Today', 'Last 7 Days', 'Last 30 Days', 'Older']);
    first.unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: notificationKeys.dateRanges(variables) })).toBeUndefined();
    });
    const second = renderHook(() => useNotificationDateRangesQuery(variables), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetDateRanges', 'DataActionGetDateRanges']);
  });

  it('does not call the server when the caller disables it, and does not retry a failed call', async () => {
    const client = new QueryClient();
    const disabled = renderHook(() => useNotificationDateRangesQuery(variables, { enabled: false }), {
      wrapper: providerOf(client),
    });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(disabled.result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual([]);

    sessionStorage.setItem('mock:mock', 'error');
    const failed = renderHook(() => useNotificationDateRangesQuery(variables), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(failed.result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGetDateRanges']);
  });
});

describe('useNotificationsQuery', () => {
  it('calls the server on each mount and keeps nothing in the cache (staleTime 0, gcTime 0)', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useNotificationsQuery(variables), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.items).toHaveLength(19);
    expect(first.result.current.data?.unreadNotificationsCount).toBe(16);
    first.unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: notificationKeys.list(variables) })).toBeUndefined();
    });
    const second = renderHook(() => useNotificationsQuery(variables), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionFetchNotifications', 'DataActionFetchNotifications']);
  });

  it('does not retry a failed call', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const failed = renderHook(() => useNotificationsQuery(variables), { wrapper: providerOf(new QueryClient()) });
    await waitFor(() => {
      expect(failed.result.current.isError).toBe(true);
    });
    expect(calls()).toEqual(['DataActionFetchNotifications']);
  });
});

describe('notification mutation hooks', () => {
  it('useMarkNotificationOpenedMutation answers IsRetracted, once per call, without a retry after a failure', async () => {
    const { result } = renderHook(() => useMarkNotificationOpenedMutation(), {
      wrapper: providerOf(new QueryClient()),
    });
    await expect(act(() => result.current.mutateAsync('81017'))).resolves.toBe(false);
    expect(calls()).toEqual(['ActionWrapper_NotificationOpened']);
    sessionStorage.setItem('mock:mock', 'error');
    await expect(act(() => result.current.mutateAsync('81016'))).rejects.toThrow('Request failed with status 500');
    expect(calls()).toEqual(['ActionWrapper_NotificationOpened', 'ActionWrapper_NotificationOpened']);
  });

  it('useMarkAllNotificationsAsReadMutation answers TotalChange, once per call, without a retry after a failure', async () => {
    const { result } = renderHook(() => useMarkAllNotificationsAsReadMutation(), {
      wrapper: providerOf(new QueryClient()),
    });
    await expect(act(() => result.current.mutateAsync(allMessages))).resolves.toBe(15);
    expect(calls()).toEqual(['ActionWrapper_MarkAllAsReadNotifications']);
    sessionStorage.setItem('mock:mock', 'error');
    await expect(act(() => result.current.mutateAsync(allMessages))).rejects.toThrow('Request failed with status 500');
    expect(calls()).toEqual(['ActionWrapper_MarkAllAsReadNotifications', 'ActionWrapper_MarkAllAsReadNotifications']);
  });
});
