import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router';
import { afterEach, describe, expect, it } from 'vitest';
import { setFlag } from '../../../lib/flags';
import { setClientVar } from '../../../shell/session';
import { testCapturedVariants } from '../../test/capturedVariants';
import { App_NotificationIcon } from './App_NotificationIcon';
import * as stories from './App_NotificationIcon.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

function Where() {
  return <p data-testid="where">{useLocation().pathname}</p>;
}
const renderAt = () =>
  render(
    <MemoryRouter initialEntries={['/UBTConnect/HomeFeed']}>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <App_NotificationIcon />
              <Where />
            </>
          }
        />
      </Routes>
    </MemoryRouter>,
  );

describe('App_NotificationIcon', () => {
  afterEach(() => {
    setFlag('C2NewNotifications', null);
  });

  testCapturedVariants(stories, captures);

  it('the bell opens MessageList, or Notifications when C2NewNotifications is on (D11)', () => {
    setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 1);
    const { container, unmount } = renderAt();
    const link = container.querySelector('a');
    if (!link) throw new Error('no link');
    fireEvent.click(link);
    expect(screen.getByTestId('where')).toHaveTextContent('/UBTConnect/MessageList');
    unmount();
    setFlag('C2NewNotifications', 'on');
    const again = renderAt();
    const link2 = again.container.querySelector('a');
    if (!link2) throw new Error('no link');
    fireEvent.click(link2);
    expect(screen.getByTestId('where')).toHaveTextContent('/UBTConnect/Notifications');
  });

  it('re-reads the unread number when Notifications_LastChecked changes', () => {
    setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 0);
    const { container } = renderAt();
    expect(container.querySelector('.badge')).toBeNull();
    act(() => {
      setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 5);
    });
    expect(container.querySelector('.badge')).toBeNull();
    act(() => {
      setClientVar('UBTConnect.Notifications_LastChecked', '2026-10-14T09:00:00');
    });
    expect(container.querySelector('.badge')).toHaveTextContent('5');
  });
});
