import { fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { getFeedbackMessage, resetFeedbackMessages } from '@/platform/feedback/feedbackStore';
import { useOsNavigate, usePreloadObject } from '@/platform/navigation';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies, setFlags } from '@/test/testSupport';
import MyBookmarks from './MyBookmarksPage';

/* The page with its flows (useMyBookmarks) in the app frame on a memory router, with the MSW mocks of the test setup:
   the mock user's fictional legacy bookmarks (7 households, 2 supper meetings and 2 localities; the most recent 4 of
   each group in the albums). */
const PATH = '/UBTConnect/MyBookmarks';
const FETCH = 'Connect2_MyBookmarks_MUI/ScreenBlock_MyBookmarks/DataActionGetGroupSummaries';

/** A route that the page opens: its name, the preload object it got, and a back link. */
function Stub({ name }: { name: string }) {
  const navigate = useOsNavigate();
  const preload = usePreloadObject();
  return (
    <>
      <pre data-testid="preload">{JSON.stringify(preload)}</pre>
      <button
        type="button"
        onClick={() => {
          navigate(-1 as never);
        }}
      >
        back from {name}
      </button>
    </>
  );
}

const routes = {
  [PATH]: <MyBookmarks />,
  '/UBTConnect/HouseholdCarousel': <Stub name="HouseholdCarousel" />,
  '/UBTConnect/HouseholdDetails': <Stub name="HouseholdDetails" />,
  '/UBTConnect/Locality_Details': <Stub name="Locality_Details" />,
  '/UBTConnect/SupperMeeting_Details': <Stub name="SupperMeeting_Details" />,
  '/UBTConnect/BookmarksByGroup': <Stub name="BookmarksByGroup" />,
};

const cards = () => document.querySelectorAll('[data-block="MyBookmarksFlow.MyBookmarks_Card"]');
const albumItems = () => [...document.querySelectorAll('.bookmark-card-placeholder .position-relative')];
const fetchCount = () => calledActions().filter((c) => c.endsWith('DataActionGetGroupSummaries')).length;
const loaded = async () => {
  await waitFor(() => {
    expect(cards()).toHaveLength(2);
  });
};

beforeEach(() => {
  freshPage();
  resetNavigation();
  resetFeedbackMessages();
  setSignedInUser(MOCK_USER_ID);
});
afterEach(() => {
  setFlags({});
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('MyBookmarks page', () => {
  it('OnReady: the spinner, then GetGroupSummaries once with every variable, and the two group cards', async () => {
    const bodies = recordBodies(FETCH);
    renderRoutes(routes, PATH);
    expect(document.querySelector('[id="b1-$b12"] .list-updating')).not.toBeNull();
    await loaded();
    expect(fetchCount()).toBe(1);
    expect(bodies[0]).toMatchObject({ IsFetchingBookmarks: true, CountSize: 4, IsNavigationFromHistory: false });
    expect(screen.getByText('My Contacts')).toBeInTheDocument();
    expect(screen.getByText('My Locations')).toBeInTheDocument();
    expect(albumItems()).toHaveLength(8);
    expect(screen.getByText('Riley, Felix & Juliet')).toBeInTheDocument();
    expect(document.querySelector('[data-block="MyBookmarksFlow.ScreenBlock_MyBookmarks"]')?.id).toBe('$b1');
    expect(document.querySelector('[data-block="App_Common.CommonUI_InsideLayout"]')?.id).toBe('$b3');
  });

  it('no bookmark (empty): NoBookmarks', async () => {
    sessionStorage.setItem('mock:mock', 'empty');
    renderRoutes(routes, PATH);
    await waitFor(() => {
      expect(document.querySelector('.no-bookmark-top-message')).not.toBeNull();
    });
    expect(cards()).toHaveLength(0);
  });

  it('a network error: NetworkWarning and the message; Try again shows the cards', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    renderRoutes(routes, PATH);
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Try again' })).toBeInTheDocument();
    });
    expect(getFeedbackMessage()?.message).toBe(
      'No internet connection. Please check your network setting and try again…',
    );
    sessionStorage.setItem('mock:mock', 'real');
    fireEvent.click(screen.getByRole('button', { name: 'Try again' }));
    await loaded();
    expect(fetchCount()).toBe(2);
  });

  it('a household opens HouseholdCarousel with every bookmarked household; back shows the cards and refreshes', async () => {
    const { at } = renderRoutes(routes, PATH);
    await loaded();
    fireEvent.click(albumItems()[1] as Element);
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/HouseholdCarousel?In_StartingHouseholdId=35419');
    });
    const preload = JSON.parse(screen.getByTestId('preload').textContent) as {
      CarouselHouseholdItem: { Household: string }[];
    };
    expect(preload.CarouselHouseholdItem).toHaveLength(7);
    expect(preload.CarouselHouseholdItem[1]).toEqual({ Household: '35419' });
    fireEvent.click(screen.getByText('back from HouseholdCarousel'));
    await waitFor(() => {
      expect(at()).toBe(PATH);
    });
    // The view cache restores the cards at once (IsNavigationFromHistory); OnReady fetches again.
    expect(cards()).toHaveLength(2);
    await waitFor(() => {
      expect(fetchCount()).toBe(2);
    });
  });

  it('without the carousel flag, a household opens HouseholdDetails', async () => {
    setFlags({ C2EnableCarousel: false });
    const { at } = renderRoutes(routes, PATH);
    await loaded();
    fireEvent.click(albumItems()[0] as Element);
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/HouseholdDetails?HouseholdId=51207');
    });
  });

  it('a supper meeting opens SupperMeeting_Details; a locality opens Locality_Details', async () => {
    const { at } = renderRoutes(routes, PATH);
    await loaded();
    fireEvent.click(albumItems()[4] as Element);
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/SupperMeeting_Details?In_SubdivsionId=7001');
    });
    fireEvent.click(screen.getByText('back from SupperMeeting_Details'));
    await loaded();
    fireEvent.click(albumItems()[6] as Element);
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/Locality_Details?LocalityId=8001');
    });
  });

  it('View All opens BookmarksByGroup with the group', async () => {
    const { at } = renderRoutes(routes, PATH);
    await loaded();
    fireEvent.click(screen.getAllByText('View All')[1] as HTMLElement);
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/BookmarksByGroup?BookmarkGroup=Locations');
    });
  });
});
