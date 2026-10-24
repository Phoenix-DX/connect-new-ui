import { useRef } from 'react';
import { fetchEventEmailCoordinator, sendEventContactEmail } from '@/api/message';
import { useScreenValidationService, type ValidationService } from '@/components/ui/os/OSValidation';
import { osImage } from '@/legacy/os/os-assets';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { allowUpcomingNavigation, useFlowState, useNavigateBack, type IsAlive } from '@/platform/navigation';
import { appManager_GetCachedUserInfo } from '@/platform/session/cachedUserInfo';
import type { ContactByPhonePopupData } from '@/lib/ubtConnectUtils/structures';
import { preventNavigation, type NavigationEvent } from '@/lib/navigationEvent';
import {
  addAuditEventDetailEvent,
  ApplicationEvents_LDM,
  scheduleFeedbackMessageAfterTransition,
  zOnApplicationEvent_Wrapper,
} from '@/pages/LDM_Email_V2/components/actions';
import type { EventEmailInputs } from '@/pages/LDM_Email_V2/inputs';
import {
  INITIAL_LDM_EVENT_EMAIL_STATE,
  LDM_LOGO,
  MESSAGE_SENT,
  NO_NETWORK,
  NO_PHONE,
  REQUIRED,
  coordinatorPhone,
  emailApplicationEventId,
  emailEventAttachment,
  eventContactRequest,
  hasContent,
  hasTypedMessage,
  ldmEventEmailIds,
  ldmEventEmailReducer,
  restoreLdmEventEmailState,
  type LdmEventEmailAction,
} from './ldmEventEmailState';

/** What the view renders, and the handlers of its widgets and blocks. */
export interface LdmEventEmailFlows {
  /** The block's validation service: the Form and its fields register in it. */
  validation: ValidationService;
  /** The From field: the cached user's e-mail ("" until OnReady assigns UserInfo). */
  senderEmail: string;
  /** The To field: the coordinator's name. */
  coordinatorName: string;
  subject: string;
  message: string;
  /** GetCoordinatorDetails.HasFetchError: the network warning. */
  hasFetchError: boolean;
  /** IsFetching: the list-updating loader. */
  isFetching: boolean;
  /** Out_HasContent: False shows "No Event Organiser information.". */
  hasContent: boolean;
  callPopupData: ContactByPhonePopupData;
  /** OnChange_Message: TextArea_Message changed. */
  onMessageChange: (message: string) => void;
  /** OnSubmit_Email: the Submit button. */
  onSubmitClick: () => void;
  /** OnClick_Call: the "or Call us Directly" button. */
  onCallClick: () => void;
  /** OnHandle_NetworkWarningTryAgain: RefreshGetCoordinatorDetails, then IsFetching False. */
  onTryAgain: () => void;
  /** OnHandle_ContactByPhonePopupEvent_Cancel and _Call: the call popup closes. */
  onCallPopupClose: () => void;
  /** NavigationConfirmationDialogNavigation: a typed message prevents the navigation, so the dialog asks. */
  onNavigation: (navigationEvent: NavigationEvent) => void;
}

/** @origin Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2
    The flows of the block that e-mails the LDM event coordinator. The block instance id (`$b1`) gives the widget ids.
    - OnInitialize: the defaults. The block is not kept in the view cache: a back navigation starts from the defaults
      and runs OnReady again.
    - OnReady: "Has null eventId?" (both inputs "") → Out_HasContent False; else RefreshGetCoordinatorDetails,
      UserInfo = AppManager_GetCachedUserInfo, IsFetching False. A failure goes to the flow handler.
    - RefreshGetCoordinatorDetails: IsFetching True, GetCoordinatorDetails with the block inputs, then the Subject. A
      failed fetch sets HasFetchError and raises.
    - OnSubmit_Email: no network → an Info message; the Message validation; an invalid Form clears a blank Message;
      else EventContact, the audit event, the application event (EmailEvent as JSON), the success message after
      500 ms, Message = "", AllowUpcomingNavigation and the previous screen.
    - OnClick_Call: no phone number → an Info message; else the call popup of the coordinator.
    OnReady runs once per instance (the page mounts a new instance for other EventHostId or In_EventId). Decision W23:
    after the unmount, a started flow skips its state writes; its calls, messages, events, flow-handler errors and the
    navigation still happen. */
export function useLdmEventEmail(blockId: string, inputs: EventEmailInputs): LdmEventEmailFlows {
  const ids = ldmEventEmailIds(blockId);
  const validation = useScreenValidationService();
  const navigateBack = useNavigateBack();
  /* The once-guard of OnReady: StrictMode (dev) runs the mount effect twice on the same instance. The second call only
     replaces the liveness check. */
  const started = useRef(false);
  const alive = useRef<IsAlive>(() => true);
  const { state, dispatch, latest, parameters } = useFlowState({
    viewName: 'LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2',
    reducer: ldmEventEmailReducer,
    initial: INITIAL_LDM_EVENT_EMAIL_STATE,
    restore: restoreLdmEventEmailState,
    parameters: inputs,
    onReady: (isAlive) => {
      alive.current = isAlive;
      if (started.current) return Promise.resolve();
      started.current = true;
      return onReady();
    },
  });

  /** A state write of a flow, skipped after the unmount (W23). */
  const write = (action: LdmEventEmailAction) => {
    if (alive.current()) dispatch(action);
  };

  async function refreshGetCoordinatorDetails(): Promise<void> {
    write({ type: 'fetchStarted' });
    try {
      const coordinator = await fetchEventEmailCoordinator(parameters.current);
      write({ type: 'fetched', coordinator });
    } catch (e) {
      write({ type: 'fetchFailed' });
      throw e;
    }
  }

  async function onReady(): Promise<void> {
    const p = parameters.current;
    // LongIntegerToText of both inputs = "": never true for a Long Integer input.
    if (p.In_EventId === '' && p.In_EventHostId === '') {
      write({ type: 'noContent' });
      return;
    }
    await refreshGetCoordinatorDetails();
    write({ type: 'userInfoAssigned', userInfo: appManager_GetCachedUserInfo() });
    write({ type: 'fetchEnded' });
  }

  /** OnChange_Message: TextArea_Message is valid when Trim(Message) <> "", else "Required Field!". */
  const validateMessage = () => {
    if (hasTypedMessage(latest.current)) validation.setWidgetValidity(ids.message, true, '');
    else validation.setWidgetValidity(ids.message, false, REQUIRED);
  };

  async function onSubmitEmail(): Promise<void> {
    // GetNetworkStatus (OutSystemsUI): navigator.onLine, as LDM_EventDetail_V2.
    if (!navigator.onLine) {
      showFeedbackMessage(NO_NETWORK, PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    validateMessage();
    if (!validation.isValid(ids.form)) {
      if (!hasTypedMessage(latest.current)) write({ type: 'messageCleared' });
      return;
    }
    const p = parameters.current;
    const request = eventContactRequest(latest.current);
    const attachment = emailEventAttachment(latest.current);
    await sendEventContactEmail(request);
    addAuditEventDetailEvent(ApplicationEvents_LDM.MyTimelineCoordinatorEmailed, p.EventDate, p.EventLocality);
    zOnApplicationEvent_Wrapper(emailApplicationEventId(p), attachment);
    scheduleFeedbackMessageAfterTransition(MESSAGE_SENT);
    write({ type: 'messageCleared' });
    allowUpcomingNavigation();
    navigateBack();
  }

  return {
    validation,
    senderEmail: state.userInfo?.Email ?? '',
    coordinatorName: state.coordinator?.coordinatorDetails.CoordinatorName ?? '',
    subject: state.subject,
    message: state.message,
    hasFetchError: state.hasFetchError,
    isFetching: state.isFetching,
    hasContent: hasContent(state),
    callPopupData: state.callPopupData,
    onMessageChange: (message) => {
      dispatch({ type: 'messageChanged', message });
      validateMessage();
    },
    onSubmitClick: () => {
      onSubmitEmail().catch(raiseToFlowHandler);
    },
    onCallClick: () => {
      if (coordinatorPhone(latest.current) === '') {
        showFeedbackMessage(NO_PHONE, PLATFORM_MESSAGE_TYPE.info);
        return;
      }
      dispatch({ type: 'callPopupOpened', imageURL: osImage(LDM_LOGO) });
    },
    onTryAgain: () => {
      refreshGetCoordinatorDetails()
        .then(() => {
          write({ type: 'fetchEnded' });
        })
        .catch(raiseToFlowHandler);
    },
    onCallPopupClose: () => {
      dispatch({ type: 'callPopupClosed' });
    },
    onNavigation: (navigationEvent) => {
      if (hasTypedMessage(latest.current)) preventNavigation(navigationEvent);
    },
  };
}
