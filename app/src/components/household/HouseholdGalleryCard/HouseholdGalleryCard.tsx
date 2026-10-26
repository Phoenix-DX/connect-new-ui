/** @origin UBTConnect.Directory_Household_Blocks.Household_GalleryCard */
// @os-block UBTConnect.Directory_Household_Blocks.Household_GalleryCard
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ImageCard } from '@/components/ui/ImageCard';
import { ImageCardContent } from '@/components/ui/ImageCardContent';
import { UBT_ImageCardType, UBT_ImageSize } from '@/lib/ubtConnectLibrary/staticEntities';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import type { UI_SubdivisionHousehold } from '@/lib/ubtConnect/structures';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';

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
      <ImageCard
        inItemsPerRow={itemsPerRow}
        inExtendedClass="gallery-card"
        inCardTypeId={UBT_ImageCardType.Gallery}
        onEventClick={() => onEventOnClick?.()}
        lazyImagePlaceholder={
          <EntityLazyImage
            entityType={Connect_Entity.Household}
            imageSize={{ Width: UBT_ImageSize.HalfWidth_50vw }}
            entityId={household.HouseholdId ?? '0'}
          />
        }
        placeholderContent={
          <ImageCardContent
            inSubtitle={household.ChildrenNames ?? ''}
            inShowSubtitle
            inTitle={household.HouseholdName ?? ''}
          />
        }
      />
    </OSBlock>
  );
}
