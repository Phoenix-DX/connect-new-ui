import type { AdminMilestonesCallInputs, Milestone_Screen } from '@/api/event';
import { OS_NULL_DATE, OS_NULL_DATE_TIME } from '@/lib/osDateTime';
import type { OsParams } from '@/platform/navigation';

/** The variables of ScreenBlock_AdminMilestones, the reducer and the client actions. Pure; the flows are in
    useAdminMilestones.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestones */

/** The Long Integer null identifier (Long Integers stay text). */
const NULL_ID = '0';

/** The variables of the block and the fetch state of Get_AdminMilestoneList that the view reads. */
export interface AdminMilestonesState {
  /** IsFetchingData: the skeleton shows. */
  isFetchingData: boolean;
  /** Milestones: Get_AdminMilestoneList.Response as Milestone_Screen records. */
  milestones: Milestone_Screen[];
  /** UserFirstName: the header text. */
  userFirstName: string;
  /** UserMemberId: a Long Integer as text. */
  userMemberId: string;
  /** Get_AdminMilestoneList.IsDataFetched. */
  isDataFetched: boolean;
}

/** The variables after OnInitialize (the block has no OnInitialize: the defaults). */
export const INITIAL_ADMIN_MILESTONES_STATE: AdminMilestonesState = {
  isFetchingData: false,
  milestones: [],
  userFirstName: '',
  userMemberId: NULL_ID,
  isDataFetched: false,
};

/** The variables after an assignment. */
export const adminMilestonesReducer = (
  state: AdminMilestonesState,
  patch: Partial<AdminMilestonesState>,
): AdminMilestonesState => ({ ...state, ...patch });

/** The block variables and the input EventId that Get_AdminMilestoneList sends. */
export const adminMilestonesCallInputsOf = (
  state: AdminMilestonesState,
  eventId: string,
): AdminMilestonesCallInputs => ({
  IsFetchingData: state.isFetchingData,
  UserFirstName: state.userFirstName,
  UserMemberId: state.userMemberId,
  EventId: eventId,
});

/** TextToLongIntegerValidate(MemberId) ? TextToLongInteger(MemberId) : NullIdentifier(). */
export const memberIdOrNull = (value: string): string =>
  /^\s*-?\d+\s*$/.test(value) ? String(BigInt(value)) : NULL_ID;

/** Handler_ClickedMilestone: ErrorMessage = "Identifier" when the milestone has no MilestoneId, else "". */
export const missingDataOf = (milestone: Milestone_Screen): string =>
  (milestone.MilestoneId ?? '') === '' ? 'Identifier' : '';

/** The feedback message of Handler_ClickedMilestone when data is missing (Info). */
export const missingDataMessage = (errorMessage: string): string =>
  `Cannot proceed to scan because there is missing data.\r\nMissing data: ${errorMessage}`;

/** The arguments of the block event NavigateTo_MilestoneDetail. DateTimes as on the wire. */
export interface MilestoneDetailTarget {
  eventId: string;
  milestoneId: string;
  milestoneName: string;
  milestoneDate: string;
  milestoneDescription: string;
  milestoneStartDate: string;
  milestoneEndDate: string;
}

/** Handler_ClickedMilestone: the event arguments from the input EventId and the clicked row. */
export function milestoneDetailTargetOf(eventId: string, milestone: Milestone_Screen): MilestoneDetailTarget {
  const info = milestone.MilestoneInfo ?? {};
  return {
    eventId,
    milestoneId: milestone.MilestoneId ?? '',
    milestoneName: milestone.Title ?? '',
    milestoneDate: milestone.MilestoneDateTime ?? '',
    milestoneDescription: info.Description ?? '',
    milestoneStartDate: info.MilestoneStartDateTime ?? '',
    milestoneEndDate: info.MilestoneEndDateTime ?? '',
  };
}

/** A DateTime screen input as the original puts it in the URL (ServerDataConverter.asString): the null date gives
    "1900-01-01T00:00:00", any other value the toISOString() of the instant. The Orbit DateTimes are UTC wire values,
    so the instant is the wire value itself. */
const wireDateTimeParam = (value: string): string =>
  value === '' || value.startsWith(OS_NULL_DATE) ? OS_NULL_DATE_TIME : new Date(value).toISOString();

/** The inputs of OrbitAdminMilestoneDetail, in the order of the original URL (OrbitAdminMilestones.mvc.js:286-294). */
export const milestoneDetailParams = (target: MilestoneDetailTarget): OsParams => ({
  In_MilestoneDate: wireDateTimeParam(target.milestoneDate),
  In_MilestoneEndDate: wireDateTimeParam(target.milestoneEndDate),
  In_MilestoneName: target.milestoneName,
  In_MilestoneId: target.milestoneId,
  In_MilestoneDescription: target.milestoneDescription,
  In_EventId: target.eventId,
  In_MilestoneStartDate: wireDateTimeParam(target.milestoneStartDate),
});
