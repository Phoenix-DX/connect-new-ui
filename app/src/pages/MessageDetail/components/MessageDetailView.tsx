import { useMemo, type ReactNode } from 'react';
import type { MessageDetail, MessageParameter } from '@/api/message';
import { AdaptiveCardsConfig, getHostConfigByConfigId } from '@/components/widgets/AdaptiveCardViewer';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIconBack } from '@/components/layout/MenuIconBack';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { isOrbitKind, messageTitle, orbitButtonText } from '@/pages/MessageDetail/hooks/messageDetailState';
import { MessageInfoType, MessagePriority, MessageSenderTarget } from '@/pages/MessageDetail/staticEntities';
import { Spinner } from '@/components/ui/Spinner';
import { NotificationDetailBlock } from './NotificationDetailBlock';

/** The view of the message detail, props only: the legacy layout with the back icon and the sender as title, the
    Spinner while the message loads, else NotificationDetailBlock. The flows are in `useMessageDetail`.
    @origin Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail */

export interface MessageDetailViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** [IsLoading]: the Spinner shows. */
  isLoading: boolean;
  /** GetMessageInstance.Message; null before the first answer (the Spinner shows). */
  message: MessageDetail | null;
  /** Placeholder BottomBar (the screen's BottomBarMenu). */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** GetMessageTemplateParametersByMessageTemplateId.List; null until it is fetched. */
  parameters?: MessageParameter[] | null;
  /** [ShowAssembleAction]. */
  showAssembleAction?: boolean;
  /** GetHasAssemble. */
  hasAssemble?: boolean;
  /** The Share_UI block of a Sharing message (Placeholder MessageDetails): the page builds it. */
  shareObjectDetail?: ReactNode;
  /** OnClick_ViewOrbitEvent(MessageSenderTargetId): the handler starts the flow and sends its error to the flow handler. */
  onClickViewOrbitEvent?: (messageSenderTargetId: number) => void;
  /** OnClick_ViewAssembleEvent(MessageSenderTargetId). */
  onClickViewAssembleEvent?: (messageSenderTargetId: number) => unknown;
  /** AdaptiveCardViewerOnExecuteAction, the handler of NotificationDetailBlock's AdaptiveCardEventExecuted. */
  onAdaptiveCardEventExecuted?: (cardPayload: string, actionId: string, formPayload: string) => unknown;
}

type MessageContentProps = Pick<
  MessageDetailViewProps,
  | 'parameters'
  | 'showAssembleAction'
  | 'hasAssemble'
  | 'shareObjectDetail'
  | 'onClickViewOrbitEvent'
  | 'onClickViewAssembleEvent'
  | 'onAdaptiveCardEventExecuted'
> & { prefix: string; message: MessageDetail };

/** The body of a loaded message: NotificationDetailBlock (HostConfig = GetHostConfigByConfigId(Events)) with the
    MessageDetails placeholder (a Sharing message: the Share_UI block) and the ActionButton placeholder: for Assemble,
    ViewAssembleEvent "View Meeting" (visible: GetHasAssemble, the parameters fetched and ShowAssembleAction); else
    ViewOrbitEvent, "View Event" for Orbit or "Go to Host Survey" (visible: the parameters fetched and not empty). */
function MessageContent({
  prefix,
  message,
  parameters = null,
  showAssembleAction = false,
  hasAssemble = false,
  shareObjectDetail,
  onClickViewOrbitEvent,
  onClickViewAssembleEvent,
  onAdaptiveCardEventExecuted,
}: MessageContentProps) {
  const target = message.senderTargetId;
  const hostConfig = useMemo(() => getHostConfigByConfigId(AdaptiveCardsConfig.Events), []);
  const isFetched = parameters !== null;
  let actionButton: ReactNode = null;
  if (target === MessageSenderTarget.Assemble) {
    if (hasAssemble && isFetched && showAssembleAction) {
      actionButton = (
        <button
          className="btn btn-primary full-width ignore-cap"
          data-button=""
          id={`${prefix}-ViewAssembleEvent`}
          type="button"
          onClick={() => void onClickViewAssembleEvent?.(target)}
        >
          View Meeting
        </button>
      );
    }
  } else if (isFetched && parameters.length > 0) {
    actionButton = (
      <button
        className="btn btn-primary full-width ignore-cap"
        data-button=""
        id={`${prefix}-ViewOrbitEvent`}
        type="button"
        onClick={() => {
          onClickViewOrbitEvent?.(target);
        }}
      >
        {orbitButtonText(target)}
      </button>
    );
  }
  return (
    <NotificationDetailBlock
      id={`${prefix}-NotificationDetailBlock`}
      prefix={`${prefix}-b4`}
      title={message.title}
      profileIconURL={message.profileIconURL}
      summary={message.summary}
      isUrgent={message.messageTemplatePriorityId === MessagePriority.Urgent}
      isAdaptiveCard={message.isAdaptiveCard}
      messageContent={message.messageContent}
      adaptiveCardContent={message.adaptiveCardContent}
      hostConfig={hostConfig}
      onAdaptiveCardEventExecuted={onAdaptiveCardEventExecuted}
      dateTimeCreated={message.dateTimeCreated}
      showDetailsPlaceholder={message.messageInfoTypeId === MessageInfoType.Sharing}
      forceNoIconBorder={isOrbitKind(target)}
      hasActionButton={isOrbitKind(target) || target === MessageSenderTarget.Assemble}
      messageDetails={message.messageInfoTypeId === MessageInfoType.Sharing ? shareObjectDetail : null}
      actionButton={actionButton}
    />
  );
}

export function MessageDetailView({
  id,
  isLoading,
  message,
  bottomBar,
  commonUIElements,
  ...contentProps
}: MessageDetailViewProps) {
  const prefix = id.replace('$', '');
  return (
    <OSBlock name="MyNotifications.ScreenBlock_MessageDetail" id={id}>
      <LegacyLayout
        id={`${prefix}-$b1`}
        headerLeft={<MenuIconBack id={`${prefix}-$b2`} />}
        title={
          <div className="notification-detail-title-overflow" data-container="" style={{ textAlign: 'center' }}>
            <span data-expression="">{messageTitle(message)}</span>
          </div>
        }
        content={
          isLoading || message === null ? (
            <Spinner id={`${prefix}-$b3`} showLoader />
          ) : (
            <MessageContent prefix={prefix} message={message} {...contentProps} />
          )
        }
        bottomBar={<div id={`${prefix}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
    </OSBlock>
  );
}
