// @os-block UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DialogAccessRestrictedAction } from '@/platform/feedback/dialogs';

export interface Dialog_AccessRestrictedAction_LegacyProps {
  /** OutSystems instance id of the block (BookmarksByGroup: `b1-FreeSubscriptionAlert`); `confirmAction(id)` opens it. */
  id?: string;
  /** Id prefix of the block's own elements (BookmarksByGroup: `b1-b20`); defaults to `id` without `$`. */
  scope?: string;
}

/** Dialog_AccessRestrictedAction for the legacy (Connect2) screens
    (p:migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.
    Dialog_AccessRestrictedAction_Legacy.mvc.js, view :115-145): the dialog with In_ExtendedClass
    `connect-legacy-compatibily-containter` (:130), which sets the UBTConnectLibrary CSS variables for legacy pages
    (UBTConnectLibrary.UBTConnectBase.css:82). No input, event or action of its own. */
export function Dialog_AccessRestrictedAction_Legacy({
  id,
  scope = (id ?? '').replace('$', ''),
}: Dialog_AccessRestrictedAction_LegacyProps) {
  return (
    <OSBlock name="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy" id={id}>
      <DialogAccessRestrictedAction id={`${scope}-$b1`} extendedClass="connect-legacy-compatibily-containter" />
    </OSBlock>
  );
}
