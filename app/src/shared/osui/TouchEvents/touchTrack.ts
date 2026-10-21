/* TouchTrack, the provider of OutSystems UI TouchEvents: `scripts/OutSystemsUI_2_23.TouchTrack.js` (copy in
   migration/runtime-sources/, line numbers below), ported 1:1. `createTouchTrack()` is `new TouchTrack()` (the
   constructor returns this object). */

/** callbackStart(X, Y) (:60). */
export type TouchStartCallback = (x: number, y: number) => void;
/** callbackMove(Evt, X, Y, TranslateX, TranslateY) (:74): the event comes first. */
export type TouchMoveCallback = (evt: TouchEvent, x: number, y: number, translateX: number, translateY: number) => void;
/** callbackEnd(X, Y, TranslateX, TranslateY, TimeTaken ms) (:89). */
export type TouchEndCallback = (
  x: number,
  y: number,
  translateX: number,
  translateY: number,
  timeTaken: number,
) => void;

export interface TouchTrack {
  init: (element: HTMLElement, start: TouchStartCallback, move: TouchMoveCallback, end: TouchEndCallback) => void;
  /** Stores the flag only: no handler reads it (:9, :98-100). */
  setPreventDefault: (toPreventDefault: boolean) => void;
  destroy: () => void;
}

export function createTouchTrack(): TouchTrack {
  let trackableElement: HTMLElement | undefined;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;
  let touchingElement = false;
  let callbackStart: TouchStartCallback;
  let callbackMove: TouchMoveCallback;
  let callbackEnd: TouchEndCallback;
  let startTime: number;
  /* Kept as in the original, never read. */
  let doPreventDefault = false;
  let translateX: number;
  let translateY: number;
  let timeTaken: number;

  /* onTouchStart (:48-62): start point and time; touching. */
  const onTouchStart = (evt: TouchEvent) => {
    startTime = new Date().getTime();
    startX = (evt.changedTouches[0] as Touch).pageX;
    currentX = startX;
    startY = (evt.changedTouches[0] as Touch).pageY;
    currentY = startY;
    touchingElement = true;
    callbackStart(startX, startY);
  };
  /* onTouchMove (:64-76): only while touching. */
  const onTouchMove = (evt: TouchEvent) => {
    if (!touchingElement) return;
    currentX = (evt.changedTouches[0] as Touch).pageX;
    currentY = (evt.changedTouches[0] as Touch).pageY;
    translateX = currentX - startX;
    translateY = currentY - startY;
    callbackMove(evt, currentX, currentY, translateX, translateY);
  };
  /* onTouchEnd (:78-91): the last moved point (the end event's own position is not read). */
  const onTouchEnd = () => {
    if (!touchingElement) return;
    touchingElement = false;
    translateX = currentX - startX;
    translateY = currentY - startY;
    timeTaken = new Date().getTime() - startTime;
    callbackEnd(currentX, currentY, translateX, translateY, timeTaken);
  };
  /* addEventListeners / removeEventListeners (:33-45); remove on an element never bound throws, as in the JS. */
  const addEventListeners = () => {
    const el = trackableElement as HTMLElement;
    el.addEventListener('touchstart', onTouchStart, false);
    el.addEventListener('touchmove', onTouchMove, false);
    el.addEventListener('touchend', onTouchEnd, false);
  };
  const removeEventListeners = () => {
    const el = trackableElement as HTMLElement;
    el.removeEventListener('touchstart', onTouchStart);
    el.removeEventListener('touchmove', onTouchMove);
    el.removeEventListener('touchend', onTouchEnd);
  };

  return {
    /* init (:15-27). */
    init: (element, start, move, end) => {
      trackableElement = element;
      callbackStart = start;
      callbackMove = move;
      callbackEnd = end;
      startTime = new Date().getTime();
      addEventListeners();
    },
    setPreventDefault: (toPreventDefault) => {
      doPreventDefault = toPreventDefault;
      void doPreventDefault;
    },
    /* destroy (:29-31). */
    destroy: () => {
      removeEventListeners();
    },
  };
}
