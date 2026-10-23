import { useRef } from 'react';
import type { IsAlive } from '@/platform/navigation';

/** What {@link useReadyOnce} gives a flow hook. */
export interface ReadyOnce {
  /** The `onReady` option of useFlowState: it runs `flow` once per screen or block instance. */
  once: (isAlive: IsAlive, flow: () => Promise<void>) => Promise<void>;
  /** The instance is still there: true until the unmount. */
  isAlive: IsAlive;
}

/** OnReady once per screen or block instance. StrictMode (dev) runs the mount effect of useFlowState twice on the same
    instance: the second call only replaces the liveness check, so the flow of the first call writes the state while
    the instance is there, and its side effects run once. Decision W23: `isAlive` guards the state writes only. */
export function useReadyOnce(): ReadyOnce {
  const started = useRef(false);
  const newest = useRef<IsAlive>(() => true);
  return {
    once: (isAlive, flow) => {
      newest.current = isAlive;
      if (started.current) return Promise.resolve();
      started.current = true;
      return flow();
    },
    isAlive: () => newest.current(),
  };
}
