import type { Bookmark, BookmarkGroupList, BookmarkGroupListCallInputs } from '@/api/bookmark';
import type { UI_ShareableObject_Generic } from '@/components/share/ShareableObject/types';
import type { BookmarkNote } from '@/pages/BookmarksByGroup/types';

/** The variables of the block ScreenBlock_BookmarkGroup, the reducer and the pure helpers. The flows are in
    useBookmarkGroup.
    @origin Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup */

/** The share variables of the block: IsShareOpen, ShareableObjectId, Type_ShareObjectId and ShareableObject_Generic. */
export interface BookmarkGroupShare {
  isOpen: boolean;
  objectId: string;
  typeId: string;
  object: UI_ShareableObject_Generic;
}

/** The variables of the block. Long Integers stay text. The header search (SearchString, ShowSearch) is not in this
    view: its variables never change, so the state does not hold them. */
export interface BookmarkGroupState {
  /** IsFromNavigationHistory: OnInitialize sets it to WasCurrentViewRestoredFromCache. */
  isFromNavigationHistory: boolean;
  /** BookmarkedItems. */
  bookmarkedItems: Bookmark[];
  /** UpdatedTotal (Long Integer, as text). */
  updatedTotal: string;
  /** IsFetchingBookmarks: true shows the Spinner. */
  isFetchingBookmarks: boolean;
  /** GetAllBookmarksByGroup.WasSearched: an empty list shows MessageList_NoResults instead of NoBookmarks. */
  wasSearched: boolean;
  /** EditingBookmarkNote: only the events of the BookmarkNote block set it, and that block is not built. */
  editingBookmarkNote: BookmarkNote;
  /** The share variables. */
  share: BookmarkGroupShare;
}

/** ShareableObject_Generic with its default values. */
const EMPTY_SHAREABLE: UI_ShareableObject_Generic = {
  ConnectEntityTypeId: '',
  Id: '',
  Location: '',
  SignedURL: '',
  Subtitle: '',
  Title: '',
};

/** The variables after OnInitialize of a new visit. */
export const INITIAL_BOOKMARK_GROUP_STATE: BookmarkGroupState = {
  isFromNavigationHistory: false,
  bookmarkedItems: [],
  updatedTotal: '0',
  isFetchingBookmarks: false,
  wasSearched: false,
  editingBookmarkNote: { bookmarkId: '0', note: '' },
  share: { isOpen: false, objectId: '', typeId: '', object: EMPTY_SHAREABLE },
};

/** The variables of a view that the view cache restored: IsFromNavigationHistory True, and the list source of
    List_Bookmarks (PreloadListSource_Bookmarks) takes the rows of the MyBookmarks cache (GetCachedMyBookmarks of the
    group) into BookmarkedItems, with UpdatedTotal = their count. The other variables start again. */
export const restoredBookmarkGroupState = (cachedRows: Bookmark[]): BookmarkGroupState => ({
  ...INITIAL_BOOKMARK_GROUP_STATE,
  isFromNavigationHistory: true,
  bookmarkedItems: cachedRows,
  updatedTotal: String(cachedRows.length),
});

/** The client actions of the block on its variables. */
export type BookmarkGroupAction =
  /** RefreshBookmarkData: IsFetchingBookmarks True. */
  | { type: 'fetchStarted' }
  /** OnAfterFetch_GetAllBookmarksByGroup: BookmarkedItems, UpdatedTotal, IsFetchingBookmarks False. */
  | { type: 'fetched'; result: BookmarkGroupList }
  /** RefreshBookmarkData, AllExceptions: IsFetchingBookmarks False. */
  | { type: 'fetchFailed' }
  /** OnHandle_BookmarkToggle on Success: ListRemove(CurrentPosition) and UpdatedTotal - 1. */
  | { type: 'bookmarkRemoved'; currentPosition: number }
  /** Handler_OnSaveBookmarkNote: the row's Note = the trimmed note. */
  | { type: 'noteSaved'; bookmarkId: string; note: string }
  /** OnHandle_ShareItem: the share variables, and the sheet opens. */
  | { type: 'shareOpened'; objectId: string; typeId: string; object: UI_ShareableObject_Generic }
  /** Handler_CloseShareSheet: IsShareOpen False, ShareableObject_Generic.ConnectEntityTypeId "". */
  | { type: 'shareClosed' };

/** ListRemove(BookmarkedItems, CurrentPosition). */
export const withoutRow = (rows: readonly Bookmark[], currentPosition: number): Bookmark[] =>
  rows.filter((_, index) => index !== currentPosition);

/** The rows with Note = `note` on the bookmark `bookmarkId`. */
export const withNote = (rows: readonly Bookmark[], bookmarkId: string, note: string): Bookmark[] =>
  rows.map((row) => (row.id === bookmarkId ? { ...row, note } : row));

export function bookmarkGroupReducer(state: BookmarkGroupState, action: BookmarkGroupAction): BookmarkGroupState {
  switch (action.type) {
    case 'fetchStarted':
      return { ...state, isFetchingBookmarks: true };
    case 'fetched':
      return {
        ...state,
        wasSearched: action.result.wasSearched,
        bookmarkedItems: action.result.results,
        updatedTotal: action.result.total,
        isFetchingBookmarks: false,
      };
    case 'fetchFailed':
      return { ...state, isFetchingBookmarks: false };
    case 'bookmarkRemoved':
      return {
        ...state,
        bookmarkedItems: withoutRow(state.bookmarkedItems, action.currentPosition),
        updatedTotal: String(Number(state.updatedTotal) - 1),
      };
    case 'noteSaved':
      return { ...state, bookmarkedItems: withNote(state.bookmarkedItems, action.bookmarkId, action.note) };
    case 'shareOpened':
      return {
        ...state,
        share: { isOpen: true, objectId: action.objectId, typeId: action.typeId, object: action.object },
      };
    case 'shareClosed':
      return {
        ...state,
        share: { ...state.share, isOpen: false, object: { ...state.share.object, ConnectEntityTypeId: '' } },
      };
  }
}

/** The inputs of DataActionGetAllBookmarksByGroup: the scalar block variables. The search variables keep their
    defaults (the header search is not in this view). IsFetchingBookmarks is True: each refresh runs while the block
    fetches. */
export const bookmarkGroupCallInputs = (
  bookmarkGroup: string,
  state: BookmarkGroupState,
): BookmarkGroupListCallInputs => ({
  BookmarkGroup: bookmarkGroup,
  ShowSearch: false,
  SearchString: '',
  SortColumn: '',
  IsFetchingBookmarks: true,
  UpdatedTotal: state.updatedTotal,
  WasSearchDone: false,
  SearchString_SearchDone: '',
  IsFromNavigationHistory: state.isFromNavigationHistory,
  IsShareOpen: state.share.isOpen,
  ShareableObjectId: state.share.objectId,
  Type_ShareObjectId: state.share.typeId,
});

/** The element ids of the block instance `blockId` (`$b1`) that the page and the flows use. */
export const bookmarkGroupIds = (blockId: string) => {
  const scope = blockId.replace('$', '');
  return {
    scope,
    /** The FreeSubscriptionAlert dialog (Dialog_AccessRestrictedAction_Legacy) that UpgradeSubscription confirms. */
    freeSubscriptionAlert: `${scope}-FreeSubscriptionAlert`,
    backNavigationHandler: `${scope}-$b24`,
    shareSheet: `${scope}-$b25`,
    shareableObject: `${scope}-$b26`,
  };
};
