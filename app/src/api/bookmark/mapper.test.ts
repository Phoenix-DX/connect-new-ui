import { describe, expect, it } from 'vitest';
import {
  toAssembleBookmarkAdded,
  toBookmarkDeleted,
  toC2BookmarkAdded,
  toLegacyBookmarkRecord,
  type BookmarkItemWire,
} from './mapper';

type DetailsWire = BookmarkItemWire['DetailsJson'];

/** Connect2_MyBookmarks_IS DetailsJson as the server sends it: every field at its default, then the given ones. */
const detailsWire = (fields: Partial<DetailsWire> = {}): DetailsWire => ({
  AreasServed: '',
  ChildrenNames: '',
  CountryCode: '',
  CountryName: '',
  HouseHolderId: '0',
  HouseholdCount: '0',
  HouseholderName: '',
  IsDeceased: false,
  IsMainHall: false,
  LocalityID: '0',
  LocalityName: '',
  MemberID: '0',
  ServiceType: '',
  ShareObjectTypeId: '',
  SubdivisionID: '0',
  SubdivisionName: '',
  ...fields,
});

/** Connect2_MyBookmarks_IS BookmarkItem as the server sends it. */
const itemWire = (fields: Partial<BookmarkItemWire> = {}): BookmarkItemWire => ({
  Id: '0',
  Group: '',
  ObjectType: '',
  ObjectId: '',
  Title: '',
  DateCreatedUtc: '1900-01-01T00:00:00',
  Image: '',
  PhotoDetails: { Bucket: '', Path: '', SignedPath: '', Type: '' },
  RecordDisabled: false,
  RecordNotAvailable: false,
  Note: '',
  DetailsJson: detailsWire(),
  Type: '',
  ...fields,
});

/** The Harlow household of Nelson, bookmarked in Contacts. */
const harlow = itemWire({
  Id: '31',
  Group: 'Contacts',
  ObjectType: 'Contact',
  ObjectId: '42438',
  Title: 'Harlow, Peter & Grace',
  DateCreatedUtc: '2026-01-21T08:30:00',
  Image: 'https://photos.example.org/households/42438.jpg',
  PhotoDetails: { Bucket: 'households', Path: '42438.jpg', SignedPath: '42438.jpg?sig=1', Type: 'image/jpeg' },
  Note: 'Visit after the conference',
  DetailsJson: detailsWire({
    ChildrenNames: 'Ruth, Samuel',
    CountryCode: 'NZ',
    CountryName: 'New Zealand',
    HouseHolderId: '9071',
    HouseholdCount: '1',
    HouseholderName: 'Peter Harlow',
    LocalityID: '310',
    LocalityName: 'Nelson',
    MemberID: '9071',
    ShareObjectTypeId: 'Household',
  }),
  Type: 'Legacy',
});

describe('bookmark mapper', () => {
  it('toLegacyBookmarkRecord keeps every field in a copy of the record', () => {
    const record = toLegacyBookmarkRecord(harlow);
    expect(record).toEqual(harlow);
    expect(record).not.toBe(harlow);
    expect(record.DetailsJson).not.toBe(harlow.DetailsJson);
    expect(record.PhotoDetails).not.toBe(harlow.PhotoDetails);
  });

  it('toAssembleBookmarkAdded keeps Success and the whole created bookmark', () => {
    expect(toAssembleBookmarkAdded({ Success: true, CreatedBookmarkResponse: harlow })).toEqual({
      Success: true,
      CreatedBookmarkResponse: harlow,
    });
  });

  it('toC2BookmarkAdded keeps Success and the id and the creation time of the bookmark', () => {
    expect(
      toC2BookmarkAdded({
        Success: true,
        Bookmark_Added: {
          Id: '1004',
          BookmarkCategoryId: 'Household',
          ItemId: '42438',
          DateCreatedUtc: '2026-10-15T09:00:00',
        },
      }),
    ).toEqual({ Success: true, Bookmark_Added: { Id: '1004', DateCreatedUtc: '2026-10-15T09:00:00' } });
  });

  it('toBookmarkDeleted keeps Success', () => {
    expect(toBookmarkDeleted({ Success: false })).toEqual({ Success: false });
  });
});
