import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { bookmarksCollection } from '@/containers/EntityDetailsActions/mocks';
import { addC2Bookmark, deleteC2Bookmark } from './repository';

/* The MSW mocks of the test setup answer the fictional C2 bookmarks (none at start;
   containers/EntityDetailsActions/mocks.ts). The writes change that collection. */

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('bookmark repository', () => {
  it('addC2Bookmark and deleteC2Bookmark call the bookmark service actions of UBTConnect_Utils', async () => {
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
        module: 'UBTConnect_Utils',
        action: 'ServiceAPIAddBookmark2',
        inputNames: ['In_BookmarkCategoryId', 'In_ItemId'],
      }),
      expect.objectContaining({
        module: 'UBTConnect_Utils',
        action: 'ServiceAPIDeleteBookmarkByBookmarkId2',
        inputNames: ['BookmarkId'],
      }),
      expect.objectContaining({ module: 'UBTConnect_Utils', action: 'ServiceAPIDeleteBookmarkByBookmarkId2' }),
    ]);
  });

  it('a failed call raises the exception of callAction', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await expect(addC2Bookmark('Household', '42438')).rejects.toThrow('Request failed with status 500');
    await expect(deleteC2Bookmark('1004')).rejects.toThrow('Request failed with status 500');
  });
});
