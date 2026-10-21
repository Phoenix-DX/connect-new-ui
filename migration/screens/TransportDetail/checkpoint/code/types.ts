import type { ActionInputs, ActionOutputs, PathOf } from '../../lib/api';

/* ---- Wire shapes (api.ts and mocks.ts only) ----
   DataActionGet_TransportDetail of ScreenBlock_TransportDetail, typed by the API contract (no capture: shape from the
   contract, Connect2_OrbitMobile_BL.GetTransportDetails_ScreenRec). */

/** Endpoint screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_TransportDetail/DataActionGet_TransportDetail. */
type GetTransportDetailPath = PathOf<
  'Connect2_OrbitMobile_MUI',
  'ScreenBlock_TransportDetail/DataActionGet_TransportDetail'
>;

export type GetTransportDetailWire = ActionOutputs<GetTransportDetailPath>;
/** GetTransportDetails_Screen (Connect2_OrbitMobile_BL) as it travels. */
export type TransportDetailsScreenWire = GetTransportDetailWire['Response'];
export type TransportDetailResponseWire = TransportDetailsScreenWire['TransportDetail'];
export type TransportLocationWire = TransportDetailResponseWire['DepartureLocation'];

/** The block variables OutSystems sends with the data action (screenData.variables). The record variable
    TransportDetail that echoes the client state is left out, as in the other Orbit routes (the contract makes every
    variable optional). */
export type TransportDetailVariablesWire = Required<
  Pick<
    ActionInputs<GetTransportDetailPath>,
    | 'Title'
    | 'IsFetchingData'
    | 'In_MilestoneId'
    | 'In_OrbitMilestoneTypeId'
    | 'In_PreloadMilestoneName'
    | 'In_HeaderClass'
  >
>;

/* ---- Domain (components) ----
   Field names as in OutSystems. DateTimes stay OutSystems values as text, "" = NullDate(); Long Integers as text. */

/** OrbitMilestoneTypeRec (Connect2_OrbitMobile_BL). */
export interface TransportMilestoneType {
  Id: string;
  Name: string;
  MainIcon: string;
  IsTransportMilestone: boolean;
  IconTransportDeparture: string;
  IconTransportArrival: string;
  TransportHeaderClass: string;
  TravelInfoHeader: string;
}

/** TransportLocationRec. */
export interface TransportLocation {
  Location: string;
  Terminal: string;
  DateTime: string;
}

/** StopItemRec; StopDurationTime is a Time "HH:mm:ss". */
export interface StopItem {
  Title: string;
  ArrivalLocation: TransportLocation;
  DepartureLocation: TransportLocation;
  StopDurationTime: string;
}

/** SeatItemRec. */
export interface SeatItem {
  Departure: string;
  Arrival: string;
  SeatNumber: string;
}

/** TravelInfoRec. */
export interface TravelInfo {
  BookingReference: string;
  Class: string;
  CodeShareFlight: string;
  CodeShareName: string;
  DriverName: string;
  FareType: string;
  OnboardMeal: string;
  VehicleName: string;
}

/** GetTransportDetail_Response (Connect2_OrbitMobile_IS). */
export interface TransportDetailResponse {
  MilestoneId: string;
  Title: string;
  Type: string;
  TransportType: string;
  Operator: string;
  TravelIdentifier: string;
  DepartureLocation: TransportLocation;
  ArrivalLocation: TransportLocation;
  Stops: StopItem[];
  Seats: SeatItem[];
  BaggageAllowance: { CarryOnBaggage: string; CheckedBaggage: string };
  TripDuration: { TripDurationHours: string; TripDurationMinutes: string };
  TravelInfo: TravelInfo;
  Notes: string;
}

/** GetTransportDetails_ScreenRec: the block's TransportDetail variable and the TransportDetail block's input. */
export interface TransportDetails {
  MilestoneType: TransportMilestoneType;
  TransportDetail: TransportDetailResponse;
}
