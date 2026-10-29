import type { HostSurveyMeal } from '@/api/event';
import { createValidationMessage } from './actions';

/* The flows of HostSurvey_MealItem as pure functions, and the JavaScript nodes of the block (the same ValidateInput and
   ScrollIntoView nodes are in HostSurvey_VehicleItem). MI = Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc.js,
   VI = …HostSurvey_VehicleItem.mvc.js (TST compiled files, line numbers of the survey source). */

/** The widget names of the block (the instance ids are `<scope>-<name>`). */
export const MEAL_WIDGETS = {
  preference: 'Checkbox_HostPreference',
  comfortable: 'Input_ConfortableCapacity',
  stretch: 'Input_StretchCapacity',
} as const;

/** `<Widget>.Valid` and `<Widget>.ValidationMessage` assigned by a flow. */
export interface WidgetValidityWrite {
  widget: string;
  valid: boolean;
  message: string;
}

/** What OnParametersChanged does next. */
type MealParametersChangedStep =
  | { kind: 'none' }
  /** TrySave and the item in edit: MealForm_Validate. */
  | { kind: 'validate' }
  /** Edit_HostSurvey_Meal = In_HostSurvey_Meal; MealDataReset when In_HostSurvey_Meal.ResetMealData. */
  | { kind: 'copy'; mealDataReset: boolean };

/** OnParametersChanged (MI :572-663): a confirmed survey does nothing. TrySave: an item in edit validates its form.
    Otherwise the parent's record replaces the local copy, except when both are in edit (and no reset is asked) or
    neither is in edit; a reset raises MealDataReset. */
export function mealParametersChanged(p: {
  isSurveyConfirmed: boolean;
  trySave: boolean;
  inMeal: HostSurveyMeal;
  edit: HostSurveyMeal;
}): MealParametersChangedStep {
  if (p.isSurveyConfirmed) return { kind: 'none' };
  if (p.trySave) return p.edit.IsEdit ? { kind: 'validate' } : { kind: 'none' };
  if (p.inMeal.IsEdit) {
    if (p.edit.IsEdit && !p.inMeal.ResetMealData) return { kind: 'none' };
  } else if (!p.edit.IsEdit) {
    return { kind: 'none' };
  }
  return { kind: 'copy', mealDataReset: p.inMeal.ResetMealData };
}

/** OnChange_Inputs(InputId) (MI :734-794): the changed capacity input is valid when it is not "", else
    "<label> is required.". Another input changes nothing. */
export function mealOnChangeWrite(widget: string, edit: HostSurveyMeal): WidgetValidityWrite | null {
  if (widget === MEAL_WIDGETS.comfortable) {
    const empty = edit.ComfortableCapacity === '';
    return {
      widget,
      valid: !empty,
      message: empty ? createValidationMessage('Comfortable Capacity', false) : '',
    };
  }
  if (widget === MEAL_WIDGETS.stretch) {
    const empty = edit.StretchCapacity === '';
    return { widget, valid: !empty, message: empty ? createValidationMessage('Stretch Capacity', false) : '' };
  }
  return null;
}

/** The outputs of the JavaScript node GetInputValues of MealForm_Validate. */
interface MealFormInputValues {
  HasConfortableCapacityValue: boolean;
  HasStretchCapacityValue: boolean;
  ConfortableCapacityValue: string;
  StretchCapacityValue: string;
}

/** GetInputValues (MI :1117-1130): the values of the two capacity inputs as the page shows them (an absent input keeps
    the defaults False and ""). */
export function getMealFormInputValues(comfortableInputId: string, stretchInputId: string): MealFormInputValues {
  const values: MealFormInputValues = {
    HasConfortableCapacityValue: false,
    HasStretchCapacityValue: false,
    ConfortableCapacityValue: '',
    StretchCapacityValue: '',
  };
  const minCap = document.getElementById(comfortableInputId) as HTMLInputElement | null;
  const maxCap = document.getElementById(stretchInputId) as HTMLInputElement | null;
  if (minCap) {
    values.HasConfortableCapacityValue = minCap.value !== '';
    values.ConfortableCapacityValue = minCap.value;
  }
  if (maxCap) {
    values.HasStretchCapacityValue = maxCap.value !== '';
    values.StretchCapacityValue = maxCap.value;
  }
  return values;
}

/** TextToInteger: the integer of the text, 0 when the text is not an integer. */
export const textToInteger = (text: string): number => (/^\s*[+-]?\d+\s*$/.test(text) ? parseInt(text, 10) : 0);

/** The validity writes of MealForm_Validate (MI :820-964): an empty capacity is "<label> is required."; a stretch
    capacity below the comfortable one is "Stretch Capacity must be greater than Confortable Capacity" (TST text). The
    flow writes only invalid states: a valid input keeps the record of its last OnChange_Inputs. */
export function mealFormValidationWrites(values: MealFormInputValues): WidgetValidityWrite[] {
  const writes: WidgetValidityWrite[] = [];
  if (!values.HasConfortableCapacityValue) {
    writes.push({
      widget: MEAL_WIDGETS.comfortable,
      valid: false,
      message: createValidationMessage('Comfortable Capacity', false),
    });
  }
  if (!values.HasStretchCapacityValue) {
    writes.push({
      widget: MEAL_WIDGETS.stretch,
      valid: false,
      message: createValidationMessage('Stretch Capacity', false),
    });
  }
  if (textToInteger(values.StretchCapacityValue) < textToInteger(values.ConfortableCapacityValue)) {
    writes.push({
      widget: MEAL_WIDGETS.stretch,
      valid: false,
      message: 'Stretch Capacity must be greater than Confortable Capacity',
    });
  }
  return writes;
}

/** The valid branch of MealForm_Validate (MI :820-964): a capacity of more than one character becomes
    IntegerToText(TextToInteger(…)) (no leading zeros), then Save_Successful(Edit_HostSurvey_Meal). */
export function normalizeMealCapacities(edit: HostSurveyMeal): HostSurveyMeal {
  const normal = (text: string) => (text.length > 1 ? String(textToInteger(text)) : text);
  return {
    ...edit,
    StretchCapacity: normal(edit.StretchCapacity),
    ComfortableCapacity: normal(edit.ComfortableCapacity),
  };
}

/** JavaScript node ValidateInput of OnKeyup_CapacityInputs (MI :1108-1116) and of OnKeyup_NumericInput
    (VI :1308-1316): when the input's value is not only digits, CorrectedValue = the value without the other characters
    and the input shows it at the next animation frame. CorrectedValue is "" when the value was already digits. */
export function validateNumericInput(inputId: string): string {
  const el = document.getElementById(inputId) as HTMLInputElement | null;
  if (!el) return '';
  if (/^[0-9]+$/.test(el.value)) return '';
  const corrected = el.value.replace(/[^0-9]/g, '');
  window.requestAnimationFrame(() => {
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    if (input) input.value = corrected;
  });
  return corrected;
}

/** JavaScript node ScrollIntoView of OnFocus_Inputs (MI :1131-1136, VI :1303-1307): the focused input scrolls to the
    centre of the view. */
export function scrollInputIntoView(inputId: string): void {
  document.getElementById(inputId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
