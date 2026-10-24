import { OSBlock } from '@/components/ui/os/OSBlock';
import { NotCaptured } from '@/platform/feedback/NotCaptured';

/** @origin Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New
    An OSWidgets.Popup "popup-dialog orbit-popup-new" shown by In_ShowPopUp. Every popup of ScreenBlock_HostSurvey
    opens from the data steps (Cancel, Delete, NoInfo, ReturnNavigation, ReturnBack), which no capture shows (HostSurvey
    Q2): closed, the block renders its empty wrapper as captured (dom/default.html:692-701); open, a NotCaptured
    marker. */
export function Orbit_ConfirmationPopUp_New({ id, inShowPopUp }: { id: string; inShowPopUp: boolean }) {
  return (
    <OSBlock name="Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New" id={id}>
      {inShowPopUp && <NotCaptured name={`Orbit_ConfirmationPopUp_New ${id} (host survey data steps, Q2)`} />}
    </OSBlock>
  );
}
