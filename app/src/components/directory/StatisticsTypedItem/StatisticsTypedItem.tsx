/** @origin UBTConnect.Directory_Locality.Statistics_TypedItem */
// @os-block UBTConnect.Directory_Locality.Statistics_TypedItem
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Columns_Three } from '@/shared/UBTConnectLibrary/Columns_Three';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import {
  UBT_AlignItems,
  UBT_ColumnBehaviour,
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_Shape,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { UBT_ImageSize } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import type { UI_TypedStatistics } from '@/shared/UBTConnect/lib/structures';
import { StatisticsIcons } from '@/components/directory/StatisticsIcons';

export interface StatisticsTypedItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** UI_CountryStatistics: name, image and counts of the country or locality. */
  uICountryStatistics?: UI_TypedStatistics;
  /** In_HideNavigation: hides the chevron. */
  inHideNavigation?: boolean;
  /** In_HideBorder: border size None instead of Small. */
  inHideBorder?: boolean;
  /** In_ImageEntityTypeId: EntityType of the image (UBT_LazyImage). */
  inImageEntityTypeId?: string;
  /** In_ImageEntityId: EntityId of the image (UBT_LazyImage). */
  inImageEntityId?: string;
  /** In_HasImage: shows the image even without an ImageURL. */
  inHasImage?: boolean;
}

/** Card of a country or locality (p:UBTConnect.Directory_Locality.Statistics_TypedItem.mvc.js:213-410): a
    CustomContainer (Neutral0 background, padding Small, margin-bottom Small, Neutral4 border of size Small or None
    when In_HideBorder, radius Medium, AlignItems Center without Display, so no class) holding a Columns_Three
    (ExpandMiddle, spacing Base, vertical Center). Left: the round 40 px country-flag UBT_LazyImage when ImageURL is
    not "" or In_HasImage. Middle: the name (Small, SemiBold) then Statistics_Icons. Right: the chevron (Neutral6)
    unless In_HideNavigation. */
export function StatisticsTypedItem({
  id,
  uICountryStatistics = {},
  inHideNavigation = false,
  inHideBorder = false,
  inImageEntityTypeId = '',
  inImageEntityId = '',
  inHasImage = false,
}: StatisticsTypedItemProps) {
  const s = uICountryStatistics;
  const imageURL = s.ImageURL ?? '';
  return (
    <OSBlock name="Directory_Locality.Statistics_TypedItem" id={id}>
      <CustomContainer
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { GeneralSizeId: UBT_Size.Small },
          MarginSize: { BottomSizeId: UBT_Size.Small },
          BorderOptions: {
            Color: UBT_Color.Neutral4,
            Size: { GeneralSizeId: inHideBorder ? UBT_Size.None : UBT_Size.Small },
            Radius: { GeneralSizeId: UBT_Shape.Medium },
          },
          DisplayOptions: { AlignItems: UBT_AlignItems.Center },
        }}
      >
        <Columns_Three
          columnOptions={{
            ColumnBehaviour: UBT_ColumnBehaviour.ExpandMiddle,
            SpacingSize: UBT_Size.Base,
            VerticalAlign: UBT_VerticalAlign.Center,
          }}
          left={
            imageURL !== '' || inHasImage ? (
              <UBT_LazyImage
                extendedClass="country-flag"
                imageSize={{ Height: UBT_ImageSize.Small_40, Width: UBT_ImageSize.Square }}
                inBorderRadius={UBT_Shape.Circle}
                entityType={inImageEntityTypeId}
                entityId={inImageEntityId}
                imageURL={imageURL}
              />
            ) : null
          }
          middle={
            <>
              <CustomText
                inTextOptions={{ FontSize: UBT_FontSize.Small, FontWeight: UBT_FontWeight.SemiBold }}
                inText={s.Name ?? ''}
              />
              <StatisticsIcons uIStatisticsTexts={s.UI_StatisticsTexts ?? {}} />
            </>
          }
          right={inHideNavigation ? null : <Icon inIconId={UBT_Icons2.ChevronRight} inColorId={UBT_Color.Neutral6} />}
        />
      </CustomContainer>
    </OSBlock>
  );
}
