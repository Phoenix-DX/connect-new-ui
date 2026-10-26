import type { OneSchoolCard } from '@/api/locality';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { EntityDetailsActionsContainer } from '@/containers/EntityDetailsActions/EntityDetailsActionsContainer';
import { ImageCard } from '@/components/ui/ImageCard';
import { ImageCardContent } from '@/components/ui/ImageCardContent';
import { UBT_ImageCardType, UBT_ImageSize } from '@/lib/ubtConnectLibrary/staticEntities';
import { Skeleton } from '@/components/ui/Skeleton';
import { Connect_Entity } from '@/lib/ubtConnectUtils/staticEntities';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import type { ListRow } from '@/pages/Locality_Details/hooks/localityBlocksState';
import { StopPropagationHelper } from './StopPropagationHelper';

export interface OneSchoolGlobal_ListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inIsLoading?: boolean;
  /** OneSchoolList with the record keys (the three skeleton rows take 0-2, the fetched rows appended after ListClear
      continue at 3: captured `l1-3709_3`, `l1-3709_4`). */
  oneSchoolList?: readonly ListRow<OneSchoolCard>[];
  /** Event Event_OnClick(Event_OneSchoolGlobalId). */
  onEventOnClick?: (oneSchoolGlobalId: string) => void;
  /** Event Event_ScrollEnding. */
  onEventScrollEnding?: () => unknown;
}

const EMPTY: ListRow<OneSchoolCard>[] = [];

/** The list of OneSchool Global schools: SkeletonSection (In_IsLoading) around the List ("list list-group
    list--gap-s", OnScrollEnding → Event_ScrollEnding) of ImageCard_LazyLoading (List, "padding-bottom-s",
    "bookmark--rounded", no avatars): a Container with the UBT_LazyImage of the school's SignedURL, and
    ImageCard__Content (Name, subtitle LocalityName) whose bottom section is a StopPropagationHelper around
    Directory_EntityDetailsActions (OneSchool Global, notes enabled, popup image SignedURL and name Trim(Name)). The
    card click raises Event_OnClick(CommunityBusinessId); Event_OnClick_Bookmark is declared but never raised.
    @origin UBTConnect.Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List */
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
      <Skeleton id={`${b}-$b1`} isLoading={inIsLoading}>
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
              <ImageCard
                id={`${item}-$b2`}
                inShowAvatarList={false}
                inExtendedClass="padding-bottom-s"
                inCardTypeId={UBT_ImageCardType.List}
                inBookmarkModifier="bookmark--rounded"
                onEventClick={() => onEventOnClick?.(card.communityBusinessId)}
                lazyImagePlaceholder={
                  <div data-container="">
                    <EntityLazyImage
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
                  <ImageCardContent
                    id={`${item}-$b4`}
                    inTitle={card.name}
                    inSubtitle={card.localityName}
                    inShowSubtitle
                    placeholderBottomSectionContent={
                      <StopPropagationHelper id={`${item}-$b5`}>
                        <EntityDetailsActionsContainer
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
      </Skeleton>
    </OSBlock>
  );
}
