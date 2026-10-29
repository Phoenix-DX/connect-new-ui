import { afterEach, describe, expect, it } from 'vitest';
import type { HostSurveyMeal } from '@/api/event';
import {
  getMealFormInputValues,
  mealFormValidationWrites,
  mealOnChangeWrite,
  mealParametersChanged,
  normalizeMealCapacities,
  textToInteger,
  validateNumericInput,
} from './hostSurveyMealItem';

/* The pure flows and JavaScript nodes of HostSurvey_MealItem (MI = TST HostSurvey_MealItem.mvc.js). */

const LUNCH: HostSurveyMeal = {
  Id: '90411',
  Name: 'MIDDAY',
  MilestoneDescription: 'Sunday Family Lunch',
  EventDate: '2026-11-15',
  SequenceNo: '1',
  IsPreferred: true,
  ComfortableCapacity: '10',
  StretchCapacity: '12',
  IsEdit: false,
  ResetMealData: false,
};
const editing = { ...LUNCH, IsEdit: true };

afterEach(() => {
  document.body.innerHTML = '';
});

describe('OnParametersChanged (MI :572-663)', () => {
  const run = (p: Partial<Parameters<typeof mealParametersChanged>[0]>) =>
    mealParametersChanged({ isSurveyConfirmed: false, trySave: false, inMeal: LUNCH, edit: LUNCH, ...p });

  it('does nothing on a confirmed survey', () => {
    expect(run({ isSurveyConfirmed: true, trySave: true, edit: editing })).toEqual({ kind: 'none' });
  });
  it('validates on TrySave only an item in edit', () => {
    expect(run({ trySave: true, edit: editing })).toEqual({ kind: 'validate' });
    expect(run({ trySave: true })).toEqual({ kind: 'none' });
  });
  it('copies the parent record unless both or neither are in edit; a reset copies and raises MealDataReset', () => {
    expect(run({ inMeal: editing, edit: editing })).toEqual({ kind: 'none' });
    expect(run({})).toEqual({ kind: 'none' });
    expect(run({ inMeal: editing })).toEqual({ kind: 'copy', mealDataReset: false });
    expect(run({ edit: editing })).toEqual({ kind: 'copy', mealDataReset: false });
    expect(run({ inMeal: { ...editing, ResetMealData: true }, edit: editing })).toEqual({
      kind: 'copy',
      mealDataReset: true,
    });
  });
});

describe('OnChange_Inputs and MealForm_Validate (MI :734-964)', () => {
  it('writes the validity of the changed capacity input only', () => {
    expect(mealOnChangeWrite('Input_ConfortableCapacity', { ...LUNCH, ComfortableCapacity: '' })).toEqual({
      widget: 'Input_ConfortableCapacity',
      valid: false,
      message: 'Comfortable Capacity is required.',
    });
    expect(mealOnChangeWrite('Input_StretchCapacity', LUNCH)).toEqual({
      widget: 'Input_StretchCapacity',
      valid: true,
      message: '',
    });
    expect(mealOnChangeWrite('Checkbox_HostPreference', LUNCH)).toBeNull();
  });

  it('marks empty capacities and a stretch below the comfortable capacity', () => {
    const values = {
      HasConfortableCapacityValue: false,
      HasStretchCapacityValue: true,
      ConfortableCapacityValue: '',
      StretchCapacityValue: '6',
    };
    expect(mealFormValidationWrites(values)).toEqual([
      { widget: 'Input_ConfortableCapacity', valid: false, message: 'Comfortable Capacity is required.' },
    ]);
    expect(
      mealFormValidationWrites({ ...values, HasConfortableCapacityValue: true, ConfortableCapacityValue: '9' }),
    ).toEqual([
      {
        widget: 'Input_StretchCapacity',
        valid: false,
        message: 'Stretch Capacity must be greater than Confortable Capacity',
      },
    ]);
  });

  it('reads the inputs of the page (GetInputValues) and drops leading zeros of a valid form', () => {
    document.body.innerHTML = '<input id="c" value="08"><input id="s" value="">';
    expect(getMealFormInputValues('c', 's')).toEqual({
      HasConfortableCapacityValue: true,
      HasStretchCapacityValue: false,
      ConfortableCapacityValue: '08',
      StretchCapacityValue: '',
    });
    expect(getMealFormInputValues('none', 'other').HasConfortableCapacityValue).toBe(false);
    expect(normalizeMealCapacities({ ...LUNCH, ComfortableCapacity: '08', StretchCapacity: '0' })).toMatchObject({
      ComfortableCapacity: '8',
      StretchCapacity: '0',
    });
    expect(textToInteger('abc')).toBe(0);
  });
});

describe('ValidateInput (MI :1108-1116)', () => {
  it('returns the value without its non-digit characters, "" when it has only digits', () => {
    document.body.innerHTML = '<input id="cap" value="2b4"><input id="ok" value="24">';
    expect(validateNumericInput('cap')).toBe('24');
    expect(validateNumericInput('ok')).toBe('');
  });
});
