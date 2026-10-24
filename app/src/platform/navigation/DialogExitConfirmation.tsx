/** @origin UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation */
// @os-block NavigationHandler.ConfirmationDialogs.ExitConfirmationDialog
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DialogView } from '@/platform/feedback/dialogs/dialogViews';
import { useExitConfirmation } from './exitConfirmation';

/** UBTConnect App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation: NavigationHandler ExitConfirmationDialog with
    Force True and the texts "Leave App" / "Are you sure you wish to leave the Connect app?" / Yes / No. HomeFeed and
    Login render it where the capture has it; `id` is the block instance id of that screen. Closed markup captured
    (HomeFeed). The open markup is not captured: it is the dialog of components/ui/Dialog (given through app/), with
    the root class `dx-exit-confirmation-dialog`. The flow is useExitConfirmation. */
export function DialogExitConfirmation({ id = '$b11' }: { id?: string }) {
  const { showDialog, yes, no } = useExitConfirmation(true);
  const scope = id.replace(/^\$/, '');
  const dialog = `${scope}-b1`;

  return (
    <OSBlock name="App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation" id={id}>
      <div className="connect-dialog-popup" data-container="">
        <DialogView
          blockName="ConfirmationDialogs.ExitConfirmationDialog"
          blockId={`${scope}-$b1`}
          rootClassName="dx-exit-confirmation-dialog"
          idPrefix={dialog}
          open={showDialog}
          header={
            <div className="text-align-center" data-container="">
              <DialogText id={`${scope}-$b2`} text="Leave App" />
            </div>
          }
          body={<DialogText id={`${scope}-$b3`} text="Are you sure you wish to leave the Connect app?" />}
          confirmLabel="Yes"
          dismissLabel="No"
          onConfirm={yes}
          onDismiss={no}
        >
          {showDialog && (
            <OSBlock name="NavigationHandler.PreventBackNavigation" id={`${dialog}-$b1`}>
              <OSBlock name="NavigationHandler.BackNavigationHandler" id={`${dialog}-b1-$b1`} />
            </OSBlock>
          )}
          <OSBlock name="NavigationHandler.BackNavigationHandler" id={`${dialog}-$b2`} />
        </DialogView>
      </div>
    </OSBlock>
  );
}

/* BasePatterns.CustomContainer with text color Neutral10 and font size Base: class order and cursor as every captured
   CustomContainer (for example ContactUsMenu: `ubt-custom-container text-neutral-10 font-size-s …`). */
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
