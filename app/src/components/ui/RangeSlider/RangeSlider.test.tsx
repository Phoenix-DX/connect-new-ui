import { act, fireEvent, render } from '@testing-library/react';
import type { API } from 'nouislider';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { RangeSlider, internalConfigs } from './RangeSlider';
import { pipsConfig, providerConfig, rangeConfig, validateConfig } from './provider';

type SliderElement = HTMLElement & { noUiSlider?: API };

beforeEach(() => {
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

const base = () => internalConfigs(0, 10, 3, 'horizontal', '100%', {}, '');

describe('RangeSlider', () => {
  it('provider config: single handle, connect lower, range, no pips when the interval is below one', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    const options = providerConfig(base());
    expect(options).toMatchObject({
      step: 1,
      orientation: 'horizontal',
      range: { min: 0, max: 10 },
      start: [3],
      connect: 'lower',
      handleAttributes: [{ 'aria-label': 'handler' }],
      direction: 'ltr',
      tooltips: [false],
    });
    expect('pips' in options).toBe(false);
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });

  it('pips: values every interval plus MaxValue; MaxValue = MinValue gives a 0..100 range; blank size gets the default', () => {
    const config = { ...base(), TickMarksInterval: 4 };
    expect(pipsConfig(config)).toEqual({ values: [0, 4, 8, 10], density: 400, mode: 'values' });
    expect(rangeConfig({ ...base(), MaxValue: 0 })).toEqual({ min: 0, max: 100 });
    expect(validateConfig({ ...base(), Orientation: 'vertical', Size: ' ' }).Size).toBe('100px');
    expect(validateConfig({ ...base(), Orientation: 'diagonal' }).Orientation).toBe('horizontal');
  });

  it('OnReady: noUiSlider on the provider element, size variable, has-ticks class, Initialized', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    const onInitialized = vi.fn();
    const { container } = render(
      <RangeSlider
        id="$b3"
        minValue={0}
        maxValue={10}
        startingValue={3}
        extendedClass="extra"
        onInitialized={onInitialized}
      />,
    );
    const root = container.querySelector<HTMLElement>('.osui-range-slider');
    expect(root).toHaveClass('extra', 'osui-range-slider--has-ticks');
    expect(root?.style.getPropertyValue('--range-slider-size')).toBe('100%');
    const target = container.querySelector<SliderElement>('.osui-range-slider__provider');
    expect(target?.noUiSlider?.get()).toBe('3.00');
    act(() => {
      vi.runAllTimers();
    });
    expect(onInitialized).toHaveBeenCalledWith('$b3');
    warn.mockRestore();
  });

  it('slide raises OnValueChange (throttled 200 ms) with the decimal value; parameters update the slider', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    const onChange = vi.fn();
    const props = { id: '$b3', minValue: 0, maxValue: 10, startingValue: 3, onOnValueChange: onChange };
    const { container, rerender, unmount } = render(<RangeSlider {...props} />);
    const target = container.querySelector<SliderElement>('.osui-range-slider__provider');
    const api = target?.noUiSlider;
    if (!api) throw new Error('no slider');
    const handle = container.querySelector('.noUi-handle');
    if (!handle) throw new Error('no handle');
    fireEvent.keyDown(handle, { key: 'ArrowRight', which: 39, keyCode: 39 });
    fireEvent.keyDown(handle, { key: 'ArrowRight', which: 39, keyCode: 39 });
    expect(onChange).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('$b3', 5);
    rerender(<RangeSlider {...props} startingValue={8} optionalConfigs={{ IsDisabled: true }} />);
    expect(api.get()).toBe('8.00');
    expect(target.hasAttribute('disabled')).toBe(true);
    rerender(
      <RangeSlider {...props} startingValue={8} optionalConfigs={{ IsDisabled: true }} orientation="vertical" />,
    );
    act(() => {
      vi.runAllTimers();
    });
    expect(container.querySelector('.osui-range-slider')).toHaveClass('osui-range-slider--is-vertical');
    unmount();
    warn.mockRestore();
  });
});
