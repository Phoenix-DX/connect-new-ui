import { log } from '../../../lib/log';
import { timeFormatGetWeekDay } from '../../../shared/Connect2_OrbitMobile_MUI/lib/actions';
import { ApplicationEvents_Orbit } from './staticEntities';

/* Client actions of Connect2_OrbitMobile_MUI the block and its popup call (runtime-sources/Connect2_OrbitMobile_MUI
   .controller.js = C, Connect2_OrbitMobile_MUI.TimeFormat.js = TF) and the QR code reading of OnHandle_ScanCode
   (SB = runtime-sources/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.mvc.js). */

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** GetFormattedLocalDateTime(In_DateTime, In_IncludeTime, In_IncludeWeekDay, In_AbbreviateWeekDay,
    In_SeparateByCommas, In_ReplaceSunday) (C:3036-3110, JS node C:3171-3189): like GetFormattedDateTime but on the
    local parts of the date: [weekday + " "] + day + " " + 3-letter month (TF.getMonthName, TF:48-51) + " " + year
    [+ " h:mm AM"]. */
export function getFormattedLocalDateTime(
  inDateTime: Date,
  inIncludeTime: boolean,
  inIncludeWeekDay: boolean,
  inAbbreviateWeekDay: boolean,
  inSeparateByCommas: boolean,
  inReplaceSunday: boolean,
): string {
  const weekDay = inIncludeWeekDay
    ? `${timeFormatGetWeekDay(inDateTime.getDay(), inAbbreviateWeekDay, false, inSeparateByCommas, inReplaceSunday)} `
    : '';
  const hours = inDateTime.getHours();
  const minutes = inDateTime.getMinutes();
  const time = inIncludeTime
    ? ` ${hours === 0 ? 12 : hours <= 12 ? hours : hours - 12}:${minutes <= 9 ? `0${minutes}` : minutes}${hours <= 11 ? ' AM' : ' PM'}`
    : '';
  const month = (MONTH_NAMES[inDateTime.getMonth()] ?? '').substring(0, 3);
  return `${weekDay}${inDateTime.getDate()} ${month} ${inDateTime.getFullYear()}${time}`;
}

/** QRCodeInformationRec (Connect2_OrbitMobile_MUI.model.js:7896-7902; JSON names "eventid", "id", "milestoneid"). */
export interface QRCodeInformation {
  EventId: string;
  MemberId: string;
  MilestoneId: string;
}

/** A Long Integer read from JSON (number or numeric text); anything else fails as the runtime's converter. */
function jsonLongInteger(value: unknown, name: string): string {
  if (value === undefined || value === null) return '0';
  const text = typeof value === 'number' ? String(Math.trunc(value)) : typeof value === 'string' ? value.trim() : '';
  if (!/^-?\d+$/.test(text)) throw new Error(`Failed to deserialize JSON to QRCodeInformation: ${name}`);
  return String(BigInt(text));
}

/** JSONDeserialize_QRCodeInformation of the lowercased scanned text (SB ctrl :955-961; OutSystems.js JSON
    deserialize: an empty text gives the default record, an invalid one throws "Failed to deserialize JSON to …"). */
export function deserializeQRCodeInformation(codeScanned: string): QRCodeInformation {
  const text = codeScanned.toLowerCase();
  if (text === '') return { EventId: '0', MemberId: '0', MilestoneId: '' };
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch (e) {
    throw new Error(`Failed to deserialize JSON to QRCodeInformation: ${e instanceof Error ? e.message : ''}`, {
      cause: e,
    });
  }
  const record = typeof data === 'object' && data !== null ? (data as Record<string, unknown>) : {};
  const milestoneId = record.milestoneid;
  return {
    EventId: jsonLongInteger(record.eventid, 'eventid'),
    MemberId: jsonLongInteger(record.id, 'id'),
    MilestoneId:
      typeof milestoneId === 'string'
        ? milestoneId
        : typeof milestoneId === 'number' || typeof milestoneId === 'boolean'
          ? String(milestoneId)
          : '',
  };
}

/** OnApplicationEvent_LaunchQRCodeScanner / OnApplicationEvent_QRCodeScanned (C, as OnApplicationEvent_ClickEvent
    :5534-5560): JSON-serialize the payload and raise zOnApplicationEvent_Wrapper(event id, JSON), the app's audit
    event, here the app log (as the other Orbit routes' audit events). */
export function onApplicationEvent_Orbit(
  event: keyof typeof ApplicationEvents_Orbit,
  auditPayload: Record<string, string>,
): void {
  log.info('ApplicationEvent', { EventId: ApplicationEvents_Orbit[event], Payload: JSON.stringify(auditPayload) });
}
