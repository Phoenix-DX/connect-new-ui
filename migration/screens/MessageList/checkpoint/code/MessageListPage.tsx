import { useState } from 'react';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useOsNavigate } from '@/platform/navigation';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { useShellState } from '@/platform/session/session';
import { MessageListView } from './components/MessageListView';
import { useMessageList } from './hooks/useMessageList';

/** @origin UBTConnect.Legacy_MyNotificationsFlow.MessageList
    The legacy list of messages: the message list block (instance `$b1`) with its flows (useMessageList), the bottom
    bar (BottomBarMenu in a container) only when signed in, and CommonUI_InsideLayout. OnReady runs
    ClearAllNotifications (UBTConnect_Utils): the Firebase plugin is not available on the web, so it does nothing
    (rule 14). Layout_OnEventNotificationReceived sets Trigger_PullToRefresh, but no widget of the view raises it: it
    is not wired, and the trigger stays False. */
export default function MessageList() {
  const { signedIn } = useShellState();
  const navigate = useOsNavigate();
  const [triggerPullToRefresh, setTriggerPullToRefresh] = useState(false);
  const list = useMessageList(
    { signedIn, triggerPullToRefresh },
    {
      onNavigateToMessageDetail: (messageInstanceId) => {
        navigate('/UBTConnect/MessageDetail', { MessageInstanceId: messageInstanceId });
      },
      onPullToRefreshTriggered: () => {
        setTriggerPullToRefresh(false);
      },
    },
  );
  const { onBackNavigation, ...view } = list;
  return (
    <MessageListView
      id="$b1"
      signedIn={signedIn}
      {...view}
      backNavigationHandler={<BackNavigationHandler id="b1-$b15" onBackNavigation={onBackNavigation} />}
      bottomBar={
        signedIn ? (
          <div data-container="">
            <BottomBar id="$b2" />
          </div>
        ) : undefined
      }
      commonUIElements={<CommonUiLayout id="$b3" />}
    />
  );
}
