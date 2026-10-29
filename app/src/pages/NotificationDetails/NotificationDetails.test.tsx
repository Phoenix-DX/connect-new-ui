import { screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import NotificationDetails from './NotificationDetailsPage';

/* The page in the app frame on a memory router, with the MSW mocks of the test setup
   (pages/NotificationDetails/mocks.ts: the captured record of id 5496739, and the 19 notifications of the Notifications
   mock by their ids). */
const PATH = '/UBTConnect/NotificationDetails';
const routes = { [PATH]: <NotificationDetails /> };
const fetchCalls = () => (window.__osCalls ?? []).filter((call) => call.action === 'DataActionFetchMessageInstance');
const textOf = (selector: string) => document.querySelector(selector)?.textContent;

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('NotificationDetails page', () => {
  it('fetches the message instance at the start and shows its title, summary and date', async () => {
    const { container } = renderRoutes(routes, `${PATH}?MessageInstanceId=5496739`);
    expect(container.querySelector('[data-block="Layouts.Layout_MainPages_Upgrade"]')).not.toBeNull();
    expect(textOf('#b1-Placeholder_Header_Title')).toBe('Notifications');
    expect(await screen.findByText('Your Host on Wednesday')).toBeInTheDocument();
    expect(fetchCalls()).toHaveLength(1);
    expect(fetchCalls()[0]?.owner).toBe('NotificationDetails');
    expect(fetchCalls()[0]?.inputNames).toEqual(['MessageInstanceId']);
    expect(textOf('[data-block="BasePatterns.CustomContainer"]#Notification_Date')).toBe('Wed 28/10/2026 09:30 AM');
    expect(textOf('[data-block="BasePatterns.CustomContainer"]#Notification_Content')).toBe('');
    expect(container.querySelector('.connect-icon-calendar_busy.text-primary')).not.toBeNull();
    expect(container.querySelector('[data-block="App_Common_Blocks.SectionSeparator"]')).not.toBeNull();
    expect(container.querySelector('[data-block="App_Common.BottomBarMenu"]')).not.toBeNull();
  });

  it('shows the empty record while the data action runs (the title is empty, the date is the null date)', () => {
    renderRoutes(routes, `${PATH}?MessageInstanceId=5496739`);
    expect(textOf('[data-block="ConnectPatterns.IconText"]')).toBe('');
    expect(textOf('#Notification_Date')).toBe('Mon 01/01/1900 00:00 AM');
  });

  it('opens a notification of the Notifications list by its id', async () => {
    renderRoutes(routes, `${PATH}?MessageInstanceId=910019`);
    expect(await screen.findByText('Test Noti 56')).toBeInTheDocument();
    await waitFor(() => {
      expect(fetchCalls()).toHaveLength(1);
    });
  });
});
