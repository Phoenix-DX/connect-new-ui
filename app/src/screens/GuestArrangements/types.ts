import type { ActionInputs, ActionOutputs, PathOf } from '../../lib/api';

/* ---- Wire shapes (api.ts and mocks.ts only) ----
   DataActionGetGuestArrangements of ScreenBlock_GuestArrangements, typed by the API contract (no capture: shape from
   the contract, Connect2_OrbitMobile_BL.GetGuestArrangements_ScreenRec). */

/** Endpoint screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_GuestArrangements/DataActionGetGuestArrangements. */
type GetGuestArrangementsPath = PathOf<
  'Connect2_OrbitMobile_MUI',
  'ScreenBlock_GuestArrangements/DataActionGetGuestArrangements'
>;

export type GetGuestArrangementsWire = ActionOutputs<GetGuestArrangementsPath>;
/** GetGuestArrangements_Screen (Connect2_OrbitMobile_BL) as it travels. */
export type GuestArrangementsScreenWire = GetGuestArrangementsWire['Response'];
export type SpecialNeedsItemWire = GuestArrangementsScreenWire['SpecialNeeds']['List'][number];
export type MilestoneTransportScreenWire = GuestArrangementsScreenWire['ArrivalDetails']['List'][number];
export type MealDetailItemWire = GuestArrangementsScreenWire['MealDetails']['List'][number];
export type OrbitMilestoneTypeWire = MilestoneTransportScreenWire['OrbitMilestoneType'];

/** The block variables OutSystems sends with the data action (screenData.variables). The record variable
    GuestArrangementsData that echoes the client state is left out, as in the other Orbit routes (the contract makes
    every variable optional). */
export type GuestArrangementsVariablesWire = Required<
  Pick<
    ActionInputs<GetGuestArrangementsPath>,
    | 'IsFetchingData'
    | 'In_MemberId'
    | 'In_EventId'
    | 'In_HostId'
    | 'In_MilestoneId'
    | 'In_PreloadEventName'
    | 'In_PreloadMilestoneName'
    | 'In_OrbitMilestoneTypeId'
  >
>;

/* ---- Domain (components) ----
   Field names as in OutSystems. DateTimes stay OutSystems values as text, "" = NullDate(); Long Integers as text. */

/** SpecialNeedsRec (Connect2_OrbitMobile_IS). */
export interface SpecialNeed {
  Category: string;
  Type: string;
  Notes: string;
}

/** SpecialNeedsItemRec: a member with special needs. */
export interface SpecialNeedsItem {
  HouseholderId: string;
  MemberId: string;
  LocalityId: string;
  Title: string;
  FirstName: string;
  LastName: string;
  SignedPhotoURL: string;
  SpecialNeeds: SpecialNeed[];
}

/** MilestoneTransport_ScreenRec: a transport milestone (MilestoneTransportRec) and its milestone type (only the two
    icons the block reads). */
export interface MilestoneTransportItem {
  MilestoneTransport: {
    Title: string;
    Type: string;
    TravelIdentifier: string;
    Notes: string;
    SequenceNo: number;
    MilestoneInfo: {
      DepartureLocation: string;
      ArrivalLocation: string;
      MilestoneStartDateTime: string;
      MilestoneEndDateTime: string;
    };
  };
  OrbitMilestoneType: { IconTransportDeparture: string; IconTransportArrival: string };
}

/** MealDetailItemRec. */
export interface MealDetailItem {
  MilestoneDateTime: string;
  MiddayMeal: string;
  EveningMeal: string;
}

/** GetGuestArrangements_ScreenRec: the block's GuestArrangementsData variable. */
export interface GuestArrangementsData {
  MemberId: string;
  Title: string;
  FirstName: string;
  LastName: string;
  EventDetails: { Id: string; Name: string; Location: string; StartDate: string; EndDate: string };
  SpecialNeeds: SpecialNeedsItem[];
  ArrivalDetails: MilestoneTransportItem[];
  MealDetails: MealDetailItem[];
  DepartureDetails: MilestoneTransportItem[];
}

/** The data action's outputs: Response and HasData. */
export interface GuestArrangementsResult {
  Response: GuestArrangementsData;
  HasData: boolean;
}
