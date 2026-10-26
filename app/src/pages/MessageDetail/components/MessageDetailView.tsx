import type { ReactNode } from 'react';
import type { MessageDetail } from '@/api/message';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIconBack } from '@/components/layout/MenuIconBack';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { isOrbitKind, messageTitle } from '@/pages/MessageDetail/hooks/messageDetailState';
import { MessageInfoType, MessagePriority, MessageSenderTarget } from '@/pages/MessageDetail/staticEntities';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
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
}

/** The body of a loaded message: NotificationDetailBlock with the not-ported parts (Q1) as NotCaptured markers. */
function MessageContent({ prefix, message }: { prefix: string; message: MessageDetail }) {
  const target = message.senderTargetId;
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

export function MessageDetailView({ id, isLoading, message, bottomBar, commonUIElements }: MessageDetailViewProps) {
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
            <MessageContent prefix={prefix} message={message} />
          )
        }
        bottomBar={<div id={`${prefix}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
    </OSBlock>
  );
}
