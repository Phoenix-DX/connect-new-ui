import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { BOOKMARKED_ELSEWHERE, BOOKMARKED_PLACES, VITALE_PARENTS } from '@/mocks/fictional/directory';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { addBookmarkToCache, getCachedMyBookmarks } from '@/shared/Connect2_LegacyShared/lib/actions';
import { addLegacyBookmark, legacyBookmarksCollection } from '@/shared/Connect2_MyBookmarks_MUI/mocks';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import BookmarksByGroup from './BookmarksByGroupPage';

/* The page with the flows of its block (useBookmarkGroup) in the app frame on a memory router, on the shared mocks of
   the mock user's legacy bookmarks (7 households, 2 supper meetings and 2 localities, no entity). The mocks keep the
   deletes in memory: each test puts the rows back. */
const HOME = '/UBTConnect/HomeFeed';
const PATH = '/UBTConnect/BookmarksByGroup';
const CAROUSEL = '/UBTConnect/HouseholdCarousel';
const LOCALITY = '/UBTConnect/Locality_Details';
const SUPPER_MEETING = '/UBTConnect/SupperMeeting_Details';
const GET_GROUP = 'Connect2_MyBookmarks_MUI/ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup';
const GET_GROUP_CALL = 'ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup';
const getGroupCalls = () => calledActions().filter((a) => a === GET_GROUP_CALL).length;
const routes = {
  [HOME]: <p>HomeFeed screen</p>,
  [PATH]: <BookmarksByGroup />,
  [CAROUSEL]: <p>HouseholdCarousel screen</p>,
  [LOCALITY]: <p>Locality_Details screen</p>,
  [SUPPER_MEETING]: <p>SupperMeeting_Details screen</p>,
};

const bookmarks = legacyBookmarksCollection();
const seed = structuredClone(bookmarks.all());

const byId = (id: string) => document.querySelector(`[id="${id}"]`) as HTMLElement;
const contactTitles = (container: HTMLElement) =>
  [...container.querySelectorAll('[id$="-Household_Title"]')].map((e) => e.textContent);
const clickRow = (id: string) => {
  const visual = byId(id).querySelector('.result-item_visual');
  if (!visual) throw new Error(`no row ${id}`);
  fireEvent.click(visual);
};

/** Opens the page for a group after HomeFeed, so a back navigation has a previous screen. */
async function open(group: string) {
  const view = renderRoutes(routes, HOME);
  await act(() => view.router.navigate(`${PATH}?BookmarkGroup=${group}`));
  return view;
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setSignedInUser(MOCK_USER_ID);
  setFlags({ C2EnableCarousel: true, C2ExtendedShare: true, mobileDirectoryBookmarkNote: false });
});
afterEach(() => {
  for (const row of bookmarks.all().map((r) => r.Id)) bookmarks.remove(row);
  for (const row of [...seed].reverse()) bookmarks.upsert(structuredClone(row));
  setFlags({});
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('BookmarksByGroup page', () => {
  it('Contacts: OnReady fetches the group once; 7 rows in the cache; bottom bar, back handler and common UI', async () => {
    const bodies = recordBodies(GET_GROUP);
    const { container } = await open('Contacts');
    await waitFor(() => {
      expect(contactTitles(container)).toHaveLength(7);
    });
    expect(screen.getByText('My Contacts')).toBeInTheDocument();
    expect(contactTitles(container)[0]).toBe(BOOKMARKED_ELSEWHERE.riley.title);
    expect(getGroupCalls()).toBe(1);
    expect(bodies[0]).toMatchObject({ BookmarkGroup: 'Contacts', UpdatedTotal: '0', IsFromNavigationHistory: false });
    expect(getCachedMyBookmarks('Contacts').bookmarks).toHaveLength(7);
    expect(byId('b1-BottomBar').querySelector('[id="$b2"]')).not.toBeNull();
    expect(byId('b1-$b24')).toHaveAttribute('data-block', 'NavigationHandler.BackNavigationHandler');
    expect(byId('b1-$b25')).not.toBeNull();
    expect(container.querySelector('[data-block="MyBookmarksFlow.ScreenBlock_BookmarkGroup"]')?.id).toBe('$b1');
  });

  it('a row opens the household carousel; back restores the list from the cache without a fetch', async () => {
    const { container, router, at } = await open('Contacts');
    await waitFor(() => {
      expect(contactTitles(container)).toHaveLength(7);
    });
    clickRow('b1-l1-57_2-Household_List_Item');
    await waitFor(() => {
      expect(at()).toBe(`${CAROUSEL}?In_StartingHouseholdId=${BOOKMARKED_ELSEWHERE.fields.id}`);
    });
    await act(() => router.navigate(-1));
    expect(at()).toBe(`${PATH}?BookmarkGroup=Contacts`);
    expect(contactTitles(container)).toHaveLength(7);
    expect(getGroupCalls()).toBe(1);
  });

  it('a restored view shows the cached group, the bookmark that another screen added included', async () => {
    const { container, router } = await open('Contacts');
    await waitFor(() => {
      expect(contactTitles(container)).toHaveLength(7);
    });
    clickRow('b1-l1-57_0-Household_List_Item');
    await waitFor(() => {
      expect(screen.getByText('HouseholdCarousel screen')).toBeInTheDocument();
    });
    // AssembleDetail ToggleBookmarkItem: AddBookmark, then AddBookmarkToCache (the most recent first).
    const created = addLegacyBookmark('Contacts', 'Contact', VITALE_PARENTS.id, '');
    expect(addBookmarkToCache(created)).toBe(true);
    await act(() => router.navigate(-1));
    expect(contactTitles(container)).toHaveLength(8);
    expect(byId('b1-l1-57_0-Household_Title').textContent).toBe(created.Title);
    expect(byId('b1-l1-57_1-Household_Title').textContent).toBe(BOOKMARKED_ELSEWHERE.riley.title);
    expect(byId('b1-$b23')).toBeNull();
    expect(getGroupCalls()).toBe(1);
  });

  it('Unmark: the row goes, the success message, and the cache follows', async () => {
    const { container } = await open('Contacts');
    await waitFor(() => {
      expect(contactTitles(container)).toHaveLength(7);
    });
    fireEvent.click(byId('b1-l1-57_1-b5-b1-Anchor'));
    fireEvent.click(screen.getByText('Unmark'));
    await waitFor(() => {
      expect(contactTitles(container)).toHaveLength(6);
    });
    expect(contactTitles(container)).not.toContain(BOOKMARKED_ELSEWHERE.ellis.title);
    expect(getFeedbackMessage()).toMatchObject({ message: 'Removed from your Bookmarks', type: 1 });
    expect(getCachedMyBookmarks('Contacts').bookmarks.map((b) => b.ObjectId)).not.toContain(
      BOOKMARKED_ELSEWHERE.ellis.id,
    );
  });

  it('Locations: a locality opens Locality_Details, a supper meeting SupperMeeting_Details', async () => {
    const { router, at } = await open('Locations');
    await waitFor(() => {
      expect(byId('b1-l2_2-Locality_Title').textContent).toBe(BOOKMARKED_PLACES.locality1);
    });
    expect(byId('b1-l2_0-Subdivision_Title').textContent).toBe(BOOKMARKED_PLACES.mainHall);
    clickRow('b1-l2_2-LocalitiesList_Item');
    await waitFor(() => {
      expect(at()).toBe(`${LOCALITY}?LocalityId=8001`);
    });
    await act(() => router.navigate(-1));
    clickRow('b1-l2_1-Subdivisions_List_Item');
    await waitFor(() => {
      expect(at()).toBe(`${SUPPER_MEETING}?In_SubdivsionId=7002`);
    });
  });

  it('Entities: no bookmark, so NoBookmarks', async () => {
    await open('Entities');
    await waitFor(() => {
      expect(byId('b1-$b21')).not.toBeNull();
    });
    expect(screen.getByText('My Entities')).toBeInTheDocument();
  });

  it('a bookmark added elsewhere shows first on the next visit', async () => {
    const created = addLegacyBookmark('Contacts', 'Contact', VITALE_PARENTS.id, '');
    const { container } = await open('Contacts');
    await waitFor(() => {
      expect(contactTitles(container)).toHaveLength(8);
    });
    expect(contactTitles(container)[0]).toBe(created.Title);
  });

  it('the error scenario: the request fails, the Spinner goes and an error message shows', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    await open('Contacts');
    await waitFor(() => {
      expect(getFeedbackMessage()?.type).toBe(3);
    });
    expect(byId('b1-$b23')).toBeNull();
    expect(byId('b1-$b21')).not.toBeNull();
  });
});
