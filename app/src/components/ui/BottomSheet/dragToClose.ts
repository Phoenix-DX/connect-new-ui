/* OutSystems UI BottomSheet drag-to-close, ported from the provider (OSUI = migration/runtime-sources/
   OutSystemsUI_2_23.OutSystemsUI.js): DeviceInfo.IsNative / IsTouch (:2684-2715), the touch gesture of the header
   (AbstractGestureEvent + DragEvent, :1779-1876), AnimateOnDrag (:668-806) and SpringAnimation (:820-880). The sheet
   uses them as BottomSheet._handleGestureEvents / _onGesture* (:4940-4963) with springAnimationConfigs (:4923-4930). */

/** Constants.NoTransition (OSUI:187): set on the sheet while it follows the finger. */
const NO_TRANSITION = 'no-transition';
/** AnimateOnDrag._swipeTriggerSpeed (OSUI:684), px per ms. */
const SWIPE_TRIGGER_SPEED = 0.3;

export type DragDirection = 'down' | 'up' | 'left' | 'right';
type DragOrientation = '' | 'horizontal' | 'vertical';

export interface SpringProperties {
  tension: number;
  friction: number;
  mass: number;
}

/** BottomSheet.springAnimationConfigs (OSUI:4923-4930). */
export const BOTTOM_SHEET_SPRING = {
  addSpringAnimation: true,
  springAnimationProperties: { tension: 300, friction: 15, mass: 1 },
} as const;

/** DeviceInfo.IsNative || DeviceInfo.IsTouch (OSUI:2684-2715): the gesture exists only on a native app or a touch
    device. IsNative = Cordova outside a PWA; IsTouch = maxTouchPoints > 0 where PointerEvent exists, else a coarse
    pointer, else TouchEvent / ontouchstart. */
export function hasTouchGestures(): boolean {
  const w = window as Window & { cordova?: unknown; TouchEvent?: unknown };
  const nav = navigator as Navigator & { standalone?: boolean };
  const matches = (query: string) => typeof w.matchMedia === 'function' && w.matchMedia(query).matches;
  if (w.cordova !== undefined && !(matches('(display-mode: standalone)') || nav.standalone === true)) return true;
  if ('PointerEvent' in w && 'maxTouchPoints' in nav) return nav.maxTouchPoints > 0;
  if (matches('(any-pointer:coarse)')) return true;
  return w.TouchEvent !== undefined || 'ontouchstart' in w;
}

/** SpringAnimation._createSpringEffect (OSUI:821-866): the keyframes of a damped spring back to 0. */
export function createSpringEffect(
  dx: number,
  dy: number,
  orientation: 'horizontal' | 'vertical',
  { tension, friction, mass }: SpringProperties,
): { positions: Keyframe[]; frames: number } {
  if (dx === 0 && dy === 0) return { positions: [], frames: 0 };
  const k = -tension;
  const d = -friction;
  const frameRate = 1 / 60;
  const displacementThreshold = 3;
  const isVertical = orientation === 'vertical';
  let velocity = 0;
  const positions: Keyframe[] = [];
  let frames = 0;
  let framesBelowThreshold = 0;
  let largestDispl: number | undefined;
  let displacement = isVertical ? dy : dx;
  for (let step = 0; step <= 1000; step += 1) {
    const accel = (k * displacement + d * velocity) / mass;
    velocity += accel * frameRate;
    displacement += velocity * frameRate;
    positions.push({
      transform: isVertical ? `translateY(${String(displacement)}px)` : `translateX(${String(displacement)}px)`,
    });
    const abs = Math.sqrt(displacement ** 2);
    largestDispl =
      largestDispl !== undefined && largestDispl < 0
        ? Math.max(largestDispl || -Infinity, abs)
        : Math.min(largestDispl || Infinity, abs);
    if (Math.abs(largestDispl) < displacementThreshold) framesBelowThreshold += 1;
    else framesBelowThreshold = 0;
    if (framesBelowThreshold >= 60) {
      frames = step;
      break;
    }
  }
  if (frames === 0) frames = 1000;
  return { positions, frames };
}

/** SpringAnimation.CreateSpringAnimation (OSUI:867-879). */
function createSpringAnimation(
  target: HTMLElement,
  offsetX: number,
  offsetY: number,
  orientation: 'horizontal' | 'vertical',
  properties: SpringProperties,
): Animation {
  const { positions, frames } = createSpringEffect(offsetX, offsetY, orientation, properties);
  const keyframes = new KeyframeEffect(target, positions, {
    duration: (frames / 60) * 1000,
    fill: 'both',
    easing: 'linear',
    iterations: 1,
  });
  return new Animation(keyframes);
}

/** AnimateOnDrag (OSUI:668-806): moves the target with the finger and, at the end, runs the callback (a fast enough
    swipe, or a drag past half its size) or springs back. */
export class AnimateOnDrag {
  readonly dragParams = {
    DragOrientation: '' as DragOrientation,
    ExpectedDirection: 'right' as DragDirection,
    InvalidDrag: false,
    IsMoving: false,
    IsOpen: false,
    IsReadyToTriggerCallback: false,
    LastX: 0,
    LastY: 0,
    MoveX: 0,
    MoveY: 0,
    Size: '',
    VerticalDrag: false,
    SpringAnimation: undefined as Animation | undefined,
  };

  constructor(private readonly target: HTMLElement) {}

  private checkIsDraggingInsideBounds(currentDrag: number): boolean {
    const p = this.dragParams;
    const move = p.VerticalDrag ? p.MoveY : p.MoveX;
    const last = p.VerticalDrag ? p.LastY : p.LastX;
    const isLeftOrUp = p.ExpectedDirection === 'left' || p.ExpectedDirection === 'up';
    const next = move + (currentDrag - last);
    return isLeftOrUp ? next > -parseInt(p.Size, 10) && next <= 0 : next < parseInt(p.Size, 10) && next >= 0;
  }

  private updateLastPositions(x: number, y: number) {
    this.dragParams.LastX = x;
    this.dragParams.LastY = y;
  }

  private updateUI = () => {
    const p = this.dragParams;
    if (!p.IsMoving) return;
    this.target.style.transform = p.VerticalDrag
      ? `translateY(${String(p.MoveY)}px)`
      : `translateX(${String(p.MoveX)}px)`;
    requestAnimationFrame(this.updateUI);
  };

  onDragEnd(
    offsetX: number,
    offsetY: number,
    timeTaken: number,
    callback: () => void,
    spring?: { addSpringAnimation: boolean; springAnimationProperties: SpringProperties },
  ): void {
    const p = this.dragParams;
    p.IsMoving = false;
    this.target.classList.remove(NO_TRANSITION);
    if ((offsetX === 0 && offsetY === 0) || p.InvalidDrag) {
      this.target.style.transform = '';
      return;
    }
    const checkSwipeSpeed = (p.VerticalDrag ? Math.abs(offsetY) : Math.abs(offsetX)) / timeTaken > SWIPE_TRIGGER_SPEED;
    // As in the original: the half-size test compares with a negative threshold, so a downward drag closes only by speed.
    const sizeThreshold = -parseInt(p.Size, 10) / 2;
    const swipedHalfWidth = (p.VerticalDrag ? p.MoveY : p.MoveX) < sizeThreshold;
    p.IsReadyToTriggerCallback = swipedHalfWidth || checkSwipeSpeed;
    if (p.IsReadyToTriggerCallback) callback();
    else if (spring?.addSpringAnimation && p.IsOpen) {
      p.SpringAnimation = createSpringAnimation(
        this.target,
        offsetX,
        offsetY,
        p.VerticalDrag ? 'vertical' : 'horizontal',
        spring.springAnimationProperties,
      );
      p.SpringAnimation.play();
    }
    this.target.style.transform = '';
  }

  onDragMove(offsetX: number, offsetY: number, currentX: number, currentY: number, event: Event | undefined): void {
    const p = this.dragParams;
    const direction: DragDirection = !p.VerticalDrag ? (offsetX > 0 ? 'right' : 'left') : offsetY < 0 ? 'up' : 'down';
    p.InvalidDrag = p.IsOpen && direction !== p.ExpectedDirection;
    if (p.InvalidDrag) {
      this.updateLastPositions(currentX, currentY);
      return;
    }
    if (p.DragOrientation === '') {
      p.DragOrientation = Math.abs(offsetX) >= Math.abs(offsetY) ? 'horizontal' : 'vertical';
      requestAnimationFrame(this.updateUI);
    }
    if (!p.VerticalDrag && p.DragOrientation === 'vertical') {
      this.updateLastPositions(currentX, currentY);
      return;
    }
    event?.preventDefault();
    if (this.checkIsDraggingInsideBounds(p.VerticalDrag ? currentY : currentX)) {
      if (p.VerticalDrag) p.MoveY = p.MoveY + (currentY - p.LastY);
      else p.MoveX = p.MoveX + (currentX - p.LastX);
    }
    this.updateLastPositions(currentX, currentY);
  }

  onDragStart(
    verticalDrag: boolean,
    expectedDirection: DragDirection,
    currentX: number,
    currentY: number,
    isOpen: boolean,
    size: string,
  ): void {
    const p = this.dragParams;
    p.DragOrientation = '';
    p.ExpectedDirection = expectedDirection;
    p.IsMoving = true;
    p.IsOpen = isOpen;
    p.LastX = currentX;
    p.LastY = currentY;
    p.Size = size;
    p.VerticalDrag = verticalDrag;
    p.SpringAnimation?.cancel();
    if (p.IsOpen) {
      p.MoveX = 0;
      p.MoveY = 0;
    } else if (p.ExpectedDirection === 'left') {
      p.MoveX = -parseInt(p.Size, 10);
      p.MoveY = -parseInt(p.Size, 10);
    } else {
      p.MoveX = parseInt(p.Size, 10);
      p.MoveY = parseInt(p.Size, 10);
    }
    this.target.classList.add(NO_TRANSITION);
  }
}

/** DragEvent.setSwipeEvents (OSUI:1872-1875) on AbstractGestureEvent (OSUI:1779-1866): touchstart / touchmove /
    touchend on the target, with the page coordinates, the offsets from the start and the time taken. The move
    callback receives the touchstart event, as in the original (`_gestureParams.event`). Returns unsetTouchEvents. */
export function setDragEvents(
  target: HTMLElement,
  onStart: (x: number, y: number) => void,
  onMove: (x: number, y: number, offsetX: number, offsetY: number, event: Event | undefined) => void,
  onEnd: (offsetX: number, offsetY: number, timeTaken: number) => void,
): () => void {
  const g = {
    startTime: 0,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0,
    timeTaken: 0,
    touchingElement: false,
    event: undefined as Event | undefined,
  };
  const start = (evt: TouchEvent) => {
    const touch = evt.changedTouches[0];
    if (!touch) return;
    g.startTime = new Date().getTime();
    g.startX = touch.pageX;
    g.currentX = g.startX;
    g.startY = touch.pageY;
    g.currentY = g.startY;
    g.touchingElement = true;
    g.event = evt;
    onStart(g.startX, g.startY);
  };
  const move = (evt: TouchEvent) => {
    const touch = evt.changedTouches[0];
    if (!g.touchingElement || !touch) return;
    g.currentX = touch.pageX;
    g.currentY = touch.pageY;
    g.offsetX = g.currentX - g.startX;
    g.offsetY = g.currentY - g.startY;
    onMove(g.currentX, g.currentY, g.offsetX, g.offsetY, g.event);
  };
  const end = () => {
    if (!g.touchingElement) return;
    g.touchingElement = false;
    g.offsetX = g.currentX - g.startX;
    g.offsetY = g.currentY - g.startY;
    g.timeTaken = new Date().getTime() - g.startTime;
    onEnd(g.offsetX, g.offsetY, g.timeTaken);
  };
  target.addEventListener('touchstart', start);
  target.addEventListener('touchmove', move);
  target.addEventListener('touchend', end);
  return () => {
    target.removeEventListener('touchstart', start);
    target.removeEventListener('touchmove', move);
    target.removeEventListener('touchend', end);
  };
}
