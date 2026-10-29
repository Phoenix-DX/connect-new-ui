import type { AdminEventInformationCallInputs, OrbitEventTypeRecord, QRCodeSeatItem, QRCodeStatus } from '@/api/event';
import type { Member } from '@/api/member';
import type { AdminEventDetailInputs } from '@/pages/OrbitAdminEventDetail/inputs';

/** The variables of the block ScreenBlock_AdminEventDetail, the reducer and the pure helpers of its flows. The flows
    are in useAdminEventDetail.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail */

/** ScannedUserRec (Connect2_OrbitMobile_BL): the variable ScannedUser that the scan popup shows (the fields that the
    block sets). Member is the scanned member (Directory_MemberById, the domain type of api/member). */
export interface ScannedUser {
  Member: Member;
  SignedURL: string;
  UserRole: string;
  Seats: QRCodeSeatItem[];
  Tag: string;
  GuestRole: string;
}

/** TextBooleanRecord: the variable ScanError (the inputs of OrbitErrorMessage). */
export interface ScanError {
  IsShowErrorMessage: boolean;
  Message: string;
}

/** The block variables and the fetch state of Get_EventInformation that the view reads. The view cache keeps all of
    it (P-BACK). */
export interface AdminEventDetailState {
  isFetchingData: boolean;
  isProcessingData: boolean;
  /** ScanResult: the result of the last check-in. */
  scanResult: QRCodeStatus;
  scannedUser: ScannedUser;
  /** EventType: Get_EventInformation.OrbitEventType, assigned by OnAfterFetch. */
  eventType: OrbitEventTypeRecord;
  /** QRCodePopupOpened: the ShowPopup of Popup_QRCode. */
  qrCodePopupOpened: boolean;
  scanError: ScanError;
  /** Get_EventInformation.IsDataFetched. */
  isDataFetched: boolean;
  /** Get_EventInformation.HasQRCode. */
  hasQRCode: boolean;
}

/** An assignment of one or more variables. */
export type AdminEventDetailPatch = Partial<AdminEventDetailState>;

/** ScannedUser before a scan. */
export const EMPTY_SCANNED_USER: ScannedUser = {
  Member: { Id: '0', FirstName: '', Lastname: '', LocalityName: '', CountryName: '' },
  SignedURL: '',
  UserRole: '',
  Seats: [],
  Tag: '',
  GuestRole: '',
};

/** ScanError when no error popup shows. */
const NO_SCAN_ERROR: ScanError = { IsShowErrorMessage: false, Message: '' };

/** The variables of a new visit (the block has no OnInitialize: the defaults). */
export const INITIAL_ADMIN_EVENT_DETAIL_STATE: AdminEventDetailState = {
  isFetchingData: false,
  isProcessingData: false,
  scanResult: { Success: false, ErrorMessage: '' },
  scannedUser: EMPTY_SCANNED_USER,
  eventType: {},
  qrCodePopupOpened: false,
  scanError: NO_SCAN_ERROR,
  isDataFetched: false,
  hasQRCode: false,
};

/** Assigns the variables of the patch. */
export function adminEventDetailReducer(
  state: AdminEventDetailState,
  patch: AdminEventDetailPatch,
): AdminEventDetailState {
  return { ...state, ...patch };
}

/** The block variables that DataActionGet_EventInformation sends with the call: the six inputs and IsFetchingData,
    IsProcessingData and QRCodePopupOpened. */
export function adminEventInformationInputs(
  inputs: AdminEventDetailInputs,
  state: AdminEventDetailState,
): AdminEventInformationCallInputs {
  return {
    In_EventId: inputs.In_EventId,
    In_EventName: inputs.In_EventName,
    In_EventStartDate: inputs.In_EventStartDate,
    In_EventEndDate: inputs.In_EventEndDate,
    In_EventLocation: inputs.In_EventLocation,
    In_EventTypeFriendly: inputs.In_EventTypeFriendly,
    IsFetchingData: state.isFetchingData,
    IsProcessingData: state.isProcessingData,
    QRCodePopupOpened: state.qrCodePopupOpened,
  };
}

/** The name of the scanned member in the QRCodeScanned audit event: FirstName + (FirstName <> "" ? " " + Lastname :
    Lastname). */
export const scannedMemberName = (member: Member): string =>
  member.FirstName + (member.FirstName !== '' ? ` ${member.Lastname}` : member.Lastname);
