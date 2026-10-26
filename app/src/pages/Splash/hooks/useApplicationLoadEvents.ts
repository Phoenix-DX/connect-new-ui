import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import { appReady as isAppReady, subscribe } from '@/platform/session/session';

export interface ApplicationLoadEventsOptions {
  /** MinimumDisplayTimeMs: the shortest time before OnLoadComplete. */
  minimumDisplayTimeMs: number;
  /** Event OnUpgradeProgress(Completed, Total). */
  onUpgradeProgress?: (completed: number, total: number) => void;
  /** Event OnLoadComplete(RedirectURL). */
  onLoadComplete?: (redirectUrl: string) => void;
}

/** The events of the application load. There is no runtime upgrade on the web, so the progress is faked in 10 steps
    of ceil(MinimumDisplayTimeMs / 10) ms. When the application has loaded, OnLoadComplete fires with
    window.location.href after the rest of the minimum display time (0 ms when it has already passed). The timers stop
    when the screen goes (OnDestroy). "Loaded" is the end of the shell's app start (Q2, open: option B until answered).
    @origin OutSystemsUI_2_23.Private.ApplicationLoadEvents */
export function useApplicationLoadEvents({
  minimumDisplayTimeMs,
  onUpgradeProgress,
  onLoadComplete,
}: ApplicationLoadEventsOptions): void {
  const appReady = useSyncExternalStore(subscribe, isAppReady);
  const [start] = useState(() => Date.now());
  const events = useRef({ onUpgradeProgress, onLoadComplete });
  useLayoutEffect(() => {
    events.current = { onUpgradeProgress, onLoadComplete };
  });

  useEffect(() => {
    let loaded = 0;
    const timerId = setInterval(
      () => {
        loaded += 1;
        events.current.onUpgradeProgress?.(loaded, 10);
        if (loaded === 10) clearInterval(timerId);
      },
      Math.ceil(minimumDisplayTimeMs / 10),
    );
    return () => {
      clearInterval(timerId);
    };
  }, [minimumDisplayTimeMs]);

  useEffect(() => {
    if (!appReady) return;
    const timeout = Math.max(minimumDisplayTimeMs - (Date.now() - start), 0);
    const timerId = setTimeout(() => {
      events.current.onLoadComplete?.(window.location.href);
    }, timeout);
    return () => {
      clearTimeout(timerId);
    };
  }, [appReady, minimumDisplayTimeMs, start]);
}
