import type {
  HostSurvey,
  HostSurveyCallInputs,
  HostSurveyHelper,
  HostSurveyMeal,
  HostSurveyRoom,
  HostSurveyVehicle,
} from '@/api/event';
import type { HostSurveyInputs } from '@/pages/HostSurvey/inputs';
import {
  HostSurveyStep,
  type HostSurveyStepFilter,
  type LocalHelperRole,
  type LocalHostSurveyStep,
  type LocalSurveyStatus,
} from '@/platform/storage/localEntities';

/** The state of ScreenBlock_HostSurvey and its reducer, and the pure parts of its flows: the block variables that the
    data action sends and the filter of the steps aggregate.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey */

/** StepProperties (StepPropertiesRec, Connect2_OrbitMobile_MUI.model.js): the edit state of one data step. The
    parent sets TrySave True to make the items in edit validate and save; IsEdit: an item is in edit; HasData: the
    step has an item or was confirmed empty. */
export interface StepProperties {
  IsEdit: boolean;
  TrySave: boolean;
  HasData: boolean;
}

/** The StepProperties variable of the block (StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord). */
export interface HostSurveyStepProperties {
  Accommodation: StepProperties;
  Meals: StepProperties;
  Helpers: StepProperties;
  Vehicles: StepProperties;
}

/** Static entity SurveyStatus of Connect2_OrbitMobile_MUI (static-entities-tst.json). */
export const SurveyStatus = { unableToHost: 1, confirmed: 2, sent: 3, pending: 4 } as const;

const EMPTY_STEP: LocalHostSurveyStep = { Id: 0, HeaderLabel: '', AddLabel: '', Order: 0, IsDataStep: false };
const EMPTY_STATUS: LocalSurveyStatus = { Id: 0, Label: '', JSON_Name: '' };

/** The HostSurvey variable before GetHostSurvey answers: every field at its default ("" for the null DateTimes). */
const EMPTY_SURVEY: HostSurvey = {
  SurveyInfo: {
    Id: '0',
    EventId: '0',
    EventName: '',
    EventStartDateTime: '',
    EventEndDateTime: '',
    MemberId: '0',
    LocalityName: '',
    CountryName: '',
    HostProfileSurveyStatus: '',
    AccommodationSurvey: false,
    AccommodationSurveyUpdate: false,
    AccommodationSurveyNote: '',
    MealSurvey: false,
    MealSurveyUpdate: false,
    MealSurveyNote: '',
    HelperSurvey: false,
    HelperSurveyNote: '',
    VehicleSurvey: false,
    VehicleSurveyNote: '',
    HostSurveyNote: '',
  },
  Rooms: { AccommodationNote: '', HostSurvey_RoomItem: [] },
  Meals: { MealNote: '', MealItemInfo: [] },
  Helpers: { HelperNote: '', HelperItemInfo: [] },
  Vehicles: { HasVehicles: false, VehicleItemInfo: [] },
};

/** PopUpInfo (TextTextBooleanBooleanBooleanBooleanBooleanRecord): the text of the open popup and which one is open. */
export interface PopUpInfo {
  Message: string;
  Title: string;
  IsShowPopup_Cancel: boolean;
  IsShowPopup_Delete: boolean;
  IsShowPopup_NoInfo: boolean;
  IsShowPopup_ReturnBack: boolean;
  IsShowPopup_ReturnNavigation: boolean;
}

/** The five popups of the block, by their GetPopUpInfo flag. */
type HostSurveyPopUp = 'Cancel' | 'NoInfo' | 'Delete' | 'ReturnNavigation' | 'ReturnBack';

const CLOSED_POPUP: PopUpInfo = {
  Message: '',
  Title: '',
  IsShowPopup_Cancel: false,
  IsShowPopup_Delete: false,
  IsShowPopup_NoInfo: false,
  IsShowPopup_ReturnBack: false,
  IsShowPopup_ReturnNavigation: false,
};

/** StepPropertiesRec defaults (all False). */
const STEP_DEFAULTS: StepProperties = { IsEdit: false, TrySave: false, HasData: false };
/** BlankStepProperties of OnReady (HS controller OnReady): IsEdit True, TrySave and HasData False. */
const BLANK_STEP: StepProperties = { IsEdit: true, TrySave: false, HasData: false };

const stepPropertiesOf = (p: StepProperties): HostSurveyStepProperties => ({
  Accommodation: { ...p },
  Meals: { ...p },
  Helpers: { ...p },
  Vehicles: { ...p },
});

/** The block variables (HS model :25-200) and the aggregate results that the view reads. The view cache keeps the
    record, so a back navigation shows the survey at once, without a call. */
export interface HostSurveyState {
  /** IsFetchingData: the skeleton shows while it is True. */
  isFetchingData: boolean;
  /** HostSurvey: the answer of GetHostSurvey, changed by the data steps. */
  hostSurvey: HostSurvey;
  /** GetHostSurvey.Response as fetched: CancelEdit of the meal step restores MealNote from it. */
  fetchedSurvey: HostSurvey;
  /** CurrentStep: the step on screen and its row number in the steps aggregate. */
  currentStep: { step: LocalHostSurveyStep; rowNumber: number };
  /** StepProperties: the edit state of the four data steps. */
  stepProperties: HostSurveyStepProperties;
  /** RoomNames: the room names of the accommodation step (SetStepData), for the name check of a room. */
  roomNames: string[];
  /** IsAddingHelper: the AddHelper block is open. */
  isAddingHelper: boolean;
  /** PopUpInfo: the open popup. */
  popUpInfo: PopUpInfo;
  /** PositionToDelete: the row the Delete popup removes. */
  positionToDelete: number;
  /** SurveyDiscarded: Discard Survey of the ReturnBack popup. */
  surveyDiscarded: boolean;
  /** SurveySubmitted: PostHostSurvey answered. */
  surveySubmitted: boolean;
  /** IsConfirmedSurvey: the survey status is Confirmed (read-only summary). */
  isConfirmedSurvey: boolean;
  /** HasDataSteps: a step of the survey asks for data. */
  hasDataSteps: boolean;
  /** FilteredHelperRoles: the helper roles that are not read-only (OnAfterFetch_GetLocalHelperRoles). */
  filteredHelperRoles: LocalHelperRole[];
  /** IsPostingSurvey: PostHostSurvey runs. */
  isPostingSurvey: boolean;
  /** GetCurrentLocalSurveyStatus.List.Current (LocalSurveyStatus where JSON_Name = HostProfileSurveyStatus, max 1). */
  currentStatus: LocalSurveyStatus;
  /** GetLocalHostSurveySteps.List. */
  steps: LocalHostSurveyStep[];
}

/** A note input of a data step and the field of HostSurvey that it changes. */
export type HostSurveyNoteField = 'HostSurveyNote' | 'AccommodationNote' | 'MealNote' | 'HelperNote';

/** The changes of the state: one per assignment group of the block's client actions (HS controller). */
export type HostSurveyAction =
  /** OnReady (not restored): StepProperties = BlankStepProperties (four times), IsFetchingData = True. */
  | { type: 'fetchStarted' }
  /** OnAfterFetch_GetHostSurvey with HasError: IsFetchingData = False. */
  | { type: 'fetchFailed' }
  /** OnAfterFetch_GetHostSurvey: HostSurvey = GetHostSurvey.Response. */
  | { type: 'surveyFetched'; survey: HostSurvey }
  /** OnAfterFetch_GetSurveyStatus: the current status, IsConfirmedSurvey = status Id = Confirmed. */
  | { type: 'surveyStatusRead'; status: LocalSurveyStatus | undefined }
  /** OnAfterFetch_GetHostSurveySteps: CurrentStep = the first row, HasDataSteps, RefreshStaticEntities, SetStepData,
      ValidateStepEdit, IsFetchingData = False. `helperRoles`: GetLocalHelperRoles.List. */
  | { type: 'surveyStepsRead'; steps: LocalHostSurveyStep[]; helperRoles: readonly LocalHelperRole[] }
  /** NavigateTo_SpecificStep(HostSurveyStepId). */
  | { type: 'stepSelected'; hostSurveyStepId: number; helperRoles: readonly LocalHelperRole[] }
  /** Survey_Next. */
  | { type: 'nextStep'; helperRoles: readonly LocalHelperRole[] }
  /** OnHandle_EditItem(In_CurrentRowNumber). */
  | { type: 'editItem'; row: number }
  /** OnHandle_DeleteItem(In_CurrentRowNumber): PositionToDelete and the Delete popup. */
  | { type: 'deleteItemAsked'; row: number }
  /** OnHandle_DeleteSearchHelper: the Delete popup. */
  | { type: 'deleteSearchHelperAsked' }
  /** GetPopUpInfo + PopUpInfo.IsShowPopup_<popUp> = True (PrimaryButton, SecondaryButton, OnHandle_BackNavigation). */
  | { type: 'popUpOpened'; popUp: HostSurveyPopUp }
  /** OnHandle_PopUp_Close. */
  | { type: 'popUpClosed' }
  /** OnHandle_SaveItem(row, item): the item of the current step. */
  | {
      type: 'itemSaved';
      row: number;
      room?: HostSurveyRoom;
      meal?: HostSurveyMeal;
      helper?: HostSurveyHelper;
      vehicle?: HostSurveyVehicle;
    }
  /** OnHandle_SaveFailed(row): the state part (the message and the focus are in the hook). */
  | { type: 'saveFailed'; row: number }
  /** ToggleSingleResetMealData(In_Position). */
  | { type: 'mealDataReset'; position: number }
  /** OnHandle_AddHelpers(In_HelperItemInfo). */
  | { type: 'helpersAdded'; helpers: HostSurveyHelper[] }
  /** OnClick_AddItem. */
  | { type: 'addItemClicked' }
  /** ValidateStepEdit. */
  | { type: 'stepEditValidated' }
  /** CancelEdit. */
  | { type: 'editCancelled' }
  /** OnHandle_PopUp_Primary, Delete popup: IsAddingHelper = False (helper step, adding) or DeleteItem + SetStepData. */
  | { type: 'deleteConfirmed' }
  /** OnHandle_PopUp_Primary, NoInfo popup: IsEdit = False for the step (and IsAddingHelper = False on the helper step). */
  | { type: 'noInfoConfirmed' }
  /** OnHandle_PrimaryButton, a step in edit: TrySave = True for the step. */
  | { type: 'trySaveStarted' }
  /** OnHandle_PopUp_Secondary, ReturnBack popup: SurveyDiscarded = True. */
  | { type: 'surveyDiscarded' }
  /** PostHostSurvey, before the call: HostProfileSurveyStatus = the JSON_Name of the status; the vehicles are cleared
      when HasVehicles is False. */
  | { type: 'postPrepared'; statusJsonName: string }
  /** PostHostSurvey: IsPostingSurvey = True. */
  | { type: 'postStarted' }
  /** PostHostSurvey answered: SurveySubmitted = True, IsPostingSurvey = False. */
  | { type: 'postFinished' }
  /** PostHostSurvey, AllExceptions (not a system exception): IsPostingSurvey = False. */
  | { type: 'postFailed' }
  /** The four note inputs (MaxLength 250): their variable. */
  | { type: 'noteChanged'; field: HostSurveyNoteField; value: string }
  /** Switch_HasVehicles: HostSurvey.Vehicles.HasVehicles. */
  | { type: 'hasVehiclesChanged'; value: boolean };

/** The block variables after OnInitialize: the model defaults. OnReady sets IsFetchingData True before the first
    paint (useFlowState `beforePaint`), so a new visit paints the skeleton first. A view that the view cache restores starts
    from its saved state instead. */
export const INITIAL_HOST_SURVEY_STATE: HostSurveyState = {
  isFetchingData: false,
  hostSurvey: EMPTY_SURVEY,
  fetchedSurvey: EMPTY_SURVEY,
  currentStep: { step: EMPTY_STEP, rowNumber: 0 },
  stepProperties: stepPropertiesOf(STEP_DEFAULTS),
  roomNames: [],
  isAddingHelper: false,
  popUpInfo: CLOSED_POPUP,
  positionToDelete: 0,
  surveyDiscarded: false,
  surveySubmitted: false,
  isConfirmedSurvey: false,
  hasDataSteps: false,
  filteredHelperRoles: [],
  isPostingSurvey: false,
  currentStatus: EMPTY_STATUS,
  steps: [],
};

/** The block variables that DataActionGetHostSurvey sends (screenData.variables), read when the call starts. */
export const hostSurveyCallInputs = (state: HostSurveyState, inputs: HostSurveyInputs): HostSurveyCallInputs => ({
  IsFetchingData: state.isFetchingData,
  IsAddingHelper: state.isAddingHelper,
  PositionToDelete: state.positionToDelete,
  SurveyDiscarded: state.surveyDiscarded,
  SurveySubmitted: state.surveySubmitted,
  IsConfirmedSurvey: state.isConfirmedSurvey,
  HasDataSteps: state.hasDataSteps,
  IsPostingSurvey: state.isPostingSurvey,
  In_EventId: inputs.In_EventId,
  In_MemberId: inputs.In_MemberId,
  In_EventName: inputs.In_EventName,
  In_EventStartDate: inputs.In_EventStartDate,
  In_EventEndDate: inputs.In_EventEndDate,
});

/** The filter of GetLocalHostSurveySteps (HS :4118-4170): IsConfirmedSurvey and the survey flags of SurveyInfo. */
export const hostSurveyStepFilter = (state: HostSurveyState): HostSurveyStepFilter => {
  const info = state.hostSurvey.SurveyInfo;
  return {
    isConfirmedSurvey: state.isConfirmedSurvey,
    accommodationSurvey: info.AccommodationSurvey,
    accommodationSurveyUpdate: info.AccommodationSurveyUpdate,
    mealSurvey: info.MealSurvey,
    mealSurveyUpdate: info.MealSurveyUpdate,
    helperSurvey: info.HelperSurvey,
    vehicleSurvey: info.VehicleSurvey,
  };
};

/* ---- Module client actions (Connect2_OrbitMobile_MUI.controller.js) ---- */

/** GetPopUpInfo(In_IsCancel, In_IsNoInfo, In_IsDelete, In_IsReturnNavigation, In_IsReturnBack) → Out_Title,
    Out_Message (controller.js :4361-4480): the first flag that is set, in the order Cancel, NoInfo, Delete,
    ReturnBack, ReturnNavigation. "\r\n" as in the source. */
export function getPopUpInfo(popUp: HostSurveyPopUp): { Title: string; Message: string } {
  switch (popUp) {
    case 'Cancel':
      return {
        Title: 'Confirm Discard Changes',
        Message:
          'Are you sure you want to discard these details?\r\n\r\nThe Back button will also discard any unsaved details and take you back to the navigation screen.',
      };
    case 'NoInfo':
      return {
        Title: 'No data added?',
        Message: 'No information has been added to this step, are you sure this is correct?',
      };
    case 'Delete':
      return { Title: 'Deleting placeholder?', Message: 'Are you sure you want to delete this placeholder?' };
    case 'ReturnBack':
      return {
        Title: 'Return to the previous page?',
        Message:
          'Are you sure you want to return to the previous page? This survey will be saved as a draft.\r\n\r\nPress Discard Survey in order to return to the previous page without saving the changes made.',
      };
    case 'ReturnNavigation':
      return {
        Title: 'Return to the Navigation page?',
        Message: 'Are you sure you want to return to the Navigation page?\r\nAny unsaved details will be discarded.',
      };
  }
}

/** The StepProperties key of a data step ("" for the navigation and summary steps). */
type StepKey = keyof HostSurveyStepProperties;
const stepKeyOf = (stepId: number): StepKey | undefined =>
  stepId === HostSurveyStep.accommodation
    ? 'Accommodation'
    : stepId === HostSurveyStep.meal
      ? 'Meals'
      : stepId === HostSurveyStep.helper
        ? 'Helpers'
        : stepId === HostSurveyStep.vehicle
          ? 'Vehicles'
          : undefined;

/** GetStepProperties(In_CurrentStep, In_StepProperties) → Out_CurrentStepProperties (controller.js :4601-4690): the
    properties of the accommodation, meal, helper or vehicle step; the defaults for another step. */
export const getStepProperties = (step: LocalHostSurveyStep, properties: HostSurveyStepProperties): StepProperties => {
  const key = stepKeyOf(step.Id);
  return key ? properties[key] : STEP_DEFAULTS;
};

/* ---- Block client actions (HS controller), pure on the state ---- */

type Draft = HostSurveyState;
const withSurvey = (s: Draft, survey: HostSurvey): Draft => ({ ...s, hostSurvey: survey });
const withStep = (s: Draft, key: StepKey, change: Partial<StepProperties>): Draft => ({
  ...s,
  stepProperties: { ...s.stepProperties, [key]: { ...s.stepProperties[key], ...change } },
});
const replaceAt = <T>(list: readonly T[], index: number, item: T): T[] => list.map((x, i) => (i === index ? item : x));
const removeAt = <T>(list: readonly T[], index: number): T[] => list.filter((_, i) => i !== index);

/** RefreshStaticEntities (HS :5604-5776): the aggregates of the current step are read at render; on the helper step
    (or the summary with a helper section) OnAfterFetch_GetLocalHelperRoles sets FilteredHelperRoles = the roles that
    are not read-only. */
function refreshStaticEntities(s: Draft, helperRoles: readonly LocalHelperRole[]): Draft {
  const id = s.currentStep.step.Id;
  const helpers =
    id === HostSurveyStep.helper || (id === HostSurveyStep.summary && s.hostSurvey.SurveyInfo.HelperSurvey);
  return helpers ? { ...s, filteredHelperRoles: helperRoles.filter((r) => !r.isReadOnly) } : s;
}

/** SetStepData: the accommodation step keeps the room names (RoomNames); the meal step sets ResetMealData False on
    every meal. */
function setStepData(s: Draft): Draft {
  const id = s.currentStep.step.Id;
  if (id === HostSurveyStep.accommodation) {
    return { ...s, roomNames: s.hostSurvey.Rooms.HostSurvey_RoomItem.map((r) => r.Name) };
  }
  if (id === HostSurveyStep.meal) {
    const meals = s.hostSurvey.Meals.MealItemInfo.map((m) => ({ ...m, ResetMealData: false }));
    return withSurvey(s, { ...s.hostSurvey, Meals: { ...s.hostSurvey.Meals, MealItemInfo: meals } });
  }
  return s;
}

/** ValidateStepEdit: for each survey section (the current data step only, or every section on a non-data step): an
    empty list → HasData = not IsEdit (helpers: IsEdit = True while adding); else IsEdit = an item is in edit (helpers:
    or IsAddingHelper) and HasData = True. A data step stops after its own section. */
export function validateStepEdit(s: Draft): Draft {
  const info = s.hostSurvey.SurveyInfo;
  const step = s.currentStep.step;
  const own = (id: number) => step.Id === id || !step.IsDataStep;
  let next = s;
  const section = (key: StepKey, items: readonly { IsEdit: boolean }[], adding: boolean) => {
    const p = next.stepProperties[key];
    if (items.length === 0) {
      next = withStep(next, key, { HasData: !p.IsEdit, ...(adding ? { IsEdit: true } : {}) });
    } else {
      next = withStep(next, key, { IsEdit: items.some((i) => i.IsEdit) || adding, HasData: true });
    }
  };
  if (info.AccommodationSurvey && info.AccommodationSurveyUpdate && own(HostSurveyStep.accommodation)) {
    section('Accommodation', s.hostSurvey.Rooms.HostSurvey_RoomItem, false);
    if (step.IsDataStep) return next;
  }
  if (info.MealSurvey && info.MealSurveyUpdate && own(HostSurveyStep.meal)) {
    section('Meals', s.hostSurvey.Meals.MealItemInfo, false);
    if (step.IsDataStep) return next;
  }
  if (info.HelperSurvey && own(HostSurveyStep.helper)) {
    section('Helpers', s.hostSurvey.Helpers.HelperItemInfo, s.isAddingHelper);
    if (step.IsDataStep) return next;
  }
  if (info.VehicleSurvey && own(HostSurveyStep.vehicle)) {
    section('Vehicles', s.hostSurvey.Vehicles.VehicleItemInfo, false);
  }
  return next;
}

/** DeleteItem(In_CurrentRowNumber): removes the row of the accommodation, helper or vehicle step, then HasData = the
    list is not empty, IsEdit = the list is empty, PositionToDelete = 0. The meal step (and any other) ends at once. */
export function deleteItem(s: Draft, row: number): Draft {
  const survey = s.hostSurvey;
  let next: Draft;
  switch (s.currentStep.step.Id) {
    case HostSurveyStep.accommodation: {
      const rooms = removeAt(survey.Rooms.HostSurvey_RoomItem, row);
      next = withSurvey(s, { ...survey, Rooms: { ...survey.Rooms, HostSurvey_RoomItem: rooms } });
      next = withStep(next, 'Accommodation', { HasData: rooms.length > 0, IsEdit: rooms.length === 0 });
      break;
    }
    case HostSurveyStep.helper: {
      const helpers = removeAt(survey.Helpers.HelperItemInfo, row);
      next = withSurvey(s, { ...survey, Helpers: { ...survey.Helpers, HelperItemInfo: helpers } });
      next = withStep(next, 'Helpers', { HasData: helpers.length > 0, IsEdit: helpers.length === 0 });
      break;
    }
    case HostSurveyStep.vehicle: {
      const vehicles = removeAt(survey.Vehicles.VehicleItemInfo, row);
      next = withSurvey(s, { ...survey, Vehicles: { ...survey.Vehicles, VehicleItemInfo: vehicles } });
      next = withStep(next, 'Vehicles', { HasData: vehicles.length > 0, IsEdit: vehicles.length === 0 });
      break;
    }
    default:
      return s;
  }
  return { ...next, positionToDelete: 0 };
}

/** CancelEdit: the item in edit goes back. A room with a name leaves edit, a new room (no name) is deleted (and
    SetStepData). Every meal in edit leaves edit when both capacities are set, else ResetMealData = True; MealNote
    goes back to the fetched one. The open AddHelper closes; else a helper with a member leaves edit and a new one is
    deleted. A vehicle with an owner leaves edit, a new one is deleted. */
export function cancelEdit(s: Draft): Draft {
  const survey = s.hostSurvey;
  switch (s.currentStep.step.Id) {
    case HostSurveyStep.accommodation: {
      const rooms = survey.Rooms.HostSurvey_RoomItem;
      const index = rooms.findIndex((r) => r.IsEdit);
      const room = rooms[index];
      if (!room) return s;
      if (room.Name !== '') {
        const edited = replaceAt(rooms, index, { ...room, IsEdit: false });
        return withSurvey(s, { ...survey, Rooms: { ...survey.Rooms, HostSurvey_RoomItem: edited } });
      }
      return setStepData(deleteItem({ ...s, positionToDelete: index }, index));
    }
    case HostSurveyStep.meal: {
      const meals = survey.Meals.MealItemInfo.map((m) =>
        !m.IsEdit
          ? m
          : m.ComfortableCapacity !== '' && m.StretchCapacity !== ''
            ? { ...m, IsEdit: false }
            : { ...m, ResetMealData: true },
      );
      return withSurvey(s, { ...survey, Meals: { MealItemInfo: meals, MealNote: s.fetchedSurvey.Meals.MealNote } });
    }
    case HostSurveyStep.helper: {
      if (s.isAddingHelper) return { ...s, isAddingHelper: false };
      const helpers = survey.Helpers.HelperItemInfo;
      const index = helpers.findIndex((h) => h.IsEdit);
      const helper = helpers[index];
      if (!helper) return s;
      if (helper.MemberId !== '0') {
        const edited = replaceAt(helpers, index, { ...helper, IsEdit: false });
        return withSurvey(s, { ...survey, Helpers: { ...survey.Helpers, HelperItemInfo: edited } });
      }
      return deleteItem({ ...s, positionToDelete: index }, index);
    }
    case HostSurveyStep.vehicle: {
      const vehicles = survey.Vehicles.VehicleItemInfo;
      const index = vehicles.findIndex((v) => v.IsEdit);
      const vehicle = vehicles[index];
      if (!vehicle) return s;
      if (vehicle.OwnerType !== '') {
        const edited = replaceAt(vehicles, index, { ...vehicle, IsEdit: false });
        return withSurvey(s, { ...survey, Vehicles: { ...survey.Vehicles, VehicleItemInfo: edited } });
      }
      return deleteItem({ ...s, positionToDelete: index }, index);
    }
    default:
      return s;
  }
}

/** NavigateTo_SpecificStep(In_HostSurveyStepId): a confirmed survey stays; else the step becomes CurrentStep (with its
    row number), then RefreshStaticEntities, ValidateStepEdit and SetStepData. An unknown step changes nothing. */
function navigateToSpecificStep(s: Draft, hostSurveyStepId: number, helperRoles: readonly LocalHelperRole[]): Draft {
  if (s.isConfirmedSurvey) return s;
  const rowNumber = s.steps.findIndex((step) => step.Id === hostSurveyStepId);
  const step = s.steps[rowNumber];
  if (!step) return s;
  return setStepData(validateStepEdit(refreshStaticEntities({ ...s, currentStep: { step, rowNumber } }, helperRoles)));
}

/** Survey_Next: on the summary nothing; else the step with the next Order (ListFilter Order > current, ListSort
    ascending) becomes CurrentStep, then RefreshStaticEntities, ValidateStepEdit and SetStepData. */
export function surveyNext(s: Draft, helperRoles: readonly LocalHelperRole[]): Draft {
  const current = s.currentStep.step;
  if (current.Id === HostSurveyStep.summary) return s;
  const next = s.steps.filter((step) => step.Order > current.Order).sort((a, b) => a.Order - b.Order)[0];
  if (!next) return s;
  const rowNumber = s.steps.findIndex((step) => step.Id === next.Id);
  return setStepData(
    validateStepEdit(refreshStaticEntities({ ...s, currentStep: { step: next, rowNumber } }, helperRoles)),
  );
}

/** SaveMultipleMeals_Success(In_MealItemTriggerPosition): a meal in edit after the trigger row will still save → end;
    else Meals.TrySave = False, SetStepData, ValidateStepEdit. */
function saveMultipleMealsSuccess(s: Draft, trigger: number): Draft {
  const meals = s.hostSurvey.Meals.MealItemInfo;
  for (const edit of meals.filter((m) => m.IsEdit)) {
    const position = meals.findIndex((m) => m.Id === edit.Id);
    if (position !== -1 && trigger < position) return s;
  }
  return validateStepEdit(setStepData(withStep(s, 'Meals', { TrySave: false })));
}

/** SaveMultipleMeals_Failed(In_MealItemTriggerPosition): another meal in edit after the trigger row → end; else
    Meals.TrySave = False. */
function saveMultipleMealsFailed(s: Draft, trigger: number): Draft {
  const meals = s.hostSurvey.Meals.MealItemInfo;
  const self = meals[trigger];
  for (const edit of meals.filter((m) => m.IsEdit && m.Id !== self?.Id)) {
    const position = meals.findIndex((m) => m.Id === edit.Id);
    if (position !== -1 && trigger < position) return s;
  }
  return withStep(s, 'Meals', { TrySave: false });
}

/** OnHandle_SaveItem(row, room, meal, helper, vehicle): the saved item replaces the row with IsEdit False (TrySave
    False on the room, helper and vehicle steps), then SetStepData and ValidateStepEdit. The meal step goes on with
    SaveMultipleMeals_Success instead. */
export function saveItem(
  s: Draft,
  row: number,
  item: { room?: HostSurveyRoom; meal?: HostSurveyMeal; helper?: HostSurveyHelper; vehicle?: HostSurveyVehicle },
): Draft {
  const survey = s.hostSurvey;
  let next: Draft;
  switch (s.currentStep.step.Id) {
    case HostSurveyStep.accommodation: {
      if (!item.room) return s;
      const rooms = replaceAt(survey.Rooms.HostSurvey_RoomItem, row, { ...item.room, IsEdit: false });
      next = withStep(
        withSurvey(s, { ...survey, Rooms: { ...survey.Rooms, HostSurvey_RoomItem: rooms } }),
        'Accommodation',
        {
          TrySave: false,
        },
      );
      break;
    }
    case HostSurveyStep.meal: {
      if (!item.meal) return s;
      const meals = replaceAt(survey.Meals.MealItemInfo, row, { ...item.meal, IsEdit: false });
      return saveMultipleMealsSuccess(
        withSurvey(s, { ...survey, Meals: { ...survey.Meals, MealItemInfo: meals } }),
        row,
      );
    }
    case HostSurveyStep.helper: {
      if (!item.helper) return s;
      const helpers = replaceAt(survey.Helpers.HelperItemInfo, row, { ...item.helper, IsEdit: false });
      next = withStep(
        withSurvey(s, { ...survey, Helpers: { ...survey.Helpers, HelperItemInfo: helpers } }),
        'Helpers',
        {
          TrySave: false,
        },
      );
      break;
    }
    case HostSurveyStep.vehicle: {
      if (!item.vehicle) return s;
      const vehicles = replaceAt(survey.Vehicles.VehicleItemInfo, row, { ...item.vehicle, IsEdit: false });
      next = withStep(
        withSurvey(s, { ...survey, Vehicles: { ...survey.Vehicles, VehicleItemInfo: vehicles } }),
        'Vehicles',
        { TrySave: false },
      );
      break;
    }
    default:
      return s;
  }
  return validateStepEdit(setStepData(next));
}

/** OnHandle_SaveFailed(row), the state part: TrySave = False on the room, helper and vehicle steps; on the meal step
    the row's ResetMealData = False and SaveMultipleMeals_Failed(row). */
export function saveFailed(s: Draft, row: number): Draft {
  switch (s.currentStep.step.Id) {
    case HostSurveyStep.accommodation:
      return withStep(s, 'Accommodation', { TrySave: false });
    case HostSurveyStep.meal: {
      const meals = s.hostSurvey.Meals.MealItemInfo;
      const meal = meals[row];
      const reset = meal ? replaceAt(meals, row, { ...meal, ResetMealData: false }) : meals;
      return saveMultipleMealsFailed(
        withSurvey(s, { ...s.hostSurvey, Meals: { ...s.hostSurvey.Meals, MealItemInfo: reset } }),
        row,
      );
    }
    case HostSurveyStep.helper:
      return withStep(s, 'Helpers', { TrySave: false });
    case HostSurveyStep.vehicle:
      return withStep(s, 'Vehicles', { TrySave: false });
    default:
      return s;
  }
}

/** OnHandle_SaveFailed after its state part: the message "Ensure you complete all required fields." and the focus
    follow, except on another step and on the meal step while a meal still saves (Meals.TrySave). */
export const saveFailedGoesOn = (s: Draft): boolean => {
  const id = s.currentStep.step.Id;
  if (stepKeyOf(id) === undefined) return false;
  return !(id === HostSurveyStep.meal && s.stepProperties.Meals.TrySave);
};

/** HostSurvey_RoomItemRec defaults with IsEdit True (AddNewRoom). */
const NEW_ROOM: HostSurveyRoom = {
  Name: '',
  GenderPreference: '',
  Floor: '',
  NumberOfBeds: '0',
  Beds: [],
  HasEnsuite: false,
  HasToilet: false,
  HasShower: false,
  HasBasin: false,
  RoomNote: '',
  IsEdit: true,
};

/** HostSurvey_VehicleItemInfoRec defaults with IsEdit True (AddNewVehicle). */
const NEW_VEHICLE: HostSurveyVehicle = {
  Id: '0',
  IsEdit: true,
  OwnerType: '',
  RegistrationNumber: '',
  TotalSeats: '0',
  VehicleId: '0',
  VehicleMakeAndModel: '',
  VehicleType: '',
};

/** OnClick_AddItem: nothing on a confirmed survey, on the meal step, or while the step's item is in edit with data;
    else a new room (AddNewRoom), IsAddingHelper = True (not already adding), or a new vehicle (AddNewVehicle), then
    ValidateStepEdit. */
export function addItem(s: Draft): Draft {
  if (s.isConfirmedSurvey) return s;
  const survey = s.hostSurvey;
  const p = s.stepProperties;
  switch (s.currentStep.step.Id) {
    case HostSurveyStep.accommodation:
      if (p.Accommodation.IsEdit && p.Accommodation.HasData) return s;
      return validateStepEdit(
        withSurvey(s, {
          ...survey,
          Rooms: { ...survey.Rooms, HostSurvey_RoomItem: [...survey.Rooms.HostSurvey_RoomItem, NEW_ROOM] },
        }),
      );
    case HostSurveyStep.helper:
      if ((p.Helpers.IsEdit && p.Helpers.HasData) || s.isAddingHelper) return s;
      return validateStepEdit({ ...s, isAddingHelper: true });
    case HostSurveyStep.vehicle:
      if (p.Vehicles.IsEdit && p.Vehicles.HasData) return s;
      return validateStepEdit(
        withSurvey(s, {
          ...survey,
          Vehicles: { ...survey.Vehicles, VehicleItemInfo: [...survey.Vehicles.VehicleItemInfo, NEW_VEHICLE] },
        }),
      );
    default:
      return s;
  }
}

const openPopUp = (s: Draft, popUp: HostSurveyPopUp): Draft => {
  const { Title, Message } = getPopUpInfo(popUp);
  return { ...s, popUpInfo: { ...s.popUpInfo, Title, Message, [`IsShowPopup_${popUp}`]: true } };
};

export function hostSurveyReducer(state: HostSurveyState, action: HostSurveyAction): HostSurveyState {
  switch (action.type) {
    case 'fetchStarted':
      return { ...state, stepProperties: stepPropertiesOf(BLANK_STEP), isFetchingData: true };
    case 'fetchFailed':
      return { ...state, isFetchingData: false };
    case 'surveyFetched':
      return { ...state, hostSurvey: action.survey, fetchedSurvey: action.survey };
    case 'surveyStatusRead': {
      const status = action.status ?? EMPTY_STATUS;
      return { ...state, currentStatus: status, isConfirmedSurvey: status.Id === SurveyStatus.confirmed };
    }
    case 'surveyStepsRead': {
      const read: HostSurveyState = {
        ...state,
        steps: action.steps,
        currentStep: { step: action.steps[0] ?? EMPTY_STEP, rowNumber: 0 },
        hasDataSteps: action.steps.some((step) => step.IsDataStep),
      };
      return {
        ...validateStepEdit(setStepData(refreshStaticEntities(read, action.helperRoles))),
        isFetchingData: false,
      };
    }
    case 'stepSelected':
      return navigateToSpecificStep(state, action.hostSurveyStepId, action.helperRoles);
    case 'nextStep':
      return surveyNext(state, action.helperRoles);
    case 'editItem': {
      const survey = state.hostSurvey;
      const row = action.row;
      const edit = <T extends { IsEdit: boolean }>(list: readonly T[]) => {
        const item = list[row];
        return item ? replaceAt(list, row, { ...item, IsEdit: true }) : [...list];
      };
      switch (state.currentStep.step.Id) {
        case HostSurveyStep.accommodation:
          return withStep(
            withSurvey(state, {
              ...survey,
              Rooms: { ...survey.Rooms, HostSurvey_RoomItem: edit(survey.Rooms.HostSurvey_RoomItem) },
            }),
            'Accommodation',
            { IsEdit: true },
          );
        case HostSurveyStep.meal:
          return withStep(
            withSurvey(state, { ...survey, Meals: { ...survey.Meals, MealItemInfo: edit(survey.Meals.MealItemInfo) } }),
            'Meals',
            { IsEdit: true },
          );
        case HostSurveyStep.helper:
          return withStep(
            withSurvey(state, {
              ...survey,
              Helpers: { ...survey.Helpers, HelperItemInfo: edit(survey.Helpers.HelperItemInfo) },
            }),
            'Helpers',
            { IsEdit: true },
          );
        case HostSurveyStep.vehicle:
          return withStep(
            withSurvey(state, {
              ...survey,
              Vehicles: { ...survey.Vehicles, VehicleItemInfo: edit(survey.Vehicles.VehicleItemInfo) },
            }),
            'Vehicles',
            { IsEdit: true },
          );
        default:
          return state;
      }
    }
    case 'deleteItemAsked':
      return openPopUp({ ...state, positionToDelete: action.row }, 'Delete');
    case 'deleteSearchHelperAsked':
      return openPopUp(state, 'Delete');
    case 'popUpOpened':
      return openPopUp(state, action.popUp);
    case 'popUpClosed':
      return { ...state, popUpInfo: CLOSED_POPUP };
    case 'itemSaved':
      return saveItem(state, action.row, action);
    case 'saveFailed':
      return saveFailed(state, action.row);
    case 'mealDataReset': {
      const meals = state.hostSurvey.Meals.MealItemInfo;
      const meal = meals[action.position];
      if (!meal) return state;
      const reset = replaceAt(meals, action.position, { ...meal, ResetMealData: false });
      return withSurvey(state, { ...state.hostSurvey, Meals: { ...state.hostSurvey.Meals, MealItemInfo: reset } });
    }
    case 'helpersAdded': {
      const survey = state.hostSurvey;
      const helpers = [...survey.Helpers.HelperItemInfo, ...action.helpers];
      const added = withStep(
        {
          ...withSurvey(state, { ...survey, Helpers: { ...survey.Helpers, HelperItemInfo: helpers } }),
          isAddingHelper: false,
        },
        'Helpers',
        { TrySave: false },
      );
      return validateStepEdit(added);
    }
    case 'addItemClicked':
      return addItem(state);
    case 'stepEditValidated':
      return validateStepEdit(state);
    case 'editCancelled':
      return cancelEdit(state);
    case 'deleteConfirmed':
      if (state.currentStep.step.Id === HostSurveyStep.helper && state.isAddingHelper) {
        return { ...state, isAddingHelper: false };
      }
      return setStepData(deleteItem(state, state.positionToDelete));
    case 'noInfoConfirmed': {
      const key = stepKeyOf(state.currentStep.step.Id);
      if (!key) return state;
      const confirmed = withStep(state, key, { IsEdit: false });
      return key === 'Helpers' ? { ...confirmed, isAddingHelper: false } : confirmed;
    }
    case 'trySaveStarted': {
      const key = stepKeyOf(state.currentStep.step.Id);
      return key ? withStep(state, key, { TrySave: true }) : state;
    }
    case 'surveyDiscarded':
      return { ...state, surveyDiscarded: true };
    case 'postPrepared': {
      const survey = state.hostSurvey;
      const vehicles = survey.Vehicles;
      return withSurvey(state, {
        ...survey,
        SurveyInfo: { ...survey.SurveyInfo, HostProfileSurveyStatus: action.statusJsonName },
        Vehicles:
          !vehicles.HasVehicles && vehicles.VehicleItemInfo.length > 0
            ? { ...vehicles, VehicleItemInfo: [] }
            : vehicles,
      });
    }
    case 'postStarted':
      return { ...state, isPostingSurvey: true };
    case 'postFinished':
      return { ...state, surveySubmitted: true, isPostingSurvey: false };
    case 'postFailed':
      return { ...state, isPostingSurvey: false };
    case 'noteChanged': {
      const survey = state.hostSurvey;
      switch (action.field) {
        case 'HostSurveyNote':
          return withSurvey(state, { ...survey, SurveyInfo: { ...survey.SurveyInfo, HostSurveyNote: action.value } });
        case 'AccommodationNote':
          return withSurvey(state, { ...survey, Rooms: { ...survey.Rooms, AccommodationNote: action.value } });
        case 'MealNote':
          return withSurvey(state, { ...survey, Meals: { ...survey.Meals, MealNote: action.value } });
        case 'HelperNote':
          return withSurvey(state, { ...survey, Helpers: { ...survey.Helpers, HelperNote: action.value } });
      }
      return state;
    }
    case 'hasVehiclesChanged':
      return withSurvey(state, {
        ...state.hostSurvey,
        Vehicles: { ...state.hostSurvey.Vehicles, HasVehicles: action.value },
      });
  }
}
