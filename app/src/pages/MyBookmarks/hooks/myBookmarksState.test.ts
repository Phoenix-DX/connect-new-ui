import { describe, expect, it } from 'vitest';
import type { BookmarkGroupSummaries, GroupSummaryBookmark } from '@/api/bookmark';
import {
  bookmarkedHiddenFeedbackMessage,
  clearedLocalLists,
  communityBusinessPreloadItem,
  emptyGroupSummary,
  groupSummariesFetched,
  householdPreloadItem,
  initialTab,
  INITIAL_MY_BOOKMARKS_STATE,
  isRequestFailedExceptionMessage,
  isTimeoutExceptionMessage,
  myBookmarksReducer,
  restoreMyBookmarks,
} from './myBookmarksState';

/* The pure part of ScreenBlock_MyBookmarks: the variables, the assignments and the client actions. Fictional rows. */
const bookmark = (id: string, objectType: string, objectId: string, title: string): GroupSummaryBookmark => ({
  id,
  group: '',
  objectType,
  objectId,
  title,
  image: `https://images.example/${id}.jpg`,
  isDeceased: false,
  recordDisabled: false,
  recordNotAvailable: false,
});

const summaries = (contacts: GroupSummaryBookmark[]): BookmarkGroupSummaries => ({
  contacts: { group: '', totalCount: String(contacts.length), bookmarks: contacts },
  locations: emptyGroupSummary(),
  communityBusinesses: emptyGroupSummary(),
  allContacts: contacts,
  allLocations: [],
  allCommunityBusiness: [],
});

describe('myBookmarksState', () => {
  it('the defaults: no bookmark, not fetching, CountSize 4, empty summaries', () => {
    expect(INITIAL_MY_BOOKMARKS_STATE).toEqual({
      hasBookmarks: false,
      isFetchingBookmarks: false,
      countSize: 4,
      contacts: { group: '', totalCount: '0', bookmarks: [] },
      locations: { group: '', totalCount: '0', bookmarks: [] },
      communityBusinesses: { group: '', totalCount: '0', bookmarks: [] },
      allContacts: [],
      allLocations: [],
      allCommunityBusiness: [],
      isNavigationFromHistory: false,
      hasNetworkError: false,
    });
  });

  it('the reducer assigns the given variables only', () => {
    const next = myBookmarksReducer(INITIAL_MY_BOOKMARKS_STATE, { isFetchingBookmarks: true });
    expect(next).toEqual({ ...INITIAL_MY_BOOKMARKS_STATE, isFetchingBookmarks: true });
    expect(next).not.toBe(INITIAL_MY_BOOKMARKS_STATE);
  });

  it('OnInitialize of a restored view: IsNavigationFromHistory True, the other variables kept', () => {
    const saved = { ...INITIAL_MY_BOOKMARKS_STATE, hasBookmarks: true, countSize: 4 };
    expect(restoreMyBookmarks(saved)).toEqual({ ...saved, isNavigationFromHistory: true });
  });

  it('a view left before its first assignment starts from the defaults', () => {
    expect(restoreMyBookmarks(INITIAL_MY_BOOKMARKS_STATE)).toBe(INITIAL_MY_BOOKMARKS_STATE);
  });

  it('OnAfterFetch_GetGroupSummaries: HasBookmarks when a group has a bookmark; the flags reset', () => {
    const rows = [bookmark('1', 'Contact', '501', 'Ashby, Tom & Ruth')];
    expect(groupSummariesFetched(summaries(rows))).toEqual({
      ...summaries(rows),
      isFetchingBookmarks: false,
      hasBookmarks: true,
      hasNetworkError: false,
    });
    expect(groupSummariesFetched(summaries([])).hasBookmarks).toBe(false);
    const onlyLocations = { ...summaries([]), locations: { group: '', totalCount: '1', bookmarks: rows } };
    expect(groupSummariesFetched(onlyLocations).hasBookmarks).toBe(true);
    const onlyEntities = { ...summaries([]), communityBusinesses: { group: '', totalCount: '1', bookmarks: rows } };
    expect(groupSummariesFetched(onlyEntities).hasBookmarks).toBe(true);
  });

  it('ClearLocalLists empties the three summaries and the three full lists', () => {
    expect(clearedLocalLists()).toEqual({
      contacts: emptyGroupSummary(),
      locations: emptyGroupSummary(),
      communityBusinesses: emptyGroupSummary(),
      allContacts: [],
      allLocations: [],
      allCommunityBusiness: [],
    });
  });

  it('the exception messages of Connect2_LegacyShared', () => {
    expect(isRequestFailedExceptionMessage('Request failed with an error')).toBe(true);
    expect(isRequestFailedExceptionMessage('Request failed with status 500')).toBe(false);
    expect(isTimeoutExceptionMessage('The operation has timed out')).toBe(true);
    expect(isTimeoutExceptionMessage('The connection has timed out')).toBe(true);
    expect(isTimeoutExceptionMessage('Timed out')).toBe(false);
  });

  it('SendBookmarkedHiddenFeedbackMessage: the text per object type', () => {
    expect(bookmarkedHiddenFeedbackMessage('Contact')).toBe('This household is no longer available.');
    expect(bookmarkedHiddenFeedbackMessage('Locality')).toBe('This locality is no longer available.');
    expect(bookmarkedHiddenFeedbackMessage('Subdivision')).toBe('This Supper Meeting is no longer available.');
    expect(bookmarkedHiddenFeedbackMessage('Campus&Co')).toBe('This entity is no longer available.');
    expect(bookmarkedHiddenFeedbackMessage('OneSchool Global')).toBe('This entity is no longer available.');
    expect(bookmarkedHiddenFeedbackMessage('News')).toBe('This is no longer available.');
  });

  it('InitialTab: 3 for OneSchool Global, 4 for Campus&Co, else 0', () => {
    expect(initialTab('OneSchool Global')).toBe(3);
    expect(initialTab('Campus&Co')).toBe(4);
    expect(initialTab('Locality')).toBe(0);
  });

  it('the preload items of the household and the entity carousels', () => {
    const household = { ...bookmark('1', 'Contact', ' 0501 ', 'Ashby, Tom & Ruth'), isDeceased: true };
    expect(householdPreloadItem(household)).toEqual({
      Id: '501',
      Name: 'Ashby, Tom & Ruth',
      IsDeceased: true,
      Image: 'https://images.example/1.jpg',
    });
    expect(communityBusinessPreloadItem(bookmark('2', 'Campus&Co', '77', 'Harbour Campus'))).toEqual({
      Id: '77',
      Name: 'Harbour Campus',
      SignedURL: 'https://images.example/2.jpg',
      CommunityBusinessTypeId: 'Campus&Co',
    });
    expect(communityBusinessPreloadItem(bookmark('3', 'OneSchool Global', '78', '')).CommunityBusinessTypeId).toBe(
      'OneSchool Global',
    );
    expect(communityBusinessPreloadItem(bookmark('4', '', 'x', '')).CommunityBusinessTypeId).toBe('');
    expect(communityBusinessPreloadItem(bookmark('4', '', 'x', '')).Id).toBe('0');
  });
});
