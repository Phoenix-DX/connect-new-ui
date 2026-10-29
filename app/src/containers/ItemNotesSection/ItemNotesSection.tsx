/** @origin UBTConnect_Utils.CW_Notes.ItemNotesSection */
// @os-block UBTConnect_Utils.CW_Notes.ItemNotesSection
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { child, scopeOf } from '@/components/ui/os/blockIds';
import { ItemCard_ActionBar, type ActionBarOptions } from '@/components/note/ItemCardActions';
import { NotesSheet } from '@/components/note/NotesSheet';
import { NoteListActionsContainer } from '@/containers/NoteListActions';
import { UBT_Color, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import type { Notes } from '@/lib/ubtConnectLibrary/structures';
import { NO_NOTES } from './notes';

interface ItemNotesSectionProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_ItemId (Text): the item that the notes belong to. */
  inItemId?: string;
  /** In_NoteCategoryId. */
  inNoteCategoryId?: string;
  /** In_Notes. */
  inNotes?: Notes;
  /** ActionBarOptions of ItemCard_ActionBar. */
  actionBarOptions?: ActionBarOptions;
  /** Event On_NotesChanged(New_Notes): after an add or an edit. */
  onOnNotesChanged?: (notes: Notes) => Promise<void> | void;
  /** Event On_NoteDeleted(NoteId, WasLastNote). */
  onOnNoteDeleted?: (noteId: string, wasLastNote: boolean) => Promise<void> | void;
}

const NO_ACTIONS: ActionBarOptions = { showUnbookmark: false, showAddNote: false, showShare: false };

/** The notes of one item with an action bar (live TST UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc.js, view
    :245-497, controller :500-990; extracted to migration/screens/EventDetail/analysis/sources/pretty/). CustomContainer
    $b1 with, only when In_Notes.Total > 0, the note preview (NoteListActions $b2, preview only); CustomContainer $b3
    (border top small neutral-2, vertical padding small) with ItemCard_ActionBar $b4; then NotesSheet $b5 (open while
    IsAddNote). Add Note and the preview's "show all" set IsAddNote True; On_NoteSheet_Closed sets it False. The
    preview's OnSaveEditNote and the sheet's On_NotesChanged raise On_NotesChanged; both On_NoteDeleted raise
    On_NoteDeleted. A container, because the preview is the NoteListActions container.
    Not ported (no effect on the two users, EventDetail and LDM_EventDetail_V2): OnReady sets ShareObjectTypeId from
    In_EntityType, and the share, bookmark and contact-popup handlers (Handler_OnShareClicked, OnShareToOthers,
    OnSharedCancel, On_BookmarkClicked, On_UnbookmarkClicked); no widget of the view reads or raises them, and the users
    pass neither In_EntityType, In_IsBookmarked nor In_ContactPopupData. */
export function ItemNotesSection({
  id,
  inItemId = '',
  inNoteCategoryId = '',
  inNotes = NO_NOTES,
  actionBarOptions = NO_ACTIONS,
  onOnNotesChanged,
  onOnNoteDeleted,
}: ItemNotesSectionProps) {
  const p = scopeOf(id);
  // IsAddNote: the NotesSheet is open.
  const [isAddNote, setIsAddNote] = useState(false);
  // Handler_OnAddNoteClicked and Handler_OnShowAllNotesRequested: IsAddNote = True.
  const openNotesSheet = () => {
    setIsAddNote(true);
  };
  // Handler_OnSaveEditNote and Handler_OnSheetNotesChanged: trigger On_NotesChanged.
  const notesChanged = (notes: Notes) => onOnNotesChanged?.(notes);
  // Handler_OnNoteDeleted: trigger On_NoteDeleted.
  const noteDeleted = (noteId: string, wasLastNote: boolean) => onOnNoteDeleted?.(noteId, wasLastNote);
  return (
    <OSBlock name="CW_Notes.ItemNotesSection" id={id}>
      <CustomContainer id={child(p, 1)}>
        {(inNotes.Total ?? 0) > 0 && (
          <NoteListActionsContainer
            id={child(p, 2)}
            inShowPreviewOnly
            inItemId={inItemId}
            inNoteCategoryId={inNoteCategoryId}
            notes={inNotes}
            onOnShowAllNotesRequested={openNotesSheet}
            onOnSaveEditNote={notesChanged}
            onOnNoteDeleted={noteDeleted}
          />
        )}
        <CustomContainer
          id={child(p, 3)}
          options={{
            PaddingSize: { VerticalSizeId: UBT_Size.Small },
            BorderOptions: { Color: UBT_Color.Neutral2, Size: { TopSizeId: UBT_Size.Small } },
          }}
        >
          <ItemCard_ActionBar id={child(p, 4)} actionBarOptions={actionBarOptions} onEventAddNote={openNotesSheet} />
        </CustomContainer>
        <NotesSheet
          id={child(p, 5)}
          inNotes={inNotes}
          inIsOpen={isAddNote}
          inItemId={inItemId}
          inNoteCategoryId={inNoteCategoryId}
          onOnNotesChanged={notesChanged}
          onOnNoteDeleted={noteDeleted}
          onOnNoteSheetClosed={() => {
            // Handler_OnNoteSheetClosed: IsAddNote = False.
            setIsAddNote(false);
          }}
        />
      </CustomContainer>
    </OSBlock>
  );
}
