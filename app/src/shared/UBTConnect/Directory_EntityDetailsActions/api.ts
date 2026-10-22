import { callAction, type ActionInputs, type PathOf } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type { Notes } from '../../UBTConnectLibrary/lib/structures';

/** The screen variables sent with both data actions of the block (x-os-inputs: screen-variables). */
export type EntityDetailsActionsVariables = ActionInputs<
  PathOf<'UBTConnect', 'Directory_EntityDetailsActions/DataActionFetchContactDetails'>
>;

/** DataActionFetchContactDetails (block controller fetchContactDetails$DataActRefresh): refreshed by
    Action_AsyncRefresh_ContactDetails, never on start. */
export async function fetchContactDetails(variables: EntityDetailsActionsVariables) {
  return callAction('UBTConnect', 'Directory_EntityDetailsActions/DataActionFetchContactDetails', variables);
}

/** DataActionFetchNotes (block controller fetchNotes$DataActRefresh): refreshed by Action_RefreshFetchNotes. */
export async function fetchNotes(variables: EntityDetailsActionsVariables): Promise<Notes> {
  const out = await callAction('UBTConnect', 'Directory_EntityDetailsActions/DataActionFetchNotes', variables);
  return { Total: out.Notes.Total, Note_Item_List: osList(out.Notes.Note_Item_List) };
}
