import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/** Wire shapes (P-DATA): only mocks.ts uses them. */
export type NoteCardItemWire = ActionOutputs<
  PathOf<'UBTConnect', 'Notes/DataActionGetNotes'>
>['Out_Notes']['NoteCardItem_List']['List'][number];

/* A note card (Connect_Notes_CS UI_Note_CardItem), the filter (Connect_Notes_CS Notes_Filter) and the screen variables
   that DataActionGetNotes sends (Notes.mvc.js model) are domain types of api/note. This module keeps the names that the
   screen and its blocks use. */
export type { NoteCardItem, NotesFilter, NotesVariables } from '@/api/note';
