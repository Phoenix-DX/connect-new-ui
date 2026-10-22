// @os-block Connect2_LegacyShared.MyNotifications.MessageListBlock
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList, OSListItem, OSListItemAction } from '@/components/ui/os/OSList';
import type { MessagesList } from '../types';
import { MessageListItem } from './MessageListItem';
import { MessagePriority } from './staticEntities';

export interface MessageListBlockProps {
  id?: string;
  isShowLoading: boolean;
  messagesList: MessagesList;
  /** Event SwipeEventsClear (left ListItemAction "Clear", view :296-318). */
  onSwipeEventsClear: (messageInstanceId: string) => Promise<void>;
  /** Event MarkAllRead ("Mark All as Read"). */
  onMarkAllRead: () => void;
  /** Event OnClick_GoToMessageDetail (ListItem OnClick, view :275-288); its Promise keeps the item "active". */
  onClickGoToMessageDetail: (messageInstanceId: string, isRead: boolean) => Promise<void>;
  /** Event SwipeEventsRead (right ListItemAction "Mark as Read", visible when not read, view :357-379). */
  onSwipeEventsRead: (messageInstanceId: string) => Promise<void>;
  /** Event OnScrollEnding of Messages_List (view :231-243). */
  onScrollEnding: () => Promise<void>;
}

/** MessageListBlock (p:Connect2_LegacyShared.MyNotifications.MessageListBlock.mvc.js view :145-394): the sticky
    "Mark All as Read" bar (visible when not loading and MessagesList.HasUnreadMessages), then Messages_List (OS List,
    `list list-group`, virtualization thresholds 1000). Each row: a container visible when not IsClear, the ListItem
    (`list-item`, plus `background-blue-lightest` when not read) with MessageListItem (SentFromName "", IsUrgent =
    priority Urgent). Messages_List and its ListItem are the shared OSList / OSListItem (P-LIST, Q1): the swipe
    (Q2) shows the left action "Clear" (SwipeEventsClear) and the right action "Mark as Read" (SwipeEventsRead,
    visible when not read), both triggered on a full swipe (view :289-290); at rest both containers are empty. */
export function MessageListBlock({
  id,
  isShowLoading,
  messagesList,
  onSwipeEventsClear,
  onMarkAllRead,
  onClickGoToMessageDetail,
  onSwipeEventsRead,
  onScrollEnding,
}: MessageListBlockProps) {
  const prefix = id?.replace('$', '') ?? 'b7';
  return (
    <OSBlock name="MyNotifications.MessageListBlock" id={id}>
      {!isShowLoading && messagesList.hasUnreadMessages && (
        <div
          className="OSInline"
          data-container=""
          style={{
            width: '100%',
            backgroundColor: 'var(--color-neutral-0)',
            borderBottom: '1px solid var(--color-neutral-3)',
            fontSize: '0.9em',
            height: 46,
            position: 'sticky',
            top: 0,
            zIndex: 2,
          }}
        >
          <div
            className="justify-content-flex-end text-primary-color bold"
            data-container=""
            style={{
              cursor: 'pointer',
              height: 22,
              position: 'absolute',
              right: 'var(--space-xl)',
              transform: 'translateY(50%)',
            }}
            onClick={onMarkAllRead}
          >
            <span data-expression="">Mark All as Read</span>
          </div>
        </div>
      )}
      {!isShowLoading && (
        <div data-container="">
          <OSList
            source={messagesList.items}
            keyOf={(m) => m.id}
            className="list list-group"
            animateItems={false}
            positionRelative
            id={`${prefix}-Messages_List`}
            onScrollEnding={onScrollEnding}
          >
            {(m, i) => {
              const row = `${prefix}-l1-36_${String(i)}-`;
              return m.isClear ? null : (
                <div data-container="">
                  <OSListItem
                    id={`${row}Messages_List_Item`}
                    className={`list-item${m.isRead ? '' : ' background-blue-lightest'}`}
                    onClick={() => onClickGoToMessageDetail(m.id, m.isRead)}
                    triggerActionOnFullSwipeLeft
                    triggerActionOnFullSwipeRight
                    leftActions={
                      <OSListItemAction className="list-item-action" onClick={() => onSwipeEventsClear(m.id)}>
                        Clear
                      </OSListItemAction>
                    }
                    rightActions={
                      <OSListItemAction
                        className="list-item-action"
                        visible={!m.isRead}
                        onClick={() => onSwipeEventsRead(m.id)}
                      >
                        Mark as Read
                      </OSListItemAction>
                    }
                  >
                    <MessageListItem
                      id={`${row}Messages_List_Item_Private`}
                      prefix={`${row}b1-`}
                      sentFromName=""
                      userId={m.createdByUserId}
                      iconURL={m.profileIconURL}
                      title={m.title}
                      messageDateTime={m.dateTimeCreated}
                      isUrgent={m.messageTemplatePriorityId === MessagePriority.Urgent}
                      memberId={m.createdByMemberId}
                    />
                  </OSListItem>
                </div>
              );
            }}
          </OSList>
        </div>
      )}
    </OSBlock>
  );
}
