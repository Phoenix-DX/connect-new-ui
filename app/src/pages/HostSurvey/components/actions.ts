import type { LocalLabelledRecord } from '@/platform/storage/localEntities';

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
