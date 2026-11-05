import { describe, expect, it } from 'vitest';
import { toBookmarkDeleted, toC2BookmarkAdded } from './mapper';

describe('bookmark mapper', () => {
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
