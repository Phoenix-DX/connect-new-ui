import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { NotificationIcon, type NotificationIconProps } from './NotificationIcon';
import * as stories from './NotificationIcon.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

/** The bell is an OSLink, which needs a router. */
const bell = (over: Partial<NotificationIconProps> = {}) => (
  <MemoryRouter>
    <NotificationIcon
      isLoading={false}
      unreadNumber={1}
      lastChecked="1900-01-01T00:00:00"
      onIconClick={() => undefined}
      onRefreshUpdated={() => undefined}
      {...over}
    />
  </MemoryRouter>
);

/* The flows (client variables, the C2NewNotifications navigation) are tested with useNotificationIcon
   (platform/session/useNotificationIcon.test.tsx). */
describe('App_NotificationIcon', () => {
  testCapturedVariants(stories, captures);

  it('the bell raises onIconClick (the caller opens MessageList or Notifications, D11)', () => {
    const onIconClick = vi.fn();
    const { container } = render(bell({ onIconClick }));
    const link = container.querySelector('a');
    if (!link) throw new Error('no link');
    fireEvent.click(link);
    expect(onIconClick).toHaveBeenCalledTimes(1);
  });

  it('shows the unread number; a new Notifications_LastChecked raises onRefreshUpdated', () => {
    const onRefreshUpdated = vi.fn();
    const { container, rerender } = render(bell({ unreadNumber: 0, onRefreshUpdated }));
    expect(container.querySelector('.badge')).toBeNull();
    rerender(bell({ unreadNumber: 5, onRefreshUpdated }));
    expect(container.querySelector('.badge')).toHaveTextContent('5');
    expect(onRefreshUpdated).not.toHaveBeenCalled();
    rerender(bell({ unreadNumber: 5, lastChecked: '2026-10-14T09:00:00', onRefreshUpdated }));
    expect(onRefreshUpdated).toHaveBeenCalledTimes(1);
  });
});
