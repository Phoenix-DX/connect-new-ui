import { callAction } from '../../lib/api';
import { osDate, osList, osNumber } from '../../lib/os-wire';
import type {
  EventsByMemberIdResult,
  EventsSummaryItem,
  HouseholdMember,
  HouseholdMemberWire,
  OrbitEventsSummaryWire,
  OrbitLandingVariablesWire,
} from './types';

/** Module and owner of both data actions (screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/
    ScreenBlock_OrbitLanding/…). */
const MODULE = 'Connect2_OrbitMobile_MUI';

export const toHouseholdMember = (w: HouseholdMemberWire): HouseholdMember => ({
  memberId: w.MemberId,
  firstName: w.FirstName,
  isSelected: w.IsSelected,
});

/** GetOrbitEventsSummary_ScreenRec → the record of its card (typeConvertRecord of the view, ScreenBlock_OrbitLanding
    .mvc.js :566-575 Milestone_ScreenRec, :612-620 Event_ScreenRec); null dates (1900-01-01) become ''. */
export function toEventsSummaryItem(w: OrbitEventsSummaryWire): EventsSummaryItem {
  const item = w.OrbitSummaryItem;
  const isMilestone = w.OrbitMilestoneType.Id !== '';
  const date = (value: string) => osDate(value) ?? '';
  const milestoneInfo = {
    ...item.MilestoneInfo,
    MilestoneStartDateTime: date(item.MilestoneInfo.MilestoneStartDateTime),
    MilestoneEndDateTime: date(item.MilestoneInfo.MilestoneEndDateTime),
  };
  const eventInfo = {
    ...item.EventInfo,
    StartEventDate: date(item.EventInfo.StartEventDate),
    EndEventDate: date(item.EventInfo.EndEventDate),
  };
  return {
    isMilestone,
    sequenceNo: osNumber(item.SequenceNo),
    endDateTime: isMilestone ? osDate(item.MilestoneInfo.MilestoneEndDateTime) : osDate(item.EventInfo.EndEventDate),
    event: {
      EventId: item.EventId,
      Type: item.Type,
      Title: item.Title,
      OrbitEventType: w.OrbitEventType,
      EventInfo: eventInfo,
    },
    milestone: {
      MilestoneId: item.MilestoneId,
      Type: item.Type,
      Title: item.Title,
      OrbitMilestoneType: w.OrbitMilestoneType,
      MilestoneInfo: milestoneInfo,
    },
  };
}

/** DataActionGet_HouseholdMembers (data action of ScreenBlock_OrbitLanding, on demand: Refresh_GetHouseholdMembers,
    ctrl :1895-1929; captured call 2, phase load). The block variables travel as screenData.variables. */
export async function getHouseholdMembers(vars: OrbitLandingVariablesWire): Promise<HouseholdMember[]> {
  const out = await callAction(MODULE, 'ScreenBlock_OrbitLanding/DataActionGet_HouseholdMembers', vars);
  return osList(out.Response).map(toHouseholdMember);
}

/** DataActionGet_EventsByMemberId (on demand: Refresh_GetEventsByMemberId, ctrl :1007-1040; captured call 3, phase
    load, and again on a household member click). The server reads SelectedMemberId from the block variables. */
export async function getEventsByMemberId(vars: OrbitLandingVariablesWire): Promise<EventsByMemberIdResult> {
  const out = await callAction(MODULE, 'ScreenBlock_OrbitLanding/DataActionGet_EventsByMemberId', vars);
  return {
    events: osList(out.Response).map(toEventsSummaryItem),
    yearFilter: osList(out.YearFilter).map((y) => ({ year: y.Year, isSelected: y.IsSelected, count: y.Count })),
  };
}
