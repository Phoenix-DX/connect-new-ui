import { act, fireEvent, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import HelpersDetail from './HelpersDetailPage';

/* The page with its block flows (useHelperDetails) in the app frame on a memory router, with the MSW mocks: event 7301
   of the shared Orbit world, hosted by the household 42438. The real scenario has no helper yet; the `helpers`
   scenario answers two roles (fictional helpers). */
const PATH = '/UBTConnect/HelpersDetail';
const HOME = '/UBTConnect/HomeFeed';
const GET_HELPERS = 'ScreenBlock_HelperDetails/DataActionGetHelperDetails';
const QUERY =
  '?In_EventId=7301&In_HostId=42438&In_OrbitMilestoneTypeId=helper-host&In_EventName=Weekend%20Conference&In_MilestoneName=Helper';
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  [PATH]: <HelpersDetail />,
  '/UBTConnect/HouseholdDetails': <p>HouseholdDetails screen</p>,
  '/UBTConnect/ContactByEmailOrbitHelpdesk': <p>ContactByEmailOrbitHelpdesk screen</p>,
};

const helperCalls = () => calledActions().filter((action) => action === GET_HELPERS);
const roles = () =>
  [...document.querySelectorAll('[data-block="Orbit_Generic_Blocks.Accordion_Orbit"] .section-expandable-title')].map(
    (title) => title.textContent,
  );
const footer = () => document.querySelector('.contact-helpdesk-footer');
const memberCards = () => document.querySelectorAll('[data-block="Orbit_Blocks.Card_MemberInformation"]');

/** Opens the page after HomeFeed. */
async function open(query = QUERY) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${query}`));
  return view;
}
/** Opens the page in the `helpers` scenario and waits for the member cards. */
async function openWithHelpers() {
  sessionStorage.setItem('mock:mock', 'helpers');
  const view = await open();
  await waitFor(() => {
    expect(memberCards().length).toBeGreaterThan(0);
  });
  return view;
}

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
  sessionStorage.clear();
});

describe('HelpersDetail page', () => {
  it('shows the block with the header of the preloaded names, "There is no Helper available." and CommonUI', async () => {
    const { container } = await open();
    await waitFor(() => {
      expect(document.getElementById('b1-$b7')?.textContent).toBe('There is no Helper available.');
    });
    expect(container.querySelector('[data-block="Orbit_ScreenBlocks.ScreenBlock_HelperDetails"]')?.id).toBe('$b1');
    expect(document.getElementById('b1-$b3')?.textContent).toContain('Weekend Conference');
    expect(container.querySelector('[data-block="App_Common.CommonUI_InsideLayout"]')?.id).toBe('$b2');
    expect(footer()).toBeNull();
    expect(helperCalls()).toHaveLength(1);
  });

  it('sends the block variables in the recorded order', async () => {
    const bodies = recordBodies(`Connect2_OrbitMobile_MUI/${GET_HELPERS}`);
    await open();
    await waitFor(() => {
      expect(bodies[0]).toBeDefined();
    });
    expect(JSON.stringify(bodies[0])).toBe(
      '{"IsFetchingData":true,"IsFetchingPhoneData":false,"In_EventId":"7301",' +
        '"In_PreloadEventName":"Weekend Conference","In_PreloadMilestoneName":"Helper",' +
        '"In_OrbitMilestoneTypeId":"helper-host","In_HostId":"42438"}',
    );
  });

  it('sends In_EventId and In_HostId 0 and empty texts when the query string has no input', async () => {
    const bodies = recordBodies(`Connect2_OrbitMobile_MUI/${GET_HELPERS}`);
    await open('');
    await waitFor(() => {
      expect(bodies[0]).toBeDefined();
    });
    expect(bodies[0]).toMatchObject({
      In_EventId: '0',
      In_HostId: '0',
      In_PreloadEventName: '',
      In_PreloadMilestoneName: '',
      In_OrbitMilestoneTypeId: '',
    });
  });

  it('shows the skeleton while GetHelperDetails runs', () => {
    sessionStorage.setItem('mock:mock', 'loading');
    renderRoutes(routes, `${PATH}${QUERY}`);
    expect(document.getElementById('b1-$b8')).not.toBeNull();
    expect(footer()).toBeNull();
  });

  it('shows the helpers by role and the helpdesk footer', async () => {
    await openWithHelpers();
    expect(roles()).toEqual(['Catering/s', 'Usher/s']);
    expect(memberCards()).toHaveLength(4);
    expect(footer()).not.toBeNull();
  });

  it('opens the household of a member card', async () => {
    const view = await openWithHelpers();
    fireEvent.click(document.querySelector('.member-info-text-cont') as Element);
    await waitFor(() => {
      expect(view.at()).toMatch(/^\/UBTConnect\/HouseholdDetails\?HouseholdId=\d+$/);
    });
    expect(calledActions()).toContain('ActionGetDirectoryAccess');
  });

  it('goes to ContactByEmailOrbitHelpdesk with the subject of the event', async () => {
    const view = await openWithHelpers();
    fireEvent.click(footer() as Element);
    await waitFor(() => {
      expect(view.at()).toContain('/UBTConnect/ContactByEmailOrbitHelpdesk?');
    });
    const query = new URLSearchParams(view.at().split('?')[1]);
    expect(query.get('In_EventName')).toBe('Weekend Conference');
    expect(query.get('In_Subject')).toMatch(/^Weekend Conference - Bahia Blanca Main Hall - \w{3} \d/);
    expect(query.get('In_EventId')).toBe('7301');
    expect(query.get('In_MilestoneId')).toBe('');
  });

  it('without Orbit access goes to HomeFeed and shows the message after the transition', async () => {
    setFlags({ mobileOrbitAccess: false });
    const view = await openWithHelpers();
    fireEvent.click(footer() as Element);
    await waitFor(() => {
      expect(view.at()).toBe(HOME);
    });
    expect(getFeedbackMessage()).toBeNull();
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe(
        "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.",
      );
    });
  });

  it('shows the same helpers after a back navigation, without a second call', async () => {
    const view = await openWithHelpers();
    await act(() => view.router.navigate(HOME));
    await act(() => view.router.navigate(-1));
    expect(view.at()).toBe(`${PATH}${QUERY}`);
    expect(roles()).toEqual(['Catering/s', 'Usher/s']);
    expect(document.getElementById('b1-$b8')).toBeNull();
    expect(helperCalls()).toHaveLength(1);
  });
});
