// @os-block UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { NavigationEvent } from '../../NavigationHandler/lib/actions';
import { NavigationConfirmationDialog } from '../../NavigationHandler/NavigationConfirmationDialog';
import { CustomContainer } from '../../UBTConnectLibrary/CustomContainer';
import { UBT_Color, UBT_FontWeight, UBT_Size } from '../../UBTConnectLibrary/lib/staticEntities';

export interface Dialog_NavigationProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** ConfirmLabel: text of the confirm button. */
  confirmLabel?: string;
  /** DIsmissLabel: text of the dismiss button. */
  dIsmissLabel?: string;
  /** Event Event_OnBackNavigation(Event_NavigationEvent): the Navigation event of NavigationConfirmationDialog; the
      caller prevents the navigation (PreventNavigation) to ask for confirmation. */
  onEventOnBackNavigation?: (navigationEvent: NavigationEvent) => void;
  /** Placeholder Placeholder_Header. */
  placeholderHeader?: ReactNode;
  /** Placeholder Placeholder_Body. */
  placeholderBody?: ReactNode;
}

/* Header and body CustomContainer options (UBTConnectModel.staticEntities.uBT_* are the UBTConnectLibrary records). */
const HEADER_OPTIONS = {
  MarginSize: { BottomSizeId: UBT_Size.Base },
  TextOptions: { Color: UBT_Color.Neutral10, FontWeight: UBT_FontWeight.SemiBold },
};
const BODY_OPTIONS = { MarginSize: { BottomSizeId: UBT_Size.Medium }, TextOptions: { Color: UBT_Color.Neutral10 } };

/** Leave-screen confirmation of the app (p:migration/blocks/sources/UBTConnect.App_Common_Blocks_PopupDialogs.
    Dialog_Navigation.mvc.js, "DN"; view :141-330): NavigationConfirmationDialog in a `connect-dialog-popup` container,
    header (centred) and body in CustomContainers, the labels as expressions. Never captured: built from the compiled
    view. */
export function Dialog_Navigation({
  id,
  confirmLabel = 'Yes', // DN:12-14
  dIsmissLabel = 'No', // DN:18-20
  onEventOnBackNavigation,
  placeholderHeader,
  placeholderBody,
}: Dialog_NavigationProps) {
  return (
    <OSBlock name="App_Common_Blocks_PopupDialogs.Dialog_Navigation" id={id}>
      <div className="connect-dialog-popup connect-dialog-popup--navigation" data-container="">
        <NavigationConfirmationDialog
          // Navigation → Event_OnBackNavigation (DN:170-182)
          onNavigation={onEventOnBackNavigation}
          // DialogHeader (DN:195-253): CustomContainer margin bottom base, neutral 10, semi-bold > text-align-center
          dialogHeader={
            <CustomContainer options={HEADER_OPTIONS}>
              <div className="text-align-center" data-container="">
                <div>{placeholderHeader}</div>
              </div>
            </CustomContainer>
          }
          // DialogBody (DN:255-302): CustomContainer margin bottom medium, neutral 10
          dialogBody={
            <CustomContainer options={BODY_OPTIONS}>
              <div>{placeholderBody}</div>
            </CustomContainer>
          }
          // ButtonLabel_Confirm / ButtonLabel_Dismiss (DN:304-325): expressions of the inputs
          buttonLabelConfirm={<span data-expression="">{confirmLabel}</span>}
          buttonLabelDismiss={<span data-expression="">{dIsmissLabel}</span>}
        />
      </div>
    </OSBlock>
  );
}
