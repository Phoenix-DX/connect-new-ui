import {
  EMPTY_ADMIN_MILESTONE_TYPE,
  type AdminMilestoneInformationCallInputs,
  type AdminMilestoneType,
  type QRCodeSeatItem,
  type QRCodeStatus,
} from '@/api/event';
import type { Member } from '@/api/member';
import type { AdminMilestoneDetailInputs } from '@/pages/OrbitAdminMilestoneDetail/inputs';

/** The variables of the block ScreenBlock_AdminMilestoneDetail (SB model :28-50), the reducer and the call inputs of
    its data action. The flows are in useAdminMilestoneDetail.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail */

/** ScannedUserRec (Connect2_OrbitMobile_BL): the variable ScannedUser that the scan popup shows. Member is the
    scanned member (Directory_MemberById, the domain type of api/member). */
export interface ScannedUser {
  Member: Member;
  SignedURL: string;
  UserRole: string;
  Seats: QRCodeSeatItem[];
  Tag: string;
  GuestRole: string;
  RowAllocation: string;
  SeatingPlan: string;
  MilestoneDescription: string;
}

/** TextBooleanRecord: the variable ScanError (the inputs of OrbitErrorMessage). */
export interface ScanError {
  IsShowErrorMessage: boolean;
  Message: string;
}

/** The block variables and the fetch state of Get_MilestoneInformation that the view reads. The view cache keeps all
    of it (P-BACK). */
export interface AdminMilestoneDetailState {
  isFetchingData: boolean;
  isProcessingData: boolean;
  /** ScanResult (QRCodeStatusRec): the result of the last check-in. */
  scanResult: QRCodeStatus;
  scannedUser: ScannedUser;
  /** MilestoneType: Get_MilestoneInformation.OrbitMilestoneType, assigned by OnAfterFetch. */
  milestoneType: AdminMilestoneType;
  /** QRCodePopupOpened: the ShowPopup of Popup_QRCode. */
  qrCodePopupOpened: boolean;
  scanError: ScanError;
  /** Get_MilestoneInformation.IsDataFetched. */
  isDataFetched: boolean;
  /** Get_MilestoneInformation.HasQRCode. */
  hasQRCode: boolean;
}

/** An assignment of one or more variables. */
export type AdminMilestoneDetailPatch = Partial<AdminMilestoneDetailState>;

/** ScannedUser before a scan. */
export const EMPTY_SCANNED_USER: ScannedUser = {
  Member: { Id: '0', FirstName: '', Lastname: '', LocalityName: '', CountryName: '' },
  SignedURL: '',
  UserRole: '',
  Seats: [],
  Tag: '',
  GuestRole: '',
  RowAllocation: '',
  SeatingPlan: '',
  MilestoneDescription: '',
};

/** ScanError when no error popup shows. */
const NO_SCAN_ERROR: ScanError = { IsShowErrorMessage: false, Message: '' };

/** The variables of a new visit (the block has no OnInitialize: the defaults). */
export const INITIAL_ADMIN_MILESTONE_DETAIL_STATE: AdminMilestoneDetailState = {
  isFetchingData: false,
  isProcessingData: false,
  scanResult: { Success: false, ErrorMessage: '' },
  scannedUser: EMPTY_SCANNED_USER,
  milestoneType: EMPTY_ADMIN_MILESTONE_TYPE,
  qrCodePopupOpened: false,
  scanError: NO_SCAN_ERROR,
  isDataFetched: false,
  hasQRCode: false,
};

/** Assigns the variables of the patch. */
export function adminMilestoneDetailReducer(
  state: AdminMilestoneDetailState,
  patch: AdminMilestoneDetailPatch,
): AdminMilestoneDetailState {
  return { ...state, ...patch };
}

/** The block variables that DataActionGet_MilestoneInformation sends with the call: the seven inputs and
    IsFetchingData, IsProcessingData and QRCodePopupOpened (as Get_EventInformation of ScreenBlock_AdminEventDetail). */
export function adminMilestoneInformationInputs(
  inputs: AdminMilestoneDetailInputs,
  state: AdminMilestoneDetailState,
): AdminMilestoneInformationCallInputs {
  return {
    ...inputs,
    IsFetchingData: state.isFetchingData,
    IsProcessingData: state.isProcessingData,
    QRCodePopupOpened: state.qrCodePopupOpened,
  };
}
