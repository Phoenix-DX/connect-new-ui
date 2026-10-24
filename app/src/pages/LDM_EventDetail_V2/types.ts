import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/* Wire shape of the server action GetHouseholdCoordinates (analysis/calls.md; contract src/api/openapi.yaml). */
export type GetHouseholdCoordinatesWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ActionGetHouseholdCoordinates'>
>;

/* The meal of DataActionGetEventByEventId (Host_V2, DetailGuestItem_V2, SpecialNeedsItem_LDM_V2, with the lists
   unwrapped) and the coordinator of DataActionGetCoordinatorDetails (GetCoordinatorDetailsResponse) are domain types of
   api/event; this module keeps the names that the screen uses. */
export type {
  CoordinatorDetailsData,
  DetailGuestItem,
  LdmEventDetail as EventDetail,
  LdmSpecialNeedsItem as SpecialNeedsItem,
} from '@/api/event';

/** Directory_Coordinates (APIDomain_Directory_IS): GetHouseholdCoordinates.Response. */
export type HouseholdCoordinates = GetHouseholdCoordinatesWire['Response'];
