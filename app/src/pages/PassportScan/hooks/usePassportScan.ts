import { fetchPassportScanConfigs, type PassportScanConfigs } from '@/api/passport';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { useFlowState, type BackNavigationEvent } from '@/platform/navigation';
import { loadedOrbitPassportEmbed, requireOrbitPassportEmbed, type OrbitPassportEmbed } from '@/vendor/orbitpassport';
import { takePassportPhoto } from '@/pages/PassportScan/camera';

/** The inputs of ScreenBlock_PassportScan (LongInteger as text). */
interface ScreenBlockPassportScanInputs {
  TargetMemberId: string;
  LoginMemberId: string;
}

/** The events of ScreenBlock_PassportScan. */
interface ScreenBlockPassportScanEvents {
  /** Event Close (trigger of Handler_OnClose). */
  onClose?: () => void;
}

/** The variables of the block: the answer of GetConfigs. */
interface PassportScanState {
  getConfigs: PassportScanConfigs | null;
}

const INITIAL_STATE: PassportScanState = { getConfigs: null };

const passportScanReducer = (state: PassportScanState, getConfigs: PassportScanConfigs): PassportScanState => ({
  ...state,
  getConfigs,
});

interface PassportScanFlows {
  /** Handler_BackNavigation: the BackNavigation event of BackNavigationHandler. */
  onBackNavigation: (event: BackNavigationEvent) => void;
}

/** "Passport successfully saved." of Handler_OnSaved (ScreenBlock_PassportScan.mvc.js:613). */
export const PASSPORT_SAVED_MESSAGE = 'Passport successfully saved.';

/** @origin OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan
    The flows of the block (ScreenBlock_PassportScan.mvc.js controller :269-697):
    - GetConfigs is fetched at start (R1), then OnAfterFetch_GetFeedConfig runs InitializePassportScan: a configured
      embed is destroyed, the embed is configured with the answer and the event handlers, then opened for the target
      member (JS :699-760). The loader script is the block's JS dependency (:148): it loads in parallel with the fetch.
    - The embed events: OnReady (a console log only, not ported), OnSaved (success message), OnClose (destroy, then
      the event Close), OnAuthExpired (GetConfigs again, so the embed is configured again), OnError (error message),
      OnRequestCamera (the module action, `takePassportPhoto`).
    - Handler_BackNavigation: a configured embed gets the back navigation (`back()`), the shell's is prevented.
    - No OnDestroy, as TST: a configured embed stays configured until the next InitializePassportScan or Close. */
export function usePassportScan(
  inputs: ScreenBlockPassportScanInputs,
  containerId: string,
  events: ScreenBlockPassportScanEvents,
): PassportScanFlows {
  const { dispatch, latest, parameters, flow } = useFlowState({
    viewName: `PassportScan.ScreenBlock_PassportScan#${inputs.TargetMemberId}`,
    reducer: passportScanReducer,
    initial: INITIAL_STATE,
    parameters: inputs,
    events,
    // the embed lives in the DOM only: a restored view loads and configures it again
    restore: () => INITIAL_STATE,
    onReady: () => getConfigsRefresh(),
  });

  /** DataActionGetConfigs (fetch at start; Refresh Query of Handler_OnAuthExpired), then OnAfterFetch. */
  async function getConfigsRefresh(): Promise<void> {
    requireOrbitPassportEmbed().catch(() => undefined);
    dispatch(await flow.fetch(fetchPassportScanConfigs(parameters.current)));
    await onAfterFetchGetFeedConfig();
  }

  /** OnAfterFetch_GetFeedConfig → InitializePassportScan (R3: an own action after the await of the fetch). */
  const onAfterFetchGetFeedConfig = flow.own(async (): Promise<void> => {
    const embed = await requireOrbitPassportEmbed();
    const configs = latest.current.getConfigs;
    if (!flow.alive() || configs === null) return;
    initializePassportScan(embed, configs);
  });

  function initializePassportScan(embed: OrbitPassportEmbed, configs: PassportScanConfigs): void {
    if (embed.isConfigured()) embed.destroy();
    if (!embed.isConfigured()) {
      // InitializePassportScanJS does not use the promise of configure (:719)
      embed
        .configure({
          loginMemberId: Number(parameters.current.LoginMemberId),
          baseUrl: configs.baseURL,
          containerId,
          tokenType: configs.tokenType,
          idToken: configs.token,
          b2cTenants: configs.b2CTenant,
          b2cClientIds: configs.b2CClientId,
          b2cPolicy: configs.b2CPolicy,
          onReady: () => undefined,
          onSaved: (id) => {
            flow.run(() => {
              handlerOnSaved(id);
              return Promise.resolve();
            });
          },
          onClose: () => {
            flow.run(() => handlerOnClose());
          },
          onAuthExpired: () => {
            flow.run(() => getConfigsRefresh());
          },
          onError: (message) => {
            flow.run(() => {
              handlerOnError(message);
              return Promise.resolve();
            });
          },
          // the module's proxy answers nothing once the block is gone (getClientActionProxies, isActive)
          onRequestCamera: () => (flow.alive() ? takePassportPhoto() : Promise.resolve(undefined)),
        })
        .catch(() => undefined);
    }
    if (embed.isConfigured()) embed.open({ memberId: Number(parameters.current.TargetMemberId) || null });
  }

  /** Handler_OnSaved(id) (:594-622). */
  const handlerOnSaved = flow.own((id: string): void => {
    void id;
    showFeedbackMessage(PASSPORT_SAVED_MESSAGE, PLATFORM_MESSAGE_TYPE.success);
  });

  /** Handler_OnError(ErrorMessage) (:468-496). */
  const handlerOnError = flow.own((message: string): void => {
    showFeedbackMessage(message, PLATFORM_MESSAGE_TYPE.error);
  });

  /** Handler_OnClose (:433-467): DestroyEmbedInstance, then the event Close. */
  const handlerOnClose = flow.own(async (): Promise<void> => {
    const embed = loadedOrbitPassportEmbed();
    if (embed?.isConfigured()) embed.destroy();
    await Promise.resolve(flow.events.onClose?.());
  });

  return {
    onBackNavigation: (event) => {
      // CheckIsConfigured, then PreventNavigation and SetupInternalBackNavigation (:506-551)
      const embed = loadedOrbitPassportEmbed();
      if (embed?.isConfigured()) {
        event.preventDefault();
        embed.back();
      }
    },
  };
}
