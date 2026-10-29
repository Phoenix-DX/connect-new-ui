import { useEffect } from 'react';
import { useOneSchoolGlobalDetailsQuery, type OneSchoolGlobalDetails } from '@/api/locality';
import { useFlowState, useWasRestoredFromCache } from '@/platform/navigation';
import {
  INITIAL_ONE_SCHOOL_GLOBAL_DETAILS_STATE,
  oneSchoolGlobalDetailsCallInputs,
  oneSchoolGlobalDetailsReducer,
  type OneSchoolGlobalDetailsInputs,
  type OneSchoolGlobalDetailsState,
} from './oneSchoolGlobalDetailsState';

/** The view cache name of the screen form (the variables of OneSchoolGlobalDetails before TST moved them to the block). */
export const SCREEN_VIEW_NAME = 'Directory_OneSchoolGlobal.OneSchoolGlobalDetails';

/** How the block is used. The screen OneSchoolGlobalDetails uses the defaults. */
interface OneSchoolGlobalDetailsOptions {
  /** IsRestoredFromCache of OneSchoolGlobalDetails_Block. Default: the screen's IsViewRestoredFromCache
      (OneSchoolGlobalDetails.mvc.js OnInitialize). The slot EntitiesCarousel_OneSchoolGlobal gives False
      (EntitiesCarousel_OneSchoolGlobal.mvc.js view), so a slide always fetches. */
  isRestoredFromCache?: boolean;
  /** The view cache name of this instance. Default SCREEN_VIEW_NAME; a carousel slide adds the school id, as
      HouseholdDetails_Block does. */
  viewName?: string;
}

/** What the page renders and the handlers of the button group and of the actions menu. */
export interface OneSchoolGlobalDetailsFlows {
  /** The screen variables (rendered). */
  state: OneSchoolGlobalDetailsState;
  /** The outputs of GetOneSchoolGlobalDetails; null until it answers (IsDataFetched False). */
  details: OneSchoolGlobalDetails | null;
  /** GetOneSchoolGlobalDetails failed. */
  hasFetchError: boolean;
  /** The OnChange of the button group: Selected_OneschoolGlobal_SubsectionId. */
  onSubsectionChange: (subsectionId: string) => void;
  /** OnChange_Bookmark of Directory_EntityDetailsActions: LocalIsBookmarked. */
  onChangeBookmark: (isBookmarked: boolean) => void;
}

/** The variables and the data action of the screen OneSchoolGlobalDetails (the screen controller).
    - OnInitialize and OnReady: the state starts from the OnReady values (oneSchoolGlobalDetailsState). A view that the
      view cache restores starts from its saved variables.
    - OnReady: a view that the view cache restored with its data keeps it, without a call. Otherwise the refresh of
      DataActionGetOneSchoolGlobalDetails (refresh only), which sends the screen variables of the moment it starts.
      The answer is kept for the view cache. A failure keeps the skeleton card and goes to the screen's handleError,
      the Directory_OneSchoolGlobal flow handler.
    Flow scope (item 8): the data action (R1, OneSchoolGlobalDetails_Block.js:1126) is a query of api/locality. A call
    that started runs to its end after an unmount, but its answer and its failure are dropped: the state write is an
    effect of the mounted hook, and the query-cache subscription skips a query without observers. No `flow.fetch` is
    needed (design §2.6). StrictMode makes one call.
    @origin UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails */
export function useOneSchoolGlobalDetails(
  inputs: OneSchoolGlobalDetailsInputs,
  options: OneSchoolGlobalDetailsOptions = {},
): OneSchoolGlobalDetailsFlows {
  const screenRestored = useWasRestoredFromCache();
  const restored = options.isRestoredFromCache ?? screenRestored;
  const { state, dispatch, latest, parameters } = useFlowState({
    viewName: options.viewName ?? SCREEN_VIEW_NAME,
    reducer: oneSchoolGlobalDetailsReducer,
    initial: INITIAL_ONE_SCHOOL_GLOBAL_DETAILS_STATE,
    parameters: inputs,
  });

  const skipFetch = restored && state.GetOneSchoolGlobalDetails !== null;
  const getDetails = useOneSchoolGlobalDetailsQuery(
    inputs.In_OneSchoolGlobalId,
    () => oneSchoolGlobalDetailsCallInputs(latest.current, parameters.current),
    !skipFetch,
  );

  // The answer, kept for the view cache.
  useEffect(() => {
    if (getDetails.data) dispatch({ type: 'detailsFetched', details: getDetails.data });
  }, [getDetails.data, dispatch]);
  // A failed fetch goes to the screen's handleError, the Directory_OneSchoolGlobal flow handler, once per failed fetch:
  // the query-cache subscription does it (platform/feedback/flowErrors.ts installQueryErrorsToFlowHandler).

  return {
    state,
    details: skipFetch ? state.GetOneSchoolGlobalDetails : (getDetails.data ?? null),
    hasFetchError: getDetails.isError,
    onSubsectionChange: (subsectionId) => {
      dispatch({ type: 'subsectionSelected', subsectionId });
    },
    onChangeBookmark: (isBookmarked) => {
      dispatch({ type: 'bookmarkChanged', isBookmarked });
    },
  };
}
