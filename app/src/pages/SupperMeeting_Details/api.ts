import type { SupperMeetingDetailsInputs } from './types';

/** SupperMeeting_Details calls no action of its own (controller `dataFetchActionNames = []`, no server action,
    SupperMeeting_Details.mvc.js:259-261); the shared SupperMeeting_DetailsBlock and CommonUI_InsideLayout make their
    own calls. */

/** LongIntegerToText(TextToLongInteger(Text)): absent or invalid is 0 (OutSystems Long Integer default). */
const osLongInput = (v: string | null): string => {
  const trimmed = (v ?? '').trim();
  return /^[-+]?\d+$/.test(trimmed) ? BigInt(trimmed).toString() : '0';
};

/** In_SubdivsionId (Long Integer) from the query string, default 0 (SupperMeeting_Details.mvc.js:61-65). */
export function readSupperMeetingDetailsInputs(params: URLSearchParams): SupperMeetingDetailsInputs {
  return { In_SubdivsionId: osLongInput(params.get('In_SubdivsionId')) };
}
