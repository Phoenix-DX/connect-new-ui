import { afterEach, describe, expect, it } from 'vitest';
import { legacyBookmarksCollection } from '@/mocks/modules/Connect2_MyBookmarks_MUI/mocks';
import { Connect_Entity, MyBookmarks_Group, MyBookmarks_ObjectType } from '@/lib/ubtConnect/staticEntities';
import { contactChannels, seedCapturedBookmark } from './mocks';

/* Scenario `captured` (OneSchoolGlobalCarousel Q4 (a), user 2026-10-29): the carousel capture of school 1430
   (migration/screens/OneSchoolGlobalCarousel/analysis/dom/default.html) shows no Call and no Email, and "Unmark". */
const school1430 = () =>
  legacyBookmarksCollection().where(
    (r) => r.ObjectType === MyBookmarks_ObjectType.OneSchoolGlobal && r.ObjectId === '1430',
  );

afterEach(() => {
  sessionStorage.clear();
  for (const r of school1430()) legacyBookmarksCollection().remove(String(r.Id));
});

describe('EntityDetailsActions mocks, scenario captured', () => {
  it('school 1430 answers no phone, mobile or email; other schools and scenarios keep the fictional channels', () => {
    expect(contactChannels(Connect_Entity.OneSchoolGlobal, '1430').Email).not.toBe('');
    sessionStorage.setItem('mock:mock', 'captured');
    expect(contactChannels(Connect_Entity.OneSchoolGlobal, '1430')).toEqual({
      Phone: '',
      MobilePhone: '',
      HomePhone: '',
      WorkPhone: '',
      Email: '',
    });
    expect(contactChannels(Connect_Entity.OneSchoolGlobal, '1431').Email).not.toBe('');
  });

  it('seeds one legacy bookmark of school 1430 (Entities) for the device copy, once, only in that scenario', () => {
    seedCapturedBookmark();
    expect(school1430()).toHaveLength(0);
    sessionStorage.setItem('mock:mock', 'captured');
    seedCapturedBookmark();
    seedCapturedBookmark();
    expect(school1430()).toEqual([expect.objectContaining({ Group: MyBookmarks_Group.Entities, ObjectId: '1430' })]);
  });
});
