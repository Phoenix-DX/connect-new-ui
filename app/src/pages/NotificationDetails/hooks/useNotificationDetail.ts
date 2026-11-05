import {
  fetchNotificationMessageInstance,
  fetchNotificationTemplateParameters,
  type MessageDetail,
  type MessageDetailCallInputs,
  type NotificationDetailsCallInputs,
} from '@/api/message';
import { markNotificationDetailsOpened } from '@/api/notification';
import { initialMessageDetailState, messageDetailReducer } from '@/containers/MessageInstance/messageDetailState';
import {
  autoCloseError,
  createMessageInstanceAfterFetch,
} from '@/containers/MessageInstance/messageInstanceAfterFetch';
import { replaceOnUpcomingNavigation, useFlowState, useOsNavigate } from '@/platform/navigation';
import type { NotificationDetailsInputs } from '@/pages/NotificationDetails/inputs';

/** What the view of NotificationDetails reads. */
interface NotificationDetailFlows {
  /** GetMessageInstance.Message as the flow prepared it; null until the first answer (the view shows the default
      record). */
  message: MessageDetail | null;
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
    UBTConnect.App_Notifications.NotificationDetails.mvc.js = ND):
    - GetMessageInstance is fetched at start (dependency 0, ND:711-714, 800-827); there is no OnReady and no check of
      the ids. Its OnAfterFetch GetMessageInstanceByIdOnAfterFetch (ND:972-1253) is the flow of ScreenBlock_MessageDetail
      (containers/MessageInstance), with the calls of this screen: the aggregate
      GetMessageTemplateParametersByMessageTemplateId (ND:748-775) and Wrapper_NotificationOpened (ND:724-737), both on
      the UBTConnect paths. WasCurrentViewRestoredFromCache of the flow is the `restored` flag of useFlowState.
    - Handler_NavigateTo_MessageList always opens Notifications (ND:1254-1276); Handler_NavigateTo_Login opens Login
      (ND:1561-1583). Both are own actions of the screen (R3, `flow.own`).
    - ShowAssembleAction (GetMessageTemplateParametersOnAfterFetch, ND:1335-1378) is kept in the state only: no widget
      reads it, and IsLoading is read by no widget either.
    Flow scope (item 8): the data action and the aggregate are R1 (`flow.fetch`), Wrapper_NotificationOpened is a
    server action (R2). A failure of the fetch at start goes to the flow handler (useFlowState). */
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

  /** The fetch at start of GetMessageInstance, then its OnAfterFetch. */
  const fetchAtStart = async (restored: boolean) => {
    const result = await flow.fetch(fetchNotificationMessageInstance(toCallInputs(latest.current.variables))); // R1
    await onAfterFetchMessageInstance(result, restored);
  };

  return { message: state.message };
}
