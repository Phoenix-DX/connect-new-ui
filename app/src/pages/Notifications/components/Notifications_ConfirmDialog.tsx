/** @origin UBTConnect.App_Notifications.Notifications_ConfirmDialog */
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { usePopupWidget } from '@/components/ui/os/OSPopup';
import { CircleButton } from '@/components/ui/CircleButton';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import {
  UBT_AlignItems,
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_JustifyContent,
  UBT_Shape,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { UBT_Icons2_Notifications } from './staticEntities';

/** The OutSystems Popup widget (OSWidgets.Popup) with Style "popup-dialog", as NotificationsList and MoreActionSheet
    use it (NotificationsList.mvc.js:504-511, MoreActionSheet.mvc.js:700-707): closed it renders nothing (TST
    dom/default.html has no popup), open it renders in <body> with the popup markup of the widget (as
    components/ui/Popup). usePopupWidget keeps the page side effects of the widget. */
export function NotificationsPopup({ showPopup, children }: { showPopup: boolean; children: ReactNode }) {
  usePopupWidget(showPopup);
  if (!showPopup) return null;
  return createPortal(
    <div className="portal-class" style={{ display: 'inline' }}>
      <div>
        <div className="popup-backdrop" data-popup-backdrop="">
          <div aria-modal="true" className="popup-dialog" data-popup="" role="dialog">
            <div className="popup-content">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

interface Notifications_ConfirmDialogProps {
  id: string;
  /** IsSingle: one notification (NotificationsList) or all of them (MoreActionSheet). */
  isSingle: boolean;
  /** Event Confirm: the Delete button. */
  onConfirm: () => void;
  /** Event Cancel: the Cancel button. */
  onCancel: () => void;
}

/** UBTConnect.App_Notifications.Notifications_ConfirmDialog (survey copy of the block,
    capture/survey-UBTConnect.json; the live TST copy is not captured because the popup is closed in every state):
    a white CustomContainer (padding base, radius large, centred) with the delete icon in a cyan-lightest
    CircleButton, the title ("Delete notification" / "Delete all notifications?"), the text, and Columns_Two with the
    buttons Cancel (event Cancel) and Delete (event Confirm). */
export function Notifications_ConfirmDialog({ id, isSingle, onConfirm, onCancel }: Notifications_ConfirmDialogProps) {
  const p = id.replace('$', '');
  return (
    <OSBlock name="App_Notifications.Notifications_ConfirmDialog" id={id}>
      <CustomContainer
        id={`${p}-$b1`}
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { GeneralSizeId: UBT_Size.Base },
          BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Large } },
          DisplayOptions: { AlignItems: UBT_AlignItems.Center, JustifyContent: UBT_JustifyContent.Center },
        }}
      >
        <CircleButton
          id={`${p}-$b2`}
          backgroundColorId={UBT_Color.CyanLightest}
          icon={<Icon id={`${p}-$b3`} inColorId={UBT_Color.Primary} inIconId={UBT_Icons2_Notifications.Delete} />}
        />
        <CustomText
          id={`${p}-$b4`}
          inText={isSingle ? 'Delete notification' : 'Delete all notifications?'}
          inPaddingOptions={{ TopSizeId: UBT_Size.Medium }}
          inTextOptions={{
            Color: UBT_Color.Neutral10,
            FontSize: UBT_FontSize.Base,
            FontWeight: UBT_FontWeight.SemiBold,
          }}
        />
        <CustomText
          id={`${p}-$b5`}
          inText={
            isSingle
              ? "Are you sure you want to delete this notification? This action can't be undone."
              : "Are you sure you want to delete all notifications? This action can't be undone."
          }
          inPaddingOptions={{ TopSizeId: UBT_Size.Small, BottomSizeId: UBT_Size.Medium }}
          inTextOptions={{
            Color: UBT_Color.Neutral10,
            FontSize: UBT_FontSize.Base,
            FontWeight: UBT_FontWeight.Regular,
          }}
        />
        <ColumnsTwo
          id={`${p}-$b6`}
          left={
            <button
              className="btn notifications-cancel_BTN ThemeGrid_Width11"
              data-button=""
              type="button"
              onClick={onCancel}
            >
              <span className="text-cyan-dark">Cancel</span>
            </button>
          }
          right={
            <button
              className="btn notifications-delete_BTN ThemeGrid_Width11"
              data-button=""
              type="button"
              onClick={onConfirm}
            >
              <span style={{ color: '#fff' }}>Delete</span>
            </button>
          }
        />
      </CustomContainer>
    </OSBlock>
  );
}
