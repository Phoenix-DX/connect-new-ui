import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { BackNavigationHandler } from '../../shared/NavigationHandler/BackNavigationHandler';
import { BottomBarMenu } from '../../shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { EntitiesCarousel } from '../../shared/UBTConnect/EntitiesCarousel';
import { Connect_Entity, Type_CarouselItemSwipeAction } from '../../shared/UBTConnect/lib/staticEntities';
import { Layout_DetailPage } from '../../shared/UBTConnectLibrary/Layout_DetailPage';
import { SkeletonSection } from '../../shared/UBTConnectLibrary/SkeletonSection';
import { setPreloadObject, usePreloadObject, useViewState } from '../../shell/navigation';
import { mockPreload, readHouseholdCarouselInputs, updateItemMarkAsRead } from './api';
import {
  appendSwippedItem,
  assignFromObject,
  clearSwipeAction,
  directory_Updates_CarouselSwipeAction,
  startingPosition,
  toEntitiesCarouselItems,
} from './components/logic';
import type { EntitiesCarousel_SwippedItem, HouseholdPreload } from './types';

const NO_SWIPPED_ITEMS: readonly EntitiesCarousel_SwippedItem[] = [];

/** UBTConnect.Directory_Household.HouseholdCarousel (HouseholdCarousel.mvc.js: model :1-85, view :86-356, controller
    :357-821): Layout_DetailPage (In_IsPrimaryColor False) titled with the active household's "Locality, Country",
    EntitiesCarousel of the preloaded households as content, BottomBarMenu and CommonUI_InsideLayout. */
export default function HouseholdCarousel() {
  const [params] = useSearchParams();
  const { In_StartingHouseholdId } = readHouseholdCarouselInputs(params);
  const preloadObject = usePreloadObject();

  /* OnInitialize (:450-510): AssignFromObject of the waiting preload (mock phase without one: the route's mock preload,
     Q1 → A), EntitiesCarousel_Items, StartingPosition. The screen variables are kept by the view cache (P-BACK); like
     the original, a restored HouseholdPreload that is not empty keeps the restored variables. */
  const [initial] = useState(() => {
    const preload = assignFromObject(preloadObject ?? mockPreload(In_StartingHouseholdId));
    return {
      preload,
      items: toEntitiesCarouselItems(preload),
      position: startingPosition(preload, In_StartingHouseholdId),
    };
  });
  const [storedPreload, setHouseholdPreload] = useViewState<HouseholdPreload>('HouseholdPreload', initial.preload);
  const [storedItems] = useViewState('EntitiesCarousel_Items', initial.items);
  const [storedPosition] = useViewState('StartingPosition', initial.position);
  const [householdHeader, setHouseholdHeader] = useViewState('HouseholdHeader', '');
  const [swippedItems, setSwippedItems] = useViewState('SwippedItems', NO_SWIPPED_ITEMS);
  const isEmpty = (p: HouseholdPreload) => p.CarouselHouseholdItem.length === 0;
  const householdPreload = isEmpty(storedPreload) ? initial.preload : storedPreload;
  const entitiesCarouselItems = isEmpty(storedPreload) ? initial.items : storedItems;
  const startingPositionValue = isEmpty(storedPreload) ? initial.position : storedPosition;

  /** Handler_EventMoved(In_ItemIndex) (:511-605). */
  const handlerEventMoved = async (in_ItemIndex: number) => {
    const swipeAction = householdPreload.CarouselHouseholdItem[in_ItemIndex]?.SwipeAction;
    const actionId = swipeAction?.ActionId ?? '';
    if (actionId === '') return; // Has swipe action?
    if (actionId !== Type_CarouselItemSwipeAction.UpdatesCarousel_SetIsRead) return;
    const swippedItemId = await directory_Updates_CarouselSwipeAction(
      swipeAction?.Parameters ?? '',
      updateItemMarkAsRead,
    );
    setHouseholdPreload((p) => clearSwipeAction(isEmpty(p) ? initial.preload : p, in_ItemIndex));
    if (swippedItemId !== '') setSwippedItems((list) => appendSwippedItem(list, swippedItemId, in_ItemIndex));
  };

  return (
    <Layout_DetailPage
      id="$b1"
      inIsPrimaryColor={false}
      placeholderHeaderTitle={
        // Header title (:174-216): skeleton while HouseholdHeader is "".
        <SkeletonSection id="$b2" inIsLoading={householdHeader === ''}>
          <span data-expression="">{householdHeader !== '' ? householdHeader : 'Unavailable, Unavailable'}</span>
        </SkeletonSection>
      }
      content={
        <>
          <EntitiesCarousel
            id="$b3"
            inStartingPosition={startingPositionValue}
            inEntitiesCarouselItems={entitiesCarouselItems}
            inConnectEntityTypeId={Connect_Entity.Household}
            onEventSetHeader={setHouseholdHeader} // Handler_SetHeader (:413-448)
            onEventMoved={(index) => void handlerEventMoved(index)}
          />
          {swippedItems.length > 0 && (
            // Handler_BackNavigation (:376-411): the swiped updates go back to the previous screen.
            <BackNavigationHandler
              id="$b4"
              onBackNavigation={() => {
                setPreloadObject(swippedItems);
              }}
            />
          )}
        </>
      }
      bottom={<BottomBarMenu id="$b5" />}
      placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b6" />}
    />
  );
}
