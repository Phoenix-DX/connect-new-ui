import { fetchOneSchoolCards, type LocalityTimezone, type OneSchoolCard } from '@/api/locality';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState } from '@/platform/navigation';
import {
  INITIAL_LOCALITY_ONESCHOOL_GLOBAL,
  localityOneSchoolGlobalReducer,
  oneSchoolListCallInputs,
  type ListRow,
  type LocalityOneSchoolGlobalAction,
} from './localityBlocksState';
import { useReadyOnce } from './readyOnce';

/** The inputs of Locality_OneSchoolGlobal. */
export interface LocalityOneSchoolGlobalParameters {
  /** In_LocalityId (Long Integer as text). */
  localityId: string;
  /** In_LocalityTimezoneData (UI_LocalityTimezone). */
  localityTimezoneData: LocalityTimezone;
}

/** What the OneSchool Global tag renders. */
export interface LocalityOneSchoolGlobalFlows {
  /** Out_OneSchoolGlobal_List2: three skeleton cards, then the fetched ones. */
  schools: ListRow<OneSchoolCard>[];
  /** Get_OneSchoolGlobal_List_IsLoading: true until the first answer. */
  isLoading: boolean;
  /** Handler_OnScrollEnding: Event_ScrollEnding of the list. The list waits for the returned promise before it
      raises the event again; a failure goes to the flow handler. */
  onScrollEnding: () => Promise<void>;
}

/** The flows of the OneSchool Global schools of a locality (the OneSchool Global tag).
    - ScreenEvent_OnReady: a view that the view cache restored with the data keeps it; else three skeleton cards
      (GetSkeletonList_UI_OneSchoolGlobal_ListCard) and the refresh of Get_OneSchoolGlobal_List.
    - OnAfterFetch_Get_OneSchoolGlobal_List: the first time ListClear and IsLoading False, then ListAppendAll.
    - Handler_OnScrollEnding: fetched and a full page → StartIndex += Offset and the refresh.
    @origin UBTConnect.Directory_Locality.Locality_OneSchoolGlobal */
export function useLocalityOneSchoolGlobal(inputs: LocalityOneSchoolGlobalParameters): LocalityOneSchoolGlobalFlows {
  const ready = useReadyOnce();
  const { state, dispatch, latest, parameters } = useFlowState({
    viewName: 'Locality_OneSchoolGlobal',
    reducer: localityOneSchoolGlobalReducer,
    initial: INITIAL_LOCALITY_ONESCHOOL_GLOBAL,
    parameters: inputs,
    onReady: (isAlive, restored) => ready.once(isAlive, () => onReady(restored)),
  });

  /** A state write of OnReady, skipped after the unmount (W23). */
  const write = (action: LocalityOneSchoolGlobalAction) => {
    if (ready.isAlive()) dispatch(action);
  };

  /** Refresh Get_OneSchoolGlobal_List, then OnAfterFetch_Get_OneSchoolGlobal_List. */
  const refresh = async () => {
    const cards = await fetchOneSchoolCards(oneSchoolListCallInputs(latest.current, parameters.current));
    write({ type: 'schoolsFetched', cards });
  };

  async function onReady(restored: boolean) {
    if (restored && latest.current.isDataFetched) return;
    write({ type: 'skeletonShown' });
    await refresh();
  }

  const onScrollEnding = async () => {
    const v = latest.current;
    if (!v.isDataFetched) return;
    if (v.out_OneSchoolGlobal_List.length < v.getOneSchoolGlobal_List_Offset) return;
    dispatch({ type: 'nextPageRequested' });
    await refresh();
  };

  return {
    schools: state.out_OneSchoolGlobal_List2,
    isLoading: state.get_OneSchoolGlobal_List_IsLoading,
    onScrollEnding: () => onScrollEnding().catch(raiseToFlowHandler),
  };
}
