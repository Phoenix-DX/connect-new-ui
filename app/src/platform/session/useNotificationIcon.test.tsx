import { act, renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter, useLocation } from 'react-router';
import { afterEach, describe, expect, it } from 'vitest';
import { setFlag } from '@/platform/flags/flags';
import { setClientVar } from './session';
import { useNotificationIcon } from './useNotificationIcon';

/* The flows of App_NotificationIcon (moved from the tests of the block, components/notification/NotificationIcon),
   inside a router on HomeFeed. */

const wrapper = ({ children }: { children: ReactNode }) => (
  <MemoryRouter initialEntries={['/UBTConnect/HomeFeed']}>{children}</MemoryRouter>
);
const setup = () => renderHook(() => ({ flow: useNotificationIcon(), at: useLocation() }), { wrapper });

describe('App_NotificationIcon flows (useNotificationIcon)', () => {
  afterEach(() => {
    setFlag('C2NewNotifications', null);
    setClientVar('UBTConnect.Notifications_IsSynched', false);
    setClientVar('UBTConnect.Notifications_LastChecked', '1900-01-01T00:00:00');
    setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 0);
  });

  it('the badge is loading until Notifications_IsSynched; LastChecked is the refresh Datetime', () => {
    setClientVar('UBTConnect.Notifications_IsSynched', false);
    const { result } = setup();
    expect(result.current.flow.isLoading).toBe(true);
    act(() => {
      setClientVar('UBTConnect.Notifications_IsSynched', true);
      setClientVar('UBTConnect.Notifications_LastChecked', '2026-10-14T09:00:00');
    });
    expect(result.current.flow.isLoading).toBe(false);
    expect(result.current.flow.lastChecked).toBe('2026-10-14T09:00:00');
  });

  it('the bell opens MessageList, or Notifications when C2NewNotifications is on (D11)', () => {
    const first = setup();
    act(() => {
      first.result.current.flow.onIconClick();
    });
    expect(first.result.current.at.pathname).toBe('/UBTConnect/MessageList');
    first.unmount();
    setFlag('C2NewNotifications', 'on');
    const again = setup();
    act(() => {
      again.result.current.flow.onIconClick();
    });
    expect(again.result.current.at.pathname).toBe('/UBTConnect/Notifications');
  });

  it('reads the unread number on start, and again only when App_NotificationRefresh raises Updated', () => {
    setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 2);
    const { result } = setup();
    expect(result.current.flow.unreadNumber).toBe(2);
    act(() => {
      setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 5);
    });
    expect(result.current.flow.unreadNumber).toBe(2);
    act(() => {
      result.current.flow.onRefreshUpdated();
    });
    expect(result.current.flow.unreadNumber).toBe(5);
  });
});
