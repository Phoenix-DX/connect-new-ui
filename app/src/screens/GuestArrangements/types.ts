import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/* ---- Wire shapes (mocks.ts only) ----
   DataActionGetGuestArrangements of ScreenBlock_GuestArrangements, typed by the API contract (no capture: shape from
   the contract, Connect2_OrbitMobile_BL.GetGuestArrangements_ScreenRec). */

export type GetGuestArrangementsWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_GuestArrangements/DataActionGetGuestArrangements'>
>;
/** GetGuestArrangements_Screen (Connect2_OrbitMobile_BL) as it travels. */
export type GuestArrangementsScreenWire = GetGuestArrangementsWire['Response'];
export type MilestoneTransportScreenWire = GuestArrangementsScreenWire['ArrivalDetails']['List'][number];

/* ---- Domain (components) ----
   Field names as in OutSystems. DateTimes stay OutSystems values as text, "" = NullDate(); Long Integers as text. The
   block variables that the data action sends and the arrangements of a guest (GetGuestArrangements_ScreenRec: special
   needs, transport milestones, meals) are domain types of api/event; this module keeps the names that the screen
   uses. */
export type {
  GuestArrangementsCallInputs as GuestArrangementsVariablesWire,
  GuestArrangementsData,
  MealDetailItem,
  MilestoneTransportItem,
  SpecialNeed,
  SpecialNeedsItem,
} from '@/api/event';
