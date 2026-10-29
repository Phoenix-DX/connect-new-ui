/** @origin UBTConnect.App_CommonBlocks_Filter.MoreActionSheet */
import { useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import type { BackNavigationEvent } from '@/platform/navigation';
import { ConnectBottomSheet } from '@/components/ui/ConnectBottomSheet';
import { Button } from '@/components/ui/Button';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import {
  UBT_ButtonSize,
  UBT_ButtonType,
  UBT_Color,
  UBT_FlexBehavior,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconSize,
  UBT_Shadow,
  UBT_Shape,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';
import { bottomSheetClose } from '@/components/ui/lib/actions';
import { NotificationsPopup, Notifications_ConfirmDialog } from './Notifications_ConfirmDialog';
import { UBT_Color_Error, UBT_Icons2_Notifications } from './staticEntities';

/** One option of the sheet: CustomContainer (small padding) > IconText (semi-bold, base) with its Icon (20). The block
    ids follow the option's first id `n`. */
function MoreAction(props: { p: string; n: number; iconId: string; color: string; text: string; onClick: () => void }) {
  const { p, n, iconId, color, text, onClick } = props;
  return (
    <CustomContainer id={`${p}-$b${n}`} options={{ PaddingSize: { GeneralSizeId: UBT_Size.Small } }}>
      <IconText
        id={`${p}-$b${n + 1}`}
        text={text}
        textOptions={{ Color: color, FontWeight: UBT_FontWeight.SemiBold, FontSize: UBT_FontSize.Base }}
        onClicked={onClick}
      >
        <Icon id={`${p}-$b${n + 2}`} inIconId={iconId} inColorId={color} inSizeId={UBT_IconSize.Medium_20} />
      </IconText>
    </CustomContainer>
  );
}

export interface MoreActionSheetProps {
  id: string;
  onSheetInitialized?: (sheetId: string) => void;
  onMarkAllAsRead?: () => void;
  onDeleteAllNotification?: () => void;
  /** Event ApplySort. */
  onApplySort?: () => void;
}

/** UBTConnect.App_CommonBlocks_Filter.MoreActionSheet (TST publish of 2026-10-27, MoreActionSheet.mvc.js view
    :226-760): the container "moreActionContainer" around the BottomSheet without header (neutral-2, small padding,
    footer 72px): "Mark all as read" (MarkAllAsReadClicked: event MarkAllAsRead, then BottomSheetOnClose closes the
    sheet) and "Delete all notifications" (Toggle_DeleteAllPopup :1194-1210: the confirm popup); footer Cancel →
    OnClick_Clear → OnClick_Apply (close, then ApplySort). The popup "popup-dialog" holds Notifications_ConfirmDialog
    (IsSingle False): Confirm → DeleteAllNotificationClicked (event DeleteAllNotification, then the popup closes),
    Cancel → Toggle_DeleteAllPopup. OnToggle keeps isOpen_Local; back while open closes the sheet (:1473-1500). */
export function MoreActionSheet({
  id,
  onSheetInitialized,
  onMarkAllAsRead,
  onDeleteAllNotification,
  onApplySort,
}: MoreActionSheetProps) {
  const sheetId = useRef('');
  const isOpen = useRef(false);
  const [showConfirmDeleteAllPopup, setShowConfirmDeleteAllPopup] = useState(false);
  const toggleDeleteAllPopup = () => {
    setShowConfirmDeleteAllPopup((v) => !v);
  };
  const p = id.replace('$', '');
  // MarkAllAsReadClicked: event MarkAllAsRead, then BottomSheetOnClose (the sheet closes).
  const markAllAsReadClicked = () => {
    onMarkAllAsRead?.();
    bottomSheetClose(sheetId.current);
  };
  return (
    <OSBlock name="App_CommonBlocks_Filter.MoreActionSheet" id={id}>
      <div className="moreActionContainer" data-container="">
        <ConnectBottomSheet
          id={`${p}-$b1`}
          showHeader={false}
          contentBackgroundColorId={UBT_Color.Neutral2}
          contentPadding={{ GeneralSizeId: UBT_Size.Small }}
          footerHeight="72px"
          onInitialized={(bottomSheetId) => {
            sheetId.current = bottomSheetId;
            onSheetInitialized?.(bottomSheetId);
          }}
          onOnToggle={(open) => {
            isOpen.current = open;
          }}
          content={
            <CustomContainer
              id={`${p}-$b2`}
              options={{
                Background: { BackgroundColor: UBT_Color.Neutral0 },
                ShadowId: UBT_Shadow.ExtraSmall,
                BorderOptions: { Color: UBT_Color.Neutral0, Radius: { GeneralSizeId: UBT_Shape.Medium } },
                PaddingSize: { GeneralSizeId: UBT_Size.Base },
              }}
            >
              <MoreAction
                p={p}
                n={3}
                iconId={UBT_Icons2_Notifications.Mail}
                color={UBT_Color.Primary}
                text="Mark all as read"
                onClick={markAllAsReadClicked}
              />
              <MoreAction
                p={p}
                n={6}
                iconId={UBT_Icons2_Notifications.Delete}
                color={UBT_Color_Error}
                text="Delete all notifications"
                onClick={toggleDeleteAllPopup}
              />
            </CustomContainer>
          }
          footer={
            <CustomContainer
              id={`${p}-$b9`}
              options={{
                Background: { BackgroundColor: UBT_Color.Neutral0 },
                PaddingSize: { GeneralSizeId: UBT_Size.Base },
                ShadowId: UBT_Shadow.ExtraSmall,
              }}
            >
              <Button
                id={`${p}-$b10`}
                inButtonOptions={{
                  UBT_ButtonSizeId: UBT_ButtonSize.Medium,
                  UBT_ButtonTypeId: UBT_ButtonType.Tertiary,
                  UBT_FlexBehavior: UBT_FlexBehavior.Grow,
                }}
                onEventOnClick={() => {
                  bottomSheetClose(sheetId.current);
                  onApplySort?.();
                }}
              >
                Cancel
              </Button>
            </CustomContainer>
          }
        />
      </div>
      <NotificationsPopup showPopup={showConfirmDeleteAllPopup}>
        <Notifications_ConfirmDialog
          id={`${p}-$b12`}
          isSingle={false}
          onConfirm={() => {
            onDeleteAllNotification?.();
            toggleDeleteAllPopup();
          }}
          onCancel={toggleDeleteAllPopup}
        />
      </NotificationsPopup>
      <BackNavigationHandler
        id={`${p}-$b13`}
        onBackNavigation={(event: BackNavigationEvent) => {
          if (!isOpen.current) return;
          bottomSheetClose(sheetId.current);
          event.preventDefault();
        }}
      />
    </OSBlock>
  );
}

export interface Notifications_MoreActionSheetProps {
  id: string;
  onSheetInitialized?: (sheetId: string) => void;
  /** Event ApplyFilters. */
  onApplyFilters?: () => void;
  /** Event MarkAllAsRead. */
  onMarkAllAsRead?: () => void;
  /** Event DeleteAll. */
  onDeleteAll?: () => void;
}

/** UBTConnect.App_Notifications.Notifications_MoreActionSheet (TST publish of 2026-10-27,
    Notifications_MoreActionSheet.mvc.js): MoreActionSheet with empty filter inputs. Handler_MarkAllAsRead raises
    MarkAllAsRead and Handler_DeleteAllNotification raises DeleteAll (controller :254-380). Its Loaded handler (Handler_FilterSheetLoaded :276-306) never runs: MoreActionSheet raises
    Loaded only from CacheControl_UserInfo_Wrapper, rendered only with HasCountries or HasLocalities (MoreActionSheet
    view :652). ApplySort → ApplyFilters. */
export function Notifications_MoreActionSheet({
  id,
  onSheetInitialized,
  onApplyFilters,
  onMarkAllAsRead,
  onDeleteAll,
}: Notifications_MoreActionSheetProps) {
  return (
    <OSBlock name="App_Notifications.Notifications_MoreActionSheet" id={id}>
      <MoreActionSheet
        id={`${id.replace('$', '')}-$b1`}
        onSheetInitialized={onSheetInitialized}
        onMarkAllAsRead={onMarkAllAsRead}
        onDeleteAllNotification={onDeleteAll}
        onApplySort={onApplyFilters}
      />
    </OSBlock>
  );
}
