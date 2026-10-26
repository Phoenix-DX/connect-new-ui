import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { stubCarouselLayout } from '@/components/ui/Carousel/testLayout';
import { calledActions, freshPage } from '@/test/testSupport';
import HomeFeed from './HomeFeedPage';

/* The page with the flows of its blocks (useFeedServices, useFeedUpdates) in the app frame on a memory router, with
   the MSW mocks: the recorded TST services and the three fictional update items. The carousel has the captured
   HomeFeed width (342 px). */
const HOME = '/UBTConnect/HomeFeed';
const SEARCH = '/UBTConnect/Search';
const routes = {
  [HOME]: <HomeFeed />,
  [SEARCH]: <p>Search screen</p>,
  '/UBTConnect/OrbitLanding': <p>OrbitLanding screen</p>,
};
const byId = (id: string) => document.getElementById(id);

async function open() {
  const view = renderRoutes(routes, HOME);
  await waitFor(() => {
    expect(byId('b5-l2-53_1-l2-100_0-$b10')?.textContent).toBe('Orbit');
  });
  return view;
}

beforeEach(() => {
  freshPage();
  resetNavigation();
  stubCarouselLayout(342);
});
afterEach(() => {
  vi.unstubAllGlobals();
  sessionStorage.clear();
});

describe('HomeFeed page', () => {
  it('shows the services card and the latest updates from their data actions', async () => {
    await open();
    await waitFor(() => {
      expect(byId('b9-l1-89_0-$b3')?.textContent).toContain('James Hargreaves');
    });
    expect(byId('Section_Updates')).not.toBeNull();
    expect(calledActions()).toEqual(
      expect.arrayContaining(['FeedBlock_Services/DataActionGetServices', 'FeedBlock_Updates/DataActionFetchUpdates']),
    );
  });

  it('a service opens its screen', async () => {
    const { at } = await open();
    fireEvent.click(byId('b5-l2-53_1-l2-100_0-$b10')?.firstElementChild as Element);
    expect(await screen.findByText('OrbitLanding screen')).toBeInTheDocument();
    expect(at()).toBe('/UBTConnect/OrbitLanding');
  });

  it('Event_NoUpdates hides Section_Updates; back on HomeFeed, the updates are not fetched again', async () => {
    sessionStorage.setItem('mock:mock', 'empty');
    const view = renderRoutes(routes, HOME);
    await waitFor(() => {
      expect(calledActions()).toContain('FeedBlock_Updates/DataActionFetchUpdates');
    });
    await waitFor(() => {
      expect(byId('Section_Updates')).toBeNull();
    });
    await act(() => view.router.navigate(SEARCH));
    window.__osCalls = [];
    await act(() => view.router.navigate(-1));
    await waitFor(() => {
      expect(calledActions()).toContain('FeedBlock_Services/DataActionGetServices');
    });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(byId('Section_Updates')).toBeNull();
    expect(calledActions()).not.toContain('FeedBlock_Updates/DataActionFetchUpdates');
  });
});
