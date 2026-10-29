import { CameraPluginEntities, takePhoto, type TakePhotoInput } from '@/platform/device/cameraPlugin';
import { log } from '@/platform/log/log';

/** The answer of Handler_OnRequestCamera: `{ Image }`, the base64 picture or "" (OrbitPassportScanC2.controller.js). */
interface PassportCameraResult {
  Image: string;
}

/** The TakePhoto call of Handler_OnRequestCamera (OrbitPassportScanC2.controller.js :96). */
export const PASSPORT_TAKE_PHOTO: TakePhotoInput = {
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

/** Handler_OnRequestCamera of OrbitPassportScanC2 (OrbitPassportScanC2.controller.js :81-131): CameraPlugin TakePhoto,
    then on Success the log "Camera plugin success" and Image = BinaryToBase64(MediaResult.Thumbnail) (BinaryToBase64JS:
    Base64 = Binary, :75-79); on an error the log "Camera plugin error code: …" and Image stays "", so the loader sends
    `ocr:error`. JSUtils_Console_Log is console.log(Message) (UBTJavaScriptUtils.controller.js :778-782); React writes the same texts
    through the log facility (rule NO-CONSOLE; auto decision 16, window 7, 2026-10-29). The camera is
    the web path of the plugin in every build (PassportScan Q2 (a), user 2026-10-29): platform/device/cameraPlugin. */
export async function takePassportPhoto(): Promise<PassportCameraResult> {
  const photo = await takePhoto(PASSPORT_TAKE_PHOTO);
  if (photo.Success) {
    log.info('Camera plugin success');
    return { Image: photo.MediaResult.Thumbnail };
  }
  log.error(`Camera plugin error code: ${photo.Error.ErrorCode}\r\n Message: ${photo.Error.ErrorMessage}`);
  return { Image: '' };
}
