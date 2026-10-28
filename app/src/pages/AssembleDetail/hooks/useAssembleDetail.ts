import { getPreloadObject, useFlowState } from '@/platform/navigation';
import {
  assembleDetailReducer,
  initializeFromPreload,
  INITIAL_ASSEMBLE_DETAIL_STATE,
  titleUpdate,
  type AssembleDetailState,
} from './assembleDetailState';

/** The flows of the block ScreenBlock_AssembleDetail: OnInitialize and the UpdateTitle event of AssembleEventDetail.
    The page calls this hook and passes the result to AssembleDetailView.
    @origin Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail */

/** What the page gives the view and AssembleEventDetail. */
export interface AssembleDetailFlows {
  /** The block variables (rendered). */
  state: AssembleDetailState;
  /** UpdateTitle(Title) of AssembleEventDetail. */
  onUpdateTitle: (title: string) => void;
}

/** The state and the flows of the block. `blockId` is the block instance id (`$b2`).
    - OnInitialize runs after the first render, as in the old port: on a new visit, OnInitialize_Preload and the title
      (initializeFromPreload); a view that the view cache restored keeps its variables. It runs once per block, also
      when StrictMode (dev) runs the mount effect again (the once-guard of useFlowState).
    - UpdateTitle: the title, unless it is empty.
    Flow scope (item 8): no flow of the block awaits (OnReady returns at once, UpdateTitle is synchronous), so no rule
    of R1 to R4 applies. */
export function useAssembleDetail(blockId: string, assembleEventTypeTile: string): AssembleDetailFlows {
  const { state, dispatch, parameters } = useFlowState({
    viewName: `Assemble.ScreenBlock_AssembleDetail#${blockId.replace(/\$/g, '')}`,
    reducer: assembleDetailReducer,
    initial: INITIAL_ASSEMBLE_DETAIL_STATE,
    parameters: { assembleEventTypeTile },
    onReady: (_isAlive, restored) => {
      if (!restored) dispatch(initializeFromPreload(getPreloadObject(), parameters.current.assembleEventTypeTile));
      return Promise.resolve();
    },
  });

  return {
    state,
    onUpdateTitle: (title) => {
      const patch = titleUpdate(title);
      if (patch) dispatch(patch);
    },
  };
}
