import { describe, expect, it } from 'vitest';
import {
  toAssembleBookmarkAdded,
  toBookmark,
  toBookmarkByIdResult,
  toBookmarkDeleted,
  toBookmarkGroupList,
  toBookmarkGroupSummaries,
  toBookmarkSummariesVariablesWire,
  toC2BookmarkAdded,
  toLegacyBookmarkRecord,
  type BookmarkGroupSummariesWire,
  type BookmarkItemWire,
} from './mapper';
import type { BookmarkSummariesVariables, GroupSummaryBookmark } from './types';

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

/** The Nelson main hall, bookmarked in Locations. */
const nelsonHall = itemWire({
  Id: '32',
  Group: 'Locations',
  ObjectType: 'Subdivision',
  ObjectId: '7001',
  Title: 'Nelson Main Hall',
  RecordDisabled: true,
  DetailsJson: detailsWire({ HouseholdCount: '12', IsMainHall: true, IsDeceased: true }),
});

describe('bookmark mapper', () => {
  it('toBookmark keeps the bookmark fields, DateCreatedUtc and the DetailsJson fields that the group list reads', () => {
    expect(toBookmark(harlow)).toEqual({
      id: '31',
      objectId: '42438',
      objectType: 'Contact',
      title: 'Harlow, Peter & Grace',
      image: 'https://photos.example.org/households/42438.jpg',
      note: 'Visit after the conference',
      recordDisabled: false,
      recordNotAvailable: false,
      dateCreatedUtc: '2026-01-21T08:30:00',
      details: {
        areasServed: '',
        childrenNames: 'Ruth, Samuel',
        countryName: 'New Zealand',
        householdCount: '1',
        isDeceased: false,
        isMainHall: false,
        localityId: '310',
        localityName: 'Nelson',
        shareObjectTypeId: 'Household',
      },
    });
  });

  it('toBookmarkGroupList unwraps the results and keeps the total and WasSearched', () => {
    const list = toBookmarkGroupList({
      GetBookmarksGroupResponse: { Results: { List: [harlow, nelsonHall] }, Total: '2' },
      WasSearched: true,
    });
    expect(list.results.map((b) => b.id)).toEqual(['31', '32']);
    expect(list.results[1]?.details).toEqual(expect.objectContaining({ isMainHall: true, householdCount: '12' }));
    expect(list.total).toBe('2');
    expect(list.wasSearched).toBe(true);
  });

  it('toBookmarkByIdResult maps the bookmark and IsBookmarkFound', () => {
    expect(toBookmarkByIdResult({ GetBookmarkByIdResponse: harlow, IsBookmarkFound: true })).toEqual({
      item: toBookmark(harlow),
      isBookmarkFound: true,
    });
    const gone = toBookmarkByIdResult({ GetBookmarkByIdResponse: itemWire(), IsBookmarkFound: false });
    expect(gone.isBookmarkFound).toBe(false);
    expect(gone.item).toEqual(expect.objectContaining({ id: '0', objectType: '' }));
  });

  it('toBookmarkGroupSummaries maps each group summary and each list of all bookmarks', () => {
    const wire: BookmarkGroupSummariesWire = {
      Bookmarks_Contacts: { Group: '', TotalCount: '7', Bookmarks: { List: [harlow] } },
      Bookmarks_Locations: { Group: '', TotalCount: '1', Bookmarks: { List: [nelsonHall] } },
      Bookmarks_CommunityBusinesses: { Group: '', TotalCount: '0', Bookmarks: { List: [] } },
      Bookmarks_AllContacts: { List: [harlow] },
      Bookmarks_AllLocations: { List: [itemWire()] },
      Bookmarks_AllCommunityBusiness: { List: [] },
    };
    const harlowSummary: GroupSummaryBookmark = {
      id: '31',
      group: 'Contacts',
      objectType: 'Contact',
      objectId: '42438',
      title: 'Harlow, Peter & Grace',
      image: 'https://photos.example.org/households/42438.jpg',
      isDeceased: false,
      recordDisabled: false,
      recordNotAvailable: false,
    };
    expect(toBookmarkGroupSummaries(wire)).toEqual({
      contacts: { group: '', totalCount: '7', bookmarks: [harlowSummary] },
      locations: {
        group: '',
        totalCount: '1',
        bookmarks: [
          {
            id: '32',
            group: 'Locations',
            objectType: 'Subdivision',
            objectId: '7001',
            title: 'Nelson Main Hall',
            image: '',
            isDeceased: true,
            recordDisabled: true,
            recordNotAvailable: false,
          },
        ],
      },
      communityBusinesses: { group: '', totalCount: '0', bookmarks: [] },
      allContacts: [harlowSummary],
      allLocations: [
        {
          id: '0',
          group: '',
          objectType: '',
          objectId: '',
          title: '',
          image: '',
          isDeceased: false,
          recordDisabled: false,
          recordNotAvailable: false,
        },
      ],
      allCommunityBusiness: [],
    });
  });

  it('toBookmarkSummariesVariablesWire sends every block variable; a bookmark goes back with its kept fields only', () => {
    const summary = toBookmarkGroupSummaries({
      Bookmarks_Contacts: { Group: '', TotalCount: '7', Bookmarks: { List: [harlow] } },
      Bookmarks_Locations: { Group: '', TotalCount: '0', Bookmarks: { List: [] } },
      Bookmarks_CommunityBusinesses: { Group: '', TotalCount: '0', Bookmarks: { List: [] } },
      Bookmarks_AllContacts: { List: [harlow] },
      Bookmarks_AllLocations: { List: [] },
      Bookmarks_AllCommunityBusiness: { List: [] },
    });
    const variables: BookmarkSummariesVariables = {
      ...summary,
      hasBookmarks: true,
      isFetchingBookmarks: true,
      countSize: 4,
      isNavigationFromHistory: false,
      hasNetworkError: false,
    };
    const wire = toBookmarkSummariesVariablesWire(variables);
    expect(Object.keys(wire)).toEqual([
      'HasBookmarks',
      'IsFetchingBookmarks',
      'CountSize',
      'Contacts',
      'Locations',
      'CommunityBusinesses',
      'AllContacts',
      'AllLocations',
      'AllCommunityBusiness',
      'IsNavigationFromHistory',
      'HasNetworkError',
    ]);
    expect(wire).toEqual(
      expect.objectContaining({ HasBookmarks: true, IsFetchingBookmarks: true, CountSize: 4, HasNetworkError: false }),
    );
    const sent = itemWire({
      Id: '31',
      Group: 'Contacts',
      ObjectType: 'Contact',
      ObjectId: '42438',
      Title: 'Harlow, Peter & Grace',
      Image: 'https://photos.example.org/households/42438.jpg',
    });
    expect(wire.Contacts).toEqual({ Group: '', TotalCount: '7', Bookmarks: { List: [sent] } });
    expect(wire.AllContacts).toEqual({ List: [sent] });
    expect(wire.Locations).toEqual({ Group: '', TotalCount: '0', Bookmarks: { List: [] } });
    expect(wire.AllLocations).toEqual({ List: [] });
  });

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

  it('empty wire lists give empty lists', () => {
    expect(
      toBookmarkGroupList({ GetBookmarksGroupResponse: { Results: { List: [] }, Total: '0' }, WasSearched: false }),
    ).toEqual({ results: [], total: '0', wasSearched: false });
  });
});
