/** @origin OutSystemsUI_2_23.Utilities.TouchEvents */
// @os-block OutSystemsUI_2_23.Utilities.TouchEvents
import { useEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { createTouchTrack, type TouchTrack } from './touchTrack';

export interface TouchEventsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** WidgetId: DOM id of the element whose touches are tracked (read once, OnReady). */
  widgetId?: string;
  /** PreventDefaults (default true): stored by TouchTrack, never read (README). */
  preventDefaults?: boolean;
  /** Event Start(X, Y). */
  onStart?: (x: number, y: number) => void;
  /** Event Move(X, Y, OffsetX, OffsetY, Evt). */
  onMove?: (x: number, y: number, offsetX: number, offsetY: number, evt: unknown) => void;
  /** Event End(X, Y, OffsetX, OffsetY, TimeTaken). */
  onEnd?: (x: number, y: number, offsetX: number, offsetY: number, timeTaken: number) => void;
}

/** JSNodeParamConverter.from(value, Integer) (OutSystems.js runtime): `e - e % 1`, the integer part. The OnStart /
    OnMove / OnEnd inputs are Integer; the events get them back as Decimal. */
const toInteger = (n: number) => n - (n % 1);

/** OutSystems UI TouchEvents (p:OutSystemsUI_2_23.Utilities.TouchEvents.mvc.js): the view renders nothing (`$if(false)`,
    captured empty root). OnReady BindEventsJS (:718-732) runs `new TouchTrack().init(el, OnStart, OnMove, OnEnd)` on
    the element WidgetId when it exists (IsBound); OnStart / OnMove / OnEnd (:225-470) raise Start / Move / End with
    integer coordinates. OnParametersChanged SetPreventDefaultJS (:713-717), OnDestroy DestroyJS (:708-712). */
export function TouchEvents({ id, widgetId = '', preventDefaults = true, onStart, onMove, onEnd }: TouchEventsProps) {
  const latest = useRef({ onStart, onMove, onEnd });
  useEffect(() => {
    latest.current = { onStart, onMove, onEnd };
  });
  const gesture = useRef<{ obj: TouchTrack | null; isBound: boolean }>({ obj: null, isBound: false });
  const initialWidgetId = useRef(widgetId);

  /* OnInitialize (IsBound = False) + OnReady BindEvents; OnDestroy. */
  useEffect(() => {
    const state = gesture.current;
    const touchTrack = createTouchTrack();
    state.isBound = false;
    const el = document.getElementById(initialWidgetId.current);
    if (el) {
      touchTrack.init(
        el,
        (x, y) => latest.current.onStart?.(toInteger(x), toInteger(y)),
        (evt, x, y, offsetX, offsetY) =>
          latest.current.onMove?.(toInteger(x), toInteger(y), toInteger(offsetX), toInteger(offsetY), evt),
        (x, y, offsetX, offsetY, timeTaken) =>
          latest.current.onEnd?.(
            toInteger(x),
            toInteger(y),
            toInteger(offsetX),
            toInteger(offsetY),
            toInteger(timeTaken),
          ),
      );
      state.isBound = true;
    }
    state.obj = touchTrack;
    return () => {
      /* DestroyJS calls destroy() even when nothing was bound (a TypeError in OutSystems); only bound ones here. */
      if (state.isBound) state.obj?.destroy();
      state.obj = null;
      state.isBound = false;
    };
  }, []);

  /* OnParametersChanged: SetPreventDefault(PreventDefaults). */
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    gesture.current.obj?.setPreventDefault(preventDefaults);
  }, [preventDefaults]);

  return <OSBlock name="Utilities.TouchEvents" id={id} />;
}
