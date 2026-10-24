import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import type { EventBookletCallInputs, EventBookletMember } from '@/api/event';
import type { DayFilter } from '@/shared/Connect2_OrbitMobile_MUI/lib/structures';
import type { DropdownOption } from '@/components/ui/lib/structures';

/* ---- Wire shapes (mocks.ts only) ----
   The three data actions of ScreenBlock_EventBooklet, typed by the API contract (no capture: shapes from the contract,
   Connect2_OrbitMobile_IS.GetEventBookletFiltersResponseRec / EventBookletMembersRec). */

type FiltersPath = PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_EventBooklet/DataActionGet_EventBookletFilters'>;
type GuestsPath = PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_EventBooklet/DataActionGet_EventBookletGuests'>;

export type GetEventBookletFiltersWire = ActionOutputs<FiltersPath>;
export type EventBookletMemberWire = ActionOutputs<GuestsPath>['Response']['List'][number];
export type EventBookletFiltersResponseWire = GetEventBookletFiltersWire['Response'];
export type SelectedFiltersWire = EventBookletCallInputs['SelectedFilters'];
export type PaginationSettingsWire = EventBookletCallInputs['PaginationSettings'];

/* ---- Structures of the booklet blocks ----
   Records of Connect2_OrbitMobile_MUI that the booklet blocks use. The members, the event, the selected filters and
   the paging are domain types of api/event. */

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
