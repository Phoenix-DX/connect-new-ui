import { useLayoutEffect, useRef, useState } from 'react';
import { markCarouselUpdateItemAsRead } from '@/api/update';
import { setPreloadObject, usePreloadObject, useViewState } from '@/platform/navigation';
import { Type_CarouselItemSwipeAction } from '@/lib/ubtConnect/staticEntities';
import type { EntitiesCarousel_Item } from '@/lib/ubtConnect/structures';
import { mockPreload, type HouseholdCarouselInputs } from '@/pages/HouseholdCarousel/inputs';
import {
  appendSwippedItem,
  clearSwipeAction,
  directory_Updates_CarouselSwipeAction,
  householdCarouselOnInitialize,
  type EntitiesCarousel_SwippedItem,
  type HouseholdPreload,
} from './householdCarouselActions';

const NO_SWIPPED_ITEMS: readonly EntitiesCarousel_SwippedItem[] = [];
const isEmpty = (p: HouseholdPreload) => p.CarouselHouseholdItem.length === 0;

/** The screen variables of HouseholdCarousel that the page renders, and the handlers of the screen. */
export interface HouseholdCarouselView {
  /** [HouseholdHeader] The header title: "Locality, Country" of the active slide, "" until its household is fetched. */
  householdHeader: string;
  /** [EntitiesCarousel_Items] In_EntitiesCarousel_Items of EntitiesCarousel. */
  entitiesCarouselItems: readonly EntitiesCarousel_Item[];
  /** [StartingPosition] In_StartingPosition of EntitiesCarousel. */
  startingPosition: number;
  /** SwippedItems is not empty: the screen has a BackNavigationHandler. */
  hasSwippedItems: boolean;
  /** Handler_SetHeader, on the Event_SetHeader of EntitiesCarousel. */
  onSetHeader: (header: string) => void;
  /** Handler_EventMoved, on the Event_Moved of EntitiesCarousel. */
  onEventMoved: (itemIndex: number) => void;
  /** Handler_BackNavigation: the swiped updates go back to the previous screen. */
  onBackNavigation: () => void;
}

/** The variables and the handlers of the household carousel screen. The page calls this hook.
    - OnInitialize: AssignFromObject of the waiting preload object (in the mock phase without one: the route's mock
      preload, Q1 → A), then EntitiesCarousel_Items and StartingPosition.
    - The five screen variables are kept by the view cache with their original names (P-BACK). Like the original, a
      restored HouseholdPreload that is not empty keeps the restored variables.
    - Handler_EventMoved: when the item of the new slide has the swipe action UpdatesCarousel_SetIsRead,
      Directory_Updates_CarouselSwipeAction (UpdateItem_MarkAsRead, unread count - 1), then the swipe action of the
      item is cleared and the update is added to SwippedItems once.
    - Flow scope (item 8): Directory_Updates_CarouselSwipeAction is a module action (R2): after the screen unmounts, a
      swipe action that already started still marks the update as read and lowers the unread count, as on TST
      (HouseholdCarousel.js:533). The screen variables that follow are not written.
    @origin UBTConnect.Directory_Household.HouseholdCarousel */
export function useHouseholdCarousel({ In_StartingHouseholdId }: HouseholdCarouselInputs): HouseholdCarouselView {
  const preloadObject = usePreloadObject();
  const [initial] = useState(() =>
    householdCarouselOnInitialize(preloadObject ?? mockPreload(In_StartingHouseholdId), In_StartingHouseholdId),
  );
  const [storedPreload, setHouseholdPreload] = useViewState<HouseholdPreload>('HouseholdPreload', initial.preload);
  const [storedItems] = useViewState('EntitiesCarousel_Items', initial.items);
  const [storedPosition] = useViewState('StartingPosition', initial.position);
  const [householdHeader, setHouseholdHeader] = useViewState('HouseholdHeader', '');
  const [swippedItems, setSwippedItems] = useViewState('SwippedItems', NO_SWIPPED_ITEMS);
  const householdPreload = isEmpty(storedPreload) ? initial.preload : storedPreload;
  const entitiesCarouselItems = isEmpty(storedPreload) ? initial.items : storedItems;
  const startingPosition = isEmpty(storedPreload) ? initial.position : storedPosition;

  /* True after the unmount. A layout effect, so the flag is false again before the passive effects when StrictMode
     mounts twice. */
  const unmounted = useRef(false);
  useLayoutEffect(() => {
    unmounted.current = false;
    return () => {
      unmounted.current = true;
    };
  }, []);

  const handlerEventMoved = async (itemIndex: number) => {
    const swipeAction = householdPreload.CarouselHouseholdItem[itemIndex]?.SwipeAction;
    const actionId = swipeAction?.ActionId ?? '';
    if (actionId === '') return; // Has swipe action?
    if (actionId !== Type_CarouselItemSwipeAction.UpdatesCarousel_SetIsRead) return;
    const swippedItemId = await directory_Updates_CarouselSwipeAction(
      swipeAction?.Parameters ?? '',
      markCarouselUpdateItemAsRead,
    );
    if (unmounted.current) return;
    setHouseholdPreload((p) => clearSwipeAction(isEmpty(p) ? initial.preload : p, itemIndex));
    if (swippedItemId !== '') setSwippedItems((list) => appendSwippedItem(list, swippedItemId, itemIndex));
  };

  return {
    householdHeader,
    entitiesCarouselItems,
    startingPosition,
    hasSwippedItems: swippedItems.length > 0,
    onSetHeader: setHouseholdHeader,
    onEventMoved: (itemIndex) => void handlerEventMoved(itemIndex),
    onBackNavigation: () => {
      setPreloadObject(swippedItems);
    },
  };
}
