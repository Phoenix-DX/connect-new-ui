// @os-block UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { ActionConfirmationDialog } from '../../../shell/dialogs';
import { CustomContainer } from '../../UBTConnectLibrary/CustomContainer';
import { UBT_Color, UBT_FontWeight, UBT_Size } from '../../UBTConnectLibrary/lib/staticEntities';

export interface Dialog_CustomChoiceProps {
  /** OutSystems instance id of the block (Menu: `PopUp_Logout`); `confirmAction(id)` opens it. */
  id?: string;
  /** Id prefix of the block's own elements (Menu `PopUp_Logout`: `b15`); defaults to `id` without `$`. */
  scope?: string;
  /** StackButtonsVertically: adds `connect-dialog-popup--vertical-buttons`. */
  stackButtonsVertically?: boolean;
  /** Placeholder Placeholder_Header. */
  placeholderHeader?: ReactNode;
  /** Placeholder Placeholder_Body. */
  placeholderBody?: ReactNode;
  /** Placeholder Placeholder_ButtonLabel (confirm button). */
  placeholderButtonLabel?: ReactNode;
  /** Placeholder Placeholder_DismissButtonLabe (dismiss button). */
  placeholderDismissButtonLabe?: ReactNode;
}

/* Header and body CustomContainer options (UBTConnectModel.staticEntities.uBT_* are the UBTConnectLibrary records). */
const HEADER_OPTIONS = {
  MarginSize: { BottomSizeId: UBT_Size.Base },
  TextOptions: { Color: UBT_Color.Neutral10, FontWeight: UBT_FontWeight.SemiBold },
};
const BODY_OPTIONS = { MarginSize: { BottomSizeId: UBT_Size.Medium }, TextOptions: { Color: UBT_Color.Neutral10 } };

/** Yes / No question opened with ConfirmAction (p:migration/screens/Menu/analysis/sources/pretty/UBTConnect.
    App_Common_Blocks_PopupDialogs.Dialog_CustomChoice.mvc.js, "DCC"; view :131-308): ActionConfirmationDialog in a
    `connect-dialog-popup` container, header (centred) and body in CustomContainers, both button labels as placeholders.
    No action of its own. Closed markup captured (Menu default dom:686-701); the open state follows the compiled view. */
export function Dialog_CustomChoice({
  id,
  scope = (id ?? '').replace('$', ''),
  stackButtonsVertically = false, // DCC:13-15
  placeholderHeader,
  placeholderBody,
  placeholderButtonLabel,
  placeholderDismissButtonLabe,
}: Dialog_CustomChoiceProps) {
  // Container style (DCC:146-152)
  const className =
    'connect-dialog-popup connect-dialog-popup--custom-choice' +
    (stackButtonsVertically ? ' connect-dialog-popup--vertical-buttons' : '');
  return (
    <OSBlock name="App_Common_Blocks_PopupDialogs.Dialog_CustomChoice" id={id}>
      <div className={className} data-container="">
        <ActionConfirmationDialog
          widgetId={`${scope}-$b1`}
          scope={`${scope}-b1`}
          // DialogHeader (DCC:176-234): CustomContainer margin bottom base, neutral 10, semi-bold > text-align-center
          header={
            <CustomContainer options={HEADER_OPTIONS}>
              <div className="text-align-center" data-container="">
                <div>{placeholderHeader}</div>
              </div>
            </CustomContainer>
          }
          // DialogBody (DCC:236-283): CustomContainer margin bottom medium, neutral 10
          body={
            <CustomContainer options={BODY_OPTIONS}>
              <div>{placeholderBody}</div>
            </CustomContainer>
          }
          // ButtonLabel_Confirm / ButtonLabel_Dismiss (DCC:285-305)
          confirmLabel={<div>{placeholderButtonLabel}</div>}
          dismissLabel={<div>{placeholderDismissButtonLabe}</div>}
        />
      </div>
    </OSBlock>
  );
}
