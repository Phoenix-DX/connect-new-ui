import { useCallback, useLayoutEffect, useRef } from 'react';
import type { IsAlive } from '@/platform/navigation';

/* The lifecycle of the blocks of the meeting that keep their variables with useFlowState and have flows (the contact
   list, the contacts and the halls): the liveness check of their flows and their OnReady. */

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

/** OnReady once per block instance, in the `onReady` option of useFlowState:
    `onReady: (_isAlive, restored) => readyOnce(() => onReady(restored))`. StrictMode (dev) runs the mount effect again
    on the same instance: the second call does nothing. useFlowState sends a rejection to the flow handler. The flow
    guards its state writes with {@link useIsAlive}. */
export function useReadyOnce(): (flow: () => Promise<void>) => Promise<void> {
  const started = useRef(false);
  return (flow) => {
    if (started.current) return Promise.resolve();
    started.current = true;
    return flow();
  };
}
