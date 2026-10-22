// @os-block Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail
import { useEffect, useRef, type ReactNode } from 'react';
import { NotCaptured } from '@/app/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Layout } from '../../../shared/Connect2_LegacyShared/Layout';
import { MenuIcon_Back } from '../../../shared/Connect2_LegacyShared/MenuIcon_Back';
import { Spinner } from '../../../shared/Connect2_LegacyShared/Spinner';
import { cache_SignedImageURL_Get } from '../../../shared/UBTConnect_Utils/lib/actions';
import { Connect_Entity, ImageSize } from '../../../shared/UBTConnect_Utils/lib/staticEntities';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { feedbackMessageAutoClose, PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { replaceOnUpcomingNavigation, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { currentUserId, isSignedIn } from '@/platform/session/session';
import { getUserInformation } from '@/platform/session/userInfo';
import { fetchMessageInstance, fetchMessageTemplateParameters, wrapper_NotificationOpened } from '../api';
import type { MessageDetail, MessageDetailInputs, MessageDetailVariables, MessageParameter } from '../types';
import { addFirstSentence, decrementReadMessagesCounter, decrementReadWhatsNewsCounter } from './actions';
import { NotificationDetailBlock } from './NotificationDetailBlock';
import { MessageInfoType, MessagePriority, MessageSenderTarget, MessageType, ParameterName } from './staticEntities';

export interface ScreenBlock_MessageDetailProps extends MessageDetailInputs {
  id: string;
  /** Placeholder BottomBar (the screen's BottomBarMenu). */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Event NavigateTo_MessageList(NoPermission). */
  onNavigateToMessageList: () => void;
  /** Event NavigateTo_Login. */
  onNavigateToLogin: () => void;
}

interface MessageState {
  message: MessageDetail | null;
  parameters: MessageParameter[] | null;
}

/** Returned by a flow step that ends the action (OS.Flow.returnAsync / an event that leaves the screen). */
const STOP = 'stop' as const;

const autoCloseError = (message: string): void => {
  feedbackMessageAutoClose({
    title: '',
    message,
    messageType: 'error',
    encodedHtml: true,
    extendedClass: '',
    delayMs: 0,
    useDebounce: false,
  });
};

const isOrbitKind = (target: number) =>
  target === MessageSenderTarget.Orbit || target === MessageSenderTarget.OrbitHostSurvey;

/** ScreenBlock_MessageDetail (p:Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js: model :1-166,
    view :167-664, controller :665-1880). Layout with the back icon, the sender as title, Spinner while IsLoading,
    else NotificationDetailBlock. OnReady refreshes GetMessageInstance; GetMessageInstanceByIdOnAfterFetch decides
    access, marks the message opened and prepares the content. */
export function ScreenBlock_MessageDetail({
  id,
  MessageInstanceId,
  MessageTemplateId,
  HardwareId,
  isOriginPushNotification,
  bottomBar,
  commonUIElements,
  onNavigateToMessageList,
  onNavigateToLogin,
}: ScreenBlock_MessageDetailProps) {
  const prefix = id.replace('$', '');
  const restoredFromCache = useWasRestoredFromCache();
  const [vars, setVars] = useViewState<MessageDetailVariables>('MessageDetail.variables', {
    IsEntryScreen: false,
    IsLoading: true,
    ShowAssembleAction: false,
    MessageInstanceId,
    MessageTemplateId,
    HardwareId,
    isOriginPushNotification,
  });
  const [state, setState] = useViewState<MessageState>('MessageDetail.data', { message: null, parameters: null });
  // Flows read and assign variables between server calls, as OutSystems does: the ref holds the latest values.
  const varsRef = useRef(vars);
  const assign = (patch: Partial<MessageDetailVariables>) => {
    varsRef.current = { ...varsRef.current, ...patch };
    setVars(varsRef.current);
  };

  /** MessageRetractedFlow (controller :1383-1417): toast, ReplaceOnUpcomingNavigation, NavigateTo_MessageList. */
  const messageRetractedFlow = () => {
    autoCloseError('Sorry, this message is not available anymore.');
    replaceOnUpcomingNavigation();
    onNavigateToMessageList();
  };

  /** GetMessageTemplateParametersOnAfterFetch (:870-915): Assemble → ShowAssembleAction = both event ids present. */
  const onAfterFetchParameters = (message: MessageDetail, parameters: MessageParameter[]) => {
    if (message.senderTargetId !== MessageSenderTarget.Assemble) return;
    const has = (name: number) => parameters.some((p) => p.parameterNameId === name);
    assign({
      ShowAssembleAction: has(ParameterName.AssembleEventParentId) && has(ParameterName.AssembleEventInstanceId),
    });
  };

  /** The "Is Notification Read?" part (:1020-1172): returns STOP when the action ends early. */
  const prepareMessage = async (fetched: MessageDetail): Promise<typeof STOP | MessageDetail> => {
    let message = fetched;
    if (!message.isRead) {
      if (message.messageInfoTypeId === MessageInfoType.WhatsNew) decrementReadWhatsNewsCounter();
      else decrementReadMessagesCounter();
      const isRetracted = await wrapper_NotificationOpened(varsRef.current.MessageInstanceId);
      if (isRetracted) {
        messageRetractedFlow();
        return STOP;
      }
    }
    if (message.sentAs === null) {
      // Cache_SignedImageURL_Get(TextToInteger(CreatedByMemberId), Member, Small) → ProfileIconURL (:1063-1076).
      const url = await cache_SignedImageURL_Get(message.createdByMemberId, Connect_Entity.Member, ImageSize.Small);
      message = { ...message, profileIconURL: url };
    }
    const target = message.senderTargetId;
    if (
      message.messageInfoTypeId === MessageInfoType.Sharing ||
      isOrbitKind(target) ||
      target === MessageSenderTarget.Assemble
    ) {
      if (!restoredFromCache) {
        const parameters = await fetchMessageTemplateParameters(varsRef.current);
        setState((s) => ({ ...s, parameters }));
        onAfterFetchParameters(message, parameters);
      }
      if (isOrbitKind(target)) {
        const userInformation = await getUserInformation();
        message = {
          ...message,
          messageContent: addFirstSentence(userInformation.Directory_UserCurrent.FirstName, message.messageContent),
        };
      }
      // Assemble: BuildAssembleNotificationContent (PlaceholderLib) is not ported (Q1): the content stays as fetched and
      // the NotCaptured marker of the action-button placeholder names it.
    }
    return message;
  };

  /** GetMessageInstanceByIdOnAfterFetch (controller :916-1203). */
  const onAfterFetchMessageInstance = async (r: Awaited<ReturnType<typeof fetchMessageInstance>>) => {
    assign({ MessageInstanceId: r.message.messageInstanceId ?? '0' });
    setState((s) => ({ ...s, message: r.message }));
    if (r.isRetracted) {
      messageRetractedFlow();
      return;
    }
    if (r.message.messageInstanceId === null) {
      if (isSignedIn()) {
        autoCloseError("You don't have access to that message");
        replaceOnUpcomingNavigation();
        onNavigateToMessageList();
      } else {
        onNavigateToLogin();
      }
      return;
    }
    if (r.message.messageTemplateTypeId === MessageType.Private) {
      if (!isSignedIn()) {
        onNavigateToLogin();
        return;
      }
      if (r.message.messageInstanceUserId !== Number(currentUserId())) {
        autoCloseError("You don't have access to that message");
        replaceOnUpcomingNavigation();
        onNavigateToMessageList();
        return;
      }
    }
    if (r.isCleared) {
      autoCloseError('Sorry, this message is not available anymore.');
      replaceOnUpcomingNavigation();
      onNavigateToMessageList();
      return;
    }
    const prepared = await prepareMessage(r.message);
    if (prepared === STOP) return;
    setState((s) => ({ ...s, message: prepared }));
    assign({ IsLoading: false });
  };

  // OnReady (:1532-1572): both ids null → "Invalid message detail id."; else Refresh GetMessageInstance (once).
  const readyRef = useRef(false);
  useEffect(() => {
    if (readyRef.current) return;
    readyRef.current = true;
    if (varsRef.current.MessageInstanceId === '0' && varsRef.current.MessageTemplateId === '0') {
      showFeedbackMessage('Invalid message detail id.', PLATFORM_MESSAGE_TYPE.error);
      return;
    }
    void (async () => {
      try {
        await onAfterFetchMessageInstance(await fetchMessageInstance(varsRef.current));
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const message = state.message;
  // Title expression (view :289-299): SentAs <> NullIdentifier() ? (LordsDayMeal ? "Meal Allocation" : sender) : user.
  const title =
    message === null
      ? ''
      : message.sentAs !== null
        ? message.senderTargetId === MessageSenderTarget.LordsDayMeal
          ? 'Meal Allocation'
          : message.senderTargetName
        : message.userName;

  let content: ReactNode;
  if (vars.IsLoading || message === null) {
    content = <Spinner id={`${prefix}-$b3`} showLoader />;
  } else {
    const target = message.senderTargetId;
    content = (
      <NotificationDetailBlock
        id={`${prefix}-NotificationDetailBlock`}
        prefix={`${prefix}-b4`}
        title={message.title}
        profileIconURL={message.profileIconURL}
        summary={message.summary}
        isUrgent={message.messageTemplatePriorityId === MessagePriority.Urgent}
        isAdaptiveCard={message.isAdaptiveCard}
        messageContent={message.messageContent}
        dateTimeCreated={message.dateTimeCreated}
        showDetailsPlaceholder={message.messageInfoTypeId === MessageInfoType.Sharing}
        forceNoIconBorder={isOrbitKind(target)}
        hasActionButton={isOrbitKind(target) || target === MessageSenderTarget.Assemble}
        messageDetails={
          <NotCaptured name="Q1: Share_UI.ShareObjectDetail / ShareObjectDetail_ExtendedShare (b1-$b5, b1-$b6)" />
        }
        actionButton={
          <NotCaptured
            name={
              target === MessageSenderTarget.Assemble
                ? 'Q1: button ViewAssembleEvent "View Meeting" and the Assemble content (BuildAssembleNotificationContent)'
                : 'Q1: button ViewOrbitEvent "View Event" / "Go to Host Survey"'
            }
          />
        }
      />
    );
  }

  return (
    <OSBlock name="MyNotifications.ScreenBlock_MessageDetail" id={id}>
      <Layout
        id={`${prefix}-$b1`}
        headerLeft={<MenuIcon_Back id={`${prefix}-$b2`} />}
        title={
          <div className="notification-detail-title-overflow" data-container="" style={{ textAlign: 'center' }}>
            <span data-expression="">{title}</span>
          </div>
        }
        content={content}
        bottomBar={<div id={`${prefix}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
    </OSBlock>
  );
}
