import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';

/* Domain types of the event calls: the Assemble meetings (Connect2_Assemble_MUI), the Orbit events and milestones
   (Connect2_OrbitMobile_MUI) and the LDM meal events. The fields are those that the UI reads. Each type has the shape
   that its readers use today, so no caller changes: the OutSystems names and nesting, camelCase where a screen mapped
   the record. A type that the UI takes as it travels is the contract type. Dates and DateTimes stay OutSystems texts;
   "" is the null date where the screen reads it so. Long Integer ids are text. The wire types stay in
   src/api/schema.d.ts. The call inputs are type aliases, not interfaces: the contract inputs have an index
   signature. */

/** The endpoint of a call of Connect2_OrbitMobile_MUI. */
type OrbitPath<A extends string> = PathOf<'Connect2_OrbitMobile_MUI', A>;

/* ---- Assemble meetings (Connect2_Assemble_CS) ---- */

/** AssembleEventType: the record inside AssembleEventSummary. The UI reads only Title. */
export interface AssembleEventType {
  Title?: string;
}

/** AssembleEventSummary: the fields that AssembleSummaryCard and its client actions read. Every field is optional, as
    an OutSystems record with its default values. DateTime travels as "yyyy-MM-ddTHH:mm:ss"; the counts and the
    coordinates are numbers. */
export interface AssembleEventSummary {
  AssembleEventType?: AssembleEventType;
  DateTime?: string;
  IsAllDay?: boolean;
  IsPBCC?: boolean;
  IsVirtual?: boolean;
  IsUnavailable?: boolean;
  HostingLocation?: string;
  LocalityName?: string;
  CountryName?: string;
  HostingSubdivisionHallPhotoSignedURL?: string;
  HostingSubdivisionFormattedAddress?: string;
  HostingSubdivisionUseCoordinates?: boolean;
  HostingSubdivisionLatitude?: number;
  HostingSubdivisionLongitude?: number;
  BrothersCount?: number;
  SistersCount?: number;
  VirtualMeetingLink?: string;
  VirtualMeetingId?: string;
  VirtualMeetingPassword?: string;
  VirtualMeetingTypeLabel?: string;
}

/** An Assemble meeting type of the type filter (Id, Title). */
export interface AssembleEventTypeItem {
  Id: string;
  Title: string;
}

/** AssembleEventTypeBooleanRecord: a meeting type and whether the filter selects it. */
export interface AssembleEventTypeSelection {
  AssembleEventType: AssembleEventTypeItem;
  IsSelected: boolean;
}

/** AssembleEventFilter: the time option (a ViewmodeType id) and the meeting types. */
export interface AssembleEventFilter {
  AssembleFilterTimeOptionId: string;
  AssembleEventType: AssembleEventTypeSelection[];
}

/** A meeting of the meeting list: the summary with the ids that the list reads. Every attribute of the record that
    travels stays in the object. */
export interface AssembleMeeting extends AssembleEventSummary {
  EventId: string;
  SeriesId: string;
  DateTime: string;
}

/** The variables of AssembleSummary_List that DataActionGetAssembleMeetingSummaryList sends (the server reads them). */
export interface AssembleMeetingListQuery {
  SubdivisionId: string;
  LocalSubdivisionId: string;
  EventList_Filter: AssembleEventFilter;
  EventList_RangeFrom: string;
  EventsList_RangeTo: string;
  EventList_PageNumber: number;
  MaxRecords: number;
  DeviceTimezone: string;
}

/** The variables of AssembleEventDetail that DataActionGetAssembleEvent sends. Start is a DateTime as
    "yyyy-MM-ddTHH:mm:ss" ("" = the null DateTime). */
export type AssembleEventCallInputs = {
  EventId: string;
  SeriesId: string;
  Start: string;
  DeviceTimezone: string;
  IsDataFetched: boolean;
};

/** PhotoURL (APIDomain_Directory_IS): the fields that the blocks read. */
export interface PhotoURL {
  Bucket: string;
  Path: string;
  Type: string;
  SignedURL: string;
}

/** AssembleAttendeeGuest: a household of a hall (Id = the household id; Id "0" = a skeleton row). */
export interface AssembleAttendeeGuest {
  Id: string;
  Name: string;
  FamilyNames: string;
  Location: string;
  IsBookmarked: boolean;
  IsDisabled: boolean;
  AvatarURL: PhotoURL;
}

/** AssembleAttendeeSubdivision: an invited hall. */
export interface AssembleAttendeeSubdivision {
  Id: string;
  Name: string;
  HouseholdCount: number;
  LocalityId: string;
  SubdivisionHouseholdList: AssembleAttendeeGuest[];
}

/** LocalityDetails (Connect2_Assemble_CS): an invited locality and its halls. */
export interface AssembleLocalityDetails {
  LocalityId: string;
  LocalityName: string;
  AssembleAttendeeSubdivisionList: AssembleAttendeeSubdivision[];
}

/** The summary of the meeting detail, with the ids that the detail reads (EventId for the skeleton condition). */
export interface AssembleEventSummaryDetail extends AssembleEventSummary {
  EventId: string;
  DateTime: string;
  Notes: string;
}

/** AssembleEvent: the meeting, its invited localities and guests, and the GSM contact ids. */
export interface AssembleEvent {
  AssembleEventSummary: AssembleEventSummaryDetail;
  AssembleAttendeeSubdivisionList: AssembleLocalityDetails[];
  AssembleSpecialAttendeeSubdivisionList: AssembleLocalityDetails[];
  AssembleAttendeeSpecialGuestList: AssembleAttendeeGuest[];
  GSMContactList: string[];
}

/** The outputs of DataActionGetAssembleEvent. */
export interface AssembleEventResult {
  AssembleEvent: AssembleEvent;
  IsNotFound: boolean;
}

/* ---- Orbit records (Connect2_OrbitMobile_BL and Connect2_OrbitMobile_IS) ----
   Every field is optional, as an OutSystems record with its default values: the shared Orbit blocks take them. */

/** DayFilter (DayFilterRec): one day of the event date selector. DateGroup is a Date ("yyyy-MM-dd"). */
export interface DayFilter {
  DateGroup?: string;
  IsSelected?: boolean;
}

/** OrbitEventTypeRec: an event type with its card colour and icon. */
export interface OrbitEventTypeRecord {
  Id?: string;
  Is_Active?: boolean;
  Type?: string;
  Name?: string;
  MainColorVar?: string;
  MainIcon?: string;
}

/** EventInfoRec: the dates and the location of an event. */
export interface EventInfo {
  StartEventDate?: string;
  EndEventDate?: string;
  EventLocation?: string;
}

/** Event_ScreenRec: one event of an Orbit event list. */
export interface Event_Screen {
  EventId?: string;
  Type?: string;
  Title?: string;
  DateTime?: string;
  OrbitEventType?: OrbitEventTypeRecord;
  EventInfo?: EventInfo;
}

/** OrbitMilestoneTypeRec: a milestone type with its colour, icons and transport labels. */
export interface OrbitMilestoneTypeRecord {
  Id?: string;
  Is_Active?: boolean;
  Order?: number;
  Type?: string;
  Name?: string;
  MainColorVar?: string;
  MainIcon?: string;
  CanHost?: boolean;
  IsTransportMilestone?: boolean;
  IconTransportDeparture?: string;
  IconTransportArrival?: string;
  TransportHeaderClass?: string;
  TravelInfoHeader?: string;
  TravelInfoHeaderIcon?: string;
}

/** MilestoneInfoRec. HostId is a Long Integer. */
export interface MilestoneInfo {
  HostId?: string;
  Location?: string;
  Seating?: string;
  MilestoneStartDateTime?: string;
  MilestoneEndDateTime?: string;
  DepartureLocation?: string;
  ArrivalLocation?: string;
  MilestoneHost?: string;
  Description?: string;
}

/** Milestone_ScreenRec: one milestone of an event. */
export interface Milestone_Screen {
  MilestoneId?: string;
  Type?: string;
  Title?: string;
  MilestoneDateTime?: string;
  TimeType?: string;
  SequenceNo?: string;
  DateForFilter?: string;
  OrbitMilestoneType?: OrbitMilestoneTypeRecord;
  MilestoneInfo?: MilestoneInfo;
}

/** MemberInformationRec: a member row of Card_MemberInformation. */
export interface MemberInformation {
  HouseholderId?: string;
  MemberId?: string;
  LocalityId?: string;
  Locality?: string;
  CountryCode?: string;
  FirstName?: string;
  LastName?: string;
  Title?: string;
  IsHouseholder?: boolean;
  IsSpouse?: boolean;
  Age?: string;
  Phone?: string;
  MiddayMeal?: string;
  EveningMeal?: string;
  HasGuestArrangements?: boolean;
  HasOrbitAdminRole?: boolean;
  SignedPhotoURL?: string;
}

/** EventDetails (Connect2_OrbitMobile_IS): the event of a helper, guest or accommodation answer. The dates are ""
    for the null date. */
export interface OrbitEventDetails {
  Id: string;
  Name: string;
  Location: string;
  StartDate: string;
  EndDate: string;
}

/** HelperItem (Connect2_OrbitMobile_IS): a helper role and its members. */
export interface HelperItem {
  Role: string;
  MemberInformation: MemberInformation[];
}

/** QRCodeSeatItemRec: a seat of a QR code pass. */
export interface QRCodeSeatItem {
  MilestoneName: string;
  SeatAllocation: string;
}

/* ---- Orbit landing (ScreenBlock_OrbitLanding) ---- */

/** The variables of ScreenBlock_OrbitLanding that its two data actions send. The list and record variables that echo
    the client state are not sent (the contract makes every variable optional). */
export type OrbitLandingCallInputs = Required<
  Pick<
    ActionInputs<OrbitPath<'ScreenBlock_OrbitLanding/DataActionGet_EventsByMemberId'>>,
    | 'SelectedMemberId'
    | 'IsFetchingData'
    | 'EventFilter'
    | 'SortEventsASC'
    | 'Popup_SortByOpened'
    | 'Popup_FiltersOpened'
    | 'CurrentMemberId'
  >
>;

/** One row of the events of a member: an event or a milestone, as the record that its card takes. The dates of the
    records are "" for the null date. */
export interface EventsSummaryItem {
  /** True when the row has a milestone type. */
  isMilestone: boolean;
  sequenceNo: number;
  /** The end of the row for the Upcoming / Past filter: MilestoneEndDateTime of a milestone, EndEventDate of an
      event; null for the null date. */
  endDateTime: string | null;
  event: Event_Screen;
  milestone: Milestone_Screen;
}

/** A year of the Filters popup. */
export interface YearItem {
  year: string;
  isSelected: boolean;
  count: number;
}

/** The outputs of DataActionGet_EventsByMemberId. */
export interface EventsByMemberIdResult {
  events: EventsSummaryItem[];
  yearFilter: YearItem[];
}

/* ---- Orbit event detail (ScreenBlock_EventDetail) ---- */

/** The variables of ScreenBlock_EventDetail that its four data actions send. The record and list variables that echo
    the client state are not sent. */
export type EventDetailCallInputs = Required<
  Pick<
    ActionInputs<OrbitPath<'ScreenBlock_EventDetail/DataActionGet_EventDetails'>>,
    | 'IsFetchingData'
    | 'HasQRCode'
    | 'HasScanned'
    | 'HasDocuments'
    | 'IsEventUnavailable'
    | 'UserInformation'
    | 'In_MemberId'
    | 'In_EventId'
    | 'In_EventName'
    | 'In_FromNotification'
  >
>;

/** GetEventDetailScreenRec: the event and its itinerary. The dates are "" for the null date. */
export interface EventDetailScreen {
  EventId: string;
  MemberId: string;
  /** OrbitEventType identifier ('event-host', ...). */
  EventType: string;
  EventName: string;
  EventStartDate: string;
  EventEndDate: string;
  Location: string;
  TypeOfEvent: string;
  IsBookletVisible: boolean;
  SetUpMeals: boolean;
  Meals: boolean;
  Accommodations: boolean;
  Helpers: boolean;
  Transport: boolean;
  GuestTransport: boolean;
  OrbitEventType: { Id: string; Type: string };
  Milestones: Milestone_Screen[];
}

/** DateFilterRec: the before and after edges and the days of the itinerary. */
export interface EventDateFilters {
  HasBefore: boolean;
  HasAfter: boolean;
  DayFilterList: DayFilter[];
}

/** The outputs of DataActionGet_EventDetails. */
export interface EventDetailsResult {
  response: EventDetailScreen;
  dateFilters: EventDateFilters;
  isNullResponse: boolean;
}

/** The outputs of DataActionGet_HasQRCode. */
export interface EventQRCodeStatus {
  hasQRCode: boolean;
  hasScanned: boolean;
}

/* ---- Orbit event booklet (ScreenBlock_EventBooklet) ---- */

/** The variables of ScreenBlock_EventBooklet that its three data actions send. SelectedFilters and
    PaginationSettings carry the search, the filters and the page. The variables that echo the client state are not
    sent. */
export type EventBookletCallInputs = Required<
  Pick<
    ActionInputs<OrbitPath<'ScreenBlock_EventBooklet/DataActionGet_EventBookletGuests'>>,
    | 'In_EventId'
    | 'In_EventName'
    | 'IsFetchingData'
    | 'IsGuestView'
    | 'IsSearchMode'
    | 'FiltersPopUp'
    | 'HasFiltersApplied'
    | 'SelectedFilters'
    | 'PaginationSettings'
  >
>;

/** EventBookletMembersRec: a guest or a helper of the booklet. Days are Dates ("yyyy-MM-dd"). */
export interface EventBookletMember {
  MemberId: string;
  HouseholderId: string;
  Title: string;
  FirstName: string;
  LastName: string;
  Age: string;
  Phone: string;
  IsHouseholder: boolean;
  Country: string;
  CountryCode: string;
  Locality: string;
  LocalityId: string;
  IsHostLocality: boolean;
  Host: string;
  HostHouseholderId: string;
  Days: string[];
  Role: string;
  OrderNo: string;
}

/** EventBooklet_EventInfoRec. The DateTimes are "" for the null date. */
export interface EventBookletEventInfo {
  EventId: string;
  EventName: string;
  EventLocation: string;
  EventLocationId: string;
  EventCountry: string;
  EventCountryCode: string;
  EventStartDateTime: string;
  EventEndDateTime: string;
}

/** GetEventBookletFiltersResponseRec: the event and the values of the filters. */
export interface EventBookletFiltersResponse {
  EventInfo: EventBookletEventInfo;
  Filters: {
    EventDays: string[];
    HelperRoles: string[];
    Countries: { CountryName: string; Localities: string[] }[];
  };
}

/** SelectedFiltersRec (Connect2_OrbitMobile_MUI): what the booklet data actions filter on. */
export interface EventBookletSelectedFilters {
  SearchTerm: string;
  DateRange: DayFilter[];
  HelperRoles: string[];
  Countries: string[];
  Localities: string[];
}

/** The booklet paging (the anonymous PaginationSettings record). The scroll thresholds are numbers here: the UI uses
    them only as a pixel threshold. They travel as Long Integer texts. */
export interface EventBookletPaginationSettings {
  Guest_MaxRows: number;
  Guest_PageNumber: number;
  Guest_IsNewSearch: boolean;
  Guest_NoResults: boolean;
  Guest_ScrollThreshold: number;
  Helper_MaxRows: number;
  Helper_PageNumber: number;
  Helper_IsNewSearch: boolean;
  Helper_NoResults: boolean;
  Helper_ScrollThreshold: number;
}

/* ---- Orbit guest arrangements (ScreenBlock_GuestArrangements) ---- */

/** The variables of ScreenBlock_GuestArrangements that its data action sends. */
export type GuestArrangementsCallInputs = Required<
  Pick<
    ActionInputs<OrbitPath<'ScreenBlock_GuestArrangements/DataActionGetGuestArrangements'>>,
    | 'IsFetchingData'
    | 'In_MemberId'
    | 'In_EventId'
    | 'In_HostId'
    | 'In_MilestoneId'
    | 'In_PreloadEventName'
    | 'In_PreloadMilestoneName'
    | 'In_OrbitMilestoneTypeId'
  >
>;

/** SpecialNeedsRec: one special need. */
export interface SpecialNeed {
  Category: string;
  Type: string;
  Notes: string;
}

/** SpecialNeedsItemRec: a member with special needs. */
export interface SpecialNeedsItem {
  HouseholderId: string;
  MemberId: string;
  LocalityId: string;
  Title: string;
  FirstName: string;
  LastName: string;
  SignedPhotoURL: string;
  SpecialNeeds: SpecialNeed[];
}

/** MilestoneTransport_ScreenRec: a transport milestone and the two icons of its milestone type. The DateTimes are ""
    for the null date. */
export interface MilestoneTransportItem {
  MilestoneTransport: {
    Title: string;
    Type: string;
    TravelIdentifier: string;
    Notes: string;
    SequenceNo: number;
    MilestoneInfo: {
      DepartureLocation: string;
      ArrivalLocation: string;
      MilestoneStartDateTime: string;
      MilestoneEndDateTime: string;
    };
  };
  OrbitMilestoneType: { IconTransportDeparture: string; IconTransportArrival: string };
}

/** MealDetailItemRec. */
export interface MealDetailItem {
  MilestoneDateTime: string;
  MiddayMeal: string;
  EveningMeal: string;
}

/** GetGuestArrangements_ScreenRec: the arrangements of a guest. */
export interface GuestArrangementsData {
  MemberId: string;
  Title: string;
  FirstName: string;
  LastName: string;
  EventDetails: OrbitEventDetails;
  SpecialNeeds: SpecialNeedsItem[];
  ArrivalDetails: MilestoneTransportItem[];
  MealDetails: MealDetailItem[];
  DepartureDetails: MilestoneTransportItem[];
}

/** The outputs of DataActionGetGuestArrangements. */
export interface GuestArrangementsResult {
  Response: GuestArrangementsData;
  HasData: boolean;
}

/* ---- Orbit helpers (ScreenBlock_HelperDetails) ---- */

/** The variables of ScreenBlock_HelperDetails that its data action sends. */
export type HelperDetailsCallInputs = Required<
  Pick<
    ActionInputs<OrbitPath<'ScreenBlock_HelperDetails/DataActionGetHelperDetails'>>,
    | 'IsFetchingData'
    | 'IsFetchingPhoneData'
    | 'In_EventId'
    | 'In_PreloadEventName'
    | 'In_PreloadMilestoneName'
    | 'In_OrbitMilestoneTypeId'
    | 'In_HostId'
  >
>;

/** GetHelperDetailsResponse: the event and its helpers by role. */
export interface HelperData {
  EventDetails: OrbitEventDetails;
  Helpers: HelperItem[];
}

/* ---- Orbit host survey (ScreenBlock_HostSurvey) ---- */

type HostSurveyPath = OrbitPath<'ScreenBlock_HostSurvey/DataActionGetHostSurvey'>;
/** GetHostSurveyResponse as it travels. */
type HostSurveyResponseWire = ActionOutputs<HostSurveyPath>['Response'];

/** The variables of ScreenBlock_HostSurvey that its data action sends. A null input date is "": the call sends the
    null DateTime. */
export type HostSurveyCallInputs = Required<
  Pick<
    ActionInputs<HostSurveyPath>,
    | 'IsFetchingData'
    | 'IsAddingHelper'
    | 'PositionToDelete'
    | 'SurveyDiscarded'
    | 'SurveySubmitted'
    | 'IsConfirmedSurvey'
    | 'HasDataSteps'
    | 'IsPostingSurvey'
    | 'In_EventId'
    | 'In_MemberId'
    | 'In_EventName'
    | 'In_EventStartDate'
    | 'In_EventEndDate'
  >
>;

/** HostSurvey_Info. The event DateTimes are "" for the null date. */
export type HostSurveyInfo = HostSurveyResponseWire['SurveyInfo'];
/** HostSurvey_RoomItem with the bed list unwrapped. */
export type HostSurveyRoom = Omit<HostSurveyResponseWire['Rooms']['HostSurvey_RoomItem']['List'][number], 'Beds'> & {
  Beds: string[];
};
/** HostSurvey_MealItemInfo. EventDate is a Date ("" = null). */
export type HostSurveyMeal = HostSurveyResponseWire['Meals']['MealItemInfo']['List'][number];
/** HostSurvey_HelperItemInfo. */
export type HostSurveyHelper = HostSurveyResponseWire['Helpers']['HelperItemInfo']['List'][number];
/** HostSurvey_VehicleItemInfo. */
export type HostSurveyVehicle = HostSurveyResponseWire['Vehicles']['VehicleItemInfo']['List'][number];

/** GetHostSurveyResponse as the block keeps it (the HostSurvey variable), with the lists unwrapped. */
export interface HostSurvey {
  SurveyInfo: HostSurveyInfo;
  Rooms: { AccommodationNote: string; HostSurvey_RoomItem: HostSurveyRoom[] };
  Meals: { MealNote: string; MealItemInfo: HostSurveyMeal[] };
  Helpers: { HelperNote: string; HelperItemInfo: HostSurveyHelper[] };
  Vehicles: { HasVehicles: boolean; VehicleItemInfo: HostSurveyVehicle[] };
}

/** The outputs of DataActionGetHostSurvey. */
export interface HostSurveyResult {
  Response: HostSurvey;
  HasError: boolean;
}

/* ---- Orbit helper search of the host survey (HostSurvey_AddHelper) ---- */

type SurveyHelpersPath = OrbitPath<'HostSurvey_AddHelper/DataActionGetSurveyHelpers'>;
/** HostSurvey_HelperMember: a member that the helper search found (IsSelected is set by the block). */
export type HostSurveyHelperMember = ActionOutputs<SurveyHelpersPath>['Response']['HelperMembers']['List'][number];

/** The variables of HostSurvey_AddHelper that DataActionGetSurveyHelpers sends (screenData.variables): the simple
    variables, the event and the members already added. The list variables (Helpers, SurveyHelpersData,
    In_HelperRoles, In_HelperStatus) are not sent; the contract makes every variable optional. */
export interface SurveyHelpersCallInputs {
  SearchTerm: string;
  IsFetchingData: boolean;
  IsNotValidInput: boolean;
  LastSearchedTerm: string;
  IsTyping: boolean;
  MaxHelpers: number;
  PageNumber: number;
  IsNewSearch: boolean;
  In_TrySave: boolean;
  In_EventId: string;
  /** In_AlreadyAddedHelpers: the MemberIds (Long Integer as text). */
  In_AlreadyAddedHelpers: readonly string[];
}

/* ---- Orbit accommodation and milestone wrapper (ScreenBlock_AccommodationHost, ScreenBlock_MilestoneWrapper) ---- */

/** The variables of ScreenBlock_AccommodationHost that its two data actions send. */
export type AccommodationHostCallInputs = Required<
  Pick<
    ActionInputs<OrbitPath<'ScreenBlock_AccommodationHost/DataActionGetAccommodationHost'>>,
    | 'IsFetchingData'
    | 'IsLoadingDocument'
    | 'HasDocument'
    | 'In_MilestoneId'
    | 'In_EventId'
    | 'In_HostId'
    | 'In_PreloadEventName'
    | 'In_PreloadMilestoneName'
    | 'In_OrbitMilestoneTypeId'
  >
>;

/** RoomInformation: the floor, who the room is for and the number of beds ("0" = the null Long Integer). Every
    attribute of the record that travels stays in the object. */
export interface RoomInformation {
  Floor: string;
  Type: string;
  Beds: string;
}

/** GuestItem: a household that stays in a room, and its members. */
export interface AccommodationGuest {
  HouseholderId: string;
  HouseholdName: string;
  LocalityId: string;
  Locality: string;
  CountryCode: string;
  DisplayDot: boolean;
  MemberInformation: MemberInformation[];
}

/** RoomItem. */
export interface RoomItem {
  RoomId: string;
  RoomName: string;
  RoomInformation: RoomInformation;
  Guests: AccommodationGuest[];
}

/** GetAccommodationHostResponse as the block keeps it (AccommodationData). The dates are "" for the null date. */
export interface AccommodationData {
  MilestoneId: string;
  MilestoneType: string;
  MilestoneDateTime: string;
  MilestoneTitle: string;
  EventDetails: OrbitEventDetails;
  /** SpecialNeeds: the UI reads only whether the list is empty. */
  SpecialNeedsCount: number;
  Helpers: HelperItem[];
  Rooms: RoomItem[];
}

/** The outputs of DataActionGetAccommodationHost. */
export interface AccommodationHostResult {
  accommodationData: AccommodationData;
  hasData: boolean;
}

/** The accommodation host document of DataActionGet_Document ("" = no document). */
export interface AccommodationHostDocument {
  DocumentURL: string;
  DocumentName: string;
}

type GmpMilestoneHostPath = OrbitPath<'ScreenBlock_MilestoneWrapper/DataActionGetGmpMilestoneHost'>;
/** The variables of ScreenBlock_MilestoneWrapper that DataActionGetGmpMilestoneHost sends. */
export type GmpMilestoneHostCallInputs = ActionInputs<GmpMilestoneHostPath>;
/** GetGmpMilestoneHostResponse (MilestoneType, MilestoneTitle, HostId, Status), as it travels. */
export type GmpMilestoneHost = ActionOutputs<GmpMilestoneHostPath>['Response'];

/* ---- Orbit transport (ScreenBlock_TransportDetail) ---- */

/** The variables of ScreenBlock_TransportDetail that its data action sends. */
export type TransportDetailCallInputs = Required<
  Pick<
    ActionInputs<OrbitPath<'ScreenBlock_TransportDetail/DataActionGet_TransportDetail'>>,
    | 'Title'
    | 'IsFetchingData'
    | 'In_MilestoneId'
    | 'In_OrbitMilestoneTypeId'
    | 'In_PreloadMilestoneName'
    | 'In_HeaderClass'
  >
>;

/** OrbitMilestoneTypeRec: the fields that the transport detail reads. */
export interface TransportMilestoneType {
  Id: string;
  Name: string;
  MainIcon: string;
  IsTransportMilestone: boolean;
  IconTransportDeparture: string;
  IconTransportArrival: string;
  TransportHeaderClass: string;
  TravelInfoHeader: string;
}

/** TransportLocationRec. DateTime is "" for the null date. */
export interface TransportLocation {
  Location: string;
  Terminal: string;
  DateTime: string;
}

/** StopItemRec. StopDurationTime is a Time ("HH:mm:ss"). */
export interface StopItem {
  Title: string;
  ArrivalLocation: TransportLocation;
  DepartureLocation: TransportLocation;
  StopDurationTime: string;
}

/** SeatItemRec. */
export interface SeatItem {
  Departure: string;
  Arrival: string;
  SeatNumber: string;
}

/** TravelInfoRec. Every attribute of the record that travels stays in the object. */
export interface TravelInfo {
  BookingReference: string;
  Class: string;
  CodeShareFlight: string;
  CodeShareName: string;
  DriverName: string;
  FareType: string;
  OnboardMeal: string;
  VehicleName: string;
}

/** GetTransportDetail_Response. */
export interface TransportDetailResponse {
  MilestoneId: string;
  Title: string;
  Type: string;
  TransportType: string;
  Operator: string;
  TravelIdentifier: string;
  DepartureLocation: TransportLocation;
  ArrivalLocation: TransportLocation;
  Stops: StopItem[];
  Seats: SeatItem[];
  BaggageAllowance: { CarryOnBaggage: string; CheckedBaggage: string };
  TripDuration: { TripDurationHours: string; TripDurationMinutes: string };
  TravelInfo: TravelInfo;
  Notes: string;
}

/** GetTransportDetails_ScreenRec: the milestone type and the transport. */
export interface TransportDetails {
  MilestoneType: TransportMilestoneType;
  TransportDetail: TransportDetailResponse;
}

/* ---- Orbit documents and QR code (ScreenBlock_ViewDocuments, ScreenBlock_GenerateQRCode) ---- */

/** The variables of ScreenBlock_ViewDocuments that its data action sends. */
export type EventDocumentsCallInputs = Required<
  Pick<
    ActionInputs<OrbitPath<'ScreenBlock_ViewDocuments/DataActionGetEventDocuments'>>,
    | 'IsFetchingData'
    | 'IsLoadingDocument'
    | 'In_MemberId'
    | 'In_EventId'
    | 'In_EventName'
    | 'In_EventLocation'
    | 'In_EventStartDate'
    | 'In_EventEndDate'
  >
>;

/** EventDocumentItem_Screen: a document of the event. IsViewed is False in the answer; the screen sets it.
    LastUpdatedOn is "" for the null date. */
export interface EventDocumentItem {
  DocumentURL: string;
  DocumentName: string;
  LastUpdatedOn: string;
  LastUpdatedBy: string;
  IsViewed: boolean;
}

/** The variables of ScreenBlock_GenerateQRCode that its data action sends. */
export type EventQRCodeCallInputs = Required<
  Pick<
    ActionInputs<OrbitPath<'ScreenBlock_GenerateQRCode/DataActionGet_EventQRCode'>>,
    | 'UserName'
    | 'UserLocation'
    | 'UserSignedURL'
    | 'IsFetchingData'
    | 'In_MemberId'
    | 'In_EventId'
    | 'In_EventName'
    | 'In_EventStartDate'
    | 'In_EventEndDate'
    | 'In_EventLocation'
  >
>;

/** GetEventQRCode_ScreenRec: the pass texts and the QR image. QRCodeAsBinary is the BinaryData as it travels (base64;
    "" = no binary). */
export interface EventQRCodeData {
  GetEventQRCodeResponse: {
    GuestRole: string;
    QrCodeImage: string;
    Seats: QRCodeSeatItem[];
    Tag: string;
  };
  QRCodeAsBinary: string;
}

/* ---- Orbit admin (ScreenBlock_AdminLanding, ScreenBlock_AdminEventDetail) ---- */

/** The variables of ScreenBlock_AdminLanding that its data action sends. */
export type AdminEventsCallInputs = Required<
  Pick<
    ActionInputs<OrbitPath<'ScreenBlock_AdminLanding/DataActionGet_AdminEventsList'>>,
    'IsFetchingData' | 'UserFirstName' | 'UserMemberId'
  >
>;

/** An event of the admin list: the record that Card_Event takes and the TypeFriendly of the row, which the card
    click passes on. */
export interface AdminEventItem {
  event: Event_Screen;
  typeFriendly: string;
}

/** The variables of ScreenBlock_AdminEventDetail that DataActionGet_EventInformation sends. */
export type AdminEventInformationCallInputs = Required<
  Pick<
    ActionInputs<OrbitPath<'ScreenBlock_AdminEventDetail/DataActionGet_EventInformation'>>,
    | 'In_EventId'
    | 'In_EventName'
    | 'In_EventStartDate'
    | 'In_EventEndDate'
    | 'In_EventLocation'
    | 'In_EventTypeFriendly'
    | 'IsFetchingData'
    | 'IsProcessingData'
    | 'QRCodePopupOpened'
  >
>;

/** The outputs of DataActionGet_EventInformation. */
export interface AdminEventInformation {
  hasQRCode: boolean;
  orbitEventType: OrbitEventTypeRecord;
}

/** The scanned member, with the fields that the check-in sends (a member record of Directory_MemberById). */
export interface ScannedMemberNames {
  FirstName: string;
  /** The OutSystems attribute name (lower-case "n"). */
  Lastname: string;
  LocalityName: string;
  CountryName: string;
}

/** The scanning admin, as ScannerAdminInfo takes it (from the cached user record). */
export interface ScannerAdmin {
  MemberId: string;
  FirstName: string;
  LastName: string;
  Locality: string;
  Country: string;
}

/** QRCodeStatusRec: the result of a check-in. */
export interface QRCodeStatus {
  Success: boolean;
  ErrorMessage: string;
}

/** GetScanEventQRCodeResponse: the role, the seats, the tag and the status of the check-in. */
export interface ScanEventQRCodeResult {
  UserRole: string;
  Seats: QRCodeSeatItem[];
  Tag: string;
  GuestRole: string;
  Status: QRCodeStatus;
}

/* ---- LDM meal events (ScreenBlock_EventDetail_V2, ScreenBlock_MyEvents_V2) ---- */

type LdmEventPath = OrbitPath<'ScreenBlock_EventDetail_V2/DataActionGetEventByEventId'>;
type LdmEventResponseWire = ActionOutputs<LdmEventPath>['EventResponse'];
type CoordinatorDetailsWire = ActionOutputs<
  OrbitPath<'ScreenBlock_EventDetail_V2/DataActionGetCoordinatorDetails'>
>['Out_CoordinatorDetails'];

/** The inputs of ScreenBlock_EventDetail_V2 that its two data actions send (Long Integers, "0" by default). */
export type LdmEventCallInputs = {
  EventHostId: string;
  EventId: string;
};

/** Host_V2: the host household and the meal (EventDate is Text). */
export type LdmEventHost = LdmEventResponseWire['Host'];
/** DetailGuestItem_V2: one guest household of the meal. */
export type DetailGuestItem = LdmEventResponseWire['Guests']['List'][number];
/** SpecialNeedsItem_LDM_V2: one special need of a guest. */
export type LdmSpecialNeedsItem = LdmEventResponseWire['SpecialNeeds']['Diet']['List'][number];

/** GetEventCalendarDetailResponse_V2 with its lists unwrapped. */
export interface LdmEventDetail {
  Host: LdmEventHost;
  Guests: DetailGuestItem[];
  SpecialNeeds: { Diet: LdmSpecialNeedsItem[]; Mobility: LdmSpecialNeedsItem[]; Other: LdmSpecialNeedsItem[] };
}

/** The outputs of DataActionGetEventByEventId. */
export interface EventByEventIdData {
  eventResponse: LdmEventDetail;
  hasContent: boolean;
}

/** GetCoordinatorDetailsResponse: the record inside Out_CoordinatorDetails (HostDetails). */
export type CoordinatorDetails = CoordinatorDetailsWire['GetCoordinatorDetailsResponse'];

/** The outputs of DataActionGetCoordinatorDetails. The UI does not read EventName. */
export interface CoordinatorDetailsData {
  coordinatorDetails: CoordinatorDetails;
  hasContent: boolean;
}

type MyTimelinePath = OrbitPath<'ScreenBlock_MyEvents_V2/DataActionGetEventsForMyTimeline'>;
type EventCalendarWire = ActionOutputs<MyTimelinePath>['Out_UpcomingEvents']['List'][number];

/** EventLocalitiesFilter: one locality choice of the timeline filter, as it travels. */
export type TimelineLocalityFilter = NonNullable<
  ActionInputs<MyTimelinePath>['PastEventFilters']
>['Localities']['List'][number];

/** EventCalendarFiltersAsText: the past-event filters (the dates are "YYYY-MM-DD"). */
export interface EventCalendarFiltersAsText {
  FromDate: string;
  ToDate: string;
  Localities: TimelineLocalityFilter[];
}

/** The variables of ScreenBlock_MyEvents_V2 that DataActionGetEventsForMyTimeline sends (the server reads them). */
export interface MyTimelineCallInputs {
  CurrentEventView: number;
  DefaultDateRangeInMonths: number;
  IsFiltering: boolean;
  IsFetchingMyTimeline: boolean;
  PastEventFilters: EventCalendarFiltersAsText;
}

/** CalendarGuestItem_V2: one guest household of an event, as it travels. */
export type CalendarGuestItem = EventCalendarWire['Guests']['List'][number];

/** EventCalendar_V2 with its guest list unwrapped. Every attribute of the record that travels stays in the object.
    EventDate and GuestCount are Text. */
export interface EventCalendar extends Omit<EventCalendarWire, 'Guests'> {
  Guests: CalendarGuestItem[];
}

/** TimelineEventGroup_V2: the past events of one month. */
export interface TimelineEventGroup {
  CurrentMonthDate: string;
  EventsCalendar: EventCalendar[];
}

/** The outputs of DataActionGetEventsForMyTimeline. */
export interface MyTimelineData {
  pastEvents: TimelineEventGroup[];
  upcomingEvents: EventCalendar[];
}
