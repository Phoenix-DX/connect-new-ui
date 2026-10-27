import { renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchLocalityHouseholds, type LocalityHousehold } from '@/api/household';
import { BookmarkCategory } from '@/lib/ubtConnect/staticEntities';
import {
  localBookmarksSchemas,
  memoryDatabase,
  setLocalBookmarksDatabase,
  synchBookmarks,
  synchBookmarksC2,
} from '@/platform/storage/localEntities';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { MyBookmarks_ObjectType_Contact } from '@/pages/Locality_Details/components/staticEntities';
import { useLocalityHouseholdList } from './useLocalityHouseholdList';

vi.mock('@/api/household', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/household')>()),
  fetchLocalityHouseholds: vi.fn(),
}));

/* OnAfterFetch_GetLocalityHouseholds_Bookmarks (Locality_Households_HouseholdList.mvc.js:454-515): IsBookmarked of each
   row from the C2 local bookmarks (GetLocal_Bookmark_C2) when GetHasNewBookmarks, else from the legacy ones
   (GetLocal_Bookmark). Fictional households; the fetched IsBookmarked is true for both, so the test sees the local
   value. */
const USER = '990001';
const household = (householdId: string, householdName: string): LocalityHousehold => ({
  householdId,
  householdName,
  childrenNames: '',
  isBookmarked: true,
  localityName: 'Bahia Blanca',
  countryName: 'Argentina',
});
const HOUSEHOLDS = [household('7101', 'Fenwick, Arlo and Tamsin'), household('7102', 'Marlowe, Dorian and Ines')];
const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;
const renderList = (hasNewBookmarks: boolean) =>
  renderHook(() => useLocalityHouseholdList('252', {}, { hasCarouselEnabled: false, hasNewBookmarks }), { wrapper });

describe('useLocalityHouseholdList OnAfterFetch_GetLocalityHouseholds_Bookmarks', () => {
  beforeEach(async () => {
    freshPage();
    setLocalBookmarksDatabase(memoryDatabase(localBookmarksSchemas()));
    setSignedInUser(USER);
    vi.mocked(fetchLocalityHouseholds).mockResolvedValue(HOUSEHOLDS);
    // 7101 is a C2 bookmark only, 7102 a legacy bookmark only.
    await synchBookmarksC2([
      {
        Id: '1',
        UserId: Number(USER),
        BookmarkId: '501',
        BookmarkCategoryId: BookmarkCategory.Household,
        ItemId: '7101',
        CreatedAtDateUtc: '2026-10-01T08:00:00',
      },
    ]);
    await synchBookmarks([
      {
        Id: '2',
        UserId: Number(USER),
        BookmarkId: '502',
        ObjectType: MyBookmarks_ObjectType_Contact,
        ObjectId: '7102',
        Group: '',
        DateCreatedUtc: '2026-10-01T08:00:00',
        Note: '',
      },
    ]);
  });
  afterEach(() => {
    setLocalBookmarksDatabase(null);
    setSignedInUser(null);
    vi.mocked(fetchLocalityHouseholds).mockReset();
  });

  it('GetHasNewBookmarks on: IsBookmarked from GetLocal_Bookmark_C2 (the C2 local bookmarks)', async () => {
    const { result } = renderList(true);
    await waitFor(() => {
      expect(result.current.list.map((h) => [h.householdId, h.isBookmarked])).toEqual([
        ['7101', true],
        ['7102', false],
      ]);
    });
  });

  it('GetHasNewBookmarks off: IsBookmarked from the legacy GetLocal_Bookmark(Contact)', async () => {
    const { result } = renderList(false);
    await waitFor(() => {
      expect(result.current.list.map((h) => [h.householdId, h.isBookmarked])).toEqual([
        ['7101', false],
        ['7102', true],
      ]);
    });
  });
});
