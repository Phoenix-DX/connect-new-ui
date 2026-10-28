import { useEffect, useRef, useState } from 'react';
import type { ConnectShareInputs } from '@/pages/ConnectShare/inputs';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
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
  type ConnectShareAction,
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
      unmount (Action_Redirect has the same check, :447).
    @origin UBTConnect.Legacy_Share.ConnectShare */
export function useConnectShare(inputs: ConnectShareInputs): ConnectShareView {
  const navigate = useOsNavigate();
  const navigateBack = useNavigateBack();
  const [isInitialized, setInitialized] = useState(false);
  /* OnInitialize runs once per screen. StrictMode (dev) runs the mount effect again on the same screen: the second call
     only replaces the liveness check, so the first flow writes the state while the screen is there and calls
     Get_ShareDetails once. */
  const initializeStarted = useRef(false);
  const newestRun = useRef<() => boolean>(() => true);
  const alertTimer = useRef<number | undefined>(undefined);
  const { state, dispatch, latest, parameters } = useFlowState({
    viewName: 'Legacy_Share.ConnectShare',
    reducer: connectShareReducer,
    initial: INITIAL_CONNECT_SHARE_STATE,
    parameters: inputs,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (flow, restored) => {
      newestRun.current = flow.alive;
      if (initializeStarted.current) return Promise.resolve();
      initializeStarted.current = true;
      return onInitialize(restored)
        .catch(raiseToFlowHandler)
        .finally(() => {
          if (newestRun.current()) setInitialized(true);
        });
    },
  });

  /** A state write of a flow, skipped after the unmount (flow scope, item 8). */
  const write = (action: ConnectShareAction) => {
    if (newestRun.current()) dispatch(action);
  };

  /** Action_SetShowFreeSubscriptionAlert(In_ShowFreeSubscriptionAlert): when True, ShowFreeSubscriptionAlert = True and
      App_Subscription_ShowUpgradePopUp (it opens "SubscriptionDenied"). */
  const setShowFreeSubscriptionAlert = (show: boolean) => {
    if (!show) return;
    dispatch({ type: 'freeSubscriptionAlertShown' });
    showUpgradePopUp().catch(raiseToFlowHandler);
  };

  /** ScreenEvent_OnInitialize (see above). */
  const onInitialize = async (restored: boolean) => {
    if (restored) {
      const { statusMessage, showFreeSubscriptionAlert } = latest.current;
      if (statusMessage === '' && !showFreeSubscriptionAlert) navigateBack(TransitionAnimation.None);
      return;
    }
    const out = await onInitializeSharingScreen(parameters.current.ShareId);
    write({ type: 'sharingScreenInitialized', result: out });
    if (out.isRedirect || !newestRun.current()) return;
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
