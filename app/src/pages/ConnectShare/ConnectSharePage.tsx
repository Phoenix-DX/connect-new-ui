import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { DialogAccessRestrictedActionLegacy } from '@/platform/feedback/dialogs';
import { ShareDetailView } from './components/ShareDetailView';
import { useConnectShare } from './hooks/useConnectShare';
import { readConnectShareInputs } from './inputs';

/** @origin UBTConnect.Legacy_Share.ConnectShare
    The ConnectShare route, the entry of the external share links (D10 a). Nothing renders before OnInitialize ends, or
    while the screen goes to the shared object (IsRedirect). Otherwise the share detail (ScreenBlock_ShareDetail) with
    StatusMessage, an empty Menu and BottomBar and CommonUI_InsideLayout in CommonUI_Elements, then the screen's own
    Dialog_AccessRestrictedAction_Legacy "SubscriptionDenied". The flows are in useConnectShare. */
export default function ConnectShare() {
  const [params] = useSearchParams();
  const { isInitialized, state } = useConnectShare(readConnectShareInputs(params));

  if (!isInitialized || state.isRedirect) return null;
  return (
    <>
      <ShareDetailView id="$b1" statusMessage={state.statusMessage} commonUIElements={<CommonUiLayout id="$b2" />} />
      <DialogAccessRestrictedActionLegacy id="SubscriptionDenied" scope="b3" />
    </>
  );
}
