/** @origin UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon_Label */
import { OSBlock } from '@/components/ui/os/OSBlock';
import { bottomSheetOpen } from '@/components/ui/lib/actions';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
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
} from '@/lib/ubtConnectLibrary/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import { child, scopeOf } from '@/components/ui/os/blockIds';

const UBT_Icons2_ExpandMore = 'connect-icon-expand_more'; // Notes dom/default.html:151, Bookmarks dom/default.html:150

interface FilterSheet_Icon_LabelProps {
  id?: string;
  haveFiltersApplied?: boolean;
  bottomSheetId?: string;
  isLoaded?: boolean;
  showSubscriptionOnClick?: boolean;
  /** App_Subscription_ShowUpgradePopUp (platform/feedback/dialogs), given by the caller: a click opens it when
      ShowSubscriptionOnClick (a component imports no platform/, as FilterSheetIcon). */
  onShowUpgradePopUp?: () => void | Promise<void>;
}

/** "Filter" label with the tune and expand icons (p:UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon_Label.mvc.js):
    a skeleton while not loaded, a red dot when filters are applied. IconClick (container and both icons): when loaded,
    App_Subscription_ShowUpgradePopUp (ShowSubscriptionOnClick) or BottomSheetOpen(BottomSheetId). Used by Notes and
    Bookmarks. */
export function FilterSheet_Icon_Label({
  id,
  haveFiltersApplied = false,
  bottomSheetId = '',
  isLoaded = false,
  showSubscriptionOnClick = false,
  onShowUpgradePopUp,
}: FilterSheet_Icon_LabelProps) {
  const p = scopeOf(id);
  const iconClick = () => {
    if (!isLoaded) return;
    if (showSubscriptionOnClick) void onShowUpgradePopUp?.();
    else bottomSheetOpen(bottomSheetId);
  };
  return (
    <OSBlock name="App_CommonBlocks_Filter.FilterSheet_Icon_Label" id={id}>
      <Skeleton id={child(p, 1)} isLoading={!isLoaded}>
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
      </Skeleton>
    </OSBlock>
  );
}
