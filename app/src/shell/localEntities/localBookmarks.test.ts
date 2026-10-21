import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { setSignedInUser } from '../session';
import { memoryDatabase } from './database';
import { NULL_DATE_TIME } from './entities';
import {
  LEGACY_LOCAL_BOOKMARK,
  LOCAL_BOOKMARK,
  create_LocalBookmark,
  delete_LocalBookmarkByBookmarkId,
  get_LocalBookmarkByBookmarkId,
  get_LocalBookmarkByObjectId,
  getLocalBookmarkByBookmarkId,
  getLocalBookmarkByObjectId,
  getLocalBookmarksByObjectType,
  legacyDelete_LocalBookmarkByBookmarkId,
  localBookmarksSchemas,
  setLocalBookmarksDatabase,
  synchBookmarks,
  synchBookmarksC2,
  type LegacyLocalBookmark,
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
const legacy = (fields: Partial<LegacyLocalBookmark>): LegacyLocalBookmark => ({
  Id: '0',
  UserId: USER,
  BookmarkId: '0',
  ObjectType: 'Contact',
  ObjectId: '0',
  Group: 'Contacts',
  DateCreatedUtc: NULL_DATE_TIME,
  Note: '',
  ...fields,
});

describe('local bookmarks (UBTConnect_Bookmarks_MCS, Connect2_LegacyShared)', () => {
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
    expect(LEGACY_LOCAL_BOOKMARK.tableName).toBe('OSUSR_B3N_LOCALBOOKMARK');
    expect(localBookmarksSchemas().map((s) => s.keyPath)).toEqual([['ID'], ['ID'], ['KEY', 'MODULEKEY']]);
  });

  it('SynchBookmarksC2 replaces the copy; GetLocalBookmarkByObjectId finds the user row of the item only', async () => {
    await synchBookmarksC2([c2({ Id: '5', ItemId: '77', BookmarkId: '700' })]);
    await synchBookmarksC2([
      c2({ Id: '1', ItemId: '42', BookmarkId: '420' }),
      c2({ Id: '2', ItemId: '43', BookmarkId: '430', UserId: OTHER }),
    ]);
    expect((await getLocalBookmarkByObjectId('77')).Id).toBe('0');
    expect(await getLocalBookmarkByObjectId('42')).toMatchObject({ Id: '1', BookmarkId: '420' });
    expect((await getLocalBookmarkByObjectId('43')).Id).toBe('0');
    expect((await getLocalBookmarkByBookmarkId('420')).ItemId).toBe('42');
  });

  it('Create_LocalBookmark: nothing without a category, the existing row, else a new auto-number row', async () => {
    expect(await create_LocalBookmark('42', '', '420')).toBe('0');
    expect((await getLocalBookmarkByObjectId('42')).Id).toBe('0');
    const id = await create_LocalBookmark('42', 'Household', '420', '2026-10-15T10:00:00');
    expect(id).toBe('1');
    expect(await create_LocalBookmark('42', 'Household', '999')).toBe('1');
    expect(await getLocalBookmarkByObjectId('42')).toMatchObject({
      UserId: USER,
      BookmarkId: '420',
      BookmarkCategoryId: 'Household',
      CreatedAtDateUtc: '2026-10-15T10:00:00',
    });
  });

  it('Delete_LocalBookmarkByBookmarkId removes the row of that bookmark, nothing when there is none', async () => {
    await synchBookmarksC2([c2({ Id: '1', ItemId: '42', BookmarkId: '420' })]);
    await delete_LocalBookmarkByBookmarkId('999');
    expect((await getLocalBookmarkByObjectId('42')).Id).toBe('1');
    await delete_LocalBookmarkByBookmarkId('420');
    expect((await getLocalBookmarkByObjectId('42')).Id).toBe('0');
  });

  it('legacy Get_LocalBookmarkByObjectId: user, object id and type, first by Note', async () => {
    await synchBookmarks([
      legacy({ Id: '1', ObjectId: '42', Note: 'b' }),
      legacy({ Id: '2', ObjectId: '42', Note: 'A' }),
      legacy({ Id: '3', ObjectId: '42', ObjectType: 'Locality' }),
      legacy({ Id: '4', ObjectId: '43', UserId: OTHER }),
    ]);
    expect((await get_LocalBookmarkByObjectId('Contact', '42')).Id).toBe('2');
    expect((await get_LocalBookmarkByObjectId('Locality', '42')).Id).toBe('3');
    expect((await get_LocalBookmarkByObjectId('Contact', '43')).Id).toBe('0');
  });

  it('legacy GetLocalBookmarksByObjectType: the user rows of that exact type, by Note', async () => {
    await synchBookmarks([
      legacy({ Id: '1', ObjectType: 'Locality', ObjectId: '252', Note: 'b' }),
      legacy({ Id: '2', ObjectType: 'Locality', ObjectId: '253', Note: 'a' }),
      legacy({ Id: '3', ObjectType: 'locality', ObjectId: '254' }),
      legacy({ Id: '4', ObjectType: 'Locality', ObjectId: '255', UserId: OTHER }),
      legacy({ Id: '5', ObjectType: 'Contact', ObjectId: '256' }),
    ]);
    expect((await getLocalBookmarksByObjectType('Locality')).map((r) => r.ObjectId)).toEqual(['253', '252']);
    expect(await getLocalBookmarksByObjectType('News')).toEqual([]);
  });

  it('legacy Delete_LocalBookmarkByBookmarkId: the user row of that bookmark only, nothing when there is none', async () => {
    await synchBookmarks([
      legacy({ Id: '1', BookmarkId: '10', ObjectId: '42' }),
      legacy({ Id: '2', BookmarkId: '10', ObjectId: '43', UserId: OTHER }),
    ]);
    expect((await get_LocalBookmarkByBookmarkId('10')).Id).toBe('1');
    await legacyDelete_LocalBookmarkByBookmarkId('999');
    expect((await get_LocalBookmarkByObjectId('Contact', '42')).Id).toBe('1');
    await legacyDelete_LocalBookmarkByBookmarkId('10');
    expect((await get_LocalBookmarkByObjectId('Contact', '42')).Id).toBe('0');
    expect((await get_LocalBookmarkByBookmarkId('10')).Id).toBe('0');
  });
});
