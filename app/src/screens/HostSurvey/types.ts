import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';

/* ---- Wire shapes (api.ts and mocks.ts only) ----
   DataActionGetHostSurvey of ScreenBlock_HostSurvey and the server action PostHostSurvey, typed by the API contract
   (GetHostSurveyResponse of Connect2_OrbitMobile_IS; captured shape: analysis/calls.md § DataActionGetHostSurvey). */

/** Endpoint screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/
    DataActionGetHostSurvey. */
type GetHostSurveyPath = PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_HostSurvey/DataActionGetHostSurvey'>;
type PostHostSurveyPath = PathOf<'Connect2_OrbitMobile_MUI', 'ActionPostHostSurvey'>;

export type GetHostSurveyWire = ActionOutputs<GetHostSurveyPath>;
/** GetHostSurveyResponse (Connect2_OrbitMobile_IS) as it travels. */
export type HostSurveyResponseWire = GetHostSurveyWire['Response'];
export type HostSurveyInfoWire = HostSurveyResponseWire['SurveyInfo'];
export type HostSurveyRoomWire = HostSurveyResponseWire['Rooms']['HostSurvey_RoomItem']['List'][number];
export type HostSurveyMealWire = HostSurveyResponseWire['Meals']['MealItemInfo']['List'][number];
export type HostSurveyHelperWire = HostSurveyResponseWire['Helpers']['HelperItemInfo']['List'][number];
export type HostSurveyVehicleWire = HostSurveyResponseWire['Vehicles']['VehicleItemInfo']['List'][number];
export type PostHostSurveyInputsWire = ActionInputs<PostHostSurveyPath>;

/** The block variables OutSystems sends with the data action (screenData.variables). The record and list variables
    that echo the client state (CurrentStep, HostSurvey, StepProperties, PopUpInfo, RoomNames, FilteredHelperRoles)
    are left out, as in the other Orbit routes (the contract makes every variable optional). */
export type HostSurveyVariablesWire = Required<
  Pick<
    ActionInputs<GetHostSurveyPath>,
    | 'IsFetchingData'
    | 'IsAddingHelper'
    | 'PositionToDelete'
    | 'SurveyDiscarded'
    | 'SurveySubmitted'
    | 'IsConfirmedSurvey'
    | 'HasDataSteps'
    | 'IsPostingSurvey'
    | 'In_EventId'
    | 'In_MemberId'
    | 'In_EventName'
    | 'In_EventStartDate'
    | 'In_EventEndDate'
  >
>;

/* ---- Domain (components) ---- */

/** HostSurvey_Info. DateTimes stay OutSystems values ("" = null). */
export type HostSurveyInfo = HostSurveyInfoWire;

/** HostSurvey_RoomItem with the bed list unwrapped. */
export type HostSurveyRoom = Omit<HostSurveyRoomWire, 'Beds'> & { Beds: string[] };

/** HostSurvey_MealItemInfo; EventDate is a Date ("" = null). */
export type HostSurveyMeal = HostSurveyMealWire;
export type HostSurveyHelper = HostSurveyHelperWire;
export type HostSurveyVehicle = HostSurveyVehicleWire;

/** GetHostSurveyResponse as the block uses it (HostSurvey variable). */
export interface HostSurvey {
  SurveyInfo: HostSurveyInfo;
  Rooms: { AccommodationNote: string; HostSurvey_RoomItem: HostSurveyRoom[] };
  Meals: { MealNote: string; MealItemInfo: HostSurveyMeal[] };
  Helpers: { HelperNote: string; HelperItemInfo: HostSurveyHelper[] };
  Vehicles: { HasVehicles: boolean; VehicleItemInfo: HostSurveyVehicle[] };
}

/** The data action outputs (GetHostSurvey.Response, GetHostSurvey.HasError). */
export interface GetHostSurveyResult {
  Response: HostSurvey;
  HasError: boolean;
}
