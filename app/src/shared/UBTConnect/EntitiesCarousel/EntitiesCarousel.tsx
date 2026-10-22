// @os-block UBTConnect.Directory_Caroussel.EntitiesCarousel
import { useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { Carousel } from '../../osui/Carousel';
import {
  carouselDisableOnRender,
  setSplideConfigs,
  setSplideEvent,
  unsetSplideEvent,
  type SplideEventHandler,
} from '../../osui/lib/actions';
import { textToLongInteger } from '../../UBTConnect_Utils/lib/actions';
import { EntitiesCarousel_Element } from '../EntitiesCarousel_Element';
import { EntitiesCarousel_HeaderGenerator } from '../EntitiesCarousel_HeaderGenerator';
import { BooleanTypes, CarouselNavigation } from '../lib/staticEntities';
import type { EntitiesCarousel_Item, HeaderList } from '../lib/structures';

const NO_ITEMS: readonly EntitiesCarousel_Item[] = [];

/** Block variables never assigned (mvc.js model :11-49): RenderBuffer 3, UseMoveHandler False. */
const BLOCK_VARIABLES = { RenderBuffer: 3 as number, UseMoveHandler: false as boolean };

export interface EntitiesCarouselProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_EntitiesCarousel_Items: one slide per entity. */
  inEntitiesCarouselItems?: readonly EntitiesCarousel_Item[];
  /** In_StartingPosition: index of the first active slide (read once, OnInitialize). */
  inStartingPosition?: number;
  /** In_ConnectEntityTypeId (Connect_Entity): Supper Meetings or Household. */
  inConnectEntityTypeId?: string;
  /** Event Event_SetHeader(Event_Header): the header of the active slide. */
  onEventSetHeader?: (eventHeader: string) => void;
  /** Event Event_Moved(Event_Index): the carousel moved to slide Event_Index. */
  onEventMoved?: (eventIndex: number) => void;
}

/** Swipeable entities carousel of HouseholdCarousel and SupperMeeting_Carousel
    (p:UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc.js): an OSUI Carousel (view :190-320) whose List renders one
    EntitiesCarousel_Element per item, only near the active slide (RenderBuffer), and the header generator (:321-345). */
export function EntitiesCarousel({
  id,
  inEntitiesCarouselItems = NO_ITEMS,
  inStartingPosition = 0,
  inConnectEntityTypeId = '',
  onEventSetHeader,
  onEventMoved,
}: EntitiesCarouselProps) {
  const fallback = useId();
  const prefix = id?.replace('$', '') ?? `entities${fallback}`;
  const carouselWidgetId = `${prefix}-EntitiesCarousel`;

  /* OnInitialize (:531-561): Index_ActiveElement (-1) = In_StartingPosition; Index_Initial = Index_ActiveElement. */
  const [indexInitial] = useState(inStartingPosition);
  const [indexActiveElement, setIndexActiveElement] = useState(inStartingPosition);
  const [indexNextActiveElement, setIndexNextActiveElement] = useState(-1);
  const [headerList, setHeaderList] = useState<readonly HeaderList[]>([]);
  const events = useRef({ onEventSetHeader, onEventMoved });
  useLayoutEffect(() => {
    events.current = { onEventSetHeader, onEventMoved };
  });

  /* OptionalConfigs, cached on Index_Initial (:193-202). */
  const optionalConfigs = useMemo(
    () => ({ AutoPlay: false, Loop: false, StartingPosition: indexInitial }),
    [indexInitial],
  );

  /** Handler_EntitiesCarousel_Initialized (:562-675). */
  const handleInitialized = () => {
    /** Handler_EntitiesCarousel_Moved (:466-530): both indexes = newIndex, then Event_Moved(newIndex). */
    const moved: SplideEventHandler = (newIndex = 0) => {
      setIndexActiveElement(newIndex);
      setIndexNextActiveElement(newIndex);
      events.current.onEventMoved?.(newIndex);
    };
    /** Handler_EntitiesCarousel_Move (:703-730): Index_NextActiveElement = newIndex. */
    const move: SplideEventHandler = (newIndex = 0) => {
      setIndexNextActiveElement(newIndex);
    };
    carouselDisableOnRender(carouselWidgetId);
    setSplideConfigs(carouselWidgetId, {
      speed: 0,
      fixedHeight: 'var(--carousel-slide-custom-height)',
      perMove: 1,
      flickPower: 100,
      flickMaxPages: 1,
      waitForTransition: BLOCK_VARIABLES.UseMoveHandler ? BooleanTypes.False : BooleanTypes.True,
    });
    // UnsetSplideEvent takes an event id: "resize" / "resized" are names, so both fail and change nothing (README).
    unsetSplideEvent(carouselWidgetId, 'resize');
    unsetSplideEvent(carouselWidgetId, 'resized');
    setSplideEvent(carouselWidgetId, 'moved', moved);
    if (BLOCK_VARIABLES.UseMoveHandler) setSplideEvent(carouselWidgetId, 'move', move);
  };

  /** Handler_SetHeaderList (:402-465): appends {Event_Header, Event_Index} unless that index already has a header. */
  const handleSetHeaderList = (eventHeader: string, eventIndex: number) => {
    setHeaderList((list) =>
      list.some((p) => (p.Index ?? 0) === eventIndex) ? list : [...list, { Label: eventHeader, Index: eventIndex }],
    );
  };

  return (
    <OSBlock name="Directory_Caroussel.EntitiesCarousel" id={id}>
      <Carousel
        id={carouselWidgetId}
        extendedClass="ubt-entities-carousel"
        optionalConfigs={optionalConfigs}
        navigation={CarouselNavigation.None}
        onInitialized={handleInitialized}
      >
        <OSList
          source={inEntitiesCarouselItems}
          keyOf={(item, index) => `${String(index)}-${item.EntityId ?? ''}`}
          className="list list-group"
          animateItems={false}
          disableVirtualization
        >
          {(item, index) => (
            <div data-container="">
              <EntitiesCarousel_Element
                inIndexCurrentElement={index}
                inIndexNextActiveElement={indexNextActiveElement}
                inConnectEntityTypeId={inConnectEntityTypeId}
                inIndexActiveElement={indexActiveElement}
                inRenderBuffer={BLOCK_VARIABLES.RenderBuffer}
                inCarouselLength={inEntitiesCarouselItems.length}
                inEntityId={textToLongInteger(item.EntityId ?? '')}
                onEventSetHeader={(eventHeader) => {
                  handleSetHeaderList(eventHeader, index);
                }}
              />
            </div>
          )}
        </OSList>
      </Carousel>
      <EntitiesCarousel_HeaderGenerator
        id={`${prefix}-$b3`}
        inCurrentIndex={indexActiveElement}
        inHouseholdCarouselHeaderList={headerList}
        onEventSetHeader={(eventHeader) => events.current.onEventSetHeader?.(eventHeader)}
      />
    </OSBlock>
  );
}
