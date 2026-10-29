import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useNavigateBack } from '@/platform/navigation';
import { passportScanContainerId, ScreenBlock_PassportScan } from './components/ScreenBlock_PassportScan';
import { usePassportScan } from './hooks/usePassportScan';
import { readPassportScanInputs } from './inputs';

/** The OutSystems instance id of ScreenBlock_PassportScan on the screen (uuid 0, alias 1). */
const BLOCK_ID = '$b1';

/** @origin UBTConnect.Legacy_OrbitEventsFlow.PassportScan
    The host of the Orbit Passport portal (PassportScan.mvc.js view :150-218): ScreenBlock_PassportScan with
    TargetMemberId = TargetId and LoginMemberId, and CommonUI_InsideLayout in its placeholder CommonUI_Elements. The
    event Close runs Handler_OnClose: back to the previous screen (:227-240). No lifecycle event and no call of the
    screen's own; the block's flows are in usePassportScan. */
export default function PassportScan() {
  const [params] = useSearchParams();
  const { TargetId, LoginMemberId } = readPassportScanInputs(params);
  const navigateBack = useNavigateBack();
  const flows = usePassportScan({ TargetMemberId: TargetId, LoginMemberId }, passportScanContainerId(BLOCK_ID), {
    // Handler_OnClose: Destination (PreviousScreen)
    onClose: () => {
      navigateBack();
    },
  });
  return (
    <ScreenBlock_PassportScan
      id={BLOCK_ID}
      onBackNavigation={flows.onBackNavigation}
      commonUIElements={<CommonUiLayout id="$b2" />}
    />
  );
}
