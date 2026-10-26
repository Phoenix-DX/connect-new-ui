import { act, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import TransportDetail from './TransportDetailPage';

/* The page with the flows of its block (useTransportDetail) and the MSW mocks of the route, in the app frame on a
   memory router. The transports are the fictional itinerary of event 7301 (src/mocks/fictional/orbit.ts). */
const PATH = '/UBTConnect/TransportDetail';
const HOME = '/UBTConnect/HomeFeed';
const OTHER = '/UBTConnect/Search';
const HELPDESK = '/UBTConnect/ContactByEmailOrbitHelpdesk';
const ACTION = 'ScreenBlock_TransportDetail/DataActionGet_TransportDetail';
const query = (milestoneId: string, typeId: string, name: string, headerClass: string) =>
  `?${new URLSearchParams({
    In_MilestoneId: milestoneId,
    In_OrbitMilestoneTypeId: typeId,
    In_MilestoneName: name,
    In_HeaderClass: headerClass,
    In_TargetMemberId: MOCK_USER_ID,
  }).toString()}`;
const FLIGHT = query('7301-T1', 'transport-flight', 'Flight to Bahia Blanca', 'orbit-transport-detail-flight');
const VEHICLE = query('7301-T2', 'transport-vehicle', 'Airport pick-up', 'orbit-transport-detail-vehicle');
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  [OTHER]: <p>Search screen</p>,
  [HELPDESK]: <p>Helpdesk screen</p>,
  [PATH]: <TransportDetail />,
};

/** Opens the page after HomeFeed, so a back navigation has a previous screen. */
async function open(q = FLIGHT) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${q}`));
  return view;
}

const title = () => document.querySelector('.header-title')?.textContent;
const skeleton = () => document.querySelector('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]');
const transport = () => document.querySelector('[data-block="Orbit_Blocks.TransportDetail"]');
const clickFooter = () =>
  act(async () => {
    (document.querySelector('.contact-helpdesk-footer') as HTMLElement).click();
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
/** Lets the screen transition end. */
const settle = (ms = 50) => act(() => new Promise((resolve) => setTimeout(resolve, ms)));

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setFlags({});
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
});

describe('TransportDetail page', () => {
  it('shows the flight with its title, then CommonUI_InsideLayout', async () => {
    const bodies = recordBodies(`Connect2_OrbitMobile_MUI/${ACTION}`);
    const { container } = await open();
    await waitFor(() => {
      expect(transport()).not.toBeNull();
    });
    expect(container.querySelector('[data-block="Orbit_ScreenBlocks.ScreenBlock_TransportDetail"]')?.id).toBe('$b1');
    expect(document.getElementById('$b2')).not.toBeNull();
    expect(title()).toBe('Flight to Bahia Blanca');
    expect(container.querySelector('header')?.className).toContain('orbit-transport-detail-flight');
    expect(container.textContent).toContain('Pampa Air');
    expect(container.textContent).toContain('Mar del Plata (MDQ)');
    expect(container.textContent).toContain('AEP → MDQ: 14C');
    expect(skeleton()).toBeNull();
    expect(calledActions()).toEqual([ACTION]);
    expect(bodies).toEqual([
      {
        Title: 'Flight to Bahia Blanca',
        IsFetchingData: true,
        In_MilestoneId: '7301-T1',
        In_OrbitMilestoneTypeId: 'transport-flight',
        In_PreloadMilestoneName: 'Flight to Bahia Blanca',
        In_HeaderClass: 'orbit-transport-detail-flight',
      },
    ]);
  });

  it('keeps the skeleton and the preload title while the call runs', async () => {
    sessionStorage.setItem('mock:mock', 'loading');
    await open(VEHICLE);
    await settle();
    expect(skeleton()).not.toBeNull();
    expect(transport()).toBeNull();
    expect(title()).toBe('Airport pick-up');
  });

  it('opens the Orbit helpdesk form with the subject of the flight', async () => {
    const { at } = await open();
    await waitFor(() => {
      expect(transport()).not.toBeNull();
    });
    await settle();
    await clickFooter();
    await waitFor(() => {
      expect(at().startsWith(HELPDESK)).toBe(true);
    });
    const params = new URL(at(), 'http://localhost').searchParams;
    expect(params.get('In_EventName')).toBe('Flight to Bahia Blanca');
    expect(params.get('In_Subject')).toMatch(/^Flight to Bahia Blanca - QZK7PL - \w{3} \d+ \w{3} \d{4} 6:40 PM$/);
    expect(params.get('In_TargetMemberId')).toBe(MOCK_USER_ID);
    expect(params.get('In_EventId')).toBe('0');
    expect(params.get('In_MilestoneId')).toBe('7301-T1');
  });

  it('without access to Orbit goes to HomeFeed and shows the no-access error', async () => {
    setFlags({ mobileOrbitAccess: false });
    const { at } = await open(VEHICLE);
    await waitFor(() => {
      expect(transport()).not.toBeNull();
    });
    await settle();
    await clickFooter();
    await settle(600);
    expect(at()).toBe(HOME);
    expect(getFeedbackMessage()).toMatchObject({
      message: "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.",
      type: 3,
    });
  });

  it('a back navigation shows the transport again and fetches it again', async () => {
    const { router } = await open();
    await waitFor(() => {
      expect(transport()).not.toBeNull();
    });
    await act(() => router.navigate(OTHER));
    await settle();
    await act(() => router.navigate(-1));
    await waitFor(() => {
      expect(calledActions()).toEqual([ACTION, ACTION]);
    });
    await waitFor(() => {
      expect(transport()).not.toBeNull();
    });
    expect(title()).toBe('Flight to Bahia Blanca');
  });
});
