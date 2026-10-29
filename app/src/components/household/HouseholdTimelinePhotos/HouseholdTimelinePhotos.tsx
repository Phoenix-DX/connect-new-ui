import { ComingSoon } from '@/components/ui/ComingSoon';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Shape, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { HouseholdTimelinePhotoList } from '@/components/household/HouseholdTimelinePhotoList';
import type { UI_HouseholdTimelineImages } from '@/lib/ubtConnect/structures';

export interface HouseholdTimelinePhotosProps {
  /** The timeline images of the household (the household details never fill them: the list is empty). */
  images: UI_HouseholdTimelineImages[];
  /** LD check mobileDirectoryHouseholdGallery (live TST of 2026-10-27, HouseholdDetails_Block.mvc.js:1298-1301): on
      shows nothing after the list; off (default) shows the Coming Soon box. */
  hasHouseholdGallery?: boolean;
  /** The user selected the photo of a date. */
  onDateSelected: (date: string) => void;
}

/** The Photos section at the bottom of the household card: the timeline photo list, then "Coming soon" in a bordered
    box.
    @origin UBTConnect.Directory_Household.HouseholdDetails_Block */
export function HouseholdTimelinePhotos({
  images,
  hasHouseholdGallery = false,
  onDateSelected,
}: HouseholdTimelinePhotosProps) {
  return (
    <>
      <div data-container="">
        <HouseholdTimelinePhotoList inHouseholdTimelineImages={images} onEventDateSelected={onDateSelected} />
      </div>
      {!hasHouseholdGallery && (
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
      )}
    </>
  );
}
