import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/* ---- Wire shapes (mocks.ts only) ----
   DataActionGetAccommodationHost of ScreenBlock_AccommodationHost, typed by the API contract (captured shape:
   analysis/calls.md § DataActionGetAccommodationHost). */

export type GetAccommodationHostWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_AccommodationHost/DataActionGetAccommodationHost'>
>;
/** GetAccommodationHostResponse (Connect2_OrbitMobile_IS) as it travels. */
export type AccommodationResponseWire = GetAccommodationHostWire['Response']['GetAccommodationHostResponse'];
export type RoomWire = AccommodationResponseWire['Rooms']['List'][number];
export type GuestWire = RoomWire['Guests']['List'][number];

/* ---- Domain (components) ----
   The block variables that both data actions send, the accommodation (GetAccommodationHostResponse as
   AccommodationData, with its rooms, guests and helpers; dates "" for the null date) are domain types of api/event;
   this module keeps the names that the screen uses. */
export type {
  AccommodationData,
  AccommodationHostCallInputs as AccommodationHostVariablesWire,
  HelperItem,
  RoomItem,
} from '@/api/event';

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
