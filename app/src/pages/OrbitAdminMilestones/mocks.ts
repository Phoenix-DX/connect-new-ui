import type { RequestHandler } from 'msw';
import type { AdminMilestoneListWire, AdminMilestoneRowWire } from '@/api/event';
/* The value comes from its module, not from the barrel (as the mocks of OrbitAdminMilestoneDetail). */
import { EMPTY_ADMIN_MILESTONE_TYPE } from '@/api/event/adminMilestoneDetail';
import { contractHandler } from '@/mocks/contract';
import { orbitAdminMilestones, type OrbitAdminMilestone } from '@/mocks/fictional/orbitAdminMilestones';
import { scenario } from '@/mocks/scenario';
import { wireList } from '@/lib/os-wire';

/* Mocks of OrbitAdminMilestones (P-MOCKS), on the fictional Orbit admin world (src/mocks/fictional/
   orbitAdminMilestones.ts). Not captured (user decision I10-3 (a)).
   - Get_AdminMilestoneList: the milestones of the EventId that the call sends: seven around today for event 7301,
     none for the other events (NoInformation_Orbit). A contractHandler (the operation came with the regeneration of
     I10-6); the milestone type is the default OrbitMilestoneTypeRec with the fictional type values.
   - GetMilestoneScanFF: in the mocks of OrbitAdminLanding (the owner screen of the contract operation); false, as
     TST, except in the scenario `scanpermilestone` (true: a milestone card opens OrbitAdminMilestoneDetail).
   Scenarios: real; empty (no milestone: NoInformation_Orbit); loading (never answers: skeleton); error (HTTP 500);
   scanpermilestone (see above). */

/** A milestone as a row of GetAdminOrbitMilestone_Screen (AdminMilestoneRec + OrbitMilestoneTypeRec). */
export const adminMilestoneRow = (m: OrbitAdminMilestone): AdminMilestoneRowWire => ({
  OrbitAdminMilestone: {
    MilestoneId: m.MilestoneId,
    MilestoneRef: m.MilestoneRef,
    MilestoneType: m.type.Id,
    EventId: m.EventId,
    MilestoneName: m.MilestoneName,
    Description: m.Description,
    EventDate: m.EventDate,
    StartDate: m.StartDate,
    EndDate: m.EndDate,
    StartDateUTC: m.StartDate,
    EndDateUTC: m.EndDate,
    SequenceNo: m.SequenceNo,
    TimeZoneId: 'America/Argentina/Buenos_Aires',
    LocalityId: m.LocalityId,
    LocalityName: m.LocalityName,
    IsAllocated: false,
    AllocatedGuestCount: '0',
  },
  OrbitMilestoneType: { ...EMPTY_ADMIN_MILESTONE_TYPE, ...m.type },
});

export function adminMilestoneListAnswer(eventId: string, today: Date = new Date()): AdminMilestoneListWire {
  if (scenario() === 'empty') return { Response: wireList([]) };
  return { Response: wireList(orbitAdminMilestones(eventId, today).map(adminMilestoneRow)) };
}

export const handlers: RequestHandler[] = [
  contractHandler(
    'Connect2_OrbitMobile_MUI',
    'ScreenBlock_AdminMilestones/DataActionGet_AdminMilestoneList',
    (inputs) => adminMilestoneListAnswer(inputs.EventId ?? ''),
  ),
];
