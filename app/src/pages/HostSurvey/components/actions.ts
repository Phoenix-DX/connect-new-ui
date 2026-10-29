import type {
  LocalHelperRole,
  LocalHelperStatus,
  LocalLabelledRecord,
  LocalMealType,
  LocalVehicleOwner,
  LocalVehicleType,
} from '@/platform/storage/localEntities';

/* Client actions of Connect2_OrbitMobile_MUI that the HostSurvey blocks call, ported 1:1. `C:<n>` = line of
   migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js, `TF:<n>` = Connect2_OrbitMobile_MUI.TimeFormat.js. */

const EMPTY_RECORD: LocalLabelledRecord = { Id: 0, Label: '', JSON_Name: '', Order: 0 };

/** GetGenderPreferenceByJSON_Name(In_JSON_Name, In_GenderPreferences) → Out_GenderPreference (C:3611-3684): the first
    record whose JSON_Name equals In_JSON_Name, else the empty record. */
export const getGenderPreferenceByJSON_Name = (jsonName: string, list: readonly LocalLabelledRecord[]) =>
  list.find((r) => r.JSON_Name === jsonName) ?? EMPTY_RECORD;

/** GetHouseFloorByJSON_Name(In_JSON_Name, In_HouseFloor) → Out_HouseFloor (C:3948-4021): as above. */
export const getHouseFloorByJSON_Name = (jsonName: string, list: readonly LocalLabelledRecord[]) =>
  list.find((r) => r.JSON_Name === jsonName) ?? EMPTY_RECORD;

/** GetFormattedDate_Survey(In_DateTime) → Out_FormattedDateTime (C:2553-2644): "" for the null date; else the JS node
    CreateFormattedDate_Survey (C:2633-2644): UTC day + "/" + TimeFormat.getMonth (UTC month, 2 digits, TF:42-46) + "/"
    + UTC year (TF:90-92). The block passes a Date: as an OutSystems DateTime it is the local midnight of that day. */
export function getFormattedDate_Survey(dateValue: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateValue);
  if (!m) return ''; // "" = the null date (the mapper of api/event)
  const local = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  const month = local.getUTCMonth() + 1;
  return `${local.getUTCDate()}/${month < 10 ? `0${month}` : month}/${local.getUTCFullYear()}`;
}

const EMPTY_HELPER_ROLE: LocalHelperRole = { Id: 0, Label: '', Order: 0, JSON_Name: '', isReadOnly: false };
const EMPTY_HELPER_STATUS: LocalHelperStatus = { Id: 0, Label: '', JSON_Name: '' };

/** GetHelperRoleByJSON_Name(In_JSON_Name, In_HelperRoles) → Out_HelperRoles (C:3696-3782): the first role whose
    JSON_Name equals In_JSON_Name, else the empty record. */
export const getHelperRoleByJSON_Name = (jsonName: string, list: readonly LocalHelperRole[]): LocalHelperRole =>
  list.find((r) => r.JSON_Name === jsonName) ?? EMPTY_HELPER_ROLE;

/** GetHelperStatusByJSON_Name(In_JSON_Name, In_HelperStatus) → Out_HelperStatus (C:3783-3860): the first status whose
    JSON_Name equals In_JSON_Name, else the empty record. */
export const getHelperStatusByJSON_Name = (jsonName: string, list: readonly LocalHelperStatus[]): LocalHelperStatus =>
  list.find((s) => s.JSON_Name === jsonName) ?? EMPTY_HELPER_STATUS;

/** CreateValidationMessage(InputName, IsPlural) → ValidationMessage (C:1236-1290): "<InputName> is required." (" are "
    when IsPlural), or "This field is required." for an empty InputName. */
export const createValidationMessage = (inputName: string, isPlural: boolean): string =>
  inputName !== '' ? `${inputName}${isPlural ? ' are ' : ' is '}required.` : 'This field is required.';

/** BlurInput(In_InputId) (C:601-648), JavaScript node BlurElementJS: document.getElementById(In_InputId).blur(). The
    original throws on an unknown id; here an unknown id does nothing. */
export function blurInput(inputId: string): void {
  document.getElementById(inputId)?.blur();
}

const EMPTY_MEAL_TYPE: LocalMealType = { Id: 0, Label: '', JSON_Name: '' };
const EMPTY_VEHICLE_RECORD = { Id: '0', Label: '', JSON_Name: '', Order: 0 } as const;

/** GetMealTypeByJSON_Name(In_JSON_Name, In_MealTypes) → Out_MealType (C:4171): the first meal type whose JSON_Name
    equals In_JSON_Name, else the empty record. */
export const getMealTypeByJSON_Name = (jsonName: string, list: readonly LocalMealType[]): LocalMealType =>
  list.find((r) => r.JSON_Name === jsonName) ?? EMPTY_MEAL_TYPE;

/** GetVehicleOwnerByJSON_Name(In_JSON_Name, In_VehicleOwners) → Out_VehicleOwner (C:4848): as above. */
export const getVehicleOwnerByJSON_Name = (jsonName: string, list: readonly LocalVehicleOwner[]): LocalVehicleOwner =>
  list.find((r) => r.JSON_Name === jsonName) ?? EMPTY_VEHICLE_RECORD;

/** GetVehicleTypeByJSON_Name(In_JSON_Name, In_VehicleTypes) → Out_VehicleType (C:4935): as above. */
export const getVehicleTypeByJSON_Name = (jsonName: string, list: readonly LocalVehicleType[]): LocalVehicleType =>
  list.find((r) => r.JSON_Name === jsonName) ?? EMPTY_VEHICLE_RECORD;
