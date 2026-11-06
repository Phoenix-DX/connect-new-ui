import type { AssembleEventResult } from '@/api/event';
import { offsetDateTimeByUserUTCOffset } from '@/pages/AssembleDetail/components/actions';

/** The variables of the block AssembleEventDetail, the reducer and GetAssembleEvent_OnAfterFetch. Pure; the flows are
    in useAssembleEventDetail.
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail */

/** The variables of the block that the view cache keeps. */
export interface AssembleEventDetailState {
  /** DeviceTimezone: the device's IANA time zone (OnInitialize: GetIANATimezone). */
  deviceTimezone: string;
  /** IsDataFetched. */
  isDataFetched: boolean;
  /** The outputs of GetAssembleEvent: null until the first fetch answers. */
  getAssembleEvent: AssembleEventResult | null;
}

/** An assignment of one or more variables. */
type AssembleEventDetailPatch = Partial<AssembleEventDetailState>;

/** The variables after OnInitialize. */
export const initialAssembleEventDetailState = (deviceTimezone: string): AssembleEventDetailState => ({
  deviceTimezone,
  isDataFetched: false,
  getAssembleEvent: null,
});

/** The variables after an assignment. */
export const assembleEventDetailReducer = (
  state: AssembleEventDetailState,
  patch: AssembleEventDetailPatch,
): AssembleEventDetailState => ({ ...state, ...patch });

/** GetAssembleEvent_OnAfterFetch of a meeting that is not IsUnavailable: DateTime =
    OffsetDateTimeByUserUTCOffset(DateTime), and the null DateTime ("") takes the Start input. */
export function withMeetingDateTime(result: AssembleEventResult, start: string): AssembleEventResult {
  const summary = result.AssembleEvent.AssembleEventSummary;
  const converted = offsetDateTimeByUserUTCOffset(summary.DateTime);
  const dateTime = converted === '' ? start : converted;
  return {
    ...result,
    AssembleEvent: { ...result.AssembleEvent, AssembleEventSummary: { ...summary, DateTime: dateTime } },
  };
}

/** The error block "Meeting not found" shows: the fetched meeting IsNotFound or IsUnavailable. */
export const isMeetingNotFound = (data: AssembleEventResult | null): boolean =>
  data !== null && (data.IsNotFound || data.AssembleEvent.AssembleEventSummary.IsUnavailable === true);
