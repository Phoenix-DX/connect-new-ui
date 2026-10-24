import type { ReactNode } from 'react';
import type { BookmarkGroupSummary } from '@/api/bookmark';
import { NoBookmarks } from '@/components/bookmark/NoBookmarks';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { MenuAction } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { Spinner } from '@/components/ui/Spinner';
import { MyBookmarks_Group } from '@/shared/UBTConnect/lib/staticEntities';
import { Dialog_AccessRestrictedAction_Legacy } from '@/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import { MyBookmarks_Album } from './MyBookmarks_Album';
import { MyBookmarks_Card } from './MyBookmarks_Card';
import { NetworkWarning } from './NetworkWarning';

/** The block variables that the view reads. */
export interface MyBookmarksViewState {
  hasBookmarks: boolean;
  isFetchingBookmarks: boolean;
  isNavigationFromHistory: boolean;
  hasNetworkError: boolean;
  contacts: BookmarkGroupSummary;
  locations: BookmarkGroupSummary;
  communityBusinesses: BookmarkGroupSummary;
}

export interface MyBookmarksViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** The block variables (rendered). */
  state: MyBookmarksViewState;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** OnHandle_BookmarkedItem(BookmarkId, ItemPosition, ObjectType) of an album. */
  onBookmarkedItem: (bookmarkId: string, itemPosition: number, objectType: string) => void;
  /** TryAgain of NetworkWarning. */
  onTryAgain: () => void;
  /** Event NavigateTo_BookmarkGroup(BookmarkGroup), raised by the title and "View All" of a group card. */
  onNavigateToBookmarkGroup: (bookmarkGroup: string) => void;
}

/** A group card: its summary, its group, the instance names of its card and album, their id prefixes and the runtime
    number of the album's List. */
interface GroupCard {
  summary: BookmarkGroupSummary;
  group: string;
  card: string;
  album: string;
  alias: [string, string];
  list: string;
}

/** The view of the block ScreenBlock_MyBookmarks: LegacyLayout with the back arrow (MenuAction Menu) and the title
    "My Bookmarks". The content, in this order:
    - fetching on a new visit: the Spinner;
    - a network error: NetworkWarning, whose "Try again" raises TryAgain;
    - bookmarks: a MyBookmarks_Card with its MyBookmarks_Album for each group that has a bookmark (Contacts, Locations,
      Entities), and the FreeSubscriptionAlert dialog;
    - no bookmark: NoBookmarks with its two texts.
    A restored view (IsNavigationFromHistory) shows its content while it fetches again. Props only.
    @origin Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks */
export function MyBookmarksView({
  id,
  state,
  bottomBar,
  commonUIElements,
  onBookmarkedItem,
  onTryAgain,
  onNavigateToBookmarkGroup,
}: MyBookmarksViewProps) {
  const scope = id.replace('$', '');

  const groups: GroupCard[] = [
    {
      summary: state.contacts,
      group: MyBookmarks_Group.Contacts,
      card: 'MyBookmarks_Contacts',
      album: 'MyBookmarksAlbum_Contacts',
      alias: ['b3', 'b4'],
      list: '57',
    },
    {
      summary: state.locations,
      group: MyBookmarks_Group.Locations,
      card: 'MyBookmarks_Locations',
      album: 'MyBookmarksAlbum_Locations',
      alias: ['b5', 'b6'],
      list: '58',
    },
    /* Entities: not captured (no entity bookmark on TST); the list number follows the two captured ones. */
    {
      summary: state.communityBusinesses,
      group: MyBookmarks_Group.Entities,
      card: 'MyBookmarks_Entities',
      album: 'MyBookmarksAlbum_Entities',
      alias: ['b7', 'b8'],
      list: '59',
    },
  ];

  const content =
    !state.isFetchingBookmarks || state.isNavigationFromHistory ? (
      !state.hasNetworkError ? (
        state.hasBookmarks ? (
          <>
            {groups.map(
              ({ summary, group, card, album, alias, list }) =>
                summary.bookmarks.length > 0 && (
                  <MyBookmarks_Card
                    key={group}
                    id={`${scope}-${card}`}
                    scope={`${scope}-${alias[0]}`}
                    objectGroup={group}
                    showViewAll={Number(summary.totalCount) >= 1}
                    onNavigateToViewAll={onNavigateToBookmarkGroup}
                  >
                    <MyBookmarks_Album
                      id={`${scope}-${album}`}
                      scope={`${scope}-${alias[1]}`}
                      listNumber={list}
                      bookmarkItemList={summary.bookmarks}
                      bookmarkGroup={group}
                      onHandleBookmarkedItem={onBookmarkedItem}
                    />
                  </MyBookmarks_Card>
                ),
            )}
            <Dialog_AccessRestrictedAction_Legacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b9`} />
          </>
        ) : (
          <NoBookmarks
            id={`${scope}-$b10`}
            isToDisplay={!state.hasBookmarks}
            titlePlaceholder={
              <div className="no-bookmark-top-message" data-container="">
                You&apos;ll find your
                <br /> bookmarks here
              </div>
            }
            textPlaceholder={
              <div className="no-bookmark-bottom-message" data-container="">
                You can get back to a page that&apos;s
                <br />
                important to you by adding a bookmark{' '}
              </div>
            }
          />
        )
      ) : (
        <NetworkWarning id={`${scope}-$b11`} onTryAgain={onTryAgain} />
      )
    ) : (
      <Spinner id={`${scope}-$b12`} showLoader={state.isFetchingBookmarks} />
    );

  return (
    <OSBlock name="MyBookmarksFlow.ScreenBlock_MyBookmarks" id={id}>
      <LegacyLayout
        id={`${scope}-$b1`}
        menu={<div id={`${scope}-Menu`} />}
        headerLeft={<MenuIcon id={`${scope}-$b2`} menuAction={MenuAction.Menu} />}
        title={
          <div data-container="" style={{ textAlign: 'center' }}>
            My Bookmarks
          </div>
        }
        content={content}
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
    </OSBlock>
  );
}
