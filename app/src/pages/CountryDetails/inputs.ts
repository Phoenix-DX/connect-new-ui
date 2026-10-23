/** The route input of CountryDetails, from the query string by its original name. The server call of the screen
    (DataActionGetLocalityStatistics) is in the domain api/country. The FilterSheet, the cache controls and the layout
    make their own calls.
    @origin UBTConnect.Directory_Locality.CountryDetails */
export interface CountryDetailsInputs {
  /** CountryCode (Text): the country to show. It is the first value of the CountryCode and OriginalCountryCode
      variables. */
  CountryCode: string;
}

/** CountryCode (Text) from the query string, "" when it is absent. */
export function readCountryDetailsInputs(params: URLSearchParams): CountryDetailsInputs {
  return { CountryCode: params.get('CountryCode') ?? '' };
}
