// @os-block UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon
import { OSBlock } from '@/components/ui/os/OSBlock';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { bottomSheetOpen } from '@/shared/osui/lib/actions';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { UBT_Color, UBT_Icons2, UBT_IconsSize } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface FilterSheet_IconProps {
  /** OutSystems instance id of the block. */
  id?: string;
  haveFiltersApplied?: boolean;
  bottomSheetId?: string;
  isLoaded?: boolean;
  showSubscriptionOnClick?: boolean;
}

/** Header filter icon (p:UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc.js): a skeleton while not loaded, a red
    dot when filters are applied, the tune icon. IconClick (:300-330): when loaded, App_Subscription_ShowUpgradePopUp
    (ShowSubscriptionOnClick) or BottomSheetOpen(BottomSheetId). */
export function FilterSheet_Icon({
  id,
  haveFiltersApplied = false,
  bottomSheetId = '',
  isLoaded = false,
  showSubscriptionOnClick = false,
}: FilterSheet_IconProps) {
  const onClick = () => {
    if (!isLoaded) return;
    if (showSubscriptionOnClick) void showUpgradePopUp();
    else bottomSheetOpen(bottomSheetId);
  };
  return (
    <OSBlock name="App_CommonBlocks_Filter.FilterSheet_Icon" id={id}>
      <SkeletonSection inIsLoading={!isLoaded}>
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
      </SkeletonSection>
    </OSBlock>
  );
}
