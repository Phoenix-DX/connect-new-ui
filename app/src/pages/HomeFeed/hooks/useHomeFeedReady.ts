import { useEffect, useRef, useState } from 'react';
import { fetchHomeFeedCommunityStatistics } from '@/api/country';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowScope, useWasRestoredFromCache } from '@/platform/navigation';

/** ScreenEvent_OnReady of HomeFeed (live TST of 2026-10-27, HomeFeed.mvc.js:761-800): IsScreenInitialized = True;
    then, unless the view cache restored the screen, the refresh of the screen data action GetCommunityStatistics (R1,
    `flow.fetch`). No widget reads its answer. A failure goes to the flow handler. Returns IsScreenInitialized: False in
    OnInitialize, True a microtask after the mount (the first paint has False).
    @origin UBTConnect.Home.HomeFeed */
export function useHomeFeedReady(): boolean {
  const flow = useFlowScope();
  const restored = useWasRestoredFromCache();
  const [isScreenInitialized, setIsScreenInitialized] = useState(false);
  // OnReady once per instance: StrictMode (dev) runs the mount effect again on the same instance.
  const readyStarted = useRef(false);
  useEffect(() => {
    let alive = true;
    void Promise.resolve().then(() => {
      if (alive) setIsScreenInitialized(true);
    });
    if (!readyStarted.current) {
      readyStarted.current = true;
      if (!restored) {
        flow.fetch(fetchHomeFeedCommunityStatistics()).catch((e: unknown) => {
          raiseToFlowHandler(e, flow);
        });
      }
    }
    return () => {
      alive = false;
    };
  }, [flow, restored]);
  return isScreenInitialized;
}
