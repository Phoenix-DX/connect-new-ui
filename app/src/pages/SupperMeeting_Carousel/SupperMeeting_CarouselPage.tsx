import { useSearchParams } from 'react-router';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { EntitiesCarousel } from '@/components/directory/EntitiesCarousel';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { useSupperMeetingCarousel } from './hooks/useSupperMeetingCarousel';
import { readSupperMeetingCarouselInputs } from './inputs';

/** @origin UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel
    The carousel of supper meetings: Layout_DetailPage (In_AlignTitleLeft False, primary header) titled by CustomText
    "Supper Meeting" with the default TextOptions, EntitiesCarousel of the preloaded supper meetings as content (its
    events are not handled), no bottom bar, CommonUI_InsideLayout. No call of its own. The screen variables are in
    useSupperMeetingCarousel. */
export default function SupperMeeting_Carousel() {
  const [params] = useSearchParams();
  const inputs = readSupperMeetingCarouselInputs(params);
  const carousel = useSupperMeetingCarousel(inputs);

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
        />
      }
      placeholderCommonUIInsideLayout={<CommonUiLayout id="$b4" />}
    />
  );
}
