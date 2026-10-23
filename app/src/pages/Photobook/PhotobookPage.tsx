import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import type { PhotobookHousehold } from '@/api/household';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { LayoutRuntimeTop } from '@/components/layout/LayoutRuntimeTop';
import { useFlagOn } from '@/platform/flags/flags';
import { replaceOnUpcomingNavigation, setPreloadObject, useNavigateBack, useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import type { CarouselPreloadedHouseholds } from '@/shared/UBTConnect/lib/structures';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { UBT_Color, UBT_Display, UBT_FontSize, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { Photobook_Carousel } from './components/Photobook_Carousel';
import { UBT_AlignItems, UBT_FlexDirection, UBT_JustifyContent } from './components/staticEntities';
import { usePhotobook } from './hooks/usePhotobook';
import { readPhotobookInputs } from './inputs';

/** Loading placeholder: cyan lightest, padding base, no border, cyan darker display text, a centred column 100vh x
    100vw (dom/loading.html:86-89). */
const LOADING_OPTIONS = {
  Background: { BackgroundColor: UBT_Color.CyanLightest },
  PaddingSize: { GeneralSizeId: UBT_Size.Base },
  BorderOptions: { Size: { GeneralSizeId: UBT_Size.None } },
  TextOptions: { Color: UBT_Color.CyanDarker, FontSize: UBT_FontSize.Display },
  DisplayOptions: {
    Display: UBT_Display.Flex,
    AlignItems: UBT_AlignItems.Center,
    JustifyContent: UBT_JustifyContent.Center,
    FlexDirection: UBT_FlexDirection.Column,
  },
  HeightOptions: { Main: '100vh' },
  WidthOptions: { Main: '100vw' },
};

/** @origin UBTConnect.Directory_Photobook.Photobook
    A screen without a layout: LayoutRuntime_Top, CommonUI_InsideLayout and a SkeletonSection (In_IsLoading =
    IsLoading) holding the Photobook_Carousel once IsLoading is False and GetLocalityHouseholdIds is fetched, else the
    full-screen loading container. The flows (OnInitialize, GetLocalityHouseholdIds and its OnAfterFetch) are in
    usePhotobook.
    - Handler_ClosePhotobook: with a target household, ReplaceOnUpcomingNavigation, then HouseholdCarousel
      (In_StartingHouseholdId; every household preloaded) when GetHasCarouselEnabled (flag C2EnableCarousel,
      default-only on), else HouseholdDetails (HouseholdId); without one, back. */
export default function Photobook() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readPhotobookInputs(params), [params]);
  const { isLoading, households, selectedHousehold } = usePhotobook(inputs);

  const navigate = useOsNavigate();
  const navigateBack = useNavigateBack();
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel'); // GetHasCarouselEnabled (default-only, on)
  const handlerClosePhotobook = (target: PhotobookHousehold) => {
    if (target.householdId === '0') {
      navigateBack();
      return;
    }
    replaceOnUpcomingNavigation();
    if (hasCarouselEnabled) {
      const preloaded: CarouselPreloadedHouseholds = {
        CarouselHouseholdItem: (households ?? []).map((h) => ({ Household: h.householdId })),
      };
      setPreloadObject(preloaded);
      navigate(`/${APP_ID}/HouseholdCarousel`, { In_StartingHouseholdId: target.householdId });
    } else {
      navigate(`/${APP_ID}/HouseholdDetails`, { HouseholdId: target.householdId });
    }
  };

  return (
    <>
      <LayoutRuntimeTop id="$b1" />
      <CommonUiLayout id="$b2" />
      <SkeletonSection id="$b3" inIsLoading={isLoading}>
        {!isLoading && households !== null ? (
          <Photobook_Carousel
            id="$b4"
            inHouseholds={households}
            inSelectedHousehold={selectedHousehold}
            onClosePhotobook={handlerClosePhotobook}
          />
        ) : (
          <CustomContainer id="$b5" options={LOADING_OPTIONS} />
        )}
      </SkeletonSection>
    </>
  );
}
