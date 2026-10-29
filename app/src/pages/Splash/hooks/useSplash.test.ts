import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { PATHS } from '@/platform/navigation/paths';
import { pinCheck } from '@/platform/session/pin';
import { isSignedIn } from '@/platform/session/session';
import { useSplash } from './useSplash';

/* The navigations after the loading dots animation. While Splash shows, the TST router replaces the history entry
   (OutSystemsReactView.js goTo: replace when isShowingSplashScreen; MCP session row 14, user decision (a)). */
const navigate = vi.fn();
const navigateToPage = vi.fn();
vi.mock('@/platform/navigation', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/navigation')>()),
  useOsNavigate: () => navigate,
  allowUpcomingNavigation: vi.fn(),
}));
vi.mock('@/lib/jsUtils', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/jsUtils')>()),
  useScreenController_NavigateToPage: () => navigateToPage,
}));
vi.mock('@/platform/session/pin', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/pin')>()),
  pinCheck: vi.fn(),
}));
vi.mock('@/platform/session/session', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/platform/session/session')>()),
  isSignedIn: vi.fn(),
}));
vi.mock('./useApplicationLoadEvents', () => ({ useApplicationLoadEvents: vi.fn() }));
vi.mock('@/lib/ubtConnect/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ubtConnect/actions')>()),
  set_InitialClientVariables: vi.fn(),
}));

describe('useSplash: the navigation after the animation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(isSignedIn).mockReturnValue(true);
  });

  it('PINUnlock replaces the Splash entry', () => {
    vi.mocked(pinCheck).mockReturnValue({ needRegister: false, needUnlock: true });
    const { result } = renderHook(() => useSplash());
    act(() => {
      result.current.onLoadingDotsAnimationComplete();
    });
    expect(navigate).toHaveBeenCalledWith(PATHS.pinUnlock, undefined, { replace: true });
    expect(navigateToPage).not.toHaveBeenCalled();
  });

  it('PINRegister replaces the Splash entry', () => {
    vi.mocked(pinCheck).mockReturnValue({ needRegister: true, needUnlock: false });
    const { result } = renderHook(() => useSplash());
    act(() => {
      result.current.onLoadingDotsAnimationComplete();
    });
    expect(navigate).toHaveBeenCalledWith(PATHS.pinRegister, undefined, { replace: true });
  });

  it('no PIN step: ScreenController_NavigateToPage with replace (True)', () => {
    vi.mocked(pinCheck).mockReturnValue({ needRegister: false, needUnlock: false });
    const { result } = renderHook(() => useSplash());
    act(() => {
      result.current.onLoadingDotsAnimationComplete();
    });
    expect(navigate).not.toHaveBeenCalled();
    expect(navigateToPage).toHaveBeenCalledWith(expect.any(String), true);
  });
});
