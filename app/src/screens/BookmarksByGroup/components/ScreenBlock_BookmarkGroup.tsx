// @os-block Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { NotCaptured } from '@/app/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { useFlagOn } from '@/platform/flags/flags';
import { osImage } from '@/legacy/os/os-assets';
import { Layout } from '../../../shared/Connect2_LegacyShared/Layout';
import { MenuAction, ResultListType } from '../../../shared/Connect2_LegacyShared/lib/staticEntities';
import { MenuIcon__UpdatedOSUI } from '../../../shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { MessageList_NoResults } from '../../../shared/Connect2_LegacyShared/MessageList_NoResults';
import { Result_Item_Image } from '../../../shared/Connect2_LegacyShared/Result_Item_Image';
import { Spinner } from '../../../shared/Connect2_LegacyShared/Spinner';
import { NoBookmarks } from '../../../shared/Connect2_MyBookmarks_MUI/NoBookmarks';
import { BackNavigationHandler } from '../../../shared/NavigationHandler/BackNavigationHandler';
import { ScrollAnchor } from '../../../shared/NavigationHandler/ScrollAnchor';
import { Dialog_AccessRestrictedAction_Legacy } from '../../../shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import { ShareableObject_Generic } from '../../../shared/UBTConnect_Utils/ShareableObject_Generic';
import { ShareSheet } from '../../../shared/UBTConnect_Utils/ShareSheet';
import type { UI_ShareableObject_Generic } from '../../../shared/UBTConnect_Utils/ShareableObject_Generic/types';
import { confirmAction, showUpgradePopUp } from '@/platform/feedback/dialogs';
import { exceptionMessage, isSystemException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { showFeedbackMessage } from '@/platform/feedback';
import { legacyDelete_LocalBookmarkByBookmarkId } from '@/platform/storage/localEntities';
import { setPreloadObject, useWasRestoredFromCache, type BackNavigationEvent } from '@/platform/navigation';
import { deleteBookmarkByBookmarkId, getAllBookmarksByGroup, getBookmarkById, new_UpdateBookmarkNote } from '../api';
import type { BookmarkItem, BookmarkNote } from '../types';
import {
  auditBookmarkSubscriptionEvent,
  getCachedMyBookmarks,
  putCachedMyBookmarks,
  sendBookmarkedFeedbackMessage,
  sendBookmarkedHiddenFeedbackMessage,
} from './actions';
import { BookmarkNoteAddEdit, BookmarkNoteDelete } from './BookmarkNoteDialogs';
import { ItemOptionsMenu } from '../../../shared/Connect2_LegacyShared/ItemOptionsMenu';
import { Result_Item_Badge } from './Result_Item_Badge';
import {
  CommunityBusinessType2,
  Connect_Entity,
  MyBookmarks_Group,
  MyBookmarks_ObjectType,
  Type_ShareObject_SupperMeeting,
} from './staticEntities';

/** Events the screen handles (BookmarksByGroup.mvc.js view: NavigateTo_* of the block). */
export interface BookmarkGroupNavigation {
  onNavigateToHouseholdCarousel: (selectedHouseholdId: string, itemPosition: number, householdIdList: string[]) => void;
  onNavigateToCommunityBusinessCarousel: (
    communityBusinessId: string,
    itemPosition: number,
    objectType: string,
  ) => void;
  onNavigateToLocality: (localityId: string) => void;
  onNavigateToSubdivision: (subdivisionId: string) => void;
}

export interface ScreenBlock_BookmarkGroupProps extends BookmarkGroupNavigation {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** Input BookmarkGroup (MyBookmarks_Group). */
  bookmarkGroup: string;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
}

const TAG_CLASS =
  'font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft background-neutral-2 text-neutral-6';
/** Extended style "color: #000; font-size: 0.8em;" of the Household and Entity tags (dom/default.html:93). */
const TAG_STYLE = { color: 'rgb(0, 0, 0)', fontSize: '0.8em' };
const ITEM_GAP = { marginBottom: 'var(--space-base)' };
const ANCHOR_ICON = <i className="icon padding-x-base fa fa-ellipsis-h fa-1x" data-icon="" />;
const EMPTY_SHAREABLE: UI_ShareableObject_Generic = {
  ConnectEntityTypeId: '',
  Id: '',
  Location: '',
  SignedURL: '',
  Subtitle: '',
  Title: '',
};

/** SetScrollToTop JS (RefreshBookmarkData / ResetSearch, mvc.js:3751-3762, 3795-3806). */
const setScrollToTop = () => {
  document.querySelector('.content')?.scroll({ top: 0, left: 0, behavior: 'instant' });
};

/** Row margin of every list ("margin-bottom: var(--space-base);" except on the last row). */
const gap = (index: number, length: number) => (index < length - 1 ? ITEM_GAP : undefined);

/** MyBookmarksFlow.ScreenBlock_BookmarkGroup (analysis/sources/pretty/Connect2_MyBookmarks_MUI.MyBookmarksFlow
    .ScreenBlock_BookmarkGroup.mvc.js; view :195-1838, controller :1841-3750). Layout with the back arrow and
    "My " + BookmarkGroup; the bookmarks of the group (Contacts, Locations or Entities list), the two note dialogs and
    FreeSubscriptionAlert; NoBookmarks or MessageList_NoResults when the list is empty; Spinner while fetching; the
    ShareSheet after the layout.
    Lifecycle: OnInitialize (:3383-3425) IsFromNavigationHistory = WasCurrentViewRestoredFromCache; the list's
    dx-preload-list-source (:2894-2957) takes the cached list when restored; OnReady (:2408-2442) RefreshBookmarkData
    unless restored. The header search (SearchString, ShowSearch, Input_BookmarkItems) is not in this view: HeaderRight
    and HeaderContent are empty (:279-290), so the search actions never run and SearchString stays "". */
export function ScreenBlock_BookmarkGroup({
  id,
  bookmarkGroup,
  bottomBar,
  onNavigateToHouseholdCarousel,
  onNavigateToCommunityBusinessCarousel,
  onNavigateToLocality,
  onNavigateToSubdivision,
}: ScreenBlock_BookmarkGroupProps) {
  const scope = id.replace('$', '');
  const isFromNavigationHistory = useWasRestoredFromCache();
  const hasBookmarkNote = useFlagOn('mobileDirectoryBookmarkNote');
  const hasExtendedShare = useFlagOn('C2ExtendedShare');
  const [initial] = useState(() =>
    isFromNavigationHistory ? getCachedMyBookmarks(bookmarkGroup) : { cacheHit: false, bookmarks: [] },
  );
  const [items, setItems] = useState<BookmarkItem[]>(initial.bookmarks);
  const [updatedTotal, setUpdatedTotal] = useState(String(initial.bookmarks.length));
  const [isFetching, setIsFetching] = useState(false);
  const [wasSearched, setWasSearched] = useState(false);
  // EditingBookmarkNote: set only by Handler_EditNote / Handler_DeleteNote (see bookmarkNote below).
  const [editingNote] = useState<BookmarkNote>({ bookmarkId: '0', note: '' });
  const [share, setShare] = useState({
    isOpen: false,
    objectId: '',
    typeId: '',
    object: EMPTY_SHAREABLE,
  });

  const variables = () => ({
    BookmarkGroup: bookmarkGroup,
    ShowSearch: false,
    SearchString: '',
    SortColumn: '',
    IsFetchingBookmarks: true,
    UpdatedTotal: updatedTotal,
    WasSearchDone: false,
    SearchString_SearchDone: '',
    IsFromNavigationHistory: isFromNavigationHistory,
    IsShareOpen: share.isOpen,
    ShareableObjectId: share.objectId,
    Type_ShareObjectId: share.typeId,
  });

  /** Refresh Query GetAllBookmarksByGroup, then OnAfterFetch_GetAllBookmarksByGroup (:2138-2172): BookmarkedItems,
      UpdatedTotal, IsFetchingBookmarks False, PutCachedMyBookmarks. */
  const fetchBookmarks = async () => {
    const out = await getAllBookmarksByGroup(variables());
    setWasSearched(out.wasSearched);
    setItems(out.results);
    setUpdatedTotal(out.total);
    setIsFetching(false);
    putCachedMyBookmarks(bookmarkGroup, out.results);
  };

  /** RefreshBookmarkData(IsScrollToTop) (:1919-1996): IsFetchingBookmarks True, refresh, SetScrollToTop when asked;
      AllExceptions: IsFetchingBookmarks False, SearchString "", error message with the exception text. */
  const refreshBookmarkData = async (isScrollToTop: boolean) => {
    setIsFetching(true);
    try {
      await fetchBookmarks();
      if (isScrollToTop) setScrollToTop();
    } catch (e) {
      if (isSystemException(e)) throw e;
      setIsFetching(false);
      showFeedbackMessage(exceptionMessage(e), 3);
    }
  };

  const ready = useRef(false);
  useEffect(() => {
    if (ready.current) return;
    ready.current = true;
    if (isFromNavigationHistory) return;
    void (async () => {
      try {
        await refreshBookmarkData(false);
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
    // OnReady runs once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** UpgradeSubscription(ObjectId) (:3464-3513): AuditBookmarkSubscriptionEvent (the object id in the slot of the
      group), then ConfirmAction FreeSubscriptionAlert. */
  const upgradeSubscription = async (objectId: string) => {
    const slot = (group: string) => (bookmarkGroup === group ? objectId : '0');
    auditBookmarkSubscriptionEvent(
      slot(MyBookmarks_Group.Contacts),
      slot(MyBookmarks_Group.Locations),
      '',
      slot(MyBookmarks_Group.Entities),
    );
    await confirmAction(`${scope}-FreeSubscriptionAlert`);
  };

  /** OnHandle_BookmarkToggle(BookmarkId, CurrentPosition) (:3131-3211): DeleteBookmarkByBookmarkId; on Success
      ListRemove, "Removed from your Bookmarks", UpdatedTotal - 1, Delete_LocalBookmarkByBookmarkId (legacy local copy,
      CR-BookmarksByGroup-2), PutCachedMyBookmarks; else info message. */
  const onBookmarkToggle = async (bookmarkId: string, currentPosition: number) => {
    const success = await deleteBookmarkByBookmarkId(bookmarkId);
    if (success) {
      const next = items.filter((_, i) => i !== currentPosition);
      setItems(next);
      sendBookmarkedFeedbackMessage(false);
      setUpdatedTotal(String(Number(updatedTotal) - 1));
      // Connect2_LegacyShared Delete_LocalBookmarkByBookmarkId (:3169-3172; CR-BookmarksByGroup-2).
      await legacyDelete_LocalBookmarkByBookmarkId(bookmarkId);
      putCachedMyBookmarks(bookmarkGroup, next);
    } else {
      showFeedbackMessage('Bookmark could not be removed. Please try again later.', 0);
    }
  };

  /** OnHandle_ShareItem (:2174-2308): no share type → "Coming soon"; a disabled record → UpgradeSubscription; with
      GetHasExtendedShare (C2ExtendedShare, TST on) the ShareSheet opens for BookmarkedItems.Current (OneSchool Global:
      location from AreasServed, photo); without it NavigateTo_ShareObject (branch not built: flag decided on). */
  const onShareItem = async (
    item: BookmarkItem,
    shareObjectTypeId: string,
    objectId: string,
    isRecordDisabled: boolean,
    entityTypeId: string,
  ) => {
    if (shareObjectTypeId === '') {
      showFeedbackMessage('Coming soon', 0);
      return;
    }
    if (isRecordDisabled) {
      await upgradeSubscription(objectId);
      return;
    }
    if (!hasExtendedShare) return;
    const d = item.details;
    const isOneSchool = entityTypeId === Connect_Entity.OneSchoolGlobal;
    setShare({
      isOpen: true,
      objectId: item.objectId,
      typeId: shareObjectTypeId,
      object: {
        ConnectEntityTypeId: entityTypeId,
        Id: item.objectId,
        Title: item.title,
        Subtitle: d.childrenNames,
        Location: isOneSchool ? d.areasServed + ', ' + d.countryName : d.localityName + ', ' + d.countryName,
        SignedURL: isOneSchool ? item.image : '',
      },
    });
  };

  /** Handler_CloseShareSheet (:3275-3301). */
  const onCloseShareSheet = () => {
    setShare((s) => ({ ...s, isOpen: false, object: { ...s.object, ConnectEntityTypeId: '' } }));
  };

  /** Handler_OnSaveBookmarkNote (:2310-2364): UpdateNote JS → UpdateNote (New_UpdateBookmarkNote with the trimmed note;
      on failure an error message), then the row's Note = Trim(note) and PutCachedMyBookmarks. */
  const onSaveBookmarkNote = (note: BookmarkNote) => {
    new_UpdateBookmarkNote(note.bookmarkId, note.note.trim())
      .then((success) => {
        if (!success) showFeedbackMessage('There was an error, please try again.', 3);
      })
      .catch(raiseToFlowHandler);
    const next = items.map((it) => (it.id === note.bookmarkId ? { ...it, note: note.note.trim() } : it));
    setItems(next);
    putCachedMyBookmarks(bookmarkGroup, next);
  };

  /** OnClick_BookmarkedItem (:2728-2892): GetBookmarkById (CR-BookmarksByGroup-1); found → not available (hidden
      message) / disabled (App_Subscription_ShowUpgradePopUp, :2822-2829) / RememberFocusedScrollAnchor (the view cache
      keeps the scroll), PutCachedMyBookmarks and the navigation of the group; not found → error message and a refresh. */
  const onClickBookmarkedItem = async (bookmarkItemId: string, currentRowNumber: number) => {
    const found = await getBookmarkById(bookmarkItemId, hasBookmarkNote);
    if (!found.isBookmarkFound) {
      showFeedbackMessage('That bookmark isn’t available', 3);
      await fetchBookmarks();
      return;
    }
    const item = found.item;
    if (item.recordNotAvailable) {
      sendBookmarkedHiddenFeedbackMessage(item.objectType);
      return;
    }
    if (item.recordDisabled) {
      await showUpgradePopUp();
      return;
    }
    const list = items;
    putCachedMyBookmarks(bookmarkGroup, list);
    if (bookmarkGroup === MyBookmarks_Group.Contacts) {
      // NavigateTo_HouseholdsCarousel (:1998-2091): the block's preload, then the screen's (which replaces it).
      setPreloadObject({
        IsPreloaded: true,
        PreloadedCarouselItems: list.map((b) => ({
          Id: b.objectId,
          Name: b.title,
          IsDeceased: b.details.isDeceased,
          Image: b.image,
        })),
      });
      onNavigateToHouseholdCarousel(
        item.objectId,
        currentRowNumber,
        list.map((b) => b.objectId),
      );
    } else if (bookmarkGroup === MyBookmarks_Group.Entities) {
      // NavigateTo_CommunityBusinessDetail (:2520-2601).
      setPreloadObject({
        IsPreloaded: true,
        PreloadedCarouselItems: list.map((b) => ({
          Id: b.objectId,
          Name: b.title,
          SignedURL: b.image,
          CommunityBusinessTypeId:
            b.objectType === MyBookmarks_ObjectType.CampusCo
              ? CommunityBusinessType2.CampusCo
              : b.objectType === MyBookmarks_ObjectType.OneSchoolGlobal
                ? CommunityBusinessType2.OneSchoolGlobal
                : '',
        })),
      });
      onNavigateToCommunityBusinessCarousel(item.objectId, currentRowNumber, item.objectType);
    } else if (bookmarkGroup === MyBookmarks_Group.Locations) {
      if (item.objectType === MyBookmarks_ObjectType.Locality) onNavigateToLocality(item.details.localityId);
      else onNavigateToSubdivision(item.objectId);
    }
  };

  /** BackNavigationHandler (:3078-3129): SearchString and ShowSearch never change here, so only the Contacts branch
      runs: SetPreloadObject(BookmarkedItems) for the previous screen. */
  const onBackNavigation = (event: BackNavigationEvent) => {
    void event;
    if (bookmarkGroup === MyBookmarks_Group.Contacts) setPreloadObject(items);
  };

  const run = (p: Promise<unknown>) => {
    p.catch(raiseToFlowHandler);
  };

  /** BookmarkNote placeholder: MyBookmarksFlow.BookmarkNote when GetHasBookmarNote (mobileDirectoryBookmarkNote, TST
      off: nothing). The block is not built; its EditNote / AddNote / DeleteNote events (Handler_EditNote :3303-3381,
      Handler_AddNote :2603-2665, Handler_DeleteNote :3000-3076: a disabled record → UpgradeSubscription, else
      EditingBookmarkNote and ConfirmAction of the note dialog) are wired when it is. */
  const bookmarkNote = (item: BookmarkItem) =>
    hasBookmarkNote ? (
      <NotCaptured name={`MyBookmarksFlow.BookmarkNote (bookmark ${item.id}; flag off on TST)`} />
    ) : null;

  const contactRow = (item: BookmarkItem, index: number) => {
    const p = `${scope}-l1-57_${String(index)}`;
    const d = item.details;
    return (
      <div className="bookmark-list-item" data-container="" style={gap(index, items.length)}>
        <ScrollAnchor id={`${p}-$b3`} idIn={item.objectId} />
        <Result_Item_Image
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
            run(onClickBookmarkedItem(item.id, index));
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
                run(
                  onShareItem(item, d.shareObjectTypeId, item.objectId, item.recordDisabled, Connect_Entity.Household),
                );
              }}
              onBookmarkToggle={() => {
                run(onBookmarkToggle(item.id, index));
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
  const locationRow = (item: BookmarkItem, index: number) => {
    const p = `${scope}-l2_${String(index)}`;
    const d = item.details;
    const menu = (share: boolean) => (
      <ItemOptionsMenu
        id={`${p}-$b${share ? '12' : '9'}`}
        inIsBookmarked
        isShareImplemented={share && hasExtendedShare}
        onBookmarkToggle={() => {
          run(onBookmarkToggle(item.id, index));
        }}
        onShareToConnect={() => {
          run(
            onShareItem(
              item,
              Type_ShareObject_SupperMeeting,
              item.id,
              false,
              Connect_Entity.SupperMeetings_aka_Subdivisions,
            ),
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
            <Result_Item_Badge
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
                run(onClickBookmarkedItem(item.id, index));
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
            {/* The title and tag colours of the compiled view (main hall: primary, else neutral; B:704-760) are computed
                inline styles that the clone may only render once captured (rule 21): left out until then. */}
            <NotCaptured name="Supper Meeting row: main-hall title and tag colours (Locations not captured)" />
            <Result_Item_Image
              id={`${p}-Subdivisions_List_Item`}
              inHasAction
              inShowTag
              inSignedURL={item.image}
              inShowDescription={false}
              inResultType={ResultListType.Subdivision}
              inHasBorder={false}
              itemHeight="66px"
              onOnClickItem={() => {
                run(onClickBookmarkedItem(item.id, index));
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

  const entityRow = (item: BookmarkItem, index: number) => {
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
        <Result_Item_Image
          id={`${p}-Entity_List_Item`}
          inHasAction
          inShowTag={d.localityName !== '' || d.countryName !== ''}
          inHasBorder={false}
          itemHeight="66px"
          inResultType={ResultListType.Subdivision}
          inSignedURL={signedURL}
          inShowDescription={false}
          onOnClickItem={() => {
            run(onClickBookmarkedItem(item.id, index));
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
                run(onBookmarkToggle(item.id, index));
              }}
              onShareToConnect={() => {
                run(
                  onShareItem(
                    item,
                    d.shareObjectTypeId,
                    item.objectId,
                    item.recordDisabled,
                    Connect_Entity.OneSchoolGlobal,
                  ),
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

  const list = (name: string, row: (item: BookmarkItem, index: number) => ReactNode) => (
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
                bookmarkNote={editingNote}
                onSaveNote={onSaveBookmarkNote}
              />
              <BookmarkNoteDelete
                id={`${scope}-DeleteNote_Popup`}
                scope={`${scope}-b19`}
                bookmarkId={editingNote.bookmarkId}
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
          <MessageList_NoResults
            id={`${scope}-$b22`}
            placeholder1="Make sure that all words are spelled correctly."
            placeholder2="Try different keyword."
          />
        )
      ) : (
        <Spinner id={`${scope}-$b23`} showLoader={isFetching} />
      )}
      <BackNavigationHandler id={`${scope}-$b24`} onBackNavigation={onBackNavigation} />
    </>
  );

  return (
    <OSBlock name="MyBookmarksFlow.ScreenBlock_BookmarkGroup" id={id}>
      <Layout
        id={`${scope}-$b1`}
        menu={<div id={`${scope}-Menu`} />}
        headerLeft={<MenuIcon__UpdatedOSUI id={`${scope}-$b2`} menuAction={MenuAction.Back} />}
        title={
          <div className="text-align-center" data-container="">
            <span data-expression="">{'My ' + bookmarkGroup}</span>
          </div>
        }
        content={content}
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`} />}
      />
      <ShareSheet
        id={`${scope}-$b25`}
        inShareObjectTypeId={share.typeId}
        inIsOpen={share.isOpen}
        inShareableObjectId={share.objectId}
        inIsLegacy
        onEventClosedShareSheet={onCloseShareSheet}
      >
        {share.object.ConnectEntityTypeId !== '' && (
          <ShareableObject_Generic id={`${scope}-$b26`} inShareableObject={share.object} />
        )}
      </ShareSheet>
    </OSBlock>
  );
}
