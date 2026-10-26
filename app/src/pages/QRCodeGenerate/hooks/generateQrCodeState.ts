import type { EventQRCodeCallInputs, EventQRCodeData } from '@/api/event';
import type { QRCodeGenerateInputs } from '@/pages/QRCodeGenerate/inputs';
import type { AppManager_CachedUserInfoRec } from '@/platform/session/types';
import { getFormattedDateTime } from '@/lib/orbit/actions';

/** The variables of ScreenBlock_GenerateQRCode, the reducer and the client actions. Pure; the flows are in
    useGenerateQrCode.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode */

/** The block variables and the state of the data action Get_EventQRCode that the view reads. */
export interface GenerateQrCodeState {
  /** UserName: the first and last name of the signed-in member. */
  userName: string;
  /** UserLocation: the locality and the country of the signed-in member. */
  userLocation: string;
  /** UserSignedURL: the member photo ("" until GetCacheableSignedImageURL answers). */
  userSignedURL: string;
  /** IsFetchingData: True from the start of RefreshData until the pass is fetched. */
  isFetchingData: boolean;
  /** QRCodeData: the Response of Get_EventQRCode, which OnAfterFetch assigns. */
  qrCodeData: EventQRCodeData;
  /** Get_EventQRCode.IsDataFetched. */
  isDataFetched: boolean;
  /** Get_EventQRCode.Response.QRCodeAsBinary ("" is NullBinary()). */
  responseQRCodeAsBinary: string;
}

/** An assignment of one or more variables. */
export type GenerateQrCodePatch = Partial<GenerateQrCodeState>;

/** A new GetEventQRCode_ScreenRec: empty texts, no seat, NullBinary(). */
export const EMPTY_QR_CODE_DATA: EventQRCodeData = {
  GetEventQRCodeResponse: { GuestRole: '', QrCodeImage: '', Seats: [], Tag: '' },
  QRCodeAsBinary: '',
};

/** The variables at the start (the block has no OnInitialize: the defaults). */
export const INITIAL_GENERATE_QR_CODE_STATE: GenerateQrCodeState = {
  userName: '',
  userLocation: '',
  userSignedURL: '',
  isFetchingData: false,
  qrCodeData: EMPTY_QR_CODE_DATA,
  isDataFetched: false,
  responseQRCodeAsBinary: '',
};

/** The variables after an assignment. */
export const generateQrCodeReducer = (state: GenerateQrCodeState, patch: GenerateQrCodePatch): GenerateQrCodeState => ({
  ...state,
  ...patch,
});

/** RefreshData, "Set User data": UserName = FirstName + " " + LastName; UserLocation = Locality + (", " + Country when
    the locality is set, else Country). */
export function userVariablesOf(
  user: Pick<AppManager_CachedUserInfoRec, 'FirstName' | 'LastName' | 'Locality' | 'Country'>,
): Pick<GenerateQrCodeState, 'userName' | 'userLocation'> {
  return {
    userName: `${user.FirstName} ${user.LastName}`,
    userLocation: user.Locality + (user.Locality !== '' ? `, ${user.Country}` : user.Country),
  };
}

/** IntegerToLongInteger(TextToInteger(MemberId)): the entity id of the member photo. A text that does not start with
    a number gives "0". */
export const memberPhotoIdOf = (memberId: string): string => String(Number.parseInt(memberId, 10) || 0);

/** The block variables that the data action Get_EventQRCode sends, in their order. */
export function eventQRCodeCallInputs(state: GenerateQrCodeState, inputs: QRCodeGenerateInputs): EventQRCodeCallInputs {
  return {
    UserName: state.userName,
    UserLocation: state.userLocation,
    UserSignedURL: state.userSignedURL,
    IsFetchingData: state.isFetchingData,
    In_MemberId: inputs.In_MemberId,
    In_EventId: inputs.In_EventId,
    In_EventName: inputs.In_EventName,
    In_EventStartDate: inputs.In_EventStartDate,
    In_EventEndDate: inputs.In_EventEndDate,
    In_EventLocation: inputs.In_EventLocation,
  };
}

/** The answer of Get_EventQRCode (IsDataFetched, Response.QRCodeAsBinary), then OnAfterFetch_Get_EventQRCode:
    QRCodeData = Response. */
export function afterFetchOf(data: EventQRCodeData): GenerateQrCodePatch {
  return { isDataFetched: true, responseQRCodeAsBinary: data.QRCodeAsBinary, qrCodeData: data };
}

/** The view shows the pass when Get_EventQRCode is fetched and its QRCodeAsBinary is not NullBinary(); else the
    NoInformation message. */
export const hasPassOf = (state: GenerateQrCodeState): boolean =>
  state.isDataFetched && state.responseQRCodeAsBinary !== '';

/* ---- Client action of Connect2_OrbitMobile_MUI. Dates are OutSystems values as text; "" is the null date. ---- */

/** The date of the subject: GetFormattedDateTime(date, no time, with the weekday, full letters, abbreviated). */
const formattedDay = (dateTime: string) => getFormattedDateTime(dateTime, false, true, false, true, false, false);

/** GetContactHelpdeskSubject_Event(EventName, StartDateTime, EndDateTime, Location) → Out_FormattedSubject: EventName
    [+ " - " when a location or both dates follow], then Location [+ " - " when both dates follow], then
    "start - end" when both dates are set. */
export function getContactHelpdeskSubject_Event(
  eventName: string,
  startDateTime: string,
  endDateTime: string,
  location: string,
): string {
  const hasDates = startDateTime !== '' && endDateTime !== '';
  const name = eventName !== '' ? `${eventName}${location !== '' || hasDates ? ' - ' : ''}` : '';
  const place = location !== '' ? `${location}${hasDates ? ' - ' : ''}` : '';
  return `${name}${place}${hasDates ? `${formattedDay(startDateTime)} - ${formattedDay(endDateTime)}` : ''}`;
}
