import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { legacyBookmarksCollection, legacyBookmarksOfGroup } from '@/mocks/modules/Connect2_MyBookmarks_MUI/mocks';
import { bookmarksCollection } from '@/containers/EntityDetailsActions/mocks';
import {
  addAssembleBookmark,
  addC2Bookmark,
  deleteAssembleBookmark,
  deleteBookmark,
  deleteC2Bookmark,
  fetchBookmarkById,
  fetchBookmarkGroup,
  fetchBookmarkGroupSummaries,
  updateBookmarkNote,
} from './repository';
import type { BookmarkGroupListCallInputs, BookmarkSummariesVariables } from './types';

/* The MSW mocks of the test setup answer the fictional legacy bookmarks of the mock user (7 Contacts, 4 Locations, no
   Entities; shared/Connect2_MyBookmarks_MUI/mocks.ts) and the fictional C2 bookmarks (none at start;
   shared/UBTConnect/Directory_EntityDetailsActions/mocks.ts). The writes change these collections. */

const groupInputs = (group: string): BookmarkGroupListCallInputs => ({
  BookmarkGroup: group,
  ShowSearch: false,
  SearchString: '',
  SortColumn: '',
  IsFetchingBookmarks: true,
  UpdatedTotal: '0',
  WasSearchDone: false,
  SearchString_SearchDone: '',
  IsFromNavigationHistory: false,
  IsShareOpen: false,
  ShareableObjectId: '',
  Type_ShareObjectId: '',
});

const emptySummary = () => ({ group: '', totalCount: '0', bookmarks: [] });
const summariesVariables: BookmarkSummariesVariables = {
  hasBookmarks: false,
  isFetchingBookmarks: true,
  countSize: 4,
  contacts: emptySummary(),
  locations: emptySummary(),
  communityBusinesses: emptySummary(),
  allContacts: [],
  allLocations: [],
  allCommunityBusiness: [],
  isNavigationFromHistory: false,
  hasNetworkError: false,
};

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('bookmark repository', () => {
  it('fetchBookmarkGroup calls DataActionGetAllBookmarksByGroup with the scalar block variables', async () => {
    const inputs = groupInputs('Contacts');
    const list = await fetchBookmarkGroup(inputs);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_MyBookmarks_MUI',
        owner: 'ScreenBlock_BookmarkGroup',
        action: 'DataActionGetAllBookmarksByGroup',
        inputNames: Object.keys(inputs).sort(),
      }),
    ]);
    const contacts = legacyBookmarksOfGroup('Contacts');
    expect(list.results.map((b) => b.objectId)).toEqual(contacts.map((c) => c.ObjectId));
    expect(list.total).toBe('7');
    expect(list.wasSearched).toBe(false);
    expect(list.results[0]?.details.shareObjectTypeId).toBe('Household');
  });

  it('fetchBookmarkGroupSummaries calls DataActionGetGroupSummaries with every block variable', async () => {
    const summaries = await fetchBookmarkGroupSummaries(summariesVariables);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_MyBookmarks_MUI',
        owner: 'ScreenBlock_MyBookmarks',
        action: 'DataActionGetGroupSummaries',
        inputNames: [
          'AllCommunityBusiness',
          'AllContacts',
          'AllLocations',
          'CommunityBusinesses',
          'Contacts',
          'CountSize',
          'HasBookmarks',
          'HasNetworkError',
          'IsFetchingBookmarks',
          'IsNavigationFromHistory',
          'Locations',
        ],
      }),
    ]);
    expect(summaries.contacts.totalCount).toBe('7');
    expect(summaries.contacts.bookmarks).toHaveLength(4);
    expect(summaries.contacts.bookmarks[0]?.group).toBe('Contacts');
    expect(summaries.locations.bookmarks).toHaveLength(4);
    expect(summaries.communityBusinesses.bookmarks).toEqual([]);
    expect(summaries.allContacts).toHaveLength(7);
    expect(summaries.allLocations).toHaveLength(4);
  });

  it('fetchBookmarkById calls GetBookmarkById, or New_GetBookmarkById when the bookmark note is on', async () => {
    const [first] = legacyBookmarksOfGroup('Contacts');
    if (!first) throw new Error('the seed has contacts');
    const found = await fetchBookmarkById(first.Id, false);
    const foundNew = await fetchBookmarkById(first.Id, true);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_MyBookmarks_MUI',
        action: 'ActionGetBookmarkById',
        inputNames: ['BookmarkId'],
      }),
      expect.objectContaining({
        module: 'Connect2_MyBookmarks_MUI',
        action: 'ActionNew_GetBookmarkById',
        inputNames: ['BookmarkId'],
      }),
    ]);
    expect(found.isBookmarkFound).toBe(true);
    expect(found.item).toEqual(
      expect.objectContaining({ id: first.Id, objectId: first.ObjectId, objectType: 'Contact' }),
    );
    expect(foundNew).toEqual(found);
  });

  it('updateBookmarkNote calls New_UpdateBookmarkNote and answers Success', async () => {
    const [first] = legacyBookmarksOfGroup('Contacts');
    if (!first) throw new Error('the seed has contacts');
    expect(await updateBookmarkNote(first.Id, 'Bring the hymn books')).toBe(true);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({ action: 'ActionNew_UpdateBookmarkNote', inputNames: ['BookmarkId', 'Note'] }),
    ]);
    expect(legacyBookmarksCollection().get(first.Id)).toEqual(
      expect.objectContaining({ Note: 'Bring the hymn books' }),
    );
    expect(await updateBookmarkNote('424242', 'No bookmark')).toBe(false);
  });

  it('deleteBookmark calls DeleteBookmarkByBookmarkId of Connect2_MyBookmarks_MUI and answers Success', async () => {
    const [, second] = legacyBookmarksOfGroup('Locations');
    if (!second) throw new Error('the seed has locations');
    expect(await deleteBookmark(second.Id)).toBe(true);
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_MyBookmarks_MUI',
        action: 'ActionDeleteBookmarkByBookmarkId',
        inputNames: ['BookmarkId'],
      }),
    ]);
    expect((await fetchBookmarkById(second.Id, false)).isBookmarkFound).toBe(false);
    expect(await deleteBookmark(second.Id)).toBe(false);
  });

  it('addAssembleBookmark and deleteAssembleBookmark call the server actions of Connect2_Assemble_MUI', async () => {
    const added = await addAssembleBookmark('Locality', '8003', 'Locations', 'Spring meeting');
    expect(added.Success).toBe(true);
    expect(added.CreatedBookmarkResponse).toEqual(legacyBookmarksCollection().get(added.CreatedBookmarkResponse.Id));
    expect(added.CreatedBookmarkResponse).toEqual(
      expect.objectContaining({ ObjectType: 'Locality', ObjectId: '8003', Group: 'Locations', Note: 'Spring meeting' }),
    );
    expect(await deleteAssembleBookmark(added.CreatedBookmarkResponse.Id)).toEqual({ Success: true });
    expect(await deleteAssembleBookmark(added.CreatedBookmarkResponse.Id)).toEqual({ Success: false });
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'Connect2_Assemble_MUI',
        action: 'ActionAddBookmark',
        inputNames: ['Group', 'Note', 'ObjectId', 'ObjectType'],
      }),
      expect.objectContaining({
        module: 'Connect2_Assemble_MUI',
        action: 'ActionDeleteBookmarkByBookmarkId',
        inputNames: ['BookmarkId'],
      }),
      expect.objectContaining({ module: 'Connect2_Assemble_MUI', action: 'ActionDeleteBookmarkByBookmarkId' }),
    ]);
  });

  it('addC2Bookmark and deleteC2Bookmark call the bookmark service actions of UBTConnect', async () => {
    const added = await addC2Bookmark('Household', '42438');
    const [row] = bookmarksCollection().all();
    expect(added).toEqual({
      Success: true,
      Bookmark_Added: { Id: row?.Id, DateCreatedUtc: row?.DateCreatedUtc },
    });
    expect(row).toEqual(expect.objectContaining({ BookmarkCategoryId: 'Household', ItemId: '42438' }));
    expect(await deleteC2Bookmark(added.Bookmark_Added.Id)).toEqual({ Success: true });
    expect(await deleteC2Bookmark(added.Bookmark_Added.Id)).toEqual({ Success: false });
    expect(window.__osCalls).toEqual([
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ServiceAPIAddBookmark2',
        inputNames: ['In_BookmarkCategoryId', 'In_ItemId'],
      }),
      expect.objectContaining({
        module: 'UBTConnect',
        action: 'ServiceAPIDeleteBookmarkByBookmarkId2',
        inputNames: ['BookmarkId'],
      }),
      expect.objectContaining({ module: 'UBTConnect', action: 'ServiceAPIDeleteBookmarkByBookmarkId2' }),
    ]);
  });

  it('a failed call raises the exception of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(fetchBookmarkGroup(groupInputs('Contacts'))).rejects.toThrow('Request failed with an error');
    await expect(fetchBookmarkGroupSummaries(summariesVariables)).rejects.toThrow('Request failed with an error');
  });
});
