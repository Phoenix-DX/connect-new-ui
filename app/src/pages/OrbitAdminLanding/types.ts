import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/* ---- Wire shapes (mocks.ts only) ----
   The data action of ScreenBlock_AdminLanding, typed by the API contract (src/api/openapi.yaml; captured shape
   analysis/calls.md § DataActionGet_AdminEventsList). */

export type Get_AdminEventsListWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_AdminLanding/DataActionGet_AdminEventsList'>
>;

/** GetAdminOrbitEvents_ScreenRec: OrbitSummaryItem (AdminOrbitSummaryItemRec) + OrbitEventType. */
export type AdminOrbitEventsWire = Get_AdminEventsListWire['Response']['List'][number];

/* ---- Domain (components) ----
   The block variables that the data action sends (IsFetchingData, UserFirstName, UserMemberId) and one row of
   EventsSummary (the Event_ScreenRec of Card_Event and the TypeFriendly that the card click passes on) are domain
   types of api/event; this module keeps the names that the screen uses. */
export type { AdminEventItem, AdminEventsCallInputs as AdminLandingVariablesWire } from '@/api/event';
