import { useEffect, useMemo } from 'react';

/** ImageCache.TTL of the platform Image widget (OutSystemsReactWidgets.js Image): the widget revokes an object URL
    120 s after its last user is gone. */
export const IMAGE_CACHE_TTL_MS = 120_000;

/** The URL that the platform Image widget gives an image of type Binary (ImageCache.requestURL:
    URL.createObjectURL of a Blob of the BinaryData). `base64` is the BinaryData as it travels; "" (NullBinary())
    gives "". The URL is revoked IMAGE_CACHE_TTL_MS after the binary changes or the screen unmounts.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode */
export function useBinaryImageURL(base64: string): string {
  const url = useMemo(() => {
    if (base64 === '') return '';
    const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
    return URL.createObjectURL(new Blob([bytes]));
  }, [base64]);
  useEffect(
    () => () => {
      if (url === '') return;
      window.setTimeout(() => {
        URL.revokeObjectURL(url);
      }, IMAGE_CACHE_TTL_MS);
    },
    [url],
  );
  return url;
}
