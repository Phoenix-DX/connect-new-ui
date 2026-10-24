import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ActionConfirmationDialog } from '@/platform/feedback/dialogs';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { UBT_Color, UBT_FontWeight, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface InformationDialogProps {
  /** OutSystems instance id of the block (ContactUsDetails: `SubmittedConfirmation`); `confirmAction(id)` opens it. */
  id: string;
  /** Id prefix of the elements of the block (ContactUsDetails `SubmittedConfirmation`: `b19`). */
  scope: string;
  /** Placeholder Placeholder_Header. */
  header?: ReactNode;
  /** Placeholder Placeholder_Body. */
  body?: ReactNode;
  /** Placeholder Placeholder_ButtonLabel (the only button label; ButtonLabel_Dismiss is empty). */
  buttonLabel?: ReactNode;
}

/* The CustomContainer options of the header and the body. */
const HEADER_OPTIONS = {
  MarginSize: { BottomSizeId: UBT_Size.Base },
  TextOptions: { Color: UBT_Color.Neutral10, FontWeight: UBT_FontWeight.SemiBold },
};
const BODY_OPTIONS = { MarginSize: { BottomSizeId: UBT_Size.Medium }, TextOptions: { Color: UBT_Color.Neutral10 } };

/** The information popup that ConfirmAction opens (the block has no client action of its own):
    ActionConfirmationDialog in a `connect-dialog-popup--information` container, the header (centred) and the body in
    CustomContainers, the button label as a placeholder and an empty dismiss label. The closed markup is captured; the
    open state follows the compiled view.
    @origin UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Information */
export function InformationDialog({ id, scope, header, body, buttonLabel }: InformationDialogProps) {
  return (
    <OSBlock name="App_Common_Blocks_PopupDialogs.Dialog_Information" id={id}>
      <div className="connect-dialog-popup connect-dialog-popup--information" data-container="">
        <ActionConfirmationDialog
          widgetId={`${scope}-$b1`}
          scope={`${scope}-b1`}
          // DialogHeader: CustomContainer margin bottom base, neutral 10, semi-bold > text-align-center.
          header={
            <CustomContainer options={HEADER_OPTIONS}>
              <div className="text-align-center" data-container="">
                <div>{header}</div>
              </div>
            </CustomContainer>
          }
          // DialogBody: CustomContainer margin bottom medium, neutral 10.
          body={
            <CustomContainer options={BODY_OPTIONS}>
              <div>{body}</div>
            </CustomContainer>
          }
          // ButtonLabel_Confirm = Placeholder_ButtonLabel; ButtonLabel_Dismiss = Empty.
          confirmLabel={<div>{buttonLabel}</div>}
        />
      </div>
    </OSBlock>
  );
}
