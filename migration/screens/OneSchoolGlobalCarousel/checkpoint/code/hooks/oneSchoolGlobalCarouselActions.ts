import { setPreloadObject } from '@/platform/navigation';
import { textToLongInteger } from '@/lib/ubtConnectUtils/actions';
import type { EntitiesCarousel_Item } from '@/lib/ubtConnect/structures';
import type { PreloadedCarousel } from '@/pages/OneSchoolGlobalCarousel/inputs';

/** The client actions of OneSchoolGlobalCarousel (ScreenEvent_OnInitialize, Handler_BackNavigation), without React.
    useOneSchoolGlobalCarousel calls them.
    @origin UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel */

/** EntitiesCarousel_SwippedItem (UBTConnect.model.js): the type of the screen variable SwippedItems. */
export interface EntitiesCarousel_SwippedItem {
  /** EntityItemId (Text). */
  EntityItemId: string;
  /** ListPosition: the slide index. */
  ListPosition: number;
}

export const EMPTY_PRELOAD: PreloadedCarousel = { CarouselItemIds: [] };

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null;
const text = (v: unknown): string => (typeof v === 'string' ? v : typeof v === 'number' ? String(v) : '');

/** AssignFromObject(PreloadedCarousel, GetPreloadObject.Preload) (mvc.js:428-432; NavigationHandler.controller.js
    AssignFromObject): a copy of the object when one is waiting, else the variable keeps its value (empty). The
    object's shape is the callers' contract (PreloadedCarousel: Notes, Bookmarks); anything else leaves it empty. */
export function assignFromObject(preload: unknown): PreloadedCarousel {
  if (!isRecord(preload) || !Array.isArray(preload.CarouselItemIds)) return EMPTY_PRELOAD;
  const ids: unknown[] = preload.CarouselItemIds;
  return { CarouselItemIds: ids.map((id) => textToLongInteger(text(id))) };
}

/** StartingPosition = ListIndexOf(CarouselItemIds, p = In_StartingObjectId).Position when not -1, else the default 0
    (mvc.js:436-444). */
export function startingPosition(preload: PreloadedCarousel, startingObjectId: string): number {
  const start = textToLongInteger(startingObjectId);
  const index = preload.CarouselItemIds.findIndex((id) => textToLongInteger(id) === start);
  return index !== -1 ? index : 0;
}

/** Foreach CarouselItemIds: ListAppend(EntitiesCarousel_Items, {EntityId =
    LongIntegerToText(TextToLongInteger(LongIntegerToText(id)))}) (mvc.js:446-465). */
export const toEntitiesCarouselItems = (preload: PreloadedCarousel): EntitiesCarousel_Item[] =>
  preload.CarouselItemIds.map((id) => ({ EntityId: textToLongInteger(id) }));

/** The screen variables that OnInitialize assigns. */
interface OneSchoolGlobalCarouselInitialVariables {
  /** PreloadedCarousel. */
  preload: PreloadedCarousel;
  /** EntitiesCarousel_Items. */
  items: EntitiesCarousel_Item[];
  /** StartingPosition. */
  position: number;
}

/** ScreenEvent_OnInitialize, only while PreloadedCarousel.CarouselItemIds is empty (mvc.js:425): AssignFromObject of
    the waiting preload object, StartingPosition, then one EntitiesCarousel_Item per id. */
export function oneSchoolGlobalCarouselOnInitialize(
  preloadObject: unknown,
  startingObjectId: string,
): OneSchoolGlobalCarouselInitialVariables {
  const preload = assignFromObject(preloadObject);
  return {
    preload,
    items: toEntitiesCarouselItems(preload),
    position: startingPosition(preload, startingObjectId),
  };
}

/** Handler_BackNavigation (mvc.js:480-507): SetPreloadObject(ToObject(SwippedItems)). */
export function handlerBackNavigation(swippedItems: readonly EntitiesCarousel_SwippedItem[]): void {
  setPreloadObject(swippedItems);
}
