import { describe, expect, it } from 'vitest';
import {
  toAccommodationHostResult,
  toAdminEventItems,
  toAssembleEventResult,
  toAssembleMeetingListInputs,
  toAssembleMeetings,
  toEventBookletFilters,
  toEventBookletMembers,
  toEventBookletPaginationInput,
  toEventBookletSelectedFiltersInput,
  toEventDetailsResult,
  toEventDocuments,
  toEventsByMemberIdResult,
  toHostSurveyInputs,
  toMyTimelineInputs,
  toScanEventQRCodeResult,
  toTransportDetails,
  type AccommodationHostWire,
  type AdminEventsWire,
  type AssembleEventWire,
  type AssembleMeetingsWire,
  type EventBookletFiltersWire,
  type EventBookletMembersWire,
  type EventDetailsWire,
  type EventDocumentsWire,
  type EventsByMemberIdWire,
  type ScanEventQRCodeWire,
  type TransportDetailWire,
} from './mapper';
import type { HostSurveyCallInputs, MyTimelineCallInputs } from './types';

/* Wire records as the server sends them (every attribute), with fictional values. The OutSystems null DateTime is
   "1900-01-01T00:00:00". */
const NULL_DATE_TIME = '1900-01-01T00:00:00';

type SummaryWire = AssembleMeetingsWire['AssembleSummaryMeetingList']['List'][number];
type MilestoneWire = EventDetailsWire['Response']['Milestones']['List'][number];
type MemberInformationWire =
  AccommodationHostWire['Response']['GetAccommodationHostResponse']['Rooms']['List'][number]['Guests']['List'][number]['MemberInformation']['List'][number];
type OrbitEventTypeWire = EventDetailsWire['Response']['OrbitEventType'];
type TransportLocationWire = TransportDetailWire['Response']['TransportDetail']['DepartureLocation'];

const summaryWire = (fields: Partial<SummaryWire> = {}): SummaryWire => ({
  AssembleEventType: { Id: 'gospel', Title: 'Gospel Preaching' },
  BrothersCount: '14',
  CountryName: 'Argentina',
  DateTime: '2026-11-08T18:30:00',
  EventId: '88101',
  HostingLocation: 'Bahia Blanca Main Hall',
  HostingSubdivisionFormattedAddress: 'Calle Zelarrayan 1450, Bahia Blanca',
  HostingSubdivisionHallPhotoSignedURL: '',
  HostingSubdivisionId: '1210',
  HostingSubdivisionLatitude: '-38.7183',
  HostingSubdivisionLongitude: '-62.2663',
  HostingSubdivisionUseCoordinates: true,
  IsAllDay: false,
  IsCustomRecurrence: false,
  IsPBCC: true,
  IsUnavailable: false,
  IsVirtual: false,
  LocalityName: 'Bahia Blanca',
  Notes: 'Doors open at 6 PM.',
  RecurrenceTypeId: '',
  RecurrenceTypeLabel: '',
  RecurrencyFirstDate: '1900-01-01',
  SeriesId: '501',
  SistersCount: '17',
  VirtualMeetingId: '',
  VirtualMeetingLink: '',
  VirtualMeetingPassword: '',
  VirtualMeetingTypeLabel: '',
  ...fields,
});

const milestoneTypeWire: MilestoneWire['OrbitMilestoneType'] = {
  CanHost: true,
  IconTransportArrival: '',
  IconTransportDeparture: '',
  Id: 'accommodation-host',
  IsTransportMilestone: false,
  Is_Active: true,
  MainColorVar: '--color-teal',
  MainIcon: 'bed',
  Name: 'Accommodation',
  Order: 2,
  TransportHeaderClass: '',
  TravelInfoHeader: '',
  TravelInfoHeaderIcon: '',
  Type: 'Accommodation',
};

const milestoneInfoWire = (fields: Partial<MilestoneWire['MilestoneInfo']> = {}): MilestoneWire['MilestoneInfo'] => ({
  ArrivalLocation: '',
  DepartureLocation: '',
  Description: 'Two visiting families stay for the conference nights.',
  HostId: '990002',
  Location: 'Calle Brown 620, Bahia Blanca',
  MilestoneEndDateTime: '2026-11-07T12:00:00Z',
  MilestoneHost: 'Mr Julián & Mrs Paula Vitale',
  MilestoneStartDateTime: NULL_DATE_TIME,
  Seating: '',
  ...fields,
});

const eventTypeWire: OrbitEventTypeWire = {
  Id: 'event-host',
  Is_Active: true,
  MainColorVar: '--color-purple',
  MainIcon: 'meeting',
  Name: 'Host',
  Type: 'Host',
};

const memberWire = (fields: Partial<MemberInformationWire> = {}): MemberInformationWire => ({
  Accommodation: { Host: 'Vitale', HouseholderId: '990002', MilestoneId: '7301-1' },
  Age: '42',
  CountryCode: 'AR',
  EveningMeal: 'Host',
  FirstName: 'Mateo',
  HasGuestArrangements: true,
  HasOrbitAdminRole: false,
  HouseHolderId2: '0',
  HouseholderId: '990101',
  IsHouseholder: true,
  IsSpouse: false,
  LastName: 'Herrera',
  Locality: 'Monte Hermoso',
  LocalityId: '253',
  MemberId: '990101',
  MiddayMeal: 'Hall',
  Phone: '+54 291 555 0142',
  SignedPhotoURL: '',
  Title: 'Mr',
  ...fields,
});

const location = (fields: Partial<TransportLocationWire> = {}): TransportLocationWire => ({
  DateTime: '2026-11-06T13:05:00Z',
  Location: 'Buenos Aires Aeroparque (AEP)',
  Terminal: 'A',
  ...fields,
});

describe('event mapper: Assemble meetings', () => {
  it('toAssembleMeetings keeps every attribute of a meeting, with the counts and coordinates as numbers', () => {
    const wire: AssembleMeetingsWire = { AssembleSummaryMeetingList: { List: [summaryWire()] } };
    expect(toAssembleMeetings(wire)).toEqual([
      {
        ...summaryWire(),
        BrothersCount: 14,
        SistersCount: 17,
        HostingSubdivisionLatitude: -38.7183,
        HostingSubdivisionLongitude: -62.2663,
      },
    ]);
  });

  it('toAssembleMeetings answers the null DateTime as ""', () => {
    const wire: AssembleMeetingsWire = {
      AssembleSummaryMeetingList: { List: [summaryWire({ DateTime: NULL_DATE_TIME })] },
    };
    expect(toAssembleMeetings(wire)[0]?.DateTime).toBe('');
  });

  it('toAssembleEventResult unwraps the localities, halls and guests and keeps the photo fields that the UI reads', () => {
    const guest = {
      AvatarURL: {
        Bucket: 'photos',
        CropH: '0',
        CropW: '0',
        CropX: '0',
        CropY: '0',
        Path: 'households/7710.jpg',
        SignedURL: 'https://img.example.org/7710.jpg',
        Type: 'Household',
      },
      FamilyNames: 'Herrera',
      Id: '7710',
      IsBookmarked: false,
      IsDisabled: false,
      Location: 'Monte Hermoso, Argentina',
      Name: 'Mateo & Sofia Herrera',
    };
    const wire: AssembleEventWire = {
      IsNotFound: false,
      AssembleEvent: {
        AssembleEventSummary: summaryWire(),
        AssembleAttendeeSubdivisionList: {
          List: [
            {
              LocalityId: '253',
              LocalityName: 'Monte Hermoso',
              AssembleAttendeeSubdivisionList: {
                List: [
                  {
                    Id: '1220',
                    Name: 'Monte Hermoso Hall',
                    HouseholdCount: '6',
                    LocalityId: '253',
                    SubdivisionHouseholdList: { List: [guest] },
                  },
                ],
              },
            },
          ],
        },
        AssembleSpecialAttendeeSubdivisionList: { List: [] },
        AssembleAttendeeSpecialGuestList: { List: [guest] },
        GSMContactList: { List: ['990101', 990102] },
      },
    };
    const guestOut = {
      Id: '7710',
      Name: 'Mateo & Sofia Herrera',
      FamilyNames: 'Herrera',
      Location: 'Monte Hermoso, Argentina',
      IsBookmarked: false,
      IsDisabled: false,
      AvatarURL: {
        Bucket: 'photos',
        Path: 'households/7710.jpg',
        Type: 'Household',
        SignedURL: 'https://img.example.org/7710.jpg',
      },
    };
    const result = toAssembleEventResult(wire);
    expect(result.IsNotFound).toBe(false);
    expect(result.AssembleEvent.AssembleEventSummary).toEqual(
      expect.objectContaining({ EventId: '88101', Notes: 'Doors open at 6 PM.', BrothersCount: 14 }),
    );
    expect(result.AssembleEvent.AssembleAttendeeSubdivisionList).toEqual([
      {
        LocalityId: '253',
        LocalityName: 'Monte Hermoso',
        AssembleAttendeeSubdivisionList: [
          {
            Id: '1220',
            Name: 'Monte Hermoso Hall',
            HouseholdCount: 6,
            LocalityId: '253',
            SubdivisionHouseholdList: [guestOut],
          },
        ],
      },
    ]);
    expect(result.AssembleEvent.AssembleSpecialAttendeeSubdivisionList).toEqual([]);
    expect(result.AssembleEvent.AssembleAttendeeSpecialGuestList).toEqual([guestOut]);
    expect(result.AssembleEvent.GSMContactList).toEqual(['990101', '990102']);
  });

  it('toAssembleMeetingListInputs sends the meeting types of the filter in a wrapped list', () => {
    const selection = { AssembleEventType: { Id: 'gospel', Title: 'Gospel Preaching' }, IsSelected: true };
    const query = {
      SubdivisionId: '1210',
      LocalSubdivisionId: '0',
      EventList_Filter: { AssembleFilterTimeOptionId: 'Past Meetings', AssembleEventType: [selection] },
      EventList_RangeFrom: '2026-01-01T00:00:00',
      EventsList_RangeTo: '2026-11-01T00:00:00',
      EventList_PageNumber: 2,
      MaxRecords: 10,
      DeviceTimezone: 'America/Argentina/Buenos_Aires',
    };
    expect(toAssembleMeetingListInputs(query)).toEqual({
      ...query,
      EventList_Filter: { AssembleFilterTimeOptionId: 'Past Meetings', AssembleEventType: { List: [selection] } },
    });
  });
});

describe('event mapper: Orbit event booklet', () => {
  it('toEventBookletMembers unwraps the days as Dates', () => {
    const wire: EventBookletMembersWire = {
      Response: {
        List: [
          {
            Age: '42',
            Country: 'Argentina',
            CountryCode: 'AR',
            Days: { List: ['2026-11-06T00:00:00', '2026-11-07T00:00:00'] },
            FirstName: 'Mateo',
            Host: 'Vitale',
            HostHouseholderId: '990002',
            HouseholderId: '990101',
            IsHostLocality: false,
            IsHouseholder: true,
            LastName: 'Herrera',
            Locality: 'Monte Hermoso',
            LocalityId: '253',
            MemberId: '990101',
            OrderNo: '3',
            Phone: '+54 291 555 0142',
            Role: '',
            Title: 'Mr',
          },
        ],
      },
    };
    expect(toEventBookletMembers(wire)[0]?.Days).toEqual(['2026-11-06', '2026-11-07']);
  });

  it('toEventBookletFilters answers the null event dates as "" and the filter days as Dates', () => {
    const wire: EventBookletFiltersWire = {
      Response: {
        EventInfo: {
          EventCountry: 'Argentina',
          EventCountryCode: 'AR',
          EventEndDateTime: NULL_DATE_TIME,
          EventId: '7301',
          EventLocation: 'Bahia Blanca Main Hall',
          EventLocationId: '252',
          EventName: 'Weekend Bible Conferences - Bahia and Azul',
          EventStartDateTime: '2026-11-06T12:00:00Z',
        },
        Filters: {
          Countries: { List: [{ CountryName: 'Argentina', Localities: { List: ['Bahia Blanca', 'Azul'] } }] },
          EventDays: { List: ['2026-11-06T00:00:00'] },
          HelperRoles: { List: ['Kitchen'] },
        },
      },
    };
    const result = toEventBookletFilters(wire);
    expect(result.EventInfo.EventStartDateTime).toBe('2026-11-06T12:00:00Z');
    expect(result.EventInfo.EventEndDateTime).toBe('');
    expect(result.Filters).toEqual({
      EventDays: ['2026-11-06'],
      HelperRoles: ['Kitchen'],
      Countries: [{ CountryName: 'Argentina', Localities: ['Bahia Blanca', 'Azul'] }],
    });
  });

  it('the booklet inputs travel with their lists wrapped and the scroll thresholds as texts', () => {
    expect(
      toEventBookletSelectedFiltersInput({
        SearchTerm: 'herrera',
        DateRange: [{ DateGroup: '2026-11-06', IsSelected: true }, {}],
        HelperRoles: ['Kitchen'],
        Countries: ['Argentina'],
        Localities: ['Azul'],
      }),
    ).toEqual({
      SearchTerm: 'herrera',
      DateRange: {
        List: [
          { DateGroup: '2026-11-06', IsSelected: true },
          { DateGroup: '', IsSelected: false },
        ],
      },
      HelperRoles: { List: ['Kitchen'] },
      Countries: { List: ['Argentina'] },
      Localities: { List: ['Azul'] },
    });
    const paging = {
      Guest_MaxRows: 10,
      Guest_PageNumber: 2,
      Guest_IsNewSearch: false,
      Guest_NoResults: false,
      Guest_ScrollThreshold: 240,
      Helper_MaxRows: 5,
      Helper_PageNumber: 1,
      Helper_IsNewSearch: true,
      Helper_NoResults: true,
      Helper_ScrollThreshold: 120,
    };
    expect(toEventBookletPaginationInput(paging)).toEqual({
      ...paging,
      Guest_ScrollThreshold: '240',
      Helper_ScrollThreshold: '120',
    });
  });
});

describe('event mapper: Orbit events', () => {
  it('toEventDetailsResult answers the null dates as "" and keeps the milestone records', () => {
    const milestone: MilestoneWire = {
      DateForFilter: '2026-11-06',
      MilestoneDateTime: '2026-11-06T21:00:00Z',
      MilestoneId: '7301-1',
      MilestoneInfo: milestoneInfoWire(),
      OrbitMilestoneType: milestoneTypeWire,
      SequenceNo: '1',
      TimeType: 'DAY',
      Title: 'Accommodation',
      Type: 'accommodation-host',
    };
    const wire: EventDetailsWire = {
      IsNullResponse: false,
      Response: {
        Accommodations: true,
        EventEndDate: NULL_DATE_TIME,
        EventId: '7301',
        EventName: 'Weekend Bible Conferences - Bahia and Azul',
        EventStartDate: '2026-11-06T12:00:00Z',
        EventType: 'event-host',
        GuestTransport: false,
        Helpers: true,
        HostSurvey: { Description: '', Id: '' },
        IsBookletVisible: false,
        Location: 'Bahia Blanca Main Hall',
        Meals: false,
        MemberId: '990001',
        Milestones: { List: [milestone] },
        OrbitEventType: eventTypeWire,
        SetUpMeals: false,
        Transport: false,
        TypeOfEvent: 'Weekend Conference Program',
      },
      Response_DateFilters: {
        DayFilterList: {
          List: [
            { DateGroup: '2026-11-06', IsSelected: true },
            { DateGroup: '1900-01-01', IsSelected: false },
          ],
        },
        HasAfter: true,
        HasBefore: false,
      },
    };
    const result = toEventDetailsResult(wire);
    expect(result.response.EventStartDate).toBe('2026-11-06T12:00:00Z');
    expect(result.response.EventEndDate).toBe('');
    expect(result.response.OrbitEventType).toEqual({ Id: 'event-host', Type: 'Host' });
    expect(result.response.Milestones).toEqual([
      {
        MilestoneId: '7301-1',
        Type: 'accommodation-host',
        Title: 'Accommodation',
        MilestoneDateTime: '2026-11-06T21:00:00Z',
        TimeType: 'DAY',
        SequenceNo: '1',
        DateForFilter: '2026-11-06',
        OrbitMilestoneType: milestoneTypeWire,
        MilestoneInfo: milestoneInfoWire({ MilestoneStartDateTime: '' }),
      },
    ]);
    expect(result.dateFilters).toEqual({
      HasBefore: false,
      HasAfter: true,
      DayFilterList: [
        { DateGroup: '2026-11-06', IsSelected: true },
        { DateGroup: '', IsSelected: false },
      ],
    });
    expect(result.isNullResponse).toBe(false);
  });

  it('toEventsByMemberIdResult converts an event row and a milestone row to the records of their cards', () => {
    const noMilestoneType = { ...milestoneTypeWire, Id: '' };
    const eventRow: EventsByMemberIdWire['Response']['List'][number] = {
      OrbitEventType: eventTypeWire,
      OrbitMilestoneType: noMilestoneType,
      OrbitSummaryItem: {
        DateTime: '2026-11-06T12:00:00Z',
        EventId: '7301',
        EventInfo: {
          EndEventDate: '2026-11-08T20:00:00Z',
          EventLocation: 'Bahia Blanca Main Hall',
          StartEventDate: '2026-11-06T12:00:00Z',
        },
        MilestoneId: '',
        MilestoneInfo: milestoneInfoWire({ MilestoneEndDateTime: NULL_DATE_TIME }),
        SequenceNo: '1',
        Title: 'Weekend Bible Conferences - Bahia and Azul',
        Type: 'event-host',
      },
    };
    const milestoneRow: EventsByMemberIdWire['Response']['List'][number] = {
      OrbitEventType: eventTypeWire,
      OrbitMilestoneType: milestoneTypeWire,
      OrbitSummaryItem: {
        DateTime: '2026-11-06T21:00:00Z',
        EventId: '7301',
        EventInfo: { EndEventDate: NULL_DATE_TIME, EventLocation: '', StartEventDate: NULL_DATE_TIME },
        MilestoneId: '7301-1',
        MilestoneInfo: milestoneInfoWire({ MilestoneStartDateTime: '2026-11-06T21:00:00Z' }),
        SequenceNo: '',
        Title: 'Accommodation',
        Type: 'accommodation-host',
      },
    };
    const wire: EventsByMemberIdWire = {
      Response: { List: [eventRow, milestoneRow] },
      YearFilter: { List: [{ Count: 2, IsSelected: true, Year: '2026' }] },
    };
    const { events, yearFilter } = toEventsByMemberIdResult(wire);
    expect(events[0]).toEqual(
      expect.objectContaining({ isMilestone: false, sequenceNo: 1, endDateTime: '2026-11-08T20:00:00Z' }),
    );
    expect(events[0]?.event).toEqual({
      EventId: '7301',
      Type: 'event-host',
      Title: 'Weekend Bible Conferences - Bahia and Azul',
      OrbitEventType: eventTypeWire,
      EventInfo: {
        EndEventDate: '2026-11-08T20:00:00Z',
        EventLocation: 'Bahia Blanca Main Hall',
        StartEventDate: '2026-11-06T12:00:00Z',
      },
    });
    expect(events[1]).toEqual(expect.objectContaining({ isMilestone: true, sequenceNo: 0 }));
    expect(events[1]?.endDateTime).toBe('2026-11-07T12:00:00Z');
    expect(events[1]?.event.EventInfo).toEqual({ EndEventDate: '', EventLocation: '', StartEventDate: '' });
    expect(events[1]?.milestone).toEqual({
      MilestoneId: '7301-1',
      Type: 'accommodation-host',
      Title: 'Accommodation',
      OrbitMilestoneType: milestoneTypeWire,
      MilestoneInfo: milestoneInfoWire({ MilestoneStartDateTime: '2026-11-06T21:00:00Z' }),
    });
    expect(yearFilter).toEqual([{ year: '2026', isSelected: true, count: 2 }]);
  });

  it('toAdminEventItems answers the card record of each event and its TypeFriendly', () => {
    const wire: AdminEventsWire = {
      Response: {
        List: [
          {
            OrbitEventType: eventTypeWire,
            OrbitSummaryItem: {
              DateTime: '2026-11-06T12:00:00Z',
              EventId: '7301',
              EventInfo: { EndEventDate: NULL_DATE_TIME, EventLocation: 'Azul Hall', StartEventDate: NULL_DATE_TIME },
              SequenceNo: '1',
              Title: 'Weekend Bible Conferences - Bahia and Azul',
              Type: 'event-host',
              TypeFriendly: 'Conference',
            },
          },
        ],
      },
    };
    expect(toAdminEventItems(wire)).toEqual([
      {
        event: {
          EventId: '7301',
          Type: 'event-host',
          Title: 'Weekend Bible Conferences - Bahia and Azul',
          OrbitEventType: eventTypeWire,
          EventInfo: { EndEventDate: NULL_DATE_TIME, EventLocation: 'Azul Hall', StartEventDate: NULL_DATE_TIME },
        },
        typeFriendly: 'Conference',
      },
    ]);
  });
});

describe('event mapper: Orbit details', () => {
  it('toAccommodationHostResult keeps the member fields that the cards read and counts the special needs', () => {
    const wire: AccommodationHostWire = {
      HasData: true,
      Response: {
        OrbitMilestoneType: milestoneTypeWire,
        GetAccommodationHostResponse: {
          EventDetails: {
            EndDate: '1900-01-01',
            Id: '7301',
            Location: 'Bahia Blanca Main Hall',
            Name: 'Conference',
            StartDate: '2026-11-06',
          },
          Helpers: { List: [{ Role: 'Driver', MemberInformation: { List: [memberWire({ FirstName: 'Paula' })] } }] },
          MilestoneDateTime: NULL_DATE_TIME,
          MilestoneId: '7301-1',
          MilestoneTitle: 'Accommodation',
          MilestoneType: 'accommodation-host',
          Rooms: {
            List: [
              {
                RoomId: '41',
                RoomName: 'Blue Room',
                RoomInformation: { Beds: '2', Floor: 'first', Type: 'family' },
                Guests: {
                  List: [
                    {
                      CountryCode: 'AR',
                      DisplayDot: true,
                      HouseholdName: 'Herrera',
                      HouseholderId: '990101',
                      Locality: 'Monte Hermoso',
                      LocalityId: '253',
                      MemberInformation: { List: [memberWire()] },
                    },
                  ],
                },
              },
            ],
          },
          SpecialNeeds: { List: [] },
        },
      },
    };
    const { hasData, accommodationData } = toAccommodationHostResult(wire);
    /* The member without Accommodation and HouseHolderId2, which the cards do not read. */
    const member = {
      HouseholderId: '990101',
      MemberId: '990101',
      LocalityId: '253',
      Locality: 'Monte Hermoso',
      CountryCode: 'AR',
      FirstName: 'Mateo',
      LastName: 'Herrera',
      Title: 'Mr',
      IsHouseholder: true,
      IsSpouse: false,
      Age: '42',
      Phone: '+54 291 555 0142',
      MiddayMeal: 'Hall',
      EveningMeal: 'Host',
      HasGuestArrangements: true,
      HasOrbitAdminRole: false,
      SignedPhotoURL: '',
    };
    expect(hasData).toBe(true);
    expect(accommodationData.MilestoneDateTime).toBe('');
    expect(accommodationData.EventDetails).toEqual({
      Id: '7301',
      Name: 'Conference',
      Location: 'Bahia Blanca Main Hall',
      StartDate: '2026-11-06',
      EndDate: '',
    });
    expect(accommodationData.SpecialNeedsCount).toBe(0);
    expect(accommodationData.Helpers).toEqual([
      { Role: 'Driver', MemberInformation: [{ ...member, FirstName: 'Paula' }] },
    ]);
    expect(accommodationData.Rooms).toEqual([
      {
        RoomId: '41',
        RoomName: 'Blue Room',
        RoomInformation: { Beds: '2', Floor: 'first', Type: 'family' },
        Guests: [
          {
            HouseholderId: '990101',
            HouseholdName: 'Herrera',
            LocalityId: '253',
            Locality: 'Monte Hermoso',
            CountryCode: 'AR',
            DisplayDot: true,
            MemberInformation: [member],
          },
        ],
      },
    ]);
  });

  it('toTransportDetails answers the null DateTimes of the locations as ""', () => {
    const wire: TransportDetailWire = {
      Response: {
        MilestoneType: {
          ...milestoneTypeWire,
          Id: 'flight',
          IsTransportMilestone: true,
          IconTransportArrival: 'plane-landing',
          IconTransportDeparture: 'plane-departure',
          TransportHeaderClass: 'flight',
          TravelInfoHeader: 'Flight info',
        },
        TransportDetail: {
          ArrivalLocation: location({ DateTime: NULL_DATE_TIME, Location: 'Bahia Blanca (BHI)', Terminal: '' }),
          BaggageAllowance: { CarryOnBaggage: '8 kg', CheckedBaggage: '23 kg' },
          DepartureLocation: location(),
          MilestoneId: '7301-T1',
          Notes: '',
          Operator: 'Aerolineas Argentinas',
          Seats: { List: [{ Arrival: 'BHI', Departure: 'AEP', SeatNumber: '14C' }] },
          Stops: { List: [] },
          Title: 'Flight to Bahia Blanca',
          TransportType: 'Flight',
          TravelIdentifier: 'AR1520',
          TravelInfo: {
            BookingReference: 'QX7T2L',
            Class: 'Economy',
            CodeShareFlight: '',
            CodeShareName: '',
            DriverName: '',
            FareType: 'Standard',
            OnboardMeal: '',
            VehicleName: '',
          },
          TripDuration: { TripDurationHours: '1', TripDurationMinutes: '20' },
          Type: 'flight',
        },
      },
    };
    const { MilestoneType, TransportDetail } = toTransportDetails(wire);
    expect(MilestoneType).toEqual({
      Id: 'flight',
      Name: 'Accommodation',
      MainIcon: 'bed',
      IsTransportMilestone: true,
      IconTransportDeparture: 'plane-departure',
      IconTransportArrival: 'plane-landing',
      TransportHeaderClass: 'flight',
      TravelInfoHeader: 'Flight info',
    });
    expect(TransportDetail.DepartureLocation).toEqual(location());
    expect(TransportDetail.ArrivalLocation).toEqual({ Location: 'Bahia Blanca (BHI)', Terminal: '', DateTime: '' });
    expect(TransportDetail.Seats).toEqual([{ Departure: 'AEP', Arrival: 'BHI', SeatNumber: '14C' }]);
  });

  it('toEventDocuments answers each document with IsViewed False and a null LastUpdatedOn as ""', () => {
    const wire: EventDocumentsWire = {
      Response: {
        EventDocuments: {
          List: [
            {
              DocumentName: 'Programme.pdf',
              DocumentURL: 'https://docs.example.org/p.pdf',
              LastUpdatedBy: 'Helpdesk',
              LastUpdatedOn: NULL_DATE_TIME,
            },
          ],
        },
      },
    };
    expect(toEventDocuments(wire)).toEqual([
      {
        DocumentURL: 'https://docs.example.org/p.pdf',
        DocumentName: 'Programme.pdf',
        LastUpdatedOn: '',
        LastUpdatedBy: 'Helpdesk',
        IsViewed: false,
      },
    ]);
  });

  it('toScanEventQRCodeResult unwraps the seats', () => {
    const wire: ScanEventQRCodeWire = {
      QRCodeErrorTypeId: '',
      Response: {
        GuestRole: 'Guest',
        Seats: { List: [{ MilestoneName: 'Conference Meeting', SeatAllocation: 'Section B, row 12' }] },
        Status: { ErrorMessage: '', Success: true },
        Tag: 'Blue',
        UserRole: 'Attendee',
      },
    };
    expect(toScanEventQRCodeResult(wire)).toEqual({
      UserRole: 'Attendee',
      Seats: [{ MilestoneName: 'Conference Meeting', SeatAllocation: 'Section B, row 12' }],
      Tag: 'Blue',
      GuestRole: 'Guest',
      Status: { Success: true, ErrorMessage: '' },
    });
  });
});

describe('event mapper: inputs', () => {
  it('toHostSurveyInputs sends a null input date ("") as the null DateTime', () => {
    const inputs: HostSurveyCallInputs = {
      IsFetchingData: true,
      IsAddingHelper: false,
      PositionToDelete: 0,
      SurveyDiscarded: false,
      SurveySubmitted: false,
      IsConfirmedSurvey: false,
      HasDataSteps: false,
      IsPostingSurvey: false,
      In_EventId: '7301',
      In_MemberId: '990001',
      In_EventName: 'Weekend Bible Conferences - Bahia and Azul',
      In_EventStartDate: '2026-11-06T12:00:00.000Z',
      In_EventEndDate: '',
    };
    expect(toHostSurveyInputs(inputs)).toEqual({ ...inputs, In_EventEndDate: NULL_DATE_TIME });
  });

  it('toMyTimelineInputs sends the localities of the filter in a wrapped list', () => {
    const inputs: MyTimelineCallInputs = {
      CurrentEventView: 1,
      DefaultDateRangeInMonths: 24,
      IsFiltering: true,
      IsFetchingMyTimeline: true,
      PastEventFilters: {
        FromDate: '2024-11-01',
        ToDate: '2026-11-01',
        Localities: [{ IdAsText: '252', Name: 'Bahia Blanca', IsSelected: true }],
      },
    };
    expect(toMyTimelineInputs(inputs)).toEqual({
      ...inputs,
      PastEventFilters: {
        FromDate: '2024-11-01',
        ToDate: '2026-11-01',
        Localities: { List: [{ IdAsText: '252', Name: 'Bahia Blanca', IsSelected: true }] },
      },
    });
  });
});
