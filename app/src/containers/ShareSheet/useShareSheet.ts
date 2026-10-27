/** @origin UBTConnect_Utils.CW_Share.ShareSheet */
import { useEffect, useId, useRef, useState } from 'react';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback/feedbackStore';
import { feedbackMessageAutoClose } from '@/platform/feedback/feedbackMessageAutoClose';
import { isNotRegisteredException, isSystemException, raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { bottomSheetClose, bottomSheetOpen } from '@/components/ui/lib/actions';
import type { SearchResult } from '@/lib/ubtConnectUtils/structures';
import { useAvailableMembersQuery } from '@/api/member';
import { csShareObject, useRecentlySharedQuery } from '@/api/share';
import { getUserInformation } from '@/platform/session/userInfo';
import { delaySetIsOpen, scrollToTop, shareSheet_IsSharing } from './jsNodes';
import { MAX_RECIPIENTS, RESET, SKELETON, type Locals } from './shareSheetState';
import type { ShareSheetParams } from './types';

/** The state, the effects and the handlers of the block (OnParametersChanged, Handler_*, Action_*); the view is
    ShareSheetContainer.tsx. */
export function useShareSheet({
  inIsOpen,
  inShareObjectTypeId,
  inShareableObjectId,
  inUpdateType,
  inUpdateDate,
  onEventClosedShareSheet,
}: ShareSheetParams) {
  const sheetBlockId = `${useId()}BottomSheet`;
  const [isOpen, setIsOpen] = useState(false);
  const [locals, setLocals] = useState<Locals>(RESET);
  const [selectedMembers, setSelectedMembers] = useState<SearchResult[]>([]);
  // Refresh Query requests: each opening refreshes GetRecentlyShared, each submitted search GetAvailableMembers.
  const [recentFetchId, setRecentFetchId] = useState(0);
  const [searchFetchId, setSearchFetchId] = useState(0);
  const bottomSheetId = useRef('');
  const pendingOpen = useRef(false);
  const isOpenRef = useRef(false);
  const previousInIsOpen = useRef(inIsOpen);
  const onClosed = useRef(onEventClosedShareSheet);
  useEffect(() => {
    onClosed.current = onEventClosedShareSheet;
    isOpenRef.current = isOpen;
  });

  const setLocalIsOpen = (value: boolean) => {
    isOpenRef.current = value;
    setIsOpen(value);
  };

  // ScreenEvent_OnParametersChanged (:2133-2209): IsOpen <> In_IsOpen → open (render the sheet, reset, BottomSheetOpen
  // once the sheet is initialized, refresh GetRecentlyShared) or close (BottomSheetClose; IsOpen = False after the
  // closing transition, DelaySetIsOpen JS :3586-3601).
  useEffect(() => {
    if (previousInIsOpen.current === inIsOpen) return;
    previousInIsOpen.current = inIsOpen;
    if (isOpenRef.current === inIsOpen) return;
    if (inIsOpen) {
      pendingOpen.current = true;
      // The OutSystems handler is an async flow: the state changes run after the render that changed the input.
      void Promise.resolve().then(() => {
        setLocalIsOpen(true);
        setLocals(RESET);
        setRecentFetchId((n) => n + 1);
      });
    } else {
      delaySetIsOpen(bottomSheetId.current, setLocalIsOpen);
      bottomSheetClose(bottomSheetId.current);
    }
  }, [inIsOpen]);

  // Handler_BottomSheetInitialized (:3332-3368): BottomSheetId = Id; the pending BottomSheetOpen runs with it.
  const onInitialized = (sheetId: string) => {
    bottomSheetId.current = sheetId;
    if (pendingOpen.current) {
      pendingOpen.current = false;
      bottomSheetOpen(sheetId);
    }
  };

  // Action_ResetAndCloseSheetState (:3184-3224): Event_ClosedShareSheet, clear the lists, reset, scroll to the top.
  const resetAndCloseSheetState = () => {
    onClosed.current?.();
    setSelectedMembers([]);
    setLocals(RESET);
    scrollToTop(sheetBlockId);
  };
  // Handler_OnBack (:3265-3309): the search step goes back to the first step, else the sheet closes.
  const onBack = () => {
    if (locals.isSearchStep) {
      setLocals((current) => ({ ...current, searchTerm: '', isSearchStep: false }));
      scrollToTop(sheetBlockId);
    } else resetAndCloseSheetState();
  };
  // Handler_SearchOnFocus (:2374-2414): the first focus switches to the search step.
  const onSearchFocus = () => {
    if (!locals.isSearchStep) setLocals((current) => ({ ...current, isSearchStep: true }));
  };
  // Handler_InputEventClearString (:2729-2759) and Handler_InputEventSubmit (:2809-2867): the search term and
  // IsSearching; a submitted search refreshes GetAvailableMembers.
  const onClearString = () => {
    setLocals((current) => ({ ...current, searchTerm: '', isSearching: false }));
  };
  const onSubmit = (submitted: string) => {
    const searchTerm = submitted.trim();
    setLocals((current) => ({ ...current, searchTerm, isSearching: searchTerm !== '' ? true : current.isSearching }));
    if (searchTerm !== '') setSearchFetchId((n) => n + 1);
  };

  const { isSearchStep, isSearching, searchTerm } = locals;
  const variables = {
    In_ShareObjectTypeId: inShareObjectTypeId,
    In_ShareableObjectId: inShareableObjectId,
    In_UpdateType: inUpdateType,
    In_UpdateDate: inUpdateDate,
  };
  const recent = useRecentlySharedQuery({ ...variables, SearchTerm: '' }, recentFetchId);
  const available = useAvailableMembersQuery({ ...variables, SearchTerm: searchTerm }, searchFetchId);
  const recentFetched = recent.isSuccess;
  const availableFetched = available.isSuccess;
  // OnAfterFetch_* (:2070-2132, :2302-2373) and the handlers that assign SearchResultItemList: RecentlyShared starts
  // as the skeleton; the search list shows the skeleton while its query loads, the members found while searching,
  // else the recently shared. IsSelected = the member is in SelectedMembers.
  const recentlyShared = recent.data ?? SKELETON;
  const searchResultItemList = isSearching ? (available.data ?? SKELETON) : recentFetched ? recentlyShared : SKELETON;
  const isSelected = (item: SearchResult) => selectedMembers.some((m) => m.Id === item.Id);

  // Action_SubmitShare (:3084-3183): CS_ShareObject, then reset and close, then the confirmation. Handlers, in order:
  // NotRegistered → raised again to the flow handler (:3127-3136); AllExceptions (not a system exception) → the
  // message (:3138-3148); a system exception goes up to the flow handler too (:3152, safeExecuteClientAction).
  const submitShare = async (targetMemberIds: string[]) => {
    try {
      // Cache_UserInfo_Get (the user-info cache), then CS_ShareObject with the sharer's "FirstName LastName".
      const user = (await getUserInformation()).Directory_UserCurrent;
      await csShareObject(variables, `${user.FirstName} ${user.LastName}`, targetMemberIds);
      resetAndCloseSheetState();
      showFeedbackMessage(`${inShareObjectTypeId} has been shared.`, PLATFORM_MESSAGE_TYPE.info);
    } catch (ex) {
      if (isNotRegisteredException(ex) || isSystemException(ex)) {
        raiseToFlowHandler(ex);
        return;
      }
      showFeedbackMessage('Share failed. Please try again.', PLATFORM_MESSAGE_TYPE.error);
    }
  };
  // Handler_OnClickRecentMember (:2575-2629): a disabled record asks App_Subscription_ShowUpgradePopUp (not ported);
  // otherwise the member is shared with at once (its HouseholderId).
  const onClickRecentMember = (item: SearchResult) => {
    if (!recentFetched || item.RecordDisabled === true) return;
    setLocals((current) => ({ ...current, sharingRecentMemberId: item.Id ?? '' }));
    void submitShare([item.HouseholderId ?? '']);
  };
  // Handler_SearchResultItemOnSelect (:2911-3008): at most 50 recipients; select adds, unselect removes. The limit
  // message is FeedbackMessage_AutoClose("", text, Error, True, "", 0, False) (:2926; the type id resolves to Error).
  const onSelect = (item: SearchResult, select: boolean) => {
    if (select && selectedMembers.length >= MAX_RECIPIENTS) {
      feedbackMessageAutoClose({
        title: '',
        message: 'You can select up to 50 recipients only.',
        messageType: 'error',
        encodedHtml: true,
        extendedClass: '',
        delayMs: 0,
        useDebounce: false,
      });
      return;
    }
    if (select && !isSelected(item)) setSelectedMembers([...selectedMembers, item]);
    if (!select && isSelected(item)) setSelectedMembers(selectedMembers.filter((m) => m.Id !== item.Id));
  };
  // Handler_SelectedListItemOnClick (:2210-2249): removes the member from the selection.
  const onClickSelected = (item: SearchResult) => {
    setSelectedMembers(selectedMembers.filter((m) => m.Id !== item.Id));
  };
  // Handler_OnClickSend (:3009-3083): the distinct HouseholderIds of the selected members and selected results.
  const onClickSend = () => {
    const ids = [...selectedMembers, ...searchResultItemList.filter(isSelected)].map((m) => m.HouseholderId ?? '');
    void submitShare([...new Set(ids)]);
  };
  const isSharing = shareSheet_IsSharing(locals.currentExternalShareIdOption, locals.sharingRecentMemberId);
  return {
    sheetBlockId,
    isOpen,
    isOpenRef,
    onClosed,
    onInitialized,
    resetAndCloseSheetState,
    onBack,
    onSearchFocus,
    onClearString,
    onSubmit,
    sharingRecentMemberId: locals.sharingRecentMemberId,
    isSearchStep,
    isSearching,
    searchTerm,
    selectedMembers,
    recentFetched,
    availableFetched,
    recentlyShared,
    searchResultItemList,
    isSelected,
    onClickRecentMember,
    onSelect,
    onClickSelected,
    onClickSend,
    isSharing,
  };
}
