import { log } from '@/platform/log/log';
import { ApplicationEvents_Orbit } from '@/pages/OrbitAdminEventDetail/staticEntities';

/** The client actions of the scan flow, without React: the reading of a scanned QR code (OnHandle_ScanCode) and the
    audit events of Connect2_OrbitMobile_MUI. useAdminEventDetail calls them.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail */

/** QRCodeInformationRec (Connect2_OrbitMobile_MUI; JSON names "eventid", "id", "milestoneid"). */
export interface QRCodeInformation {
  EventId: string;
  MemberId: string;
  MilestoneId: string;
}

/** A Long Integer read from JSON (a number or a numeric text). Any other value fails, as the runtime's converter does. */
function jsonLongInteger(value: unknown, name: string): string {
  if (value === undefined || value === null) return '0';
  const text = typeof value === 'number' ? String(Math.trunc(value)) : typeof value === 'string' ? value.trim() : '';
  if (!/^-?\d+$/.test(text)) throw new Error(`Failed to deserialize JSON to QRCodeInformation: ${name}`);
  return String(BigInt(text));
}

/** JSONDeserialize_QRCodeInformation of the lowercased scanned text. As the OutSystems JSON deserializer: an empty text
    gives the default record, an invalid one throws "Failed to deserialize JSON to …". */
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

/** OnApplicationEvent_LaunchQRCodeScanner and OnApplicationEvent_QRCodeScanned (Connect2_OrbitMobile_MUI, as
    OnApplicationEvent_ClickEvent): JSON-serialize the payload and raise zOnApplicationEvent_Wrapper(event id, JSON),
    the app's audit event. Here it is the app log, as for the audit events of the other Orbit routes. */
export function onApplicationEvent_Orbit(
  event: keyof typeof ApplicationEvents_Orbit,
  auditPayload: Record<string, string>,
): void {
  log.info('ApplicationEvent', { EventId: ApplicationEvents_Orbit[event], Payload: JSON.stringify(auditPayload) });
}

/** The OutSystems Integer range of TextToInteger (MIN_INTEGER_VALUE, MAX_INTEGER_VALUE of the runtime). */
const MIN_INTEGER_VALUE = -2147483648;
const MAX_INTEGER_VALUE = 2147483647;

/** IntegerToLongInteger(TextToInteger(Text)), as OnHandle_ScanCode sets ScannerAdminInfo.AdminMemberId
    (ScreenBlock_AdminEventDetail.mvc.js:1018). TextToInteger of the runtime gives 0 when the text is not an integer
    (format "^[-]?[0-9]+$") or when its value is outside the Integer range; IntegerToLongInteger keeps the value. */
export function textToIntegerToLongInteger(text: string): string {
  if (!/^-?[0-9]+$/.test(text)) return '0';
  const value = Number.parseInt(text, 10);
  return value >= MIN_INTEGER_VALUE && value <= MAX_INTEGER_VALUE ? String(value) : '0';
}

/** Index(Text, Search, 0, SearchFromEnd False, IgnoreCase True) <> -1: the check of the "Failed to deserialize JSON"
    message in the AllExceptions handler of OnHandle_ScanCode (ScreenBlock_AdminEventDetail.mvc.js:1150). */
export function containsIgnoreCase(text: string, search: string): boolean {
  return text.toLowerCase().includes(search.toLowerCase());
}
