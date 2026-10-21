import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { useShellState } from '../../../shell/session';

export interface ApplicationLoadEventsProps {
  /** OutSystems instance id of the block. */
  id: string;
  minimumDisplayTimeMs: number;
  /** Event OnUpgradeProgress(Completed, Total). */
  onUpgradeProgress?: (completed: number, total: number) => void;
  /** Event OnLoadComplete(RedirectURL). */
  onLoadComplete?: (redirectUrl: string) => void;
}

/** OutSystemsUI Private.ApplicationLoadEvents (p:OutSystemsUI_2_23.Private.ApplicationLoadEvents.mvc.js): an empty
    wrapper. OnInitialize (JSRegisterListeners, :541-578): there is no runtime upgrade on the web, so the progress is
    faked in 10 steps of ceil(MinDisplayTimeMs / 10) ms; when the application has loaded, OnLoadComplete fires after
    max(MinDisplayTimeMs - elapsed, 0) ms with window.location.href (SetTimeoutForLoadComplete, :531-540). OnDestroy
    clears both timers (:521-529). "Loaded" = the shell's app start is done (Q2, open: option B until answered). */
export function ApplicationLoadEvents({
  id,
  minimumDisplayTimeMs,
  onUpgradeProgress,
  onLoadComplete,
}: ApplicationLoadEventsProps) {
  const { appReady } = useShellState();
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

  return <OSBlock name="Private.ApplicationLoadEvents" id={id} />;
}
