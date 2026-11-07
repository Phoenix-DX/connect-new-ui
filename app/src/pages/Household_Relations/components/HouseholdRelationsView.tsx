import type { AwayParents, HouseholdMember } from '@/api/household';
import { NonMemberListItem } from '@/components/household/NonMemberListItem';
import { DirectoryDetailSection } from '@/components/layout/DirectoryDetailSection';
import { NotesSheet } from '@/components/note/NotesSheet';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList, type DataFetchStatus } from '@/components/ui/os/OSList';
import { Connect_Entity, NoteCategory2 } from '@/lib/ubtConnect/staticEntities';
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
} from '@/lib/ubtConnectLibrary/staticEntities';
import type { Notes } from '@/lib/ubtConnectLibrary/structures';
import { Skeleton } from '@/components/ui/Skeleton';
import { ActionButton } from '@/components/ui/ActionButton';
import { UBT_ImageSize as UBTConnect_Utils_ImageSize } from '@/lib/ubtConnectUtils/staticEntities';
import { EntityLazyImage } from '@/components/ui/EntityLazyImage';
import { MEMBER_DEFAULTS } from '@/pages/Household_Relations/hooks/householdRelationsState';
import { MemberRelation_ListItem } from './MemberRelation_ListItem';
import { UBT_AlignItems_Baseline } from './staticEntities';

/** The view of the relations of a member, props only. SkeletonSection (Get_MemberDetails not fetched) with the member
    photo and name and the Notes and Bookmark buttons (Bookmark Primary when IsBookmarked, else Secondary); SkeletonSection (isLoading) with "Relations" (father,
    mother, previous spouses; only when ParentHouseholdId is not "", live TST mvc.js:637) and "Household" (siblings,
    then the siblings that the household of the parents does not list), or the "no relation" text; then NotesSheet.
    Live TST 2026-11-07: the away-parents row replaces the father and the mother when AwayParents.HouseholdId is not 0
    (mvc.js:690-861), the relation text of a parent is its Description (mvc.js:875, 1052), and the NoDisplaySiblings
    list (mvc.js:1678-1880) reads the photo, the chevron condition and the chevron click from the current row of
    Get_SibllingsRelations, as the compiled block does. The flows are in `useHouseholdRelations`.
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
  /** Get_MemberDetails.ParentHouseholdId: the "Relations" section shows only when it is not "" (live TST
      HouseholdRelations_Block.mvc.js:637). */
  parentHouseholdId: string;
  /** Get_MemberDetails.AwayParents: one row in place of the father and the mother when its HouseholdId is not "0". */
  awayParents: AwayParents;
  /** Get_MemberDetails.NoDisplaySiblings: the second list of the "Household" section. */
  noDisplaySiblings: HouseholdMember[];
  /** The fetch status of Get_MemberDetails, the source of the previous-spouse and NoDisplaySiblings lists. */
  formerSpousesFetchStatus: DataFetchStatus;
  /** Get_SibllingsRelations.Out_siblingRelations. */
  siblings: HouseholdMember[];
  /** The fetch status of Get_SibllingsRelations. */
  siblingsFetchStatus: DataFetchStatus;
  /** FetchNotes.Notes. */
  notes: Notes;
  /** ShowNotesSheet. */
  isNotesSheetOpen: boolean;
  /** IsBookmarked: the type of the Bookmark button (live HouseholdRelations_Block.mvc.js:559). */
  isBookmarked: boolean;
  /** OnClick_Bookmark: the Bookmark button (live mvc.js:581). */
  onClickBookmark: () => void;
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
/** The member has a household (HouseholdId is not 0). */
const hasHousehold = (member: { HouseholdId?: string }) => (member.HouseholdId ?? '0') !== '0';
/** The placeholder of the away-parents row: an empty 52 × 52 container (mvc.js:727-750). */
const AWAY_PARENTS_AVATAR = { HeightOptions: { Main: '52px' }, WidthOptions: { Main: '52px' } };
/** The chevron container of a sibling (mvc.js:1587-1608, 1777-1798). */
const SIBLING_CHEVRON = {
  DisplayOptions: {
    Display: UBT_Display.Flex,
    AlignItems: UBT_AlignItems.Center,
    JustifyContent: UBT_JustifyContent.Center,
  },
  HeightOptions: {},
  WidthOptions: { Min: '100' },
};

export function HouseholdRelationsView({
  id,
  memberId,
  isMemberDetailsLoading,
  isLoading,
  memberName,
  father,
  mother,
  formerSpouses,
  parentHouseholdId,
  awayParents,
  noDisplaySiblings,
  formerSpousesFetchStatus,
  siblings,
  siblingsFetchStatus,
  notes,
  isNotesSheetOpen,
  isBookmarked,
  onClickBookmark,
  onClickMember,
  onAddNotes,
  onNotesSheetClosed,
  onNotesChanged,
  onNoteDeleted,
}: HouseholdRelationsViewProps) {
  const memberClick = (member: HouseholdMember) => () => {
    onClickMember(member);
  };
  // The condition of the relations section (mvc.js:636): a father, a mother, a previous spouse, a sibling of either
  // list, or still loading.
  const hasRelations =
    hasHousehold(father) ||
    hasHousehold(mother) ||
    formerSpouses.length > 0 ||
    siblings.length > 0 ||
    noDisplaySiblings.length > 0 ||
    isLoading;
  /** Get_SibllingsRelations.Out_siblingRelations.Current outside its own list: the NoDisplaySiblings rows read it.
      RecordList.getCurrent (OutSystems.js) gives the empty list item for an empty list, else the row of the list
      iterator (0 when there is none); row 0 is taken here (route-spec, Decisions to confirm). */
  const siblingsCurrent: HouseholdMember = siblings[0] ?? MEMBER_DEFAULTS;
  /** The away parents as the member that OnClick_Member reads (locality, country, household). */
  const awayParentsMember: HouseholdMember = {
    Title: awayParents.Title,
    HouseholdId: awayParents.HouseholdId,
    LocalityName: awayParents.LocalityName,
    CountryName: awayParents.CountryName,
  };

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
  /** The father or the mother: the relation text is the Description of the member (mvc.js:875, 1052). */
  const parentRow = (member: HouseholdMember) => (
    <MemberRelation_ListItem
      isEnabled
      inDeceasedCaption={member.LifeCycleText ?? ''}
      inRelation={member.Description ?? ''}
      inTitle={member.Title ?? ''}
      inFormattedLocality={member.FormattedLocality ?? ''}
      inIsDeceased={member.IsDeceased ?? false}
      onOnClickPerson={memberClick(member)}
      placeholderLeft={relationAvatar(member)}
      actions={member.HasNavigation === true && relationChevron(member)}
    />
  );

  /** A row of a "Household" list: the texts and the name click of `sibling`; the photo, the chevron condition and the
      chevron click of `current` (the same row for Get_SibllingsRelations; its current row for NoDisplaySiblings). */
  const siblingRow = (sibling: HouseholdMember, current: HouseholdMember) => (
    <NonMemberListItem
      isEnabled
      title={sibling.Title ?? ''}
      marriedPartnerTakenText={sibling.MarriagePartnerTakenText ?? ''}
      deceasedCaption={sibling.LifeCycleText ?? ''}
      marriedCaption={sibling.MarriageText ?? ''}
      marriageHighlightText={sibling.MarriageHighlightText ?? ''}
      lifeCycleTextItalic={sibling.LifeCycleText_IsItallic ?? false}
      onOnClickPerson={memberClick(sibling)}
      placeholderLeft={relationAvatar(current)}
      actions={
        current.HasNavigation === true && (
          <CustomContainer options={SIBLING_CHEVRON}>
            <Icon inIconId={UBT_Icons2.ChevronRight} inColorId={UBT_Color.Neutral4} onClick={memberClick(current)} />
          </CustomContainer>
        )
      }
    />
  );

  /** The "Relations" section (live mvc.js:637-1430): the father, the mother and the previous spouses. */
  const relationsSection = (
    <DirectoryDetailSection
      id="b3-Relations"
      inPaddingBottom={UBT_Size.Base}
      inTitle="Relations"
      inPaddingTop={UBT_Size.Small}
    >
      <CustomContainer options={{ PaddingSize: { TopSizeId: UBT_Size.Small } }}>
        {hasHousehold(awayParents) ? (
          // The away parents (mvc.js:690-861): the title only, an empty placeholder, and the chevron of the father.
          <MemberRelation_ListItem
            isEnabled
            inTitle={awayParents.Title}
            onOnClickPerson={memberClick(awayParentsMember)}
            placeholderLeft={<CustomContainer options={AWAY_PARENTS_AVATAR} />}
            actions={father.HasNavigation === true && relationChevron(father)}
          />
        ) : (
          <>
            {hasHousehold(father) && parentRow(father)}
            {hasHousehold(mother) && (
              <div className="margin-top-s" data-container="">
                {parentRow(mother)}
              </div>
            )}
          </>
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
  );

  return (
    <OSBlock name="Directory_Household.HouseholdRelations_Block" id={id}>
      <Skeleton isLoading={isMemberDetailsLoading}>
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
              // CW_Common/Button (live mvc.js:553-590): Primary when IsBookmarked, else Secondary; enabled.
              <ActionButton
                buttonOptions={{
                  UBT_ButtonSizeId: UBT_ButtonSize.Small,
                  UBT_ButtonTypeId: isBookmarked ? UBT_ButtonType.Primary : UBT_ButtonType.Secondary,
                }}
                iconId={UBT_Icons.Bookmark}
                buttonText="Bookmark"
                iconTextSpacingSize={UBT_Size.Small}
                onButtonOnClick={onClickBookmark}
              />
            }
          />
        </CustomContainer>
      </Skeleton>
      <Skeleton isLoading={isLoading}>
        {hasRelations ? (
          <>
            {parentHouseholdId !== '' && relationsSection}
            {(siblings.length > 0 || noDisplaySiblings.length > 0) && (
              <DirectoryDetailSection id="b3-Household" inTitle="Household">
                <CustomContainer options={{ PaddingSize: { TopSizeId: UBT_Size.Small }, MarginSize: {} }}>
                  {siblings.length > 0 && (
                    <OSList
                      source={siblings}
                      keyOf={memberKey}
                      className="list list-group list--gap-s"
                      animateItems
                      positionRelative
                      sourceDataFetchStatus={siblingsFetchStatus}
                    >
                      {(sibling) => siblingRow(sibling, sibling)}
                    </OSList>
                  )}
                  {noDisplaySiblings.length > 0 && (
                    <OSList
                      source={noDisplaySiblings}
                      keyOf={memberKey}
                      className="list list-group list--gap-s"
                      animateItems
                      positionRelative
                      sourceDataFetchStatus={formerSpousesFetchStatus}
                    >
                      {(sibling) => siblingRow(sibling, siblingsCurrent)}
                    </OSList>
                  )}
                </CustomContainer>
              </DirectoryDetailSection>
            )}
          </>
        ) : (
          <div className="padding-right-base padding-left-base text-align-center" data-container="">
            No relation or household information available.
          </div>
        )}
      </Skeleton>
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
