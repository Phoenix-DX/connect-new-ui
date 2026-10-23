import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { noteKeys } from './keys';
import { fetchEntityNotes, fetchNoteCards } from './repository';
import type { EntityNotesCallInputs, NoteCardPage, NoteList, NotesVariables } from './types';

/** The query options that a caller can set (for example `enabled`). The key, the query function and the cache times
    are fixed. */
export type NoteQueryOptions<T> = Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn' | 'staleTime' | 'gcTime'>;

/** No cache: each fetch calls the server, as OutSystems does, so the calls stay equal to the original (call parity,
    refactor plan v2 §5.4). */
const NO_CACHE = { staleTime: 0, gcTime: 0 } as const;

/* The two data actions of the note domain as queries. No caller yet: the screen Notes and the block
   Directory_EntityDetailsActions fetch on demand in their own flows (Refresh_GetNotes, Action_RefreshFetchNotes) and
   call the repository functions. The server actions (Get_NotePills_ByNoteCategoryIds and the writes) are not queries:
   the flows call them in order, or on a user action. */

/** DataActionGetNotes of the screen Notes as a query. No retry by default: OutSystems does not retry a failed data
    action. */
export function useNoteCardsQuery(variables: NotesVariables, options: NoteQueryOptions<NoteCardPage> = {}) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: noteKeys.cards(variables),
    queryFn: () => fetchNoteCards(variables),
    ...NO_CACHE,
  });
}

/** DataActionFetchNotes of Directory_EntityDetailsActions as a query. No retry by default. */
export function useEntityNotesQuery(inputs: EntityNotesCallInputs, options: NoteQueryOptions<NoteList> = {}) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: noteKeys.entity(inputs),
    queryFn: () => fetchEntityNotes(inputs),
    ...NO_CACHE,
  });
}
