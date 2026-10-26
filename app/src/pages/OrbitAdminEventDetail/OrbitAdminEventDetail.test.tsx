import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { orbitAdminAttendees, orbitAdminEvents } from '@/mocks/fictional/orbitAdmin';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { useOsNavigate } from '@/platform/navigation';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import OrbitAdminEventDetail from './OrbitAdminEventDetailPage';

/* The page with its flows (useAdminEventDetail) and the MSW mocks of the route, in the app frame on a memory router:
   the fictional admin events and their attendees (src/mocks/fictional/orbitAdmin.ts), and the fictional scanner of
   the mock phase, which reads the attendees' QR codes in turn. */
const PATH = '/UBTConnect/OrbitAdminEventDetail';
const HOME = '/UBTConnect/HomeFeed';
const GET_INFORMATION = 'ScreenBlock_AdminEventDetail/DataActionGet_EventInformation';
const [EVENT] = orbitAdminEvents();
if (!EVENT) throw new Error('No fictional admin event');
const QUERY = `?${new URLSearchParams({
  In_EventId: EVENT.EventId,
  In_EventName: EVENT.Title,
  In_EventStartDate: EVENT.StartEventDate,
  In_EventEndDate: EVENT.EndEventDate,
  In_EventLocation: EVENT.EventLocation,
  In_EventTypeFriendly: EVENT.TypeFriendly,
}).toString()}`;

/** A route that the page opens, with a back button. */
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
  '/UBTConnect/Search': <Stub name="Search" />,
  [PATH]: <OrbitAdminEventDetail />,
};

/** Opens the page after HomeFeed. The fictional scanner reads In_EventId from the window URL. */
async function open(query = QUERY) {
  window.history.replaceState(null, '', `${PATH}${query}`);
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}${query}`));
  return view;
}
const informationCalls = () => calledActions().filter((a) => a === GET_INFORMATION);
const checkIns = () => calledActions().filter((a) => a === 'ActionGetScanEventQRCode');
const scanButton = () => screen.queryByRole('button', { name: 'Scan QR Code' });
const popup = () => document.getElementById('b1-Popup_QRCode');
const attendeeNames = orbitAdminAttendees(EVENT.EventId).map((a) => `${a.member.FirstName} ${a.member.Lastname}`);

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
});
afterEach(() => {
  sessionStorage.clear();
  window.history.replaceState(null, '', '/');
});

describe('OrbitAdminEventDetail page', () => {
  it('OnReady: the skeleton, then Get_EventInformation once and the event with the Scan QR Code button', async () => {
    const bodies = recordBodies(`Connect2_OrbitMobile_MUI/${GET_INFORMATION}`);
    await open();
    expect(screen.getByText(EVENT.Title)).toBeInTheDocument();
    await waitFor(() => {
      expect(scanButton()).not.toBeNull();
    });
    expect(screen.getByText(EVENT.EventLocation)).toBeInTheDocument();
    expect(screen.getByText(EVENT.EventType.Type)).toBeInTheDocument();
    expect(screen.getByText(EVENT.TypeFriendly)).toBeInTheDocument();
    expect(informationCalls()).toHaveLength(1);
    await waitFor(() => {
      expect(bodies[0]).toBeDefined();
    });
    expect(JSON.stringify(bodies[0])).toContain('"IsFetchingData":true');
  });

  it('a scan checks the attendee in and shows the result popup; Done closes it and scans the next one', async () => {
    await open();
    await waitFor(() => {
      expect(scanButton()).not.toBeNull();
    });
    fireEvent.click(scanButton() as HTMLElement);
    await waitFor(() => {
      expect(popup()?.textContent).toContain('Has Checked in');
    });
    const first = popup()?.textContent ?? '';
    expect(attendeeNames.some((name) => first.includes(name))).toBe(true);
    expect(first).toContain(EVENT.Title);
    expect(calledActions().slice(-3)).toEqual([
      'ActionGetMemberByMemberId',
      'ActionGetSignedImagesInBulk',
      'ActionGetScanEventQRCode',
    ]);
    fireEvent.click(screen.getByRole('button', { name: 'Done' }));
    await waitFor(() => {
      expect(popup()?.textContent ?? '').not.toBe(first);
    });
    await waitFor(() => {
      expect(popup()?.textContent).toContain('Has Checked in');
    });
    expect(checkIns()).toHaveLength(2);
  });

  it('a QR code of another event: "Guest is not allocated to this event." without a check-in', async () => {
    sessionStorage.setItem('mock:mock', 'scanwrongevent');
    await open();
    await waitFor(() => {
      expect(scanButton()).not.toBeNull();
    });
    fireEvent.click(scanButton() as HTMLElement);
    await waitFor(() => {
      expect(popup()?.textContent).toContain('Guest is not allocated to this event.');
    });
    expect(calledActions()).toContain('ActionGetMemberByMemberId');
    expect(checkIns()).toHaveLength(0);
  });

  it('an unreadable code: the error popup; Ok scans again', async () => {
    sessionStorage.setItem('mock:mock', 'scanunreadable');
    await open();
    await waitFor(() => {
      expect(scanButton()).not.toBeNull();
    });
    fireEvent.click(scanButton() as HTMLElement);
    expect(await screen.findByText('Unable to read QR code, please try again.')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Ok'));
    await waitFor(() => {
      expect(screen.getByText('Unable to read QR code, please try again.')).toBeInTheDocument();
    });
  });

  it('the user closes the scanner: no message, the button comes back', async () => {
    sessionStorage.setItem('mock:mock', 'scancancel');
    await open();
    await waitFor(() => {
      expect(scanButton()).not.toBeNull();
    });
    fireEvent.click(scanButton() as HTMLElement);
    await waitFor(() => {
      expect(scanButton()).not.toBeNull();
    });
    expect(getFeedbackMessage()).toBeNull();
    expect(popup()).toBeNull();
  });

  it('an event without a QR code: the event rows, no Scan QR Code button', async () => {
    sessionStorage.setItem('mock:mock', 'noqrcode');
    await open();
    await waitFor(() => {
      expect(screen.getByText(EVENT.EventLocation)).toBeInTheDocument();
    });
    expect(scanButton()).toBeNull();
  });

  it('a failed Get_EventInformation: the error message, and the skeleton stays (IsFetchingData is not reset)', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await open();
    await waitFor(() => {
      expect(getFeedbackMessage()).not.toBeNull();
    });
    expect(scanButton()).toBeNull();
    expect(document.querySelector('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]')).not.toBeNull();
  });

  it('back from another screen restores the event without a new Get_EventInformation', async () => {
    const view = await open();
    await waitFor(() => {
      expect(scanButton()).not.toBeNull();
    });
    await act(() => view.router.navigate('/UBTConnect/Search'));
    fireEvent.click(await screen.findByText('back from Search'));
    await waitFor(() => {
      expect(view.at()).toBe(`${PATH}${QUERY}`);
    });
    expect(scanButton()).not.toBeNull();
    expect(screen.getByText(EVENT.EventLocation)).toBeInTheDocument();
    expect(informationCalls()).toHaveLength(1);
  });
});
