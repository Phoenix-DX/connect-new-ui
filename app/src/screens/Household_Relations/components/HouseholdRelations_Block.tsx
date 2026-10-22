// @os-block UBTConnect.Directory_Household.HouseholdRelations_Block
import { useEffect, useLayoutEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DataFetchStatus, OSList } from '@/components/ui/os/OSList';
import { ViewHasChangedException, isInstanceOf } from '@/legacy/os/os-exceptions';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useOsNavigate, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getUserInformation } from '@/platform/session/userInfo';
import { hasAccessToRegion } from '../../../shared/UBTConnect/lib/actions';
import { Connect_Entity, NoteCategory2 } from '../../../shared/UBTConnect/lib/staticEntities';
import type { UI_HouseholdMember } from '../../../shared/UBTConnect/lib/structures';
import { SubLayout_DirectoryDetailScreen_Section } from '../../../shared/UBTConnect/SubLayout_DirectoryDetailScreen_Section';
import { Columns_Two } from '../../../shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '../../../shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '../../../shared/UBTConnectLibrary/CustomText';
import { Icon } from '../../../shared/UBTConnectLibrary/Icon';
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
} from '../../../shared/UBTConnectLibrary/lib/staticEntities';
import type { Notes } from '../../../shared/UBTConnectLibrary/lib/structures';
import { NonMember_ListItem } from '../../../shared/UBTConnectLibrary/NonMember_ListItem';
import { SkeletonSection } from '../../../shared/UBTConnectLibrary/SkeletonSection';
import { Button } from '../../../shared/UBTConnect_Utils/Button';
import { NotesSheet } from '../../../shared/UBTConnect_Utils/NotesSheet';
import { UBT_ImageSize as UBTConnect_Utils_ImageSize } from '../../../shared/UBTConnect_Utils/lib/staticEntities';
import { UBT_LazyImage } from '../../../shared/UBTConnect_Utils/UBT_LazyImage';
import { get_MemberDetails, get_ParentHouseholdDetails, type HouseholdRelationsCallInputs } from '../api';
import type { Get_MemberDetailsOutput, Get_ParentHouseholdDetailsOutput } from '../types';
import { MemberRelation_ListItem } from './MemberRelation_ListItem';
import { UBT_AlignItems_Baseline } from './staticEntities';

export interface HouseholdRelations_BlockProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** HouseholdId (Long Integer as text). */
  householdId?: string;
  /** MemberId (Long Integer as text). */
  memberId?: string;
  /** Event RelationsDetails_Fetched(RelationsTitle): after Get_MemberDetails, with its FamilyName. */
  onRelationsDetailsFetched?: (relationsTitle: string) => void;
}

/** UI_HouseholdMemberRec defaults (migration/contract/sources/raw/Connect_Household_CS.model.js:250-315). */
const MEMBER_DEFAULTS: UI_HouseholdMember = {
  Id: '0',
  HouseholdId: '0',
  FirstName: '',
  Title: '',
  IsDeceased: false,
  LifeCycleText: '',
  LifeCycleText_IsItallic: false,
  MarriageText: '',
  MarriageHighlightText: '',
  MarriagePartnerTakenText: '',
  MemberRole: '',
  LocalityName: '',
  CountryName: '',
  FormattedLocality: '',
  HasNavigation: true,
  HasCTAs: false,
};

/** Block variables (mvc.js:84-115) kept as one view-cached record: a view restored from the cache keeps them.
    dataFetchStatus: OS.Model.DataFetchStatus of each data action (record default Fetching; IsDataFetched = Fetched,
    HasFetchError = Error). */
interface BlockVariables {
  UserAge_Visibility: boolean;
  isLoading: boolean;
  ShowNotesSheet: boolean;
  Get_MemberDetails: Get_MemberDetailsOutput & { dataFetchStatus: DataFetchStatus };
  Get_ParentHouseholdDetails: Get_ParentHouseholdDetailsOutput & { dataFetchStatus: DataFetchStatus };
  FetchNotes: { Notes: Notes; dataFetchStatus: DataFetchStatus };
}

const DEFAULT_VARIABLES: BlockVariables = {
  UserAge_Visibility: false,
  isLoading: true,
  ShowNotesSheet: false,
  Get_MemberDetails: {
    dataFetchStatus: DataFetchStatus.Fetching,
    MemberName: '',
    FamilyName: '',
    Father: MEMBER_DEFAULTS,
    Mother: MEMBER_DEFAULTS,
    FormerSpouses: [],
    ParentHouseholdId: '',
  },
  Get_ParentHouseholdDetails: { dataFetchStatus: DataFetchStatus.Fetching, Out_siblingRelations: [] },
  FetchNotes: { dataFetchStatus: DataFetchStatus.Fetching, Notes: { Total: 0, Note_Item_List: [] } },
};

/** ScreenEvent_OnInitialize (mvc.js:1793-1878), not restored and nothing fetched yet: the skeleton father and mother
    (Title "Loading", Id and HouseholdId -1) and two sibling rows (FirstName "Loading", MemberRole ""). */
function withSkeleton(v: BlockVariables): BlockVariables {
  const skeletonParent: UI_HouseholdMember = { ...MEMBER_DEFAULTS, Title: 'Loading', Id: '-1', HouseholdId: '-1' };
  const skeletonSibling: UI_HouseholdMember = { ...MEMBER_DEFAULTS, FirstName: 'Loading', MemberRole: '' };
  return {
    ...v,
    Get_MemberDetails: { ...v.Get_MemberDetails, Father: skeletonParent, Mother: skeletonParent },
    Get_ParentHouseholdDetails: {
      ...v.Get_ParentHouseholdDetails,
      Out_siblingRelations: [...v.Get_ParentHouseholdDetails.Out_siblingRelations, skeletonSibling, skeletonSibling],
    },
  };
}

const MEMBER_AVATAR = { Height: UBTConnect_Utils_ImageSize.ExtraLarge_100, Width: UBT_ImageSize.Square };
const RELATION_AVATAR = { Height: UBT_ImageSize.Base_52, Width: UBT_ImageSize.Square };
const memberKey = (member: UI_HouseholdMember, index: number) => `${member.Id ?? ''}-${String(index)}`;

type IsAlive = () => boolean;

/** Relations of a member (compiled source: migration/screens/Household_Relations/analysis/sources/pretty/
    UBTConnect.Directory_Household.HouseholdRelations_Block.mvc.js, "mvc.js": view :240-1584, controller :1585-2355).
    SkeletonSection(Get_MemberDetails not fetched) > member photo and name, Notes / Bookmark (disabled) buttons;
    SkeletonSection(isLoading) > "Relations" (father, mother, previous spouses) and "Household" (siblings), or the
    "no relation" text; then NotesSheet. OnInitialize: skeleton records; OnReady: GetUserInformation_Wrapper, then
    Action_Refresh_Get_MemberDetails (unless restored from the view cache with the same age visibility). */
export function HouseholdRelations_Block({
  id,
  householdId = '0',
  memberId = '0',
  onRelationsDetailsFetched,
}: HouseholdRelations_BlockProps) {
  const restoredFromCache = useWasRestoredFromCache();
  const [variables, setVariables] = useViewState<BlockVariables>(
    `Directory_Household.HouseholdRelations_Block#${householdId}#${memberId}`,
    // OnInitialize runs before the first render: restored view → nothing; else (nothing fetched yet) the skeleton.
    restoredFromCache ? DEFAULT_VARIABLES : withSkeleton(DEFAULT_VARIABLES),
  );
  /* OutSystems assigns block variables synchronously: flows read and write this ref, the state renders it. */
  const variablesRef = useRef(variables);
  const assign = (change: (v: BlockVariables) => Partial<BlockVariables>) => {
    variablesRef.current = { ...variablesRef.current, ...change(variablesRef.current) };
    setVariables(variablesRef.current);
  };
  const propsRef = useRef({ householdId, memberId });
  const eventsRef = useRef(onRelationsDetailsFetched);
  const navigate = useOsNavigate();

  const callInputs = (): HouseholdRelationsCallInputs => ({
    HouseholdId: propsRef.current.householdId,
    MemberId: propsRef.current.memberId,
    UserAge_Visibility: variablesRef.current.UserAge_Visibility,
    isLoading: variablesRef.current.isLoading,
    ShowNotesSheet: variablesRef.current.ShowNotesSheet,
  });

  /** Actions_DefineLoading (mvc.js:1726-1770). */
  const defineLoading = (isRefresh: boolean) => {
    assign((v) => {
      if (isRefresh) return { isLoading: true };
      const notFetched = (s: DataFetchStatus) => s !== DataFetchStatus.Fetched && s !== DataFetchStatus.Error;
      return {
        isLoading:
          notFetched(v.Get_ParentHouseholdDetails.dataFetchStatus) && notFetched(v.Get_MemberDetails.dataFetchStatus),
      };
    });
  };

  /** Get_ParentHouseholdDetails refresh (mvc.js:1609-1632). */
  const refreshGetParentHouseholdDetails = async (isAlive: IsAlive) => {
    // callServerDataSource (OutSystems.js): Fetching when the call starts, Fetched on success, Error on failure
    // (not for ViewHasChangedException).
    assign((v) => ({
      Get_ParentHouseholdDetails: { ...v.Get_ParentHouseholdDetails, dataFetchStatus: DataFetchStatus.Fetching },
    }));
    let fetched: Get_ParentHouseholdDetailsOutput;
    try {
      fetched = await get_ParentHouseholdDetails(callInputs());
    } catch (error) {
      if (isAlive() && !isInstanceOf(error, ViewHasChangedException))
        assign((v) => ({
          Get_ParentHouseholdDetails: { ...v.Get_ParentHouseholdDetails, dataFetchStatus: DataFetchStatus.Error },
        }));
      throw error;
    }
    if (isAlive())
      assign(() => ({ Get_ParentHouseholdDetails: { ...fetched, dataFetchStatus: DataFetchStatus.Fetched } }));
  };

  /** Get_MemberDetails refresh (mvc.js:1657-1685) then OnAfterFetch_Get_MemberDetails (:1688-1725): RelationsDetails_Fetched
      (FamilyName), refresh Get_ParentHouseholdDetails, Actions_DefineLoading(False). */
  const refreshGetMemberDetails = async (isAlive: IsAlive) => {
    assign((v) => ({ Get_MemberDetails: { ...v.Get_MemberDetails, dataFetchStatus: DataFetchStatus.Fetching } }));
    let fetched: Get_MemberDetailsOutput;
    try {
      fetched = await get_MemberDetails(callInputs());
    } catch (error) {
      if (isAlive() && !isInstanceOf(error, ViewHasChangedException))
        assign((v) => ({ Get_MemberDetails: { ...v.Get_MemberDetails, dataFetchStatus: DataFetchStatus.Error } }));
      throw error;
    }
    if (!isAlive()) return;
    assign(() => ({ Get_MemberDetails: { ...fetched, dataFetchStatus: DataFetchStatus.Fetched } }));
    eventsRef.current?.(fetched.FamilyName);
    await refreshGetParentHouseholdDetails(isAlive);
    if (isAlive()) defineLoading(false);
  };

  /** ScreenEvent_OnReady (mvc.js:2111-2182) → Action_Refresh_Get_MemberDetails (:2077-2110). */
  const onReady = async (isAlive: IsAlive, restored: boolean) => {
    const userInformation = await getUserInformation(); // GetUserInformation_Wrapper, after the app start's step
    if (!isAlive()) return;
    // The shell wrapper returns the cached record: its Directory_UserCurrent is the action's UserInformation output.
    const displayAge = userInformation.Directory_UserCurrent.Directory_UserCurrent_Visibility.DisplayAge;
    // Restored from the view cache with the same age visibility → nothing to refresh.
    if (restored && displayAge === variablesRef.current.UserAge_Visibility) return;
    assign(() => ({ UserAge_Visibility: displayAge }));
    defineLoading(true);
    await refreshGetMemberDetails(isAlive);
  };

  const flowsRef = useRef({ onReady });
  useLayoutEffect(() => {
    propsRef.current = { householdId, memberId };
    eventsRef.current = onRelationsDetailsFetched;
    flowsRef.current = { onReady };
  });

  const restoredRef = useRef(restoredFromCache);
  useEffect(() => {
    let alive = true;
    flowsRef.current.onReady(() => alive, restoredRef.current).catch(raiseToFlowHandler);
    return () => {
      alive = false;
    };
  }, []);

  /** OnClick_Member (mvc.js:1967-2076): nothing for a deceased member, a member without household or without country;
      else HasAccessToRegion → HouseholdDetails(HouseholdId), or the upgrade popup. */
  const onClickMember = async (member: UI_HouseholdMember, isDeceased: boolean) => {
    const target_HouseholdId = member.HouseholdId ?? '0';
    const target_CountryName = member.CountryName ?? '';
    if (isDeceased || target_HouseholdId === '0' || target_CountryName === '') return;
    if (await hasAccessToRegion(member.LocalityName ?? '', target_CountryName)) {
      navigate(`/${APP_ID}/HouseholdDetails`, { HouseholdId: target_HouseholdId });
    } else {
      await showUpgradePopUp();
    }
  };
  const memberClick = (member: UI_HouseholdMember) => () => {
    onClickMember(member, false).catch(raiseToFlowHandler);
  };

  /** Handler_AddNotes (mvc.js:1917-1941). */
  const onAddNotes = () => {
    assign(() => ({ ShowNotesSheet: true }));
  };
  /** Handler_OnNotesSheetClosed (mvc.js:1942-1966). */
  const onNotesSheetClosed = () => {
    assign(() => ({ ShowNotesSheet: false }));
  };
  /** Handler_OnNotesChanged (mvc.js:1879-1916). */
  const onNotesChanged = (newNotes: Notes) => {
    assign((v) => ({ FetchNotes: { ...v.FetchNotes, Notes: newNotes } }));
  };
  /** Handler_OnNoteDeleted (mvc.js:2183-2236): remove the note, Total = list length. */
  const onNoteDeleted = (noteId: string) => {
    const list = variablesRef.current.FetchNotes.Notes.Note_Item_List ?? [];
    const index = list.findIndex((note) => note.Id === noteId);
    if (index === -1) return;
    const remaining = list.filter((_, i) => i !== index);
    assign((v) => ({
      FetchNotes: {
        ...v.FetchNotes,
        Notes: { ...v.FetchNotes.Notes, Note_Item_List: remaining, Total: remaining.length },
      },
    }));
  };
  /** OnClick_Bookmark (mvc.js:1771-1792): empty action (the button is disabled). */
  const onClickBookmark = () => undefined;

  const memberDetails = variables.Get_MemberDetails;
  const siblings = variables.Get_ParentHouseholdDetails.Out_siblingRelations;
  const father = memberDetails.Father;
  const mother = memberDetails.Mother;
  const memberDetailsLoading =
    memberDetails.dataFetchStatus !== DataFetchStatus.Fetched &&
    memberDetails.dataFetchStatus !== DataFetchStatus.Error;
  // Relations section condition (mvc.js:622).
  const hasRelations =
    (father.HouseholdId ?? '0') !== '0' ||
    (mother.HouseholdId ?? '0') !== '0' ||
    memberDetails.FormerSpouses.length > 0 ||
    siblings.length > 0 ||
    variables.isLoading;

  const relationAvatar = (member: UI_HouseholdMember) => (
    <UBT_LazyImage entityId={member.Id ?? '0'} entityType={Connect_Entity.Member} imageSize={RELATION_AVATAR} />
  );
  /** Father / mother / previous spouse chevron (mvc.js:751-830). */
  const relationChevron = (member: UI_HouseholdMember) => (
    <div className="display-flex flex-direction-column justify-content-center" data-container="">
      <CustomContainer options={{ DisplayOptions: {}, HeightOptions: {}, WidthOptions: { Min: '100' } }}>
        <Icon inIconId={UBT_Icons2.ChevronRight} inColorId={UBT_Color.Neutral4} onClick={memberClick(member)} />
      </CustomContainer>
    </div>
  );
  const parentRow = (member: UI_HouseholdMember, relation: string) => (
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
      <SkeletonSection inIsLoading={memberDetailsLoading}>
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
            <UBT_LazyImage entityType={Connect_Entity.Member} entityId={memberId} imageSize={MEMBER_AVATAR} />
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
              inText={memberDetails.MemberName}
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
          <Columns_Two
            columnOptions={{ SpacingSize: UBT_Size.Base, VerticalAlign: UBT_VerticalAlign.Center }}
            left={
              <Button
                buttonOptions={{ UBT_ButtonSizeId: UBT_ButtonSize.Small, UBT_ButtonTypeId: UBT_ButtonType.Secondary }}
                iconId={UBT_Icons.Tooltip}
                isDisabled={false}
                buttonText="Notes"
                iconTextSpacingSize={UBT_Size.Small}
                onButtonOnClick={onAddNotes}
              />
            }
            right={
              <Button
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
      <SkeletonSection inIsLoading={variables.isLoading}>
        {hasRelations ? (
          <>
            <SubLayout_DirectoryDetailScreen_Section
              id="b3-Relations"
              inPaddingBottom={UBT_Size.Base}
              inTitle="Relations"
              inPaddingTop={UBT_Size.Small}
            >
              <CustomContainer options={{ PaddingSize: { TopSizeId: UBT_Size.Small } }}>
                {(father.HouseholdId ?? '0') !== '0' && parentRow(father, 'Father')}
                {(mother.HouseholdId ?? '0') !== '0' && (
                  <div className="margin-top-s" data-container="">
                    {parentRow(mother, 'Mother')}
                  </div>
                )}
                <div className="margin-top-s" data-container="">
                  <OSList
                    id="b3-PreviousSpouses"
                    source={memberDetails.FormerSpouses}
                    keyOf={memberKey}
                    className="list list-group list--gap-s"
                    animateItems
                    positionRelative
                    sourceDataFetchStatus={memberDetails.dataFetchStatus}
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
                        actions={
                          spouse.HasNavigation === true &&
                          (spouse.HouseholdId ?? '0') !== '0' &&
                          relationChevron(spouse)
                        }
                      />
                    )}
                  </OSList>
                </div>
              </CustomContainer>
            </SubLayout_DirectoryDetailScreen_Section>
            {siblings.length > 0 && (
              <SubLayout_DirectoryDetailScreen_Section id="b3-Household" inTitle="Household">
                <CustomContainer options={{ PaddingSize: { TopSizeId: UBT_Size.Small }, MarginSize: {} }}>
                  <OSList
                    source={siblings}
                    keyOf={memberKey}
                    className="list list-group list--gap-s"
                    animateItems
                    positionRelative
                    sourceDataFetchStatus={variables.Get_ParentHouseholdDetails.dataFetchStatus}
                  >
                    {(sibling) => (
                      <NonMember_ListItem
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
              </SubLayout_DirectoryDetailScreen_Section>
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
        inNotes={variables.FetchNotes.Notes}
        inIsOpen={variables.ShowNotesSheet}
        onOnNoteDeleted={onNoteDeleted}
        onOnNotesChanged={onNotesChanged}
        onOnNoteSheetClosed={onNotesSheetClosed}
      />
    </OSBlock>
  );
}
