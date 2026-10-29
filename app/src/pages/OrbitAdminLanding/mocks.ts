import type { RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { contractHandler } from '@/mocks/contract';
import { orbitAdminEvents, type OrbitAdminEvent } from '@/mocks/fictional/orbitAdmin';
import { scenario } from '@/mocks/scenario';
import { wireList } from '@/lib/os-wire';

/** The answer of DataActionGet_AdminEventsList, as the API contract types it (src/api/openapi.yaml). */
type Get_AdminEventsListWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_AdminLanding/DataActionGet_AdminEventsList'>
>;

/** GetAdminOrbitEvents_ScreenRec: OrbitSummaryItem (AdminOrbitSummaryItemRec) + OrbitEventType. */
type AdminOrbitEventsWire = Get_AdminEventsListWire['Response']['List'][number];

/* Mocks of OrbitAdminLanding (P-MOCKS), on the fictional Orbit admin world (src/mocks/fictional/orbitAdmin.ts). The
   action was not recorded with data: TST's full-permission account has no admin event (Response.List empty,
   analysis/calls.md § DataActionGet_AdminEventsList).
   - Get_AdminEventsList: the three events the signed-in admin scans QR codes at, in the captured row shape
     (GetAdminOrbitEvents_ScreenRec).
   - GetMilestoneScanFF: a card click calls it (TST publish of 2026-10-27, OrbitAdminLanding.mvc.js:218-227; the
     server action of Connect2_OrbitMobile_BL, also called by OrbitAdminMilestones). IsScanPerMilestone false, the live
     TST value (probe 2026-10-28): the card opens OrbitAdminEventDetail. True only in the scenario `scanpermilestone`
     (OrbitAdminMilestones Q1): the card opens OrbitAdminMilestones, and a milestone card OrbitAdminMilestoneDetail.
   contractHandler: the answers are checked against the API contract at compile time.
   Scenarios: real (three admin events); noadminevents (TST's captured account: no admin event, NoInformation_Orbit;
   Q1); scanpermilestone (GetMilestoneScanFF true); empty; loading (never answers: skeleton); error (HTTP 500: the
   offline capture's Service Interruption). */

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
    IsScanPerMilestone: scenario() === 'scanpermilestone',
  })),
];
