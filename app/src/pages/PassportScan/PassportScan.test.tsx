import { addLogSink, type LogEntry } from '@/platform/log/log';
import { act, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import { fictionalPassportPhoto } from '@/mocks/fictional/passport';
import type { OrbitPassportConfigureOptions } from '@/vendor/orbitpassport';
import { PASSPORT_TAKE_PHOTO } from './camera';
import { PASSPORT_SAVED_MESSAGE } from './hooks/usePassportScan';
import { readPassportScanInputs } from './inputs';
import { PASSPORT_SCAN_MOCK_CONFIGS } from './mocks';
import PassportScan from './PassportScanPage';

/* The page on a memory router with the MSW mocks of the test setup (pages/PassportScan/mocks.ts). The vendored
   loader is replaced by a fake embed (the loader itself is tested in src/vendor/orbitpassport). */
const fake = vi.hoisted(() => {
  const state = { configured: false, options: null as OrbitPassportConfigureOptions | null };
  const embed = {
    configure: vi.fn((options: OrbitPassportConfigureOptions) => {
      state.configured = true;
      state.options = options;
      return new Promise<void>(() => undefined);
    }),
    open: vi.fn(),
    close: vi.fn(),
    destroy: vi.fn(() => {
      state.configured = false;
    }),
    back: vi.fn(() => true),
    isConfigured: vi.fn(() => state.configured),
    isReady: vi.fn(() => false),
    setIdToken: vi.fn(),
    sendCameraImage: vi.fn(),
    sendOcrError: vi.fn(),
  };
  return { state, embed, navigateBack: vi.fn(), showFeedbackMessage: vi.fn() };
});
vi.mock('@/vendor/orbitpassport', () => ({
  requireOrbitPassportEmbed: () => Promise.resolve(fake.embed),
  loadedOrbitPassportEmbed: () => fake.embed,
}));
vi.mock('@/platform/feedback', async (original) => ({
  ...(await original<typeof import('@/platform/feedback')>()),
  showFeedbackMessage: fake.showFeedbackMessage,
}));
vi.mock('@/platform/navigation', async (original) => ({
  ...(await original<typeof import('@/platform/navigation')>()),
  useNavigateBack: () => fake.navigateBack,
}));
/* The camera is the web path of CameraPlugin TakePhoto (tested in src/platform/device/cameraPlugin.test.ts); here a
   test double answers the fictional passport picture (src/mocks/fictional/passport.ts). */
const camera = vi.hoisted(() => ({ takePhoto: vi.fn() }));
vi.mock('@/platform/device/cameraPlugin', async (original) => ({
  ...(await original<typeof import('@/platform/device/cameraPlugin')>()),
  takePhoto: camera.takePhoto,
}));
const fictionalBase64 = () => fictionalPassportPhoto().split(',')[1] ?? '';

const PATH = '/UBTConnect/PassportScan';
const URL = `${PATH}?LoginMemberId=${MOCK_USER_ID}&TargetId=7301`;
const routes = { [PATH]: <PassportScan /> };
const configCalls = () => (window.__osCalls ?? []).filter((call) => call.action === 'DataActionGetConfigs');
const options = (): OrbitPassportConfigureOptions => {
  if (!fake.state.options) throw new Error('the embed is not configured');
  return fake.state.options;
};

beforeEach(() => {
  freshPage();
  resetNavigation();
  setSignedInUser(MOCK_USER_ID);
  vi.clearAllMocks();
  fake.state.configured = false;
  fake.state.options = null;
});
afterEach(() => {
  setSignedInUser(null);
  sessionStorage.clear();
});

describe('PassportScan inputs', () => {
  it('reads TargetId and LoginMemberId as LongInteger text', () => {
    expect(readPassportScanInputs(new URLSearchParams('TargetId=7301&LoginMemberId=7202'))).toEqual({
      TargetId: '7301',
      LoginMemberId: '7202',
    });
    expect(readPassportScanInputs(new URLSearchParams('TargetId=x'))).toEqual({ TargetId: '0', LoginMemberId: '0' });
  });
});

describe('PassportScan page', () => {
  it('renders the block in Layout_OrbitBlank with the full-screen embed container and CommonUI', () => {
    const { container } = renderRoutes(routes, URL);
    const block = container.querySelector('[data-block="PassportScan.ScreenBlock_PassportScan"]');
    expect(block?.querySelector('[data-block="Layout_OrbitTheme.Layout_OrbitBlank"]')).not.toBeNull();
    expect(block?.querySelector('.orbit-theme.backwards-compatibility')).not.toBeNull();
    const wrapper = block?.querySelector('#b1-b1-b2-LayoutWrapper');
    expect(wrapper?.className.trim()).toBe('layout layout-side layout-native ios-bounce orbit-theme');
    const embedContainer = wrapper?.querySelector<HTMLElement>('.content-middle #b1-passportScan');
    expect(embedContainer?.style.position).toBe('absolute');
    expect(embedContainer?.style.width).toBe('100vw');
    expect(container.querySelector('#b1-CommonUI_Elements [data-block]')).not.toBeNull();
    expect(block?.querySelector('[data-block="NavigationHandler.BackNavigationHandler"]')).not.toBeNull();
  });

  it('fetches GetConfigs, then configures the embed and opens it for the target member', async () => {
    renderRoutes(routes, URL);
    await waitFor(() => {
      expect(fake.embed.open).toHaveBeenCalledWith({ memberId: 7301 });
    });
    expect(configCalls()).toHaveLength(1);
    expect(configCalls()[0]).toEqual(
      expect.objectContaining({
        module: 'OrbitPassportScanC2',
        owner: 'ScreenBlock_PassportScan',
        inputNames: ['LoginMemberId', 'TargetMemberId'],
      }),
    );
    expect(options()).toEqual(
      expect.objectContaining({
        loginMemberId: Number(MOCK_USER_ID),
        containerId: 'b1-passportScan',
        idToken: PASSPORT_SCAN_MOCK_CONFIGS.Token,
        tokenType: PASSPORT_SCAN_MOCK_CONFIGS.TokenType,
        b2cTenants: PASSPORT_SCAN_MOCK_CONFIGS.B2CTenant,
        b2cClientIds: PASSPORT_SCAN_MOCK_CONFIGS.B2CClientId,
        b2cPolicy: PASSPORT_SCAN_MOCK_CONFIGS.B2CPolicy,
      }),
    );
    expect(options().baseUrl).toMatch(/\/mock-embeds\/orbit-passport\.html#$/);
  });

  it('shows the saved and error messages of the portal', async () => {
    renderRoutes(routes, URL);
    await waitFor(() => {
      expect(fake.embed.configure).toHaveBeenCalled();
    });
    act(() => {
      options().onSaved('demo-1');
      options().onError('The passport service is not available right now.');
    });
    await waitFor(() => {
      expect(fake.showFeedbackMessage).toHaveBeenCalledWith(PASSPORT_SAVED_MESSAGE, 1);
    });
    expect(fake.showFeedbackMessage).toHaveBeenCalledWith('The passport service is not available right now.', 3);
  });

  it('fetches GetConfigs again on OnAuthExpired and configures a new embed', async () => {
    renderRoutes(routes, URL);
    await waitFor(() => {
      expect(fake.embed.configure).toHaveBeenCalledTimes(1);
    });
    act(() => {
      options().onAuthExpired();
    });
    await waitFor(() => {
      expect(fake.embed.configure).toHaveBeenCalledTimes(2);
    });
    expect(configCalls()).toHaveLength(2);
    expect(fake.embed.destroy).toHaveBeenCalledTimes(1);
  });

  it('destroys the embed and goes back on Close', async () => {
    renderRoutes(routes, URL);
    await waitFor(() => {
      expect(fake.embed.configure).toHaveBeenCalled();
    });
    act(() => {
      options().onClose();
    });
    await waitFor(() => {
      expect(fake.navigateBack).toHaveBeenCalledTimes(1);
    });
    expect(fake.embed.destroy).toHaveBeenCalledTimes(1);
  });

  it('answers the camera request with TakePhoto (quality 60, JPEG, back camera) and the base64 Thumbnail', async () => {
    const entries: LogEntry[] = [];
    const stop = addLogSink((e) => entries.push(e));
    camera.takePhoto.mockResolvedValueOnce({
      Success: true,
      Error: { ErrorCode: '0', ErrorMessage: '' },
      MediaResult: { Type: 0, URI: '', Thumbnail: fictionalBase64(), Saved: false },
    });
    renderRoutes(routes, URL);
    await waitFor(() => {
      expect(fake.embed.configure).toHaveBeenCalled();
    });
    const result = (await options().onRequestCamera()) as { Image: string };
    expect(camera.takePhoto).toHaveBeenCalledWith(PASSPORT_TAKE_PHOTO);
    expect(PASSPORT_TAKE_PHOTO).toEqual(
      expect.objectContaining({ Quality: 60, EncodingType: 1, CameraDirection: 1, AllowEdit: false }),
    );
    expect(result).toEqual({ Image: fictionalBase64() });
    expect(atob(result.Image)).toContain('HARTLEY');
    // TST logs through JSUtils_Console_Log; React routes the same text through the log facility (auto decision 16)
    expect(entries).toContainEqual(expect.objectContaining({ level: 'info', message: 'Camera plugin success' }));
    stop();
  });

  it('logs the camera error and answers an empty image (permission denied, no camera)', async () => {
    const entries: LogEntry[] = [];
    const stop = addLogSink((e) => entries.push(e));
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    camera.takePhoto.mockResolvedValueOnce({
      Success: false,
      Error: {
        ErrorCode: 'OS-PLUG-CAMR-0003',
        ErrorMessage: "Couldn't access camera. Check your camera permissions and try again.",
      },
      MediaResult: { Type: 0, URI: '', Thumbnail: '', Saved: false },
    });
    renderRoutes(routes, URL);
    await waitFor(() => {
      expect(fake.embed.configure).toHaveBeenCalled();
    });
    expect(await options().onRequestCamera()).toEqual({ Image: '' });
    expect(entries).toContainEqual(
      expect.objectContaining({
        level: 'error',
        message:
          "Camera plugin error code: OS-PLUG-CAMR-0003\r\n Message: Couldn't access camera. Check your camera permissions and try again.",
      }),
    );
    stop();
  });

  it('configures nothing when the screen closes while GetConfigs runs (R1)', async () => {
    sessionStorage.setItem('mock:latency', '150');
    const { unmount } = renderRoutes(routes, URL);
    unmount();
    await new Promise((resolve) => setTimeout(resolve, 300));
    expect(fake.embed.configure).not.toHaveBeenCalled();
    expect(fake.embed.open).not.toHaveBeenCalled();
  });
});
