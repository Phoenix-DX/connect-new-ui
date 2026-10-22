import { callAction } from '@/api/client/callAction';
import type { CoordinatorDetailsData, EventEmailInputs, UserContactRequest } from './types';

/** Module of the block's calls (screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_Event_Email_V2/…). */
const MODULE = 'Connect2_OrbitMobile_MUI';

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

/** DataActionGetCoordinatorDetails (data action of ScreenBlock_Event_Email_V2, only on demand: B :925-953). The server
    gets the block's screen variables; the block inputs are sent (Decisions to confirm). */
export async function getCoordinatorDetails(inputs: EventEmailInputs): Promise<CoordinatorDetailsData> {
  const out = await callAction(MODULE, 'ScreenBlock_Event_Email_V2/DataActionGetCoordinatorDetails', {
    In_EventId: inputs.In_EventId,
    In_EventHostId: inputs.In_EventHostId,
    In_IsMessageGuest: inputs.In_IsMessageGuest,
    In_IsContactOrganiser: inputs.In_IsContactOrganiser,
    EventDate: inputs.EventDate === '' ? '1900-01-01' : inputs.EventDate,
    EventLocality: inputs.EventLocality,
  });
  return {
    coordinatorDetails: out.Out_CoordinatorDetails.GetCoordinatorDetailsResponse,
    hasContent: out.Out_HasContent,
    eventName: out.EventName,
    eventDateText: dateTimeToDateText(out.Out_CoordinatorDetails.GetCoordinatorDetailsResponse.EventDate),
  };
}

/** DateToText(DateTimeToDate(dateTime)): the "YYYY-MM-DD" part of an OutSystems Date Time text; the null date
    "1900-01-01" when there is none (the text OutSystems shows for it). */
const dateTimeToDateText = (dateTime: string): string => /^\d{4}-\d{2}-\d{2}/.exec(dateTime)?.[0] ?? '1900-01-01';

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

/** Server action EventContact(UserContactRequest) (B :913-924), on Submit. A write: mocked (P-MUTATION), never the
    real server. */
export async function eventContact(request: UserContactRequest): Promise<void> {
  await callAction(MODULE, 'ActionEventContact', { UserContactRequest: request });
}
