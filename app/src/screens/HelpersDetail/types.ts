import type { ActionInputs, ActionOutputs, PathOf } from '../../lib/api';
import type { MemberInformation } from '../../shared/Connect2_OrbitMobile_MUI/lib/structures';

/* ---- Wire shapes (api.ts and mocks.ts only) ----
   DataActionGetHelperDetails of ScreenBlock_HelperDetails, typed by the API contract (captured shape:
   analysis/calls.md § DataActionGetHelperDetails). */

/** Endpoint screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_HelperDetails/DataActionGetHelperDetails. */
type GetHelperDetailsPath = PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_HelperDetails/DataActionGetHelperDetails'>;

export type GetHelperDetailsWire = ActionOutputs<GetHelperDetailsPath>;
/** GetHelperDetailsResponse (Connect2_OrbitMobile_IS) as it travels. */
export type HelperDetailsResponseWire = GetHelperDetailsWire['Response']['GetHelperHost_Response'];
export type HelperWire = HelperDetailsResponseWire['Helpers']['List'][number];
export type MemberInformationWire = HelperWire['MemberInformation']['List'][number];

/** The block variables OutSystems sends with the data action (screenData.variables, calls.md). The record variables
    that echo the client state (HelperData, CallPopupInfo, ContactByPhoneData, OrbitMilestoneType) are left out, as in the other Orbit
    routes (the contract makes every variable optional). */
export type HelperDetailsVariablesWire = Required<
  Pick<
    ActionInputs<GetHelperDetailsPath>,
    | 'IsFetchingData'
    | 'IsFetchingPhoneData'
    | 'In_EventId'
    | 'In_PreloadEventName'
    | 'In_PreloadMilestoneName'
    | 'In_OrbitMilestoneTypeId'
    | 'In_HostId'
  >
>;

/* ---- Domain (components) ---- */

/** HelperItem: a helper role and its members. */
export interface HelperItem {
  Role: string;
  MemberInformation: MemberInformation[];
}

/** GetHelperDetailsResponse as the block uses it (HelperData). Dates stay OutSystems DateTimes ("" = null). */
export interface HelperData {
  EventDetails: { Id: string; Name: string; Location: string; StartDate: string; EndDate: string };
  Helpers: HelperItem[];
}
