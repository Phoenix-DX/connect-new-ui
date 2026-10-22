// @os-block NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog
// @os-block UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation
import { createPortal } from 'react-dom';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { usePopupWidget } from '@/components/ui/os/OSPopup';
import { useExitConfirmation } from './exitConfirmation';

/* UBTConnect App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation: ExitConfirmationDialog with Force=True, texts
   "Leave App" / "Are you sure you wish to leave the Connect app?" / Yes / No (HF p:UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation.mvc.js:125-250).
   HomeFeed and Login render it where the capture has it; `id` is the block instance id of that screen.
   Closed markup: captured (HF dom:935-943). Open markup is not captured (U21): it follows the compiled view
   (p:NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog.mvc.js:143-345), the OSUI popup markup captured on
   HouseholdDetails (dom:1392-1398) and CopyClassesAcrossPortal (NH:339-357), which gives the portal the classes of
   the dialog root and of its parent and `display: contents`. */
export function DialogExitConfirmation({ id = '$b11' }: { id?: string }) {
  const { showDialog, yes, no } = useExitConfirmation(true);
  usePopupWidget(showDialog); // OSWidgets.Popup ShowPopup = ShowDialog (ExitConfirmationDialog.mvc.js)
  const scope = id.replace(/^\$/, '');
  const dialog = `${scope}-b1`;

  return (
    <OSBlock name="App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation" id={id}>
      <div className="connect-dialog-popup" data-container="">
        <OSBlock name="ConfirmationDialogs.ExitConfirmationDialog" id={`${scope}-$b1`}>
          <div className="dx-confirmation-dialog dx-exit-confirmation-dialog" data-container="" id={`${dialog}-Root`}>
            {showDialog && (
              <OSBlock name="NavigationHandler.PreventBackNavigation" id={`${dialog}-$b1`}>
                <OSBlock name="NavigationHandler.BackNavigationHandler" id={`${dialog}-b1-$b1`} />
              </OSBlock>
            )}
            <OSBlock name="NavigationHandler.BackNavigationHandler" id={`${dialog}-$b2`} />
          </div>
        </OSBlock>
      </div>
      {showDialog &&
        createPortal(
          <div className="portal-class connect-dialog-popup" style={{ display: 'contents' }}>
            <div className="dx-confirmation-dialog dx-exit-confirmation-dialog">
              <div className="popup-backdrop" data-popup-backdrop="">
                <div
                  aria-modal="true"
                  className="popup-dialog popup-dialog"
                  data-popup=""
                  id={`${dialog}-Popup`}
                  role="dialog"
                >
                  <div className="popup-content">
                    <div data-container="">
                      <div className="dx-dialog-header" id={`${dialog}-DialogHeader`}>
                        <div className="text-align-center" data-container="">
                          <DialogText id={`${scope}-$b2`} text="Leave App" />
                        </div>
                      </div>
                      <div className="dx-dialog-body" id={`${dialog}-DialogBody`}>
                        <DialogText id={`${scope}-$b3`} text="Are you sure you wish to leave the Connect app?" />
                      </div>
                      <div className="dx-dialog-footer" data-container="">
                        <button className="btn btn-primary" data-button="" type="button" onClick={yes}>
                          <div id={`${dialog}-ButtonLabel_Confirm`}>Yes</div>
                        </button>
                        <button className="btn" data-button="" type="button" onClick={no}>
                          <div id={`${dialog}-ButtonLabel_Dismiss`}>No</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </OSBlock>
  );
}

/* BasePatterns.CustomContainer with text color Neutral10 and font size Base: class order and cursor as every captured
   CustomContainer (e.g. ContactUsMenu dom: `ubt-custom-container text-neutral-10 font-size-s …`, HF dom:103-104). */
function DialogText({ id, text }: { id: string; text: string }) {
  return (
    <OSBlock name="BasePatterns.CustomContainer" id={id}>
      <div
        className="ubt-custom-container text-neutral-10 font-size-base"
        id={`${id.replace('$', '')}-Content`}
        style={{ cursor: 'pointer' }}
      >
        {text}
      </div>
    </OSBlock>
  );
}
