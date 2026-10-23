/** @origin UBTConnect.Directory_Household_Blocks.Household_GalleryCard */
// @os-block UBTConnect.Directory_Household_Blocks.Household_GalleryCard
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ImageCard_LazyLoading } from '@/shared/UBTConnectLibrary/ImageCard_LazyLoading';
import { ImageCard__Content } from '@/shared/UBTConnectLibrary/ImageCard__Content';
import { UBT_ImageCardType, UBT_ImageSize } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import type { UI_SubdivisionHousehold } from '@/shared/UBTConnect/lib/structures';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';

export interface HouseholdGalleryCardProps {
  /** OutSystems instance id of the block. */
  id?: string;
  subdivisionHouseholdGalleryCard?: UI_SubdivisionHousehold;
  itemsPerRow?: number;
  /** Event Event_OnClick: the card is clicked. */
  onEventOnClick?: () => void;
}

/** Gallery card of a household (p:migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/
    UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc.js:162-262): ImageCard_LazyLoading (ItemsPerRow,
    extended class "gallery-card", Gallery card type; Event_Click raises Event_OnClick) with UBT_LazyImage of the
    household (width HalfWidth_50vw) and ImageCard__Content (title HouseholdName, subtitle ChildrenNames, shown). */
export function HouseholdGalleryCard({
  id,
  subdivisionHouseholdGalleryCard = {},
  itemsPerRow = 2,
  onEventOnClick,
}: HouseholdGalleryCardProps) {
  const household = subdivisionHouseholdGalleryCard;
  return (
    <OSBlock name="Directory_Household_Blocks.Household_GalleryCard" id={id}>
      <ImageCard_LazyLoading
        inItemsPerRow={itemsPerRow}
        inExtendedClass="gallery-card"
        inCardTypeId={UBT_ImageCardType.Gallery}
        onEventClick={() => onEventOnClick?.()}
        lazyImagePlaceholder={
          <UBT_LazyImage
            entityType={Connect_Entity.Household}
            imageSize={{ Width: UBT_ImageSize.HalfWidth_50vw }}
            entityId={household.HouseholdId ?? '0'}
          />
        }
        placeholderContent={
          <ImageCard__Content
            inSubtitle={household.ChildrenNames ?? ''}
            inShowSubtitle
            inTitle={household.HouseholdName ?? ''}
          />
        }
      />
    </OSBlock>
  );
}
