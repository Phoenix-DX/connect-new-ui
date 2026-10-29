import { afterEach, describe, expect, it } from 'vitest';
import type { HostSurveyVehicle } from '@/api/event';
import {
  setCorrectBoundaries,
  textToLongInteger,
  vehicleFormValidationWrites,
  vehicleInputMaxChars,
  vehicleOnChangeWrite,
  vehicleParametersChanged,
} from './hostSurveyVehicleItem';

/* The pure flows and JavaScript node of HostSurvey_VehicleItem (VI = TST HostSurvey_VehicleItem.mvc.js). */

const CAR: HostSurveyVehicle = {
  Id: '3308',
  VehicleId: '5522',
  OwnerType: 'HOST',
  VehicleType: 'CAR',
  VehicleMakeAndModel: 'Fiat Cronos',
  RegistrationNumber: 'AC 118 PR',
  TotalSeats: '5',
  IsEdit: false,
};
const editing = { ...CAR, IsEdit: true };

afterEach(() => {
  document.body.innerHTML = '';
});

describe('OnParametersChanged (VI :748-823)', () => {
  const run = (p: Partial<Parameters<typeof vehicleParametersChanged>[0]>) =>
    vehicleParametersChanged({ isSurveyConfirmed: false, trySave: false, inVehicle: CAR, edit: CAR, ...p });

  it('does nothing on a confirmed survey; validates on TrySave only an item in edit', () => {
    expect(run({ isSurveyConfirmed: true, trySave: true, edit: editing })).toEqual({ kind: 'none' });
    expect(run({ trySave: true, edit: editing })).toEqual({ kind: 'validate' });
    expect(run({ trySave: true })).toEqual({ kind: 'none' });
  });
  it('copies the parent record only when one of the two is in edit', () => {
    expect(run({ inVehicle: editing, edit: editing })).toEqual({ kind: 'none' });
    expect(run({})).toEqual({ kind: 'none' });
    expect(run({ inVehicle: editing })).toEqual({ kind: 'copy' });
    expect(run({ edit: editing })).toEqual({ kind: 'copy' });
  });
});

describe('OnChange_Inputs and VehicleForm_Validate (VI :887-1060)', () => {
  it('writes the dropdown validity, and the seats message the TST way round', () => {
    expect(vehicleOnChangeWrite('Dropdown_OwnerType', { ...CAR, OwnerType: '' })).toEqual({
      widget: 'Dropdown_OwnerType',
      valid: false,
      message: 'Owner type is required.',
    });
    expect(vehicleOnChangeWrite('Dropdown_VehicleType', CAR)?.valid).toBe(true);
    expect(vehicleOnChangeWrite('Input_TotalSeats', CAR)).toEqual({
      widget: 'Input_TotalSeats',
      valid: true,
      message: 'Total seats are required.',
    });
    expect(vehicleOnChangeWrite('Input_TotalSeats', { ...CAR, TotalSeats: '0' })).toEqual({
      widget: 'Input_TotalSeats',
      valid: false,
      message: '',
    });
    expect(vehicleOnChangeWrite('Input_MakeModel', CAR)).toBeNull();
  });

  it('marks a missing owner type, vehicle type and seats; a complete vehicle has no write', () => {
    expect(vehicleFormValidationWrites({ ...CAR, OwnerType: '', VehicleType: '', TotalSeats: '0' })).toEqual([
      { widget: 'Dropdown_OwnerType', valid: false, message: 'Owner type is required.' },
      { widget: 'Dropdown_VehicleType', valid: false, message: 'Vehicle type is required.' },
      { widget: 'Input_TotalSeats', valid: false, message: 'Total seats is required.' },
    ]);
    expect(vehicleFormValidationWrites(CAR)).toEqual([]);
  });
});

describe('OnKeyup_Inputs and SetCorrectBoundaries (VI :1122-1172, :1317-1325)', () => {
  it('cuts an input to its MaxChars', () => {
    expect([
      vehicleInputMaxChars('Input_MakeModel'),
      vehicleInputMaxChars('Input_VehicleNumber'),
      vehicleInputMaxChars('Input_TotalSeats'),
    ]).toEqual([150, 10, 2]);
    expect(vehicleInputMaxChars('Dropdown_OwnerType')).toBeNull();
    document.body.innerHTML = '<input id="plate" value="AC 118 PR 77">';
    setCorrectBoundaries('plate', 10);
    expect((document.getElementById('plate') as HTMLInputElement).value).toBe('AC 118 PR ');
    expect(textToLongInteger('07')).toBe('7');
    expect(textToLongInteger('')).toBe('0');
  });
});
