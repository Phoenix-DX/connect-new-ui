import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { setSignedInUser } from '@/platform/session/session';
import { memoryDatabase } from './database';
import { NULL_DATE_TIME } from './entities';
import {
  LOCAL_BOOKMARK,
  create_LocalBookmark,
  delete_LocalBookmarkByBookmarkId,
  getLocalBookmarkByBookmarkId,
  getLocalBookmarkByObjectId,
  getLocalBookmarksByObjectType,
  localBookmarksSchemas,
  setLocalBookmarksDatabase,
  synchBookmarksC2,
  type LocalBookmark,
} from './localBookmarks';

const USER = 990001;
const OTHER = 990002;
const c2 = (fields: Partial<LocalBookmark>): LocalBookmark => ({
  Id: '0',
  UserId: USER,
  BookmarkId: '0',
  BookmarkCategoryId: 'Household',
  ItemId: '0',
  CreatedAtDateUtc: NULL_DATE_TIME,
  ...fields,
});
describe('local bookmarks (UBTConnect_Bookmarks_MCS)', () => {
  beforeEach(() => {
    setLocalBookmarksDatabase(memoryDatabase(localBookmarksSchemas()));
    setSignedInUser(String(USER));
  });
  afterEach(() => {
    setLocalBookmarksDatabase(null);
    setSignedInUser(null);
  });

  it('keeps the entity tables and keys of the compiled entities', () => {
    expect(LOCAL_BOOKMARK.tableName).toBe('OSUSR_HCR_LOCALBOOKMARK');
    expect(localBookmarksSchemas().map((s) => s.keyPath)).toEqual([['ID'], ['KEY', 'MODULEKEY']]);
  });

  it('SynchBookmarksC2 replaces the copy; GetLocalBookmarkByObjectId finds the user row of the item and category', async () => {
    await synchBookmarksC2([c2({ Id: '5', ItemId: '77', BookmarkId: '700' })]);
    await synchBookmarksC2([
      c2({ Id: '1', ItemId: '42', BookmarkId: '420' }),
      c2({ Id: '2', ItemId: '43', BookmarkId: '430', UserId: OTHER }),
    ]);
    expect((await getLocalBookmarkByObjectId('77', 'Household')).Id).toBe('0');
    expect(await getLocalBookmarkByObjectId('42', 'Household')).toMatchObject({ Id: '1', BookmarkId: '420' });
    expect((await getLocalBookmarkByObjectId('42', 'Member')).Id).toBe('0');
    expect((await getLocalBookmarkByObjectId('43', 'Household')).Id).toBe('0');
    expect((await getLocalBookmarkByBookmarkId('420', 'Household')).ItemId).toBe('42');
    expect((await getLocalBookmarkByBookmarkId('420', 'Member')).Id).toBe('0');
  });

  it('Create_LocalBookmark: nothing without a category, the existing row, else a new auto-number row', async () => {
    expect(await create_LocalBookmark('42', '', '420')).toBe('0');
    expect((await getLocalBookmarkByObjectId('42', '')).Id).toBe('0');
    const id = await create_LocalBookmark('42', 'Household', '420', '2026-10-15T10:00:00');
    expect(id).toBe('1');
    expect(await create_LocalBookmark('42', 'Household', '999')).toBe('1');
    expect(await getLocalBookmarkByObjectId('42', 'Household')).toMatchObject({
      UserId: USER,
      BookmarkId: '420',
      BookmarkCategoryId: 'Household',
      CreatedAtDateUtc: '2026-10-15T10:00:00',
    });
  });

  it('Delete_LocalBookmarkByBookmarkId removes the row of that bookmark and category, nothing when there is none', async () => {
    await synchBookmarksC2([c2({ Id: '1', ItemId: '42', BookmarkId: '420' })]);
    await delete_LocalBookmarkByBookmarkId('999', 'Household');
    await delete_LocalBookmarkByBookmarkId('420', 'Member');
    expect((await getLocalBookmarkByObjectId('42', 'Household')).Id).toBe('1');
    await delete_LocalBookmarkByBookmarkId('420', 'Household');
    expect((await getLocalBookmarkByObjectId('42', 'Household')).Id).toBe('0');
  });

  it('the same ItemId under two categories: read, create and delete touch only their own category row', async () => {
    await synchBookmarksC2([c2({ Id: '1', ItemId: '42', BookmarkId: '420', BookmarkCategoryId: 'Household' })]);
    expect(await create_LocalBookmark('42', 'Member', '421')).toBe('2');
    expect(await getLocalBookmarkByObjectId('42', 'Household')).toMatchObject({ Id: '1', BookmarkId: '420' });
    expect(await getLocalBookmarkByObjectId('42', 'Member')).toMatchObject({ Id: '2', BookmarkId: '421' });
    await delete_LocalBookmarkByBookmarkId('421', 'Member');
    expect((await getLocalBookmarkByObjectId('42', 'Member')).Id).toBe('0');
    expect((await getLocalBookmarkByObjectId('42', 'Household')).Id).toBe('1');
  });

  it('GetLocalBookmarksByObjectType: the user rows of that exact category, in store order', async () => {
    await synchBookmarksC2([
      c2({ Id: '1', ItemId: '42' }),
      c2({ Id: '2', ItemId: '43', BookmarkCategoryId: 'Member' }),
      c2({ Id: '3', ItemId: '44', BookmarkCategoryId: 'household' }),
      c2({ Id: '4', ItemId: '45', UserId: OTHER }),
      c2({ Id: '5', ItemId: '46' }),
    ]);
    expect((await getLocalBookmarksByObjectType('Household')).map((r) => r.Id)).toEqual(['1', '5']);
    expect(await getLocalBookmarksByObjectType('Feed Item')).toEqual([]);
  });
});
