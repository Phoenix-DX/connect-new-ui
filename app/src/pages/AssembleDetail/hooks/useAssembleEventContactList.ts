import { useState } from 'react';
import { useWasRestoredFromCache } from '@/platform/navigation';
import { getCacheableMemberContactList } from '@/shared/Connect2_LegacyShared/lib/actions';
import { emptyContact, toAssembleEventContact, type AssembleEventContact } from './assembleEventContacts';
import { useIsAlive, useReadyOnce } from './blockLifecycle';

/** The flow of the block AssembleEventDetail_ContactList: OnReady. The component AssembleEventDetail_ContactList calls
    this hook.
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList */

/** The variables of the block (not kept by the view cache). */
export interface AssembleEventContactListState {
  /** AssembleEventContactList. */
  contacts: AssembleEventContact[];
  /** IsDataFetched. */
  isDataFetched: boolean;
}

/** GetCacheableMemberContactList(AssembleEventContactIdList) as AssembleEventContact records. */
async function fetchAssembleEventContacts(memberIds: readonly string[]): Promise<AssembleEventContact[]> {
  return (await getCacheableMemberContactList(memberIds)).map(toAssembleEventContact);
}

/** The state and the flow of the block.
    - A new visit starts with one empty contact per id (the loading rows). OnReady then calls
      GetCacheableMemberContactList(AssembleEventContactIdList), and sets the contacts and IsDataFetched True.
    - A view that the view cache restored starts with no contact and does nothing (as the old port).
    - Decision W23: after the unmount, the flow skips its state write. */
export function useAssembleEventContactList(contactIds: readonly string[]): AssembleEventContactListState {
  const restored = useWasRestoredFromCache();
  const isAlive = useIsAlive();
  const [state, setState] = useState<AssembleEventContactListState>(() => ({
    contacts: restored ? [] : contactIds.map(emptyContact),
    isDataFetched: false,
  }));
  useReadyOnce(async () => {
    if (restored) return;
    const contacts = await fetchAssembleEventContacts(contactIds);
    if (isAlive()) setState({ contacts, isDataFetched: true });
  });
  return state;
}
