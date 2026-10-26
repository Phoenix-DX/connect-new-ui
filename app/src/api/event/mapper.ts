import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import { osDate, osList, osNumber, wireList } from '@/lib/os-wire';
import type {
  AccommodationHostDocument,
  AccommodationHostResult,
  AdminEventInformation,
  AdminEventItem,
  AssembleAttendeeGuest,
  AssembleEventFilter,
  AssembleEventResult,
  AssembleEventTypeItem,
  AssembleLocalityDetails,
  AssembleMeeting,
  AssembleMeetingListQuery,
  CoordinatorDetailsData,
  EventBookletCallInputs,
  EventBookletFiltersResponse,
  EventBookletMember,
  EventBookletPaginationSettings,
  EventBookletSelectedFilters,
  EventByEventIdData,
  EventCalendar,
  EventDetailsResult,
  EventDocumentItem,
  EventQRCodeData,
  EventQRCodeStatus,
  EventsByMemberIdResult,
  EventsSummaryItem,
  GmpMilestoneHost,
  GuestArrangementsResult,
  HelperData,
  HelperItem,
  HostSurvey,
  HostSurveyCallInputs,
  HostSurveyResult,
  MemberInformation,
  MilestoneTransportItem,
  Milestone_Screen,
  MyTimelineCallInputs,
  MyTimelineData,
  OrbitEventDetails,
  ScanEventQRCodeResult,
  ScannedMemberNames,
  ScannerAdmin,
  TransportDetails,
  TransportLocation,
} from './types';

/* The outputs of each call, as the contract describes them, and the mappers to the domain types. */

type Assemble<A extends string> = ActionOutputs<PathOf<'Connect2_Assemble_MUI', A>>;
type Orbit<A extends string> = ActionOutputs<PathOf<'Connect2_OrbitMobile_MUI', A>>;

/** DataActionGetAssembleEvent of AssembleEventDetail. */
export type AssembleEventWire = Assemble<'AssembleEventDetail/DataActionGetAssembleEvent'>;
/** DataActionGetAssembleEventTypes of AssembleSummary_List. */
export type AssembleEventTypesWire = Assemble<'AssembleSummary_List/DataActionGetAssembleEventTypes'>;
/** DataActionGetAssembleMeetingSummaryList of AssembleSummary_List. */
export type AssembleMeetingsWire = Assemble<'AssembleSummary_List/DataActionGetAssembleMeetingSummaryList'>;
/** DataActionGet_EventBookletFilters of ScreenBlock_EventBooklet. */
export type EventBookletFiltersWire = Orbit<'ScreenBlock_EventBooklet/DataActionGet_EventBookletFilters'>;
/** DataActionGet_EventBookletGuests of ScreenBlock_EventBooklet (the helpers answer the same record list). */
export type EventBookletMembersWire = Orbit<'ScreenBlock_EventBooklet/DataActionGet_EventBookletGuests'>;
/** DataActionGet_EventDetails of ScreenBlock_EventDetail. */
export type EventDetailsWire = Orbit<'ScreenBlock_EventDetail/DataActionGet_EventDetails'>;
type HostSurveyStatusWire = Orbit<'ScreenBlock_EventDetail/DataActionGet_HostSurveyStatus'>;
type HasDocumentsWire = Orbit<'ScreenBlock_EventDetail/DataActionGet_HasDocuments'>;
type HasQRCodeWire = Orbit<'ScreenBlock_EventDetail/DataActionGet_HasQRCode'>;
/** DataActionGetGuestArrangements of ScreenBlock_GuestArrangements. */
export type GuestArrangementsWire = Orbit<'ScreenBlock_GuestArrangements/DataActionGetGuestArrangements'>;
/** DataActionGetHelperDetails of ScreenBlock_HelperDetails. */
export type HelperDetailsWire = Orbit<'ScreenBlock_HelperDetails/DataActionGetHelperDetails'>;
/** DataActionGetHostSurvey of ScreenBlock_HostSurvey. */
export type HostSurveyWire = Orbit<'ScreenBlock_HostSurvey/DataActionGetHostSurvey'>;
/** DataActionGetEventByEventId of ScreenBlock_EventDetail_V2. */
export type EventByEventIdWire = Orbit<'ScreenBlock_EventDetail_V2/DataActionGetEventByEventId'>;
/** DataActionGetCoordinatorDetails of ScreenBlock_EventDetail_V2. */
export type CoordinatorDetailsWire = Orbit<'ScreenBlock_EventDetail_V2/DataActionGetCoordinatorDetails'>;
/** DataActionGetEventsForMyTimeline of ScreenBlock_MyEvents_V2. */
export type MyTimelineWire = Orbit<'ScreenBlock_MyEvents_V2/DataActionGetEventsForMyTimeline'>;
/** DataActionGetAccommodationHost of ScreenBlock_AccommodationHost. */
export type AccommodationHostWire = Orbit<'ScreenBlock_AccommodationHost/DataActionGetAccommodationHost'>;
type AccommodationHostDocumentWire = Orbit<'ScreenBlock_AccommodationHost/DataActionGet_Document'>;
type GmpMilestoneHostWire = Orbit<'ScreenBlock_MilestoneWrapper/DataActionGetGmpMilestoneHost'>;
type AdminEventInformationWire = Orbit<'ScreenBlock_AdminEventDetail/DataActionGet_EventInformation'>;
/** The server action GetScanEventQRCode of Connect2_OrbitMobile_MUI. */
export type ScanEventQRCodeWire = Orbit<'ActionGetScanEventQRCode'>;
type ScanEventQRCodeInputsWire = ActionInputs<PathOf<'Connect2_OrbitMobile_MUI', 'ActionGetScanEventQRCode'>>;
/** DataActionGet_AdminEventsList of ScreenBlock_AdminLanding. */
export type AdminEventsWire = Orbit<'ScreenBlock_AdminLanding/DataActionGet_AdminEventsList'>;
type MilestoneScanFFWire = ActionOutputs<PathOf<'UBTConnect', 'ActionGetMilestoneScanFF'>>;
/** DataActionGet_EventsByMemberId of ScreenBlock_OrbitLanding. */
export type EventsByMemberIdWire = Orbit<'ScreenBlock_OrbitLanding/DataActionGet_EventsByMemberId'>;
/** DataActionGet_EventQRCode of ScreenBlock_GenerateQRCode. */
export type EventQRCodeWire = Orbit<'ScreenBlock_GenerateQRCode/DataActionGet_EventQRCode'>;
/** DataActionGet_TransportDetail of ScreenBlock_TransportDetail. */
export type TransportDetailWire = Orbit<'ScreenBlock_TransportDetail/DataActionGet_TransportDetail'>;
/** DataActionGetEventDocuments of ScreenBlock_ViewDocuments. */
export type EventDocumentsWire = Orbit<'ScreenBlock_ViewDocuments/DataActionGetEventDocuments'>;
type BookletGuestsMaxRowsWire = Orbit<'ActionGetBookletGuestsMaxRows'>;
type BookletHelpersMaxRowsWire = Orbit<'ActionGetBookletHelpersMaxRows'>;

type AssembleGuestWire = AssembleEventWire['AssembleEvent']['AssembleAttendeeSpecialGuestList']['List'][number];
type AssembleLocalitiesWire = AssembleEventWire['AssembleEvent']['AssembleAttendeeSubdivisionList'];
type AssembleSummaryWire = AssembleMeetingsWire['AssembleSummaryMeetingList']['List'][number];
type EventBookletMemberWire = EventBookletMembersWire['Response']['List'][number];
type MilestoneWire = EventDetailsWire['Response']['Milestones']['List'][number];
type OrbitEventDetailsWire = HelperDetailsWire['Response']['GetHelperHost_Response']['EventDetails'];
type HelperItemWire = HelperDetailsWire['Response']['GetHelperHost_Response']['Helpers']['List'][number];
type MemberInformationWire = HelperItemWire['MemberInformation']['List'][number];
type MilestoneTransportWire = GuestArrangementsWire['Response']['ArrivalDetails']['List'][number];
type HostSurveyResponseWire = HostSurveyWire['Response'];
type EventCalendarWire = MyTimelineWire['Out_UpcomingEvents']['List'][number];
type AdminOrbitEventWire = AdminEventsWire['Response']['List'][number];
type OrbitEventsSummaryWire = EventsByMemberIdWire['Response']['List'][number];
type TransportLocationWire = TransportDetailWire['Response']['TransportDetail']['DepartureLocation'];

/** The OutSystems null DateTime as it travels. */
const NULL_DATE_TIME = '1900-01-01T00:00:00';

/** A Date or DateTime as text, "" for the OutSystems null date (the formatters of the UI treat "" as null). */
const nullDateAsEmpty = (value: string): string => (value.startsWith('1900-01-01') ? '' : value);

/* ---- Assemble meetings ---- */

const toAssembleAttendeeGuest = (g: AssembleGuestWire): AssembleAttendeeGuest => ({
  Id: g.Id,
  Name: g.Name,
  FamilyNames: g.FamilyNames,
  Location: g.Location,
  IsBookmarked: g.IsBookmarked,
  IsDisabled: g.IsDisabled,
  AvatarURL: {
    Bucket: g.AvatarURL.Bucket,
    Path: g.AvatarURL.Path,
    Type: g.AvatarURL.Type,
    SignedURL: g.AvatarURL.SignedURL,
  },
});

const toAssembleLocalities = (list: AssembleLocalitiesWire): AssembleLocalityDetails[] =>
  osList(list).map((l) => ({
    LocalityId: l.LocalityId,
    LocalityName: l.LocalityName,
    AssembleAttendeeSubdivisionList: osList(l.AssembleAttendeeSubdivisionList).map((s) => ({
      Id: s.Id,
      Name: s.Name,
      HouseholdCount: Number(s.HouseholdCount),
      LocalityId: s.LocalityId,
      SubdivisionHouseholdList: osList(s.SubdivisionHouseholdList).map(toAssembleAttendeeGuest),
    })),
  }));

/** The summary of a meeting: every attribute that travels, with the null DateTime as "" and the counts and the
    coordinates as numbers. */
const toAssembleSummary = (s: AssembleSummaryWire) => ({
  ...s,
  DateTime: osDate(s.DateTime) ?? '',
  BrothersCount: Number(s.BrothersCount),
  SistersCount: Number(s.SistersCount),
  HostingSubdivisionLatitude: Number(s.HostingSubdivisionLatitude),
  HostingSubdivisionLongitude: Number(s.HostingSubdivisionLongitude),
});

/** The meeting of DataActionGetAssembleEvent, its invited localities and guests, and IsNotFound. */
export const toAssembleEventResult = (wire: AssembleEventWire): AssembleEventResult => ({
  IsNotFound: wire.IsNotFound,
  AssembleEvent: {
    AssembleEventSummary: toAssembleSummary(wire.AssembleEvent.AssembleEventSummary),
    AssembleAttendeeSubdivisionList: toAssembleLocalities(wire.AssembleEvent.AssembleAttendeeSubdivisionList),
    AssembleSpecialAttendeeSubdivisionList: toAssembleLocalities(
      wire.AssembleEvent.AssembleSpecialAttendeeSubdivisionList,
    ),
    AssembleAttendeeSpecialGuestList: osList(wire.AssembleEvent.AssembleAttendeeSpecialGuestList).map(
      toAssembleAttendeeGuest,
    ),
    GSMContactList: osList(wire.AssembleEvent.GSMContactList).map(String),
  },
});

/** The meeting types of the type filter. */
export const toAssembleEventTypes = (wire: AssembleEventTypesWire): AssembleEventTypeItem[] =>
  osList(wire.AssembleEventTypeList).map((t) => ({ Id: t.Id, Title: t.Title }));

/** The filter as it travels: the meeting types in a wrapped list. */
const toAssembleFilterInput = (f: AssembleEventFilter) => ({
  AssembleFilterTimeOptionId: f.AssembleFilterTimeOptionId,
  AssembleEventType: { List: f.AssembleEventType },
});

/** The inputs of DataActionGetAssembleMeetingSummaryList: the list variables, with the filter as it travels. */
export const toAssembleMeetingListInputs = (query: AssembleMeetingListQuery) => ({
  ...query,
  EventList_Filter: toAssembleFilterInput(query.EventList_Filter),
});

/** One page of meetings. */
export const toAssembleMeetings = (wire: AssembleMeetingsWire): AssembleMeeting[] =>
  osList(wire.AssembleSummaryMeetingList).map(toAssembleSummary);

/* ---- Orbit records ---- */

/** MemberInformationRec: the record that Card_MemberInformation takes (the same field names). */
const toMemberInformation = (w: MemberInformationWire): MemberInformation => ({
  HouseholderId: w.HouseholderId,
  MemberId: w.MemberId,
  LocalityId: w.LocalityId,
  Locality: w.Locality,
  CountryCode: w.CountryCode,
  FirstName: w.FirstName,
  LastName: w.LastName,
  Title: w.Title,
  IsHouseholder: w.IsHouseholder,
  IsSpouse: w.IsSpouse,
  Age: w.Age,
  Phone: w.Phone,
  MiddayMeal: w.MiddayMeal,
  EveningMeal: w.EveningMeal,
  HasGuestArrangements: w.HasGuestArrangements,
  HasOrbitAdminRole: w.HasOrbitAdminRole,
  SignedPhotoURL: w.SignedPhotoURL,
});

const toHelperItem = (h: HelperItemWire): HelperItem => ({
  Role: h.Role,
  MemberInformation: osList(h.MemberInformation).map(toMemberInformation),
});

const toOrbitEventDetails = (e: OrbitEventDetailsWire): OrbitEventDetails => ({
  Id: e.Id,
  Name: e.Name,
  Location: e.Location,
  StartDate: nullDateAsEmpty(e.StartDate),
  EndDate: nullDateAsEmpty(e.EndDate),
});

/** Milestone_ScreenRec: the record that Card_Milestone and the host allocation take (the same field names). */
const toMilestone = (w: MilestoneWire): Milestone_Screen => ({
  MilestoneId: w.MilestoneId,
  Type: w.Type,
  Title: w.Title,
  MilestoneDateTime: nullDateAsEmpty(w.MilestoneDateTime),
  TimeType: w.TimeType,
  SequenceNo: w.SequenceNo,
  DateForFilter: nullDateAsEmpty(w.DateForFilter),
  OrbitMilestoneType: { ...w.OrbitMilestoneType },
  MilestoneInfo: {
    ...w.MilestoneInfo,
    MilestoneStartDateTime: nullDateAsEmpty(w.MilestoneInfo.MilestoneStartDateTime),
    MilestoneEndDateTime: nullDateAsEmpty(w.MilestoneInfo.MilestoneEndDateTime),
  },
});

/* ---- Orbit event booklet ---- */

const toEventBookletMember = (w: EventBookletMemberWire): EventBookletMember => ({
  MemberId: w.MemberId,
  HouseholderId: w.HouseholderId,
  Title: w.Title,
  FirstName: w.FirstName,
  LastName: w.LastName,
  Age: w.Age,
  Phone: w.Phone,
  IsHouseholder: w.IsHouseholder,
  Country: w.Country,
  CountryCode: w.CountryCode,
  Locality: w.Locality,
  LocalityId: w.LocalityId,
  IsHostLocality: w.IsHostLocality,
  Host: w.Host,
  HostHouseholderId: w.HostHouseholderId,
  Days: osList(w.Days).map((d) => d.slice(0, 10)),
  Role: w.Role,
  OrderNo: w.OrderNo,
});

/** The event and the filter values of the booklet. The event days are Dates ("yyyy-MM-dd"). */
export const toEventBookletFilters = (wire: EventBookletFiltersWire): EventBookletFiltersResponse => {
  const r = wire.Response;
  return {
    EventInfo: {
      EventId: r.EventInfo.EventId,
      EventName: r.EventInfo.EventName,
      EventLocation: r.EventInfo.EventLocation,
      EventLocationId: r.EventInfo.EventLocationId,
      EventCountry: r.EventInfo.EventCountry,
      EventCountryCode: r.EventInfo.EventCountryCode,
      EventStartDateTime: nullDateAsEmpty(r.EventInfo.EventStartDateTime),
      EventEndDateTime: nullDateAsEmpty(r.EventInfo.EventEndDateTime),
    },
    Filters: {
      EventDays: osList(r.Filters.EventDays).map((d) => d.slice(0, 10)),
      HelperRoles: osList(r.Filters.HelperRoles),
      Countries: osList(r.Filters.Countries).map((c) => ({
        CountryName: c.CountryName,
        Localities: osList(c.Localities),
      })),
    },
  };
};

/** One page of guests or helpers (the Days as "yyyy-MM-dd"). */
export const toEventBookletMembers = (wire: EventBookletMembersWire): EventBookletMember[] =>
  osList(wire.Response).map(toEventBookletMember);

/** SelectedFiltersRec as it travels: the lists wrapped. */
export const toEventBookletSelectedFiltersInput = (
  f: EventBookletSelectedFilters,
): EventBookletCallInputs['SelectedFilters'] => ({
  SearchTerm: f.SearchTerm,
  DateRange: wireList(f.DateRange.map((d) => ({ DateGroup: d.DateGroup ?? '', IsSelected: d.IsSelected ?? false }))),
  HelperRoles: wireList([...f.HelperRoles]),
  Countries: wireList([...f.Countries]),
  Localities: wireList([...f.Localities]),
});

/** PaginationSettings as it travels: the scroll thresholds as Long Integer texts. */
export const toEventBookletPaginationInput = (
  p: EventBookletPaginationSettings,
): EventBookletCallInputs['PaginationSettings'] => ({
  ...p,
  Guest_ScrollThreshold: String(p.Guest_ScrollThreshold),
  Helper_ScrollThreshold: String(p.Helper_ScrollThreshold),
});

/* ---- Orbit event detail ---- */

/** The event, its itinerary (Milestones), the date filters and IsNullResponse. */
export const toEventDetailsResult = (wire: EventDetailsWire): EventDetailsResult => {
  const r = wire.Response;
  return {
    response: {
      EventId: r.EventId,
      MemberId: r.MemberId,
      EventType: r.EventType,
      EventName: r.EventName,
      EventStartDate: nullDateAsEmpty(r.EventStartDate),
      EventEndDate: nullDateAsEmpty(r.EventEndDate),
      Location: r.Location,
      TypeOfEvent: r.TypeOfEvent,
      IsBookletVisible: r.IsBookletVisible,
      SetUpMeals: r.SetUpMeals,
      Meals: r.Meals,
      Accommodations: r.Accommodations,
      Helpers: r.Helpers,
      Transport: r.Transport,
      GuestTransport: r.GuestTransport,
      OrbitEventType: { Id: r.OrbitEventType.Id, Type: r.OrbitEventType.Type },
      Milestones: osList(r.Milestones).map(toMilestone),
    },
    dateFilters: {
      HasBefore: wire.Response_DateFilters.HasBefore,
      HasAfter: wire.Response_DateFilters.HasAfter,
      DayFilterList: osList(wire.Response_DateFilters.DayFilterList).map((d) => ({
        DateGroup: nullDateAsEmpty(d.DateGroup),
        IsSelected: d.IsSelected,
      })),
    },
    isNullResponse: wire.IsNullResponse,
  };
};

/** HostSurveyRec.Id: the JSON_Name of the survey status of the household ("" = none). */
export const toHostSurveyStatus = (wire: HostSurveyStatusWire): string => wire.Response.Id;

/** Response_HasDocuments. */
export const toHasDocuments = (wire: HasDocumentsWire): boolean => wire.Response_HasDocuments;

/** Response_HasQRCode and Response_HasScanned. */
export const toEventQRCodeStatus = (wire: HasQRCodeWire): EventQRCodeStatus => ({
  hasQRCode: wire.Response_HasQRCode,
  hasScanned: wire.Response_HasScanned,
});

/* ---- Orbit guest arrangements, helpers and accommodation ---- */

const toMilestoneTransport = (w: MilestoneTransportWire): MilestoneTransportItem => {
  const t = w.MilestoneTransport;
  return {
    MilestoneTransport: {
      Title: t.Title,
      Type: t.Type,
      TravelIdentifier: t.TravelIdentifier,
      Notes: t.Notes,
      SequenceNo: t.SequenceNo,
      MilestoneInfo: {
        DepartureLocation: t.MilestoneInfo.DepartureLocation,
        ArrivalLocation: t.MilestoneInfo.ArrivalLocation,
        MilestoneStartDateTime: nullDateAsEmpty(t.MilestoneInfo.MilestoneStartDateTime),
        MilestoneEndDateTime: nullDateAsEmpty(t.MilestoneInfo.MilestoneEndDateTime),
      },
    },
    OrbitMilestoneType: {
      IconTransportDeparture: w.OrbitMilestoneType.IconTransportDeparture,
      IconTransportArrival: w.OrbitMilestoneType.IconTransportArrival,
    },
  };
};

/** The arrangements of a guest (Response) and HasData. */
export const toGuestArrangementsResult = (wire: GuestArrangementsWire): GuestArrangementsResult => {
  const r = wire.Response;
  return {
    HasData: wire.HasData,
    Response: {
      MemberId: r.MemberId,
      Title: r.Title,
      FirstName: r.FirstName,
      LastName: r.LastName,
      EventDetails: toOrbitEventDetails(r.EventDetails),
      SpecialNeeds: osList(r.SpecialNeeds).map((s) => ({
        HouseholderId: s.HouseholderId,
        MemberId: s.MemberId,
        LocalityId: s.LocalityId,
        Title: s.Title,
        FirstName: s.FirstName,
        LastName: s.LastName,
        SignedPhotoURL: s.SignedPhotoURL,
        SpecialNeeds: osList(s.SpecialNeeds).map((n) => ({ Category: n.Category, Type: n.Type, Notes: n.Notes })),
      })),
      ArrivalDetails: osList(r.ArrivalDetails).map(toMilestoneTransport),
      MealDetails: osList(r.MealDetails).map((m) => ({
        MilestoneDateTime: nullDateAsEmpty(m.MilestoneDateTime),
        MiddayMeal: m.MiddayMeal,
        EveningMeal: m.EveningMeal,
      })),
      DepartureDetails: osList(r.DepartureDetails).map(toMilestoneTransport),
    },
  };
};

/** The event and its helpers by role (Response.GetHelperHost_Response). */
export const toHelperData = (wire: HelperDetailsWire): HelperData => {
  const r = wire.Response.GetHelperHost_Response;
  return {
    EventDetails: toOrbitEventDetails(r.EventDetails),
    Helpers: osList(r.Helpers).map(toHelperItem),
  };
};

/** The accommodation of a host (Response.GetAccommodationHostResponse) and HasData. */
export const toAccommodationHostResult = (wire: AccommodationHostWire): AccommodationHostResult => {
  const r = wire.Response.GetAccommodationHostResponse;
  return {
    hasData: wire.HasData,
    accommodationData: {
      MilestoneId: r.MilestoneId,
      MilestoneType: r.MilestoneType,
      MilestoneDateTime: nullDateAsEmpty(r.MilestoneDateTime),
      MilestoneTitle: r.MilestoneTitle,
      EventDetails: toOrbitEventDetails(r.EventDetails),
      SpecialNeedsCount: osList(r.SpecialNeeds).length,
      Helpers: osList(r.Helpers).map(toHelperItem),
      Rooms: osList(r.Rooms).map((room) => ({
        RoomId: room.RoomId,
        RoomName: room.RoomName,
        RoomInformation: { ...room.RoomInformation },
        Guests: osList(room.Guests).map((g) => ({
          HouseholderId: g.HouseholderId,
          HouseholdName: g.HouseholdName,
          LocalityId: g.LocalityId,
          Locality: g.Locality,
          CountryCode: g.CountryCode,
          DisplayDot: g.DisplayDot,
          MemberInformation: osList(g.MemberInformation).map(toMemberInformation),
        })),
      })),
    },
  };
};

/** The accommodation host document (AccommodationHostDocument). */
export const toAccommodationHostDocument = (wire: AccommodationHostDocumentWire): AccommodationHostDocument => ({
  ...wire.AccommodationHostDocument,
});

/** GetGmpMilestoneHostResponse as it travels. */
export const toGmpMilestoneHost = (wire: GmpMilestoneHostWire): GmpMilestoneHost => wire.Response;

/* ---- Orbit host survey ---- */

/** The inputs of DataActionGetHostSurvey: the block variables, with a null input date ("") as the null DateTime. */
export const toHostSurveyInputs = (inputs: HostSurveyCallInputs): HostSurveyCallInputs => ({
  ...inputs,
  In_EventStartDate: inputs.In_EventStartDate || NULL_DATE_TIME,
  In_EventEndDate: inputs.In_EventEndDate || NULL_DATE_TIME,
});

const toHostSurvey = (r: HostSurveyResponseWire): HostSurvey => ({
  SurveyInfo: {
    ...r.SurveyInfo,
    EventStartDateTime: nullDateAsEmpty(r.SurveyInfo.EventStartDateTime),
    EventEndDateTime: nullDateAsEmpty(r.SurveyInfo.EventEndDateTime),
  },
  Rooms: {
    AccommodationNote: r.Rooms.AccommodationNote,
    HostSurvey_RoomItem: osList(r.Rooms.HostSurvey_RoomItem).map((room) => ({ ...room, Beds: osList(room.Beds) })),
  },
  Meals: {
    MealNote: r.Meals.MealNote,
    MealItemInfo: osList(r.Meals.MealItemInfo).map((meal) => ({ ...meal, EventDate: nullDateAsEmpty(meal.EventDate) })),
  },
  Helpers: { HelperNote: r.Helpers.HelperNote, HelperItemInfo: osList(r.Helpers.HelperItemInfo) },
  Vehicles: { HasVehicles: r.Vehicles.HasVehicles, VehicleItemInfo: osList(r.Vehicles.VehicleItemInfo) },
});

/** The host survey (Response, with the lists unwrapped) and HasError. */
export const toHostSurveyResult = (wire: HostSurveyWire): HostSurveyResult => ({
  Response: toHostSurvey(wire.Response),
  HasError: wire.HasError,
});

/* ---- Orbit transport, documents and QR code ---- */

const toTransportLocation = (w: TransportLocationWire): TransportLocation => ({
  Location: w.Location,
  Terminal: w.Terminal,
  DateTime: nullDateAsEmpty(w.DateTime),
});

/** The milestone type and the transport of a transport milestone. */
export const toTransportDetails = (wire: TransportDetailWire): TransportDetails => {
  const t = wire.Response.TransportDetail;
  const type = wire.Response.MilestoneType;
  return {
    MilestoneType: {
      Id: type.Id,
      Name: type.Name,
      MainIcon: type.MainIcon,
      IsTransportMilestone: type.IsTransportMilestone,
      IconTransportDeparture: type.IconTransportDeparture,
      IconTransportArrival: type.IconTransportArrival,
      TransportHeaderClass: type.TransportHeaderClass,
      TravelInfoHeader: type.TravelInfoHeader,
    },
    TransportDetail: {
      MilestoneId: t.MilestoneId,
      Title: t.Title,
      Type: t.Type,
      TransportType: t.TransportType,
      Operator: t.Operator,
      TravelIdentifier: t.TravelIdentifier,
      DepartureLocation: toTransportLocation(t.DepartureLocation),
      ArrivalLocation: toTransportLocation(t.ArrivalLocation),
      Stops: osList(t.Stops).map((s) => ({
        Title: s.Title,
        ArrivalLocation: toTransportLocation(s.ArrivalLocation),
        DepartureLocation: toTransportLocation(s.DepartureLocation),
        StopDurationTime: s.StopDurationTime,
      })),
      Seats: osList(t.Seats).map((s) => ({ Departure: s.Departure, Arrival: s.Arrival, SeatNumber: s.SeatNumber })),
      BaggageAllowance: {
        CarryOnBaggage: t.BaggageAllowance.CarryOnBaggage,
        CheckedBaggage: t.BaggageAllowance.CheckedBaggage,
      },
      TripDuration: {
        TripDurationHours: t.TripDuration.TripDurationHours,
        TripDurationMinutes: t.TripDuration.TripDurationMinutes,
      },
      TravelInfo: { ...t.TravelInfo },
      Notes: t.Notes,
    },
  };
};

/** The documents of the event (Response.EventDocuments), IsViewed False. */
export const toEventDocuments = (wire: EventDocumentsWire): EventDocumentItem[] =>
  osList(wire.Response.EventDocuments).map((d) => ({
    DocumentURL: d.DocumentURL,
    DocumentName: d.DocumentName,
    LastUpdatedOn: nullDateAsEmpty(d.LastUpdatedOn),
    LastUpdatedBy: d.LastUpdatedBy,
    IsViewed: false,
  }));

/** The pass texts and the QR image (Response). */
export const toEventQRCodeData = (wire: EventQRCodeWire): EventQRCodeData => {
  const r = wire.Response.GetEventQRCodeResponse;
  return {
    GetEventQRCodeResponse: {
      GuestRole: r.GuestRole,
      QrCodeImage: r.QrCodeImage,
      Seats: osList(r.Seats).map((s) => ({ MilestoneName: s.MilestoneName, SeatAllocation: s.SeatAllocation })),
      Tag: r.Tag,
    },
    QRCodeAsBinary: wire.Response.QRCodeAsBinary,
  };
};

/* ---- Orbit admin ---- */

/** HasQRCode and OrbitEventType of DataActionGet_EventInformation. */
export const toAdminEventInformation = (wire: AdminEventInformationWire): AdminEventInformation => ({
  hasQRCode: wire.HasQRCode,
  orbitEventType: wire.OrbitEventType,
});

/** ScannedQRCodeInfo, as the scan of the admin builds it: EventId, the id, the names, the locality and the country of
    the scanned member, and the admin. The other attributes keep their default values. */
export const toScanEventQRCodeInputs = (
  eventId: string,
  memberId: string,
  member: ScannedMemberNames,
  admin: ScannerAdmin,
): ScanEventQRCodeInputsWire => ({
  ScannedQRCodeInfo: {
    EventId: eventId,
    MilestoneId: '',
    MilestoneType: '',
    ScanDate: NULL_DATE_TIME,
    ScannedUserInformation: {
      MemberId: memberId,
      MemberFirstName: member.FirstName,
      MemberLastName: member.Lastname,
      MemberLocality: member.LocalityName,
      MemberCountry: member.CountryName,
      MemberRole: '',
      MemberGuestRole: '',
      MemberTag: '',
      MemberRowAllocation: '',
      MemberRowAllocations: wireList([]),
      MemberSeatingPlan: '',
    },
    ScannerAdminInfo: {
      AdminMemberId: admin.MemberId,
      AdminFirstName: admin.FirstName,
      AdminLastName: admin.LastName,
      AdminLocality: admin.Locality,
      AdminCountry: admin.Country,
    },
  },
});

/** The result of the check-in (Response). */
export const toScanEventQRCodeResult = (wire: ScanEventQRCodeWire): ScanEventQRCodeResult => {
  const r = wire.Response;
  return {
    UserRole: r.UserRole,
    Seats: osList(r.Seats).map((s) => ({ MilestoneName: s.MilestoneName, SeatAllocation: s.SeatAllocation })),
    Tag: r.Tag,
    GuestRole: r.GuestRole,
    Status: { Success: r.Status.Success, ErrorMessage: r.Status.ErrorMessage },
  };
};

/** An admin event row as the record of its card (EventId, Type, Title, OrbitEventType, EventInfo) and its
    TypeFriendly. The dates stay as they travel: Card_Event formats them. */
const toAdminEventItem = (w: AdminOrbitEventWire): AdminEventItem => ({
  event: {
    EventId: w.OrbitSummaryItem.EventId,
    Type: w.OrbitSummaryItem.Type,
    Title: w.OrbitSummaryItem.Title,
    OrbitEventType: w.OrbitEventType,
    EventInfo: w.OrbitSummaryItem.EventInfo,
  },
  typeFriendly: w.OrbitSummaryItem.TypeFriendly,
});

/** The events of the admin (Response). */
export const toAdminEventItems = (wire: AdminEventsWire): AdminEventItem[] =>
  osList(wire.Response).map(toAdminEventItem);

/** IsScanPerMilestone. */
export const toMilestoneScanFF = (wire: MilestoneScanFFWire): boolean => wire.IsScanPerMilestone;

/** BookletGuestsMaxRows. */
export const toBookletGuestsMaxRows = (wire: BookletGuestsMaxRowsWire): number => wire.BookletGuestsMaxRows;

/** BookletHelpersMaxRows. */
export const toBookletHelpersMaxRows = (wire: BookletHelpersMaxRowsWire): number => wire.BookletHelpersMaxRows;

/* ---- Orbit landing ---- */

/** A row of the events of a member, as the record of its card (a Milestone_ScreenRec or an Event_ScreenRec). The
    null dates of the records become "". */
const toEventsSummaryItem = (w: OrbitEventsSummaryWire): EventsSummaryItem => {
  const item = w.OrbitSummaryItem;
  const isMilestone = w.OrbitMilestoneType.Id !== '';
  const date = (value: string) => osDate(value) ?? '';
  const milestoneInfo = {
    ...item.MilestoneInfo,
    MilestoneStartDateTime: date(item.MilestoneInfo.MilestoneStartDateTime),
    MilestoneEndDateTime: date(item.MilestoneInfo.MilestoneEndDateTime),
  };
  const eventInfo = {
    ...item.EventInfo,
    StartEventDate: date(item.EventInfo.StartEventDate),
    EndEventDate: date(item.EventInfo.EndEventDate),
  };
  return {
    isMilestone,
    sequenceNo: osNumber(item.SequenceNo),
    endDateTime: isMilestone ? osDate(item.MilestoneInfo.MilestoneEndDateTime) : osDate(item.EventInfo.EndEventDate),
    event: {
      EventId: item.EventId,
      Type: item.Type,
      Title: item.Title,
      OrbitEventType: w.OrbitEventType,
      EventInfo: eventInfo,
    },
    milestone: {
      MilestoneId: item.MilestoneId,
      Type: item.Type,
      Title: item.Title,
      OrbitMilestoneType: w.OrbitMilestoneType,
      MilestoneInfo: milestoneInfo,
    },
  };
};

/** The events and milestones of a member (Response) and the years of the Filters popup (YearFilter). */
export const toEventsByMemberIdResult = (wire: EventsByMemberIdWire): EventsByMemberIdResult => ({
  events: osList(wire.Response).map(toEventsSummaryItem),
  yearFilter: osList(wire.YearFilter).map((y) => ({ year: y.Year, isSelected: y.IsSelected, count: y.Count })),
});

/* ---- LDM meal events ---- */

/** The meal (EventResponse, with its lists unwrapped) and Out_HasContent. */
export const toEventByEventIdData = (wire: EventByEventIdWire): EventByEventIdData => {
  const r = wire.EventResponse;
  return {
    eventResponse: {
      Host: r.Host,
      Guests: osList(r.Guests),
      SpecialNeeds: {
        Diet: osList(r.SpecialNeeds.Diet),
        Mobility: osList(r.SpecialNeeds.Mobility),
        Other: osList(r.SpecialNeeds.Other),
      },
    },
    hasContent: wire.Out_HasContent,
  };
};

/** The coordinator (Out_CoordinatorDetails.GetCoordinatorDetailsResponse) and Out_HasContent. */
export const toCoordinatorDetailsData = (wire: CoordinatorDetailsWire): CoordinatorDetailsData => ({
  coordinatorDetails: wire.Out_CoordinatorDetails.GetCoordinatorDetailsResponse,
  hasContent: wire.Out_HasContent,
});

/** The inputs of DataActionGetEventsForMyTimeline: the block variables, with the localities of the filter in a
    wrapped list. */
export const toMyTimelineInputs = (inputs: MyTimelineCallInputs) => ({
  ...inputs,
  PastEventFilters: { ...inputs.PastEventFilters, Localities: { List: inputs.PastEventFilters.Localities } },
});

const toEventCalendar = (w: EventCalendarWire): EventCalendar => ({ ...w, Guests: osList(w.Guests) });

/** The past events by month (Out_PastEvents) and the upcoming events (Out_UpcomingEvents), with the lists
    unwrapped. */
export const toMyTimelineData = (wire: MyTimelineWire): MyTimelineData => ({
  pastEvents: osList(wire.Out_PastEvents).map((g) => ({
    CurrentMonthDate: g.CurrentMonthDate,
    EventsCalendar: osList(g.EventsCalendar).map(toEventCalendar),
  })),
  upcomingEvents: osList(wire.Out_UpcomingEvents).map(toEventCalendar),
});
