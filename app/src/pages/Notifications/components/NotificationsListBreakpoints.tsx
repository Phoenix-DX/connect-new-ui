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
  /** Event NotificationDetail(MessageInstanceId, IsRead, MessageTemplateId, HardwareId) of NotificationsList
      (NotificationsListBreakpoints.mvc.js:238; the two last inputs since the live TST code of 2026-11-05). */
  onNotificationDetail?: (
    messageInstanceId: string,
    isRead: boolean,
    messageTemplateId: string,
    hardwareId: string,
  ) => void;
  /** Event UpdateReadCount(AddToCount, IsDelete, IsRead). */
  onUpdateReadCount?: (addToCount: boolean, isDelete: boolean, isRead: boolean) => void;
}

/** UBTConnect.App_Notifications.NotificationsListBreakpoints (live TST 2026-11-07, view and controller): one row
    per breakpoint: Notifications_Header (Title = SectionName, BadgeNumber = BadgeCount) and NotificationsList.
    The new OnReady (SetupScrollListener with TopElementId) looks for the screen widget "Notifications_ListHeader",
    which the screen does not have, so it does nothing; the List OnScrollEnding raises OnLoadMore, whose screen handler
    is empty. Neither is ported. The inputs CurrentBreakpoint and TopElementId are read only by them.
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
          // The runtime counters of the row ids as in the TST capture of 2026-11-07 (183_2, 183_3; lists 194, 196).
          const r = `${p}-l1-183_${String(i + 2)}`;
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
                listCounter={194 + 2 * i}
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
