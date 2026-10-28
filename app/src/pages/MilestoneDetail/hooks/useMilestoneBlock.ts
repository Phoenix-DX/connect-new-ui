import {
  fetchMilestoneBlock,
  fetchMilestoneBlockCaptions,
  type MilestoneBlockData,
  type MilestoneBlockKind,
} from '@/api/event';
import { fetchLegacySignedImageURL } from '@/api/image';
import type { ContactByPhonePopupData } from '@/components/contact/ContactPopupByPhone/types';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { isUserException } from '@/platform/feedback/flowErrors';
import { log } from '@/platform/log/log';
import { useFlowState } from '@/platform/navigation';
import { getCacheableMemberContactList, getCacheableTimezoneInfo } from '@/lib/legacyShared/actions';
import { checkDirectoryAccess, getFormattedDateTimeById } from '@/lib/orbit/actions';
import { DirectoryAPIFilter, ImageSigningSize } from '@/lib/orbit/staticEntities';
import type { UI_ContactByMessage_WrapperData } from '@/lib/ubtConnectUtils/structures';
import { getContactHelpdeskSubject_Milestone, type ContactPopupData } from './accommodationHostState';
import {
  closePopups,
  hasMilestoneBlockData,
  hostPopupName,
  initialMilestoneBlockState,
  milestoneBlockCallInputs,
  milestoneBlockReducer,
  MILESTONE_BLOCKS,
  type MilestoneBlockInputs,
} from './milestoneBlockState';

/** The flows of the five milestone blocks (ScreenBlock_MealGuest, _MealHost, _MealHelper, _AccommodationGuest,
    _AccommodationHelper): OnReady (the data action, then the captions), the member cards (directory access, the call
    popup), the host (call popup, message popup, e-mail), the guest arrangements (AccommodationHelper) and the
    helpdesk. The page calls this hook in each block and gives the result to the view of the block.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealGuest */

/** The events of the blocks, which the screen handles (a block raises the ones it has). */
export interface MilestoneBlockEvents {
  /** Event NavigateTo_HouseholdDetail(HouseholdId). */
  onNavigateToHouseholdDetail: (householdId: string) => void;
  /** Event NavigateTo_ContactHelpdesk(Subject, EventName). */
  onNavigateToContactHelpdesk: (subject: string, eventName: string) => void;
  /** Event NavigateTo_ContactByEmail(In_AvatarURL, In_ContactName, In_ContactSurname, In_ContactLocality,
      In_ContactCountry, In_EmailTo, In_Subject, In_MilestoneTitle, In_FormattedDateTime): every block but MealHost. */
  onNavigateToContactByEmail: (
    avatarURL: string,
    contactName: string,
    contactSurname: string,
    contactLocality: string,
    contactCountry: string,
    emailTo: string,
    subject: string,
    milestoneTitle: string,
    formattedDateTime: string,
  ) => void;
  /** Event NavigateTo_GuestArrangements(MemberId, MilestoneTypeId, MilestoneTitle, HostId): AccommodationHelper. */
  onNavigateToGuestArrangements: (
    memberId: string,
    milestoneTypeId: string,
    milestoneTitle: string,
    hostId: string,
  ) => void;
}

/** What the views read. */
export interface MilestoneBlockFlows {
  /** MealData or AccommodationData. */
  data: MilestoneBlockData;
  isFetchingData: boolean;
  /** The data action's IsDataFetched. */
  isDataFetched: boolean;
  /** The data action's HasData. */
  hasData: boolean;
  isFetchingCaptionData: boolean;
  householdCaptions: string;
  contactByPhoneData: ContactByPhonePopupData;
  /** ContactByMessagePopupData.UI_ContactByMessage_WrapperData. */
  contactByMessageData: UI_ContactByMessage_WrapperData;
  /** The photo source of the member cards and of the host photo: GetCacheableSignedImageURL. */
  getSignedImageURL: (entityId: string, type: string, size: string) => Promise<string>;
  /** OnHandle_ClickedMember(HouseholdId) with Type Member. */
  onClickedMember: (householdId: string) => void;
  /** OnHandle_ClickedMemberPhone(PhoneNumber, CallName, LocalityId, MemberId, SignedPhotoURL). */
  onClickedMemberPhone: (
    phoneNumber: string,
    callName: string,
    localityId: string,
    memberId: string,
    signedPhotoURL: string,
  ) => void;
  /** OnHandle_ClickedHostPhone(PhoneNumber). */
  onClickedHostPhone: (phoneNumber: string) => void;
  /** OnHandle_ContactByPhone_Cancel. */
  onContactByPhoneCancel: () => void;
  /** OnHandle_CallClicked(CalledNumber). */
  onCallClicked: (calledNumber: string) => void;
  /** OnHandle_ContactHostByMessage. */
  onContactHostByMessage: () => void;
  /** OnHandle_ContactHostByMessage_Cancel. */
  onContactHostByMessageCancel: () => void;
  /** OnHandle_ContactHostByMessage_ClickedEmail. */
  onContactHostByMessageClickedEmail: () => void;
  /** OnHandle_ContactHelpdesk. */
  onContactHelpdesk: () => void;
  /** OnClick_GuestArrangements(MemberId, HasGuestArrangements) (AccommodationHelper). */
  onClickGuestArrangements: (memberId: string, hasGuestArrangements: boolean) => void;
}

/** The state and the flows of a block. The state comes from useFlowState and the view cache keeps it.
    - OnReady, before the first paint: RefreshData (IsFetchingData True, the data action → OnAfterFetch: the data,
      IsFetchingCaptionData True, IsFetchingData False), then the JS node RefreshCaptions starts RefreshCaptionsData
      without waiting (GetCaptions → OnAfterFetch_GetCaptions: HouseholdCaptions, IsFetchingCaptionData False).
      MealHost has no captions.
    - A failed data action: TST runs OnAfterFetch only after a success, so IsFetchingData stays True and the error
      goes from OnReady to the flow handler. A failed GetCaptions with UnknownError sets IsFetchingCaptionData False;
      any other error goes to the flow handler.
    - Decision W34: a restored view with its data keeps it and makes no call (the compiled OnReady does nothing on a
      restored view); a restored view without its data runs OnReady as a new visit (reads only).
    - OnInitialize (MealGuest, MealHelper) and the start of OnReady (AccommodationGuest, AccommodationHelper) close
      both popups, also on a restored view (`restore`).
    - Flow scope (item 8): the data action and GetCaptions are data actions (R1, `flow.fetch`): after the unmount
      OnReady stops at the answer (no GetCaptions) and a late GetCaptions failure raises nothing. CheckDirectoryAccess
      (a server action, R2) answers after leaving: the upgrade popup still shows, but NavigateTo_HouseholdDetail is an
      own action of the block (R3, `flow.own`), so the event and the ViewHousehold application event after it stop.
      The cache module actions of the popups run, and their state writes are dropped (`dispatch`). */
export function useMilestoneBlock(
  kind: MilestoneBlockKind,
  inputs: MilestoneBlockInputs,
  events: MilestoneBlockEvents,
): MilestoneBlockFlows {
  const settings = MILESTONE_BLOCKS[kind];
  const { state, dispatch, latest, parameters, flow } = useFlowState({
    viewName: settings.viewName,
    reducer: milestoneBlockReducer,
    initial: initialMilestoneBlockState(kind),
    parameters: inputs,
    events,
    ...(settings.closesPopupsOnStart ? { restore: closePopups } : {}),
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (_isAlive, restored) => onReady(restored),
    // As the old port of ScreenBlock_AccommodationHost: the first frame is the skeleton.
    beforePaint: true,
  });

  const callInputs = () => milestoneBlockCallInputs(kind, latest.current, parameters.current);

  /** RefreshCaptionsData: GetCaptions → OnAfterFetch_GetCaptions; UnknownError → IsFetchingCaptionData False. */
  const refreshCaptionsData = async () => {
    if (kind === 'mealHost') return;
    try {
      const out = await flow.fetch(fetchMilestoneBlockCaptions(kind, callInputs())); // R1
      dispatch({ type: 'captionsFetched', success: out.Success, photobookCaption: out.PhotobookCaption });
    } catch (e) {
      if (!isUserException(e, 'Connect2_OrbitMobile_MUI.UnknownError')) throw e;
      dispatch({ type: 'captionsFailed' });
    }
  };

  /** OnReady. A view restored from the cache with its data does nothing (see above). */
  const onReady = async (restored: boolean) => {
    if (restored && hasMilestoneBlockData(latest.current)) return;
    // RefreshData (MealHost: OnReady) → IsFetchingData True and the data action.
    dispatch({ type: 'fetchStarted' });
    const result = await flow.fetch(fetchMilestoneBlock(kind, callInputs())); // R1
    dispatch({ type: 'dataFetched', result, fetchesCaptions: settings.hasCaptions });
    // JS node RefreshCaptions: $actions.RefreshCaptionsData(), not awaited.
    if (settings.hasCaptions) flow.run(refreshCaptionsData);
  };

  const phonePopup = (patch: Partial<ContactPopupData>, phones?: Partial<ContactByPhonePopupData>) => {
    dispatch({ type: 'contactByPhoneChanged', patch, phones });
  };
  const messagePopup = (
    patch: Partial<ContactPopupData>,
    wrapper?: Partial<UI_ContactByMessage_WrapperData>,
    countryName?: string,
  ) => {
    dispatch({ type: 'contactByMessageChanged', patch, wrapper, countryName });
  };

  /** OnHandle_ClickedMember(HouseholdId, Type = DirectoryAPIFilter.Member): CheckDirectoryAccess; with access
      NavigateTo_HouseholdDetail, then OnApplicationEvent_ViewHousehold (logged with its ids, decision U17); without it
      App_Subscription_ShowUpgradePopUp. */
  /** NavigateTo_HouseholdDetail(HouseholdId), an own action of the block (R3: it stops after the unmount). */
  const navigateToHouseholdDetail = flow.own((householdId: string) => {
    flow.events.onNavigateToHouseholdDetail(householdId);
  });
  const clickedMember = async (householdId: string) => {
    // CheckDirectoryAccess: a module action with a server action (R2), not wrapped.
    if (await checkDirectoryAccess(householdId, DirectoryAPIFilter.Member)) {
      navigateToHouseholdDetail(householdId);
      log.info('ApplicationEvent', {
        Event: 'ViewHousehold',
        TargetHouseholdId: householdId,
        MilestoneId: parameters.current.In_MilestoneId,
        EventId: latest.current.data.EventDetails.Id,
      });
    } else {
      await showUpgradePopUp(); // module action: runs after leaving, as on TST
    }
  };
  const onClickedMember = (householdId: string) => {
    flow.run(() => clickedMember(householdId));
  };

  /** BuildMemberCallData / BuildCallDataMember(Phone, SignedPhotoURL, LocalityId, MemberId, CallName): the popup opens
      loading with the name and photo; GetCacheableMemberContactList([MemberId]). An empty list: Phone, IsLoading False,
      GetCacheableTimezoneInfo(LocalityId) → TimezoneName, TimezoneOffset, Locality and CountryName = CountryName.
      Otherwise: the signed photo when ImageURL is "" (meal blocks only), then Locality, the three phones, TimezoneName,
      TimezoneOffset and CountryName of the first contact. Then IsFetchingTimezone and IsLoading False. */
  const buildMemberCallData = async (
    phone: string,
    signedPhotoURL: string,
    localityId: string,
    memberId: string,
    callName: string,
  ) => {
    phonePopup({
      Name: callName,
      ImageURL: signedPhotoURL,
      ShowPopup: true,
      IsFetchingTimezone: true,
      IsLoading: true,
    });
    const contacts = await getCacheableMemberContactList([memberId]);
    const first = contacts[0];
    if (first === undefined) {
      phonePopup({ IsLoading: false }, { Phone: phone });
      const tz = await getCacheableTimezoneInfo(localityId);
      phonePopup({
        TimezoneName: tz.TimezoneAbreviation,
        TimezoneOffset: Number(tz.OffsetSeconds),
        Locality: tz.CountryName,
        CountryName: tz.CountryName,
      });
    } else {
      if (settings.memberCallSignsPhoto && (latest.current.contactByPhoneData.ContactPopupData?.ImageURL ?? '') === '')
        phonePopup({
          ImageURL: await fetchLegacySignedImageURL(memberId, DirectoryAPIFilter.Member, ImageSigningSize.Small),
        });
      phonePopup(
        {
          Locality: first.LocalityName,
          TimezoneName: first.Timezone.TimezoneLabel,
          TimezoneOffset: Number(first.Timezone.OffsetSeconds),
          CountryName: first.CountryName,
        },
        { MobilePhone: first.MobilePhoneNumber, HomePhone: first.HomePhoneNumber, WorkPhone: first.WorkPhoneNumber },
      );
    }
    phonePopup({ IsFetchingTimezone: false, IsLoading: false });
  };

  const onClickedMemberPhone = (
    phoneNumber: string,
    callName: string,
    localityId: string,
    memberId: string,
    signedPhotoURL: string,
  ) => {
    if (phoneNumber === '') return;
    flow.run(() => buildMemberCallData(phoneNumber, signedPhotoURL, localityId, memberId, callName));
  };

  /** BuildCallDataHost(Phone, SignedPhotoURL, LocalityId, CountryName, HouseholdSurname, HouseholdName): Name,
      Locality = CountryName, Phone, CountryName, ShowPopup and IsFetchingTimezone True;
      GetCacheableTimezoneInfo(LocalityId) and GetCacheableSignedImageURL(the response's HostInformation.HouseholderId,
      Household, Medium) (AccommodationGuest: the photo first); TimezoneName, TimezoneOffset, IsFetchingTimezone False,
      ImageURL. The SignedPhotoURL input is not read. */
  const buildCallDataHost = async (
    phone: string,
    localityId: string,
    countryName: string,
    surname: string,
    name: string,
  ) => {
    phonePopup(
      {
        Name: hostPopupName(name, surname),
        Locality: countryName,
        CountryName: countryName,
        ShowPopup: true,
        IsFetchingTimezone: true,
      },
      { Phone: phone },
    );
    const hostId = latest.current.data.HostInformation.HouseholderId;
    const signPhoto = () => fetchLegacySignedImageURL(hostId, DirectoryAPIFilter.Household, ImageSigningSize.Medium);
    let imageURL = '';
    if (settings.hostCallSignsPhotoFirst) imageURL = await signPhoto();
    const tz = await getCacheableTimezoneInfo(localityId);
    if (!settings.hostCallSignsPhotoFirst) imageURL = await signPhoto();
    phonePopup({
      TimezoneName: tz.TimezoneAbreviation,
      TimezoneOffset: Number(tz.OffsetSeconds),
      IsFetchingTimezone: false,
      ImageURL: imageURL,
    });
  };

  /** OnHandle_ClickedHostPhone(PhoneNumber): with a phone number, BuildCallDataHost with the HostInformation. */
  const onClickedHostPhone = (phoneNumber: string) => {
    if (phoneNumber === '') return;
    const h = latest.current.data.HostInformation;
    flow.run(() => buildCallDataHost(h.Phone, h.LocalityId, h.CountryName, h.HouseholdSurname, h.HouseholdName));
  };

  /** OnHandle_ContactByPhone_Cancel: ShowPopup False. */
  const onContactByPhoneCancel = () => {
    dispatch({ type: 'contactByPhoneChanged', patch: { ShowPopup: false } });
  };

  /** OnHandle_CallClicked(CalledNumber): OnApplicationEvent_CallMember (logged with its ids only, no names or phone
      numbers), then OnHandle_ContactByPhone_Cancel. */
  const onCallClicked = () => {
    log.info('ApplicationEvent', {
      Event: 'CallMember',
      MilestoneId: parameters.current.In_MilestoneId,
      EventId: latest.current.data.EventDetails.Id,
    });
    onContactByPhoneCancel();
  };

  /** OnHandle_ContactHostByMessage: the message popup of the host opens loading (Name, CountryName, Phone =
      MobilePhone, Email, Locality = LocalityName, ShowPopup, IsLoading; IsFetchingTimezone in the meal blocks), then
      GetCacheableTimezoneInfo(HostInformation.LocalityId) and GetCacheableSignedImageURL(HouseholderId, Household,
      Medium): TimezoneName = TimezoneAbreviation, TimezoneOffset = CacheResult.Milliseconds (as compiled; the React
      cache has no timing, so 0, the cache-hit value), IsLoading False, ImageURL. */
  const onContactHostByMessage = () => {
    const h = latest.current.data.HostInformation;
    const fetchingTimezone = settings.messagePopupSetsFetchingTimezone;
    messagePopup(
      {
        Name: hostPopupName(h.HouseholdName, h.HouseholdSurname),
        Locality: h.LocalityName,
        CountryName: h.CountryName,
        ShowPopup: true,
        IsLoading: true,
        ...(fetchingTimezone ? { IsFetchingTimezone: true } : {}),
      },
      { Phone: h.MobilePhone, Email: h.Email },
      h.CountryName,
    );
    flow.run(async () => {
      const tz = await getCacheableTimezoneInfo(h.LocalityId);
      const imageURL = await fetchLegacySignedImageURL(
        h.HouseholderId,
        DirectoryAPIFilter.Household,
        ImageSigningSize.Medium,
      );
      messagePopup({
        TimezoneName: tz.TimezoneAbreviation,
        TimezoneOffset: 0,
        IsLoading: false,
        ImageURL: imageURL,
        ...(fetchingTimezone ? { IsFetchingTimezone: false } : {}),
      });
    });
  };

  /** OnHandle_ContactHostByMessage_Cancel: ShowPopup False. */
  const onContactHostByMessageCancel = () => {
    dispatch({ type: 'contactByMessageChanged', patch: { ShowPopup: false } });
  };

  /** The subject of both helpdesk and e-mail: GetContactHelpdeskSubject_Milestone(In_OrbitMilestoneTypeId,
      In_PreloadEventName, In_PreloadMilestoneName, MilestoneDateTime, EventDetails.Location). */
  const subject = () => {
    const d = latest.current.data;
    const p = parameters.current;
    return getContactHelpdeskSubject_Milestone(
      p.In_OrbitMilestoneTypeId,
      p.In_PreloadEventName,
      p.In_PreloadMilestoneName,
      d.MilestoneDateTime,
      d.EventDetails.Location,
    );
  };

  /** OnHandle_ContactHostByMessage_ClickedEmail: OnHandle_ContactHostByMessage_Cancel, then
      NavigateTo_ContactByEmail(ImageURL, Name, HostInformation.HouseholdSurname, Locality, CountryName, Email, the
      subject, MilestoneTitle, GetFormattedDateTimeById(In_OrbitMilestoneTypeId, MilestoneDateTime)). */
  const onContactHostByMessageClickedEmail = () => {
    onContactHostByMessageCancel();
    const m = latest.current.contactByMessagePopupData.UI_ContactByMessage_WrapperData;
    const c = m.ContactPopupData ?? {};
    const d = latest.current.data;
    flow.events.onNavigateToContactByEmail(
      c.ImageURL ?? '',
      c.Name ?? '',
      d.HostInformation.HouseholdSurname,
      c.Locality ?? '',
      c.CountryName ?? '',
      m.Email ?? '',
      subject(),
      d.MilestoneTitle,
      getFormattedDateTimeById(parameters.current.In_OrbitMilestoneTypeId, d.MilestoneDateTime),
    );
  };

  /** OnHandle_ContactHelpdesk: NavigateTo_ContactHelpdesk(the subject, In_PreloadMilestoneName; MealHost:
      In_PreloadEventName). */
  const onContactHelpdesk = () => {
    const p = parameters.current;
    flow.events.onNavigateToContactHelpdesk(
      subject(),
      settings.helpdeskEventNameIsEventName ? p.In_PreloadEventName : p.In_PreloadMilestoneName,
    );
  };

  /** OnClick_GuestArrangements(MemberId, HasGuestArrangements): with guest arrangements,
      NavigateTo_GuestArrangements(MemberId, In_OrbitMilestoneTypeId, AccommodationData.MilestoneTitle, In_HostId). */
  const onClickGuestArrangements = (memberId: string, hasGuestArrangements: boolean) => {
    if (!hasGuestArrangements) return;
    const p = parameters.current;
    flow.events.onNavigateToGuestArrangements(
      memberId,
      p.In_OrbitMilestoneTypeId,
      latest.current.data.MilestoneTitle,
      p.In_HostId,
    );
  };

  return {
    data: state.data,
    isFetchingData: state.isFetchingData,
    isDataFetched: state.isDataFetched,
    hasData: state.hasData,
    isFetchingCaptionData: state.isFetchingCaptionData,
    householdCaptions: state.householdCaptions,
    contactByPhoneData: state.contactByPhoneData,
    contactByMessageData: state.contactByMessagePopupData.UI_ContactByMessage_WrapperData,
    getSignedImageURL: fetchLegacySignedImageURL,
    onClickedMember,
    onClickedMemberPhone,
    onClickedHostPhone,
    onContactByPhoneCancel,
    onCallClicked,
    onContactHostByMessage,
    onContactHostByMessageCancel,
    onContactHostByMessageClickedEmail,
    onContactHelpdesk,
    onClickGuestArrangements,
  };
}
