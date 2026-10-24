/** The route inputs of HostSurvey, from the query string by their original names. The screen gives them to
    ScreenBlock_HostSurvey (`useHostSurvey`), which sends them with DataActionGetHostSurvey and shows the event name and
    dates in the header.
    @origin UBTConnect.Legacy_OrbitEventsFlow.HostSurvey */
export interface HostSurveyInputs {
  /** In_EventId (Long Integer, as text): the Orbit event. */
  In_EventId: string;
  /** In_MemberId (Long Integer, as text): the member who hosts. */
  In_MemberId: string;
  /** In_EventName: the header title; "" shows the event name of the survey. */
  In_EventName: string;
  /** In_EventStartDate (DateTime as text; "" = the null date). */
  In_EventStartDate: string;
  /** In_EventEndDate (DateTime as text; "" = the null date). */
  In_EventEndDate: string;
}

/** OutSystems null DateTime / Date: kept as "" for the components (the formatters treat "" as null). */
const date = (value: string): string => (value.startsWith('1900-01-01') ? '' : value);

/** A DateTime screen input from the URL (platform/navigation/osNavigate.ts puts ISO texts there): "" when absent or
    the OutSystems null date. */
export const dateTimeInput = (value: string | null): string => (value === null ? '' : date(value));

/** The inputs from the query string: the ids default to 0 and the event name to "" when they are absent. */
export function readHostSurveyInputs(params: URLSearchParams): HostSurveyInputs {
  return {
    In_EventId: params.get('In_EventId') ?? '0',
    In_MemberId: params.get('In_MemberId') ?? '0',
    In_EventName: params.get('In_EventName') ?? '',
    In_EventStartDate: dateTimeInput(params.get('In_EventStartDate')),
    In_EventEndDate: dateTimeInput(params.get('In_EventEndDate')),
  };
}
