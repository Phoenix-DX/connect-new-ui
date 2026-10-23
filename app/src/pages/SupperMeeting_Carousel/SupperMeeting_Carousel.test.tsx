import { act, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { setPreloadObject } from '@/platform/navigation';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { stubCarouselLayout } from '@/shared/osui/Carousel/testLayout';
import { freshPage } from '@/test/testSupport';
import SupperMeeting_Carousel from './SupperMeeting_CarouselPage';

/* The page in the app frame on a memory router, with the MSW mocks of the test setup: opened by URL, it shows the
   mock preload of the route (pages/SupperMeeting_Carousel/mocks.ts: 3 supper meetings, the start one first). */
const PATH = '/UBTConnect/SupperMeeting_Carousel';
const OTHER = '/UBTConnect/Other';
const routes = { [PATH]: <SupperMeeting_Carousel />, [OTHER]: <p>other</p> };

const blocks = (container: HTMLElement, name: string) => container.querySelectorAll(`[data-block="${name}"]`);
/** The index of the active slide of the carousel. */
const activeSlide = (container: HTMLElement) =>
  Array.from(container.querySelectorAll('.splide__slide')).findIndex((s) => s.classList.contains('is-active'));

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

describe('SupperMeeting_Carousel page', () => {
  it('renders the title and one supper meeting slide per preloaded id', () => {
    const { container } = renderRoutes(routes, `${PATH}?In_StartingSupperMeetingId=2820`);
    expect(screen.getByText('Supper Meeting')).toBeInTheDocument();
    expect(blocks(container, 'Directory_Caroussel.EntitiesCarousel_Element')).toHaveLength(3);
    const slides = blocks(container, 'Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails');
    expect(slides).toHaveLength(3);
    for (const slide of slides) {
      expect(slide.firstElementChild?.getAttribute('data-block')).toBe(
        'Directory_SupperMeetings.SupperMeeting_DetailsBlock',
      );
    }
    expect(activeSlide(container)).toBe(0);
  });

  it('each slide renders the supper meeting details container with its own supper meeting (the carousel slot)', async () => {
    const { container } = renderRoutes(routes, `${PATH}?In_StartingSupperMeetingId=2820`);
    const slides = blocks(container, 'Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails');
    const cardsOf = (slide: Element | undefined) =>
      slide?.querySelectorAll('[data-block="Directory_SupperMeetings.SupperMeeting_HouseholdList"] .ubt-image-card')
        .length;
    // The mock households: 9202 has seven, 9203 five, any other id (2820) eleven.
    await waitFor(() => {
      expect([cardsOf(slides[0]), cardsOf(slides[1]), cardsOf(slides[2])]).toEqual([11, 7, 5]);
    });
  });

  it('starts at In_StartingSupperMeetingId of the preload object, and a back navigation keeps the list', async () => {
    setPreloadObject({ SupperMeetingIds: ['9202', '9203', '9204'] });
    const { container, router } = renderRoutes(routes, `${PATH}?In_StartingSupperMeetingId=9203`);
    expect(blocks(container, 'Directory_Caroussel.EntitiesCarousel_Element')).toHaveLength(3);
    expect(activeSlide(container)).toBe(1);

    await act(() => router.navigate(OTHER));
    expect(screen.getByText('other')).toBeInTheDocument();
    // Back: no preload object is waiting now; the view cache brings back the list and the start position.
    await act(() => router.navigate(-1));
    expect(blocks(container, 'Directory_Caroussel.EntitiesCarousel_Element')).toHaveLength(3);
    expect(activeSlide(container)).toBe(1);
  });
});
