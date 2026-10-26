import { screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { stubCarouselLayout } from '@/components/ui/Carousel/testLayout';
import { freshPage } from '@/test/testSupport';
import HouseholdCarousel from './HouseholdCarouselPage';

/* The page in the app frame on a memory router, with the MSW mocks of the test setup: opened by URL, it shows the
   mock preload of the route (pages/HouseholdCarousel/mocks.ts: the 23 households of locality 252, the start household
   first). Each household slide renders the household details container that the page gives the carousel as a slot. */
const PATH = '/UBTConnect/HouseholdCarousel';

const title = () => document.querySelector('[data-block="Layouts.Layout_DetailPage"] [data-expression]')?.textContent;
const blocks = (container: HTMLElement, name: string) => container.querySelectorAll(`[data-block="${name}"]`);

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
  setClientVar('UBTConnect.Bookmarks_IsSynched', true);
  setClientVar('UBTConnect.Notes_IsSynched', true);
  stubCarouselLayout(390);
});
afterEach(() => {
  setSignedInUser(null);
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('HouseholdCarousel page', () => {
  it('renders one slide per household and the household details in the slides near the start', () => {
    const { container } = renderRoutes({ [PATH]: <HouseholdCarousel /> }, `${PATH}?In_StartingHouseholdId=42438`);
    expect(blocks(container, 'Directory_Caroussel.EntitiesCarousel_Element')).toHaveLength(23);
    // RenderBuffer 3 around the start: slides 1 to 4.
    const slides = blocks(container, 'Directory_Caroussel.EntitiesCarousel_HouseholdDetails');
    expect(slides).toHaveLength(4);
    for (const slide of slides) {
      expect(slide.firstElementChild?.getAttribute('data-block')).toBe('Directory_Household.HouseholdDetails_Block');
    }
    expect(screen.getByText('1 / 23')).toBeInTheDocument();
    expect(title()).toBe('Unavailable, Unavailable');
  });

  it('shows "Locality, Country" of the active household once its details are fetched', async () => {
    renderRoutes({ [PATH]: <HouseholdCarousel /> }, `${PATH}?In_StartingHouseholdId=42438`);
    await waitFor(
      () => {
        expect(title()).toBe('Bahia Blanca, Argentina');
      },
      { timeout: 4000 },
    );
  });
});
