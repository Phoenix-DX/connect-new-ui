import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import Notifications from './NotificationsPage';

/* The page with its flows (useNotifications) in the app frame on a memory router, with the MSW mocks of the test
   setup (pages/Notifications/mocks.ts: the recorded date ranges and 19 notifications, 9 of the last 30 days and 10
   older, 16 unread). */
const PATH = '/UBTConnect/Notifications';
const routes = {
  [PATH]: <Notifications />,
  '/UBTConnect/HomeFeed': <p>HomeFeed screen</p>,
};

const searchInput = () => {
  const input = document.querySelector('#Search_PreScroll input');
  if (!(input instanceof HTMLInputElement)) throw new Error('search input not rendered');
  return input;
};
const fetchCalls = () =>
  (window.__osCalls ?? []).filter((call) => call.action === 'DataActionFetchNotifications').length;
const sectionTitles = () =>
  [...document.querySelectorAll('[data-block="App_Notifications.Notifications_Header"]')].map(
    (header) => header.textContent,
  );

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('Notifications page', () => {
  it('shows the header, the sort row and the notifications grouped by date range with their unread counts', async () => {
    const { container } = renderRoutes(routes, PATH);
    expect(container.querySelector('[data-block="Layouts.Layout_MainPages_Upgrade"]')).not.toBeNull();
    expect(screen.getByPlaceholderText('Search notifications')).toBeInTheDocument();
    expect(screen.getByText('Only show unread')).toBeInTheDocument();
    expect(await screen.findByText('Test Noti 56')).toBeInTheDocument();
    // The badge comes before the title in the DOM (IconText with the icon on the right).
    expect(sectionTitles()).toEqual(['9Last 30 Days', '7Older']);
    expect(container.querySelectorAll('[data-block="ConnectCorePatterns.Notification_ListItem"]')).toHaveLength(19);
    expect(container.querySelector('[data-block="App_Notifications.Notifications_SortSheet"]')?.id).toBe('$b20');
    expect(container.querySelector('[data-block="App_Notifications.Notifications_MoreActionSheet"]')?.id).toBe('$b21');
  });

  it('a search refreshes the list once; a back navigation keeps the search text and fetches again', async () => {
    const { router } = renderRoutes(routes, PATH);
    await screen.findByText('Test Noti 56');
    await waitFor(() => {
      expect(fetchCalls()).toBe(1);
    });
    fireEvent.change(searchInput(), { target: { value: 'Camp' } });
    fireEvent.keyUp(searchInput(), { key: 'Enter' });
    await waitFor(() => {
      expect(fetchCalls()).toBe(2);
    });
    fireEvent.keyUp(searchInput(), { key: 'Enter' });
    await act(async () => {
      await router.navigate('/UBTConnect/HomeFeed');
    });
    expect(await screen.findByText('HomeFeed screen')).toBeInTheDocument();
    await act(async () => {
      await router.navigate(-1);
    });
    await screen.findByText('Test Noti 56');
    expect(searchInput().value).toBe('Camp');
    await waitFor(() => {
      expect(fetchCalls()).toBe(3);
    });
  });

  it('a section with no unread notification has no Badge in its header (If_HasBadge, BR-UBTCON-981)', async () => {
    sessionStorage.setItem('mock:mock', 'olderread');
    renderRoutes(routes, PATH);
    await waitFor(() => {
      expect(sectionTitles()).toEqual(['9Last 30 Days', 'Older']);
    });
    const headers = document.querySelectorAll('[data-block="App_Notifications.Notifications_Header"]');
    expect(headers[0]?.querySelector('[data-block="OutSystemsUIOverrides.Badge"]')).not.toBeNull();
    expect(headers[1]?.querySelector('[data-block="OutSystemsUIOverrides.Badge"]')).toBeNull();
  });

  it('an empty fetched list shows Notifications_NoItemsFound (BR-UBTCON-983, Notifications.mvc.js:748)', async () => {
    sessionStorage.setItem('mock:mock', 'empty');
    const { container } = renderRoutes(routes, PATH);
    expect(await screen.findByText('No Notifications Found')).toBeInTheDocument();
    expect(screen.getByText('We were unable to find any Notifications to display.')).toBeInTheDocument();
    const block = container.querySelector('[data-block="App_Notifications.Notifications_NoItemsFound"]');
    expect(block?.id).toBe('$b13');
    expect(block?.querySelector('.connect-icon-calendar_busy_fill')).not.toBeNull();
    expect(block?.querySelector('.ubt-avatar-image-s')).not.toBeNull();
  });
});
