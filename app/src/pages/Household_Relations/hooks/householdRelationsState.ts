import type { HouseholdMember, MemberRelations, SiblingRelations } from '@/api/household';
import { DataFetchStatus } from '@/components/ui/os/OSList';
import type { Notes } from '@/lib/ubtConnectLibrary/structures';

/** The variables of HouseholdRelations_Block as one record, its reducer and its pure parts. The view cache keeps the
    record, so a view restored from the cache keeps them. `dataFetchStatus` is the OS.Model.DataFetchStatus of each data
    action (record default Fetching; IsDataFetched = Fetched, HasFetchError = Error).
    @origin UBTConnect.Directory_Household.HouseholdRelations_Block */

/** The defaults of a UI_HouseholdMember record (Connect_Household_CS) for the fields of the domain record. */
export const MEMBER_DEFAULTS: HouseholdMember = {
  Id: '0',
  HouseholdId: '0',
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

/** The block variables: the inputs that the data actions send (UserAge_Visibility, isLoading, ShowNotesSheet) and the
    three data actions. FetchNotes is never refreshed: the notes sheet only edits the local list. */
export interface HouseholdRelationsState {
  UserAge_Visibility: boolean;
  isLoading: boolean;
  ShowNotesSheet: boolean;
  Get_MemberDetails: MemberRelations & { dataFetchStatus: DataFetchStatus };
  Get_ParentHouseholdDetails: SiblingRelations & { dataFetchStatus: DataFetchStatus };
  FetchNotes: { Notes: Notes; dataFetchStatus: DataFetchStatus };
}

/** The variables with their default values: the state of a view that the view cache restores without this block. */
export const INITIAL_HOUSEHOLD_RELATIONS_STATE: HouseholdRelationsState = {
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

/** ScreenEvent_OnInitialize of a new view (nothing fetched yet): the skeleton father and mother (Title "Loading", Id
    and HouseholdId -1) and two skeleton sibling rows (MemberRole ""; OnInitialize also sets their FirstName to
    "Loading", which no view reads). */
function withSkeleton(state: HouseholdRelationsState): HouseholdRelationsState {
  const skeletonParent: HouseholdMember = { ...MEMBER_DEFAULTS, Title: 'Loading', Id: '-1', HouseholdId: '-1' };
  const skeletonSibling: HouseholdMember = { ...MEMBER_DEFAULTS, MemberRole: '' };
  return {
    ...state,
    Get_MemberDetails: { ...state.Get_MemberDetails, Father: skeletonParent, Mother: skeletonParent },
    Get_ParentHouseholdDetails: {
      ...state.Get_ParentHouseholdDetails,
      Out_siblingRelations: [
        ...state.Get_ParentHouseholdDetails.Out_siblingRelations,
        skeletonSibling,
        skeletonSibling,
      ],
    },
  };
}

/** The state of the first render: OnInitialize runs before it. A view restored from the cache starts from its saved
    record (useFlowState); without one it keeps the defaults. A new view gets the skeleton records. */
export function initialHouseholdRelationsState(restoredFromCache: boolean): HouseholdRelationsState {
  return restoredFromCache ? INITIAL_HOUSEHOLD_RELATIONS_STATE : withSkeleton(INITIAL_HOUSEHOLD_RELATIONS_STATE);
}

/** The status is not Fetched and not Error: IsDataFetched and HasFetchError are both False. */
export const isNotFetched = (status: DataFetchStatus): boolean =>
  status !== DataFetchStatus.Fetched && status !== DataFetchStatus.Error;

/** The changes of the block variables. */
export type HouseholdRelationsAction =
  /** OnReady: UserAge_Visibility = the DisplayAge of the user information. */
  | { type: 'userAgeVisibilitySet'; displayAge: boolean }
  /** Actions_DefineLoading(IsRefresh). */
  | { type: 'loadingDefined'; isRefresh: boolean }
  /** Get_MemberDetails: the call starts, answers or fails. */
  | { type: 'memberDetailsFetching' }
  | { type: 'memberDetailsFetched'; details: MemberRelations }
  | { type: 'memberDetailsFailed' }
  /** Get_ParentHouseholdDetails: the call starts, answers or fails. */
  | { type: 'siblingsFetching' }
  | { type: 'siblingsFetched'; details: SiblingRelations }
  | { type: 'siblingsFailed' }
  /** Handler_AddNotes and Handler_OnNotesSheetClosed. */
  | { type: 'notesSheetOpened' }
  | { type: 'notesSheetClosed' }
  /** Handler_OnNotesChanged: FetchNotes.Notes = NewNotes. */
  | { type: 'notesChanged'; notes: Notes }
  /** Handler_OnNoteDeleted: the note leaves the list and Total is the length of the list. */
  | { type: 'noteDeleted'; noteId: string };

/** The reducer of the block variables. */
export function householdRelationsReducer(
  state: HouseholdRelationsState,
  action: HouseholdRelationsAction,
): HouseholdRelationsState {
  switch (action.type) {
    case 'userAgeVisibilitySet':
      return { ...state, UserAge_Visibility: action.displayAge };
    case 'loadingDefined':
      // IsRefresh: isLoading = True; else isLoading = not IsDataFetched and not HasFetchError of both data actions.
      return {
        ...state,
        isLoading:
          action.isRefresh ||
          (isNotFetched(state.Get_ParentHouseholdDetails.dataFetchStatus) &&
            isNotFetched(state.Get_MemberDetails.dataFetchStatus)),
      };
    case 'memberDetailsFetching':
      return {
        ...state,
        Get_MemberDetails: { ...state.Get_MemberDetails, dataFetchStatus: DataFetchStatus.Fetching },
      };
    case 'memberDetailsFetched':
      return { ...state, Get_MemberDetails: { ...action.details, dataFetchStatus: DataFetchStatus.Fetched } };
    case 'memberDetailsFailed':
      return { ...state, Get_MemberDetails: { ...state.Get_MemberDetails, dataFetchStatus: DataFetchStatus.Error } };
    case 'siblingsFetching':
      return {
        ...state,
        Get_ParentHouseholdDetails: { ...state.Get_ParentHouseholdDetails, dataFetchStatus: DataFetchStatus.Fetching },
      };
    case 'siblingsFetched':
      return { ...state, Get_ParentHouseholdDetails: { ...action.details, dataFetchStatus: DataFetchStatus.Fetched } };
    case 'siblingsFailed':
      return {
        ...state,
        Get_ParentHouseholdDetails: { ...state.Get_ParentHouseholdDetails, dataFetchStatus: DataFetchStatus.Error },
      };
    case 'notesSheetOpened':
      return { ...state, ShowNotesSheet: true };
    case 'notesSheetClosed':
      return { ...state, ShowNotesSheet: false };
    case 'notesChanged':
      return { ...state, FetchNotes: { ...state.FetchNotes, Notes: action.notes } };
    case 'noteDeleted': {
      const list = state.FetchNotes.Notes.Note_Item_List ?? [];
      const index = list.findIndex((note) => note.Id === action.noteId);
      if (index === -1) return state;
      const remaining = list.filter((_, i) => i !== index);
      return {
        ...state,
        FetchNotes: {
          ...state.FetchNotes,
          Notes: { ...state.FetchNotes.Notes, Note_Item_List: remaining, Total: remaining.length },
        },
      };
    }
  }
}

/** OnClick_Member: the household to open, or null when the action ends at once (a deceased member, a member without
    a household or without a country). */
export function memberHouseholdToOpen(member: HouseholdMember, isDeceased: boolean): string | null {
  const householdId = member.HouseholdId ?? '0';
  if (isDeceased || householdId === '0' || (member.CountryName ?? '') === '') return null;
  return householdId;
}
