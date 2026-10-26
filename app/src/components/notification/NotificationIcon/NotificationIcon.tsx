/** @origin UBTConnect.App_Common_Blocks.App_NotificationIcon */
import { OSBlock } from '@/components/ui/os/OSBlock';
import { BottomBarIconBadge } from '@/components/layout/BottomBarIconBadge';
import { NotificationRefresh } from '@/components/notification/NotificationRefresh';
import { UBT_Color, UBT_Icons2 } from '@/lib/ubtConnect/staticEntities';

export interface NotificationIconProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** isLoading of App_IconBadge: the notifications are not synchronised yet (skeleton). */
  isLoading: boolean;
  /** LocalNotifications: the number of unread notifications on the badge. */
  unreadNumber: number;
  /** Datetime of App_NotificationRefresh: the client variable UBTConnect.Notifications_LastChecked. */
  lastChecked: string;
  /** IconClick: the caller opens Notifications or MessageList. */
  onIconClick: () => void;
  /** Updated of App_NotificationRefresh: the caller reads the unread number again. */
  onRefreshUpdated: () => void;
}

/** The bell of the home headers: App_IconBadge (at most 9, icon notifications in neutral-0) and App_NotificationRefresh.
    The flows come from the caller (`useNotificationIcon` of `platform/session`). */
export function NotificationIcon({
  id,
  isLoading,
  unreadNumber,
  lastChecked,
  onIconClick,
  onRefreshUpdated,
}: NotificationIconProps) {
  return (
    <OSBlock name="App_Common_Blocks.App_NotificationIcon" id={id}>
      <BottomBarIconBadge
        isLoading={isLoading}
        badgeNumber={String(unreadNumber)}
        maxNotifications={9}
        iconColor={UBT_Color.Neutral0}
        iconId={UBT_Icons2.Notifications}
        onOnClick={onIconClick}
      />
      <NotificationRefresh datetime={lastChecked} onUpdated={onRefreshUpdated} />
    </OSBlock>
  );
}
