import { describe, expect, it } from 'vitest';
import type { HostSurvey } from '@/api/event';
import type { HostSurveyInputs } from '@/pages/HostSurvey/inputs';
import { HostSurveyStep, type LocalHostSurveyStep } from '@/platform/storage/localEntities';
import {
  INITIAL_HOST_SURVEY_STATE,
  SurveyStatus,
  hostSurveyCallInputs,
  hostSurveyReducer,
  hostSurveyStepFilter,
  type HostSurveyState,
} from './hostSurveyState';

/* The pure state of ScreenBlock_HostSurvey: the reducer, the call inputs and the filter of the steps aggregate.
   Fictional event and survey. */

const INPUTS: HostSurveyInputs = {
  In_EventId: '8800',
  In_MemberId: '5120',
  In_EventName: 'Spring Gathering',
  In_EventStartDate: '2026-11-06T09:00:00Z',
  In_EventEndDate: '',
};

const step = (Id: number, Order: number, IsDataStep: boolean): LocalHostSurveyStep => ({
  Id,
  HeaderLabel: `Step ${String(Id)}`,
  AddLabel: '',
  Order,
  IsDataStep,
});
const NAVIGATION = step(HostSurveyStep.navigation, 1, false);
const ACCOMMODATION = step(HostSurveyStep.accommodation, 2, true);
const SUMMARY = step(HostSurveyStep.summary, 6, false);

const SURVEY: HostSurvey = {
  ...INITIAL_HOST_SURVEY_STATE.hostSurvey,
  SurveyInfo: {
    ...INITIAL_HOST_SURVEY_STATE.hostSurvey.SurveyInfo,
    Id: '91',
    EventId: '8800',
    EventName: 'Spring Gathering',
    HostProfileSurveyStatus: 'confirmed',
    AccommodationSurvey: true,
    AccommodationSurveyUpdate: false,
    MealSurvey: true,
    MealSurveyUpdate: true,
    HelperSurvey: true,
    VehicleSurvey: false,
  },
};

const withSteps = (steps: LocalHostSurveyStep[], patch: Partial<HostSurveyState> = {}): HostSurveyState => ({
  ...hostSurveyReducer(
    { ...INITIAL_HOST_SURVEY_STATE, isFetchingData: true },
    { type: 'surveyStepsRead', steps, helperRoles: [] },
  ),
  ...patch,
});

describe('hostSurveyState', () => {
  it('starts from the model defaults: IsFetchingData False, no step, no status', () => {
    expect(INITIAL_HOST_SURVEY_STATE.isFetchingData).toBe(false);
    expect(INITIAL_HOST_SURVEY_STATE.currentStep.step.Id).toBe(0);
    expect(INITIAL_HOST_SURVEY_STATE.currentStep.rowNumber).toBe(0);
    expect(INITIAL_HOST_SURVEY_STATE.steps).toEqual([]);
    expect(INITIAL_HOST_SURVEY_STATE.currentStatus.Id).toBe(0);
    expect(INITIAL_HOST_SURVEY_STATE.hasDataSteps).toBe(false);
    expect(INITIAL_HOST_SURVEY_STATE.isConfirmedSurvey).toBe(false);
    expect(INITIAL_HOST_SURVEY_STATE.hostSurvey.SurveyInfo.HostProfileSurveyStatus).toBe('');
  });

  it('OnReady resets StepProperties to BlankStepProperties and sets IsFetchingData before the call', () => {
    const blank = { IsEdit: true, TrySave: false, HasData: false };
    expect(hostSurveyReducer(INITIAL_HOST_SURVEY_STATE, { type: 'fetchStarted' })).toEqual({
      ...INITIAL_HOST_SURVEY_STATE,
      stepProperties: { Accommodation: blank, Meals: blank, Helpers: blank, Vehicles: blank },
      isFetchingData: true,
    });
  });

  it('sends the block variables of the moment the call starts, with the data-step variables at their defaults', () => {
    const state: HostSurveyState = {
      ...INITIAL_HOST_SURVEY_STATE,
      isFetchingData: true,
      isConfirmedSurvey: true,
      hasDataSteps: true,
    };
    expect(hostSurveyCallInputs(state, INPUTS)).toEqual({
      IsFetchingData: true,
      IsAddingHelper: false,
      PositionToDelete: 0,
      SurveyDiscarded: false,
      SurveySubmitted: false,
      IsConfirmedSurvey: true,
      HasDataSteps: true,
      IsPostingSurvey: false,
      In_EventId: '8800',
      In_MemberId: '5120',
      In_EventName: 'Spring Gathering',
      In_EventStartDate: '2026-11-06T09:00:00Z',
      In_EventEndDate: '',
    });
  });

  it('filters the steps aggregate with IsConfirmedSurvey and the survey flags', () => {
    const state = hostSurveyReducer(INITIAL_HOST_SURVEY_STATE, { type: 'surveyFetched', survey: SURVEY });
    expect(hostSurveyStepFilter({ ...state, isConfirmedSurvey: true })).toEqual({
      isConfirmedSurvey: true,
      accommodationSurvey: true,
      accommodationSurveyUpdate: false,
      mealSurvey: true,
      mealSurveyUpdate: true,
      helperSurvey: true,
      vehicleSurvey: false,
    });
  });

  it('a failed answer (HasError) stops the skeleton and keeps the rest', () => {
    const fetching = hostSurveyReducer(INITIAL_HOST_SURVEY_STATE, { type: 'fetchStarted' });
    expect(hostSurveyReducer(fetching, { type: 'fetchFailed' })).toEqual({ ...fetching, isFetchingData: false });
  });

  it('keeps the survey of the answer; the skeleton stays until the steps are read', () => {
    const fetching = hostSurveyReducer(INITIAL_HOST_SURVEY_STATE, { type: 'fetchStarted' });
    const state = hostSurveyReducer(fetching, { type: 'surveyFetched', survey: SURVEY });
    expect(state.hostSurvey).toBe(SURVEY);
    expect(state.isFetchingData).toBe(true);
  });

  it('the status Confirmed sets IsConfirmedSurvey; Unable to Host and no status do not', () => {
    const confirmed = { Id: SurveyStatus.confirmed, Label: 'Confirmed', JSON_Name: 'confirmed' };
    const unable = { Id: SurveyStatus.unableToHost, Label: 'Unable to Host', JSON_Name: 'unable_to_host' };
    expect(hostSurveyReducer(INITIAL_HOST_SURVEY_STATE, { type: 'surveyStatusRead', status: confirmed })).toEqual({
      ...INITIAL_HOST_SURVEY_STATE,
      currentStatus: confirmed,
      isConfirmedSurvey: true,
    });
    expect(hostSurveyReducer(INITIAL_HOST_SURVEY_STATE, { type: 'surveyStatusRead', status: unable })).toEqual({
      ...INITIAL_HOST_SURVEY_STATE,
      currentStatus: unable,
      isConfirmedSurvey: false,
    });
    const none = hostSurveyReducer(
      { ...INITIAL_HOST_SURVEY_STATE, currentStatus: confirmed, isConfirmedSurvey: true },
      { type: 'surveyStatusRead', status: undefined },
    );
    expect(none.currentStatus).toEqual({ Id: 0, Label: '', JSON_Name: '' });
    expect(none.isConfirmedSurvey).toBe(false);
  });

  it('the steps: CurrentStep is the first row, HasDataSteps when one asks for data, IsFetchingData False', () => {
    expect(withSteps([NAVIGATION, ACCOMMODATION, SUMMARY])).toEqual({
      ...INITIAL_HOST_SURVEY_STATE,
      steps: [NAVIGATION, ACCOMMODATION, SUMMARY],
      currentStep: { step: NAVIGATION, rowNumber: 0 },
      hasDataSteps: true,
      isFetchingData: false,
    });
    const summaryOnly = withSteps([SUMMARY]);
    expect(summaryOnly.currentStep).toEqual({ step: SUMMARY, rowNumber: 0 });
    expect(summaryOnly.hasDataSteps).toBe(false);
    const none = withSteps([]);
    expect(none.currentStep).toEqual(INITIAL_HOST_SURVEY_STATE.currentStep);
    expect(none.isFetchingData).toBe(false);
  });

  it('the Edit link selects the step with its row number; an unknown step changes nothing', () => {
    const state = withSteps([NAVIGATION, ACCOMMODATION, SUMMARY]);
    expect(
      hostSurveyReducer(state, { type: 'stepSelected', hostSurveyStepId: HostSurveyStep.summary, helperRoles: [] })
        .currentStep,
    ).toEqual({ step: SUMMARY, rowNumber: 2 });
    expect(
      hostSurveyReducer(state, { type: 'stepSelected', hostSurveyStepId: HostSurveyStep.vehicle, helperRoles: [] }),
    ).toBe(state);
  });

  it('a confirmed survey stays on its step', () => {
    const state = withSteps([SUMMARY, ACCOMMODATION], { isConfirmedSurvey: true });
    const selected = hostSurveyReducer(state, {
      type: 'stepSelected',
      hostSurveyStepId: HostSurveyStep.accommodation,
      helperRoles: [],
    });
    expect(selected).toBe(state);
  });
});
