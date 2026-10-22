import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import type { DayFilter, Milestone_Screen } from '@/shared/Connect2_OrbitMobile_MUI/lib/structures';

/* ---- Wire shapes (api.ts and mocks.ts only) ----
   The four data actions of ScreenBlock_EventDetail, typed by the API contract (ScreenBlock_EventDetail.mvc.js model
   :1-110; captured shapes analysis/calls.md § DataActionGet_EventDetails / _HostSurveyStatus / _HasDocuments /
   _HasQRCode). */

/** Endpoint of a data action of ScreenBlock_EventDetail (screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/
    ScreenBlock_EventDetail/<action>). */
type EventDetailPath<A extends string> = PathOf<'Connect2_OrbitMobile_MUI', `ScreenBlock_EventDetail/${A}`>;

export type Get_EventDetailsWire = ActionOutputs<EventDetailPath<'DataActionGet_EventDetails'>>;
export type Get_HostSurveyStatusWire = ActionOutputs<EventDetailPath<'DataActionGet_HostSurveyStatus'>>;
export type Get_HasDocumentsWire = ActionOutputs<EventDetailPath<'DataActionGet_HasDocuments'>>;
export type Get_HasQRCodeWire = ActionOutputs<EventDetailPath<'DataActionGet_HasQRCode'>>;

/** GetEventDetailScreenRec (Connect2_OrbitMobile_BL). */
export type EventDetailScreenWire = Get_EventDetailsWire['Response'];
/** Milestone_ScreenRec as it travels. */
export type MilestoneWire = EventDetailScreenWire['Milestones']['List'][number];
/** DateFilterRec. */
export type DateFilterWire = Get_EventDetailsWire['Response_DateFilters'];

/** The block variables OutSystems sends with the four data actions (screenData.variables, calls.md). The record and
    list variables that echo the client state (EventDetails, DateFilters, HostAllocation) are left out, as in the other
    routes' data actions (the contract makes every variable optional). */
export type EventDetailVariablesWire = Required<
  Pick<
    ActionInputs<EventDetailPath<'DataActionGet_EventDetails'>>,
    | 'IsFetchingData'
    | 'HasQRCode'
    | 'HasScanned'
    | 'HasDocuments'
    | 'IsEventUnavailable'
    | 'UserInformation'
    | 'In_MemberId'
    | 'In_EventId'
    | 'In_EventName'
    | 'In_FromNotification'
  >
>;

/* ---- Domain (components) ---- */

/** The screen inputs (query string, original names). Long Integers stay text. */
export interface EventDetailInputs {
  In_MemberId: string;
  In_EventId: string;
  In_EventName: string;
  In_FromNotification: boolean;
}

/** GetEventDetailScreenRec as the block uses it. Dates stay OutSystems DateTimes ("" = null date). */
export interface EventDetails {
  EventId: string;
  MemberId: string;
  /** OrbitEventType identifier ('event-host', …): Is Event Host? */
  EventType: string;
  EventName: string;
  EventStartDate: string;
  EventEndDate: string;
  Location: string;
  TypeOfEvent: string;
  IsBookletVisible: boolean;
  SetUpMeals: boolean;
  Meals: boolean;
  Accommodations: boolean;
  Helpers: boolean;
  Transport: boolean;
  GuestTransport: boolean;
  OrbitEventType: { Id: string; Type: string };
  Milestones: Milestone_Screen[];
}

/** DateFilterRec: the before / after edges and the days of the itinerary. */
export interface DateFilters {
  HasBefore: boolean;
  HasAfter: boolean;
  DayFilterList: DayFilter[];
}

export interface EventDetailsResult {
  response: EventDetails;
  dateFilters: DateFilters;
  isNullResponse: boolean;
}

/** UserInformation (LongIntegerLongIntegerLongIntegerRecord): the ids OnReady reads from the cached user. */
export interface UserIds {
  userMemberId: string;
  householderId: string;
  spouseMemberId: string;
}

/** LocalSurveyStatus record (local entity of Connect2_OrbitMobile_MUI, synced by the shell's app start). */
export type { LocalSurveyStatus } from '@/platform/storage/localEntities';
