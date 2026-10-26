import { act, fireEvent, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import ViewDocuments from './ViewDocumentsPage';

/* The page with its block flows (useViewDocuments) in the app frame on a memory router, with the MSW mocks: event 7301
   has the four fictional PDFs of the Orbit world; any other event has none. */
const PATH = '/UBTConnect/ViewDocuments';
const HOME = '/UBTConnect/HomeFeed';
const HELPDESK = '/UBTConnect/ContactByEmailOrbitHelpdesk';
const GET_DOCUMENTS = 'ScreenBlock_ViewDocuments/DataActionGetEventDocuments';
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  [HELPDESK]: <p>Helpdesk screen</p>,
  [PATH]: <ViewDocuments />,
};
const SEARCH =
  '?In_MemberId=55&In_EventId=7301&In_EventName=Spring%20Conference&In_EventStartDate=2026-11-06T09:00:00' +
  '&In_EventEndDate=2026-11-08T17:00:00&In_EventLocation=Main%20Hall';
const NO_DOCUMENTS = 'There are no documents available for this event at the moment.';

const rows = () => [...document.querySelectorAll('[id="b1-List_EventDocuments"] > div')];
const footer = () => document.querySelector('.contact-helpdesk-footer');
const documentCalls = () => calledActions().filter((action) => action === GET_DOCUMENTS);

/** Opens the page after HomeFeed and waits for the documents. */
async function open(search = SEARCH) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${search}`));
  return view;
}
const documentsShown = () =>
  waitFor(() => {
    expect(rows()).toHaveLength(4);
  });

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

describe('ViewDocuments page', () => {
  it('shows the skeleton, then the documents of the event with the footer and CommonUI', async () => {
    const bodies = recordBodies(`Connect2_OrbitMobile_MUI/${GET_DOCUMENTS}`);
    const { container } = await open();
    expect(container.querySelector('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]')).not.toBeNull();
    await documentsShown();
    expect(container.querySelector('[data-block="Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments"]')?.id).toBe(
      '$b1',
    );
    expect(container.textContent).toContain('Spring Conference');
    expect(rows().map((r) => r.textContent)).toEqual([
      'Conference Programme',
      'Hosting Guidelines',
      'Main Hall Map and Parking',
      'Guest Arrival Schedule',
    ]);
    expect(footer()?.textContent).toBe('Contact Orbit Helpdesk');
    expect(container.querySelector('[data-block="App_Common.CommonUI_InsideLayout"]')?.id).toBe('$b2');
    expect(documentCalls()).toHaveLength(1);
    await waitFor(() => {
      expect(bodies[0]).toEqual({
        IsFetchingData: true,
        IsLoadingDocument: false,
        In_MemberId: '55',
        In_EventId: '7301',
        In_EventName: 'Spring Conference',
        In_EventLocation: 'Main Hall',
        In_EventStartDate: '2026-11-06T09:00:00',
        In_EventEndDate: '2026-11-08T17:00:00',
      });
    });
  });

  it('an event without documents shows the no-documents message and no footer', async () => {
    const { container } = await open(SEARCH.replace('7301', '42'));
    await waitFor(() => {
      expect(container.textContent).toContain(NO_DOCUMENTS);
    });
    expect(rows()).toHaveLength(0);
    expect(footer()).toBeNull();
  });

  it('a document opens in a new tab and shows as viewed', async () => {
    const openTab = vi.spyOn(window, 'open').mockImplementation(() => null);
    await open();
    await documentsShown();
    fireEvent.click(rows()[1] as Element);
    expect(openTab).toHaveBeenCalledWith(
      'https://example.com/orbit/events/7301/hosting-guidelines.pdf',
      '_blank',
      'noopener',
    );
    expect(rows()[1]?.querySelector('span')?.className).toBe('margin-left-base underline text-neutral-7');
    expect(rows()[0]?.querySelector('span')?.className).toBe('margin-left-base underline color-orbit-primary-7');
  });

  it('the footer opens ContactByEmailOrbitHelpdesk; back restores the viewed documents without a call', async () => {
    vi.spyOn(window, 'open').mockImplementation(() => null);
    const view = await open();
    await documentsShown();
    fireEvent.click(rows()[2] as Element);
    act(() => {
      fireEvent.click(footer() as Element);
    });
    await waitFor(() => {
      expect(view.at()).toMatch(/^\/UBTConnect\/ContactByEmailOrbitHelpdesk\?/);
    });
    const query = new URLSearchParams(view.at().split('?')[1]);
    expect(query.get('In_Subject')).toMatch(/^Spring Conference - Main Hall - /);
    expect(query.get('In_EventId')).toBe('7301');
    expect(query.get('In_EventName')).toBe('Spring Conference');
    expect(query.get('In_MilestoneId')).toBe('');

    await act(() => view.router.navigate(-1));
    await documentsShown();
    expect(rows()[2]?.querySelector('span')?.className).toBe('margin-left-base underline text-neutral-7');
    expect(documentCalls()).toHaveLength(1);
  });

  it('without Orbit access, the footer goes to HomeFeed and shows the no-access message', async () => {
    setFlags({ mobileOrbitAccess: false });
    const view = await open();
    await documentsShown();
    act(() => {
      fireEvent.click(footer() as Element);
    });
    await waitFor(() => {
      expect(view.at()).toBe(HOME);
    });
    await waitFor(() => {
      expect(getFeedbackMessage()?.message).toBe(
        "You don't have access to Orbit. Please contact the Orbit Helpdesk if you have any questions.",
      );
    });
  });

  it('a failed call keeps the skeleton', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const { container } = await open();
    await waitFor(() => {
      expect(getFeedbackMessage()).not.toBeNull();
    });
    expect(container.querySelector('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]')).not.toBeNull();
    expect(rows()).toHaveLength(0);
  });
});
