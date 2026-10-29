import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { orbitAdminAttendees, orbitAdminQRCode } from '@/mocks/fictional/orbitAdmin';
import { orbitAdminMilestones } from '@/mocks/fictional/orbitAdminMilestones';
import {
  activeBarcodeScanner,
  BarcodePluginEntities,
  SCANNER_CLOSED_BY_USER,
  setBarcodeScanner,
  type BarcodeScanner,
} from '@/platform/device/barcodePlugin';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import { milestoneVenue } from './mocks';
import OrbitAdminMilestoneDetail from './OrbitAdminMilestoneDetailPage';

/* The page with its flows (useAdminMilestoneDetail) and the MSW mocks of the route, in the app frame on a memory
   router: the fictional admin milestones (src/mocks/fictional/orbitAdminMilestones.ts) and the attendees of their
   event (orbitAdmin.ts). The test scanner returns the texts that each test queues. */
const PATH = '/UBTConnect/OrbitAdminMilestoneDetail';
const HOME = '/UBTConnect/HomeFeed';
const GET_INFORMATION = 'ScreenBlock_AdminMilestoneDetail/DataActionGet_MilestoneInformation';
const CHECK_IN = 'ActionGetScanMilestoneQRCode';
const [MILESTONE] = orbitAdminMilestones('7301');
if (!MILESTONE) throw new Error('No fictional admin milestone');
const query = (extra: Record<string, string> = {}) =>
  `?${new URLSearchParams({
    In_EventId: MILESTONE.EventId,
    In_MilestoneId: MILESTONE.MilestoneRef,
    In_MilestoneName: MILESTONE.MilestoneName,
    In_MilestoneDate: MILESTONE.EventDate,
    In_MilestoneStartDate: MILESTONE.StartDate,
    In_MilestoneEndDate: MILESTONE.EndDate,
    In_MilestoneDescription: MILESTONE.Description,
    ...extra,
  }).toString()}`;
const attendees = orbitAdminAttendees(MILESTONE.EventId);
const codeOf = (index: number) => orbitAdminQRCode(MILESTONE.EventId, attendees[index]?.member.Id ?? '0');
const nameOf = (index: number) => `${attendees[index]?.member.FirstName} ${attendees[index]?.member.Lastname}`;

const NO_ERROR = { ErrorCode: '', ErrorMessage: '' };
/** The scanner of the test: it returns the queued texts in turn; "cancel" (or an empty queue) closes the scanner. */
let queue: string[] = [];
const testScanner: BarcodeScanner = {
  checkBarcodePlugin: () => Promise.resolve({ IsAvailable: true, IsPWA: false, Error: NO_ERROR }),
  scanBarcode: () => {
    const text = queue.shift() ?? 'cancel';
    return Promise.resolve(
      text === 'cancel'
        ? {
            Success: false,
            ScanResult: { Text: '', Format: 0 },
            Error: { ErrorCode: SCANNER_CLOSED_BY_USER, ErrorMessage: 'cancelled' },
          }
        : { Success: true, ScanResult: { Text: text, Format: BarcodePluginEntities.Format.QR_CODE }, Error: NO_ERROR },
    );
  },
};
let previousScanner: BarcodeScanner;
beforeAll(() => {
  previousScanner = activeBarcodeScanner();
  setBarcodeScanner(testScanner);
});
afterAll(() => {
  setBarcodeScanner(previousScanner);
});

async function open(q = query()) {
  window.history.replaceState(null, '', `${PATH}${q}`);
  const view = renderRoutes({ [HOME]: <p>HomeFeed screen</p>, [PATH]: <OrbitAdminMilestoneDetail /> }, HOME);
  await act(() => view.router.navigate(`${PATH}${q}`));
  return view;
}
const scanButton = () => screen.queryByRole('button', { name: 'Scan QR Code' });
const popupText = () => document.getElementById('b1-Popup_QRCode')?.textContent ?? '';
const checkIns = () => calledActions().filter((a) => a === CHECK_IN);
async function ready() {
  await waitFor(() => {
    expect(scanButton()).not.toBeNull();
  });
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  queue = [];
});
afterEach(() => {
  window.history.replaceState(null, '', '/');
});

describe('OrbitAdminMilestoneDetail page', () => {
  it('OnReady: Get_MilestoneInformation once with the block variables, then the milestone and its button', async () => {
    const bodies = recordBodies(`Connect2_OrbitMobile_MUI/${GET_INFORMATION}`);
    await open();
    expect(screen.getByText(MILESTONE.MilestoneName)).toBeInTheDocument();
    await ready();
    expect(calledActions().filter((a) => a === GET_INFORMATION)).toHaveLength(1);
    expect(bodies[0]).toMatchObject({
      In_EventId: MILESTONE.EventId,
      In_MilestoneId: MILESTONE.MilestoneRef,
      IsFetchingData: true,
      IsProcessingData: false,
      QRCodePopupOpened: false,
    });
    expect(screen.getByText(MILESTONE.type.Name)).toBeInTheDocument();
    expect(screen.getByText(MILESTONE.Description)).toBeInTheDocument();
  });

  it('a scan checks the guest in; Done scans again and the same guest is already checked in', async () => {
    const bodies = recordBodies(`Connect2_OrbitMobile_MUI/${CHECK_IN}`);
    await open();
    await ready();
    queue = [codeOf(0), codeOf(0)];
    fireEvent.click(scanButton() as HTMLElement);
    await waitFor(() => {
      expect(popupText()).toContain('Has Checked in');
    });
    expect(popupText()).toContain(nameOf(0));
    expect(popupText()).toContain(`Description: ${MILESTONE.Description}`);
    expect(popupText()).toContain('Row: ');
    expect(popupText()).toContain(`Venue: ${milestoneVenue(MILESTONE)}`);
    expect(bodies[0]).toMatchObject({
      ScanClientId: 'ConnectMobile',
      ScannedQRCodeInfo: {
        EventId: MILESTONE.EventId,
        MilestoneId: MILESTONE.MilestoneRef,
        MilestoneType: MILESTONE.type.Id,
        ScannedUserInformation: { MemberId: attendees[0]?.member.Id },
      },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Done' }));
    await waitFor(() => {
      // QRCodeScanResult AlreadyCheckedInForMilestone UserMessage (MCP DEV, mcp-session-2026-10-29.md rows 5, 5b).
      expect(popupText()).toContain('This QR code has been scanned');
    });
    expect(checkIns()).toHaveLength(2);
  });

  it('the entry id (In_MilestoneId = MilestoneRef "MS-7301-01"): HasQRCode True, the Scan QR Code button, type "Admin"', async () => {
    // OnAfterFetch of ScreenBlock_AdminMilestones (ScreenBlock_AdminMilestones.mvc.js:506-530) sends the MilestoneRef;
    // the Scan QR Code button shows only when Get_MilestoneInformation answers HasQRCode True.
    await open(query({ In_MilestoneId: 'MS-7301-01' }));
    await ready();
    expect(scanButton()).not.toBeNull();
    // MCP row 7 (mcp-session-2026-10-29.md): Name "Admin" for the six admin types; the type row shows Name.
    expect(screen.getByText('Admin').parentElement).toHaveClass('flex-center-vertical');
    expect(document.querySelector('.orbit-icon-host-guest')).not.toBeNull();
  });

  it('a QR code of another event: "Guest is not allocated to this event.", no check-in', async () => {
    await open();
    await ready();
    queue = [orbitAdminQRCode('7315', attendees[1]?.member.Id ?? '0')];
    fireEvent.click(scanButton() as HTMLElement);
    await waitFor(() => {
      expect(popupText()).toContain('Guest is not allocated to this event.');
    });
    expect(checkIns()).toHaveLength(0);
  });

  it('an unreadable code: the OrbitErrorMessage popup; an empty code: the info message; a closed scanner: nothing', async () => {
    await open();
    await ready();
    queue = ['WIFI:S:Hall-Guests;T:WPA;;'];
    fireEvent.click(scanButton() as HTMLElement);
    await waitFor(() => {
      expect(screen.getByText('Unable to read QR code, please try again.')).toBeInTheDocument();
    });
    queue = ['{}'];
    fireEvent.click(screen.getByText('Ok'));
    await waitFor(() => {
      expect(JSON.stringify(getFeedbackMessage())).toContain('This QR Code was unable to be processed.');
    });
    resetFeedbackMessages();
    queue = ['cancel'];
    fireEvent.click(scanButton() as HTMLElement);
    await ready();
    expect(getFeedbackMessage()).toBeNull();
    expect(checkIns()).toHaveLength(0);
  });

  it('scenario notallocated: the check-in fails with the cross', async () => {
    await open(query({ mock: 'notallocated' }));
    await ready();
    queue = [codeOf(2)];
    fireEvent.click(scanButton() as HTMLElement);
    await waitFor(() => {
      expect(popupText()).toContain('Guest is not allocated to this milestone.');
    });
    expect(popupText()).not.toContain('Has Checked in');
  });

  it('scenario noqrcode: no Scan QR Code button; scenario empty: an unknown milestone, no type row', async () => {
    const first = await open(query({ mock: 'noqrcode' }));
    await waitFor(() => {
      expect(screen.getByText(MILESTONE.Description)).toBeInTheDocument();
    });
    expect(scanButton()).toBeNull();
    expect(screen.getByText(MILESTONE.type.Name)).toBeInTheDocument();
    first.unmount();
    await open(query({ mock: 'empty' }));
    await waitFor(() => {
      expect(screen.getByText(MILESTONE.Description)).toBeInTheDocument();
    });
    expect(scanButton()).toBeNull();
    expect(document.querySelector('.orbit-icon-host-guest')).toBeNull();
  });

  it('a failed Get_MilestoneInformation: the error message, and the skeleton stays (IsFetchingData is not reset)', async () => {
    await open(query({ mock: 'error' }));
    await waitFor(() => {
      expect(getFeedbackMessage()).not.toBeNull();
    });
    expect(document.querySelector('[data-block="Orbit_Generic_Blocks.Skeleton_Loading"]')).not.toBeNull();
  });
});
