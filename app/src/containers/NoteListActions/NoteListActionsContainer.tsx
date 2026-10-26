/** @origin UBTConnect_Utils.CW_Notes.NoteListActions */
// @os-block UBTConnect_Utils.CW_Notes.NoteListActions
import { useEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { isSystemException, isUserException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { createOrUpdate_LocalNote, delete_LocalNoteByNoteId } from '@/platform/storage/localEntities';
import { NoteList } from '@/components/note/NoteList';
import type { Notes } from '@/lib/ubtConnectLibrary/structures';
import { currDateTime } from '@/lib/osDateTime';
import { note_SendFeedbackMessages } from '@/lib/ubtConnectUtils/actions';
import { NoteActionType } from '@/lib/ubtConnectUtils/staticEntities';
import { deleteNoteByNoteId, updateNote } from './api';

export interface NoteListActionsContainerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Notes. */
  notes?: Notes;
  /** In_ItemId (Long Integer): the item the notes belong to. */
  inItemId?: string;
  /** In_NoteCategoryId. */
  inNoteCategoryId?: string;
  /** In_ShowPreviewOnly. */
  inShowPreviewOnly?: boolean;
  /** In_SearchString. */
  inSearchString?: string;
  /** Event OnSaveEditNote(Notes): the notes after an edit (or after a note found missing). */
  onOnSaveEditNote?: (notes: Notes) => Promise<void> | void;
  /** Event On_EditingStateChanged(In_IsEditing). */
  onOnEditingStateChanged?: (isEditing: boolean) => Promise<void> | void;
  /** Event On_NoteDeleted(NoteId, IsLastNoteDeleted). */
  onOnNoteDeleted?: (noteId: string, isLastNoteDeleted: boolean) => Promise<void> | void;
  /** Event On_ShowAllNotesRequested. */
  onOnShowAllNotesRequested?: () => void;
}

/** Edit and delete of the notes around Note_Item_List (migration/blocks/sources/
    UBTConnect_Utils.CW_Notes.NoteListActions.mvc.js: view :250-300, controller :300-860), keeping the device's local
    copy of the notes in step (shell/localEntities). */
export function NoteListActionsContainer({
  id,
  notes = {},
  inItemId = '0',
  inNoteCategoryId = '',
  inShowPreviewOnly = false,
  inSearchString = '',
  onOnSaveEditNote,
  onOnEditingStateChanged,
  onOnNoteDeleted,
  onOnShowAllNotesRequested,
}: NoteListActionsContainerProps) {
  const [editingNoteId, setEditingNoteId] = useState('0');
  // OnInitialize / OnParametersChanged: Set_NotesData (NotesData = Notes).
  const [notesData, setNotesData] = useState<Notes>(notes);
  const parameters = JSON.stringify([notes, inItemId, inNoteCategoryId, inShowPreviewOnly, inSearchString]);
  const previousParameters = useRef(parameters);
  useEffect(() => {
    if (previousParameters.current === parameters) return;
    previousParameters.current = parameters;
    setNotesData(notes);
  }, [parameters, notes]);

  // Handler_OnEditingRequested / Handler_OnCancelEditRequested.
  const editingRequested = (noteId: string) => {
    setEditingNoteId(noteId);
    void onOnEditingStateChanged?.(true);
  };
  const cancelEditRequested = () => {
    setEditingNoteId('0');
    void onOnEditingStateChanged?.(false);
  };

  // Handler_OnSaveEditRequested (:466-630). Handle Error: UserException only (:600-618): any other error goes up to the
  // flow handler (Q-W3B-2).
  const saveEditRequested = async (noteId: string, outNote: string) => {
    try {
      const result = await updateNote(noteId, outNote);
      const list = notesData.Note_Item_List ?? [];
      if (result.success) {
        const editedAt = currDateTime();
        const position = list.findIndex((note) => note.Id === noteId);
        setEditingNoteId('0');
        let newNotes = notesData;
        if (position !== -1) {
          // CreateOrUpdate_LocalNote (:521-524), before the note changes
          await createOrUpdate_LocalNote(
            noteId,
            inNoteCategoryId,
            inItemId,
            list[position]?.DateCreatedUtc ?? '',
            editedAt,
          );
          newNotes = {
            ...notesData,
            Note_Item_List: list.map((note, i) =>
              i === position ? { ...note, Note: outNote, DateEditedUtc: editedAt } : note,
            ),
          };
        }
        setNotesData(newNotes);
        await onOnSaveEditNote?.(newNotes);
        await onOnEditingStateChanged?.(false);
        note_SendFeedbackMessages(NoteActionType.Edit, true, false);
      } else if (result.isNotFound) {
        const position = list.findIndex((note) => note.Id === noteId);
        // Delete_LocalNoteByNoteId (:559-561)
        await delete_LocalNoteByNoteId(noteId);
        setEditingNoteId('0');
        const newNotes =
          position !== -1 ? { ...notesData, Note_Item_List: list.filter((_, i) => i !== position) } : notesData;
        setNotesData(newNotes);
        await onOnSaveEditNote?.(newNotes);
        await onOnEditingStateChanged?.(false);
        note_SendFeedbackMessages(NoteActionType.Edit, false, true);
      } else {
        note_SendFeedbackMessages(NoteActionType.Edit, false, false);
      }
    } catch (error) {
      if (!isUserException(error)) {
        raiseToFlowHandler(error);
        return;
      }
      note_SendFeedbackMessages(NoteActionType.Edit, false, false);
    }
  };

  // Handler_OnDeleteNoteRequested (:690-765). Handle Error: AllExceptions (:740-756): every error that is not a system
  // exception (a failed call, the local copy, the events) shows the failure message.
  const deleteNoteRequested = async (noteId: string) => {
    try {
      const result = await deleteNoteByNoteId(noteId);
      if (result.success) {
        // Delete_LocalNoteByNoteId (:717-719)
        await delete_LocalNoteByNoteId(noteId);
        await onOnNoteDeleted?.(noteId, (notes.Note_Item_List ?? []).length === 1);
        note_SendFeedbackMessages(NoteActionType.Delete, true, false);
      } else {
        note_SendFeedbackMessages(NoteActionType.Delete, false, false);
      }
    } catch (error) {
      if (isSystemException(error)) {
        raiseToFlowHandler(error);
        return;
      }
      note_SendFeedbackMessages(NoteActionType.Delete, false, false);
    }
  };

  return (
    <OSBlock name="CW_Notes.NoteListActions" id={id}>
      <NoteList
        inShowPreviewOnly={inShowPreviewOnly}
        inSearchString={inSearchString}
        inEditingNoteId={editingNoteId}
        notes={notesData}
        onOnShowAllNotes={onOnShowAllNotesRequested}
        onOnDeleteRequested={(noteId) => void deleteNoteRequested(noteId)}
        onOnEditRequested={editingRequested}
        onOnCancelEditRequested={cancelEditRequested}
        onOnSaveEditRequested={(noteId, outNote) => void saveEditRequested(noteId, outNote)}
      />
    </OSBlock>
  );
}
