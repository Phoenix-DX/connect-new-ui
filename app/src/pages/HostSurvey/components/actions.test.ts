import { describe, expect, it } from 'vitest';
import type { LocalLabelledRecord } from '@/platform/storage/localEntities';
import {
  createValidationMessage,
  getFormattedDate_Survey,
  getGenderPreferenceByJSON_Name,
  getHelperRoleByJSON_Name,
  getHelperStatusByJSON_Name,
  getHouseFloorByJSON_Name,
  getMealTypeByJSON_Name,
  getVehicleOwnerByJSON_Name,
  getVehicleTypeByJSON_Name,
} from './actions';

/* The client actions that the HostSurvey pills call. */

const FLOORS: LocalLabelledRecord[] = [
  { Id: 5, Label: 'Ground Floor', JSON_Name: 'ground', Order: 1 },
  { Id: 6, Label: 'First Floor', JSON_Name: 'first', Order: 2 },
];
const EMPTY: LocalLabelledRecord = { Id: 0, Label: '', JSON_Name: '', Order: 0 };

describe('HostSurvey client actions', () => {
  it('GetHouseFloorByJSON_Name and GetGenderPreferenceByJSON_Name: the first match, else the empty record', () => {
    expect(getHouseFloorByJSON_Name('first', FLOORS)).toEqual(FLOORS[1]);
    expect(getHouseFloorByJSON_Name('attic', FLOORS)).toEqual(EMPTY);
    const genders: LocalLabelledRecord[] = [{ Id: 2, Label: 'Couple', JSON_Name: 'COUPLE', Order: 1 }];
    expect(getGenderPreferenceByJSON_Name('COUPLE', genders).Label).toBe('Couple');
    expect(getGenderPreferenceByJSON_Name('', genders)).toEqual(EMPTY);
  });

  it('GetFormattedDate_Survey: "" for the null date; else UTC day / two-digit UTC month / UTC year of the local midnight', () => {
    expect(getFormattedDate_Survey('')).toBe('');
    const local = new Date(2026, 10, 7);
    const month = local.getUTCMonth() + 1;
    expect(getFormattedDate_Survey('2026-11-07')).toBe(
      `${String(local.getUTCDate())}/${month < 10 ? `0${String(month)}` : String(month)}/${String(local.getUTCFullYear())}`,
    );
    expect(getFormattedDate_Survey('2026-11-07')).toMatch(/^(6|7)\/11\/2026$/);
  });
});

describe('helper actions of the HostSurvey blocks (C:1236, C:3696, C:3783)', () => {
  const roles = [
    { Id: 6, Label: 'Helper', JSON_Name: 'HELPER', Order: 1, isReadOnly: false },
    { Id: 1, Label: 'Usher', JSON_Name: 'USHER', Order: 2, isReadOnly: false },
  ];
  const statuses = [
    { Id: 4, Label: 'Pending', JSON_Name: 'pending' },
    { Id: 3, Label: 'Approved', JSON_Name: 'approved' },
  ];

  it('GetHelperRoleByJSON_Name returns the first match, else the empty record', () => {
    expect(getHelperRoleByJSON_Name('USHER', roles).Label).toBe('Usher');
    expect(getHelperRoleByJSON_Name('COOK', roles)).toEqual({
      Id: 0,
      Label: '',
      Order: 0,
      JSON_Name: '',
      isReadOnly: false,
    });
  });

  it('GetHelperStatusByJSON_Name returns the first match, else the empty record', () => {
    expect(getHelperStatusByJSON_Name('approved', statuses).Id).toBe(3);
    expect(getHelperStatusByJSON_Name('', statuses)).toEqual({ Id: 0, Label: '', JSON_Name: '' });
  });

  it('CreateValidationMessage builds "<name> is required." / " are " / the default text', () => {
    expect(createValidationMessage('Helper role', false)).toBe('Helper role is required.');
    expect(createValidationMessage('Helpers', true)).toBe('Helpers are required.');
    expect(createValidationMessage('', false)).toBe('This field is required.');
  });
});

describe('meal and vehicle lookups of the HostSurvey blocks (C:4171, C:4848, C:4935)', () => {
  const mealTypes = [
    { Id: 1, Label: 'Midday Meal', JSON_Name: 'MIDDAY' },
    { Id: 2, Label: 'Evening Meal', JSON_Name: 'EVENING' },
  ];
  const owners = [{ Id: '2', Label: 'Host', JSON_Name: 'HOST', Order: 1 }];
  const types = [
    { Id: '5', Label: 'Car', JSON_Name: 'CAR', Order: 1 },
    { Id: '1', Label: 'Van', JSON_Name: 'VAN', Order: 3 },
  ];

  it('GetMealTypeByJSON_Name returns the first match, else the empty record', () => {
    expect(getMealTypeByJSON_Name('EVENING', mealTypes).Label).toBe('Evening Meal');
    expect(getMealTypeByJSON_Name('BRUNCH', mealTypes)).toEqual({ Id: 0, Label: '', JSON_Name: '' });
  });

  it('GetVehicleOwnerByJSON_Name and GetVehicleTypeByJSON_Name return the first match, else the empty record', () => {
    expect(getVehicleOwnerByJSON_Name('HOST', owners).Label).toBe('Host');
    expect(getVehicleOwnerByJSON_Name('GUEST', owners)).toEqual({ Id: '0', Label: '', JSON_Name: '', Order: 0 });
    expect(getVehicleTypeByJSON_Name('VAN', types).Label).toBe('Van');
    expect(getVehicleTypeByJSON_Name('', types).Label).toBe('');
  });
});
