import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import {
  orbitAdminAttendees,
  orbitAdminEvents,
  orbitAdminMember,
  orbitAdminQRCode,
} from '@/mocks/fictional/orbitAdmin';
import { scenario } from '@/mocks/scenario';
import { wireList } from '@/legacy/os/os-wire';
import {
  BarcodePluginEntities,
  setBarcodeScanner,
  SCANNER_CLOSED_BY_USER,
  type BarcodeScanner,
} from '@/platform/device/barcodePlugin';

/* Mocks of OrbitAdminEventDetail (P-MOCKS), on the fictional Orbit admin world (src/mocks/fictional/orbitAdmin.ts).
   No-capture route (user decision 2026-10-16): no recorded call, shapes from the API contract.
   - Get_EventInformation: HasQRCode and the OrbitEventType of the admin event In_EventId (an unknown event: no QR
     code, empty type).
   - GetMemberByMemberId: the scanned attendee (Directory_MemberById); an unknown member: empty fields ("Participant").
   - GetScanEventQRCode: the attendee's check-in (role, rows, tag; Status Success). The server's failure texts are not
     known locally, so no failure answer is mocked (Decisions to confirm).
   - The photo comes from the Connect2_LegacyShared GetSignedImagesInBulk mock (MilestoneDetail/mocks.ts).
   - Scanner (Q1 = A): the mock phase installs a fictional BarcodePlugin scanner that reads, one per scan, the QR codes
     of the event's attendees (orbitAdminAttendees, in order). `?scanner=web` (remembered for the tab, `?scanner=mock`
     goes back) uses the real web scanner instead (ADR-11, src/lib/device/barcodePlugin.ts).
   Scenarios: real; scanwrongevent (a QR code of another event: "Guest is not allocated to this event."); scanunreadable
   (a text that is not a QR code of Orbit: the OrbitErrorMessage popup); scancancel (the user closes the scanner);
   noqrcode (the event has no QR code: no Scan QR Code button); empty; loading (skeleton); error (HTTP 500:
   NoInformation_Orbit stays, Service Interruption). */

const MODULE = 'Connect2_OrbitMobile_MUI';

/** The admin event of the page (the fictional scanner reads the event the admin scans at, In_EventId). */
const currentEventId = (): string => new URL(window.location.href).searchParams.get('In_EventId') ?? '';

let scans = 0;

/** The next scanned text: the attendees' codes in turn, or the scenario's case. */
function nextScannedText(): string {
  const eventId = currentEventId();
  if (scenario() === 'scanunreadable') return 'WIFI:S:Hall-Guests;T:WPA;;';
  if (scenario() === 'scanwrongevent') {
    const other = orbitAdminEvents().find((e) => e.EventId !== eventId)?.EventId ?? '7315';
    const [first] = orbitAdminAttendees(other);
    return orbitAdminQRCode(other, first?.member.Id ?? '0');
  }
  const attendees = orbitAdminAttendees(eventId);
  const attendee = attendees[scans % Math.max(attendees.length, 1)];
  scans += 1;
  return orbitAdminQRCode(eventId, attendee?.member.Id ?? '0');
}

const NO_ERROR = { ErrorCode: '', ErrorMessage: '' };

const mockScanner: BarcodeScanner = {
  checkBarcodePlugin: () => Promise.resolve({ IsAvailable: true, IsPWA: false, Error: NO_ERROR }),
  scanBarcode: () =>
    Promise.resolve(
      scenario() === 'scancancel'
        ? {
            Success: false,
            ScanResult: { Text: '', Format: 0 },
            Error: {
              ErrorCode: SCANNER_CLOSED_BY_USER,
              ErrorMessage: "Couldn't scan because the process was cancelled.",
            },
          }
        : {
            Success: true,
            ScanResult: { Text: nextScannedText(), Format: BarcodePluginEntities.Format.QR_CODE },
            Error: NO_ERROR,
          },
    ),
};

setBarcodeScanner(mockScanner);

const EMPTY_EVENT_TYPE = { Id: '', Is_Active: false, Type: '', Name: '', MainColorVar: '', MainIcon: '' };

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_AdminEventDetail/DataActionGet_EventInformation', ({ In_EventId }) => {
    const event = orbitAdminEvents().find((e) => e.EventId === In_EventId);
    return {
      HasQRCode: scenario() === 'noqrcode' ? false : (event?.HasQRCode ?? false),
      OrbitEventType: event ? { ...event.EventType } : EMPTY_EVENT_TYPE,
    };
  }),
  contractHandler(MODULE, 'ActionGetMemberByMemberId', ({ MemberId }) => {
    const member = orbitAdminMember(MemberId);
    return {
      Response: member ?? { Id: MemberId, FirstName: '', Lastname: '', LocalityName: '', CountryName: '' },
    };
  }),
  contractHandler(MODULE, 'ActionGetScanEventQRCode', ({ ScannedQRCodeInfo }) => {
    const attendee = orbitAdminAttendees(ScannedQRCodeInfo.EventId).find(
      (a) => a.member.Id === ScannedQRCodeInfo.ScannedUserInformation.MemberId,
    );
    return {
      QRCodeErrorTypeId: '',
      Response: {
        UserRole: attendee?.UserRole ?? '',
        GuestRole: attendee?.GuestRole ?? '',
        Tag: attendee?.Tag ?? '',
        Seats: wireList((attendee?.rows ?? []).map((row) => ({ MilestoneName: '', SeatAllocation: row }))),
        Status: { Success: true, ErrorMessage: '' },
      },
    };
  }),
];
