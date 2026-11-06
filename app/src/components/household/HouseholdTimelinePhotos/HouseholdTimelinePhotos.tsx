import { ComingSoon } from '@/components/ui/ComingSoon';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { DataFetchStatus } from '@/components/ui/os/OSList';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Shape, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { HouseholdTimelinePhotoList } from '@/components/household/HouseholdTimelinePhotoList';
import type { UI_HouseholdTimelineImages } from '@/lib/ubtConnect/structures';

export interface HouseholdTimelinePhotosProps {
  /** The gallery images of the household (GetHouseHold_Gallery.Out_ImageDetails, only SignedURL mapped). */
  images: UI_HouseholdTimelineImages[];
  /** The data fetch status of GetHouseHold_Gallery (the list shows ` list-loading` while Fetching). */
  imagesDataFetchStatus?: DataFetchStatus;
  /** LD check mobileDirectoryHouseholdGallery (live TST of 2026-11-05, HouseholdDetails_Block.mvc.js:1274-1392): on
      shows the gallery, off (or not given) only the Coming Soon box. */
  hasHouseholdGallery?: boolean;
  /** The user selected the photo of a date. */
  onDateSelected: (date: string) => void;
}

/** The Photos section at the bottom of the household card. Flag on: the Container "HouseholdGallery" with the
    timeline photo list of the gallery (HouseholdDetails_Block.mvc.js:1274-1321). Flag off: only "Coming Soon" in a
    bordered box (:1323-1392).
    @origin UBTConnect.Directory_Household.HouseholdDetails_Block */
export function HouseholdTimelinePhotos({
  images,
  imagesDataFetchStatus = DataFetchStatus.Fetched,
  hasHouseholdGallery = false,
  onDateSelected,
}: HouseholdTimelinePhotosProps) {
  if (hasHouseholdGallery) {
    return (
      <div data-container="">
        <HouseholdTimelinePhotoList
          inHouseholdTimelineImages={images}
          inHouseholdTimelineImagesDataFetchStatus={imagesDataFetchStatus}
          onEventDateSelected={onDateSelected}
        />
      </div>
    );
  }
  return (
    <CustomContainer
      options={{
        BorderOptions: {
          Color: UBT_Color.Neutral3,
          Size: { GeneralSizeId: UBT_Size.Small },
          Radius: { GeneralSizeId: UBT_Shape.Large },
        },
      }}
    >
      <ComingSoon
        inTextOptions={{
          Color: UBT_Color.Neutral7,
          FontSize: UBT_FontSize.Base,
          FontWeight: UBT_FontWeight.SemiBold,
        }}
      />
    </CustomContainer>
  );
}
