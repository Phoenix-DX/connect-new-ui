/** The route inputs of MessageDetail, from the query string by their original names, with their OutSystems defaults.
    The screen gives them to ScreenBlock_MessageDetail, which reads them once, as the first values of its variables.
    The server calls of the block are in the domains api/message (GetMessageInstance and
    GetMessageTemplateParametersByMessageTemplateId) and api/notification (Wrapper_NotificationOpened).
    @origin UBTConnect.Legacy_MyNotificationsFlow.MessageDetail */
export interface MessageDetailInputs {
  /** MessageInstanceId (Long Integer as text, "0" when absent). */
  MessageInstanceId: string;
  /** isOriginPushNotification: the screen opened from a push notification. */
  isOriginPushNotification: boolean;
  /** MessageTemplateId (Long Integer as text, "0" when absent). */
  MessageTemplateId: string;
  /** HardwareId: the device of the push notification. */
  HardwareId: string;
}

/** OutSystems Boolean input from the query string ("True"/"False", any case). */
const osBoolean = (value: string | null): boolean => value?.toLowerCase() === 'true';
/** OutSystems Long Integer input from the query string: "0" for an absent or empty value. */
const osLongInput = (value: string | null): string => (value === null || value === '' ? '0' : value);

/** Screen inputs from the query string with the original names and the OutSystems defaults (0, False, ""). */
export function readMessageDetailInputs(params: URLSearchParams): MessageDetailInputs {
  return {
    MessageInstanceId: osLongInput(params.get('MessageInstanceId')),
    isOriginPushNotification: osBoolean(params.get('isOriginPushNotification')),
    MessageTemplateId: osLongInput(params.get('MessageTemplateId')),
    HardwareId: params.get('HardwareId') ?? '',
  };
}
