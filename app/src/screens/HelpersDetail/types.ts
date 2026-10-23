import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/* ---- Wire shapes (mocks.ts only) ----
   DataActionGetHelperDetails of ScreenBlock_HelperDetails, typed by the API contract (captured shape:
   analysis/calls.md § DataActionGetHelperDetails). */

export type GetHelperDetailsWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_HelperDetails/DataActionGetHelperDetails'>
>;
/** GetHelperDetailsResponse (Connect2_OrbitMobile_IS) as it travels. */
export type HelperDetailsResponseWire = GetHelperDetailsWire['Response']['GetHelperHost_Response'];
export type HelperWire = HelperDetailsResponseWire['Helpers']['List'][number];

/* ---- Domain (components) ----
   The block variables that the data action sends, a helper role and its members (HelperItem) and the helpers of the
   event (GetHelperDetailsResponse as HelperData, dates "" for the null date) are domain types of api/event; this
   module keeps the names that the screen uses. */
export type { HelperDetailsCallInputs as HelperDetailsVariablesWire, HelperData, HelperItem } from '@/api/event';
