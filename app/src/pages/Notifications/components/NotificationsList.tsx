/** @origin UBTConnect.App_Notifications.NotificationsList */
import { useState } from 'react';
import { deleteNotifications, toggleNotificationRead } from '@/api/notification';
import type { NotificationBreakpoint, NotificationItem } from '@/api/notification';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSListItem, OSListItemAction } from '@/components/ui/os/OSList';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { Skeleton } from '@/components/ui/Skeleton';
import { ScrollAnchor } from '@/platform/navigation/ScrollAnchor';
import { UBT_Color, UBT_FontSize, UBT_IconSize } from '@/lib/ubtConnectLibrary/staticEntities';
import { dateTimeToText, itemsOfRange, toggleItemRead, type ReadCountUpdate } from './actions';
import { Notification_ListItem } from './Notification_ListItem';
import { NotificationsPopup, Notifications_ConfirmDialog } from './Notifications_ConfirmDialog';
import { UBT_Icons2_Notifications } from './staticEntities';

export interface NotificationsListProps {
  id: string;
  inNotificationItemList: NotificationItem[];
  isLoading?: boolean;
  currentBreakpoint: NotificationBreakpoint;
  /** Event NotificationDetail(MessageInstanceId, IsRead), raised by OnClick_NotificationDetail. */
  onNotificationDetail?: (messageInstanceId: string, isRead: boolean) => void;
  /** Event UpdateReadCount(AddToCount, Breakpoint, MessageInstanceId, IsDelete, IsRead). */
  onUpdateReadCount?: (update: ReadCountUpdate, isRead: boolean) => void | Promise<void>;
}

/** UBTConnect.App_Notifications.NotificationsList (TST publish of 2026-10-27, NotificationsList.mvc.js view :184-559,
    controller :580-946). OnInitialize and OnParametersChanged keep the items of the breakpoint's range (ListClear, then
    the filter: a new input list refilters). List_Notifications: per item a "ListItemContainer" container > ListItem
    "ListItemNotification" (full swipe both ways) with the left action Mark as read / Mark as unread (Handler_ToggleRead),
    the content SkeletonSection > "updates-list__list-item" (click → NotificationDetail) > Notification_ListItem +
    ScrollAnchor, and the right action Delete (ToggleDeleteNotification: the popup). The popup "popup-dialog" holds
    Notifications_ConfirmDialog (IsSingle): Confirm → Handler_DeleteNotification, Cancel → ToggleDeleteNotification. */
export function NotificationsList({
  id,
  inNotificationItemList,
  isLoading = false,
  currentBreakpoint,
  onNotificationDetail,
  onUpdateReadCount,
}: NotificationsListProps) {
  const filter = () => itemsOfRange(inNotificationItemList, currentBreakpoint.dateRange);
  const [items, setItems] = useState(filter);
  // OnParametersChanged: a new input refilters the block's list (React "state from props": compare the inputs).
  const [inputs, setInputs] = useState({ inNotificationItemList, currentBreakpoint });
  if (inputs.inNotificationItemList !== inNotificationItemList || inputs.currentBreakpoint !== currentBreakpoint) {
    setInputs({ inNotificationItemList, currentBreakpoint });
    setItems(filter());
  }
  const [showDeleteNotificationPopup, setShowDeleteNotificationPopup] = useState(false);
  const [selected, setSelected] = useState<NotificationItem | null>(null);
  const sectionName = currentBreakpoint.sectionName;

  /* Handler_ToggleRead (:604-668): ToggleRead(Id, not IsRead), the item toggled at its place, then UpdateReadCount
     (AddToCount = the item is now unread, IsDelete False, IsRead = the read state before the toggle). */
  const handlerToggleRead = async (item: NotificationItem) => {
    await toggleNotificationRead(item.id, !item.isRead);
    setItems((list) => toggleItemRead(list, item.id));
    await onUpdateReadCount?.(
      { addToCount: item.isRead, sectionName, messageInstanceId: item.id, isDelete: false },
      item.isRead,
    );
  };

  // ToggleDeleteNotification (:780-813): SelectedNotification, SelectedMessageListItem, the popup toggled.
  const toggleDeleteNotification = (item: NotificationItem | null) => {
    setSelected(item);
    setShowDeleteNotificationPopup((v) => !v);
  };

  /* Handler_DeleteNotification (:687-746): the item leaves the list, Delete_Notifications([item]), the popup closes,
     then UpdateReadCount(False, the section, Id, True, IsRead). */
  const handlerDeleteNotification = async () => {
    if (!selected) return;
    setItems((list) => list.filter((i) => i.id !== selected.id));
    await deleteNotifications([selected]);
    toggleDeleteNotification(selected);
    await onUpdateReadCount?.(
      { addToCount: false, sectionName, messageInstanceId: selected.id, isDelete: true },
      selected.isRead,
    );
  };

  const p = id.replace(/-\$b2$/, '');
  return (
    <OSBlock name="App_Notifications.NotificationsList" id={id}>
      <div
        className="list list-group background-neutral-0 updates-list OSFillParent"
        data-animation-disabled=""
        data-list=""
        id={`${p}-b2-List_Notifications`}
        style={{ position: 'relative' }}
      >
        {items.map((item, i) => {
          const r = `${p}-b2-l1-131_${i}`;
          return (
            <div key={item.id} className="ListItemContainer" data-container="" id={`${r}-ListItemContainer`}>
              <OSListItem
                id={`${r}-ListItemNotification`}
                className="list-item list-itemNotifications-action-primary"
                triggerActionOnFullSwipeLeft
                triggerActionOnFullSwipeRight
                leftActions={
                  <OSListItemAction
                    className="list-item-action list-itemNotifications-Read-action-primary"
                    onClick={() => handlerToggleRead(item)}
                  >
                    <div data-container="">
                      <Icon
                        id={`${r}-$b1`}
                        inIconId={UBT_Icons2_Notifications.Mail}
                        inColorId={UBT_Color.CyanDarkest}
                        inSizeId={UBT_IconSize.Medium_20}
                      />
                      <CustomText
                        id={`${r}-$b2`}
                        inText={item.isRead ? 'Mark as unread' : 'Mark as read'}
                        inTextOptions={{ Color: UBT_Color.CyanDarkest, FontSize: UBT_FontSize.DoubleExtraSmall }}
                      />
                    </div>
                  </OSListItemAction>
                }
                rightActions={
                  <OSListItemAction
                    className="list-item-action list-itemNotifications-Delete-action-primary"
                    onClick={() => {
                      toggleDeleteNotification(item);
                    }}
                  >
                    <div data-container="">
                      <Icon
                        id={`${r}-$b6`}
                        inIconId={UBT_Icons2_Notifications.Delete}
                        inColorId={UBT_Color.Neutral0}
                        inSizeId={UBT_IconSize.Medium_20}
                      />
                      <CustomText
                        id={`${r}-$b7`}
                        inText="Delete"
                        inTextOptions={{ Color: UBT_Color.Neutral0, FontSize: UBT_FontSize.DoubleExtraSmall }}
                      />
                    </div>
                  </OSListItemAction>
                }
              >
                <Skeleton id={`${r}-$b3`} isLoading={isLoading}>
                  <div
                    className="updates-list__list-item"
                    data-container=""
                    data-plus-date={dateTimeToText(item.dateTimeCreated)}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      onNotificationDetail?.(item.id, item.isRead);
                    }}
                  >
                    <Notification_ListItem
                      id={`${r}-NotificationItem`}
                      inIsRead={item.isRead}
                      inDescription={item.title}
                      inNotificationDate={item.dateTimeCreated}
                      inAvatarImageLeftURL={item.profileIconURL}
                    />
                    <ScrollAnchor id={`${r}-$b5`} idIn={item.id} />
                  </div>
                </Skeleton>
              </OSListItem>
            </div>
          );
        })}
      </div>
      <NotificationsPopup showPopup={showDeleteNotificationPopup}>
        <Notifications_ConfirmDialog
          id={`${p}-b2-$b8`}
          isSingle
          onConfirm={() => void handlerDeleteNotification()}
          onCancel={() => {
            toggleDeleteNotification(selected);
          }}
        />
      </NotificationsPopup>
    </OSBlock>
  );
}
