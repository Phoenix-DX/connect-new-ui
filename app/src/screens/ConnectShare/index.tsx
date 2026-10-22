import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { Type_ShareObject } from '../../shared/UBTConnect/lib/staticEntities';
import { textToLongInteger } from '../../shared/UBTConnect_Utils/lib/actions';
import { Dialog_AccessRestrictedAction_Legacy } from '../../shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import {
  replaceOnUpcomingNavigation,
  useNavigateBack,
  useOsNavigate,
  useViewState,
  useWasRestoredFromCache,
  TransitionAnimation,
} from '@/platform/navigation';
import { readInputs } from './api';
import { onInitializeSharingScreen } from './components/actions';
import { ScreenBlock_ShareDetail } from './components/ScreenBlock_ShareDetail';

/** Delay of DelayedShowFreeSubscriptionAlertJS (ConnectShare.mvc.js:613-619): "delayed to prevent showing the modal
    before the pin". */
const FREE_SUBSCRIPTION_ALERT_DELAY_MS = 1000;

/** UBTConnect Legacy_Share.ConnectShare (p:UBTConnect.Legacy_Share.ConnectShare.mvc.js, "CS" below: model :1-85, view
    :86-225, controller :226-612), the entry of external share links (D10 a). Unless IsRedirect: ScreenBlock_ShareDetail
    with StatusMessage, an empty Menu and BottomBar and CommonUI_InsideLayout in CommonUI_Elements, then the screen's own
    Dialog_AccessRestrictedAction_Legacy "SubscriptionDenied" (view :142-222).
    The runtime renders the screen only after OnInitialize ends (OutSystems.js:2, the screen controller's
    fireInitialize is awaited before the view is created), so nothing renders before that. */
export default function ConnectShare() {
  const [params] = useSearchParams();
  const { ShareId } = readInputs(params);
  const navigate = useOsNavigate();
  const navigateBack = useNavigateBack();
  const restored = useWasRestoredFromCache();
  // Screen variables (CS model :13-40); the view cache brings them back with the screen (P-BACK).
  const [statusMessage, setStatusMessage] = useViewState('StatusMessage', '');
  const [showFreeSubscriptionAlert, setShowFreeSubscriptionAlert] = useViewState('ShowFreeSubscriptionAlert', false);
  const [isRedirect, setIsRedirect] = useViewState('IsRedirect', false);
  const [redirectTarget, setRedirectTarget] = useViewState('Redirect', { shareObjectTypeId: '', attributesId: '' });
  const [initialized, setInitialized] = useState(false);

  const mounted = useRef(false);
  const alertTimer = useRef<number | undefined>(undefined);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      window.clearTimeout(alertTimer.current);
    };
  }, []);

  /** Action_SetShowFreeSubscriptionAlert(In_ShowFreeSubscriptionAlert) (CS:362-412): when True, ShowFreeSubscriptionAlert
      = True and App_Subscription_ShowUpgradePopUp (opens "SubscriptionDenied"). */
  const action_SetShowFreeSubscriptionAlert = (show: boolean) => {
    if (!show) return;
    setShowFreeSubscriptionAlert(true);
    showUpgradePopUp().catch(raiseToFlowHandler);
  };

  /* ScreenEvent_OnInitialize (CS:254-360). Its first branch (`… && false`, a navigation to the DEV CountryList) never
     runs. WasCurrentViewRestoredFromCache: a restored view keeps its variables when StatusMessage <> "" or
     ShowFreeSubscriptionAlert, else goes back (transition None). Otherwise OnInitializeSharingScreen(ShareId):
     StatusMessage = its StatusMessage; IsRedirect → IsRedirect = True and the redirect type and id are kept for
     OnReady; else DelayedShowFreeSubscriptionAlertJS: after 1 s Action_SetShowFreeSubscriptionAlert(its
     ShowFreeSubscriptionAlert). An exception goes to the flow's handleError (Q3). */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const onInitialize = async () => {
      if (restored) {
        // navigateBack(createTransition(None)) (ConnectShare.mvc.js:293): no screen animation
        if (statusMessage === '' && !showFreeSubscriptionAlert) navigateBack(TransitionAnimation.None);
        return;
      }
      const out = await onInitializeSharingScreen(ShareId);
      setStatusMessage(out.statusMessage);
      if (out.isRedirect) {
        setIsRedirect(true);
        setRedirectTarget({
          shareObjectTypeId: out.redirect_ShareObjectTypeId,
          attributesId: out.redirect_Share_AttributesId,
        });
      } else if (mounted.current) {
        alertTimer.current = window.setTimeout(() => {
          action_SetShowFreeSubscriptionAlert(out.showFreeSubscriptionAlert);
        }, FREE_SUBSCRIPTION_ALERT_DELAY_MS);
      }
    };
    onInitialize()
      .catch(raiseToFlowHandler)
      .finally(() => {
        setInitialized(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Action_Redirect(Redirect_ShareObjectTypeId, Redirect_Share_AttributesId) (CS:444-511): ReplaceOnUpcomingNavigation,
      then by type (transition None): Household, My Household or Update → HouseholdDetails(HouseholdId); OneSchool
      Global → OneSchoolGlobalDetails(In_OneSchoolGlobalId); Feed → FeedItemDetail(FeedItemId, the text id); Supper
      Meeting → SupperMeeting_Details(In_SubdivsionId); the Long Integer ids are TextToInteger of the id. Any other
      type: IsRedirect = False (the share detail shows). */
  const action_Redirect = (shareObjectTypeId: string, attributesId: string) => {
    replaceOnUpcomingNavigation();
    if (
      shareObjectTypeId === Type_ShareObject.Household ||
      shareObjectTypeId === Type_ShareObject.MyHousehold ||
      shareObjectTypeId === Type_ShareObject.Update
    ) {
      navigate('/UBTConnect/HouseholdDetails', { HouseholdId: textToLongInteger(attributesId) });
    } else if (shareObjectTypeId === Type_ShareObject.OneSchoolGlobal) {
      navigate('/UBTConnect/OneSchoolGlobalDetails', { In_OneSchoolGlobalId: textToLongInteger(attributesId) });
    } else if (shareObjectTypeId === Type_ShareObject.Feed) {
      navigate('/UBTConnect/FeedItemDetail', { FeedItemId: attributesId });
    } else if (shareObjectTypeId === Type_ShareObject.SupperMeeting) {
      navigate('/UBTConnect/SupperMeeting_Details', { In_SubdivsionId: textToLongInteger(attributesId) });
    } else {
      setIsRedirect(false);
    }
  };

  // ScreenEvent_OnReady (CS:414-442), once after the first render: IsRedirect → Action_Redirect.
  const readyDone = useRef(false);
  useEffect(() => {
    if (!initialized || readyDone.current) return;
    readyDone.current = true;
    if (isRedirect) action_Redirect(redirectTarget.shareObjectTypeId, redirectTarget.attributesId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized]);

  if (!initialized || isRedirect) return null;
  return (
    <>
      <ScreenBlock_ShareDetail
        id="$b1"
        statusMessage={statusMessage}
        commonUIElements={<CommonUI_InsideLayout id="$b2" />}
      />
      <Dialog_AccessRestrictedAction_Legacy id="SubscriptionDenied" scope="b3" />
    </>
  );
}
