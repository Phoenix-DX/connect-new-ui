import { act, fireEvent, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { addLogSink, type LogEntry } from '@/platform/log/log';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import MilestoneDetail from './MilestoneDetailPage';

/* The page with its flows (useMilestoneWrapper, useAccommodationHost) and the MSW mocks of the route, in the app frame
   on a memory router: the fictional Orbit world, event 7301 with the hosted accommodation 7301-1 (six rooms, ten
   guests of two households). */
const PATH = '/UBTConnect/MilestoneDetail';
const HOME = '/UBTConnect/HomeFeed';
const EVENT = 'Weekend Bible Conferences - Bahia and Azul';
const GET_HOST = 'ScreenBlock_AccommodationHost/DataActionGetAccommodationHost';
const GET_DOCUMENT = 'ScreenBlock_AccommodationHost/DataActionGet_Document';
const GET_GMP = 'ScreenBlock_MilestoneWrapper/DataActionGetGmpMilestoneHost';
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  '/UBTConnect/HouseholdDetails': <p>HouseholdDetails screen</p>,
  '/UBTConnect/ContactByEmailOrbitHelpdesk': <p>Helpdesk screen</p>,
  [PATH]: <MilestoneDetail />,
};
const query = (patch: Record<string, string> = {}) =>
  `?${new URLSearchParams({
    In_FromNotification: 'False',
    In_MilestoneId: '7301-1',
    In_EventId: '7301',
    In_HostId: '990002',
    In_OrbitMilestoneTypeId: 'accommodation-host',
    In_MilestoneName: 'Accommodation',
    In_EventName: EVENT,
    ...patch,
  }).toString()}`;

/** Opens the page after HomeFeed, so a back navigation has a previous screen. */
async function open(search: string) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${search}`));
  return view;
}
/** The accordion items of the rooms (DEPRECATED_AccordionItem `b1-b5-l5-142864_<row>-$b8`). */
const roomItems = () => [...document.querySelectorAll('[id^="b1-b5-l5-142864_"][id$="-$b8"]')];
const rooms = () => roomItems().length;
const roomTitle = (row: number) => roomItems()[row]?.querySelector('span[data-expression]')?.textContent;
const calls = (action: string) => calledActions().filter((a) => a.endsWith(action)).length;
const wait = (ms: number) => act(() => new Promise((resolve) => setTimeout(resolve, ms)));

let logs: LogEntry[] = [];
let removeSink: () => void = () => undefined;

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setFlags({});
  document.body.className = '';
  logs = [];
  removeSink = addLogSink((entry) => {
    if (entry.message === 'ApplicationEvent') logs.push(entry);
  });
});
afterEach(() => {
  removeSink();
  setFlags({});
});

describe('MilestoneDetail page', () => {
  it('shows the six rooms of the host with their guests, after GetAccommodationHost and Get_Document', async () => {
    const bodies = recordBodies(`Connect2_OrbitMobile_MUI/${GET_HOST}`);
    await open(query());
    await waitFor(() => {
      expect(rooms()).toBe(6);
    });
    expect(roomTitle(0)).toBe('Room: 1-Master Guest');
    expect(roomTitle(5)).toBe('Room: Guest 3');
    expect(document.querySelectorAll('[data-block="Orbit_Blocks.Card_MemberInformation"]')).toHaveLength(10);
    expect(document.body.textContent).toContain('Accommodation Allocation');
    await waitFor(() => {
      expect(calls(GET_DOCUMENT)).toBe(1);
    });
    expect(calls(GET_HOST)).toBe(1);
    expect(calls(GET_GMP)).toBe(0);
    expect(bodies[0]).toEqual({
      IsFetchingData: true,
      IsLoadingDocument: false,
      HasDocument: false,
      In_MilestoneId: '7301-1',
      In_EventId: '7301',
      In_HostId: '990002',
      In_PreloadEventName: EVENT,
      In_PreloadMilestoneName: 'Accommodation',
      In_OrbitMilestoneTypeId: 'accommodation-host',
    });
  });

  it('opens the Orbit helpdesk form with the subject of the milestone', async () => {
    const view = await open(query());
    await waitFor(() => {
      expect(document.querySelector('.contact-helpdesk-footer')).not.toBeNull();
    });
    fireEvent.click(document.querySelector('.contact-helpdesk-footer') as Element);
    await waitFor(() => {
      expect(view.at()).toMatch(/^\/UBTConnect\/ContactByEmailOrbitHelpdesk\?/);
    });
    const params = new URLSearchParams(view.at().split('?')[1]);
    expect(params.get('In_Subject')).toMatch(
      /^Weekend Bible Conferences - Bahia and Azul - Accommodation - Bahia Blanca Main Hall - \S/,
    );
    expect(params.get('In_MilestoneId')).toBe('');
    expect(params.get('In_EventName')).toBe('Accommodation');
    expect(params.get('In_EventId')).toBe('7301');
  });

  it('without Orbit access goes to HomeFeed and shows the message after the transition', async () => {
    setFlags({ mobileOrbitAccess: false });
    const view = await open(query());
    await waitFor(() => {
      expect(document.querySelector('.contact-helpdesk-footer')).not.toBeNull();
    });
    fireEvent.click(document.querySelector('.contact-helpdesk-footer') as Element);
    await waitFor(() => {
      expect(view.at()).toBe(HOME);
    });
    expect(getFeedbackMessage()).toBeNull();
    await wait(600);
    expect(getFeedbackMessage()?.message).toBe(
      "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.",
    );
  });

  it('opens the household of a guest and logs ViewHousehold; back, the accommodation is fetched again', async () => {
    const view = await open(query());
    await waitFor(() => {
      expect(rooms()).toBe(6);
    });
    await waitFor(() => {
      expect(calls(GET_DOCUMENT)).toBe(1);
    });
    fireEvent.click(document.querySelector('.member-info-text-cont') as Element);
    await waitFor(() => {
      expect(view.at()).toBe('/UBTConnect/HouseholdDetails?HouseholdId=880101');
    });
    expect(logs.map((l) => l.data)).toEqual([
      { Event: 'ViewHousehold', TargetHouseholdId: '880101', MilestoneId: '7301-1', EventId: '7301' },
    ]);
    await act(() => view.router.navigate(-1));
    // As in the old port: the block starts again from its record defaults (see useAccommodationHost).
    await waitFor(() => {
      expect(calls(GET_DOCUMENT)).toBe(2);
    });
    expect(calls(GET_HOST)).toBe(2);
    expect(rooms()).toBe(6);
  });

  it('from a notification: GetGmpMilestoneHost, then the block with the type, host and title of the answer', async () => {
    const bodies = recordBodies(`Connect2_OrbitMobile_MUI/${GET_HOST}`);
    await open(query({ In_FromNotification: 'True', In_OrbitMilestoneTypeId: '', In_HostId: '0' }));
    await waitFor(() => {
      expect(rooms()).toBe(6);
    });
    expect(calledActions().filter((a) => a.endsWith(GET_GMP) || a.endsWith(GET_HOST))).toEqual([GET_GMP, GET_HOST]);
    expect(bodies[0]).toEqual(
      expect.objectContaining({ In_HostId: '990002', In_OrbitMilestoneTypeId: 'accommodation-host' }),
    );
  });

  it('from a notification shows the Orbit skeleton with the Orbit theme until GetGmpMilestoneHost answers', async () => {
    sessionStorage.setItem('mock:latency', '300');
    await open(query({ In_FromNotification: 'True', In_OrbitMilestoneTypeId: '' }));
    expect(document.getElementById('b1-$b9')).not.toBeNull();
    expect(document.body.textContent).not.toContain('could not be found');
    // The Failed layout of the first render set the theme before the skeleton showed, as in the old port.
    expect(document.body.classList.contains('orbit-theme')).toBe(true);
  });

  it('from a notification of an unknown milestone: "This Event could not be found"', async () => {
    await open(query({ In_FromNotification: 'True', In_MilestoneId: '9999' }));
    await waitFor(() => {
      expect(document.body.textContent).toContain('This Event could not be found.');
    });
    expect(calls(GET_HOST)).toBe(0);
  });
});
