import type { CoordinatorDetailsData, EventEmailInputs } from './types';

/** OutSystems Boolean input from the query string ("True"/"False", any case). */
const osBoolean = (value: string | null): boolean => value?.toLowerCase() === 'true';
/** Long Integer input: default 0, kept as a string. */
const osLongInput = (value: string | null): string => (value === null || value === '' ? '0' : value);
/** Date input: "" for an absent value or the OutSystems null date 1900-01-01, else its "YYYY-MM-DD" part. */
const osDateInput = (value: string | null): string =>
  value === null || value === '' || value.startsWith('1900-01-01') ? '' : value.slice(0, 10);

/** The screen inputs EventHostId, In_EventId, In_IsMessageGuest, In_IsContactOrganiser, EventDate, EventLocality from
    the query string with the original names (P-PARAMS; S model :82-108), as the block's inputs (S view :152-159). */
export function readInputs(params: URLSearchParams): EventEmailInputs {
  return {
    In_EventHostId: osLongInput(params.get('EventHostId')),
    In_EventId: osLongInput(params.get('In_EventId')),
    In_IsMessageGuest: osBoolean(params.get('In_IsMessageGuest')),
    In_IsContactOrganiser: osBoolean(params.get('In_IsContactOrganiser')),
    EventDate: osDateInput(params.get('EventDate')),
    EventLocality: params.get('EventLocality') ?? '',
  };
}

/* The two calls of ScreenBlock_Event_Email_V2 (Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_Event_Email_V2)
   are in the domain api/message; this module keeps the names that the screen uses:
   - DataActionGetCoordinatorDetails, only on demand (B :925-953). The server gets the block's screen variables; the
     block inputs are sent (Decisions to confirm).
   - the server action EventContact(UserContactRequest) (B :913-924), on Submit. A write: mocked (P-MUTATION), never
     the real server. */
export {
  fetchEventEmailCoordinator as getCoordinatorDetails,
  sendEventContactEmail as eventContact,
} from '@/api/message';

/** GetCoordinatorDetails outputs with the record defaults (B model :9-18; GetCoordinatorDetailsResponse defaults), for
    OnReady's "Has null eventId?" branch. */
export function emptyCoordinatorDetailsData(): CoordinatorDetailsData {
  return {
    coordinatorDetails: {
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
    hasContent: true,
    eventName: '',
    eventDateText: '1900-01-01',
  };
}
