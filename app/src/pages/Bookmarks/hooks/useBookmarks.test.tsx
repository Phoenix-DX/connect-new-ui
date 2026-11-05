import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchBookmarkCards, fetchBookmarkPills, type BookmarkCardItem } from '@/api/bookmark';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { feedbackMessageAutoClose } from '@/platform/feedback/feedbackMessageAutoClose';
import {
  create_LocalBookmark,
  localBookmarksSchemas,
  memoryDatabase,
  setLocalBookmarksDatabase,
} from '@/platform/storage/localEntities';
import { useBookmarks } from './useBookmarks';

/* The OnReady flow of the Bookmarks screen on a real (in-memory) local bookmark database: GetBookmarks_Pills reads the
   user's local bookmark categories (GetLocalBookmarkCategoryIds_ByUserId), then the two calls of api/bookmark run
   (spies). Fictional ids. */
vi.mock('@/api/bookmark', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/api/bookmark')>()),
  fetchBookmarkCards: vi.fn(),
  fetchBookmarkPills: vi.fn(),
}));
vi.mock('@/platform/session/session', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/session')>()),
  currentUserId: () => '990001',
}));
vi.mock('@/platform/feedback/feedbackMessageAutoClose', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/feedbackMessageAutoClose')>()),
  feedbackMessageAutoClose: vi.fn(),
}));
const navigate = vi.hoisted(() => vi.fn());
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
}));
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/feedback/flowErrors')>()),
  raiseToFlowHandler: vi.fn(),
}));

const card = (itemId: string, bookmarkCategoryId: string): BookmarkCardItem => ({
  itemId,
  itemId2: '',
  hasDetailAccess: true,
  bookmarkCategoryId,
  channelName: '',
  channelLogo: '',
  publishedAt: '1900-01-01T00:00:00',
  title: 'Fenwick Household',
  subtitle: 'Ashgrove Fields Locality',
  sourceHeader: { iconId: '', imageURL: '', initials: 'F', label: bookmarkCategoryId },
  notes: { Total: 0, Note_Item_List: [] },
});

const wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;

describe('useBookmarks OnReady', () => {
  beforeEach(() => {
    setLocalBookmarksDatabase(memoryDatabase(localBookmarksSchemas()));
    vi.mocked(fetchBookmarkPills).mockResolvedValue([{ text: 'Households', identifier: 'Household' }]);
    vi.mocked(fetchBookmarkCards).mockResolvedValue({ total: '1', items: [card('41022', 'Household')] });
  });
  afterEach(() => {
    setLocalBookmarksDatabase(null);
    vi.clearAllMocks();
  });

  it('reads the local bookmark categories, loads the pills, then the first page: the skeleton ends', async () => {
    await create_LocalBookmark('41022', 'Household', '7001', '2026-03-01T09:00:00');
    await create_LocalBookmark('41023', 'Household', '7002', '2026-03-02T09:00:00');
    const { result } = renderHook(() => useBookmarks(), { wrapper });
    expect(result.current.state.bookmarksLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.state.bookmarksLoading).toBe(false);
    });
    expect(raiseToFlowHandler).not.toHaveBeenCalled();
    expect(fetchBookmarkPills).toHaveBeenCalledWith(['Household']);
    expect(result.current.state.bookmarkPills.map((t) => t.Text)).toEqual(['All', 'Households']);
    expect(result.current.state.bookmarkPills[0]?.IsSelected).toBe(true);
    expect(result.current.state.pillsLoaded).toBe(true);
    expect(result.current.state.bookmarksList.map((c) => c.itemId)).toEqual(['41022']);
  });
});

/* Handler_OnClickBookmarkCardItem(ObjectId, ObjectId2, ObjectType, HasDetailAccess) (live Bookmarks.mvc.js:1067-1219,
   TST 2026-11-05). Fictional ids: member 90817 of the Vitale household 42438, interchange 252:253. */
describe('useBookmarks Handler_OnClickBookmarkCardItem', () => {
  beforeEach(() => {
    setLocalBookmarksDatabase(memoryDatabase(localBookmarksSchemas()));
    vi.mocked(fetchBookmarkPills).mockResolvedValue([
      { text: 'Members', identifier: 'Member' },
      { text: 'Interchange', identifier: 'Interchange' },
    ]);
    vi.mocked(fetchBookmarkCards).mockResolvedValue({ total: '1', items: [card('90817', 'Member')] });
  });
  afterEach(() => {
    setLocalBookmarksDatabase(null);
    vi.clearAllMocks();
  });

  const loaded = async () => {
    await create_LocalBookmark('90817', 'Member', '7003', '2026-03-03T09:00:00');
    const hook = renderHook(() => useBookmarks(), { wrapper });
    await waitFor(() => {
      expect(hook.result.current.state.pillsLoaded).toBe(true);
    });
    return hook.result;
  };

  it('without detail access: Handler_OnClickUnauthorizedObject (:788-817), the toast and no navigation', async () => {
    const result = await loaded();
    act(() => {
      result.current.onClickBookmarkCardItem('90817', '42438', 'Member', false);
    });
    expect(navigate).not.toHaveBeenCalled();
    expect(feedbackMessageAutoClose).toHaveBeenCalledWith({
      title: '',
      message: 'This member is no longer available.',
      messageType: 'info',
      encodedHtml: true,
      extendedClass: '',
      delayMs: 0,
      useDebounce: false,
    });
  });

  it('a Member card opens Household_Relations of the member and its household (:1121-1127)', async () => {
    const result = await loaded();
    act(() => {
      result.current.onClickBookmarkCardItem('90817', '42438', 'Member', true);
    });
    expect(feedbackMessageAutoClose).not.toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/Household_Relations', {
      HouseholdId: '42438',
      MemberId: '90817',
    });
  });

  it('an Interchange card opens Locality_Details of the interchange with the Interchange tag (:1098-1110)', async () => {
    const result = await loaded();
    act(() => {
      result.current.onClickBookmarkCardItem('252:253', '', 'Interchange', true);
    });
    expect(navigate).toHaveBeenCalledWith('/UBTConnect/Locality_Details', {
      LocalityId: '253',
      TagsList_SelectedTag: 'Interchange',
    });
  });
});
