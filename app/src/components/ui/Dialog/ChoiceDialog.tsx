/** @origin UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { UBT_Color, UBT_FontWeight, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { ConfirmDialog } from './ConfirmDialog';

export interface ChoiceDialogProps {
  /** OutSystems instance id of the block (Menu: `PopUp_Logout`); `confirmAction(id)` opens it. */
  id?: string;
  /** Id prefix of the block's own elements (Menu `PopUp_Logout`: `b15`); defaults to `id` without `$`. */
  scope?: string;
  /** StackButtonsVertically: adds `connect-dialog-popup--vertical-buttons`. */
  stackButtonsVertically?: boolean;
  /** Placeholder Placeholder_Header. */
  header?: ReactNode;
  /** Placeholder Placeholder_Body. */
  body?: ReactNode;
  /** Placeholder Placeholder_ButtonLabel (confirm button). */
  confirmLabel?: ReactNode;
  /** Placeholder Placeholder_DismissButtonLabe (dismiss button). */
  dismissLabel?: ReactNode;
}

/* Header and body CustomContainer options (the UBTConnectLibrary records). */
const HEADER_OPTIONS = {
  MarginSize: { BottomSizeId: UBT_Size.Base },
  TextOptions: { Color: UBT_Color.Neutral10, FontWeight: UBT_FontWeight.SemiBold },
};
const BODY_OPTIONS = { MarginSize: { BottomSizeId: UBT_Size.Medium }, TextOptions: { Color: UBT_Color.Neutral10 } };

/** Yes / No question opened with `confirmAction(id)`: ConfirmDialog in a `connect-dialog-popup` container, the header
    (centred) and the body in CustomContainers, both button labels as placeholders. No action of its own. Closed
    markup captured (Menu); the open state follows the compiled view. */
export function ChoiceDialog({
  id,
  scope = (id ?? '').replace('$', ''),
  stackButtonsVertically = false,
  header,
  body,
  confirmLabel,
  dismissLabel,
}: ChoiceDialogProps) {
  const className =
    'connect-dialog-popup connect-dialog-popup--custom-choice' +
    (stackButtonsVertically ? ' connect-dialog-popup--vertical-buttons' : '');
  return (
    <OSBlock name="App_Common_Blocks_PopupDialogs.Dialog_CustomChoice" id={id}>
      <div className={className} data-container="">
        <ConfirmDialog
          widgetId={`${scope}-$b1`}
          scope={`${scope}-b1`}
          // DialogHeader: CustomContainer margin bottom base, neutral 10, semi-bold > text-align-center
          header={
            <CustomContainer options={HEADER_OPTIONS}>
              <div className="text-align-center" data-container="">
                <div>{header}</div>
              </div>
            </CustomContainer>
          }
          // DialogBody: CustomContainer margin bottom medium, neutral 10
          body={
            <CustomContainer options={BODY_OPTIONS}>
              <div>{body}</div>
            </CustomContainer>
          }
          confirmLabel={<div>{confirmLabel}</div>}
          dismissLabel={<div>{dismissLabel}</div>}
        />
      </div>
    </OSBlock>
  );
}
