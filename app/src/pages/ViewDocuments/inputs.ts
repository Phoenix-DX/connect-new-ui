/** The route inputs of ViewDocuments, from the query string by their original names. The screen gives them to
    ScreenBlock_ViewDocuments: its data action sends them, the title shows In_EventName, and the helpdesk subject uses
    the name, the dates and the location.
    @origin UBTConnect.Legacy_OrbitEventsFlow.ViewDocuments */
export interface ViewDocumentsInputs {
  /** In_MemberId (Long Integer, as text): the member. */
  In_MemberId: string;
  /** In_EventId (Long Integer, as text): the event. */
  In_EventId: string;
  /** In_EventName: the title of the screen. */
  In_EventName: string;
  /** In_EventStartDate (Date Time, as text; "" is the null date). */
  In_EventStartDate: string;
  /** In_EventEndDate (Date Time, as text; "" is the null date). */
  In_EventEndDate: string;
  /** In_EventLocation. */
  In_EventLocation: string;
}

/** The inputs from the query string. An absent id is "0" (the OutSystems default); an absent text is "". */
export function readViewDocumentsInputs(params: URLSearchParams): ViewDocumentsInputs {
  return {
    In_MemberId: params.get('In_MemberId') ?? '0',
    In_EventId: params.get('In_EventId') ?? '0',
    In_EventName: params.get('In_EventName') ?? '',
    In_EventStartDate: params.get('In_EventStartDate') ?? '',
    In_EventEndDate: params.get('In_EventEndDate') ?? '',
    In_EventLocation: params.get('In_EventLocation') ?? '',
  };
}
