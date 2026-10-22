// @os-block UBTConnect_Utils.CW_Notes.NotesSheet
import { useEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { isUserException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { createOrUpdate_LocalNote } from '@/platform/storage/localEntities';
import { BackNavigationHandler } from '@/shared/NavigationHandler/BackNavigationHandler';
import { AddNote } from '@/shared/UBTConnectLibrary/AddNote';
import { BottomSheet } from '@/shared/UBTConnectLibrary/BottomSheet';
import type { Notes } from '@/shared/UBTConnectLibrary/lib/structures';
import { bottomSheetClose, bottomSheetOpen } from '@/shared/osui/lib/actions';
import { note_SendFeedbackMessages } from '@/shared/UBTConnect_Utils/lib/actions';
import { NoteActionType } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { NoteListActions } from '@/shared/UBTConnect_Utils/NoteListActions';
import { addNote } from './api';
import { delaySetIsOpen } from './jsNodes';

export interface NotesSheetProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_IsOpen: opens / closes the sheet. */
  inIsOpen?: boolean;
  /** ExtendedClasses of the BottomSheet. */
  extendedClasses?: string;
  /** In_ItemId (Long Integer). */
  inItemId?: string;
  /** In_NoteCategoryId. */
  inNoteCategoryId?: string;
  /** In_Notes. */
  inNotes?: Notes;
  /** Event On_NotesChanged(Notes): after an add or an edit. */
  onOnNotesChanged?: (notes: Notes) => Promise<void> | void;
  /** Event On_NoteSheet_Closed. */
  onOnNoteSheetClosed?: () => void;
  /** Event On_NoteDeleted(NoteId, IsLastNoteDeleted). */
  onOnNoteDeleted?: (noteId: string, isLastNoteDeleted: boolean) => Promise<void> | void;
}

/** The "Note" bottom sheet: the notes with edit / delete and the AddNote footer
    (migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js: view
    :196-410, controller :416-944). */
export function NotesSheet({
  id,
  inIsOpen = false,
  extendedClasses = '',
  inItemId = '0',
  inNoteCategoryId = '',
  inNotes = {},
  onOnNotesChanged,
  onOnNoteSheetClosed,
  onOnNoteDeleted,
}: NotesSheetProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const bottomSheetId = useRef('');
  const pendingOpen = useRef(false);
  const isSheetOpenRef = useRef(false);
  const previousInIsOpen = useRef(inIsOpen);
  useEffect(() => {
    isSheetOpenRef.current = isSheetOpen;
  });

  // Action_SetBottomSheetOpen: IsSheetOpen = In_Value.
  const setBottomSheetOpen = (value: boolean) => {
    isSheetOpenRef.current = value;
    setIsSheetOpen(value);
  };

  // OnParametersChanged (:640-700): In_IsOpen <> IsSheetOpen → open (IsSheetOpen, ScreenModel_Flush, BottomSheetOpen
  // once the sheet is initialized) or close (DelaySetIsOpen JS, BottomSheetClose).
  useEffect(() => {
    if (previousInIsOpen.current === inIsOpen) return;
    previousInIsOpen.current = inIsOpen;
    if (isSheetOpenRef.current === inIsOpen) return;
    if (inIsOpen) {
      pendingOpen.current = true;
      // The OutSystems handler is an async flow: the state change runs after the render that changed the input.
      void Promise.resolve().then(() => {
        setBottomSheetOpen(true);
      });
    } else {
      delaySetIsOpen(bottomSheetId.current, setBottomSheetOpen);
      bottomSheetClose(bottomSheetId.current);
    }
  }, [inIsOpen]);

  // BottomSheet_Initialized (:631-639): BottomSheetId = Id; the pending BottomSheetOpen runs with it.
  const onInitialized = (sheetId: string) => {
    bottomSheetId.current = sheetId;
    if (pendingOpen.current) {
      pendingOpen.current = false;
      bottomSheetOpen(sheetId);
    }
  };

  // Handler_OnAddNoteRequested (:470-580). Handle Error: UserException only (:549-565): any other error goes up to the
  // flow handler (Q-W3B-2).
  const addNoteRequested = async (note: string) => {
    try {
      const result = await addNote(inNoteCategoryId, inItemId, note);
      if (result.success) {
        const added = result.noteAdded;
        // ListAppend (:509-516): the added note with the typed text
        const addedNote = {
          Id: added.Id,
          Note: note,
          DateCreatedUtc: added.DateCreatedUtc,
          DateEditedUtc: added.DateEditedUtc,
        };
        // CreateOrUpdate_LocalNote (:518-521)
        await createOrUpdate_LocalNote(added.Id, inNoteCategoryId, inItemId, added.DateCreatedUtc, added.DateEditedUtc);
        const newNotes: Notes = {
          Total: (inNotes.Total ?? 0) + 1,
          Note_Item_List: [addedNote, ...(inNotes.Note_Item_List ?? [])],
        };
        await onOnNotesChanged?.(newNotes);
        note_SendFeedbackMessages(NoteActionType.Add, true, false);
      } else {
        note_SendFeedbackMessages(NoteActionType.Add, false, false);
      }
    } catch (error) {
      if (!isUserException(error)) {
        raiseToFlowHandler(error);
        return;
      }
      note_SendFeedbackMessages(NoteActionType.Add, false, false);
    }
  };

  return (
    <OSBlock name="CW_Notes.NotesSheet" id={id}>
      {isSheetOpen && (
        <BottomSheet
          title="Note"
          extendedClasses={extendedClasses}
          showHeader
          footerHeight="72px"
          onOnClose={onOnNoteSheetClosed}
          onInitialized={onInitialized}
          content={
            <NoteListActions
              notes={inNotes}
              inItemId={inItemId}
              inShowPreviewOnly={false}
              inNoteCategoryId={inNoteCategoryId}
              onOnNoteDeleted={onOnNoteDeleted}
              onOnEditingStateChanged={setIsEditing}
              onOnSaveEditNote={async (notes) => {
                // Handler_OnSaveEditNote: On_NotesChanged(Notes).
                await onOnNotesChanged?.(notes);
              }}
            />
          }
          footer={!isEditing && <AddNote onOnSubmitRequested={addNoteRequested} />}
        />
      )}
      {isSheetOpen && (
        <BackNavigationHandler
          onBackNavigation={() => {
            // BackNavigationHandlerBackNavigation (:610-628): an empty flow.
          }}
        />
      )}
    </OSBlock>
  );
}
