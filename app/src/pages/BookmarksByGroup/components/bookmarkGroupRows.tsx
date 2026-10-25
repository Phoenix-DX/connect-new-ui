import type { Bookmark } from '@/api/bookmark';
import { ItemOptionsMenu } from '@/components/bookmark/ItemOptionsMenu';
import { ResultItemImage } from '@/components/ui/ResultItemImage';
import { osImage } from '@/lib/os-assets';
import { ResultListType } from '@/lib/legacyShared/staticEntities';
import {
  Connect_Entity,
  MyBookmarks_ObjectType,
  Type_ShareObject_SupperMeeting,
} from '@/pages/BookmarksByGroup/staticEntities';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { ScrollAnchor } from '@/platform/navigation/ScrollAnchor';
import { LegacyResultItemBadge } from './LegacyResultItemBadge';

/** The rows of the three lists of the bookmark group block (Contacts, Locations, Entities), as render functions of
    the view: no hooks, the view calls the factory at each render.
    @origin Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup */

/** What the rows read from the view: the instance scope, the list, the flags and the row events. */
interface BookmarkRowsContext {
  /** The instance id of the block without `$`. */
  scope: string;
  items: readonly Bookmark[];
  hasBookmarkNote: boolean;
  hasExtendedShare: boolean;
  onClickBookmarkedItem: (bookmarkItemId: string, currentRowNumber: number) => void;
  onBookmarkToggle: (bookmarkId: string, currentPosition: number) => void;
  onShareItem: (
    item: Bookmark,
    shareObjectTypeId: string,
    objectId: string,
    isRecordDisabled: boolean,
    entityTypeId: string,
  ) => void;
}

const TAG_CLASS =
  'font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft background-neutral-2 text-neutral-6';
/** Extended style "color: #000; font-size: 0.8em;" of the Household and Entity tags. */
const TAG_STYLE = { color: 'rgb(0, 0, 0)', fontSize: '0.8em' };
const ITEM_GAP = { marginBottom: 'var(--space-base)' };
const ANCHOR_ICON = <i className="icon padding-x-base fa fa-ellipsis-h fa-1x" data-icon="" />;

/** Row margin of every list ("margin-bottom: var(--space-base);" except on the last row). */
const gap = (index: number, length: number) => (index < length - 1 ? ITEM_GAP : undefined);

export function createBookmarkRows({
  scope,
  items,
  hasBookmarkNote,
  hasExtendedShare,
  onClickBookmarkedItem,
  onBookmarkToggle,
  onShareItem,
}: BookmarkRowsContext) {
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

  return { contactRow, locationRow, entityRow };
}
