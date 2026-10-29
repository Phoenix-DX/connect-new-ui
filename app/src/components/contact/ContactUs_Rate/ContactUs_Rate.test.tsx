import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ContactUs_Rate } from './ContactUs_Rate';

describe('ContactUs_Rate', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the question, the slider without a rate, and the labels Poor and Excellent', () => {
    const { container } = render(<ContactUs_Rate id="$b8" selectedRate={0} isEnabled />);
    expect(container.firstElementChild?.getAttribute('data-block')).toBe('App_Menu_ContactUs.ContactUs_Rate');
    expect(screen.getByText('How would you rate your current experience with Connect?')).toBeTruthy();
    expect(container.querySelector('.osui-range-slider')?.className).toContain('ubt-rating-slider--no-rate');
    expect(screen.getByText('Poor')).toBeTruthy();
    expect(container.querySelector('[style="text-align: right;"]')?.textContent).toBe('Excellent');
  });

  it('RangeSliderOnValueChange: CurrentRate = Trunc(Value), then RateSelected(Trunc(Value))', () => {
    const onRateSelected = vi.fn();
    const { container } = render(<ContactUs_Rate id="$b8" onRateSelected={onRateSelected} />);
    const handle = container.querySelector('.noUi-handle');
    if (!handle) throw new Error('no handle');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(onRateSelected).toHaveBeenCalledWith(2);
    expect(container.querySelector('.osui-range-slider')?.className).toBe(
      'osui-range-slider osui-range-slider--has-ticks ubt-rating-slider',
    );
  });
});
