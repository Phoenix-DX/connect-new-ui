import type { HouseholdMember } from '@/api/household';
import { NonMemberListItem } from '@/components/household/NonMemberListItem';
import { DirectoryDetailSection } from '@/components/layout/DirectoryDetailSection';
import { NotesSheet } from '@/components/note/NotesSheet';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList, type DataFetchStatus } from '@/components/ui/os/OSList';
import { Connect_Entity, NoteCategory2 } from '@/shared/UBTConnect/lib/staticEntities';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import {
  UBT_AlignItems,
  UBT_ButtonSize,
  UBT_ButtonType,
  UBT_Color,
  UBT_Display,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons,
  UBT_Icons2,
  UBT_ImageSize,
  UBT_JustifyContent,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { Notes } from '@/shared/UBTConnectLibrary/lib/structures';
import { SkeletonSection } from '@/components/ui/SkeletonSection';
import { ActionButton } from '@/components/ui/ActionButton';
import { UBT_ImageSize as UBTConnect_Utils_ImageSize } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { MemberRelation_ListItem } from './MemberRelation_ListItem';
import { UBT_AlignItems_Baseline } from './staticEntities';

/** The view of the relations of a member, props only. SkeletonSection (Get_MemberDetails not fetched) with the member
    photo and name and the Notes and Bookmark (disabled) buttons; SkeletonSection (isLoading) with "Relations" (father,
    mother, previous spouses) and "Household" (siblings), or the "no relation" text; then NotesSheet. The flows are in
    `useHouseholdRelations`.
    @origin UBTConnect.Directory_Household.HouseholdRelations_Block */

export interface HouseholdRelationsViewProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** MemberId (Long Integer as text): the photo of the member and the item of the notes. */
  memberId: string;
  /** Get_MemberDetails is not fetched yet and has no error: the skeleton of the member shows. */
  isMemberDetailsLoading: boolean;
  /** isLoading: the skeleton of the relations shows. */
  isLoading: boolean;
  /** Get_MemberDetails.MemberName. */
  memberName: string;
  /** Get_MemberDetails.Father. */
  father: HouseholdMember;
  /** Get_MemberDetails.Mother. */
  mother: HouseholdMember;
  /** Get_MemberDetails.FormerSpouses. */
  formerSpouses: HouseholdMember[];
  /** The fetch status of Get_MemberDetails, the source of the previous-spouse list. */
  formerSpousesFetchStatus: DataFetchStatus;
  /** Get_ParentHouseholdDetails.Out_siblingRelations. */
  siblings: HouseholdMember[];
  /** The fetch status of Get_ParentHouseholdDetails. */
  siblingsFetchStatus: DataFetchStatus;
  /** FetchNotes.Notes. */
  notes: Notes;
  /** ShowNotesSheet. */
  isNotesSheetOpen: boolean;
  /** OnClick_Member: the avatar, the name or the chevron of a relation. */
  onClickMember: (member: HouseholdMember) => void;
  /** The Notes button. */
  onAddNotes: () => void;
  /** NotesSheet OnNoteSheetClosed. */
  onNotesSheetClosed: () => void;
  /** NotesSheet OnNotesChanged. */
  onNotesChanged: (notes: Notes) => void;
  /** NotesSheet OnNoteDeleted. */
  onNoteDeleted: (noteId: string) => void;
}

const MEMBER_AVATAR = { Height: UBTConnect_Utils_ImageSize.ExtraLarge_100, Width: UBT_ImageSize.Square };
const RELATION_AVATAR = { Height: UBT_ImageSize.Base_52, Width: UBT_ImageSize.Square };
const memberKey = (member: HouseholdMember, index: number) => `${member.Id ?? ''}-${String(index)}`;
/** OnClick_Bookmark: an empty action (the button is disabled). */
const onClickBookmark = () => undefined;
/** The member has a household (HouseholdId is not 0). */
const hasHousehold = (member: HouseholdMember) => (member.HouseholdId ?? '0') !== '0';

export function HouseholdRelationsView({
  id,
  memberId,
  isMemberDetailsLoading,
  isLoading,
  memberName,
  father,
  mother,
  formerSpouses,
  formerSpousesFetchStatus,
  siblings,
  siblingsFetchStatus,
  notes,
  isNotesSheetOpen,
  onClickMember,
  onAddNotes,
  onNotesSheetClosed,
  onNotesChanged,
  onNoteDeleted,
}: HouseholdRelationsViewProps) {
  const memberClick = (member: HouseholdMember) => () => {
    onClickMember(member);
  };
  // The condition of the relations section: a father, a mother, a previous spouse or a sibling, or still loading.
  const hasRelations =
    hasHousehold(father) || hasHousehold(mother) || formerSpouses.length > 0 || siblings.length > 0 || isLoading;

  const relationAvatar = (member: HouseholdMember) => (
    <EntityLazyImage entityId={member.Id ?? '0'} entityType={Connect_Entity.Member} imageSize={RELATION_AVATAR} />
  );
  /** The chevron of the father, the mother or a previous spouse. */
  const relationChevron = (member: HouseholdMember) => (
    <div className="display-flex flex-direction-column justify-content-center" data-container="">
      <CustomContainer options={{ DisplayOptions: {}, HeightOptions: {}, WidthOptions: { Min: '100' } }}>
        <Icon inIconId={UBT_Icons2.ChevronRight} inColorId={UBT_Color.Neutral4} onClick={memberClick(member)} />
      </CustomContainer>
    </div>
  );
  const parentRow = (member: HouseholdMember, relation: string) => (
    <MemberRelation_ListItem
      isEnabled
      inDeceasedCaption={member.LifeCycleText ?? ''}
      inRelation={relation}
      inTitle={member.Title ?? ''}
      inFormattedLocality={member.FormattedLocality ?? ''}
      inIsDeceased={member.IsDeceased ?? false}
      onOnClickPerson={memberClick(member)}
      placeholderLeft={relationAvatar(member)}
      actions={member.HasNavigation === true && relationChevron(member)}
    />
  );

  return (
    <OSBlock name="Directory_Household.HouseholdRelations_Block" id={id}>
      <SkeletonSection inIsLoading={isMemberDetailsLoading}>
        <CustomContainer options={{ MarginSize: { TopSizeId: UBT_Size.Small } }}>
          <CustomContainer
            options={{
              DisplayOptions: {
                Display: UBT_Display.Flex,
                AlignItems: UBT_AlignItems.Center,
                JustifyContent: UBT_JustifyContent.Center,
              },
            }}
          >
            <EntityLazyImage entityType={Connect_Entity.Member} entityId={memberId} imageSize={MEMBER_AVATAR} />
          </CustomContainer>
          <CustomContainer
            options={{
              MarginSize: { TopSizeId: UBT_Size.Small },
              DisplayOptions: {
                Display: UBT_Display.Flex,
                AlignItems: UBT_AlignItems_Baseline,
                JustifyContent: UBT_JustifyContent.Center,
              },
            }}
          >
            <CustomText
              inTextOptions={{ FontSize: UBT_FontSize.Base, FontWeight: UBT_FontWeight.SemiBold }}
              inText={memberName}
            />
          </CustomContainer>
        </CustomContainer>
        <CustomContainer
          id="b3-Buttons"
          options={{
            PaddingSize: {},
            MarginSize: { VerticalSizeId: UBT_Size.Base, HorizontalSizeId: UBT_Size.Base },
          }}
        >
          <ColumnsTwo
            columnOptions={{ SpacingSize: UBT_Size.Base, VerticalAlign: UBT_VerticalAlign.Center }}
            left={
              <ActionButton
                buttonOptions={{ UBT_ButtonSizeId: UBT_ButtonSize.Small, UBT_ButtonTypeId: UBT_ButtonType.Secondary }}
                iconId={UBT_Icons.Tooltip}
                isDisabled={false}
                buttonText="Notes"
                iconTextSpacingSize={UBT_Size.Small}
                onButtonOnClick={onAddNotes}
              />
            }
            right={
              <ActionButton
                buttonOptions={{ UBT_ButtonSizeId: UBT_ButtonSize.Small, UBT_ButtonTypeId: UBT_ButtonType.Primary }}
                iconId={UBT_Icons.Bookmark}
                isDisabled
                buttonText="Bookmark"
                iconTextSpacingSize={UBT_Size.Small}
                onButtonOnClick={onClickBookmark}
              />
            }
          />
        </CustomContainer>
      </SkeletonSection>
      <SkeletonSection inIsLoading={isLoading}>
        {hasRelations ? (
          <>
            <DirectoryDetailSection
              id="b3-Relations"
              inPaddingBottom={UBT_Size.Base}
              inTitle="Relations"
              inPaddingTop={UBT_Size.Small}
            >
              <CustomContainer options={{ PaddingSize: { TopSizeId: UBT_Size.Small } }}>
                {hasHousehold(father) && parentRow(father, 'Father')}
                {hasHousehold(mother) && (
                  <div className="margin-top-s" data-container="">
                    {parentRow(mother, 'Mother')}
                  </div>
                )}
                <div className="margin-top-s" data-container="">
                  <OSList
                    id="b3-PreviousSpouses"
                    source={formerSpouses}
                    keyOf={memberKey}
                    className="list list-group list--gap-s"
                    animateItems
                    positionRelative
                    sourceDataFetchStatus={formerSpousesFetchStatus}
                  >
                    {(spouse) => (
                      <MemberRelation_ListItem
                        isEnabled
                        inIsDeceased={spouse.IsDeceased ?? false}
                        inRelation="Previous spouse"
                        inFormattedLocality={spouse.FormattedLocality ?? ''}
                        inDeceasedCaption={spouse.LifeCycleText ?? ''}
                        inTitle={spouse.Title ?? ''}
                        onOnClickPerson={memberClick(spouse)}
                        placeholderLeft={relationAvatar(spouse)}
                        actions={spouse.HasNavigation === true && hasHousehold(spouse) && relationChevron(spouse)}
                      />
                    )}
                  </OSList>
                </div>
              </CustomContainer>
            </DirectoryDetailSection>
            {siblings.length > 0 && (
              <DirectoryDetailSection id="b3-Household" inTitle="Household">
                <CustomContainer options={{ PaddingSize: { TopSizeId: UBT_Size.Small }, MarginSize: {} }}>
                  <OSList
                    source={siblings}
                    keyOf={memberKey}
                    className="list list-group list--gap-s"
                    animateItems
                    positionRelative
                    sourceDataFetchStatus={siblingsFetchStatus}
                  >
                    {(sibling) => (
                      <NonMemberListItem
                        isEnabled
                        title={sibling.Title ?? ''}
                        marriedPartnerTakenText={sibling.MarriagePartnerTakenText ?? ''}
                        deceasedCaption={sibling.LifeCycleText ?? ''}
                        marriedCaption={sibling.MarriageText ?? ''}
                        marriageHighlightText={sibling.MarriageHighlightText ?? ''}
                        lifeCycleTextItalic={sibling.LifeCycleText_IsItallic ?? false}
                        onOnClickPerson={memberClick(sibling)}
                        placeholderLeft={relationAvatar(sibling)}
                        actions={
                          sibling.HasNavigation === true && (
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
                                onClick={memberClick(sibling)}
                              />
                            </CustomContainer>
                          )
                        }
                      />
                    )}
                  </OSList>
                </CustomContainer>
              </DirectoryDetailSection>
            )}
          </>
        ) : (
          <div className="padding-right-base padding-left-base text-align-center" data-container="">
            No relation or household information avaialble.
          </div>
        )}
      </SkeletonSection>
      <NotesSheet
        inNoteCategoryId={NoteCategory2.Member}
        inItemId={memberId}
        inNotes={notes}
        inIsOpen={isNotesSheetOpen}
        onOnNoteDeleted={onNoteDeleted}
        onOnNotesChanged={onNotesChanged}
        onOnNoteSheetClosed={onNotesSheetClosed}
      />
    </OSBlock>
  );
}
