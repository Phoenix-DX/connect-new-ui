import type { ReactNode } from 'react';
import { HouseholdAddress } from '@/components/household/HouseholdAddress/HouseholdAddress';
import {
  cardContent,
  HOUSEHOLD_TAG_ABOUT,
  HOUSEHOLD_TAG_PHOTOS,
  isShownHousehold,
} from '@/components/household/householdCard';
import { HouseholdMemberList } from '@/components/household/HouseholdMemberList/HouseholdMemberList';
import { HouseholdTags } from '@/components/household/HouseholdTags/HouseholdTags';
import { HouseholdTimelinePhotos } from '@/components/household/HouseholdTimelinePhotos/HouseholdTimelinePhotos';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DataFetchStatus } from '@/components/ui/os/OSList';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { ImageCardContent } from '@/components/ui/ImageCardContent';
import { ImageCard } from '@/components/ui/ImageCard';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons2,
  UBT_ImageCardType,
  UBT_ImageSize,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';
import { Skeleton } from '@/components/ui/Skeleton';
import type { Directory_Coordinates } from '@/lib/ubtConnectUtils/structures';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { Connect_Entity, UBT_Icons2 as UBTConnect_Icons2 } from '@/lib/ubtConnect/staticEntities';
import type {
  UI_HouseholdMember,
  UI_HouseholdTimelineImages,
  UI_Screen_HouseholdDetails,
} from '@/lib/ubtConnect/structures';
import { DirectoryDetailLayout } from '@/components/layout/DirectoryDetailLayout';

/** The household that the view shows (the outputs of DataActionGetHousehold). */
export interface HouseholdDetailsData {
  Household: UI_Screen_HouseholdDetails;
  Out_HouseholdMembers: UI_HouseholdMember[];
  Out_NonHouseholdMembers: UI_HouseholdMember[];
  /** False: the profile is private and only visible to the user. */
  isVisible: boolean;
}

export interface HouseholdDetailsViewProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** The household id (Long Integer as text): the photo, the Photobook link and the entity actions use it. */
  householdId: string;
  /** False: every link and action is disabled (the Profile preview). */
  isEnabled: boolean;
  /** Shows the kebab menu (edit, share) and the share sheet. */
  showKebabMenu: boolean;
  /** LD check mobileDirectoryHouseholdGallery (registry default on, as TST): on hides the Coming Soon box of the Photos tag. */
  hasHouseholdGallery?: boolean;
  /** Hides the call-to-action section on the About tag. */
  hideActions: boolean;
  /** The household, its members and its visibility. */
  household: HouseholdDetailsData;
  /** The status of the household data: anything but Fetched shows the skeleton. */
  dataFetchStatus: DataFetchStatus;
  /** The map coordinates of the address. */
  coordinates: Directory_Coordinates;
  /** The About and Photos tags, and the identifier of the selected one. */
  tags: Tag[];
  selectedTag: string;
  /** The card shows the bookmarked state. */
  isBookmarked: boolean;
  /** Hides the members. */
  isSkeletonOnly: boolean;
  /** Hides the call-to-action section (the Photos tag without Photobook access). */
  hidePhotobookActions: boolean;
  /** The timeline images of the Photos tag. */
  timelineImages: UI_HouseholdTimelineImages[];
  /** Placeholder inside the image tag of the card (the carousel tag of a carousel slide). */
  carouselTag?: ReactNode;
  /** The entity actions of the household (call-to-action section, About tag). */
  entityActions?: ReactNode;
  /** The call-to-actions of a member. */
  renderMemberActions?: (member: UI_HouseholdMember) => ReactNode;
  /** The share sheet (shown with the kebab menu). */
  shareSheet?: ReactNode;
  onTagsChanged: (tags: Tag[]) => void;
  onEdit: () => void;
  onShare: () => void;
  onLocalityClick: () => void;
  onSupperMeetingClick: () => void;
  onPhotobookClick: () => void;
  onMemberClick: (memberId: string) => void;
  onNonMemberClick: (member: UI_HouseholdMember) => void;
  onTimelineDateSelected: (date: string) => void;
}

/** The household details: the detail card (photo, tags, name, About or Photos section), the call-to-action section
    ("Actions" with the entity actions on the About tag, the Photobook link on the Photos tag) and the members, in the
    directory detail layout; then the share sheet when the kebab menu shows. The card and the call-to-action section
    show the skeleton until the household is fetched.
    @origin UBTConnect.Directory_Household.HouseholdDetails_Block */
export function HouseholdDetailsView({
  id,
  householdId,
  isEnabled,
  showKebabMenu,
  hideActions,
  household,
  dataFetchStatus,
  coordinates,
  tags,
  selectedTag,
  isBookmarked,
  isSkeletonOnly,
  hidePhotobookActions,
  timelineImages,
  carouselTag,
  entityActions,
  renderMemberActions,
  shareSheet,
  hasHouseholdGallery = false,
  onTagsChanged,
  onEdit,
  onShare,
  onLocalityClick,
  onSupperMeetingClick,
  onPhotobookClick,
  onMemberClick,
  onNonMemberClick,
  onTimelineDateSelected,
}: HouseholdDetailsViewProps) {
  const content = cardContent(household.Household);
  const isAbout = selectedTag === HOUSEHOLD_TAG_ABOUT;
  const isLoading = dataFetchStatus !== DataFetchStatus.Fetched;

  const detailCard = (
    <Skeleton isLoading={isLoading}>
      <ImageCard
        inIsBookmarked={isBookmarked}
        inCardTypeId={UBT_ImageCardType.Detail}
        lazyImagePlaceholder={
          <EntityLazyImage
            hasErrorMessage
            imageSize={{ Width: UBT_ImageSize.MaxWidth_100vw }}
            entityType={Connect_Entity.Household}
            entityId={isShownHousehold(content) ? householdId : ''}
          />
        }
        placeholderImageTag={<div>{carouselTag}</div>}
        placeholderContent={
          <ImageCardContent
            inTitle={isAbout ? (content.Name ?? '') : 'Household gallery'}
            inSubtitle={isAbout ? (content.FamilyNames ?? '') : ''}
            inShowSubtitle={isAbout && (content.FamilyNames ?? '') !== ''}
            placeholderTopSectionContent={
              <HouseholdTags
                isEnabled={isEnabled}
                tags={tags}
                showKebabMenu={showKebabMenu}
                isVisible={household.isVisible}
                onTagsChanged={onTagsChanged}
                onEdit={onEdit}
                onShare={onShare}
              />
            }
            placeholderBottomSectionContent={
              <>
                {isAbout && (
                  <HouseholdAddress
                    isEnabled={isEnabled}
                    content={content}
                    coordinates={coordinates}
                    onLocalityClick={onLocalityClick}
                    onSupperMeetingClick={onSupperMeetingClick}
                  />
                )}
                {selectedTag === HOUSEHOLD_TAG_PHOTOS && (
                  <HouseholdTimelinePhotos
                    images={timelineImages}
                    hasHouseholdGallery={hasHouseholdGallery}
                    onDateSelected={onTimelineDateSelected}
                  />
                )}
              </>
            }
          />
        }
      />
    </Skeleton>
  );

  const callToAction = hidePhotobookActions ? null : (
    <Skeleton isLoading={isLoading}>
      <CustomContainer
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Small, BottomSizeId: UBT_Size.Base },
        }}
      >
        <CustomText
          inText={isAbout ? 'Actions' : 'Photobook'}
          inTextOptions={{
            Color: UBT_Color.Neutral9,
            FontSize: UBT_FontSize.Small,
            FontWeight: UBT_FontWeight.SemiBold,
          }}
        />
        {isAbout ? (
          <>
            <div className="margin-bottom-xs" data-container="" />
            {entityActions}
          </>
        ) : (
          <CustomContainer
            options={{
              PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
              DisplayOptions: {},
            }}
            onClicked={onPhotobookClick}
          >
            <ColumnsTwo
              columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast, SpacingSize: UBT_Size.Small }}
              left={
                <IconText text="Photobook" spacingSize={UBT_Size.Base}>
                  <Icon inIconId={UBTConnect_Icons2.BookClosed} />
                </IconText>
              }
              right={<Icon inIconId={UBT_Icons2.ChevronRight} />}
            />
          </CustomContainer>
        )}
      </CustomContainer>
    </Skeleton>
  );

  return (
    <OSBlock name="Directory_Household.HouseholdDetails_Block" id={id}>
      <DirectoryDetailLayout
        hideActions={hideActions && isAbout}
        placeholderDetailCard={detailCard}
        placeholderCallToAction={callToAction}
        placeholderContent={
          isSkeletonOnly ? null : (
            <div className={isAbout ? '' : 'hidden'} data-container="">
              <HouseholdMemberList
                nonMembers={household.Out_NonHouseholdMembers}
                isEnabled={isEnabled}
                isLoading={isLoading}
                members={household.Out_HouseholdMembers}
                nonMembersDataFetchStatus={dataFetchStatus}
                membersDataFetchStatus={dataFetchStatus}
                renderMemberActions={renderMemberActions}
                onNonMemberClick={onNonMemberClick}
                onMemberClick={onMemberClick}
              />
            </div>
          )
        }
      />
      {showKebabMenu && shareSheet}
    </OSBlock>
  );
}
