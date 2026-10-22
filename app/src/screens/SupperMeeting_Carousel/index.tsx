import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { EntitiesCarousel } from '../../shared/UBTConnect/EntitiesCarousel';
import { Connect_Entity } from '../../shared/UBTConnect/lib/staticEntities';
import { CustomText } from '../../shared/UBTConnectLibrary/CustomText';
import { Layout_DetailPage } from '../../shared/UBTConnectLibrary/Layout_DetailPage';
import { usePreloadObject, useViewState } from '@/platform/navigation';
import { mockPreload, readSupperMeetingCarouselInputs } from './api';
import { assignFromObject, startingPosition, toEntitiesCarouselItems } from './components/logic';
import type { PreloadedSupperMeetings } from './types';

/** UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel (SupperMeeting_Carousel.mvc.js): Layout_DetailPage
    (In_AlignTitleLeft False, primary header) titled by CustomText "Supper Meeting" with default TextOptions,
    EntitiesCarousel of the preloaded supper meetings as content (its events are not handled), no bottom bar,
    CommonUI_InsideLayout. No call of its own. */
export default function SupperMeeting_Carousel() {
  const [params] = useSearchParams();
  const { In_StartingSupperMeetingId } = readSupperMeetingCarouselInputs(params);
  const preloadObject = usePreloadObject();

  /* ScreenEvent_OnInitialize: only while SupperMeetingsIdList.SupperMeetingIds is empty: AssignFromObject of the
     waiting preload (mock phase without one: the route's mock preload, Q1 → A), StartingPosition, then one
     EntitiesCarousel_Item per id. The screen variables are kept by the view cache (P-BACK); a restored list that is
     not empty keeps the restored variables. */
  const [initial] = useState(() => {
    const preload = assignFromObject(preloadObject ?? mockPreload(In_StartingSupperMeetingId));
    return {
      preload,
      items: toEntitiesCarouselItems(preload),
      position: startingPosition(preload, In_StartingSupperMeetingId),
    };
  });
  const [storedPreload] = useViewState<PreloadedSupperMeetings>('SupperMeetingsIdList', initial.preload);
  const [storedItems] = useViewState('EntitieslCarousel_Items', initial.items);
  const [storedPosition] = useViewState('StartingPosition', initial.position);
  const restored = storedPreload.SupperMeetingIds.length > 0;
  const entitiesCarouselItems = restored ? storedItems : initial.items;
  const startingPositionValue = restored ? storedPosition : initial.position;

  return (
    <Layout_DetailPage
      id="$b1"
      inAlignTitleLeft={false}
      placeholderHeaderTitle={<CustomText id="$b2" inText="Supper Meeting" inTextOptions={{}} />}
      content={
        <EntitiesCarousel
          id="$b3"
          inConnectEntityTypeId={Connect_Entity.SupperMeetings_aka_Subdivisions}
          inStartingPosition={startingPositionValue}
          inEntitiesCarouselItems={entitiesCarouselItems}
        />
      }
      placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b4" />}
    />
  );
}
