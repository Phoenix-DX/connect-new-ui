// @os-block UBTConnect.App_CommonBlocks_Filter.MoreActionSheet
import { useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import type { BackNavigationEvent } from '@/platform/navigation';
import { BottomSheet } from '@/shared/UBTConnectLibrary/BottomSheet';
import { Button } from '@/shared/UBTConnectLibrary/Button';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
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
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { bottomSheetClose } from '@/shared/osui/lib/actions';
import { UBT_Color_Error, UBT_Icons2_Notifications } from './staticEntities';

export interface MoreActionSheetProps {
  id: string;
  onSheetInitialized?: (sheetId: string) => void;
  onMarkAllAsRead?: () => void;
  onDeleteAllNotification?: () => void;
  /** Event ApplySort. */
  onApplySort?: () => void;
}

/** UBTConnect.App_CommonBlocks_Filter.MoreActionSheet (p:…MoreActionSheet.mvc.js view :223-700): BottomSheet without
    header (neutral-2, small padding, footer 72px): "Mark all as read" (MarkAllAsReadClicked :2177 → event MarkAllAsRead)
    and "Delete all notifications" (:1942 → event DeleteAllNotification); footer Cancel → OnClick_Clear (:1718) →
    OnClick_Apply (:1907: close, then ApplySort). Back while open closes it (:1380-1427). */
export function MoreActionSheet({
  id,
  onSheetInitialized,
  onMarkAllAsRead,
  onDeleteAllNotification,
  onApplySort,
}: MoreActionSheetProps) {
  const sheetId = useRef('');
  const isOpen = useRef(false);
  const p = id.replace('$', '');
  const action = (n: string, iconId: string, color: string, text: string, onClick?: () => void) => (
    <CustomContainer id={`${p}-$b${n}`} options={{ PaddingSize: { GeneralSizeId: UBT_Size.Small } }}>
      <IconText
        id={`${p}-$b${Number(n) + 1}`}
        text={text}
        textOptions={{ Color: color, FontWeight: UBT_FontWeight.SemiBold, FontSize: UBT_FontSize.Base }}
        onClicked={onClick}
      >
        <Icon id={`${p}-$b${Number(n) + 2}`} inIconId={iconId} inColorId={color} inSizeId={UBT_IconSize.Medium_20} />
      </IconText>
    </CustomContainer>
  );
  return (
    <OSBlock name="App_CommonBlocks_Filter.MoreActionSheet" id={id}>
      <BottomSheet
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
            {action('3', UBT_Icons2_Notifications.Mail, UBT_Color.Primary, 'Mark all as read', onMarkAllAsRead)}
            {action(
              '6',
              UBT_Icons2_Notifications.Delete,
              UBT_Color_Error,
              'Delete all notifications',
              onDeleteAllNotification,
            )}
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
      <BackNavigationHandler
        id={`${p}-$b12`}
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
}

/** UBTConnect.App_Notifications.Notifications_MoreActionSheet (p:…Notifications_MoreActionSheet.mvc.js): MoreActionSheet
    with empty filter inputs. Its MarkAllAsRead / DeleteAllNotification handlers are empty actions (Handler_MarkAllAsRead
    controller :346-358, Handler_DeleteAllNotification :254-265: debugger breakpoints only), so the two options do
    nothing (audit A1). Its Loaded handler (Handler_FilterSheetLoaded :276-306) never runs: MoreActionSheet raises
    Loaded only from CacheControl_UserInfo_Wrapper, rendered only with HasCountries or HasLocalities (MoreActionSheet
    view :652). ApplySort → ApplyFilters. */
export function Notifications_MoreActionSheet({
  id,
  onSheetInitialized,
  onApplyFilters,
}: Notifications_MoreActionSheetProps) {
  return (
    <OSBlock name="App_Notifications.Notifications_MoreActionSheet" id={id}>
      <MoreActionSheet
        id={`${id.replace('$', '')}-$b1`}
        onSheetInitialized={onSheetInitialized}
        onMarkAllAsRead={() => undefined}
        onDeleteAllNotification={() => undefined}
        onApplySort={onApplyFilters}
      />
    </OSBlock>
  );
}
