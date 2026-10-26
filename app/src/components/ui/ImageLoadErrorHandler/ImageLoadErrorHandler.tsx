/** @origin Connect2_LegacyShared.Utility.HandleImageLoadError */
// @os-block Connect2_LegacyShared.Utility.HandleImageLoadError
import { useEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { log } from '@/platform/log/log';
import { osImage } from '@/lib/os-assets';

/** Default_Placeholder_URL passed by OnReady (p:Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js:425). */
const DEFAULT_PLACEHOLDER_URL = osImage('img/Connect2_LegacyShared.User_rectangle.png');

export interface ImageLoadErrorHandlerProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** ApplicationEvent_ImageError (p:…HandleImageLoadError.mvc.js:195-217): the ImageErrorEventInfo record sent as the
    application event ErrorFromPhotoView. Telemetry is not wired yet (decision U17), so it goes to the log. */
function applicationEvent_ImageError(elementId: string, errorURL: string, isOnline: boolean): void {
  log.info('ApplicationEvent ErrorFromPhotoView', { Element: elementId, URL: errorURL, IsOffline: !isOnline });
}

/** Replaces images that fail to load under the nearest `.screen` ancestor with their `data-error-placeholder-src` or
    the default user picture (OnReady Error_EventListenerJS, p:…HandleImageLoadError.mvc.js:416-446). Without a `.screen`
    ancestor (UBTConnect layouts) nothing is listened to. */
export function ImageLoadErrorHandler({ id }: ImageLoadErrorHandlerProps) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const screen = root.current?.closest('.screen');
    if (!screen) return undefined;
    const onError = (evt: Event) => {
      const img = evt.target;
      if (!(img instanceof HTMLImageElement)) return;
      const elementId = img.closest('[id]')?.id ?? '';
      const errorURL = img.getAttribute('src');
      const attribute = img.getAttribute('data-error-placeholder-src');
      const placeholderURL = attribute !== null && attribute !== '' ? attribute : DEFAULT_PLACEHOLDER_URL;
      // Prevent an infinite loop, if the placeholder url itself fails loading
      if (errorURL !== null && errorURL !== '' && errorURL !== placeholderURL) {
        img.src = placeholderURL;
        applicationEvent_ImageError(elementId, errorURL, window.navigator.onLine);
      }
    };
    screen.addEventListener('error', onError, true);
    return () => {
      screen.removeEventListener('error', onError, true);
    };
  }, []);
  return (
    <OSBlock name="Utility.HandleImageLoadError" id={id}>
      <div data-container="" ref={root} />
    </OSBlock>
  );
}
