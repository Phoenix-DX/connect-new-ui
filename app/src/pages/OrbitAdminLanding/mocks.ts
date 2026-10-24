import type { RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { contractHandler } from '@/mocks/contract';
import { ORBIT_ADMIN_SCAN_PER_MILESTONE, orbitAdminEvents, type OrbitAdminEvent } from '@/mocks/fictional/orbitAdmin';
import { scenario } from '@/mocks/scenario';
import { wireList } from '@/legacy/os/os-wire';

/** The answer of DataActionGet_AdminEventsList, as the API contract types it (src/api/openapi.yaml). */
type Get_AdminEventsListWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_AdminLanding/DataActionGet_AdminEventsList'>
>;

/** GetAdminOrbitEvents_ScreenRec: OrbitSummaryItem (AdminOrbitSummaryItemRec) + OrbitEventType. */
type AdminOrbitEventsWire = Get_AdminEventsListWire['Response']['List'][number];

/* Mocks of OrbitAdminLanding (P-MOCKS), on the fictional Orbit admin world (src/mocks/fictional/orbitAdmin.ts). Neither
   action was recorded with data: TST's full-permission account has no admin event (Response.List empty,
   analysis/calls.md § DataActionGet_AdminEventsList) and GetMilestoneScanFF runs only on a card click.
   - Get_AdminEventsList: the three events the signed-in admin scans QR codes at, in the captured row shape
     (GetAdminOrbitEvents_ScreenRec).
   - GetMilestoneScanFF: IsScanPerMilestone False (Q2), so a card opens OrbitAdminEventDetail.
   contractHandler: the answers are checked against the API contract at compile time.
   Scenarios: real (three admin events); noadminevents (TST's captured account: no admin event, NoInformation_Orbit;
   Q1); scanpermilestone (IsScanPerMilestone True: a card opens OrbitAdminMilestones, Q2); empty; loading (never
   answers: skeleton); error (HTTP 500: the offline capture's Service Interruption). */

/** An admin event as a row of GetAdminOrbitEvents_Screen (AdminOrbitSummaryItemRec + OrbitEventTypeRec). */
const adminEventRow = (e: OrbitAdminEvent): AdminOrbitEventsWire => ({
  OrbitSummaryItem: {
    EventId: e.EventId,
    Type: e.Type,
    Title: e.Title,
    TypeFriendly: e.TypeFriendly,
    DateTime: e.StartEventDate,
    SequenceNo: e.SequenceNo,
    EventInfo: { StartEventDate: e.StartEventDate, EndEventDate: e.EndEventDate, EventLocation: e.EventLocation },
  },
  OrbitEventType: { ...e.EventType },
});

export function adminEventsListAnswer(today: Date = new Date()): Get_AdminEventsListWire {
  if (scenario() === 'noadminevents') return { Response: wireList([]) };
  return { Response: wireList(orbitAdminEvents(today).map(adminEventRow)) };
}

export const handlers: RequestHandler[] = [
  contractHandler('Connect2_OrbitMobile_MUI', 'ScreenBlock_AdminLanding/DataActionGet_AdminEventsList', () =>
    adminEventsListAnswer(),
  ),
  contractHandler('UBTConnect', 'ActionGetMilestoneScanFF', () => ({
    IsScanPerMilestone: scenario() === 'scanpermilestone' ? true : ORBIT_ADMIN_SCAN_PER_MILESTONE,
  })),
];
