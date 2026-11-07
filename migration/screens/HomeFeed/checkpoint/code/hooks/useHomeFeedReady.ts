import { useEffect, useRef, useState } from 'react';
import { fetchCommunityStatistics, type CommunityStatistics } from '@/api/member';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowScope, useViewState, useWasRestoredFromCache } from '@/platform/navigation';

/** The screen data action GetCommunityStatistics (only on demand): IsDataFetched and Out_CommunityStatistics. */
export interface HomeFeedCommunityStatistics {
  isDataFetched: boolean;
  out: CommunityStatistics;
}

const NOT_FETCHED: HomeFeedCommunityStatistics = {
  isDataFetched: false,
  out: { In_Change: 0, In_CountriesCount: 0, In_HouseholdCount: 0, In_LocalitiesCount: 0, In_MembersCount: 0 },
};

export interface HomeFeedReady {
  /** IsScreenInitialized: False in OnInitialize, True a microtask after the mount (the first paint has False). */
  isScreenInitialized: boolean;
  /** GetCommunityStatistics, read by Directory_CommunityNumbers $b7 (In_IsLoading = not IsDataFetched). */
  communityStatistics: HomeFeedCommunityStatistics;
}

/** ScreenEvent_OnReady of HomeFeed (fresh TST capture of 2026-11-07, HomeFeed.mvc.js:770-810): IsScreenInitialized =
    True; then, unless the view cache restored the screen, the refresh of the screen data action GetCommunityStatistics
    (R1, `flow.fetch`). The data action is a screen variable, so the view cache keeps it (P-BACK). A failure goes to the
    flow handler and leaves IsDataFetched False.
    @origin UBTConnect.Home.HomeFeed */
export function useHomeFeedReady(): HomeFeedReady {
  const flow = useFlowScope();
  const restored = useWasRestoredFromCache();
  const [isScreenInitialized, setIsScreenInitialized] = useState(false);
  const [communityStatistics, setCommunityStatistics] = useViewState('GetCommunityStatistics', NOT_FETCHED);
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
        flow
          .fetch(fetchCommunityStatistics('HomeFeed'))
          .then((out) => {
            setCommunityStatistics({ isDataFetched: true, out });
          })
          .catch((e: unknown) => {
            raiseToFlowHandler(e, flow);
          });
      }
    }
    return () => {
      alive = false;
    };
  }, [flow, restored, setCommunityStatistics]);
  return { isScreenInitialized, communityStatistics };
}
