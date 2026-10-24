/** @origin UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions */
// @os-block UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSPopupWidget } from '@/components/ui/os/OSPopup';
import { osImage } from '@/legacy/os/os-assets';
import { NotRegisteredException, UserException, isInstanceOf } from '@/legacy/os/os-exceptions';
import { useOsNavigate } from '@/platform/navigation/osNavigate';
import {
  exceptionMessage,
  isCommunicationException,
  isSystemException,
  raiseToFlowHandler,
} from '@/legacy/os/exceptions';
import { get_LocalBookmarkByObjectId, getLocalBookmarkByObjectId } from '@/platform/storage/localEntities';
import { useClientVar } from '@/platform/session/session';
import { ActionsMenu } from '@/components/ui/ActionsMenu';
import { ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT } from '@/shared/UBTConnectLibrary/lib/actions';
import type { ActionsMenuEnableOptions, ActionsMenuOptions, Notes } from '@/shared/UBTConnectLibrary/lib/structures';
import { Skeleton } from '@/components/ui/Skeleton';
import { ContactByMessage } from '@/components/contact/ContactByMessage';
import { ContactPopupByPhone } from '@/components/contact/ContactPopupByPhone';
import { getHasExtendedShare, getHasNewBookmarks } from '@/shared/UBTConnect_Utils/lib/actions';
import type { ContactPopupData, ContactPopUp_OverrideOptions } from '@/shared/UBTConnect_Utils/lib/structures';
import { NotesSheet } from '@/components/note/NotesSheet';
import { ShareableObject } from '@/components/share/ShareableObject';
import { SharePopup } from '@/components/share/SharePopup';
import { ShareSheetContainer } from '@/containers/ShareSheet';
import {
  bookmarkServerActions,
  get_NoteCategoryId_ByEntityTypeId,
  getBookmarkCategoryId_ByEntityTypeId,
  getBookmarkType_FromEntity,
  getNameAndSurname_ByFullName,
  getShareType_FromEntity,
  toggleBookmarkItem_C2,
  type BookmarkServerActions,
} from '@/shared/UBTConnect/lib/actions';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';
import { fetchContactDetails, fetchNotes, type EntityDetailsActionsVariables } from './api';

export interface EntityDetailsActionsContainerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** IsEnabled (default true). */
  isEnabled?: boolean;
  /** EntityType: Connect_Entity identifier. */
  entityType?: string;
  /** EntityId (Long Integer as text; "0" = none). */
  entityId?: string;
  /** ContactPopUp_OverrideOptions: image and name shown in the popups. */
  contactPopUpOverrideOptions?: ContactPopUp_OverrideOptions;
  /** EnableOptions: ActionsMenu enable flags (record default). */
  enableOptions?: ActionsMenuEnableOptions;
  /** useViewDetails: adds "View details" for households, supper meetings and schools. */
  useViewDetails?: boolean;
  /** EntityExtraDataJSON: only sent with the data actions. */
  entityExtraDataJSON?: string;
  /** Event ViewDetails_OnClick. */
  onViewDetailsOnClick?: () => void;
  /** Event OnChange_Bookmark(IsBookmarked). */
  onOnChangeBookmark?: (isBookmarked: boolean) => void;
  /** Event Event_MenuEdit: declared by the block, never raised (no flow triggers it). */
  onEventMenuEdit?: () => void;
}

type ContactDetails = Awaited<ReturnType<typeof fetchContactDetails>>;

/** ContactPopupDataRec field defaults (UBTConnect_Utils.model.js): a record built field by field keeps them. */
const CONTACT_POPUP_DATA_DEFAULT: ContactPopupData = { IsAvatarImage: true, ShowTimezone: true, ShowImage: true };

/** OnReady "Type" switch (controller): menu options and labels of each entity type; Locality and other types raise
    InvalidAction. */
function menuOptionsOf(entityType: string, useViewDetails: boolean): { options: ActionsMenuOptions; labels: boolean } {
  const all = (call: boolean, email: boolean, gift: boolean, share: boolean): ActionsMenuOptions => ({
    HasBookmark: true,
    HasUnbookmark: true,
    HasNotes: true,
    HasGift: gift,
    HasShare: share,
    HasCall: call,
    HasEmail: email,
  });
  switch (entityType) {
    case Connect_Entity.Member:
      return {
        options: {
          HasBookmark: false,
          HasUnbookmark: false,
          HasNotes: false,
          HasGift: false,
          HasShare: false,
          HasCall: true,
          HasEmail: true,
        },
        labels: false,
      };
    case Connect_Entity.Household:
      return { options: { ...all(false, false, true, true), HasViewDetails: useViewDetails }, labels: true };
    case Connect_Entity.Interchange:
      return { options: all(false, false, false, false), labels: true };
    case Connect_Entity.SupperMeetings_aka_Subdivisions:
      return { options: { ...all(false, false, false, true), HasViewDetails: useViewDetails }, labels: true };
    case Connect_Entity.OneSchoolGlobal:
      return { options: { ...all(true, true, false, true), HasViewDetails: useViewDetails }, labels: true };
    default:
      throw new UserException(
        entityType === Connect_Entity.Locality ? 'Invalid option' : 'Bookmarks not available',
        'UBTConnect.InvalidAction',
      );
  }
}

interface OnReadyInit {
  options: ActionsMenuOptions;
  labels: boolean;
  noteCategoryId: string;
  shareType: string;
  isFetchContacts: boolean;
  error?: unknown;
}

/** OnReady (controller) up to the contact fetch: NoteCategoryId, the menu of the entity type, isFetchContacts (call,
    email or share) and the share type. CheckRestored (view restored from cache) is not ported: it always runs. */
function onReadyInit(entityType: string, useViewDetails: boolean): OnReadyInit {
  const result: OnReadyInit = { options: {}, labels: true, noteCategoryId: '', shareType: '', isFetchContacts: false };
  try {
    result.noteCategoryId = get_NoteCategoryId_ByEntityTypeId(entityType);
    const menu = menuOptionsOf(entityType, useViewDetails);
    result.options = menu.options;
    result.labels = menu.labels;
    result.isFetchContacts =
      (menu.options.HasCall ?? false) || (menu.options.HasEmail ?? false) || (menu.options.HasShare ?? false);
    if (menu.options.HasShare === true) result.shareType = getShareType_FromEntity(entityType, false);
  } catch (error) {
    result.error = error;
  }
  return result;
}

/** Entity actions (UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js, HouseholdCarousel copy):
    SkeletonSection (loading while not isLoaded or bookmarks / notes not synched, unless the fetch failed) with the
    ActionsMenu, then ContactByMessage_Wrapper, ContactPopup_ByPhone, SharePopup, the extended-share popup (ShareSheet,
    only with C2ExtendedShare and HasShare) and NotesSheet. README lists what is not ported. */
export function EntityDetailsActionsContainer({
  id,
  isEnabled = true,
  entityType = '',
  entityId = '0',
  contactPopUpOverrideOptions = {},
  enableOptions = ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT,
  useViewDetails = false,
  entityExtraDataJSON = '',
  onViewDetailsOnClick,
  onOnChangeBookmark,
}: EntityDetailsActionsContainerProps) {
  const navigate = useOsNavigate();
  const [onReady] = useState(() => onReadyInit(entityType, useViewDetails));
  const [options, setOptions] = useState<ActionsMenuOptions>(onReady.options);
  const showIconLabels = onReady.labels;
  const noteCategoryId = onReady.noteCategoryId;
  const shareType = onReady.shareType;
  const [isLoaded, setIsLoaded] = useState(false); // model default False (mvc.js:98-100)
  // EnableOptions: a record whose unset fields keep the ActionsMenuEnableOptions defaults (UBTConnectLibrary.model.js
  // ActionsMenuEnableOptionsRec, copy in migration/screens/SupperMeeting_Details/analysis/sources/raw/ :4135-4156), as
  // HouseholdDetails_Block's literal sets only EnableNotes / EnableShare (HouseholdDetails_Block.mvc.js:1509-1514).
  const [localEnableOptions, setLocalEnableOptions] = useState<ActionsMenuEnableOptions>(() => ({
    ...ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT,
    ...enableOptions,
  }));
  const [fetched, setFetched] = useState<ContactDetails | null>(null);
  const [fetchStatus, setFetchStatus] = useState<'none' | 'done' | 'error'>('none');
  const fetchStatusRef = useRef<'none' | 'done' | 'error'>('none');
  const [notes, setNotes] = useState<Notes>({});
  const [showCallPopUp, setShowCallPopUp] = useState(false);
  const [showEmailPopUp, setShowEmailPopUp] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [showNotesSheet, setShowNotesSheet] = useState(false);
  // Local_isBookmarked (legacy bookmarks), Local_isBookmarked_C2, Local_BookmarkType, Local_BookmarkTypeId_C2,
  // Local_BookmarkGroup (model, mvc.js:80-94)
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isBookmarked_C2, setIsBookmarked_C2] = useState(false);
  const [bookmarkType, setBookmarkType] = useState('');
  const [bookmarkTypeId_C2, setBookmarkTypeId_C2] = useState('');
  const [bookmarkGroup, setBookmarkGroup] = useState('');
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
    EntityExtraDataJSON: entityExtraDataJSON,
    Local_isBookmarked: isBookmarked,
    Local_isBookmarked_C2: isBookmarked_C2,
    Local_BookmarkType: bookmarkType,
    Local_BookmarkTypeId_C2: bookmarkTypeId_C2,
    Local_BookmarkGroup: bookmarkGroup,
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
  });
  const variablesRef = useRef(variables);
  const onChangeBookmarkRef = useRef(onOnChangeBookmark);
  useLayoutEffect(() => {
    variablesRef.current = variables;
    onChangeBookmarkRef.current = onOnChangeBookmark;
  });

  /** OnReady (controller mvc.js:1658-1946), after the menu set-up and share type of onReadyInit (an InvalidAction goes to
      the flow handler). The share-type If (:1861-1869, no else) and the bookmarks step (:1871-1929) are consecutive.
      Bookmarks step, with HasBookmark or HasUnbookmark: C2NewBookmarks on → GetBookmarkCategoryId_ByEntityTypeId,
      GetLocalBookmarkByObjectId_C2 (UBTConnect_Bookmarks_MCS), Local_isBookmarked_C2 = Id <> NullIdentifier,
      OnChange_Bookmark, Action_RefreshFetchNotes (FetchNotes when EntityId is set, :2163-2200); off (TST) →
      GetBookmarkType_FromEntity, Get_LocalBookmarkByObjectId (Connect2_LegacyShared), Local_isBookmarked, OnChange_Bookmark.
      Then isLoaded = not isFetchContacts or FetchContactDetails.IsDataFetched or HasFetchError (:1932-1933). Runs once,
      as OnReady (OnParametersChanged only updates the contact details). */
  useEffect(() => {
    if (onReady.error !== undefined) {
      raiseToFlowHandler(onReady.error);
      return;
    }
    const { EntityType: type = '', EntityId: id = '0' } = variablesRef.current();
    const bookmarksStep = async () => {
      if (onReady.options.HasBookmark !== true && onReady.options.HasUnbookmark !== true) return;
      if (getHasNewBookmarks()) {
        const typeId = getBookmarkCategoryId_ByEntityTypeId(type);
        setBookmarkTypeId_C2(typeId);
        const local = await getLocalBookmarkByObjectId(id);
        const bookmarked = local.Id !== '0';
        setIsBookmarked_C2(bookmarked);
        onChangeBookmarkRef.current?.(bookmarked);
        if (id !== '0') {
          setNotes(
            await fetchNotes({
              ...variablesRef.current(),
              Local_BookmarkTypeId_C2: typeId,
              Local_isBookmarked_C2: bookmarked,
            }),
          );
        }
      } else {
        const legacy = getBookmarkType_FromEntity(type);
        setBookmarkType(legacy.BookmarkType);
        setBookmarkGroup(legacy.BookmarkGroup);
        const local = await get_LocalBookmarkByObjectId(legacy.BookmarkType, id);
        const bookmarked = local.Id !== '0';
        setIsBookmarked(bookmarked);
        onChangeBookmarkRef.current?.(bookmarked);
      }
    };
    bookmarksStep().then(() => {
      setIsLoaded(!onReady.isFetchContacts || fetchStatusRef.current !== 'none');
    }, raiseToFlowHandler);
  }, [onReady]);

  /** Action_UpdateContactDetails (OnReady and OnParametersChanged): nothing without EntityId; with the call / email /
      share options (isFetchContacts, set once by OnReady) Action_AsyncRefresh_ContactDetails: FetchContactDetails, then
      OnAfterFetch_FetchContactDetails (HasCall = any phone, HasEmail = mobile or email, isLoaded). */
  useEffect(() => {
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
        // HandleFetchError (CommunicationException / AllExceptions): every action disabled, then the error is raised.
        setLocalEnableOptions((current) => ({
          ...current,
          EnableBookmark: false,
          EnableNotes: false,
          EnableGift: false,
          EnableShare: false,
          EnableCall: false,
          EnableEmail: false,
        }));
        raiseToFlowHandler(error);
      },
    );
    return () => {
      alive = false;
    };
  }, [entityId, onReady.isFetchContacts]);

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
  const hasNewBookmarks = getHasNewBookmarks();
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
  /** Handle_Bookmark (Bookmark and Unbookmark of the menu; mvc.js:1388-1514): isLoaded False; always the C2 branch
      (its If is `True`, :1415): ToggleBookmarkItem_C2(EntityId, Local_BookmarkTypeId_C2, Local_isBookmarked_C2), then
      Local_isBookmarked_C2 flips, isLoaded True and OnChange_Bookmark(Local_isBookmarked_C2). Handlers: NotRegistered
      raised again; CommunicationException → isLoaded True, BubbleCommunicationException; AllExceptions → isLoaded True,
      BubbleGenericException. The menu reads Local_isBookmarked while C2NewBookmarks is off, as the view does. */
  const handleBookmark = async (server: BookmarkServerActions) => {
    setIsLoaded(false);
    try {
      await toggleBookmarkItem_C2(entityId, bookmarkTypeId_C2, isBookmarked_C2, server);
      const bookmarked = !isBookmarked_C2;
      setIsBookmarked_C2(bookmarked);
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
  /** Handler_AddNotes: Action_RefreshFetchNotes, then the notes sheet opens. */
  const handlerAddNotes = async () => {
    if (entityId !== '0') setNotes(await fetchNotes(variablesRef.current()));
    setShowNotesSheet(true);
  };

  return (
    <OSBlock name="Directory_CommonBlocks.Directory_EntityDetailsActions" id={id}>
      <Skeleton isLoading={isLoading}>
        <ActionsMenu
          isEnabled={isEnabled}
          inShowLabels={showIconLabels}
          inActionsEnableOptions={localEnableOptions}
          inActionsMenuOptions={{
            // view mvc.js:379-384: Local_isBookmarked unless GetHasNewBookmarks, then Local_isBookmarked_C2
            HasBookmark: (options.HasBookmark ?? false) && (!hasNewBookmarks ? !isBookmarked : !isBookmarked_C2),
            HasUnbookmark: (options.HasBookmark ?? false) && (!hasNewBookmarks ? isBookmarked : isBookmarked_C2),
            HasNotes: options.HasNotes ?? false,
            HasGift: options.HasGift ?? false,
            HasShare: options.HasShare ?? false,
            HasCall: options.HasCall ?? false,
            HasEmail: options.HasEmail ?? false,
            HasViewDetails: options.HasViewDetails ?? false,
          }}
          onEventClickBookmark={onClickBookmark}
          onEventClickUnbookmark={onClickBookmark}
          onEventClickShare={() => {
            setShowSharePopup(true);
          }}
          onEventClickViewDetails={onViewDetailsOnClick}
          onEventClickCall={() => {
            setShowCallPopUp(true);
          }}
          onEventClickNotes={() => {
            handlerAddNotes().catch(raiseToFlowHandler);
          }}
          onEventClickEmail={() => {
            handleMail(true);
          }}
        />
      </Skeleton>
      <ContactByMessage
        inContactPopupData={{
          Email: details?.Email ?? '',
          Phone: details?.MobilePhone ?? '',
          ContactPopupData: popupData(showEmailPopUp),
        }}
        onEventCancel={() => {
          handleMail(false);
        }}
        onEventEmail={handleMailPage}
      />
      <ContactPopupByPhone
        inCallPopupData={{
          ContactPopupData: { ...popupData(showCallPopUp), TitleTerminator: contact.TitleTerminator ?? '' },
          Phone: details?.Phone ?? '',
          MobilePhone: details?.MobilePhone ?? '',
          HomePhone: details?.HomePhone ?? '',
          WorkPhone: details?.WorkPhone ?? '',
        }}
        onEventCancel={() => {
          setShowCallPopUp(false);
        }}
      />
      <SharePopup
        inContactPopupData={{
          ...CONTACT_POPUP_DATA_DEFAULT,
          ImageURL: overrideImageURL,
          EntityTypeId: entityType,
          EntityId: entityId,
          ActionName: 'Share',
          Name: contact.Name ?? '',
          Locality: '',
          TimezoneName: '',
          TimezoneOffset: 0,
          ShowPopup: showSharePopup && !hasExtendedShare,
          IsLoading: !isLoaded,
          ShowTimezone: false,
        }}
        onEventShareToConnect={() => {
          setShowSharePopup(false);
          navigate('/UBTConnect/LegacyShareObject', { In_ShareObjectTypeId: shareType, In_ObjectId: entityId });
        }}
        onEventShareToOthers={() => {
          // Handle_Share_Others: closes, then UBTConnect_Utils ShareEntity_ByURL (not ported, README).
          setShowSharePopup(false);
        }}
        onEventCancel={() => {
          setShowSharePopup(false);
        }}
      />
      {hasExtendedShare &&
        (options.HasShare ?? false) &&
        createPortal(
          <div className="portal-class" style={{ display: 'inline' }}>
            <div>
              <div className="popup-backdrop" data-popup-backdrop="">
                <div
                  aria-modal="true"
                  className="popup-dialog popup-dialog connect-share-portal"
                  data-popup=""
                  role="dialog"
                >
                  <div className="popup-content">
                    <ShareSheetContainer
                      inIsOpen={showSharePopup}
                      inShareObjectTypeId={shareType}
                      inShareableObjectId={entityId}
                      onEventClosedShareSheet={() => {
                        setShowSharePopup(false);
                      }}
                    >
                      <ShareableObject
                        inShareableObject={{
                          ConnectEntityTypeId: entityType,
                          Id: entityId,
                          SignedURL: shareSheetImageURL,
                          Title: details?.EntityName ?? '',
                          Subtitle: details?.EntitySubtitle ?? '',
                          Location: `${details?.LocalityName ?? ''}, ${details?.CountryName ?? ''}`,
                        }}
                      />
                    </ShareSheetContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
      {/* The share Popup widget (ShowPopup True, mvc.js:827-831): aria-hidden on #reactContainer and the
          popup-disable-scroll html class while it is in the view. */}
      {hasExtendedShare && (options.HasShare ?? false) && <OSPopupWidget showPopup />}
      <NotesSheet
        inNotes={notes}
        inItemId={entityId}
        inNoteCategoryId={noteCategoryId}
        inIsOpen={showNotesSheet}
        onOnNotesChanged={(newNotes) => {
          setNotes(newNotes);
        }}
        onOnNoteDeleted={(noteId) => {
          setNotes((n) => {
            const list = (n.Note_Item_List ?? []).filter((item) => item.Id !== noteId);
            return { ...n, Note_Item_List: list, Total: list.length };
          });
        }}
        onOnNoteSheetClosed={() => {
          setShowNotesSheet(false);
        }}
      />
    </OSBlock>
  );
}
