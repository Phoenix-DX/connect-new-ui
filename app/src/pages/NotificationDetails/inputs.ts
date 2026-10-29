/** The route input of NotificationDetails, from the query string.
    @origin UBTConnect.App_Notifications.NotificationDetails */
interface NotificationDetailsInputs {
  /** MessageInstanceId (Long Integer, mandatory; kept as a string): the input of FetchMessageInstance. */
  MessageInstanceId: string;
}

const osLongInput = (v: string | null): string => (v === null || v === '' ? '0' : v);

/** MessageInstanceId (Long Integer) from the query string; the OutSystems default 0 when it is absent. */
export function readNotificationDetailsInputs(params: URLSearchParams): NotificationDetailsInputs {
  return { MessageInstanceId: osLongInput(params.get('MessageInstanceId')) };
}
