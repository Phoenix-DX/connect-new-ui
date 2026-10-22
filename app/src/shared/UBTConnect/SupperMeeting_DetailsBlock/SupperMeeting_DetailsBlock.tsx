// @os-block UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock
import { useEffect, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { useFlagOn } from '@/platform/flags/flags';
import { setPreloadObject, useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { ImageCard_LazyLoading } from '@/shared/UBTConnectLibrary/ImageCard_LazyLoading';
import { UBT_ImageCardType, UBT_ImageSize } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import { Directory_EntityDetailsActions } from '@/shared/UBTConnect/Directory_EntityDetailsActions/Directory_EntityDetailsActions';
import { get_LookupSection, getSkeleton_UI_SubdivisionDetails } from '@/shared/UBTConnect/lib/actions';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';
import type { CarouselPreloadedHouseholds, UI_Screen_SubdivisionDetails } from '@/shared/UBTConnect/lib/structures';
import { SubLayout_DirectoryDetailScreen } from '@/shared/UBTConnect/SubLayout_DirectoryDetailScreen';
import { SubLayout_DirectoryDetailScreen_Section } from '@/shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section';
import { SupperMeeting_HouseholdList } from '@/shared/UBTConnect/SupperMeeting_HouseholdList';
import { SupperMeeting_ImageCard_Content } from '@/shared/UBTConnect/SupperMeeting_ImageCard_Content';
import { getSubdivision } from './api';

export interface SupperMeeting_DetailsBlockProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_SubdivsionId (Long Integer as text; the OutSystems name keeps its typo). */
  inSubdivsionId?: string;
  /** Placeholder Placeholder_CarouselTag (inside the card's image tag). */
  placeholderCarouselTag?: ReactNode;
}

/** Details of a supper meeting (p:migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/
    UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js:168-441, controller :455-700).
    SubLayout_DirectoryDetailScreen: detail card = SkeletonSection(not IsDataFetched) > ImageCard_LazyLoading (Detail)
    with the subdivision photo (UBT_LazyImage, error message, width MaxWidth_100vw), Placeholder_CarouselTag and
    SupperMeeting_ImageCard_Content (address shown); call to action = SkeletonSection > Container > section titled
    Get_LookupSection(False).Actions.Plural > Directory_EntityDetailsActions (notes enabled, popup name = card Name);
    content = SupperMeeting_HouseholdList ("Block_Household_List"). ScreenEvent_OnReady (not restored from cache):
    GetSubdivision.Subdivision = GetSkeleton_UI_SubdivisionDetails, then DataActionGetSubdivision. */
export function SupperMeeting_DetailsBlock({
  id,
  inSubdivsionId = '0',
  placeholderCarouselTag,
}: SupperMeeting_DetailsBlockProps) {
  const [subdivisionId] = useState(inSubdivsionId);
  const [getSubdivisionData, setGetSubdivisionData] = useState<{
    isDataFetched: boolean;
    subdivision: UI_Screen_SubdivisionDetails;
  }>(() => ({ isDataFetched: false, subdivision: getSkeleton_UI_SubdivisionDetails() }));
  useEffect(() => {
    let alive = true;
    getSubdivision(subdivisionId).then(
      (subdivision) => {
        if (alive) setGetSubdivisionData({ isDataFetched: true, subdivision });
      },
      () => undefined, // IsDataFetched stays False: the skeleton stays (the runtime also calls handleError)
    );
    return () => {
      alive = false;
    };
  }, [subdivisionId]);

  const navigate = useOsNavigate();
  const hasCarouselEnabled = useFlagOn('C2EnableCarousel'); // GetHasCarouselEnabled (default-only, on)
  // OnClick_NavigateToHousehold (:480-540): the carousel with every listed household preloaded, else HouseholdDetails.
  const onClickNavigateToHousehold = (householdId: string, householdIdList: string[]) => {
    if (hasCarouselEnabled) {
      const preloaded: CarouselPreloadedHouseholds = {
        CarouselHouseholdItem: householdIdList.map((household) => ({ Household: household })),
      };
      setPreloadObject(preloaded);
      navigate(`/${APP_ID}/HouseholdCarousel`, { In_StartingHouseholdId: householdId });
    } else {
      navigate(`/${APP_ID}/HouseholdDetails`, { HouseholdId: householdId });
    }
  };

  const isLoading = !getSubdivisionData.isDataFetched;
  const card = getSubdivisionData.subdivision.Subdivision_Card ?? {};
  const content = card.Subdivision_Card_Content ?? {};
  return (
    <OSBlock name="Directory_SupperMeetings.SupperMeeting_DetailsBlock" id={id}>
      <SubLayout_DirectoryDetailScreen
        placeholderDetailCard={
          <SkeletonSection inIsLoading={isLoading}>
            <ImageCard_LazyLoading
              inCardTypeId={UBT_ImageCardType.Detail}
              lazyImagePlaceholder={
                <UBT_LazyImage
                  entityType={Connect_Entity.SupperMeetings_aka_Subdivisions}
                  hasErrorMessage
                  entityId={card.SubdivisionId ?? '0'}
                  imageSize={{ Width: UBT_ImageSize.MaxWidth_100vw }}
                />
              }
              placeholderImageTag={<div>{placeholderCarouselTag}</div>}
              placeholderContent={<SupperMeeting_ImageCard_Content inShowAddress inSubdivisionCardContent={content} />}
            />
          </SkeletonSection>
        }
        placeholderCallToAction={
          <SkeletonSection inIsLoading={isLoading}>
            <div data-container="">
              <SubLayout_DirectoryDetailScreen_Section inTitle={get_LookupSection(false).Actions.Plural}>
                <Directory_EntityDetailsActions
                  entityType={Connect_Entity.SupperMeetings_aka_Subdivisions}
                  contactPopUpOverrideOptions={{ Name: content.Name ?? '' }}
                  entityId={subdivisionId}
                  enableOptions={{ EnableNotes: true }}
                />
              </SubLayout_DirectoryDetailScreen_Section>
            </div>
          </SkeletonSection>
        }
        placeholderContent={
          <SupperMeeting_HouseholdList
            inSubdivisionId={subdivisionId}
            onEventOnClickHousehold={onClickNavigateToHousehold}
          />
        }
      />
    </OSBlock>
  );
}
