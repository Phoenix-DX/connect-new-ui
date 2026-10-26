import type { RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList, wireList } from '@/lib/os-wire';
import { contractHandler } from '@/mocks/contract';
import { orbitEvents, orbitHostSurveys, type OrbitHostSurvey } from '@/mocks/fictional/orbit';
import { collection } from '@/mocks/store';

/* DataActionGetHostSurvey and PostHostSurvey: fictional answers from the shared Orbit world
   (src/mocks/fictional/orbit.ts, orbitHostSurveys) in the captured shape (calls.md § DataActionGetHostSurvey).
   The surveys live in a store collection keyed by EventId (P-MUTATION): PostHostSurvey (a write of the original; never
   sent to a real server) replaces the stored survey of its event with the GetHostSurvey it sends, so the next
   GetHostSurvey answers what was saved.
   Scenarios:
   - real: the survey of event In_EventId (event 7301: the Vitale household's confirmed survey, as captured: seven
     rooms, two meals, no helper or vehicle section); an event without a survey answers the empty response (the
     survey status "" is then no LocalSurveyStatus).
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

/** The stored surveys, one row per event (P-MUTATION). */
const surveys = collection(
  'HostSurvey.surveys',
  () => orbitHostSurveys().map((s) => ({ EventId: s.EventId, Survey: surveyWire(s) })),
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
];
