/** @origin UBTConnect_Utils.CW_Notes.NotesSheet */
// @os-block UBTConnect_Utils.CW_Notes.NotesSheet
import { useEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { UserException, isCommunicationException, isUserException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { createOrUpdate_LocalNote } from '@/platform/storage/localEntities';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { AddNote } from '@/components/note/AddNote';
import { ConnectBottomSheet } from '@/components/ui/ConnectBottomSheet';
import type { Notes } from '@/lib/ubtConnectLibrary/structures';
import { bottomSheetClose, bottomSheetOpen } from '@/components/ui/lib/actions';
import { note_SendFeedbackMessages } from '@/lib/ubtConnectUtils/actions';
import { NoteActionType } from '@/lib/ubtConnectUtils/staticEntities';
import { NoteListActionsContainer } from '@/containers/NoteListActions';
import { addNote } from './api';
import { delaySetIsOpen } from './jsNodes';

export interface NotesSheetProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_IsOpen: opens / closes the sheet. */
  inIsOpen?: boolean;
  /** ExtendedClasses of the BottomSheet. */
  extendedClasses?: string;
  /** In_ItemId (Text; an interchange note id is "<LocalityId>:<InterchangeLocalityId>"). */
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

/** The "Note" bottom sheet: the notes with edit / delete and the AddNote footer in a `notes-sheet-footer` container
    (TST code of 2026-10-27: migration/screens/HouseholdDetails/analysis/sources/pretty/
    UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js; its stylesheet css/UBTConnect_Utils.CW_Notes.NotesSheet.css is linked
    per route, app/routes.css.generated.ts). Not ported: the AddNote inputs In_Note / IsSubmitting (NoteText,
    IsSubmittingNote), README. */
export function NotesSheet({
  id,
  inIsOpen = false,
  extendedClasses = '',
  inItemId = '',
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

  // BottomSheetOnToggle (controller :720-740): IsSheetOpen = IsOpen; a close while In_IsOpen is True runs
  // Handler_OnNoteSheet_Closed (IsEditing = False, On_NoteSheet_Closed).
  const bottomSheetOnToggle = (isOpen: boolean) => {
    setBottomSheetOpen(isOpen);
    if (!isOpen && inIsOpen) {
      setIsEditing(false);
      onOnNoteSheetClosed?.();
    }
  };

  // Handler_OnSubmitNote (controller :530-640). Handle Error: CommunicationException raises the UserException
  // UBTConnect_Utils.CommunicationError ("NoteCommunicationError"); UserException shows the add error message; any
  // other error goes up to the flow handler (Q-W3B-2).
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
      if (isCommunicationException(error)) {
        raiseToFlowHandler(new UserException('NoteCommunicationError', 'UBTConnect_Utils.CommunicationError'));
        return;
      }
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
        <ConnectBottomSheet
          title="Note"
          extendedClasses={extendedClasses}
          showHeader
          footerHeight="72px"
          onOnToggle={bottomSheetOnToggle}
          onInitialized={onInitialized}
          content={
            <NoteListActionsContainer
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
          footer={
            !isEditing && (
              <CustomContainer extendedClasses="notes-sheet-footer" options={{ Background: {} }}>
                <AddNote onOnSubmitRequested={addNoteRequested} />
              </CustomContainer>
            )
          }
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
