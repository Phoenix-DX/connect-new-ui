import { useEffect, useLayoutEffect, useRef } from 'react';
import {
  clearScrollTimeout,
  removeScrollEvents,
  setMainFixedScroll,
  setScrollShadow,
} from '@/lib/ubtConnectLibrary/actions';

/** The scroll events of the main layouts with a fixed title (Layout_MainPages_FixedTitle controller :626-694,
    Layout_MainPages_Upgrade controller :672-806): OnReady SetScrollEvents attaches SetMainFixedScroll (its callback
    raises the latest OnHeaderScrolled) and SetScrollShadow; OnDestroy removes both listeners and the shadow timer. */
export function useMainFixedScrollEvents(onOnHeaderScrolled?: (isHeaderScrolled: boolean) => void): void {
  const onHeaderScrolled = useRef(onOnHeaderScrolled);
  useLayoutEffect(() => {
    onHeaderScrolled.current = onOnHeaderScrolled;
  });
  useEffect(() => {
    const main = setMainFixedScroll((isHeaderScrolled) => {
      onHeaderScrolled.current?.(isHeaderScrolled);
    });
    const shadow = setScrollShadow();
    return () => {
      removeScrollEvents(main.Out_Element, main.Out_ScrollEvent, shadow.Out_ScrollEvent);
      clearScrollTimeout(shadow.Out_Timeout);
    };
  }, []);
}
