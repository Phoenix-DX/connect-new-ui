import type { RequestHandler } from 'msw';
import type { components } from '@/api/schema.d';
import { contractHandler } from '@/mocks/contract';
import { collection } from '@/mocks/store';
import { MOCK_SIGNED_PHOTO_URL } from '@/components/ui/ResultItemImage/mocks';
import {
  BOOKMARKED_ELSEWHERE,
  BOOKMARKED_PLACES,
  VITALE,
  bookmarkTitle,
  householdById,
} from '@/mocks/fictional/directory';
import { MyBookmarks_Group, MyBookmarks_ObjectType } from '@/lib/ubtConnect/staticEntities';

/* The mock user's legacy bookmarks (Connect2_MyBookmarks_IS BookmarkItem rows on the server), shared by every reader and
   writer of the legacy bookmarks (CR-MyBookmarks-2, CR-BookmarksByGroup-2; P-MUTATION):
   - MyBookmarks DataActionGetGroupSummaries (screens/MyBookmarks/mocks.ts);
   - BookmarksByGroup DataActionGetAllBookmarksByGroup (screens/BookmarksByGroup/mocks.ts);
   - Connect2_Assemble_MUI AddBookmark / DeleteBookmarkByBookmarkId (addLegacyBookmark below; shared/Connect2_Assemble_MUI
     /lib/mocks.ts, CR-AssembleDetail-2);
   - the module's server actions below: GetBookmarkById / New_GetBookmarkById (CR-MyBookmarks-1, CR-BookmarksByGroup-1),
     DeleteBookmarkByBookmarkId and New_UpdateBookmarkNote;
   - the device copy the app start syncs: Sync_Info_GetMain LocalEntities_App.LocalBookmark (src/shell/mocks.ts
     mockLocalBookmarks, derived from this collection), read by Directory_EntityDetailsActions (Get_LocalBookmarkByObjectId).
   Never recorded (bookmarks are person data, knowledge/mock-fixtures.md): fictional rows with the captured counts.
   - Contacts: the 7 households of the BookmarksByGroup capture (analysis/dom/default.html:66-462), in the captured order,
     which is also the order of MyBookmarks' first 4 (the masked titles of MyBookmarks dom/default.html:83-107 have the
     word lengths of BookmarksByGroup's first 4 rows, the second without a photo in both). Object ids are the captured
     ScrollAnchor ids (data-dx-scroll-anchor-id, not compared by parity; the cast's ids). 42438 (HouseholdDetails /
     HouseholdCarousel, "Unmark") is the 4th: the Vitale household, also the bookmarked first card of Locality_Details
     (dom/default.html:302; decision A, 2026-10-16), which the device copy must hold. Titles have the
     captured word lengths ("Surname, Householder & Spouse") from the directory cast (src/mocks/fictional/directory.ts);
     rows 1-3 in narrow letters so that each fits on one line of the MyBookmarks album as the captured titles do.
     Children and "<locality>, <country>" tags have about the BookmarksByGroup captured lengths.
   - Locations: the 4 of the MyBookmarks capture (dom/default.html:140-164; 2 supper meetings, 2 localities, all with a
     photo); BookmarksByGroup's Locations list was not captured.
   - Entities: none (no entity card in the MyBookmarks capture).
   DateCreatedUtc descends in that order (MyBookmarks shows the most recent CountSize of a group). Whether C2 bookmarks
   (Connect_Bookmarks_CS, AddBookmark2) also appear here is open (MyBookmarks Q3): they do not. A reload starts again
   from the seed. Photos: the neutral placeholder (Q-W2C-1), an empty Image where TST showed the fallback. */

export type LegacyBookmarkItem = components['schemas']['Connect2_MyBookmarks_IS__BookmarkItem'];
type DetailsJson = LegacyBookmarkItem['DetailsJson'];

const NULL_DATE_TIME = '1900-01-01T00:00:00';

const details = (d: Partial<DetailsJson> = {}): DetailsJson => ({
  AreasServed: '',
  ChildrenNames: '',
  CountryCode: '',
  CountryName: '',
  HouseHolderId: '0',
  HouseholdCount: '0',
  HouseholderName: '',
  IsDeceased: false,
  IsMainHall: false,
  LocalityID: '0',
  LocalityName: '',
  MemberID: '0',
  ServiceType: '',
  ShareObjectTypeId: '',
  SubdivisionID: '0',
  SubdivisionName: '',
  ...d,
});

/** A BookmarkItem with every attribute at its default (what GetBookmarkById answers when the bookmark is gone). */
export const emptyLegacyBookmarkItem = (): LegacyBookmarkItem => ({
  Id: '0',
  Group: '',
  ObjectType: '',
  ObjectId: '',
  Title: '',
  DateCreatedUtc: NULL_DATE_TIME,
  Image: '',
  PhotoDetails: { Bucket: '', Path: '', SignedPath: '', Type: '' },
  RecordDisabled: false,
  RecordNotAvailable: false,
  Note: '',
  DetailsJson: details(),
  Type: '',
});

const row = (
  index: number,
  group: string,
  objectType: string,
  objectId: string,
  title: string,
  photo: boolean,
  d: Partial<DetailsJson>,
): LegacyBookmarkItem => ({
  ...emptyLegacyBookmarkItem(),
  Id: String(index),
  Group: group,
  ObjectType: objectType,
  ObjectId: objectId,
  Title: title,
  DateCreatedUtc: `2026-01-${String(29 - index).padStart(2, '0')}T00:00:00`,
  Image: photo ? MOCK_SIGNED_PHOTO_URL : '',
  DetailsJson: details(d),
});

const contact = (
  index: number,
  objectId: string,
  title: string,
  photo: boolean,
  children: string,
  [locality, country]: [string, string],
) =>
  row(index, MyBookmarks_Group.Contacts, MyBookmarks_ObjectType.Contact, objectId, title, photo, {
    ChildrenNames: children,
    LocalityName: locality,
    CountryName: country,
    ShareObjectTypeId: 'Household',
  });

const L = MyBookmarks_Group.Locations;
const T = MyBookmarks_ObjectType;

const B = BOOKMARKED_ELSEWHERE;
const P = BOOKMARKED_PLACES;
const place = (b: { place: readonly [string, string] }): [string, string] => [b.place[0], b.place[1]];

const seed = (): LegacyBookmarkItem[] => [
  contact(1, B.riley.id, B.riley.title, true, B.riley.children, place(B.riley)),
  // The bookmark capture's lengths (title [6,6,1,6], no children, locality [9,3,7]), without a photo.
  contact(2, B.ellis.id, B.ellis.title, false, B.ellis.children, place(B.ellis)),
  contact(3, B.fields.id, B.fields.title, true, B.fields.children, place(B.fields)),
  // The Vitale household of HouseholdDetails / HouseholdCarousel ("Unmark"), in the cast's bookmark-title form.
  contact(4, VITALE.id, bookmarkTitle(VITALE), true, VITALE.children.join(', '), [
    VITALE.localityName,
    VITALE.countryName,
  ]),
  contact(5, B.whitcombe.id, B.whitcombe.title, true, B.whitcombe.children, place(B.whitcombe)),
  contact(6, B.martinez.id, B.martinez.title, true, B.martinez.children, place(B.martinez)),
  contact(7, B.ashcroft.id, B.ashcroft.title, true, B.ashcroft.children, place(B.ashcroft)),
  row(8, L, T.Subdivision, '7001', P.mainHall, true, { HouseholdCount: '12', IsMainHall: true }),
  row(9, L, T.Subdivision, '7002', P.supperMeeting, true, { HouseholdCount: '8' }),
  row(10, L, T.Locality, '8001', P.locality1, true, {
    LocalityID: '8001',
    LocalityName: P.locality1,
    CountryName: 'Argentina',
  }),
  row(11, L, T.Locality, '8002', P.locality2, true, {
    LocalityID: '8002',
    LocalityName: P.locality2,
    CountryName: 'Argentina',
  }),
];

export const legacyBookmarksCollection = () => collection('Connect2_MyBookmarks.legacyBookmarks', seed, 'Id');

/** The rows of one group, most recent first (DateCreatedUtc descending). */
export const legacyBookmarksOfGroup = (group: string): LegacyBookmarkItem[] =>
  [...(legacyBookmarksCollection().where((r) => r.Group === group) as unknown as LegacyBookmarkItem[])].sort((a, b) =>
    b.DateCreatedUtc.localeCompare(a.DateCreatedUtc),
  );

/** Every row, most recent first. */
export const allLegacyBookmarks = (): LegacyBookmarkItem[] =>
  [...(legacyBookmarksCollection().all() as unknown as LegacyBookmarkItem[])].sort((a, b) =>
    b.DateCreatedUtc.localeCompare(a.DateCreatedUtc),
  );

/** A server DateTime in UTC ("yyyy-MM-ddTHH:mm:ss"). */
const nowUtc = () => new Date().toISOString().slice(0, 19);

/** A new legacy bookmark (Connect2_Assemble_MUI AddBookmark, CR-AssembleDetail-2; P-MUTATION): the row the server would
    add, in the seed's form (a Contacts row of a cast household gets its bookmark title, children, "<locality>,
    <country>" tag, the placeholder photo and ShareObjectTypeId Household, as `contact` above), DateCreatedUtc now (the
    most recent of its group). An object outside the cast keeps the default details and an empty title. */
export function addLegacyBookmark(
  group: string,
  objectType: string,
  objectId: string,
  note: string,
): LegacyBookmarkItem {
  const household = objectType === T.Contact ? householdById(objectId) : undefined;
  const added = legacyBookmarksCollection().upsert({
    ...emptyLegacyBookmarkItem(),
    Id: '',
    Group: group,
    ObjectType: objectType,
    ObjectId: objectId,
    Title: household ? bookmarkTitle(household) : '',
    DateCreatedUtc: nowUtc(),
    Image: household ? MOCK_SIGNED_PHOTO_URL : '',
    Note: note,
    DetailsJson: household
      ? details({
          ChildrenNames: household.children.join(', '),
          LocalityName: household.localityName,
          CountryName: household.countryName,
          ShareObjectTypeId: 'Household',
        })
      : details(),
  }) as unknown as LegacyBookmarkItem;
  return { ...added };
}

/** GetBookmarkById / New_GetBookmarkById (fictional; same inputs and outputs, Connect2_MyBookmarks_MUI.controller.js
    ServerAction.GetBookmarkById / New_GetBookmarkById): the row, IsBookmarkFound True; an empty record and False when it
    is gone (deleted from BookmarksByGroup, P-MUTATION). */
const getBookmarkById = ({ BookmarkId }: { BookmarkId: string }) => {
  const found = legacyBookmarksCollection().get(BookmarkId) as LegacyBookmarkItem | undefined;
  return found
    ? { GetBookmarkByIdResponse: { ...found }, IsBookmarkFound: true }
    : { GetBookmarkByIdResponse: emptyLegacyBookmarkItem(), IsBookmarkFound: false };
};

export const handlers: RequestHandler[] = [
  contractHandler('Connect2_MyBookmarks_MUI', 'ActionGetBookmarkById', getBookmarkById),
  contractHandler('Connect2_MyBookmarks_MUI', 'ActionNew_GetBookmarkById', getBookmarkById),
  /** DeleteBookmarkByBookmarkId (fictional, a write): removes the row; Success tells whether it existed. */
  contractHandler('Connect2_MyBookmarks_MUI', 'ActionDeleteBookmarkByBookmarkId', ({ BookmarkId }) => {
    const bookmarks = legacyBookmarksCollection();
    const found = bookmarks.get(BookmarkId) !== undefined;
    bookmarks.remove(BookmarkId);
    return { Success: found };
  }),
  /** New_UpdateBookmarkNote (fictional, a write): sets the row's Note. */
  contractHandler('Connect2_MyBookmarks_MUI', 'ActionNew_UpdateBookmarkNote', ({ BookmarkId, Note }) => {
    const bookmarks = legacyBookmarksCollection();
    const found = bookmarks.get(BookmarkId) !== undefined;
    if (found) bookmarks.upsert({ Id: BookmarkId, Note });
    return { Success: found };
  }),
];
