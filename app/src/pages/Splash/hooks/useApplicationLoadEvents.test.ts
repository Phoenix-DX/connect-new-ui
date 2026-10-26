import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { markAppReady } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { useApplicationLoadEvents } from './useApplicationLoadEvents';

beforeEach(() => {
  freshPage(); // the app start has not finished
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

describe('useApplicationLoadEvents', () => {
  it('raises the upgrade progress in 10 steps of a tenth of the minimum display time', () => {
    const onUpgradeProgress = vi.fn();
    renderHook(() => {
      useApplicationLoadEvents({ minimumDisplayTimeMs: 1500, onUpgradeProgress });
    });
    vi.advanceTimersByTime(149);
    expect(onUpgradeProgress).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(onUpgradeProgress).toHaveBeenLastCalledWith(1, 10);
    vi.advanceTimersByTime(3000);
    expect(onUpgradeProgress).toHaveBeenCalledTimes(10);
    expect(onUpgradeProgress).toHaveBeenLastCalledWith(10, 10);
  });

  it('raises OnLoadComplete with the page URL after the app start and the rest of the minimum display time', () => {
    const onLoadComplete = vi.fn();
    renderHook(() => {
      useApplicationLoadEvents({ minimumDisplayTimeMs: 1500, onLoadComplete });
    });
    vi.advanceTimersByTime(2000);
    expect(onLoadComplete).not.toHaveBeenCalled();
    act(() => {
      markAppReady();
    });
    vi.advanceTimersByTime(0);
    expect(onLoadComplete).toHaveBeenCalledExactlyOnceWith(window.location.href);
  });

  it('waits for the minimum display time when the app start finishes before it', () => {
    const onLoadComplete = vi.fn();
    renderHook(() => {
      useApplicationLoadEvents({ minimumDisplayTimeMs: 1500, onLoadComplete });
    });
    vi.advanceTimersByTime(500);
    act(() => {
      markAppReady();
    });
    vi.advanceTimersByTime(999);
    expect(onLoadComplete).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(onLoadComplete).toHaveBeenCalledOnce();
  });

  it('stops both timers when the screen goes', () => {
    const onUpgradeProgress = vi.fn();
    const onLoadComplete = vi.fn();
    act(() => {
      markAppReady();
    });
    const { unmount } = renderHook(() => {
      useApplicationLoadEvents({ minimumDisplayTimeMs: 1500, onUpgradeProgress, onLoadComplete });
    });
    vi.advanceTimersByTime(150);
    unmount();
    vi.advanceTimersByTime(3000);
    expect(onUpgradeProgress).toHaveBeenCalledOnce();
    expect(onLoadComplete).not.toHaveBeenCalled();
  });
});
