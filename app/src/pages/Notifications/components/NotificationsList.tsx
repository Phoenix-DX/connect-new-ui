// @os-block UBTConnect.App_Notifications.NotificationsList
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ScrollAnchor } from '@/shared/NavigationHandler/ScrollAnchor';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import type { Breakpoint, NotificationItem } from '@/pages/Notifications/types';
import { dateTimeToText, itemsOfRange } from './actions';
import { Notification_ListItem } from './Notification_ListItem';

export interface NotificationsListProps {
  id: string;
  inNotificationItemList: NotificationItem[];
  isLoading?: boolean;
  currentBreakpoint: Breakpoint;
}

/** UBTConnect.App_Notifications.NotificationsList (p:…NotificationsList.mvc.js): OnInitialize keeps the items of the
    breakpoint's range (no OnParametersChanged: later input changes do not refilter, as compiled); List_Notifications
    with, per item, SkeletonSection (IsLoading) > "updates-list__list-item" (data-plus-date) > Notification_ListItem +
    ScrollAnchor (Id). */
export function NotificationsList({
  id,
  inNotificationItemList,
  isLoading = false,
  currentBreakpoint,
}: NotificationsListProps) {
  const [items] = useState(() => itemsOfRange(inNotificationItemList, currentBreakpoint.dateRange));
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
          const r = `${p}-b2-l1-127_${i}`;
          return (
            <SkeletonSection key={item.id} id={`${r}-$b1`} inIsLoading={isLoading}>
              <div
                className="updates-list__list-item"
                data-container=""
                data-plus-date={dateTimeToText(item.dateTimeCreated)}
              >
                <Notification_ListItem
                  id={`${r}-NotificationItem`}
                  inIsRead={item.isRead}
                  inDescription={item.title}
                  inNotificationDate={item.dateTimeCreated}
                  inAvatarImageLeftURL={item.profileIconURL}
                />
                <ScrollAnchor id={`${r}-$b3`} idIn={item.id} />
              </div>
            </SkeletonSection>
          );
        })}
      </div>
    </OSBlock>
  );
}
