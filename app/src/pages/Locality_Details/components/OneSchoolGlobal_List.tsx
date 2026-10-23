// @os-block UBTConnect.Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { Directory_EntityDetailsActions } from '@/shared/UBTConnect/Directory_EntityDetailsActions/Directory_EntityDetailsActions';
import { ImageCard_LazyLoading } from '@/shared/UBTConnectLibrary/ImageCard_LazyLoading';
import { ImageCard__Content } from '@/shared/UBTConnectLibrary/ImageCard__Content';
import { UBT_ImageCardType, UBT_ImageSize } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { UBT_LazyImage } from '@/shared/UBTConnect_Utils/UBT_LazyImage';
import type { OneSchoolCard } from '@/pages/Locality_Details/types';
import { StopPropagationHelper } from './StopPropagationHelper';

/** A row of OneSchoolList with its record key (the three skeleton rows take 0-2, the fetched rows appended after
    ListClear continue at 3: captured `l1-3709_3`, `l1-3709_4`). */
export interface OneSchoolRow {
  key: number;
  card: OneSchoolCard;
}

export interface OneSchoolGlobal_ListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inIsLoading?: boolean;
  oneSchoolList?: readonly OneSchoolRow[];
  /** Event Event_OnClick(Event_OneSchoolGlobalId). */
  onEventOnClick?: (oneSchoolGlobalId: string) => void;
  /** Event Event_ScrollEnding. */
  onEventScrollEnding?: () => unknown;
}

const EMPTY: OneSchoolRow[] = [];

/** Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List (p:migration/screens/Locality_Details/analysis/sources/
    pretty/UBTConnect.Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List.mvc.js view :266-672): SkeletonSection
    (In_IsLoading) around the List ("list list-group list--gap-s", OnScrollEnding → Event_ScrollEnding) of
    ImageCard_LazyLoading (List, "padding-bottom-s", "bookmark--rounded", no avatars): a Container with the
    UBT_LazyImage of the school's SignedURL, and ImageCard__Content (Name, subtitle LocalityName) whose bottom section
    is a StopPropagationHelper around Directory_EntityDetailsActions (OneSchool Global, notes enabled, popup image
    SignedURL and name Trim(Name)). The card click raises Event_OnClick(CommunityBusinessId); Event_OnClick_Bookmark is
    declared but never raised. */
export function OneSchoolGlobal_List({
  id,
  inIsLoading = false,
  oneSchoolList = EMPTY,
  onEventOnClick,
  onEventScrollEnding,
}: OneSchoolGlobal_ListProps) {
  const b = id?.replace('$', '') ?? '';
  return (
    <OSBlock name="Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List" id={id}>
      <SkeletonSection id={`${b}-$b1`} inIsLoading={inIsLoading}>
        <OSList
          className="list list-group list--gap-s"
          animateItems
          positionRelative
          source={oneSchoolList}
          keyOf={(row) => row.key}
          onScrollEnding={onEventScrollEnding}
        >
          {({ key, card }) => {
            const item = `${b}-l1-3709_${String(key)}`;
            return (
              <ImageCard_LazyLoading
                id={`${item}-$b2`}
                inShowAvatarList={false}
                inExtendedClass="padding-bottom-s"
                inCardTypeId={UBT_ImageCardType.List}
                inBookmarkModifier="bookmark--rounded"
                onEventClick={() => onEventOnClick?.(card.communityBusinessId)}
                lazyImagePlaceholder={
                  <div data-container="">
                    <UBT_LazyImage
                      id={`${item}-$b3`}
                      entityId={card.communityBusinessId}
                      imageURL={card.signedURL}
                      hasErrorMessage
                      imageSize={{ Width: UBT_ImageSize.MaxWidth_100vw }}
                      entityType={Connect_Entity.OneSchoolGlobal}
                    />
                  </div>
                }
                placeholderContent={
                  <ImageCard__Content
                    id={`${item}-$b4`}
                    inTitle={card.name}
                    inSubtitle={card.localityName}
                    inShowSubtitle
                    placeholderBottomSectionContent={
                      <StopPropagationHelper id={`${item}-$b5`}>
                        <Directory_EntityDetailsActions
                          id={`${item}-$b6`}
                          entityType={Connect_Entity.OneSchoolGlobal}
                          entityId={card.communityBusinessId}
                          contactPopUpOverrideOptions={{ ImageURL: card.signedURL, Name: card.name.trim() }}
                          enableOptions={{ EnableNotes: true }}
                        />
                      </StopPropagationHelper>
                    }
                  />
                }
              />
            );
          }}
        </OSList>
      </SkeletonSection>
    </OSBlock>
  );
}
