import {
  fetchNotificationMessageInstance,
  fetchNotificationTemplateParameters,
  type MessageDetail,
  type MessageDetailCallInputs,
  type NotificationDetailsCallInputs,
} from '@/api/message';
import { useRef } from 'react';
import { markNotificationDetailsOpened, storeNotificationAdaptiveCardResponse } from '@/api/notification';
import {
  initialMessageDetailState,
  MESSAGE_CHECK_CONNECTION,
  MESSAGE_EVENT_NOT_ACCESSIBLE,
  MESSAGE_FORM_THANKS,
  messageDetailReducer,
} from '@/containers/MessageInstance/messageDetailState';
import {
  autoCloseError,
  createMessageInstanceAfterFetch,
} from '@/containers/MessageInstance/messageInstanceAfterFetch';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { isCommunicationException } from '@/platform/feedback/flowErrors';
import { replaceOnUpcomingNavigation, useFlowState, useOsNavigate } from '@/platform/navigation';
import { clientVar } from '@/platform/session/session';
import {
  addAuditClickedEvent_NotificationViewEvent,
  addAuditEventDetailEvent_NotificationContactOrganiser,
  deserializeAdaptiveCardActionSubmitData,
  getHasNewLDM,
  substringJS,
  VIEW_EVENT_DATA_END,
  VIEW_EVENT_DATA_START,
} from '@/pages/NotificationDetails/actions';
import type { NotificationDetailsInputs } from '@/pages/NotificationDetails/inputs';

/** What the view of NotificationDetails reads. */
interface NotificationDetailFlows {
  /** GetMessageInstance.Message as the flow prepared it; null until the first answer (the view shows the default
      record). */
  message: MessageDetail | null;
  /** ShowAssembleAction (GetMessageTemplateParametersOnAfterFetch, ND7:1517): the view shows ActionButtonGroup when
      it is True (ND7:651). */
  showAssembleAction: boolean;
  /** AdaptiveCardViewerOnExecuteAction(CardPayload, ActionId, FormPayload), the handler of the AdaptiveCardViewer
      event OnExecuteAction (ND7:525-540). The viewer awaits it (`flow.runAwaited`, R6). */
  adaptiveCardViewerOnExecuteAction: (cardPayload: string, actionId: string, formPayload: string) => Promise<void>;
}

/** The NotificationDetails variables that the data actions send (screenData.variables). FeedItemId is a Text variable
    that no flow of the screen sets (Handler_SetFeedItemId has no caller): "". */
const toCallInputs = (v: MessageDetailCallInputs): NotificationDetailsCallInputs => ({
  FeedItemId: '',
  HardwareId: v.HardwareId,
  IsLoading: v.IsLoading,
  MessageInstanceId: v.MessageInstanceId,
  MessageTemplateId: v.MessageTemplateId,
  ShowAssembleAction: v.ShowAssembleAction,
});

/** The flows of the screen NotificationDetails (live TST 2026-11-05,
    UBTConnect.App_Notifications.NotificationDetails.mvc.js = ND; the re-capture of 2026-11-07 = ND7,
    migration/sources/pretty/UBTConnect.App_Notifications.NotificationDetails.mvc@6445b6d0.js):
    - GetMessageInstance is fetched at start (dependency 0, ND:711-714, 800-827); there is no OnReady and no check of
      the ids. Its OnAfterFetch GetMessageInstanceByIdOnAfterFetch (ND:972-1253) is the flow of ScreenBlock_MessageDetail
      (containers/MessageInstance), with the calls of this screen: the aggregate
      GetMessageTemplateParametersByMessageTemplateId (ND:748-775) and Wrapper_NotificationOpened (ND:724-737), both on
      the UBTConnect paths. WasCurrentViewRestoredFromCache of the flow is the `restored` flag of useFlowState.
    - Handler_NavigateTo_MessageList always opens Notifications (ND:1254-1276); Handler_NavigateTo_Login opens Login
      (ND:1561-1583). Both are own actions of the screen (R3, `flow.own`).
    - ShowAssembleAction (GetMessageTemplateParametersOnAfterFetch, ND7:1517) is read by the view: it shows
      ActionButtonGroup (ND7:651-717). IsLoading is read by no widget.
    - AdaptiveCardViewerOnExecuteAction (ND7:1990-2100) with Handler_AddAuditAndNavigateTo_EventEmail and
      _EventDetail (ND7:2196-2320, own actions, R3); the widget handler starts it with `flow.runAwaited` (R6).
    Flow scope (item 8): the data action and the aggregate are R1 (`flow.fetch`), Wrapper_NotificationOpened and
    StoreAdaptiveCardResponses are server actions (R2). A failure of the fetch at start goes to the flow handler
    (useFlowState). */
export function useNotificationDetail(inputs: NotificationDetailsInputs): NotificationDetailFlows {
  const navigate = useOsNavigate();
  const { state, dispatch, latest, flow } = useFlowState({
    viewName: 'App_Notifications.NotificationDetails',
    reducer: messageDetailReducer,
    initial: initialMessageDetailState({ ...inputs, isOriginPushNotification: false }),
    parameters: inputs,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (_flow, restored) => fetchAtStart(restored),
  });

  /** FeedbackMessage_AutoClose, ReplaceOnUpcomingNavigation and Handler_NavigateTo_MessageList (/UBTConnect/Notifications).
      MessageRetractedFlow (ND:1380-1409) is this sequence with the "not available" message. */
  const leaveToMessageList = flow.own((message: string) => {
    autoCloseError(message);
    replaceOnUpcomingNavigation();
    navigate('/UBTConnect/Notifications');
  });

  const onAfterFetchMessageInstance = createMessageInstanceAfterFetch(
    {
      flow,
      dispatch,
      latest,
      leaveToMessageList,
      navigateToLogin: flow.own(() => {
        navigate('/UBTConnect/Login');
      }),
    },
    {
      fetchTemplateParameters: (variables) => fetchNotificationTemplateParameters(toCallInputs(variables)),
      notificationOpened: markNotificationDetailsOpened,
    },
  );

  /** WasCurrentViewRestoredFromCache of this view, for the refresh after a card submit. */
  const restoredView = useRef(false);

  /** The fetch at start of GetMessageInstance, then its OnAfterFetch. */
  const fetchAtStart = async (restored: boolean) => {
    restoredView.current = restored;
    const result = await flow.fetch(fetchNotificationMessageInstance(toCallInputs(latest.current.variables))); // R1
    await onAfterFetchMessageInstance(result, restored);
  };

  /** Handler_AddAuditAndNavigateTo_EventEmail(In_EventId, In_EventHostId) (ND7:2196-2250): AddAuditEventDetailEvent,
      then LDM_Email_V2 when GetHasNewLDM, else LDM_Email. An own action of the screen (R3). */
  const addAuditAndNavigateToEventEmail = flow.own((eventId: string, eventHostId: string) => {
    addAuditEventDetailEvent_NotificationContactOrganiser();
    if (getHasNewLDM()) {
      navigate('/UBTConnect/LDM_Email_V2', {
        EventHostId: eventHostId,
        In_IsContactOrganiser: false,
        In_IsMessageGuest: true,
        In_EventId: eventId,
      });
    } else {
      navigate('/UBTConnect/LDM_Email', {
        In_IsContactOrganiser: false,
        EventHostId: eventHostId,
        In_EventId: eventId,
        In_IsMessageGuest: true,
      });
    }
  });

  /** Handler_AddAuditAndNavigateTo_EventDetail(In_EventHostId, In_EventId) (ND7:2273-2320): AddAuditClickedEvent,
      then LDM_EventDetail_V2 when GetHasNewLDM, else LDM_EventDetail. An own action of the screen (R3). */
  const addAuditAndNavigateToEventDetail = flow.own((eventHostId: string, eventId: string) => {
    addAuditClickedEvent_NotificationViewEvent(eventHostId, eventId);
    navigate(getHasNewLDM() ? '/UBTConnect/LDM_EventDetail_V2' : '/UBTConnect/LDM_EventDetail', {
      EventHostId: eventHostId,
      EventId: eventId,
    });
  });

  /** AdaptiveCardViewerOnExecuteAction (ND7:1990-2100): AppManager_GetDeviceContext, FormPayload as
      AdaptiveCardActionSubmitData;
      - send_email: Handler_AddAuditAndNavigateTo_EventEmail(EventId, EventHostId); when EventId is NullIdentifier, the
        ids come from the data of the card's "View Event" action (Substring JS node);
      - view_event: "Event is not accessible" (Info) when both ids are NullIdentifier, else
        Handler_AddAuditAndNavigateTo_EventDetail(EventHostId, EventId);
      - any other submit: StoreAdaptiveCardResponses, the refresh of GetMessageInstance (its OnAfterFetch runs again)
        and "Thanks for filling out our form!" (Info).
      Handle Error CommunicationException: "Please check your internet connection!" (Info). */
  const onExecuteAction = async (cardPayload: string, actionId: string, formPayload: string) => {
    try {
      // AppManager_GetDeviceContext: the device UUID.
      const deviceHardwareId = clientVar.deviceUuid.get();
      const data = deserializeAdaptiveCardActionSubmitData(formPayload);
      if (data.submitType === 'send_email') {
        if (data.eventId === '0') {
          const content = latest.current.message?.adaptiveCardContent ?? '';
          const other = deserializeAdaptiveCardActionSubmitData(
            substringJS(VIEW_EVENT_DATA_START, VIEW_EVENT_DATA_END, content),
          );
          addAuditAndNavigateToEventEmail(other.eventId, other.eventHostId);
        } else {
          addAuditAndNavigateToEventEmail(data.eventId, data.eventHostId);
        }
      } else if (data.submitType === 'view_event') {
        if (data.eventId === '0' && data.eventHostId === '0') {
          showFeedbackMessage(MESSAGE_EVENT_NOT_ACCESSIBLE, PLATFORM_MESSAGE_TYPE.info);
        } else {
          addAuditAndNavigateToEventDetail(data.eventHostId, data.eventId);
        }
      } else {
        // A server action (R2).
        await storeNotificationAdaptiveCardResponse({
          deviceHardwareId,
          adaptiveCardPayloadJSON: cardPayload,
          actionTaken: actionId,
          formDataJSON: formPayload,
          messageInstanceId: latest.current.variables.MessageInstanceId,
        });
        // Refresh GetMessageInstance (R1), then its OnAfterFetch.
        const result = await flow.fetch(fetchNotificationMessageInstance(toCallInputs(latest.current.variables)));
        await onAfterFetchMessageInstance(result, restoredView.current);
        showFeedbackMessage(MESSAGE_FORM_THANKS, PLATFORM_MESSAGE_TYPE.info);
      }
    } catch (error) {
      if (!isCommunicationException(error)) throw error;
      showFeedbackMessage(MESSAGE_CHECK_CONNECTION, PLATFORM_MESSAGE_TYPE.info);
    }
  };

  return {
    message: state.message,
    showAssembleAction: state.variables.ShowAssembleAction,
    adaptiveCardViewerOnExecuteAction: async (cardPayload, actionId, formPayload) => {
      await flow.runAwaited(() => onExecuteAction(cardPayload, actionId, formPayload));
    },
  };
}
