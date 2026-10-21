import type { PreloadedSupperMeetings, SupperMeetingCarouselInputs } from './types';

/* SupperMeeting_Carousel has no data or server action of its own (controller `dataFetchActionNames = []`,
   SupperMeeting_Carousel.mvc.js); EntitiesCarousel's SupperMeeting_DetailsBlock slides and CommonUI_InsideLayout make
   their own calls. */

/** LongIntegerToText(TextToLongInteger(Text)): absent or invalid is 0 (OutSystems Long Integer default). */
const osLongInput = (v: string | null): string => {
  const trimmed = (v ?? '').trim();
  return /^[-+]?\d+$/.test(trimmed) ? BigInt(trimmed).toString() : '0';
};

/** In_StartingSupperMeetingId (Long Integer) from the query string, default 0 (mvc.js model setInputs). */
export function readSupperMeetingCarouselInputs(params: URLSearchParams): SupperMeetingCarouselInputs {
  return { In_StartingSupperMeetingId: osLongInput(params.get('In_StartingSupperMeetingId')) };
}

/* Mock phase only (Q1 → A, pending answer): the original gets its supper meeting ids only from the previous screen's
   preload object and is empty when opened by URL. The route's mocks.ts (loaded only when the app runs on mocks)
   registers a fictional preload, used when no preload is waiting. Real builds never register one. */
type PreloadSeed = (startingSupperMeetingId: string) => PreloadedSupperMeetings;
let preloadSeed: PreloadSeed | null = null;

/** Called by mocks.ts. */
export function registerMockPreload(seed: PreloadSeed): void {
  preloadSeed = seed;
}

/** The mock preload for a start supper meeting, or null outside the mock phase. */
export const mockPreload = (startingSupperMeetingId: string): PreloadedSupperMeetings | null =>
  preloadSeed ? preloadSeed(startingSupperMeetingId) : null;
