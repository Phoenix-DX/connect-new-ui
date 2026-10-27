import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { HostSurveyMeal } from '@/api/event';
import type { StepProperties } from '@/pages/HostSurvey/hooks/hostSurveyState';
import { HostSurvey_MealItem, type HostSurvey_MealItemProps } from './HostSurvey_MealItem';

/* HostSurvey_MealItem (TST Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc.js, MI): the pills of a saved
   meal, the edit form, the TrySave validation and the OnParametersChanged copy. Fictional supper of a household in
   Mar del Plata. */

const ID = 'b2-l2-0_0-$b12';
const SCOPE = 'b2-l2-0_0-b12';
const MEAL_TYPES = [
  { Id: 1, Label: 'Midday Meal', JSON_Name: 'MIDDAY' },
  { Id: 2, Label: 'Evening Meal', JSON_Name: 'EVENING' },
];
const SUPPER: HostSurveyMeal = {
  Id: '90412',
  Name: 'EVENING',
  MilestoneDescription: 'Saturday Supper Gathering',
  EventDate: '2026-11-14',
  SequenceNo: '2',
  IsPreferred: false,
  ComfortableCapacity: '14',
  StretchCapacity: '18',
  IsEdit: false,
  ResetMealData: false,
};
const STEP: StepProperties = { IsEdit: false, TrySave: false, HasData: true };

function setup(overrides: Partial<HostSurvey_MealItemProps> = {}) {
  const events = {
    onClickEdit: vi.fn(),
    onMealDataReset: vi.fn(),
    onSaveFailed: vi.fn(),
    onSaveSuccessful: vi.fn(),
  };
  const props: HostSurvey_MealItemProps = {
    id: ID,
    inMealTypes: MEAL_TYPES,
    inStepProperties: STEP,
    inHostSurvey_Meal: SUPPER,
    inIsSurveyConfirmed: false,
    ...events,
    ...overrides,
  };
  const view = render(<HostSurvey_MealItem {...props} />);
  const rerender = (next: Partial<HostSurvey_MealItemProps>) => {
    view.rerender(<HostSurvey_MealItem {...props} {...next} />);
  };
  return { ...view, events, rerender };
}

const input = (name: string) => document.getElementById(`${SCOPE}-${name}`) as HTMLInputElement;

describe('HostSurvey_MealItem view (MI :172-553)', () => {
  it('shows the saved meal as pills under its title, with Edit while the step is not in edit', () => {
    const { container, events } = setup();
    expect(container.querySelector('.orbit-host-survey-meal-item')).not.toBeNull();
    expect(screen.getByText('Saturday Supper Gathering')).toBeTruthy();
    expect(screen.getByText('CP 14, SCP 18')).toBeTruthy();
    expect(container.querySelector(`#${CSS.escape(`${SCOPE}-$b2`)}`)?.getAttribute('data-block')).toBe(
      'Orbit_Blocks.HostSurvey_MealPills',
    );
    expect(screen.queryByText('Delete')).toBeNull();
    fireEvent.click(screen.getByText('Edit'));
    expect(events.onClickEdit).toHaveBeenCalledTimes(1);
  });

  it('hides Edit on a confirmed survey and while the step is in edit', () => {
    setup({ inIsSurveyConfirmed: true });
    expect(screen.queryByText('Edit')).toBeNull();
  });

  it('shows the day, the preference checkbox and the two mandatory capacity inputs in edit', () => {
    const { container } = setup({
      inHostSurvey_Meal: { ...SUPPER, IsEdit: true },
      inStepProperties: { ...STEP, IsEdit: true },
    });
    expect(screen.queryByText('Edit')).toBeNull();
    expect(container.querySelector('.orbit-icon-meeting')).not.toBeNull();
    expect(screen.getByText('Evening Meal (Preferred Meal)').className).toBe(
      'font-size-s margin-left-s ThemeGrid_MarginGutter',
    );
    const checkbox = input('Checkbox_HostPreference');
    expect(checkbox.className).toBe('checkbox');
    expect(checkbox.checked).toBe(false);
    const comfortable = input('Input_ConfortableCapacity');
    expect(comfortable.className).toBe('form-control OSFillParent');
    expect(comfortable.getAttribute('maxlength')).toBe('4');
    expect(comfortable.getAttribute('inputmode')).toBe('numeric');
    expect(comfortable.value).toBe('14');
    expect(screen.getByText('Comfortable Capacity').className).toBe('mandatory OSFillParent');
    expect(screen.getByText('Stretch Capacity').getAttribute('for')).toBe(`${SCOPE}-Input_StretchCapacity`);
  });

  it('disables the form of a confirmed survey', () => {
    setup({ inHostSurvey_Meal: { ...SUPPER, IsEdit: true }, inIsSurveyConfirmed: true });
    expect(input('Input_StretchCapacity').disabled).toBe(true);
    expect(input('Checkbox_HostPreference').disabled).toBe(true);
  });
});

describe('HostSurvey_MealItem flows (MI :572-1107)', () => {
  const editing = { inHostSurvey_Meal: { ...SUPPER, IsEdit: true }, inStepProperties: { ...STEP, IsEdit: true } };

  it('OnChange_Inputs: an emptied capacity is "Comfortable Capacity is required." (not-valid)', () => {
    setup(editing);
    fireEvent.change(input('Input_ConfortableCapacity'), { target: { value: '' } });
    expect(input('Input_ConfortableCapacity').className).toBe('form-control OSFillParent not-valid');
    expect(screen.getByText('Comfortable Capacity is required.')).toBeTruthy();
    fireEvent.change(input('Input_ConfortableCapacity'), { target: { value: '9' } });
    expect(input('Input_ConfortableCapacity').className).toBe('form-control OSFillParent');
  });

  it('MealForm_Validate on TrySave: a stretch below the comfortable capacity fails the save', () => {
    const { events, rerender } = setup(editing);
    fireEvent.change(input('Input_StretchCapacity'), { target: { value: '8' } });
    rerender({ ...editing, inStepProperties: { IsEdit: true, TrySave: true, HasData: true } });
    expect(events.onSaveFailed).toHaveBeenCalledTimes(1);
    expect(events.onSaveSuccessful).not.toHaveBeenCalled();
    expect(screen.getByText('Stretch Capacity must be greater than Confortable Capacity')).toBeTruthy();
  });

  it('MealForm_Validate on TrySave: valid capacities lose their leading zeros and are saved', () => {
    const { events, rerender } = setup(editing);
    fireEvent.click(input('Checkbox_HostPreference'));
    fireEvent.change(input('Input_ConfortableCapacity'), { target: { value: '07' } });
    fireEvent.change(input('Input_StretchCapacity'), { target: { value: '012' } });
    rerender({ ...editing, inStepProperties: { IsEdit: true, TrySave: true, HasData: true } });
    expect(events.onSaveFailed).not.toHaveBeenCalled();
    expect(events.onSaveSuccessful).toHaveBeenCalledWith({
      ...SUPPER,
      IsEdit: true,
      IsPreferred: true,
      ComfortableCapacity: '7',
      StretchCapacity: '12',
    });
  });

  it('OnParametersChanged: the saved record of the parent replaces the local copy (pills again)', () => {
    const { rerender } = setup(editing);
    fireEvent.change(input('Input_ConfortableCapacity'), { target: { value: '20' } });
    rerender({ inHostSurvey_Meal: { ...SUPPER, ComfortableCapacity: '16' }, inStepProperties: STEP });
    expect(input('Input_ConfortableCapacity')).toBeNull();
    expect(screen.getByText('CP 16, SCP 18')).toBeTruthy();
  });

  it('OnParametersChanged: ResetMealData restores the parent record and raises MealDataReset', () => {
    const { events, rerender } = setup(editing);
    fireEvent.change(input('Input_StretchCapacity'), { target: { value: '30' } });
    rerender({ ...editing, inHostSurvey_Meal: { ...SUPPER, IsEdit: true, ResetMealData: true } });
    expect(events.onMealDataReset).toHaveBeenCalledTimes(1);
    expect(input('Input_StretchCapacity').value).toBe('18');
  });

  it('OnParametersChanged: both in edit and no reset keeps the typed values; a confirmed survey does nothing', () => {
    const { events, rerender } = setup(editing);
    fireEvent.change(input('Input_StretchCapacity'), { target: { value: '25' } });
    rerender({
      ...editing,
      inMealTypes: [...MEAL_TYPES],
      inHostSurvey_Meal: { ...SUPPER, IsEdit: true, SequenceNo: '3' },
    });
    expect(input('Input_StretchCapacity').value).toBe('25');
    rerender({
      ...editing,
      inIsSurveyConfirmed: true,
      inStepProperties: { IsEdit: true, TrySave: true, HasData: true },
    });
    expect(events.onSaveSuccessful).not.toHaveBeenCalled();
    expect(events.onSaveFailed).not.toHaveBeenCalled();
  });

  it('OnKeyup_CapacityInputs: letters are removed from the capacity', () => {
    setup(editing);
    fireEvent.change(input('Input_ConfortableCapacity'), { target: { value: '1a2' } });
    fireEvent.keyUp(input('Input_ConfortableCapacity'));
    expect(input('Input_ConfortableCapacity').value).toBe('12');
  });
});
