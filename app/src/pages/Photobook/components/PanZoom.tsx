// @os-block PanZoom.PanZoom
import { useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import { panzoom } from '@/vendor/panzoom';

export interface PanZoomProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** Input ExtendedClass (default ""): the Zoomable container's Style. */
  extendedClass?: string;
  /** Input DoubleClickEnablesZoom (default False, PanZoom.PanZoom.PanZoom.mvc.js model :19-21). */
  doubleClickEnablesZoom?: boolean;
  /** Event ZoomIn (triggerZoomIn callback of the script). */
  onZoomIn?: () => void;
  /** Event MinZoomReached (triggerMinZoomReached callback of the script). */
  onMinZoomReached?: () => void;
  /** Placeholder Image. */
  image?: ReactNode;
}

/** PanZoom.PanZoom (PanZoom.PanZoom.PanZoom.mvc.js view :125-170): the `Zoomable` container (Style = ExtendedClass)
    around the Image placeholder. OnReady (:250-262, JavaScript1JS :367-386) runs the vendored TST script (ADR-7,
    `vendor/panzoom`) on Zoomable: panzoom(Zoomable, { maxZoom 3, minZoom 1, bounds, boundsPadding 1, onTouch → false
    (no preventDefault), triggerMinZoomReached → MinZoomReached, triggerZoomIn → ZoomIn, doubleClickEnablesZoom }).
    The script owns the block root's `tabindex="0"` (makeDomController, owner = Zoomable's parent) and Zoomable's
    transform (`matrix(1, 0, 0, 1, 0, 0)` at rest, dom/default.html:113-115). The block has no OnDestroy; the
    instance is disposed on unmount so a React remount does not attach the listeners twice. */
export function PanZoom({
  id,
  extendedClass = '',
  doubleClickEnablesZoom = false,
  onZoomIn,
  onMinZoomReached,
  image,
}: PanZoomProps) {
  const prefix = id.replace('$', '');
  const zoomableRef = useRef<HTMLDivElement>(null);
  const events = useRef({ onZoomIn, onMinZoomReached });
  useLayoutEffect(() => {
    events.current = { onZoomIn, onMinZoomReached };
  });

  /* OnReady → JavaScript1 (once per instance, with the DoubleClickEnablesZoom of that moment). */
  const initialDoubleClick = useRef(doubleClickEnablesZoom);
  useEffect(() => {
    const area = zoomableRef.current;
    if (area === null) return;
    const instance = panzoom(area, {
      maxZoom: 3,
      minZoom: 1,
      bounds: true,
      boundsPadding: 1,
      onTouch: () => false,
      triggerMinZoomReached: () => {
        events.current.onMinZoomReached?.();
      },
      triggerZoomIn: () => {
        events.current.onZoomIn?.();
      },
      doubleClickEnablesZoom: initialDoubleClick.current,
    });
    return () => {
      instance.dispose();
    };
  }, []);

  return (
    <div className="OSBlockWidget" data-block="PanZoom.PanZoom" id={id}>
      <div className={extendedClass} data-container="" id={`${prefix}-Zoomable`} ref={zoomableRef}>
        <div id={`${prefix}-Image`}>{image}</div>
      </div>
    </div>
  );
}
