/** The route inputs of QRCodeGenerate, from the query string by their original names. The screen gives all six to
    ScreenBlock_GenerateQRCode, whose data action Get_EventQRCode sends them. The contact helpdesk navigation sends
    In_EventId and In_EventName to ContactByEmailOrbitHelpdesk.
    @origin UBTConnect.Legacy_OrbitQRCodeFlow.QRCodeGenerate */
export interface QRCodeGenerateInputs {
  /** In_MemberId (Long Integer, as text): the member of the pass. */
  In_MemberId: string;
  /** In_EventId (Long Integer, as text): the event of the pass. */
  In_EventId: string;
  /** In_EventName: the header title. */
  In_EventName: string;
  /** In_EventStartDate (Date Time, as text; "" is the null date). */
  In_EventStartDate: string;
  /** In_EventEndDate (Date Time, as text; "" is the null date). */
  In_EventEndDate: string;
  /** In_EventLocation. */
  In_EventLocation: string;
}

/** The inputs from the query string. An absent id is "0" and an absent text or date is "". A value that is present
    stays as it is, also when it is empty. */
export function readQRCodeGenerateInputs(params: URLSearchParams): QRCodeGenerateInputs {
  return {
    In_MemberId: params.get('In_MemberId') ?? '0',
    In_EventId: params.get('In_EventId') ?? '0',
    In_EventName: params.get('In_EventName') ?? '',
    In_EventStartDate: params.get('In_EventStartDate') ?? '',
    In_EventEndDate: params.get('In_EventEndDate') ?? '',
    In_EventLocation: params.get('In_EventLocation') ?? '',
  };
}
