import type { Decorator } from '@storybook/react-vite';

/** Stories only: the legacy and Orbit screens render inside BaseLayout_UpdatedOSUI (`layout layout-native`), which
    OutSystems UI checks (IsLayoutNative, IsWebApp). The stand-in layout element follows the story so the block stays
    the first element of the story's container (the capture tests compare that element). */
export const insideNativeLayout: Decorator = (Story) => (
  <>
    <Story />
    <div className="layout layout-native" hidden />
  </>
);
