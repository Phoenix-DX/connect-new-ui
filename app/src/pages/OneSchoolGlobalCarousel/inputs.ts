/** The inputs of OneSchoolGlobalCarousel: the route input from the query string, and the preload object of the
    previous screen (Notes or Bookmarks). The screen has no data or server action of its own (controller
    `dataFetchActionNames = []`). The school details of the slides, BottomBarMenu and CommonUI_InsideLayout make their
    own calls.
    @origin UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel */
export interface OneSchoolGlobalCarouselInputs {
  /** In_StartingObjectId (Long Integer, mandatory, kept as a string): the school whose slide is active first. */
  In_StartingObjectId: string;
}

/** The structure PreloadedCarousel of UBTConnect: the preload object that Notes and Bookmarks set
    (Notes.mvc.js:1568-1575). */
export interface PreloadedCarousel {
  /** CarouselItemIds (Long Integer list, kept as strings). */
  CarouselItemIds: readonly string[];
}

/** LongIntegerToText(TextToLongInteger(Text)): absent or invalid is 0 (OutSystems Long Integer default). */
const osLongInput = (v: string | null): string => {
  const trimmed = (v ?? '').trim();
  return /^[-+]?\d+$/.test(trimmed) ? BigInt(trimmed).toString() : '0';
};

/** In_StartingObjectId (Long Integer) from the query string; the OutSystems default 0 when it is absent. */
export function readOneSchoolGlobalCarouselInputs(params: URLSearchParams): OneSchoolGlobalCarouselInputs {
  return { In_StartingObjectId: osLongInput(params.get('In_StartingObjectId')) };
}

/* Mock phase only (I10-4 (a), user 2026-10-29): the original gets its school ids only from the preload object of the
   previous screen, and is empty when opened by URL (the TST capture). The route's mocks.ts (loaded only when the app
   runs on mocks) registers a fictional preload for the default scenario. The screen uses it when no preload object is
   waiting. Real builds never register one. */
type PreloadSeed = (startingObjectId: string) => PreloadedCarousel | null;
let preloadSeed: PreloadSeed | null = null;

/** Called by mocks.ts. */
export function registerMockPreload(seed: PreloadSeed): void {
  preloadSeed = seed;
}

/** The mock preload for a start school, or null outside the mock phase (and in the `empty` scenario). */
export const mockPreload = (startingObjectId: string): PreloadedCarousel | null =>
  preloadSeed ? preloadSeed(startingObjectId) : null;
