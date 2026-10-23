import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { delay, http } from 'msw';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { setFlag } from '@/platform/flags/flags';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { server } from '@/test/setup';
import { freshPage } from '@/test/testSupport';
import SupperMeeting_Details from './SupperMeeting_DetailsPage';

/* The page in the app frame on a memory router, with the MSW mocks of the test setup: the supper meeting details
   container answers the recorded supper meeting and the eleven fictional households of supper meeting 1210. */
const PATH = '/UBTConnect/SupperMeeting_Details';
const OTHER = '/UBTConnect/Other';
const routes = {
  [PATH]: <SupperMeeting_Details />,
  [OTHER]: <p>other</p>,
  '/UBTConnect/HouseholdDetails': <p>household details</p>,
};

const details = (container: HTMLElement) =>
  container.querySelector('[data-block="Directory_SupperMeetings.SupperMeeting_DetailsBlock"]');
const isSkeleton = (container: HTMLElement) =>
  details(container)
    ?.querySelector('[data-block="ConnectPatterns.SkeletonSection"]')
    ?.firstElementChild?.classList.contains('ubt-skeleton-section');
const householdCards = (container: HTMLElement) =>
  container.querySelectorAll('[data-block="Directory_SupperMeetings.SupperMeeting_HouseholdList"] .ubt-image-card');
const subdivisionCalls = () => (window.__osCalls ?? []).filter((c) => c.action === 'DataActionGetSubdivision').length;

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
  setClientVar('UBTConnect.Bookmarks_IsSynched', true);
  setClientVar('UBTConnect.Notes_IsSynched', true);
});
afterEach(() => {
  setSignedInUser(null);
  setFlag('C2EnableCarousel', null);
});

describe('SupperMeeting_Details page', () => {
  it('renders the title and the supper meeting details of In_SubdivsionId', async () => {
    const { container } = renderRoutes(routes, `${PATH}?In_SubdivsionId=2820`);
    expect(screen.getByText('Supper Meeting')).toBeInTheDocument();
    expect(details(container)?.id).toBe('$b3');
    expect(isSkeleton(container)).toBe(true);
    await waitFor(() => {
      expect(isSkeleton(container)).toBe(false);
      expect(householdCards(container)).toHaveLength(11);
    });
    expect(subdivisionCalls()).toBe(1);
  });

  it('a back navigation shows the skeletons again and refreshes the supper meeting (no block state is kept)', async () => {
    const { container, router } = renderRoutes(routes, `${PATH}?In_SubdivsionId=2820`);
    await waitFor(() => {
      expect(isSkeleton(container)).toBe(false);
    });
    await act(() => router.navigate(OTHER));
    expect(screen.getByText('other')).toBeInTheDocument();
    // The refreshes after the back navigation do not answer: the restored view shows what OnReady starts from.
    server.use(
      http.post('/api/UBTConnect/SupperMeeting_DetailsBlock/DataActionGetSubdivision', () => delay('infinite')),
      http.post('/api/UBTConnect/SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds', () =>
        delay('infinite'),
      ),
    );
    await act(() => router.navigate(-1));
    await waitFor(() => {
      expect(subdivisionCalls()).toBe(2);
    });
    expect(isSkeleton(container)).toBe(true);
    expect(householdCards(container)).toHaveLength(4);
  });

  it('reads the carousel flag: off, a household click opens HouseholdDetails', async () => {
    setFlag('C2EnableCarousel', 'off');
    const { container, at } = renderRoutes(routes, `${PATH}?In_SubdivsionId=2820`);
    await waitFor(() => {
      expect(householdCards(container)).toHaveLength(11);
    });
    const third = householdCards(container)[2];
    if (!third) throw new Error('no third card');
    act(() => {
      fireEvent.click(third);
    });
    await waitFor(() => {
      expect(at()).toBe('/UBTConnect/HouseholdDetails?HouseholdId=91005');
    });
  });
});
