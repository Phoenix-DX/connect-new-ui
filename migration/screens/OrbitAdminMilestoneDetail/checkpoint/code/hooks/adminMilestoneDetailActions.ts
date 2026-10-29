import { getFormattedDateTime, getFormattedTime_FromDateTime } from '@/lib/orbit/actions';
import { osDate } from '@/lib/os-wire';

/** The client logic of ScreenBlock_AdminMilestoneDetail without React (SB = the compiled block in
    migration/screens/OrbitAdminMilestoneDetail/sources/): the admin id rule of ScannerAdminInfo (OnHandle_ScanCode)
    and the expressions of the milestone rows. useAdminMilestoneDetail and the view call them. The reading of a scanned
    QR code (deserializeQRCodeInformation) is in lib/orbit/actions.ts and containsIgnoreCase in
    lib/ubtConnectUtils/actions.ts, shared with OrbitAdminEventDetail (auto decision O2, 2026-10-29).
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail */

/** If(TextToLongIntegerValidate(Text), TextToLongInteger(Text), IntegerToLongInteger(NullIdentifier())): how
    OnHandle_ScanCode sets ScannerAdminInfo.AdminMemberId from the cached user's MemberId (SB :1292). Unlike
    ScreenBlock_AdminEventDetail (TextToInteger), the whole Long Integer range is kept. */
export function textToLongIntegerValidated(text: string): string {
  const trimmed = text.trim();
  return /^-?\d+$/.test(trimmed) ? String(BigInt(trimmed)) : '0';
}

/** <> NullDate(): a DateTime input that is set. */
const isSet = (value: string): boolean => osDate(value) !== null;

/** The date row text (SB view :375-416): GetFormattedDateTime(In_MilestoneDate, False ×6) + (start and end set ?
    " " + GetFormattedTime_FromDateTime(start) + " - " + GetFormattedTime_FromDateTime(end) : ""). */
export function milestoneDateText(date: string, start: string, end: string): string {
  const day = getFormattedDateTime(date, false, false, false, false, false, false);
  return isSet(start) && isSet(end)
    ? `${day} ${getFormattedTime_FromDateTime(start)} - ${getFormattedTime_FromDateTime(end)}`
    : day;
}

/** Whether the date row shows: In_MilestoneDate <> NullDate() (SB view :380-384). */
export const hasMilestoneDate = (date: string): boolean => isSet(date);

/** The type row style (SB view :420-425): "flex-center-vertical" + (date set ? " margin-top-m" : ""). */
export const typeRowClass = (dateSet: boolean): string => `flex-center-vertical${dateSet ? ' margin-top-m' : ''}`;

/** The description row style (SB view :454-461): "flex-center-vertical" + (date set or a type name ?
    " margin-top-m" : ""). */
export const descriptionRowClass = (dateSet: boolean, typeName: string): string =>
  `flex-center-vertical${dateSet || typeName !== '' ? ' margin-top-m' : ''}`;
