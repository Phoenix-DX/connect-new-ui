import type { CarouselPreloadedHouseholds } from '@/lib/ubtConnect/structures';

/** The inputs of HouseholdCarousel: the route input from the query string, and the preload object of the previous
    screen. The screen has no data action of its own. The household details of the slides, BottomBarMenu and
    CommonUI_InsideLayout make their own calls. Its one server call is UpdateItem_MarkAsRead of the swipe action.
    @origin UBTConnect.Directory_Household.HouseholdCarousel */
export interface HouseholdCarouselInputs {
  /** In_StartingHouseholdId (Long Integer, kept as a string): the household whose slide is active first. */
  In_StartingHouseholdId: string;
}

const osLongInput = (v: string | null): string => (v === null || v === '' ? '0' : v);

/** In_StartingHouseholdId (Long Integer) from the query string; the OutSystems default 0 when it is absent. */
export function readHouseholdCarouselInputs(params: URLSearchParams): HouseholdCarouselInputs {
  return { In_StartingHouseholdId: osLongInput(params.get('In_StartingHouseholdId')) };
}

/* Mock phase only (Q1 → A): the original gets its households only from the preload object of the previous screen,
   and is empty when opened by URL. The route's mocks.ts (loaded only when the app runs on mocks) registers a
   fictional preload, as Locality_Details hands it over. The screen uses it when no preload object is waiting. Real
   builds never register one. */
type PreloadSeed = (startingHouseholdId: string) => CarouselPreloadedHouseholds;
let preloadSeed: PreloadSeed | null = null;

/** Called by mocks.ts. */
export function registerMockPreload(seed: PreloadSeed): void {
  preloadSeed = seed;
}

/** The mock preload for a start household, or null outside the mock phase. */
export const mockPreload = (startingHouseholdId: string): CarouselPreloadedHouseholds | null =>
  preloadSeed ? preloadSeed(startingHouseholdId) : null;
