import { fetchAssembleEvent } from '@/api/event';
import { useFlowState } from '@/platform/navigation';
import { getIANATimezone, showUnknownErrorMessage } from '@/pages/AssembleDetail/components/actions';
import type { AssembleDetailInputs } from '@/pages/AssembleDetail/inputs';
import {
  assembleEventDetailReducer,
  initialAssembleEventDetailState,
  withMeetingDateTime,
  type AssembleEventDetailState,
} from './assembleEventDetailState';

/** The flows of the block AssembleEventDetail: OnInitialize (DeviceTimezone) and OnReady (GetAssembleEvent and
    GetAssembleEvent_OnAfterFetch). The component AssembleEventDetail calls this hook.
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail */

/** The inputs of the block. */
export type AssembleEventDetailParameters = Pick<AssembleDetailInputs, 'SeriesId' | 'EventId' | 'Start'>;

/** The events of the block that its flows raise. */
export interface AssembleEventDetailEvents {
  /** UpdateTitle(Title). */
  onUpdateTitle: (title: string) => void;
}

/** The state and the flows of the block. `blockId` is the block instance id (`b2-$b4`).
    - OnReady runs after the first render, once per block (also when StrictMode runs the mount effect again). A view
      that the view cache restored with the meeting does nothing. Otherwise GetAssembleEvent (with the inputs,
      DeviceTimezone and IsDataFetched), then GetAssembleEvent_OnAfterFetch: an IsUnavailable meeting is kept and
      ShowUnknownErrorMessage shows the service interruption message; otherwise the meeting with its DateTime
      (withMeetingDateTime), UpdateTitle(the meeting type title) and IsDataFetched True. The block never raises
      EventNotFound. A failure goes to the flow handler.
    Flow scope (item 8): GetAssembleEvent is a data action (R1, AssembleEventDetail.js:806, `flow.fetch`): after the
    unmount its answer and its failure are dropped, so GetAssembleEvent_OnAfterFetch (:922) does not run: no service
    interruption message (:933-934), no UpdateTitle, no state write, no raise. UpdateTitle goes through `flow.events`
    (R3). */
export function useAssembleEventDetail(
  blockId: string,
  inputs: AssembleEventDetailParameters,
  events: AssembleEventDetailEvents,
): AssembleEventDetailState {
  const { state, dispatch, latest, parameters, flow } = useFlowState({
    viewName: `Assemble.AssembleEventDetail#${blockId.replace(/\$/g, '')}`,
    reducer: assembleEventDetailReducer,
    initial: initialAssembleEventDetailState(getIANATimezone()),
    parameters: inputs,
    events,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (_isAlive, restored) => onReady(restored),
  });

  async function onReady(restored: boolean) {
    if (restored && latest.current.getAssembleEvent !== null) return;
    const { SeriesId, EventId, Start } = parameters.current;
    const { deviceTimezone, isDataFetched } = latest.current;
    // R1
    const result = await flow.fetch(
      fetchAssembleEvent({
        SeriesId,
        EventId,
        Start,
        DeviceTimezone: deviceTimezone,
        IsDataFetched: isDataFetched,
      }),
    );
    const summary = result.AssembleEvent.AssembleEventSummary;
    if (summary.IsUnavailable) {
      dispatch({ getAssembleEvent: result });
      // ShowUnknownErrorMessage(GetUnavailableEventErrorMessage, GetUnavailableEventErrorMessage): it ignores both.
      showUnknownErrorMessage();
      return;
    }
    dispatch({ getAssembleEvent: withMeetingDateTime(result, parameters.current.Start) });
    flow.events.onUpdateTitle(summary.AssembleEventType?.Title ?? '');
    dispatch({ isDataFetched: true });
  }

  return state;
}
