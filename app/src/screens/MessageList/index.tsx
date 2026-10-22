import { useState } from 'react';
import { BottomBarMenu } from '@/shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { useOsNavigate } from '@/platform/navigation';
import { useShellState } from '@/platform/session/session';
import { ScreenBlock_MessageList } from './components/ScreenBlock_MessageList';

/** UBTConnect Legacy_MyNotificationsFlow.MessageList (p:UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc.js: model
    :1-66, view :68-273, controller :275-591). Renders ScreenBlock_MessageList with Trigger_PullToRefresh; the bottom
    bar (BottomBarMenu in a container) only when signed in; CommonUI_InsideLayout. OnReady runs ClearAllNotifications
    (UBTConnect_Utils): the Firebase plugin is unavailable on the web, so it does nothing (rule 14).
    Layout_OnEventNotificationReceived (sets Trigger_PullToRefresh) has no caller in the view: not wired. */
export default function MessageList() {
  const { signedIn } = useShellState();
  const navigate = useOsNavigate();
  const [triggerPullToRefresh, setTriggerPullToRefresh] = useState(false);
  return (
    <ScreenBlock_MessageList
      id="$b1"
      triggerPullToRefresh={triggerPullToRefresh}
      bottomBar={
        signedIn ? (
          <div data-container="">
            <BottomBarMenu id="$b2" />
          </div>
        ) : undefined
      }
      commonUIElements={<CommonUI_InsideLayout id="$b3" />}
      onNavigateToMessageDetail={(messageInstanceId) => {
        navigate('/UBTConnect/MessageDetail', { MessageInstanceId: messageInstanceId });
      }}
      onPullToRefreshTriggered={() => {
        setTriggerPullToRefresh(false);
      }}
    />
  );
}
