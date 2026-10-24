import { describe, expect, it } from 'vitest';
import type { AssembleAttendeeGuest, AssembleAttendeeSubdivision } from '@/api/event';
import type { SubdivisionInformation } from '@/api/locality';
import {
  attendeeSubdivisionReducer,
  hallLocationOf,
  householdRowsOf,
  householdShareable,
  initialAttendeeSubdivisionState,
  SKELETON_ID,
  withLocalBookmarks,
  withSkeletonRows,
} from './attendeeSubdivisionState';

/* AssembleEventDetail_AttendeeSubdivision: the variables and the client actions. Fictional hall and households. */
const guest = (id: string, name: string, isBookmarked = false): AssembleAttendeeGuest => ({
  Id: id,
  Name: name,
  FamilyNames: 'Molina',
  Location: 'Bahia Blanca, Argentina',
  IsBookmarked: isBookmarked,
  IsDisabled: false,
  AvatarURL: { Bucket: 'b', Path: `p/${id}.jpg`, Type: 'Photo', SignedURL: `https://example.com/${id}.jpg` },
});
const hall = (households: AssembleAttendeeGuest[] = [], count = 2): AssembleAttendeeSubdivision => ({
  Id: '1210',
  Name: 'Zapiola (Main Meeting Room)',
  HouseholdCount: count,
  LocalityId: '252',
  SubdivisionHouseholdList: households,
});
const info: SubdivisionInformation = {
  HouseholdListResponse: {
    List: [
      {
        Id: '91004',
        Name: 'Molina, Juan & Rosa',
        Family: 'Molina',
        Location: 'Bahia Blanca, Argentina',
        IsBookmarked: true,
        Photo340: { Bucket: 'b', Path: 'p/91004.jpg', Type: 'Photo', SignedURL: 'https://example.com/91004.jpg' },
      },
    ],
  },
  Subdivision: { Locality: { Id: '252', Country: { Code: 'AR' } } },
};

describe('attendeeSubdivisionState', () => {
  it('BuildSkeletonList appends HouseholdCount skeleton rows to the hall households', () => {
    const rows = withSkeletonRows(hall([guest('91001', 'Vitale')], 2));
    expect(rows.map((r) => r.Id)).toEqual(['91001', SKELETON_ID, SKELETON_ID]);
    expect(rows[1]).toMatchObject({ Name: '', IsBookmarked: false, IsDisabled: false });
  });

  it('a new visit starts collapsed with the skeleton rows; a restored view with the hall households', () => {
    const h = hall([guest('91001', 'Vitale')], 1);
    expect(initialAttendeeSubdivisionState(h, false)).toEqual({
      isSelected: false,
      rows: withSkeletonRows(h),
      countryCode: '',
      localityId: '0',
      isShareOpen: false,
      shareableObjectId: '',
      shareable: {},
    });
    expect(initialAttendeeSubdivisionState(h, true).rows).toBe(h.SubdivisionHouseholdList);
  });

  it('GetCacheableSubdivision_V2: the households as rows (Photo340 as avatar) and the hall locality', () => {
    expect(householdRowsOf(info)).toEqual([
      {
        Id: '91004',
        Name: 'Molina, Juan & Rosa',
        FamilyNames: 'Molina',
        Location: 'Bahia Blanca, Argentina',
        IsBookmarked: true,
        IsDisabled: false,
        AvatarURL: { Bucket: 'b', Path: 'p/91004.jpg', Type: 'Photo', SignedURL: 'https://example.com/91004.jpg' },
      },
    ]);
    expect(hallLocationOf(info)).toEqual({ countryCode: 'AR', localityId: '252' });
  });

  it('a missing record has no households, CountryCode "" and LocalityId "0"', () => {
    expect(householdRowsOf(undefined)).toEqual([]);
    expect(hallLocationOf(undefined)).toEqual({ countryCode: '', localityId: '0' });
  });

  it('Set_SelectedAssembleAttendeeListBookmarks: IsBookmarked = a local bookmark has the row id', () => {
    const rows = [guest('91004', 'Molina', false), guest('91005', 'Vitale', true)];
    expect(withLocalBookmarks(rows, [{ ObjectId: '91004' }]).map((r) => r.IsBookmarked)).toEqual([true, false]);
  });

  it('the share object of a household: entity, flipped name, family names, location and avatar', () => {
    expect(householdShareable(guest('91004', 'Molina, Juan & Rosa'))).toMatchObject({
      ConnectEntityTypeId: 'Household',
      Id: '91004',
      SignedURL: 'https://example.com/91004.jpg',
      Subtitle: 'Molina',
      Location: 'Bahia Blanca, Argentina',
    });
  });

  it('the reducer: assignments, the header toggle, a row bookmark and the share sheet close', () => {
    const start = initialAttendeeSubdivisionState(hall([guest('91004', 'Molina'), guest('91005', 'Vitale')], 0), false);
    const toggled = attendeeSubdivisionReducer(start, { type: 'selectionToggled' });
    expect(toggled.isSelected).toBe(true);
    expect(attendeeSubdivisionReducer(toggled, { type: 'selectionToggled' }).isSelected).toBe(false);
    const marked = attendeeSubdivisionReducer(start, { type: 'rowBookmarked', index: 1, isBookmarked: true });
    expect(marked.rows.map((r) => r.IsBookmarked)).toEqual([false, true]);
    const open = attendeeSubdivisionReducer(start, {
      type: 'set',
      patch: { isShareOpen: true, shareableObjectId: '91004' },
    });
    expect(attendeeSubdivisionReducer(open, { type: 'shareClosed' })).toMatchObject({
      isShareOpen: false,
      shareableObjectId: '',
    });
  });
});
