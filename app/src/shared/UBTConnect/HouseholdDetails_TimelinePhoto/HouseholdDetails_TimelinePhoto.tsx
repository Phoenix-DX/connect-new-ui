// @os-block UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '../../UBTConnectLibrary/CustomContainer';
import { formatClasses, getClasses_BackgroundImageSize } from '../../UBTConnectLibrary/lib/actions';
import {
  UBT_AlignItems,
  UBT_Color,
  UBT_Display,
  UBT_ImageSize,
  UBT_JustifyContent,
  UBT_Shape,
  UBT_Size,
} from '../../UBTConnectLibrary/lib/staticEntities';
import { UBT_LazyImage } from '../../UBTConnect_Utils/UBT_LazyImage';
import { Connect_Entity } from '../lib/staticEntities';

/** Local MainContainerClass (default "ubt-household-image-card"; p:…HouseholdDetails_TimelinePhoto.mvc.js:12-14). */
const MAIN_CONTAINER_CLASS = 'ubt-household-image-card';

export interface HouseholdDetails_TimelinePhotoProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inBackgroundURL?: string;
  label?: string;
  /** Date: OutSystems DateTime as text, handed back by Selected. */
  date?: string;
  /** UBT_ImageCardType identifier. */
  inCardTypeId?: string;
  isSelected?: boolean;
  /** Event Selected(Date): the photo is clicked. */
  onSelected?: (date: string) => void;
}

/** One photo of the household timeline (p:migration/blocks/sources/UBTConnect.Directory_Household_Blocks.
    HouseholdDetails_TimelinePhoto.mvc.js:198-330): CustomContainer "Block_Image" with a small border (Primary when
    IsSelected, else Neutral3) and soft radius, flex / flex-start / center, ExtendedClasses = FormatClasses(
    MainContainerClass + "__background-image", GetClasses_BackgroundImageSize(In_CardTypeId, 0)); its click raises
    Selected(Date). Content: UBT_LazyImage of In_BackgroundURL (soft radius, height Large_65, width Auto, EntityId =
    NullIdentifier() as text, EntityType Household) and, when In_BackgroundURL <> "", the Label container. */
export function HouseholdDetails_TimelinePhoto({
  id,
  inBackgroundURL = '',
  label = '',
  date = '',
  inCardTypeId = '',
  isSelected = false,
  onSelected,
}: HouseholdDetails_TimelinePhotoProps) {
  return (
    <OSBlock name="Directory_Household_Blocks.HouseholdDetails_TimelinePhoto" id={id}>
      <CustomContainer
        options={{
          BorderOptions: {
            Color: isSelected ? UBT_Color.Primary : UBT_Color.Neutral3,
            Size: { GeneralSizeId: UBT_Size.Small },
            Radius: { GeneralSizeId: UBT_Shape.Soft },
          },
          DisplayOptions: {
            Display: UBT_Display.Flex,
            AlignItems: UBT_AlignItems.FlexStart,
            JustifyContent: UBT_JustifyContent.Center,
          },
          IsSkeletonElement: false,
        }}
        extendedClasses={formatClasses(
          `${MAIN_CONTAINER_CLASS}__background-image`,
          getClasses_BackgroundImageSize(inCardTypeId, 0),
        )}
        onClicked={() => onSelected?.(date)}
      >
        <UBT_LazyImage
          imageURL={inBackgroundURL}
          inBorderRadius={UBT_Shape.Soft}
          imageSize={{ Height: UBT_ImageSize.Large_65, Width: UBT_ImageSize.Auto }}
          entityId="0"
          entityType={Connect_Entity.Household}
        />
        {inBackgroundURL !== '' && (
          <div className="householdImage_horizontalCard-label" data-container="">
            <span data-expression="">{label}</span>
          </div>
        )}
      </CustomContainer>
    </OSBlock>
  );
}
