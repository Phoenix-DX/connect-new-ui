import { beforeEach, expect, test, vi } from 'vitest';
import { mockLocalBookmarks } from '@/platform/bootstrap/mocks';
import { freshPage } from '@/test/testSupport';
import { MyBookmarks_Group } from '@/lib/ubtConnect/staticEntities';
import { legacyBookmarksOfGroup } from './mocks';

beforeEach(() => {
  freshPage();
  window.history.replaceState(null, '', '/');
  vi.spyOn(console, 'warn').mockImplementation(() => undefined);
});

test('one legacy collection with the captured counts and the households the finished routes show bookmarked', () => {
  const contacts = legacyBookmarksOfGroup(MyBookmarks_Group.Contacts);
  expect(contacts).toHaveLength(7); // BookmarksByGroup capture
  expect(legacyBookmarksOfGroup(MyBookmarks_Group.Locations)).toHaveLength(4); // MyBookmarks capture
  expect(legacyBookmarksOfGroup(MyBookmarks_Group.Entities)).toHaveLength(0);
  expect(contacts.slice(0, 4).map((c) => c.Image === '')).toEqual([false, true, false, false]); // MyBookmarks capture
  const local = mockLocalBookmarks().map((b) => b.ObjectId);
  expect(local).toEqual(expect.arrayContaining(['42438', '35419'])); // 42438: HouseholdDetails and Locality_Details card 1
  expect(local).not.toContain('91001');
  expect(local).not.toEqual(expect.arrayContaining(['1210'])); // SupperMeeting_Details capture: "Bookmark"
});
