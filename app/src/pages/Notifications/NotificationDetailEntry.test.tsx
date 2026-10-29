import { fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import Notifications from './NotificationsPage';

/* Handler_NotificationDetail of the live TST screen (Notifications.mvc.js:2986-3003): a click on a notification calls
   MarkAsRead when it is not read, then opens NotificationDetails with its id. */
const PATH = '/UBTConnect/Notifications';
const routes = {
  [PATH]: <Notifications />,
  '/UBTConnect/NotificationDetails': <p>NotificationDetails screen</p>,
};
const markAsReadCalls = () => (window.__osCalls ?? []).filter((call) => call.action === 'ActionMarkAsRead');
const itemOf = async (title: string) => {
  const item = (await screen.findByText(title)).closest('.updates-list__list-item');
  if (!item) throw new Error(`no list item for ${title}`);
  return item;
};

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('Notifications → NotificationDetails', () => {
  it('an unread notification: MarkAsRead with its id, then NotificationDetails', async () => {
    const { router } = renderRoutes(routes, PATH);
    fireEvent.click(await itemOf('test'));
    expect(await screen.findByText('NotificationDetails screen')).toBeInTheDocument();
    expect(markAsReadCalls()).toHaveLength(1);
    expect(markAsReadCalls()[0]?.inputNames).toEqual(['MessageInstanceId']);
    expect(markAsReadCalls()[0]?.phase).not.toBeUndefined();
    expect(router.state.location.search).toBe('?MessageInstanceId=910021');
  });

  it('a read notification: no MarkAsRead, then NotificationDetails', async () => {
    const { router } = renderRoutes(routes, PATH);
    fireEvent.click(await itemOf('Camp is booked out'));
    expect(await screen.findByText('NotificationDetails screen')).toBeInTheDocument();
    await waitFor(() => {
      expect(router.state.location.search).toBe('?MessageInstanceId=910003');
    });
    expect(markAsReadCalls()).toHaveLength(0);
  });
});
