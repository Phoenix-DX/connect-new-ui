import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { DirectoryEmptyState } from '@/components/directory/DirectoryEmptyState';
import { SupperMeetingCardContent } from '@/components/directory/SupperMeetingCardContent';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { ImageCard } from '@/components/ui/ImageCard';
import { UBT_Color, UBT_ImageCardType, UBT_ImageSize, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SkeletonSection } from '@/components/ui/SkeletonSection';
import { Connect_Entity } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import {
  useLocalitySubdivisions,
  type LocalitySubdivisionsFlags,
} from '@/pages/Locality_Details/hooks/useLocalitySubdivisions';

export interface Locality_SubdivisionsProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** LocalityId (Long Integer as text). */
  localityId?: string;
  /** The flag of the flows, which the page reads. */
  flags: LocalitySubdivisionsFlags;
}

/** The Supper Meetings tag: SkeletonSection (Subdivision_Card_List_IsLoading) around a CustomContainer (Neutral0,
    padding y Small x Base) with Directory_EmptyState (Supper Meetings) for an empty loaded list, otherwise the List
    "Subdivision_List" of ImageCard_LazyLoading (List) cards: UBT_LazyImage of the subdivision and
    SupperMeeting_ImageCard_Content. The record keys of the list continue after the ten skeleton rows (captured
    `l1-3598_10..12`). The flows are in useLocalitySubdivisions.
    @origin UBTConnect.Directory_Locality.Locality_Subdivisions */
export function Locality_Subdivisions({ id, localityId = '0', flags }: Locality_SubdivisionsProps) {
  const { list, isLoading, onScrollEnding, onClickSubdivision } = useLocalitySubdivisions(localityId, flags);
  const b = id?.replace('$', '') ?? '';
  return (
    <OSBlock name="Directory_Locality.Locality_Subdivisions" id={id}>
      <SkeletonSection id={`${b}-$b1`} inIsLoading={isLoading}>
        <CustomContainer
          id={`${b}-Block_SubdivisionListWrapper`}
          options={{
            Background: { BackgroundColor: UBT_Color.Neutral0 },
            PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
          }}
        >
          {list.length === 0 && !isLoading ? (
            <DirectoryEmptyState id={`${b}-$b3`} entityTypeId={Connect_Entity.SupperMeetings_aka_Subdivisions} />
          ) : (
            <OSList
              id={`${b}-Subdivision_List`}
              className="list list-group list--gap-s"
              animateItems
              positionRelative
              source={list}
              keyOf={(row) => row.key}
              onScrollEnding={onScrollEnding}
            >
              {(row) => {
                const item = `${b}-l1-3598_${String(row.key)}`;
                return (
                  <div data-container="">
                    <ImageCard
                      id={`${item}-$b4`}
                      inCardTypeId={UBT_ImageCardType.List}
                      onEventClick={() => {
                        onClickSubdivision(row.card.subdivisionId);
                      }}
                      lazyImagePlaceholder={
                        <EntityLazyImage
                          id={`${item}-$b5`}
                          entityType={Connect_Entity.SupperMeetings_aka_Subdivisions}
                          imageSize={{ Width: UBT_ImageSize.MaxWidth_100vw }}
                          entityId={row.card.subdivisionId}
                          hasErrorMessage
                        />
                      }
                      placeholderContent={
                        <SupperMeetingCardContent id={`${item}-$b6`} inSubdivisionCardContent={row.card.content} />
                      }
                    />
                  </div>
                );
              }}
            </OSList>
          )}
        </CustomContainer>
      </SkeletonSection>
    </OSBlock>
  );
}
