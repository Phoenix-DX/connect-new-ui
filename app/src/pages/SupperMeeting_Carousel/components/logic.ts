import { textToLongInteger } from '@/shared/UBTConnect_Utils/lib/actions';
import type { EntitiesCarousel_Item } from '@/shared/UBTConnect/lib/structures';
import type { PreloadedSupperMeetings } from '@/pages/SupperMeeting_Carousel/types';

/* Client logic of ScreenEvent_OnInitialize (SupperMeeting_Carousel.mvc.js controller `_screenEvent_OnInitialize$Action`),
   without React. */

export const EMPTY_PRELOAD: PreloadedSupperMeetings = { SupperMeetingIds: [] };

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null;
const text = (v: unknown): string => (typeof v === 'string' ? v : typeof v === 'number' ? String(v) : '');

/** AssignFromObject(SupperMeetingsIdList, GetPreloadObject.Preload) (NavigationHandler.controller.js:154-172): a copy of
    the object when one is waiting, else the variable keeps its value (empty). The object's shape is the callers'
    contract (PreloadedSupperMeetings); anything else leaves the list empty. */
export function assignFromObject(preload: unknown): PreloadedSupperMeetings {
  if (!isRecord(preload) || !Array.isArray(preload.SupperMeetingIds)) return EMPTY_PRELOAD;
  const ids: unknown[] = preload.SupperMeetingIds;
  return { SupperMeetingIds: ids.map((id) => textToLongInteger(text(id))) };
}

/** StartingPosition = ListIndexOf(SupperMeetingIds, p = In_StartingSupperMeetingId).Position when not -1, else the
    default 0 (OnInitialize). */
export function startingPosition(preload: PreloadedSupperMeetings, startingSupperMeetingId: string): number {
  const start = textToLongInteger(startingSupperMeetingId);
  const index = preload.SupperMeetingIds.findIndex((id) => textToLongInteger(id) === start);
  return index !== -1 ? index : 0;
}

/** Foreach SupperMeetingIds: ListAppend(EntitieslCarousel_Items, {EntityId =
    LongIntegerToText(TextToLongInteger(LongIntegerToText(id)))}) (OnInitialize). */
export const toEntitiesCarouselItems = (preload: PreloadedSupperMeetings): EntitiesCarousel_Item[] =>
  preload.SupperMeetingIds.map((id) => ({ EntityId: textToLongInteger(id) }));
