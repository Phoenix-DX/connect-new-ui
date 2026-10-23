import { useMutation, useQuery, type QueryKey, type UseQueryOptions } from '@tanstack/react-query';
import { eventKeys } from './keys';
import {
  fetchAccommodationHost,
  fetchAccommodationHostDocument,
  fetchAdminEventInformation,
  fetchAdminEvents,
  fetchAssembleEvent,
  fetchAssembleEventTypes,
  fetchAssembleMeetings,
  fetchCoordinatorDetails,
  fetchEventBookletFilters,
  fetchEventBookletGuests,
  fetchEventBookletHelpers,
  fetchEventByEventId,
  fetchEventDetails,
  fetchEventDocuments,
  fetchEventQRCode,
  fetchEventsByMemberId,
  fetchEventsForMyTimeline,
  fetchGmpMilestoneHost,
  fetchGuestArrangements,
  fetchHasDocuments,
  fetchHasQRCode,
  fetchHelperDetails,
  fetchHostSurvey,
  fetchHostSurveyStatus,
  fetchScanEventQRCode,
  fetchTransportDetail,
} from './repository';
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
  ScannedMemberNames,
  ScannerAdmin,
  TransportDetailCallInputs,
  TransportDetails,
} from './types';

/* The data actions of the event domain as queries, and the check-in as a mutation. The screens still call the
   repository functions in their flows: these hooks have no caller yet. */

/** The query options that a caller can set (for example `enabled`). The key, the query function and the cache times
    are fixed. */
export type EventQueryOptions<T> = Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn' | 'staleTime' | 'gcTime'>;

/** No cache: each fetch calls the server, as OutSystems does, so the calls stay equal to the original (call parity,
    refactor plan v2 §5.4). */
const NO_CACHE = { staleTime: 0, gcTime: 0 } as const;

/** A query of one event call. No retry by default: OutSystems does not retry a failed data action. */
function useEventQuery<T>(queryKey: QueryKey, queryFn: () => Promise<T>, options: EventQueryOptions<T>) {
  return useQuery({ retry: false, ...options, queryKey, queryFn, ...NO_CACHE });
}

/* ---- Assemble meetings ---- */

/** DataActionGetAssembleEvent as a query. */
export function useAssembleEventQuery(
  inputs: AssembleEventCallInputs,
  options: EventQueryOptions<AssembleEventResult> = {},
) {
  return useEventQuery(eventKeys.assembleEvent(inputs), () => fetchAssembleEvent(inputs), options);
}

/** DataActionGetAssembleEventTypes as a query. */
export function useAssembleEventTypesQuery(options: EventQueryOptions<AssembleEventTypeItem[]> = {}) {
  return useEventQuery(eventKeys.assembleEventTypes(), fetchAssembleEventTypes, options);
}

/** DataActionGetAssembleMeetingSummaryList as a query (one page). */
export function useAssembleMeetingsQuery(
  query: AssembleMeetingListQuery,
  options: EventQueryOptions<AssembleMeeting[]> = {},
) {
  return useEventQuery(eventKeys.assembleMeetings(query), () => fetchAssembleMeetings(query), options);
}

/* ---- Orbit events, event detail and booklet ---- */

/** DataActionGet_EventsByMemberId as a query. */
export function useEventsByMemberIdQuery(
  inputs: OrbitLandingCallInputs,
  options: EventQueryOptions<EventsByMemberIdResult> = {},
) {
  return useEventQuery(eventKeys.eventsByMemberId(inputs), () => fetchEventsByMemberId(inputs), options);
}

/** DataActionGet_EventDetails as a query. */
export function useEventDetailsQuery(
  inputs: EventDetailCallInputs,
  options: EventQueryOptions<EventDetailsResult> = {},
) {
  return useEventQuery(eventKeys.eventDetails(inputs), () => fetchEventDetails(inputs), options);
}

/** DataActionGet_HostSurveyStatus as a query. */
export function useHostSurveyStatusQuery(inputs: EventDetailCallInputs, options: EventQueryOptions<string> = {}) {
  return useEventQuery(eventKeys.hostSurveyStatus(inputs), () => fetchHostSurveyStatus(inputs), options);
}

/** DataActionGet_HasDocuments as a query. */
export function useHasDocumentsQuery(inputs: EventDetailCallInputs, options: EventQueryOptions<boolean> = {}) {
  return useEventQuery(eventKeys.hasDocuments(inputs), () => fetchHasDocuments(inputs), options);
}

/** DataActionGet_HasQRCode as a query. */
export function useHasQRCodeQuery(inputs: EventDetailCallInputs, options: EventQueryOptions<EventQRCodeStatus> = {}) {
  return useEventQuery(eventKeys.hasQRCode(inputs), () => fetchHasQRCode(inputs), options);
}

/** DataActionGet_EventBookletFilters as a query. */
export function useEventBookletFiltersQuery(
  inputs: EventBookletCallInputs,
  options: EventQueryOptions<EventBookletFiltersResponse> = {},
) {
  return useEventQuery(eventKeys.eventBookletFilters(inputs), () => fetchEventBookletFilters(inputs), options);
}

/** DataActionGet_EventBookletGuests as a query (one page). */
export function useEventBookletGuestsQuery(
  inputs: EventBookletCallInputs,
  options: EventQueryOptions<EventBookletMember[]> = {},
) {
  return useEventQuery(eventKeys.eventBookletGuests(inputs), () => fetchEventBookletGuests(inputs), options);
}

/** DataActionGet_EventBookletHelpers as a query (one page). */
export function useEventBookletHelpersQuery(
  inputs: EventBookletCallInputs,
  options: EventQueryOptions<EventBookletMember[]> = {},
) {
  return useEventQuery(eventKeys.eventBookletHelpers(inputs), () => fetchEventBookletHelpers(inputs), options);
}

/* ---- Orbit guest arrangements, helpers, accommodation, host survey ---- */

/** DataActionGetGuestArrangements as a query. */
export function useGuestArrangementsQuery(
  inputs: GuestArrangementsCallInputs,
  options: EventQueryOptions<GuestArrangementsResult> = {},
) {
  return useEventQuery(eventKeys.guestArrangements(inputs), () => fetchGuestArrangements(inputs), options);
}

/** DataActionGetHelperDetails as a query. */
export function useHelperDetailsQuery(inputs: HelperDetailsCallInputs, options: EventQueryOptions<HelperData> = {}) {
  return useEventQuery(eventKeys.helperDetails(inputs), () => fetchHelperDetails(inputs), options);
}

/** DataActionGetAccommodationHost as a query. */
export function useAccommodationHostQuery(
  inputs: AccommodationHostCallInputs,
  options: EventQueryOptions<AccommodationHostResult> = {},
) {
  return useEventQuery(eventKeys.accommodationHost(inputs), () => fetchAccommodationHost(inputs), options);
}

/** DataActionGet_Document of ScreenBlock_AccommodationHost as a query. */
export function useAccommodationHostDocumentQuery(
  inputs: AccommodationHostCallInputs,
  options: EventQueryOptions<AccommodationHostDocument> = {},
) {
  return useEventQuery(
    eventKeys.accommodationHostDocument(inputs),
    () => fetchAccommodationHostDocument(inputs),
    options,
  );
}

/** DataActionGetGmpMilestoneHost as a query. */
export function useGmpMilestoneHostQuery(
  inputs: GmpMilestoneHostCallInputs,
  options: EventQueryOptions<GmpMilestoneHost> = {},
) {
  return useEventQuery(eventKeys.gmpMilestoneHost(inputs), () => fetchGmpMilestoneHost(inputs), options);
}

/** DataActionGetHostSurvey as a query. */
export function useHostSurveyQuery(inputs: HostSurveyCallInputs, options: EventQueryOptions<HostSurveyResult> = {}) {
  return useEventQuery(eventKeys.hostSurvey(inputs), () => fetchHostSurvey(inputs), options);
}

/* ---- Orbit transport, documents, QR code and admin ---- */

/** DataActionGet_TransportDetail as a query. */
export function useTransportDetailQuery(
  inputs: TransportDetailCallInputs,
  options: EventQueryOptions<TransportDetails> = {},
) {
  return useEventQuery(eventKeys.transportDetail(inputs), () => fetchTransportDetail(inputs), options);
}

/** DataActionGetEventDocuments as a query. */
export function useEventDocumentsQuery(
  inputs: EventDocumentsCallInputs,
  options: EventQueryOptions<EventDocumentItem[]> = {},
) {
  return useEventQuery(eventKeys.eventDocuments(inputs), () => fetchEventDocuments(inputs), options);
}

/** DataActionGet_EventQRCode as a query. */
export function useEventQRCodeQuery(inputs: EventQRCodeCallInputs, options: EventQueryOptions<EventQRCodeData> = {}) {
  return useEventQuery(eventKeys.eventQRCode(inputs), () => fetchEventQRCode(inputs), options);
}

/** DataActionGet_AdminEventsList as a query. */
export function useAdminEventsQuery(inputs: AdminEventsCallInputs, options: EventQueryOptions<AdminEventItem[]> = {}) {
  return useEventQuery(eventKeys.adminEvents(inputs), () => fetchAdminEvents(inputs), options);
}

/** DataActionGet_EventInformation as a query. */
export function useAdminEventInformationQuery(
  inputs: AdminEventInformationCallInputs,
  options: EventQueryOptions<AdminEventInformation> = {},
) {
  return useEventQuery(eventKeys.adminEventInformation(inputs), () => fetchAdminEventInformation(inputs), options);
}

/** The variables of the check-in of a scanned member. */
export interface ScanEventQRCodeVariables {
  eventId: string;
  memberId: string;
  member: ScannedMemberNames;
  admin: ScannerAdmin;
}

/** GetScanEventQRCode as a mutation. A mutation does not retry by default, as OutSystems. */
export function useScanEventQRCodeMutation() {
  return useMutation({
    mutationFn: ({ eventId, memberId, member, admin }: ScanEventQRCodeVariables) =>
      fetchScanEventQRCode(eventId, memberId, member, admin),
  });
}

/* ---- LDM meal events ---- */

/** DataActionGetEventByEventId as a query. */
export function useEventByEventIdQuery(
  inputs: LdmEventCallInputs,
  options: EventQueryOptions<EventByEventIdData> = {},
) {
  return useEventQuery(eventKeys.eventByEventId(inputs), () => fetchEventByEventId(inputs), options);
}

/** DataActionGetCoordinatorDetails as a query. */
export function useCoordinatorDetailsQuery(
  inputs: LdmEventCallInputs,
  options: EventQueryOptions<CoordinatorDetailsData> = {},
) {
  return useEventQuery(eventKeys.coordinatorDetails(inputs), () => fetchCoordinatorDetails(inputs), options);
}

/** DataActionGetEventsForMyTimeline as a query. */
export function useEventsForMyTimelineQuery(
  inputs: MyTimelineCallInputs,
  options: EventQueryOptions<MyTimelineData> = {},
) {
  return useEventQuery(eventKeys.eventsForMyTimeline(inputs), () => fetchEventsForMyTimeline(inputs), options);
}
