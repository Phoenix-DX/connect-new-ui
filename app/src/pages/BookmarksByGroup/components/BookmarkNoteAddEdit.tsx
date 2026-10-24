import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { BookmarkNote } from '@/pages/BookmarksByGroup/types';
import { ActionConfirmationDialog } from '@/platform/feedback/dialogs';
import { NotCaptured } from '@/platform/feedback/NotCaptured';

/** The add or edit dialog of a bookmark note. A `bookmark-note-action-dialog` container with ActionConfirmationDialog:
    header "Add note" / "Edit note" (In_Note = Trim(BookmarkNote.Note), set on parameter change), body TextArea_Note
    (max 50, 3 lines, "Give a Description", form-control OSFillParent) and Reusable.InputCounter (not built:
    NotCaptured), "SAVE" and "CANCEL" (CANCEL → DiscardNote: Note = ""). Confirmed → SaveNote: Save_Note(BookmarkNote),
    then Note = "" and BookmarkId = 0. Only the BookmarkNote block opens it, and the TST branch never renders that block
    (mobileDirectoryBookmarkNote off): closed in every captured state.
    @origin Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit */

export interface BookmarkNoteAddEditProps {
  /** Instance id (`b1-BookmarkNoteAddEdit_Popup`): the id that the bookmark group block gives ConfirmAction. */
  id: string;
  /** Id prefix of the block's own elements (`b1-b18`). */
  scope: string;
  bookmarkNote: BookmarkNote;
  /** Event Save_Note(BookmarkNote). */
  onSaveNote: (note: BookmarkNote) => void;
}

export function BookmarkNoteAddEdit({ id, scope, bookmarkNote, onSaveNote }: BookmarkNoteAddEditProps) {
  const [note, setNote] = useState(bookmarkNote);
  const [inNote, setInNote] = useState(bookmarkNote.note.trim());
  // OnParametersChanged: In_Note = Trim(BookmarkNote.Note); the input record replaces the local copy.
  const [lastInput, setLastInput] = useState(bookmarkNote);
  if (lastInput !== bookmarkNote) {
    setLastInput(bookmarkNote);
    setNote(bookmarkNote);
    setInNote(bookmarkNote.note.trim());
  }
  const saveNote = () => {
    onSaveNote(note);
    setNote({ bookmarkId: '0', note: '' });
  };
  return (
    <OSBlock name="MyBookmarksFlow.BookmarkNoteAddEdit" id={id}>
      <div className="bookmark-note-action-dialog backwards-compatibility" data-container="">
        <ActionConfirmationDialog
          widgetId={`${scope}-$b1`}
          scope={`${scope}-b1`}
          header={<span data-expression="">{(inNote === '' ? 'Add ' : 'Edit ') + 'note'}</span>}
          body={
            <>
              <div data-container="">
                <textarea
                  className="form-control OSFillParent"
                  id={`${scope}-TextArea_Note`}
                  maxLength={50}
                  placeholder="Give a Description"
                  rows={3}
                  value={note.note}
                  onChange={(e) => {
                    setNote({ ...note, note: e.target.value });
                  }}
                />
              </div>
              <NotCaptured name="Reusable.InputCounter (not built)" />
            </>
          }
          confirmLabel="SAVE"
          dismissLabel={
            <div
              data-container=""
              onClick={() => {
                setNote({ ...note, note: '' });
              }}
            >
              CANCEL
            </div>
          }
          onConfirmed={saveNote}
        />
      </div>
    </OSBlock>
  );
}
