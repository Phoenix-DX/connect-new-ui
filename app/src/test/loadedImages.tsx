import type { Decorator } from '@storybook/react-vite';
import { useLayoutEffect, type ReactNode } from 'react';

/** Raises `load` on every rendered OutSystems image (`img[data-image]`) once, after the story mounted: captures taken
    after the images loaded (LazyImage / UBT_LazyImage leave their skeleton and fallback on load). */
function LoadImages({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    for (const img of document.querySelectorAll('img[data-image]')) img.dispatchEvent(new Event('load'));
  }, []);
  return children;
}

/** Story decorator for a capture taken after its images loaded (story JSDoc says so). */
export const withLoadedImages: Decorator = (Story) => (
  <LoadImages>
    <Story />
  </LoadImages>
);
