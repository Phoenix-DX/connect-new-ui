import { callAction, type ActionOutputs, type PathOf } from '@/api/client/callAction';
import type { Milestone_Screen } from './types';

/* The two calls of OrbitAdminMilestones (TST publish of 2026-10-27): the data action Get_AdminMilestoneList of the
   block ScreenBlock_AdminMilestones and the server action GetMilestoneScanFF (module Connect2_OrbitMobile_BL), a screen
   action of OrbitAdminLanding and of OrbitAdminMilestones. Own file, as notification/notificationDetail.ts: the barrel
   re-exports it.
   Both operations come from the contract (Get_AdminMilestoneList since the regeneration of I10-6).
   @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones */

/** Output of DataActionGet_AdminMilestoneList: Response, a list of GetAdminOrbitMilestone_ScreenRec
    (Connect2_OrbitMobile_BL). */
export type AdminMilestoneListWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_AdminMilestones/DataActionGet_AdminMilestoneList'>
>;

/** One row of Response: OrbitAdminMilestone (AdminMilestoneRec of Connect2_OrbitMobile_IS) and OrbitMilestoneType. */
export type AdminMilestoneRowWire = AdminMilestoneListWire['Response']['List'][number];

/** The block variables that Get_AdminMilestoneList sends (screenData.variables), without the list Milestones, as the
    captured Get_AdminEventsList call of ScreenBlock_AdminLanding. */
export interface AdminMilestonesCallInputs {
  IsFetchingData: boolean;
  UserFirstName: string;
  /** Long Integer as text. */
  UserMemberId: string;
  /** Long Integer as text. */
  EventId: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

/** DateTimeToDate of a wire DateTime: the local date ("yyyy-MM-dd") of the instant; the null date stays null. */
export const dateTimeToDate = (value: string): string => {
  if (value === '' || value.startsWith('1900-01-01')) return '1900-01-01';
  const d = new Date(value);
  return `${String(d.getFullYear())}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

/** OnAfterFetch_Get_AdminMilestoneList: Milestones = the Response as Milestone_Screen records. */
export const toAdminMilestones = (wire: AdminMilestoneListWire): Milestone_Screen[] =>
  wire.Response.List.map(({ OrbitAdminMilestone: m, OrbitMilestoneType: type }) => ({
    MilestoneId: m.MilestoneRef,
    Type: type.Type,
    Title: m.MilestoneName,
    MilestoneDateTime: m.EventDate,
    SequenceNo: m.SequenceNo,
    DateForFilter: dateTimeToDate(m.EventDate),
    OrbitMilestoneType: type,
    MilestoneInfo: {
      MilestoneStartDateTime: m.StartDate,
      MilestoneEndDateTime: m.EndDate,
      Description: m.Description,
    },
  }));

/** DataActionGet_AdminMilestoneList of ScreenBlock_AdminMilestones (on demand: Refresh_GetMilestonesByEventId). */
export async function fetchAdminMilestones(inputs: AdminMilestonesCallInputs): Promise<Milestone_Screen[]> {
  const wire = await callAction(
    'Connect2_OrbitMobile_MUI',
    'ScreenBlock_AdminMilestones/DataActionGet_AdminMilestoneList',
    { ...inputs },
  );
  return toAdminMilestones(wire);
}

/** The server action GetMilestoneScanFF (Connect2_OrbitMobile_BL): IsScanPerMilestone, the feature flag of the scan
    per milestone. A server action (R2): the flows do not wrap it. */
export async function getMilestoneScanFF(): Promise<boolean> {
  const outputs = await callAction('UBTConnect', 'ActionGetMilestoneScanFF', {});
  return outputs.IsScanPerMilestone;
}
