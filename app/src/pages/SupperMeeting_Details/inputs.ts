/** The route input of SupperMeeting_Details, from the query string. The screen has no data or server action of its own
    (controller `dataFetchActionNames = []`): the supper meeting details container and CommonUI_InsideLayout make their
    own calls.
    @origin UBTConnect.Directory_SupperMeetings.SupperMeeting_Details */
export interface SupperMeetingDetailsInputs {
  /** In_SubdivsionId (Long Integer, kept as a string; the OutSystems name keeps its typo): passed to
      SupperMeeting_DetailsBlock. */
  In_SubdivsionId: string;
}

/** LongIntegerToText(TextToLongInteger(Text)): absent or invalid is 0 (OutSystems Long Integer default). */
const osLongInput = (v: string | null): string => {
  const trimmed = (v ?? '').trim();
  return /^[-+]?\d+$/.test(trimmed) ? BigInt(trimmed).toString() : '0';
};

/** In_SubdivsionId (Long Integer) from the query string; the OutSystems default 0 when it is absent. */
export function readSupperMeetingDetailsInputs(params: URLSearchParams): SupperMeetingDetailsInputs {
  return { In_SubdivsionId: osLongInput(params.get('In_SubdivsionId')) };
}
