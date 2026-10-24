import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/* ---- Wire shapes (mocks.ts only) ----
   DataActionGet_EventDetails of ScreenBlock_EventDetail, typed by the API contract (captured shape: analysis/calls.md
   § DataActionGet_EventDetails). */

export type Get_EventDetailsWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_EventDetail/DataActionGet_EventDetails'>
>;
/** Milestone_ScreenRec as it travels. */
export type MilestoneWire = Get_EventDetailsWire['Response']['Milestones']['List'][number];

/* ---- Domain (components) ----
   The block variables that the four data actions send, the event (GetEventDetailScreenRec, dates "" for the null
   date), the date filters (DateFilterRec) and the outputs of DataActionGet_EventDetails are domain types of api/event;
   this module keeps the names that the screen uses. */
export type {
  EventDateFilters as DateFilters,
  EventDetailCallInputs as EventDetailVariablesWire,
  EventDetailScreen as EventDetails,
} from '@/api/event';

/** The screen inputs (query string, original names). Long Integers stay text. */
export interface EventDetailInputs {
  In_MemberId: string;
  In_EventId: string;
  In_EventName: string;
  In_FromNotification: boolean;
}

/** UserInformation (LongIntegerLongIntegerLongIntegerRecord): the ids OnReady reads from the cached user. */
export interface UserIds {
  userMemberId: string;
  householderId: string;
  spouseMemberId: string;
}

/** LocalSurveyStatus record (local entity of Connect2_OrbitMobile_MUI, synced by the shell's app start). */
export type { LocalSurveyStatus } from '@/platform/storage/localEntities';
