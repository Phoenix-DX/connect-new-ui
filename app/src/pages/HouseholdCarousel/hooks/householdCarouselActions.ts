import { getClientVar, setClientVar } from '@/platform/session/session';
import { textToLongInteger } from '@/lib/ubtConnectUtils/actions';
import type {
  CarouselHouseholdItem,
  CarouselPreloadedHouseholds,
  EntitiesCarousel_Item,
} from '@/lib/ubtConnect/structures';

/** The client actions of HouseholdCarousel (OnInitialize, Handler_EventMoved) and the module action
    Directory_Updates_CarouselSwipeAction, without React. useHouseholdCarousel calls them.
    @origin UBTConnect.Directory_Household.HouseholdCarousel */

/** EntitiesCarousel_SwippedItem (UBTConnect.model.js:5873-5891): an update marked read by a swipe, handed back to the
    previous screen on back (FeedBlock_Updates, Updates_SingleList read it). */
export interface EntitiesCarousel_SwippedItem {
  /** EntityItemId (Text): the UpdateItemId. */
  EntityItemId: string;
  /** ListPosition: the slide index. */
  ListPosition: number;
}

/** The preload object the callers set (CarouselPreloadedHouseholds, UBTConnect.model.js:16052-16075). */
export type HouseholdPreload = Required<CarouselPreloadedHouseholds>;

export const EMPTY_PRELOAD: HouseholdPreload = { CarouselHouseholdItem: [] };

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null;
const text = (v: unknown): string => (typeof v === 'string' ? v : typeof v === 'number' ? String(v) : '');

/** AssignFromObject(HouseholdPreload, GetPreloadObject.Preload) (NavigationHandler.controller.js:154-172): a copy of the
    object when one is waiting, else the variable keeps its value (empty). The object's shape is the callers' contract
    (CarouselPreloadedHouseholds); anything else leaves the list empty. */
export function assignFromObject(preload: unknown): HouseholdPreload {
  if (!isRecord(preload) || !Array.isArray(preload.CarouselHouseholdItem)) return EMPTY_PRELOAD;
  const items: unknown[] = preload.CarouselHouseholdItem;
  return {
    CarouselHouseholdItem: items.map((item): CarouselHouseholdItem => {
      const r = isRecord(item) ? item : {};
      const swipe = isRecord(r.SwipeAction) ? r.SwipeAction : {};
      return {
        Household: text(r.Household) || '0',
        SwipeAction: { ActionId: text(swipe.ActionId), Parameters: text(swipe.Parameters) },
      };
    }),
  };
}

/** EntitiesCarousel_Items = HouseholdPreload.CarouselHouseholdItem, EntityId = LongIntegerToText(Household)
    (OnInitialize, mvc.js :479-484). */
export const toEntitiesCarouselItems = (preload: HouseholdPreload): EntitiesCarousel_Item[] =>
  preload.CarouselHouseholdItem.map((p) => ({ EntityId: p.Household ?? '0' }));

/** StartingPosition = ListIndexOf(CarouselHouseholdItem, Household = In_StartingHouseholdId).Position when not -1, else
    the default 0 (OnInitialize, mvc.js :485-497). */
export function startingPosition(preload: HouseholdPreload, startingHouseholdId: string): number {
  const start = textToLongInteger(startingHouseholdId);
  const index = preload.CarouselHouseholdItem.findIndex((p) => textToLongInteger(p.Household ?? '0') === start);
  return index !== -1 ? index : 0;
}

/** The screen variables that OnInitialize assigns. */
export interface HouseholdCarouselInitialVariables {
  /** HouseholdPreload. */
  preload: HouseholdPreload;
  /** EntitiesCarousel_Items. */
  items: EntitiesCarousel_Item[];
  /** StartingPosition. */
  position: number;
}

/** OnInitialize: AssignFromObject of the preload object, then EntitiesCarousel_Items and StartingPosition. */
export function householdCarouselOnInitialize(
  preloadObject: unknown,
  startingHouseholdId: string,
): HouseholdCarouselInitialVariables {
  const preload = assignFromObject(preloadObject);
  return {
    preload,
    items: toEntitiesCarouselItems(preload),
    position: startingPosition(preload, startingHouseholdId),
  };
}

/** Directory_Updates_CarouselSwipeAction(In_Parameters) (UC:1625-1660): JSON Deserialize
    Updates_CarouselSwipeCallbackParameters, UpdateItem_MarkAsRead(UpdateItemId), Out_ItemId = the id as text,
    Directory_Updates_UnreadCount - 1. */
export async function directory_Updates_CarouselSwipeAction(
  in_Parameters: string,
  markAsRead: (updateItemId: string) => Promise<void>,
): Promise<string> {
  const data: unknown = JSON.parse(in_Parameters);
  const updateItemId = textToLongInteger(isRecord(data) ? text(data.UpdateItemId) || '0' : '0');
  await markAsRead(updateItemId);
  setClientVar(
    'UBTConnect.Directory_Updates_UnreadCount',
    getClientVar('UBTConnect.Directory_Updates_UnreadCount') - 1,
  );
  return updateItemId;
}

/** HouseholdPreload.CarouselHouseholdItem[index].SwipeAction.ActionId = NullTextIdentifier (mvc.js :546-547). */
export const clearSwipeAction = (preload: HouseholdPreload, index: number): HouseholdPreload => ({
  CarouselHouseholdItem: preload.CarouselHouseholdItem.map((p, i) =>
    i === index ? { ...p, SwipeAction: { ...p.SwipeAction, ActionId: '' } } : p,
  ),
});

/** ListIndexOf(SwippedItems, EntityItemId = SwippedItemId) = -1 → ListAppend {SwippedItemId, In_ItemIndex}
    (mvc.js :556-571). */
export const appendSwippedItem = (
  list: readonly EntitiesCarousel_SwippedItem[],
  swippedItemId: string,
  index: number,
): readonly EntitiesCarousel_SwippedItem[] =>
  list.some((p) => p.EntityItemId === swippedItemId)
    ? list
    : [...list, { EntityItemId: swippedItemId, ListPosition: index }];
