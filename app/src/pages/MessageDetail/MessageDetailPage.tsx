import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useOsNavigate } from '@/platform/navigation';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { useShellState } from '@/platform/session/session';
import { getHasNewNotifications } from '@/shared/UBTConnect_Utils/lib/actions';
import { MessageDetailView } from './components/MessageDetailView';
import { useMessageDetail } from './hooks/useMessageDetail';
import { readMessageDetailInputs } from './inputs';

/** Instance id of ScreenBlock_MessageDetail on the screen. */
const BLOCK_ID = '$b1';

/** @origin UBTConnect.Legacy_MyNotificationsFlow.MessageDetail
    One message of the in-app notifications. ScreenBlock_MessageDetail (its flows in useMessageDetail, its view in
    MessageDetailView) with BottomBarMenu in its BottomBar only when signed in, and CommonUI_InsideLayout with a
    BackNavigationHandler in its CommonUI_Elements.
    - Handler_NavigateTo_MessageList: GetHasNewNotifications (flag C2NewNotifications) goes to Notifications, else to
      MessageList.
    - Handler_NavigateTo_Login goes to Login.
    - The other handlers (Orbit, Assemble, LDM, share object detail, SetFeedItemId, SubscriptionDenied) belong to the
      parts that are not captured (Q1, Q2): not wired. */
export default function MessageDetail() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readMessageDetailInputs(params), [params]);
  const { signedIn } = useShellState();
  const navigate = useOsNavigate();
  const detail = useMessageDetail(inputs, {
    onNavigateToMessageList: () => {
      navigate(getHasNewNotifications() ? '/UBTConnect/Notifications' : '/UBTConnect/MessageList');
    },
    onNavigateToLogin: () => {
      navigate('/UBTConnect/Login');
    },
  });

  return (
    <MessageDetailView
      id={BLOCK_ID}
      isLoading={detail.isLoading}
      message={detail.message}
      bottomBar={signedIn ? <BottomBar id="$b3" /> : undefined}
      commonUIElements={
        <>
          <CommonUiLayout id="$b4" />
          <BackNavigationHandler
            id="$b5"
            onBackNavigation={(event) => {
              // Handler_BackNavigationHandlerBackNavigation: CheckIfInvalidLocationJS compares the target pathname
              // with "/" + GetEntryEspaceName() + "/"; when equal, PreventNavigation and go to HomeFeed.
              if (event.location.pathname === '/UBTConnect/') {
                event.preventDefault();
                navigate('/UBTConnect/HomeFeed');
              }
            }}
          />
        </>
      }
    />
  );
}
