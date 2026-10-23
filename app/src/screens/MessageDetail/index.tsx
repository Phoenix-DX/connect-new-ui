import { useSearchParams } from 'react-router';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { getHasNewNotifications } from '@/shared/UBTConnect_Utils/lib/actions';
import { useOsNavigate } from '@/platform/navigation';
import { useShellState } from '@/platform/session/session';
import { readMessageDetailInputs } from './api';
import { ScreenBlock_MessageDetail } from './components/ScreenBlock_MessageDetail';

/** UBTConnect Legacy_MyNotificationsFlow.MessageDetail (p:UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc.js:
    view :160-455, controller :456-1240). Renders ScreenBlock_MessageDetail with the inputs; the bottom bar
    (BottomBarMenu) only when signed in; CommonUI_InsideLayout and a BackNavigationHandler.
    Handler_NavigateTo_MessageList (:693-725): GetHasNewNotifications (flag C2NewNotifications) → Notifications, else
    MessageList. Handler_NavigateTo_Login (:552-575) → Login. The other handlers (Orbit, Assemble, LDM, share object
    detail, SetFeedItemId, SubscriptionDenied) belong to the parts not captured (Q1, Q2): not wired. */
export default function MessageDetail() {
  const [params] = useSearchParams();
  const inputs = readMessageDetailInputs(params);
  const { signedIn } = useShellState();
  const navigate = useOsNavigate();
  return (
    <ScreenBlock_MessageDetail
      id="$b1"
      {...inputs}
      bottomBar={signedIn ? <BottomBar id="$b3" /> : undefined}
      commonUIElements={
        <>
          <CommonUiLayout id="$b4" />
          <BackNavigationHandler
            id="$b5"
            onBackNavigation={(event) => {
              // Handler_BackNavigationHandlerBackNavigation (:1058-1095): CheckIfInvalidLocationJS compares the target
              // pathname with "/" + GetEntryEspaceName() + "/"; when equal, PreventNavigation and go to HomeFeed.
              if (event.location.pathname === '/UBTConnect/') {
                event.preventDefault();
                navigate('/UBTConnect/HomeFeed');
              }
            }}
          />
        </>
      }
      onNavigateToMessageList={() => {
        navigate(getHasNewNotifications() ? '/UBTConnect/Notifications' : '/UBTConnect/MessageList');
      }}
      onNavigateToLogin={() => {
        navigate('/UBTConnect/Login');
      }}
    />
  );
}
