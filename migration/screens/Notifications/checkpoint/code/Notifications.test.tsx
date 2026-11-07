import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import Notifications from './NotificationsPage';

/* The page with its flows (useNotifications) in the app frame on a memory router, with the MSW mocks of the test
   setup (pages/Notifications/mocks.ts: the recorded date ranges and the 22 notifications of the TST capture of
   2026-11-07, 3 of the last 30 days and 19 older, 7 unread). */
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
    // The TST capture of 2026-11-07: 3 notifications of the last 30 days (2 unread) and 19 older (5 unread).
    expect(sectionTitles()).toEqual(['2Last 30 Days', '5Older']);
    expect(container.querySelectorAll('[data-block="ConnectCorePatterns.Notification_ListItem"]')).toHaveLength(22);
    // The block ids of the TST capture of 2026-11-07.
    expect(container.querySelector('[data-block="App_Notifications.Notifications_SortSheet"]')?.id).toBe('$b18');
    expect(container.querySelector('[data-block="App_Notifications.Notifications_MoreActionSheet"]')?.id).toBe('$b19');
    // Live TST 2026-11-07: a SkeletonSection wraps each header and each row; a row with an icon URL shows its
    // AvatarImage, one without shows the placeholder FetchingImage (MyNotifications.MessageImage).
    const header = container.querySelector('[data-block="App_Notifications.Notifications_Header"]');
    expect(header?.firstElementChild?.getAttribute('data-block')).toBe('ConnectPatterns.SkeletonSection');
    const list = container.querySelector('[data-block="App_Notifications.NotificationsList"] > .updates-list');
    expect(list?.firstElementChild?.getAttribute('data-block')).toBe('ConnectPatterns.SkeletonSection');
    expect(container.querySelectorAll('[data-block="MyNotifications.MessageImage"]').length).toBeGreaterThan(0);
    expect(container.querySelectorAll('[data-block="ConnectPatterns.AvatarImage"]').length).toBeGreaterThan(0);
  });

  it('OnReady shows the skeleton list of GetSkeletonList_UI_Notification under one Today header', async () => {
    sessionStorage.setItem('mock:mock', 'loading');
    const { container } = renderRoutes(routes, PATH);
    await waitFor(() => {
      expect(sectionTitles()).toEqual(['9+Today']);
    });
    expect(container.querySelectorAll('[data-block="ConnectCorePatterns.Notification_ListItem"]')).toHaveLength(10);
    expect(screen.getAllByText('Example & Example')).toHaveLength(10);
    expect(container.querySelectorAll('#\\$b15 .ubt-skeleton-section').length).toBeGreaterThan(0);
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
      expect(sectionTitles()).toEqual(['2Last 30 Days', 'Older']);
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
    expect(block?.id).toBe('$b14');
    expect(block?.querySelector('.connect-icon-calendar_busy_fill')).not.toBeNull();
    expect(block?.querySelector('.ubt-avatar-image-s')).not.toBeNull();
  });
});
