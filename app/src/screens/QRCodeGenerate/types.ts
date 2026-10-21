import type { ActionInputs, ActionOutputs, PathOf } from '../../lib/api';

/* ---- Wire shapes (api.ts and mocks.ts only) ----
   DataActionGet_EventQRCode of ScreenBlock_GenerateQRCode, typed by the API contract (no capture: shape from the
   contract, Connect2_OrbitMobile_BL.GetEventQRCode_ScreenRec). */

/** Endpoint screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_QRCode/ScreenBlock_GenerateQRCode/DataActionGet_EventQRCode. */
type GetEventQRCodePath = PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_GenerateQRCode/DataActionGet_EventQRCode'>;

export type GetEventQRCodeWire = ActionOutputs<GetEventQRCodePath>;

/** The block variables OutSystems sends with the data action (screenData.variables). The record variable QRCodeData
    that echoes the client state is left out, as in the other Orbit routes (the contract makes every variable
    optional). */
export type EventQRCodeVariablesWire = Required<
  Pick<
    ActionInputs<GetEventQRCodePath>,
    | 'UserName'
    | 'UserLocation'
    | 'UserSignedURL'
    | 'IsFetchingData'
    | 'In_MemberId'
    | 'In_EventId'
    | 'In_EventName'
    | 'In_EventStartDate'
    | 'In_EventEndDate'
    | 'In_EventLocation'
  >
>;

/* ---- Domain (components) ---- */

/** QRCodeSeatItemRec. */
export interface QRCodeSeatItem {
  MilestoneName: string;
  SeatAllocation: string;
}

/** GetEventQRCode_ScreenRec (Connect2_OrbitMobile_BL): the pass texts and the QR image. QRCodeAsBinary is the
    BinaryData as it travels (base64; "" = NullBinary()). */
export interface EventQRCodeData {
  GetEventQRCodeResponse: {
    GuestRole: string;
    QrCodeImage: string;
    Seats: QRCodeSeatItem[];
    Tag: string;
  };
  QRCodeAsBinary: string;
}
