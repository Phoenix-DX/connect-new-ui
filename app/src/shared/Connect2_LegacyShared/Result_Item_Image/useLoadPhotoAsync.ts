import { useEffect, useState } from 'react';
import {
  getCacheableSignedPhotoURL,
  getSignedPhotosInBulk,
  type GetSignedPhotosInBulk,
} from '@/shared/Connect2_LegacyShared/lib/actions';

interface LoadedPhoto {
  bucket: string;
  path: string;
  type: string;
  signedURL: string;
}

/** LoadPhotoAsync of Result_Item_Image (p:Connect2_LegacyShared.Utility.Result_Item_Image.mvc.js controller :702-770,
    run by OnReady :825-843 and OnParametersChanged :845-863): with In_SignedURL empty, Last_SignedURL is reused when
    Bucket, Path and Type are the last loaded ones and it is not empty (:721-724); otherwise GetCacheableSignedPhotoURL
    loads it and stores Last_Bucket / Last_Path / Last_Type / Last_SignedURL (:727-745). Returns the In_SignedURL the
    view shows: the input, else the loaded URL of the current photo, else "" (default image). A failed load leaves the
    default image (the original's flow stops at the exception). `server` is GetSignedPhotosInBulk (contract operation
    since CR-W3Y-1); tests pass a stub. */
export function useLoadPhotoAsync(
  inSignedURL: string,
  inBucket: string,
  inPath: string,
  inType: string,
  server: GetSignedPhotosInBulk = getSignedPhotosInBulk,
): string {
  const [last, setLast] = useState<LoadedPhoto>({ bucket: '', path: '', type: '', signedURL: '' });
  const isLast = last.bucket === inBucket && last.path === inPath && last.type === inType;
  const reuse = isLast && last.signedURL !== '';
  useEffect(() => {
    if (inSignedURL !== '' || reuse) return;
    let alive = true;
    getCacheableSignedPhotoURL(inBucket, inPath, inType, server)
      .then((signedURL) => {
        if (alive) setLast({ bucket: inBucket, path: inPath, type: inType, signedURL });
      })
      .catch(() => undefined);
    return () => {
      alive = false;
    };
  }, [inSignedURL, inBucket, inPath, inType, reuse, server]);
  if (inSignedURL !== '') return inSignedURL;
  return isLast ? last.signedURL : '';
}
