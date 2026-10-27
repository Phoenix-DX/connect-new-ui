import { callAction } from '@/api/client/callAction';
import {
  toAllLocalities,
  toAllSubdivisions,
  toBulkSubdivisionsInputs,
  toCommunityBusinessShareCard,
  toEventFilterLocalities,
  toInterchanges,
  toLocalityCardList,
  toLocalityCardListInputs,
  toLocalityDetails,
  toLocalityDetailsInputs,
  toLocalityInformation,
  toOneSchoolCards,
  toOneSchoolGlobalDetails,
  toOneSchoolGlobalDetailsInputs,
  toOneSchoolListInputs,
  toSubdivisionCards,
  toSubdivisionDetails,
  toSubdivisionHouseholdCards,
  toSubdivisionInformationResults,
  toSubdivisionListInputs,
  toSubdivisionName,
  toSubdivisionNameInputs,
} from './mapper';
import type {
  AllLocalities,
  AllLocalitiesCallInputs,
  AllSubdivisions,
  AllSubdivisionsCallInputs,
  CommunityBusinessShareCard,
  EventFilterLocality,
  EventLocalitiesCallInputs,
  Interchange,
  LocalityCardList,
  LocalityDetails,
  LocalityDetailsCallInputs,
  LocalityInformation,
  OneSchoolCard,
  OneSchoolGlobalDetails,
  OneSchoolGlobalDetailsCallInputs,
  OneSchoolListCallInputs,
  SubdivisionCard,
  SubdivisionDetails,
  SubdivisionHouseholdCard,
  SubdivisionInformationResult,
  SubdivisionListCallInputs,
  SubdivisionNameCallInputs,
} from './types';

/* The locality calls, with their OutSystems names. Each caller decides when it calls: the data actions are fetched on
   demand (the screen or block refreshes them in its OnReady or on a user action), and the server actions run inside
   client actions. */

/** DataActionGetSubdivisionName of ScreenBlock_AssembleEvents (Connect2_Assemble_MUI): the name of the selected supper
    meeting. The block refreshes it in OnReady when it has a SubdivisionId. */
export async function fetchSubdivisionName(inputs: SubdivisionNameCallInputs): Promise<string> {
  return toSubdivisionName(
    await callAction(
      'Connect2_Assemble_MUI',
      'ScreenBlock_AssembleEvents/DataActionGetSubdivisionName',
      toSubdivisionNameInputs(inputs),
    ),
  );
}

/** DataActionGetLocalityStatistics of BrowseDirectory (UBTConnect): the localities of a country with their cards, and
    the country name. Action_RefreshData of the screen refreshes it. */
export async function fetchLocalityCardList(countryCode: string): Promise<LocalityCardList> {
  return toLocalityCardList(
    await callAction(
      'UBTConnect',
      'BrowseDirectory/DataActionGetLocalityStatistics',
      toLocalityCardListInputs(countryCode),
    ),
  );
}

/** DataActionGetEventLocalitiesForFilter of MyEvents_MyTimelineFilterButton (Connect2_OrbitMobile_MUI): the localities
    of the timeline filter. GetEventLocalitiesData of the block refreshes it once. */
export async function fetchEventFilterLocalities(inputs: EventLocalitiesCallInputs): Promise<EventFilterLocality[]> {
  return toEventFilterLocalities(
    await callAction(
      'Connect2_OrbitMobile_MUI',
      'MyEvents_MyTimelineFilterButton/DataActionGetEventLocalitiesForFilter',
      inputs,
    ),
  );
}

/** DataActionGet_LocalityDetails of Locality_Details (UBTConnect): the counts, the main hall coordinates, the names and
    the time zone of a locality. ScreenEvent_OnReady refreshes it. */
export async function fetchLocalityDetails(inputs: LocalityDetailsCallInputs): Promise<LocalityDetails> {
  return toLocalityDetails(
    await callAction('UBTConnect', 'Locality_Details/DataActionGet_LocalityDetails', toLocalityDetailsInputs(inputs)),
  );
}

/** DataActionGet_Subdivision_List of Locality_Subdivisions (UBTConnect): one page of the supper meeting cards of a
    locality. OnReady and OnScrollEnding_RefreshSubdivisions refresh it. */
export async function fetchSubdivisionCards(inputs: SubdivisionListCallInputs): Promise<SubdivisionCard[]> {
  return toSubdivisionCards(
    await callAction(
      'UBTConnect',
      'Locality_Subdivisions/DataActionGet_Subdivision_List',
      toSubdivisionListInputs(inputs),
    ),
  );
}

/** DataActionGetInterchangesByLocalityId of Locality_Interchange (UBTConnect): the interchange localities of a
    locality (the block input In_InterchangeLocalityId). OnReady refreshes it. */
export async function fetchInterchanges(interchangeLocalityId: string): Promise<Interchange[]> {
  return toInterchanges(
    await callAction('UBTConnect', 'Locality_Interchange/DataActionGetInterchangesByLocalityId', {
      In_InterchangeLocalityId: interchangeLocalityId,
    }),
  );
}

/** DataActionGet_OneSchoolGlobal_List of Locality_OneSchoolGlobal (UBTConnect): one page of the school cards of a
    locality. OnReady and Handler_OnScrollEnding refresh it. */
export async function fetchOneSchoolCards(inputs: OneSchoolListCallInputs): Promise<OneSchoolCard[]> {
  return toOneSchoolCards(
    await callAction(
      'UBTConnect',
      'Locality_OneSchoolGlobal/DataActionGet_OneSchoolGlobal_List',
      toOneSchoolListInputs(inputs),
    ),
  );
}

/** DataActionGetSubdivision of SupperMeeting_DetailsBlock (UBTConnect): the card of a supper meeting (the block
    variable In_SubdivsionId, OutSystems spelling). ScreenEvent_OnReady refreshes it. */
export async function fetchSubdivisionDetails(subdivisionId: string): Promise<SubdivisionDetails> {
  return toSubdivisionDetails(
    await callAction('UBTConnect', 'SupperMeeting_DetailsBlock/DataActionGetSubdivision', {
      In_SubdivsionId: subdivisionId,
    }),
  );
}

/** DataActionGetSubdivisionHouseholds of SupperMeeting_HouseholdList (UBTConnect): the household cards of a supper
    meeting (the block input In_SubdivisionId). OnReady refreshes it. */
export async function fetchSubdivisionHouseholds(subdivisionId: string): Promise<SubdivisionHouseholdCard[]> {
  return toSubdivisionHouseholdCards(
    await callAction('UBTConnect', 'SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds', {
      In_SubdivisionId: subdivisionId,
    }),
  );
}

/** DataActionGetCacheInfo of CacheControl_AllLocalities (UBTConnect_Utils): the list of all localities. The block
    calls it on a miss of the memory cache. */
export async function fetchAllLocalities(inputs: AllLocalitiesCallInputs): Promise<AllLocalities> {
  return toAllLocalities(
    await callAction('UBTConnect_Utils', 'CacheControl_AllLocalities/DataActionGetCacheInfo', inputs),
  );
}

/** DataActionGetCacheInfo of CacheControl_AllSubdivisions (UBTConnect_Utils): the list of all subdivisions. The block
    calls it on a miss of the memory cache. */
export async function fetchAllSubdivisions(inputs: AllSubdivisionsCallInputs): Promise<AllSubdivisions> {
  return toAllSubdivisions(
    await callAction('UBTConnect_Utils', 'CacheControl_AllSubdivisions/DataActionGetCacheInfo', inputs),
  );
}

/** GetLocalityInformation (server action of Connect2_LegacyShared): a locality with its lists. GetCacheableLocality
    calls it on a miss of the memory cache. */
export async function fetchLocalityInformation(localityId: string): Promise<LocalityInformation> {
  return toLocalityInformation(
    await callAction('Connect2_LegacyShared', 'ActionGetLocalityInformation', { LocalityId: localityId }),
  );
}

/** GetBulkSubdivisions_V2 (server action of Connect2_LegacyShared): the supper meetings of the asked cache keys (hall
    ids), one answer per key. The bulk callback of the subdivision cache (GetBulkSubdivision_V2) calls it. */
export async function fetchBulkSubdivisions(cacheKeys: string[]): Promise<SubdivisionInformationResult[]> {
  return toSubdivisionInformationResults(
    await callAction('Connect2_LegacyShared', 'ActionGetBulkSubdivisions_V2', toBulkSubdivisionsInputs(cacheKeys)),
  );
}

/* ---- OneSchoolGlobalDetails: DataActionGetOneSchoolGlobalDetails ---- */

/** DataActionGetOneSchoolGlobalDetails of OneSchoolGlobalDetails (UBTConnect): the detail card of a school and the
    coordinates of its address. The screen refreshes it in ScreenEvent_OnReady and sends its variables with the call. */
export async function fetchOneSchoolGlobalDetails(
  inputs: OneSchoolGlobalDetailsCallInputs,
): Promise<OneSchoolGlobalDetails> {
  return toOneSchoolGlobalDetails(
    await callAction(
      'UBTConnect',
      'OneSchoolGlobalDetails/DataActionGetOneSchoolGlobalDetails',
      toOneSchoolGlobalDetailsInputs(inputs),
    ),
  );
}

/* ---- ScreenBlock_ShareObject (LegacyShareObject): Get_UI_CommunityBusinessShareCard ---- */

/** Get_UI_CommunityBusinessShareCard (the service action of Connect2_LegacyShared): the share card of a Campus&Co or
    OneSchool Global business (`communityBusinessId`, a Long Integer as text). The OnReady of ScreenBlock_ShareObject
    calls it. */
export async function fetchCommunityBusinessShareCard(
  communityBusinessId: string,
): Promise<CommunityBusinessShareCard> {
  return toCommunityBusinessShareCard(
    await callAction('Connect2_LegacyShared', 'ServiceAPIGet_UI_CommunityBusinessShareCard', {
      In_CommunityBusinessId: communityBusinessId,
    }),
  );
}
