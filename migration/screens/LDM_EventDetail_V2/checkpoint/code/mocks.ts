import type { RequestHandler } from 'msw';
import { coordinatorDetails, eventCalendarDetail, householdCoordinates, ldmEventById } from '@/mocks/fictional/ldm';
import { contractHandler } from '@/mocks/contract';

/* The route's calls were not recorded (person data): fictional data from the shared LDM world
   (src/mocks/fictional/ldm.ts) in the captured shapes (analysis/calls.md). The event is found by EventId (the inputs
   LDM_MyEvents_V2 navigates with); an unknown event answers Out_HasContent False ("No event information."). The
   first meal (70415) is a guest meal with the host allocation pending (Q3); the captured EventId 88271 answers the
   published guest meal 70296 (TST 2026-11-06: host photo, address, four guest households). contractHandler checks the answers against the
   API contract. Scenarios: real; loading (never answers: the list-updating loader, empty title); error (HTTP 500: the
   offline capture's ErrorScreen and Service Interruption message). */

const MODULE = 'Connect2_OrbitMobile_MUI';

/** The EventId that TST sent in the capture of 2026-11-06 (capture-plan.json). Its event now has a published host
    (photo, address) and four guest households, so it resolves to the fourth fictional meal (a published guest meal
    with four households) instead of the shared alias of src/mocks/fictional/ldm.ts (the pending meal). */
const CAPTURED_EVENT_ID = '88271';
const CAPTURED_MEAL_ID = '70296';
/** Fictional values of the lengths and line breaks of the capture: the host name, the three-line address, and four
    guest households (name, locality) without "Not Attending" / "Including" lines. */
const CAPTURED_GUESTS = [
  { name: 'Aguirre Elena & Ricardo', locality: 'Valleverdino Este' },
  { name: 'Rojas Maria-Belen & Matias', locality: 'San Rafael Este' },
  { name: 'Vidal Fernandez', locality: 'Chivilcoy Alta' },
  { name: 'Villarreal Paula & Martin', locality: 'San Carlos Alta' },
];
type EventDetailWire = ReturnType<typeof eventCalendarDetail>;
function asCaptured(detail: EventDetailWire): EventDetailWire {
  return {
    ...detail,
    Host: {
      ...detail.Host,
      HouseholderName: 'Quiroga Lola & Matias',
      FormattedAddress: '715 Alvarado Norte\nParanaense ER\nSalta',
    },
    Guests: {
      List: detail.Guests.List.slice(0, CAPTURED_GUESTS.length).map((g, i) => ({
        ...g,
        HouseholderName: CAPTURED_GUESTS[i]?.name ?? g.HouseholderName,
        LocalityName: CAPTURED_GUESTS[i]?.locality ?? g.LocalityName,
        NonAttending: '',
        Including: '',
      })),
    },
  };
}
const meal = (eventId: string | undefined) =>
  ldmEventById(eventId === CAPTURED_EVENT_ID ? CAPTURED_MEAL_ID : (eventId ?? ''));

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_EventDetail_V2/DataActionGetCoordinatorDetails', ({ EventId }) => {
    const e = meal(EventId);
    if (!e) return emptyCoordinator();
    return {
      Out_CoordinatorDetails: { GetCoordinatorDetailsResponse: coordinatorDetails(e) },
      Out_HasContent: true,
      EventName: '',
    };
  }),
  contractHandler(MODULE, 'ScreenBlock_EventDetail_V2/DataActionGetEventByEventId', ({ EventId }) => {
    const e = meal(EventId);
    if (!e) return { ...emptyEvent(), Out_HasContent: false };
    const detail = eventCalendarDetail(e);
    return { EventResponse: EventId === CAPTURED_EVENT_ID ? asCaptured(detail) : detail, Out_HasContent: true };
  }),
  contractHandler(MODULE, 'ActionGetHouseholdCoordinates', ({ HouseholdId }) => ({
    Response: householdCoordinates(HouseholdId),
  })),
];

function emptyCoordinator() {
  return {
    Out_CoordinatorDetails: {
      GetCoordinatorDetailsResponse: {
        CoordinatorName: '',
        CoordinatorEmail: '',
        CoordinatorPhoneNumber: '',
        Latitude: '',
        Longitude: '',
        Address: '',
        LocalityName: '',
        LocalityId: '0',
        CountryCode: '',
        CountryName: '',
        EventDate: '1900-01-01T00:00:00',
        LDMEventName: '',
        Timezone: { TimezoneLabel: '', OffsetSeconds: '0' },
      },
    },
    Out_HasContent: false,
    EventName: '',
  };
}

/** An empty GetEventCalendarDetailResponse_V2 (the defaults of the record: '' / '0' / False). */
function emptyEvent() {
  return {
    EventResponse: {
      Host: {
        IsPublished: false,
        Hosting: false,
        MemberId: '0',
        HouseholderID: '0',
        HouseholderName: '',
        FirstName: '',
        LastName: '',
        LocalityId: '0',
        Phone: '',
        Email: '',
        FormattedAddress: '',
        CountryName: '',
        Longitude: '',
        Latitude: '',
        CDNbucket: '',
        CDNPath: '',
        SignedURL: '',
        EventID: '0',
        EventDate: '',
        EventLocalityID: '0',
        EventLocalityName: '',
        HallPhotosCdnBucket: '',
        HallphotosCdnPath: '',
        SignedHallPhoto: '',
        MainHallName: '',
        MainHallFormattedAddress: '',
        MainHallUseLatLong: false,
        MainHallLongititude: '0',
        MainHallLatitude: '0',
        OrganiserName: '',
        OrganiserEmail: '',
        Adults: '0',
        Children: '0',
        RecordDisabled: false,
        HouseholdDisplay: false,
        EventName: '',
        Timezone: { TimezoneLabel: '', OffsetSeconds: '0' },
        HomePhone: '',
        HouseholderSignedImagePath: '',
        WorkPhone: '',
        MobilePhone: '',
      },
      Guests: { List: [] },
      SpecialNeeds: { Diet: { List: [] }, Mobility: { List: [] }, Other: { List: [] } },
    },
  };
}
