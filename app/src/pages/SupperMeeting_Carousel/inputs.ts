/** The inputs of SupperMeeting_Carousel: the route input from the query string, and the preload object of the
    previous screen. The screen has no data or server action of its own (controller `dataFetchActionNames = []`). The
    supper meeting details of the slides and CommonUI_InsideLayout make their own calls.
    @origin UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel */
export interface SupperMeetingCarouselInputs {
  /** In_StartingSupperMeetingId (Long Integer, kept as a string): the supper meeting whose slide is active first. */
  In_StartingSupperMeetingId: string;
}

/** The structure PreloadedSupperMeetings of UBTConnect: the preload object that the previous screen sets. */
export interface PreloadedSupperMeetings {
  /** SupperMeetingIds (Long Integer list, kept as strings). */
  SupperMeetingIds: readonly string[];
}

/** LongIntegerToText(TextToLongInteger(Text)): absent or invalid is 0 (OutSystems Long Integer default). */
const osLongInput = (v: string | null): string => {
  const trimmed = (v ?? '').trim();
  return /^[-+]?\d+$/.test(trimmed) ? BigInt(trimmed).toString() : '0';
};

/** In_StartingSupperMeetingId (Long Integer) from the query string; the OutSystems default 0 when it is absent. */
export function readSupperMeetingCarouselInputs(params: URLSearchParams): SupperMeetingCarouselInputs {
  return { In_StartingSupperMeetingId: osLongInput(params.get('In_StartingSupperMeetingId')) };
}

/* Mock phase only (Q1 → A, pending answer): the original gets its supper meeting ids only from the preload object of
   the previous screen, and is empty when opened by URL. The route's mocks.ts (loaded only when the app runs on mocks)
   registers a fictional preload. The screen uses it when no preload object is waiting. Real builds never register
   one. */
type PreloadSeed = (startingSupperMeetingId: string) => PreloadedSupperMeetings;
let preloadSeed: PreloadSeed | null = null;

/** Called by mocks.ts. */
export function registerMockPreload(seed: PreloadSeed): void {
  preloadSeed = seed;
}

/** The mock preload for a start supper meeting, or null outside the mock phase. */
export const mockPreload = (startingSupperMeetingId: string): PreloadedSupperMeetings | null =>
  preloadSeed ? preloadSeed(startingSupperMeetingId) : null;
