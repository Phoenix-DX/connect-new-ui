// @os-block UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Information
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { ActionConfirmationDialog } from '@/platform/feedback/dialogs';
import { CustomContainer } from '../../../shared/UBTConnectLibrary/CustomContainer';
import { UBT_Color, UBT_FontWeight, UBT_Size } from '../../../shared/UBTConnectLibrary/lib/staticEntities';

export interface Dialog_InformationProps {
  /** OutSystems instance id of the block (ContactUsDetails: `SubmittedConfirmation`); `confirmAction(id)` opens it. */
  id: string;
  /** Id prefix of the block's own elements (ContactUsDetails `SubmittedConfirmation`: `b19`, dom/default.html:193). */
  scope: string;
  /** Placeholder Placeholder_Header. */
  placeholderHeader?: ReactNode;
  /** Placeholder Placeholder_Body. */
  placeholderBody?: ReactNode;
  /** Placeholder Placeholder_ButtonLabel (the only button label; ButtonLabel_Dismiss is empty). */
  placeholderButtonLabel?: ReactNode;
}

/* Header and body CustomContainer options (DI view :140-205). */
const HEADER_OPTIONS = {
  MarginSize: { BottomSizeId: UBT_Size.Base },
  TextOptions: { Color: UBT_Color.Neutral10, FontWeight: UBT_FontWeight.SemiBold },
};
const BODY_OPTIONS = { MarginSize: { BottomSizeId: UBT_Size.Medium }, TextOptions: { Color: UBT_Color.Neutral10 } };

/** Information popup opened with ConfirmAction (analysis/sources/pretty/UBTConnect.App_Common_Blocks_PopupDialogs.
    Dialog_Information.mvc.js, "DI"; view :115-240, no client action of its own): ActionConfirmationDialog in a
    `connect-dialog-popup--information` container, header (centred) and body in CustomContainers, the button label as a
    placeholder and an empty dismiss label. Closed markup captured (dom/default.html:189-198); the open state follows
    the compiled view. */
export function Dialog_Information({
  id,
  scope,
  placeholderHeader,
  placeholderBody,
  placeholderButtonLabel,
}: Dialog_InformationProps) {
  return (
    <OSBlock name="App_Common_Blocks_PopupDialogs.Dialog_Information" id={id}>
      <div className="connect-dialog-popup connect-dialog-popup--information" data-container="">
        <ActionConfirmationDialog
          widgetId={`${scope}-$b1`}
          scope={`${scope}-b1`}
          // DialogHeader (DI:142-183): CustomContainer margin bottom base, neutral 10, semi-bold > text-align-center
          header={
            <CustomContainer options={HEADER_OPTIONS}>
              <div className="text-align-center" data-container="">
                <div>{placeholderHeader}</div>
              </div>
            </CustomContainer>
          }
          // DialogBody (DI:185-218): CustomContainer margin bottom medium, neutral 10
          body={
            <CustomContainer options={BODY_OPTIONS}>
              <div>{placeholderBody}</div>
            </CustomContainer>
          }
          // ButtonLabel_Confirm = Placeholder_ButtonLabel; ButtonLabel_Dismiss = Empty (DI:220-230)
          confirmLabel={<div>{placeholderButtonLabel}</div>}
        />
      </div>
    </OSBlock>
  );
}
