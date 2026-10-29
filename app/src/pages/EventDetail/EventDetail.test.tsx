import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ORBIT_MILESTONE_TYPES, ORBIT_SURVEY_STATUSES } from '@/mocks/fictional/orbit';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { useOsNavigate } from '@/platform/navigation';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { syncOrbitMilestoneTypes, syncOrbitSurveyStatus } from '@/platform/storage/localEntities';
import { server } from '@/test/setup';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import EventDetail from './EventDetailPage';

/* The page with the flows of its block (useEventDetail) in the app frame on a memory router, with the MSW mocks of the
   route: the fictional event 7301 of the shared Orbit world, hosted by the mock user's household (three days, the
   host survey Confirmed, no documents, no QR code, no booklet). The local survey statuses and milestone types are
   synced first, as the app start does. */
const PATH = '/UBTConnect/EventDetail';
const HOME = '/UBTConnect/HomeFeed';
const QUERY = `?In_MemberId=${MOCK_USER_ID}&In_EventId=7301&In_EventName=Weekend%20Conferences`;
/** The calls of the block, as calledActions() names them (owner/action). */
const BLOCK = 'ScreenBlock_EventDetail';
const GET_EVENT = `${BLOCK}/DataActionGet_EventDetails`;
/** The endpoint of Get_EventDetails (module/owner/action). */
const GET_EVENT_PATH = `Connect2_OrbitMobile_MUI/${GET_EVENT}`;

/** A route that the page opens: its name, and a back link. */
function Stub({ name }: { name: string }) {
  const navigate = useOsNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        navigate(-1 as never);
      }}
    >
      back from {name}
    </button>
  );
}

const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  [PATH]: <EventDetail />,
  '/UBTConnect/ContactByEmailOrbitHelpdesk': <Stub name="ContactByEmailOrbitHelpdesk" />,
  '/UBTConnect/MilestoneDetail': <Stub name="MilestoneDetail" />,
};

/** Opens the page after HomeFeed, so a back navigation has a previous screen. */
async function open(query = QUERY) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${query}`));
  return view;
}

const byId = (id: string) => document.getElementById(id);
const cards = () => [...document.querySelectorAll('[data-block="Orbit_Blocks.Card_Milestone"]')];
const days = () => [...document.querySelectorAll('#b1-\\$b8 .event-date-selector')];
const loaded = () =>
  waitFor(() => {
    expect(byId('b1-$b16')).not.toBeNull();
  });

beforeEach(async () => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setFlags({});
  setSignedInUser(MOCK_USER_ID);
  await syncOrbitSurveyStatus(ORBIT_SURVEY_STATUSES.map((s) => ({ ...s, Id: Number(s.Id) })));
  await syncOrbitMilestoneTypes(Object.values(ORBIT_MILESTONE_TYPES));
});
afterEach(() => {
  setSignedInUser(null);
  setFlags({});
});

describe('EventDetail page', () => {
  it('shows the skeleton, then the event of the hosting household with its first day', async () => {
    await open();
    expect(byId('b1-$b15')?.getAttribute('data-block')).toBe('Orbit_Generic_Blocks.Skeleton_Loading');
    await loaded();
    expect(byId('b1-$b15')).toBeNull();
    expect(document.querySelector('.orbit-header-center')?.textContent).toContain('Weekend Conferences');
    expect(document.body.textContent).toContain('Weekend Conference Program');
    expect(byId('b1-$b5')?.getAttribute('data-block')).toBe('Orbit_Generic_Blocks.Accordion_Orbit');
    expect(days()).toHaveLength(3);
    expect(cards()).toHaveLength(2);
    expect(byId('b1-CommonUI_Elements')).not.toBeNull();
    expect(byId('$b2')).not.toBeNull();
    expect(calledActions().filter((a) => a.startsWith(BLOCK))).toEqual([
      `${BLOCK}/DataActionFetchEventNotes`,
      GET_EVENT,
      `${BLOCK}/DataActionGet_HostSurveyStatus`,
      `${BLOCK}/DataActionGet_HasDocuments`,
      `${BLOCK}/DataActionGet_HasQRCode`,
    ]);
  });

  it('sends the inputs and the block variables to Get_EventDetails', async () => {
    const bodies = recordBodies(GET_EVENT_PATH);
    await open(`${QUERY}&In_FromNotification=True`);
    await loaded();
    expect(JSON.stringify(bodies)).toContain('"In_EventId":"7301"');
    expect(JSON.stringify(bodies)).toContain('"In_FromNotification":true');
    expect(JSON.stringify(bodies)).toContain('"IsFetchingData":true');
  });

  it('shows the milestones of a clicked day', async () => {
    await open();
    await loaded();
    const before = cards().map((c) => c.id);
    fireEvent.click(days()[2] as Element);
    await waitFor(() => {
      expect(cards()).toHaveLength(1);
    });
    expect(cards().map((c) => c.id)).not.toEqual(before);
  });

  it('opens the Orbit helpdesk email with the subject of the event, and back restores the view without a call', async () => {
    const { at } = await open();
    await loaded();
    fireEvent.click(byId('b1-$b16')?.querySelector('.contact-helpdesk-footer') as Element);
    await waitFor(() => {
      expect(at()).toContain('/UBTConnect/ContactByEmailOrbitHelpdesk?');
    });
    expect(at()).toContain('In_EventId=7301');
    expect(at()).toContain('In_Subject=Weekend%20Conferences');
    const callsBefore = calledActions().length;
    fireEvent.click(await screen.findByText('back from ContactByEmailOrbitHelpdesk'));
    await waitFor(() => {
      expect(at()).toBe(`${PATH}${QUERY}`);
    });
    expect(byId('b1-$b16')).not.toBeNull();
    expect(byId('b1-$b15')).toBeNull();
    expect(
      calledActions()
        .slice(callsBefore)
        .filter((a) => a.startsWith(BLOCK)),
    ).toEqual([]);
  });

  it('without Orbit access, goes to HomeFeed and shows the no-access message after the transition', async () => {
    setFlags({ mobileOrbitAccess: false });
    const { at } = await open();
    await loaded();
    fireEvent.click(byId('b1-$b16')?.querySelector('.contact-helpdesk-footer') as Element);
    await waitFor(() => {
      expect(at()).toBe(HOME);
    });
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe(
        "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.",
      );
    });
  });

  it('opens MilestoneDetail from the host allocation with the ids of the row', async () => {
    const { at } = await open();
    await loaded();
    fireEvent.click(document.querySelector('#b1-\\$b7 .host-allocation-list-item-right') as Element);
    await waitFor(() => {
      expect(at()).toContain('/UBTConnect/MilestoneDetail?');
    });
    expect(at()).toContain('In_MilestoneId=7301-1');
    expect(at()).toContain('In_EventId=7301');
  });

  it('shows "no longer available" for an event of another member from a notification', async () => {
    await open('?In_MemberId=990099&In_EventId=7301&In_FromNotification=True');
    await waitFor(() => {
      expect(byId('b1-$b14')?.textContent).toBe('The Event is no longer available for you.');
    });
    expect(byId('b1-$b16')).toBeNull();
  });

  it('keeps the skeleton when Get_EventDetails fails', async () => {
    server.use(http.post(`/api/${GET_EVENT_PATH}`, () => HttpResponse.json({ error: 'mock error' }, { status: 500 })));
    await open();
    await waitFor(() => {
      expect(calledActions()).toContain(GET_EVENT);
    });
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));
    expect(byId('b1-$b15')).not.toBeNull();
    expect(calledActions()).not.toContain(`${BLOCK}/DataActionGet_HasDocuments`);
  });
});
