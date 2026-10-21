// @os-block Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2
import { useEffect, useReducer, useRef, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { OSList } from '../../../components/OSList';
import { osImage } from '../../../lib/os-assets';
import { UserException } from '../../../lib/os-exceptions';
import { Layout } from '../../../shared/Connect2_LegacyShared/Layout';
import { MenuIcon__UpdatedOSUI } from '../../../shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { MenuAction } from '../../../shared/Connect2_LegacyShared/lib/staticEntities';
import { EventDetail_SubSection } from '../../../shared/Connect2_OrbitMobile_MUI/EventDetail_SubSection';
import { ErrorScreen } from '../../../shared/Connect2_OrbitMobile_MUI/ErrorScreen';
import { ContactByMessage_Wrapper } from '../../../shared/UBTConnect_Utils/ContactByMessage_Wrapper';
import { ContactPopup_ByPhone } from '../../../shared/UBTConnect_Utils/ContactPopup_ByPhone';
import { Dialog_AccessRestrictedAction_Legacy } from '../../../shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import { cleanAddressForMaps, getOperatingSystem } from '../../../shared/UBTConnect_Utils/lib/actions';
import type {
  ContactByPhonePopupData,
  UI_ContactByMessage_WrapperData,
} from '../../../shared/UBTConnect_Utils/lib/structures';
import { showUpgradePopUp } from '../../../shell/dialogs';
import { exceptionMessage, isSystemException, raiseToFlowHandler } from '../../../shell/exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '../../../shell/feedback';
import { useViewState, useWasRestoredFromCache } from '../../../shell/navigation';
import { getCoordinatorDetails, getEventByEventId, getHouseholdCoordinates, type EventDetailVariables } from '../api';
import type { CoordinatorDetailsData, EventDetail, SpecialNeedsItem } from '../types';
import { EventDetail_Banner } from './EventDetail_Banner';
import { EventDetail_HostCard } from './EventDetail_HostCard';
import { EventDetail_ListItem } from './EventDetail_ListItem';
import { EventDetail_Section } from './EventDetail_Section';
import { EventDetail_SpecialNeeds_ListItem } from './EventDetail_SpecialNeeds_ListItem';
import { EventsDetail_Content } from './EventsDetail_Content';
import { flipHouseholdName } from '../../../shared/Connect2_LegacyShared/lib/actions';
import {
  addAuditEvent_LDM,
  getCurrentTimeInMill,
  getLocalityName,
} from '../../../shared/Connect2_OrbitMobile_MUI/lib/actions';
import { formatDateForEventBanner } from './actions';

/** Block variables the view reads (ScreenBlock_EventDetail_V2.mvc.js = SB, model :46-100) and the two data actions. */
interface Model {
  isFetching: boolean;
  minBannerHeight: number;
  hasInformation: boolean;
  contactByPhoneData: ContactByPhonePopupData;
  /** ContactByMessagePopupData.UI_ContactByMessage_WrapperData (its CountryName is not read). */
  contactByMessageData: UI_ContactByMessage_WrapperData;
  contactByMessageIsCoordinator: boolean;
  /** GetEventByEventId.EventResponse (record defaults until fetched). */
  event: EventDetail | null;
  /** GetEventByEventId.HasFetchError. */
  hasEventFetchError: boolean;
  /** GetCoordinatorDetails outputs (Out_HasContent defaults to True, SB model :15-17). */
  coordinator: CoordinatorDetailsData | null;
}

/** SquarePhotoPx, MaxPhotoWidth, MaxPhotoHeight, MinBannerHeight defaults (SB model :57-71). */
const SQUARE_PHOTO_PX = 45;
const MAX_PHOTO_WIDTH = 100;
const MAX_PHOTO_HEIGHT = 55;
const MIN_BANNER_HEIGHT = 210;

const INITIAL_MODEL: Model = {
  isFetching: true,
  minBannerHeight: MIN_BANNER_HEIGHT,
  hasInformation: false,
  contactByPhoneData: {},
  contactByMessageData: {},
  contactByMessageIsCoordinator: false,
  event: null,
  hasEventFetchError: false,
  coordinator: null,
};

/** Arguments of NavigateTo_ContactByEmail (SB :1932-1963). */
export interface ContactByEmailArgs {
  avatarURL: string;
  contactName: string;
  contactLocality: string;
  contactCountry: string;
  emailTo: string;
  isCoordinator: boolean;
  subject: string;
  /** Event_Date: TextToDate(Host.EventDate), "YYYY-MM-DD". */
  date: string;
  locality: string;
}

export interface ScreenBlock_EventDetail_V2Props {
  id: string;
  inputs: EventDetailVariables;
  bottomBar?: ReactNode;
  commonUIElements?: ReactNode;
  /** Event NavigateTo_HouseholdCarousel(Household_Id, …, HouseholdIdList). */
  onNavigateToHouseholdCarousel: (householdId: string, householdIdList: string[]) => void;
  /** Event NavigateTo_HouseholdDetail(Event_HouseholdId). */
  onNavigateToHouseholdDetail: (householdId: string) => void;
  /** Event NavigateTo_WebMaps(api, query). */
  onNavigateToWebMaps: (api: number, query: string) => void;
  /** Event NavigateTo_ContactByEmail. */
  onNavigateToContactByEmail: (args: ContactByEmailArgs) => void;
}

/** The date part ("YYYY-MM-DD") of an OutSystems Date Time text; '' without one. */
const datePart = (text: string): string => /^\d{4}-\d{2}-\d{2}/.exec(text)?.[0] ?? '';

/** LDM event detail (analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2
    .mvc.js = SB; view :219-1318, controller :1320-2700). Layout with the back MenuIcon and the date title (empty while
    fetching, "No Event Available" without information or on a fetch error); Content: the fetch error → ErrorScreen;
    fetching → the list-updating loader; no information → ErrorScreen; else EventsDetail_Content with the banner, the
    host card for a guest, and (Q1) the Special Needs section for a host with needs and the Guest Households section
    of a published allocation; then the two contact popups; Dialog_AccessRestrictedAction_Legacy after the Layout.
    GetCoordinatorDetails and GetEventByEventId are fetched at start; OnReady (SB :1989-2066): restored → nothing; else
    IsFetching True, GetEventByEventId (OnAfterFetch :1768-1795: HasInformation = Out_HasContent, IsFetching False),
    AddAuditRequestAPIEvent(RequestAPI_EventDetail). */
export function ScreenBlock_EventDetail_V2({
  id,
  inputs,
  bottomBar,
  commonUIElements,
  onNavigateToHouseholdCarousel,
  onNavigateToHouseholdDetail,
  onNavigateToWebMaps,
  onNavigateToContactByEmail,
}: ScreenBlock_EventDetail_V2Props) {
  const scope = id.replace('$', '');
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () => {
      if (restored && saved) {
        // OnInitialize (SB :1418-1445): both contact popups closed.
        return {
          ...saved,
          contactByPhoneData: {
            ...saved.contactByPhoneData,
            ContactPopupData: { ...saved.contactByPhoneData.ContactPopupData, ShowPopup: false },
          },
          contactByMessageData: {
            ...saved.contactByMessageData,
            ContactPopupData: { ...saved.contactByMessageData.ContactPopupData, ShowPopup: false },
          },
        };
      }
      return INITIAL_MODEL;
    },
  );
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /* Fetch at start (GetCoordinatorDetails, then GetEventByEventId) and OnReady. */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved) return;
    getCoordinatorDetails(inputs)
      .then((coordinator) => {
        set({ coordinator });
      })
      .catch(() => {
        // GetCoordinatorDetails keeps its defaults (Out_HasContent True); the view does not read its fetch error.
      });
    void (async () => {
      const start = getCurrentTimeInMill();
      try {
        const out = await getEventByEventId(inputs);
        // OnAfterFetch_GetEventByEventId: HasInformation = Out_HasContent; Toggle_IsFetching(False).
        set({ event: out.eventResponse, hasEventFetchError: false, hasInformation: out.hasContent, isFetching: false });
        addAuditEvent_LDM('RequestAPI_EventDetail', { RequestTime: String(getCurrentTimeInMill() - start) });
      } catch (e) {
        set({ hasEventFetchError: true });
        raiseToFlowHandler(e);
      }
    })();
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const host = state.event?.Host;
  const guests = state.event?.Guests ?? [];
  const needs = state.event?.SpecialNeeds ?? { Diet: [], Mobility: [], Other: [] };
  const isCoordinatorAvailable = state.coordinator?.hasContent ?? true;

  /** OnHandle_ContactByMessage(Event_ContactPopupData, Event_CountryName, Event_IsCoordinator) (SB :1702-1767). */
  const onHandleContactByMessage = (data: UI_ContactByMessage_WrapperData, isCoordinator: boolean) => {
    set({ contactByMessageData: data, contactByMessageIsCoordinator: isCoordinator });
  };
  /** OnHandle_ContactByMessage_Cancel (SB :1907-1931). */
  const closeContactByMessage = () => {
    const d = m().contactByMessageData;
    set({ contactByMessageData: { ...d, ContactPopupData: { ...d.ContactPopupData, ShowPopup: false } } });
  };
  /** OnHandle_ContactByPhone_Cancel (SB :1446-1470); _Call (SB :1964-1988) runs it too. */
  const closeContactByPhone = () => {
    const d = m().contactByPhoneData;
    set({ contactByPhoneData: { ...d, ContactPopupData: { ...d.ContactPopupData, ShowPopup: false } } });
  };
  /** OnHandle_ContactByMessage_ClickedEmail (SB :1932-1963): close the popup, then NavigateTo_ContactByEmail with the
      popup's data, Subject = LDMEventName + " - " + the coordinator's event date, the meal's date and locality. */
  const onHandleContactByMessageClickedEmail = () => {
    const s = m();
    closeContactByMessage();
    const c = s.contactByMessageData.ContactPopupData ?? {};
    const cd = s.coordinator?.coordinatorDetails;
    onNavigateToContactByEmail({
      avatarURL: c.ImageURL ?? '',
      contactName: c.Name ?? '',
      contactLocality: c.Locality ?? '',
      contactCountry: c.CountryName ?? '',
      emailTo: s.contactByMessageData.Email ?? '',
      isCoordinator: s.contactByMessageIsCoordinator,
      subject: `${cd?.LDMEventName ?? ''} - ${datePart(cd?.EventDate ?? '')}`,
      date: datePart(s.event?.Host.EventDate ?? ''),
      locality: s.event?.Host.EventLocalityName ?? '',
    });
  };

  /** Contact data of the host (OnHandle_ContactHost_Message / _Call, SB :1796-1863, :2327-2409). */
  const hostContactPopupData = () => {
    const h = m().event?.Host;
    return {
      ImageURL: h?.SignedURL ?? '',
      Name: flipHouseholdName(h?.HouseholderName ?? ''),
      Locality: getLocalityName(h?.EventLocalityName ?? ''),
      TimezoneName: h?.Timezone.TimezoneLabel ?? '',
      TimezoneOffset: Number(h?.Timezone.OffsetSeconds ?? '0'),
      ShowPopup: true,
      CountryName: h?.CountryName ?? '',
    };
  };
  /** OnHandle_ContactHost_Message (SB :1796-1863). */
  const onHandleContactHostMessage = () => {
    const h = m().event?.Host;
    onHandleContactByMessage(
      { Email: h?.Email ?? '', Phone: h?.MobilePhone ?? '', ContactPopupData: hostContactPopupData() },
      false,
    );
  };
  /** OnHandle_ContactHost_Call (SB :2327-2409): Phone = Host.Phone only when the mobile, home and work phones are all
      empty; then OnHandle_ContactByPhone. */
  const onHandleContactHostCall = () => {
    const h = m().event?.Host;
    const mobile = h?.MobilePhone ?? '';
    const home = h?.HomePhone ?? '';
    const work = h?.WorkPhone ?? '';
    set({
      contactByPhoneData: {
        ContactPopupData: hostContactPopupData(),
        Phone: mobile + home + work === '' ? (h?.Phone ?? '') : '',
        MobilePhone: mobile,
        HomePhone: home,
        WorkPhone: work,
      },
    });
  };
  /** OnHandle_ContactOrganiser (SB :2470-2523): AddAuditEventDetailEvent(ContactEventOrganiser), then the coordinator in
      the message popup (combined email and phone, the LDM logo, "Contact"). */
  const onHandleContactOrganiser = () => {
    const cd = m().coordinator?.coordinatorDetails;
    addAuditEvent_LDM('ContactEventOrganiser', { EventDate: datePart(m().event?.Host.EventDate ?? '') });
    onHandleContactByMessage(
      {
        Email: cd?.CoordinatorEmail ?? '',
        Phone: cd?.CoordinatorPhoneNumber ?? '',
        IsComboEmailAndPhone: true,
        ContactPopupData: {
          ImageURL: osImage('img/Connect2_OrbitMobile_MUI.LDM_Logo.svg'),
          IsAvatarImage: false,
          ActionName: 'Contact',
          Name: cd?.CoordinatorName ?? '',
          Locality: cd?.LocalityName ?? '',
          TimezoneName: cd?.Timezone.TimezoneLabel ?? '',
          TimezoneOffset: Number(cd?.Timezone.OffsetSeconds ?? '0'),
          ShowPopup: true,
          DisplayContactNumber: cd?.CoordinatorPhoneNumber ?? '',
        },
      },
      true,
    );
  };

  /** OnHandle_HostInformation(IsHousholdDisplayed) (SB :2410-2469): a displayed host: disabled record →
      App_Subscription_ShowUpgradePopUp, else NavigateTo_HouseholdDetail(Host.HouseholderID). */
  const onHandleHostInformation = async (isHouseholdDisplayed: boolean) => {
    const h = m().event?.Host;
    if (!isHouseholdDisplayed || !h) return;
    if (h.RecordDisabled) await showUpgradePopUp();
    else onNavigateToHouseholdDetail(h.HouseholderID);
  };

  /** OnHandle_GoToHousehold (SB :1509-1664): a displayed household: disabled record → App_Subscription_ShowUpgradePopUp;
      else AddAuditEventDetailEvent (HostClickedGuestHousehold / GuestClickedOtherGuestHousehold) and
      NavigateTo_HouseholdCarousel with every guest's HouseholderID (CarouselFilteredEventResults only lowers the row
      number, which the screen does not use). */
  const onHandleGoToHousehold = async (householdId: string, recordDisabled: boolean, isHouseholdDisplayed: boolean) => {
    if (!isHouseholdDisplayed) return;
    if (recordDisabled) {
      await showUpgradePopUp();
      return;
    }
    const hosting = m().event?.Host.Hosting ?? false;
    addAuditEvent_LDM(hosting ? 'HostClickedGuestHousehold' : 'GuestClickedOtherGuestHousehold', {
      HouseholdId: householdId,
    });
    onNavigateToHouseholdCarousel(
      householdId,
      (m().event?.Guests ?? []).map((g) => g.HouseholderID),
    );
  };

  /** OnHandle_HostCardAddress (SB :2103-2326): online, with the host's and the main hall's addresses:
      GetHouseholdCoordinates(Host.HouseholderID); Destination = its coordinates (UseCoordinates, both not 0) or the
      encoded clean host address; Origin = the main hall coordinates (MainHallUseLatLong, both not "") or its encoded
      clean address; AddAuditEventDetailEvent(MyTimelineGoogleMapsDirections); the web branch (GetOperatingSystem is
      Other without Cordova) NavigateTo_WebMaps(1, "&origin=…&destination=…&travelmode=driving"). Without addresses
      "Map is not available", offline "Please check your network connection and try again" (Info). A failure raises
      GoogleMapsNotInstalled ("application not found for uri.") or UnknownError. */
  const onHandleHostCardAddress = async () => {
    const h = m().event?.Host;
    if (!navigator.onLine) {
      showFeedbackMessage('Please check your network connection and try again', PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    if (!h || h.FormattedAddress === '' || h.MainHallFormattedAddress === '') {
      showFeedbackMessage('Map is not available', PLATFORM_MESSAGE_TYPE.info);
      return;
    }
    try {
      const coordinates = await getHouseholdCoordinates(h.HouseholderID);
      const hostAddress = cleanAddressForMaps(h.FormattedAddress);
      const mainHallAddress = cleanAddressForMaps(h.MainHallFormattedAddress);
      const destination =
        coordinates.UseCoordinates && Number(coordinates.Longitude) !== 0 && Number(coordinates.Latitude) !== 0
          ? `${coordinates.Latitude},${coordinates.Longitude}`
          : encodeURIComponent(hostAddress);
      const origin =
        h.MainHallUseLatLong && h.MainHallLongititude !== '' && h.MainHallLatitude !== ''
          ? `${h.MainHallLatitude},${h.MainHallLongititude}`
          : encodeURIComponent(mainHallAddress);
      const mapsAddress = `&origin=${origin}&destination=${destination}&travelmode=driving`;
      getOperatingSystem();
      addAuditEvent_LDM('MyTimelineGoogleMapsDirections', { EventDate: datePart(h.EventDate) });
      onNavigateToWebMaps(1, mapsAddress);
    } catch (e) {
      if (isSystemException(e)) throw e;
      const message = exceptionMessage(e);
      if (message.toLowerCase() === 'application not found for uri.')
        throw new UserException(
          'Please install and enable Google Maps',
          'Connect2_OrbitMobile_MUI.GoogleMapsNotInstalled',
        );
      throw new UserException(message, 'Connect2_OrbitMobile_MUI.UnknownError');
    }
  };

  const specialNeedsList = (key: 'Dietary' | 'Mobility' | 'Other', items: SpecialNeedsItem[]) => (
    <OSList
      id={`${scope}-List_${key}`}
      className="list list-group event-detail-list"
      animateItems
      source={items}
      keyOf={(n) => `${n.Memberid}-${n.Name}`}
    >
      {(n, row) => (
        <EventDetail_SpecialNeeds_ListItem
          id={`${scope}-SpecialNeeds_ListItem_${key}`}
          scope={`${scope}-SpecialNeeds_ListItem_${key}`}
          maxPhotoPx={SQUARE_PHOTO_PX}
          inGuestURL={n.SignedUrl}
          inHasBottomBorder={row < items.length - 1}
          title={
            <span className="bold font-size-0-9em" data-expression="">
              {n.FullName}
            </span>
          }
          info={
            <>
              <div className="font-size-0-8em text-neutral-7" data-container="">
                <span data-expression="">{n.Name}</span>
              </div>
              <div className="font-size-0-8em text-neutral-7" data-container="">
                <span data-expression="">{n.Notes}</span>
              </div>
            </>
          }
        />
      )}
    </OSList>
  );

  const content = (() => {
    if (state.hasEventFetchError)
      return <ErrorScreen id={`${scope}-$b16`} inErrorMessage="No event information." inMatchMainContentHeight />;
    if (state.isFetching)
      return (
        <div className="list-updating-cont" data-container="" id={`${scope}-MarkReadLoading`}>
          <div className="list-updating" data-container="" />
        </div>
      );
    if (!state.hasInformation || !host)
      return <ErrorScreen id={`${scope}-$b15`} inErrorMessage="No event information." inMatchMainContentHeight />;
    const hasNeeds = needs.Mobility.length > 0 || needs.Diet.length > 0 || needs.Other.length > 0;
    return (
      <EventsDetail_Content
        id={`${scope}-$b3`}
        scope={`${scope}-b3`}
        inMinBannerHeight={state.minBannerHeight}
        banner={
          <EventDetail_Banner
            id={`${scope}-$b4`}
            inImageURL={host.SignedHallPhoto}
            inEventLocation={host.EventLocalityName}
            inAdults={host.Adults}
            inChildren={host.Children}
            inIsCoordinatorAvailable={isCoordinatorAvailable}
            inIsHost={host.Hosting}
            inEventDate={host.EventDate}
            inMinHeight={state.minBannerHeight}
            onContactOrganiser={onHandleContactOrganiser}
            onSetContainerHeight={(bannerHeight) => {
              // OnHandle_SetContainerHeight (SB :1864-1906): only a changed height.
              if (bannerHeight !== m().minBannerHeight) set({ minBannerHeight: bannerHeight });
            }}
          />
        }
        guestView={
          !host.Hosting ? (
            <EventDetail_HostCard
              id={`${scope}-$b5`}
              scope={`${scope}-b5`}
              inHostURL={host.SignedURL}
              inHostEmail={host.Email}
              inIsHost={host.Hosting}
              inAddress={host.FormattedAddress}
              maxPhotoHeight={MAX_PHOTO_HEIGHT}
              inIsAssigned={host.IsPublished}
              inHostName={host.HouseholderName}
              maxPhotoWidth={MAX_PHOTO_WIDTH}
              inPhone={host.Phone}
              householdDisplay={host.HouseholdDisplay}
              onHostInformation={(displayed) => {
                onHandleHostInformation(displayed).catch(raiseToFlowHandler);
              }}
              onNavigateToEmailHousehold={onHandleContactHostMessage}
              onCallPhone={onHandleContactHostCall}
              onAddress={() => {
                onHandleHostCardAddress().catch(raiseToFlowHandler);
              }}
            />
          ) : null
        }
        content={
          <>
            {host.Hosting && hasNeeds ? (
              <EventDetail_Section
                id={`${scope}-Detail_SpecialNeeds`}
                scope={`${scope}-b6`}
                inIsHost={host.Hosting}
                inTitle="Special Needs"
              >
                {needs.Diet.length > 0 ? (
                  <EventDetail_SubSection id={`${scope}-SubSection_Dietary`} inTitle="Dietary" inHasBottomBorder>
                    {specialNeedsList('Dietary', needs.Diet)}
                  </EventDetail_SubSection>
                ) : null}
                {needs.Mobility.length > 0 ? (
                  <EventDetail_SubSection id={`${scope}-SubSection_Mobility`} inTitle="Mobility" inHasBottomBorder>
                    {specialNeedsList('Mobility', needs.Mobility)}
                  </EventDetail_SubSection>
                ) : null}
                {needs.Other.length > 0 ? (
                  <EventDetail_SubSection id={`${scope}-SubSection_Other`} inTitle="Other" inHasBottomBorder>
                    {specialNeedsList('Other', needs.Other)}
                  </EventDetail_SubSection>
                ) : null}
              </EventDetail_Section>
            ) : null}
            {host.IsPublished && guests.length > 0 ? (
              <EventDetail_Section
                id={`${scope}-Detail_GuestsHouseholds`}
                scope={`${scope}-b13`}
                inTitle="Guest Households"
                inIsHost={host.Hosting}
                inHasBottomBorder
              >
                <OSList
                  id={`${scope}-List_Guests`}
                  className="list list-group event-detail-list"
                  animateItems
                  source={guests}
                  keyOf={(g) => g.EventGuestID}
                >
                  {(g, row) => (
                    <EventDetail_ListItem
                      id={`${scope}-ListItem_Guests`}
                      scope={`${scope}-b14`}
                      inMaxPhotoWidth={MAX_PHOTO_WIDTH}
                      isHosting={host.Hosting}
                      guest={g}
                      inMaxPhotoHeight={MAX_PHOTO_HEIGHT}
                      inHasBottomBorder={row < guests.length - 1}
                      onClickMessage={(data) => {
                        onHandleContactByMessage(data, false);
                      }}
                      onClicked={(displayed) => {
                        onHandleGoToHousehold(g.HouseholderID, g.RecordDisabled, displayed).catch(raiseToFlowHandler);
                      }}
                      onClickPhoneCall={(data) => {
                        // OnHandle_ContactByPhone (SB :1471-1508): ContactByPhoneData = Event_PhoneCallInfo.
                        set({ contactByPhoneData: data });
                      }}
                    />
                  )}
                </OSList>
              </EventDetail_Section>
            ) : null}
          </>
        }
      />
    );
  })();

  return (
    <OSBlock name="LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2" id={id}>
      <Layout
        id={`${scope}-$b1`}
        menu={<div id={`${scope}-Menu`} />}
        headerLeft={<MenuIcon__UpdatedOSUI id={`${scope}-$b2`} menuAction={MenuAction.Back} />}
        title={
          <div className="text-align-center" data-container="">
            {!state.isFetching ? (
              <span data-expression="">
                {!state.hasInformation || state.hasEventFetchError
                  ? 'No Event Available'
                  : formatDateForEventBanner(host?.EventDate ?? '')}
              </span>
            ) : null}
          </div>
        }
        content={
          <>
            {content}
            <ContactPopup_ByPhone
              id={`${scope}-$b17`}
              inCallPopupData={state.contactByPhoneData}
              onEventCall={closeContactByPhone}
              onEventCancel={closeContactByPhone}
            />
            <ContactByMessage_Wrapper
              id={`${scope}-$b18`}
              inContactPopupData={state.contactByMessageData}
              onEventCancel={closeContactByMessage}
              onEventEmail={onHandleContactByMessageClickedEmail}
              onEventMessageChannel={closeContactByMessage}
              onEventCall={closeContactByMessage}
            />
          </>
        }
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
      <Dialog_AccessRestrictedAction_Legacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b19`} />
    </OSBlock>
  );
}
