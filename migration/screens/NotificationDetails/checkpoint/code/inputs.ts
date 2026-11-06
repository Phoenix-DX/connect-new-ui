/** The route inputs of NotificationDetails, from the query string by their original names, with their OutSystems
    defaults (live TST 2026-11-05, UBTConnect.App_Notifications.NotificationDetails.mvc.js:142-153). The screen reads
    them once, as the first values of its variables.
    @origin UBTConnect.App_Notifications.NotificationDetails */
export interface NotificationDetailsInputs {
  /** MessageInstanceId (Long Integer as text, "0" when absent). */
  MessageInstanceId: string;
  /** MessageTemplateId (Long Integer as text, "0" when absent). */
  MessageTemplateId: string;
  /** HardwareId (Text, "" when absent). The Notifications list sends "". */
  HardwareId: string;
}

/** OutSystems Long Integer input from the query string: "0" for an absent or empty value. */
const osLongInput = (value: string | null): string => (value === null || value === '' ? '0' : value);

/** Screen inputs from the query string with the original names and the OutSystems defaults (0, 0, ""). */
export function readNotificationDetailsInputs(params: URLSearchParams): NotificationDetailsInputs {
  return {
    MessageInstanceId: osLongInput(params.get('MessageInstanceId')),
    MessageTemplateId: osLongInput(params.get('MessageTemplateId')),
    HardwareId: params.get('HardwareId') ?? '',
  };
}
