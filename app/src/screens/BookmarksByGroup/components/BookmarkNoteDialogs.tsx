// @os-block Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit
// @os-block Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteDelete
import { useState } from 'react';
import { NotCaptured } from '@/app/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ActionConfirmationDialog } from '@/platform/feedback/dialogs';
import type { BookmarkNote } from '@/screens/BookmarksByGroup/types';

export interface BookmarkNoteAddEditProps {
  /** Instance id (`b1-BookmarkNoteAddEdit_Popup`): the id ScreenBlock_BookmarkGroup gives ConfirmAction. */
  id: string;
  /** Id prefix of the block's own elements (`b1-b18`). */
  scope: string;
  bookmarkNote: BookmarkNote;
  /** Event Save_Note(BookmarkNote). */
  onSaveNote: (note: BookmarkNote) => void;
}

/** MyBookmarksFlow.BookmarkNoteAddEdit (analysis/sources/pretty/Connect2_MyBookmarks_MUI.MyBookmarksFlow
    .BookmarkNoteAddEdit.mvc.js: view internalRender, controller after it). A `bookmark-note-action-dialog` container
    with ActionConfirmationDialog: header "Add note" / "Edit note" (In_Note = Trim(BookmarkNote.Note), set on parameter
    change), body TextArea_Note (max 50, 3 lines, "Give a Description", form-control OSFillParent) and
    Reusable.InputCounter (not built: NotCaptured), "SAVE" and "CANCEL" (CANCEL → DiscardNote: Note = ""). Confirmed →
    SaveNote: Save_Note(BookmarkNote), then Note = "" and BookmarkId = 0. Opened only by the BookmarkNote block, which
    the TST branch never renders (mobileDirectoryBookmarkNote off): closed in every captured state. */
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

export interface BookmarkNoteDeleteProps {
  /** Instance id (`b1-DeleteNote_Popup`). */
  id: string;
  /** Id prefix of the block's own elements (`b1-b19`). */
  scope: string;
  bookmarkId: string;
  /** Event DeleteNoteConfirm(bookmarkId). */
  onDeleteNoteConfirm: (bookmarkId: string) => void;
}

/** MyBookmarksFlow.BookmarkNoteDelete (analysis/sources/pretty/Connect2_MyBookmarks_MUI.MyBookmarksFlow
    .BookmarkNoteDelete.mvc.js: view internalRender). ActionConfirmationDialog "Delete note", "Are you sure you would
    like to delete this note?", "YES" / "NO"; Confirmed → DeleteNoteConfirm(bookmarkId). Closed in every captured state
    (same reason as BookmarkNoteAddEdit). */
export function BookmarkNoteDelete({ id, scope, bookmarkId, onDeleteNoteConfirm }: BookmarkNoteDeleteProps) {
  return (
    <OSBlock name="MyBookmarksFlow.BookmarkNoteDelete" id={id}>
      <div className="bookmark-note-action-dialog backwards-compatibility" data-container="">
        <ActionConfirmationDialog
          widgetId={`${scope}-$b1`}
          scope={`${scope}-b1`}
          header="Delete note"
          body={<div data-container="">Are you sure you would like to delete this note?</div>}
          confirmLabel="YES"
          dismissLabel={<div data-container="">NO</div>}
          onConfirmed={() => {
            onDeleteNoteConfirm(bookmarkId);
          }}
        />
      </div>
    </OSBlock>
  );
}
