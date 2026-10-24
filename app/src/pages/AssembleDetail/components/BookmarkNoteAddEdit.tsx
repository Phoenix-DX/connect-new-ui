import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { LegacyInputCounter } from '@/components/ui/LegacyInputCounter';
import { ConfirmDialog } from '@/components/ui/Dialog';

export interface BookmarkNoteAddEditProps {
  /** Instance id (`<scope>-Bookmark_Note`): the id that ConfirmAction looks up. */
  id: string;
  /** Event Save_Note(BookmarkNote): the note text. */
  onSaveNote: (note: string) => void;
}

/** Rendered without inputs here: `bookmark-note-action-dialog backwards-compatibility` > ActionConfirmationDialog
    with "Add note" / "Edit note" (In_Note), TextArea_Note (max 50, 3 lines, "Give a Description") with InputCounter,
    "SAVE" (Confirmed → SaveNote: Save_Note(BookmarkNote), then the note is "") and "CANCEL" (DiscardNote: the note is
    ""). The OnFocus JS of the text area (Enter-key handling) is not ported (spec, Unclear points).
    @origin Connect2_LegacyShared.MyBookmarks.BookmarkNoteAddEdit */
export function BookmarkNoteAddEdit({ id, onSaveNote }: BookmarkNoteAddEditProps) {
  const scope = id.replace(/\$/g, '');
  const [note, setNote] = useState('');
  const [inNote] = useState('');
  return (
    <OSBlock name="MyBookmarks.BookmarkNoteAddEdit" id={id}>
      <div className="bookmark-note-action-dialog backwards-compatibility" data-container="">
        <ConfirmDialog
          widgetId={`${scope}-$b1`}
          scope={`${scope}-b1`}
          header={<span data-expression="">{(inNote === '' ? 'Add ' : 'Edit ') + 'note'}</span>}
          body={
            <div data-container="">
              <textarea
                className="form-control OSFillParent"
                id={`${scope}-TextArea_Note`}
                maxLength={50}
                placeholder="Give a Description"
                rows={3}
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                }}
              />
              <LegacyInputCounter
                id={`${scope}-$b2`}
                inputId={`${scope}-TextArea_Note`}
                noteInitialLength={note.length}
              />
            </div>
          }
          confirmLabel="SAVE"
          dismissLabel={
            <div
              data-container=""
              onClick={() => {
                setNote('');
              }}
            >
              CANCEL
            </div>
          }
          onConfirmed={() => {
            onSaveNote(note);
            setNote('');
          }}
        />
      </div>
    </OSBlock>
  );
}
