import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/* ---- Wire shapes (mocks.ts only) ----
   DataActionGetEventDocuments of ScreenBlock_ViewDocuments, typed by the API contract (no capture: shape from the
   contract, Connect2_OrbitMobile_IS.GetEventDocumentsResponseRec). */

export type GetEventDocumentsWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_ViewDocuments/DataActionGetEventDocuments'>
>;

/* ---- Domain (components) ----
   The block variables that the data action sends and a document of the event (EventDocumentItem_Screen, IsViewed set
   by the screen, LastUpdatedOn "" for the null date) are domain types of api/event; this module keeps the names that
   the screen uses. */
export type { EventDocumentItem, EventDocumentsCallInputs as EventDocumentsVariablesWire } from '@/api/event';
