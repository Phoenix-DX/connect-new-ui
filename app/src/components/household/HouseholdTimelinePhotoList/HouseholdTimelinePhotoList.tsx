/** @origin UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List */
// @os-block UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List
import { CustomContainer } from '@/components/ui/CustomContainer';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DataFetchStatus, OSList } from '@/components/ui/os/OSList';
import { UnavailableImage } from '@/components/ui/UnavailableImage';
import { Type_Image, UBT_Color, UBT_ImageCardType, UBT_Shape, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { HouseholdTimelinePhoto } from '@/components/household/HouseholdTimelinePhoto';
import type { UI_HouseholdTimelineImages } from '@/lib/ubtConnect/structures';

const NO_IMAGES: UI_HouseholdTimelineImages[] = [];

export interface HouseholdTimelinePhotoListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inHouseholdTimelineImages?: UI_HouseholdTimelineImages[];
  /** The data fetch status of In_HouseholdTimelineImages (the caller's data action): Fetching adds ` list-loading` to
      the list. */
  inHouseholdTimelineImagesDataFetchStatus?: DataFetchStatus;
  /** Event Event_DateSelected(Date): a photo raised Selected. */
  onEventDateSelected?: (date: string) => void;
}

/** The timeline photos (live TST of 2026-11-05, migration/runtime-sources/live/UBTConnect.Directory_Household_Blocks.
    HouseholdDetails_TimelinePhoto_List.mvc.js:140-251). With images (:140-158): the List "Household_GalleryCard-list
    list list-group list-horizontal--gap-xs" (animated, virtualization disabled, the data fetch status of the source)
    of HouseholdDetails_TimelinePhoto with Label, Gallery card type, SignedURL, IsCurrent and Date; Selected raises
    Event_DateSelected(Date). Without images (:215-251): a CustomContainer (border neutral3, small, radius large) with
    Unavailable_Image (Gallery card type, Household, no icon). */
export function HouseholdTimelinePhotoList({
  id,
  inHouseholdTimelineImages = NO_IMAGES,
  inHouseholdTimelineImagesDataFetchStatus = DataFetchStatus.Fetched,
  onEventDateSelected,
}: HouseholdTimelinePhotoListProps) {
  return (
    <OSBlock name="Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List" id={id}>
      {inHouseholdTimelineImages.length > 0 ? (
        <OSList
          source={inHouseholdTimelineImages}
          keyOf={(image, index) => `${image.Date ?? ''}-${String(index)}`}
          className="Household_GalleryCard-list list list-group list-horizontal--gap-xs"
          animateItems
          disableVirtualization
          sourceDataFetchStatus={inHouseholdTimelineImagesDataFetchStatus}
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
      ) : (
        <CustomContainer
          options={{
            BorderOptions: {
              Color: UBT_Color.Neutral3,
              Size: { GeneralSizeId: UBT_Size.Small },
              Radius: { GeneralSizeId: UBT_Shape.Large },
            },
          }}
        >
          <UnavailableImage inCardTypeId={UBT_ImageCardType.Gallery} typeImage={Type_Image.Household} />
        </CustomContainer>
      )}
    </OSBlock>
  );
}
