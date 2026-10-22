// @os-block UBTConnect.App_Common_Blocks.App_NotificationIcon
import { useState } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getClientVar, useClientVar } from '@/platform/session/session';
import { getHasNewNotifications } from '../../UBTConnect_Utils/lib/actions';
import { App_IconBadge } from '../App_IconBadge';
import { App_NotificationRefresh } from '../App_NotificationRefresh';
import { UBT_Color, UBT_Icons2 } from '../lib/staticEntities';

export interface App_NotificationIconProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** GetUnreadNotificationNumber (Connect2_LegacyShared): the client variable UnreadNotificationsNumber. */
const getUnreadNotificationNumber = () => getClientVar('Connect2_LegacyShared.UnreadNotificationsNumber');

export function App_NotificationIcon({ id }: App_NotificationIconProps) {
  const navigate = useOsNavigate();
  const isSynched = useClientVar('UBTConnect.Notifications_IsSynched');
  const lastChecked = useClientVar('UBTConnect.Notifications_LastChecked');
  /* LocalNotifications: set by OnReady, and again when App_NotificationRefresh reports a new LastChecked. */
  const [localNotifications, setLocalNotifications] = useState(getUnreadNotificationNumber);
  /* IconClick: GetHasNewNotifications (C2NewNotifications, decision D11) → Notifications, else MessageList. */
  const iconClick = () => {
    navigate(getHasNewNotifications() ? `/${APP_ID}/Notifications` : `/${APP_ID}/MessageList`);
  };
  return (
    <OSBlock name="App_Common_Blocks.App_NotificationIcon" id={id}>
      <App_IconBadge
        isLoading={!isSynched}
        badgeNumber={String(localNotifications)}
        maxNotifications={9}
        iconColor={UBT_Color.Neutral0}
        iconId={UBT_Icons2.Notifications}
        onOnClick={iconClick}
      />
      <App_NotificationRefresh
        datetime={lastChecked}
        onUpdated={() => {
          setLocalNotifications(getUnreadNotificationNumber());
        }}
      />
    </OSBlock>
  );
}
