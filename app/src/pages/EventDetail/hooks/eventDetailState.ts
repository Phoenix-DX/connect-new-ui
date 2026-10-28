import type {
  EventDateFilters,
  EventDetailCallInputs,
  EventDetailScreen,
  EventDetailsResult,
  EventQRCodeStatus,
  Milestone_Screen,
} from '@/api/event';
import type { EventDetailInputs } from '@/pages/EventDetail/inputs';
import { OrbitEventType, SurveyStatus } from '@/pages/EventDetail/staticEntities';
import type { LocalSurveyStatus } from '@/platform/storage/localEntities';
import { MilestoneTimeType, OrbitMilestoneType } from '@/lib/orbit/staticEntities';
import { filterMilestonesByDateGroup, getHostAllocation } from './eventDetailActions';

/** The state of ScreenBlock_EventDetail: the block variables and the outputs of the data actions that the view reads,
    the reducer of the flows, and the pure decisions of the click handlers. No React: useEventDetail dispatches the
    actions and calls the decisions.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail */

/** Long Integer null identifier (Long Integers stay text). */
const NULL_ID = '0';

/** UserInformation (LongIntegerLongIntegerLongIntegerRecord): the ids that OnReady reads from the cached user. */
export interface UserIds {
  userMemberId: string;
  householderId: string;
  spouseMemberId: string;
}

/** The block variables and the data action outputs that the view reads. The view cache keeps the whole record. */
export interface EventDetailState {
  /** EventDetails. Its Milestones are those of the selected day or edge. */
  eventDetails: EventDetailScreen;
  dateFilters: EventDateFilters;
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

const EMPTY_EVENT: EventDetailScreen = {
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

/** The state of a new view (OnInitialize): the block variables with their default values. OnReady runs before the
    first paint and sets IsFetchingData to True first, so the first paint shows the skeleton. */
export const INITIAL_EVENT_DETAIL_STATE: EventDetailState = {
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

/** The state changes of the flows and of the handlers. */
type EventDetailAction =
  /** OnReady: IsFetchingData = True at the start. */
  | { type: 'fetchStarted' }
  /** OnAfterFetch_Get_EventDetails. */
  | { type: 'eventDetailsFetched'; result: EventDetailsResult }
  /** OnReady: UserInformation from Cache_UserInfo_Get. */
  | { type: 'userInformationRead'; userInformation: UserIds }
  /** OnAfterFetch_Get_HostSurveyStatus. */
  | { type: 'hostSurveyStatusFetched'; statusId: string }
  /** OnAfterFetch of the aggregate GetLocalSurveyStatusByJSONName. */
  | { type: 'localSurveyStatusRead'; localSurveyStatus: LocalSurveyStatus[] }
  /** OnReady: HasDocuments = Get_HasDocuments.Response_HasDocuments. */
  | { type: 'hasDocumentsFetched'; hasDocuments: boolean }
  /** OnReady: HasQRCode and HasScanned from Get_HasQRCode. */
  | { type: 'qrCodeFetched'; status: EventQRCodeStatus }
  /** OnReady: IsFetchingData = False at the end. */
  | { type: 'fetchEnded' }
  /** OnHandle_ClickedDate. */
  | { type: 'dateClicked'; milestoneTimeTypeId: string; selectedDate: string; position: number };

/** OnAfterFetch_Get_EventDetails: EventDetails, DateFilters and IsEventUnavailable. With milestones, EventDetails keeps
    the milestones of the selected day (ListFilter IsSelected, then FilterMilestonesByDateGroup DAY), or without days
    the BEFORE ones. */
function afterFetchEventDetails(state: EventDetailState, result: EventDetailsResult): EventDetailState {
  const all = result.response.Milestones;
  let milestones = all;
  if (all.length > 0) {
    milestones =
      result.dateFilters.DayFilterList.length > 0
        ? filterMilestonesByDateGroup(
            result.dateFilters.DayFilterList.filter((d) => d.IsSelected)[0]?.DateGroup ?? '',
            MilestoneTimeType.DAY,
            all,
          )
        : filterMilestonesByDateGroup('', MilestoneTimeType.BEFORE, all);
  }
  return {
    ...state,
    isEventDetailsFetched: true,
    responseMilestones: all,
    responseHelpers: result.response.Helpers,
    eventDetails: { ...result.response, Milestones: milestones },
    dateFilters: result.dateFilters,
    isEventUnavailable: result.isNullResponse,
  };
}

/** OnHandle_ClickedDate: the milestones of the clicked day or edge, and the selection of DateFilters (an edge
    unselects every day; a day becomes the only selected one). */
function clickDate(
  state: EventDetailState,
  milestoneTimeTypeId: string,
  selectedDate: string,
  position: number,
): EventDetailState {
  const milestones = filterMilestonesByDateGroup(selectedDate, milestoneTimeTypeId, state.responseMilestones);
  let days = state.dateFilters.DayFilterList;
  if (milestoneTimeTypeId === MilestoneTimeType.BEFORE || milestoneTimeTypeId === MilestoneTimeType.AFTER) {
    days = days.map((d) => ({ ...d, IsSelected: false }));
  } else if (milestoneTimeTypeId === MilestoneTimeType.DAY) {
    days = days.map((d, i) => ({ ...d, IsSelected: i === position }));
  }
  return {
    ...state,
    eventDetails: { ...state.eventDetails, Milestones: milestones },
    dateFilters: { ...state.dateFilters, DayFilterList: days },
  };
}

/** The reducer of the block state. */
export function eventDetailReducer(state: EventDetailState, action: EventDetailAction): EventDetailState {
  switch (action.type) {
    case 'fetchStarted':
      return { ...state, isFetchingData: true };
    case 'eventDetailsFetched':
      return afterFetchEventDetails(state, action.result);
    case 'userInformationRead':
      return { ...state, userInformation: action.userInformation };
    case 'hostSurveyStatusFetched':
      return { ...state, hostSurveyStatusId: action.statusId };
    case 'localSurveyStatusRead':
      // Survey Confirmed: HostAllocation = GetHostAllocation(Get_EventDetails.Response.Milestones).
      return {
        ...state,
        localSurveyStatus: action.localSurveyStatus,
        hostAllocation:
          action.localSurveyStatus[0]?.Id === SurveyStatus.Confirmed
            ? getHostAllocation(state.responseMilestones)
            : state.hostAllocation,
      };
    case 'hasDocumentsFetched':
      return { ...state, hasDocuments: action.hasDocuments };
    case 'qrCodeFetched':
      return { ...state, hasQRCode: action.status.hasQRCode, hasScanned: action.status.hasScanned };
    case 'fetchEnded':
      return { ...state, isFetchingData: false };
    case 'dateClicked':
      return clickDate(state, action.milestoneTimeTypeId, action.selectedDate, action.position);
  }
}

/** The block variables that the four data actions send (screenData.variables), in the order of the block. */
export function eventDetailCallInputs(state: EventDetailState, inputs: EventDetailInputs): EventDetailCallInputs {
  return {
    IsFetchingData: state.isFetchingData,
    HasQRCode: state.hasQRCode,
    HasScanned: state.hasScanned,
    HasDocuments: state.hasDocuments,
    IsEventUnavailable: state.isEventUnavailable,
    UserInformation: {
      UserMemberId: state.userInformation.userMemberId,
      HouseholderId: state.userInformation.householderId,
      SpouseMemberId: state.userInformation.spouseMemberId,
    },
    In_MemberId: inputs.In_MemberId,
    In_EventId: inputs.In_EventId,
    In_EventName: inputs.In_EventName,
    In_FromNotification: inputs.In_FromNotification,
  };
}

/** OnReady: "Is Event Host?" decides the call of Get_HostSurveyStatus. */
export const isEventHost = (state: EventDetailState): boolean =>
  state.eventDetails.OrbitEventType.Id === OrbitEventType.EventHost;

/** OnClick_NavigateToHostSurvey: a Sent survey (to complete) needs the user or the spouse to be the householder. Any
    other status opens the survey. */
export function mayOpenHostSurvey(state: EventDetailState): boolean {
  if (state.localSurveyStatus[0]?.Id !== SurveyStatus.Sent) return true;
  const u = state.userInformation;
  return u.userMemberId === u.householderId || u.spouseMemberId === u.householderId;
}

/** The navigation of OnHandle_ClickedMilestone. */
export type ClickedMilestoneTarget =
  | { kind: 'transport'; milestoneId: string; typeId: string; milestoneName: string; headerClass: string }
  | { kind: 'detail'; milestoneId: string; milestoneName: string; typeId: string; hostId: string };

/** The milestone types that open MilestoneDetail: the meals and the accommodations of a guest, a host or a helper. */
const MILESTONE_DETAIL_TYPES: readonly string[] = [
  OrbitMilestoneType.MealGuest,
  OrbitMilestoneType.MealHost,
  OrbitMilestoneType.AccommodationGuest,
  OrbitMilestoneType.AccommodationHost,
  OrbitMilestoneType.MealHelper,
  OrbitMilestoneType.AccommodationHelper,
];

/** OnHandle_ClickedMilestone: a transport milestone opens TransportDetail; a meal or an accommodation (guest, host,
    helper) opens MilestoneDetail; any other type does nothing (null). */
export function clickedMilestoneTarget(milestone: Milestone_Screen): ClickedMilestoneTarget | null {
  const type = milestone.OrbitMilestoneType ?? {};
  const typeId = type.Id ?? '';
  if (type.IsTransportMilestone ?? false) {
    return {
      kind: 'transport',
      milestoneId: milestone.MilestoneId ?? '',
      typeId,
      milestoneName: milestone.Title ?? '',
      headerClass: type.TransportHeaderClass ?? '',
    };
  }
  if (!MILESTONE_DETAIL_TYPES.includes(typeId)) return null;
  return {
    kind: 'detail',
    milestoneId: milestone.MilestoneId ?? '',
    milestoneName: milestone.Title ?? '',
    typeId,
    hostId: milestone.MilestoneInfo?.HostId ?? NULL_ID,
  };
}
