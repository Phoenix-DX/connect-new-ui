import { useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DataFetchStatus, OSList } from '@/components/ui/os/OSList';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import {
  UBT_AlignItems,
  UBT_Color,
  UBT_Display,
  UBT_Icons2,
  UBT_ImageSize,
  UBT_JustifyContent,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Member_ListItem } from '@/shared/UBTConnectLibrary/Member_ListItem';
import { NonMemberListItem } from '@/components/household/NonMemberListItem';
import { Skeleton } from '@/components/ui/Skeleton';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { getSkeletonList_UI_HouseholdMembers } from '@/shared/UBTConnect/lib/actions';
import { Connect_Entity, Connect_HouseholdMemberRole } from '@/shared/UBTConnect/lib/staticEntities';
import type { UI_HouseholdMember } from '@/shared/UBTConnect/lib/structures';
import { DirectoryDetailSection } from '@/components/layout/DirectoryDetailSection';

const NO_MEMBERS: UI_HouseholdMember[] = [];
const AVATAR_SIZE = { Height: UBT_ImageSize.Base_52, Width: UBT_ImageSize.Square };
const memberKey = (member: UI_HouseholdMember, index: number) => `${member.Id ?? ''}-${String(index)}`;

export interface HouseholdMemberListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** False: a click on a member does nothing. Default true. */
  isEnabled?: boolean;
  /** The members of the household. */
  members?: UI_HouseholdMember[];
  /** The married children who live in other households. */
  nonMembers?: UI_HouseholdMember[];
  /** Shows the skeleton. While it is true and there are no members, the list shows five skeleton members until the
      parent sets the members again. */
  isLoading?: boolean;
  /** The data fetch status of the source of `members` (the status of the list). Default Fetched. */
  membersDataFetchStatus?: DataFetchStatus;
  /** The data fetch status of the source of `nonMembers`. Default Fetched. */
  nonMembersDataFetchStatus?: DataFetchStatus;
  /** The call-to-actions of a member whose HasCTAs is true (the parent gives the entity actions). */
  renderMemberActions?: (member: UI_HouseholdMember) => ReactNode;
  /** The user clicked a member (its id). Not raised for a child row, for id 0 or when not enabled. */
  onMemberClick?: (memberId: string) => void;
  /** The user clicked a married child (row or chevron). The parent checks the access to the region of the child. */
  onNonMemberClick?: (member: UI_HouseholdMember) => void;
}

/** The members of a household: a skeleton section with the section "Household members" (an animated list of member
    rows with their call-to-actions and a chevron), then a section without title with the married children in other
    households.
    @origin UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block */
export function HouseholdMemberList({
  id,
  isEnabled = true,
  members = NO_MEMBERS,
  nonMembers = NO_MEMBERS,
  isLoading = false,
  membersDataFetchStatus = DataFetchStatus.Fetched,
  nonMembersDataFetchStatus = DataFetchStatus.Fetched,
  renderMemberActions,
  onMemberClick,
  onNonMemberClick,
}: HouseholdMemberListProps) {
  // OnReady: while loading without members, the list shows the skeleton list until the parent sets the members again.
  const [ready] = useState(() => ({
    source: members,
    skeleton: isLoading && members.length === 0 ? getSkeletonList_UI_HouseholdMembers(5) : undefined,
  }));
  const shownMembers = ready.skeleton !== undefined && members === ready.source ? ready.skeleton : members;

  // Handler_MemberOnClick: nothing for member id 0 or when not enabled.
  const memberOnClick = (memberId: string) => {
    if (memberId === '0' || !isEnabled) return;
    onMemberClick?.(memberId);
  };
  const nonMemberClick = (member: UI_HouseholdMember) => () => {
    onNonMemberClick?.(member);
  };

  return (
    <OSBlock name="Directory_Household_Blocks.HouseholdDetails_Members_Block" id={id}>
      <Skeleton isLoading={isLoading}>
        <CustomContainer options={{ MarginSize: { BottomSizeId: UBT_Size.ExtraSmall } }}>
          <DirectoryDetailSection inTitle="Household members">
            <OSList
              source={shownMembers}
              keyOf={memberKey}
              className="list list-group list--gap-s"
              animateItems
              disableVirtualization
              sourceDataFetchStatus={membersDataFetchStatus}
            >
              {(member) => (
                <Member_ListItem
                  isEnabled={isEnabled}
                  lifeCycleText={member.LifeCycleText ?? ''}
                  title={member.Title ?? ''}
                  lifeCycleTextItalic={member.LifeCycleText_IsItallic ?? false}
                  onOnClickPerson={() => {
                    memberOnClick(member.MemberRole !== Connect_HouseholdMemberRole.Child ? (member.Id ?? '0') : '0');
                  }}
                  placeholderLeft={
                    <EntityLazyImage
                      entityId={member.Id ?? '0'}
                      entityType={Connect_Entity.Member}
                      imageSize={AVATAR_SIZE}
                    />
                  }
                  actions={
                    <CustomContainer
                      options={{
                        DisplayOptions: { Display: UBT_Display.Flex, JustifyContent: UBT_JustifyContent.SpaceBetween },
                      }}
                    >
                      {member.HasCTAs === true && renderMemberActions?.(member)}
                      {member.HasNavigation === true && (
                        <div className="display-flex flex-direction-column justify-content-center" data-container="">
                          <CustomContainer
                            options={{ DisplayOptions: {}, HeightOptions: {}, WidthOptions: { Min: '100' } }}
                          >
                            <Icon
                              inIconId={UBT_Icons2.ChevronRight}
                              inColorId={UBT_Color.Neutral4}
                              onClick={() => {
                                memberOnClick(member.Id ?? '0');
                              }}
                            />
                          </CustomContainer>
                        </div>
                      )}
                    </CustomContainer>
                  }
                />
              )}
            </OSList>
          </DirectoryDetailSection>
        </CustomContainer>
        <DirectoryDetailSection inPaddingBottom={UBT_Size.Base} inPaddingTop={UBT_Size.Small} inTitle="">
          <OSList
            source={nonMembers}
            keyOf={memberKey}
            className="list list-group list--gap-s"
            animateItems
            disableVirtualization
            sourceDataFetchStatus={nonMembersDataFetchStatus}
          >
            {(member) => (
              <NonMemberListItem
                marriageHighlightText={member.MarriageHighlightText ?? ''}
                marriedPartnerTakenText={member.MarriagePartnerTakenText ?? ''}
                deceasedCaption={member.LifeCycleText ?? ''}
                isEnabled={isEnabled}
                title={member.Title ?? ''}
                lifeCycleTextItalic={member.LifeCycleText_IsItallic ?? false}
                marriedCaption={member.MarriageText ?? ''}
                onOnClickPerson={nonMemberClick(member)}
                placeholderLeft={
                  <EntityLazyImage
                    imageSize={AVATAR_SIZE}
                    entityType={Connect_Entity.Member}
                    entityId={member.Id ?? '0'}
                  />
                }
                actions={
                  member.HasNavigation === true && (
                    <div className="display-flex flex-direction-column justify-content-center" data-container="">
                      <CustomContainer
                        options={{
                          DisplayOptions: {
                            Display: UBT_Display.Flex,
                            AlignItems: UBT_AlignItems.Center,
                            JustifyContent: UBT_JustifyContent.Center,
                          },
                          HeightOptions: {},
                          WidthOptions: { Min: '100' },
                        }}
                      >
                        <Icon
                          inIconId={UBT_Icons2.ChevronRight}
                          inColorId={UBT_Color.Neutral4}
                          onClick={nonMemberClick(member)}
                        />
                      </CustomContainer>
                    </div>
                  )
                }
              />
            )}
          </OSList>
        </DirectoryDetailSection>
      </Skeleton>
    </OSBlock>
  );
}
