/** The route input of BrowseDirectory, from the query string by its original name. The screen sends it with
    DataActionGetLocalityStatistics (`fetchLocalityCardList` of the domain api/locality) and with HasAccessToRegion.
    @origin UBTConnect.Directory_Locality.BrowseDirectory */
export interface BrowseDirectoryInputs {
  /** CountryCode (Text): the country of the localities. */
  CountryCode: string;
}

/** CountryCode (Text) from the query string, "" when it is absent. */
export function readBrowseDirectoryInputs(params: URLSearchParams): BrowseDirectoryInputs {
  return { CountryCode: params.get('CountryCode') ?? '' };
}
