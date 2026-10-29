import type { RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList, wireList } from '@/lib/os-wire';
import { contractHandler } from '@/mocks/contract';
import { ALL_HOUSEHOLDS } from '@/mocks/fictional/directory';
import { orbitEvents, orbitHostSurveys, type OrbitHostSurvey } from '@/mocks/fictional/orbit';
import { collection } from '@/mocks/store';

/* DataActionGetHostSurvey and PostHostSurvey: fictional answers from the shared Orbit world
   (src/mocks/fictional/orbit.ts, orbitHostSurveys) in the captured shape (calls.md § DataActionGetHostSurvey).
   The surveys live in a store collection keyed by EventId (P-MUTATION): PostHostSurvey (a write of the original; never
   sent to a real server) replaces the stored survey of its event with the GetHostSurvey it sends, so the next
   GetHostSurvey answers what was saved.
   Scenarios:
   - real: the survey of event In_EventId (event 7301: the Vitale household's confirmed survey, as captured: seven
     rooms, two meals, no helper or vehicle section; event 7303: a survey still to answer, for the data steps); an
     event without a survey answers the empty response (the survey status "" is then no LocalSurveyStatus).
   - empty (every list emptied), loading (never answers: skeleton), error (HTTP 500): contractHandler. */

const MODULE = 'Connect2_OrbitMobile_MUI';
/** GetHostSurveyResponse (Connect2_OrbitMobile_IS) as it travels, typed by the API contract. */
type HostSurveyResponseWire = ActionOutputs<
  PathOf<typeof MODULE, 'ScreenBlock_HostSurvey/DataActionGetHostSurvey'>
>['Response'];
const NULL_DATE = '1900-01-01';
const NULL_DATE_TIME = '1900-01-01T00:00:00';

/** One survey of orbit.ts → GetHostSurveyResponse. Event name, dates and locality from the event and its hall. */
function surveyWire(s: OrbitHostSurvey): HostSurveyResponseWire {
  const event = orbitEvents().find((e) => e.EventId === s.EventId);
  return {
    SurveyInfo: {
      Id: s.Id,
      EventId: s.EventId,
      EventName: event?.Title ?? '',
      EventStartDateTime: event?.StartEventDate ?? NULL_DATE_TIME,
      EventEndDateTime: event?.EndEventDate ?? NULL_DATE_TIME,
      MemberId: s.MemberId,
      LocalityName: 'Bahia Blanca',
      CountryName: 'Argentina',
      HostProfileSurveyStatus: s.HostProfileSurveyStatus,
      AccommodationSurvey: s.AccommodationSurvey,
      AccommodationSurveyUpdate: s.AccommodationSurveyUpdate,
      AccommodationSurveyNote: s.AccommodationSurveyNote,
      MealSurvey: s.MealSurvey,
      MealSurveyUpdate: s.MealSurveyUpdate,
      MealSurveyNote: s.MealSurveyNote,
      HelperSurvey: s.HelperSurvey,
      HelperSurveyNote: s.HelperSurveyNote,
      VehicleSurvey: s.VehicleSurvey,
      VehicleSurveyNote: s.VehicleSurveyNote,
      HostSurveyNote: s.HostSurveyNote,
    },
    Rooms: {
      AccommodationNote: s.AccommodationNote,
      HostSurvey_RoomItem: wireList(
        s.rooms.map((r) => ({
          Name: r.Name,
          GenderPreference: r.GenderPreference,
          Floor: r.Floor,
          NumberOfBeds: String(r.Beds.length),
          Beds: wireList([...r.Beds]),
          HasEnsuite: r.HasEnsuite,
          HasToilet: r.HasToilet,
          HasShower: r.HasShower,
          HasBasin: r.HasBasin,
          RoomNote: r.RoomNote,
          IsEdit: false,
        })),
      ),
    },
    Meals: {
      MealNote: s.MealNote,
      MealItemInfo: wireList(s.meals.map((m) => ({ ...m, IsEdit: false, ResetMealData: false }))),
    },
    Helpers: { HelperNote: '', HelperItemInfo: wireList([]) },
    Vehicles: { HasVehicles: false, VehicleItemInfo: wireList([]) },
  };
}

/** GetHostSurveyResponse of an event without a survey: every field at its default. */
const EMPTY_SURVEY = (): HostSurveyResponseWire => ({
  SurveyInfo: {
    Id: '0',
    EventId: '0',
    EventName: '',
    EventStartDateTime: NULL_DATE_TIME,
    EventEndDateTime: NULL_DATE_TIME,
    MemberId: '0',
    LocalityName: '',
    CountryName: '',
    HostProfileSurveyStatus: '',
    AccommodationSurvey: false,
    AccommodationSurveyUpdate: false,
    AccommodationSurveyNote: '',
    MealSurvey: false,
    MealSurveyUpdate: false,
    MealSurveyNote: '',
    HelperSurvey: false,
    HelperSurveyNote: '',
    VehicleSurvey: false,
    VehicleSurveyNote: '',
    HostSurveyNote: '',
  },
  Rooms: { AccommodationNote: '', HostSurvey_RoomItem: wireList([]) },
  Meals: { MealNote: '', MealItemInfo: wireList([]) },
  Helpers: { HelperNote: '', HelperItemInfo: wireList([]) },
  Vehicles: { HasVehicles: false, VehicleItemInfo: wireList([]) },
});

/** A survey still to answer (status Pending), for the data steps of the wizard (decision Legacy_OrbitEventsFlow Q1
    (a)): event 7303, which no other screen lists; open it as /UBTConnect/HostSurvey?In_EventId=7303. The Okafor
    household offers two rooms (one still to complete), two meals (the supper without capacities), one approved
    helper and a car. Fictional names, places and notes. */
const PENDING_SURVEY = (): HostSurveyResponseWire => ({
  SurveyInfo: {
    Id: '61907',
    EventId: '7303',
    EventName: 'Autumn Gathering in Tandil',
    EventStartDateTime: '2026-11-20T12:00:00Z',
    EventEndDateTime: '2026-11-22T18:00:00Z',
    MemberId: '48211',
    LocalityName: 'Tandil',
    CountryName: 'Argentina',
    HostProfileSurveyStatus: 'pending',
    AccommodationSurvey: true,
    AccommodationSurveyUpdate: true,
    AccommodationSurveyNote: 'Please list the rooms you can offer for the Friday and Saturday nights.',
    MealSurvey: true,
    MealSurveyUpdate: true,
    MealSurveyNote: 'Tick the meals you would like to prepare and how many guests you can seat.',
    HelperSurvey: true,
    HelperSurveyNote: 'Helpers from your locality can support you with transport and the meals.',
    VehicleSurvey: true,
    VehicleSurveyNote: '',
    HostSurveyNote: '',
  },
  Rooms: {
    AccommodationNote: 'The guest rooms are on the first floor; the stairs are steep.',
    HostSurvey_RoomItem: wireList([
      {
        Name: 'Blue Room',
        GenderPreference: 'COUPLE',
        Floor: 'first',
        NumberOfBeds: '1',
        Beds: wireList(['QUEEN']),
        HasEnsuite: true,
        HasToilet: false,
        HasShower: true,
        HasBasin: true,
        RoomNote: 'Window to the garden.',
        IsEdit: false,
      },
      {
        Name: 'Study',
        GenderPreference: 'MALE',
        Floor: 'ground',
        NumberOfBeds: '2',
        Beds: wireList(['SINGLE', 'SINGLE']),
        HasEnsuite: false,
        HasToilet: true,
        HasShower: false,
        HasBasin: false,
        RoomNote: '',
        IsEdit: false,
      },
    ]),
  },
  Meals: {
    MealNote: '',
    MealItemInfo: wireList([
      {
        Id: '730301',
        Name: 'Lunch',
        MilestoneDescription: 'Saturday Lunch',
        EventDate: '2026-11-21',
        SequenceNo: '1',
        IsPreferred: true,
        ComfortableCapacity: '8',
        StretchCapacity: '10',
        IsEdit: false,
        ResetMealData: false,
      },
      {
        Id: '730302',
        Name: 'Supper',
        MilestoneDescription: 'Saturday Supper',
        EventDate: '2026-11-21',
        SequenceNo: '2',
        IsPreferred: false,
        ComfortableCapacity: '',
        StretchCapacity: '',
        IsEdit: false,
        ResetMealData: false,
      },
    ]),
  },
  Helpers: {
    HelperNote: '',
    HelperItemInfo: wireList([
      {
        Id: '91544',
        MemberId: '48377',
        FirstName: 'Rosario',
        LastName: 'Quiroga',
        LocalityName: 'Tandil',
        CountryName: 'Argentina',
        HelperRole: 'VEHICLE_DRIVER',
        HelperStatus: 'approved',
        IsEdit: false,
      },
    ]),
  },
  Vehicles: {
    HasVehicles: true,
    VehicleItemInfo: wireList([
      {
        Id: '30711',
        IsEdit: false,
        OwnerType: 'HOST',
        RegistrationNumber: 'AF 512 TQ',
        TotalSeats: '5',
        VehicleId: '30711',
        VehicleMakeAndModel: 'Renault Kangoo',
        VehicleType: 'CAR',
      },
    ]),
  },
});

/** The stored surveys, one row per event (P-MUTATION). */
const surveys = collection(
  'HostSurvey.surveys',
  () => [
    ...orbitHostSurveys().map((s) => ({ EventId: s.EventId, Survey: surveyWire(s) })),
    { EventId: '7303', Survey: PENDING_SURVEY() },
  ],
  'EventId',
);

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_HostSurvey/DataActionGetHostSurvey', ({ In_EventId }) => {
    const row = surveys.get(In_EventId ?? '');
    const survey = row ? structuredClone(row.Survey as HostSurveyResponseWire) : EMPTY_SURVEY();
    // A meal day travels as an OutSystems Date ("1900-01-01" = null).
    for (const meal of osList(survey.Meals.MealItemInfo)) if (meal.EventDate === '') meal.EventDate = NULL_DATE;
    return { Response: survey, HasError: false };
  }),
  contractHandler(MODULE, 'ActionPostHostSurvey', ({ GetHostSurvey }) => {
    surveys.upsert({ EventId: GetHostSurvey.SurveyInfo.EventId, Survey: GetHostSurvey });
    return { Response: true };
  }),
  /* DataActionGetSurveyHelpers of HostSurvey_AddHelper: the householders of the mock world (src/mocks/fictional/
     directory.ts, MemberId = household id) as helper candidates. SearchTerm matches a first name, surname or locality
     (case-insensitive; "" matches everyone); the members of In_AlreadyAddedHelpers are left out; PageNumber and
     MaxHelpers give the page. IsEventLocality / IsEventCountry compare with the locality of the surveys above. */
  contractHandler(MODULE, 'HostSurvey_AddHelper/DataActionGetSurveyHelpers', (inputs) => {
    const term = (inputs.SearchTerm ?? '').trim().toLowerCase();
    const added = new Set(osList(inputs.In_AlreadyAddedHelpers ?? wireList([])).map(String));
    const maxHelpers = inputs.MaxHelpers ?? 10;
    const page = inputs.PageNumber ?? 1;
    const matches = ALL_HOUSEHOLDS.filter(
      (h) =>
        !added.has(h.id) &&
        [h.householder, h.surname, h.localityName].some((text) => text.toLowerCase().includes(term)),
    ).map((h, i) => ({
      MemberId: h.id,
      FirstName: h.householder,
      LastName: h.surname,
      LocalityName: h.localityName,
      CountryName: h.countryName,
      IsEventLocality: h.localityName === 'Bahia Blanca',
      IsEventCountry: h.countryName === 'Argentina',
      IsSelected: false,
      SortOrder: String(i + 1),
    }));
    return { Response: { HelperMembers: wireList(matches.slice((page - 1) * maxHelpers, page * maxHelpers)) } };
  }),
];
