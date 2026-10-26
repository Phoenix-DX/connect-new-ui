import type { ReactNode } from 'react';
import type { Bookmark } from '@/api/bookmark';
import { NoBookmarks } from '@/components/bookmark/NoBookmarks';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { MyBookmarks_Group } from '@/pages/BookmarksByGroup/staticEntities';
import type { BookmarkNote } from '@/pages/BookmarksByGroup/types';
import { MenuAction } from '@/lib/legacyShared/staticEntities';
import { MessageListNoResults } from '@/components/ui/MessageListNoResults';
import { Spinner } from '@/components/ui/Spinner';
import { DialogAccessRestrictedActionLegacy } from '@/platform/feedback/dialogs';
import { BookmarkNoteAddEdit } from './BookmarkNoteAddEdit';
import { BookmarkNoteDelete } from './BookmarkNoteDelete';
import { createBookmarkRows } from './bookmarkGroupRows';

/** The view of the bookmark group block, props only. The legacy layout has the back arrow and "My " + BookmarkGroup.
    The content is the bookmarks of the group (the Contacts, Locations or Entities list), the two note dialogs and
    FreeSubscriptionAlert; NoBookmarks or MessageList_NoResults when the list is empty; the Spinner while the block
    fetches; then the BackNavigationHandler slot. The share sheet slot follows the layout. The header search
    (SearchString, ShowSearch, Input_BookmarkItems) is not in this view: HeaderRight and HeaderContent are empty. The
    flows are in useBookmarkGroup.
    @origin Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup */

export interface BookmarkGroupViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** Input BookmarkGroup (MyBookmarks_Group). */
  bookmarkGroup: string;
  /** BookmarkedItems. */
  bookmarkedItems: readonly Bookmark[];
  /** IsFetchingBookmarks: true shows the Spinner (unless the view was restored). */
  isFetchingBookmarks: boolean;
  /** IsFromNavigationHistory. */
  isFromNavigationHistory: boolean;
  /** GetAllBookmarksByGroup.WasSearched: an empty list shows MessageList_NoResults instead of NoBookmarks. */
  wasSearched: boolean;
  /** EditingBookmarkNote: the note that the note dialogs edit. */
  editingBookmarkNote: BookmarkNote;
  /** GetHasBookmarNote (mobileDirectoryBookmarkNote): the BookmarkNote placeholder of each row. */
  hasBookmarkNote: boolean;
  /** GetHasExtendedShare (C2ExtendedShare): the Share item of the supper meeting rows. */
  hasExtendedShare: boolean;
  /** OnClick_BookmarkedItem(BookmarkItemId, CurrentRowNumber). */
  onClickBookmarkedItem: (bookmarkItemId: string, currentRowNumber: number) => void;
  /** ItemOptionsMenu BookmarkToggle: OnHandle_BookmarkToggle(BookmarkId, CurrentPosition). */
  onBookmarkToggle: (bookmarkId: string, currentPosition: number) => void;
  /** ItemOptionsMenu ShareToConnect: OnHandle_ShareItem. */
  onShareItem: (
    item: Bookmark,
    shareObjectTypeId: string,
    objectId: string,
    isRecordDisabled: boolean,
    entityTypeId: string,
  ) => void;
  /** BookmarkNoteAddEdit Save_Note and BookmarkNoteDelete DeleteNoteConfirm: Handler_OnSaveBookmarkNote. */
  onSaveBookmarkNote: (note: BookmarkNote) => void;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** The BackNavigationHandler block (`b1-$b24`), at the end of the content. */
  backNavigationHandler?: ReactNode;
  /** The ShareSheet block (`b1-$b25`), after the layout. */
  shareSheet?: ReactNode;
}

export function BookmarkGroupView({
  id,
  bookmarkGroup,
  bookmarkedItems: items,
  isFetchingBookmarks: isFetching,
  isFromNavigationHistory,
  wasSearched,
  editingBookmarkNote,
  hasBookmarkNote,
  hasExtendedShare,
  onClickBookmarkedItem,
  onBookmarkToggle,
  onShareItem,
  onSaveBookmarkNote,
  bottomBar,
  backNavigationHandler,
  shareSheet,
}: BookmarkGroupViewProps) {
  const scope = id.replace('$', '');

  const { contactRow, locationRow, entityRow } = createBookmarkRows({
    scope,
    items,
    hasBookmarkNote,
    hasExtendedShare,
    onClickBookmarkedItem,
    onBookmarkToggle,
    onShareItem,
  });

  const list = (name: string, row: (item: Bookmark, index: number) => ReactNode) => (
    <OSList
      id={`${scope}-${name}`}
      className="list list-group"
      animateItems
      disableVirtualization
      source={items}
      keyOf={(item) => item.id}
    >
      {row}
    </OSList>
  );

  const content = (
    <>
      {!isFetching || isFromNavigationHistory ? (
        items.length > 0 ? (
          <>
            <div className="bookmark-list-cont" data-container="">
              {bookmarkGroup === MyBookmarks_Group.Contacts && list('List_Contacts', contactRow)}
              {bookmarkGroup === MyBookmarks_Group.Locations && list('List_Locations', locationRow)}
              {bookmarkGroup === MyBookmarks_Group.Entities && list('List_Entities', entityRow)}
              <BookmarkNoteAddEdit
                id={`${scope}-BookmarkNoteAddEdit_Popup`}
                scope={`${scope}-b18`}
                bookmarkNote={editingBookmarkNote}
                onSaveNote={onSaveBookmarkNote}
              />
              <BookmarkNoteDelete
                id={`${scope}-DeleteNote_Popup`}
                scope={`${scope}-b19`}
                bookmarkId={editingBookmarkNote.bookmarkId}
                onDeleteNoteConfirm={(bookmarkId) => {
                  onSaveBookmarkNote({ bookmarkId, note: '' });
                }}
              />
            </div>
            <DialogAccessRestrictedActionLegacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b20`} />
          </>
        ) : !wasSearched ? (
          <NoBookmarks
            id={`${scope}-$b21`}
            isToDisplay={items.length === 0 && !isFetching}
            titlePlaceholder={
              <div className="no-bookmark-top-message" data-container="">
                {"You'll find your"}
                <br />
                {' bookmarks here'}
              </div>
            }
            textPlaceholder={
              <div className="no-bookmark-bottom-message" data-container="">
                {"You can get back to a page that's"}
                <br />
                {'important to you by adding a bookmark '}
              </div>
            }
          />
        ) : (
          <MessageListNoResults
            id={`${scope}-$b22`}
            placeholder1="Make sure that all words are spelled correctly."
            placeholder2="Try different keyword."
          />
        )
      ) : (
        <Spinner id={`${scope}-$b23`} showLoader={isFetching} />
      )}
      {backNavigationHandler}
    </>
  );

  return (
    <OSBlock name="MyBookmarksFlow.ScreenBlock_BookmarkGroup" id={id}>
      <LegacyLayout
        id={`${scope}-$b1`}
        menu={<div id={`${scope}-Menu`} />}
        headerLeft={<MenuIcon id={`${scope}-$b2`} menuAction={MenuAction.Back} />}
        title={
          <div className="text-align-center" data-container="">
            <span data-expression="">{'My ' + bookmarkGroup}</span>
          </div>
        }
        content={content}
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`} />}
      />
      {shareSheet}
    </OSBlock>
  );
}
