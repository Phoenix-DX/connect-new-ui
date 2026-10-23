/** The route input of OneSchoolGlobalDetails, from the query string by its original name. The screen sends it with
    DataActionGetOneSchoolGlobalDetails (`useOneSchoolGlobalDetailsQuery` of the domain api/locality) and gives it to
    Directory_EntityDetailsActions as the entity id.
    @origin UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails */
export interface OneSchoolGlobalDetailsInputs {
  /** In_OneSchoolGlobalId (Long Integer, as text): the school. */
  In_OneSchoolGlobalId: string;
}

/** In_OneSchoolGlobalId from the query string; the OutSystems default 0 when it is absent or empty. */
export function readOneSchoolGlobalDetailsInputs(params: URLSearchParams): OneSchoolGlobalDetailsInputs {
  const id = params.get('In_OneSchoolGlobalId');
  return { In_OneSchoolGlobalId: id === null || id === '' ? '0' : id };
}
