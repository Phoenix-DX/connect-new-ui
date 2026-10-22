// @os-block OutSystemsUI_2_23.Utilities.SwipeEvents
import { OSBlock } from '@/components/ui/os/OSBlock';
import { TouchEvents } from '@/shared/osui/TouchEvents';

export interface SwipeEventsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** WidgetId: DOM id of the element whose swipes are detected (passed to TouchEvents). */
  widgetId?: string;
  /** Event SwipeUp. */
  onSwipeUp?: () => void;
  /** Event SwipeDown. */
  onSwipeDown?: () => void;
  /** Event SwipeLeft. */
  onSwipeLeft?: () => void;
  /** Event SwipeRight. */
  onSwipeRight?: () => void;
}

/** Local variables of the block (model :12-16): minimum offset in px and minimum speed in px/ms. */
const THRESHOLD = 10;
const VELOCITY = 0.3;

export type SwipeDirection = 'Up' | 'Down' | 'Left' | 'Right';

/** OnGestureEnd (p:migration/blocks/sources/OutSystemsUI_2_23.Utilities.SwipeEvents.mvc.js controller :270-330): a
    swipe when |OffsetX| or |OffsetY| exceeds Threshold and |Offset| / TimeTaken exceeds Velocity on either axis; the
    larger axis decides, positive X = Right, positive Y = Down. `null` = no swipe. */
export function swipeDirection(offsetX: number, offsetY: number, timeTaken: number): SwipeDirection | null {
  const ax = Math.abs(offsetX);
  const ay = Math.abs(offsetY);
  const isSwipe = (ax > THRESHOLD || ay > THRESHOLD) && (ax / timeTaken > VELOCITY || ay / timeTaken > VELOCITY);
  if (!isSwipe) return null;
  if (ax > ay) return offsetX > 0 ? 'Right' : 'Left';
  return offsetY > 0 ? 'Down' : 'Up';
}

/** OutSystems UI SwipeEvents (view :180-215): a TouchEvents block on WidgetId (`$if(false)` else branch, so always
    rendered). Its Move runs OnGestureMove (PreventDefaultJS :417-421: `Evt.preventDefault()`), its End runs
    OnGestureEnd, which raises SwipeUp / SwipeDown / SwipeLeft / SwipeRight. Never captured. */
export function SwipeEvents({
  id,
  widgetId = '',
  onSwipeUp,
  onSwipeDown,
  onSwipeLeft,
  onSwipeRight,
}: SwipeEventsProps) {
  const handlers = { Up: onSwipeUp, Down: onSwipeDown, Left: onSwipeLeft, Right: onSwipeRight };
  return (
    <OSBlock name="Utilities.SwipeEvents" id={id}>
      <TouchEvents
        widgetId={widgetId}
        onMove={(_x, _y, _offsetX, _offsetY, evt) => {
          (evt as Event).preventDefault();
        }}
        onEnd={(_x, _y, offsetX, offsetY, timeTaken) => {
          const direction = swipeDirection(offsetX, offsetY, timeTaken);
          if (direction) handlers[direction]?.();
        }}
      />
    </OSBlock>
  );
}
