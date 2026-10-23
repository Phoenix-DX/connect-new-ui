import type { CarouselPreloadedHouseholds } from '@/shared/UBTConnect/lib/structures';
import type { HouseholdCarouselInputs } from './types';

/* HouseholdCarousel has no data action of its own (controller `dataFetchActionNames = []`, HouseholdCarousel.mvc.js
   :371); EntitiesCarousel's HouseholdDetails_Block slides, BottomBarMenu and CommonUI_InsideLayout make their own calls.
   Its one server call is the swipe action's UpdateItem_MarkAsRead (below). */

/* The server action UpdateItem_MarkAsRead (In_UpdateItemId) of the swipe action Directory_Updates_CarouselSwipeAction
   is in the domain api/update. No outputs (CR-HouseholdCarousel-1). This module keeps the name that the screen uses. */
export { markCarouselUpdateItemAsRead as updateItemMarkAsRead } from '@/api/update';

const osLongInput = (v: string | null): string => (v === null || v === '' ? '0' : v);

/** In_StartingHouseholdId (Long Integer) from the query string, OutSystems default 0 when absent (mvc.js :77-79). */
export function readHouseholdCarouselInputs(params: URLSearchParams): HouseholdCarouselInputs {
  return { In_StartingHouseholdId: osLongInput(params.get('In_StartingHouseholdId')) };
}

/* Mock phase only (Q1 → A): the original gets its households only from the previous screen's preload object and is
   empty when opened by URL. The route's mocks.ts (loaded only when the app runs on mocks) registers a fictional
   preload, as Locality_Details hands it over, used when no preload is waiting. Real builds never register one. */
type PreloadSeed = (startingHouseholdId: string) => CarouselPreloadedHouseholds;
let preloadSeed: PreloadSeed | null = null;

/** Called by mocks.ts. */
export function registerMockPreload(seed: PreloadSeed): void {
  preloadSeed = seed;
}

/** The mock preload for a start household, or null outside the mock phase. */
export const mockPreload = (startingHouseholdId: string): CarouselPreloadedHouseholds | null =>
  preloadSeed ? preloadSeed(startingHouseholdId) : null;
