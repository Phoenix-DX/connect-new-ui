/** @origin Connect2_LegacyShared.Widgets.MultiResolutionImageLoader */
// @os-block Connect2_LegacyShared.Widgets.MultiResolutionImageLoader
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

/* MRIL = Connect2_LegacyShared.Widgets.MultiResolutionImageLoader.mvc.js (TST): the view (:121-147) and OnReady
   InitializeJS (:251-278). Facts L1-L3 of migration/clarify/review/item5-tooltip-loader.md; rules R1-R7 of section 3.3
   of item5-solution.md. */

/** The class InitializeJS gives the last complete image of ImagesToLoad (MRIL.mvc.js:260-268). */
const LOADED_IMAGE_CLASS = 'multi-resolution-image-loader-loaded';

interface MultiResolutionImageLoaderProps {
  /** OutSystems instance id of the block (the OSBlock id, for example `<prefix>-$b1`). */
  id: string;
  /** Placeholder Loading: shown until an image of ImagesToLoad loads (the CSS of `.backwards-compatibility`). */
  loading: ReactNode;
  /** Placeholder ImagesToLoad: plain `img` elements with a constant className (R4 sets a class in the DOM). */
  imagesToLoad: ReactNode;
}

/** Widgets.MultiResolutionImageLoader. Markup (MRIL.mvc.js:121-147): `div#<p>-Root.multi-resolution-image-loader
    multi-resolution-image-loader-loading|loaded[data-container]` > `div#<p>-Loading` (placeholder Loading) and
    `div#<p>-ImagesToLoad` (placeholder ImagesToLoad), `<p>` = the id without `$`. InitializeJS (MRIL.mvc.js:251-278),
    one effect after mount: a capture-phase `load` listener on the last child of Root (R1); a load of an image without
    a src is ignored (R2); else Root turns `-loaded` (R3, state; it never goes back, R7), and among the images of
    ImagesToLoad only the last complete one keeps `multi-resolution-image-loader-loaded` (R4, set in the DOM as the
    script does, decision C a). The images already complete run the same at start (R5). The Loading slot is not
    listened to (R6). An image that fails keeps the root `-loading`: HandleImageLoadError swaps its src, and the load of
    the placeholder loads the root (section 3.5). */
export function MultiResolutionImageLoader({ id, loading, imagesToLoad }: MultiResolutionImageLoaderProps) {
  const prefix = id.replace('$', '');
  const [loaded, setLoaded] = useState(false);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = imagesRef.current;
    if (!container) return undefined;
    const onload = (target: EventTarget | null) => {
      if (!(target instanceof Element) || !target.getAttribute('src')) {
        // Ignore load events if the image has no src attribute
        return;
      }
      setLoaded(true);
      let lastLoaded: HTMLImageElement | null = null;
      for (const img of container.querySelectorAll('img')) {
        img.classList.remove(LOADED_IMAGE_CLASS);
        if (img.complete) lastLoaded = img;
      }
      // TST reads lastLoaded without a check (:268). A browser raises `load` only on a complete image, so it is never
      // null there. A test can raise `load` on a jsdom image that is not complete (decision O8).
      lastLoaded?.classList.add(LOADED_IMAGE_CLASS);
    };
    const onLoadEvent = (evt: Event) => {
      onload(evt.target);
    };
    container.addEventListener('load', onLoadEvent, { capture: true });
    for (const img of container.querySelectorAll('img')) {
      if (img.complete) onload(img);
    }
    return () => {
      container.removeEventListener('load', onLoadEvent, { capture: true });
    };
  }, []);

  return (
    <OSBlock name="Widgets.MultiResolutionImageLoader" id={id}>
      <div
        className={`multi-resolution-image-loader multi-resolution-image-loader-${loaded ? 'loaded' : 'loading'}`}
        data-container=""
        id={`${prefix}-Root`}
      >
        <div id={`${prefix}-Loading`}>{loading}</div>
        <div ref={imagesRef} id={`${prefix}-ImagesToLoad`}>
          {imagesToLoad}
        </div>
      </div>
    </OSBlock>
  );
}
