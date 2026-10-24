import type { AdminEventItem, AdminEventsCallInputs, Event_Screen } from '@/api/event';

/** The variables of ScreenBlock_AdminLanding, the reducer and the client actions. Pure; the flows are in
    useAdminLanding.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding */

/** The Long Integer null identifier (Long Integers stay text). */
export const NULL_ID = '0';

/** The variables of the block and the fetch state of Get_AdminEventsList that the view reads. */
export interface AdminLandingState {
  /** IsFetchingData: the skeleton shows. */
  isFetchingData: boolean;
  /** EventsSummary: the admin events (Get_AdminEventsList.Response). */
  eventsSummary: AdminEventItem[];
  /** UserFirstName: the header text. */
  userFirstName: string;
  /** UserMemberId: a Long Integer as text. */
  userMemberId: string;
  /** Get_AdminEventsList.IsDataFetched. */
  isDataFetched: boolean;
}

/** An assignment of one or more variables. */
export type AdminLandingPatch = Partial<AdminLandingState>;

/** The variables after OnInitialize (the block has no OnInitialize: the defaults). */
export const INITIAL_ADMIN_LANDING_STATE: AdminLandingState = {
  isFetchingData: false,
  eventsSummary: [],
  userFirstName: '',
  userMemberId: NULL_ID,
  isDataFetched: false,
};

/** The variables after an assignment. */
export const adminLandingReducer = (state: AdminLandingState, patch: AdminLandingPatch): AdminLandingState => ({
  ...state,
  ...patch,
});

/** The block variables that Get_AdminEventsList sends. */
export const adminEventsCallInputsOf = (state: AdminLandingState): AdminEventsCallInputs => ({
  IsFetchingData: state.isFetchingData,
  UserFirstName: state.userFirstName,
  UserMemberId: state.userMemberId,
});

/** OnReady ran on this view: it is fetching, or it fetched. A view that the view cache restores in this state keeps
    it, and OnReady does nothing (WasCurrentViewRestoredFromCache). */
export const hasStarted = (state: AdminLandingState): boolean => state.isFetchingData || state.isDataFetched;

/** TextToLongIntegerValidate(MemberId) ? TextToLongInteger(MemberId) : NullIdentifier(). */
export const textToLongIntegerOrNull = (value: string): string =>
  /^\s*-?\d+\s*$/.test(value) ? String(BigInt(value)) : NULL_ID;

/** The arguments of the block event NavigateTo_EventDetail. DateTimes as on the wire. */
export interface EventDetailTarget {
  eventId: string;
  eventName: string;
  eventStartDate: string;
  eventEndDate: string;
  eventLocation: string;
  eventTypeFriendly: string;
}

/** OnHandle_EventCardClicked: the event of NavigateTo_EventDetail from the clicked card and the TypeFriendly of its
    row. */
export function eventDetailTargetOf(eventSummary: Event_Screen, eventTypeFriendly: string): EventDetailTarget {
  const eventInfo = eventSummary.EventInfo ?? {};
  return {
    eventId: eventSummary.EventId ?? NULL_ID,
    eventName: eventSummary.Title ?? '',
    eventStartDate: eventInfo.StartEventDate ?? '',
    eventEndDate: eventInfo.EndEventDate ?? '',
    eventLocation: eventInfo.EventLocation ?? '',
    eventTypeFriendly,
  };
}

/** AuditPayload_ClickEventRec (Connect2_OrbitMobile_MUI): what OnHandle_EventCardClicked records about the clicked
    event. DateTimes as on the wire. */
export interface AuditPayload_ClickEvent {
  EventId: string;
  EventTitle: string;
  EventLocation: string;
  EventStartDate: string;
  EventEndDate: string;
}

/** OnHandle_EventCardClicked: the audit payload of the clicked card. */
export function clickEventPayloadOf(eventSummary: Event_Screen): AuditPayload_ClickEvent {
  const eventInfo = eventSummary.EventInfo ?? {};
  return {
    EventId: eventSummary.EventId ?? NULL_ID,
    EventTitle: eventSummary.Title ?? '',
    EventLocation: eventInfo.EventLocation ?? '',
    EventStartDate: eventInfo.StartEventDate ?? '',
    EventEndDate: eventInfo.EndEventDate ?? '',
  };
}
