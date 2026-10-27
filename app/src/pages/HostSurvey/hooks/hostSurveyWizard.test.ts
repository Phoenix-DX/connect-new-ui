import { describe, expect, it } from 'vitest';
import type { HostSurvey, HostSurveyHelper, HostSurveyMeal, HostSurveyRoom, HostSurveyVehicle } from '@/api/event';
import { HostSurveyStep, type LocalHelperRole, type LocalHostSurveyStep } from '@/platform/storage/localEntities';
import {
  INITIAL_HOST_SURVEY_STATE,
  addItem,
  cancelEdit,
  deleteItem,
  getPopUpInfo,
  getStepProperties,
  hostSurveyReducer,
  saveFailed,
  saveFailedGoesOn,
  saveItem,
  surveyNext,
  validateStepEdit,
  type HostSurveyState,
  type StepProperties,
} from './hostSurveyState';

/* The client actions of the data steps of ScreenBlock_HostSurvey (HS controller), pure on the state. Expected
   behaviour = the TST flow of each action. Fictional household in Mar del Plata. */

const step = (Id: number, Order: number, IsDataStep: boolean, AddLabel = ''): LocalHostSurveyStep => ({
  Id,
  HeaderLabel: '',
  AddLabel,
  Order,
  IsDataStep,
});
const NAVIGATION = step(HostSurveyStep.navigation, 1, false);
const ACCOMMODATION = step(HostSurveyStep.accommodation, 2, true, 'Room');
const MEAL = step(HostSurveyStep.meal, 3, true, 'Meal');
const HELPER = step(HostSurveyStep.helper, 4, true, 'Helper');
const VEHICLE = step(HostSurveyStep.vehicle, 5, true, 'Vehicle');
const SUMMARY = step(HostSurveyStep.summary, 6, false);
const STEPS = [NAVIGATION, ACCOMMODATION, MEAL, HELPER, VEHICLE, SUMMARY];

const room = (Name: string, IsEdit = false): HostSurveyRoom => ({
  Name,
  GenderPreference: 'COUPLE',
  Floor: 'ground',
  NumberOfBeds: '1',
  Beds: ['QUEEN'],
  HasEnsuite: false,
  HasToilet: false,
  HasShower: false,
  HasBasin: false,
  RoomNote: '',
  IsEdit,
});
const meal = (Id: string, IsEdit = false, capacity = '10'): HostSurveyMeal => ({
  Id,
  Name: 'Lunch',
  MilestoneDescription: 'Midday Meal',
  EventDate: '2026-11-07',
  SequenceNo: '1',
  IsPreferred: false,
  ComfortableCapacity: capacity,
  StretchCapacity: capacity,
  IsEdit,
  ResetMealData: false,
});
const helper = (MemberId: string, IsEdit = false): HostSurveyHelper => ({
  Id: '0',
  MemberId,
  FirstName: 'Lucía',
  LastName: 'Benítez',
  LocalityName: 'Mar del Plata',
  CountryName: 'Argentina',
  HelperRole: 'USHER',
  HelperStatus: 'pending',
  IsEdit,
});
const vehicle = (OwnerType: string, IsEdit = false): HostSurveyVehicle => ({
  Id: '0',
  IsEdit,
  OwnerType,
  RegistrationNumber: 'AE 418 KD',
  TotalSeats: '5',
  VehicleId: '0',
  VehicleMakeAndModel: 'Peugeot 308',
  VehicleType: 'CAR',
});

const SURVEY: HostSurvey = {
  ...INITIAL_HOST_SURVEY_STATE.hostSurvey,
  SurveyInfo: {
    ...INITIAL_HOST_SURVEY_STATE.hostSurvey.SurveyInfo,
    AccommodationSurvey: true,
    AccommodationSurveyUpdate: true,
    MealSurvey: true,
    MealSurveyUpdate: true,
    HelperSurvey: true,
    VehicleSurvey: true,
  },
  Meals: { MealNote: 'Two tables in the garden.', MealItemInfo: [] },
};

const BLANK: StepProperties = { IsEdit: true, TrySave: false, HasData: false };
const at = (current: LocalHostSurveyStep, patch: Partial<HostSurveyState> = {}): HostSurveyState => ({
  ...INITIAL_HOST_SURVEY_STATE,
  hostSurvey: SURVEY,
  fetchedSurvey: SURVEY,
  steps: STEPS,
  hasDataSteps: true,
  currentStep: { step: current, rowNumber: STEPS.indexOf(current) },
  stepProperties: { Accommodation: BLANK, Meals: BLANK, Helpers: BLANK, Vehicles: BLANK },
  ...patch,
});
const withRooms = (rooms: HostSurveyRoom[]): HostSurvey => ({
  ...SURVEY,
  Rooms: { AccommodationNote: '', HostSurvey_RoomItem: rooms },
});
const withMeals = (meals: HostSurveyMeal[]): HostSurvey => ({
  ...SURVEY,
  Meals: { ...SURVEY.Meals, MealItemInfo: meals },
});
const ROLES: LocalHelperRole[] = [
  { Id: 6, Label: 'Helper', Order: 1, JSON_Name: 'HELPER', isReadOnly: false },
  { Id: 13, Label: 'Coordinator', Order: 2, JSON_Name: 'COORDINATOR', isReadOnly: true },
];

describe('ScreenBlock_HostSurvey data-step actions', () => {
  it('GetPopUpInfo: the title and message of each popup (controller.js GetPopUpInfo)', () => {
    expect(getPopUpInfo('Cancel').Title).toBe('Confirm Discard Changes');
    expect(getPopUpInfo('NoInfo')).toEqual({
      Title: 'No data added?',
      Message: 'No information has been added to this step, are you sure this is correct?',
    });
    expect(getPopUpInfo('Delete').Title).toBe('Deleting placeholder?');
    expect(getPopUpInfo('ReturnBack').Message).toContain('This survey will be saved as a draft.');
    expect(getPopUpInfo('ReturnNavigation').Message).toBe(
      'Are you sure you want to return to the Navigation page?\r\nAny unsaved details will be discarded.',
    );
  });

  it('GetStepProperties: the properties of the step, the defaults for the navigation step', () => {
    const s = at(MEAL);
    expect(getStepProperties(MEAL, s.stepProperties)).toBe(s.stepProperties.Meals);
    expect(getStepProperties(NAVIGATION, s.stepProperties)).toEqual({ IsEdit: false, TrySave: false, HasData: false });
  });

  it('ValidateStepEdit on a data step: an empty list → HasData = not IsEdit; items → IsEdit = one in edit, HasData', () => {
    expect(validateStepEdit(at(ACCOMMODATION)).stepProperties.Accommodation).toEqual(BLANK);
    const rooms = validateStepEdit(at(ACCOMMODATION, { hostSurvey: withRooms([room('Patio'), room('Loft', true)]) }));
    expect(rooms.stepProperties.Accommodation).toEqual({ IsEdit: true, TrySave: false, HasData: true });
    // A data step stops after its own section: the meal properties stay.
    expect(rooms.stepProperties.Meals).toEqual(BLANK);
  });

  it('ValidateStepEdit of the helper step: IsEdit while adding a helper', () => {
    const adding = validateStepEdit(at(HELPER, { isAddingHelper: true }));
    expect(adding.stepProperties.Helpers).toEqual({ IsEdit: true, TrySave: false, HasData: false });
    const notEdit = { IsEdit: false, TrySave: false, HasData: false };
    const empty = validateStepEdit(at(HELPER, { stepProperties: { ...at(HELPER).stepProperties, Helpers: notEdit } }));
    expect(empty.stepProperties.Helpers.HasData).toBe(true);
  });

  it('ValidateStepEdit on the navigation step checks every section', () => {
    const s = validateStepEdit(at(NAVIGATION, { hostSurvey: withRooms([room('Patio')]) }));
    expect(s.stepProperties.Accommodation).toEqual({ IsEdit: false, TrySave: false, HasData: true });
    expect(s.stepProperties.Vehicles).toEqual(BLANK);
  });

  it('OnClick_AddItem: a new room in edit; nothing while a room with data is in edit, on the meal step or confirmed', () => {
    const added = addItem(at(ACCOMMODATION));
    expect(added.hostSurvey.Rooms.HostSurvey_RoomItem).toEqual([
      { ...room(''), GenderPreference: '', Floor: '', NumberOfBeds: '0', Beds: [], IsEdit: true },
    ]);
    expect(added.stepProperties.Accommodation).toEqual({ IsEdit: true, TrySave: false, HasData: true });
    expect(addItem(added)).toBe(added);
    const meals = at(MEAL);
    expect(addItem(meals)).toBe(meals);
    const confirmed = at(ACCOMMODATION, { isConfirmedSurvey: true });
    expect(addItem(confirmed)).toBe(confirmed);
    expect(addItem(at(HELPER)).isAddingHelper).toBe(true);
    expect(addItem(at(VEHICLE)).hostSurvey.Vehicles.VehicleItemInfo).toHaveLength(1);
  });

  it('DeleteItem: removes the row, HasData / IsEdit from the list, PositionToDelete = 0; the meal step ends', () => {
    const s = deleteItem(
      at(ACCOMMODATION, { hostSurvey: withRooms([room('Patio'), room('Loft')]), positionToDelete: 1 }),
      1,
    );
    expect(s.hostSurvey.Rooms.HostSurvey_RoomItem.map((r) => r.Name)).toEqual(['Patio']);
    expect(s.stepProperties.Accommodation).toEqual({ IsEdit: false, TrySave: false, HasData: true });
    expect(s.positionToDelete).toBe(0);
    const meals = at(MEAL, { positionToDelete: 1 });
    expect(deleteItem(meals, 0)).toBe(meals);
  });

  it('CancelEdit: a named room leaves edit; a new room is deleted', () => {
    const named = cancelEdit(at(ACCOMMODATION, { hostSurvey: withRooms([room('Patio', true)]) }));
    expect(named.hostSurvey.Rooms.HostSurvey_RoomItem[0]?.IsEdit).toBe(false);
    const fresh = cancelEdit(at(ACCOMMODATION, { hostSurvey: withRooms([room('Patio'), room('', true)]) }));
    expect(fresh.hostSurvey.Rooms.HostSurvey_RoomItem.map((r) => r.Name)).toEqual(['Patio']);
    expect(fresh.roomNames).toEqual(['Patio']);
  });

  it('CancelEdit of meals: complete meals leave edit, the others reset; MealNote goes back to the fetched one', () => {
    const s = at(MEAL, {
      hostSurvey: {
        ...withMeals([meal('1', true), meal('2', true, '')]),
        Meals: { MealNote: 'Changed', MealItemInfo: [meal('1', true), meal('2', true, '')] },
      },
    });
    const cancelled = cancelEdit(s);
    expect(cancelled.hostSurvey.Meals.MealItemInfo.map((m) => [m.IsEdit, m.ResetMealData])).toEqual([
      [false, false],
      [true, true],
    ]);
    expect(cancelled.hostSurvey.Meals.MealNote).toBe('Two tables in the garden.');
  });

  it('CancelEdit of helpers and vehicles: AddHelper closes; a new helper or vehicle is deleted', () => {
    expect(cancelEdit(at(HELPER, { isAddingHelper: true })).isAddingHelper).toBe(false);
    const helpers = {
      ...SURVEY,
      Helpers: { HelperNote: '', HelperItemInfo: [helper('5120', true), helper('0', false)] },
    };
    expect(cancelEdit(at(HELPER, { hostSurvey: helpers })).hostSurvey.Helpers.HelperItemInfo[0]?.IsEdit).toBe(false);
    const vehicles = {
      ...SURVEY,
      Vehicles: { HasVehicles: true, VehicleItemInfo: [vehicle('HOST'), vehicle('', true)] },
    };
    expect(cancelEdit(at(VEHICLE, { hostSurvey: vehicles })).hostSurvey.Vehicles.VehicleItemInfo).toHaveLength(1);
  });

  it('OnHandle_SaveItem: the room replaces its row out of edit, TrySave False, RoomNames', () => {
    const s = at(ACCOMMODATION, {
      hostSurvey: withRooms([room('', true)]),
      stepProperties: {
        ...at(ACCOMMODATION).stepProperties,
        Accommodation: { IsEdit: true, TrySave: true, HasData: true },
      },
    });
    const saved = saveItem(s, 0, { room: room('Garden Room', true) });
    expect(saved.hostSurvey.Rooms.HostSurvey_RoomItem).toEqual([room('Garden Room')]);
    expect(saved.stepProperties.Accommodation).toEqual({ IsEdit: false, TrySave: false, HasData: true });
    expect(saved.roomNames).toEqual(['Garden Room']);
  });

  it('SaveMultipleMeals_Success: waits for a later meal in edit, then TrySave False', () => {
    const trying = { IsEdit: true, TrySave: true, HasData: true };
    const s = at(MEAL, {
      hostSurvey: withMeals([meal('1', true), meal('2', true)]),
      stepProperties: { ...at(MEAL).stepProperties, Meals: trying },
    });
    const first = saveItem(s, 0, { meal: meal('1', true) });
    expect(first.stepProperties.Meals.TrySave).toBe(true);
    const second = saveItem(first, 1, { meal: meal('2', true) });
    expect(second.stepProperties.Meals).toEqual({ IsEdit: false, TrySave: false, HasData: true });
  });

  it('OnHandle_SaveFailed: TrySave False and the message; on the meal step no message while a later meal saves', () => {
    const trying = { IsEdit: true, TrySave: true, HasData: true };
    const rooms = saveFailed(
      at(ACCOMMODATION, { stepProperties: { ...at(ACCOMMODATION).stepProperties, Accommodation: trying } }),
      0,
    );
    expect(rooms.stepProperties.Accommodation.TrySave).toBe(false);
    expect(saveFailedGoesOn(rooms)).toBe(true);
    const meals = at(MEAL, {
      hostSurvey: withMeals([meal('1', true), meal('2', true)]),
      stepProperties: { ...at(MEAL).stepProperties, Meals: trying },
    });
    const waiting = saveFailed(meals, 0);
    expect(waiting.stepProperties.Meals.TrySave).toBe(true);
    expect(saveFailedGoesOn(waiting)).toBe(false);
    const last = saveFailed(meals, 1);
    expect(last.stepProperties.Meals.TrySave).toBe(false);
    expect(saveFailedGoesOn(last)).toBe(true);
    expect(saveFailedGoesOn(at(NAVIGATION))).toBe(false);
  });

  it('Survey_Next: the step with the next Order, with its row number; FilteredHelperRoles on the helper step', () => {
    const next = surveyNext(at(MEAL), ROLES);
    expect(next.currentStep).toEqual({ step: HELPER, rowNumber: 3 });
    expect(next.filteredHelperRoles.map((r) => r.JSON_Name)).toEqual(['HELPER']);
    const summary = at(SUMMARY);
    expect(surveyNext(summary, ROLES)).toBe(summary);
  });

  it('the popups: Delete keeps PositionToDelete; Close clears every popup', () => {
    const asked = hostSurveyReducer(at(ACCOMMODATION), { type: 'deleteItemAsked', row: 2 });
    expect(asked.positionToDelete).toBe(2);
    expect(asked.popUpInfo).toMatchObject({ Title: 'Deleting placeholder?', IsShowPopup_Delete: true });
    expect(hostSurveyReducer(asked, { type: 'popUpClosed' }).popUpInfo).toEqual(INITIAL_HOST_SURVEY_STATE.popUpInfo);
  });

  it('PostHostSurvey before the call: the status JSON_Name; the vehicles go when HasVehicles is off', () => {
    const vehicles = { ...SURVEY, Vehicles: { HasVehicles: false, VehicleItemInfo: [vehicle('HOST')] } };
    const s = hostSurveyReducer(at(SUMMARY, { hostSurvey: vehicles }), {
      type: 'postPrepared',
      statusJsonName: 'confirmed',
    });
    expect(s.hostSurvey.SurveyInfo.HostProfileSurveyStatus).toBe('confirmed');
    expect(s.hostSurvey.Vehicles.VehicleItemInfo).toEqual([]);
    const posted = hostSurveyReducer(hostSurveyReducer(s, { type: 'postStarted' }), { type: 'postFinished' });
    expect([posted.surveySubmitted, posted.isPostingSurvey]).toEqual([true, false]);
  });
});
