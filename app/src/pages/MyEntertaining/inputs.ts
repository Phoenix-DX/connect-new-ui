/** The route input of MyEntertaining, from the query string by its original name. The screen calls no action of its
    own: the nested Embedded_MyEntertaining makes the calls (`@/api/entertaining`).
    @origin UBTConnect.Calendar.MyEntertaining */
export interface MyEntertainingInputs {
  /** MyCalendarEventSourceId (Text): the event source that the calendar shows first. */
  MyCalendarEventSourceId: string;
}

/** MyCalendarEventSourceId (Text) from the query string, "" when it is absent. */
export function readMyEntertainingInputs(params: URLSearchParams): MyEntertainingInputs {
  return { MyCalendarEventSourceId: params.get('MyCalendarEventSourceId') ?? '' };
}
