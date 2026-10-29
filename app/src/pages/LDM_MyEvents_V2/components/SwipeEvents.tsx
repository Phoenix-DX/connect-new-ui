/** @origin OutSystemsUI_2_23.Utilities.SwipeEvents */
import { OSBlock } from '@/components/ui/os/OSBlock';
import { TouchEvents } from '@/components/ui/TouchEvents';

/* OutSystems UI SwipeEvents (OutSystemsUI_2_23.Utilities.SwipeEvents.mvc.js). A local copy for MyTimeline_V2, the only
   user of the block in the app. */

interface SwipeEventsProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** WidgetId: DOM id of the element whose swipes are tracked (TouchEvents reads it once, OnReady). */
  widgetId: string;
  /** Event SwipeDown. */
  onSwipeDown?: () => unknown;
  /** Event SwipeLeft. */
  onSwipeLeft?: () => unknown;
  /** Event SwipeRight. */
  onSwipeRight?: () => unknown;
  /** Event SwipeUp. */
  onSwipeUp?: () => unknown;
}

/** The block variables Threshold (Integer, default 10) and Velocity (Decimal, default 0.3) (:12-17). */
const THRESHOLD = 10;
const VELOCITY = 0.3;

/** OnGestureEnd(OffsetX, OffsetY, TimeTaken) (:263-340): a swipe when one offset is above Threshold and one speed
    (offset / time) is above Velocity; horizontal when |OffsetX| > |OffsetY| (Right when OffsetX > 0, else Left), else
    vertical (Down when OffsetY > 0, else Up). */
export function swipeDirection(
  offsetX: number,
  offsetY: number,
  timeTaken: number,
): 'Right' | 'Left' | 'Down' | 'Up' | null {
  const x = Math.abs(offsetX);
  const y = Math.abs(offsetY);
  if (!((x > THRESHOLD || y > THRESHOLD) && (x / timeTaken > VELOCITY || y / timeTaken > VELOCITY))) return null;
  if (x > y) return offsetX > 0 ? 'Right' : 'Left';
  return offsetY > 0 ? 'Down' : 'Up';
}

/** SwipeEvents: the view renders the TouchEvents block on WidgetId (:146-197). Its End event runs OnGestureEnd and its
    Move event runs OnGestureMove, whose JavaScript node PreventDefaut calls `Evt.preventDefault()` (:417-421). */
export function SwipeEvents({ id, widgetId, onSwipeDown, onSwipeLeft, onSwipeRight, onSwipeUp }: SwipeEventsProps) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="Utilities.SwipeEvents" id={id}>
      <TouchEvents
        id={`${scope}-$b1`}
        widgetId={widgetId}
        onMove={(_x, _y, _offsetX, _offsetY, evt) => {
          (evt as Event).preventDefault();
        }}
        onEnd={(_x, _y, offsetX, offsetY, timeTaken) => {
          const direction = swipeDirection(offsetX, offsetY, timeTaken);
          if (direction === 'Right') void onSwipeRight?.();
          else if (direction === 'Left') void onSwipeLeft?.();
          else if (direction === 'Down') void onSwipeDown?.();
          else if (direction === 'Up') void onSwipeUp?.();
        }}
      />
    </OSBlock>
  );
}
