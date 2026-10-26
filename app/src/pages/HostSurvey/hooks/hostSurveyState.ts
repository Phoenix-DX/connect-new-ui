import type { HostSurvey, HostSurveyCallInputs } from '@/api/event';
import type { HostSurveyInputs } from '@/pages/HostSurvey/inputs';
import type { HostSurveyStepFilter, LocalHostSurveyStep, LocalSurveyStatus } from '@/platform/storage/localEntities';

/** The state of ScreenBlock_HostSurvey and its reducer, and the pure parts of its flows: the block variables that the
    data action sends and the filter of the steps aggregate.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey */

/** Static entity SurveyStatus of Connect2_OrbitMobile_MUI (static-entities-tst.json). */
export const SurveyStatus = { unableToHost: 1, confirmed: 2 } as const;

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

/** The block variables (HS model :25-200) and the aggregate results that the view reads. The view cache keeps the
    record, so a back navigation shows the survey at once, without a call. */
export interface HostSurveyState {
  /** IsFetchingData: the skeleton shows while it is True. */
  isFetchingData: boolean;
  /** HostSurvey: the answer of GetHostSurvey. */
  hostSurvey: HostSurvey;
  /** CurrentStep: the step on screen and its row number in the steps aggregate. */
  currentStep: { step: LocalHostSurveyStep; rowNumber: number };
  /** IsConfirmedSurvey: the survey status is Confirmed (read-only summary). */
  isConfirmedSurvey: boolean;
  /** HasDataSteps: a step of the survey asks for data. */
  hasDataSteps: boolean;
  /** GetCurrentLocalSurveyStatus.List.Current (LocalSurveyStatus where JSON_Name = HostProfileSurveyStatus, max 1). */
  currentStatus: LocalSurveyStatus;
  /** GetLocalHostSurveySteps.List. */
  steps: LocalHostSurveyStep[];
}

/** The changes of the state. */
export type HostSurveyAction =
  /** OnReady, before RefreshData: IsFetchingData = True. */
  | { type: 'fetchStarted' }
  /** OnAfterFetch_GetHostSurvey with HasError: IsFetchingData = False. */
  | { type: 'fetchFailed' }
  /** OnAfterFetch_GetHostSurvey: HostSurvey = GetHostSurvey.Response. */
  | { type: 'surveyFetched'; survey: HostSurvey }
  /** OnAfterFetch_GetSurveyStatus: the current status, IsConfirmedSurvey = status Id = Confirmed. */
  | { type: 'surveyStatusRead'; status: LocalSurveyStatus | undefined }
  /** OnAfterFetch_GetHostSurveySteps: CurrentStep = the first row, HasDataSteps, IsFetchingData = False. */
  | { type: 'surveyStepsRead'; steps: LocalHostSurveyStep[] }
  /** NavigateTo_SpecificStep: the Edit link of a summary section that is not confirmed. */
  | { type: 'stepSelected'; hostSurveyStepId: number };

/** The block variables after OnInitialize: the model defaults. OnReady sets IsFetchingData True before the first
    paint (useFlowState `beforePaint`), so a new visit paints the skeleton first. A view that the view cache restores starts
    from its saved state instead. */
export const INITIAL_HOST_SURVEY_STATE: HostSurveyState = {
  isFetchingData: false,
  hostSurvey: EMPTY_SURVEY,
  currentStep: { step: EMPTY_STEP, rowNumber: 0 },
  isConfirmedSurvey: false,
  hasDataSteps: false,
  currentStatus: EMPTY_STATUS,
  steps: [],
};

/** The block variables that DataActionGetHostSurvey sends (screenData.variables), read when the call starts. The
    variables of the data steps (not captured, HostSurvey Q2) keep their defaults. */
export const hostSurveyCallInputs = (state: HostSurveyState, inputs: HostSurveyInputs): HostSurveyCallInputs => ({
  IsFetchingData: state.isFetchingData,
  IsAddingHelper: false,
  PositionToDelete: 0,
  SurveyDiscarded: false,
  SurveySubmitted: false,
  IsConfirmedSurvey: state.isConfirmedSurvey,
  HasDataSteps: state.hasDataSteps,
  IsPostingSurvey: false,
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

export function hostSurveyReducer(state: HostSurveyState, action: HostSurveyAction): HostSurveyState {
  switch (action.type) {
    case 'fetchStarted':
      return { ...state, isFetchingData: true };
    case 'fetchFailed':
      return { ...state, isFetchingData: false };
    case 'surveyFetched':
      return { ...state, hostSurvey: action.survey };
    case 'surveyStatusRead': {
      const status = action.status ?? EMPTY_STATUS;
      return { ...state, currentStatus: status, isConfirmedSurvey: status.Id === SurveyStatus.confirmed };
    }
    case 'surveyStepsRead':
      return {
        ...state,
        steps: action.steps,
        currentStep: { step: action.steps[0] ?? EMPTY_STEP, rowNumber: 0 },
        hasDataSteps: action.steps.some((step) => step.IsDataStep),
        isFetchingData: false,
      };
    case 'stepSelected': {
      // HS :6392-6476: a confirmed survey stays on its summary; else the step becomes the current step.
      if (state.isConfirmedSurvey) return state;
      const rowNumber = state.steps.findIndex((step) => step.Id === action.hostSurveyStepId);
      const step = state.steps[rowNumber];
      return step ? { ...state, currentStep: { step, rowNumber } } : state;
    }
  }
}
