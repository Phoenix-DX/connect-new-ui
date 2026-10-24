import { fireEvent, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { BookmarkGroupSummary, GroupSummaryBookmark } from '@/api/bookmark';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { freshPage } from '@/test/testSupport';
import { MyBookmarksView, type MyBookmarksViewProps, type MyBookmarksViewState } from './MyBookmarksView';

/* The view from props, on a memory router (MenuIcon needs one). Fictional bookmarks with photos. */
const PATH = '/UBTConnect/MyBookmarks';

const row = (id: string, group: string, objectType: string, title: string): GroupSummaryBookmark => ({
  id,
  group,
  objectType,
  objectId: String(Number(id) + 500),
  title,
  image: `https://images.example/${id}.jpg`,
  isDeceased: false,
  recordDisabled: false,
  recordNotAvailable: false,
});
const summary = (bookmarks: GroupSummaryBookmark[]): BookmarkGroupSummary => ({
  group: '',
  totalCount: String(bookmarks.length),
  bookmarks,
});
const EMPTY = summary([]);
const CONTACTS = summary([
  row('1', 'Contacts', 'Contact', 'Ashby, Tom & Ruth'),
  row('2', 'Contacts', 'Contact', 'Brennan, Leo & Ada'),
]);
const LOCATIONS = summary([row('3', 'Locations', 'Locality', 'Lakeside')]);

const STATE: MyBookmarksViewState = {
  hasBookmarks: true,
  isFetchingBookmarks: false,
  isNavigationFromHistory: false,
  hasNetworkError: false,
  contacts: CONTACTS,
  locations: LOCATIONS,
  communityBusinesses: EMPTY,
};

function renderView(state: Partial<MyBookmarksViewState> = {}, props: Partial<MyBookmarksViewProps> = {}) {
  const handlers = {
    onBookmarkedItem: vi.fn(),
    onTryAgain: vi.fn(),
    onNavigateToBookmarkGroup: vi.fn(),
  };
  renderRoutes(
    {
      [PATH]: (
        <MyBookmarksView
          id="$b1"
          state={{ ...STATE, ...state }}
          bottomBar={<nav>bottom bar</nav>}
          {...handlers}
          {...props}
        />
      ),
    },
    PATH,
  );
  return handlers;
}

const cards = () => document.querySelectorAll('[data-block="MyBookmarksFlow.MyBookmarks_Card"]');
const spinner = () => document.querySelector('[id="b1-$b12"] .list-updating');

beforeEach(() => {
  freshPage();
  resetNavigation();
});

describe('MyBookmarksView', () => {
  it('shows the title, the bottom bar and a card per group with bookmarks', () => {
    renderView();
    expect(screen.getByText('My Bookmarks')).toBeInTheDocument();
    expect(screen.getByText('bottom bar')).toBeInTheDocument();
    expect(cards()).toHaveLength(2);
    expect(screen.getByText('My Contacts')).toBeInTheDocument();
    expect(screen.getByText('My Locations')).toBeInTheDocument();
    expect(screen.queryByText('My Entities')).not.toBeInTheDocument();
    expect(screen.getByText('Brennan, Leo & Ada')).toBeInTheDocument();
    expect(document.getElementById('b1-FreeSubscriptionAlert')).not.toBeNull();
  });

  it('a bookmark raises OnHandle_BookmarkedItem; a card title and View All raise NavigateTo_BookmarkGroup', () => {
    const handlers = renderView();
    fireEvent.click(screen.getByText('Brennan, Leo & Ada'));
    expect(handlers.onBookmarkedItem).toHaveBeenCalledWith('2', 1, 'Contact');
    fireEvent.click(screen.getByText('My Locations'));
    expect(handlers.onNavigateToBookmarkGroup).toHaveBeenCalledWith('Locations');
    fireEvent.click(screen.getAllByText('View All')[0] as HTMLElement);
    expect(handlers.onNavigateToBookmarkGroup).toHaveBeenLastCalledWith('Contacts');
  });

  it('fetching on a new visit: the spinner only', () => {
    renderView({ isFetchingBookmarks: true });
    expect(spinner()).not.toBeNull();
    expect(cards()).toHaveLength(0);
  });

  it('fetching on a restored view: the restored cards, no spinner', () => {
    renderView({ isFetchingBookmarks: true, isNavigationFromHistory: true });
    expect(spinner()).toBeNull();
    expect(cards()).toHaveLength(2);
  });

  it('no bookmark: NoBookmarks with its two texts', () => {
    renderView({ hasBookmarks: false, contacts: EMPTY, locations: EMPTY });
    expect(document.querySelector('.no-bookmark-top-message')?.textContent).toBe("You'll find your bookmarks here");
    expect(document.querySelector('.no-bookmark-bottom-message')?.textContent).toBe(
      "You can get back to a page that'simportant to you by adding a bookmark ",
    );
    expect(cards()).toHaveLength(0);
  });

  it('a network error: NetworkWarning, whose "Try again" raises TryAgain', () => {
    const handlers = renderView({ hasNetworkError: true });
    expect(cards()).toHaveLength(0);
    fireEvent.click(screen.getByRole('button', { name: 'Try again' }));
    expect(handlers.onTryAgain).toHaveBeenCalledTimes(1);
  });
});
