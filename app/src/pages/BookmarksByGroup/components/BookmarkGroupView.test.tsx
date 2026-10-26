import { fireEvent, render, screen } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import type { Bookmark } from '@/api/bookmark';
import { BOOKMARKED_ELSEWHERE, BOOKMARKED_PLACES } from '@/mocks/fictional/directory';
import { INITIAL_BOOKMARK_GROUP_STATE } from '@/pages/BookmarksByGroup/hooks/bookmarkGroupState';
import { BookmarkGroupView } from './BookmarkGroupView';

/* The view of the bookmark group block, props only, with fictional bookmarks (src/mocks/fictional/directory.ts). */
const B = BOOKMARKED_ELSEWHERE;
const details = (d: Partial<Bookmark['details']> = {}): Bookmark['details'] => ({
  areasServed: '',
  childrenNames: '',
  countryName: '',
  householdCount: '0',
  isDeceased: false,
  isMainHall: false,
  localityId: '0',
  localityName: '',
  shareObjectTypeId: '',
  ...d,
});
const bookmark = (id: string, objectType: string, objectId: string, title: string, d = details()): Bookmark => ({
  id,
  objectId,
  objectType,
  title,
  image: '',
  note: '',
  recordDisabled: false,
  recordNotAvailable: false,
  dateCreatedUtc: '2026-01-01T00:00:00',
  details: d,
});
const CONTACTS = [
  bookmark(
    '1',
    'Contact',
    B.riley.id,
    B.riley.title,
    details({ childrenNames: B.riley.children, localityName: 'Seattle', countryName: 'United States' }),
  ),
  bookmark('2', 'Contact', B.ellis.id, B.ellis.title, details({ countryName: 'New Zealand' })),
];
const LOCATIONS = [
  bookmark('8', 'Subdivision', '7001', BOOKMARKED_PLACES.mainHall, details({ householdCount: '1' })),
  bookmark(
    '10',
    'Locality',
    '8001',
    BOOKMARKED_PLACES.locality1,
    details({ localityId: '8001', localityName: BOOKMARKED_PLACES.locality1, countryName: 'Argentina' }),
  ),
];
const ENTITIES = [
  bookmark('20', 'OneSchool Global', '501', '', details({ areasServed: 'Lules', countryName: 'Argentina' })),
];

type Props = ComponentProps<typeof BookmarkGroupView>;
function renderView(props: Partial<Props> = {}) {
  const handlers = {
    onClickBookmarkedItem: vi.fn(),
    onBookmarkToggle: vi.fn(),
    onShareItem: vi.fn(),
    onSaveBookmarkNote: vi.fn(),
  };
  const view = render(
    <MemoryRouter>
      <BookmarkGroupView
        id="$b1"
        bookmarkGroup="Contacts"
        bookmarkedItems={CONTACTS}
        isFetchingBookmarks={false}
        isFromNavigationHistory={false}
        wasSearched={false}
        editingBookmarkNote={INITIAL_BOOKMARK_GROUP_STATE.editingBookmarkNote}
        hasBookmarkNote={false}
        hasExtendedShare
        {...handlers}
        backNavigationHandler={<div id="b1-$b24">back</div>}
        shareSheet={<div id="b1-$b25">sheet</div>}
        bottomBar={<div id="$b2">bar</div>}
        {...props}
      />
    </MemoryRouter>,
  );
  return { ...view, handlers };
}
const byId = (id: string) => document.querySelector(`[id="${id}"]`);

describe('BookmarkGroupView', () => {
  it('Contacts: the title, one row per bookmark with its title, children and place, and the slots', () => {
    const { container } = renderView();
    expect(screen.getByText('My Contacts')).toBeInTheDocument();
    expect(container.querySelector('[data-block="MyBookmarksFlow.ScreenBlock_BookmarkGroup"]')?.id).toBe('$b1');
    expect(byId('b1-List_Contacts')).not.toBeNull();
    expect(byId('b1-l1-57_0-Household_Title')?.textContent).toBe(B.riley.title);
    expect(byId('b1-l1-57_0-Household_Description')?.textContent).toBe(B.riley.children);
    expect(byId('b1-l1-57_0-Household_Tag')?.textContent).toBe('Seattle, United States');
    expect(byId('b1-l1-57_1-Household_Tag')?.textContent).toBe('New Zealand');
    expect(byId('b1-BookmarkNoteAddEdit_Popup')).not.toBeNull();
    expect(byId('b1-DeleteNote_Popup')).not.toBeNull();
    expect(byId('b1-FreeSubscriptionAlert')).not.toBeNull();
    expect(byId('b1-BottomBar')?.firstElementChild?.id).toBe('$b2');
    expect(byId('b1-$b24')).not.toBeNull();
    expect(byId('b1-$b25')?.previousElementSibling?.id).toBe('b1-$b1');
  });

  it('a row click raises OnClick_BookmarkedItem with the bookmark id and the row number', () => {
    const { handlers } = renderView();
    const visual = byId('b1-l1-57_1-Household_List_Item')?.querySelector('.result-item_visual');
    if (!visual) throw new Error('row');
    fireEvent.click(visual);
    expect(handlers.onClickBookmarkedItem).toHaveBeenCalledWith('2', 1);
  });

  it('the row menu: Unmark raises BookmarkToggle, Share raises ShareItem with the household', () => {
    const { handlers } = renderView();
    const anchor = byId('b1-l1-57_0-b5-b1-Anchor');
    if (!anchor) throw new Error('anchor');
    fireEvent.click(anchor);
    fireEvent.click(screen.getByText('Unmark'));
    expect(handlers.onBookmarkToggle).toHaveBeenCalledWith('1', 0);
    fireEvent.click(anchor);
    fireEvent.click(screen.getByText('Share'));
    expect(handlers.onShareItem).toHaveBeenCalledWith(CONTACTS[0], '', B.riley.id, false, 'Household');
  });

  it('Locations: a supper meeting row with its household count and a locality badge row', () => {
    renderView({ bookmarkGroup: 'Locations', bookmarkedItems: LOCATIONS });
    expect(screen.getByText('My Locations')).toBeInTheDocument();
    expect(byId('b1-l2_0-Subdivision_Title')?.textContent).toBe(BOOKMARKED_PLACES.mainHall);
    expect(byId('b1-l2_0-Subdivision_Tag')?.textContent).toBe('1 Household');
    expect(byId('b1-l2_1-Locality_Title')?.textContent).toBe(BOOKMARKED_PLACES.locality1);
    expect(byId('b1-l2_1-b8-Result_Item_Badge_Text')?.textContent).toBe('V');
    expect(byId('b1-l2_1-Locality_Tag')?.textContent).toBe('Argentina');
  });

  it('Entities: "Information not available" without a title, and the areas served with the country', () => {
    renderView({ bookmarkGroup: 'Entities', bookmarkedItems: ENTITIES });
    expect(byId('b1-l3_0-Entity_Title')?.textContent).toBe('Information not available');
    expect(byId('b1-l3_0-Entity_Tag')?.textContent).toBe('Lules, Argentina');
  });

  it('the BookmarkNote placeholder shows only with GetHasBookmarNote', () => {
    const { container, unmount } = renderView();
    expect(container.textContent).not.toContain('MyBookmarksFlow.BookmarkNote');
    unmount();
    const withNote = renderView({ hasBookmarkNote: true });
    expect(withNote.container.textContent).toContain('MyBookmarksFlow.BookmarkNote (bookmark 1');
  });

  it('fetching: the Spinner; a restored view keeps the list', () => {
    const { unmount } = renderView({ isFetchingBookmarks: true, bookmarkedItems: [] });
    expect(byId('b1-$b23')).not.toBeNull();
    expect(byId('b1-List_Contacts')).toBeNull();
    unmount();
    renderView({ isFetchingBookmarks: true, isFromNavigationHistory: true });
    expect(byId('b1-$b23')).toBeNull();
    expect(byId('b1-List_Contacts')).not.toBeNull();
  });

  it('an empty list: NoBookmarks, or MessageList_NoResults after a search', () => {
    const { unmount } = renderView({ bookmarkedItems: [] });
    expect(byId('b1-$b21')).not.toBeNull();
    expect(screen.getByText(/bookmarks here/)).toBeInTheDocument();
    unmount();
    renderView({ bookmarkedItems: [], wasSearched: true });
    expect(byId('b1-$b22')).not.toBeNull();
    expect(byId('b1-$b21')).toBeNull();
  });
});
