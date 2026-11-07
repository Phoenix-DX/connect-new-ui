import { useState } from 'react';
import { usePreloadObject, useViewState } from '@/platform/navigation';
import type { EntitiesCarousel_Item } from '@/lib/ubtConnect/structures';
import {
  mockPreload,
  type PreloadedSupperMeetings,
  type SupperMeetingCarouselInputs,
} from '@/pages/SupperMeeting_Carousel/inputs';
import { supperMeetingCarouselOnInitialize } from './supperMeetingCarouselActions';

/** The screen variables of SupperMeeting_Carousel that the page renders. */
export interface SupperMeetingCarouselView {
  /** [EntitieslCarousel_Items] In_EntitiesCarousel_Items of EntitiesCarousel. */
  entitiesCarouselItems: readonly EntitiesCarousel_Item[];
  /** [StartingPosition] In_StartingPosition of EntitiesCarousel. */
  startingPosition: number;
}

/** The variables of the supper meeting carousel screen. The page calls this hook. The screen has no handler: the
    events of EntitiesCarousel are not handled.
    - OnInitialize, only while SupperMeetingsIdList.SupperMeetingIds is empty: AssignFromObject of the waiting preload
      object (in the mock phase without one: the route's mock preload, Q1 → A), StartingPosition, then one
      EntitiesCarousel_Item per id.
    - The three screen variables are kept by the view cache with their original names (P-BACK). Like the original, a
      restored list that is not empty keeps the restored variables.
    @origin UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel */
export function useSupperMeetingCarousel({
  In_StartingSupperMeetingId,
}: SupperMeetingCarouselInputs): SupperMeetingCarouselView {
  const preloadObject = usePreloadObject();
  const [initial] = useState(() =>
    supperMeetingCarouselOnInitialize(
      preloadObject ?? mockPreload(In_StartingSupperMeetingId),
      In_StartingSupperMeetingId,
    ),
  );
  const [storedPreload] = useViewState<PreloadedSupperMeetings>('SupperMeetingsIdList', initial.preload);
  const [storedItems] = useViewState('EntitieslCarousel_Items', initial.items);
  const [storedPosition] = useViewState('StartingPosition', initial.position);
  const restored = storedPreload.SupperMeetingIds.length > 0;
  return {
    entitiesCarouselItems: restored ? storedItems : initial.items,
    startingPosition: restored ? storedPosition : initial.position,
  };
}
