/** The route inputs of EventDetail, from the query string by their original names. The screen gives them to
    ScreenBlock_EventDetail, which sends them with its four data actions (domain api/event: Get_EventDetails,
    Get_HostSurveyStatus, Get_HasDocuments, Get_HasQRCode). Long Integers stay text.
    @origin UBTConnect.Legacy_OrbitEventsFlow.EventDetail */
export interface EventDetailInputs {
  /** In_MemberId (Long Integer as text, "0" when absent). */
  In_MemberId: string;
  /** In_EventId (Long Integer as text, "0" when absent). */
  In_EventId: string;
  /** In_EventName: the title of the screen when it is not empty. */
  In_EventName: string;
  /** In_FromNotification: the screen opened from a notification. */
  In_FromNotification: boolean;
}

/** Boolean input from the query string (OutSystems writes "True" / "False"). */
const osBoolean = (value: string | null): boolean => value?.toLowerCase() === 'true';

/** Screen inputs from the query string. An absent Long Integer is "0" and an absent text is "". An empty value stays
    as it is. */
export function readEventDetailInputs(params: URLSearchParams): EventDetailInputs {
  return {
    In_MemberId: params.get('In_MemberId') ?? '0',
    In_EventId: params.get('In_EventId') ?? '0',
    In_EventName: params.get('In_EventName') ?? '',
    In_FromNotification: osBoolean(params.get('In_FromNotification')),
  };
}
