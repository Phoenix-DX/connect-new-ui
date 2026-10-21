// @os-block UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon_Label
import { OSBlock } from '../../../components/OSBlock';
import { showUpgradePopUp } from '../../../shell/dialogs/subscription';
import { bottomSheetOpen } from '../../../shared/osui/lib/actions';
import { CustomContainer } from '../../../shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '../../../shared/UBTConnectLibrary/CustomText';
import { Icon } from '../../../shared/UBTConnectLibrary/Icon';
import {
  UBT_AlignItems,
  UBT_Color,
  UBT_Display,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconSize,
  UBT_Icons2,
  UBT_IconsSize,
  UBT_Size,
} from '../../../shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '../../../shared/UBTConnectLibrary/SkeletonSection';
import { child, scopeOf } from './ids';
import { UBT_Icons2_ExpandMore } from './staticEntities';

export interface FilterSheet_Icon_LabelProps {
  id?: string;
  haveFiltersApplied?: boolean;
  bottomSheetId?: string;
  isLoaded?: boolean;
  showSubscriptionOnClick?: boolean;
}

/** "Filter" label with the tune and expand icons (p:UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon_Label.mvc.js):
    a skeleton while not loaded, a red dot when filters are applied. IconClick (container and both icons): when loaded,
    App_Subscription_ShowUpgradePopUp (ShowSubscriptionOnClick) or BottomSheetOpen(BottomSheetId). */
export function FilterSheet_Icon_Label({
  id,
  haveFiltersApplied = false,
  bottomSheetId = '',
  isLoaded = false,
  showSubscriptionOnClick = false,
}: FilterSheet_Icon_LabelProps) {
  const p = scopeOf(id);
  const iconClick = () => {
    if (!isLoaded) return;
    if (showSubscriptionOnClick) void showUpgradePopUp();
    else bottomSheetOpen(bottomSheetId);
  };
  return (
    <OSBlock name="App_CommonBlocks_Filter.FilterSheet_Icon_Label" id={id}>
      <SkeletonSection id={child(p, 1)} inIsLoading={!isLoaded}>
        {haveFiltersApplied && (
          <Icon
            id={child(p, 2)}
            inExtendedClasses="header-filter-enabled"
            inColorId={UBT_Color.Red}
            inSizeId={UBT_IconsSize.NonStandard_14}
            inIconId={UBT_Icons2.ErrorFill}
          />
        )}
        <CustomContainer
          id={child(p, 3)}
          options={{
            PaddingSize: { RightSizeId: UBT_Size.ExtraSmall },
            DisplayOptions: { Display: UBT_Display.InlineFlex, AlignItems: UBT_AlignItems.Center },
          }}
          onClicked={iconClick}
        >
          <Icon
            id={child(p, 4)}
            inIconId={UBT_Icons2.Tune}
            inSizeId={UBT_IconsSize.Base_24}
            inColorId={UBT_Color.CyanDark}
            onClick={iconClick}
          />
          <CustomText
            id={child(p, 5)}
            inText="Filter"
            inTextOptions={{
              Color: UBT_Color.CyanDark,
              FontSize: UBT_FontSize.Small,
              FontWeight: UBT_FontWeight.SemiBold,
            }}
            inPaddingOptions={{ HorizontalSizeId: UBT_Size.ExtraSmall }}
          />
          <Icon
            id={child(p, 6)}
            inIconId={UBT_Icons2_ExpandMore}
            inColorId={UBT_Color.CyanDark}
            inSizeId={UBT_IconSize.Medium_20}
            onClick={iconClick}
          />
        </CustomContainer>
      </SkeletonSection>
    </OSBlock>
  );
}
