/** The route inputs of PassportScan, from the query string by their original names (PassportScan.mvc.js:10-22,
    setInputs :68-75). OrbitLanding sends them (OnHandle_NavigateToPassportScan, OrbitLanding.mvc.js:420-424).
    @origin UBTConnect.Legacy_OrbitEventsFlow.PassportScan */
interface PassportScanInputs {
  /** TargetId (LongInteger, mandatory): the household member whose passport the portal shows. */
  TargetId: string;
  /** LoginMemberId (LongInteger, mandatory): the signed-in member. */
  LoginMemberId: string;
}

/** A LongInteger input as text: "0" when it is absent or not a whole number (ServerDataConverter.from). */
const longInteger = (value: string | null): string => (value !== null && /^-?\d+$/.test(value) ? value : '0');

export function readPassportScanInputs(params: URLSearchParams): PassportScanInputs {
  return {
    TargetId: longInteger(params.get('TargetId')),
    LoginMemberId: longInteger(params.get('LoginMemberId')),
  };
}
