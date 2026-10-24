/** @origin UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List */
// @os-block UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { UBT_ImageCardType } from '@/lib/ubtConnectLibrary/staticEntities';
import { HouseholdTimelinePhoto } from '@/components/household/HouseholdTimelinePhoto';
import type { UI_HouseholdTimelineImages } from '@/lib/ubtConnect/structures';

const NO_IMAGES: UI_HouseholdTimelineImages[] = [];

export interface HouseholdTimelinePhotoListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inHouseholdTimelineImages?: UI_HouseholdTimelineImages[];
  /** Event Event_DateSelected(Date): a photo raised Selected. */
  onEventDateSelected?: (date: string) => void;
}

/** Horizontal list of timeline photos (p:migration/blocks/sources/UBTConnect.Directory_Household_Blocks.
    HouseholdDetails_TimelinePhoto_List.mvc.js:154-215): List "Household_GalleryCard-list list list-group
    list-horizontal--gap-xs" (animated, virtualization disabled) of HouseholdDetails_TimelinePhoto with Label, Gallery
    card type, SignedURL, IsCurrent and Date; Selected raises Event_DateSelected(Date). */
export function HouseholdTimelinePhotoList({
  id,
  inHouseholdTimelineImages = NO_IMAGES,
  onEventDateSelected,
}: HouseholdTimelinePhotoListProps) {
  return (
    <OSBlock name="Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List" id={id}>
      <OSList
        source={inHouseholdTimelineImages}
        keyOf={(image, index) => `${image.Date ?? ''}-${String(index)}`}
        className="Household_GalleryCard-list list list-group list-horizontal--gap-xs"
        animateItems
        disableVirtualization
      >
        {(image) => (
          <HouseholdTimelinePhoto
            label={image.Label ?? ''}
            inCardTypeId={UBT_ImageCardType.Gallery}
            inBackgroundURL={image.SignedURL ?? ''}
            isSelected={image.IsCurrent ?? false}
            date={image.Date ?? ''}
            onSelected={(date) => onEventDateSelected?.(date)}
          />
        )}
      </OSList>
    </OSBlock>
  );
}
