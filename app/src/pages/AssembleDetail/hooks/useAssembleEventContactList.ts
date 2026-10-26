import { useFlowState } from '@/platform/navigation';
import { getCacheableMemberContactList } from '@/lib/legacyShared/actions';
import {
  assembleEventContactListReducer,
  initialAssembleEventContactListState,
  toAssembleEventContact,
  type AssembleEventContact,
  type AssembleEventContactListState,
} from './assembleEventContacts';
import { useIsAlive, useReadyOnce } from './blockLifecycle';

/** The flow of the block AssembleEventDetail_ContactList: OnReady. The component AssembleEventDetail_ContactList calls
    this hook.
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList */

/** GetCacheableMemberContactList(AssembleEventContactIdList) as AssembleEventContact records. */
async function fetchAssembleEventContacts(memberIds: readonly string[]): Promise<AssembleEventContact[]> {
  return (await getCacheableMemberContactList(memberIds)).map(toAssembleEventContact);
}

/** The state and the flow of the block. `blockId` is the block instance id. The state comes from useFlowState and the
    view cache keeps it.
    - A new visit starts with one empty contact per id (the loading rows). OnReady then calls
      GetCacheableMemberContactList(AssembleEventContactIdList), and sets the contacts and IsDataFetched True.
    - A view that the view cache restored keeps its saved contacts and makes no call (OnReady does nothing when
      WasCurrentViewRestoredFromCache is True). A restored view whose saved state has no fetched contacts (no saved
      state for the block, or the user left before the answer) calls as on a new visit.
    - Decision W23: after the unmount, the flow skips its state write. */
export function useAssembleEventContactList(
  blockId: string,
  contactIds: readonly string[],
): AssembleEventContactListState {
  const isAlive = useIsAlive();
  const readyOnce = useReadyOnce();
  const { state, dispatch, latest } = useFlowState({
    viewName: `Assemble.AssembleEventDetail_ContactList#${blockId.replace(/\$/g, '')}`,
    reducer: assembleEventContactListReducer,
    initial: initialAssembleEventContactListState(contactIds),
    parameters: { contactIds },
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (_isAlive, restored) => readyOnce(() => onReady(restored)),
  });

  async function onReady(restored: boolean) {
    if (restored && latest.current.isDataFetched) return;
    const contacts = await fetchAssembleEventContacts(contactIds);
    if (isAlive()) dispatch({ type: 'contactsFetched', contacts });
  }

  return state;
}
