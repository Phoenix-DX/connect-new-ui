import { http, HttpResponse, type RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { wireList } from '@/legacy/os/os-wire';
import { contractHandler } from '@/mocks/contract';
import { mockDelay, scenario } from '@/mocks/scenario';
import {
  emptyLegacyBookmarkItem,
  legacyBookmarksOfGroup,
  type LegacyBookmarkItem,
} from '@/shared/Connect2_MyBookmarks_MUI/mocks';
import { MyBookmarks_Group } from '@/shared/UBTConnect/lib/staticEntities';

/* Wire shapes of the contract (Connect2_MyBookmarks_IS structures, src/api/openapi.yaml), taken from the outputs of
   GetGroupSummaries. */
type GetGroupSummariesOutput = ActionOutputs<
  PathOf<'Connect2_MyBookmarks_MUI', 'ScreenBlock_MyBookmarks/DataActionGetGroupSummaries'>
>;
type GroupSummaryWire = GetGroupSummariesOutput['Bookmarks_Contacts'];
type BookmarkItemWire = GroupSummaryWire['Bookmarks']['List'][number];

/* DataActionGetGroupSummaries was never recorded (bookmarks are person data, knowledge/mock-fixtures.md; contract
   x-mock-source fictional). The answer is built from the shared collection of the mock user's legacy bookmarks
   (src/shared/Connect2_MyBookmarks_MUI/mocks.ts, CR-MyBookmarks-2; P-MUTATION: a delete in BookmarksByGroup shows
   here), seeded with the captured counts: its first 4 contacts (the second without a photo) and its 4 locations
   (dom/default.html:55-174), no entity. Whether C2 bookmarks (AddBookmark2) appear here is open (Q3): conservatively
   they do not.
   Scenarios: real; empty (no bookmark: NoBookmarks); error (Q5 A): the call fails as a network error, as the captured
   offline state aborted it (CommunicationException "Request failed with an error"); loading: never answers. */

const NULL_DATE_TIME = '1900-01-01T00:00:00';

/** A full summary row is the stored BookmarkItem; the All* lists carry only Id, ObjectId, Title, Image and
    DetailsJson.IsDeceased, the other attributes at their defaults (calls.md:173-190). */
const item = (r: LegacyBookmarkItem, full: boolean): BookmarkItemWire =>
  full
    ? { ...r }
    : {
        ...emptyLegacyBookmarkItem(),
        Id: r.Id,
        ObjectId: r.ObjectId,
        Title: r.Title,
        Image: r.Image,
        DateCreatedUtc: NULL_DATE_TIME,
        DetailsJson: { ...emptyLegacyBookmarkItem().DetailsJson, IsDeceased: r.DetailsJson.IsDeceased },
      };

/** A record with every attribute at its default (the captured AllLocations rows, calls.md:173-190). */
const defaultItem = (): BookmarkItemWire => emptyLegacyBookmarkItem();

const ofGroup = legacyBookmarksOfGroup;

/** A group summary: the most recent CountSize bookmarks and the group's total (Group "" as captured). */
const summary = (group: string, countSize: number): GroupSummaryWire => {
  const rows = ofGroup(group);
  return {
    Group: '',
    TotalCount: String(rows.length),
    Bookmarks: wireList(rows.slice(0, countSize).map((r) => item(r, true))),
  };
};

const PATH = '/api/Connect2_MyBookmarks_MUI/ScreenBlock_MyBookmarks/DataActionGetGroupSummaries';

export const handlers: RequestHandler[] = [
  /* error scenario (Q5 A): an aborted call, as in the captured offline state; other scenarios go to the next handler. */
  http.post(PATH, async () => {
    if (scenario() !== 'error') return undefined;
    await mockDelay();
    return HttpResponse.error();
  }),
  contractHandler(
    'Connect2_MyBookmarks_MUI',
    'ScreenBlock_MyBookmarks/DataActionGetGroupSummaries',
    ({ CountSize }) => {
      const countSize = CountSize ?? 4;
      const contacts = ofGroup(MyBookmarks_Group.Contacts);
      return {
        Bookmarks_Contacts: summary(MyBookmarks_Group.Contacts, countSize),
        Bookmarks_Locations: summary(MyBookmarks_Group.Locations, countSize),
        Bookmarks_CommunityBusinesses: summary(MyBookmarks_Group.Entities, countSize),
        Bookmarks_AllContacts: wireList(contacts.map((r) => item(r, false))),
        Bookmarks_AllLocations: wireList(ofGroup(MyBookmarks_Group.Locations).map(defaultItem)),
        Bookmarks_AllCommunityBusiness: wireList(ofGroup(MyBookmarks_Group.Entities).map((r) => item(r, false))),
      };
    },
  ),
];
