import type { ActionOutputs, PathOf } from '@/api/client/callAction';

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

/* ---- Domain (components) ----
   The block variables that both data actions send, one row of EventsSummary (an event or a milestone, as the record
   that its card takes), a year of the Filters popup and the outputs of DataActionGet_EventsByMemberId are domain types
   of api/event; this module keeps the names that the screen uses. */
export type { EventsSummaryItem, OrbitLandingCallInputs as OrbitLandingVariablesWire, YearItem } from '@/api/event';

/** A household member of the selection bar. */
export interface HouseholdMember {
  memberId: string;
  firstName: string;
  isSelected: boolean;
}
