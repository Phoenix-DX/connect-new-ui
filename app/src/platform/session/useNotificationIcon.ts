import { useState } from 'react';
import { flagValue } from '@/platform/flags';
import { useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getClientVar, useClientVar } from './session';

/** What App_NotificationIcon renders and the handlers of its two children. */
export interface NotificationIconFlow {
  /** isLoading of App_IconBadge: not UBTConnect.Notifications_IsSynched. */
  isLoading: boolean;
  /** LocalNotifications, the BadgeNumber of App_IconBadge. */
  unreadNumber: number;
  /** Datetime of App_NotificationRefresh: UBTConnect.Notifications_LastChecked. */
  lastChecked: string;
  /** IconClick of App_IconBadge. */
  onIconClick: () => void;
  /** Updated of App_NotificationRefresh. */
  onRefreshUpdated: () => void;
}

/** GetUnreadNotificationNumber (Connect2_LegacyShared): the client variable UnreadNotificationsNumber. */
const getUnreadNotificationNumber = () => getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber');

/** The flows of App_NotificationIcon (CountryList, HomeFeed, Notes, Updates_SingleList).
    - The badge is loading while UBTConnect.Notifications_IsSynched is False.
    - OnReady sets LocalNotifications = GetUnreadNotificationNumber. The hook sets it before the first paint, as the
      block did. App_NotificationRefresh Updated (a new Notifications_LastChecked) sets it again.
    - IconClick: GetHasNewNotifications (flag C2NewNotifications, decision D11) → Notifications, else MessageList.
    The page calls this hook and gives the result to NotificationIcon.
    @origin UBTConnect.App_Common_Blocks.App_NotificationIcon */
export function useNotificationIcon(): NotificationIconFlow {
  const navigate = useOsNavigate();
  const isSynched = useClientVar('UBTConnect.Notifications_IsSynched');
  const lastChecked = useClientVar('UBTConnect.Notifications_LastChecked');
  const [localNotifications, setLocalNotifications] = useState(getUnreadNotificationNumber);
  return {
    isLoading: !isSynched,
    unreadNumber: localNotifications,
    lastChecked,
    onIconClick: () => {
      navigate(flagValue('C2NewNotifications') ? `/${APP_ID}/Notifications` : `/${APP_ID}/MessageList`);
    },
    onRefreshUpdated: () => {
      setLocalNotifications(getUnreadNotificationNumber());
    },
  };
}
