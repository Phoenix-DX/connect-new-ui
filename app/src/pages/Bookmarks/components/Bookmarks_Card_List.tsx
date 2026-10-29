/** @origin UBTConnect.Bookmarks.Bookmarks_Card_List */
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { child, scopeOf } from '@/components/ui/os/blockIds';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { EmptyState } from '@/components/ui/EmptyState';
import { Skeleton } from '@/components/ui/Skeleton';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import type { BookmarkCardItem } from '@/api/bookmark';
import { Bookmarks_Card_Item } from './Bookmarks_Card_Item';

const UBT_Icons2_Bookmark = 'connect-icon-bookmark';

interface Bookmarks_Card_ListProps {
  id?: string;
  inBookmarks: BookmarkCardItem[];
  inIsLoading?: boolean;
  inSearchString?: string;
  /** Event OnClick_BookmarkCardItem(ObjectId, ObjectType). */
  onOnClickBookmarkCardItem?: (objectId: string, objectType: string) => void;
  /** Event Item_Unbookmarked. */
  onItemUnbookmarked?: () => void;
  /** ToggleBookmarkItem_C2 for the Unmark action of the cards (given by the page). */
  unbookmark?: (objectId: string, bookmarkType: string) => Promise<unknown>;
  /** Event OnLoadMore. The List raises no new OnScrollEnding until the Promise it returns settles. */
  onOnLoadMore?: () => Promise<void> | void;
}

/** Bookmarks list (Bookmarks_Card_List.mvc.js view :200-420): a SkeletonSection (In_IsLoading) with EmptyList ("No
    Bookmarks found") when In_Bookmarks is empty, else the List of Bookmarks_Card_Item ("list list-group list--gap-s").
    BookmarksCardList_OnScrollEnding (:461-489) raises OnLoadMore. */
export function Bookmarks_Card_List({
  id,
  inBookmarks,
  inIsLoading = false,
  inSearchString = '',
  onOnClickBookmarkCardItem,
  onItemUnbookmarked,
  unbookmark,
  onOnLoadMore,
}: Bookmarks_Card_ListProps) {
  const p = scopeOf(id);
  const textOptions = { Color: UBT_Color.Neutral10, FontSize: UBT_FontSize.Small };
  return (
    <OSBlock name="Bookmarks.Bookmarks_Card_List" id={id}>
      <CustomContainer
        id={child(p, 1)}
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Base },
        }}
      >
        <Skeleton id={child(p, 2)} isLoading={inIsLoading}>
          {inBookmarks.length === 0 ? (
            <EmptyState
              id={child(p, 3)}
              iconId={UBT_Icons2_Bookmark}
              title={
                <CustomText
                  id={child(p, 4)}
                  inText="No Bookmarks found"
                  inTextOptions={{
                    Color: UBT_Color.Neutral9,
                    FontSize: UBT_FontSize.Base,
                    FontWeight: UBT_FontWeight.SemiBold,
                  }}
                />
              }
              text={
                <>
                  <CustomText
                    id={child(p, 5)}
                    inText="We were unable to find any Bookmarks to"
                    inTextOptions={textOptions}
                  />
                  <CustomText id={child(p, 6)} inText="display." inTextOptions={textOptions} />
                </>
              }
            />
          ) : (
            <OSList
              source={inBookmarks}
              keyOf={(card, i) => `${card.bookmarkCategoryId}|${card.itemId}|${String(i)}`}
              className="list list-group list--gap-s"
              animateItems
              positionRelative
              onScrollEnding={() => onOnLoadMore?.()}
            >
              {(card, i) => (
                <Bookmarks_Card_Item
                  id={`${p}-l1-112_${String(i)}-$b7`}
                  bookmark_CardItem={card}
                  inSearchString={inSearchString}
                  unbookmark={unbookmark}
                  onOnClickCardItem={() => onOnClickBookmarkCardItem?.(card.itemId, card.bookmarkCategoryId)}
                  onItem_Unbookmarked={onItemUnbookmarked}
                />
              )}
            </OSList>
          )}
        </Skeleton>
      </CustomContainer>
    </OSBlock>
  );
}
