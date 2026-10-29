import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { setLayoutTheme } from '@/components/layout/layoutTheme';
import { iOSMetaTags, iOSPreventSwipe } from '@/lib/legacyShared/actions';
import { ThemeClass } from '@/lib/legacyShared/staticEntities';
import { useOrbitLayoutEffects } from './useOrbitLayoutEffects';

vi.mock('@/components/layout/layoutTheme', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/components/layout/layoutTheme')>()),
  setLayoutTheme: vi.fn(),
}));
vi.mock('@/lib/legacyShared/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/legacyShared/actions')>()),
  iOSMetaTags: vi.fn(),
  iOSPreventSwipe: vi.fn(),
}));

describe('useOrbitLayoutEffects (OnInitialize and OnReady of Layout_Orbit and Layout_OrbitBlank)', () => {
  it('sets the Orbit theme and runs IOSMetaTags and IOSPreventSwipe once', () => {
    const { rerender } = renderHook(() => {
      useOrbitLayoutEffects();
    });
    rerender();
    expect(vi.mocked(setLayoutTheme).mock.calls).toEqual([[ThemeClass.Orbit]]);
    expect(iOSMetaTags).toHaveBeenCalledTimes(1);
    expect(iOSPreventSwipe).toHaveBeenCalledTimes(1);
  });
});
