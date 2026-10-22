import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import type { Event_Screen, Milestone_Screen } from '../../shared/Connect2_OrbitMobile_MUI/lib/structures';

/* ---- Wire shapes (api.ts and mocks.ts only) ----
   The two data actions of ScreenBlock_OrbitLanding, typed by the API contract (CR-OrbitLanding-1;
   ScreenBlock_OrbitLanding.mvc.js model :1-40; captured shapes analysis/calls.md § DataActionGet_HouseholdMembers /
   DataActionGet_EventsByMemberId). */

/** Endpoint of a data action of ScreenBlock_OrbitLanding (screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/
    ScreenBlock_OrbitLanding/<action>). */
type OrbitLandingPath<A extends string> = PathOf<'Connect2_OrbitMobile_MUI', `ScreenBlock_OrbitLanding/${A}`>;

export type Get_HouseholdMembersWire = ActionOutputs<OrbitLandingPath<'DataActionGet_HouseholdMembers'>>;
export type Get_EventsByMemberIdWire = ActionOutputs<OrbitLandingPath<'DataActionGet_EventsByMemberId'>>;

/** GetHouseholdMembersResponse_Screen record. MemberId is a Long Integer (text). */
export type HouseholdMemberWire = Get_HouseholdMembersWire['Response']['List'][number];

/** GetOrbitEventsSummary_ScreenRec: an event row has the MilestoneId empty and MilestoneInfo dates at 1900-01-01; a
    milestone row the reverse. */
export type OrbitEventsSummaryWire = Get_EventsByMemberIdWire['Response']['List'][number];
export type OrbitSummaryItemWire = OrbitEventsSummaryWire['OrbitSummaryItem'];

/** The block variables OutSystems sends with both data actions (screenData.variables; analysis/calls.md). The list
    and record variables (HouseholdMembersList, EventsSummary, YearsSelection, PopupMeasurements) echo the client
    state and are left out, as in the other routes' data actions (the contract makes every variable optional). */
export type OrbitLandingVariablesWire = Required<
  Pick<
    ActionInputs<OrbitLandingPath<'DataActionGet_EventsByMemberId'>>,
    | 'SelectedMemberId'
    | 'IsFetchingData'
    | 'EventFilter'
    | 'SortEventsASC'
    | 'Popup_SortByOpened'
    | 'Popup_FiltersOpened'
    | 'CurrentMemberId'
  >
>;

/* ---- Domain (components) ---- */

/** A household member of the selection bar. */
export interface HouseholdMember {
  memberId: string;
  firstName: string;
  isSelected: boolean;
}

/** One row of EventsSummary: an event or a milestone, already converted to the record its card takes (the view's
    typeConvertRecord, ScreenBlock_OrbitLanding.mvc.js view :566-575 and :612-620). Dates are null when OutSystems
    has its null date. */
export interface EventsSummaryItem {
  /** OrbitMilestoneType.Id <> NullTextIdentifier() (view :562). */
  isMilestone: boolean;
  sequenceNo: number;
  /** End of the row for the Upcoming / Past filter: MilestoneEndDateTime of a milestone, EndEventDate of an event. */
  endDateTime: string | null;
  event: Event_Screen;
  milestone: Milestone_Screen;
}

/** A year of the Filters popup. */
export interface YearItem {
  year: string;
  isSelected: boolean;
  count: number;
}

export interface EventsByMemberIdResult {
  events: EventsSummaryItem[];
  yearFilter: YearItem[];
}
