import { callAction, type ActionInputs, type ActionOutputs, type PathOf } from '@/api/client/callAction';
import { osList } from '@/lib/os-wire';
import type { QRCodeSeatItem, QRCodeStatus, ScannedMemberNames, ScannerAdmin } from './types';

/* The two calls of ScreenBlock_AdminMilestoneDetail (TST publish of 2026-10-27; SB = migration/screens/
   OrbitAdminMilestoneDetail/sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail
   .mvc.js): the data action Get_MilestoneInformation (SB :851-878) and the server action GetScanMilestoneQRCode
   (SB :814-850). GetMemberByMemberId is the shared server action of api/member (in the contract).
   Both operations come from the contract (regenerated for I10-6): the wire types are its operation types. */

const ORBIT = 'Connect2_OrbitMobile_MUI';
const NULL_DATE_TIME = '1900-01-01T00:00:00';

/** OrbitMilestoneTypeRec (Connect2_OrbitMobile_BL): the record Get_MilestoneInformation returns as OrbitMilestoneType. */
export type AdminMilestoneType = MilestoneInformationWire['OrbitMilestoneType'];

/** The default OrbitMilestoneTypeRec (the variable MilestoneType before the data action answers). */
export const EMPTY_ADMIN_MILESTONE_TYPE: AdminMilestoneType = {
  Id: '',
  Is_Active: false,
  Order: 0,
  Type: '',
  Name: '',
  MainColorVar: '',
  MainIcon: '',
  CanHost: false,
  IsTransportMilestone: false,
  IconTransportDeparture: '',
  IconTransportArrival: '',
  TransportHeaderClass: '',
  TravelInfoHeader: '',
  TravelInfoHeaderIcon: '',
};

/** Output of DataActionGet_MilestoneInformation (Get_MilestoneInformationDataActRec, SB model :3-24). */
export type MilestoneInformationWire = ActionOutputs<
  PathOf<typeof ORBIT, 'ScreenBlock_AdminMilestoneDetail/DataActionGet_MilestoneInformation'>
>;

/** The variables of ScreenBlock_AdminMilestoneDetail that the data action sends (as Get_EventInformation of
    ScreenBlock_AdminEventDetail): the seven inputs and the three Boolean variables. */
export interface AdminMilestoneInformationCallInputs {
  In_EventId: string;
  In_MilestoneId: string;
  In_MilestoneName: string;
  In_MilestoneDate: string;
  In_MilestoneStartDate: string;
  In_MilestoneEndDate: string;
  In_MilestoneDescription: string;
  IsFetchingData: boolean;
  IsProcessingData: boolean;
  QRCodePopupOpened: boolean;
}

/** The outputs of DataActionGet_MilestoneInformation. */
interface AdminMilestoneInformation {
  hasQRCode: boolean;
  orbitMilestoneType: AdminMilestoneType;
}

/** Inputs of ActionGetScanMilestoneQRCode (SB :814-819): ScanClientId and ScannedQRCodeInfo (ScannedQRCodeInfoRec of
    Connect2_OrbitMobile_BL, the same structure as the input of GetScanEventQRCode). */
export type ScanMilestoneQRCodeInputsWire = ActionInputs<PathOf<typeof ORBIT, 'ActionGetScanMilestoneQRCode'>>;

/** Outputs of ActionGetScanMilestoneQRCode: Response (GetScanMilestoneQRCodeResponseRec) and QRCodeErrorTypeId (the
    check-in status, static entity of Connect2_OrbitMobile_BL; the block does not read it). */
export type ScanMilestoneQRCodeWire = ActionOutputs<PathOf<typeof ORBIT, 'ActionGetScanMilestoneQRCode'>>;

/** The check-in that the scan sends: the event, the milestone and its type, the scanned member and the admin. */
interface ScanMilestoneCheckIn {
  EventId: string;
  MilestoneId: string;
  MilestoneType: string;
  MemberId: string;
  member: ScannedMemberNames;
  admin: ScannerAdmin;
}

/** The fields of Response that the block reads (SB :1305-1330). */
interface ScanMilestoneQRCodeResult {
  UserRole: string;
  GuestRole: string;
  Tag: string;
  Seats: QRCodeSeatItem[];
  RowAllocation: string;
  SeatingPlanName: string;
  Status: QRCodeStatus;
}

export const toAdminMilestoneInformation = (wire: MilestoneInformationWire): AdminMilestoneInformation => ({
  hasQRCode: wire.HasQRCode,
  orbitMilestoneType: wire.OrbitMilestoneType,
});

/** ScanClientId and ScannedQRCodeInfo as OnHandle_ScanCode builds them (SB :1276-1302); the other attributes keep
    their default values. */
export const toScanMilestoneQRCodeInputs = (
  scanClientId: string,
  c: ScanMilestoneCheckIn,
): ScanMilestoneQRCodeInputsWire => ({
  ScanClientId: scanClientId,
  ScannedQRCodeInfo: {
    EventId: c.EventId,
    MilestoneId: c.MilestoneId,
    MilestoneType: c.MilestoneType,
    ScanDate: NULL_DATE_TIME,
    ScannedUserInformation: {
      MemberId: c.MemberId,
      MemberFirstName: c.member.FirstName,
      MemberLastName: c.member.Lastname,
      MemberLocality: c.member.LocalityName,
      MemberCountry: c.member.CountryName,
      MemberRole: '',
      MemberGuestRole: '',
      MemberTag: '',
      MemberRowAllocation: '',
      MemberRowAllocations: { List: [] },
      MemberSeatingPlan: '',
    },
    ScannerAdminInfo: {
      AdminMemberId: c.admin.MemberId,
      AdminFirstName: c.admin.FirstName,
      AdminLastName: c.admin.LastName,
      AdminLocality: c.admin.Locality,
      AdminCountry: c.admin.Country,
    },
  },
});

export const toScanMilestoneQRCodeResult = (wire: ScanMilestoneQRCodeWire): ScanMilestoneQRCodeResult => {
  const r = wire.Response;
  return {
    UserRole: r.UserRole,
    GuestRole: r.GuestRole,
    Tag: r.Tag,
    Seats: osList(r.Seats).map((s) => ({ MilestoneName: s.MilestoneName, SeatAllocation: s.SeatAllocation })),
    RowAllocation: r.RowAllocation,
    SeatingPlanName: r.SeatingPlanName,
    Status: { Success: r.Status.Success, ErrorMessage: r.Status.ErrorMessage },
  };
};

/** DataActionGet_MilestoneInformation of ScreenBlock_AdminMilestoneDetail: HasQRCode and the milestone type. */
export async function fetchAdminMilestoneInformation(
  inputs: AdminMilestoneInformationCallInputs,
): Promise<AdminMilestoneInformation> {
  const wire = await callAction(ORBIT, 'ScreenBlock_AdminMilestoneDetail/DataActionGet_MilestoneInformation', {
    ...inputs,
  });
  return toAdminMilestoneInformation(wire);
}

/** GetScanMilestoneQRCode (server action of ScreenBlock_AdminMilestoneDetail): the check-in of a scanned member at
    the milestone. It may record the check-in on the server (unclear, OrbitAdminMilestoneDetail Q1): only the mocks
    answer it. */
export async function fetchScanMilestoneQRCode(
  scanClientId: string,
  checkIn: ScanMilestoneCheckIn,
): Promise<ScanMilestoneQRCodeResult> {
  const wire = await callAction(
    ORBIT,
    'ActionGetScanMilestoneQRCode',
    toScanMilestoneQRCodeInputs(scanClientId, checkIn),
  );
  return toScanMilestoneQRCodeResult(wire);
}
