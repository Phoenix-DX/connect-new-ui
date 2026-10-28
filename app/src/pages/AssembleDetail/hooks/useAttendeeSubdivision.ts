import { useRef } from 'react';
import type { AssembleAttendeeGuest, AssembleAttendeeSubdivision } from '@/api/event';
import { confirmAction } from '@/platform/feedback/dialogs/confirmAction';
import { rememberFocusedScrollAnchor, setPreloadObject, useFlowState } from '@/platform/navigation';
import { getLocalBookmarksByObjectType } from '@/platform/storage/localEntities';
import { toggleBookmarkItem } from '@/lib/assemble/actions';
import { MyBookmarks_Group, MyBookmarks_ObjectType } from '@/lib/assemble/staticEntities';
import { getCacheableSubdivision_V2 } from '@/lib/legacyShared/actions';
import { maybeDisplaySubscriptionPopup } from '@/pages/AssembleDetail/components/actions';
import {
  attendeeSubdivisionReducer,
  hallLocationOf,
  hasHallHouseholds,
  householdRowsOf,
  householdShareable,
  initialAttendeeSubdivisionState,
  SHARE_OBJECT_HOUSEHOLD,
  withLocalBookmarks,
  type AttendeeSubdivisionState,
} from './attendeeSubdivisionState';

/** The flows of the block AssembleEventDetail_AttendeeSubdivision: OnReady, the hall header, the household click, the
    bookmark and share options of the context menu, and the share sheet. The component
    AssembleEventDetail_AttendeeSubdivision calls this hook.
    OnParametersChanged is ported too (it re-reads the local bookmarks); no path reaches it today, and the port compares
    the parameters by JSON (OutSystems by its runtime rule).
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision */

/** The flags of the block, read by the page. */
export interface AttendeeSubdivisionFlags {
  /** mobileDirectoryBookmarkNote (GetHasBookmarNote): the Bookmark_Note dialog renders. */
  hasBookmarkNote: boolean;
  /** C2ExtendedShare: share to Connect opens the household share sheet instead of LegacyShareObject. */
  hasExtendedShare: boolean;
}

/** The events of the block, which go up to the screen. */
export interface AttendeeSubdivisionEvents {
  /** NavigateTo_ShareObject(ShareObjectTypeId, ObjectId, IsExternalSharing). */
  onNavigateToShareObject: (shareObjectTypeId: string, objectId: string, isExternalSharing: boolean) => void;
  /** NavigateTo_HouseholdCarousel(ItemPosition, SelectedHouseholdId). */
  onNavigateToHouseholdCarousel: (itemPosition: number, selectedHouseholdId: string) => void;
}

/** What the component renders and the handlers of its widgets. */
export interface AttendeeSubdivisionFlows {
  /** The block variables (rendered). */
  state: AttendeeSubdivisionState;
  /** The click on the hall header: IsSelected toggles. */
  onToggleSelected: () => void;
  /** OnClickItem of a household row. */
  onClickHousehold: (row: AssembleAttendeeGuest, index: number) => void;
  /** BookmarkButtonClicked(IsItemBookmarked) of a row's ContextMenu. */
  onClickBookmarkButton: (row: AssembleAttendeeGuest, index: number, isItemBookmarked: boolean) => void;
  /** ShareProfileToConnect of a row's ContextMenu. */
  onClickShareConnect: (row: AssembleAttendeeGuest) => void;
  /** Save_Note(BookmarkNote) of Bookmark_Note. */
  onSaveNote: (note: string) => void;
  /** EventClosedShareSheet of the ShareSheet. */
  onCloseShareSheet: () => void;
}

/** The state and the flows of one hall. `blockId` is the block instance id; the Bookmark_Note dialog that
    ConfirmAction opens is `<blockId>-Bookmark_Note`. The state comes from useFlowState and the view cache keeps it.
    - OnReady: a new visit calls GetCacheableSubdivision_V2(Id) (CR-AssembleDetail-1): the rows are its households,
      CountryCode and LocalityId its hall's locality. A view that the view cache restored keeps its saved variables
      (the expanded state and the rows) and makes no call; when its saved state has no answer of
      GetCacheableSubdivision_V2 (no saved state for the block, or the user left before the answer), it calls as on a
      new visit. Then, also on a restored view, Set_SelectedAssembleAttendeeListBookmarks
      (GetLocalBookmarksByObjectType(Contact), a local read). A failure goes to the flow handler.
    - The household click: MaybeDisplaySubscriptionPopup(CountryCode, LocalityId); no popup →
      RememberFocusedScrollAnchor(List_SubdivisionHousehold, row number, Id) (AssembleEventDetail_AttendeeSubdivision.js
      :747, port gap N4), SetPreloadObject(the rows' ids) and NavigateTo_HouseholdCarousel(row number, id).
    - The bookmark: the popup check; a row that is not bookmarked → ConfirmAction(Bookmark_Note), confirmed →
      Trim(BookmarkNote); then ToggleBookmarkItem(row IsBookmarked, Contact, row Id, Contacts, BookmarkNote)
      (CR-AssembleDetail-2), the row's IsBookmarked = not IsItemBookmarked and BookmarkNote = "". A failure goes to the
      flow handler.
    - Share to Connect: the popup check; C2ExtendedShare → the household share sheet opens, else
      NavigateTo_ShareObject(Household, id, False).
    - The handlers read the variables of the render in which the user clicked, as the old port.
    Flow scope (item 8): GetCacheableSubdivision_V2, MaybeDisplaySubscriptionPopup, ConfirmAction, ToggleBookmarkItem,
    RememberFocusedScrollAnchor and SetPreloadObject are module actions (R2, AssembleEventDetail_AttendeeSubdivision.js
    :846, :738, :964, :980, :747, :756): they run after the unmount. Set_SelectedAssembleAttendeeListBookmarks is an
    own action of the block (R3, `flow.own`, ensureControllerAlive :1153): OnReady stops there after the unmount. The
    events NavigateTo_HouseholdCarousel and NavigateTo_ShareObject go through `flow.events` (R3): their screen
    handlers start with ensureControllerAlive (screen_AssembleDetail.js:716, :644). A state write after the unmount is
    dropped (`dispatch`). A failure of the household click, the bookmark or share to Connect goes to the flow handler
    with the flow scope (`flow.run`, R6): MaybeDisplaySubscriptionPopup rethrows to its caller
    (AssembleEventDetail_AttendeeSubdivision.js:770-773; S3a Q1 (a), user 2026-10-28). */
export function useAttendeeSubdivision(
  blockId: string,
  subdivision: AssembleAttendeeSubdivision,
  flags: AttendeeSubdivisionFlags,
  events: AttendeeSubdivisionEvents,
): AttendeeSubdivisionFlows {
  const scope = blockId.replace(/\$/g, '');
  const bookmarkNoteId = `${scope}-Bookmark_Note`;
  const { state, dispatch, latest, flow } = useFlowState({
    viewName: `Assemble.AssembleEventDetail_AttendeeSubdivision#${scope}`,
    reducer: attendeeSubdivisionReducer,
    initial: initialAttendeeSubdivisionState(subdivision),
    parameters: { subdivision },
    events,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (_flow, restored) => onReady(restored),
    onParametersChanged,
  });
  const bookmarkNote = useRef('');

  /** Set_SelectedAssembleAttendeeListBookmarks: GetLocalBookmarksByObjectType(Contact) (a module action), then the
      IsBookmarked of each row of the newest rows, read after the answer as TST (:1167-1180). An own action of the
      block (R3). `isAlive` guards a superseded OnParametersChanged run (item 8 §6, point 5 (a)). */
  const setSelectedAssembleAttendeeListBookmarks = flow.own(async (isAlive: () => boolean = flow.alive) => {
    const bookmarks = await getLocalBookmarksByObjectType(MyBookmarks_ObjectType.Contact);
    if (isAlive()) dispatch({ type: 'set', patch: { rows: withLocalBookmarks(latest.current.rows, bookmarks) } });
  });

  /** OnParametersChanged: Set_SelectedAssembleAttendeeListBookmarks only. The rows stay as they are (no copy of the
      new input, no reload); only IsBookmarked is read again from the local bookmarks. Safe to run more than once. */
  function onParametersChanged(isAlive: () => boolean): Promise<void> {
    return setSelectedAssembleAttendeeListBookmarks(isAlive);
  }

  async function onReady(restored: boolean): Promise<void> {
    if (!restored || !hasHallHouseholds(latest.current)) {
      const info = await getCacheableSubdivision_V2(subdivision.Id);
      dispatch({ type: 'set', patch: { rows: householdRowsOf(info), ...hallLocationOf(info) } });
    }
    await setSelectedAssembleAttendeeListBookmarks();
  }

  const onClickHousehold = async (row: AssembleAttendeeGuest, index: number) => {
    if (await maybeDisplaySubscriptionPopup(state.countryCode, state.localityId)) return;
    // N4: RememberFocusedScrollAnchor(List_SubdivisionHousehold, CurrentRowNumber, LongIntegerToText(Current.Id)).
    rememberFocusedScrollAnchor(`${scope}-List_SubdivisionHousehold`, index, row.Id);
    setPreloadObject(state.rows.map((r) => r.Id));
    flow.events.onNavigateToHouseholdCarousel(index, row.Id); // R3
  };

  const onClickBookmarkButton = async (row: AssembleAttendeeGuest, index: number, isItemBookmarked: boolean) => {
    if (await maybeDisplaySubscriptionPopup(state.countryCode, state.localityId)) return;
    if (!row.IsBookmarked && (await confirmAction(bookmarkNoteId))) bookmarkNote.current = bookmarkNote.current.trim();
    await toggleBookmarkItem(
      row.IsBookmarked,
      MyBookmarks_ObjectType.Contact,
      row.Id,
      MyBookmarks_Group.Contacts,
      bookmarkNote.current,
    );
    dispatch({ type: 'rowBookmarked', index, isBookmarked: !isItemBookmarked });
    bookmarkNote.current = '';
  };

  const onClickShareConnect = async (row: AssembleAttendeeGuest) => {
    if (await maybeDisplaySubscriptionPopup(state.countryCode, state.localityId)) return;
    if (flags.hasExtendedShare) {
      dispatch({
        type: 'set',
        patch: { shareableObjectId: row.Id, shareable: householdShareable(row), isShareOpen: true },
      });
    } else {
      flow.events.onNavigateToShareObject(SHARE_OBJECT_HOUSEHOLD, row.Id, false); // R3
    }
  };

  return {
    state,
    onToggleSelected: () => {
      dispatch({ type: 'selectionToggled' });
    },
    onClickHousehold: (row, index) => {
      flow.run(() => onClickHousehold(row, index));
    },
    onClickBookmarkButton: (row, index, isItemBookmarked) => {
      flow.run(() => onClickBookmarkButton(row, index, isItemBookmarked));
    },
    onClickShareConnect: (row) => {
      flow.run(() => onClickShareConnect(row));
    },
    onSaveNote: (note) => {
      bookmarkNote.current = note;
    },
    onCloseShareSheet: () => {
      dispatch({ type: 'shareClosed' });
    },
  };
}
