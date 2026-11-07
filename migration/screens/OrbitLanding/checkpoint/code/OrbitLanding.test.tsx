import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { appManager_SetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import { eventsByMemberIdAnswer, householdMembersAnswer } from './mocks';
import OrbitLanding from './OrbitLandingPage';

/* The page with its flows (useOrbitLanding) and the MSW mocks of the route, in the app frame on a memory router: the
   fictional members of the signed-in household, the householder first and the signed-in user second, and the
   upcoming conference weekend of the members who attend it. */
const PATH = '/UBTConnect/OrbitLanding';
const HOME = '/UBTConnect/HomeFeed';
const GET_MEMBERS = 'ScreenBlock_OrbitLanding/DataActionGet_HouseholdMembers';
const GET_EVENTS = 'ScreenBlock_OrbitLanding/DataActionGet_EventsByMemberId';
const MEMBERS = householdMembersAnswer().Response.List;
const FIRST = MEMBERS[0]?.MemberId ?? '';
const FIRST_EVENTS = eventsByMemberIdAnswer(FIRST).Response.List;

const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  '/UBTConnect/EventDetail': <p>EventDetail screen</p>,
  '/UBTConnect/PassportScan': <p>PassportScan screen</p>,
  '/UBTConnect/MyEntertaining': <p>MyEntertaining screen</p>,
  '/UBTConnect/Search': <p>Search screen</p>,
  [PATH]: <OrbitLanding />,
};

/** Opens the page after HomeFeed, so a back navigation has a previous screen. */
async function open() {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(PATH));
  return view;
}

const memberItems = () => [...document.querySelectorAll('.orbit-household-member-list-item')];
/** The first names in the member bar, the selected one in brackets. */
const memberBar = () =>
  memberItems().map((item) => {
    const text = item.querySelector('span');
    return text?.getAttribute('style') ? `[${text.textContent}]` : (text?.textContent ?? '');
  });
const eventCards = () => document.querySelectorAll('[data-block="Orbit_Blocks.Card_Event"]').length;
const noInformation = () => document.querySelectorAll('[data-block="Orbit_Generic_Blocks.NoInformation_Orbit"]');
const skeleton = () => document.querySelectorAll('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]').length;
const calls = (action: string) => calledActions().filter((a) => a === action).length;
const click = (element: Element | null | undefined) => {
  if (!element) throw new Error('No element to click');
  fireEvent.click(element);
};
const wait = (ms: number) => act(() => new Promise((resolve) => setTimeout(resolve, ms)));
/** The landing after its two calls. */
async function loaded() {
  const view = await open();
  await waitFor(() => {
    expect(eventCards()).toBe(FIRST_EVENTS.length);
  });
  return view;
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setFlags({});
  // The cached user information of the signed-in user (the mock adds its MemberId).
  appManager_SetCachedUserInfo({ CountryCode: 'AR' });
});
afterEach(() => {
  setFlags({});
});

describe('OrbitLanding page', () => {
  it('loads the members, selects the first one and shows its upcoming events', async () => {
    const membersBodies = recordBodies(`Connect2_OrbitMobile_MUI/${GET_MEMBERS}`);
    const eventsBodies = recordBodies(`Connect2_OrbitMobile_MUI/${GET_EVENTS}`);
    await loaded();
    expect(FIRST_EVENTS.length).toBeGreaterThan(0);
    expect(memberBar()).toEqual(MEMBERS.map((m, i) => (i === 0 ? `[${m.FirstName}]` : m.FirstName)));
    expect(skeleton()).toBe(0);
    expect(calledActions().filter((a) => a === GET_MEMBERS || a === GET_EVENTS)).toEqual([GET_MEMBERS, GET_EVENTS]);
    const variables = {
      IsFetchingData: true,
      Popup_SortByOpened: false,
      Popup_FiltersOpened: false,
      SortEventsASC: true,
      CurrentMemberId: '0',
    };
    expect(membersBodies).toEqual([{ ...variables, SelectedMemberId: '0', EventFilter: 0 }]);
    expect(eventsBodies).toEqual([{ ...variables, SelectedMemberId: FIRST, EventFilter: 1 }]);
    // The selected member is not the signed-in user: no My calendar icon.
    expect(document.querySelector('.menu-icon-my-calendar')).toBeNull();
  });

  it('a member without events shows the no-information message; the signed-in member shows My calendar', async () => {
    const { at } = await loaded();
    const withoutEvents = MEMBERS.findIndex((m) => eventsByMemberIdAnswer(m.MemberId).Response.List.length === 0);
    click(memberItems()[withoutEvents]);
    await waitFor(() => {
      expect(noInformation()).toHaveLength(1);
    });
    expect(noInformation()[0]?.textContent).toContain('You currently have not been assigned to an event.');
    click(memberItems()[MEMBERS.findIndex((m) => m.MemberId === MOCK_USER_ID)]);
    await waitFor(() => {
      expect(document.querySelector('.menu-icon-my-calendar')).not.toBeNull();
    });
    click(document.querySelector('.menu-icon-my-calendar'));
    expect(await screen.findByText('MyEntertaining screen')).toBeInTheDocument();
    expect(at()).toBe('/UBTConnect/MyEntertaining?MyCalendarEventSourceId=event-orbit');
  });

  it('an event card opens EventDetail with the selected member', async () => {
    const { at } = await loaded();
    click(document.querySelector('.orbit-card-cont'));
    expect(await screen.findByText('EventDetail screen')).toBeInTheDocument();
    const event = FIRST_EVENTS[0]?.OrbitSummaryItem;
    expect(at()).toBe(
      `/UBTConnect/EventDetail?In_EventId=${event?.EventId ?? ''}&In_MemberId=${FIRST}&In_FromNotification=False` +
        `&In_EventName=${encodeURIComponent(event?.Title ?? '')}`,
    );
  });

  it('View Passport details opens PassportScan for the selected member', async () => {
    const { at } = await loaded();
    click(document.querySelector('.orbit-landing-passport-cont'));
    expect(await screen.findByText('PassportScan screen')).toBeInTheDocument();
    expect(at()).toBe(`/UBTConnect/PassportScan?LoginMemberId=${MOCK_USER_ID}&TargetId=${FIRST}`);
  });

  it('without Orbit access, an event card goes to HomeFeed with the no-access message', async () => {
    setFlags({ mobileOrbitAccess: false });
    const { at } = await loaded();
    click(document.querySelector('.orbit-card-cont'));
    expect(await screen.findByText('HomeFeed screen')).toBeInTheDocument();
    expect(at()).toBe(HOME);
    await waitFor(
      () => {
        expect(getFeedbackMessage()?.message).toBe(
          "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.",
        );
      },
      { timeout: 2000 },
    );
  });

  it('a failed call shows the Service Interruption message and keeps the skeleton', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await open();
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toContain('Service Interruption');
    });
    expect(skeleton()).toBe(1);
    expect(calls(GET_EVENTS)).toBe(0);
  });

  it('a restored view shows its saved member and events at once and does not call again', async () => {
    const { router } = await loaded();
    const withoutEvents = MEMBERS.findIndex((m) => eventsByMemberIdAnswer(m.MemberId).Response.List.length === 0);
    click(memberItems()[withoutEvents]);
    await waitFor(() => {
      expect(noInformation()).toHaveLength(1);
    });
    await act(() => router.navigate('/UBTConnect/Search'));
    expect(await screen.findByText('Search screen')).toBeInTheDocument();
    await wait(400);
    await act(() => router.navigate(-1));
    expect(noInformation()).toHaveLength(1);
    expect(memberBar()[withoutEvents]).toBe(`[${MEMBERS[withoutEvents]?.FirstName ?? ''}]`);
    await wait(50);
    expect(calls(GET_MEMBERS)).toBe(1);
    expect(calls(GET_EVENTS)).toBe(2);
  });
});
