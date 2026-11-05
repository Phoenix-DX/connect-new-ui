import { useEffect, useRef } from 'react';
import { fetchAssembleNotes, type AssembleNotesCallInputs } from '@/api/event';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowScope, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import type { Notes } from '@/lib/ubtConnectLibrary/structures';

/** The default of the GetAssembleNotes variable (UBTConnectLibrary Notes): Total 0, an empty list. */
const NO_NOTES: Notes = { Total: 0, Note_Item_List: [] };

/** The screen variables of AssembleDetail that the notes data action and its handlers read. */
export interface AssembleNotesScreen {
  /** The inputs EventId, SeriesId, Start (DateTime wire) and AssembleEventTypeTile. */
  inputs: { EventId: string; SeriesId: string; Start: string; AssembleEventTypeTile: string };
  /** IsShareOpen and ShareableObjectId: sent with the call, as every screen variable. */
  isShareOpen: boolean;
  shareableObjectId: string;
}

/** What the page gives NoteListActions, ItemCard_ActionBar and NotesSheet. */
export interface AssembleNotesFlows {
  /** GetAssembleNotes.Out_Notes. */
  notes: Notes;
  /** IsAddNote: the notes sheet is open. */
  isAddNote: boolean;
  /** OpenNoteSheet (On_ShowAllNotesRequested of NoteListActions, OnClickAddNote of ItemCard_ActionBar): IsAddNote = True. */
  openNoteSheet: () => void;
  /** Handler_NoteSheet_Closed: IsAddNote = False. */
  onNoteSheetClosed: () => void;
  /** Handler_OnNotesChanged (On_NotesChanged of NotesSheet, OnSaveEditNote of NoteListActions): Out_Notes = New_Notes. */
  onNotesChanged: (notes: Notes) => void;
  /** Handler_OnNoteDeleted (both blocks): ListIndexOf, ListRemove, Total = Total - 1. */
  onNoteDeleted: (noteId: string) => void;
}

/** The notes of the AssembleDetail screen (UBTConnect.Legacy_AssembleFlow.AssembleDetail, route-actions gap 8,
    2026-11-05). GetAssembleNotes is a screen data action fetched at start (`dataFetchDependenciesOriginal` 0):
    once per screen instance, unless the view cache restored the screen (R1, `flow.fetch`; a failure goes to the flow
    handler). The handlers are those of AssembleDetail.mvc.js: OpenNoteSheet (:1102), Handler_NoteSheet_Closed
    (:1078), Handler_OnNotesChanged (:980), Handler_OnNoteDeleted (:832). The variables live in the view state, so a
    restored view keeps them. */
export function useAssembleNotes(screen: AssembleNotesScreen): AssembleNotesFlows {
  const flow = useFlowScope();
  const restored = useWasRestoredFromCache();
  const [notes, setNotes] = useViewState<Notes>('GetAssembleNotes', NO_NOTES);
  const [isAddNote, setIsAddNote] = useViewState('IsAddNote', false);
  const { EventId, SeriesId, Start, AssembleEventTypeTile } = screen.inputs;
  const { isShareOpen, shareableObjectId } = screen;
  // The fetch at start runs once per instance: StrictMode (dev) runs the mount effect again on the same instance.
  const started = useRef(false);
  useEffect(() => {
    if (started.current || restored) return;
    started.current = true;
    const callInputs: AssembleNotesCallInputs = {
      EventId,
      SeriesId,
      Start,
      AssembleEventTypeTile,
      IsAddNote: false,
      IsEventNotFound: false,
      IsShareOpen: isShareOpen,
      ShareableObjectId: shareableObjectId,
    };
    flow
      .fetch(fetchAssembleNotes(callInputs))
      .then((out) => {
        setNotes(out);
      })
      .catch((e: unknown) => {
        raiseToFlowHandler(e, flow);
      });
  }, [flow, restored, setNotes, EventId, SeriesId, Start, AssembleEventTypeTile, isShareOpen, shareableObjectId]);

  return {
    notes,
    isAddNote,
    openNoteSheet: () => {
      setIsAddNote(true);
    },
    onNoteSheetClosed: () => {
      setIsAddNote(false);
    },
    onNotesChanged: (next) => {
      setNotes(next);
    },
    onNoteDeleted: (noteId) => {
      setNotes((current) => ({
        Total: (current.Total ?? 0) - 1,
        Note_Item_List: (current.Note_Item_List ?? []).filter((n) => (n.Id ?? '0') !== noteId),
      }));
    },
  };
}
