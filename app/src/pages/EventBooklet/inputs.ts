/** The route inputs of EventBooklet, from the query string by their original names. The three data actions of the
    booklet are in the domain api/event.
    @origin UBTConnect.Legacy_OrbitEventsFlow.EventBooklet */
export interface EventBookletInputs {
  /** In_EventId (Long Integer, as text): the event of the booklet. */
  In_EventId: string;
  /** In_EventName (Text): the title until the filters data action gives the event name. */
  In_EventName: string;
}

/** In_EventId ("0" when it is absent) and In_EventName ("" when it is absent) from the query string. */
export function readEventBookletInputs(params: URLSearchParams): EventBookletInputs {
  return { In_EventId: params.get('In_EventId') ?? '0', In_EventName: params.get('In_EventName') ?? '' };
}
