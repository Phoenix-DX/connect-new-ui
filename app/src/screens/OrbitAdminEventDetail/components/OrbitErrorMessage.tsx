// @os-block Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.OrbitErrorMessage
import { OSBlock } from '@/components/ui/os/OSBlock';
import { AdminPopup } from './AdminPopup';

export interface OrbitErrorMessageProps {
  /** OutSystems instance id of the block (`b1-$b6`). */
  id: string;
  /** IsShowMessage. */
  isShowMessage: boolean;
  /** DisplayMessage. */
  displayMessage: string;
  /** Event ClickedOk. */
  onClickedOk: () => void;
}

/** Orbit error popup (capture/survey-UBTConnect.json sources `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks
    .OrbitErrorMessage.mvc.js` = OEM; view :149-254, controller :279-311). Root container `subscription-message`
    (componentDidUpdate → CopyClassesAcrossPortal(Root, UnknownErrorPopup), :279-302) with the Popup
    "popup-dialog onTop padding-x-l padding-y-l" (ShowPopup = IsShowMessage): the heading "Oops! Something went
    wrong", DisplayMessage, and the Ok link that triggers ClickedOk (:222-254). The block sits in the
    `backwards-compatibility` container of ScreenBlock_AdminEventDetail, Root's grandparent. */
export function OrbitErrorMessage({ id, isShowMessage, displayMessage, onClickedOk }: OrbitErrorMessageProps) {
  const prefix = id.replace('$', '');
  return (
    <OSBlock name="Orbit_Generic_Blocks.OrbitErrorMessage" id={id}>
      <div className="subscription-message" data-container="" id={`${prefix}-Root`}>
        <AdminPopup
          id={`${prefix}-UnknownErrorPopup`}
          showPopup={isShowMessage}
          style="popup-dialog onTop padding-x-l padding-y-l"
          rootClassName="subscription-message"
          rootParentClassName="backwards-compatibility"
        >
          <div className="heading3 bold common-error-message-color" data-container="">
            Oops! Something went wrong
          </div>
          <div className="margin-bottom-l margin-top-base" data-container="">
            <span data-expression="">{displayMessage}</span>
          </div>
          <div className="text-align-right" data-container="">
            <a
              data-link=""
              href="#"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClickedOk();
              }}
            >
              <div
                className="text-primary padding-y-s padding-x-base action confirm margin-left-base"
                data-container=""
              >
                Ok
              </div>
            </a>
          </div>
        </AdminPopup>
      </div>
    </OSBlock>
  );
}
