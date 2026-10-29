import type { RequestHandler } from 'msw';
import { CAROUSEL_SCHOOLS } from '@/containers/OneSchoolGlobalDetails/mocks';
import { scenario } from '@/mocks/scenario';
import { registerMockPreload } from './inputs';

/* OneSchoolGlobalCarousel calls no action of its own (OneSchoolGlobalCarousel.mvc.js controller
   `dataFetchActionNames = []`): DataActionGetOneSchoolGlobalDetails of each slide is answered by the mocks of the
   container OneSchoolGlobalDetails (fictional school names per id), BottomBarMenu and CommonUI_InsideLayout by theirs.

   Scenarios (the preload used when the page opens with no preload object waiting, as by URL):
   - `captured` (Q3, user 2026-10-29; parity of state default runs with it, migration/capture-plan.json): the capture
     of 2026-10-29 opened the carousel from the third Bookmarks card (OneSchool Global), which set
     PreloadedCarousel.CarouselItemIds to the one school 1430 (analysis/dom/default.html: 1 slide, "1 of 1"). The mock
     preload is that one school; its data action answers the captured empty texts (container mocks).
   - `real` (default), online: a fictional preload of the four carousel schools, the start school first (the order
     Notes hands over is the order of its list).
   - `empty`: no mock preload (no slide), as TST opened by URL.
   - `loading`, `error`, or offline: the captured preload too. The loading and offline states of 2026-10-29 were
     opened from the same Bookmarks card and show its one slide (analysis/dom/loading.html, offline.html), whose data
     action never answers, fails or waits for the network.
   Opened from Notes (OneSchool Global filter) or Bookmarks, the preload object of that screen wins. */
/** The school of the captured carousel (Bookmarks card 3, route In_StartingObjectId=1430). */
const CAPTURED_SCHOOL_ID = '1430';

registerMockPreload((startingObjectId) => {
  if (scenario() === 'empty') return null;
  if (scenario() !== 'real' || !navigator.onLine) return { CarouselItemIds: [CAPTURED_SCHOOL_ID] };
  return {
    CarouselItemIds: [
      startingObjectId,
      ...CAROUSEL_SCHOOLS.map((s) => s.id).filter((id) => id !== startingObjectId),
    ].slice(0, CAROUSEL_SCHOOLS.length),
  };
});

export const handlers: RequestHandler[] = [];
