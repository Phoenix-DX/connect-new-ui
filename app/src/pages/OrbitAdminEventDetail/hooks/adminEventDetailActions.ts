import { log } from '@/platform/log/log';
import { ApplicationEvents_Orbit } from '@/pages/OrbitAdminEventDetail/staticEntities';

/** The client actions of the scan flow, without React: the audit events of Connect2_OrbitMobile_MUI and the admin id
    rule of OnHandle_ScanCode. useAdminEventDetail calls them. The reading of a scanned QR code
    (deserializeQRCodeInformation) is in lib/orbit/actions.ts and containsIgnoreCase in lib/ubtConnectUtils/actions.ts,
    shared with OrbitAdminMilestoneDetail (auto decision O2, 2026-10-29).
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail */

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
