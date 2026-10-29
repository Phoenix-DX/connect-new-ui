/** @origin UBTConnect.App_Notifications.NotificationsListBreakpoints */
import { useState } from 'react';
import type { NotificationBreakpoint, NotificationItem } from '@/api/notification';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { applyReadCountUpdate, type ReadCountUpdate } from './actions';
import { NotificationsList } from './NotificationsList';
import { Notifications_Header } from './Notifications_Header';

export interface NotificationsListBreakpointsProps {
  id?: string;
  breakpoints: NotificationBreakpoint[];
  isLoading?: boolean;
  uiNotificationItemList: NotificationItem[];
  /** Event NotificationDetail(MessageInstanceId, IsRead) of NotificationsList (NotificationsListBreakpoints.mvc.js:238). */
  onNotificationDetail?: (messageInstanceId: string, isRead: boolean) => void;
  /** Event UpdateReadCount(AddToCount, IsDelete, IsRead). */
  onUpdateReadCount?: (addToCount: boolean, isDelete: boolean, isRead: boolean) => void;
}

/** UBTConnect.App_Notifications.NotificationsListBreakpoints (TST publish of 2026-10-27, view and controller): one row
    per breakpoint: Notifications_Header (Title = SectionName, BadgeNumber = BadgeCount) and NotificationsList.
    Handler_UpdateReadCount changes the block's own copy of its inputs (the breakpoint's BadgeCount, the item's
    IsRead, the deleted item), so NotificationsList refilters from it, then raises UpdateReadCount to the screen. A new
    input from the screen (a refresh) replaces the copy. */
export function NotificationsListBreakpoints({
  id,
  breakpoints,
  isLoading = false,
  uiNotificationItemList,
  onNotificationDetail,
  onUpdateReadCount,
}: NotificationsListBreakpointsProps) {
  const [local, setLocal] = useState({ breakpoints, items: uiNotificationItemList });
  const [inputs, setInputs] = useState({ breakpoints, uiNotificationItemList });
  if (inputs.breakpoints !== breakpoints || inputs.uiNotificationItemList !== uiNotificationItemList) {
    setInputs({ breakpoints, uiNotificationItemList });
    setLocal({ breakpoints, items: uiNotificationItemList });
  }
  const handlerUpdateReadCount = (update: ReadCountUpdate, isRead: boolean) => {
    setLocal((l) => applyReadCountUpdate(l.breakpoints, l.items, update));
    onUpdateReadCount?.(update.addToCount, update.isDelete, isRead);
  };
  const p = (id ?? '$b15').replace('$', '');
  return (
    <OSBlock name="App_Notifications.NotificationsListBreakpoints" id={id}>
      <div className="list list-group OSFillParent" data-list="" style={{ position: 'relative' }}>
        {local.breakpoints.map((b, i) => {
          const r = `${p}-l1-117_${i + 3}`;
          return (
            <div key={`${b.sectionName}-${i}`} data-container="">
              <Notifications_Header
                id={`${r}-Notifications_ListHeader`}
                title={b.sectionName}
                isLoading={isLoading}
                badgeNumber={b.badgeCount}
              />
              <NotificationsList
                id={`${r}-$b2`}
                inNotificationItemList={local.items}
                isLoading={isLoading}
                currentBreakpoint={b}
                onNotificationDetail={onNotificationDetail}
                onUpdateReadCount={handlerUpdateReadCount}
              />
            </div>
          );
        })}
      </div>
    </OSBlock>
  );
}
