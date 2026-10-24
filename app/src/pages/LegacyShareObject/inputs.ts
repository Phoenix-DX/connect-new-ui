/** The input parameters of the screen LegacyShareObject (Text). */
export interface LegacyShareObjectInputs {
  /** The Text identifier of the static entity Type_ShareObject (for example "Household"). */
  In_ShareObjectTypeId: string;
  /** The id of the shared object. */
  In_ObjectId: string;
  /** The title of a shared feed item. */
  In_CustomTitle: string;
}

/** Reads the screen inputs from the query string, with their OutSystems names. An absent input is "". */
export function readInputs(params: URLSearchParams): LegacyShareObjectInputs {
  return {
    In_ShareObjectTypeId: params.get('In_ShareObjectTypeId') ?? '',
    In_ObjectId: params.get('In_ObjectId') ?? '',
    In_CustomTitle: params.get('In_CustomTitle') ?? '',
  };
}
