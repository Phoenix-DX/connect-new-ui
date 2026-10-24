import { useRef } from 'react';
import type { AssembleAttendeeGuest, AssembleAttendeeSubdivision } from '@/api/event';
import { confirmAction } from '@/platform/feedback/dialogs/confirmAction';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { setPreloadObject, useFlowState } from '@/platform/navigation';
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
  type AttendeeSubdivisionAction,
  type AttendeeSubdivisionState,
} from './attendeeSubdivisionState';
import { useIsAlive, useReadyOnce } from './blockLifecycle';

/** The flows of the block AssembleEventDetail_AttendeeSubdivision: OnReady, the hall header, the household click, the
    bookmark and share options of the context menu, and the share sheet. The component
    AssembleEventDetail_AttendeeSubdivision calls this hook.
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
    - The household click: MaybeDisplaySubscriptionPopup(CountryCode, LocalityId); no popup → SetPreloadObject(the
      rows' ids) and NavigateTo_HouseholdCarousel(row number, id).
    - The bookmark: the popup check; a row that is not bookmarked → ConfirmAction(Bookmark_Note), confirmed →
      Trim(BookmarkNote); then ToggleBookmarkItem(row IsBookmarked, Contact, row Id, Contacts, BookmarkNote)
      (CR-AssembleDetail-2), the row's IsBookmarked = not IsItemBookmarked and BookmarkNote = "". A failure goes to the
      flow handler.
    - Share to Connect: the popup check; C2ExtendedShare → the household share sheet opens, else
      NavigateTo_ShareObject(Household, id, False).
    - The handlers read the variables of the render in which the user clicked, as the old port. The household click
      and share to Connect send no failure to the flow handler (as the old port).
    - Decision W23: after the unmount, a started flow skips its state writes only; the calls, the dialogs, the preload
      object and the navigation still run. */
export function useAttendeeSubdivision(
  blockId: string,
  subdivision: AssembleAttendeeSubdivision,
  flags: AttendeeSubdivisionFlags,
  { onNavigateToShareObject, onNavigateToHouseholdCarousel }: AttendeeSubdivisionEvents,
): AttendeeSubdivisionFlows {
  const scope = blockId.replace(/\$/g, '');
  const bookmarkNoteId = `${scope}-Bookmark_Note`;
  const isAlive = useIsAlive();
  const readyOnce = useReadyOnce();
  const { state, dispatch, latest } = useFlowState({
    viewName: `Assemble.AssembleEventDetail_AttendeeSubdivision#${scope}`,
    reducer: attendeeSubdivisionReducer,
    initial: initialAttendeeSubdivisionState(subdivision),
    parameters: { subdivision },
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (_isAlive, restored) => readyOnce(() => onReady(restored)),
  });
  const bookmarkNote = useRef('');

  /** A state write after an await, skipped after the unmount (W23). */
  const write = (action: AttendeeSubdivisionAction) => {
    if (isAlive()) dispatch(action);
  };

  async function onReady(restored: boolean) {
    let list = latest.current.rows;
    if (!restored || !hasHallHouseholds(latest.current)) {
      const info = await getCacheableSubdivision_V2(subdivision.Id);
      list = householdRowsOf(info);
      write({ type: 'set', patch: { rows: list, ...hallLocationOf(info) } });
    }
    const bookmarks = await getLocalBookmarksByObjectType(MyBookmarks_ObjectType.Contact);
    write({ type: 'set', patch: { rows: withLocalBookmarks(list, bookmarks) } });
  }

  const onClickHousehold = async (row: AssembleAttendeeGuest, index: number) => {
    if (await maybeDisplaySubscriptionPopup(state.countryCode, state.localityId)) return;
    setPreloadObject(state.rows.map((r) => r.Id));
    onNavigateToHouseholdCarousel(index, row.Id);
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
    write({ type: 'rowBookmarked', index, isBookmarked: !isItemBookmarked });
    bookmarkNote.current = '';
  };

  const onClickShareConnect = async (row: AssembleAttendeeGuest) => {
    if (await maybeDisplaySubscriptionPopup(state.countryCode, state.localityId)) return;
    if (flags.hasExtendedShare) {
      write({
        type: 'set',
        patch: { shareableObjectId: row.Id, shareable: householdShareable(row), isShareOpen: true },
      });
    } else {
      onNavigateToShareObject(SHARE_OBJECT_HOUSEHOLD, row.Id, false);
    }
  };

  return {
    state,
    onToggleSelected: () => {
      dispatch({ type: 'selectionToggled' });
    },
    onClickHousehold: (row, index) => void onClickHousehold(row, index),
    onClickBookmarkButton: (row, index, isItemBookmarked) => {
      onClickBookmarkButton(row, index, isItemBookmarked).catch(raiseToFlowHandler);
    },
    onClickShareConnect: (row) => void onClickShareConnect(row),
    onSaveNote: (note) => {
      bookmarkNote.current = note;
    },
    onCloseShareSheet: () => {
      dispatch({ type: 'shareClosed' });
    },
  };
}
