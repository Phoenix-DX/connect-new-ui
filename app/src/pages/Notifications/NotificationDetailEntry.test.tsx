import { fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import Notifications from './NotificationsPage';

/* Handler_NotificationDetail of the live TST screen (2026-11-05, Notifications.mvc.js:2562-2596): a click on a
   notification calls MarkAsRead when it is not read, then opens NotificationDetails with HardwareId "" (the list sends
   it, NotificationsList.mvc.js:361), its id and its MessageTemplateId. */
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
    // 'Test Noti 2' is unread in the TST capture of 2026-11-07.
    fireEvent.click(await itemOf('Test Noti 2'));
    expect(await screen.findByText('NotificationDetails screen')).toBeInTheDocument();
    expect(markAsReadCalls()).toHaveLength(1);
    expect(markAsReadCalls()[0]?.inputNames).toEqual(['MessageInstanceId']);
    expect(markAsReadCalls()[0]?.phase).not.toBeUndefined();
    expect(router.state.location.search).toBe('?HardwareId=&MessageInstanceId=910022&MessageTemplateId=48190');
  });

  it('a read notification: no MarkAsRead, then NotificationDetails', async () => {
    const { router } = renderRoutes(routes, PATH);
    fireEvent.click(await itemOf('Camp is booked out'));
    expect(await screen.findByText('NotificationDetails screen')).toBeInTheDocument();
    await waitFor(() => {
      expect(router.state.location.search).toBe('?HardwareId=&MessageInstanceId=910003&MessageTemplateId=48171');
    });
    expect(markAsReadCalls()).toHaveLength(0);
  });
});
