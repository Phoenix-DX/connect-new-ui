import type { AssembleAttendeeGuest, AssembleAttendeeSubdivision } from '@/api/event';
import type { SubdivisionInformation } from '@/api/locality';
import type { LegacyLocalBookmark } from '@/platform/storage/localEntities';
import { flipHouseholdName } from '@/lib/legacyShared/actions';
import type { UI_ShareableObject_Generic } from '@/lib/ubtConnectUtils/structures';

/** The variables of the block AssembleEventDetail_AttendeeSubdivision, the reducer and its client actions. Pure; the
    flows are in useAttendeeSubdivision.
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision */

/** Type_ShareObject.Household / Connect_Entity2.Household (static-entities-tst.json, Connect2_Assemble_MUI). */
export const SHARE_OBJECT_HOUSEHOLD = 'Household';
const CONNECT_ENTITY_HOUSEHOLD = 'Household';

/** The id of a skeleton row (the null identifier). */
export const SKELETON_ID = '0';

/** The variables of the block (not kept by the view cache). */
export interface AttendeeSubdivisionState {
  /** IsSelected: the hall's households show. */
  isSelected: boolean;
  /** SubdivisionHouseholdList of the local copy: the rows of the hall. */
  rows: AssembleAttendeeGuest[];
  /** CountryCode: from GetCacheableSubdivision_V2 ("" before). */
  countryCode: string;
  /** LocalityId: from GetCacheableSubdivision_V2 ("0" before). */
  localityId: string;
  /** IsShareOpen of the household ShareSheet. */
  isShareOpen: boolean;
  /** ShareableObjectId: the shared household ("" = none). */
  shareableObjectId: string;
  /** ShareableObject_Generic of the shared household. */
  shareable: UI_ShareableObject_Generic;
}

/** The assignments of the block. */
export type AttendeeSubdivisionAction =
  | { type: 'set'; patch: Partial<AttendeeSubdivisionState> }
  | { type: 'selectionToggled' }
  | { type: 'rowBookmarked'; index: number; isBookmarked: boolean }
  | { type: 'shareClosed' };

/** BuildSkeletonList: HouseholdCount rows with the null id appended to the hall's households. */
export function withSkeletonRows(s: AssembleAttendeeSubdivision): AssembleAttendeeGuest[] {
  const rows = [...s.SubdivisionHouseholdList];
  for (let i = 0; i < s.HouseholdCount; i++)
    rows.push({
      Id: SKELETON_ID,
      Name: '',
      FamilyNames: '',
      Location: '',
      IsBookmarked: false,
      IsDisabled: false,
      AvatarURL: { Bucket: '', Path: '', Type: '', SignedURL: '' },
    });
  return rows;
}

/** The variables after OnReady's first assignments: a new visit has the local copy with the skeleton rows; a view
    that the view cache restored has the hall's households of the input (collapsed in both cases). */
export const initialAttendeeSubdivisionState = (
  subdivision: AssembleAttendeeSubdivision,
  restored: boolean,
): AttendeeSubdivisionState => ({
  isSelected: false,
  rows: restored ? subdivision.SubdivisionHouseholdList : withSkeletonRows(subdivision),
  countryCode: '',
  localityId: '0',
  isShareOpen: false,
  shareableObjectId: '',
  shareable: {},
});

/** The households of GetCacheableSubdivision_V2 as the hall's rows: Id, Name, FamilyNames = Family, Location,
    IsBookmarked and AvatarURL = Photo340's Bucket, Path, Type and SignedURL (IsDisabled at its default, False). A
    missing record (undefined) has no households. */
export function householdRowsOf(info: SubdivisionInformation | undefined): AssembleAttendeeGuest[] {
  if (!info) return [];
  return info.HouseholdListResponse.List.map((h) => ({
    Id: h.Id,
    Name: h.Name,
    FamilyNames: h.Family,
    Location: h.Location,
    IsBookmarked: h.IsBookmarked,
    IsDisabled: false,
    AvatarURL: {
      Bucket: h.Photo340.Bucket,
      Path: h.Photo340.Path,
      Type: h.Photo340.Type,
      SignedURL: h.Photo340.SignedURL,
    },
  }));
}

/** CountryCode = Subdivision.Locality.Country.Code and LocalityId = Subdivision.Locality.Id ("" and "0" for a missing
    record). */
export const hallLocationOf = (
  info: SubdivisionInformation | undefined,
): Pick<AttendeeSubdivisionState, 'countryCode' | 'localityId'> => ({
  countryCode: info?.Subdivision.Locality.Country.Code ?? '',
  localityId: info?.Subdivision.Locality.Id ?? '0',
});

/** Set_SelectedAssembleAttendeeListBookmarks: each row's IsBookmarked = a legacy local bookmark has the row's id as
    ObjectId (ListIndexOf). */
export const withLocalBookmarks = (
  rows: readonly AssembleAttendeeGuest[],
  bookmarks: readonly Pick<LegacyLocalBookmark, 'ObjectId'>[],
): AssembleAttendeeGuest[] => rows.map((r) => ({ ...r, IsBookmarked: bookmarks.some((b) => b.ObjectId === r.Id) }));

/** ShareableObject_Generic of a household row: the household entity, the FlipHouseholdName title, the family names,
    the location and the avatar. */
export const householdShareable = (row: AssembleAttendeeGuest): UI_ShareableObject_Generic => ({
  ConnectEntityTypeId: CONNECT_ENTITY_HOUSEHOLD,
  Id: row.Id,
  SignedURL: row.AvatarURL.SignedURL,
  Title: flipHouseholdName(row.Name),
  Subtitle: row.FamilyNames,
  Location: row.Location,
});

/** The variables after an assignment. */
export function attendeeSubdivisionReducer(
  state: AttendeeSubdivisionState,
  action: AttendeeSubdivisionAction,
): AttendeeSubdivisionState {
  switch (action.type) {
    case 'set':
      return { ...state, ...action.patch };
    case 'selectionToggled':
      return { ...state, isSelected: !state.isSelected };
    case 'rowBookmarked':
      // The row's IsBookmarked = not IsItemBookmarked, whatever the toggle did (as compiled).
      return {
        ...state,
        rows: state.rows.map((r, i) => (i === action.index ? { ...r, IsBookmarked: action.isBookmarked } : r)),
      };
    case 'shareClosed':
      return { ...state, isShareOpen: false, shareableObjectId: '' };
  }
}
