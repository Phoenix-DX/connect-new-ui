import { useEffect, useRef, useState } from 'react';
import type { ConnectShareInputs } from '@/pages/ConnectShare/inputs';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import {
  replaceOnUpcomingNavigation,
  TransitionAnimation,
  useFlowState,
  useNavigateBack,
  useOsNavigate,
} from '@/platform/navigation';
import { onInitializeSharingScreen } from './connectShareActions';
import {
  connectShareReducer,
  INITIAL_CONNECT_SHARE_STATE,
  shareRedirectTarget,
  type ConnectShareState,
} from './connectShareState';

/** The delay of DelayedShowFreeSubscriptionAlertJS: "delayed to prevent showing the modal before the pin". */
const FREE_SUBSCRIPTION_ALERT_DELAY_MS = 1000;

/** What the page reads. */
export interface ConnectShareView {
  /** OnInitialize has ended. The runtime creates the view of the screen only then, so the page renders nothing before. */
  isInitialized: boolean;
  /** The screen variables. */
  state: ConnectShareState;
}

/** The flows of the ConnectShare screen, the entry of the external share links. The page calls this hook.
    - OnInitialize waits for a server call, and the runtime renders the screen only after OnInitialize ends. So the
      `onReady` flow of useFlowState runs ScreenEvent_OnInitialize, and `isInitialized` turns true at its end.
    - ScreenEvent_OnInitialize: its first branch (`… && false`, a navigation to the DEV CountryList) never runs. A view
      that the view cache restored keeps its variables when StatusMessage <> "" or ShowFreeSubscriptionAlert, else it
      goes back (transition None). Otherwise OnInitializeSharingScreen(ShareId): StatusMessage = its StatusMessage;
      IsRedirect → IsRedirect = True and the redirect type and id are kept for OnReady; else
      DelayedShowFreeSubscriptionAlertJS: after 1 s, Action_SetShowFreeSubscriptionAlert(its ShowFreeSubscriptionAlert).
      An exception goes to the flow handler.
    - ScreenEvent_OnReady, once after the first render of the view: IsRedirect → Action_Redirect.
    - Flow scope (item 8): OnInitializeSharingScreen is a module client action (no disposal check): after an unmount
      its flow runs to its end (the audit call included) and writes no state. The 1 s timer is not started after the
      unmount and stops with the screen. On TST the timer starts, but Action_SetShowFreeSubscriptionAlert stops at its
      ensureControllerAlive (R3, ConnectShare.js:366): the same outcome, no pop-up. OnReady does not run after the
      unmount (Action_Redirect has the same check, :447). useFlowState gives the once-guard of OnInitialize, the
      no-op state write after the unmount and the flow scope; the popup runs with `flow.run` (S2b Q1 (a), user
      2026-10-28).
    @origin UBTConnect.Legacy_Share.ConnectShare */
export function useConnectShare(inputs: ConnectShareInputs): ConnectShareView {
  const navigate = useOsNavigate();
  const navigateBack = useNavigateBack();
  const [isInitialized, setInitialized] = useState(false);
  const alertTimer = useRef<number | undefined>(undefined);
  /* useFlowState runs OnInitialize once per screen, also in StrictMode, and sends its exception to the flow handler
     with the flow scope. `dispatch` does nothing after the unmount. */
  const { state, dispatch, latest, parameters, flow } = useFlowState({
    viewName: 'Legacy_Share.ConnectShare',
    reducer: connectShareReducer,
    initial: INITIAL_CONNECT_SHARE_STATE,
    parameters: inputs,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: async (scope, restored) => {
      try {
        await onInitialize(restored);
      } finally {
        // The view of the screen exists once OnInitialize ends, also after an exception.
        if (scope.alive()) setInitialized(true);
      }
    },
  });

  /** Action_SetShowFreeSubscriptionAlert(In_ShowFreeSubscriptionAlert): when True, ShowFreeSubscriptionAlert = True and
      App_Subscription_ShowUpgradePopUp (it opens "SubscriptionDenied"). A failure of the popup goes to the flow
      handler with the flow scope (`flow.run`). */
  const setShowFreeSubscriptionAlert = (show: boolean) => {
    if (!show) return;
    dispatch({ type: 'freeSubscriptionAlertShown' });
    flow.run(showUpgradePopUp);
  };

  /** ScreenEvent_OnInitialize (see above). */
  const onInitialize = async (restored: boolean) => {
    if (restored) {
      const { statusMessage, showFreeSubscriptionAlert } = latest.current;
      if (statusMessage === '' && !showFreeSubscriptionAlert) navigateBack(TransitionAnimation.None);
      return;
    }
    const out = await onInitializeSharingScreen(parameters.current.ShareId); // a module client action (R2)
    dispatch({ type: 'sharingScreenInitialized', result: out });
    if (out.isRedirect || !flow.alive()) return;
    alertTimer.current = window.setTimeout(() => {
      setShowFreeSubscriptionAlert(out.showFreeSubscriptionAlert);
    }, FREE_SUBSCRIPTION_ALERT_DELAY_MS);
  };

  // The timer of DelayedShowFreeSubscriptionAlertJS stops with the screen.
  useEffect(() => {
    const timer = alertTimer;
    return () => {
      window.clearTimeout(timer.current);
    };
  }, []);

  /* ScreenEvent_OnReady, once after the first render of the view: IsRedirect → Action_Redirect: ReplaceOnUpcomingNavigation,
     then the screen of the type. Any other type: IsRedirect = False, so the share detail shows. */
  const readyDone = useRef(false);
  useEffect(() => {
    if (!isInitialized || readyDone.current) return;
    readyDone.current = true;
    const { isRedirect, redirect } = latest.current;
    if (!isRedirect) return;
    replaceOnUpcomingNavigation();
    const target = shareRedirectTarget(redirect.shareObjectTypeId, redirect.attributesId);
    if (target === null) dispatch({ type: 'redirectCancelled' });
    // the four destinations open with TransitionAnimation.None (ConnectShare.mvc.js:461-485)
    else navigate(target.path, target.params, { transition: TransitionAnimation.None });
  }, [isInitialized, latest, navigate, dispatch]);

  return { isInitialized, state };
}
