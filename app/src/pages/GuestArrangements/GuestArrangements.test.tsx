import { act, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { showFeedbackMessage } from '@/platform/feedback';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import GuestArrangements from './GuestArrangementsPage';
import { readGuestArrangementsInputs, toGuestArrangementsBlockInputs } from './inputs';

vi.mock('@/platform/feedback', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/platform/feedback')>();
  return { ...actual, showFeedbackMessage: vi.fn(actual.showFeedbackMessage) };
});

/* The page with the flows of its block (useGuestArrangements) and the MSW mocks of the route, in the app frame on a
   memory router. The guests are the fictional Herrera family at event 7301 (src/mocks/fictional/orbit.ts). */
const PATH = '/UBTConnect/GuestArrangements';
const HOME = '/UBTConnect/HomeFeed';
const OTHER = '/UBTConnect/Search';
const ACTION = 'ScreenBlock_GuestArrangements/DataActionGetGuestArrangements';
const QUERY =
  '?In_MilestoneId=55&In_EventId=7301&In_MemberId=880102&In_HostId=880001' +
  '&In_OrbitMilestoneTypeId=accommodation-host&In_MilestoneTitle=Hosting%20the%20Herreras' +
  '&In_EventName=Bahia%20Blanca%20Conference';
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  [OTHER]: <p>Search screen</p>,
  '/UBTConnect/HouseholdDetails': <p>HouseholdDetails screen</p>,
  '/UBTConnect/ContactByEmailOrbitHelpdesk': <p>Helpdesk screen</p>,
  [PATH]: <GuestArrangements />,
};

/** Opens the page after HomeFeed, so a back navigation has a previous screen. */
async function open(query = QUERY) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${query}`));
  return view;
}

const block = () => document.querySelector('[data-block="Orbit_ScreenBlocks.ScreenBlock_GuestArrangements"]');
const sectionTitles = () => [...document.querySelectorAll('.section-expandable-title')].map((t) => t.textContent);
const skeleton = () => document.querySelector('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]');
const guestCalls = () => calledActions().filter((a) => a === ACTION);
/** Lets the screen transition and the photo calls end. */
const settle = (ms = 50) => act(() => new Promise((resolve) => setTimeout(resolve, ms)));

beforeEach(() => {
  vi.mocked(showFeedbackMessage).mockClear();
  freshPage();
  resetNavigation();
  setFlags({});
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setSignedInUser(null);
});

describe('GuestArrangements page', () => {
  it('shows the guest, the four sections and the helpdesk footer, after one call with the block variables', async () => {
    const bodies = recordBodies(`Connect2_OrbitMobile_MUI/${ACTION}`);
    await open();
    expect(block()?.id).toBe('$b1');
    expect(document.getElementById('$b2')?.dataset.block).toBe('App_Common.CommonUI_InsideLayout');
    await waitFor(() => {
      expect(sectionTitles()).toEqual(['Special Need/s', 'Arrival Details', 'Meal Details', 'Departure Details']);
    });
    expect(block()?.textContent).toContain('Mrs Laura Herrera');
    expect(block()?.textContent).toContain('Bahia Blanca Conference');
    expect(block()?.textContent).toContain('Hosting the Herreras');
    expect(document.querySelectorAll('[data-block="Orbit_Blocks.Card_MemberInformation"]')).toHaveLength(3);
    expect(document.querySelector('[data-block="Orbit_Blocks.ContactHelpdesk_Footer"]')).not.toBeNull();
    expect(skeleton()).toBeNull();
    expect(guestCalls()).toEqual([ACTION]);
    expect(bodies).toEqual([
      expect.objectContaining({
        IsFetchingData: true,
        In_MemberId: '880102',
        In_EventId: '7301',
        In_HostId: '880001',
        In_MilestoneId: '55',
        In_PreloadEventName: 'Bahia Blanca Conference',
        In_PreloadMilestoneName: 'Hosting the Herreras',
        In_OrbitMilestoneTypeId: 'accommodation-host',
      }),
    ]);
  });

  it('shows the no-information message for a member without arrangements', async () => {
    await open(QUERY.replace('In_MemberId=880102', 'In_MemberId=123'));
    await waitFor(() => {
      expect(document.querySelector('[data-block="Orbit_Generic_Blocks.NoInformation_Orbit"]')).not.toBeNull();
    });
    expect(block()?.textContent).toContain('No guest arrangement data has been found.');
    expect(document.querySelector('[data-block="Orbit_Blocks.ContactHelpdesk_Footer"]')).toBeNull();
  });

  it('keeps the skeleton of the milestone type when the call fails', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await open();
    await settle();
    expect(skeleton()?.id).toBe('b1-$b14');
    expect(sectionTitles()).toEqual([]);
  });

  it('a back navigation restores the view without a new call', async () => {
    const { router } = await open();
    await waitFor(() => {
      expect(sectionTitles()).toHaveLength(4);
    });
    await act(() => router.navigate(OTHER));
    await act(() => router.navigate(-1));
    await waitFor(() => {
      expect(block()?.textContent).toContain('Mrs Laura Herrera');
    });
    expect(sectionTitles()).toHaveLength(4);
    expect(guestCalls()).toEqual([ACTION]);
  });

  it('opens the household of a member with special needs', async () => {
    const { router, at } = await open();
    await waitFor(() => {
      expect(document.querySelector('.member-info-img-cont')).not.toBeNull();
    });
    await settle();
    await act(async () => {
      (document.querySelector('.member-info-img-cont') as HTMLElement).click();
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    await waitFor(() => {
      expect(router.state.location.pathname).toBe('/UBTConnect/HouseholdDetails');
    });
    expect(at()).toBe('/UBTConnect/HouseholdDetails?HouseholdId=880101');
  });

  it('with Orbit access, the helpdesk footer opens ContactByEmailOrbitHelpdesk with the subject', async () => {
    setFlags({ mobileOrbitAccess: true });
    const { router } = await open();
    await waitFor(() => {
      expect(document.querySelector('.contact-helpdesk-footer')).not.toBeNull();
    });
    act(() => {
      (document.querySelector('.contact-helpdesk-footer') as HTMLElement).click();
    });
    await waitFor(() => {
      expect(router.state.location.pathname).toBe('/UBTConnect/ContactByEmailOrbitHelpdesk');
    });
    const params = new URLSearchParams(router.state.location.search);
    expect(params.get('In_EventId')).toBe('7301');
    expect(params.get('In_Subject')).toMatch(/^Bahia Blanca Conference - Hosting the Herreras - .+ - /);
    expect(params.get('In_EventName')).toBe('Hosting the Herreras');
    expect(params.get('In_MilestoneId')).toBe('');
    await settle(600);
    expect(showFeedbackMessage).not.toHaveBeenCalled();
  });

  it('without Orbit access, the helpdesk footer goes to HomeFeed and shows the message 500 ms later', async () => {
    setFlags({ mobileOrbitAccess: false });
    const { router } = await open();
    await waitFor(() => {
      expect(document.querySelector('.contact-helpdesk-footer')).not.toBeNull();
    });
    act(() => {
      (document.querySelector('.contact-helpdesk-footer') as HTMLElement).click();
    });
    await waitFor(() => {
      expect(router.state.location.pathname).toBe(HOME);
    });
    expect(showFeedbackMessage).not.toHaveBeenCalled();
    await settle(600);
    expect(showFeedbackMessage).toHaveBeenCalledTimes(1);
    expect(showFeedbackMessage).toHaveBeenCalledWith(
      "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.",
      3,
    );
  });
});

describe('GuestArrangements inputs', () => {
  it('reads the inputs by their names: "" for an absent Text, "0" for an absent Long Integer', () => {
    expect(readGuestArrangementsInputs(new URLSearchParams(''))).toEqual({
      In_MilestoneId: '',
      In_EventId: '0',
      In_MemberId: '0',
      In_HostId: '0',
      In_OrbitMilestoneTypeId: '',
      In_MilestoneTitle: '',
      In_EventName: '',
    });
    expect(readGuestArrangementsInputs(new URLSearchParams('In_EventId=&In_MemberId=7')).In_EventId).toBe('');
  });

  it('gives the block the milestone title and the event name as its preload names', () => {
    const inputs = readGuestArrangementsInputs(new URLSearchParams(QUERY));
    expect(toGuestArrangementsBlockInputs(inputs)).toEqual({
      In_MemberId: '880102',
      In_EventId: '7301',
      In_HostId: '880001',
      In_MilestoneId: '55',
      In_PreloadEventName: 'Bahia Blanca Conference',
      In_PreloadMilestoneName: 'Hosting the Herreras',
      In_OrbitMilestoneTypeId: 'accommodation-host',
    });
  });
});
