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
  '/UBTConnect/ContactByEmailOrbitHost': <p>Host e-mail screen</p>,
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
/** Back to the page: the restored view shows the six rooms at once (no skeleton) and makes no call afterwards. */
async function backToMilestone(view: Awaited<ReturnType<typeof open>>) {
  await act(() => view.router.navigate(-1));
  expect(view.at()).toMatch(/^\/UBTConnect\/MilestoneDetail\?/);
  expect(rooms()).toBe(6);
  // A call starts in the OnReady effect: let the effects and their promises run before the caller counts (no timer).
  await act(async () => {
    await Promise.resolve();
  });
  expect(rooms()).toBe(6);
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

  it('opens the household of a guest and logs ViewHousehold; back, the accommodation is restored with no call', async () => {
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
    await backToMilestone(view);
    expect(calls(GET_HOST)).toBe(1);
    expect(calls(GET_DOCUMENT)).toBe(1);
    expect(calls(GET_GMP)).toBe(0);
  });

  /* The two back navigations that crashed in the port before the refactor (decision W27): the wrapper calls
     GetGmpMilestoneHost, then the accommodation block shows. Back, both blocks are restored with no call. */
  it.each([
    ['an optional input is missing', { In_HostId: '0' }],
    ['a visit from a notification', { In_FromNotification: 'True', In_OrbitMilestoneTypeId: '', In_HostId: '0' }],
  ])('%s, then a member and back: the restored view, no call, no crash', async (_name, patch) => {
    const view = await open(query(patch));
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
    await backToMilestone(view);
    expect(calls(GET_GMP)).toBe(1);
    expect(calls(GET_HOST)).toBe(1);
    expect(calls(GET_DOCUMENT)).toBe(1);
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

describe('MilestoneDetail page: the five other milestone blocks (decision Q3)', () => {
  const blockQuery = (type: string, milestoneId: string, name: string) =>
    query({ In_OrbitMilestoneTypeId: type, In_MilestoneId: milestoneId, In_MilestoneName: name });
  const blockOf = (name: string) => document.querySelector(`[data-block="Orbit_ScreenBlocks.${name}"]`);

  it('MealGuest: the host, the helpers and the guests of the meal, after the data action and the captions', async () => {
    await open(blockQuery('meal-guest', '7301-21', 'Lunch'));
    await waitFor(() => {
      expect(blockOf('ScreenBlock_MealGuest')?.textContent).toContain('Your Host');
    });
    const text = blockOf('ScreenBlock_MealGuest')?.textContent ?? '';
    expect(text).toContain('Fernández');
    expect(text).toContain('Ricardo & Lucía');
    expect(text).toContain('Avenida Mitre 1260, Azul, Buenos Aires');
    expect(text).toContain('Helper/s');
    expect(text).toContain('Guest/s');
    expect(document.getElementById('b1-$b1')?.getAttribute('data-block')).toBe(
      'Orbit_ScreenBlocks.ScreenBlock_MealGuest',
    );
    // HouseholdCaptions (the children line of the caption) goes to SanitizedHtml ($b3 of HostInformation).
    await waitFor(() => {
      expect(document.getElementById('b1-b1-b4-$b3')).not.toBeNull();
    });
    expect(calls('ScreenBlock_MealGuest/DataActionGetMealGuest')).toBe(1);
    expect(calls('ScreenBlock_MealGuest/DataActionGetCaptions')).toBe(1);
  });

  it('e-mails the host: ContactByMessage, then ContactByEmailOrbitHost with the surname of the contact name', async () => {
    const view = await open(blockQuery('meal-guest', '7301-21', 'Lunch'));
    await waitFor(() => {
      expect(document.querySelector('.orbit-contact-widget')).not.toBeNull();
    });
    const [, mailButton] = [...document.querySelectorAll('.orbit-contact-widget-button')];
    fireEvent.click(mailButton as Element);
    await waitFor(() => {
      expect(document.body.textContent).toContain('Email');
    });
    const email = [...document.querySelectorAll('*')].find(
      (e) => e.childElementCount === 0 && e.textContent === 'Email',
    );
    fireEvent.click(email as Element);
    await waitFor(() => {
      expect(view.at()).toMatch(/^\/UBTConnect\/ContactByEmailOrbitHost\?/);
    });
    const params = new URLSearchParams(view.at().split('?')[1]);
    expect(Object.fromEntries(params)).toEqual(
      expect.objectContaining({
        In_HostName: 'Ricardo & Lucía Fernández',
        In_Surname: 'Fernández',
        In_EntityType: 'Member',
        In_EntityId: '990002',
        In_HostEmail: 'fernandez.family@example.com',
        In_ContactLocality: 'Azul',
        In_ContactCountry: 'Argentina',
        In_MilestoneTitle: 'Lunch',
        In_EventName: EVENT,
      }),
    );
  });

  it('MealHost: the allocated guests, the special needs, the helpers and the guests', async () => {
    await open(blockQuery('meal-host', '7301-22', 'Lunch'));
    await waitFor(() => {
      expect(blockOf('ScreenBlock_MealHost')?.textContent).toContain('Allocated: ');
    });
    const text = blockOf('ScreenBlock_MealHost')?.textContent ?? '';
    expect(text).toContain('Special Need/s');
    expect(text).toContain('Gluten free');
    expect(text).toContain('Catering/s');
    expect(text).toContain('Guest/s');
    expect(text).not.toContain('Your Host');
    expect(calls('DataActionGetCaptions')).toBe(0);
  });

  it('MealHelper, AccommodationGuest and AccommodationHelper show the host and their lists', async () => {
    await open(blockQuery('meal-helper', '7301-23', 'Dinner'));
    await waitFor(() => {
      expect(blockOf('ScreenBlock_MealHelper')?.textContent).toContain('Peanuts and tree nuts');
    });
    await open(blockQuery('accommodation-guest', '7301-24', 'Accommodation'));
    await waitFor(() => {
      expect(blockOf('ScreenBlock_AccommodationGuest')?.textContent).toContain('Your Host');
    });
    expect(blockOf('ScreenBlock_AccommodationGuest')?.textContent).toContain('Guest/s');
    await open(blockQuery('accommodation-helper', '7301-25', 'Accommodation'));
    await waitFor(() => {
      expect(blockOf('ScreenBlock_AccommodationHelper')?.textContent).toContain('Room: ');
    });
    expect(blockOf('ScreenBlock_AccommodationHelper')?.textContent).toContain('Midday Meal: Fernández household');
  });

  it('an event that is not in the world: "still being organised"', async () => {
    await open(query({ In_OrbitMilestoneTypeId: 'accommodation-guest', In_EventId: '9999' }));
    await waitFor(() => {
      expect(blockOf('ScreenBlock_AccommodationGuest')?.textContent).toContain(
        'This accommodation milestone is still being organised.',
      );
    });
  });
});
