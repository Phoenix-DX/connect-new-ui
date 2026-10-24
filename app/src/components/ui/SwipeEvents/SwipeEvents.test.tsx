import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { swipeDirection, SwipeEvents } from './SwipeEvents';

/* Never captured: OnGestureEnd / OnGestureMove of the compiled controller. */
describe('SwipeEvents', () => {
  it('OnGestureEnd: threshold 10px, velocity 0.3 px/ms, larger axis wins', () => {
    expect(swipeDirection(120, 10, 200)).toBe('Right');
    expect(swipeDirection(-120, 10, 200)).toBe('Left');
    expect(swipeDirection(5, 90, 100)).toBe('Down');
    expect(swipeDirection(5, -90, 100)).toBe('Up');
    expect(swipeDirection(8, 9, 10)).toBeNull(); // under the threshold
    expect(swipeDirection(60, 0, 400)).toBeNull(); // too slow (0.15 px/ms)
  });

  it('a fast horizontal touch on WidgetId raises SwipeLeft; moves are default-prevented', () => {
    const onSwipeLeft = vi.fn();
    const onSwipeRight = vi.fn();
    const area = document.createElement('div');
    area.id = 'swipe-area';
    document.body.appendChild(area);
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(1000);
    render(<SwipeEvents widgetId="swipe-area" onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight} />);
    fireEvent.touchStart(area, { changedTouches: [{ pageX: 200, pageY: 50 }] });
    vi.setSystemTime(1100);
    const notPrevented = fireEvent.touchMove(area, { changedTouches: [{ pageX: 80, pageY: 55 }] });
    fireEvent.touchEnd(area, { changedTouches: [{ pageX: 80, pageY: 55 }] });
    expect(notPrevented).toBe(false);
    expect(onSwipeLeft).toHaveBeenCalledTimes(1);
    expect(onSwipeRight).not.toHaveBeenCalled();
    vi.useRealTimers();
    area.remove();
  });
});
