import type { ActionInputs, ActionOutputs, PathOf } from '../../lib/api';
import type { DayFilter } from '../../shared/Connect2_OrbitMobile_MUI/lib/structures';
import type { DropdownOption } from '../../shared/osui/lib/structures';

/* ---- Wire shapes (api.ts and mocks.ts only) ----
   The three data actions of ScreenBlock_EventBooklet, typed by the API contract (no capture: shapes from the contract,
   Connect2_OrbitMobile_IS.GetEventBookletFiltersResponseRec / EventBookletMembersRec). */

type FiltersPath = PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_EventBooklet/DataActionGet_EventBookletFilters'>;
type GuestsPath = PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_EventBooklet/DataActionGet_EventBookletGuests'>;
type HelpersPath = PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_EventBooklet/DataActionGet_EventBookletHelpers'>;

export type GetEventBookletFiltersWire = ActionOutputs<FiltersPath>;
export type GetEventBookletGuestsWire = ActionOutputs<GuestsPath>;
export type GetEventBookletHelpersWire = ActionOutputs<HelpersPath>;
export type EventBookletMemberWire = GetEventBookletGuestsWire['Response']['List'][number];
export type EventBookletFiltersResponseWire = GetEventBookletFiltersWire['Response'];

/** The block variables OutSystems sends with each data action (screenData.variables). The variables that echo the
    client state (the guest and helper lists, the last fetched lists, LocalHelperRoles, AvailableFilters,
    CurrentFilters, EventInfo, LastFilters_*) are left out, as in the other Orbit routes (the contract makes every
    variable optional); SelectedFilters and PaginationSettings are kept: they carry the search, the filters and the page
    the server answers (no other variable does). */
export type EventBookletVariablesWire = Required<
  Pick<
    ActionInputs<GuestsPath>,
    | 'In_EventId'
    | 'In_EventName'
    | 'IsFetchingData'
    | 'IsGuestView'
    | 'IsSearchMode'
    | 'FiltersPopUp'
    | 'HasFiltersApplied'
    | 'SelectedFilters'
    | 'PaginationSettings'
  >
>;
export type SelectedFiltersWire = EventBookletVariablesWire['SelectedFilters'];
export type PaginationSettingsWire = EventBookletVariablesWire['PaginationSettings'];

/* ---- Domain (components) ----
   Field names as in OutSystems. Dates stay "yyyy-MM-dd", DateTimes OutSystems values as text ("" = null); Long
   Integers as text. */

export type { DayFilter, DropdownOption };

/** EventBookletMembersRec (Connect2_OrbitMobile_IS). */
export interface EventBookletMember {
  MemberId: string;
  HouseholderId: string;
  Title: string;
  FirstName: string;
  LastName: string;
  Age: string;
  Phone: string;
  IsHouseholder: boolean;
  Country: string;
  CountryCode: string;
  Locality: string;
  LocalityId: string;
  IsHostLocality: boolean;
  Host: string;
  HostHouseholderId: string;
  Days: string[];
  Role: string;
  OrderNo: string;
}

/** BookletMembers_ByLocalityRec (Connect2_OrbitMobile_MUI). */
export interface BookletMembersByLocality {
  Locality: string;
  Country: string;
  Members: EventBookletMember[];
}

/** BookletMembers_ByRoleRec (Connect2_OrbitMobile_MUI). */
export interface BookletMembersByRole {
  Role: string;
  MembersByLocality: BookletMembersByLocality[];
}

/** EventBooklet_EventInfoRec (Connect2_OrbitMobile_IS). */
export interface EventBookletEventInfo {
  EventId: string;
  EventName: string;
  EventLocation: string;
  EventLocationId: string;
  EventCountry: string;
  EventCountryCode: string;
  EventStartDateTime: string;
  EventEndDateTime: string;
}

/** GetEventBookletFiltersResponseRec. */
export interface EventBookletFiltersResponse {
  EventInfo: EventBookletEventInfo;
  Filters: {
    EventDays: string[];
    HelperRoles: string[];
    Countries: { CountryName: string; Localities: string[] }[];
  };
}

/** PopupFiltersRec (Connect2_OrbitMobile_MUI): AvailableFilters and the popup's filters. */
export interface PopupFilters {
  IsGuest: boolean;
  IsHelper: boolean;
  DateRange: DayFilter[];
  HelperRoles: DropdownOption[];
  Countries: DropdownOption[];
  Localities: DropdownOption[];
}

/** CurrentFiltersRec (Connect2_OrbitMobile_MUI): the popup filters plus the search term. */
export interface CurrentFilters extends PopupFilters {
  SearchTerm: string;
}

/** SelectedFiltersRec (Connect2_OrbitMobile_MUI): what the data actions filter on. */
export interface SelectedFilters {
  SearchTerm: string;
  DateRange: DayFilter[];
  HelperRoles: string[];
  Countries: string[];
  Localities: string[];
}

/** The anonymous PaginationSettings record (LongInteger… Record of the contract). ScrollThreshold Long Integers as
    numbers here (only used as a pixel threshold). */
export interface PaginationSettings {
  Guest_MaxRows: number;
  Guest_PageNumber: number;
  Guest_IsNewSearch: boolean;
  Guest_NoResults: boolean;
  Guest_ScrollThreshold: number;
  Helper_MaxRows: number;
  Helper_PageNumber: number;
  Helper_IsNewSearch: boolean;
  Helper_NoResults: boolean;
  Helper_ScrollThreshold: number;
}
