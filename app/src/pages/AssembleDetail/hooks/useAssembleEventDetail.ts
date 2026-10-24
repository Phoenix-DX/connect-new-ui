import { useRef } from 'react';
import { fetchAssembleEvent } from '@/api/event';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import { getIANATimezone, showUnknownErrorMessage } from '@/pages/AssembleDetail/components/actions';
import type { AssembleDetailInputs } from '@/pages/AssembleDetail/inputs';
import {
  assembleEventDetailReducer,
  initialAssembleEventDetailState,
  withMeetingDateTime,
  type AssembleEventDetailPatch,
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
    - Decision W23: after the unmount, the flow skips its state writes and UpdateTitle (a write of the parent's title)
      only; the service interruption message still shows. */
export function useAssembleEventDetail(
  blockId: string,
  inputs: AssembleEventDetailParameters,
  events: AssembleEventDetailEvents,
): AssembleEventDetailState {
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
  } = useFlowState({
    viewName: `Assemble.AssembleEventDetail#${blockId.replace(/\$/g, '')}`,
    reducer: assembleEventDetailReducer,
    initial: initialAssembleEventDetailState(getIANATimezone()),
    parameters: inputs,
    events,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (isAlive, restored) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      return onReady(restored);
    },
  });

  /** A state write after an await, skipped after the unmount (W23). */
  const write = (patch: AssembleEventDetailPatch) => {
    if (newestReadyRun.current()) dispatch(patch);
  };

  async function onReady(restored: boolean) {
    if (restored && latest.current.getAssembleEvent !== null) return;
    const { SeriesId, EventId, Start } = parameters.current;
    const { deviceTimezone, isDataFetched } = latest.current;
    const result = await fetchAssembleEvent({
      SeriesId,
      EventId,
      Start,
      DeviceTimezone: deviceTimezone,
      IsDataFetched: isDataFetched,
    });
    const summary = result.AssembleEvent.AssembleEventSummary;
    if (summary.IsUnavailable) {
      write({ getAssembleEvent: result });
      // ShowUnknownErrorMessage(GetUnavailableEventErrorMessage, GetUnavailableEventErrorMessage): it ignores both.
      showUnknownErrorMessage();
      return;
    }
    write({ getAssembleEvent: withMeetingDateTime(result, parameters.current.Start) });
    if (newestReadyRun.current()) eventsRef.current.onUpdateTitle(summary.AssembleEventType?.Title ?? '');
    write({ isDataFetched: true });
  }

  return state;
}
