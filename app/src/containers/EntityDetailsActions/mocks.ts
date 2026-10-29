import type { RequestHandler } from 'msw';
import { wireList } from '@/lib/os-wire';
import { contractHandler } from '@/mocks/contract';
import {
  LOCALITY,
  SCHOOLS,
  VITALE,
  exampleEmail,
  householdById,
  householdName,
  type CastHousehold,
} from '@/mocks/fictional/directory';
import { scenario } from '@/mocks/scenario';
import { collection } from '@/mocks/store';
import { sampleHouseholds } from '@/containers/HouseholdDetails/mockData';
import { notesCollection } from '@/containers/NoteListActions/mocks';
import { BookmarkCategory, Connect_Entity } from '@/lib/ubtConnect/staticEntities';

/* The C2 bookmark writes of UBTConnect ToggleBookmarkItem_C2 (UBTConnect.controller.js:17105-17280, copy in
   migration/screens/BookmarksByGroup/analysis/sources/raw/), called by this block's Handle_Bookmark: AddBookmark2
   (:18251-18286) and DeleteBookmarkByBookmarkId2 (:18312-18336). Never recorded (x-mock-source fictional): they change
   the in-memory bookmarks collection of the mock user (P-MUTATION), never the real server. A row is a
   Connect_Bookmarks_CS UI_Bookmark_Added (Id, BookmarkCategoryId, ItemId, DateCreatedUtc); the device keeps its copy in
   the local entity UBTConnect_Bookmarks_MCS.LocalBookmark (src/shell/localEntities/localBookmarks.ts, BookmarkId = the
   row's Id). The mock user has no C2 bookmarks at start (empty seed), except school 1430 in scenario `captured`
   (seedCapturedBookmark, below). The Sync_Info_GetMain mock sends this collection as LocalBookmarksC2 to
   SynchBookmarksC2 (platform/bootstrap/mocks.ts, UC:1135-1143), and a reload starts again from that seed. */
export type BookmarkRow = { Id: string; BookmarkCategoryId: string; ItemId: string; DateCreatedUtc: string };
export const bookmarksCollection = () => collection('Connect_Bookmarks_CS.bookmarks', () => [], 'Id');

/** A server DateTime in UTC ("yyyy-MM-ddTHH:mm:ss"). */
const nowUtc = () => new Date().toISOString().slice(0, 19);

/** AddBookmark2 (fictional): always adds a row and answers Success with it, even with an empty In_BookmarkCategoryId
    (what the block sends while C2NewBookmarks is off, known original bug B4, app/docs/known-original-bugs.md). */
const addBookmark2 = contractHandler('UBTConnect', 'ServiceAPIAddBookmark2', ({ In_BookmarkCategoryId, In_ItemId }) => {
  const row = bookmarksCollection().upsert({
    Id: '',
    BookmarkCategoryId: In_BookmarkCategoryId,
    ItemId: In_ItemId,
    DateCreatedUtc: nowUtc(),
  }) as BookmarkRow;
  return { Success: true, Bookmark_Added: { ...row } };
});

/** DeleteBookmarkByBookmarkId2 (fictional): removes the row; Success and WasFound (an output of the live TST action,
    contract regeneration of I10-6) tell whether it existed (as the notes delete mock,
    UBTConnect_Utils/NoteListActions/mocks.ts). */
const deleteBookmarkByBookmarkId2 = contractHandler(
  'UBTConnect',
  'ServiceAPIDeleteBookmarkByBookmarkId2',
  ({ BookmarkId }) => {
    const bookmarks = bookmarksCollection();
    const wasFound = bookmarks.get(BookmarkId) !== undefined;
    bookmarks.remove(BookmarkId);
    return { Success: wasFound, WasFound: wasFound };
  },
);

/** Entity types whose captured actions menu has no Call and no Email, so FetchContactDetails answered no phone, mobile
    or email (HasCall / HasEmail False, Directory_EntityDetailsActions.tsx OnAfterFetch): Household (HouseholdDetails
    dom/default.html, Unmark | Notes | Gift | Share; CR-HouseholdDetails-2) and Supper Meetings (SupperMeeting_Details
    dom/default.html, Bookmark | Notes | Share; CR-SupperMeeting_Details-1). */
const ENTITY_TYPES_WITHOUT_CONTACT: readonly string[] = [
  Connect_Entity.Household,
  Connect_Entity.SupperMeetings_aka_Subdivisions,
];

/** Entities whose captured actions menu showed only one of Call and Email, registered by the mocks that build them
    (HouseholdDetails_Block mockData `contactOnly`: CR-HouseholdCarousel-2, CR-Profile-1). HasCall = any phone, HasEmail
    = mobile or email (Directory_EntityDetailsActions.tsx OnAfterFetch), so Email only = no phone and an email, Call
    only = a home phone, no mobile and no email. */
const contactOnly = new Map<string, 'Call' | 'Email'>();
const entityKey = (type: string, id: string) => `${type}:${id}`;

/** Marks an entity whose TST actions menu had only Call or only Email: its contact details answer that channel. */
export function markContactOnly(entityType: string, entityId: string, only: 'Call' | 'Email'): void {
  contactOnly.set(entityKey(entityType, entityId), only);
}

/* Scenario `captured` (OneSchoolGlobalCarousel Q4 (a), user 2026-10-29; parity of the carousel's default state runs
   with it, migration/capture-plan.json): the capture of school 1430 (OneSchoolGlobalCarousel analysis/dom/default.html)
   shows the actions menu with no Call and no Email (FetchContactDetails answered no phone, mobile or email) and
   "Unmark" and the bookmarked card (the device's C2 LocalBookmark held the school: GetLocalBookmarkByObjectId_C2, the
   only bookmark store of the block on TST since the code of 2026-10-27; drift wave H-Q2 (a), user 2026-10-29). Only
   that school and that scenario; every other scenario keeps the fictional channels and no entity bookmark. */
const CAPTURED_SCHOOL_ID = '1430';
const isCapturedSchool = (entityType: string, entityId: string) =>
  scenario() === 'captured' && entityType === Connect_Entity.OneSchoolGlobal && entityId === CAPTURED_SCHOOL_ID;

/** Scenario `captured`: adds the C2 bookmark of school 1430 (BookmarkCategory.OneSchoolGlobal, the category that
    GetBookmarkCategoryId_ByEntityTypeId gives the OneSchool Global entity type; a constant, so that the mocks load no
    value of lib/ubtConnect/actions before the tests' vi.mock calls) to the mock user's C2 bookmarks, once. The app start syncs that list to the
    device copy (Sync_Info_GetMain LocalBookmarksC2, and the `unlocked` test session), which the block reads. Called
    when the mocks load, before the app starts. */
export function seedCapturedBookmark(): void {
  if (scenario() !== 'captured') return;
  const categoryId = BookmarkCategory.OneSchoolGlobal;
  const held = bookmarksCollection().where(
    (r) => r.ItemId === CAPTURED_SCHOOL_ID && r.BookmarkCategoryId === categoryId,
  );
  if (held.length === 0)
    bookmarksCollection().upsert({
      Id: '',
      BookmarkCategoryId: categoryId,
      ItemId: CAPTURED_SCHOOL_ID,
      DateCreatedUtc: '2026-10-21T09:14:52',
    });
}
seedCapturedBookmark();

/** Who an entity is in the directory cast (src/mocks/fictional/directory.ts): a school or locality of locality 252,
    a household by id, a member by the member ids of the HouseholdDetails_Block mocks, else the Vitale householder.
    `first` / `surname` make the example.com email. */
function castContact(entityType: string, entityId: string) {
  const place = (h: CastHousehold) => ({
    localityId: h.localityId,
    localityName: h.localityName,
    countryName: h.countryName,
  });
  const locality = { localityId: LOCALITY.id, localityName: LOCALITY.name, countryName: LOCALITY.country };
  if (entityType === Connect_Entity.OneSchoolGlobal) {
    const school = SCHOOLS.find((s) => s.id === entityId) ?? SCHOOLS[0];
    return { name: school.name, first: 'office', surname: school.name.replace(/ /g, ''), ...locality };
  }
  if (entityType === Connect_Entity.Locality)
    return { name: LOCALITY.name, first: 'office', surname: 'bahiablanca', ...locality };
  const household = householdById(entityId);
  if (household)
    return {
      name: householdName(household),
      first: household.householder,
      surname: household.surname,
      ...place(household),
    };
  for (const [, sample] of Object.entries(sampleHouseholds)) {
    if (!sample) continue;
    const index = Number(entityId) - sample.firstMemberId;
    const member = sample.cast.members[index];
    if (member && index >= 0)
      return {
        name: `${member.first} ${sample.cast.surname}`,
        first: member.first,
        surname: sample.cast.surname,
        ...place(sample.cast),
      };
  }
  return {
    name: `${VITALE.householder} ${VITALE.surname}`,
    first: VITALE.householder,
    surname: VITALE.surname,
    ...place(VITALE),
  };
}

/** The fictional phone numbers (555 range) and email (example.com) of an entity (all empty for the types above and
    for the captured school of scenario `captured`; one channel for `markContactOnly`). */
export function contactChannels(entityType: string, entityId: string) {
  if (ENTITY_TYPES_WITHOUT_CONTACT.includes(entityType) || isCapturedSchool(entityType, entityId))
    return { Phone: '', MobilePhone: '', HomePhone: '', WorkPhone: '', Email: '' };
  const { first, surname } = castContact(entityType, entityId);
  const email = exampleEmail(first, surname);
  const line = String(100 + (Number(entityId) % 900)).padStart(4, '0');
  const only = contactOnly.get(entityKey(entityType, entityId));
  if (only === 'Email') return { Phone: '', MobilePhone: '', HomePhone: '', WorkPhone: '', Email: email };
  if (only === 'Call')
    return { Phone: '', MobilePhone: '', HomePhone: `+54 291 555 ${line}`, WorkPhone: '', Email: '' };
  return {
    Phone: '',
    MobilePhone: `+54 9 291 555 ${line}`,
    HomePhone: `+54 291 555 ${line}`,
    WorkPhone: '',
    Email: email,
  };
}

/* Both data actions were never recorded (x-mock-source fictional). FetchContactDetails answers the entity's contact
   details from the directory cast (no real name or number; contact channels per entity type, above); FetchNotes lists the notes of the in-memory notes collection for the item and category
   (the collection NotesSheet / NoteListActions write to, P-MUTATION). */
export const handlers: RequestHandler[] = [
  contractHandler(
    'UBTConnect',
    'Directory_EntityDetailsActions/DataActionFetchContactDetails',
    ({ EntityId, EntityType }) => {
      const contact = castContact(EntityType ?? '', EntityId ?? '0');
      const { name } = contact;
      return {
        ContactPopupData: {
          ImageURL: '',
          EntityTypeId: EntityType ?? '',
          EntityId: EntityId ?? '0',
          IsAvatarImage: true,
          ActionName: '',
          Name: name,
          Locality: contact.localityName,
          TimezoneName: '',
          TimezoneOffset: 0,
          ShowPopup: false,
          DisplayContactNumber: '',
          IsFetchingTimezone: false,
          IsLoading: false,
          ShowTimezone: false,
          ShowImage: true,
          CountryName: contact.countryName,
          TitleTerminator: '',
        },
        ...contactChannels(EntityType ?? '', EntityId ?? '0'),
        CountryName: contact.countryName,
        LocalityId: contact.localityId,
        LocalityName: contact.localityName,
        EntitySubtitle: `${contact.localityName}, ${contact.countryName}`,
        EntityName: name,
      };
    },
  ),
  contractHandler(
    'UBTConnect',
    'Directory_EntityDetailsActions/DataActionFetchNotes',
    ({ EntityId, NoteCategoryId }) => {
      const rows = notesCollection()
        .all()
        .filter((n) => String(n.ItemId) === EntityId && n.NoteCategoryId === NoteCategoryId);
      const items = rows.map((n) => ({
        Id: String(n.Id),
        Note: String(n.Note),
        DateCreatedUtc: String(n.DateCreatedUtc),
        DateEditedUtc: String(n.DateEditedUtc),
      }));
      return { Notes: { Total: rows.length, Note_Item_List: wireList(items) } };
    },
  ),
  addBookmark2,
  deleteBookmarkByBookmarkId2,
];
