import type { ReactNode } from 'react';
import type { Bookmark } from '@/api/bookmark';
import { ItemOptionsMenu } from '@/components/bookmark/ItemOptionsMenu';
import { NoBookmarks } from '@/components/bookmark/NoBookmarks';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { osImage } from '@/legacy/os/os-assets';
import {
  Connect_Entity,
  MyBookmarks_Group,
  MyBookmarks_ObjectType,
  Type_ShareObject_SupperMeeting,
} from '@/pages/BookmarksByGroup/staticEntities';
import type { BookmarkNote } from '@/pages/BookmarksByGroup/types';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { ScrollAnchor } from '@/platform/navigation/ScrollAnchor';
import { MenuAction, ResultListType } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { MessageListNoResults } from '@/components/ui/MessageListNoResults';
import { ResultItemImage } from '@/components/ui/ResultItemImage';
import { Spinner } from '@/components/ui/Spinner';
import { Dialog_AccessRestrictedAction_Legacy } from '@/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import { BookmarkNoteAddEdit } from './BookmarkNoteAddEdit';
import { BookmarkNoteDelete } from './BookmarkNoteDelete';
import { LegacyResultItemBadge } from './LegacyResultItemBadge';

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

const TAG_CLASS =
  'font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft background-neutral-2 text-neutral-6';
/** Extended style "color: #000; font-size: 0.8em;" of the Household and Entity tags. */
const TAG_STYLE = { color: 'rgb(0, 0, 0)', fontSize: '0.8em' };
const ITEM_GAP = { marginBottom: 'var(--space-base)' };
const ANCHOR_ICON = <i className="icon padding-x-base fa fa-ellipsis-h fa-1x" data-icon="" />;

/** Row margin of every list ("margin-bottom: var(--space-base);" except on the last row). */
const gap = (index: number, length: number) => (index < length - 1 ? ITEM_GAP : undefined);

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

  /** BookmarkNote placeholder: MyBookmarksFlow.BookmarkNote when GetHasBookmarNote (mobileDirectoryBookmarkNote, TST
      off: nothing). The block is not built; its EditNote / AddNote / DeleteNote events (Handler_EditNote,
      Handler_AddNote, Handler_DeleteNote: a disabled record → UpgradeSubscription, else EditingBookmarkNote and
      ConfirmAction of the note dialog) are wired when it is. */
  const bookmarkNote = (item: Bookmark) =>
    hasBookmarkNote ? (
      <NotCaptured name={`MyBookmarksFlow.BookmarkNote (bookmark ${item.id}; flag off on TST)`} />
    ) : null;

  const contactRow = (item: Bookmark, index: number) => {
    const p = `${scope}-l1-57_${String(index)}`;
    const d = item.details;
    return (
      <div className="bookmark-list-item" data-container="" style={gap(index, items.length)}>
        <ScrollAnchor id={`${p}-$b3`} idIn={item.objectId} />
        <ResultItemImage
          id={`${p}-Household_List_Item`}
          inHasBorder={false}
          inShowDescription={d.childrenNames !== ''}
          inResultType={ResultListType.Household}
          inSignedURL={item.image}
          inShowTag={d.localityName !== '' || d.countryName !== ''}
          itemHeight="66px"
          inHasAction
          showPlaceholderForImage={d.isDeceased && item.image === ''}
          onOnClickItem={() => {
            onClickBookmarkedItem(item.id, index);
          }}
          imagePlaceholder={
            <img
              className="bookmark-list-item__image-placeholder"
              data-image=""
              src={osImage('img/Connect2_LegacyShared.PlaceholderImage_Household.png')}
            />
          }
          titlePlaceholder={
            <span className="font-size-0-9em bold" data-expression="" id={`${p}-Household_Title`}>
              {item.title !== '' ? item.title : 'Information not available'}
            </span>
          }
          descriptionPlaceholder={
            <span
              className="country-household-count household-locality-no-paddingleft"
              data-expression=""
              id={`${p}-Household_Description`}
            >
              {d.childrenNames}
            </span>
          }
          tagPlaceholder={
            <span className={TAG_CLASS} data-expression="" id={`${p}-Household_Tag`} style={TAG_STYLE}>
              {d.localityName + (d.countryName !== '' ? (d.localityName !== '' ? ', ' : '') + d.countryName : '')}
            </span>
          }
          resultItemPlaceholder={
            <ItemOptionsMenu
              id={`${p}-$b5`}
              isShareImplemented={!d.isDeceased && !item.recordNotAvailable}
              inIsBookmarked
              onShareToConnect={() => {
                onShareItem(item, d.shareObjectTypeId, item.objectId, item.recordDisabled, Connect_Entity.Household);
              }}
              onBookmarkToggle={() => {
                onBookmarkToggle(item.id, index);
              }}
              anchorPlaceholder={ANCHOR_ICON}
            />
          }
          bookmarkNote={bookmarkNote(item)}
        />
      </div>
    );
  };

  /* Locations and Entities: not captured (Q2 → A pending). Row ids use the list's index in the block ("l2", "l3")
     with the row number; the runtime's numeric part of the iteration id is unknown. */
  const locationRow = (item: Bookmark, index: number) => {
    const p = `${scope}-l2_${String(index)}`;
    const d = item.details;
    const menu = (share: boolean) => (
      <ItemOptionsMenu
        id={`${p}-$b${share ? '12' : '9'}`}
        inIsBookmarked
        isShareImplemented={share && hasExtendedShare}
        onBookmarkToggle={() => {
          onBookmarkToggle(item.id, index);
        }}
        onShareToConnect={() => {
          onShareItem(
            item,
            Type_ShareObject_SupperMeeting,
            item.id,
            false,
            Connect_Entity.SupperMeetings_aka_Subdivisions,
          );
        }}
        anchorPlaceholder={ANCHOR_ICON}
      />
    );
    return (
      <div data-container="" id={`${p}-BookmarkList_Locations_Container`}>
        <ScrollAnchor id={`${p}-$b7`} idIn={item.objectId} />
        {item.objectType === MyBookmarks_ObjectType.Locality ? (
          <div className="bookmark-list-item" data-container="" style={gap(index, items.length)}>
            <LegacyResultItemBadge
              id={`${p}-LocalitiesList_Item`}
              scope={`${p}-b8`}
              inHasAction
              inShowTag={d.countryName !== ''}
              inHasBorder={false}
              itemHeight="55px"
              inBadgeText={d.localityName.substring(0, 1)}
              inDiameter={40}
              inBadgeBackgroundColor="#36c9c5"
              inShowDescription={false}
              onOnClickItem={() => {
                onClickBookmarkedItem(item.id, index);
              }}
              titlePlaceholder={
                <span className="font-size-0-9em bold" data-expression="" id={`${p}-Locality_Title`}>
                  {d.localityName}
                </span>
              }
              tagPlaceholder={
                <span className={TAG_CLASS} data-expression="" id={`${p}-Locality_Tag`}>
                  {d.countryName}
                </span>
              }
              resultItemPlaceholder={menu(false)}
              bookmarkNote={bookmarkNote(item)}
            />
          </div>
        ) : item.objectType === MyBookmarks_ObjectType.Subdivision ? (
          <div className="bookmark-list-item" data-container="" style={gap(index, items.length)}>
            {/* The title and tag colours of the compiled view (main hall: primary, else neutral) are computed inline
                styles that the clone may only render once captured (rule 21): left out until then. */}
            <NotCaptured name="Supper Meeting row: main-hall title and tag colours (Locations not captured)" />
            <ResultItemImage
              id={`${p}-Subdivisions_List_Item`}
              inHasAction
              inShowTag
              inSignedURL={item.image}
              inShowDescription={false}
              inResultType={ResultListType.Subdivision}
              inHasBorder={false}
              itemHeight="66px"
              onOnClickItem={() => {
                onClickBookmarkedItem(item.id, index);
              }}
              titlePlaceholder={
                <span className="font-size-0-9em bold" data-expression="" id={`${p}-Subdivision_Title`}>
                  {item.title}
                </span>
              }
              tagPlaceholder={
                <span
                  className="font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft"
                  data-expression=""
                  id={`${p}-Subdivision_Tag`}
                >
                  {d.householdCount + (d.householdCount === '1' ? ' Household' : ' Households')}
                </span>
              }
              resultItemPlaceholder={menu(true)}
              bookmarkNote={bookmarkNote(item)}
            />
          </div>
        ) : null}
      </div>
    );
  };

  const entityRow = (item: Bookmark, index: number) => {
    const p = `${scope}-l3_${String(index)}`;
    const d = item.details;
    const signedURL =
      item.image !== ''
        ? item.image
        : item.objectType === MyBookmarks_ObjectType.CampusCo
          ? osImage(
              item.title !== ''
                ? 'img/Connect2_LegacyShared.CampusCo_PhotoComingSoon.png'
                : 'img/Connect2_LegacyShared.CampusCo_PhotoUnavailable.png',
            )
          : item.objectType === MyBookmarks_ObjectType.OneSchoolGlobal
            ? osImage(
                item.title !== ''
                  ? 'img/Connect2_LegacyShared.OneSchool_PhotoComingSoon.png'
                  : 'img/Connect2_LegacyShared.OneSchool_PhotoUnavailable.png',
              )
            : osImage('img/Connect2_LegacyShared.no_division_rectangle.png');
    return (
      <div className="bookmark-list-item" data-container="" style={gap(index, items.length)}>
        <ScrollAnchor id={`${p}-$b14`} idIn={item.objectId} />
        <ResultItemImage
          id={`${p}-Entity_List_Item`}
          inHasAction
          inShowTag={d.localityName !== '' || d.countryName !== ''}
          inHasBorder={false}
          itemHeight="66px"
          inResultType={ResultListType.Subdivision}
          inSignedURL={signedURL}
          inShowDescription={false}
          onOnClickItem={() => {
            onClickBookmarkedItem(item.id, index);
          }}
          titlePlaceholder={
            <span className="font-size-0-9em bold" data-expression="" id={`${p}-Entity_Title`}>
              {item.title !== '' ? item.title : 'Information not available'}
            </span>
          }
          tagPlaceholder={
            <span className={TAG_CLASS} data-expression="" id={`${p}-Entity_Tag`} style={TAG_STYLE}>
              {d.areasServed + (d.countryName !== '' ? (d.areasServed !== '' ? ', ' : '') + d.countryName : '')}
            </span>
          }
          resultItemPlaceholder={
            <ItemOptionsMenu
              id={`${p}-$b16`}
              isShareImplemented={!item.recordNotAvailable}
              inIsBookmarked
              onBookmarkToggle={() => {
                onBookmarkToggle(item.id, index);
              }}
              onShareToConnect={() => {
                onShareItem(
                  item,
                  d.shareObjectTypeId,
                  item.objectId,
                  item.recordDisabled,
                  Connect_Entity.OneSchoolGlobal,
                );
              }}
              anchorPlaceholder={ANCHOR_ICON}
            />
          }
          bookmarkNote={bookmarkNote(item)}
        />
      </div>
    );
  };

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
            <Dialog_AccessRestrictedAction_Legacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b20`} />
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
