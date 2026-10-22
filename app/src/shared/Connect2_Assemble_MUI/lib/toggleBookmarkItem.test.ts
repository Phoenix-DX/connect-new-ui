import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { VITALE, householdsOfSupperMeeting } from '@/mocks/fictional/directory';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import {
  get_LocalBookmarkByObjectId,
  localBookmarksSchemas,
  memoryDatabase,
  setLocalBookmarksDatabase,
  synchBookmarks,
} from '@/platform/storage/localEntities';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import {
  getCachedMyBookmarks,
  getCacheableSubdivision_V2,
  putCachedMyBookmarks,
} from '@/shared/Connect2_LegacyShared/lib/actions';
import { legacyBookmarksCollection } from '@/shared/Connect2_MyBookmarks_MUI/mocks';
import { toggleBookmarkItem } from './actions';
import { MyBookmarks_Group, MyBookmarks_ObjectType } from './staticEntities';

const calls = (action: string) => (window.__osCalls ?? []).filter((c) => c.action === action);
const { Contact } = MyBookmarks_ObjectType;
const { Contacts } = MyBookmarks_Group;

describe('ToggleBookmarkItem (CR-AssembleDetail-2)', () => {
  beforeEach(() => {
    freshPage();
    resetFeedbackMessages();
    setSignedInUser(MOCK_USER_ID);
    setLocalBookmarksDatabase(memoryDatabase(localBookmarksSchemas()));
  });
  afterEach(() => {
    setLocalBookmarksDatabase(null);
  });

  it('adds: AddBookmark, the legacy local copy, the cached group (on a hit) and the success message', async () => {
    const household = householdsOfSupperMeeting('9202')[0];
    if (!household) throw new Error('cast');
    putCachedMyBookmarks(Contacts, []);
    const out = await toggleBookmarkItem(false, Contact, household.id, Contacts, 'Neighbours');
    expect(calls('ActionAddBookmark')[0]?.inputNames).toEqual(['Group', 'Note', 'ObjectId', 'ObjectType']);
    const row = legacyBookmarksCollection().get(out.Out_CreatedBookmarkId);
    expect(row).toMatchObject({ ObjectType: Contact, ObjectId: household.id, Group: Contacts, Note: 'Neighbours' });
    const local = await get_LocalBookmarkByObjectId(Contact, household.id);
    expect(local).toMatchObject({
      Id: out.Out_LocalBookmarkId,
      BookmarkId: out.Out_CreatedBookmarkId,
      Note: 'Neighbours',
    });
    expect(getCachedMyBookmarks(Contacts).bookmarks.map((b) => b.ObjectId)).toEqual([household.id]);
    expect(getFeedbackMessage()?.message).toBe('Added to your Bookmarks');
  });

  it('removes: DeleteBookmarkByBookmarkId of the local copy, then the local row and the message', async () => {
    const added = await toggleBookmarkItem(false, Contact, VITALE.id, Contacts, '');
    const out = await toggleBookmarkItem(true, Contact, VITALE.id, Contacts, '');
    expect(out).toEqual({ Out_LocalBookmarkId: '0', Out_CreatedBookmarkId: '0' });
    expect(legacyBookmarksCollection().get(added.Out_CreatedBookmarkId)).toBeUndefined();
    expect((await get_LocalBookmarkByObjectId(Contact, VITALE.id)).Id).toBe('0');
    expect(getFeedbackMessage()?.message).toBe('Removed from your Bookmarks');
  });

  it('removes without a local copy: BookmarkId 0, the server answers no Success, the info message', async () => {
    await synchBookmarks([]);
    await toggleBookmarkItem(true, Contact, '91010', Contacts, '');
    expect(calls('ActionDeleteBookmarkByBookmarkId')).toHaveLength(1);
    expect(getFeedbackMessage()).toMatchObject({
      message: 'Bookmark could not be removed. Please try again later.',
      type: 0,
    });
  });
});

describe('GetCacheableSubdivision_V2 (CR-AssembleDetail-1)', () => {
  beforeEach(() => {
    freshPage();
  });

  it('SubdivisionId 0 raises ObjectNotFound', async () => {
    await expect(getCacheableSubdivision_V2('0')).rejects.toThrow('Invalid subdivision id');
  });

  it('one GetBulkSubdivisions_V2 per miss, a waiting key shares it, a hit answers from the cache', async () => {
    const [a, b] = await Promise.all([getCacheableSubdivision_V2('1210'), getCacheableSubdivision_V2('1210')]);
    expect(calls('ActionGetBulkSubdivisions_V2')).toHaveLength(1);
    expect(a).toBe(b);
    expect(a?.Subdivision.Locality).toMatchObject({ Id: '252', Country: { Code: 'AR' } });
    expect(a?.HouseholdListResponse.List.map((h) => h.Id)).toEqual(householdsOfSupperMeeting('1210').map((h) => h.id));
    await getCacheableSubdivision_V2('1210');
    expect(calls('ActionGetBulkSubdivisions_V2')).toHaveLength(1);
  });

  it('a key the server does not answer gives the record at its default (undefined)', async () => {
    expect(await getCacheableSubdivision_V2('424242')).toBeUndefined();
  });
});
