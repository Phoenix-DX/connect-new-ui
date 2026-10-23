import { QueryClient, QueryClientProvider, type UseQueryResult } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import {
  useAccommodationHostDocumentQuery,
  useAccommodationHostQuery,
  useAdminEventInformationQuery,
  useAdminEventsQuery,
  useAssembleEventQuery,
  useAssembleEventTypesQuery,
  useAssembleMeetingsQuery,
  useCoordinatorDetailsQuery,
  useEventBookletFiltersQuery,
  useEventBookletGuestsQuery,
  useEventBookletHelpersQuery,
  useEventByEventIdQuery,
  useEventDetailsQuery,
  useEventDocumentsQuery,
  useEventQRCodeQuery,
  useEventsByMemberIdQuery,
  useEventsForMyTimelineQuery,
  useGmpMilestoneHostQuery,
  useGuestArrangementsQuery,
  useHasDocumentsQuery,
  useHasQRCodeQuery,
  useHelperDetailsQuery,
  useHostSurveyQuery,
  useHostSurveyStatusQuery,
  useScanEventQRCodeMutation,
  useTransportDetailQuery,
} from './hooks';
import { eventKeys } from './keys';
import type {
  AccommodationHostCallInputs,
  AdminEventInformationCallInputs,
  AdminEventsCallInputs,
  AssembleEventCallInputs,
  AssembleMeetingListQuery,
  EventBookletCallInputs,
  EventDetailCallInputs,
  EventDocumentsCallInputs,
  EventQRCodeCallInputs,
  GmpMilestoneHostCallInputs,
  GuestArrangementsCallInputs,
  HelperDetailsCallInputs,
  HostSurveyCallInputs,
  LdmEventCallInputs,
  MyTimelineCallInputs,
  OrbitLandingCallInputs,
  TransportDetailCallInputs,
} from './types';

const NULL_DATE_TIME = '1900-01-01T00:00:00';

/** The variables of every block in one object: each hook takes the variables of its type and sends them all. The
    answers do not matter here, only the calls. */
const blockVariables: EventDetailCallInputs &
  EventBookletCallInputs &
  OrbitLandingCallInputs &
  GuestArrangementsCallInputs &
  HelperDetailsCallInputs &
  AccommodationHostCallInputs &
  HostSurveyCallInputs &
  TransportDetailCallInputs &
  EventDocumentsCallInputs &
  EventQRCodeCallInputs &
  AdminEventsCallInputs &
  AdminEventInformationCallInputs &
  LdmEventCallInputs &
  MyTimelineCallInputs &
  AssembleEventCallInputs &
  AssembleMeetingListQuery = {
  IsFetchingData: true,
  HasQRCode: false,
  HasScanned: false,
  HasDocuments: false,
  IsEventUnavailable: false,
  UserInformation: { UserMemberId: MOCK_USER_ID, HouseholderId: MOCK_USER_ID, SpouseMemberId: '0' },
  In_MemberId: MOCK_USER_ID,
  In_EventId: '7301',
  In_EventName: 'Weekend Bible Conferences - Bahia and Azul',
  In_FromNotification: false,
  IsGuestView: true,
  IsSearchMode: false,
  FiltersPopUp: false,
  HasFiltersApplied: false,
  SelectedFilters: {
    SearchTerm: '',
    DateRange: { List: [] },
    HelperRoles: { List: [] },
    Countries: { List: [] },
    Localities: { List: [] },
  },
  PaginationSettings: {
    Guest_MaxRows: 10,
    Guest_PageNumber: 1,
    Guest_IsNewSearch: true,
    Guest_NoResults: false,
    Guest_ScrollThreshold: '200',
    Helper_MaxRows: 5,
    Helper_PageNumber: 1,
    Helper_IsNewSearch: true,
    Helper_NoResults: false,
    Helper_ScrollThreshold: '200',
  },
  SelectedMemberId: MOCK_USER_ID,
  EventFilter: 1,
  SortEventsASC: true,
  Popup_SortByOpened: false,
  Popup_FiltersOpened: false,
  CurrentMemberId: MOCK_USER_ID,
  In_HostId: '0',
  In_MilestoneId: '7301-1',
  In_PreloadEventName: 'Weekend Bible Conferences - Bahia and Azul',
  In_PreloadMilestoneName: 'Accommodation',
  In_OrbitMilestoneTypeId: '',
  IsFetchingPhoneData: false,
  IsLoadingDocument: false,
  HasDocument: false,
  IsAddingHelper: false,
  PositionToDelete: 0,
  SurveyDiscarded: false,
  SurveySubmitted: false,
  IsConfirmedSurvey: false,
  HasDataSteps: false,
  IsPostingSurvey: false,
  In_EventStartDate: NULL_DATE_TIME,
  In_EventEndDate: NULL_DATE_TIME,
  Title: 'Flight to Bahia Blanca',
  In_HeaderClass: '',
  In_EventLocation: 'Bahia Blanca Main Hall',
  UserName: 'Lucia Vitale',
  UserLocation: 'Bahia Blanca, Argentina',
  UserSignedURL: '',
  UserFirstName: 'Lucia',
  UserMemberId: MOCK_USER_ID,
  In_EventTypeFriendly: 'Conference',
  IsProcessingData: false,
  QRCodePopupOpened: false,
  EventHostId: '0',
  EventId: '0',
  CurrentEventView: 1,
  DefaultDateRangeInMonths: 24,
  IsFiltering: false,
  IsFetchingMyTimeline: true,
  PastEventFilters: { FromDate: '', ToDate: '9999-12-31', Localities: [] },
  SeriesId: '',
  Start: '',
  DeviceTimezone: 'America/Argentina/Buenos_Aires',
  IsDataFetched: false,
  SubdivisionId: '1210',
  LocalSubdivisionId: '0',
  EventList_Filter: { AssembleFilterTimeOptionId: 'Upcoming Meetings', AssembleEventType: [] },
  EventList_RangeFrom: '',
  EventsList_RangeTo: '',
  EventList_PageNumber: 1,
  MaxRecords: 10,
};

/** A client with the library defaults (retry 3), so the tests see the options of the hooks. */
function providerOf(client: QueryClient) {
  return function Provider({ children }: { children: ReactNode }) {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
  };
}
const calls = () => (window.__osCalls ?? []).map((c) => c.action);

beforeEach(() => {
  sessionStorage.setItem('mock:latency', '0');
  window.__osCalls = [];
});
afterEach(() => {
  sessionStorage.clear();
});

describe('event query keys', () => {
  it('the inputs are part of the key', () => {
    expect(eventKeys.eventDetails(blockVariables)).toEqual(['event', 'eventDetails', blockVariables]);
    expect(eventKeys.assembleEventTypes()).toEqual(['event', 'assembleEventTypes']);
    expect(eventKeys.eventByEventId({ EventHostId: '0', EventId: '42' })).toEqual([
      'event',
      'eventByEventId',
      { EventHostId: '0', EventId: '42' },
    ]);
  });
});

interface HookCase {
  name: string;
  action: string;
  key: readonly unknown[];
  use: () => UseQueryResult;
}

const v = blockVariables;
/** The variables of ScreenBlock_MilestoneWrapper (the contract inputs, with their index signature). */
const gmpMilestoneHostInputs: GmpMilestoneHostCallInputs = {
  In_EventId: '7301',
  In_MilestoneId: '7301-1',
  IsFetchingData: true,
};
const hookCases: HookCase[] = [
  {
    name: 'useAssembleEventQuery',
    action: 'DataActionGetAssembleEvent',
    key: eventKeys.assembleEvent(v),
    use: () => useAssembleEventQuery(v),
  },
  {
    name: 'useAssembleEventTypesQuery',
    action: 'DataActionGetAssembleEventTypes',
    key: eventKeys.assembleEventTypes(),
    use: () => useAssembleEventTypesQuery(),
  },
  {
    name: 'useAssembleMeetingsQuery',
    action: 'DataActionGetAssembleMeetingSummaryList',
    key: eventKeys.assembleMeetings(v),
    use: () => useAssembleMeetingsQuery(v),
  },
  {
    name: 'useEventsByMemberIdQuery',
    action: 'DataActionGet_EventsByMemberId',
    key: eventKeys.eventsByMemberId(v),
    use: () => useEventsByMemberIdQuery(v),
  },
  {
    name: 'useEventDetailsQuery',
    action: 'DataActionGet_EventDetails',
    key: eventKeys.eventDetails(v),
    use: () => useEventDetailsQuery(v),
  },
  {
    name: 'useHostSurveyStatusQuery',
    action: 'DataActionGet_HostSurveyStatus',
    key: eventKeys.hostSurveyStatus(v),
    use: () => useHostSurveyStatusQuery(v),
  },
  {
    name: 'useHasDocumentsQuery',
    action: 'DataActionGet_HasDocuments',
    key: eventKeys.hasDocuments(v),
    use: () => useHasDocumentsQuery(v),
  },
  {
    name: 'useHasQRCodeQuery',
    action: 'DataActionGet_HasQRCode',
    key: eventKeys.hasQRCode(v),
    use: () => useHasQRCodeQuery(v),
  },
  {
    name: 'useEventBookletFiltersQuery',
    action: 'DataActionGet_EventBookletFilters',
    key: eventKeys.eventBookletFilters(v),
    use: () => useEventBookletFiltersQuery(v),
  },
  {
    name: 'useEventBookletGuestsQuery',
    action: 'DataActionGet_EventBookletGuests',
    key: eventKeys.eventBookletGuests(v),
    use: () => useEventBookletGuestsQuery(v),
  },
  {
    name: 'useEventBookletHelpersQuery',
    action: 'DataActionGet_EventBookletHelpers',
    key: eventKeys.eventBookletHelpers(v),
    use: () => useEventBookletHelpersQuery(v),
  },
  {
    name: 'useGuestArrangementsQuery',
    action: 'DataActionGetGuestArrangements',
    key: eventKeys.guestArrangements(v),
    use: () => useGuestArrangementsQuery(v),
  },
  {
    name: 'useHelperDetailsQuery',
    action: 'DataActionGetHelperDetails',
    key: eventKeys.helperDetails(v),
    use: () => useHelperDetailsQuery(v),
  },
  {
    name: 'useAccommodationHostQuery',
    action: 'DataActionGetAccommodationHost',
    key: eventKeys.accommodationHost(v),
    use: () => useAccommodationHostQuery(v),
  },
  {
    name: 'useAccommodationHostDocumentQuery',
    action: 'DataActionGet_Document',
    key: eventKeys.accommodationHostDocument(v),
    use: () => useAccommodationHostDocumentQuery(v),
  },
  {
    name: 'useGmpMilestoneHostQuery',
    action: 'DataActionGetGmpMilestoneHost',
    key: eventKeys.gmpMilestoneHost(gmpMilestoneHostInputs),
    use: () => useGmpMilestoneHostQuery(gmpMilestoneHostInputs),
  },
  {
    name: 'useHostSurveyQuery',
    action: 'DataActionGetHostSurvey',
    key: eventKeys.hostSurvey(v),
    use: () => useHostSurveyQuery(v),
  },
  {
    name: 'useTransportDetailQuery',
    action: 'DataActionGet_TransportDetail',
    key: eventKeys.transportDetail(v),
    use: () => useTransportDetailQuery(v),
  },
  {
    name: 'useEventDocumentsQuery',
    action: 'DataActionGetEventDocuments',
    key: eventKeys.eventDocuments(v),
    use: () => useEventDocumentsQuery(v),
  },
  {
    name: 'useEventQRCodeQuery',
    action: 'DataActionGet_EventQRCode',
    key: eventKeys.eventQRCode(v),
    use: () => useEventQRCodeQuery(v),
  },
  {
    name: 'useAdminEventsQuery',
    action: 'DataActionGet_AdminEventsList',
    key: eventKeys.adminEvents(v),
    use: () => useAdminEventsQuery(v),
  },
  {
    name: 'useAdminEventInformationQuery',
    action: 'DataActionGet_EventInformation',
    key: eventKeys.adminEventInformation(v),
    use: () => useAdminEventInformationQuery(v),
  },
  {
    name: 'useEventByEventIdQuery',
    action: 'DataActionGetEventByEventId',
    key: eventKeys.eventByEventId(v),
    use: () => useEventByEventIdQuery(v),
  },
  {
    name: 'useCoordinatorDetailsQuery',
    action: 'DataActionGetCoordinatorDetails',
    key: eventKeys.coordinatorDetails(v),
    use: () => useCoordinatorDetailsQuery(v),
  },
  {
    name: 'useEventsForMyTimelineQuery',
    action: 'DataActionGetEventsForMyTimeline',
    key: eventKeys.eventsForMyTimeline(v),
    use: () => useEventsForMyTimelineQuery(v),
  },
];

describe('event query hooks', () => {
  it('cover the 25 data actions of the domain', () => {
    expect(new Set(hookCases.map((c) => c.action)).size).toBe(25);
  });

  it.each(hookCases)('$name calls $action once and keeps nothing in the cache after unmount', async (c) => {
    const client = new QueryClient();
    const { result, unmount } = renderHook(() => c.use(), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual([c.action]);
    unmount();
    await waitFor(() => {
      expect(client.getQueryCache().find({ queryKey: c.key })).toBeUndefined();
    });
  });

  it.each(hookCases)('$name does not retry a failed call by default', async (c) => {
    sessionStorage.setItem('mock:mock', 'error');
    const client = new QueryClient();
    const { result } = renderHook(() => c.use(), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(calls()).toEqual([c.action]);
  });

  it('a new mount calls the server again (staleTime 0, gcTime 0)', async () => {
    const client = new QueryClient();
    const first = renderHook(() => useEventDetailsQuery(v), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(first.result.current.isSuccess).toBe(true);
    });
    expect(first.result.current.data?.response.EventId).toBe('7301');
    first.unmount();
    const second = renderHook(() => useEventDetailsQuery(v), { wrapper: providerOf(client) });
    await waitFor(() => {
      expect(second.result.current.isSuccess).toBe(true);
    });
    expect(calls()).toEqual(['DataActionGet_EventDetails', 'DataActionGet_EventDetails']);
  });

  it('does not call the server when the caller disables the query', async () => {
    const client = new QueryClient();
    const { result } = renderHook(() => useAssembleEventTypesQuery({ enabled: false }), {
      wrapper: providerOf(client),
    });
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(result.current.fetchStatus).toBe('idle');
    expect(calls()).toEqual([]);
  });
});

describe('useScanEventQRCodeMutation', () => {
  it('calls GetScanEventQRCode once per scan, without a retry after a failure', async () => {
    const client = new QueryClient();
    const { result } = renderHook(() => useScanEventQRCodeMutation(), { wrapper: providerOf(client) });
    const scan = {
      eventId: '7301',
      memberId: '990101',
      member: { FirstName: 'Mateo', Lastname: 'Herrera', LocalityName: 'Monte Hermoso', CountryName: 'Argentina' },
      admin: {
        MemberId: MOCK_USER_ID,
        FirstName: 'Lucia',
        LastName: 'Vitale',
        Locality: 'Bahia Blanca',
        Country: 'Argentina',
      },
    };
    const answer = await act(() => result.current.mutateAsync(scan));
    expect(answer.Status.Success).toBe(true);
    expect(calls()).toEqual(['ActionGetScanEventQRCode']);

    sessionStorage.setItem('mock:mock', 'error');
    await act(async () => {
      await expect(result.current.mutateAsync(scan)).rejects.toThrow('Request failed with status 500');
    });
    expect(calls()).toEqual(['ActionGetScanEventQRCode', 'ActionGetScanEventQRCode']);
  });
});
