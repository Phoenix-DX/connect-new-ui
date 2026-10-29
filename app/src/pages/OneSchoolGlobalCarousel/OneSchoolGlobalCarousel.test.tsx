import { screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { setPreloadObject } from '@/platform/navigation';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setClientVar, setSignedInUser } from '@/platform/session/session';
import { stubCarouselLayout } from '@/components/ui/Carousel/testLayout';
import { freshPage } from '@/test/testSupport';
import OneSchoolGlobalCarousel from './OneSchoolGlobalCarouselPage';

/* The page in the app frame on a memory router, with the MSW mocks of the test setup. Opened by URL in the default
   scenario, it shows the mock preload of the route (pages/OneSchoolGlobalCarousel/mocks.ts: the four carousel
   schools, the start school first); in the `empty` scenario it shows no slide, as the TST capture; opened from Notes,
   the preload object that Notes set. Each school slide renders the school details container in the
   EntitiesCarousel_OneSchoolGlobal slot. */
const PATH = '/UBTConnect/OneSchoolGlobalCarousel';

const blocks = (container: HTMLElement, name: string) => container.querySelectorAll(`[data-block="${name}"]`);
const title = () => document.querySelector('[data-block="Layouts.Layout_DetailPage"] .header-title')?.textContent;

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
  setClientVar('UBTConnect.Bookmarks_IsSynched', true);
  setClientVar('UBTConnect.Notes_IsSynched', true);
  stubCarouselLayout(390);
});
afterEach(() => {
  sessionStorage.removeItem('mock:mock');
  setSignedInUser(null);
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('OneSchoolGlobalCarousel page', () => {
  it('opened by URL in the empty scenario: no slide, the title, no back navigation handler (TST capture)', () => {
    sessionStorage.setItem('mock:mock', 'empty');
    const { container } = renderRoutes({ [PATH]: <OneSchoolGlobalCarousel /> }, `${PATH}?In_StartingObjectId=1430`);
    expect(blocks(container, 'Directory_Caroussel.EntitiesCarousel')).toHaveLength(1);
    expect(blocks(container, 'Directory_Caroussel.EntitiesCarousel_Element')).toHaveLength(0);
    // The screen's own BackNavigationHandler (content); CommonUI_InsideLayout has one of its own.
    expect(
      container.querySelectorAll('.content-middle [data-block="NavigationHandler.BackNavigationHandler"]'),
    ).toHaveLength(0);
    expect(title()).toBe('OneSchool Global');
  });

  it('opened by URL in the default scenario: one slide per mock school, each with the school details block', async () => {
    const { container } = renderRoutes({ [PATH]: <OneSchoolGlobalCarousel /> }, `${PATH}?In_StartingObjectId=1432`);
    expect(blocks(container, 'Directory_Caroussel.EntitiesCarousel_Element')).toHaveLength(4);
    const slides = blocks(container, 'Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal');
    expect(slides).toHaveLength(4);
    for (const slide of slides) {
      expect(slide.firstElementChild?.getAttribute('data-block')).toBe(
        'Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block',
      );
    }
    await waitFor(
      () => {
        expect(screen.getByText('OneSchool Tandil')).toBeInTheDocument();
        expect(screen.getByText('OneSchool Alem')).toBeInTheDocument();
      },
      { timeout: 4000 },
    );
  });

  it('opened by URL in the captured scenario: the one slide of school 1430 that TST showed (empty texts, no photo)', async () => {
    sessionStorage.setItem('mock:mock', 'captured');
    const { container } = renderRoutes({ [PATH]: <OneSchoolGlobalCarousel /> }, `${PATH}?In_StartingObjectId=1430`);
    expect(blocks(container, 'Directory_Caroussel.EntitiesCarousel_Element')).toHaveLength(1);
    const details = blocks(container, 'Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block');
    expect(details).toHaveLength(1);
    // The block's own aliases under the instance prefix: SubLayout_DirectoryDetailScreen is <prefix>-$b1.
    const block = details[0];
    expect(block?.firstElementChild?.getAttribute('data-block')).toBe('SubLayout.SubLayout_DirectoryDetailScreen');
    expect(block?.firstElementChild?.id).toMatch(/-\$b1$/);
    // The skeleton card is titled "OneSchool Global" until the data action answers the captured empty texts.
    await waitFor(
      () => {
        expect(block?.querySelector('.image-card-content__title')?.textContent).toBe('');
      },
      { timeout: 4000 },
    );
    expect(screen.getByText('Sorry, no photo available')).toBeInTheDocument();
    expect(block?.querySelector('.school-address')?.textContent).toBe('');
  });

  it('opened by URL in the loading scenario: the captured slide, with the school details in their skeleton', () => {
    sessionStorage.setItem('mock:mock', 'loading');
    const { container } = renderRoutes({ [PATH]: <OneSchoolGlobalCarousel /> }, `${PATH}?In_StartingObjectId=1430`);
    expect(blocks(container, 'Directory_Caroussel.EntitiesCarousel_Element')).toHaveLength(1);
    const details = blocks(container, 'Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block');
    expect(details).toHaveLength(1);
    expect(details[0]?.querySelector('.ubt-skeleton-section')).not.toBeNull();
  });

  it('opened from Notes: the slides of the preload object, the start school active', () => {
    setPreloadObject({ CarouselItemIds: ['1431', '1430'] });
    const { container } = renderRoutes({ [PATH]: <OneSchoolGlobalCarousel /> }, `${PATH}?In_StartingObjectId=1430`);
    expect(blocks(container, 'Directory_Caroussel.EntitiesCarousel_Element')).toHaveLength(2);
    expect(blocks(container, 'Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal')).toHaveLength(2);
  });
});
