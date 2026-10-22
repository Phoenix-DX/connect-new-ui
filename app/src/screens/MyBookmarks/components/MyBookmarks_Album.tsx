// @os-block Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Album
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { osImage } from '@/legacy/os/os-assets';
import { DEPRECATED_GalleryV2 } from '@/shared/osui/DEPRECATED_GalleryV2';
import { Space } from '@/shared/osui/lib/staticEntities';
import { MyBookmarks_Group, MyBookmarks_ObjectType } from '@/shared/UBTConnect/lib/staticEntities';
import type { BookmarkItem } from '@/screens/MyBookmarks/types';

export interface MyBookmarks_AlbumProps {
  /** OutSystems instance id of the block (`b1-MyBookmarksAlbum_Contacts`). */
  id: string;
  /** Id prefix of the block's own elements (`b1-b4`). */
  scope: string;
  /** Runtime number of the List in its rows' ids (captured `l1-57_<row>` Contacts, `l1-58_<row>` Locations). */
  listNumber: string;
  bookmarkItemList: readonly BookmarkItem[];
  /** BookmarkGroup (MyBookmarks_Group). */
  bookmarkGroup: string;
  /** Event OnHandle_BookmarkedItem(BookmarkId, ItemPosition, ObjectType). */
  onHandleBookmarkedItem: (bookmarkId: string, itemPosition: number, objectType: string) => void;
}

const G = MyBookmarks_Group;
const T = MyBookmarks_ObjectType;

/** The placeholder of a bookmark without photo (A view :248-268, data-error-placeholder-src and the Url's else). */
function placeholderImage(b: BookmarkItem): string {
  if (b.group === G.Contacts)
    return osImage(
      b.isDeceased
        ? 'img/Connect2_LegacyShared.PlaceholderImage_Household.png'
        : 'img/Connect2_LegacyShared.User_rectangle.png',
    );
  if (b.group === G.Entities) {
    if (b.objectType === T.OneSchoolGlobal)
      return osImage(
        b.title !== ''
          ? 'img/Connect2_LegacyShared.OneSchool_PhotoComingSoon.png'
          : 'img/Connect2_LegacyShared.OneSchool_PhotoUnavailable.png',
      );
    if (b.objectType === T.CampusCo)
      return osImage(
        b.title !== ''
          ? 'img/Connect2_LegacyShared.CampusCo_PhotoComingSoon.png'
          : 'img/Connect2_LegacyShared.CampusCo_PhotoUnavailable.png',
      );
  }
  return osImage('img/Connect2_LegacyShared.no_division_rectangle.png');
}

/** Columns (A view :164-176): the bookmark count when 1 to 3, else 2. */
const columns = (count: number) => (count <= 3 && count > 0 ? count : 2);

/** MyBookmarks_Album (p:Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Album.mvc.js view :157-300):
    DEPRECATED_GalleryV2 (GutterSize Space small, ItemInPhone as text) around the List `list list-group` (animateItems,
    disable-virtualization); per bookmark a clickable `position-relative` container with the photo (class
    `bookmark-card-image`, plus `bookmark-card-image-household` in the Contacts album; Url = Image, else the group's
    placeholder) and its title ("Information not available" when empty). */
export function MyBookmarks_Album({
  id,
  scope,
  listNumber,
  bookmarkItemList,
  bookmarkGroup,
  onHandleBookmarkedItem,
}: MyBookmarks_AlbumProps) {
  const count = columns(bookmarkItemList.length);
  const imageClass = 'bookmark-card-image' + (bookmarkGroup === G.Contacts ? ' bookmark-card-image-household' : '');
  return (
    <OSBlock name="MyBookmarksFlow.MyBookmarks_Album" id={id}>
      <DEPRECATED_GalleryV2
        id={`${scope}-DEPRECATED_GalleryV2_BookmarkedImages`}
        gutterSize={Space.Small}
        itemInPhone={String(count)}
        itemsInTablet={count}
        itemsInDesktop={count}
      >
        <OSList
          id={`${scope}-List_BookmarkedImages`}
          className="list list-group"
          animateItems
          disableVirtualization
          source={bookmarkItemList}
          keyOf={(b) => b.id}
        >
          {(b, i) => {
            const row = `${scope}-l1-${listNumber}_${String(i)}-`;
            const placeholder = placeholderImage(b);
            return (
              <div
                className="position-relative"
                data-container=""
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  onHandleBookmarkedItem(b.id, i, b.objectType);
                }}
              >
                <img
                  className={imageClass}
                  data-error-placeholder-src={placeholder}
                  data-image=""
                  src={b.image !== '' ? b.image : placeholder}
                />
                <div
                  className="bookmark-card-image-title OSInline"
                  data-container=""
                  id={`${row}BookmarkAlbumTitle_Cont`}
                >
                  <span data-expression="" id={`${row}BookmarkAlbumTitle`}>
                    {b.title !== '' ? b.title : 'Information not available'}
                  </span>
                </div>
              </div>
            );
          }}
        </OSList>
      </DEPRECATED_GalleryV2>
    </OSBlock>
  );
}
