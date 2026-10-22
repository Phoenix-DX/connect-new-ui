import type { RequestHandler } from 'msw';
import { coordinatorDetails, eventCalendarDetail, householdCoordinates, ldmEventById } from '@/mocks/fictional/ldm';
import { contractHandler } from '@/mocks/contract';

/* The route's calls were not recorded (person data): fictional data from the shared LDM world
   (src/mocks/fictional/ldm.ts) in the captured shapes (analysis/calls.md). The event is found by EventId (the inputs
   LDM_MyEvents_V2 navigates with); an unknown event answers Out_HasContent False ("No event information."). The
   first meal mirrors the capture (guest, host allocation pending, Q3). contractHandler checks the answers against the
   API contract. Scenarios: real; loading (never answers: the list-updating loader, empty title); error (HTTP 500: the
   offline capture's ErrorScreen and Service Interruption message). */

const MODULE = 'Connect2_OrbitMobile_MUI';

export const handlers: RequestHandler[] = [
  contractHandler(MODULE, 'ScreenBlock_EventDetail_V2/DataActionGetCoordinatorDetails', ({ EventId }) => {
    const e = ldmEventById(EventId ?? '');
    if (!e) return emptyCoordinator();
    return {
      Out_CoordinatorDetails: { GetCoordinatorDetailsResponse: coordinatorDetails(e) },
      Out_HasContent: true,
      EventName: '',
    };
  }),
  contractHandler(MODULE, 'ScreenBlock_EventDetail_V2/DataActionGetEventByEventId', ({ EventId }) => {
    const e = ldmEventById(EventId ?? '');
    if (!e) return { ...emptyEvent(), Out_HasContent: false };
    return { EventResponse: eventCalendarDetail(e), Out_HasContent: true };
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
