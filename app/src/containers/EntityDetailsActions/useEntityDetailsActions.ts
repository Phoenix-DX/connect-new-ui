/** @origin UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions */
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { osImage } from '@/lib/os-assets';
import { wireList } from '@/lib/os-wire';
import { NotRegisteredException, UserException, isInstanceOf } from '@/legacy/os/os-exceptions';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { useOsNavigate } from '@/platform/navigation/osNavigate';
import {
  exceptionMessage,
  isCommunicationException,
  isSystemException,
  raiseToFlowHandler,
} from '@/legacy/os/exceptions';
import { getLocalBookmarkByObjectId } from '@/platform/storage/localEntities';
import { useClientVar } from '@/platform/session/session';
import { ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT } from '@/lib/ubtConnectLibrary/actions';
import type { ActionsMenuEnableOptions, ActionsMenuOptions, Notes } from '@/lib/ubtConnectLibrary/structures';
import { getHasExtendedShare } from '@/lib/ubtConnectUtils/actions';
import type { ContactPopupData } from '@/lib/ubtConnectUtils/structures';
import {
  bookmarkServerActions,
  getBookmarkCategoryId_ByEntityTypeId,
  getNameAndSurname_ByFullName,
  toggleBookmarkItem_C2,
  type BookmarkServerActions,
  notes_InterchangeId_ComposeId,
} from '@/lib/ubtConnect/actions';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import { fetchContactDetails, fetchNotes, type EntityDetailsActionsVariables } from './api';
import { CONTACT_POPUP_DATA_DEFAULT, onReadyInit, type ContactDetails } from './entityDetailsActionsState';
import type { EntityDetailsActionsContainerProps } from './types';

/** The state, the effects and the handlers of the block (OnReady, OnParametersChanged, Handle_*); the view is
    EntityDetailsActionsContainer.tsx. */
export function useEntityDetailsActions({
  id,
  isEnabled = true,
  entityType = '',
  entityId = '0',
  contactPopUpOverrideOptions = {},
  enableOptions = ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT,
  useViewDetails = false,
  inLocalityId = '',
  onViewDetailsOnClick,
  onOnChangeBookmark,
}: EntityDetailsActionsContainerProps) {
  const navigate = useOsNavigate();
  const [onReady] = useState(() => onReadyInit(entityType, useViewDetails));
  /* The block variables live in the view cache (decision U19, pattern P-BACK): a back navigation restores them, as the
     runtime restores the cached view. One scope per instance on the screen. */
  const scope = `Directory_CommonBlocks.Directory_EntityDetailsActions#${id ?? ''}#${entityType}#${entityId}`;
  const [options, setOptions] = useViewState<ActionsMenuOptions>(
    `${scope}-Local_In_ActionsMenuOptions`,
    onReady.options,
  );
  const showIconLabels = onReady.labels;
  const noteCategoryId = onReady.noteCategoryId;
  const shareType = onReady.shareType;
  const [isLoaded, setIsLoaded] = useViewState(`${scope}-isLoaded`, false); // model default False (mvc.js:98-100)
  /* OnReady CheckRestored (mvc.js:1678-1689, JS :2430-2432): FromCache = wasCurrentViewRestoredFromCache() (FromHistory
     is commented out, always False); a restored view ends OnReady, so it keeps its cached variables and makes no call.
     A restored view whose saved block has no data yet runs the set-up (F40). */
  const wasRestored = useWasRestoredFromCache();
  const [isRestoredFromCache] = useState(() => wasRestored && isLoaded);
  // EnableOptions: a record whose unset fields keep the ActionsMenuEnableOptions defaults (UBTConnectLibrary.model.js
  // ActionsMenuEnableOptionsRec, copy in migration/screens/SupperMeeting_Details/analysis/sources/raw/ :4135-4156), as
  // HouseholdDetails_Block's literal sets only EnableNotes / EnableShare (HouseholdDetails_Block.mvc.js:1509-1514).
  const [localEnableOptions, setLocalEnableOptions] = useViewState<ActionsMenuEnableOptions>(`${scope}-EnableOptions`, {
    ...ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT,
    ...enableOptions,
  });
  const [fetched, setFetched] = useViewState<ContactDetails | null>(`${scope}-FetchContactDetails`, null);
  const [fetchStatus, setFetchStatus] = useViewState<'none' | 'done' | 'error'>(
    `${scope}-FetchContactDetails.Status`,
    'none',
  );
  const fetchStatusRef = useRef<'none' | 'done' | 'error'>(fetchStatus);
  // EntityNotes (model): set by OnAfterFetch_FetchNotes, Handler_OnSheetNotesChanged and Handler_OnNoteDeleted.
  const [entityNotes, setEntityNotes] = useViewState<Notes>(`${scope}-EntityNotes`, {});
  const [showCallPopUp, setShowCallPopUp] = useState(false);
  const [showEmailPopUp, setShowEmailPopUp] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [showNotesSheet, setShowNotesSheet] = useState(false);
  // Local_isBookmarked and Local_BookmarkTypeId (model, mvc.js:80-85): the C2 bookmarks only (TST removed the legacy
  // branch and Local_isBookmarked_C2 / Local_BookmarkType / Local_BookmarkGroup).
  const [isBookmarked, setIsBookmarked] = useViewState(`${scope}-Local_isBookmarked`, false);
  const [bookmarkTypeId, setBookmarkTypeId] = useViewState(`${scope}-Local_BookmarkTypeId`, '');
  /* Action_ApplyPopUpOverrides (after the contact fetch, or directly when nothing is fetched): OneSchool Global keeps
     the override image for the share sheet and shows the OneSchoolGlobal image; a non-empty override Name replaces the
     popup name and EntityName. */
  const isOneSchoolGlobal = entityType === Connect_Entity.OneSchoolGlobal;
  const overridesApplied = entityId !== '0' && (!onReady.isFetchContacts || fetchStatus === 'done');
  const overrideImageURL =
    overridesApplied && isOneSchoolGlobal
      ? osImage('img/UBTConnectLibrary.OneSchoolGlobal.svg')
      : (contactPopUpOverrideOptions.ImageURL ?? '');
  const shareSheetImageURL = overridesApplied && isOneSchoolGlobal ? (contactPopUpOverrideOptions.ImageURL ?? '') : '';
  const overrideName = contactPopUpOverrideOptions.Name ?? '';
  const details =
    fetched && overrideName !== ''
      ? { ...fetched, EntityName: overrideName, ContactPopupData: { ...fetched.ContactPopupData, Name: overrideName } }
      : fetched;
  const contact: ContactPopupData = details ? { ...details.ContactPopupData, ImageURL: overrideImageURL } : {};
  const isDataFetched = fetchStatus === 'done';
  const hasFetchError = fetchStatus === 'error';

  const variables = (): EntityDetailsActionsVariables => ({
    IsEnabled: isEnabled,
    EntityType: entityType,
    EntityId: entityId,
    ContactPopUp_OverrideOptions: { ImageURL: '', Name: '', ...contactPopUpOverrideOptions },
    EnableOptions: { ...ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT, ...localEnableOptions },
    useViewDetails: useViewDetails,
    Local_isBookmarked: isBookmarked,
    Local_BookmarkTypeId: bookmarkTypeId,
    Local_In_ActionsMenuOptions: {
      HasBookmark: false,
      HasUnbookmark: false,
      HasNotes: false,
      HasGift: false,
      HasShare: false,
      HasCall: false,
      HasEmail: false,
      HasViewDetails: false,
      ...options,
    },
    isLoaded,
    Local_ShareType: shareType,
    ShowCallPopUp: showCallPopUp,
    ShowEmailPopUp: showEmailPopUp,
    ShowSharePopup: showSharePopup,
    ShowNotesSheet: showNotesSheet,
    isFetchContacts: onReady.isFetchContacts,
    ShowIconLabels: showIconLabels,
    ShareSheet_OverwriteImageURL: shareSheetImageURL,
    NoteCategoryId: noteCategoryId,
    EntityNotes: {
      Total: entityNotes.Total ?? 0,
      Note_Item_List: wireList(
        (entityNotes.Note_Item_List ?? []).map((note) => ({
          Id: note.Id ?? '0',
          Note: note.Note ?? '',
          DateCreatedUtc: note.DateCreatedUtc ?? '',
          DateEditedUtc: note.DateEditedUtc ?? '',
        })),
      ),
    },
  });
  const variablesRef = useRef(variables);
  const onChangeBookmarkRef = useRef(onOnChangeBookmark);
  useLayoutEffect(() => {
    variablesRef.current = variables;
    onChangeBookmarkRef.current = onOnChangeBookmark;
  });

  /** Action_RefreshFetchNotes (mvc.js:2149-2190): nothing without EntityId; else FetchNotes (FetchNoteId =
      Notes_InterchangeId_ComposeId(In_LocalityId, EntityId) for an interchange, else EntityId: a block variable that
      the contract inputs do not list) and OnAfterFetch_FetchNotes (:2051-2070): EntityNotes = FetchNotes.Notes.
      `overrides` are the variables set earlier in the same flow (the state is not committed yet). */
  const refreshFetchNotes = async (overrides: Partial<EntityDetailsActionsVariables> = {}) => {
    const current = variablesRef.current();
    if ((current.EntityId ?? '0') === '0') return;
    setEntityNotes(await fetchNotes({ ...current, ...overrides }));
  };
  const refreshFetchNotesRef = useRef(refreshFetchNotes);
  useLayoutEffect(() => {
    refreshFetchNotesRef.current = refreshFetchNotes;
  });

  /** OnReady (controller mvc.js:1700-1900), after the menu set-up and share type of onReadyInit (an InvalidAction goes to
      the flow handler). With HasBookmark or HasUnbookmark (:1864-1887): GetBookmarkCategoryId_ByEntityTypeId
      (Local_BookmarkTypeId), GetLocalBookmarkByObjectId_C2 (UBTConnect_Bookmarks_MCS), Local_isBookmarked = Id <>
      NullIdentifier, OnChange_Bookmark, Action_RefreshFetchNotes. No flag: TST removed the GetHasNewBookmarks branch.
      Then isLoaded = not isFetchContacts or FetchContactDetails.IsDataFetched or HasFetchError. Runs once, as OnReady
      (OnParametersChanged only updates the contact details); a view restored from the cache ends before the set-up
      (CheckRestored). */
  useEffect(() => {
    if (isRestoredFromCache) return;
    if (onReady.error !== undefined) {
      raiseToFlowHandler(onReady.error);
      return;
    }
    const { EntityType: type = '', EntityId: id = '0' } = variablesRef.current();
    const bookmarksStep = async () => {
      if (onReady.options.HasBookmark !== true && onReady.options.HasUnbookmark !== true) return;
      const typeId = getBookmarkCategoryId_ByEntityTypeId(type);
      setBookmarkTypeId(typeId);
      const local = await getLocalBookmarkByObjectId(id);
      const bookmarked = local.Id !== '0';
      setIsBookmarked(bookmarked);
      onChangeBookmarkRef.current?.(bookmarked);
      await refreshFetchNotesRef.current({ Local_BookmarkTypeId: typeId, Local_isBookmarked: bookmarked });
    };
    bookmarksStep().then(() => {
      setIsLoaded(!onReady.isFetchContacts || fetchStatusRef.current !== 'none');
    }, raiseToFlowHandler);
    // The setters of useViewState are stable; OnReady runs once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onReady, isRestoredFromCache]);

  /* The input parameters, by value: OnParametersChanged runs after a render in which one of them changed (mvc.js:1157-
     1171). */
  const parametersKey = JSON.stringify([
    isEnabled,
    entityType,
    entityId,
    contactPopUpOverrideOptions,
    enableOptions,
    useViewDetails,
    inLocalityId,
  ]);
  /** The parameters of a view restored from the cache: its OnReady makes no call (CheckRestored). */
  const restoredParametersKey = useRef(isRestoredFromCache ? parametersKey : null);
  /** Action_UpdateContactDetails (OnReady, mvc.js:1854, and OnParametersChanged on every input change, :1157-1171):
      nothing without EntityId; with the call / email / share options (isFetchContacts, set once by OnReady)
      Action_AsyncRefresh_ContactDetails: FetchContactDetails, then OnAfterFetch_FetchContactDetails (HasCall = any
      phone, HasEmail = mobile or email, isLoaded). */
  useEffect(() => {
    if (restoredParametersKey.current === parametersKey) return;
    restoredParametersKey.current = null;
    if (entityId === '0' || !onReady.isFetchContacts) return;
    let alive = true;
    fetchContactDetails(variablesRef.current()).then(
      (out) => {
        if (!alive) return;
        setFetched(out);
        fetchStatusRef.current = 'done';
        setFetchStatus('done');
        setOptions((o) => ({
          ...o,
          HasCall: out.Phone !== '' || out.MobilePhone !== '' || out.HomePhone !== '' || out.WorkPhone !== '',
          HasEmail: out.MobilePhone !== '' || out.Email !== '',
        }));
        setIsLoaded(true);
      },
      (error: unknown) => {
        if (!alive) return;
        fetchStatusRef.current = 'error';
        setFetchStatus('error');
        /* The handlers of Action_AsyncRefresh_ContactDetails (mvc.js:1196-1262): NotRegistered raises the typed
           exception; CommunicationException and AllExceptions (not a system exception) run HandleFetchError (every
           action disabled), then raise the error; a system exception is thrown again as it is. */
        const handlesFetchError =
          !isInstanceOf(error, NotRegisteredException) &&
          (isCommunicationException(error) || !isSystemException(error));
        if (handlesFetchError) {
          setLocalEnableOptions((current) => ({
            ...current,
            EnableBookmark: false,
            EnableNotes: false,
            EnableGift: false,
            EnableShare: false,
            EnableCall: false,
            EnableEmail: false,
          }));
        }
        raiseToFlowHandler(error);
      },
    );
    return () => {
      alive = false;
    };
    // OnParametersChanged compares the inputs by value (parametersKey); the setters of useViewState are stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parametersKey, onReady.isFetchContacts]);

  const isFetchingDone = isDataFetched || hasFetchError;
  const popupData = (showPopup: boolean): ContactPopupData => ({
    ...CONTACT_POPUP_DATA_DEFAULT,
    ImageURL: overrideImageURL,
    EntityTypeId: entityType,
    EntityId: entityId,
    IsAvatarImage: contact.IsAvatarImage ?? true,
    ActionName: contact.ActionName ?? '',
    Name: contact.Name ?? '',
    Locality: contact.Locality ?? '',
    TimezoneName: contact.TimezoneName ?? '',
    TimezoneOffset: contact.TimezoneOffset ?? 0,
    ShowPopup: showPopup,
    DisplayContactNumber: contact.DisplayContactNumber ?? '',
    IsFetchingTimezone: false,
    IsLoading: !isFetchingDone,
    CountryName: contact.CountryName ?? '',
  });
  const hasExtendedShare = getHasExtendedShare();
  /* The In_ItemId of the NotesSheet (view mvc.js:936-944): "<In_LocalityId>:<EntityId>" for an interchange with a
     locality, else the EntityId as text. */
  const noteItemId =
    entityType === Connect_Entity.Interchange && inLocalityId !== ''
      ? notes_InterchangeId_ComposeId(inLocalityId, entityId)
      : entityId;
  // Client variables are reactive in OutSystems (a change re-renders every view that reads them): the sync started at
  // app open (shell/startup.ts) can end after FetchContactDetails.
  const bookmarksIsSynched = useClientVar('UBTConnect.Bookmarks_IsSynched');
  const notesIsSynched = useClientVar('UBTConnect.Notes_IsSynched');
  const isLoading = (!isLoaded || !bookmarksIsSynched || !notesIsSynched) && !hasFetchError;

  /** Handle_Mail(isOpen): OneSchool Global opens ContactByEmailOneSchoolGlobal, other types the message popup. */
  const handleMail = (isOpen: boolean) => {
    if (entityType === Connect_Entity.OneSchoolGlobal) {
      navigate('/UBTConnect/ContactByEmailOneSchoolGlobal', {
        In_ContactName: contact.Name ?? '',
        In_EmailTo: details?.Email ?? '',
      });
    } else {
      setShowEmailPopUp(isOpen);
    }
  };
  /** Handle_Mail_Page (Event_Email of the message popup): ContactByEmailMember with the split name. */
  const handleMailPage = () => {
    const split = getNameAndSurname_ByFullName(contact.Name ?? '');
    navigate('/UBTConnect/ContactByEmailMember', {
      In_ContactName: split.Out_Name,
      In_ContactSurname: split.Out_Surname,
      In_EmailTo: details?.Email ?? '',
      In_ContactLocality: contact.Locality ?? '',
      In_EntityType: contact.EntityTypeId ?? '',
      In_EntityId: contact.EntityId ?? '0',
      In_ContactCountry: details?.CountryName ?? '',
      In_AvatarURL: contact.ImageURL ?? '',
    });
  };
  /** Handle_Bookmark (Bookmark and Unbookmark of the menu; mvc.js:1400-1470): isLoaded False;
      ToggleBookmarkItem_C2(LongIntegerToText(EntityId), Local_BookmarkTypeId, Local_isBookmarked), then Local_isBookmarked
      flips, isLoaded True and OnChange_Bookmark(Local_isBookmarked). Handlers: NotRegistered raised again;
      CommunicationException → isLoaded True, BubbleCommunicationException; AllExceptions → isLoaded True,
      BubbleGenericException. */
  const handleBookmark = async (server: BookmarkServerActions) => {
    setIsLoaded(false);
    try {
      await toggleBookmarkItem_C2(entityId, bookmarkTypeId, isBookmarked, server);
      const bookmarked = !isBookmarked;
      setIsBookmarked(bookmarked);
      setIsLoaded(true);
      onOnChangeBookmark?.(bookmarked);
    } catch (ex) {
      if (isInstanceOf(ex, NotRegisteredException)) throw new NotRegisteredException(exceptionMessage(ex));
      if (isCommunicationException(ex)) {
        setIsLoaded(true);
        throw new UserException(exceptionMessage(ex), 'UBTConnect.BubbleCommunicationException');
      }
      if (!isSystemException(ex)) {
        setIsLoaded(true);
        throw new UserException(exceptionMessage(ex), 'UBTConnect.BubbleGenericException');
      }
      throw ex;
    }
  };
  /** The menu's Bookmark / Unbookmark: Handle_Bookmark with the contract's bookmark server actions (CR-W4A-1). */
  const onClickBookmark = () => {
    if (bookmarkServerActions) handleBookmark(bookmarkServerActions).catch(raiseToFlowHandler);
  };
  /** Handler_AddNotesOnClick (mvc.js:1366-1395): Action_RefreshFetchNotes, then ShowNotesSheet = True. */
  const handlerAddNotes = async () => {
    await refreshFetchNotes();
    setShowNotesSheet(true);
  };
  return {
    isEnabled,
    entityType,
    entityId,
    onViewDetailsOnClick,
    navigate,
    options,
    localEnableOptions,
    showIconLabels,
    shareType,
    noteCategoryId,
    isLoaded,
    isLoading,
    isBookmarked,
    hasExtendedShare,
    details,
    contact,
    overrideImageURL,
    shareSheetImageURL,
    entityNotes,
    setEntityNotes,
    noteItemId,
    showEmailPopUp,
    showCallPopUp,
    setShowCallPopUp,
    showSharePopup,
    setShowSharePopup,
    showNotesSheet,
    setShowNotesSheet,
    popupData,
    handleMail,
    handleMailPage,
    onClickBookmark,
    handlerAddNotes,
  };
}
