import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SwipeEvents, swipeDirection } from './SwipeEvents';

/* SwipeEvents (OutSystemsUI_2_23.Utilities.SwipeEvents): OnGestureEnd and the TouchEvents wiring. */

const at = (pageX: number, pageY: number) => ({ changedTouches: [{ pageX, pageY }] });

describe('swipeDirection (OnGestureEnd, :263-340)', () => {
  it('a swipe needs one offset above 10 and one speed above 0.3', () => {
    expect(swipeDirection(0, -10, 10)).toBeNull();
    expect(swipeDirection(0, -40, 200)).toBeNull();
    expect(swipeDirection(0, -40, 100)).toBe('Up');
  });

  it('horizontal when |OffsetX| > |OffsetY|, else vertical', () => {
    expect(swipeDirection(40, 20, 50)).toBe('Right');
    expect(swipeDirection(-40, 20, 50)).toBe('Left');
    expect(swipeDirection(20, 40, 50)).toBe('Down');
    expect(swipeDirection(20, -40, 50)).toBe('Up');
    expect(swipeDirection(40, -40, 50)).toBe('Up');
  });
});

describe('SwipeEvents', () => {
  it('renders the SwipeEvents and TouchEvents blocks and raises SwipeUp for a swipe up on WidgetId', () => {
    const onSwipeUp = vi.fn();
    const onSwipeDown = vi.fn();
    const { container } = render(
      <>
        <div id="b1-ErrorScreen" />
        <SwipeEvents id="b1-$b7" widgetId="b1-ErrorScreen" onSwipeUp={onSwipeUp} onSwipeDown={onSwipeDown} />
      </>,
    );
    const block = container.querySelector('[data-block="Utilities.SwipeEvents"]');
    expect(block?.id).toBe('b1-$b7');
    expect(block?.querySelector('[data-block="Utilities.TouchEvents"]')?.id).toBe('b1-b7-$b1');
    const target = container.querySelector('#b1-ErrorScreen');
    if (!target) throw new Error('no swipe target');
    fireEvent.touchStart(target, at(100, 300));
    const move = fireEvent.touchMove(target, at(100, 200));
    expect(move).toBe(false);
    fireEvent.touchEnd(target, at(100, 200));
    expect(onSwipeUp).toHaveBeenCalledTimes(1);
    expect(onSwipeDown).not.toHaveBeenCalled();
  });
});
