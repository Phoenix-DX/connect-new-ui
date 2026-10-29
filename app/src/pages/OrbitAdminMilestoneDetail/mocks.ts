import type { RequestHandler } from 'msw';
import type { MilestoneInformationWire, ScanMilestoneQRCodeInputsWire, ScanMilestoneQRCodeWire } from '@/api/event';
/* The value comes from its module, not from the barrel: the test setup loads the handlers before the vi.mock calls of a
   test file, and a barrel loaded then keeps the real repository and milestoneBlocks for the hooks of every test
   (migration/clarify/builds/item10-test-fixes.md). */
import { EMPTY_ADMIN_MILESTONE_TYPE } from '@/api/event/adminMilestoneDetail';
import { orbitAdminAttendees, type OrbitAdminAttendee } from '@/mocks/fictional/orbitAdmin';
import { orbitAdminMilestones, type OrbitAdminMilestone } from '@/mocks/fictional/orbitAdminMilestones';
import { scenario } from '@/mocks/scenario';
import { contractHandler } from '@/mocks/contract';
import { collection, statefulHandler } from '@/mocks/store';
import { wireList } from '@/lib/os-wire';
import { QRCodeErrorType } from './staticEntities';

/* Mocks of OrbitAdminMilestoneDetail (P-MOCKS), on the fictional Orbit admin world: the admin milestones of
   src/mocks/fictional/orbitAdminMilestones.ts (shared with OrbitAdminMilestones, the entry) and the attendees of their
   event (orbitAdmin.ts). No-capture route (user decision I10-3 (a)): no recorded call, shapes from the compiled
   records. Both operations are in the contract since its regeneration (I10-6): Get_MilestoneInformation is a
   contractHandler; GetScanMilestoneQRCode stays a statefulHandler, because it writes the in-memory collection.
   - Get_MilestoneInformation: HasQRCode (every listed admin milestone uses QR codes) and its OrbitMilestoneType; the
     milestone is found by its MilestoneRef (the In_MilestoneId of the entry); an unknown milestone gives the default
     record (no QR code, no type).
   - GetScanMilestoneQRCode: never called on TST by this migration, because on TST a scan WRITES (Q1, answered by MCP
     DEV, migration/clarify/review/mcp-session-2026-10-29.md row 5): Connect2_OrbitMobile_BL calls the Orbit API
     check-in (Connect2_OrbitMobile_IS Get_ScanMilestoneQRCode, with the user token) and, for CheckedIn,
     CheckedInForOtherMilestone and Moved, creates a local ScannedQRCodes record. The mock writes only the in-memory
     collection `orbitAdminMilestoneCheckIns` (that local record): the first scan of an attendee checks in (Success);
     the next scan of the same attendee at the same milestone is a local duplicate (no API call, "This QR code has been
     scanned"); a member who is not an attendee of the event is an API failure (NotAllocated, fictional API text).
     Status and QRCodeErrorTypeId per case: scanOutcome below; the QRCodeErrorTypeId values are the live TST static
     entity.
   - GetMemberByMemberId and the photo: the mocks of OrbitAdminEventDetail (ActionGetMemberByMemberId) and of
     MilestoneDetail (GetSignedImagesInBulk).
   - Scanner: the fictional BarcodePlugin scanner of the mock phase, installed by the OrbitAdminEventDetail mocks; it
     reads the QR codes of the attendees of In_EventId in turn (scenarios scanwrongevent, scanunreadable, scancancel).
   Scenarios: real; noqrcode (no Scan QR Code button); empty (an unknown milestone); notallocated (every check-in
   fails); loading (skeleton); error (HTTP 500: the skeleton stays, the error message). */

const MODULE = 'Connect2_OrbitMobile_MUI';

type QRCodeErrorTypeId = (typeof QRCodeErrorType)[keyof typeof QRCodeErrorType];

/** QRCodeScanResult.UserMessage: the static entity records of Connect2_OrbitMobile_BL (MCP DEV, row 5b of
    mcp-session-2026-10-29.md; server data, not visible on TST). "occured" is the spelling of the record. */
export const QRCodeScanResultUserMessage: Record<QRCodeErrorTypeId, string> = {
  [QRCodeErrorType.CheckedIn]: 'Has Checked in',
  [QRCodeErrorType.CheckedInForOtherMilestone]: 'Has Checked in',
  [QRCodeErrorType.AlreadyCheckedInForMilestone]: 'This QR code has been scanned',
  [QRCodeErrorType.GenericError]: 'An error has occured',
  [QRCodeErrorType.Moved]: '',
  [QRCodeErrorType.NotAllocated]: '',
  [QRCodeErrorType.NotInvited]: '',
};

/** FICTIONAL: the Orbit API's own failure text for a guest who is not allocated to the milestone. The BL keeps the API
    response of a failure other than AlreadyCheckedInForMilestone (row 5), and the API text is not known (the
    NotAllocated record's UserMessage is empty). */
const API_NOT_ALLOCATED = 'Guest is not allocated to this milestone.';

interface ScanOutcome {
  QRCodeErrorTypeId: QRCodeErrorTypeId;
  Success: boolean;
  ErrorMessage: string;
}

/** Response.Status and QRCodeErrorTypeId of GetScanMilestoneQRCode (Connect2_OrbitMobile_BL, MCP DEV row 5):
    - checkedIn: the API checked the guest in; its response is kept (Success, no message);
    - localDuplicate: the member is already recorded locally for the milestone: no API call, Success False and the
      AlreadyCheckedInForMilestone message;
    - apiFailure: any other API failure keeps the API response (Success False, the API message).
    QRCodeErrorTypeId: row 5 states the AlreadyCheckedInForMilestone record id for the failure branches only (the local
    duplicate, and any other API failure: the outcome lookup always reads that record, so its GenericError fallback
    does not run). For checkedIn (success) the value is an ASSUMPTION: row 5 does not state it; the mock keeps the same
    id (an open MCP fact, auto decision F2 of 2026-10-29). GenericError comes only from a failed local create (not
    mocked). The block reads only Response.Status. */
export function scanOutcome(kind: 'checkedIn' | 'localDuplicate' | 'apiFailure', apiMessage = ''): ScanOutcome {
  const QRCodeErrorTypeId = QRCodeErrorType.AlreadyCheckedInForMilestone;
  if (kind === 'checkedIn') return { QRCodeErrorTypeId, Success: true, ErrorMessage: '' };
  if (kind === 'localDuplicate')
    return { QRCodeErrorTypeId, Success: false, ErrorMessage: QRCodeScanResultUserMessage[QRCodeErrorTypeId] };
  return { QRCodeErrorTypeId, Success: false, ErrorMessage: apiMessage };
}

/** The types whose milestones take place in the hall: the check-in gives the venue (SeatingPlanName). */
const HALL_TYPES: readonly string[] = ['meeting-admin', 'meeting-meal', 'meal-at-hall-admin'];

/** The venue of a milestone (Response.SeatingPlanName, "Venue: …" of the popup): the main hall of its locality for
    meetings and meals, none for transport, accommodation and breaks. */
export const milestoneVenue = (m: OrbitAdminMilestone): string =>
  HALL_TYPES.includes(m.type.Id) ? `${m.LocalityName} Main Hall` : '';

/** The milestone of In_MilestoneId. The entry sends the MilestoneRef as MilestoneId (OnAfterFetch of
    ScreenBlock_AdminMilestones.mvc.js:506-530, src/api/event/adminMilestones.ts), so the lookup is by MilestoneRef. */
const findMilestone = (eventId: string, milestoneId: string): OrbitAdminMilestone | undefined =>
  orbitAdminMilestones(eventId).find((m) => m.MilestoneRef === milestoneId);

const checkIns = () => collection('orbitAdminMilestoneCheckIns', () => [], 'Id');

const nowUtc = (): string => new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');

/** The answer of GetScanMilestoneQRCode for an attendee (or none) at a milestone (or an unknown one). */
function checkInAnswer(
  outcome: ScanOutcome,
  info: ScanMilestoneQRCodeInputsWire['ScannedQRCodeInfo'],
  milestone: OrbitAdminMilestone | undefined,
  attendee: OrbitAdminAttendee | undefined,
  prior: { MilestoneId: string; MilestoneRef: string; MilestoneName: string; CheckInDateTimeUTC: string }[] = [],
): ScanMilestoneQRCodeWire {
  const row = milestone?.type.Id === 'meeting-admin' ? (attendee?.rows[0] ?? '') : '';
  const name = milestone?.MilestoneName ?? '';
  return {
    QRCodeErrorTypeId: outcome.QRCodeErrorTypeId,
    Response: {
      Status: { Success: outcome.Success, ErrorMessage: outcome.ErrorMessage },
      Result: '',
      MemberId: info.ScannedUserInformation.MemberId,
      EventId: info.EventId,
      MilestoneId: milestone?.MilestoneRef ?? '0',
      MilestoneRef: milestone?.MilestoneRef ?? '',
      MilestoneName: name,
      RowAllocation: attendee ? row : '',
      SeatingPlanName: attendee && milestone ? milestoneVenue(milestone) : '',
      PriorCheckIns: wireList(prior),
      UserRole: attendee?.UserRole ?? '',
      GuestRole: attendee?.GuestRole ?? '',
      Tag: attendee?.Tag ?? '',
      Seats: wireList(row !== '' ? [{ MilestoneName: name, SeatAllocation: row }] : []),
      ScanDate: nowUtc(),
    },
  };
}

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_AdminMilestoneDetail/DataActionGet_MilestoneInformation', (inputs) => {
    const milestone =
      scenario() === 'empty' ? undefined : findMilestone(inputs.In_EventId ?? '', inputs.In_MilestoneId ?? '');
    const answer: MilestoneInformationWire = {
      HasQRCode: scenario() === 'noqrcode' ? false : milestone !== undefined,
      OrbitMilestoneType: milestone ? { ...EMPTY_ADMIN_MILESTONE_TYPE, ...milestone.type } : EMPTY_ADMIN_MILESTONE_TYPE,
    };
    return answer;
  }),
  statefulHandler(MODULE, 'ActionGetScanMilestoneQRCode', (inputs) => {
    const info = (inputs as unknown as ScanMilestoneQRCodeInputsWire).ScannedQRCodeInfo;
    const memberId = info.ScannedUserInformation.MemberId;
    const milestone = findMilestone(info.EventId, info.MilestoneId);
    const attendee = orbitAdminAttendees(info.EventId).find((a) => a.member.Id === memberId);
    if (scenario() === 'notallocated' || !attendee || !milestone)
      return checkInAnswer(scanOutcome('apiFailure', API_NOT_ALLOCATED), info, milestone, attendee);
    const key = `${milestone.MilestoneId}:${memberId}`;
    const previous = checkIns().get(key);
    if (previous)
      return checkInAnswer(scanOutcome('localDuplicate'), info, milestone, attendee, [
        {
          MilestoneId: milestone.MilestoneId,
          MilestoneRef: milestone.MilestoneRef,
          MilestoneName: milestone.MilestoneName,
          CheckInDateTimeUTC: String(previous.CheckInDateTimeUTC),
        },
      ]);
    checkIns().upsert({
      Id: key,
      MilestoneId: milestone.MilestoneId,
      MemberId: memberId,
      CheckInDateTimeUTC: nowUtc(),
    });
    return checkInAnswer(scanOutcome('checkedIn'), info, milestone, attendee);
  }),
];
