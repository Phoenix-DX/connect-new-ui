/** @origin UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon */
// @os-block UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon
import { OSBlock } from '@/components/ui/os/OSBlock';
import { bottomSheetOpen } from '@/components/ui/lib/actions';
import { Icon } from '@/components/ui/Icon';
import { Skeleton } from '@/components/ui/Skeleton';
import { UBT_Color, UBT_Icons2, UBT_IconsSize } from '@/lib/ubtConnectLibrary/staticEntities';

export interface FilterSheetIconProps {
  /** OutSystems instance id of the block. */
  id?: string;
  haveFiltersApplied?: boolean;
  bottomSheetId?: string;
  isLoaded?: boolean;
  showSubscriptionOnClick?: boolean;
  /** App_Subscription_ShowUpgradePopUp (platform/feedback/dialogs), given by the caller: a click opens it when
      ShowSubscriptionOnClick. */
  onShowUpgradePopUp?: () => void | Promise<void>;
}

/** Header filter icon (p:UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc.js): a skeleton while not loaded, a red
    dot when filters are applied, the tune icon. IconClick (:300-330): when loaded, App_Subscription_ShowUpgradePopUp
    (ShowSubscriptionOnClick) or BottomSheetOpen(BottomSheetId). */
export function FilterSheetIcon({
  id,
  haveFiltersApplied = false,
  bottomSheetId = '',
  isLoaded = false,
  showSubscriptionOnClick = false,
  onShowUpgradePopUp,
}: FilterSheetIconProps) {
  const onClick = () => {
    if (!isLoaded) return;
    if (showSubscriptionOnClick) void onShowUpgradePopUp?.();
    else bottomSheetOpen(bottomSheetId);
  };
  return (
    <OSBlock name="App_CommonBlocks_Filter.FilterSheet_Icon" id={id}>
      <Skeleton isLoading={!isLoaded}>
        {haveFiltersApplied && (
          <Icon
            inIconId={UBT_Icons2.ErrorFill}
            inSizeId={UBT_IconsSize.NonStandard_14}
            inExtendedClasses="header-filter-enabled"
            inColorId={UBT_Color.Red}
          />
        )}
        <Icon
          inSizeId={UBT_IconsSize.Base_24}
          inIconId={UBT_Icons2.Tune}
          inColorId={UBT_Color.Neutral0}
          onClick={onClick}
        />
      </Skeleton>
    </OSBlock>
  );
}
