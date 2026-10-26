import { useRef } from 'react';
import { fetchHelperDetails, type HelperData } from '@/api/event';
import { fetchLegacySignedImageURL } from '@/api/image';
import type { ContactByPhonePopupData } from '@/components/contact/ContactPopupByPhone/types';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import { getCacheableMemberContactList, getCacheableTimezoneInfo } from '@/lib/legacyShared/actions';
import { checkDirectoryAccess, type GetCacheableSignedImageURL } from '@/lib/orbit/actions';
import { DirectoryAPIFilter, ImageSigningSize } from '@/lib/orbit/staticEntities';
import {
  getContactHelpdeskSubject_Event,
  onApplicationEvent_CallMember,
  onApplicationEvent_ViewHousehold,
} from './helperDetailsActions';
import {
  helperDetailsCallInputs,
  helperDetailsReducer,
  INITIAL_HELPER_DETAILS_STATE,
  restoreHelperDetailsState,
  type ContactPopupData,
  type HelperDetailsAction,
  type HelperDetailsInputs,
} from './helperDetailsState';

/** The flows of ScreenBlock_HelperDetails: OnReady (GetHelperDetails), the member cards (directory access, the call
    popup), the call and the helpdesk. The page calls this hook at the place of the block and gives the result to
    HelperDetailsView.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails */

/** The events of the block, which the screen handles. */
export interface HelperDetailsEvents {
  /** Event NavigateTo_HouseholdDetail(HouseholdId). */
  onNavigateToHouseholdDetail: (householdId: string) => void;
  /** Event NavigateTo_ContactHelpdesk(Subject, EventName). */
  onNavigateToContactHelpdesk: (subject: string, eventName: string) => void;
}

/** What the view reads, and its handlers. */
export interface HelperDetailsFlows {
  /** HelperData: the event and its helpers by role. */
  helperData: HelperData;
  isFetchingData: boolean;
  /** GetHelperDetails.IsDataFetched. */
  isDataFetched: boolean;
  /** ContactByPhoneData: the input of ContactPopup_ByPhone. */
  contactByPhoneData: ContactByPhonePopupData;
  /** The photo source of the member cards: Connect2_LegacyShared GetCacheableSignedImageURL. */
  getSignedImageURL: GetCacheableSignedImageURL;
  /** OnHandle_ClickedMember(HouseholdId), the ClickedMember event of a member card. */
  onClickedMember: (householdId: string) => void;
  /** OnHandle_ClickedMemberPhone(PhoneNumber, CallName, LocalityId, MemberId, SignedPhotoURL), the ClickedPhone event
      of a member card. */
  onClickedMemberPhone: (
    phoneNumber: string,
    callName: string,
    localityId: string,
    memberId: string,
    signedPhotoURL: string,
  ) => void;
  /** OnHandle_ContactByPhone_Cancel, the Cancel event of the call popup. */
  onContactByPhoneCancel: () => void;
  /** OnHandle_CallClicked, the Call event of the call popup. */
  onCallClicked: () => void;
  /** OnHandle_ContactHelpdesk, the OnClick of ContactHelpdesk_Footer. */
  onContactHelpdesk: () => void;
}

/** The state and the flows of the helpers of a hosting household. The state comes from useFlowState and the view cache
    keeps it; a restored view starts from its saved state with the call popup closed.
    - OnReady runs before the first paint (`beforePaint`, decision W28), as the old port and the OutSystems block (its
      OnReady runs when the block mounts): a view restored from the cache does nothing (pattern P-BACK).
      Otherwise IsFetchingData True, GetHelperDetails (the block variables of that moment), then
      OnAfterFetch_GetHelperHost (HelperData) and IsFetchingData False. A failure goes to the flow handler. The flow
      runs once, also under StrictMode.
    - Decision W23: `isAlive` guards the state writes only. A flow that started runs to its end after the unmount: its
      server calls, the navigation of OnHandle_ClickedMember, the upgrade popup, the application events and the flow
      handler of a failure. */
export function useHelperDetails(inputs: HelperDetailsInputs, events: HelperDetailsEvents): HelperDetailsFlows {
  /** The block is there. OnReady (before paint) gets a check that is true until the unmount; the event flows use the
      same one. They cannot start before OnReady, which runs at the mount. */
  const blockAlive = useRef<IsAlive>(() => true);
  const {
    state,
    dispatch,
    latest,
    parameters,
    events: eventsRef,
  } = useFlowState({
    viewName: 'Orbit_ScreenBlocks.ScreenBlock_HelperDetails',
    reducer: helperDetailsReducer,
    initial: INITIAL_HELPER_DETAILS_STATE,
    restore: restoreHelperDetailsState,
    parameters: inputs,
    events,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (isAlive, restored) => {
      blockAlive.current = isAlive;
      return onReady(restored);
    },
    beforePaint: true,
  });

  /** A state write, skipped after the unmount (W23). */
  const write = (action: HelperDetailsAction) => {
    if (blockAlive.current()) dispatch(action);
  };

  /** OnReady, then RefreshData. */
  const onReady = async (restored: boolean) => {
    if (restored) return;
    write({ type: 'fetchStarted' });
    const helperData = await fetchHelperDetails(helperDetailsCallInputs(latest.current, parameters.current));
    write({ type: 'helperDetailsFetched', helperData });
    write({ type: 'fetchEnded' });
  };

  const popup = (patch: Partial<ContactPopupData>) => {
    write({ type: 'contactPopupChanged', patch });
  };

  /** OnHandle_ClickedMember(HouseholdId, Type = DirectoryAPIFilter.Member): CheckDirectoryAccess; with access
      NavigateTo_HouseholdDetail, then OnApplicationEvent_ViewHousehold; without it App_Subscription_ShowUpgradePopUp. */
  const onClickedMember = (householdId: string) => {
    void (async () => {
      try {
        const hasAccess = await checkDirectoryAccess(householdId, DirectoryAPIFilter.Member);
        if (hasAccess) {
          eventsRef.current.onNavigateToHouseholdDetail(householdId);
          onApplicationEvent_ViewHousehold(householdId, parameters.current.In_EventId);
        } else {
          await showUpgradePopUp();
        }
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
  };

  /** BuildMemberCallData(Phone, SignedPhotoURL, LocalityId, MemberId, CallName): the popup opens loading with the name
      and the photo; GetCacheableMemberContactList([MemberId]). An empty list: Phone, IsLoading False,
      GetCacheableTimezoneInfo(LocalityId) → TimezoneName = TimezoneAbreviation, TimezoneOffset = OffsetSeconds,
      Locality and CountryName = CountryName. Otherwise (Phone is not set, as compiled): the signed photo when ImageURL
      is "", then from the first contact Locality = LocalityName, Mobile / Home / Work phone, TimezoneName =
      Timezone.TimezoneLabel, TimezoneOffset = Timezone.OffsetSeconds and CountryName. Then IsFetchingTimezone and
      IsLoading False. */
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

  /** OnHandle_ClickedMemberPhone: with a phone number, BuildMemberCallData. */
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
    popup({ ShowPopup: false });
  };

  /** OnHandle_CallClicked(CalledNumber): OnApplicationEvent_CallMember, then OnHandle_ContactByPhone_Cancel. */
  const onCallClicked = () => {
    onApplicationEvent_CallMember(parameters.current.In_EventId);
    onContactByPhoneCancel();
  };

  /** OnHandle_ContactHelpdesk: NavigateTo_ContactHelpdesk(GetContactHelpdeskSubject_Event(In_PreloadEventName,
      EventDetails.StartDate, EventDetails.EndDate, EventDetails.Location), In_PreloadEventName). */
  const onContactHelpdesk = () => {
    const e = latest.current.helperData.EventDetails;
    const eventName = parameters.current.In_PreloadEventName;
    eventsRef.current.onNavigateToContactHelpdesk(
      getContactHelpdeskSubject_Event(eventName, e.StartDate, e.EndDate, e.Location),
      eventName,
    );
  };

  return {
    helperData: state.helperData,
    isFetchingData: state.isFetchingData,
    isDataFetched: state.isDataFetched,
    contactByPhoneData: state.contactByPhoneData,
    getSignedImageURL: fetchLegacySignedImageURL,
    onClickedMember,
    onClickedMemberPhone,
    onContactByPhoneCancel,
    onCallClicked,
    onContactHelpdesk,
  };
}
