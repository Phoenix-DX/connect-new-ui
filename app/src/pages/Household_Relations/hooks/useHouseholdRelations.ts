import {
  fetchMemberRelations,
  fetchSiblingRelations,
  type HouseholdMember,
  type MemberRelations,
  type MemberRelationsCallInputs,
  type SiblingRelations,
} from '@/api/household';
import type { DataFetchStatus } from '@/components/ui/os/OSList';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { isViewHasChangedException, raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, useOsNavigate, useWasRestoredFromCache, type IsAlive } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getUserInformation } from '@/platform/session/userInfo';
import { hasAccessToRegion } from '@/shared/UBTConnect/lib/actions';
import type { Notes } from '@/shared/UBTConnectLibrary/lib/structures';
import {
  householdRelationsReducer,
  initialHouseholdRelationsState,
  isNotFetched,
  memberHouseholdToOpen,
  type HouseholdRelationsAction,
} from './householdRelationsState';

/** The flows of HouseholdRelations_Block: OnReady (GetUserInformation_Wrapper, then Action_Refresh_Get_MemberDetails
    unless the view is restored from the cache with the same age visibility), OnAfterFetch_Get_MemberDetails (the event
    RelationsDetails_Fetched, the refresh of Get_ParentHouseholdDetails, Actions_DefineLoading), OnClick_Member and
    the handlers of the notes sheet. The page calls this hook and passes the result to HouseholdRelationsView.
    @origin UBTConnect.Directory_Household.HouseholdRelations_Block */

/** The inputs of the block. */
export interface HouseholdRelationsInputs {
  /** HouseholdId (Long Integer as text). */
  householdId: string;
  /** MemberId (Long Integer as text). */
  memberId: string;
}

/** The events of the block, which the screen handles. */
export interface HouseholdRelationsEvents {
  /** Event RelationsDetails_Fetched(RelationsTitle): after Get_MemberDetails, with its FamilyName. */
  onRelationsDetailsFetched?: (relationsTitle: string) => void;
}

/** What the view reads, and its handlers. */
export interface HouseholdRelationsFlows {
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
  /** OnClick_Member of a relation (IsDeceased False at every caller). */
  onClickMember: (member: HouseholdMember) => void;
  /** Handler_AddNotes. */
  onAddNotes: () => void;
  /** Handler_OnNotesSheetClosed. */
  onNotesSheetClosed: () => void;
  /** Handler_OnNotesChanged. */
  onNotesChanged: (notes: Notes) => void;
  /** Handler_OnNoteDeleted. */
  onNoteDeleted: (noteId: string) => void;
}

/** The state and the flows of the relations of a member. The state comes from useFlowState and the view cache keeps it.
    Decision W23: `isAlive` guards the state writes. In these flows no app-level side effect follows an await: each next
    step is a client action of the block (Action_Refresh_Get_MemberDetails, OnAfterFetch_Get_MemberDetails,
    Actions_DefineLoading), which the runtime refuses on a disposed block (ensureControllerAlive raises
    ControllerDisposedException). So after an unmount, as in OutSystems and the old port, no server call starts and the
    event does not run; a failed call still goes to the flow handler. StrictMode runs OnReady twice: the first run stops
    at its liveness check, so the calls and the event run once without a once-guard. */
export function useHouseholdRelations(
  { householdId, memberId }: HouseholdRelationsInputs,
  events: HouseholdRelationsEvents,
): HouseholdRelationsFlows {
  const restoredFromCache = useWasRestoredFromCache();
  const navigate = useOsNavigate();
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
  } = useFlowState({
    viewName: `Directory_Household.HouseholdRelations_Block#${householdId}#${memberId}`,
    reducer: householdRelationsReducer,
    initial: initialHouseholdRelationsState(restoredFromCache),
    parameters: { householdId, memberId },
    events,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (isAlive, restored) => onReady(isAlive, restored),
  });

  /** The block variables that the data actions send, as they are now. */
  const callInputs = (): MemberRelationsCallInputs => ({
    HouseholdId: parameters.current.householdId,
    MemberId: parameters.current.memberId,
    UserAge_Visibility: latest.current.UserAge_Visibility,
    isLoading: latest.current.isLoading,
    ShowNotesSheet: latest.current.ShowNotesSheet,
  });

  /** The refresh of a data action (callServerDataSource): Fetching when the call starts, the answer or Error (not for
      a ViewHasChangedException) when it ends, while the screen is there. A failure goes on to the caller. */
  const refresh = async <T>(
    isAlive: IsAlive,
    call: () => Promise<T>,
    actions: { fetching: HouseholdRelationsAction; failed: HouseholdRelationsAction },
  ): Promise<T> => {
    dispatch(actions.fetching);
    try {
      return await call();
    } catch (error) {
      if (isAlive() && !isViewHasChangedException(error)) dispatch(actions.failed);
      throw error;
    }
  };

  /** The refresh of Get_ParentHouseholdDetails. */
  const refreshSiblings = async (isAlive: IsAlive) => {
    const details: SiblingRelations = await refresh(isAlive, () => fetchSiblingRelations(callInputs()), {
      fetching: { type: 'siblingsFetching' },
      failed: { type: 'siblingsFailed' },
    });
    if (isAlive()) dispatch({ type: 'siblingsFetched', details });
  };

  /** The refresh of Get_MemberDetails, then OnAfterFetch_Get_MemberDetails: RelationsDetails_Fetched(FamilyName), the
      refresh of Get_ParentHouseholdDetails, Actions_DefineLoading(False). */
  const refreshMemberDetails = async (isAlive: IsAlive) => {
    const details: MemberRelations = await refresh(isAlive, () => fetchMemberRelations(callInputs()), {
      fetching: { type: 'memberDetailsFetching' },
      failed: { type: 'memberDetailsFailed' },
    });
    if (!isAlive()) return;
    dispatch({ type: 'memberDetailsFetched', details });
    eventsRef.current.onRelationsDetailsFetched?.(details.FamilyName);
    await refreshSiblings(isAlive);
    if (isAlive()) dispatch({ type: 'loadingDefined', isRefresh: false });
  };

  /** ScreenEvent_OnReady: GetUserInformation_Wrapper (after the app start's own step), then, unless the view is
      restored from the cache with the same age visibility, UserAge_Visibility and Action_Refresh_Get_MemberDetails
      (Actions_DefineLoading(True), then the refresh of Get_MemberDetails). */
  const onReady = async (isAlive: IsAlive, restored: boolean) => {
    const userInformation = await getUserInformation();
    if (!isAlive()) return;
    // The wrapper returns the cached record: its Directory_UserCurrent is the action's UserInformation output.
    const displayAge = userInformation.Directory_UserCurrent.Directory_UserCurrent_Visibility.DisplayAge;
    if (restored && displayAge === latest.current.UserAge_Visibility) return;
    dispatch({ type: 'userAgeVisibilitySet', displayAge });
    dispatch({ type: 'loadingDefined', isRefresh: true });
    await refreshMemberDetails(isAlive);
  };

  /** OnClick_Member: HasAccessToRegion, then HouseholdDetails(HouseholdId) or the upgrade popup. Every caller passes
      IsDeceased False. */
  const onClickMember = (member: HouseholdMember) => {
    const householdId = memberHouseholdToOpen(member, false);
    if (householdId === null) return;
    const open = async () => {
      if (await hasAccessToRegion(member.LocalityName ?? '', member.CountryName ?? '')) {
        navigate(`/${APP_ID}/HouseholdDetails`, { HouseholdId: householdId });
      } else {
        await showUpgradePopUp();
      }
    };
    open().catch(raiseToFlowHandler);
  };

  const memberDetails = state.Get_MemberDetails;
  return {
    isMemberDetailsLoading: isNotFetched(memberDetails.dataFetchStatus),
    isLoading: state.isLoading,
    memberName: memberDetails.MemberName,
    father: memberDetails.Father,
    mother: memberDetails.Mother,
    formerSpouses: memberDetails.FormerSpouses,
    formerSpousesFetchStatus: memberDetails.dataFetchStatus,
    siblings: state.Get_ParentHouseholdDetails.Out_siblingRelations,
    siblingsFetchStatus: state.Get_ParentHouseholdDetails.dataFetchStatus,
    notes: state.FetchNotes.Notes,
    isNotesSheetOpen: state.ShowNotesSheet,
    onClickMember,
    onAddNotes: () => {
      dispatch({ type: 'notesSheetOpened' });
    },
    onNotesSheetClosed: () => {
      dispatch({ type: 'notesSheetClosed' });
    },
    onNotesChanged: (notes) => {
      dispatch({ type: 'notesChanged', notes });
    },
    onNoteDeleted: (noteId) => {
      dispatch({ type: 'noteDeleted', noteId });
    },
  };
}
