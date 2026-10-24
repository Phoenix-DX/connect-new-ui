import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import type { CarouselSupperMeetingDetailsSlot } from '@/components/directory/CarouselSupperMeetingDetails';
import { EntitiesCarousel } from '@/components/directory/EntitiesCarousel';
import { SupperMeetingDetailsContainer, useSupperMeetingDetailsFlags } from '@/containers';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';
import { CustomText } from '@/components/ui/CustomText';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { useSupperMeetingCarousel } from './hooks/useSupperMeetingCarousel';
import { readSupperMeetingCarouselInputs } from './inputs';

/** @origin UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel
    The carousel of supper meetings: Layout_DetailPage (In_AlignTitleLeft False, primary header) titled by CustomText
    "Supper Meeting" with the default TextOptions, EntitiesCarousel of the preloaded supper meetings as content (its
    events are not handled), no bottom bar, CommonUI_InsideLayout. Each supper meeting slide renders the supper meeting
    details container (SupperMeeting_DetailsBlock), which the page gives the carousel as a slot. No call of its own.
    The screen variables are in useSupperMeetingCarousel. */
export default function SupperMeeting_Carousel() {
  const [params] = useSearchParams();
  const inputs = readSupperMeetingCarouselInputs(params);
  const carousel = useSupperMeetingCarousel(inputs);
  const supperMeetingDetailsFlags = useSupperMeetingDetailsFlags();

  const renderSupperMeetingDetails = (slot: CarouselSupperMeetingDetailsSlot) => (
    <SupperMeetingDetailsContainer
      id={slot.id}
      subdivisionId={slot.subdivisionId}
      flags={supperMeetingDetailsFlags}
      carouselTag={slot.carouselTag}
    />
  );

  return (
    <Layout_DetailPage
      id="$b1"
      inAlignTitleLeft={false}
      placeholderHeaderTitle={<CustomText id="$b2" inText="Supper Meeting" inTextOptions={{}} />}
      content={
        <EntitiesCarousel
          id="$b3"
          inConnectEntityTypeId={Connect_Entity.SupperMeetings_aka_Subdivisions}
          inStartingPosition={carousel.startingPosition}
          inEntitiesCarouselItems={carousel.entitiesCarouselItems}
          renderSupperMeetingDetails={renderSupperMeetingDetails}
        />
      }
      placeholderCommonUIInsideLayout={<CommonUiLayout id="$b4" />}
    />
  );
}
