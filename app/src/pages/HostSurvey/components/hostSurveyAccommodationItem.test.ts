import { describe, expect, it } from 'vitest';
import type { HostSurveyRoom } from '@/api/event';
import { createValidationMessage } from './actions';
import {
  filterBedSizes,
  initialAccommodationEdit,
  initializeVars,
  invalidBeds,
  onParametersChangedStep,
  populateNoOfBeds,
  resizeBeds,
  sameRoomNameIndex,
} from './hostSurveyAccommodationItem';

const prefs = [
  { Id: 3, Label: 'Male', JSON_Name: 'MALE', Order: 1 },
  { Id: 4, Label: 'Female', JSON_Name: 'FEMALE', Order: 2 },
  { Id: 2, Label: 'Couple', JSON_Name: 'COUPLE', Order: 3 },
  { Id: 1, Label: 'Either', JSON_Name: 'EITHER', Order: 4 },
];
const bedSizes = [
  { Id: '3', Label: 'Single', JSON_Name: 'SINGLE', Order: 1 },
  { Id: '4', Label: 'King Single', JSON_Name: 'KING_SINGLE', Order: 2 },
  { Id: '5', Label: 'Double', JSON_Name: 'DOUBLE', Order: 3 },
  { Id: '1', Label: 'Queen', JSON_Name: 'QUEEN', Order: 4 },
  { Id: '2', Label: 'King', JSON_Name: 'KING', Order: 5 },
];
const room = (patch: Partial<HostSurveyRoom> = {}): HostSurveyRoom => ({
  Name: 'Garden Room',
  GenderPreference: 'FEMALE',
  Floor: 'ground',
  NumberOfBeds: '0',
  Beds: [],
  HasEnsuite: false,
  HasToilet: false,
  HasShower: false,
  HasBasin: false,
  RoomNote: '',
  IsEdit: true,
  ...patch,
});

describe('HostSurvey_AccommodationItem client actions', () => {
  it('CreateValidationMessage: "<name> is/are required." or the generic text', () => {
    expect(createValidationMessage('Room name', false)).toBe('Room name is required.');
    expect(createValidationMessage('Sleeping Arrangements', true)).toBe('Sleeping Arrangements are required.');
    expect(createValidationMessage('', false)).toBe('This field is required.');
  });

  it('FilterBedSizes: couples with one bed → doubles; with two → singles; others → all', () => {
    const one = filterBedSizes(
      initialAccommodationEdit(room({ GenderPreference: 'COUPLE', NumberOfBeds: '1' })),
      bedSizes,
      prefs,
    );
    expect(one.editBedSizes.map((b) => b.JSON_Name)).toEqual(['DOUBLE', 'QUEEN', 'KING']);
    const two = filterBedSizes(
      initialAccommodationEdit(room({ GenderPreference: 'COUPLE', NumberOfBeds: '2' })),
      bedSizes,
      prefs,
    );
    expect(two.editBedSizes.map((b) => b.JSON_Name)).toEqual(['SINGLE', 'KING_SINGLE']);
    expect(filterBedSizes(initialAccommodationEdit(room()), bedSizes, prefs).editBedSizes).toHaveLength(5);
  });

  it('PopulateNoOfBeds: 1-10 options, 1-2 for couples; shrinking keeps the first beds and clears the others', () => {
    const s = populateNoOfBeds(initialAccommodationEdit(room()), prefs);
    expect(s.numberOfBeds).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
    const shrunk = populateNoOfBeds(
      {
        ...s,
        editBedSizes: bedSizes.filter((b) => b.Id === '3' || b.Id === '4'),
        room: room({ GenderPreference: 'COUPLE', NumberOfBeds: '3', Beds: ['SINGLE', 'DOUBLE', 'SINGLE'] }),
      },
      prefs,
    );
    expect(shrunk.numberOfBeds).toEqual(['1', '2']);
    expect(shrunk.room.Beds).toEqual(['SINGLE', '']);
    expect(shrunk.room.NumberOfBeds).toBe('2');
    const grown = populateNoOfBeds({ ...shrunk, room: room({ GenderPreference: 'MALE' }) }, prefs);
    expect(grown.numberOfBeds).toHaveLength(10);
    expect(grown.numberOfBeds[2]).toBe('3');
  });

  it('OnChange_NoOfBeds: adds empty beds, removes the last ones, clears on the empty value', () => {
    const base = { ...initialAccommodationEdit(room({ NumberOfBeds: '3', Beds: ['SINGLE'] })), editBedSizes: bedSizes };
    expect(resizeBeds(base).room.Beds).toEqual(['SINGLE', '', '']);
    expect(resizeBeds({ ...base, room: room({ NumberOfBeds: '1', Beds: ['QUEEN', 'SINGLE'] }) }).room.Beds).toEqual([
      'QUEEN',
    ]);
    expect(resizeBeds({ ...base, room: room({ NumberOfBeds: '0', Beds: ['QUEEN'] }) }).room.Beds).toEqual([]);
  });

  it('InitializeVars only builds the options of a room in edit once', () => {
    expect(initializeVars(initialAccommodationEdit(room({ IsEdit: false })), bedSizes, prefs).numberOfBeds).toEqual([]);
    expect(initializeVars(initialAccommodationEdit(room()), bedSizes, prefs).numberOfBeds).toHaveLength(10);
  });

  it('ValidateBedSizeInputs and the room name match', () => {
    const s = {
      ...initialAccommodationEdit(room({ Beds: ['SINGLE', '', 'KING'] })),
      editBedSizes: bedSizes.slice(0, 2),
    };
    expect(invalidBeds(s)).toEqual([false, true, true]);
    expect(sameRoomNameIndex(['Studio', ' garden room '], 'Garden Room')).toBe(1);
    expect(sameRoomNameIndex(['Studio'], 'Garden Room')).toBe(-1);
  });

  it('OnParametersChanged: the TST branches', () => {
    expect(onParametersChangedStep(true, true, true, true)).toBe('none');
    expect(onParametersChangedStep(false, true, false, true)).toBe('validate');
    expect(onParametersChangedStep(false, true, true, false)).toBe('none');
    expect(onParametersChangedStep(false, false, true, false)).toBe('startEdit');
    expect(onParametersChangedStep(false, false, false, true)).toBe('reset');
    expect(onParametersChangedStep(false, false, false, false)).toBe('none');
  });
});
