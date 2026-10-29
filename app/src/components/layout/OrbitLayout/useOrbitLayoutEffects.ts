import { useEffect, useLayoutEffect } from 'react';
import { setLayoutTheme } from '@/components/layout/layoutTheme';
import { iOSMetaTags, iOSPreventSwipe } from '@/lib/legacyShared/actions';
import { ThemeClass } from '@/lib/legacyShared/staticEntities';

/** The lifecycle of the Orbit layouts (Layout_Orbit controller :353-408, Layout_OrbitBlank controller :235-300):
    OnInitialize sets the Orbit theme class on the body (before paint); OnReady runs IOSMetaTags and IOSPreventSwipe
    (OutSystems UI DEPRECATED_LayoutReadyMobile is not ported). */
export function useOrbitLayoutEffects(): void {
  useLayoutEffect(() => {
    setLayoutTheme(ThemeClass.Orbit);
  }, []);
  useEffect(() => {
    iOSMetaTags();
    iOSPreventSwipe();
  }, []);
}
