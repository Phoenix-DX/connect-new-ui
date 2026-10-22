// @os-block Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail
import { useLayoutEffect, useReducer, useRef, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { OSList } from '../../../components/OSList';
import { useFlagOn } from '../../../lib/flags';
import { Layout_Orbit } from '../../../shared/Connect2_LegacyShared/Layout_Orbit';
import { MenuIcon__UpdatedOSUI } from '../../../shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { Accordion_Orbit } from '../../../shared/Connect2_OrbitMobile_MUI/Accordion_Orbit';
import { Card_Milestone } from '../../../shared/Connect2_OrbitMobile_MUI/Card_Milestone';
import { ContactHelpdesk_Footer } from '../../../shared/Connect2_OrbitMobile_MUI/ContactHelpdesk_Footer';
import { HostSurvey_PillItem } from '../../../shared/Connect2_OrbitMobile_MUI/HostSurvey_PillItem';
import { NoInformation_Orbit } from '../../../shared/Connect2_OrbitMobile_MUI/NoInformation_Orbit';
import { Skeleton_Loading } from '../../../shared/Connect2_OrbitMobile_MUI/Skeleton_Loading';
import {
  MilestoneTimeType,
  OrbitMilestoneType,
  OrbitSkeletonLoading,
} from '../../../shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import type { Milestone_Screen } from '../../../shared/Connect2_OrbitMobile_MUI/lib/structures';
import { DEPRECATED_AccordionItem } from '../../../shared/osui/DEPRECATED_AccordionItem';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { getLocalSurveyStatusByJSONName } from '@/platform/storage/localEntities';
import { showFeedbackMessage } from '@/platform/feedback';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { getUserInformation } from '@/platform/session/userInfo';
import { getEventDetails, getHasDocuments, getHasQRCode, getHostSurveyStatus } from '../api';
import type {
  DateFilters,
  EventDetailInputs,
  EventDetails,
  EventDetailVariablesWire,
  LocalSurveyStatus,
  UserIds,
} from '../types';
import {
  eventDateRange,
  filterMilestonesByDateGroup,
  getContactHelpdeskSubject_Event,
  getHostAllocation,
  onApplicationEvent_GenerateQRCode,
} from './actions';
import { EventDateSelection } from './EventDateSelection';
import { HostAllocation_List } from './HostAllocation_List';
import { MenuAction_Auto, OrbitEventType, SurveyStatus } from './staticEntities';

/* ScreenBlock_EventDetail (SB = analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.
   ScreenBlock_EventDetail.mvc.js: model :1-250, view :308-1470, controller :1474-2600). */

/** Long Integer null identifier (Long Integers stay text). */
const NULL_ID = '0';

const EMPTY_EVENT: EventDetails = {
  EventId: NULL_ID,
  MemberId: NULL_ID,
  EventType: '',
  EventName: '',
  EventStartDate: '',
  EventEndDate: '',
  Location: '',
  TypeOfEvent: '',
  IsBookletVisible: false,
  SetUpMeals: false,
  Meals: false,
  Accommodations: false,
  Helpers: false,
  Transport: false,
  GuestTransport: false,
  OrbitEventType: { Id: '', Type: '' },
  Milestones: [],
};

/** Block variables (SB model :90-170) and the data action outputs the view reads. */
interface Model {
  eventDetails: EventDetails;
  dateFilters: DateFilters;
  isFetchingData: boolean;
  hostAllocation: Milestone_Screen[];
  hasQRCode: boolean;
  hasScanned: boolean;
  hasDocuments: boolean;
  isEventUnavailable: boolean;
  userInformation: UserIds;
  /** Get_EventDetails.Response.Milestones (every day; EventDetails.Milestones holds the selected day). */
  responseMilestones: Milestone_Screen[];
  /** Get_EventDetails.Response.Helpers. */
  responseHelpers: boolean;
  /** Get_EventDetails.IsDataFetched. */
  isEventDetailsFetched: boolean;
  /** Get_HostSurveyStatus.Response.Id (the JSON_Name of the survey status). */
  hostSurveyStatusId: string;
  /** GetLocalSurveyStatusByJSONName.List. */
  localSurveyStatus: LocalSurveyStatus[];
}

const INITIAL_MODEL: Model = {
  eventDetails: EMPTY_EVENT,
  dateFilters: { HasBefore: false, HasAfter: false, DayFilterList: [] },
  isFetchingData: false,
  hostAllocation: [],
  hasQRCode: false,
  hasScanned: false,
  hasDocuments: false,
  isEventUnavailable: false,
  userInformation: { userMemberId: NULL_ID, householderId: NULL_ID, spouseMemberId: NULL_ID },
  responseMilestones: [],
  responseHelpers: false,
  isEventDetailsFetched: false,
  hostSurveyStatusId: '',
  localSurveyStatus: [],
};

const NO_ITINERARY = 'Your itinerary will be available once it has been published by the event organiser.';
const NO_LONGER_AVAILABLE = 'The Event is no longer available for you.';

export interface ScreenBlock_EventDetailProps extends EventDetailInputs {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** Event NavigateTo_TransportDetail(MilestoneId, OrbitMilestoneTypeId, MilestoneName, HeaderClass). */
  onNavigateToTransportDetail: (
    milestoneId: string,
    typeId: string,
    milestoneName: string,
    headerClass: string,
  ) => void;
  /** Event NavigateTo_EventBooklet. */
  onNavigateToEventBooklet: () => void;
  /** Event NavigateTo_ContactHelpdesk(Subject, EventName). */
  onNavigateToContactHelpdesk: (subject: string, eventName: string) => void;
  /** Event NavigateTo_GenerateQRCode(EventStartDate, EventEndDate, EventLocation). */
  onNavigateToGenerateQRCode: (eventStartDate: string, eventEndDate: string, eventLocation: string) => void;
  /** Event NavigateTo_HostSurvey(HouseholderId, EventStartDate, EventEndDate). */
  onNavigateToHostSurvey: (householderId: string, eventStartDate: string, eventEndDate: string) => void;
  /** Event NavigateTo_MilestoneDetail(MilestoneId, EventName, MilestoneName, OrbitMilestoneTypeId, HostId). */
  onNavigateToMilestoneDetail: (
    milestoneId: string,
    eventName: string,
    milestoneName: string,
    orbitMilestoneTypeId: string,
    hostId: string,
  ) => void;
  /** Event NavigateTo_ViewDocuments(EventStartDate, EventEndDate, EventLocation). */
  onNavigateToViewDocuments: (eventStartDate: string, eventEndDate: string, eventLocation: string) => void;
  /** Event NavigateTo_Helpers(EventId, HostId, PreloadEventName, PreloadMilestoneName). */
  onNavigateToHelpers: (
    eventId: string,
    hostId: string,
    preloadEventName: string,
    preloadMilestoneName: string,
  ) => void;
}

/** Event detail (SB). Layout_Orbit (CustomClass "orbit-detail orbit-header-center") with the Auto MenuIcon, the event
    name as title (In_EventName, else EventDetails.EventName, :374-385) and, when not fetching, the QR code and documents
    icons (HeaderRight :389-500). Content (:501-1410): skeleton while fetching; an unavailable event → NoInformation;
    else the info rows, the host survey (host events), the host allocation accordion (survey Confirmed), Itinerary,
    EventDateSelection and the milestone cards of the selected day, or without milestones the accordion (helpers and
    Confirmed) or NoInformation. BottomBar: ContactHelpdesk_Footer when the event has milestones (:1416-1450).
    OnReady (:1799-1910): a view restored from the cache does nothing (P-BACK); else IsFetchingData, Get_EventDetails
    (OnAfterFetch :2260-2330 keeps the selected day's milestones), the cached user ids, Get_HostSurveyStatus for a host
    event (OnAfterFetch :2356-2394 → GetLocalSurveyStatusByJSONName → HostAllocation when Confirmed, :1712-1748),
    Get_HasDocuments, Get_HasQRCode when the day has milestones, then IsFetchingData False. */
export function ScreenBlock_EventDetail(props: ScreenBlock_EventDetailProps) {
  const { id, In_MemberId, In_EventId, In_EventName, In_FromNotification } = props;
  const restored = useWasRestoredFromCache();
  const hasOrbitHostSurvey = useFlagOn('mobileOrbitHostSurvey');
  const hasOrbitEventBooklet = useFlagOn('mobileOrbitEventBooklet');
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () => (restored && saved ? saved : INITIAL_MODEL),
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /** The block variables every data action sends (screenData.variables, see EventDetailVariablesWire). */
  const variables = (): EventDetailVariablesWire => {
    const s = m();
    return {
      IsFetchingData: s.isFetchingData,
      HasQRCode: s.hasQRCode,
      HasScanned: s.hasScanned,
      HasDocuments: s.hasDocuments,
      IsEventUnavailable: s.isEventUnavailable,
      UserInformation: {
        UserMemberId: s.userInformation.userMemberId,
        HouseholderId: s.userInformation.householderId,
        SpouseMemberId: s.userInformation.spouseMemberId,
      },
      In_MemberId,
      In_EventId,
      In_EventName,
      In_FromNotification,
    };
  };

  /** Get_EventDetails and OnAfterFetch_Get_EventDetails (:2260-2330): EventDetails, DateFilters, IsEventUnavailable;
      with milestones, the milestones of the selected day (ListFilter IsSelected → FilterMilestonesByDateGroup DAY), or
      without days the BEFORE ones. */
  const refreshGetEventDetails = async () => {
    const out = await getEventDetails(variables());
    const all = out.response.Milestones;
    let milestones = all;
    if (all.length > 0) {
      milestones =
        out.dateFilters.DayFilterList.length > 0
          ? filterMilestonesByDateGroup(
              out.dateFilters.DayFilterList.filter((d) => d.IsSelected)[0]?.DateGroup ?? '',
              MilestoneTimeType.DAY,
              all,
            )
          : filterMilestonesByDateGroup('', MilestoneTimeType.BEFORE, all);
    }
    set({
      isEventDetailsFetched: true,
      responseMilestones: all,
      responseHelpers: out.response.Helpers,
      eventDetails: { ...out.response, Milestones: milestones },
      dateFilters: out.dateFilters,
      isEventUnavailable: out.isNullResponse,
    });
  };

  /** Get_HostSurveyStatus and OnAfterFetch_Get_HostSurveyStatus (:2356-2394): with a status, the aggregate
      GetLocalSurveyStatusByJSONName and its OnAfterFetch (:1712-1748): Confirmed → HostAllocation =
      GetHostAllocation(Get_EventDetails.Response.Milestones). */
  const refreshGetHostSurveyStatus = async () => {
    const statusId = await getHostSurveyStatus(variables());
    set({ hostSurveyStatusId: statusId });
    if (statusId === '') return;
    const local = getLocalSurveyStatusByJSONName(statusId);
    set({ localSurveyStatus: local });
    if (local[0]?.Id === SurveyStatus.Confirmed) set({ hostAllocation: getHostAllocation(m().responseMilestones) });
  };

  /* OnReady (:1799-1910). Run before paint, as OnReady runs when the block mounts. */
  const started = useRef(false);
  useLayoutEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && saved) return;
    set({ isFetchingData: true });
    void (async () => {
      try {
        await refreshGetEventDetails();
        const user = (await getUserInformation()).Directory_UserCurrent;
        set({
          userInformation: {
            userMemberId: user.MemberID,
            householderId: user.Directory_UserCurrent_Member.HouseholderId,
            spouseMemberId: user.Directory_UserCurrent_Member.SpouseId,
          },
        });
        if (m().eventDetails.OrbitEventType.Id === OrbitEventType.EventHost) await refreshGetHostSurveyStatus();
        set({ hasDocuments: await getHasDocuments(variables()) });
        if (m().eventDetails.Milestones.length > 0) {
          const qr = await getHasQRCode(variables());
          set({ hasQRCode: qr.hasQRCode, hasScanned: qr.hasScanned });
        }
        set({ isFetchingData: false });
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnClick_GenerateQRCode (:1749-1798): nothing once scanned; else NavigateTo_GenerateQRCode, then
      OnApplicationEvent_GenerateQRCode. */
  const onClickGenerateQRCode = () => {
    const s = m();
    if (s.hasScanned) return;
    const e = s.eventDetails;
    props.onNavigateToGenerateQRCode(e.EventStartDate, e.EventEndDate, e.Location);
    onApplicationEvent_GenerateQRCode(In_MemberId, In_EventId);
  };

  /** OnClick_OpenDocuments (:2160-2188). */
  const onClickOpenDocuments = () => {
    const e = m().eventDetails;
    props.onNavigateToViewDocuments(e.EventStartDate, e.EventEndDate, e.Location);
  };

  /** OnClick_ViewEventBooklet (:2189-2228): GetHasOrbitEventBooklet → NavigateTo_EventBooklet, else an Info message. */
  const onClickViewEventBooklet = () => {
    if (hasOrbitEventBooklet) {
      props.onNavigateToEventBooklet();
      return;
    }
    showFeedbackMessage(
      "You don't have access to this feature. Please contact your event organiser for more information.",
      0,
    );
  };

  /** OnClick_NavigateToHostSurvey (:2008-2049): a Sent survey (to complete) needs the user or the spouse to be the
      householder, else an Error message; then NavigateTo_HostSurvey(HouseholderId, start, end). */
  const onClickNavigateToHostSurvey = () => {
    const s = m();
    if (s.localSurveyStatus[0]?.Id === SurveyStatus.Sent) {
      const u = s.userInformation;
      if (!(u.userMemberId === u.householderId || u.spouseMemberId === u.householderId)) {
        showFeedbackMessage('Only Householder is able to edit the survey.', 3);
        return;
      }
    }
    props.onNavigateToHostSurvey(
      s.userInformation.householderId,
      s.eventDetails.EventStartDate,
      s.eventDetails.EventEndDate,
    );
  };

  /** OnHandle_ClickedMilestone (:2050-2109): a transport milestone → NavigateTo_TransportDetail; a meal or
      accommodation (guest, host, helper) → NavigateTo_MilestoneDetail; any other type does nothing. */
  const onHandleClickedMilestone = (milestone: Milestone_Screen) => {
    const type = milestone.OrbitMilestoneType ?? {};
    const typeId = type.Id ?? '';
    if (type.IsTransportMilestone ?? false) {
      props.onNavigateToTransportDetail(
        milestone.MilestoneId ?? '',
        typeId,
        milestone.Title ?? '',
        type.TransportHeaderClass ?? '',
      );
      return;
    }
    const T = OrbitMilestoneType;
    const detailTypes: readonly string[] = [
      T.MealGuest,
      T.MealHost,
      T.AccommodationGuest,
      T.AccommodationHost,
      T.MealHelper,
      T.AccommodationHelper,
    ];
    if (!detailTypes.includes(typeId)) return;
    props.onNavigateToMilestoneDetail(
      milestone.MilestoneId ?? '',
      In_EventName,
      milestone.Title ?? '',
      typeId,
      milestone.MilestoneInfo?.HostId ?? NULL_ID,
    );
  };

  /** OnHandle_HostAllocationView (:1940-1975): NavigateTo_MilestoneDetail with the row's ids. */
  const onHandleHostAllocationView = (milestoneId: string, typeId: string, milestoneName: string, hostId: string) => {
    props.onNavigateToMilestoneDetail(milestoneId, In_EventName, milestoneName, typeId, hostId);
  };

  /** OnHandle_ViewHelpers (:2110-2150): Cache_UserInfo_Get, then NavigateTo_Helpers(In_EventId, HouseholderId,
      In_EventName, PreloadMilestoneName). */
  const onHandleViewHelpers = (preloadMilestoneName: string) => {
    void (async () => {
      try {
        const user = (await getUserInformation()).Directory_UserCurrent;
        props.onNavigateToHelpers(
          In_EventId,
          user.Directory_UserCurrent_Member.HouseholderId,
          In_EventName,
          preloadMilestoneName,
        );
      } catch (e) {
        raiseToFlowHandler(e);
      }
    })();
  };

  /** OnHandle_ContactHelpdesk (:2229-2259). */
  const onHandleContactHelpdesk = () => {
    const e = m().eventDetails;
    props.onNavigateToContactHelpdesk(
      getContactHelpdeskSubject_Event(In_EventName, e.EventStartDate, e.EventEndDate, e.Location),
      In_EventName,
    );
  };

  /** OnHandle_ClickedDate (:2395-2502): the milestones of the clicked day / edge, and the selection of DateFilters. */
  const onHandleClickedDate = (milestoneTimeTypeId: string, selectedDate: string, position: number) => {
    const s = m();
    const milestones = filterMilestonesByDateGroup(selectedDate, milestoneTimeTypeId, s.responseMilestones);
    let days = s.dateFilters.DayFilterList;
    if (milestoneTimeTypeId === MilestoneTimeType.BEFORE || milestoneTimeTypeId === MilestoneTimeType.AFTER) {
      days = days.map((d) => ({ ...d, IsSelected: false }));
    } else if (milestoneTimeTypeId === MilestoneTimeType.DAY) {
      days = days.map((d, i) => ({ ...d, IsSelected: i === position }));
    }
    set({
      eventDetails: { ...s.eventDetails, Milestones: milestones },
      dateFilters: { ...s.dateFilters, DayFilterList: days },
    });
  };

  const s = state;
  const prefix = id.replace('$', '');
  const e = s.eventDetails;
  const status = s.localSurveyStatus[0];
  const isConfirmed = status?.Id === SurveyStatus.Confirmed;

  /** The Host Allocation accordion (:961-1068 and :1200-1305). */
  const accordion = (a: string, item: string, list: string) => (
    <Accordion_Orbit id={`${prefix}-$b${a}`} inColoredContent>
      <DEPRECATED_AccordionItem
        id={`${prefix}-$b${item}`}
        isExpanded={false}
        usePadding={false}
        extendedClass="orbit-accordion-item"
        title={<span data-expression="">Host Allocation</span>}
        content={
          <HostAllocation_List
            id={`${prefix}-$b${list}`}
            inHostAllocationList={s.hostAllocation}
            onClickView={onHandleHostAllocationView}
            onClickViewHelpers={onHandleViewHelpers}
          />
        }
      />
    </Accordion_Orbit>
  );

  /** Host survey row of a host event (:775-958): Sent or Confirmed with the HostSurvey flag → "Complete / View Host
      Survey" and the status pill; otherwise the "Host Survey" tag. */
  const tag = (
    <div className="orbit-host-survey-link" data-container="">
      <span className="font-size-1-1em color-orbit-primary-7 bold" data-expression="">
        Host Survey
      </span>
      <div className="orbit-host-survey-link-tag" data-container="">
        <span data-expression="">{status?.Label ?? ''}</span>
      </div>
    </div>
  );
  const isSent = status?.Id === SurveyStatus.Sent;
  const hostSurvey: ReactNode =
    e.EventType !== OrbitEventType.EventHost || status === undefined ? null : hasOrbitHostSurvey &&
      (isSent || isConfirmed) ? (
      <div
        className="full-width padding-m display-flex align-items-center justify-content-space-between"
        data-container=""
      >
        <div
          className="orbit-host-survey-link-new"
          data-container=""
          style={{ cursor: 'pointer' }}
          onClick={onClickNavigateToHostSurvey}
        >
          <span className="white-space-nowrap" data-expression="">
            {`${isSent ? 'Complete' : 'View'} Host Survey`}
          </span>
          <i className="icon margin-left-m font-size-1-25em fa fa-angle-right fa-1x" data-icon="" />
        </div>
        <HostSurvey_PillItem
          id={`${prefix}-$b3`}
          inIconClass={
            isSent ? 'orbit-icon-circle-warning color-orbit-orange-8' : 'orbit-icon-circle-check color-orbit-green-6'
          }
          inIsSmallIcon
          inPillText={status.Label}
          inExtendedStyle={
            isSent
              ? 'background-color: var(--orbit-orange-2); color: var(--orbit-orange-8);'
              : 'background-color: var(--orbit-green-2); color: var(--orbit-green-6);'
          }
        />
      </div>
    ) : (
      tag
    );

  /** The accordion of a day with milestones (:958-1070): survey Confirmed. */
  const dayAccordion: ReactNode = isConfirmed ? accordion('4', '5', '6') : null;

  const noInformation = (alias: string) => (
    <NoInformation_Orbit
      id={`${prefix}-$b${alias}`}
      message={In_FromNotification && s.isEventUnavailable ? NO_LONGER_AVAILABLE : NO_ITINERARY}
      isUrgent={s.isEventUnavailable}
    />
  );

  /** Without milestones (:1198-1350): once fetched, the accordion (helpers and Confirmed) or the separator and
      NoInformation. */
  const noMilestones: ReactNode = !(s.isEventDetailsFetched && !s.isFetchingData) ? null : s.responseHelpers &&
    isConfirmed ? (
    accordion('9', '10', '11')
  ) : (
    <>
      <div className="orbit-separator" data-container="" />
      {noInformation('12')}
    </>
  );

  const info = (
    <div className="font-size-0-9em padding-x-m padding-y-m" data-container="">
      <div className="flex-center-vertical" data-container="">
        <i className="icon orbit-icon-date-time fa fa-flag fa-1x" data-icon="" />
        <span className="margin-left-base" data-expression="">
          {eventDateRange(e.EventStartDate, e.EventEndDate)}
        </span>
      </div>
      {(e.OrbitEventType.Id === OrbitEventType.EventHost || e.OrbitEventType.Id === OrbitEventType.EventAdmin) && (
        <>
          <div className="flex-center-vertical margin-top-m" data-container="">
            <i className="icon orbit-icon-location fa fa-flag fa-1x" data-icon="" />
            <span className="margin-left-base" data-expression="">
              {e.Location}
            </span>
          </div>
          <div className="flex-center-vertical margin-top-m" data-container="">
            <i className="icon orbit-icon-host-guest fa fa-flag fa-1x" data-icon="" />
            <span className="margin-left-base" data-expression="">
              {e.OrbitEventType.Type}
            </span>
          </div>
        </>
      )}
      <div className="flex-center-vertical margin-top-m" data-container="">
        <i className="icon orbit-icon-window fa fa-flag fa-1x" data-icon="" />
        <span className="margin-left-base" data-expression="">
          {e.TypeOfEvent}
        </span>
      </div>
      {hasOrbitEventBooklet && e.IsBookletVisible && (
        <div
          className="flex-center-vertical margin-top-m color-orbit-primary-7"
          data-container=""
          style={{ cursor: 'pointer' }}
          onClick={onClickViewEventBooklet}
        >
          <i className="icon orbit-icon-host-guest fa fa-flag fa-1x" data-icon="" />
          <span className="margin-left-base">View Event Guest List</span>
          <i className="icon orbit-icon-arrow margin-left-base fa fa-flag fa-1x" data-icon="" />
        </div>
      )}
      {s.hasQRCode && (
        <div className="flex-center-vertical margin-top-m" data-container="">
          <i className="icon fa fa-qrcode fa-1x" data-icon="" />
          <div
            className={`orbit-generate-qrcode-button${s.hasScanned ? ' orbit-generate-qrcode-button-disabled' : ''} OSInline`}
            data-container=""
            style={{ cursor: 'pointer' }}
            onClick={onClickGenerateQRCode}
          >
            <i className="icon fa fa-camera fa-1x" data-icon="" />
            <span className="orbit-generate-qrcode-button-text" data-expression="">
              {s.hasScanned ? 'QR CODE GENERATED' : 'GENERATE QR CODE'}
            </span>
          </div>
        </div>
      )}
    </div>
  );

  const content: ReactNode = s.isFetchingData ? (
    <Skeleton_Loading id={`${prefix}-$b14`} inSkeletonLoadingId={OrbitSkeletonLoading.EventDetail} />
  ) : s.isEventUnavailable ? (
    s.isEventDetailsFetched ? (
      noInformation('13')
    ) : null
  ) : (
    <>
      {info}
      {hostSurvey}
      {s.responseMilestones.length > 0 ? (
        <>
          {dayAccordion}
          <div className="padding-x-m padding-y-m bold color-orbit-primary-7 font-size-1-1em" data-container="">
            <span data-expression="">Itinerary</span>
          </div>
          <EventDateSelection id={`${prefix}-$b7`} inDateList={s.dateFilters} onClickedDate={onHandleClickedDate} />
          <OSList
            className="list list-group orbit-card-list"
            animateItems
            disableVirtualization
            source={e.Milestones}
            keyOf={(p, i) => `${p.MilestoneId ?? ''}-${String(i)}`}
          >
            {(p, i) => (
              <div className="orbit-card-list-cont" data-container="">
                <Card_Milestone
                  id={`${prefix}-l1-142797_${String(i)}-$b8`}
                  inMilestoneSummary={p}
                  isOverrideMainColorVar=""
                  isSetUpMeals={!e.Meals}
                  onClickedMilestone={onHandleClickedMilestone}
                />
              </div>
            )}
          </OSList>
        </>
      ) : (
        noMilestones
      )}
    </>
  );

  return (
    <OSBlock name="Orbit_ScreenBlocks.ScreenBlock_EventDetail" id={id}>
      <Layout_Orbit
        id={`${prefix}-$b1`}
        customClass="orbit-detail orbit-header-center"
        menu={<div id={`${prefix}-Menu`} />}
        headerLeft={<MenuIcon__UpdatedOSUI id={`${prefix}-$b2`} menuAction={MenuAction_Auto} />}
        title={<span data-expression="">{In_EventName !== '' ? In_EventName : e.EventName}</span>}
        headerRight={
          s.isFetchingData ? null : (
            <div
              className="display-flex flex-direction-row align-content-space-evenly align-items-center padding-left-base"
              data-container=""
            >
              {s.responseMilestones.length > 0 && s.hasQRCode && !s.hasScanned && (
                <div
                  className="display-flex align-items-center align-content-center"
                  data-container=""
                  style={{ cursor: 'pointer' }}
                  onClick={onClickGenerateQRCode}
                >
                  <i className="icon padding-none font-size-1-5em fa fa-qrcode fa-1x" data-icon="" />
                </div>
              )}
              {s.hasDocuments && (
                <div
                  className="display-flex align-items-center align-content-center"
                  data-container=""
                  style={{ cursor: 'pointer' }}
                  onClick={onClickOpenDocuments}
                >
                  <i
                    className={`icon orbit-icon-paper-clip padding-none font-size-1-5em${
                      s.responseMilestones.length > 0 && s.hasQRCode && !s.hasScanned ? ' margin-left-base' : ''
                    }`}
                    data-icon=""
                  />
                </div>
              )}
            </div>
          )
        }
        content={content}
        bottomBar={
          s.responseMilestones.length > 0 && !s.isFetchingData ? (
            <ContactHelpdesk_Footer id={`${prefix}-$b15`} onClick={onHandleContactHelpdesk} />
          ) : null
        }
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`} />}
      />
    </OSBlock>
  );
}
