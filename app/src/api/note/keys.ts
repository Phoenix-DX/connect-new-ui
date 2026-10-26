import type { EntityNotesCallInputs, NotesVariables } from './types';

/** Query keys of the note queries. The inputs are part of the key: the server answer can depend on each of them. */
export const noteKeys = {
  all: ['note'] as const,
  cards: (variables: NotesVariables) => [...noteKeys.all, 'cards', variables] as const,
  entity: (inputs: EntityNotesCallInputs) => [...noteKeys.all, 'entity', inputs] as const,
};
