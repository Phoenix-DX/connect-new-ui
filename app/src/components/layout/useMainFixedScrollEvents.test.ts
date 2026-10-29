import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  clearScrollTimeout,
  removeScrollEvents,
  setMainFixedScroll,
  setScrollShadow,
} from '@/lib/ubtConnectLibrary/actions';
import { useMainFixedScrollEvents } from './useMainFixedScrollEvents';

const ELEMENT = document.createElement('div');
const MAIN_LISTENER = () => undefined;
const SHADOW_LISTENER = () => undefined;

vi.mock('@/lib/ubtConnectLibrary/actions', () => ({
  setMainFixedScroll: vi.fn(() => ({ Out_Element: ELEMENT, Out_ScrollEvent: MAIN_LISTENER })),
  setScrollShadow: vi.fn(() => ({ Out_ScrollEvent: SHADOW_LISTENER, Out_Timeout: 7 })),
  removeScrollEvents: vi.fn(),
  clearScrollTimeout: vi.fn(),
}));

describe('useMainFixedScrollEvents (SetScrollEvents / OnDestroy of the fixed-title main layouts)', () => {
  it('attaches SetMainFixedScroll and SetScrollShadow once and raises the latest OnHeaderScrolled', () => {
    const first = vi.fn();
    const second = vi.fn();
    const { rerender, unmount } = renderHook(
      ({ cb }) => {
        useMainFixedScrollEvents(cb);
      },
      { initialProps: { cb: first } },
    );
    expect(setMainFixedScroll).toHaveBeenCalledTimes(1);
    expect(setScrollShadow).toHaveBeenCalledTimes(1);
    const callback = vi.mocked(setMainFixedScroll).mock.calls[0]?.[0];
    callback?.(true);
    expect(first).toHaveBeenCalledWith(true);
    rerender({ cb: second });
    callback?.(false);
    expect(second).toHaveBeenCalledWith(false);
    expect(first).toHaveBeenCalledTimes(1);
    expect(setMainFixedScroll).toHaveBeenCalledTimes(1);
    unmount();
    expect(removeScrollEvents).toHaveBeenCalledWith(ELEMENT, MAIN_LISTENER, SHADOW_LISTENER);
    expect(clearScrollTimeout).toHaveBeenCalledWith(7);
  });
});
