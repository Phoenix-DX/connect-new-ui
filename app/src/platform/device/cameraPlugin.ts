/* Device adapter for the OutSystems CameraPlugin actions CheckCameraPlugin and TakePhoto (ADR-1; the ADR-11 pattern of
   barcodePlugin.ts; docs/guides/device.md). User decision PassportScan Q2 (a), 2026-10-29: the web camera path, as TST,
   in every build. The web branches are ported 1:1 from migration/runtime-sources/CameraPlugin.controller.js (C below):
   - CheckCameraPlugin (C :71-282): IsCordovaDefined → Native_CheckCameraPlugin; else CheckMediaAPIJS
     (`!!navigator.mediaDevices`, C :283-287) → AddDependencies (C :1-69: LoadCSSJS and the camera scripts) →
     IsAvailable, IsPWA, ErrorCode "0"; else OS-PLUG-CAMR-0004. AllExceptions → "-1".
   - TakePhoto (C :2872-3036): CheckCameraPlugin → Width or Height < 0 → OS-PLUG-CAMR-0030 → "Is PWA?" →
     Web_TakePhoto, MediaResult.Thumbnail = ImageCaptured (the other MediaResult attributes keep their defaults);
     not available → the error of the check. AllExceptions → Success False with the message.
   - Web_TakePhoto (C :3663-3970) and its TakePhotoJS (C :3971-4010): WebCamera (webCamera.ts) over #reactContainer;
     the data: URL is cut after ";base64,". AllExceptions → "-1".
   Not ported: the native branches (Native_CheckCameraPlugin's plugin check, Native_TakePhoto). The app is web / PWA
   only (ADR-1) and ships no Cordova plugin, so with Cordova present CheckCameraPlugin answers as Native_CheckCameraPlugin
   does without the plugin (OS-PLUG-CAMR-0018, C :846-1033). Web_EditPhoto: no caller sets AllowEdit. */
import { addCameraPluginCss } from './cameraPluginCss';
import { WebCamera, type WebCameraParams } from './webCamera';

/** CommonPlugin ErrorRec. ErrorCode is Text: "0" after a success, "-1" after an exception. */
interface CameraPluginError {
  ErrorCode: string;
  ErrorMessage: string;
}

/** CommonPlugin WarningRec. */
interface CameraPluginWarning {
  WarningCode: string;
  WarningMessage: string;
}

/** CheckCameraPlugin outputs. */
interface CheckCameraPluginResult {
  IsAvailable: boolean;
  /** true when the web camera is used instead of the Cordova plugin */
  IsPWA: boolean;
  Error: CameraPluginError;
  Warning: CameraPluginWarning;
}

/** MediaResultRec (CameraPlugin.model.js :216-245). Metadata (MediaMetadataRec) is left out: the web branch keeps it at
    its default and no caller reads it. */
interface MediaResult {
  /** CameraPlugin.MediaType identifier; the web branch does not set it (0) */
  Type: number;
  URI: string;
  /** BinaryData: the picture as base64 text, without the data: prefix */
  Thumbnail: string;
  Saved: boolean;
}

/** TakePhoto inputs (C :2873). */
export interface TakePhotoInput {
  /** 0-100 */
  Quality: number;
  /** 0 keeps the size of the camera view */
  Width: number;
  Height: number;
  /** used by the native branch only */
  CorrectOrientation: boolean;
  /** CameraPlugin.EncodingType identifier */
  EncodingType: number;
  /** on the web: download the picture */
  SaveToGallery: boolean;
  /** CameraPlugin.CameraDirection identifier */
  CameraDirection: number;
  /** Web_EditPhoto is not ported */
  AllowEdit: false;
  /** on the web: the camera view also on phones and tablets */
  AllowMultiplePhotos: boolean;
  /** used by the native branch only */
  IncludeMetadata: boolean;
}

/** TakePhoto outputs. */
interface TakePhotoResult {
  Success: boolean;
  Error: CameraPluginError;
  MediaResult: MediaResult;
}

/** The static entities TakePhoto reads (identifiers from migration/runtime-sources/moduleinfo.json, CameraPlugin.model.js
    :540-570). */
export const CameraPluginEntities = {
  EncodingType: { JPEG: 1, PNG: 2 },
  CameraDirection: { BackCamera: 1, FrontCamera: 2 },
} as const;

/** Native_CheckCameraPlugin when Cordova has no camera plugin (C :897-903). */
const CAMERA_PLUGIN_NOT_AVAILABLE: CameraPluginError = {
  ErrorCode: 'OS-PLUG-CAMR-0018',
  ErrorMessage: 'The plugin is not available',
};
/** CheckCameraPlugin without navigator.mediaDevices (C :165-168). */
const MEDIA_DEVICES_NOT_SUPPORTED: CameraPluginError = {
  ErrorCode: 'OS-PLUG-CAMR-0004',
  ErrorMessage:
    'The browser doesn’t support the MediaDevices API. Check if the version is up to date and supports the required API',
};
/** TakePhoto with a negative Width or Height (C :2913-2918). */
const NEGATIVE_SIZE: CameraPluginError = {
  ErrorCode: 'OS-PLUG-CAMR-0030',
  ErrorMessage: 'Height and width values need to be greater than zero.',
};

const NO_ERROR: CameraPluginError = { ErrorCode: '0', ErrorMessage: '' };
const NO_WARNING: CameraPluginWarning = { WarningCode: '0', WarningMessage: '' };
const EMPTY_MEDIA_RESULT: MediaResult = { Type: 0, URI: '', Thumbnail: '', Saved: false };

/** OS.Exceptions.getMessage */
const exceptionMessage = (ex: unknown): string => (ex instanceof Error ? ex.message : String(ex));

/** CommonPlugin IsCordovaDefined: typeof cordova !== "undefined". */
const isCordovaDefined = (): boolean => typeof (globalThis as { cordova?: unknown }).cordova !== 'undefined';

/** CheckCameraPlugin. */
export function checkCameraPlugin(): Promise<CheckCameraPluginResult> {
  const out: CheckCameraPluginResult = {
    IsAvailable: false,
    IsPWA: false,
    Error: { ErrorCode: '', ErrorMessage: '' },
    Warning: { WarningCode: '', WarningMessage: '' },
  };
  try {
    // Is Native Application?
    if (isCordovaDefined()) {
      return Promise.resolve({
        IsAvailable: false,
        IsPWA: false,
        Error: { ...CAMERA_PLUGIN_NOT_AVAILABLE },
        Warning: { ...NO_WARNING },
      });
    }
    // Browser API Available? (CheckMediaAPIJS)
    if ((navigator as { mediaDevices?: MediaDevices }).mediaDevices) {
      // AddDependencies: LoadCSSJS; the camera scripts are the webCamera module
      addCameraPluginCss();
      return Promise.resolve({ IsAvailable: true, IsPWA: true, Error: { ...NO_ERROR }, Warning: { ...NO_WARNING } });
    }
    return Promise.resolve({
      IsAvailable: false,
      IsPWA: false,
      Error: { ...MEDIA_DEVICES_NOT_SUPPORTED },
      Warning: { ...NO_WARNING },
    });
  } catch (ex) {
    return Promise.resolve({
      ...out,
      IsAvailable: false,
      Error: { ErrorCode: '-1', ErrorMessage: exceptionMessage(ex) },
    });
  }
}

/** The outputs of Web_TakePhoto. */
interface WebTakePhotoResult {
  /** BinaryData as base64 text */
  ImageCaptured: string;
  Success: boolean;
  Error: CameraPluginError;
}

/** The output parameters of the TakePhotoJS node. */
interface TakePhotoJSResult {
  ImageCaptured: string;
  Success: boolean;
  ErrorCode: string;
  ErrorMessage: string;
}

/** TakePhotoJS of Web_TakePhoto (C :3971-4010): opens the WebCamera and resolves once, on a picture or an error. */
function takePhotoJS(input: TakePhotoInput): Promise<TakePhotoJSResult> {
  return new Promise((resolve) => {
    const params: WebCameraParams = {
      facingMode: input.CameraDirection === 2 ? 'user' : 'environment',
      fileType: input.EncodingType === 2 ? 'png' : 'jpeg',
      quality: String(input.Quality),
      save: input.SaveToGallery,
      height: input.Height,
      width: input.Width,
      inBatch: input.AllowMultiplePhotos,
    };

    const onSuccess = (data: string) => {
      const base64Index = data.indexOf(';base64,');
      resolve({ ImageCaptured: data.slice(base64Index + 8), Success: true, ErrorCode: '', ErrorMessage: '' });
    };
    const onError = (errorCode: string, errorMessage: string) => {
      resolve({ ImageCaptured: '', Success: false, ErrorCode: errorCode, ErrorMessage: errorMessage });
    };

    const startCamera = async () => {
      const parent = document.getElementById('reactContainer');
      // the original reads parent.style: without #reactContainer it fails and the action keeps waiting
      if (parent === null) throw new Error('#reactContainer is missing');
      const camera = new WebCamera(params, parent, onSuccess, onError);
      await camera.open();
    };
    // startCamera() is not awaited in the original: a throw leaves the action waiting (the back button: no answer).
    void startCamera();
  });
}

/** Web_TakePhoto (C :3663-3970), without the Web_EditPhoto branch (AllowEdit is false). */
async function webTakePhoto(input: TakePhotoInput): Promise<WebTakePhotoResult> {
  try {
    const js = await takePhotoJS(input);
    // Success?
    if (js.Success) return { ImageCaptured: js.ImageCaptured, Success: true, Error: { ...NO_ERROR } };
    return { ImageCaptured: '', Success: false, Error: { ErrorCode: js.ErrorCode, ErrorMessage: js.ErrorMessage } };
  } catch (ex) {
    return { ImageCaptured: '', Success: false, Error: { ErrorCode: '-1', ErrorMessage: exceptionMessage(ex) } };
  }
}

/** TakePhoto(input). On the web it resolves when the user takes the picture or the camera fails; when the user closes
    the camera view with the back button it never resolves, as in the original. */
export async function takePhoto(input: TakePhotoInput): Promise<TakePhotoResult> {
  const out: TakePhotoResult = {
    Success: false,
    Error: { ErrorCode: '', ErrorMessage: '' },
    MediaResult: { ...EMPTY_MEDIA_RESULT },
  };
  try {
    const check = await checkCameraPlugin();
    // Is Available?
    if (!check.IsAvailable) {
      return {
        ...out,
        Success: false,
        Error: { ErrorCode: check.Error.ErrorCode, ErrorMessage: check.Error.ErrorMessage },
      };
    }
    if (input.Width < 0 || input.Height < 0) return { ...out, Success: false, Error: { ...NEGATIVE_SIZE } };
    // Is PWA? Always true here: the Cordova branch never reports the plugin available (see the header).
    const web = await webTakePhoto(input);
    return {
      Success: web.Success,
      Error: { ErrorCode: web.Error.ErrorCode, ErrorMessage: web.Error.ErrorMessage },
      MediaResult: { ...out.MediaResult, Thumbnail: web.ImageCaptured },
    };
  } catch (ex) {
    return { ...out, Success: false, Error: { ...out.Error, ErrorMessage: exceptionMessage(ex) } };
  }
}
