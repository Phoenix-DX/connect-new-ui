import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import type { CarouselHouseholdDetailsSlot } from '@/components/directory/CarouselHouseholdDetails';
import { EntitiesCarousel } from '@/components/directory/EntitiesCarousel';
import { HouseholdDetailsContainer, useHouseholdDetailsFlags } from '@/containers';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { SkeletonSection } from '@/components/ui/SkeletonSection';
import { useHouseholdCarousel } from './hooks/useHouseholdCarousel';
import { readHouseholdCarouselInputs } from './inputs';

/** @origin UBTConnect.Directory_Household.HouseholdCarousel
    The carousel of households: Layout_DetailPage (not primary) titled with "Locality, Country" of the active
    household, EntitiesCarousel of the preloaded households as content, BottomBarMenu and CommonUI_InsideLayout. Each
    household slide renders the household details container (HouseholdDetails_Block), which the page gives the
    carousel as a slot. The screen variables and handlers are in useHouseholdCarousel. */
export default function HouseholdCarousel() {
  const [params] = useSearchParams();
  const inputs = readHouseholdCarouselInputs(params);
  const carousel = useHouseholdCarousel(inputs);
  const householdDetailsFlags = useHouseholdDetailsFlags();

  const renderHouseholdDetails = (slot: CarouselHouseholdDetailsSlot) => (
    <HouseholdDetailsContainer
      id={slot.id}
      source={{ kind: 'server', householdId: slot.householdId }}
      flags={householdDetailsFlags}
      isSkeletonOnly={slot.isSkeletonOnly}
      onHouseholdDataFetched={slot.onHouseholdDataFetched}
      carouselTag={slot.carouselTag}
    />
  );

  return (
    <Layout_DetailPage
      id="$b1"
      inIsPrimaryColor={false}
      placeholderHeaderTitle={
        // The header title: a skeleton while HouseholdHeader is "".
        <SkeletonSection id="$b2" inIsLoading={carousel.householdHeader === ''}>
          <span data-expression="">
            {carousel.householdHeader !== '' ? carousel.householdHeader : 'Unavailable, Unavailable'}
          </span>
        </SkeletonSection>
      }
      content={
        <>
          <EntitiesCarousel
            id="$b3"
            inStartingPosition={carousel.startingPosition}
            inEntitiesCarouselItems={carousel.entitiesCarouselItems}
            inConnectEntityTypeId={Connect_Entity.Household}
            onEventSetHeader={carousel.onSetHeader}
            onEventMoved={carousel.onEventMoved}
            renderHouseholdDetails={renderHouseholdDetails}
          />
          {carousel.hasSwippedItems && <BackNavigationHandler id="$b4" onBackNavigation={carousel.onBackNavigation} />}
        </>
      }
      bottom={<BottomBar id="$b5" />}
      placeholderCommonUIInsideLayout={<CommonUiLayout id="$b6" />}
    />
  );
}
