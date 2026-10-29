import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CameraPluginEntities, checkCameraPlugin, takePhoto, type TakePhotoInput } from './cameraPlugin';
import { CAMERA_ERRORS, isMobileOrTablet } from './webCamera';

/* The web branches of CameraPlugin TakePhoto (cameraPlugin.ts, webCamera.ts) with a mocked navigator.mediaDevices.
   jsdom has no camera, canvas, media playback or matchMedia: the tests stub them. */

/** The TakePhoto call of Handler_OnRequestCamera (OrbitPassportScanC2.controller.js :96). */
const INPUT: TakePhotoInput = {
  Quality: 60,
  Width: 0,
  Height: 0,
  CorrectOrientation: true,
  EncodingType: CameraPluginEntities.EncodingType.JPEG,
  SaveToGallery: false,
  CameraDirection: CameraPluginEntities.CameraDirection.BackCamera,
  AllowEdit: false,
  AllowMultiplePhotos: false,
  IncludeMetadata: true,
};
const EMPTY_MEDIA = { Type: 0, URI: '', Thumbnail: '', Saved: false };
const IPHONE =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1';

const track = { stop: vi.fn() };
const stream = { getVideoTracks: () => [track] } as unknown as MediaStream;
const orientation = { matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() };

function setMediaDevices(value: Partial<MediaDevices> | undefined): void {
  Object.defineProperty(navigator, 'mediaDevices', { value, configurable: true });
}
const container = (): HTMLElement => {
  const element = document.getElementById('reactContainer');
  if (!element) throw new Error('no #reactContainer');
  return element;
};
const video = (): HTMLVideoElement => {
  const element = document.querySelector<HTMLVideoElement>('body > #camera-interface > video#camera-video');
  if (!element) throw new Error('the camera view is not open');
  return element;
};
/** Resolves with 'pending' when the promise has not settled after a few ticks. */
const settled = (promise: Promise<unknown>) =>
  Promise.race([
    promise.then(() => 'settled'),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('pending');
      }, 20);
    }),
  ]);

let toDataURL: ReturnType<typeof vi.spyOn>;
const drawImage = vi.fn();

beforeEach(() => {
  document.body.innerHTML = '<div id="reactContainer"></div>';
  document.head.querySelectorAll('style[title="camera-plugin-css"]').forEach((sheet) => {
    sheet.remove();
  });
  Object.defineProperty(window, 'matchMedia', { value: vi.fn(() => orientation), configurable: true, writable: true });
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined);
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => undefined);
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation((() => ({ drawImage })) as never);
  toDataURL = vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/jpeg;base64,QUJD');
  track.stop.mockClear();
});
afterEach(() => {
  Reflect.deleteProperty(navigator, 'mediaDevices');
  Reflect.deleteProperty(window, 'matchMedia');
  Reflect.deleteProperty(globalThis, 'cordova');
  vi.unstubAllGlobals();
  document.body.innerHTML = '';
});

describe('isMobileOrTablet (CameraPlugin.Camera.js :1-4)', () => {
  it('reads phones and tablets from the user agent, as the original regular expressions', () => {
    expect(isMobileOrTablet(IPHONE)).toBe(true);
    expect(
      isMobileOrTablet('Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/126.0 Safari/537.36'),
    ).toBe(true);
    expect(isMobileOrTablet('Mozilla/5.0 (iPad; CPU OS 17_5 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148')).toBe(
      true,
    );
    expect(
      isMobileOrTablet('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126.0 Safari/537.36'),
    ).toBe(false);
  });
});

describe('CheckCameraPlugin', () => {
  it('is available as PWA with navigator.mediaDevices and adds the plugin CSS once', async () => {
    setMediaDevices({ getUserMedia: vi.fn() });
    await checkCameraPlugin();
    const result = await checkCameraPlugin();
    expect(result).toEqual({
      IsAvailable: true,
      IsPWA: true,
      Error: { ErrorCode: '0', ErrorMessage: '' },
      Warning: { WarningCode: '0', WarningMessage: '' },
    });
    const sheets = document.head.querySelectorAll('style[title="camera-plugin-css"]');
    expect(sheets).toHaveLength(1);
    expect(sheets[0]?.textContent).toMatch(
      /^@layer legacy\{\.camera-wrapper\{height:100%;overflow:hidden;width:100%\}/,
    );
  });

  it('answers OS-PLUG-CAMR-0004 without navigator.mediaDevices', async () => {
    setMediaDevices(undefined);
    expect(await takePhoto(INPUT)).toEqual({
      Success: false,
      Error: {
        ErrorCode: 'OS-PLUG-CAMR-0004',
        ErrorMessage:
          'The browser doesn’t support the MediaDevices API. Check if the version is up to date and supports the required API',
      },
      MediaResult: EMPTY_MEDIA,
    });
    expect(document.getElementById('camera-interface')).toBeNull();
  });

  it('answers the native "plugin not available" error when Cordova is present (native branch not ported)', async () => {
    setMediaDevices({ getUserMedia: vi.fn() });
    vi.stubGlobal('cordova', {});
    const result = await takePhoto(INPUT);
    expect(result.Success).toBe(false);
    expect(result.Error).toEqual({ ErrorCode: 'OS-PLUG-CAMR-0018', ErrorMessage: 'The plugin is not available' });
  });
});

describe('TakePhoto, web camera view (CameraStream, desktop)', () => {
  it('opens the back camera, takes the picture as JPEG quality 60 and returns its base64 as MediaResult.Thumbnail', async () => {
    const getUserMedia = vi.fn().mockResolvedValue(stream);
    setMediaDevices({ getUserMedia });
    const pushState = vi.spyOn(history, 'pushState');
    const pending = takePhoto(INPUT);
    await vi.waitFor(() => {
      expect(getUserMedia).toHaveBeenCalledTimes(1);
    });
    expect(getUserMedia).toHaveBeenCalledWith({
      audio: false,
      video: { facingMode: 'environment', aspectRatio: { exact: window.innerWidth / window.innerHeight } },
    });
    expect(pushState).toHaveBeenCalledWith(null, '', null);
    const view = document.querySelector('body > div#camera-interface.camera-wrapper');
    expect(view?.querySelector('canvas#camera-canvas.camera-canvas')).not.toBeNull();
    expect(video().className).toBe('camera-video');
    expect(video().hasAttribute('playsinline')).toBe(true);
    expect(video().srcObject).toBe(stream);
    expect(container().style.display).toBe('none');
    expect(document.getElementById('camera-white-button')).toBeNull();

    video().dispatchEvent(new Event('loadedmetadata'));
    const button = document.querySelector<HTMLButtonElement>(
      '#camera-interface > div.camera-button-wrapper > button#camera-white-button.camera-button',
    );
    expect(button?.textContent).toBe('');
    button?.click();

    expect(await pending).toEqual({
      Success: true,
      Error: { ErrorCode: '0', ErrorMessage: '' },
      MediaResult: { ...EMPTY_MEDIA, Thumbnail: 'QUJD' },
    });
    expect(toDataURL).toHaveBeenCalledWith('image/jpeg', 0.6);
    expect(drawImage).toHaveBeenCalledTimes(1);
    expect(track.stop).toHaveBeenCalledTimes(1);
    expect(document.getElementById('camera-interface')).toBeNull();
    expect(container().style.display).toBe('block');
  });

  it.each([
    ['permission denied', new DOMException('Permission denied', 'NotAllowedError')],
    ['no camera', new DOMException('Requested device not found', 'NotFoundError')],
  ])('answers OS-PLUG-CAMR-0003 and closes the view on %s', async (_name, error) => {
    setMediaDevices({ getUserMedia: vi.fn().mockRejectedValue(error) });
    expect(await takePhoto(INPUT)).toEqual({
      Success: false,
      Error: {
        ErrorCode: CAMERA_ERRORS.CAMERA_STREAM.ErrorCode,
        ErrorMessage: "Couldn't access camera. Check your camera permissions and try again.",
      },
      MediaResult: EMPTY_MEDIA,
    });
    expect(CAMERA_ERRORS.CAMERA_STREAM.ErrorCode).toBe('OS-PLUG-CAMR-0003');
    expect(document.getElementById('camera-interface')).toBeNull();
    expect(container().style.display).toBe('block');
  });

  it('answers the BROWSER_SUPPORT error when mediaDevices has no getUserMedia', async () => {
    setMediaDevices({});
    const result = await takePhoto(INPUT);
    expect(result.Error).toEqual({
      ErrorCode: 'OS-PLUG-CAMR-0004',
      ErrorMessage:
        "Couldn't take photo because the browser doesn't support the MediaDevices API. Check if the version is up to date and supports the required API.",
    });
    expect(document.getElementById('camera-interface')).toBeNull();
  });

  it('closes the view on the back button (popstate) and, as the original, answers nothing (cancel)', async () => {
    setMediaDevices({ getUserMedia: vi.fn().mockResolvedValue(stream) });
    const pending = takePhoto(INPUT);
    await vi.waitFor(() => {
      expect(video().srcObject).toBe(stream);
    });
    video().dispatchEvent(new Event('loadedmetadata'));
    window.dispatchEvent(new PopStateEvent('popstate'));
    expect(document.getElementById('camera-interface')).toBeNull();
    expect(track.stop).toHaveBeenCalledTimes(1);
    expect(container().style.display).toBe('block');
    expect(await settled(pending)).toBe('pending');
  });

  it('answers OS-PLUG-CAMR-0030 for a negative width or height', async () => {
    setMediaDevices({ getUserMedia: vi.fn() });
    expect((await takePhoto({ ...INPUT, Width: -1 })).Error).toEqual({
      ErrorCode: 'OS-PLUG-CAMR-0030',
      ErrorMessage: 'Height and width values need to be greater than zero.',
    });
  });
});

describe('TakePhoto, phone and tablet (NativeCamera: file input with capture)', () => {
  beforeEach(() => {
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(IPHONE);
  });
  const input = (): HTMLInputElement => {
    const element = container().querySelector<HTMLInputElement>('input#native-input');
    if (!element) throw new Error('no #native-input');
    return element;
  };
  const choose = (files: File[]) => {
    Object.defineProperty(input(), 'files', { value: files, configurable: true });
    input().dispatchEvent(new Event('change'));
  };

  it('opens the camera input and returns the chosen picture as JPEG quality 60', async () => {
    setMediaDevices({ getUserMedia: vi.fn() });
    vi.stubGlobal(
      'Image',
      class {
        onload: (() => void) | null = null;
        width = 1200;
        height = 800;
        set src(_value: string) {
          setTimeout(() => this.onload?.(), 0);
        }
      },
    );
    const click = vi.spyOn(HTMLInputElement.prototype, 'click').mockImplementation(() => undefined);
    const pending = takePhoto(INPUT);
    await vi.waitFor(() => {
      expect(click).toHaveBeenCalledTimes(1);
    });
    expect(input().type).toBe('file');
    expect(input().getAttribute('accept')).toBe('image/*');
    expect(input().getAttribute('capture')).toBe('environment');
    expect(input().style.display).toBe('none');
    expect(document.getElementById('camera-interface')).toBeNull();

    choose([new File(['photo'], 'passport.jpg', { type: 'image/jpeg' })]);
    expect(await pending).toEqual({
      Success: true,
      Error: { ErrorCode: '0', ErrorMessage: '' },
      MediaResult: { ...EMPTY_MEDIA, Thumbnail: 'QUJD' },
    });
    expect(toDataURL).toHaveBeenCalledWith('image/jpeg', 0.6);
    expect(container().querySelector('#native-input')).toBeNull();
  });

  it.each([
    ['no file', [], 'OS-PLUG-CAMR-0002', "Couldn't upload the selected file."],
    [
      'a file that is not an image',
      [new File(['text'], 'notes.txt', { type: 'text/plain' })],
      'OS-PLUG-CAMR-0001',
      "The selected file format isn't supported. Select a JPEG or a PNG file and try again.",
    ],
  ])('answers the file error for %s', async (_name, files, code, message) => {
    setMediaDevices({ getUserMedia: vi.fn() });
    vi.spyOn(HTMLInputElement.prototype, 'click').mockImplementation(() => undefined);
    const pending = takePhoto(INPUT);
    await vi.waitFor(() => {
      expect(container().querySelector('#native-input')).not.toBeNull();
    });
    choose(files);
    expect((await pending).Error).toEqual({ ErrorCode: code, ErrorMessage: message });
    expect(container().querySelector('#native-input')).toBeNull();
  });
});
