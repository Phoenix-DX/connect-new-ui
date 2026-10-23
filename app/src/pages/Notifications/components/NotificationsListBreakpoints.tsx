// @os-block UBTConnect.App_Notifications.NotificationsListBreakpoints
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { Breakpoint, NotificationItem } from '@/pages/Notifications/types';
import { NotificationsList } from './NotificationsList';
import { Notifications_Header } from './Notifications_Header';

export interface NotificationsListBreakpointsProps {
  id?: string;
  breakpoints: Breakpoint[];
  isLoading?: boolean;
  uiNotificationItemList: NotificationItem[];
}

/** UBTConnect.App_Notifications.NotificationsListBreakpoints (p:…NotificationsListBreakpoints.mvc.js view): one row per
    breakpoint: Notifications_Header (Title = SectionName, BadgeNumber = BadgeCount) and NotificationsList. */
export function NotificationsListBreakpoints({
  id,
  breakpoints,
  isLoading = false,
  uiNotificationItemList,
}: NotificationsListBreakpointsProps) {
  const p = (id ?? '$b14').replace('$', '');
  return (
    <OSBlock name="App_Notifications.NotificationsListBreakpoints" id={id}>
      <div className="list list-group OSFillParent" data-list="" style={{ position: 'relative' }}>
        {breakpoints.map((b, i) => {
          const r = `${p}-l1-115_${i + 2}`;
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
                inNotificationItemList={uiNotificationItemList}
                isLoading={isLoading}
                currentBreakpoint={b}
              />
            </div>
          );
        })}
      </div>
    </OSBlock>
  );
}
