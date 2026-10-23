import { fetchNotePills, type NotePill } from '@/api/note';
import {
  get_Note_DynamicFilter_YearOptions,
  getLocalNotesCategoryIds_ByUserId,
} from '@/platform/storage/localEntities';
import { currentUserId } from '@/platform/session/session';
import type { Tag } from '@/shared/UBTConnectLibrary/lib/structures';

/* The calls of the screen are in the domain api/note: the data action GetNotes (sent with the screen variables;
   refreshed only by Refresh_GetNotes) and the server action Get_NotePills_ByNoteCategoryIds. This module keeps the
   name that the screen uses and the client actions that read the local notes. */
export { fetchNoteCards as fetchNotes } from '@/api/note';

/** UBTConnect_Notes_MCS.Get_Note_DynamicPills: the user's distinct local note category ids
    (GetLocalNotesCategoryIds_ByUserId), then the server action Get_NotePills_ByNoteCategoryIds. */
async function get_Note_DynamicPills(): Promise<NotePill[]> {
  const ids = await getLocalNotesCategoryIds_ByUserId(Number(currentUserId() ?? 0));
  return fetchNotePills(ids);
}

/** UBTConnect.GetNotes_Pills (UBTConnect.controller.js:10171-10246): "All" (NullTextIdentifier, selected), then one
    unselected pill per dynamic pill. */
export async function getNotes_Pills(): Promise<Tag[]> {
  const pills = await get_Note_DynamicPills();
  return [
    { Text: 'All', Identifier: '', IsSelected: true, Enabled: true },
    ...pills.map((p) => ({ Text: p.text, Identifier: p.identifier, IsSelected: false, Enabled: true })),
  ];
}

/** UBTConnect.GetNotes_FilterYear (UBTConnect.controller.js:10115-10159): the year options of the local notes. */
export const getNotes_FilterYear = (): Promise<string[]> => get_Note_DynamicFilter_YearOptions();
