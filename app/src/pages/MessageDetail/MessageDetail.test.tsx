import { act, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { collection } from '@/mocks/store';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER } from '@/mocks/fictional/directory';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { getClientVar, setClientVar, setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import MessageDetail from './MessageDetailPage';

/* The page with the flows of its block (useMessageDetail) and the MSW mocks of the route, in the app frame on a memory
   router. The mock messages are fictional. */
const PATH = '/UBTConnect/MessageDetail';
const HOME = '/UBTConnect/HomeFeed';
const GET_MESSAGE = 'ScreenBlock_MessageDetail/DataActionGetMessageInstance';
const OPENED = 'ActionWrapper_NotificationOpened';
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  '/UBTConnect/MessageList': <p>MessageList screen</p>,
  '/UBTConnect/Notifications': <p>Notifications screen</p>,
  '/UBTConnect/Login': <p>Login screen</p>,
  '/UBTConnect/MilestoneDetail': <p>MilestoneDetail screen</p>,
  '/UBTConnect/HostSurvey': <p>HostSurvey screen</p>,
  '/UBTConnect/AssembleDetail': <p>AssembleDetail screen</p>,
  '/UBTConnect/HouseholdDetails': <p>HouseholdDetails screen</p>,
  [PATH]: <MessageDetail />,
};

/** Opens the page after HomeFeed, so a back navigation has a previous screen. */
async function open(query: string) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${query}`));
  return view;
}

const cardTitle = () => document.getElementById('b1-b4-TitleContainer')?.textContent;
const layoutTitle = () => document.querySelector('.notification-detail-title-overflow')?.textContent;

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setFlags({});
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
  setFlags({});
  setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 0);
  setClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber', 0);
});

describe('MessageDetail page', () => {
  it('shows the captured message of the Directory with the bottom bar and the common UI', async () => {
    const { container } = await open('?MessageInstanceId=5965247');
    const block = container.querySelector('[data-block="MyNotifications.ScreenBlock_MessageDetail"]');
    expect(block?.id).toBe('$b1');
    await waitFor(() => {
      expect(cardTitle()).toBe('Test Noti 56');
    });
    expect(layoutTitle()).toBe('Directory');
    expect(document.querySelector('.notification-detail-content')?.textContent).toBe('Test Noti 56');
    expect(document.getElementById('b1-b4-Message_List_Item_Info')?.textContent).toBe('Wed 14/10/2026 10:20 am');
    expect(document.getElementById('b1-BottomBar')?.firstElementChild?.id).toBe('$b3');
    const commonUI = document.getElementById('b1-CommonUI_Elements');
    expect(commonUI?.firstElementChild?.id).toBe('$b4');
    expect(calledActions().filter((a) => a === GET_MESSAGE)).toHaveLength(1);
    expect(calledActions()).not.toContain(OPENED);
  });

  it('has no bottom bar when signed out', async () => {
    setSignedInUser(null);
    await open('?MessageInstanceId=5965247');
    await waitFor(() => {
      expect(cardTitle()).toBe('Test Noti 56');
    });
    expect(document.getElementById('b1-BottomBar')?.children).toHaveLength(0);
  });

  it('shows "Invalid message detail id." and keeps the spinner without ids', async () => {
    const { container } = await open('');
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe('Invalid message detail id.');
    });
    expect(container.querySelector('[data-block="Reusable.Spinner"]')?.id).toBe('b1-$b3');
    expect(calledActions()).not.toContain(GET_MESSAGE);
  });

  it('goes to MessageList with "no access" for an unknown message, signed in', async () => {
    const { at } = await open('?MessageInstanceId=424242');
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/MessageList');
    });
    expect(getFeedbackMessage()?.message).toBe("You don't have access to that message.");
  });

  it('goes to Notifications instead when GetHasNewNotifications is on', async () => {
    setFlags({ C2NewNotifications: true });
    const { at } = await open('?MessageInstanceId=424242');
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/Notifications');
    });
  });

  it('goes to Login for an unknown message, signed out', async () => {
    setSignedInUser(null);
    const { at } = await open('?MessageInstanceId=424242');
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/Login');
    });
    expect(getFeedbackMessage()).toBeNull();
  });

  it('opens an unread public message sent by a user: marks it opened and lowers the unread number', async () => {
    // A public message of the mock store, sent by a fictional member (no ProfileIconURL: sent as a user).
    collection('MessageDetail.messages', () => []).upsert({
      Id: '81090',
      Title: 'Choir practice moves to Thursday',
      DateTimeCreated: '2026-10-15T18:30:00',
      IsRead: false,
      IsClear: false,
      ProfileIconURL: '',
      CreatedByMemberId: '900114',
      MessageTemplateTypeId: 2,
      MessageTemplatePriorityId: 1,
      MessageInfoTypeId: 1,
    });
    setClientVar('Connect2_LegacyShared.UnreadNotificationsNumber', 5);
    await open('?MessageInstanceId=81090');
    await waitFor(() => {
      expect(cardTitle()).toBe('Choir practice moves to Thursday');
    });
    expect(layoutTitle()).toBe('Joanna Whitley');
    expect(calledActions()).toContain(OPENED);
    expect(getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber')).toBe(4);
    expect(getClientVar('Connect2_LegacyShared.UnreadPublicMessagesNumber')).toBe(4);
    expect(document.querySelector('.notification-detail-icon-badge')?.className).toBe('notification-detail-icon-badge');
  });

  it('Orbit: "View Event" asks Get_OrbitNotificationParameters and opens the milestone from the notification', async () => {
    const view = await open('?MessageInstanceId=5965301');
    const button = await waitFor(() => {
      const b = document.getElementById('b1-ViewOrbitEvent');
      expect(b?.textContent).toBe('View Event');
      return b as HTMLElement;
    });
    expect(document.querySelector('.notification-detail-content')?.textContent).toContain('Hello ');
    await act(async () => {
      button.click();
      await Promise.resolve();
    });
    await waitFor(() => {
      expect(view.router.state.location.pathname).toBe('/UBTConnect/MilestoneDetail');
    });
    expect(Object.fromEntries(new URLSearchParams(view.router.state.location.search))).toEqual({
      In_EventName: 'Harvest Supper',
      In_FromNotification: 'True',
      In_MilestoneId: 'M-7714',
      In_EventId: '7301',
    });
    expect(calledActions()).toContain('ActionGet_OrbitNotificationParameters');
  });

  it('Orbit host survey: "Go to Host Survey" opens HostSurvey with the event and its dates', async () => {
    const view = await open('?MessageInstanceId=5965302');
    const button = await waitFor(() => {
      const b = document.getElementById('b1-ViewOrbitEvent');
      expect(b?.textContent).toBe('Go to Host Survey');
      return b as HTMLElement;
    });
    await act(async () => {
      button.click();
      await Promise.resolve();
    });
    await waitFor(() => {
      expect(view.router.state.location.pathname).toBe('/UBTConnect/HostSurvey');
    });
    const params = new URLSearchParams(view.router.state.location.search);
    expect(params.get('In_EventId')).toBe('7301');
    expect(params.get('In_MemberId')).toBe(MOCK_USER_ID);
  });

  it('Assemble: "View Meeting" opens AssembleDetail with the series, the instance and the type', async () => {
    const view = await open('?MessageInstanceId=5965303');
    const button = await waitFor(() => {
      const b = document.getElementById('b1-ViewAssembleEvent');
      expect(b?.textContent).toBe('View Meeting');
      return b as HTMLElement;
    });
    // BuildAssembleNotificationContent fills the FirstName placeholder (PlaceholderLib, decision PD8).
    expect(document.body.textContent).toContain(`Dear ${MOCK_USER.firstName}, the Bible Reading meeting`);
    expect(document.body.textContent).not.toContain('##');
    await act(async () => {
      button.click();
      await Promise.resolve();
    });
    expect(view.router.state.location.pathname).toBe('/UBTConnect/AssembleDetail');
    expect(Object.fromEntries(new URLSearchParams(view.router.state.location.search))).toEqual({
      EventId: '4412',
      SeriesId: '4410',
      AssembleEventTypeTile: 'Bible Reading',
    });
  });

  it('Sharing: the shared household card of ShareObjectDetail_ExtendedShare opens HouseholdDetails', async () => {
    const bodies = recordBodies('Connect2_LegacyShared/ShareObjectDetail_ExtendedShare/DataActionGetShare');
    const view = await open('?MessageInstanceId=5965304');
    await waitFor(() => {
      expect(document.getElementById('b1-b5-$b5')?.textContent).toContain('Lindqvist Household');
    });
    expect(document.getElementById('b1-$b5')?.dataset.block).toBe('Share_UI.ShareObjectDetail_ExtendedShare');
    expect(calledActions()).toContain('ShareObjectDetail_ExtendedShare/DataActionGetShare');
    // GetShare sends the four block variables (screenData.variables), without the _<input>InDataFetchStatus integers.
    await waitFor(() => {
      expect(bodies[0]).toBeDefined();
    });
    const body = bodies[0] as {
      ShareableObject_Generic: Record<string, unknown>;
      ShareableUpdateItem: Record<string, unknown>;
    };
    expect(Object.keys(body)).toEqual([
      'ShareId',
      'HasAccessToDeceasedHousehold',
      'ShareableObject_Generic',
      'ShareableUpdateItem',
    ]);
    expect(Object.keys(body.ShareableObject_Generic)).toHaveLength(6);
    expect(Object.keys(body.ShareableUpdateItem)).toHaveLength(13);
    expect(body.ShareableObject_Generic.Title).toBe('Loading Shared Object');
    expect(body.ShareableUpdateItem).toMatchObject({ UpdateItemId: '0', Date: '1900-01-01', HouseholdId: '0' });
    const card = [...document.querySelectorAll<HTMLElement>('#b1-b5-\\$b5 [style*="cursor"]')].find((e) =>
      e.textContent.includes('Lindqvist Household'),
    );
    await act(async () => {
      card?.click();
      await Promise.resolve();
    });
    expect(card).not.toBeNull();
    await waitFor(() => {
      expect(view.router.state.location.pathname).toBe('/UBTConnect/HouseholdDetails');
    });
    expect(view.router.state.location.search).toBe('?HouseholdId=61207');
  });

  it('adaptive card: the viewer gets the card payload (its container stays empty until the renderer is installed)', async () => {
    await open('?MessageInstanceId=5965305');
    await waitFor(() => {
      expect(document.getElementById('b1-b4-b2-AdaptiveCardContainer')).not.toBeNull();
    });
    expect(document.querySelector('.notification-detail-content')).toBeNull();
  });
});
