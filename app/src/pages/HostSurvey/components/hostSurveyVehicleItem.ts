import type { HostSurveyVehicle } from '@/api/event';
import { createValidationMessage } from './actions';
import type { WidgetValidityWrite } from './hostSurveyMealItem';

/* The flows of HostSurvey_VehicleItem as pure functions, and its JavaScript node SetCorrectBoundaries.
   VI = Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc.js (TST compiled file, survey source lines). */

/** The widget names of the block (the instance ids are `<scope>-<name>`). */
export const VEHICLE_WIDGETS = {
  ownerType: 'Dropdown_OwnerType',
  vehicleType: 'Dropdown_VehicleType',
  makeModel: 'Input_MakeModel',
  vehicleNumber: 'Input_VehicleNumber',
  totalSeats: 'Input_TotalSeats',
} as const;

/** The null Long Integer (IntegerToLongInteger(NullIdentifier())) as it travels. */
const NULL_LONG = '0';

/** What OnParametersChanged does next. */
type VehicleParametersChangedStep = { kind: 'none' } | { kind: 'validate' } | { kind: 'copy' };

/** OnParametersChanged (VI :748-823): a confirmed survey does nothing. TrySave: an item in edit validates its form.
    Otherwise the parent's record replaces the local copy, except when both or neither are in edit. */
export function vehicleParametersChanged(p: {
  isSurveyConfirmed: boolean;
  trySave: boolean;
  inVehicle: HostSurveyVehicle;
  edit: HostSurveyVehicle;
}): VehicleParametersChangedStep {
  if (p.isSurveyConfirmed) return { kind: 'none' };
  if (p.trySave) return p.edit.IsEdit ? { kind: 'validate' } : { kind: 'none' };
  if (p.inVehicle.IsEdit === p.edit.IsEdit) return { kind: 'none' };
  return { kind: 'copy' };
}

/** OnChange_Inputs(InputId) (VI :887-961). The owner and vehicle types are valid when not "", else "<label> is
    required.". Total seats is valid when not null; TST writes the message the other way round (a set value gets
    "Total seats are required.", a null value ""), so the message never shows: kept as TST. */
export function vehicleOnChangeWrite(widget: string, edit: HostSurveyVehicle): WidgetValidityWrite | null {
  switch (widget) {
    case VEHICLE_WIDGETS.ownerType: {
      const set = edit.OwnerType !== '';
      return { widget, valid: set, message: set ? '' : createValidationMessage('Owner type', false) };
    }
    case VEHICLE_WIDGETS.vehicleType: {
      const set = edit.VehicleType !== '';
      return { widget, valid: set, message: set ? '' : createValidationMessage('Vehicle type', false) };
    }
    case VEHICLE_WIDGETS.totalSeats: {
      const set = edit.TotalSeats !== NULL_LONG;
      return { widget, valid: set, message: set ? createValidationMessage('Total seats', true) : '' };
    }
    default:
      return null;
  }
}

/** VehicleForm_Validate (VI :962-1060): an empty owner type, vehicle type or a null total seats is not valid
    ("<label> is required."); HasInvalidInputs then raises Save_Failed, else Save_Successful(Edit_HostSurvey_Vehicle). */
export function vehicleFormValidationWrites(edit: HostSurveyVehicle): WidgetValidityWrite[] {
  const writes: WidgetValidityWrite[] = [];
  if (edit.OwnerType === '') {
    writes.push({
      widget: VEHICLE_WIDGETS.ownerType,
      valid: false,
      message: createValidationMessage('Owner type', false),
    });
  }
  if (edit.VehicleType === '') {
    writes.push({
      widget: VEHICLE_WIDGETS.vehicleType,
      valid: false,
      message: createValidationMessage('Vehicle type', false),
    });
  }
  if (edit.TotalSeats === NULL_LONG) {
    writes.push({
      widget: VEHICLE_WIDGETS.totalSeats,
      valid: false,
      message: createValidationMessage('Total seats', false),
    });
  }
  return writes;
}

/** MaxChars of OnKeyup_Inputs (VI :1122-1172): 150 for the model, 10 for the vehicle number, 2 for the seats; another
    input ends the flow (null). */
export function vehicleInputMaxChars(widget: string): number | null {
  if (widget === VEHICLE_WIDGETS.makeModel) return 150;
  if (widget === VEHICLE_WIDGETS.vehicleNumber) return 10;
  if (widget === VEHICLE_WIDGETS.totalSeats) return 2;
  return null;
}

/** JavaScript node SetCorrectBoundaries (VI :1317-1325): the input keeps its first MaxChars characters. */
export function setCorrectBoundaries(inputId: string, maxChars: number): void {
  const input = document.getElementById(inputId) as HTMLInputElement | null;
  if (input) input.value = input.value.slice(0, maxChars);
}

/** TextToLongInteger of the corrected seats text (OnKeyup_NumericInput, VI :1061-1121), as it travels: "0" for "". */
export const textToLongInteger = (text: string): string =>
  /^\d+$/.test(text) ? String(parseInt(text, 10)) : NULL_LONG;
