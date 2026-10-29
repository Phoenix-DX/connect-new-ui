import { describe, expect, it } from 'vitest';
import type { BookmarkCardItem } from '@/api/bookmark';
import {
  bookmarkCardTarget,
  bookmarkPillTags,
  canLoadMore,
  getBookmarks_FilterYear,
  initialBookmarksState,
  selectedCategoryId,
  skeletonLoader_Bookmarks,
  skeletonLoader_Pills,
} from './bookmarksState';

const card = (itemId: string, bookmarkCategoryId: string): BookmarkCardItem => ({
  itemId,
  bookmarkCategoryId,
  channelName: '',
  channelLogo: '',
  publishedAt: '1900-01-01T00:00:00',
  title: '',
  subtitle: '',
  sourceHeader: { iconId: '', imageURL: '', initials: '', label: '' },
  notes: { Total: 0, Note_Item_List: [] },
});

const LIST = [
  card('1', 'Household'),
  card('7', 'OneSchool Global'),
  card('2', 'Household'),
  card('8', 'OneSchool Global'),
];

describe('Bookmarks screen variables and actions', () => {
  it('OnInitialize: loading, the skeleton pills (All + 3) and cards (6), three recent years', () => {
    const s = initialBookmarksState();
    expect(s.bookmarksLoading).toBe(true);
    expect(skeletonLoader_Pills().map((t) => t.Text)).toEqual(['All', 'Dumyy size', 'Dumyy size', 'Dumyy size']);
    expect(skeletonLoader_Bookmarks()).toHaveLength(6);
    expect(skeletonLoader_Bookmarks()[0]?.title).toBe('Dumyy Dummy Dummy Dummy');
    expect(getBookmarks_FilterYear(new Date(2026, 9, 29))).toEqual(['2026', '2025', '2024']);
    expect(s.pageSize).toBe(20);
  });

  it('GetBookmarks_Pills: All first, selected by the selected id', () => {
    const tags = bookmarkPillTags([{ text: 'Households', identifier: 'Household' }], 'Household');
    expect(tags).toEqual([
      { Text: 'All', Identifier: '', IsSelected: false, Enabled: true },
      { Text: 'Households', Identifier: 'Household', IsSelected: true, Enabled: true },
    ]);
    expect(bookmarkPillTags([], '')[0]?.IsSelected).toBe(true);
    expect(selectedCategoryId(tags)).toBe('Household');
    expect(selectedCategoryId([])).toBe('');
  });

  it('OnLoadMore: only when the last page had cards and fewer than MaxRecords', () => {
    const s = initialBookmarksState();
    expect(canLoadMore({ ...s, getBookmarksList: [], maxRecords: '5' })).toBe(false);
    expect(canLoadMore({ ...s, getBookmarksList: [card('1', 'Household')], maxRecords: '5' })).toBe(true);
    expect(canLoadMore({ ...s, getBookmarksList: [card('1', 'Household')], maxRecords: '1' })).toBe(false);
  });

  it('a card opens its screen; OneSchool Global always opens the carousel with the preloaded ids', () => {
    expect(bookmarkCardTarget('7', 'OneSchool Global', LIST)).toEqual({
      path: '/UBTConnect/OneSchoolGlobalCarousel',
      inputs: { In_StartingObjectId: '7' },
      preload: { CarouselItemIds: ['7', '8'] },
    });
    expect(bookmarkCardTarget('2', 'Household', LIST)).toEqual({
      path: '/UBTConnect/HouseholdCarousel',
      inputs: { In_StartingHouseholdId: '2' },
      preload: { CarouselHouseholdItem: [{ Household: '1' }, { Household: '2' }] },
    });
    expect(bookmarkCardTarget('5', 'Supper Meeting', LIST)).toEqual({
      path: '/UBTConnect/SupperMeeting_Details',
      inputs: { In_SubdivsionId: '5' },
    });
    expect(bookmarkCardTarget('9', 'Member', LIST)).toBeNull();
  });
});
