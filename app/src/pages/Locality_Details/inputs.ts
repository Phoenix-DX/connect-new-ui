/** The route inputs of Locality_Details, from the query string by their original names. Long Integers stay text.
    @origin UBTConnect.Directory_Locality.Locality_Details */
export interface LocalityDetailsInputs {
  /** LocalityId (Long Integer): "0" when it is absent. OnReady then opens the locality of the signed-in user. */
  LocalityId: string;
  /** PreloadedLocalityLabel (Text): the label that the header shows until Get_LocalityDetails answers. */
  PreloadedLocalityLabel: string;
}

/** LocalityId ("0" when absent) and PreloadedLocalityLabel ("" when absent) from the query string. */
export function readLocalityDetailsInputs(params: URLSearchParams): LocalityDetailsInputs {
  return {
    LocalityId: params.get('LocalityId') ?? '0',
    PreloadedLocalityLabel: params.get('PreloadedLocalityLabel') ?? '',
  };
}
