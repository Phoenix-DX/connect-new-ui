// @os-block Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost
import { useLayoutEffect, useReducer, useRef, type ReactNode } from 'react';
import { NotCaptured } from '@/app/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { Layout_Orbit } from '@/shared/Connect2_LegacyShared/Layout_Orbit';
import { MenuIcon__UpdatedOSUI } from '@/shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { getCacheableMemberContactList, getCacheableTimezoneInfo } from '@/shared/Connect2_LegacyShared/lib/actions';
import { Accordion_Orbit } from '@/shared/Connect2_OrbitMobile_MUI/Accordion_Orbit';
import { Card_MemberInformation } from '@/shared/Connect2_OrbitMobile_MUI/Card_MemberInformation';
import { ContactHelpdesk_Footer } from '@/shared/Connect2_OrbitMobile_MUI/ContactHelpdesk_Footer';
import { MilestoneHeader } from '@/shared/Connect2_OrbitMobile_MUI/MilestoneHeader';
import { NoInformation_Orbit } from '@/shared/Connect2_OrbitMobile_MUI/NoInformation_Orbit';
import { Skeleton_Loading } from '@/shared/Connect2_OrbitMobile_MUI/Skeleton_Loading';
import {
  addExtensionToFile,
  checkDirectoryAccess,
  getFormattedDateTimeById,
} from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import { DirectoryAPIFilter, ImageSigningSize } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import type { MemberInformation } from '@/shared/Connect2_OrbitMobile_MUI/lib/structures';
import { styleFromCssText } from '@/shared/lib/cssText';
import { DEPRECATED_AccordionItem } from '@/shared/osui/DEPRECATED_AccordionItem';
import { ContactPopup_ByPhone } from '@/shared/UBTConnect_Utils/ContactPopup_ByPhone';
import type { ContactByPhonePopupData } from '@/shared/UBTConnect_Utils/ContactPopup_ByPhone/types';
import { Dialog_AccessRestrictedAction_Legacy } from '@/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import { openInApp_TryOpenFileInApp } from '@/shared/UBTConnect_Utils/lib/actions';
import {
  useHandleDownload,
  type FileDownloadResult,
  type FileTransferError,
} from '@/shared/FileTransferPlugin/lib/handleDownload';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { isUserException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { log } from '@/platform/log/log';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getAccommodationHost, getCacheableSignedImageURL, get_Document } from '@/screens/MilestoneDetail/api';
import type {
  AccommodationData,
  AccommodationHostVariablesWire,
  HelperItem,
  RoomItem,
} from '@/screens/MilestoneDetail/types';
import {
  getContactHelpdeskSubject_Milestone,
  getFormattedStringFromHelperType,
  getSkeletonLoadingIdFromMilestoneTypeId,
  onApplicationEvent_CallMember,
  onApplicationEvent_ViewHousehold,
} from './actions';

/* ScreenBlock_AccommodationHost (SB = analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.
   ScreenBlock_AccommodationHost.mvc.js: model :1-250, view :262-1760, controller :1762-2870). */

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction the block passes to MenuIcon__UpdatedOSUI (SB :300-304). */
const MENU_ACTION_AUTO = 'Auto';

const EMPTY_ACCOMMODATION: AccommodationData = {
  MilestoneId: '',
  MilestoneType: '',
  MilestoneDateTime: '',
  MilestoneTitle: '',
  EventDetails: { Id: '0', Name: '', Location: '', StartDate: '', EndDate: '' },
  SpecialNeedsCount: 0,
  Helpers: [],
  Rooms: [],
};

/** Block variables (SB model) and the data action outputs the view reads. */
interface Model {
  accommodationData: AccommodationData;
  isFetchingData: boolean;
  isLoadingDocument: boolean;
  hasDocument: boolean;
  /** Get_Document.AccommodationHostDocument (DocumentURL, DocumentName). */
  document: { DocumentURL: string; DocumentName: string };
  contactByPhoneData: ContactByPhonePopupData;
  /** GetAccommodationHost.IsDataFetched and HasData. */
  isDataFetched: boolean;
  hasData: boolean;
}

const INITIAL_MODEL: Model = {
  accommodationData: EMPTY_ACCOMMODATION,
  isFetchingData: false,
  isLoadingDocument: false,
  hasDocument: false,
  document: { DocumentURL: '', DocumentName: '' },
  contactByPhoneData: {},
  isDataFetched: false,
  hasData: false,
};

const NO_GUESTS =
  'No guests have been allocated to this milestone yet. Please check again later or contact the Orbit Helpdesk if you have any questions.';
const BEING_ORGANISED =
  'This accommodation milestone is still being organised. Please check again later or contact the Orbit Helpdesk if you have any questions.';

export interface ScreenBlock_AccommodationHostProps {
  /** OutSystems instance id of the block (`b1-$b5`). */
  id: string;
  In_MilestoneId: string;
  In_EventId: string;
  In_HostId: string;
  In_PreloadEventName: string;
  In_PreloadMilestoneName: string;
  In_OrbitMilestoneTypeId: string;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Event NavigateTo_HouseholdDetail(HouseholdId). */
  onNavigateToHouseholdDetail: (householdId: string) => void;
  /** Event NavigateTo_ContactHelpdesk(Subject, EventName). */
  onNavigateToContactHelpdesk: (subject: string, eventName: string) => void;
  /** Event NavigateTo_GuestArrangements(MemberId, MilestoneTypeId, MilestoneTitle, HostId). */
  onNavigateToGuestArrangements: (
    memberId: string,
    milestoneTypeId: string,
    milestoneTitle: string,
    hostId: string,
  ) => void;
}

/** Accommodation of a hosting household (SB). Layout_Orbit (CustomClass "orbit-detail") with the Auto MenuIcon, the
    MilestoneHeader (event and milestone names from the data, else the preloaded ones, SB :306-330) and, with rooms,
    the document icon when HasDocument (SB :367-415). Content (SB :416-1560): skeleton while fetching; once fetched,
    with data: rooms → "Accommodation Allocation" and the date, the Helper/s accordion (helpers) and the rooms
    accordion (one item per room: floor, type, beds, Guest/s and the guests' member cards); no rooms but helpers → the
    title and the Helper/s accordion; neither → NoInformation (no guests); without data → NoInformation (being
    organised). BottomBar: ContactHelpdesk_Footer with data (SB :1578-1600). After the layout: the legacy
    access-restricted dialog, HandleDownload and ContactPopup_ByPhone (SB :1610-1700).
    OnReady (SB :2355-2410): a view restored from the cache does nothing (P-BACK); else IsFetchingData, RefreshData
    (GetAccommodationHost → OnAfterFetch: AccommodationData), RefreshDocumentData (Get_Document → HasDocument), then
    IsFetchingData False. */
export function ScreenBlock_AccommodationHost(props: ScreenBlock_AccommodationHostProps) {
  const {
    id,
    In_MilestoneId,
    In_EventId,
    In_HostId,
    In_PreloadEventName,
    In_PreloadMilestoneName,
    In_OrbitMilestoneTypeId,
  } = props;
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () =>
      restored && saved
        ? {
            ...saved,
            contactByPhoneData: {
              ...saved.contactByPhoneData,
              ContactPopupData: { ...saved.contactByPhoneData.ContactPopupData, ShowPopup: false },
            },
          }
        : INITIAL_MODEL,
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** The block variables both data actions send (screenData.variables, see AccommodationHostVariablesWire). */
  const variables = (): AccommodationHostVariablesWire => {
    const s = m();
    return {
      IsFetchingData: s.isFetchingData,
      IsLoadingDocument: s.isLoadingDocument,
      HasDocument: s.hasDocument,
      In_MilestoneId,
      In_EventId,
      In_HostId,
      In_PreloadEventName,
      In_PreloadMilestoneName,
      In_OrbitMilestoneTypeId,
    };
  };

  /* OnReady (SB :2355-2410). Run before paint, as OnReady runs when the block mounts. */
  const started = useRef(false);
  useLayoutEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved) return;
    set({ isFetchingData: true });
    void (async () => {
      try {
        // RefreshData (SB :2033-2063) → OnAfterFetch_GetAccommodationHost (SB :2702-2750)
        const out = await getAccommodationHost(variables());
        set({ isDataFetched: true, hasData: out.hasData, accommodationData: out.accommodationData });
        // RefreshDocumentData (SB :2536-2566) → Get_DocumentOnAfterFetch (SB :1840-1860)
        const document = await get_Document(variables());
        set({ document, hasDocument: document.DocumentURL !== '' });
        set({ isFetchingData: false });
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnClick_OpenDocument (SB :1900-1973): nothing while IsLoadingDocument; else IsLoadingDocument True and
      OpenInApp_TryOpenFileInApp(AddExtensionToFile(Get_Document.DocumentName, FileExtension.PDF), DocumentURL,
      "orbit-documents", "pdf"); not in app → IsLoadingDocument False (in the browser always: the document opens in a
      new tab, CR-MilestoneDetail-3). UnknownError resets IsLoadingDocument and is raised again. The mock world has no
      document (Q4), so the icon is not shown. */
  const onClickOpenDocument = () => {
    if (m().isLoadingDocument) return;
    set({ isLoadingDocument: true });
    try {
      const d = m().document;
      const result = openInApp_TryOpenFileInApp(
        addExtensionToFile(d.DocumentName, 'pdf'),
        d.DocumentURL,
        'orbit-documents',
        'pdf',
      );
      if (!result.IsInApp) set({ isLoadingDocument: false });
    } catch (e) {
      if (isUserException(e, 'Connect2_OrbitMobile_MUI.UnknownError')) set({ isLoadingDocument: false });
      raiseToFlowHandler(e);
    }
  };

  /* HandleDownload events (SB :1974-2032, :2567-2616): only a FileTransfer download in the app answers them (see
     useHandleDownload; never in the browser). */
  useHandleDownload({
    /** HandleDownloadOnDownloadComplete: OpenDocumentFromLocalPath(FullPath) (FileViewerPlugin, Cordova only: logged),
        then IsLoadingDocument False. */
    onDownloadComplete: (result: FileDownloadResult) => {
      log.warn('NotPorted', { Action: 'OpenDocumentFromLocalPath', FullPath: result.FullPath });
      set({ isLoadingDocument: false });
    },
    /** HandleDownloadOnDownloadError: IsLoadingDocument False; the message by FileTransferError.Message, then
        FeedbackMessage_AutoClose("", Message, Info, True, "", 0, False). */
    onDownloadError: (error: FileTransferError) => {
      set({ isLoadingDocument: false });
      const message =
        error.Message === 'Document not found'
          ? 'The file you are trying to open is no longer available and cannot be opened.'
          : 'Unfortunately this file could not be opened. Please try again at a later time.';
      feedbackMessageAutoClose({ title: '', message, messageType: 'info', encodedHtml: true, extendedClass: '' });
    },
  });

  /** OnClick_GuestArrangements(MemberId, HasGuestArrangements) (SB :2064-2120): with guest arrangements,
      NavigateTo_GuestArrangements(MemberId, In_OrbitMilestoneTypeId, AccommodationData.MilestoneTitle, In_HostId). */
  const onClickGuestArrangements = (memberId: string, hasGuestArrangements: boolean) => {
    if (!hasGuestArrangements) return;
    props.onNavigateToGuestArrangements(
      memberId,
      In_OrbitMilestoneTypeId,
      m().accommodationData.MilestoneTitle,
      In_HostId,
    );
  };

  /** OnHandle_ClickedMember(HouseholdId, Type = DirectoryAPIFilter.Member) (SB :2451-2535, :672): CheckDirectoryAccess
      (server GetDirectoryAccess, CR-MilestoneDetail-1); with access NavigateTo_HouseholdDetail, then
      OnApplicationEvent_ViewHousehold; without it App_Subscription_ShowUpgradePopUp. */
  const onHandleClickedMember = (householdId: string) => {
    void (async () => {
      try {
        const hasAccess = await checkDirectoryAccess(householdId, DirectoryAPIFilter.Member);
        if (hasAccess) {
          const a = m().accommodationData;
          props.onNavigateToHouseholdDetail(householdId);
          onApplicationEvent_ViewHousehold(householdId, In_MilestoneId, a.EventDetails.Id);
        } else {
          await showUpgradePopUp();
        }
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
  };

  /** BuildMemberCallData(Phone, SignedPhotoURL, LocalityId, MemberId, CallName) (SB :2121-2260): the popup opens
      loading with the name and photo; GetCacheableMemberContactList([MemberId]) (Connect2_LegacyShared,
      CR-MilestoneDetail-2). An empty list: Phone, IsLoading False, GetCacheableTimezoneInfo(LocalityId) → TimezoneName =
      TimezoneAbreviation, TimezoneOffset = OffsetSeconds, Locality and CountryName = CountryName. Otherwise (Phone is
      not set, as compiled): the signed photo when ImageURL is "", then from the first contact Locality = LocalityName,
      Mobile / Home / Work phone, TimezoneName = Timezone.TimezoneLabel, TimezoneOffset = Timezone.OffsetSeconds and
      CountryName. Then IsFetchingTimezone and IsLoading False. */
  const buildMemberCallData = async (
    phone: string,
    signedPhotoURL: string,
    localityId: string,
    memberId: string,
    callName: string,
  ) => {
    const popup = (patch: Partial<NonNullable<ContactByPhonePopupData['ContactPopupData']>>) => {
      const d = m().contactByPhoneData;
      set({ contactByPhoneData: { ...d, ContactPopupData: { ...d.ContactPopupData, ...patch } } });
    };
    popup({ Name: callName, ImageURL: signedPhotoURL, ShowPopup: true, IsFetchingTimezone: true, IsLoading: true });
    const contacts = await getCacheableMemberContactList([memberId]);
    const first = contacts[0];
    if (first === undefined) {
      set({ contactByPhoneData: { ...m().contactByPhoneData, Phone: phone } });
      popup({ IsLoading: false });
      const tz = await getCacheableTimezoneInfo(localityId);
      popup({
        TimezoneName: tz.TimezoneAbreviation,
        TimezoneOffset: Number(tz.OffsetSeconds),
        Locality: tz.CountryName,
        CountryName: tz.CountryName,
      });
    } else {
      if ((m().contactByPhoneData.ContactPopupData?.ImageURL ?? '') === '') {
        popup({
          ImageURL: await getCacheableSignedImageURL(memberId, DirectoryAPIFilter.Member, ImageSigningSize.Small),
        });
      }
      const d = m().contactByPhoneData;
      set({
        contactByPhoneData: {
          ...d,
          MobilePhone: first.MobilePhoneNumber,
          HomePhone: first.HomePhoneNumber,
          WorkPhone: first.WorkPhoneNumber,
          ContactPopupData: {
            ...d.ContactPopupData,
            Locality: first.LocalityName,
            TimezoneName: first.Timezone.TimezoneLabel,
            TimezoneOffset: Number(first.Timezone.OffsetSeconds),
            CountryName: first.CountryName,
          },
        },
      });
    }
    popup({ IsFetchingTimezone: false, IsLoading: false });
  };

  /** OnHandle_ClickedMemberPhone(PhoneNumber, CallName, LocalityId, MemberId, SignedPhotoURL) (SB :2617-2700): with a
      phone number, BuildMemberCallData. */
  const onHandleClickedMemberPhone = (
    phoneNumber: string,
    callName: string,
    localityId: string,
    memberId: string,
    signedPhotoURL: string,
  ) => {
    if (phoneNumber === '') return;
    void buildMemberCallData(phoneNumber, signedPhotoURL, localityId, memberId, callName).catch(raiseToFlowHandler);
  };

  /** OnHandle_ContactByPhone_Cancel (SB :2752-2777): ShowPopup False. */
  const onHandleContactByPhoneCancel = () => {
    const d = m().contactByPhoneData;
    set({ contactByPhoneData: { ...d, ContactPopupData: { ...d.ContactPopupData, ShowPopup: false } } });
  };

  /** OnHandle_CallClicked(CalledNumber) (SB :2301-2354): OnApplicationEvent_CallMember, then
      OnHandle_ContactByPhone_Cancel. */
  const onHandleCallClicked = () => {
    onApplicationEvent_CallMember(In_MilestoneId, m().accommodationData.EventDetails.Id);
    onHandleContactByPhoneCancel();
  };

  /** OnHandle_ContactHelpdesk (SB :2420-2450): NavigateTo_ContactHelpdesk(GetContactHelpdeskSubject_Milestone(
      In_OrbitMilestoneTypeId, In_PreloadEventName, In_PreloadMilestoneName, MilestoneDateTime, EventDetails.Location),
      In_PreloadMilestoneName). */
  const onHandleContactHelpdesk = () => {
    const a = m().accommodationData;
    props.onNavigateToContactHelpdesk(
      getContactHelpdeskSubject_Milestone(
        In_OrbitMilestoneTypeId,
        In_PreloadEventName,
        In_PreloadMilestoneName,
        a.MilestoneDateTime,
        a.EventDetails.Location,
      ),
      In_PreloadMilestoneName,
    );
  };

  const s = state;
  const a = s.accommodationData;
  const prefix = id.replace('$', '');
  const hasRooms = a.Rooms.length > 0;
  const hasHelpers = a.Helpers.length > 0;
  const noSpecialNeeds = a.SpecialNeedsCount === 0;

  /** "Accommodation Allocation" and the formatted milestone date (SB :430-487 and :1180-1240). */
  const allocationTitle = (
    <div className="full-width padding-x-m margin-bottom-m display-flex flex-direction-column" data-container="">
      <div className="full-width bold color-orbit-primary-7" data-container="">
        Accommodation Allocation
      </div>
      <div className="full-width flex-center-vertical flex-direction-row margin-top-m" data-container="">
        <i className="icon orbit-icon-date-time fa fa-flag fa-1x" data-icon="" />
        <span className="margin-left-base" data-expression="">
          {getFormattedDateTimeById(In_OrbitMilestoneTypeId, a.MilestoneDateTime)}
        </span>
      </div>
    </div>
  );

  /** The Helper/s accordion (SB :492-747, and :1240-1500 without rooms): per role its formatted name and member cards
      with the midday / evening meals. */
  const helpersAccordion = (accordion: string, item: string, card: string) => (
    <Accordion_Orbit
      id={`${prefix}-$b${accordion}`}
      inExtendedClass={noSpecialNeeds ? ' orbit-accordion-no-margin' : ''}
    >
      <DEPRECATED_AccordionItem
        id={`${prefix}-$b${item}`}
        usePadding={false}
        extendedClass="orbit-accordion-item"
        title={<span data-expression="">Helper/s</span>}
        content={
          <OSList
            className="list list-group orbit-household-list"
            animateItems
            disableVirtualization
            source={a.Helpers}
            keyOf={(h: HelperItem, i) => `${h.Role}-${String(i)}`}
          >
            {(h, i) => (
              <div className="orbit-household-list-item" data-container="">
                <div
                  className="padding-x-m padding-bottom-base padding-top-xs font-size-1-1em text-neutral-6"
                  data-container=""
                >
                  <span data-expression="">{getFormattedStringFromHelperType(h.Role)}</span>
                </div>
                <OSList
                  className="list list-group orbit-member-list"
                  animateItems
                  disableVirtualization
                  source={h.MemberInformation}
                  keyOf={(mi: MemberInformation, k) => `${mi.MemberId ?? ''}-${String(k)}`}
                >
                  {(mi, k) => (
                    <div className="orbit-member-list-item" data-container="">
                      <Card_MemberInformation
                        id={`${prefix}-l${item}-15_${String(i)}-l${item}-19_${String(k)}-$b${card}`}
                        inDisplayDot={false}
                        inHouseholderId={mi.HouseholderId ?? ''}
                        inMemberInformation={mi}
                        isShowPersonalInfo
                        getSignedImageURL={getCacheableSignedImageURL}
                        onClickedPhone={onHandleClickedMemberPhone}
                        onClickedMember={onHandleClickedMember}
                        placeholderInfo={
                          <>
                            {(mi.MiddayMeal ?? '') !== '' && (
                              <div className="full-width font-size-s text-neutral-6" data-container="">
                                <span data-expression="">{`Midday Meal: ${mi.MiddayMeal ?? ''}`}</span>
                              </div>
                            )}
                            {(mi.EveningMeal ?? '') !== '' && (
                              <div className="full-width font-size-s text-neutral-6" data-container="">
                                <span data-expression="">{`Evening Meal: ${mi.EveningMeal ?? ''}`}</span>
                              </div>
                            )}
                          </>
                        }
                      />
                    </div>
                  )}
                </OSList>
              </div>
            )}
          </OSList>
        }
      />
    </Accordion_Orbit>
  );

  /** One room (SB :760-1170): the room info row when a floor, type or beds is set, "Guest/s" and per household its
      member cards (Orbit admin tag, guest arrangements link). */
  const roomContent = (room: RoomItem, r: number) => {
    const info = room.RoomInformation;
    return (
      <>
        {(info.Floor !== '' || info.Type !== '' || (info.Beds !== '0' && info.Beds !== '')) && (
          <div className="room-info-cont" data-container="">
            <div className="flex-center-vertical justify-content-flex-start flex-direction-row" data-container="">
              <i className="icon orbit-icon-home font-size-1-1em fa fa-flag fa-1x" data-icon="" />
              <span className="margin-left-s" data-expression="">
                {info.Floor}
              </span>
            </div>
            <div className="flex-center-vertical justify-content-center flex-direction-row" data-container="">
              <i className="icon orbit-icon-host-guest fa fa-flag fa-1x" data-icon="" />
              <span className="margin-left-s" data-expression="">
                {info.Type}
              </span>
            </div>
            <div className="flex-center-vertical justify-content-flex-end flex-direction-row" data-container="">
              <i className="icon orbit-icon-accommodation font-size-1-1em fa fa-flag fa-1x" data-icon="" />
              <span className="margin-left-s" data-expression="">
                {info.Beds === '' ? '0' : info.Beds}
              </span>
            </div>
          </div>
        )}
        <div className="padding-x-m padding-top-base font-size-1-1em text-neutral-6" data-container="">
          <span data-expression="">Guest/s</span>
        </div>
        <OSList
          className="list list-group orbit-household-list"
          animateItems
          disableVirtualization
          source={room.Guests}
          keyOf={(g, j) => `${g.HouseholderId}-${String(j)}`}
        >
          {(g, j) => (
            <div className="orbit-household-list-item" data-container="">
              <OSList
                className="list list-group orbit-member-list"
                animateItems
                disableVirtualization
                source={g.MemberInformation}
                keyOf={(mi, k) => `${mi.MemberId ?? ''}-${String(k)}`}
              >
                {(mi, k) => (
                  <div className="orbit-member-list-item" data-container="">
                    <div data-container="">
                      <Card_MemberInformation
                        id={`${prefix}-l5-142864_${String(r)}-l5-${String(142865 + 2 * r)}_${String(j)}-l5-${String(142866 + 2 * r)}_${String(k)}-$b9`}
                        inHouseholderId={g.HouseholderId}
                        inHouseholdCountryCode={g.CountryCode}
                        inShowAdminTag={mi.HasOrbitAdminRole ?? false}
                        inHideMemberInfoLocation={false}
                        inMemberInformation={mi}
                        isShowPersonalInfo
                        inDisplayDot={g.DisplayDot}
                        inHouseholdLocality={g.Locality}
                        getSignedImageURL={getCacheableSignedImageURL}
                        onClickedPhone={(phone, name, _localityId, memberId, photoURL) => {
                          // ClickedPhone passes the guest household's LocalityId (SB :1053), not the card's.
                          onHandleClickedMemberPhone(phone, name, g.LocalityId, memberId, photoURL);
                        }}
                        onClickedMember={onHandleClickedMember}
                        placeholderOrbitAdmin={<NotCaptured name="Orbit_Blocks.OrbitAdminTag" />}
                        placeholderInfo={
                          (mi.HasGuestArrangements ?? false) && (
                            <div
                              className="margin-top-s display-flex justify-content-flex-start align-items-center"
                              data-container=""
                              style={{ cursor: 'pointer' }}
                              onClick={() => {
                                onClickGuestArrangements(mi.MemberId ?? '0', mi.HasGuestArrangements ?? false);
                              }}
                            >
                              <i
                                className="icon orbit-icon-arrangements text-neutral-6 fa fa-flag fa-1x"
                                data-icon=""
                              />
                              <div className="orbit-member-list-item-arrangements" data-container="">
                                Guest Arrangements
                              </div>
                            </div>
                          )
                        }
                      />
                    </div>
                  </div>
                )}
              </OSList>
            </div>
          )}
        </OSList>
      </>
    );
  };

  const content: ReactNode = s.isFetchingData ? (
    <Skeleton_Loading
      id={`${prefix}-$b16`}
      inSkeletonLoadingId={getSkeletonLoadingIdFromMilestoneTypeId(In_OrbitMilestoneTypeId)}
    />
  ) : !s.isDataFetched ? null : !s.hasData ? (
    <NoInformation_Orbit id={`${prefix}-$b15`} message={BEING_ORGANISED} />
  ) : hasRooms ? (
    <div className="full-width margin-top-m" data-container="">
      {allocationTitle}
      {hasHelpers && helpersAccordion('4', '5', '6')}
      <Accordion_Orbit
        id={`${prefix}-$b7`}
        inExtendedClass={noSpecialNeeds && !hasHelpers ? ' orbit-accordion-no-margin' : ''}
        inMultipleItems
      >
        <OSList
          className="list list-group"
          animateItems
          disableVirtualization
          source={a.Rooms}
          keyOf={(room, r) => `${room.RoomId}-${String(r)}`}
        >
          {(room, r) => (
            <DEPRECATED_AccordionItem
              id={`${prefix}-l5-142864_${String(r)}-$b8`}
              usePadding={false}
              extendedClass={`orbit-accordion-item${r !== 0 ? ' margin-top-s' : ''}`}
              title={<span data-expression="">{`Room: ${room.RoomName}`}</span>}
              content={roomContent(room, r)}
            />
          )}
        </OSList>
      </Accordion_Orbit>
    </div>
  ) : hasHelpers ? (
    <div className="full-width margin-top-m" data-container="">
      {allocationTitle}
      {helpersAccordion('11', '12', '13')}
    </div>
  ) : (
    <NoInformation_Orbit id={`${prefix}-$b14`} message={NO_GUESTS} />
  );

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_AccommodationHost" id={id}>
      <Layout_Orbit
        id={`${prefix}-$b1`}
        customClass="orbit-detail"
        menu={<div id={`${prefix}-Menu`}>{props.menu}</div>}
        headerLeft={<MenuIcon__UpdatedOSUI id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={
          <MilestoneHeader
            id={`${prefix}-$b3`}
            inOrbitMilestoneTypeId={In_OrbitMilestoneTypeId}
            inEventName={a.EventDetails.Name !== '' ? a.EventDetails.Name : In_PreloadEventName}
            inMilestoneName={a.MilestoneTitle !== '' ? a.MilestoneTitle : In_PreloadMilestoneName}
          />
        }
        headerRight={
          !s.isFetchingData && s.hasData && hasRooms && s.hasDocument ? (
            <div
              className="display-flex align-items-center align-content-center"
              data-container=""
              style={styleFromCssText('cursor: pointer; line-height: initial;')}
              onClick={onClickOpenDocument}
            >
              <i className="icon orbit-icon-file-doc padding-none font-size-1-5em fa fa-flag fa-1x" data-icon="" />
            </div>
          ) : null
        }
        content={content}
        bottomBar={
          s.hasData ? <ContactHelpdesk_Footer id={`${prefix}-$b17`} onClick={onHandleContactHelpdesk} /> : null
        }
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{props.commonUIElements}</div>}
      />
      <Dialog_AccessRestrictedAction_Legacy id={`${prefix}-FreeSubscriptionAlert`} scope={`${prefix}-b18`} />
      {/* FileTransfer.HandleDownload (SB :1630-1660): no markup; its events are wired by useHandleDownload above. */}
      <OSBlock name="FileTransfer.HandleDownload" id={`${prefix}-$b19`} />
      <ContactPopup_ByPhone
        id={`${prefix}-$b20`}
        inCallPopupData={s.contactByPhoneData}
        onEventCancel={onHandleContactByPhoneCancel}
        onEventCall={onHandleCallClicked}
      />
    </OSBlock>
  );
}
