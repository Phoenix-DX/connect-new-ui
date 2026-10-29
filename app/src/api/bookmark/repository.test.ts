import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { legacyBookmarksCollection } from '@/mocks/modules/Connect2_MyBookmarks_MUI/mocks';
import { bookmarksCollection } from '@/containers/EntityDetailsActions/mocks';
import { addAssembleBookmark, addC2Bookmark, deleteAssembleBookmark, deleteC2Bookmark } from './repository';

/* The MSW mocks of the test setup answer the fictional legacy bookmarks of the mock user
   (mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts) and the fictional C2 bookmarks (none at start;
   containers/EntityDetailsActions/mocks.ts). The writes change these collections. */

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('bookmark repository', () => {
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
    await expect(addAssembleBookmark('Locality', '8003', 'Locations', '')).rejects.toThrow(
      'Request failed with status 500',
    );
    await expect(deleteC2Bookmark('1004')).rejects.toThrow('Request failed with status 500');
  });
});
