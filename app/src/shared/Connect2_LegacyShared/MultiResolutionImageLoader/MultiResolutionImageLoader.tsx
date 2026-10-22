// @os-block Connect2_LegacyShared.Widgets.MultiResolutionImageLoader
import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface MultiResolutionImageLoaderProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Placeholder Loading (shown until an image loads, by the original CSS). */
  loading?: ReactNode;
  /** Placeholder ImagesToLoad (images from low to high resolution). */
  imagesToLoad?: ReactNode;
}

const LOADING = 'multi-resolution-image-loader-loading';
const LOADED = 'multi-resolution-image-loader-loaded';

/** Shows the best loaded image of several resolutions (p:migration/blocks/sources/Connect2_LegacyShared.Widgets.
    MultiResolutionImageLoader.mvc.js view :120-140, OnReady InitializeJS :271-305). Root `multi-resolution-image-loader`
    with the Loading and ImagesToLoad placeholders. OnReady listens (capture phase) to `load` in ImagesToLoad and checks
    the images already complete: a load of an image with a `src` turns the root from `-loading` to `-loaded` and moves
    the `multi-resolution-image-loader-loaded` class to the last complete image (the original CSS shows that one and
    hides the Loading placeholder). Never captured. */
export function MultiResolutionImageLoader({ id, loading, imagesToLoad }: MultiResolutionImageLoaderProps) {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onload = (target: EventTarget | null) => {
      if (!(target instanceof Element) || !target.getAttribute('src')) return;
      setLoaded(true);
      let lastLoaded: HTMLImageElement | null = null;
      for (const img of container.querySelectorAll('img')) {
        img.classList.remove(LOADED);
        if (img.complete) lastLoaded = img;
      }
      /* The original reads lastLoaded.classList without a check (a TypeError when none is complete). */
      lastLoaded?.classList.add(LOADED);
    };
    const listener = (evt: Event) => {
      onload(evt.target);
    };
    container.addEventListener('load', listener, { capture: true });
    for (const img of container.querySelectorAll('img')) if (img.complete) onload(img);
    return () => {
      container.removeEventListener('load', listener, { capture: true });
    };
  }, []);
  return (
    <OSBlock name="Widgets.MultiResolutionImageLoader" id={id}>
      <div className={`multi-resolution-image-loader ${loaded ? LOADED : LOADING}`} data-container="">
        <div>{loading}</div>
        <div ref={containerRef}>{imagesToLoad}</div>
      </div>
    </OSBlock>
  );
}
