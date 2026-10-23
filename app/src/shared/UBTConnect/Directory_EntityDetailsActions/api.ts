import type { ActionInputs, PathOf } from '@/api/client/callAction';

/** The screen variables sent with both data actions of the block (x-os-inputs: screen-variables). */
export type EntityDetailsActionsVariables = ActionInputs<
  PathOf<'UBTConnect', 'Directory_EntityDetailsActions/DataActionFetchContactDetails'>
>;

/* DataActionFetchContactDetails (block controller fetchContactDetails$DataActRefresh), refreshed by
   Action_AsyncRefresh_ContactDetails, never on start, is in the domain api/message; this module keeps the name that
   the block uses. */
export { fetchEntityContactDetails as fetchContactDetails } from '@/api/message';

/* DataActionFetchNotes (refreshed by Action_RefreshFetchNotes, sent with the block variables) is in the domain
   api/note. This module keeps the name that the block uses. */
export { fetchEntityNotes as fetchNotes } from '@/api/note';
