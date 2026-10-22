import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import type { OrbitEventTypeRecord } from '../../shared/Connect2_OrbitMobile_MUI/lib/structures';

/* ---- Wire shapes (api.ts and mocks.ts only) ----
   The data action and the two server actions of ScreenBlock_AdminEventDetail, typed by the API contract
   (src/api/openapi.yaml). Not captured (no-capture route): shapes from the contract and the compiled block
   (migration/runtime-sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.mvc.js
   = SB, model :1-182). */

type EventInformationPath = PathOf<
  'Connect2_OrbitMobile_MUI',
  'ScreenBlock_AdminEventDetail/DataActionGet_EventInformation'
>;

export type Get_EventInformationWire = ActionOutputs<EventInformationPath>;

/** The block variables OutSystems sends with Get_EventInformation (screenData.variables): the inputs and the scalar
    variables. The record variables (ScanResult, ScannedUser, EventType, ScanError) echo the client state and are left
    out, as in the other routes' data actions (the contract makes every variable optional). */
export type AdminEventDetailVariablesWire = Required<
  Pick<
    ActionInputs<EventInformationPath>,
    | 'In_EventId'
    | 'In_EventName'
    | 'In_EventStartDate'
    | 'In_EventEndDate'
    | 'In_EventLocation'
    | 'In_EventTypeFriendly'
    | 'IsFetchingData'
    | 'IsProcessingData'
    | 'QRCodePopupOpened'
  >
>;

type GetMemberByMemberIdPath = PathOf<'Connect2_OrbitMobile_MUI', 'ActionGetMemberByMemberId'>;
type GetScanEventQRCodePath = PathOf<'Connect2_OrbitMobile_MUI', 'ActionGetScanEventQRCode'>;

export type GetMemberByMemberIdWire = ActionOutputs<GetMemberByMemberIdPath>;
export type GetScanEventQRCodeWire = ActionOutputs<GetScanEventQRCodePath>;
/** ScannedQRCodeInfoRec (Connect2_OrbitMobile_BL): what the admin's scan sends (SB ctrl :996-1018). */
export type ScannedQRCodeInfoWire = ActionInputs<GetScanEventQRCodePath>['ScannedQRCodeInfo'];

/* ---- Domain (components) ---- */

/** The route inputs under their original names (P-PARAMS). DateTimes as in the URL (the UTC instant,
    ServerDataConverter.asString = toISOString) or the null date "1900-01-01T00:00:00". */
export interface AdminEventDetailInputs {
  In_EventId: string;
  In_EventName: string;
  In_EventStartDate: string;
  In_EventEndDate: string;
  In_EventLocation: string;
  In_EventTypeFriendly: string;
}

/** Get_EventInformation outputs. */
export interface EventInformation {
  hasQRCode: boolean;
  orbitEventType: OrbitEventTypeRecord;
}

/** Directory_MemberById (APIDomain_Directory_IS): the scanned member. */
export interface ScannedMember {
  Id: string;
  FirstName: string;
  Lastname: string;
  LocalityName: string;
  CountryName: string;
}

/** QRCodeSeatItemRec. */
export interface QRCodeSeatItem {
  MilestoneName: string;
  SeatAllocation: string;
}

/** ScannedUserRec (Connect2_OrbitMobile_BL): the variable ScannedUser the scan popup shows (fields the block sets). */
export interface ScannedUser {
  Member: ScannedMember;
  SignedURL: string;
  UserRole: string;
  Seats: QRCodeSeatItem[];
  Tag: string;
  GuestRole: string;
}

/** QRCodeStatusRec: the variable ScanResult. */
export interface QRCodeStatus {
  Success: boolean;
  ErrorMessage: string;
}

/** GetScanEventQRCode outputs (Response: GetScanEventQRCodeResponse). */
export interface ScanEventQRCodeResult {
  UserRole: string;
  Seats: QRCodeSeatItem[];
  Tag: string;
  GuestRole: string;
  Status: QRCodeStatus;
}

/** TextBooleanRecord: the variable ScanError (OrbitErrorMessage inputs). */
export interface ScanError {
  IsShowErrorMessage: boolean;
  Message: string;
}
