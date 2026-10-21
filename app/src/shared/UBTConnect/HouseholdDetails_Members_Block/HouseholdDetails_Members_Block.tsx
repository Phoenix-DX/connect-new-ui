// @os-block UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block
import { useState } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { DataFetchStatus, OSList } from '../../../components/OSList';
import { showUpgradePopUp } from '../../../shell/dialogs';
import { CustomContainer } from '../../UBTConnectLibrary/CustomContainer';
import { Icon } from '../../UBTConnectLibrary/Icon';
import {
  UBT_AlignItems,
  UBT_Color,
  UBT_Display,
  UBT_Icons2,
  UBT_ImageSize,
  UBT_JustifyContent,
  UBT_Size,
} from '../../UBTConnectLibrary/lib/staticEntities';
import { Member_ListItem } from '../../UBTConnectLibrary/Member_ListItem';
import { NonMember_ListItem } from '../../UBTConnectLibrary/NonMember_ListItem';
import { SkeletonSection } from '../../UBTConnectLibrary/SkeletonSection';
import { UBT_LazyImage } from '../../UBTConnect_Utils/UBT_LazyImage';
import { Directory_EntityDetailsActions } from '../Directory_EntityDetailsActions/Directory_EntityDetailsActions';
import { getSkeletonList_UI_HouseholdMembers, hasAccessToRegion } from '../lib/actions';
import { Connect_Entity, Connect_HouseholdMemberRole } from '../lib/staticEntities';
import type { UI_HouseholdMember } from '../lib/structures';
import { SubLayout_DirectoryDetailScreen_Section } from '../SubLayout_DirectoryDetailScreen_Section';

const NO_MEMBERS: UI_HouseholdMember[] = [];
const AVATAR_SIZE = { Height: UBT_ImageSize.Base_52, Width: UBT_ImageSize.Square };
const memberKey = (member: UI_HouseholdMember, index: number) => `${member.Id ?? ''}-${String(index)}`;

export interface HouseholdDetails_Members_BlockProps {
  /** OutSystems instance id of the block. */
  id?: string;
  isEnabled?: boolean;
  inHouseholdMembers?: UI_HouseholdMember[];
  inNonHouseholdMembers?: UI_HouseholdMember[];
  inIsLoading?: boolean;
  /** Data fetch status of In_HouseholdMembers (`_in_HouseholdMembersInDataFetchStatus`, the status of the caller's data
      source; :274 passes it to the List as `source_dataFetchStatus`). Default Fetched. */
  inHouseholdMembersDataFetchStatus?: DataFetchStatus;
  /** Data fetch status of In_NonHouseholdMembers (`_in_NonHouseholdMembersInDataFetchStatus`, :568). Default Fetched. */
  inNonHouseholdMembersDataFetchStatus?: DataFetchStatus;
  /** Event Event_MemberOnClick(MemberId). */
  onEventMemberOnClick?: (memberId: string) => void;
  /** Event Event_NonMemberOnClick(HouseholdId): raised only when the user has access to the member's region. */
  onEventNonMemberOnClick?: (householdId: string) => void;
}

/** Members of a household (p:migration/screens/HouseholdCarousel/analysis/sources/pretty/
    UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc.js:186-760, controller :785-960).
    SkeletonSection(In_IsLoading) > CustomContainer (margin-bottom ExtraSmall) > section "Household members" with the
    List "list list-group list--gap-s" (animated, virtualization disabled) of Member_ListItem, then a section without
    title (padding top Small, bottom Base) with the List of NonMember_ListItem. OnReady: while In_IsLoading with no
    members the list shows GetSkeletonList_UI_HouseholdMembers(5) until the inputs change. */
export function HouseholdDetails_Members_Block({
  id,
  isEnabled = true,
  inHouseholdMembers = NO_MEMBERS,
  inNonHouseholdMembers = NO_MEMBERS,
  inIsLoading = false,
  inHouseholdMembersDataFetchStatus = DataFetchStatus.Fetched,
  inNonHouseholdMembersDataFetchStatus = DataFetchStatus.Fetched,
  onEventMemberOnClick,
  onEventNonMemberOnClick,
}: HouseholdDetails_Members_BlockProps) {
  // ScreenEvent_OnReady (:785-800): In_HouseholdMembers = the skeleton list, kept until the parent sets the input again.
  const [ready] = useState(() => ({
    source: inHouseholdMembers,
    skeleton: inIsLoading && inHouseholdMembers.length === 0 ? getSkeletonList_UI_HouseholdMembers(5) : undefined,
  }));
  const members =
    ready.skeleton !== undefined && inHouseholdMembers === ready.source ? ready.skeleton : inHouseholdMembers;

  // Handler_MemberOnClick (:836-850): nothing for MemberId 0 or when not enabled, else Event_MemberOnClick(MemberId).
  const memberOnClick = (memberId: string) => {
    if (memberId === '0' || !isEnabled) return;
    onEventMemberOnClick?.(memberId);
  };
  // Handler_NonMemberOnClick (:869-905): HasAccessToRegion, then Event_NonMemberOnClick or the upgrade popup.
  const nonMemberOnClick = async (localityName: string, countryName: string, householdId: string) => {
    if (await hasAccessToRegion(localityName, countryName)) onEventNonMemberOnClick?.(householdId);
    else await showUpgradePopUp();
  };
  const nonMemberClick = (member: UI_HouseholdMember) => () => {
    void nonMemberOnClick(member.LocalityName ?? '', member.CountryName ?? '', member.HouseholdId ?? '0');
  };

  return (
    <OSBlock name="Directory_Household_Blocks.HouseholdDetails_Members_Block" id={id}>
      <SkeletonSection inIsLoading={inIsLoading}>
        <CustomContainer options={{ MarginSize: { BottomSizeId: UBT_Size.ExtraSmall } }}>
          <SubLayout_DirectoryDetailScreen_Section inTitle="Household members">
            <OSList
              source={members}
              keyOf={memberKey}
              className="list list-group list--gap-s"
              animateItems
              disableVirtualization
              sourceDataFetchStatus={inHouseholdMembersDataFetchStatus}
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
                    <UBT_LazyImage
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
                      {member.HasCTAs === true && (
                        <Directory_EntityDetailsActions
                          enableOptions={{
                            EnableCall: member.IsDeceased !== true,
                            EnableEmail: member.IsDeceased !== true,
                          }}
                          entityType={Connect_Entity.Member}
                          isEnabled={isEnabled}
                          entityId={member.Id ?? '0'}
                        />
                      )}
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
          </SubLayout_DirectoryDetailScreen_Section>
        </CustomContainer>
        <SubLayout_DirectoryDetailScreen_Section
          inPaddingBottom={UBT_Size.Base}
          inPaddingTop={UBT_Size.Small}
          inTitle=""
        >
          <OSList
            source={inNonHouseholdMembers}
            keyOf={memberKey}
            className="list list-group list--gap-s"
            animateItems
            disableVirtualization
            sourceDataFetchStatus={inNonHouseholdMembersDataFetchStatus}
          >
            {(member) => (
              <NonMember_ListItem
                marriageHighlightText={member.MarriageHighlightText ?? ''}
                marriedPartnerTakenText={member.MarriagePartnerTakenText ?? ''}
                deceasedCaption={member.LifeCycleText ?? ''}
                isEnabled={isEnabled}
                title={member.Title ?? ''}
                lifeCycleTextItalic={member.LifeCycleText_IsItallic ?? false}
                marriedCaption={member.MarriageText ?? ''}
                onOnClickPerson={nonMemberClick(member)}
                placeholderLeft={
                  <UBT_LazyImage
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
        </SubLayout_DirectoryDetailScreen_Section>
      </SkeletonSection>
    </OSBlock>
  );
}
