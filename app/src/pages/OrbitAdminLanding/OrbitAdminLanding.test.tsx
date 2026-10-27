import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { orbitAdminEvents } from '@/mocks/fictional/orbitAdmin';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { log } from '@/platform/log/log';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { appManager_SetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import OrbitAdminLanding from './OrbitAdminLandingPage';
import { ApplicationEvents_Orbit_ClickEvent } from './staticEntities';

/* The page with its flows (useAdminLanding, useNavigateToEventDetail) in the app frame on a memory router, with the
   MSW mocks of the route: the three fictional events of the signed-in admin (src/mocks/fictional/orbitAdmin.ts). */
const PATH = '/UBTConnect/OrbitAdminLanding';
const HOME = '/UBTConnect/HomeFeed';
const FETCH = 'ScreenBlock_AdminLanding/DataActionGet_AdminEventsList';
const SCAN_FF = 'ActionGetMilestoneScanFF';
const NO_EVENT =
  'There are no events currently where QR scanning is required. If you have any questions, please contact your regional Orbit helpdesk.';

const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  [PATH]: <OrbitAdminLanding />,
  '/UBTConnect/OrbitAdminEventDetail': <p>OrbitAdminEventDetail screen</p>,
};

/** Opens the page after HomeFeed, so a back navigation has a previous screen. */
async function open() {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(PATH));
  return view;
}

const cards = () => [...document.querySelectorAll('[data-block="Orbit_Blocks.Card_Event"]')];
const skeleton = () => document.querySelector('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]');
const headerName = () => document.querySelector('.orbit-admin-header-text')?.textContent;
const count = (action: string) => calledActions().filter((a) => a === action).length;
const loaded = async () => {
  await waitFor(() => {
    expect(cards()).toHaveLength(3);
  });
};
const clickCard = (index: number) => {
  const card = cards()[index]?.querySelector('.orbit-card-cont');
  if (!card) throw new Error(`no card ${String(index)}`);
  fireEvent.click(card);
};

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setSignedInUser(MOCK_USER_ID);
  appManager_SetCachedUserInfo({ FirstName: 'Matías', MemberId: '20517', CountryCode: 'AR' });
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
  vi.restoreAllMocks();
});

describe('OrbitAdminLanding page', () => {
  it('OnReady: the skeleton with the first name, then the cards of the admin events; one call', async () => {
    const bodies = recordBodies(`Connect2_OrbitMobile_MUI/${FETCH}`);
    await open();
    expect(document.getElementById('$b1')?.getAttribute('data-block')).toBe(
      'Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding',
    );
    expect(skeleton()?.id).toBe('b1-$b5');
    expect(headerName()).toBe('Matías');
    await loaded();
    expect(skeleton()).toBeNull();
    const titles = orbitAdminEvents().map((e) => e.Title);
    expect(cards().map((card) => card.querySelector('.orbit-card-title-cont')?.textContent)).toEqual(titles);
    expect(count(FETCH)).toBe(1);
    expect(calledActions()).not.toContain(SCAN_FF);
    expect(bodies).toEqual([{ IsFetchingData: true, UserFirstName: 'Matías', UserMemberId: '20517' }]);
    expect(document.getElementById('b1-BottomBar')?.firstElementChild?.id).toBe('$b2');
    expect(document.getElementById('$b3')).not.toBeNull();
  });

  it('a card opens OrbitAdminEventDetail with its inputs and records the audit event; back keeps the list', async () => {
    const info = vi.spyOn(log, 'info');
    const { at, router } = await open();
    await loaded();
    const [first] = orbitAdminEvents();
    if (!first) throw new Error('no event');
    clickCard(0);
    await waitFor(() => {
      expect(at().startsWith('/UBTConnect/OrbitAdminEventDetail?')).toBe(true);
    });
    const query = new URLSearchParams(at().split('?')[1]);
    expect([...query.keys()]).toEqual([
      'In_EventId',
      'In_EventStartDate',
      'In_EventLocation',
      'In_EventName',
      'In_EventEndDate',
      'In_EventTypeFriendly',
    ]);
    expect(Object.fromEntries(query)).toEqual({
      In_EventId: first.EventId,
      In_EventStartDate: new Date(first.StartEventDate).toISOString(),
      In_EventLocation: first.EventLocation,
      In_EventName: first.Title,
      In_EventEndDate: new Date(first.EndEventDate).toISOString(),
      In_EventTypeFriendly: first.TypeFriendly,
    });
    // TST makes no server call on a card click (Legacy_OrbitAdminFlow Q1).
    expect(count(SCAN_FF)).toBe(0);
    const auditEvent = () =>
      info.mock.calls.find(([message]) => message === 'ApplicationEvent')?.[1] as
        { EventId: string; Payload: string } | undefined;
    await waitFor(() => {
      expect(auditEvent()).toBeDefined();
    });
    expect(auditEvent()?.EventId).toBe(ApplicationEvents_Orbit_ClickEvent);
    expect(JSON.parse(auditEvent()?.Payload ?? '{}')).toEqual({
      EventId: first.EventId,
      EventTitle: first.Title,
      EventLocation: first.EventLocation,
      EventStartDate: first.StartEventDate,
      EventEndDate: first.EndEventDate,
    });
    // A back navigation restores the view from the view cache: OnReady does nothing.
    await act(() => router.navigate(-1));
    await waitFor(() => {
      expect(at()).toBe(PATH);
    });
    expect(cards()).toHaveLength(3);
    expect(headerName()).toBe('Matías');
    expect(skeleton()).toBeNull();
    expect(count(FETCH)).toBe(1);
  });

  it('an admin without events sees NoInformation_Orbit', async () => {
    sessionStorage.setItem('mock:mock', 'noadminevents');
    await open();
    await waitFor(() => {
      expect(screen.getByText(NO_EVENT)).toBeInTheDocument();
    });
    expect(document.querySelector('[data-block="Orbit_Generic_Blocks.NoInformation_Orbit"]')?.id).toBe('b1-$b4');
    expect(cards()).toHaveLength(0);
    expect(skeleton()).toBeNull();
  });

  it('a failed Get_AdminEventsList goes to the flow handler; the skeleton stays', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await open();
    await waitFor(() => {
      expect(getFeedbackMessage()).not.toBeNull();
    });
    expect(skeleton()).not.toBeNull();
    expect(cards()).toHaveLength(0);
    expect(count(FETCH)).toBe(1);
  });
});
