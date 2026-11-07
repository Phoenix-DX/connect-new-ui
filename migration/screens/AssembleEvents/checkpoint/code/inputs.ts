/** The route inputs of AssembleEvents, from the query string by their original names. The meeting list and the
    header of ScreenBlock_AssembleEvents read them.
    @origin UBTConnect.Legacy_AssembleFlow.AssembleEvents */
export interface AssembleEventsInputs {
  /** SubdivisionId (Long Integer, kept as text): the supper meeting of the list; "0" is the user's own. */
  subdivisionId: string;
  /** ShowBackNavigation (default False): the back arrow instead of the menu icon. */
  showBackNavigation: boolean;
  /** IsUserSubdivision (default True): the list is the user's own supper meeting. */
  isUserSubdivision: boolean;
}

/** A Boolean input: "True" or "true" is true, another value is false, an absent one is the default. */
const boolInput = (value: string | null, fallback: boolean) =>
  value === null ? fallback : value.toLowerCase() === 'true';

/** The inputs from the query string; the OutSystems defaults when they are absent. */
export function readAssembleEventsInputs(params: URLSearchParams): AssembleEventsInputs {
  return {
    subdivisionId: params.get('SubdivisionId') ?? '0',
    showBackNavigation: boolInput(params.get('ShowBackNavigation'), false),
    isUserSubdivision: boolInput(params.get('IsUserSubdivision'), true),
  };
}
