/** @origin UBTConnect.Directory_Photobook.Photobook_Carousel */
import { useEffect, useRef, useState } from 'react';
import type { PhotobookHousehold, SelectedHousehold } from '@/api/household';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { Carousel } from '@/shared/osui/Carousel';
import { carouselGoTo, carouselToggleDrag, setSplideConfigs } from '@/shared/osui/lib/actions';
import { carousel_SetCurrentPosition } from '@/shared/UBTConnect/lib/actions';
import type { SplideConfigs } from '@/shared/osui/lib/structures';
import { BooleanTypes, CarouselNavigation, Photobook_Speed } from '@/shared/UBTConnect/lib/staticEntities';
import { getClientVar, setClientVar } from '@/platform/session/session';
import { Photobook_Gallery } from './Photobook_Gallery';
import { Photobook_Item } from './Photobook_Item';
import { Photobook_Options_Left } from './Photobook_Options_Left';
import { Photobook_Options_Player } from './Photobook_Options_Player';
import { Photobook_Options_Right } from './Photobook_Options_Right';

const MAIN_CONTAINER_CLASS = 'photobook-carousel';
const CAROUSEL_WIDGET_ID = 'b4-Carousel_Photobook';
/** TimerDuration default (Photobook_Carousel.mvc.js model :37-39): options hide after 5 s without interaction. */
const TIMER_DURATION = 5000;
const SPEED_CLIENT_VAR = 'UBTConnect.PhotobookCarousel_SelectedSpeed';

interface AutoplaySettings {
  speed: number;
  isEnabled: boolean;
  isTemporarilyPaused: boolean;
}

/** Set Splide Configs of OnInitialize (:1307-1372): interval = the autoplay speed. */
const carouselConfigs = (speed: number): SplideConfigs => ({
  speed: 500,
  paginationDirection: 'ltr',
  waitForTransition: BooleanTypes.Unset,
  interval: speed,
  wheel: BooleanTypes.False,
  flickPower: 400,
  flickMaxPages: 1,
  resetProgress: BooleanTypes.False,
  updateOnMove: BooleanTypes.True,
  pauseOnFocus: BooleanTypes.False,
  pauseOnHover: BooleanTypes.False,
});

const EMPTY_HOUSEHOLD: PhotobookHousehold = { householdId: '0', householdName: '', locality: '' };

export interface Photobook_CarouselProps {
  id: string;
  inHouseholds: readonly PhotobookHousehold[];
  inSelectedHousehold: SelectedHousehold;
  /** Event ClosePhotobook(CurrentHousehold). */
  onClosePhotobook?: (currentHousehold: PhotobookHousehold) => void;
}

/** Directory_Photobook.Photobook_Carousel (Photobook_Carousel.mvc.js: model :1-121, view :122-623, controller
    :624-1940). The full-screen OSUI Carousel of Photobook_Item slides (no navigation, no loop, AutoPlay =
    AutoplaySettings.IsEnabled, StartingPosition) inside the touch container, the overlay options (left info, right
    speed / close, centre player) and the thumbnail gallery, all shown while IsShow.
    - OnInitialize (:1295-1394): PhotobookCarousel_SelectedSpeed defaults to EightSeconds; autoplay off; Splide configs;
      StartingPosition = CurrentPosition = In_SelectedHousehold.Position; CurrentHousehold from In_Households.
    - OnReady (:662-686): StartInactivityTimer (5 s, then SetShowOptions(False)); OnDestroy: StopInactivityTimer(False).
    - Initialized → OnInitialize_Carousel (:1021-1063): SetSplideEvent "moved" (its handler only logs to the console:
      not ported, NO-CONSOLE), then SetCarouselConfigs (SetSplideConfigs).
    - Touch container click → StopInactivityTimer(True) (options shown, timer restarted).
    - CarouselGoTo, CarouselToggleDrag (OSUI actions) and Carousel_SetCurrentPosition (UBTConnect) on the carousel
      widget (CR-Photobook-1). Their failure branches only log to the console (JSUtils_Console_Log): not ported
      (NO-CONSOLE). */
export function Photobook_Carousel({
  id,
  inHouseholds,
  inSelectedHousehold,
  onClosePhotobook,
}: Photobook_CarouselProps) {
  const prefix = id.replace('$', '');
  const householdAt = (position: number) => inHouseholds[position] ?? EMPTY_HOUSEHOLD;

  /* OnInitialize (:1295-1394), once. The default speed is derived during render; the client variable itself is
     written in an effect below, because writing it here notifies the session subscribers (AppStart) mid-render. */
  const [initial] = useState(() => {
    const stored = getClientVar(SPEED_CLIENT_VAR);
    const speed = stored === 0 ? Photobook_Speed.EightSeconds : stored;
    return { speed, storedSpeed: stored, startingPosition: inSelectedHousehold.position };
  });
  useEffect(() => {
    if (initial.storedSpeed === 0) setClientVar(SPEED_CLIENT_VAR, Photobook_Speed.EightSeconds);
  }, [initial.storedSpeed]);
  const [autoplay, setAutoplay] = useState<AutoplaySettings>({
    speed: initial.speed,
    isEnabled: false,
    isTemporarilyPaused: false,
  });
  const configsRef = useRef<SplideConfigs>(carouselConfigs(initial.speed));
  const [currentPosition, setCurrentPosition] = useState(initial.startingPosition);
  const [currentHousehold, setCurrentHousehold] = useState(() => householdAt(initial.startingPosition));
  const [isShow, setIsShow] = useState(true);
  const isReplayingRef = useRef(false);
  const currentTimer = useRef<number | null>(null);

  /* SetShowOptions / StartInactivityTimer / StopInactivityTimer (:937-1011; JS nodes :1895-1909). StartTimer does not
     clear a running timer: as compiled, only StopInactivityTimer clears the last one. */
  const startInactivityTimer = () => {
    currentTimer.current = window.setTimeout(() => {
      setIsShow(false);
    }, TIMER_DURATION);
  };
  const stopInactivityTimer = (startNew: boolean) => {
    if (currentTimer.current !== null) window.clearTimeout(currentTimer.current);
    currentTimer.current = null;
    setIsShow(true);
    if (startNew) startInactivityTimer();
  };
  /* OnReady → StartInactivityTimer; OnDestroy → StopInactivityTimer(False) (clears the timer). */
  useEffect(() => {
    currentTimer.current = window.setTimeout(() => {
      setIsShow(false);
    }, TIMER_DURATION);
    return () => {
      if (currentTimer.current !== null) window.clearTimeout(currentTimer.current);
      currentTimer.current = null;
    };
  }, []);

  /* SetCarouselConfigs (:749-776). */
  const setCarouselConfigs = () => {
    setSplideConfigs(CAROUSEL_WIDGET_ID, configsRef.current);
  };

  /* ToggleAutoplay (:1110-1155; CarouselToggleDrag :1144 / :1150): IsEnabled = In_IsPlay, not paused, SetCarouselConfigs, then CarouselToggleDrag
     Disable (In_IsPlay) / Enable. */
  const toggleAutoplay = (isPlay: boolean) => {
    setAutoplay((a) => ({ ...a, isEnabled: isPlay, isTemporarilyPaused: false }));
    setCarouselConfigs();
    carouselToggleDrag(CAROUSEL_WIDGET_ID, !isPlay);
  };

  /* CheckForAutoplayRestart (:843-883): a temporarily paused autoplay restarts. */
  const checkForAutoplayRestart = () => {
    const a = autoplay;
    if (!a.isEnabled && a.isTemporarilyPaused) setAutoplay({ ...a, isEnabled: true, isTemporarilyPaused: false });
  };

  /* Carousel_OnSlideMoved (:1218-1277). */
  const onSlideMoved = (_carouselId: string, itemIndex: number) => {
    setCurrentPosition(itemIndex);
    setCurrentHousehold(householdAt(itemIndex));
    carousel_SetCurrentPosition(CAROUSEL_WIDGET_ID, itemIndex); // :1241
    if (isReplayingRef.current) {
      isReplayingRef.current = false;
      toggleAutoplay(true);
    } else if (itemIndex + 1 === inHouseholds.length && autoplay.isEnabled) {
      toggleAutoplay(false);
    }
  };

  /* Handler_SheetIsOpen (:1395-1414): StopInactivityTimer(False); a running autoplay is paused temporarily. */
  const handlerSheetIsOpen = () => {
    stopInactivityTimer(false);
    const a = autoplay;
    if (a.isEnabled) setAutoplay({ ...a, isEnabled: false, isTemporarilyPaused: true });
  };
  /* Handler_SheetIsClosed (:1620-1640). */
  const handlerSheetIsClosed = () => {
    startInactivityTimer();
    checkForAutoplayRestart();
  };
  /* Handler_ChangeSpeed (:1488-1512) + SetNewSpeed (:1535-1560). */
  const handlerChangeSpeed = (selectedSpeed: number) => {
    startInactivityTimer();
    if (configsRef.current.interval === selectedSpeed) return;
    setClientVar(SPEED_CLIENT_VAR, selectedSpeed);
    const speed = getClientVar(SPEED_CLIENT_VAR);
    setAutoplay((a) => ({ ...a, speed }));
    configsRef.current = { ...configsRef.current, interval: speed };
    setCarouselConfigs();
    checkForAutoplayRestart();
  };
  /* Handler_ClosePhotobook (:777-808): StopInactivityTimer(False), then ClosePhotobook(CurrentHousehold). */
  const handlerClosePhotobook = () => {
    stopInactivityTimer(false);
    onClosePhotobook?.(currentHousehold);
  };
  /* Handler_ReplayCarousel (:809-842): StopInactivityTimer(True), IsReplaying, CarouselGoTo(0) (:832). */
  const handlerReplayCarousel = () => {
    stopInactivityTimer(true);
    isReplayingRef.current = true;
    carouselGoTo(CAROUSEL_WIDGET_ID, 0);
  };
  /* Handler_ClickedGalleryItem (:1609-1640): StopInactivityTimer(True), CarouselGoTo(Event_SelectedHousehold.Position)
     (:1632). */
  const handlerClickedGalleryItem = (selected: SelectedHousehold) => {
    stopInactivityTimer(true);
    carouselGoTo(CAROUSEL_WIDGET_ID, selected.position);
  };
  /* Handler_ZoomIn (:687-718): IsZoomedIn = True (read by nothing but the debugger, :2058: not kept), then
     CarouselToggleDrag(False) (:707). Handler_MinZoomReached (:1172-1200): CarouselToggleDrag(True) (:1189). */
  const handlerZoomIn = () => {
    carouselToggleDrag(CAROUSEL_WIDGET_ID, false);
  };
  const handlerMinZoomReached = () => {
    carouselToggleDrag(CAROUSEL_WIDGET_ID, true);
  };

  return (
    <OSBlock name="Directory_Photobook.Photobook_Carousel" id={id}>
      <div className={MAIN_CONTAINER_CLASS} data-container="" id={`${prefix}-Carousel_Cont`}>
        <div
          className={`${MAIN_CONTAINER_CLASS}--touch`}
          data-container=""
          id={`${prefix}-Carousel_Touch_Cont`}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            stopInactivityTimer(true);
          }}
        >
          <Carousel
            id={CAROUSEL_WIDGET_ID}
            extendedClass={`${MAIN_CONTAINER_CLASS}--carousel`}
            navigation={CarouselNavigation.None}
            optionalConfigs={{ AutoPlay: autoplay.isEnabled, Loop: false, StartingPosition: initial.startingPosition }}
            onOnSlideMoved={onSlideMoved}
            onInitialized={setCarouselConfigs}
          >
            <OSList
              className={`list list-group ${MAIN_CONTAINER_CLASS}--list`}
              animateItems={false}
              disableVirtualization
              source={inHouseholds}
              keyOf={(h, index) => `${h.householdId}-${String(index)}`}
            >
              {(household, index) => (
                <Photobook_Item
                  prefix={`${prefix}-l1-37_${String(index)}-b2`}
                  inMainContainerClass={MAIN_CONTAINER_CLASS}
                  inHousehold={household}
                  onZoomIn={handlerZoomIn}
                  onMinZoomReached={handlerMinZoomReached}
                />
              )}
            </OSList>
          </Carousel>
        </div>
        <Photobook_Options_Left
          id={`${prefix}-$b3`}
          inMainContainerClass={MAIN_CONTAINER_CLASS}
          inIsShow={isShow}
          inCurrentHousehold={currentHousehold}
          onSheetIsOpen={handlerSheetIsOpen}
          onClosed={handlerSheetIsClosed}
        />
        <Photobook_Options_Right
          id={`${prefix}-$b4`}
          inCurrentSpeed={autoplay.speed}
          inMainContainerClass={MAIN_CONTAINER_CLASS}
          inIsShow={isShow}
          onClosed={handlerSheetIsClosed}
          onClosePhotobook={handlerClosePhotobook}
          onSetSpeed={handlerChangeSpeed}
          onSheetIsOpen={handlerSheetIsOpen}
        />
        <Photobook_Options_Player
          id={`${prefix}-$b5`}
          inMainContainerClass={MAIN_CONTAINER_CLASS}
          inIsShow={isShow}
          inIsFinalItem={currentPosition + 1 === inHouseholds.length}
          onClicked={toggleAutoplay}
          onReplay={handlerReplayCarousel}
        />
        <Photobook_Gallery
          id={`${prefix}-$b6`}
          inIsShow={isShow}
          inSelectedPosition={currentPosition}
          inLocalityHouseholdIds={inHouseholds.map((h) => h.householdId)}
          onClicked={handlerClickedGalleryItem}
          onListTouchStart={() => {
            stopInactivityTimer(false);
          }}
          onListTouchEnd={startInactivityTimer}
        />
      </div>
    </OSBlock>
  );
}
