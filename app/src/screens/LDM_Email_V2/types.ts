import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';

/* Wire shapes of the route's calls (contract src/api/openapi.yaml; not captured). Long Integers stay text. */
export type GetCoordinatorDetailsWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_Event_Email_V2/DataActionGetCoordinatorDetails'>
>;

/** GetCoordinatorDetailsResponse (Connect2_OrbitMobile_IS), the record inside Out_CoordinatorDetails (HostDetails). */
export type CoordinatorDetails = GetCoordinatorDetailsWire['Out_CoordinatorDetails']['GetCoordinatorDetailsResponse'];

/** GetCoordinatorDetails outputs the block reads (B :1125-1211, view :296-410). */
export interface CoordinatorDetailsData {
  coordinatorDetails: CoordinatorDetails;
  hasContent: boolean;
  eventName: string;
  /** DateToText(DateTimeToDate(GetCoordinatorDetailsResponse.EventDate)): "YYYY-MM-DD" ("1900-01-01" for the null date,
      as OutSystems writes it). */
  eventDateText: string;
}

/** UBT_Email.UserContactRequest: the input of EventContact (B :1239-1252). */
export type UserContactRequest = ActionInputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ActionEventContact'>
>['UserContactRequest'];

/** Inputs of LDM_Email_V2 (S model :9-48) as the block takes them (EventHostId → In_EventHostId, S view :152-159).
    Long Integers stay strings ("0" by default); EventDate is "YYYY-MM-DD", "" for the null date. */
export interface EventEmailInputs {
  In_EventHostId: string;
  In_EventId: string;
  In_IsMessageGuest: boolean;
  In_IsContactOrganiser: boolean;
  EventDate: string;
  EventLocality: string;
}
