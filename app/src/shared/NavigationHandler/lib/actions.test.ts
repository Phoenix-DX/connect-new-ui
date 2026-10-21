import { describe, expect, it, vi } from 'vitest';
import { preventNavigation, resumeNavigation, wasNavigationPrevented } from './actions';

const navigationEvent = (resume = vi.fn()) =>
  new CustomEvent('dx-before-navigation', { cancelable: true, detail: { location: {}, replace: false, resume } });

describe('NavigationHandler actions', () => {
  it('PreventNavigation stops and cancels the event; WasNavigationPrevented reads defaultPrevented', () => {
    const event = navigationEvent();
    const stop = vi.spyOn(event, 'stopPropagation');
    expect(wasNavigationPrevented(event)).toBe(false);
    preventNavigation(event);
    expect(stop).toHaveBeenCalledTimes(1);
    expect(wasNavigationPrevented(event)).toBe(true);
  });

  it('ResumeNavigation calls detail.resume', () => {
    const resume = vi.fn();
    resumeNavigation(navigationEvent(resume));
    expect(resume).toHaveBeenCalledTimes(1);
  });
});
