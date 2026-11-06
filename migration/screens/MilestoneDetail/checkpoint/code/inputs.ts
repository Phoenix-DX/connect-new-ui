/** The route inputs of MilestoneDetail, from the query string by their original names. Long Integers stay text. The
    server calls of the screen are in the domains api/event (GetGmpMilestoneHost, GetAccommodationHost, Get_Document)
    and api/image (the signed photos of the member cards).
    @origin UBTConnect.Legacy_OrbitEventsFlow.MilestoneDetail */
export interface MilestoneDetailInputs {
  /** In_FromNotification: the screen opens from a notification, and the milestone type comes from the server. */
  In_FromNotification: boolean;
  In_MilestoneId: string;
  /** In_EventId ("0" when absent). */
  In_EventId: string;
  /** In_HostId ("0" when absent). */
  In_HostId: string;
  In_OrbitMilestoneTypeId: string;
  In_MilestoneName: string;
  In_EventName: string;
}

/** Boolean input from the query string (OutSystems writes "True" / "False"). */
const osBoolean = (value: string | null): boolean => value?.toLowerCase() === 'true';

/** Screen inputs from the query string with the original names and the defaults of the old port. */
export function readMilestoneDetailInputs(params: URLSearchParams): MilestoneDetailInputs {
  return {
    In_FromNotification: osBoolean(params.get('In_FromNotification')),
    In_MilestoneId: params.get('In_MilestoneId') ?? '',
    In_EventId: params.get('In_EventId') ?? '0',
    In_HostId: params.get('In_HostId') ?? '0',
    In_OrbitMilestoneTypeId: params.get('In_OrbitMilestoneTypeId') ?? '',
    In_MilestoneName: params.get('In_MilestoneName') ?? '',
    In_EventName: params.get('In_EventName') ?? '',
  };
}
