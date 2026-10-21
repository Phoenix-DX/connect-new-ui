import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { useFlagOn } from '../../lib/flags';
import { LayoutRuntime_Top } from '../../shared/NavigationHandler/LayoutRuntime_Top';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import type { CarouselPreloadedHouseholds } from '../../shared/UBTConnect/lib/structures';
import { CustomContainer } from '../../shared/UBTConnectLibrary/CustomContainer';
import { UBT_Color, UBT_Display, UBT_FontSize, UBT_Size } from '../../shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '../../shared/UBTConnectLibrary/SkeletonSection';
import { raiseToFlowHandler } from '../../shell/exceptions';
import {
  replaceOnUpcomingNavigation,
  setPreloadObject,
  useNavigateBack,
  useOsNavigate,
  useViewState,
  useWasRestoredFromCache,
} from '../../shell/navigation';
import { APP_ID } from '../../shell/paths';
import { readPhotobookInputs, useGetLocalityHouseholdIds } from './api';
import { Photobook_Carousel } from './components/Photobook_Carousel';
import { UBT_AlignItems, UBT_FlexDirection, UBT_JustifyContent } from './components/staticEntities';
import type { PhotobookHousehold, SelectedHousehold } from './types';

/** Loading placeholder (view :262-330): cyan lightest, padding base, no border, cyan darker display text, a centred
    column 100vh x 100vw (dom/loading.html:86-89). */
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

/** UBTConnect.Directory_Photobook.Photobook (Photobook.mvc.js: model :1-110, view :111-350, controller :351-610). A
    screen without a layout: LayoutRuntime_Top, CommonUI_InsideLayout and a SkeletonSection (In_IsLoading = IsLoading)
    holding the Photobook_Carousel once IsLoading is False and GetLocalityHouseholdIds is fetched, else the full-screen
    loading container.
    - OnInitialize (:487-530): unless the view is restored from the cache, SelectedHousehold.Id = In_HouseholdId and
      IsLoading = True (P-BACK: the cached variables otherwise).
    - DataActionGetLocalityHouseholdIds at start; OnAfterFetch (:556-583): SelectedHousehold.Position = index of
      In_HouseholdId in the list (0 when absent), IsLoading = False. A failure goes to the screen's handleError → the
      flow handler (raiseToFlowHandler).
    - Handler_ClosePhotobook (:404-460): with a target household, ReplaceOnUpcomingNavigation, then HouseholdCarousel
      (In_StartingHouseholdId; every household preloaded) when GetHasCarouselEnabled (flag C2EnableCarousel,
      default-only on), else HouseholdDetails (HouseholdId); without one, back. */
export default function Photobook() {
  const [params] = useSearchParams();
  const inputs = readPhotobookInputs(params);
  const restored = useWasRestoredFromCache();
  const [selectedHousehold, setSelectedHousehold] = useViewState<SelectedHousehold>('SelectedHousehold', {
    id: inputs.In_HouseholdId,
    position: 0,
  });
  const [isLoading, setIsLoading] = useViewState('IsLoading', true);
  const [saved, setSaved] = useViewState<PhotobookHousehold[] | null>('GetLocalityHouseholdIds', null);

  const households = useGetLocalityHouseholdIds(inputs, () => ({ isLoading, selectedHousehold }));
  /* OnAfterFetch_GetLocalityHouseholdIds, once per answer. */
  useEffect(() => {
    if (!households.data) return;
    const list = households.data;
    const index = list.findIndex((h) => h.householdId === inputs.In_HouseholdId);
    setSaved(list);
    setSelectedHousehold((s) => ({ ...s, position: index !== -1 ? index : 0 }));
    setIsLoading(false);
  }, [households.data, households.dataUpdatedAt, inputs.In_HouseholdId, setSaved, setSelectedHousehold, setIsLoading]);
  useEffect(() => {
    if (households.error) raiseToFlowHandler(households.error);
  }, [households.error]);

  const fetched = households.data ?? (restored ? saved : null);

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
        CarouselHouseholdItem: (fetched ?? []).map((h) => ({ Household: h.householdId })),
      };
      setPreloadObject(preloaded);
      navigate(`/${APP_ID}/HouseholdCarousel`, { In_StartingHouseholdId: target.householdId });
    } else {
      navigate(`/${APP_ID}/HouseholdDetails`, { HouseholdId: target.householdId });
    }
  };

  return (
    <>
      <LayoutRuntime_Top id="$b1" />
      <CommonUI_InsideLayout id="$b2" />
      <SkeletonSection id="$b3" inIsLoading={isLoading}>
        {!isLoading && fetched !== null ? (
          <Photobook_Carousel
            id="$b4"
            inHouseholds={fetched}
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
