import type { ActionOutputs, PathOf } from '../../lib/api';

/* Wire shapes of the route's calls (analysis/calls.md; contract src/api/openapi.yaml). Long Integers stay text. */
export type GetEventByEventIdWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_EventDetail_V2/DataActionGetEventByEventId'>
>;
export type GetCoordinatorDetailsWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_EventDetail_V2/DataActionGetCoordinatorDetails'>
>;
export type GetHouseholdCoordinatesWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ActionGetHouseholdCoordinates'>
>;

/** Host_V2 (Connect2_OrbitMobile_IS): the host household and the meal (EventDate is Text, read with TextToDate). */
export type EventHost = GetEventByEventIdWire['EventResponse']['Host'];
/** DetailGuestItem_V2 (Connect2_OrbitMobile_IS): one guest household of the meal. */
export type DetailGuestItem = GetEventByEventIdWire['EventResponse']['Guests']['List'][number];
/** SpecialNeedsItem_LDM_V2 (Connect2_OrbitMobile_IS): one special need of a guest. */
export type SpecialNeedsItem = GetEventByEventIdWire['EventResponse']['SpecialNeeds']['Diet']['List'][number];

/** GetEventCalendarDetailResponse_V2 with its lists unwrapped. */
export interface EventDetail {
  Host: EventHost;
  Guests: DetailGuestItem[];
  SpecialNeeds: { Diet: SpecialNeedsItem[]; Mobility: SpecialNeedsItem[]; Other: SpecialNeedsItem[] };
}

/** GetEventByEventId outputs. */
export interface EventByEventIdData {
  eventResponse: EventDetail;
  hasContent: boolean;
}

/** GetCoordinatorDetailsResponse (Connect2_OrbitMobile_IS), the record inside Out_CoordinatorDetails (HostDetails). */
export type CoordinatorDetails = GetCoordinatorDetailsWire['Out_CoordinatorDetails']['GetCoordinatorDetailsResponse'];

/** GetCoordinatorDetails outputs (EventName is not read by the screen). */
export interface CoordinatorDetailsData {
  coordinatorDetails: CoordinatorDetails;
  hasContent: boolean;
}

/** Directory_Coordinates (APIDomain_Directory_IS): GetHouseholdCoordinates.Response. */
export type HouseholdCoordinates = GetHouseholdCoordinatesWire['Response'];
