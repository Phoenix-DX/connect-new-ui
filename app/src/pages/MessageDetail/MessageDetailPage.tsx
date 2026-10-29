import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useOsNavigate } from '@/platform/navigation';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { useShellState } from '@/platform/session/session';
import { getHasExtendedShare, getHasNewNotifications } from '@/lib/ubtConnectUtils/actions';
import { Type_ShareObject } from '@/lib/ubtConnect/staticEntities';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import {
  addAuditClickedEvent_NotificationViewEvent,
  addAuditEventDetailEvent_NotificationContactOrganiser,
  getHasAssemble,
  getHasDeceasedProfileAccess,
  getHasNewLDM,
} from './actions';
import { MessageDetailView } from './components/MessageDetailView';
import { ShareObjectDetail_ExtendedShare } from './components/ShareObjectDetail_ExtendedShare';
import { textToLongInteger } from './hooks/messageDetailState';
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
    - Handler_NavigateTo_OrbitEventDetails, _OrbitMilestone, _OrbitHostSurvey and _AssembleDetail open the Orbit and
      Assemble screens (In_FromNotification True for Orbit).
    - Handler_AddAuditAndNavigateTo_EventEmail and _EventDetail audit, then open the LDM screens: the V2 ones when
      GetHasNewLDM (flag C2NewLDM), else the V1 ones.
    - Handler_NavigateTo_ShareObjectDetail opens the shared object by its type; Handler_SubscriptionDenied runs
      App_Subscription_ShowUpgradePopUp.
    - Not built: Share_UI.ShareObjectDetail (flag C2ExtendedShare False) with Feed_Embeded(FeedItemId) in its
      Placeholder_FeedItem and the event SetFeedItemId (Handler_SetFeedItemId): a NotCaptured marker (build note B9). */
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
    onNavigateToOrbitEvent: (memberId, eventId, eventName) => {
      navigate('/UBTConnect/EventDetail', {
        In_EventId: eventId,
        In_EventName: eventName,
        In_FromNotification: true,
        In_MemberId: memberId,
      });
    },
    onNavigateToOrbitMilestone: (milestoneId, eventId, eventName) => {
      navigate('/UBTConnect/MilestoneDetail', {
        In_EventName: eventName,
        In_FromNotification: true,
        In_MilestoneId: milestoneId,
        In_EventId: eventId,
      });
    },
    onNavigateToOrbitHostSurvey: (memberId, eventId, eventName, startDate, endDate) => {
      navigate('/UBTConnect/HostSurvey', {
        In_MemberId: memberId,
        In_EventId: eventId,
        In_EventStartDate: startDate,
        In_EventEndDate: endDate,
        In_EventName: eventName,
      });
    },
    onNavigateToAssembleEvent: (eventParentId, eventInstanceId, eventTypeTitle) => {
      navigate('/UBTConnect/AssembleDetail', {
        EventId: eventInstanceId,
        SeriesId: eventParentId,
        AssembleEventTypeTile: eventTypeTitle,
      });
    },
    onAddAuditAndNavigateToEventEmail: (eventId, eventHostId) => {
      addAuditEventDetailEvent_NotificationContactOrganiser();
      navigate(getHasNewLDM() ? '/UBTConnect/LDM_Email_V2' : '/UBTConnect/LDM_Email', {
        In_EventId: eventId,
        EventHostId: eventHostId,
        In_IsContactOrganiser: false,
        In_IsMessageGuest: true,
      });
    },
    onAddAuditAndNavigateToEventDetail: (eventHostId, eventId) => {
      addAuditClickedEvent_NotificationViewEvent(eventHostId, eventId);
      navigate(getHasNewLDM() ? '/UBTConnect/LDM_EventDetail_V2' : '/UBTConnect/LDM_EventDetail', {
        EventId: eventId,
        EventHostId: eventHostId,
      });
    },
  });

  /** Handler_NavigateTo_ShareObjectDetail(ObjectId, ShareObjectTypeId): Household, Update or My Household open
      HouseholdDetails, OneSchool Global OneSchoolGlobalDetails, Supper Meeting SupperMeeting_Details, Feed
      FeedItemDetail; any other type does nothing. */
  const navigateToShareObjectDetail = (objectId: string, shareObjectTypeId: string) => {
    const T = Type_ShareObject;
    if (shareObjectTypeId === T.Household || shareObjectTypeId === T.Update || shareObjectTypeId === T.MyHousehold) {
      navigate('/UBTConnect/HouseholdDetails', { HouseholdId: textToLongInteger(objectId) });
    } else if (shareObjectTypeId === T.OneSchoolGlobal) {
      navigate('/UBTConnect/OneSchoolGlobalDetails', { In_OneSchoolGlobalId: textToLongInteger(objectId) });
    } else if (shareObjectTypeId === T.SupperMeeting) {
      navigate('/UBTConnect/SupperMeeting_Details', { In_SubdivsionId: textToLongInteger(objectId) });
    } else if (shareObjectTypeId === T.Feed) {
      navigate('/UBTConnect/FeedItemDetail', { FeedItemId: objectId });
    }
  };

  // Placeholder MessageDetails: ShareId = the current (first) row of GetMessageTemplateParametersByMessageTemplateId.
  const shareId = detail.parameters?.[0]?.parameterValue ?? '';
  const shareObjectDetail = getHasExtendedShare() ? (
    <ShareObjectDetail_ExtendedShare
      id="b1-$b5"
      prefix="b1-b5"
      inputs={{ ShareId: shareId, HasAccessToDeceasedHousehold: getHasDeceasedProfileAccess() }}
      onGoToObjectDetail={navigateToShareObjectDetail}
      onSubscriptionDenied={() => void showUpgradePopUp()}
    />
  ) : (
    <NotCaptured name="Share_UI.ShareObjectDetail (b1-$b6): flag C2ExtendedShare False, not built (build note B9)" />
  );

  return (
    <MessageDetailView
      id={BLOCK_ID}
      isLoading={detail.isLoading}
      message={detail.message}
      parameters={detail.parameters}
      showAssembleAction={detail.showAssembleAction}
      hasAssemble={getHasAssemble()}
      shareObjectDetail={shareObjectDetail}
      onClickViewOrbitEvent={detail.onClickViewOrbitEvent}
      onClickViewAssembleEvent={detail.onClickViewAssembleEvent}
      onAdaptiveCardEventExecuted={detail.adaptiveCardViewerOnExecuteAction}
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
