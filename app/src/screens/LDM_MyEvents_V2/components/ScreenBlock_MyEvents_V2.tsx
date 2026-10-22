// @os-block Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2
import { useEffect, useReducer, useRef, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { NotRegisteredException, UserException } from '../../../lib/os-exceptions';
import { Layout } from '../../../shared/Connect2_LegacyShared/Layout';
import { MenuIcon__UpdatedOSUI } from '../../../shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { MenuAction } from '../../../shared/Connect2_LegacyShared/lib/staticEntities';
import { ContactByMessage_Wrapper } from '../../../shared/UBTConnect_Utils/ContactByMessage_Wrapper';
import { ContactPopup_ByPhone } from '../../../shared/UBTConnect_Utils/ContactPopup_ByPhone';
import { Dialog_AccessRestrictedAction_Legacy } from '../../../shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import type {
  ContactByPhonePopupData,
  UI_ContactByMessage_WrapperData,
} from '../../../shared/UBTConnect_Utils/lib/structures';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { exceptionMessage, isSystemException, raiseToFlowHandler } from '@/legacy/os/exceptions';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getEventsForMyTimeline } from '../api';
import type { EventCalendar, EventCalendarFiltersAsText, TimelineEventGroup } from '../types';
import type { HouseholdClick } from './EventCard_V2';
import { MyEvents_MyTimelineFilterButton } from './MyEvents_MyTimelineFilterButton';
import { MyTimeline_V2 } from './MyTimeline_V2';
import { addAuditEvent_LDM, getCurrentTimeInMill } from '../../../shared/Connect2_OrbitMobile_MUI/lib/actions';
import { EventView_MyTimeline, addDays, addMonths, diffDays, toOsDate } from './actions';

/** Block variables the view reads (ScreenBlock_MyEvents_V2.mvc.js model :46-100) and the fetch error of
    GetEventsForMyTimeline. */
interface Model {
  pastEventsData: TimelineEventGroup[];
  upcomingEventsData: EventCalendar[];
  pastEventFilters: EventCalendarFiltersAsText;
  isFetchingMyTimeline: boolean;
  isFiltering: boolean;
  /** GetEventsForMyTimeline.HasFetchError. */
  hasFetchError: boolean;
  contactByPhoneData: ContactByPhonePopupData;
  /** ContactByMessagePopupData.UI_ContactByMessage_WrapperData (its CountryName is not read). */
  contactByMessageData: UI_ContactByMessage_WrapperData;
}

/** DefaultDateRangeInMonths (model :78-80). */
const DEFAULT_DATE_RANGE_IN_MONTHS = 24;
/** OnScrollEnding_MyTimeline.MaxAgeDaysFetchThreshold (ctrl :1678-1686). */
const MAX_AGE_DAYS_FETCH_THRESHOLD = 7300;

const INITIAL_MODEL: Model = {
  pastEventsData: [],
  upcomingEventsData: [],
  pastEventFilters: { FromDate: '', ToDate: '', Localities: [] },
  isFetchingMyTimeline: false,
  isFiltering: false,
  hasFetchError: false,
  contactByPhoneData: {},
  contactByMessageData: {},
};

export interface ScreenBlock_MyEvents_V2Props {
  id: string;
  bottomBar?: ReactNode;
  commonUIElements?: ReactNode;
  /** Event NavigateTo_EventDetail(EventHostId, EventId). */
  onNavigateToEventDetail: (eventHostId: string, eventId: string) => void;
  /** Event NavigateTo_HouseholdCarousel(In_HouseholdId, …, In_HouseholdIdList). */
  onNavigateToHouseholdCarousel: (householdId: string, householdIdList: string[]) => void;
  /** Event NavigateToMyCalendar. */
  onNavigateToMyCalendar: () => void;
  /** Event NavigateTo_ContactByEmail(In_AvatarURL, In_ContactName, In_ContactSurname, In_ContactLocality,
      In_ContactCountry, In_EmailTo). */
  onNavigateToContactByEmail: (
    avatarURL: string,
    contactName: string,
    contactLocality: string,
    contactCountry: string,
    emailTo: string,
  ) => void;
}

/** LDM "My Timeline" (analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2
    .mvc.js = SB; view :210-1179, controller :1179-2970). Layout (ExtendedClasses "my-events") with the back MenuIcon
    and "My Timeline" (HeaderLeft), the filter button and the My calendar flag (HeaderRight), and in Content the
    MyTimeline_V2 block, Dialog_AccessRestrictedAction_Legacy and the two contact popups. CurrentEventView is always
    MyTimeline (no action changes it), so the calendar branches (Popover_DateSelector, EventCalendarWeekMonth,
    MonthCalendar, DayCalendar, Agenda_V2) never render.
    OnInitialize (:1741-1830): a view restored from the cache hides both contact popups; otherwise the filters:
    EventFilters from AddMonths(today, -24) to AddMonths(today, 12), PastEventFilters from the same date to
    AddDays(today, 7). OnReady (:2134-2210): restored → IsFetching* False; else GetMyTimelineData (:1456-1542):
    IsFetchingMyTimeline True, Refresh GetEventsForMyTimeline, OnAfterFetch (:2239-2287: IsFiltering → replace the
    lists, else append them; IsFetchingMyTimeline False), AddAuditRequestAPIEvent(RequestAPI_CalendarEvents). A
    NotRegistered error is raised again; any other non-system error sets IsFetchingMyTimeline False and raises
    UnknownError with its message. */
export function ScreenBlock_MyEvents_V2({
  id,
  bottomBar,
  commonUIElements,
  onNavigateToEventDetail,
  onNavigateToHouseholdCarousel,
  onNavigateToMyCalendar,
  onNavigateToContactByEmail,
}: ScreenBlock_MyEvents_V2Props) {
  const scope = id.replace('$', '');
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () => {
      if (restored && saved) {
        // OnInitialize, restored view (:1755-1762): both contact popups closed.
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
      // OnInitialize, Set Filters (:1780-1800).
      const today = new Date();
      return {
        ...INITIAL_MODEL,
        pastEventFilters: {
          FromDate: toOsDate(addMonths(today, -DEFAULT_DATE_RANGE_IN_MONTHS)),
          ToDate: toOsDate(addDays(today, 7)),
          Localities: [],
        },
      };
    },
  );
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** GetMyTimelineData (:1456-1542) with OnAfterFetch_GetEventsForMyTimeline (:2239-2287). */
  const getMyTimelineData = async () => {
    set({ isFetchingMyTimeline: true });
    const start = getCurrentTimeInMill();
    try {
      let out;
      try {
        out = await getEventsForMyTimeline({
          CurrentEventView: EventView_MyTimeline,
          DefaultDateRangeInMonths: DEFAULT_DATE_RANGE_IN_MONTHS,
          IsFiltering: m().isFiltering,
          IsFetchingMyTimeline: m().isFetchingMyTimeline,
          PastEventFilters: m().pastEventFilters,
        });
      } catch (e) {
        set({ hasFetchError: true });
        throw e;
      }
      if (m().isFiltering) {
        // The filtered answer replaces the lists; ScrollToTop (MyTimeline view) is reachable only through the
        // filter popup, which is not captured (Q1).
        set({ hasFetchError: false, pastEventsData: out.pastEvents, upcomingEventsData: out.upcomingEvents });
      } else {
        set({
          hasFetchError: false,
          pastEventsData: [...m().pastEventsData, ...out.pastEvents],
          upcomingEventsData: [...m().upcomingEventsData, ...out.upcomingEvents],
        });
      }
      set({ isFetchingMyTimeline: false });
      addAuditEvent_LDM('RequestAPI_CalendarEvents', { RequestTime: String(getCurrentTimeInMill() - start) });
    } catch (e) {
      if (e instanceof NotRegisteredException) throw new NotRegisteredException(exceptionMessage(e));
      if (!isSystemException(e)) {
        set({ isFetchingMyTimeline: false });
        throw new UserException(exceptionMessage(e), 'Connect2_OrbitMobile_MUI.UnknownError');
      }
      throw e;
    }
  };

  /* OnReady (:2134-2210). */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved) {
      set({ isFetchingMyTimeline: false });
      return;
    }
    getMyTimelineData().catch(raiseToFlowHandler);
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnScrollEnding_MyTimeline (:1621-1686): not while fetching or filtering, and only until PastEventFilters.FromDate
      is MaxAgeDaysFetchThreshold days back; IncrementMyTimelineDates (:2636-2664) moves the window 24 months back. */
  const onScrollEndingMyTimeline = async () => {
    const s = m();
    if (s.isFetchingMyTimeline || s.isFiltering) return;
    if (diffDays(s.pastEventFilters.FromDate, new Date()) > MAX_AGE_DAYS_FETCH_THRESHOLD) return;
    const [y, mo, d] = s.pastEventFilters.FromDate.split('-').map(Number);
    const fromDate = new Date(y ?? 1900, (mo ?? 1) - 1, d ?? 1);
    set({
      pastEventFilters: {
        ...s.pastEventFilters,
        ToDate: s.pastEventFilters.FromDate,
        FromDate: toOsDate(addMonths(fromDate, -DEFAULT_DATE_RANGE_IN_MONTHS)),
      },
    });
    await getMyTimelineData();
  };

  /** OnHandle_EventClicked (:1687-1722): LogClickedEventAudit(MyTimelineEventClicked, EventHostId) (:2384-2466), then
      NavigateTo_EventDetail. */
  const onHandleEventClicked = (eventHostId: string, eventId: string) => {
    addAuditEvent_LDM('MyTimelineEventClicked', { EventHostId: eventHostId });
    onNavigateToEventDetail(eventHostId, eventId);
  };

  /** OnHandle_HouseholdClicked (:1936-2000): only a displayed household; a disabled record asks
      App_Subscription_ShowUpgradePopUp, else AddAuditEventDetailEvent(MyTimelineHouseholdClicked) and
      NavigateTo_HouseholdCarousel. */
  const onHandleHouseholdClicked = async (click: HouseholdClick) => {
    if (!click.isHouseholdDisplayed) return;
    if (click.recordDisabled) {
      await showUpgradePopUp();
      return;
    }
    addAuditEvent_LDM('MyTimelineHouseholdClicked', { HouseholdId: click.householdId });
    onNavigateToHouseholdCarousel(click.householdId, click.householdIdList);
  };

  /** OnHandle_PhoneCall (:2590-2625): with any phone number the ContactPopup_ByPhone opens with the data, else the
      "Phone number is not available" info message. */
  const onHandlePhoneCall = (data: ContactByPhonePopupData) => {
    const hasPhone =
      (data.Phone ?? '') !== '' ||
      (data.MobilePhone ?? '') !== '' ||
      (data.HomePhone ?? '') !== '' ||
      (data.WorkPhone ?? '') !== '';
    if (hasPhone) set({ contactByPhoneData: data });
    else showFeedbackMessage('Phone number is not available', PLATFORM_MESSAGE_TYPE.info);
  };

  /** OnHandle_ContactByPhonePopupEvent_Cancel (:2214-2238); _Call (:2359-2383) runs it too. */
  const closeContactByPhone = () => {
    const d = m().contactByPhoneData;
    set({ contactByPhoneData: { ...d, ContactPopupData: { ...d.ContactPopupData, ShowPopup: false } } });
  };
  /** OnHandle_ContactByMessage_Cancel (:1292-1316). */
  const closeContactByMessage = () => {
    const d = m().contactByMessageData;
    set({ contactByMessageData: { ...d, ContactPopupData: { ...d.ContactPopupData, ShowPopup: false } } });
  };
  /** OnHandle_ContactByMessage_ClickedEmail (:1260-1291): close the popup, then NavigateTo_ContactByEmail(ImageURL,
      Name, "", Locality, CountryName, Email). */
  const onHandleContactByMessageClickedEmail = () => {
    const d = m().contactByMessageData;
    closeContactByMessage();
    const c = d.ContactPopupData ?? {};
    onNavigateToContactByEmail(c.ImageURL ?? '', c.Name ?? '', c.Locality ?? '', c.CountryName ?? '', d.Email ?? '');
  };

  return (
    <OSBlock name="LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2" id={id}>
      <Layout
        id={`${scope}-$b1`}
        extendedClasses="my-events"
        menu={<div id={`${scope}-Menu`} />}
        headerLeft={
          <div data-container="" style={{ alignItems: 'center', display: 'flex' }}>
            <div data-container="" style={{ flex: '1 0 20%' }}>
              {/* MenuAction Auto of the Orbit module: rendered as the back icon (dom/default.html:201). */}
              <MenuIcon__UpdatedOSUI id={`${scope}-$b2`} menuAction={MenuAction.Back} />
            </div>
            <div
              className="month-header ThemeGrid_Width1"
              data-container=""
              style={{ marginLeft: '20px', flex: '1 0 80%' }}
            >
              My Timeline
            </div>
          </div>
        }
        headerRight={
          <div className="flex-center-vertical full-width flex-horizontal-right event-view" data-container="">
            <div className={`margin-x-base${state.isFiltering ? ' my-events-popup-aura' : ''}`} data-container="">
              <MyEvents_MyTimelineFilterButton
                id={`${scope}-$b4`}
                scope={`${scope}-b4`}
                inHasLoaded={!state.isFetchingMyTimeline}
                inIsShowing
                inDefaultDateRangeInMonths={DEFAULT_DATE_RANGE_IN_MONTHS}
              />
            </div>
            <i
              className="icon menu-icon-my-calendar font-size-1-5em fa fa-flag fa-2x"
              data-icon=""
              onClick={onNavigateToMyCalendar}
            />
          </div>
        }
        content={
          <>
            <MyTimeline_V2
              id={`${scope}-MyTimeline_V2`}
              scope={`${scope}-b9`}
              inPastEventsData={state.pastEventsData}
              inUpcomingEventsData={state.upcomingEventsData}
              inIsFetchingMyTimeline={state.isFetchingMyTimeline}
              inIsFiltering={state.isFiltering}
              inHasFetchError={state.hasFetchError}
              onEventClicked={onHandleEventClicked}
              onHouseholdClicked={(click) => {
                onHandleHouseholdClicked(click).catch(raiseToFlowHandler);
              }}
              onClickPhoneCall={onHandlePhoneCall}
              onClickMessage={(data) => {
                set({ contactByMessageData: data });
              }}
              onScrollEnding={() => onScrollEndingMyTimeline().catch(raiseToFlowHandler)}
              onTryAgain={() => {
                getMyTimelineData().catch(raiseToFlowHandler);
              }}
            />
            <Dialog_AccessRestrictedAction_Legacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b12`} />
            <ContactPopup_ByPhone
              id={`${scope}-$b13`}
              inCallPopupData={state.contactByPhoneData}
              onEventCancel={closeContactByPhone}
              onEventCall={closeContactByPhone}
            />
            <ContactByMessage_Wrapper
              id={`${scope}-$b14`}
              inContactPopupData={state.contactByMessageData}
              onEventEmail={onHandleContactByMessageClickedEmail}
              onEventCall={closeContactByMessage}
              onEventMessageChannel={closeContactByMessage}
              onEventCancel={closeContactByMessage}
            />
          </>
        }
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
    </OSBlock>
  );
}
