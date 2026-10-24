import { describe, expect, it } from 'vitest';
import type { Bookmark } from '@/api/bookmark';
import { BOOKMARKED_ELSEWHERE } from '@/mocks/fictional/directory';
import {
  bookmarkGroupCallInputs,
  bookmarkGroupIds,
  bookmarkGroupReducer,
  INITIAL_BOOKMARK_GROUP_STATE,
  restoredBookmarkGroupState,
  withNote,
  withoutRow,
  type BookmarkGroupState,
} from './bookmarkGroupState';

/* The pure part of the bookmark group block, on three fictional household bookmarks. */
const contact = (id: string, household: { id: string; title: string; children: string }): Bookmark => ({
  id,
  objectId: household.id,
  objectType: 'Contact',
  title: household.title,
  image: '',
  note: '',
  recordDisabled: false,
  recordNotAvailable: false,
  dateCreatedUtc: `2026-01-0${id}T00:00:00`,
  details: {
    areasServed: '',
    childrenNames: household.children,
    countryName: '',
    householdCount: '0',
    isDeceased: false,
    isMainHall: false,
    localityId: '0',
    localityName: '',
    shareObjectTypeId: 'Household',
  },
});
const ROWS = [
  contact('1', BOOKMARKED_ELSEWHERE.riley),
  contact('2', BOOKMARKED_ELSEWHERE.ellis),
  contact('3', BOOKMARKED_ELSEWHERE.fields),
];
const listed: BookmarkGroupState = { ...INITIAL_BOOKMARK_GROUP_STATE, bookmarkedItems: ROWS, updatedTotal: '3' };

describe('bookmarkGroupState', () => {
  it('a new visit: not restored, no rows, total "0", not fetching, share closed, the empty note', () => {
    expect(INITIAL_BOOKMARK_GROUP_STATE).toMatchObject({
      isFromNavigationHistory: false,
      bookmarkedItems: [],
      updatedTotal: '0',
      isFetchingBookmarks: false,
      wasSearched: false,
      editingBookmarkNote: { bookmarkId: '0', note: '' },
      share: { isOpen: false, objectId: '', typeId: '', object: { ConnectEntityTypeId: '', Id: '' } },
    });
  });

  it('a restored view: IsFromNavigationHistory, the cached rows and their count; the rest starts again', () => {
    expect(restoredBookmarkGroupState(ROWS)).toEqual({
      ...INITIAL_BOOKMARK_GROUP_STATE,
      isFromNavigationHistory: true,
      bookmarkedItems: ROWS,
      updatedTotal: '3',
    });
    expect(restoredBookmarkGroupState([]).updatedTotal).toBe('0');
  });

  it('a refresh: fetching, then the rows, the total, WasSearched and not fetching; a failure stops fetching', () => {
    const started = bookmarkGroupReducer(INITIAL_BOOKMARK_GROUP_STATE, { type: 'fetchStarted' });
    expect(started.isFetchingBookmarks).toBe(true);
    const fetched = bookmarkGroupReducer(started, {
      type: 'fetched',
      result: { results: ROWS, total: '3', wasSearched: true },
    });
    expect(fetched).toMatchObject({ bookmarkedItems: ROWS, updatedTotal: '3', wasSearched: true });
    expect(fetched.isFetchingBookmarks).toBe(false);
    expect(bookmarkGroupReducer(started, { type: 'fetchFailed' }).isFetchingBookmarks).toBe(false);
  });

  it('a removed bookmark: the row at the position goes, and the total is one less', () => {
    const next = bookmarkGroupReducer(listed, { type: 'bookmarkRemoved', currentPosition: 1 });
    expect(next.bookmarkedItems.map((r) => r.id)).toEqual(['1', '3']);
    expect(next.updatedTotal).toBe('2');
    expect(withoutRow(ROWS, 0).map((r) => r.id)).toEqual(['2', '3']);
  });

  it('a saved note: only the row of the bookmark gets the note', () => {
    const next = bookmarkGroupReducer(listed, { type: 'noteSaved', bookmarkId: '2', note: 'Visit in May' });
    expect(next.bookmarkedItems.map((r) => r.note)).toEqual(['', 'Visit in May', '']);
    expect(withNote(ROWS, '9', 'x')).toEqual(ROWS);
  });

  it('the share sheet opens with the object, and closes with an empty entity type', () => {
    const object = {
      ConnectEntityTypeId: 'Household',
      Id: BOOKMARKED_ELSEWHERE.riley.id,
      Title: BOOKMARKED_ELSEWHERE.riley.title,
      Subtitle: BOOKMARKED_ELSEWHERE.riley.children,
      Location: 'Seattle, United States',
      SignedURL: '',
    };
    const opened = bookmarkGroupReducer(listed, {
      type: 'shareOpened',
      objectId: BOOKMARKED_ELSEWHERE.riley.id,
      typeId: 'Household',
      object,
    });
    expect(opened.share).toEqual({
      isOpen: true,
      objectId: BOOKMARKED_ELSEWHERE.riley.id,
      typeId: 'Household',
      object,
    });
    const closed = bookmarkGroupReducer(opened, { type: 'shareClosed' });
    expect(closed.share).toEqual({
      isOpen: false,
      objectId: BOOKMARKED_ELSEWHERE.riley.id,
      typeId: 'Household',
      object: { ...object, ConnectEntityTypeId: '' },
    });
  });

  it('the inputs of GetAllBookmarksByGroup: the group, the scalar variables, the search defaults', () => {
    const opened = bookmarkGroupReducer(restoredBookmarkGroupState(ROWS), {
      type: 'shareOpened',
      objectId: '296',
      typeId: 'Household',
      object: INITIAL_BOOKMARK_GROUP_STATE.share.object,
    });
    expect(bookmarkGroupCallInputs('Contacts', opened)).toEqual({
      BookmarkGroup: 'Contacts',
      ShowSearch: false,
      SearchString: '',
      SortColumn: '',
      IsFetchingBookmarks: true,
      UpdatedTotal: '3',
      WasSearchDone: false,
      SearchString_SearchDone: '',
      IsFromNavigationHistory: true,
      IsShareOpen: true,
      ShareableObjectId: '296',
      Type_ShareObjectId: 'Household',
    });
  });

  it('the element ids of the block instance', () => {
    expect(bookmarkGroupIds('$b1')).toEqual({
      scope: 'b1',
      freeSubscriptionAlert: 'b1-FreeSubscriptionAlert',
      backNavigationHandler: 'b1-$b24',
      shareSheet: 'b1-$b25',
      shareableObject: 'b1-$b26',
    });
  });
});
