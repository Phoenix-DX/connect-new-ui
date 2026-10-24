import type {
  BookmarkGroupSummaries,
  BookmarkGroupSummary,
  BookmarkSummariesVariables,
  GroupSummaryBookmark,
} from '@/api/bookmark';
import { MyBookmarks_ObjectType } from '@/lib/ubtConnect/staticEntities';
import { textToLongInteger } from '@/lib/ubtConnectUtils/actions';

/** The variables of the block ScreenBlock_MyBookmarks, the reducer and the client actions. Pure; the flows are in
    useMyBookmarks.
    @origin Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks */

/** The local variables of the block. DataActionGetGroupSummaries sends every one of them. */
export type MyBookmarksState = BookmarkSummariesVariables;

/** An assignment of one or more variables. */
export type MyBookmarksPatch = Partial<MyBookmarksState>;

const T = MyBookmarks_ObjectType;

/** An empty group summary (GetGroupSummariesResponse at its defaults). */
export const emptyGroupSummary = (): BookmarkGroupSummary => ({ group: '', totalCount: '0', bookmarks: [] });

/** The variable defaults (the block has no OnInitialize assignment on a new visit). */
export const INITIAL_MY_BOOKMARKS_STATE: MyBookmarksState = {
  hasBookmarks: false,
  isFetchingBookmarks: false,
  countSize: 4,
  contacts: emptyGroupSummary(),
  locations: emptyGroupSummary(),
  communityBusinesses: emptyGroupSummary(),
  allContacts: [],
  allLocations: [],
  allCommunityBusiness: [],
  isNavigationFromHistory: false,
  hasNetworkError: false,
};

/** The variables after an assignment. */
export const myBookmarksReducer = (state: MyBookmarksState, patch: MyBookmarksPatch): MyBookmarksState => ({
  ...state,
  ...patch,
});

/** OnInitialize of a view that the view cache restores: IsNavigationFromHistory True, and the other variables come
    back with the view (P-BACK). A view that was left before its first assignment saved only the defaults: it starts
    from them, as the port before the refactor did (it kept no variables then). */
export const restoreMyBookmarks = (saved: MyBookmarksState): MyBookmarksState =>
  saved === INITIAL_MY_BOOKMARKS_STATE ? saved : { ...saved, isNavigationFromHistory: true };

/** OnAfterFetch_GetGroupSummaries: the summaries, IsFetchingBookmarks False, HasBookmarks when a group has a bookmark,
    HasNetworkError False. */
export const groupSummariesFetched = (out: BookmarkGroupSummaries): MyBookmarksPatch => ({
  ...out,
  isFetchingBookmarks: false,
  hasBookmarks:
    out.contacts.bookmarks.length > 0 ||
    out.locations.bookmarks.length > 0 ||
    out.communityBusinesses.bookmarks.length > 0,
  hasNetworkError: false,
});

/** ClearLocalLists: the three summaries and the three full lists are empty. */
export const clearedLocalLists = (): MyBookmarksPatch => ({
  contacts: emptyGroupSummary(),
  locations: emptyGroupSummary(),
  communityBusinesses: emptyGroupSummary(),
  allContacts: [],
  allLocations: [],
  allCommunityBusiness: [],
});

/** IsRequestFailedExceptionMessage of Connect2_LegacyShared. */
export const isRequestFailedExceptionMessage = (message: string): boolean => message === 'Request failed with an error';

/** IsTimeoutExceptionMessage of Connect2_LegacyShared. */
export const isTimeoutExceptionMessage = (message: string): boolean =>
  message === 'The operation has timed out' || message === 'The connection has timed out';

/** The text of SendBookmarkedHiddenFeedbackMessage(ObjectType) of Connect2_MyBookmarks_MUI (an info message). */
export function bookmarkedHiddenFeedbackMessage(objectType: string): string {
  const what =
    objectType === T.Contact
      ? ' household '
      : objectType === T.Locality
        ? ' locality '
        : objectType === T.Subdivision
          ? ' Supper Meeting '
          : objectType === T.CampusCo || objectType === T.OneSchoolGlobal
            ? ' entity '
            : ' ';
  return 'This' + what + 'is no longer available.';
}

/** InitialTab of NavigateTo_Locality: 3 for OneSchool Global, 4 for Campus&Co, else 0. The Locality branch only calls
    it with a Locality bookmark, so it is always 0 there, as compiled. */
export const initialTab = (objectType: string): number =>
  objectType === T.OneSchoolGlobal ? 3 : objectType === T.CampusCo ? 4 : 0;

/** HouseholdCarouselPreloadedItem of the Contact branch (Set Preload Info): Id, Name, IsDeceased and Image. */
export const householdPreloadItem = (c: GroupSummaryBookmark) => ({
  Id: textToLongInteger(c.objectId),
  Name: c.title,
  IsDeceased: c.isDeceased,
  Image: c.image,
});

/** CommunityBusinessType2 (Connect2_MyBookmarks_MUI): TST values (migration/knowledge/static-entities-tst.json
    `Connect2_MyBookmarks_MUI.communityBusinessType2`), the CommunityBusinessTypeId of the carousel preload items. */
const CommunityBusinessType2 = {
  CampusCo: 'Campus&Co',
  Commercial: 'commercial',
  OneSchoolGlobal: 'OneSchool Global',
} as const;

/** CommunityBusinessCarouselPreloadedItem of the Campus&Co and OneSchool Global branch (Set Preload Info). */
export const communityBusinessPreloadItem = (c: GroupSummaryBookmark) => ({
  Id: textToLongInteger(c.objectId),
  Name: c.title,
  SignedURL: c.image,
  CommunityBusinessTypeId:
    c.objectType === T.CampusCo
      ? CommunityBusinessType2.CampusCo
      : c.objectType === T.OneSchoolGlobal
        ? CommunityBusinessType2.OneSchoolGlobal
        : '',
});
