import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/* ---- Wire shapes (mocks.ts only) ----
   DataActionGet_EventQRCode of ScreenBlock_GenerateQRCode, typed by the API contract (no capture: shape from the
   contract, Connect2_OrbitMobile_BL.GetEventQRCode_ScreenRec). */

export type GetEventQRCodeWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_GenerateQRCode/DataActionGet_EventQRCode'>
>;

/* ---- Domain (components) ----
   The block variables that the data action sends, the pass (GetEventQRCode_ScreenRec: the texts, the seats and the QR
   image) and a seat (QRCodeSeatItemRec) are domain types of api/event; this module keeps the names that the screen
   uses. */
export type { EventQRCodeCallInputs as EventQRCodeVariablesWire, EventQRCodeData, QRCodeSeatItem } from '@/api/event';
