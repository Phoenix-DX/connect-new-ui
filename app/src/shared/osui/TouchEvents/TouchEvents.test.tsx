import { fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { TouchEvents } from './TouchEvents';
import * as stories from './TouchEvents.stories';
import { createTouchTrack } from './touchTrack';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const at = (pageX: number, pageY: number) => ({ changedTouches: [{ pageX, pageY }] });
const target = () => {
  const el = document.getElementById('PhotoContainer');
  if (!el) throw new Error('no target');
  return el;
};

describe('TouchEvents', () => {
  testCapturedVariants(stories, captures);
  afterEach(() => {
    vi.useRealTimers();
  });

  it('Start, Move and End on the WidgetId element, with integer coordinates, offsets and time taken', () => {
    vi.useFakeTimers();
    const onStart = vi.fn();
    const onMove = vi.fn();
    const onEnd = vi.fn();
    render(
      <>
        <div id="PhotoContainer" />
        <TouchEvents widgetId="PhotoContainer" onStart={onStart} onMove={onMove} onEnd={onEnd} />
      </>,
    );
    fireEvent.touchStart(target(), at(100.6, 50.2));
    expect(onStart).toHaveBeenCalledWith(100, 50);
    fireEvent.touchMove(target(), at(60.9, 55));
    expect(onMove).toHaveBeenCalledWith(60, 55, -39, 4, expect.any(TouchEvent));
    vi.advanceTimersByTime(250);
    fireEvent.touchEnd(target(), at(0, 0));
    /* End reports the last moved point, not the end event's own. */
    expect(onEnd).toHaveBeenCalledWith(60, 55, -39, 4, 250);
  });

  it('Move and End only while touching; unmount removes the listeners', () => {
    const onMove = vi.fn();
    const onEnd = vi.fn();
    const { unmount } = render(
      <>
        <div id="PhotoContainer" />
        <TouchEvents widgetId="PhotoContainer" onMove={onMove} onEnd={onEnd} />
      </>,
    );
    fireEvent.touchMove(target(), at(1, 1));
    fireEvent.touchEnd(target(), at(1, 1));
    expect(onMove).not.toHaveBeenCalled();
    expect(onEnd).not.toHaveBeenCalled();
    const el = target();
    const remove = vi.spyOn(el, 'removeEventListener');
    unmount();
    expect(remove.mock.calls.map(([type]) => type)).toEqual(['touchstart', 'touchmove', 'touchend']);
  });

  it('no element with WidgetId: nothing is bound and unmount does not throw', () => {
    const onStart = vi.fn();
    const { unmount } = render(<TouchEvents widgetId="Missing" onStart={onStart} />);
    expect(() => {
      unmount();
    }).not.toThrow();
  });

  it('TouchTrack: destroy without init throws as in the original; setPreventDefault changes no handler', () => {
    const track = createTouchTrack();
    expect(() => {
      track.destroy();
    }).toThrow(TypeError);
    const el = document.createElement('div');
    const start = vi.fn();
    track.init(el, start, vi.fn(), vi.fn());
    track.setPreventDefault(true);
    const event = new TouchEvent('touchstart', { cancelable: true });
    Object.defineProperty(event, 'changedTouches', { value: [{ pageX: 3, pageY: 4 }] });
    el.dispatchEvent(event);
    expect(start).toHaveBeenCalledWith(3, 4);
    expect(event.defaultPrevented).toBe(false);
  });
});
