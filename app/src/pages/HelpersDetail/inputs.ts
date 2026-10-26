/** The route inputs of HelpersDetail, from the query string by their original names. The screen gives them to
    ScreenBlock_HelperDetails (In_EventName as In_PreloadEventName, In_MilestoneName as In_PreloadMilestoneName).
    @origin UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail */
export interface HelpersDetailInputs {
  /** In_EventId (Long Integer, as text): the event. */
  In_EventId: string;
  /** In_OrbitMilestoneTypeId: the milestone type of the header and of the skeleton. */
  In_OrbitMilestoneTypeId: string;
  /** In_MilestoneName: the milestone name of the header. */
  In_MilestoneName: string;
  /** In_EventName: the event name of the header and of the helpdesk subject. */
  In_EventName: string;
  /** In_HostId (Long Integer, as text): the householder of the hosting household. */
  In_HostId: string;
}

/** The inputs from the query string; an absent Long Integer is 0 and an absent Text is "". */
export function readHelpersDetailInputs(params: URLSearchParams): HelpersDetailInputs {
  return {
    In_EventId: params.get('In_EventId') ?? '0',
    In_OrbitMilestoneTypeId: params.get('In_OrbitMilestoneTypeId') ?? '',
    In_MilestoneName: params.get('In_MilestoneName') ?? '',
    In_EventName: params.get('In_EventName') ?? '',
    In_HostId: params.get('In_HostId') ?? '0',
  };
}
