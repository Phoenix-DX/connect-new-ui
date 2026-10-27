import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { collection } from '@/mocks/store';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { getClientVar, setSignedInUser } from '@/platform/session/session';
import { server } from '@/test/setup';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import MessageList from './MessageListPage';

/* The page with the flows of its block (useMessageList) in the app frame on a memory router, on the page mocks
   (19 fictional messages, 16 unread). The mocks keep the read and cleared marks in memory: each test puts the rows
   back. */
const PATH = '/UBTConnect/MessageList';
const HOME = '/UBTConnect/HomeFeed';
const DETAIL = '/UBTConnect/MessageDetail';
const GET_MESSAGES = 'Connect2_LegacyShared/ScreenBlock_MessageList/DataActionGetMessages';
const GET_INSTANCE = 'Connect2_LegacyShared/ScreenBlock_MessageList/DataActionGetMessageInstanceById2';
const MARK_ALL = 'Connect2_LegacyShared/ActionWrapper_MarkAllAsReadNotifications';
/** GetMessages in the call log (owner/action). */
const GET_MESSAGES_CALL = 'ScreenBlock_MessageList/DataActionGetMessages';
const getMessagesCalls = () => calledActions().filter((a) => a === GET_MESSAGES_CALL).length;
const routes = { [HOME]: <p>HomeFeed screen</p>, [PATH]: <MessageList />, [DETAIL]: <p>MessageDetail screen</p> };

const messages = collection('MessageList.messages', () => []);
const seed = structuredClone(messages.all());

const rows = (container: HTMLElement) => [...container.querySelectorAll('[data-list-item-content]')];
const titles = (container: HTMLElement) =>
  [...container.querySelectorAll('[id$="Message_List_Item_Title"]')].map((e) => e.textContent);
const byId = (id: string) => document.querySelector(`[id="${id}"]`) as HTMLElement;

/** Opens the page after HomeFeed, so a back navigation has a previous screen, and waits for the list. */
async function open() {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(PATH));
  await waitFor(() => {
    expect(rows(view.container).length).toBeGreaterThan(0);
  });
  return view;
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  for (const row of seed) messages.upsert(structuredClone(row));
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('MessageList page', () => {
  it('signed in: OnReady runs GetMessages once; 19 rows, 16 unread, the unread count; bottom bar and common UI', async () => {
    const bodies = recordBodies(GET_MESSAGES);
    const { container } = await open();
    expect(rows(container)).toHaveLength(19);
    expect(container.querySelectorAll('.background-blue-lightest')).toHaveLength(16);
    expect(titles(container)[0]).toBe('Test Noti 56');
    expect(screen.getByText('Mark All as Read')).toBeInTheDocument();
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(16);
    expect(getMessagesCalls()).toBe(1);
    expect(bodies[0]).toMatchObject({
      ShowWarning: true,
      Filter_MessageTypePrivate: true,
      Filter_MessageTypePublic: true,
      OrderByIsAscending: false,
      MaxRecords: 20,
      Trigger_PullToRefresh: false,
    });
    expect(byId('b1-BottomBar').querySelector('[id="$b2"]')).not.toBeNull();
    expect(container.querySelector('[data-block="MyNotifications.ScreenBlock_MessageList"]')?.id).toBe('$b1');
    expect(byId('b1-CommonUI_Elements').firstElementChild?.id).toBe('$b3');
    expect(byId('b1-$b15')).toHaveAttribute('data-block', 'NavigationHandler.BackNavigationHandler');
  });

  it('signed out: the warning, no bottom bar, and GetMessages without the private messages', async () => {
    setSignedInUser(null);
    const bodies = recordBodies(GET_MESSAGES);
    const { container } = await open();
    expect(byId('b1-$b6')).toHaveAttribute('data-block', 'Reusable.Warning_PrivateMessage');
    expect(byId('b1-BottomBar').childElementCount).toBe(0);
    expect(bodies[0]).toMatchObject({ ShowWarning: false, Filter_MessageTypePrivate: false });
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(container.querySelector('[data-block="Reusable.Warning_PrivateMessage"]')).toBeNull();
  });

  it('filters: Oldest to Newest and Apply refresh GetMessages in ascending order and close the filters', async () => {
    const bodies = recordBodies(GET_MESSAGES);
    const { container } = await open();
    fireEvent.click(byId('b1-Filter_Icon'));
    expect(rows(container)).toHaveLength(0);
    fireEvent.click(byId('b1-b13-OldToNew_Checkbox'));
    fireEvent.click(screen.getByRole('button', { name: 'Apply' }));
    await waitFor(() => {
      expect(titles(container)[0]).toBe('Heatwave risk for all');
    });
    expect(screen.getByText('My Notifications')).toBeInTheDocument();
    expect(bodies.at(-1)).toMatchObject({ OrderByIsAscending: true, SelectedFilter_OrderASC: true, ShowFilters: true });
  });

  it('Close_Filter_Icon runs ToggleShowFilters: the unsaved filters are reverted and the filters close', async () => {
    const { container } = await open();
    fireEvent.click(byId('b1-Filter_Icon'));
    fireEvent.click(byId('b1-b13-OldToNew_Checkbox'));
    expect((byId('b1-b13-OldToNew_Checkbox') as HTMLInputElement).checked).toBe(true);
    fireEvent.click(byId('b1-Close_Filter_Icon'));
    expect(rows(container)).toHaveLength(19);
    fireEvent.click(byId('b1-Filter_Icon'));
    expect((byId('b1-b13-NewToOld_Checkbox') as HTMLInputElement).checked).toBe(true);
    expect((byId('b1-b13-OldToNew_Checkbox') as HTMLInputElement).checked).toBe(false);
  });

  it('a back navigation with the filters open closes them and stays on the page', async () => {
    const { router, at, container } = await open();
    fireEvent.click(byId('b1-Filter_Icon'));
    await act(() => router.navigate(-1));
    expect(at()).toBe(PATH);
    expect(rows(container)).toHaveLength(19);
    await act(() => router.navigate(-1));
    expect(at()).toBe(HOME);
  });

  it('search: Enter refreshes GetMessages with SelectedHistorySearch = the typed text', async () => {
    const bodies = recordBodies(GET_MESSAGES);
    await open();
    fireEvent.click(byId('b1-Search_Icon'));
    const input = byId('b1-Input_SearchMessages') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'camp' } });
    fireEvent.keyUp(input, { key: 'Enter' });
    await waitFor(() => {
      expect(bodies).toHaveLength(2);
    });
    expect(bodies[1]).toMatchObject({ SearchMessageString: 'camp', SelectedHistorySearch: 'camp', ShowSearch: true });
  });

  it('a row: GetMessageInstanceById2 with CurrentMessageInstanceId, then MessageDetail with the id', async () => {
    const bodies = recordBodies(GET_INSTANCE);
    const { container, at } = await open();
    fireEvent.click(rows(container)[2] as Element);
    await waitFor(() => {
      expect(at()).toBe(`${DETAIL}?MessageInstanceId=81017`);
    });
    expect(bodies[0]).toMatchObject({ CurrentMessageInstanceId: '81017' });
  });

  it('a message that no longer exists: the info message and a GetMessages refresh, no navigation', async () => {
    server.use(http.post(`/api/${GET_INSTANCE}`, () => HttpResponse.json({ data: { Exist: false } })));
    const { container, at } = await open();
    fireEvent.click(rows(container)[0] as Element);
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('This message is no longer available');
    });
    await waitFor(() => {
      expect(getMessagesCalls()).toBe(2);
    });
    expect(at()).toBe(PATH);
  });

  it('Mark All as Read: the wrapper with the filters, then GetMessages; no unread row is left', async () => {
    const bodies = recordBodies(MARK_ALL);
    const { container } = await open();
    fireEvent.click(screen.getByText('Mark All as Read'));
    // While the wrapper runs, IsShowLoading hides the list and shows the spinner.
    expect(rows(container)).toHaveLength(0);
    expect(byId('b1-LoadingMarkAllRead').querySelector('.list-updating-cont')).not.toBeNull();
    await waitFor(() => {
      expect(rows(container)).toHaveLength(19);
    });
    expect(container.querySelectorAll('.background-blue-lightest')).toHaveLength(0);
    expect(screen.queryByText('Mark All as Read')).toBeNull();
    expect(bodies[0]).toMatchObject({ IsPublic: true, IsPrivate: true, SearchTerm: '' });
    expect(Object.keys(bodies[0] as object).sort()).toEqual([
      'DeviceHardwareId',
      'IsPrivate',
      'IsPublic',
      'SearchTerm',
    ]);
    expect(getMessagesCalls()).toBe(2);
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(0);
  });
});
