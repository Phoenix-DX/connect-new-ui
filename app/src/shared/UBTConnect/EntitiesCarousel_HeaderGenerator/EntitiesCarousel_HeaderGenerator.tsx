// @os-block UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator
import { useEffect, useLayoutEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { get_CurrentEntityHeader } from '../lib/actions';
import type { HeaderList } from '../lib/structures';

const NO_HEADERS: readonly HeaderList[] = [];

export interface EntitiesCarousel_HeaderGeneratorProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_HouseholdCarouselHeaderList: the headers known so far, one per element index. */
  inHouseholdCarouselHeaderList?: readonly HeaderList[];
  /** In_CurrentIndex: index of the active element. */
  inCurrentIndex?: number;
  /** Event Event_SetHeader(Event_Header). */
  onEventSetHeader?: (eventHeader: string) => void;
}

/** Header of the active carousel element (p:UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc.js): an
    empty block (view :153); OnParametersChanged (:179-233, :238; no OnReady, so not on the first render) raises
    Event_SetHeader with Get_CurrentEntityHeader(In_CurrentIndex, In_HouseholdCarouselHeaderList, False). */
export function EntitiesCarousel_HeaderGenerator({
  id,
  inHouseholdCarouselHeaderList = NO_HEADERS,
  inCurrentIndex = 0,
  onEventSetHeader,
}: EntitiesCarousel_HeaderGeneratorProps) {
  const latest = useRef(onEventSetHeader);
  useLayoutEffect(() => {
    latest.current = onEventSetHeader;
  });
  /* OnParametersChanged: only when an input differs from the previous render (StrictMode-safe: compares values). */
  const previous = useRef({ list: inHouseholdCarouselHeaderList, index: inCurrentIndex });
  useEffect(() => {
    const last = previous.current;
    if (last.list === inHouseholdCarouselHeaderList && last.index === inCurrentIndex) return;
    previous.current = { list: inHouseholdCarouselHeaderList, index: inCurrentIndex };
    latest.current?.(get_CurrentEntityHeader(inCurrentIndex, inHouseholdCarouselHeaderList, false));
  }, [inHouseholdCarouselHeaderList, inCurrentIndex]);

  return <OSBlock name="Directory_Caroussel.EntitiesCarousel_HeaderGenerator" id={id} />;
}
