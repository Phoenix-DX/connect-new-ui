import { callAction } from '@/api/client/callAction';
import {
  toAccommodationHostDocument,
  toAccommodationHostResult,
  toAdminEventInformation,
  toAdminEventItems,
  toAssembleEventResult,
  toAssembleEventTypes,
  toAssembleMeetingListInputs,
  toAssembleMeetings,
  toBookletGuestsMaxRows,
  toBookletHelpersMaxRows,
  toCoordinatorDetailsData,
  toEventBookletFilters,
  toEventBookletMembers,
  toEventByEventIdData,
  toEventDetailsResult,
  toEventDocuments,
  toEventQRCodeData,
  toEventQRCodeStatus,
  toEventsByMemberIdResult,
  toGmpMilestoneHost,
  toGuestArrangementsResult,
  toHasDocuments,
  toHelperData,
  toHostSurveyInputs,
  toHostSurveyResult,
  toHostSurveyStatus,
  toMilestoneScanFF,
  toMyTimelineData,
  toMyTimelineInputs,
  toScanEventQRCodeInputs,
  toScanEventQRCodeResult,
  toTransportDetails,
} from './mapper';
import type {
  AccommodationHostCallInputs,
  AccommodationHostDocument,
  AccommodationHostResult,
  AdminEventInformation,
  AdminEventInformationCallInputs,
  AdminEventItem,
  AdminEventsCallInputs,
  AssembleEventCallInputs,
  AssembleEventResult,
  AssembleEventTypeItem,
  AssembleMeeting,
  AssembleMeetingListQuery,
  CoordinatorDetailsData,
  EventBookletCallInputs,
  EventBookletFiltersResponse,
  EventBookletMember,
  EventByEventIdData,
  EventDetailCallInputs,
  EventDetailsResult,
  EventDocumentItem,
  EventDocumentsCallInputs,
  EventQRCodeCallInputs,
  EventQRCodeData,
  EventQRCodeStatus,
  EventsByMemberIdResult,
  GmpMilestoneHost,
  GmpMilestoneHostCallInputs,
  GuestArrangementsCallInputs,
  GuestArrangementsResult,
  HelperData,
  HelperDetailsCallInputs,
  HostSurveyCallInputs,
  HostSurveyResult,
  LdmEventCallInputs,
  MyTimelineCallInputs,
  MyTimelineData,
  OrbitLandingCallInputs,
  ScanEventQRCodeResult,
  ScannedMemberNames,
  ScannerAdmin,
  TransportDetailCallInputs,
  TransportDetails,
} from './types';

/* The server calls of the event domain, called with their OutSystems names and owners. Each function makes one call
   and sends its inputs as they are: the block variables that OutSystems sends with a data action. The callers decide
   when to fetch: every data action here is fetched on demand (OnReady or a refresh of the block). */

const ORBIT = 'Connect2_OrbitMobile_MUI';

/* ---- Assemble meetings (Connect2_Assemble_MUI) ---- */

/** DataActionGetAssembleEvent of AssembleEventDetail: the meeting, its invited localities and guests. */
export async function fetchAssembleEvent(inputs: AssembleEventCallInputs): Promise<AssembleEventResult> {
  return toAssembleEventResult(
    await callAction('Connect2_Assemble_MUI', 'AssembleEventDetail/DataActionGetAssembleEvent', inputs),
  );
}

/** DataActionGetAssembleEventTypes of AssembleSummary_List: the meeting types. No inputs. */
export async function fetchAssembleEventTypes(): Promise<AssembleEventTypeItem[]> {
  return toAssembleEventTypes(
    await callAction('Connect2_Assemble_MUI', 'AssembleSummary_List/DataActionGetAssembleEventTypes', {}),
  );
}

/** DataActionGetAssembleMeetingSummaryList of AssembleSummary_List: one page of meetings. */
export async function fetchAssembleMeetings(query: AssembleMeetingListQuery): Promise<AssembleMeeting[]> {
  return toAssembleMeetings(
    await callAction(
      'Connect2_Assemble_MUI',
      'AssembleSummary_List/DataActionGetAssembleMeetingSummaryList',
      toAssembleMeetingListInputs(query),
    ),
  );
}

/* ---- Orbit events of a member (ScreenBlock_OrbitLanding) ---- */

/** DataActionGet_EventsByMemberId of ScreenBlock_OrbitLanding: the events and milestones of the selected member and
    the years of the filter. The server reads SelectedMemberId. */
export async function fetchEventsByMemberId(inputs: OrbitLandingCallInputs): Promise<EventsByMemberIdResult> {
  return toEventsByMemberIdResult(
    await callAction(ORBIT, 'ScreenBlock_OrbitLanding/DataActionGet_EventsByMemberId', inputs),
  );
}

/* ---- Orbit event detail (ScreenBlock_EventDetail) ---- */

/** DataActionGet_EventDetails of ScreenBlock_EventDetail: the event, its itinerary and the date filters. */
export async function fetchEventDetails(inputs: EventDetailCallInputs): Promise<EventDetailsResult> {
  return toEventDetailsResult(await callAction(ORBIT, 'ScreenBlock_EventDetail/DataActionGet_EventDetails', inputs));
}

/** DataActionGet_HostSurveyStatus of ScreenBlock_EventDetail: the survey status of the host household ("" = none). */
export async function fetchHostSurveyStatus(inputs: EventDetailCallInputs): Promise<string> {
  return toHostSurveyStatus(await callAction(ORBIT, 'ScreenBlock_EventDetail/DataActionGet_HostSurveyStatus', inputs));
}

/** DataActionGet_HasDocuments of ScreenBlock_EventDetail: whether the event has documents. */
export async function fetchHasDocuments(inputs: EventDetailCallInputs): Promise<boolean> {
  return toHasDocuments(await callAction(ORBIT, 'ScreenBlock_EventDetail/DataActionGet_HasDocuments', inputs));
}

/** DataActionGet_HasQRCode of ScreenBlock_EventDetail: whether the member has a QR code and was scanned. */
export async function fetchHasQRCode(inputs: EventDetailCallInputs): Promise<EventQRCodeStatus> {
  return toEventQRCodeStatus(await callAction(ORBIT, 'ScreenBlock_EventDetail/DataActionGet_HasQRCode', inputs));
}

/* ---- Orbit event booklet (ScreenBlock_EventBooklet) ---- */

/** DataActionGet_EventBookletFilters of ScreenBlock_EventBooklet: the event and the values of the filters. */
export async function fetchEventBookletFilters(inputs: EventBookletCallInputs): Promise<EventBookletFiltersResponse> {
  return toEventBookletFilters(
    await callAction(ORBIT, 'ScreenBlock_EventBooklet/DataActionGet_EventBookletFilters', inputs),
  );
}

/** DataActionGet_EventBookletGuests of ScreenBlock_EventBooklet: one page of guests. */
export async function fetchEventBookletGuests(inputs: EventBookletCallInputs): Promise<EventBookletMember[]> {
  return toEventBookletMembers(
    await callAction(ORBIT, 'ScreenBlock_EventBooklet/DataActionGet_EventBookletGuests', inputs),
  );
}

/** DataActionGet_EventBookletHelpers of ScreenBlock_EventBooklet: one page of helpers. */
export async function fetchEventBookletHelpers(inputs: EventBookletCallInputs): Promise<EventBookletMember[]> {
  return toEventBookletMembers(
    await callAction(ORBIT, 'ScreenBlock_EventBooklet/DataActionGet_EventBookletHelpers', inputs),
  );
}

/** The server action GetBookletGuestsMaxRows of Connect2_OrbitMobile_MUI (called by its client action
    Set_BookletGuestsMaxRows): the page size of the booklet guests. No inputs. */
export async function fetchBookletGuestsMaxRows(): Promise<number> {
  return toBookletGuestsMaxRows(await callAction(ORBIT, 'ActionGetBookletGuestsMaxRows', {}));
}

/** The server action GetBookletHelpersMaxRows of Connect2_OrbitMobile_MUI (called by its client action
    Set_BookletHelpersMaxRows): the page size of the booklet helpers. No inputs. */
export async function fetchBookletHelpersMaxRows(): Promise<number> {
  return toBookletHelpersMaxRows(await callAction(ORBIT, 'ActionGetBookletHelpersMaxRows', {}));
}

/* ---- Orbit guest arrangements, helpers, accommodation, host survey ---- */

/** DataActionGetGuestArrangements of ScreenBlock_GuestArrangements: the arrangements of a guest. */
export async function fetchGuestArrangements(inputs: GuestArrangementsCallInputs): Promise<GuestArrangementsResult> {
  return toGuestArrangementsResult(
    await callAction(ORBIT, 'ScreenBlock_GuestArrangements/DataActionGetGuestArrangements', inputs),
  );
}

/** DataActionGetHelperDetails of ScreenBlock_HelperDetails: the event and its helpers by role. */
export async function fetchHelperDetails(inputs: HelperDetailsCallInputs): Promise<HelperData> {
  return toHelperData(await callAction(ORBIT, 'ScreenBlock_HelperDetails/DataActionGetHelperDetails', inputs));
}

/** DataActionGetAccommodationHost of ScreenBlock_AccommodationHost: the rooms, the guests and the helpers of a host. */
export async function fetchAccommodationHost(inputs: AccommodationHostCallInputs): Promise<AccommodationHostResult> {
  return toAccommodationHostResult(
    await callAction(ORBIT, 'ScreenBlock_AccommodationHost/DataActionGetAccommodationHost', inputs),
  );
}

/** DataActionGet_Document of ScreenBlock_AccommodationHost: the accommodation host document. */
export async function fetchAccommodationHostDocument(
  inputs: AccommodationHostCallInputs,
): Promise<AccommodationHostDocument> {
  return toAccommodationHostDocument(
    await callAction(ORBIT, 'ScreenBlock_AccommodationHost/DataActionGet_Document', inputs),
  );
}

/** DataActionGetGmpMilestoneHost of ScreenBlock_MilestoneWrapper: the milestone type, title, host and status. */
export async function fetchGmpMilestoneHost(inputs: GmpMilestoneHostCallInputs): Promise<GmpMilestoneHost> {
  return toGmpMilestoneHost(
    await callAction(ORBIT, 'ScreenBlock_MilestoneWrapper/DataActionGetGmpMilestoneHost', inputs),
  );
}

/** DataActionGetHostSurvey of ScreenBlock_HostSurvey: the survey of the host household. A null input date ("")
    travels as the null DateTime. */
export async function fetchHostSurvey(inputs: HostSurveyCallInputs): Promise<HostSurveyResult> {
  return toHostSurveyResult(
    await callAction(ORBIT, 'ScreenBlock_HostSurvey/DataActionGetHostSurvey', toHostSurveyInputs(inputs)),
  );
}

/* ---- Orbit transport, documents and QR code ---- */

/** DataActionGet_TransportDetail of ScreenBlock_TransportDetail: the transport of a milestone. */
export async function fetchTransportDetail(inputs: TransportDetailCallInputs): Promise<TransportDetails> {
  return toTransportDetails(
    await callAction(ORBIT, 'ScreenBlock_TransportDetail/DataActionGet_TransportDetail', inputs),
  );
}

/** DataActionGetEventDocuments of ScreenBlock_ViewDocuments: the documents of the event. */
export async function fetchEventDocuments(inputs: EventDocumentsCallInputs): Promise<EventDocumentItem[]> {
  return toEventDocuments(await callAction(ORBIT, 'ScreenBlock_ViewDocuments/DataActionGetEventDocuments', inputs));
}

/** DataActionGet_EventQRCode of ScreenBlock_GenerateQRCode: the QR code pass of the member. */
export async function fetchEventQRCode(inputs: EventQRCodeCallInputs): Promise<EventQRCodeData> {
  return toEventQRCodeData(await callAction(ORBIT, 'ScreenBlock_GenerateQRCode/DataActionGet_EventQRCode', inputs));
}

/* ---- Orbit admin ---- */

/** DataActionGet_AdminEventsList of ScreenBlock_AdminLanding: the events of the admin. */
export async function fetchAdminEvents(inputs: AdminEventsCallInputs): Promise<AdminEventItem[]> {
  return toAdminEventItems(await callAction(ORBIT, 'ScreenBlock_AdminLanding/DataActionGet_AdminEventsList', inputs));
}

/** GetMilestoneScanFF (server action of the screen OrbitAdminLanding, UBTConnect): IsScanPerMilestone. No inputs. */
export async function fetchMilestoneScanFF(): Promise<boolean> {
  return toMilestoneScanFF(await callAction('UBTConnect', 'ActionGetMilestoneScanFF', {}));
}

/** DataActionGet_EventInformation of ScreenBlock_AdminEventDetail: HasQRCode and the event type. */
export async function fetchAdminEventInformation(
  inputs: AdminEventInformationCallInputs,
): Promise<AdminEventInformation> {
  return toAdminEventInformation(
    await callAction(ORBIT, 'ScreenBlock_AdminEventDetail/DataActionGet_EventInformation', inputs),
  );
}

/** GetScanEventQRCode (server action of ScreenBlock_AdminEventDetail): the check-in of a scanned member at the event.
    The admin scan runs it; the mocks answer it. */
export async function fetchScanEventQRCode(
  eventId: string,
  memberId: string,
  member: ScannedMemberNames,
  admin: ScannerAdmin,
): Promise<ScanEventQRCodeResult> {
  return toScanEventQRCodeResult(
    await callAction(ORBIT, 'ActionGetScanEventQRCode', toScanEventQRCodeInputs(eventId, memberId, member, admin)),
  );
}

/* ---- LDM meal events ---- */

/** DataActionGetEventByEventId of ScreenBlock_EventDetail_V2: the meal, its host, guests and special needs. */
export async function fetchEventByEventId(inputs: LdmEventCallInputs): Promise<EventByEventIdData> {
  return toEventByEventIdData(
    await callAction(ORBIT, 'ScreenBlock_EventDetail_V2/DataActionGetEventByEventId', inputs),
  );
}

/** DataActionGetCoordinatorDetails of ScreenBlock_EventDetail_V2: the coordinator of the meal. */
export async function fetchCoordinatorDetails(inputs: LdmEventCallInputs): Promise<CoordinatorDetailsData> {
  return toCoordinatorDetailsData(
    await callAction(ORBIT, 'ScreenBlock_EventDetail_V2/DataActionGetCoordinatorDetails', inputs),
  );
}

/** DataActionGetEventsForMyTimeline of ScreenBlock_MyEvents_V2: the past events by month and the upcoming events. */
export async function fetchEventsForMyTimeline(inputs: MyTimelineCallInputs): Promise<MyTimelineData> {
  return toMyTimelineData(
    await callAction(ORBIT, 'ScreenBlock_MyEvents_V2/DataActionGetEventsForMyTimeline', toMyTimelineInputs(inputs)),
  );
}
