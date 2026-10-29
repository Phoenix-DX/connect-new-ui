import { useState } from 'react';
import { usePreloadObject, useViewState } from '@/platform/navigation';
import type { EntitiesCarousel_Item } from '@/lib/ubtConnect/structures';
import {
  mockPreload,
  type OneSchoolGlobalCarouselInputs,
  type PreloadedCarousel,
} from '@/pages/OneSchoolGlobalCarousel/inputs';
import {
  handlerBackNavigation,
  oneSchoolGlobalCarouselOnInitialize,
  type EntitiesCarousel_SwippedItem,
} from './oneSchoolGlobalCarouselActions';

/** SwippedItems: the screen never appends to it (the screen binds no event of EntitiesCarousel), so it stays empty. */
const SWIPPED_ITEMS: readonly EntitiesCarousel_SwippedItem[] = [];

/** The screen variables of OneSchoolGlobalCarousel that the page renders, and its handler. */
interface OneSchoolGlobalCarouselView {
  /** [EntitiesCarousel_Items] In_EntitiesCarousel_Items of EntitiesCarousel. */
  entitiesCarouselItems: readonly EntitiesCarousel_Item[];
  /** [StartingPosition] In_StartingPosition of EntitiesCarousel. */
  startingPosition: number;
  /** [SwippedItems] BackNavigationHandler renders only when it is not empty (view: `$if(SwippedItems.isEmpty)`). */
  swippedItems: readonly EntitiesCarousel_SwippedItem[];
  /** Handler_BackNavigation of BackNavigationHandler. */
  onBackNavigation: () => void;
}

/** The variables of the OneSchool Global carousel screen. The page calls this hook.
    - OnInitialize, only while PreloadedCarousel.CarouselItemIds is empty: AssignFromObject of the waiting preload
      object (in the mock phase, the route's fictional preload when none waits), StartingPosition, then one
      EntitiesCarousel_Item per id. A view that the view cache restores keeps its variables, so OnInitialize assigns
      nothing (the list is not empty).
    - Handler_BackNavigation: SetPreloadObject(SwippedItems). SwippedItems is never assigned on this screen, so
      BackNavigationHandler never renders and the handler cannot run; it is ported as compiled.
    No call and no await: no flow scope is needed (page-template "Flow scope").
    @origin UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel */
export function useOneSchoolGlobalCarousel({
  In_StartingObjectId,
}: OneSchoolGlobalCarouselInputs): OneSchoolGlobalCarouselView {
  const preloadObject = usePreloadObject();
  const [initial] = useState(() =>
    oneSchoolGlobalCarouselOnInitialize(preloadObject ?? mockPreload(In_StartingObjectId), In_StartingObjectId),
  );
  const [storedPreload] = useViewState<PreloadedCarousel>('PreloadedCarousel', initial.preload);
  const [storedItems] = useViewState('EntitiesCarousel_Items', initial.items);
  const [storedPosition] = useViewState('StartingPosition', initial.position);
  const restored = storedPreload.CarouselItemIds.length > 0;
  return {
    entitiesCarouselItems: restored ? storedItems : initial.items,
    startingPosition: restored ? storedPosition : initial.position,
    swippedItems: SWIPPED_ITEMS,
    onBackNavigation: () => {
      handlerBackNavigation(SWIPPED_ITEMS);
    },
  };
}
