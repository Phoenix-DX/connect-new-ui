import { OSBlock } from '@/components/ui/os/OSBlock';
import { ActionConfirmationDialog } from '@/platform/feedback/dialogs';

/** The delete dialog of a bookmark note. ActionConfirmationDialog "Delete note", "Are you sure you would like to
    delete this note?", "YES" / "NO"; Confirmed → DeleteNoteConfirm(bookmarkId). Closed in every captured state (only
    the BookmarkNote block opens it, and the TST branch never renders that block).
    @origin Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteDelete */

export interface BookmarkNoteDeleteProps {
  /** Instance id (`b1-DeleteNote_Popup`). */
  id: string;
  /** Id prefix of the block's own elements (`b1-b19`). */
  scope: string;
  bookmarkId: string;
  /** Event DeleteNoteConfirm(bookmarkId). */
  onDeleteNoteConfirm: (bookmarkId: string) => void;
}

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
