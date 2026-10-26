import { useRef } from 'react';
import {
  fetchAccommodationHost,
  fetchAccommodationHostDocument,
  type AccommodationData,
  type AccommodationHostCallInputs,
} from '@/api/event';
import { fetchLegacySignedImageURL } from '@/api/image';
import type { ContactByPhonePopupData } from '@/components/contact/ContactPopupByPhone/types';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { isUserException, raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { log } from '@/platform/log/log';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import { useHandleDownload } from '@/platform/device/handleDownload';
import { getCacheableMemberContactList, getCacheableTimezoneInfo } from '@/lib/legacyShared/actions';
import { addExtensionToFile, checkDirectoryAccess } from '@/lib/orbit/actions';
import { DirectoryAPIFilter, ImageSigningSize } from '@/lib/orbit/staticEntities';
import { openInApp_TryOpenFileInApp } from '@/lib/ubtConnectUtils/actions';
import {
  accommodationHostCallInputs,
  accommodationHostReducer,
  getContactHelpdeskSubject_Milestone,
  hasAccommodationHostData,
  INITIAL_ACCOMMODATION_HOST_STATE,
  type AccommodationHostAction,
  type AccommodationHostInputs,
  type ContactPopupData,
} from './accommodationHostState';

/** The flows of ScreenBlock_AccommodationHost: OnReady (GetAccommodationHost, then Get_Document), the document, the
    member cards (directory access, the call popup), the guest arrangements and the helpdesk. The page calls this hook
    in the block and gives the result to AccommodationHostView.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost */

/** The events of the block, which the screen handles. */
export interface AccommodationHostEvents {
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

/** What the view reads. */
export interface AccommodationHostFlows {
  accommodationData: AccommodationData;
  isFetchingData: boolean;
  /** GetAccommodationHost.IsDataFetched. */
  isDataFetched: boolean;
  /** GetAccommodationHost.HasData. */
  hasData: boolean;
  hasDocument: boolean;
  /** The data of the call popup. */
  contactByPhoneData: ContactByPhonePopupData;
  /** The photo source of the member cards: Connect2_LegacyShared GetCacheableSignedImageURL. */
  getSignedImageURL: (entityId: string, type: string, size: string) => Promise<string>;
  /** OnClick_OpenDocument. */
  onClickOpenDocument: () => void;
  /** OnClick_GuestArrangements(MemberId, HasGuestArrangements). */
  onClickGuestArrangements: (memberId: string, hasGuestArrangements: boolean) => void;
  /** OnHandle_ClickedMember(HouseholdId). */
  onClickedMember: (householdId: string) => void;
  /** OnHandle_ClickedMemberPhone(PhoneNumber, CallName, LocalityId, MemberId, SignedPhotoURL). */
  onClickedMemberPhone: (
    phoneNumber: string,
    callName: string,
    localityId: string,
    memberId: string,
    signedPhotoURL: string,
  ) => void;
  /** OnHandle_ContactByPhone_Cancel. */
  onContactByPhoneCancel: () => void;
  /** OnHandle_CallClicked. */
  onCallClicked: () => void;
  /** OnHandle_ContactHelpdesk. */
  onContactHelpdesk: () => void;
}

/** OnApplicationEvent_ViewHousehold(AuditPayload_ViewHousehold) (Connect2_OrbitMobile_MUI audit event). Telemetry is
    not wired in the mock phase (decision U17): the event goes to the log with its ids only. */
function onApplicationEvent_ViewHousehold(targetHouseholdId: string, milestoneId: string, eventId: string): void {
  log.info('ApplicationEvent', {
    Event: 'ViewHousehold',
    TargetHouseholdId: targetHouseholdId,
    MilestoneId: milestoneId,
    EventId: eventId,
  });
}

/** OnApplicationEvent_CallMember(AuditPayload_CallMember): as above, ids only (no names or phone numbers). */
function onApplicationEvent_CallMember(milestoneId: string, eventId: string): void {
  log.info('ApplicationEvent', { Event: 'CallMember', MilestoneId: milestoneId, EventId: eventId });
}

/** The state and the flows of the block. The state comes from useFlowState and the view cache keeps it.
    - OnReady, before the first paint: IsFetchingData, RefreshData (GetAccommodationHost →
      OnAfterFetch: AccommodationData), RefreshDocumentData (Get_Document → HasDocument), then IsFetchingData False.
    - A view that the view cache restored (a back navigation) keeps its saved state and makes no call: the compiled
      OnReady does nothing when WasCurrentViewRestoredFromCache is True. A restored view whose saved state does not
      have the data (no saved state for the block, or the user left before OnReady ended) runs OnReady as a new
      visit. The view name of the block is its own, so the restored state is always the state of this block.
    - Decision W23: a flow that started runs to its end after the unmount (its calls, the navigation and the
      application event); only its state writes stop (`isAlive`). */
export function useAccommodationHost(
  inputs: AccommodationHostInputs,
  events: AccommodationHostEvents,
): AccommodationHostFlows {
  /* The liveness check of OnReady (true until the unmount with `beforePaint`), kept for the flows that the events of
     the block start. */
  const readyIsAlive = useRef<IsAlive>(() => true);
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
  } = useFlowState({
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_AccommodationHost',
    reducer: accommodationHostReducer,
    initial: INITIAL_ACCOMMODATION_HOST_STATE,
    parameters: inputs,
    events,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (isAlive, restored) => {
      readyIsAlive.current = isAlive;
      return onReady(isAlive, restored);
    },
    // The old port ran OnReady in a layout effect: the first frame is the skeleton.
    beforePaint: true,
  });

  /** The block is still there: true until the unmount. */
  const isAlive: IsAlive = () => readyIsAlive.current();

  /** The block variables that both data actions send, as they are now. */
  const callInputs = (): AccommodationHostCallInputs => accommodationHostCallInputs(latest.current, parameters.current);

  /** OnReady. A view restored from the cache with its data does nothing (see above). */
  const onReady = async (isReadyAlive: IsAlive, restored: boolean) => {
    if (restored && hasAccommodationHostData(latest.current)) return;
    dispatch({ type: 'fetchStarted' });
    // RefreshData → OnAfterFetch_GetAccommodationHost
    const result = await fetchAccommodationHost(callInputs());
    if (isReadyAlive()) dispatch({ type: 'accommodationHostFetched', result });
    // RefreshDocumentData → Get_DocumentOnAfterFetch
    const document = await fetchAccommodationHostDocument(callInputs());
    if (!isReadyAlive()) return;
    dispatch({ type: 'documentFetched', document });
    dispatch({ type: 'fetchFinished' });
  };

  /** A state write of a flow that an event started, skipped after the unmount (W23). */
  const write = (action: AccommodationHostAction) => {
    if (isAlive()) dispatch(action);
  };
  const popup = (patch: Partial<ContactPopupData>) => {
    write({ type: 'contactPopupChanged', patch });
  };

  /** OnClick_OpenDocument: nothing while IsLoadingDocument; else IsLoadingDocument True and
      OpenInApp_TryOpenFileInApp(AddExtensionToFile(Get_Document.DocumentName, FileExtension.PDF), DocumentURL,
      "orbit-documents", "pdf"); not in app → IsLoadingDocument False (in the browser always: the document opens in a
      new tab, CR-MilestoneDetail-3). UnknownError resets IsLoadingDocument and is raised again. The mock world has no
      document (Q4), so the icon is not shown. */
  const onClickOpenDocument = () => {
    if (latest.current.isLoadingDocument) return;
    dispatch({ type: 'documentLoadingChanged', isLoadingDocument: true });
    try {
      const d = latest.current.document;
      const result = openInApp_TryOpenFileInApp(
        addExtensionToFile(d.DocumentName, 'pdf'),
        d.DocumentURL,
        'orbit-documents',
        'pdf',
      );
      if (!result.IsInApp) dispatch({ type: 'documentLoadingChanged', isLoadingDocument: false });
    } catch (e) {
      if (isUserException(e, 'Connect2_OrbitMobile_MUI.UnknownError'))
        dispatch({ type: 'documentLoadingChanged', isLoadingDocument: false });
      raiseToFlowHandler(e);
    }
  };

  /* HandleDownload events: only a FileTransfer download in the app answers them (see
     useHandleDownload; never in the browser). */
  useHandleDownload({
    /** HandleDownloadOnDownloadComplete: OpenDocumentFromLocalPath(FullPath) (FileViewerPlugin, Cordova only: logged),
        then IsLoadingDocument False. */
    onDownloadComplete: (result) => {
      log.warn('NotPorted', { Action: 'OpenDocumentFromLocalPath', FullPath: result.FullPath });
      dispatch({ type: 'documentLoadingChanged', isLoadingDocument: false });
    },
    /** HandleDownloadOnDownloadError: IsLoadingDocument False; the message by FileTransferError.Message, then
        FeedbackMessage_AutoClose("", Message, Info, True, "", 0, False). */
    onDownloadError: (error) => {
      dispatch({ type: 'documentLoadingChanged', isLoadingDocument: false });
      const message =
        error.Message === 'Document not found'
          ? 'The file you are trying to open is no longer available and cannot be opened.'
          : 'Unfortunately this file could not be opened. Please try again at a later time.';
      feedbackMessageAutoClose({ title: '', message, messageType: 'info', encodedHtml: true, extendedClass: '' });
    },
  });

  /** OnClick_GuestArrangements(MemberId, HasGuestArrangements): with guest arrangements,
      NavigateTo_GuestArrangements(MemberId, In_OrbitMilestoneTypeId, AccommodationData.MilestoneTitle, In_HostId). */
  const onClickGuestArrangements = (memberId: string, hasGuestArrangements: boolean) => {
    if (!hasGuestArrangements) return;
    const p = parameters.current;
    eventsRef.current.onNavigateToGuestArrangements(
      memberId,
      p.In_OrbitMilestoneTypeId,
      latest.current.accommodationData.MilestoneTitle,
      p.In_HostId,
    );
  };

  /** OnHandle_ClickedMember(HouseholdId, Type = DirectoryAPIFilter.Member): CheckDirectoryAccess
      (server GetDirectoryAccess, CR-MilestoneDetail-1); with access NavigateTo_HouseholdDetail, then
      OnApplicationEvent_ViewHousehold; without it App_Subscription_ShowUpgradePopUp. */
  const onClickedMember = (householdId: string) => {
    void (async () => {
      try {
        const hasAccess = await checkDirectoryAccess(householdId, DirectoryAPIFilter.Member);
        if (hasAccess) {
          eventsRef.current.onNavigateToHouseholdDetail(householdId);
          onApplicationEvent_ViewHousehold(
            householdId,
            parameters.current.In_MilestoneId,
            latest.current.accommodationData.EventDetails.Id,
          );
        } else {
          await showUpgradePopUp();
        }
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
  };

  /** BuildMemberCallData(Phone, SignedPhotoURL, LocalityId, MemberId, CallName): the popup opens
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
    popup({ Name: callName, ImageURL: signedPhotoURL, ShowPopup: true, IsFetchingTimezone: true, IsLoading: true });
    const contacts = await getCacheableMemberContactList([memberId]);
    const first = contacts[0];
    if (first === undefined) {
      write({ type: 'contactPhoneSet', phone });
      popup({ IsLoading: false });
      const tz = await getCacheableTimezoneInfo(localityId);
      popup({
        TimezoneName: tz.TimezoneAbreviation,
        TimezoneOffset: Number(tz.OffsetSeconds),
        Locality: tz.CountryName,
        CountryName: tz.CountryName,
      });
    } else {
      if ((latest.current.contactByPhoneData.ContactPopupData?.ImageURL ?? '') === '') {
        popup({
          ImageURL: await fetchLegacySignedImageURL(memberId, DirectoryAPIFilter.Member, ImageSigningSize.Small),
        });
      }
      write({
        type: 'memberContactFetched',
        phones: {
          MobilePhone: first.MobilePhoneNumber,
          HomePhone: first.HomePhoneNumber,
          WorkPhone: first.WorkPhoneNumber,
        },
        patch: {
          Locality: first.LocalityName,
          TimezoneName: first.Timezone.TimezoneLabel,
          TimezoneOffset: Number(first.Timezone.OffsetSeconds),
          CountryName: first.CountryName,
        },
      });
    }
    popup({ IsFetchingTimezone: false, IsLoading: false });
  };

  /** OnHandle_ClickedMemberPhone(PhoneNumber, CallName, LocalityId, MemberId, SignedPhotoURL): with a
      phone number, BuildMemberCallData. */
  const onClickedMemberPhone = (
    phoneNumber: string,
    callName: string,
    localityId: string,
    memberId: string,
    signedPhotoURL: string,
  ) => {
    if (phoneNumber === '') return;
    void buildMemberCallData(phoneNumber, signedPhotoURL, localityId, memberId, callName).catch(raiseToFlowHandler);
  };

  /** OnHandle_ContactByPhone_Cancel: ShowPopup False. */
  const onContactByPhoneCancel = () => {
    dispatch({ type: 'contactPopupChanged', patch: { ShowPopup: false } });
  };

  /** OnHandle_CallClicked(CalledNumber): OnApplicationEvent_CallMember, then
      OnHandle_ContactByPhone_Cancel. */
  const onCallClicked = () => {
    onApplicationEvent_CallMember(parameters.current.In_MilestoneId, latest.current.accommodationData.EventDetails.Id);
    onContactByPhoneCancel();
  };

  /** OnHandle_ContactHelpdesk: NavigateTo_ContactHelpdesk(GetContactHelpdeskSubject_Milestone(
      In_OrbitMilestoneTypeId, In_PreloadEventName, In_PreloadMilestoneName, MilestoneDateTime, EventDetails.Location),
      In_PreloadMilestoneName). */
  const onContactHelpdesk = () => {
    const a = latest.current.accommodationData;
    const p = parameters.current;
    eventsRef.current.onNavigateToContactHelpdesk(
      getContactHelpdeskSubject_Milestone(
        p.In_OrbitMilestoneTypeId,
        p.In_PreloadEventName,
        p.In_PreloadMilestoneName,
        a.MilestoneDateTime,
        a.EventDetails.Location,
      ),
      p.In_PreloadMilestoneName,
    );
  };

  return {
    accommodationData: state.accommodationData,
    isFetchingData: state.isFetchingData,
    isDataFetched: state.isDataFetched,
    hasData: state.hasData,
    hasDocument: state.hasDocument,
    contactByPhoneData: state.contactByPhoneData,
    getSignedImageURL: fetchLegacySignedImageURL,
    onClickOpenDocument,
    onClickGuestArrangements,
    onClickedMember,
    onClickedMemberPhone,
    onContactByPhoneCancel,
    onCallClicked,
    onContactHelpdesk,
  };
}
