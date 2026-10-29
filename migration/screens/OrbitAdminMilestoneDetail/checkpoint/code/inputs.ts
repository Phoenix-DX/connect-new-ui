import { OS_NULL_DATE_TIME } from '@/lib/osDateTime';
import { textToLongInteger } from '@/lib/ubtConnectUtils/actions';

/** The route inputs of OrbitAdminMilestoneDetail, from the query string by their original names (P-PARAMS).
    OrbitAdminMilestones opens the screen with them (Handler_NavigateToMilestoneDetail, when IsScanPerMilestone).
    All seven are mandatory (SCR model :9-50). The server calls of the screen are in api/event and api/member.
    @origin UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestoneDetail */
export interface AdminMilestoneDetailInputs {
  /** In_EventId (Long Integer as text, "0" when absent). */
  In_EventId: string;
  In_MilestoneId: string;
  In_MilestoneName: string;
  /** DateTime as in the URL (the UTC instant), or the null date "1900-01-01T00:00:00" when absent. */
  In_MilestoneDate: string;
  /** As In_MilestoneDate. */
  In_MilestoneStartDate: string;
  /** As In_MilestoneDate. */
  In_MilestoneEndDate: string;
  In_MilestoneDescription: string;
}

/** The OutSystems null DateTime as a URL input (ServerDataConverter.asString of the null date). */
const NULL_DATE_TIME = OS_NULL_DATE_TIME;

/** The screen inputs: a missing Long Integer is 0, a missing DateTime the null date, a missing Text "". */
export function readInputs(params: URLSearchParams): AdminMilestoneDetailInputs {
  const dateTime = (name: string) => params.get(name) || NULL_DATE_TIME;
  return {
    In_EventId: textToLongInteger(params.get('In_EventId') ?? ''),
    In_MilestoneId: params.get('In_MilestoneId') ?? '',
    In_MilestoneName: params.get('In_MilestoneName') ?? '',
    In_MilestoneDate: dateTime('In_MilestoneDate'),
    In_MilestoneStartDate: dateTime('In_MilestoneStartDate'),
    In_MilestoneEndDate: dateTime('In_MilestoneEndDate'),
    In_MilestoneDescription: params.get('In_MilestoneDescription') ?? '',
  };
}
