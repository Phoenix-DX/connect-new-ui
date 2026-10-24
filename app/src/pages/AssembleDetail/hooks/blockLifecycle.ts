import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import type { IsAlive } from '@/platform/navigation';

/* The lifecycle of the blocks whose variables the view cache does not keep (the contacts and the halls of the meeting):
   the old port kept them in React state, so a back navigation shows them at their defaults. useFlowState saves and
   restores the whole state record, so these blocks keep their state in React and use the two hooks below
   (page-template.md, the Notifications case). */

/** True from the mount until the unmount; StrictMode (dev) turns it on again at its second mount. Decision W23: it
    guards the state writes of a flow that already started, nothing else. */
export function useIsAlive(): IsAlive {
  const alive = useRef(false);
  useLayoutEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);
  return useCallback(() => alive.current, []);
}

/** OnReady: runs once per block instance after the first render, also when StrictMode (dev) runs the mount effect
    again. A rejection goes to the flow handler. */
export function useReadyOnce(onReady: () => Promise<void>): void {
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    onReady().catch(raiseToFlowHandler);
    // OnReady runs once, with the flow of the first render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
