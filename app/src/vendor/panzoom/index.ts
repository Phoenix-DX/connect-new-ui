/* Typed wrapper of the vendored TST PanZoom script (ADR-7, SOURCE.md). The file is a UMD bundle (its own wrapper,
   line 1): loaded as a browser ES module it finds neither `module` nor `define` and sets `window.panzoom`, as the
   classic <script> of the original app does; under Vitest (CommonJS `module` in scope) it sets module.exports. */
import * as bundle from './PanZoom.anvaka_panzoom_js.js';

/** The options the original app passes (PanZoom.PanZoom.PanZoom.mvc.js OnReady JavaScript1JS :367-386) plus the
    upstream ones the script reads (lines 60-110). */
export interface PanZoomOptions {
  maxZoom?: number;
  minZoom?: number;
  bounds?: boolean;
  boundsPadding?: number;
  /** Return false so the library does not call preventDefault on the touch event. */
  onTouch?: (e: TouchEvent) => boolean;
  /** Custom (not upstream): called when a zoom-out is asked while already at minZoom (line 352). */
  triggerMinZoomReached?: () => void;
  /** Custom (not upstream): called after every zoom step with a positive ratio (line 383). */
  triggerZoomIn?: () => void;
  /** Custom (not upstream): touchstart is listened to only after the first double click zoom (lines 446, 657). */
  doubleClickEnablesZoom?: boolean;
  disableKeyboardInteraction?: boolean;
}

export interface PanZoomTransform {
  x: number;
  y: number;
  scale: number;
}

/** The api object the script returns (lines 112-129). */
export interface PanZoomInstance {
  dispose: () => void;
  moveBy: (dx: number, dy: number, smooth?: boolean) => void;
  moveTo: (x: number, y: number) => void;
  zoomTo: (clientX: number, clientY: number, scaleMultiplier: number) => void;
  zoomAbs: (clientX: number, clientY: number, zoomLevel: number) => void;
  smoothZoom: (clientX: number, clientY: number, scaleMultiplier: number) => void;
  pause: () => void;
  resume: () => void;
  isPaused: () => boolean;
  getTransform: () => PanZoomTransform;
  getMinZoom: () => number;
  getMaxZoom: () => number;
}

type CreatePanZoom = (domElement: HTMLElement, options?: PanZoomOptions) => PanZoomInstance;

/** `panzoom(domElement, options)`: attaches pan and zoom to `domElement` (its parent element is the owner that gets
    the listeners and `tabindex="0"`, makeDomController lines 920-937). */
export function panzoom(domElement: HTMLElement, options?: PanZoomOptions): PanZoomInstance {
  // Reflect.get: the bundler cannot resolve the export statically (the browser module has none).
  const fromModule: unknown = Reflect.get(bundle, 'default');
  const create =
    typeof fromModule === 'function'
      ? (fromModule as CreatePanZoom)
      : (window as unknown as { panzoom?: CreatePanZoom }).panzoom;
  if (create === undefined) throw new Error('The vendored panzoom script did not load');
  return create(domElement, options);
}
