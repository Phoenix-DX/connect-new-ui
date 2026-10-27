import { useCallback, useEffect, useRef } from 'react';
import {
  fetchHostSurvey,
  postHostSurvey,
  type HostSurveyHelper,
  type HostSurveyMeal,
  type HostSurveyResult,
  type HostSurveyRoom,
  type HostSurveyVehicle,
} from '@/api/event';
import { feedbackMessageAfterTransition, focusOnFirstInvalidInput } from '@/pages/HostSurvey/actions';
import { feedbackMessageAutoClose } from '@/platform/feedback/feedbackMessageAutoClose';
import { isSystemException } from '@/platform/feedback/flowErrors';
import type { BackNavigationEvent } from '@/platform/navigation/backQueue';
import type { HostSurveyInputs } from '@/pages/HostSurvey/inputs';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import {
  HostSurveyStep,
  getLocalBedSizes,
  getLocalGenderPreferences,
  getLocalHelperRoles,
  getLocalHelperStatus,
  getLocalHostSurveySteps,
  getLocalHouseFloors,
  getLocalMealTypes,
  getLocalSurveyStatusById,
  getLocalSurveyStatusByJSONName,
  getLocalVehicleOwners,
  getLocalVehicleTypes,
  localHostSurveyStepsRead,
  useOrbitStaticEntitiesVersion,
  type LocalBedSize,
  type LocalGenderPreference,
  type LocalHelperRole,
  type LocalHelperStatus,
  type LocalHouseFloor,
  type LocalMealType,
  type LocalVehicleOwner,
  type LocalVehicleType,
} from '@/platform/storage/localEntities';
import {
  INITIAL_HOST_SURVEY_STATE,
  SurveyStatus,
  getStepProperties,
  hostSurveyCallInputs,
  hostSurveyReducer,
  hostSurveyStepFilter,
  saveFailedGoesOn,
  type HostSurveyNoteField,
  type HostSurveyState,
} from './hostSurveyState';

/** The events of ScreenBlock_HostSurvey that the screen handles. */
export interface HostSurveyEvents {
  /** Event NavigateTo_Back: the screen's OnHandle_NavigateTo_Back. */
  onNavigateToBack: () => void;
}

/** The item that OnHandle_SaveItem receives: the record of the current step (the others are empty records). */
export interface HostSurveySavedItem {
  room?: HostSurveyRoom;
  meal?: HostSurveyMeal;
  helper?: HostSurveyHelper;
  vehicle?: HostSurveyVehicle;
}

/** What the page renders and the handlers of the view. */
export interface HostSurveyFlows {
  /** The block variables (rendered). */
  state: HostSurveyState;
  /** GetLocalHouseFloors.List, read from the local entities at render (RefreshStaticEntities, CR-HostSurvey-1). */
  houseFloors: LocalHouseFloor[];
  /** GetLocalGenderPreferences.List, read as the floors. */
  genderPreferences: LocalGenderPreference[];
  /** GetLocalBedSizes.List (accommodation step). */
  bedSizes: LocalBedSize[];
  /** GetLocalMealTypes.List (meal step). */
  mealTypes: LocalMealType[];
  /** GetLocalHelperStatus.List (helper step and summary). */
  helperStatus: LocalHelperStatus[];
  /** GetLocalHelperRoles.List (helper step and summary). */
  helperRoles: LocalHelperRole[];
  /** GetLocalVehicleOwners.List (vehicle step and summary). */
  vehicleOwners: LocalVehicleOwner[];
  /** GetLocalVehicleTypes.List (vehicle step and summary). */
  vehicleTypes: LocalVehicleType[];
  /** NavigateTo_SpecificStep(HostSurveyStepId): the Edit link of a summary section, NavigateTo_Step of the navigation. */
  onEditStep: (hostSurveyStepId: number) => void;
  /** Click_PrimaryButton of the footer: OnHandle_PrimaryButton. */
  onPrimaryButton: () => void;
  /** Click_SecondaryButton of the footer: OnHandle_SecondaryButton. */
  onSecondaryButton: () => void;
  /** PrimaryAction of a popup: OnHandle_PopUp_Primary. */
  onPopUpPrimary: () => void;
  /** SecondaryAction of a popup: OnHandle_PopUp_Secondary. */
  onPopUpSecondary: () => void;
  /** Close of a popup: OnHandle_PopUp_Close. */
  onPopUpClose: () => void;
  /** Click_Edit of an item: OnHandle_EditItem(row). */
  onEditItem: (row: number) => void;
  /** Click_Delete of an item: OnHandle_DeleteItem(row). */
  onDeleteItem: (row: number) => void;
  /** Click_Delete of AddHelper: OnHandle_DeleteSearchHelper. */
  onDeleteSearchHelper: () => void;
  /** Save_Successful of an item: OnHandle_SaveItem(row, item). */
  onSaveItem: (row: number, item: HostSurveySavedItem) => void;
  /** Save_Failed of an item: OnHandle_SaveFailed(row, DisableMessage). */
  onSaveFailed: (row: number, disableMessage: boolean) => void;
  /** MealDataReset of a meal: ToggleSingleResetMealData(row). */
  onMealDataReset: (position: number) => void;
  /** Save_Successful of AddHelper: OnHandle_AddHelpers(helpers). */
  onAddHelpers: (helpers: HostSurveyHelper[]) => void;
  /** "+ Add <step>": OnClick_AddItem. */
  onAddItem: () => void;
  /** A note input of a data step. */
  onNoteChange: (field: HostSurveyNoteField, value: string) => void;
  /** Switch_HasVehicles. */
  onHasVehiclesChange: (value: boolean) => void;
  /** The BackNavigation event of the BackNavigationHandler: OnHandle_BackNavigation. */
  onBackNavigation: (event: BackNavigationEvent) => void;
}

/** The data steps (GetStepProperties gives their properties; any other step ends the flows that need one). */
const DATA_STEPS: readonly number[] = [
  HostSurveyStep.accommodation,
  HostSurveyStep.meal,
  HostSurveyStep.helper,
  HostSurveyStep.vehicle,
];

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
    - The data steps (decision Legacy_OrbitEventsFlow Q1 (a), built from the TST code): the footer buttons, the popups,
      the item events and PostHostSurvey below; their state parts are the pure client actions of hostSurveyState.
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
    dispatch({
      type: 'surveyStepsRead',
      steps: getLocalHostSurveySteps(hostSurveyStepFilter(latest.current)),
      helperRoles: getLocalHelperRoles(),
    });
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

  /** NavigateTo_Back event of the block. */
  const navigateToBack = () => {
    eventsRef.current.onNavigateToBack();
  };
  const validate = () => {
    dispatch({ type: 'stepEditValidated' });
  };
  const closePopUp = () => {
    dispatch({ type: 'popUpClosed' });
  };
  const selectStep = (hostSurveyStepId: number) => {
    dispatch({ type: 'stepSelected', hostSurveyStepId, helperRoles: getLocalHelperRoles() });
  };

  /** PostHostSurvey(SurveyStatus) (HS :3561-3580 server call): HostProfileSurveyStatus = GetSurveyStatusById(status)
      .JSON_Name; no vehicles kept when HasVehicles is False; unless a post runs: IsPostingSurvey = True, the call,
      SurveySubmitted = True and IsPostingSurvey = False. AllExceptions (not a system exception): IsPostingSurvey =
      False and the flow ends normally. */
  const postSurvey = async (surveyStatusId: number) => {
    dispatch({ type: 'postPrepared', statusJsonName: getLocalSurveyStatusById(surveyStatusId).JSON_Name });
    if (latest.current.isPostingSurvey) return;
    dispatch({ type: 'postStarted' });
    try {
      await postHostSurvey(latest.current.hostSurvey);
    } catch (error) {
      if (isSystemException(error)) throw error;
      dispatch({ type: 'postFailed' });
      return;
    }
    dispatch({ type: 'postFinished' });
  };

  /** OnHandle_PrimaryButton: on a data step ValidateStepEdit; no data (and not adding a helper) → the NoInfo popup;
      a step in edit → TrySave; else Survey_Next. On the navigation and summary steps, unless a section is in edit:
      PostHostSurvey(Confirmed), NavigateTo_Back and "Thank you, your survey has been submitted.". */
  const onPrimaryButton = async () => {
    const s = latest.current;
    if (s.isConfirmedSurvey) return;
    const step = s.currentStep.step;
    if (step.IsDataStep) {
      validate();
      const v = latest.current;
      if (
        !getStepProperties(step, v.stepProperties).HasData &&
        !(step.Id === HostSurveyStep.helper && v.isAddingHelper)
      ) {
        dispatch({ type: 'popUpOpened', popUp: 'NoInfo' });
        return;
      }
      if (getStepProperties(step, v.stepProperties).IsEdit) dispatch({ type: 'trySaveStarted' });
      else dispatch({ type: 'nextStep', helperRoles: getLocalHelperRoles() });
      return;
    }
    const info = s.hostSurvey.SurveyInfo;
    const p = s.stepProperties;
    if (
      (info.AccommodationSurvey && info.AccommodationSurveyUpdate && p.Accommodation.IsEdit) ||
      (info.MealSurvey && info.MealSurveyUpdate && p.Meals.IsEdit) ||
      (info.HelperSurvey && p.Helpers.IsEdit) ||
      (info.VehicleSurvey && p.Vehicles.IsEdit)
    ) {
      return;
    }
    await postSurvey(SurveyStatus.confirmed);
    navigateToBack();
    feedbackMessageAfterTransition('Thank you, your survey has been submitted.', 1);
  };

  /** OnHandle_SecondaryButton: on a data step ValidateStepEdit, then the Cancel popup when the step is in edit with
      data (helpers: or adding), else NavigateTo_SpecificStep(Navigation). A confirmed survey, the navigation and the
      summary steps: NavigateTo_Back. */
  const onSecondaryButton = () => {
    const s = latest.current;
    const id = s.currentStep.step.Id;
    if (!s.isConfirmedSurvey && id !== HostSurveyStep.navigation && id !== HostSurveyStep.summary) {
      if (!s.currentStep.step.IsDataStep) return;
      validate();
      const v = latest.current;
      const p = getStepProperties(v.currentStep.step, v.stepProperties);
      if (p.IsEdit && (id === HostSurveyStep.helper ? p.HasData || v.isAddingHelper : p.HasData)) {
        dispatch({ type: 'popUpOpened', popUp: 'Cancel' });
        return;
      }
      selectStep(HostSurveyStep.navigation);
      return;
    }
    navigateToBack();
  };

  /** OnHandle_PopUp_Primary (Yes): Cancel → CancelEdit; Delete → DeleteItem (or close AddHelper); both then
      ValidateStepEdit and close. NoInfo → the step leaves edit, ValidateStepEdit, close, Survey_Next. ReturnBack →
      PostHostSurvey(Sent), close, NavigateTo_Back, "Thank you, your survey has been saved as a draft.".
      ReturnNavigation → CancelEdit, ValidateStepEdit, close, NavigateTo_SpecificStep(Navigation). */
  const onPopUpPrimary = async () => {
    const popUp = latest.current.popUpInfo;
    if (popUp.IsShowPopup_Cancel) {
      dispatch({ type: 'editCancelled' });
    } else if (popUp.IsShowPopup_Delete) {
      dispatch({ type: 'deleteConfirmed' });
    } else if (popUp.IsShowPopup_NoInfo) {
      if (!DATA_STEPS.includes(latest.current.currentStep.step.Id)) return;
      dispatch({ type: 'noInfoConfirmed' });
      validate();
      closePopUp();
      dispatch({ type: 'nextStep', helperRoles: getLocalHelperRoles() });
      return;
    } else if (popUp.IsShowPopup_ReturnBack) {
      await postSurvey(SurveyStatus.sent);
      closePopUp();
      navigateToBack();
      feedbackMessageAfterTransition('Thank you, your survey has been saved as a draft.', 1);
      return;
    } else if (popUp.IsShowPopup_ReturnNavigation) {
      dispatch({ type: 'editCancelled' });
      validate();
      closePopUp();
      selectStep(HostSurveyStep.navigation);
      return;
    } else {
      return;
    }
    validate();
    closePopUp();
  };

  /** OnHandle_PopUp_Secondary: Cancel → CancelEdit, ValidateStepEdit, close, NavigateTo_SpecificStep(Navigation);
      ReturnBack (Discard Survey) → SurveyDiscarded, close, NavigateTo_Back; the others close. */
  const onPopUpSecondary = () => {
    const popUp = latest.current.popUpInfo;
    if (popUp.IsShowPopup_Cancel) {
      dispatch({ type: 'editCancelled' });
      validate();
      closePopUp();
      selectStep(HostSurveyStep.navigation);
    } else if (popUp.IsShowPopup_Delete || popUp.IsShowPopup_NoInfo) {
      closePopUp();
    } else if (popUp.IsShowPopup_ReturnBack) {
      dispatch({ type: 'surveyDiscarded' });
      closePopUp();
      navigateToBack();
    } else if (popUp.IsShowPopup_ReturnNavigation) {
      closePopUp();
    }
  };

  /** OnHandle_SaveFailed(row, DisableMessage): the state part, then (unless the flow ended) the error message when
      DisableMessage is False and FocusOnFirstInvalidInput. */
  const onSaveFailed = (row: number, disableMessage: boolean) => {
    dispatch({ type: 'saveFailed', row });
    if (!saveFailedGoesOn(latest.current)) return;
    if (!disableMessage) {
      feedbackMessageAutoClose({
        title: '',
        message: 'Ensure you complete all required fields.',
        messageType: 'error',
        encodedHtml: true,
        extendedClass: '',
        delayMs: 0,
        useDebounce: false,
      });
    }
    focusOnFirstInvalidInput();
  };

  /** OnHandle_BackNavigation: Unable to Host → NavigateTo_Back; a confirmed survey or one without data steps lets the
      navigation go on. An open popup: PreventNavigation and close it. The summary after a submit and the navigation
      step after a submit or a discard let it go on; the navigation step otherwise: PreventNavigation and the
      ReturnBack popup. A data step and the summary: PreventNavigation and the ReturnNavigation popup. */
  const onBackNavigation = (event: BackNavigationEvent) => {
    const s = latest.current;
    if (s.currentStatus.Id === SurveyStatus.unableToHost) {
      navigateToBack();
      return;
    }
    if (s.isConfirmedSurvey || !s.hasDataSteps) return;
    const popUp = s.popUpInfo;
    if (
      popUp.IsShowPopup_Cancel ||
      popUp.IsShowPopup_Delete ||
      popUp.IsShowPopup_NoInfo ||
      popUp.IsShowPopup_ReturnBack ||
      popUp.IsShowPopup_ReturnNavigation
    ) {
      event.preventDefault();
      closePopUp();
      return;
    }
    const id = s.currentStep.step.Id;
    if (!s.currentStep.step.IsDataStep) {
      if (id === HostSurveyStep.summary) {
        if (s.surveySubmitted) return;
      } else if (id === HostSurveyStep.navigation) {
        if (s.surveySubmitted || s.surveyDiscarded) return;
        event.preventDefault();
        dispatch({ type: 'popUpOpened', popUp: 'ReturnBack' });
        return;
      } else {
        return;
      }
    }
    event.preventDefault();
    dispatch({ type: 'popUpOpened', popUp: 'ReturnNavigation' });
  };

  return {
    state,
    houseFloors: getLocalHouseFloors(),
    genderPreferences: getLocalGenderPreferences(),
    bedSizes: getLocalBedSizes(),
    mealTypes: getLocalMealTypes(),
    helperStatus: getLocalHelperStatus(),
    helperRoles: getLocalHelperRoles(),
    vehicleOwners: getLocalVehicleOwners(),
    vehicleTypes: getLocalVehicleTypes(),
    onEditStep: selectStep,
    onPrimaryButton: () => {
      void onPrimaryButton();
    },
    onSecondaryButton,
    onPopUpPrimary: () => {
      void onPopUpPrimary();
    },
    onPopUpSecondary,
    onPopUpClose: closePopUp,
    onEditItem: (row) => {
      dispatch({ type: 'editItem', row });
    },
    onDeleteItem: (row) => {
      dispatch({ type: 'deleteItemAsked', row });
    },
    onDeleteSearchHelper: () => {
      dispatch({ type: 'deleteSearchHelperAsked' });
    },
    onSaveItem: (row, item) => {
      dispatch({ type: 'itemSaved', row, ...item });
    },
    onSaveFailed,
    onMealDataReset: (position) => {
      dispatch({ type: 'mealDataReset', position });
    },
    onAddHelpers: (helpers) => {
      dispatch({ type: 'helpersAdded', helpers });
    },
    onAddItem: () => {
      dispatch({ type: 'addItemClicked' });
    },
    onNoteChange: (field, value) => {
      dispatch({ type: 'noteChanged', field, value });
    },
    onHasVehiclesChange: (value) => {
      dispatch({ type: 'hasVehiclesChanged', value });
    },
    onBackNavigation,
  };
}
