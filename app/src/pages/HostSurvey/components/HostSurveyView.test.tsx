import { fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { HostSurvey, HostSurveyMeal, HostSurveyRoom } from '@/api/event';
import {
  INITIAL_HOST_SURVEY_STATE,
  SurveyStatus,
  type HostSurveyState,
} from '@/pages/HostSurvey/hooks/hostSurveyState';
import type { HostSurveyInputs } from '@/pages/HostSurvey/inputs';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { HostSurveyStep, type LocalHostSurveyStep, type LocalLabelledRecord } from '@/platform/storage/localEntities';
import { freshPage } from '@/test/testSupport';
import { HostSurveyView, type HostSurveyViewProps } from './HostSurveyView';

/* The view of ScreenBlock_HostSurvey with fixed props: the skeleton, the statuses, the summary of a confirmed survey
   and of a survey to answer, and the data steps (built from the TST code). Fictional household in Tandil. */

const PATH = '/UBTConnect/HostSurvey';
const INPUTS: HostSurveyInputs = {
  In_EventId: '8800',
  In_MemberId: '5120',
  In_EventName: '',
  In_EventStartDate: '',
  In_EventEndDate: '',
};
const FLOORS: LocalLabelledRecord[] = [
  { Id: 5, Label: 'Ground Floor', JSON_Name: 'ground', Order: 1 },
  { Id: 6, Label: 'First Floor', JSON_Name: 'first', Order: 2 },
];
const GENDERS: LocalLabelledRecord[] = [
  { Id: 2, Label: 'Couple', JSON_Name: 'COUPLE', Order: 1 },
  { Id: 4, Label: 'Female', JSON_Name: 'FEMALE', Order: 2 },
];
const ROOMS: HostSurveyRoom[] = [
  {
    Name: 'Garden Room',
    GenderPreference: 'COUPLE',
    Floor: 'ground',
    NumberOfBeds: '1',
    Beds: ['QUEEN'],
    HasEnsuite: true,
    HasToilet: false,
    HasShower: true,
    HasBasin: false,
    RoomNote: '',
    IsEdit: false,
  },
  {
    Name: 'Loft',
    GenderPreference: 'FEMALE',
    Floor: 'first',
    NumberOfBeds: '2',
    Beds: ['SINGLE', 'SINGLE'],
    HasEnsuite: false,
    HasToilet: false,
    HasShower: false,
    HasBasin: true,
    RoomNote: '',
    IsEdit: false,
  },
];
const MEALS: HostSurveyMeal[] = [
  {
    Id: '8800-M1',
    Name: 'Lunch',
    MilestoneDescription: 'Midday Meal',
    EventDate: '2026-11-07',
    SequenceNo: '1',
    IsPreferred: true,
    ComfortableCapacity: '12',
    StretchCapacity: '16',
    IsEdit: false,
    ResetMealData: false,
  },
];
const SURVEY: HostSurvey = {
  SurveyInfo: {
    ...INITIAL_HOST_SURVEY_STATE.hostSurvey.SurveyInfo,
    Id: '91',
    EventId: '8800',
    EventName: 'Spring Gathering',
    EventStartDateTime: '2026-11-06T12:00:00Z',
    EventEndDateTime: '2026-11-08T12:00:00Z',
    HostProfileSurveyStatus: 'confirmed',
    AccommodationSurvey: true,
    AccommodationSurveyUpdate: true,
    MealSurvey: true,
    MealSurveyUpdate: true,
  },
  Rooms: { AccommodationNote: '', HostSurvey_RoomItem: ROOMS },
  Meals: { MealNote: '', MealItemInfo: MEALS },
  Helpers: { HelperNote: '', HelperItemInfo: [] },
  Vehicles: { HasVehicles: false, VehicleItemInfo: [] },
};
const step = (Id: number, IsDataStep: boolean): LocalHostSurveyStep => ({
  Id,
  HeaderLabel: '',
  AddLabel: '',
  Order: Id,
  IsDataStep,
});
const SUMMARY = step(HostSurveyStep.summary, false);
const CONFIRMED_STATE: HostSurveyState = {
  ...INITIAL_HOST_SURVEY_STATE,
  isFetchingData: false,
  hostSurvey: SURVEY,
  currentStep: { step: SUMMARY, rowNumber: 0 },
  isConfirmedSurvey: true,
  currentStatus: { Id: SurveyStatus.confirmed, Label: 'Confirmed', JSON_Name: 'confirmed' },
  steps: [SUMMARY],
};

const onEditStep = vi.fn();
function renderView(patch: Partial<HostSurveyViewProps> = {}) {
  const props: HostSurveyViewProps = {
    id: '$b2',
    inputs: INPUTS,
    state: CONFIRMED_STATE,
    houseFloors: FLOORS,
    genderPreferences: GENDERS,
    bedSizes: [],
    mealTypes: [],
    helperStatus: [],
    helperRoles: [],
    vehicleOwners: [],
    vehicleTypes: [],
    onEditStep,
    onPrimaryButton: vi.fn(),
    onSecondaryButton: vi.fn(),
    onPopUpPrimary: vi.fn(),
    onPopUpSecondary: vi.fn(),
    onPopUpClose: vi.fn(),
    onEditItem: vi.fn(),
    onDeleteItem: vi.fn(),
    onDeleteSearchHelper: vi.fn(),
    onSaveItem: vi.fn(),
    onSaveFailed: vi.fn(),
    onMealDataReset: vi.fn(),
    onAddHelpers: vi.fn(),
    onAddItem: vi.fn(),
    onNoteChange: vi.fn(),
    onHasVehiclesChange: vi.fn(),
    backNavigationHandler: <div id="b2-$b43" />,
    ...patch,
  };
  return renderRoutes({ [PATH]: <HostSurveyView {...props} /> }, PATH);
}

const text = (selector: string) => document.querySelector(selector)?.textContent;
const notCaptured = () =>
  [...document.querySelectorAll('[data-not-captured]')].map((e) => e.getAttribute('data-not-captured'));
const editLinks = () => [...document.querySelectorAll('.orbit-icon-edit')];

beforeEach(() => {
  freshPage();
  resetNavigation();
  vi.clearAllMocks();
});

describe('HostSurveyView', () => {
  it('a confirmed survey: header, read-only summary with rooms and meals, five closed popups, the back handler', () => {
    const { container } = renderView();
    const block = container.querySelector('[data-block="Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey"]');
    expect(block?.id).toBe('$b2');
    expect(text('.orbit-host-survey-header-title')).toBe('Spring Gathering');
    expect(text('.orbit-host-survey-header-summary')).toBe('Summary Review');
    expect(container.querySelector('.orbit-host-survey-no-steps')).not.toBeNull();
    expect(container.textContent).toContain(
      'If you require further updates to your Host Survey, please contact the Orbit Helpdesk.',
    );
    expect(editLinks()).toHaveLength(0);
    expect([...container.querySelectorAll('[data-block="Orbit_Blocks.HostSurvey_Item"]')].map((e) => e.id)).toEqual([
      'b2-l5-142863_0-$b23',
      'b2-l5-142863_1-$b23',
      'b2-l6-142871_0-$b26',
    ]);
    expect(container.textContent).toContain('Room 1');
    expect(container.textContent).toContain('Garden Room');
    expect(container.textContent).toContain('Ground Floor');
    expect(container.textContent).toContain('Couple');
    expect(container.textContent).toContain('Midday Meal');
    // The day pill (its text is the UTC day of the local midnight: actions.test.ts) and the capacity pill.
    expect(container.querySelectorAll('[id="b2-l6-142871_0-$b27"] .orbit-icon-meeting')).toHaveLength(1);
    expect(container.textContent).toContain('CP 12, SCP 16');
    expect(container.querySelectorAll('[data-block="Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New"]')).toHaveLength(
      5,
    );
    expect(block?.lastElementChild?.id).toBe('b2-$b43');
    expect(notCaptured()).toEqual([]);
  });

  it('the header shows the inputs when they are set: the name and both dates', () => {
    renderView({
      inputs: {
        ...INPUTS,
        In_EventName: 'Visit of the Pereyra family',
        In_EventStartDate: '2026-11-13T12:00:00Z',
        In_EventEndDate: '2026-11-15T12:00:00Z',
      },
    });
    expect(text('.orbit-host-survey-header-title')).toBe('Visit of the Pereyra family');
    expect(text('.orbit-host-survey-header-title + .font-size-s')).toContain('13 Nov 2026');
  });

  it('shows the skeleton while fetching', () => {
    const { container } = renderView({ state: { ...INITIAL_HOST_SURVEY_STATE, isFetchingData: true } });
    expect(container.querySelector('[id="b2-$b36"]')).not.toBeNull();
    expect(container.querySelector('.orbit-host-survey-summary')).toBeNull();
  });

  it('Unable to Host: the survey is no longer available', () => {
    const { container } = renderView({
      state: {
        ...CONFIRMED_STATE,
        isConfirmedSurvey: false,
        currentStatus: { Id: SurveyStatus.unableToHost, Label: 'Unable to Host', JSON_Name: 'unable_to_host' },
      },
    });
    expect(container.textContent).toContain('This Survey is no longer available for you.');
    expect(container.querySelector('.orbit-host-survey-summary')).toBeNull();
  });

  it('no data step and not confirmed: there is no setup', () => {
    const { container } = renderView({
      state: { ...INITIAL_HOST_SURVEY_STATE, isFetchingData: false },
    });
    expect(container.textContent).toContain('There is no setup for this household yet.');
  });

  it('a summary to submit: "Ready to Submit", the review message, the Edit links and the footer', () => {
    const { container } = renderView({
      state: {
        ...CONFIRMED_STATE,
        isConfirmedSurvey: false,
        hasDataSteps: true,
        currentStatus: INITIAL_HOST_SURVEY_STATE.currentStatus,
      },
    });
    expect(text('.orbit-host-survey-header-summary')).toBe('Ready to Submit');
    expect(container.textContent).toContain('Please ensure all details are correct before submission.');
    expect(editLinks()).toHaveLength(2);
    fireEvent.click(editLinks()[1]?.parentElement as Element);
    expect(onEditStep).toHaveBeenCalledWith(HostSurveyStep.meal);
    // HS view :3320-3465: Back / Submit on the summary.
    expect(text('.orbit-footer-with-buttons-btn-left')).toBe('Back');
    expect(text('.orbit-footer-with-buttons-btn-right')).toBe('Submit');
    expect(notCaptured()).toEqual([]);
  });

  it('a data step: the step header "Step 1 of 4" with the Pending pill, the footer Cancel / Save while in edit', () => {
    const accommodation = { ...step(HostSurveyStep.accommodation, true), HeaderLabel: 'Accommodation' };
    const edit = { IsEdit: true, TrySave: false, HasData: true };
    renderView({
      state: {
        ...CONFIRMED_STATE,
        isConfirmedSurvey: false,
        hasDataSteps: true,
        currentStatus: INITIAL_HOST_SURVEY_STATE.currentStatus,
        currentStep: { step: accommodation, rowNumber: 1 },
        steps: [
          step(HostSurveyStep.navigation, false),
          accommodation,
          step(2, true),
          step(6, true),
          step(1, true),
          SUMMARY,
        ],
        stepProperties: { ...INITIAL_HOST_SURVEY_STATE.stepProperties, Accommodation: edit },
      },
    });
    expect(text('[data-block="Orbit_Blocks.HostSurvey_StepHeader"] .bold')).toBe('Step 1 of 4');
    expect(text('[data-block="Orbit_Blocks.HostSurvey_StepHeader"]')).toContain('Accommodation');
    expect(text('[data-block="Orbit_Blocks.HostSurvey_PillItem"]')).toBe('Pending');
    expect(text('.orbit-footer-with-buttons-btn-left')).toBe('Cancel');
    expect(text('.orbit-footer-with-buttons-btn-right')).toBe('Save');
    // The accommodation note: MaxLength 250, the hint of InputWithMaxChar.
    const note = document.getElementById('b2-Input_AccommodationNote') as HTMLInputElement;
    expect(note.maxLength).toBe(250);
    expect(note.placeholder).toBe('Notes for Event Team');
    expect(document.body.textContent).toContain('Max Characters: 250');
    expect(notCaptured()).toEqual([]);
  });

  it('the footer raises the button events; an open popup shows its title, message and buttons', () => {
    const onPrimaryButton = vi.fn();
    const onSecondaryButton = vi.fn();
    const onPopUpPrimary = vi.fn();
    const onPopUpSecondary = vi.fn();
    renderView({
      onPrimaryButton,
      onSecondaryButton,
      onPopUpPrimary,
      onPopUpSecondary,
      state: {
        ...CONFIRMED_STATE,
        isConfirmedSurvey: false,
        hasDataSteps: true,
        currentStatus: INITIAL_HOST_SURVEY_STATE.currentStatus,
        popUpInfo: {
          ...INITIAL_HOST_SURVEY_STATE.popUpInfo,
          Title: 'Return to the previous page?',
          Message: 'Are you sure you want to return to the previous page?',
          IsShowPopup_ReturnBack: true,
        },
      },
    });
    fireEvent.click(document.querySelector('.orbit-footer-with-buttons-btn-right') as Element);
    fireEvent.click(document.querySelector('.orbit-footer-with-buttons-btn-left') as Element);
    expect(onPrimaryButton).toHaveBeenCalledTimes(1);
    expect(onSecondaryButton).toHaveBeenCalledTimes(1);
    expect(text('.orbit-popup-new-title')).toBe('Return to the previous page?');
    expect(text('.orbit-popup-new-action-btn-cancel')).toBe('Discard Survey');
    expect(text('.orbit-popup-new-action-btn-proceed')).toBe('Yes');
    fireEvent.click(document.querySelector('.orbit-popup-new-action-btn-proceed') as Element);
    fireEvent.click(document.querySelector('.orbit-popup-new-action-btn-cancel') as Element);
    expect(onPopUpPrimary).toHaveBeenCalledTimes(1);
    expect(onPopUpSecondary).toHaveBeenCalledTimes(1);
  });

  it('the vehicle step: the HasVehicles switch; no vehicle list while it is off', () => {
    const onHasVehiclesChange = vi.fn();
    renderView({
      onHasVehiclesChange,
      state: {
        ...CONFIRMED_STATE,
        isConfirmedSurvey: false,
        hasDataSteps: true,
        currentStatus: INITIAL_HOST_SURVEY_STATE.currentStatus,
        currentStep: { step: step(HostSurveyStep.vehicle, true), rowNumber: 4 },
      },
    });
    expect(document.body.textContent).toContain(
      'Do you, or your guests & helpers, have vehicles to help transport guests within the locality?',
    );
    expect(document.querySelector('.orbit-host-survey-vehicle .orbit-host-survey-list')).toBeNull();
    fireEvent.click(document.getElementById('b2-Switch_HasVehicles') as Element);
    expect(onHasVehiclesChange).toHaveBeenCalledWith(true);
  });

  it('a summary without rooms and meals, with a host note and the helper and vehicle sections', () => {
    const { container } = renderView({
      state: {
        ...CONFIRMED_STATE,
        hostSurvey: {
          ...SURVEY,
          SurveyInfo: {
            ...SURVEY.SurveyInfo,
            HelperSurvey: true,
            VehicleSurvey: true,
            HostSurveyNote: 'Gate code 4410',
          },
          Rooms: { AccommodationNote: '', HostSurvey_RoomItem: [] },
          Meals: { MealNote: '', MealItemInfo: [] },
        },
      },
    });
    expect(container.textContent).toContain('No room data added.');
    expect(container.textContent).toContain('No meal data added.');
    expect(container.textContent).toContain('No helper data added.');
    expect(container.textContent).toContain('No vehicle data added.');
    expect(container.textContent).toContain('Notes for Event Team');
    expect(container.textContent).toContain('Gate code 4410');
    expect(notCaptured()).toEqual([]);
  });
});
