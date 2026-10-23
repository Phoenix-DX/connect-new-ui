import { fetchSubdivisionCards, type SubdivisionCard } from '@/api/locality';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { setPreloadObject, useFlowState, useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import {
  INITIAL_LOCALITY_SUBDIVISIONS,
  localitySubdivisionsReducer,
  subdivisionListCallInputs,
  type ListRow,
  type LocalitySubdivisionsAction,
} from './localityBlocksState';
import { useReadyOnce } from './readyOnce';

/** The feature flag that the flows of the supper meetings read. The page reads it and gives it here. */
export interface LocalitySubdivisionsFlags {
  /** C2EnableCarousel (GetHasCarouselEnabled): a card opens SupperMeeting_Carousel, else SupperMeeting_Details. */
  hasCarouselEnabled: boolean;
}

/** What the supper meetings tag renders. */
export interface LocalitySubdivisionsFlows {
  /** Subdivision_Card_List: ten skeleton cards, then the fetched ones. */
  list: ListRow<SubdivisionCard>[];
  /** Subdivision_Card_List_IsLoading: true until the first answer. */
  isLoading: boolean;
  /** OnScrollEnding_RefreshSubdivisions: the OnScrollEnding event of the list. The list waits for the returned
      promise before it raises the event again; a failure goes to the flow handler. */
  onScrollEnding: () => Promise<void>;
  /** OnClick_NavigateToSubdivision(SubdivisionId): the click of a card. */
  onClickSubdivision: (subdivisionId: string) => void;
}

/** The flows of the supper meetings of a locality (the Supper Meetings tag).
    - ScreenEvent_OnReady: a view that the view cache restored with the data keeps it; else ten skeleton cards
      (GetSkeletonList_UI_SubdivisionCard) and the refresh of Get_Subdivision_List.
    - OnAfterFetch_Get_Subdivision_List: the first time ListClear and IsLoading False, then ListAppendAll.
    - OnScrollEnding_RefreshSubdivisions pages only when IsPaginated, which nothing sets: a no-op.
    - OnClick_NavigateToSubdivision: GetHasCarouselEnabled → the SubdivisionId of every card that
      Get_Subdivision_List returned as the preload object (PreloadedSupperMeetings) and SupperMeeting_Carousel at the
      clicked one; else SupperMeeting_Details.
    @origin UBTConnect.Directory_Locality.Locality_Subdivisions */
export function useLocalitySubdivisions(
  localityId: string,
  flags: LocalitySubdivisionsFlags,
): LocalitySubdivisionsFlows {
  const navigate = useOsNavigate();
  const ready = useReadyOnce();
  const { state, dispatch, latest } = useFlowState({
    viewName: 'Locality_Subdivisions',
    reducer: localitySubdivisionsReducer,
    initial: INITIAL_LOCALITY_SUBDIVISIONS,
    parameters: { localityId },
    onReady: (isAlive, restored) => ready.once(isAlive, () => onReady(restored)),
  });

  /** A state write of OnReady, skipped after the unmount (W23). */
  const write = (action: LocalitySubdivisionsAction) => {
    if (ready.isAlive()) dispatch(action);
  };

  /** Refresh Get_Subdivision_List, then OnAfterFetch_Get_Subdivision_List. */
  const refresh = async () => {
    const cards = await fetchSubdivisionCards(subdivisionListCallInputs(latest.current, localityId));
    write({ type: 'subdivisionsFetched', cards });
  };

  async function onReady(restored: boolean) {
    if (restored && latest.current.isDataFetched) return;
    write({ type: 'skeletonShown' });
    await refresh();
  }

  /** IsPaginated, fetched and a full page → the next page. */
  const onScrollEnding = async () => {
    const v = latest.current;
    if (!v.isPaginated || !v.isDataFetched) return;
    if (v.out_Subdivision_Card_List.length < v.getSubdivisions_Offset) return;
    dispatch({ type: 'nextPageRequested' });
    await refresh();
  };

  const onClickSubdivision = (subdivisionId: string) => {
    if (flags.hasCarouselEnabled) {
      setPreloadObject({ SupperMeetingIds: latest.current.out_Subdivision_Card_List.map((c) => c.subdivisionId) });
      navigate(`/${APP_ID}/SupperMeeting_Carousel`, { In_StartingSupperMeetingId: subdivisionId });
      return;
    }
    navigate(`/${APP_ID}/SupperMeeting_Details`, { In_SubdivsionId: subdivisionId });
  };

  return {
    list: state.subdivision_Card_List,
    isLoading: state.subdivision_Card_List_IsLoading,
    onScrollEnding: () => onScrollEnding().catch(raiseToFlowHandler),
    onClickSubdivision,
  };
}
