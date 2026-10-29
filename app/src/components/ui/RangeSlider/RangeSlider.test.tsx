import { act, fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getPipsValues, RangeSlider } from './RangeSlider';

const RATING = {
  optionalConfigs: { ShowTickMarks: true, TickMarksInterval: 1 },
  minValue: 1,
  maxValue: 10,
  startingValue: 0,
};

describe('getPipsValues (AbstractNoUiSliderConfig.getPipsConfig)', () => {
  it('lists the ticks from MinValue by the interval, without the duplicate MaxValue', () => {
    expect(getPipsValues(1, 10, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it('adds MaxValue when the interval does not reach it, and gives null below 1', () => {
    expect(getPipsValues(0, 10, 4)).toEqual([0, 4, 8, 10]);
    expect(getPipsValues(0, 10, 0)).toBeNull();
  });
});

describe('RangeSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the noUiSlider markup with the start clamped to MinValue', () => {
    const { container } = render(
      <RangeSlider id="$b2" {...RATING} extendedClass="ubt-rating-slider--no-rate ubt-rating-slider" />,
    );
    const root = container.querySelector('.osui-range-slider');
    expect(root?.className).toBe(
      'osui-range-slider ubt-rating-slider--no-rate ubt-rating-slider osui-range-slider--has-ticks',
    );
    expect(root?.getAttribute('name')).not.toBe('');
    expect(container.querySelector('.osui-range-slider__provider')?.className).toBe(
      'osui-range-slider__provider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr',
    );
    const handle = container.querySelector('.noUi-handle');
    expect(handle?.className).toBe('noUi-handle noUi-handle-lower');
    expect(handle?.getAttribute('aria-label')).toBe('handler');
    expect(handle?.getAttribute('aria-valuemin')).toBe('1.0');
    expect(handle?.getAttribute('aria-valuemax')).toBe('10.0');
    expect(handle?.getAttribute('aria-valuenow')).toBe('1.0');
    expect(handle?.getAttribute('aria-valuetext')).toBe('1.00');
    const pips = container.querySelector('.noUi-pips');
    expect(pips?.className).toBe('noUi-pips noUi-pips-horizontal');
    expect(pips?.querySelectorAll('.noUi-marker.noUi-marker-large')).toHaveLength(10);
    expect([...(pips?.querySelectorAll('.noUi-value') ?? [])].map((v) => v.textContent)).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
    ]);
    // Marker, value, marker, value…: the theme selects them with nth-of-type.
    expect(pips?.children[0]?.className).toContain('noUi-marker');
    expect(pips?.children[1]?.getAttribute('data-value')).toBe('1');
  });

  it('raises OnValueChange 200 ms after the first slide, with the value at that moment', () => {
    const onValueChange = vi.fn();
    const { container } = render(<RangeSlider id="$b2" {...RATING} onValueChange={onValueChange} />);
    const handle = container.querySelector('.noUi-handle');
    if (!handle) throw new Error('no handle');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    expect(handle.getAttribute('aria-valuenow')).toBe('3.0');
    expect(onValueChange).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(onValueChange).toHaveBeenCalledTimes(1);
    expect(onValueChange).toHaveBeenCalledWith('$b2', 3);
  });

  it('moves by five steps with PageUp, to the ends with Home and End, and not beyond MaxValue', () => {
    const onValueChange = vi.fn();
    const { container } = render(<RangeSlider id="$b2" {...RATING} onValueChange={onValueChange} />);
    const handle = container.querySelector('.noUi-handle');
    if (!handle) throw new Error('no handle');
    fireEvent.keyDown(handle, { key: 'PageUp' });
    expect(handle.getAttribute('aria-valuenow')).toBe('6.0');
    fireEvent.keyDown(handle, { key: 'End' });
    expect(handle.getAttribute('aria-valuenow')).toBe('10.0');
    fireEvent.keyDown(handle, { key: 'ArrowUp' });
    expect(handle.getAttribute('aria-valuenow')).toBe('10.0');
    fireEvent.keyDown(handle, { key: 'Home' });
    expect(handle.getAttribute('aria-valuenow')).toBe('1.0');
  });

  it('moves the handle to the tapped step', () => {
    const onValueChange = vi.fn();
    const { container } = render(<RangeSlider id="$b2" {...RATING} onValueChange={onValueChange} />);
    const base = container.querySelector<HTMLElement>('.noUi-base');
    if (!base) throw new Error('no base');
    base.getBoundingClientRect = () => ({ left: 0, width: 900, top: 0, height: 10 }) as DOMRect;
    fireEvent.pointerDown(base, { clientX: 400 });
    expect(container.querySelector('.noUi-handle')?.getAttribute('aria-valuenow')).toBe('5.0');
    expect(container.querySelector('.noUi-target')?.className).toContain('noUi-state-tap');
    act(() => {
      vi.advanceTimersByTime(300);
    });
    expect(onValueChange).toHaveBeenCalledWith('$b2', 5);
    expect(container.querySelector('.noUi-target')?.className).not.toContain('noUi-state-tap');
  });

  it('puts a changed ExtendedClass at the end of the classes', () => {
    const { container, rerender } = render(
      <RangeSlider {...RATING} extendedClass="ubt-rating-slider--no-rate ubt-rating-slider" />,
    );
    rerender(<RangeSlider {...RATING} extendedClass="ubt-rating-slider" />);
    expect(container.querySelector('.osui-range-slider')?.className).toBe(
      'osui-range-slider osui-range-slider--has-ticks ubt-rating-slider',
    );
  });
});
