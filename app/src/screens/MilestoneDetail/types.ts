import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import type { MemberInformation } from '@/shared/Connect2_OrbitMobile_MUI/lib/structures';

/* ---- Wire shapes (api.ts and mocks.ts only) ----
   The two data actions of ScreenBlock_AccommodationHost, typed by the API contract (captured shapes:
   analysis/calls.md § DataActionGetAccommodationHost, § DataActionGet_Document). */

/** Endpoint of a data action of ScreenBlock_AccommodationHost (screenservices/Connect2_OrbitMobile_MUI/
    Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/<action>). */
type AccommodationHostPath<A extends string> = PathOf<'Connect2_OrbitMobile_MUI', `ScreenBlock_AccommodationHost/${A}`>;

export type GetAccommodationHostWire = ActionOutputs<AccommodationHostPath<'DataActionGetAccommodationHost'>>;
export type Get_DocumentWire = ActionOutputs<AccommodationHostPath<'DataActionGet_Document'>>;
/** GetAccommodationHostResponse (Connect2_OrbitMobile_IS) as it travels. */
export type AccommodationResponseWire = GetAccommodationHostWire['Response']['GetAccommodationHostResponse'];
export type RoomWire = AccommodationResponseWire['Rooms']['List'][number];
export type GuestWire = RoomWire['Guests']['List'][number];
export type HelperWire = AccommodationResponseWire['Helpers']['List'][number];
export type MemberInformationWire = GuestWire['MemberInformation']['List'][number];

/** The block variables OutSystems sends with both data actions (screenData.variables, calls.md). The record variables
    that echo the client state (AccommodationData, ContactByPhoneData) are left out, as in the other Orbit routes (the
    contract makes every variable optional). */
export type AccommodationHostVariablesWire = Required<
  Pick<
    ActionInputs<AccommodationHostPath<'DataActionGetAccommodationHost'>>,
    | 'IsFetchingData'
    | 'IsLoadingDocument'
    | 'HasDocument'
    | 'In_MilestoneId'
    | 'In_EventId'
    | 'In_HostId'
    | 'In_PreloadEventName'
    | 'In_PreloadMilestoneName'
    | 'In_OrbitMilestoneTypeId'
  >
>;

/* ---- Domain (components) ---- */

/** The screen inputs (query string, original names). Long Integers stay text. */
export interface MilestoneDetailInputs {
  In_FromNotification: boolean;
  In_MilestoneId: string;
  In_EventId: string;
  In_HostId: string;
  In_OrbitMilestoneTypeId: string;
  In_MilestoneName: string;
  In_EventName: string;
}

/** RoomInformation: floor, who the room is for and the number of beds ("0" = null Long Integer). */
export interface RoomInformation {
  Floor: string;
  Type: string;
  Beds: string;
}

/** GuestItem: a household staying in a room and its members. */
export interface GuestItem {
  HouseholderId: string;
  HouseholdName: string;
  LocalityId: string;
  Locality: string;
  CountryCode: string;
  DisplayDot: boolean;
  MemberInformation: MemberInformation[];
}

/** RoomItem. */
export interface RoomItem {
  RoomId: string;
  RoomName: string;
  RoomInformation: RoomInformation;
  Guests: GuestItem[];
}

/** HelperItem: a helper role and its members. */
export interface HelperItem {
  Role: string;
  MemberInformation: MemberInformation[];
}

/** GetAccommodationHostResponse as the block uses it (AccommodationData). Dates stay OutSystems DateTimes ("" = null). */
export interface AccommodationData {
  MilestoneId: string;
  MilestoneType: string;
  MilestoneDateTime: string;
  MilestoneTitle: string;
  EventDetails: { Id: string; Name: string; Location: string; StartDate: string; EndDate: string };
  /** SpecialNeeds: only its emptiness is read (the accordions' no-margin class). */
  SpecialNeedsCount: number;
  Helpers: HelperItem[];
  Rooms: RoomItem[];
}

export interface AccommodationHostResult {
  accommodationData: AccommodationData;
  hasData: boolean;
}
