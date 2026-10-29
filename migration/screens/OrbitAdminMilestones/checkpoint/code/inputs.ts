import { textToLongInteger } from '@/lib/ubtConnectUtils/actions';

/** The route input of OrbitAdminMilestones, from the query string by its original name (P-PARAMS). OrbitAdminLanding
    opens the screen with it when GetMilestoneScanFF is true.
    @origin UBTConnect.Legacy_OrbitAdminFlow.OrbitAdminMilestones */
export interface AdminMilestonesInputs {
  /** EventId (Long Integer as text, "0" when absent). */
  EventId: string;
}

/** The screen input: a missing Long Integer is 0. */
export function readInputs(params: URLSearchParams): AdminMilestonesInputs {
  return { EventId: textToLongInteger(params.get('EventId') ?? '') };
}
