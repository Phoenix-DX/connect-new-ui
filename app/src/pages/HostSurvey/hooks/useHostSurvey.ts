import { useCallback, useEffect, useRef } from 'react';
import { fetchHostSurvey, type HostSurveyResult } from '@/api/event';
import type { HostSurveyInputs } from '@/pages/HostSurvey/inputs';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import {
  getLocalGenderPreferences,
  getLocalHostSurveySteps,
  getLocalHouseFloors,
  getLocalSurveyStatusByJSONName,
  localHostSurveyStepsRead,
  useOrbitStaticEntitiesVersion,
  type LocalGenderPreference,
  type LocalHouseFloor,
} from '@/platform/storage/localEntities';
import {
  INITIAL_HOST_SURVEY_STATE,
  SurveyStatus,
  hostSurveyCallInputs,
  hostSurveyReducer,
  hostSurveyStepFilter,
  type HostSurveyState,
} from './hostSurveyState';

/** The events of ScreenBlock_HostSurvey that the screen handles. */
export interface HostSurveyEvents {
  /** Event NavigateTo_Back: the screen's OnHandle_NavigateTo_Back. */
  onNavigateToBack: () => void;
}

/** What the page renders and the handlers of the view. */
export interface HostSurveyFlows {
  /** The block variables (rendered). */
  state: HostSurveyState;
  /** GetLocalHouseFloors.List, read from the local entities at render (RefreshStaticEntities, CR-HostSurvey-1). */
  houseFloors: LocalHouseFloor[];
  /** GetLocalGenderPreferences.List, read as the floors. */
  genderPreferences: LocalGenderPreference[];
  /** The Edit link of a summary section: NavigateTo_SpecificStep(HostSurveyStepId). */
  onEditStep: (hostSurveyStepId: number) => void;
  /** The BackNavigation event of the BackNavigationHandler: OnHandle_BackNavigation. */
  onBackNavigation: () => void;
}

/** The variables and the flows of ScreenBlock_HostSurvey (HS = Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.
    ScreenBlock_HostSurvey.mvc.js).
    - OnReady (HS :4723-4798), before the first paint (`beforePaint`, decision W28): a view that the view cache
      restored does nothing (P-BACK). Otherwise IsFetchingData = True and RefreshData (HS :5490-5520): GetHostSurvey
      with the block variables of the moment it starts, then OnAfterFetch_GetHostSurvey (HS :5043-5084): HasError →
      IsFetchingData = False; else HostSurvey = Response and RefreshLocalSurveyStatus.
    - RefreshLocalSurveyStatus (HS :6078-6120): the current status (GetCurrentLocalSurveyStatus), IsConfirmedSurvey,
      then RefreshLocalSurveySteps (HS :5825-5881): CurrentStep = the first step, HasDataSteps, IsFetchingData = False.
      The original's aggregates wait for the device database; here the store's mirror may not be loaded yet on a page
      opened by URL, so the flow goes on when the store changes (useOrbitStaticEntitiesVersion).
    - The data steps (SetStepData, ValidateStepEdit, the popups, PostHostSurvey) are not captured (HostSurvey Q2).
    Decision W23: the call that started runs to its end after an unmount, but it writes no state then (`isAlive`).
    StrictMode makes one call (`beforePaint` runs OnReady once). A failed call keeps the skeleton and reaches no
    flow handler, as the port did before this step.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey */
export function useHostSurvey(inputs: HostSurveyInputs, events: HostSurveyEvents): HostSurveyFlows {
  /** A flow that waits for the store's first read (RefreshLocalSurveyStatus). */
  const waitingForStore = useRef(false);

  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
  } = useFlowState({
    viewName: 'Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey',
    reducer: hostSurveyReducer,
    initial: INITIAL_HOST_SURVEY_STATE,
    parameters: inputs,
    events,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (isAlive, restored) => onReady(isAlive, restored),
    beforePaint: true,
  });

  /** RefreshLocalSurveyStatus → GetCurrentLocalSurveyStatus → OnAfterFetch_GetSurveyStatus (HS :7116-7147), then
      RefreshLocalSurveySteps → GetLocalHostSurveySteps → OnAfterFetch_GetHostSurveySteps. */
  const refreshLocalSurveyStatus = useCallback(() => {
    if (!localHostSurveyStepsRead()) {
      waitingForStore.current = true;
      return;
    }
    waitingForStore.current = false;
    const statusJsonName = latest.current.hostSurvey.SurveyInfo.HostProfileSurveyStatus;
    dispatch({ type: 'surveyStatusRead', status: getLocalSurveyStatusByJSONName(statusJsonName)[0] });
    dispatch({ type: 'surveyStepsRead', steps: getLocalHostSurveySteps(hostSurveyStepFilter(latest.current)) });
  }, [dispatch, latest]);

  /** OnReady, then RefreshData and OnAfterFetch_GetHostSurvey. */
  const onReady = async (isAlive: IsAlive, restored: boolean) => {
    if (restored) return;
    dispatch({ type: 'fetchStarted' });
    let result: HostSurveyResult;
    try {
      result = await fetchHostSurvey(hostSurveyCallInputs(latest.current, parameters.current));
    } catch {
      // A failed call shows nothing and the skeleton stays, as in the port before this step (no flow handler).
      return;
    }
    if (!isAlive()) return;
    // OnAfterFetch_GetHostSurvey.
    if (result.HasError) {
      dispatch({ type: 'fetchFailed' });
      return;
    }
    dispatch({ type: 'surveyFetched', survey: result.Response });
    refreshLocalSurveyStatus();
  };

  // The store's first read (or a sync) goes on with a flow that waits for it.
  const storeVersion = useOrbitStaticEntitiesVersion();
  useEffect(() => {
    if (waitingForStore.current) refreshLocalSurveyStatus();
  }, [storeVersion, refreshLocalSurveyStatus]);

  return {
    state,
    houseFloors: getLocalHouseFloors(),
    genderPreferences: getLocalGenderPreferences(),
    onEditStep: (hostSurveyStepId) => {
      dispatch({ type: 'stepSelected', hostSurveyStepId });
    },
    // HS :6958-7115: Unable to Host → NavigateTo_Back; a confirmed survey lets the navigation go on; the popups of the
    // data steps (ReturnNavigation, ReturnBack) are not captured (Q2).
    onBackNavigation: () => {
      if (latest.current.currentStatus.Id === SurveyStatus.unableToHost) eventsRef.current.onNavigateToBack();
    },
  };
}
