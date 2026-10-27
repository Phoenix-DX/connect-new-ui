import type { HostSurveyRoom } from '@/api/event';
import type { LocalBedSize, LocalGenderPreference } from '@/platform/storage/localEntities';
import { getGenderPreferenceByJSON_Name } from './actions';

/* The pure client actions of HostSurvey_AccommodationItem (AI = Connect2_OrbitMobile_MUI.Orbit_Blocks.
   HostSurvey_AccommodationItem.mvc.js, TST compiled code). They work on the block variables Edit_HostSurvey_Room,
   NumberOfBeds and Edit_BedSizes, as the original actions assign them. */

/** Static entity GenderPreference of Connect2_OrbitMobile_MUI (static-entities-tst.json). */
const GenderPreference = { either: 1, couples: 2, male: 3, female: 4 } as const;
/** Static entity BedSize of Connect2_OrbitMobile_MUI (Long Integer Ids as text, static-entities-tst.json). */
const BedSize = { doubleQueen: '1', doubleKing: '2', single: '3', singleKing: '4', double: '5' } as const;

/** The block variables that the flows change. */
export interface AccommodationEdit {
  /** Edit_HostSurvey_Room: the copy of In_HostSurvey_Room the form edits. */
  room: HostSurveyRoom;
  /** NumberOfBeds (Long Integer List as text): the options of Dropdown_BedsNumber. */
  numberOfBeds: string[];
  /** Edit_BedSizes: the options of every Dropdown_BedSize. */
  editBedSizes: LocalBedSize[];
}

/** OnInitialize (AI :2358): Edit_HostSurvey_Room = In_HostSurvey_Room, the lists empty (the model defaults). */
export const initialAccommodationEdit = (room: HostSurveyRoom): AccommodationEdit => ({
  room,
  numberOfBeds: [],
  editBedSizes: [],
});

const isCouples = (room: HostSurveyRoom, genderPreferences: readonly LocalGenderPreference[]) =>
  getGenderPreferenceByJSON_Name(room.GenderPreference, genderPreferences).Id === GenderPreference.couples;

/** NumberOfBeds as a Long Integer ("0" or "" = the null identifier). */
const bedCount = (room: HostSurveyRoom): number => Number(room.NumberOfBeds || '0');

/** FilterBedSizes: a couples room with one bed offers the doubles (Double, Double Queen, Double King), with two or more
    beds the singles (Single, Single King); any other room offers every bed size of In_BedSize. */
export function filterBedSizes(
  s: AccommodationEdit,
  bedSizes: readonly LocalBedSize[],
  genderPreferences: readonly LocalGenderPreference[],
): AccommodationEdit {
  if (isCouples(s.room, genderPreferences)) {
    const beds = bedCount(s.room);
    if (beds === 1) {
      const doubles: readonly string[] = [BedSize.double, BedSize.doubleQueen, BedSize.doubleKing];
      return { ...s, editBedSizes: bedSizes.filter((b) => doubles.includes(b.Id)) };
    }
    if (beds >= 2) {
      return { ...s, editBedSizes: bedSizes.filter((b) => b.Id === BedSize.single || b.Id === BedSize.singleKing) };
    }
  }
  return { ...s, editBedSizes: [...bedSizes] };
}

/** CleanSelectedBeds: a chosen bed that Edit_BedSizes no longer offers becomes "". */
function cleanSelectedBeds(s: AccommodationEdit): AccommodationEdit {
  const beds = s.room.Beds.map((bed) => (s.editBedSizes.some((b) => b.JSON_Name === bed) ? bed : ''));
  return { ...s, room: { ...s.room, Beds: beds } };
}

/** PopulateNoOfBeds: MaxLength is 2 for a couples room, else 10. The options grow from the next number up to
    MaxLength; when they are longer, the chosen beds keep their first MaxLength rows (GetMaxElements JS: slice),
    the options keep the numbers up to MaxLength, NumberOfBeds = the number of beds, then CleanSelectedBeds. */
export function populateNoOfBeds(
  s: AccommodationEdit,
  genderPreferences: readonly LocalGenderPreference[],
): AccommodationEdit {
  const maxLength = isCouples(s.room, genderPreferences) ? 2 : 10;
  let bedNo = 1;
  if (s.numberOfBeds.length > 0) {
    if (s.numberOfBeds.length === maxLength) return s;
    if (s.numberOfBeds.length < maxLength) {
      bedNo = s.numberOfBeds.length + 1;
    } else {
      const beds = s.room.Beds.length > 0 ? s.room.Beds.slice(0, maxLength) : s.room.Beds;
      const next: AccommodationEdit = {
        ...s,
        numberOfBeds: s.numberOfBeds.filter((n) => Number(n) <= maxLength),
        room: { ...s.room, Beds: beds, NumberOfBeds: String(beds.length) },
      };
      return beds.length > 0 ? cleanSelectedBeds(next) : next;
    }
  }
  const numberOfBeds = [...s.numberOfBeds];
  while (numberOfBeds.length < maxLength) {
    numberOfBeds.push(String(bedNo));
    bedNo += 1;
  }
  return { ...s, numberOfBeds };
}

/** The bed list part of OnChange_NoOfBeds (after FilterBedSizes): a chosen number adds empty beds or removes the
    last ones until the list has that length, then CleanSelectedBeds; the same length ends the flow; the empty value
    clears the beds. */
export function resizeBeds(s: AccommodationEdit): AccommodationEdit {
  const wanted = bedCount(s.room);
  if (wanted === 0) return { ...s, room: { ...s.room, Beds: [] } };
  const beds = [...s.room.Beds];
  if (wanted === beds.length) return s;
  const delta = Math.abs(wanted - beds.length);
  const grow = wanted > beds.length;
  for (let currentPosition = 1; currentPosition <= delta; currentPosition += 1) {
    if (grow) beds.push('');
    else beds.splice(beds.length - 1, 1);
  }
  return cleanSelectedBeds({ ...s, room: { ...s.room, Beds: beds } });
}

/** InitializeVars: a room in edit whose options are not built yet gets FilterBedSizes and PopulateNoOfBeds. */
export function initializeVars(
  s: AccommodationEdit,
  bedSizes: readonly LocalBedSize[],
  genderPreferences: readonly LocalGenderPreference[],
): AccommodationEdit {
  if (!s.room.IsEdit || s.numberOfBeds.length > 0) return s;
  return populateNoOfBeds(filterBedSizes(s, bedSizes, genderPreferences), genderPreferences);
}

/** ValidateBedSizeInputs with CheckEitherValidation False (ValidateAllBedInputs JS): a bed dropdown is invalid when it
    shows the empty value "Select bed type", that is when Edit_BedSizes does not offer its value. */
export const invalidBeds = (s: AccommodationEdit): boolean[] =>
  s.room.Beds.map((bed) => !s.editBedSizes.some((b) => b.JSON_Name === bed));

/** ListIndexOf_SameName of AccommodationForm_Validate: the row of In_RoomNames whose trimmed lower-case text equals
    the room name's, or -1. */
export const sameRoomNameIndex = (roomNames: readonly string[], name: string): number =>
  roomNames.findIndex((n) => n.trim().toLowerCase() === name.trim().toLowerCase());

/** OnParametersChanged (AI :2276-2357): what the block does with new inputs. A confirmed survey does nothing. With
    TrySave, a room in edit validates. Else a room the parent put in edit is copied (once) and initialised; a room the
    parent took out of edit replaces the edited copy. */
type ParametersChangedStep = 'none' | 'validate' | 'startEdit' | 'reset';
export function onParametersChangedStep(
  isSurveyConfirmed: boolean,
  trySave: boolean,
  inRoomIsEdit: boolean,
  editRoomIsEdit: boolean,
): ParametersChangedStep {
  if (isSurveyConfirmed) return 'none';
  if (trySave) return editRoomIsEdit ? 'validate' : 'none';
  if (inRoomIsEdit) return editRoomIsEdit ? 'none' : 'startEdit';
  return editRoomIsEdit ? 'reset' : 'none';
}
