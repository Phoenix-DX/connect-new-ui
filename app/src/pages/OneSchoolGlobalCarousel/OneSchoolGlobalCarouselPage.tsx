import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import type { CarouselOneSchoolGlobalDetailsSlot } from '@/components/directory/CarouselOneSchoolGlobalDetails';
import { EntitiesCarousel } from '@/components/directory/EntitiesCarousel';
import { CustomText } from '@/components/ui/CustomText';
import { DetailLayoutContainer } from '@/containers/DetailLayout';
import { OneSchoolGlobalDetailsContainer } from '@/containers/OneSchoolGlobalDetails/OneSchoolGlobalDetailsContainer';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import { useOneSchoolGlobalCarousel } from './hooks/useOneSchoolGlobalCarousel';
import { readOneSchoolGlobalCarouselInputs } from './inputs';

/** @origin UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel
    The carousel of OneSchool Global schools: Layout_DetailPage (not primary) titled by CustomText "OneSchool Global"
    with the default TextOptions, EntitiesCarousel of the preloaded schools (Connect_Entity OneSchool Global; its
    events are not handled) and BackNavigationHandler while SwippedItems is not empty as content, BottomBarMenu and
    CommonUI_InsideLayout. Each school slide (EntitiesCarousel_OneSchoolGlobal) renders the school details container
    (OneSchoolGlobalDetails_Block), which the page gives the carousel as a slot. No call of its own. The screen
    variables are in useOneSchoolGlobalCarousel. */
export default function OneSchoolGlobalCarousel() {
  const [params] = useSearchParams();
  const inputs = readOneSchoolGlobalCarouselInputs(params);
  const carousel = useOneSchoolGlobalCarousel(inputs);

  const renderOneSchoolGlobalDetails = (slot: CarouselOneSchoolGlobalDetailsSlot) => (
    <OneSchoolGlobalDetailsContainer
      placement="slide"
      id={slot.id}
      oneSchoolGlobalId={slot.oneSchoolGlobalId}
      isRestoredFromCache={slot.isRestoredFromCache}
    />
  );

  return (
    <DetailLayoutContainer
      id="DetailPage"
      inIsPrimaryColor={false}
      placeholderHeaderTitle={<CustomText id="$b2" inText="OneSchool Global" />}
      content={
        <>
          <EntitiesCarousel
            id="$b3"
            inStartingPosition={carousel.startingPosition}
            inEntitiesCarouselItems={carousel.entitiesCarouselItems}
            inConnectEntityTypeId={Connect_Entity.OneSchoolGlobal}
            renderOneSchoolGlobalDetails={renderOneSchoolGlobalDetails}
          />
          {carousel.swippedItems.length > 0 && (
            <BackNavigationHandler id="$b4" onBackNavigation={carousel.onBackNavigation} />
          )}
        </>
      }
      bottom={<BottomBar id="$b5" />}
      placeholderCommonUIInsideLayout={<CommonUiLayout id="$b6" />}
    />
  );
}
