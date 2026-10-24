/** @origin UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy */
import { DialogAccessRestrictedAction } from './DialogAccessRestrictedAction';

export interface DialogAccessRestrictedActionLegacyProps {
  /** Instance id of the legacy block (BookmarksByGroup: `b1-FreeSubscriptionAlert`); `confirmAction(id)` opens it. */
  id: string;
  /** Id prefix of the block's own elements (BookmarksByGroup: `b1-b20`); defaults to `id` without `$`. */
  scope?: string;
}

/** Dialog_AccessRestrictedAction for the legacy (Connect2) screens: its block element around
    DialogAccessRestrictedAction with the instance id `<scope>-$b1` and In_ExtendedClass
    `connect-legacy-compatibily-containter`, which sets the UBTConnectLibrary CSS variables for the legacy screens
    (UBTConnectLibrary.UBTConnectBase.css). No input, event or action of its own. A module of its own, next to the
    platform dialog, so that only the legacy screens load it (the app start loads DialogAccessRestrictedAction). The
    block element is the markup of components/ui/os OSBlock, written out: platform/ may not import components/ (plan v2
    section 2.4, rule 8). */
export function DialogAccessRestrictedActionLegacy({
  id,
  scope = id.replace('$', ''),
}: DialogAccessRestrictedActionLegacyProps) {
  return (
    <div
      className="OSBlockWidget"
      data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy"
      id={id}
    >
      <DialogAccessRestrictedAction id={`${scope}-$b1`} extendedClass="connect-legacy-compatibily-containter" />
    </div>
  );
}
