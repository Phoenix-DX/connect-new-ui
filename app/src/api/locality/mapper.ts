import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import { osList, osNumber, wireList } from '@/legacy/os/os-wire';
import type {
  AllLocalities,
  EventFilterLocality,
  Interchange,
  LocalityCardList,
  LocalityDetails,
  LocalityDetailsCallInputs,
  LocalityInformation,
  OneSchoolCard,
  OneSchoolListCallInputs,
  StatisticsCard,
  SubdivisionCard,
  SubdivisionCardContent,
  SubdivisionDetails,
  SubdivisionInformationResult,
  SubdivisionListCallInputs,
  SubdivisionNameCallInputs,
} from './types';

/* The wire types of the locality calls, as the contract describes them. */

/** The outputs of DataActionGetSubdivisionName (ScreenBlock_AssembleEvents). */
export type SubdivisionNameWire = ActionOutputs<
  PathOf<'Connect2_Assemble_MUI', 'ScreenBlock_AssembleEvents/DataActionGetSubdivisionName'>
>;
/** The outputs of DataActionGetLocalityStatistics of BrowseDirectory. */
export type LocalityCardListWire = ActionOutputs<
  PathOf<'UBTConnect', 'BrowseDirectory/DataActionGetLocalityStatistics'>
>;
/** The outputs of DataActionGetEventLocalitiesForFilter (MyEvents_MyTimelineFilterButton). */
export type EventLocalitiesWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'MyEvents_MyTimelineFilterButton/DataActionGetEventLocalitiesForFilter'>
>;
/** The inputs and the outputs of DataActionGet_LocalityDetails (Locality_Details). */
export type LocalityDetailsInputsWire = ActionInputs<
  PathOf<'UBTConnect', 'Locality_Details/DataActionGet_LocalityDetails'>
>;
export type LocalityDetailsWire = ActionOutputs<PathOf<'UBTConnect', 'Locality_Details/DataActionGet_LocalityDetails'>>;
/** The inputs and the outputs of DataActionGet_Subdivision_List (Locality_Subdivisions). */
export type SubdivisionListInputsWire = ActionInputs<
  PathOf<'UBTConnect', 'Locality_Subdivisions/DataActionGet_Subdivision_List'>
>;
export type SubdivisionListWire = ActionOutputs<
  PathOf<'UBTConnect', 'Locality_Subdivisions/DataActionGet_Subdivision_List'>
>;
/** The outputs of DataActionGetInterchangesByLocalityId (Locality_Interchange). */
export type InterchangesWire = ActionOutputs<
  PathOf<'UBTConnect', 'Locality_Interchange/DataActionGetInterchangesByLocalityId'>
>;
/** The inputs and the outputs of DataActionGet_OneSchoolGlobal_List (Locality_OneSchoolGlobal). */
export type OneSchoolListInputsWire = ActionInputs<
  PathOf<'UBTConnect', 'Locality_OneSchoolGlobal/DataActionGet_OneSchoolGlobal_List'>
>;
export type OneSchoolListWire = ActionOutputs<
  PathOf<'UBTConnect', 'Locality_OneSchoolGlobal/DataActionGet_OneSchoolGlobal_List'>
>;
/** The outputs of DataActionGetSubdivision (SupperMeeting_DetailsBlock). */
export type SubdivisionDetailsWire = ActionOutputs<
  PathOf<'UBTConnect', 'SupperMeeting_DetailsBlock/DataActionGetSubdivision'>
>;
/** The outputs of DataActionGetCacheInfo of CacheControl_AllLocalities. */
export type AllLocalitiesWire = ActionOutputs<
  PathOf<'UBTConnect_Utils', 'CacheControl_AllLocalities/DataActionGetCacheInfo'>
>;
/** The outputs of the server action GetLocalityInformation (Connect2_LegacyShared). */
export type LocalityInformationWire = ActionOutputs<PathOf<'Connect2_LegacyShared', 'ActionGetLocalityInformation'>>;
/** The inputs and the outputs of the server action GetBulkSubdivisions_V2 (Connect2_LegacyShared). */
export type BulkSubdivisionsInputsWire = ActionInputs<PathOf<'Connect2_LegacyShared', 'ActionGetBulkSubdivisions_V2'>>;
export type BulkSubdivisionsWire = ActionOutputs<PathOf<'Connect2_LegacyShared', 'ActionGetBulkSubdivisions_V2'>>;

type StatisticsCardWire = LocalityCardListWire['Out_LocalitiesStatistics']['List'][number]['Statistics'];
type SubdivisionCardContentWire =
  SubdivisionListWire['Out_Subdivision_Card_List']['List'][number]['Subdivision_Card_Content'];

/** A statistics card with its counts unwrapped. */
const toStatisticsCard = (w: StatisticsCardWire): StatisticsCard => ({
  Title: w.Title,
  Subtitle: w.Subtitle,
  AvatarURL: w.AvatarURL,
  Statistics: osList(w.Statistics).map((s) => ({
    Name: s.Name,
    Value: s.Value,
    IconColorId: s.IconColorId,
    IconId: s.IconId,
  })),
});

/** The content of a supper meeting card: the name, the address and the counts. */
const toSubdivisionCardContent = (w: SubdivisionCardContentWire): SubdivisionCardContent => ({
  Name: w.Name,
  BretherenCount: w.BretherenCount,
  HouseholdCount: w.HouseholdCount,
  BrothersCount: w.BrothersCount,
  SistersCount: w.SistersCount,
  Address: w.Address,
});

/* ---- AssembleEvents ---- */

/** The inputs of DataActionGetSubdivisionName: the block variables, and SubdivisionName empty. */
export const toSubdivisionNameInputs = (inputs: SubdivisionNameCallInputs) => ({ ...inputs, SubdivisionName: '' });

/** The name of DataActionGetSubdivisionName (its output SelectedSubdivisionName). */
export const toSubdivisionName = (wire: SubdivisionNameWire): string => wire.SelectedSubdivisionName;

/* ---- BrowseDirectory ---- */

/** The inputs of DataActionGetLocalityStatistics of BrowseDirectory: the screen variables. The screen fetches only
    when its data is not fetched yet. MarkersList and Center are filled only after a successful fetch, and the map that
    sets Local_MapId shows only with a Center, so the three are always at their initial values: they are sent empty. */
export const toLocalityCardListInputs = (countryCode: string) => ({
  MarkersList: wireList<never>([]),
  Center: wireList<never>([]),
  Local_MapId: '',
  CountryCode: countryCode,
});

/** The localities of DataActionGetLocalityStatistics of BrowseDirectory (the list unwrapped, the coordinates as
    numbers) and CountryName. */
export const toLocalityCardList = (wire: LocalityCardListWire): LocalityCardList => ({
  localities: osList(wire.Out_LocalitiesStatistics).map((w) => ({
    localityId: w.LocalityId,
    name: w.Name,
    latitude: osNumber(w.Latitude),
    longitude: osNumber(w.Longitude),
    statistics: toStatisticsCard(w.Statistics),
  })),
  countryName: wire.CountryName,
});

/* ---- LDM_MyEvents_V2 ---- */

/** The localities of DataActionGetEventLocalitiesForFilter: EventLocalities, unwrapped. */
export const toEventFilterLocalities = (wire: EventLocalitiesWire): EventFilterLocality[] =>
  osList(wire.EventLocalities).map((w) => ({ IdAsText: w.IdAsText, IsSelected: w.IsSelected, Name: w.Name }));

/* ---- Locality_Details ---- */

/** The inputs of DataActionGet_LocalityDetails: the screen variables, with TagsList as an OutSystems list whose
    absent tag attributes take their defaults. */
export const toLocalityDetailsInputs = (inputs: LocalityDetailsCallInputs): LocalityDetailsInputsWire => ({
  ...inputs,
  TagsList: wireList(
    inputs.TagsList.map((t) => ({
      Text: t.Text ?? '',
      Identifier: t.Identifier ?? '',
      IconId: t.IconId ?? '',
      IsSelected: t.IsSelected ?? false,
      Enabled: t.Enabled ?? true,
    })),
  ),
});

/** The locality of DataActionGet_LocalityDetails (its output LocalityDetails, flattened). */
export const toLocalityDetails = (wire: LocalityDetailsWire): LocalityDetails => {
  const d = wire.LocalityDetails;
  return {
    bretherenCount: d.BretherenCount,
    householdCount: d.HouseholdCount,
    maiinHallLatitude: d.MaiinHallLatitude,
    mainHallLongitude: d.MainHallLongitude,
    localityName: d.UI_LocalityDetails.Name,
    countryName: d.UI_LocalityDetails.CountryName,
    countryCode: d.UI_LocalityDetails.CountryCode,
    timezoneName: d.UI_LocalityTimezone.TimezoneName,
    timezoneOffset: d.UI_LocalityTimezone.TimezoneOffset,
  };
};

/** A supper meeting card as OutSystems sends it back in Subdivision_Card_List (absent counts and texts at their
    defaults). */
const toSubdivisionCardWire = (c: SubdivisionCard) => ({
  SubdivisionId: c.subdivisionId,
  Subdivision_Card_Content: {
    Name: c.content.Name ?? '',
    BretherenCount: c.content.BretherenCount ?? 0,
    HouseholdCount: c.content.HouseholdCount ?? 0,
    BrothersCount: c.content.BrothersCount ?? 0,
    SistersCount: c.content.SistersCount ?? 0,
    Address: c.content.Address ?? '',
  },
});

/** The inputs of DataActionGet_Subdivision_List: the block variables, with their OutSystems names. */
export const toSubdivisionListInputs = (inputs: SubdivisionListCallInputs): SubdivisionListInputsWire => ({
  GetSubdivisions_StartIndex: inputs.getSubdivisions_StartIndex,
  GetSubdivisions_Offset: inputs.getSubdivisions_Offset,
  Subdivision_Card_List: wireList(inputs.subdivision_Card_List.map(toSubdivisionCardWire)),
  Subdivision_Card_List_IsLoading: inputs.subdivision_Card_List_IsLoading,
  IsPaginated: inputs.isPaginated,
  LocalityId: inputs.localityId,
});

/** The cards of DataActionGet_Subdivision_List: Out_Subdivision_Card_List, unwrapped. */
export const toSubdivisionCards = (wire: SubdivisionListWire): SubdivisionCard[] =>
  osList(wire.Out_Subdivision_Card_List).map((w) => ({
    subdivisionId: w.SubdivisionId,
    content: toSubdivisionCardContent(w.Subdivision_Card_Content),
  }));

/** The interchanges of DataActionGetInterchangesByLocalityId: Out_InterchangeList, unwrapped. */
export const toInterchanges = (wire: InterchangesWire): Interchange[] =>
  osList(wire.Out_InterchangeList).map((w) => ({
    interchangeLocalityId: w.InterchangeLocalityId,
    interchangeLocalityName: w.InterchangeLocalityName,
    interchangeCountryName: w.InterchangeCountryName,
    interchangeDistance: w.InterchangeDistance,
    isBookmarked: w.IsBookmarked,
    interchangeStatistics: toStatisticsCard(w.InterchangeStatistics),
  }));

/** A school card as OutSystems sends it back in Out_OneSchoolGlobal_List2. */
const toOneSchoolCardWire = (c: OneSchoolCard) => ({
  CommunityBusinessId: c.communityBusinessId,
  SignedURL: c.signedURL,
  OneSchool_Card_Content: {
    Name: c.name,
    LocalityName: c.localityName,
    LocalityId: c.localityId,
    CountryName: c.countryName,
    CountryCode: c.countryCode,
    Phone: c.phone,
    Email: c.email,
  },
});

/** The inputs of DataActionGet_OneSchoolGlobal_List: the block variables, with their OutSystems names. */
export const toOneSchoolListInputs = (inputs: OneSchoolListCallInputs): OneSchoolListInputsWire => ({
  GetOneSchoolGlobal_List_StartIndex: inputs.getOneSchoolGlobal_List_StartIndex,
  GetOneSchoolGlobal_List_Offset: inputs.getOneSchoolGlobal_List_Offset,
  Get_OneSchoolGlobal_List_IsLoading: inputs.get_OneSchoolGlobal_List_IsLoading,
  Out_OneSchoolGlobal_List2: wireList(inputs.out_OneSchoolGlobal_List2.map(toOneSchoolCardWire)),
  In_LocalityId: inputs.in_LocalityId,
  In_LocalityTimezoneData: inputs.in_LocalityTimezoneData,
});

/** The school cards of DataActionGet_OneSchoolGlobal_List: Out_OneSchoolGlobal_List, unwrapped and flattened. */
export const toOneSchoolCards = (wire: OneSchoolListWire): OneSchoolCard[] =>
  osList(wire.Out_OneSchoolGlobal_List).map((w) => ({
    communityBusinessId: w.CommunityBusinessId,
    signedURL: w.SignedURL,
    name: w.OneSchool_Card_Content.Name,
    localityName: w.OneSchool_Card_Content.LocalityName,
    localityId: w.OneSchool_Card_Content.LocalityId,
    countryName: w.OneSchool_Card_Content.CountryName,
    countryCode: w.OneSchool_Card_Content.CountryCode,
    phone: w.OneSchool_Card_Content.Phone,
    email: w.OneSchool_Card_Content.Email,
  }));

/* ---- SupperMeeting_DetailsBlock ---- */

/** The supper meeting of DataActionGetSubdivision (its output Subdivision): the card, without Subdivision_Actions. */
export const toSubdivisionDetails = (wire: SubdivisionDetailsWire): SubdivisionDetails => ({
  Subdivision_Card: {
    SubdivisionId: wire.Subdivision.Subdivision_Card.SubdivisionId,
    Subdivision_Card_Content: toSubdivisionCardContent(wire.Subdivision.Subdivision_Card.Subdivision_Card_Content),
  },
});

/* ---- CacheControl_AllLocalities ---- */

/** The list of all localities (CacheControl_Response), with the fields that FilterSheet reads. */
export const toAllLocalities = (wire: AllLocalitiesWire): AllLocalities => ({
  LocalityList: {
    List: osList(wire.CacheControl_Response.LocalityList).map((l) => ({
      LocalityId: l.LocalityId,
      Name: l.Name,
      CountryCode: l.CountryCode,
    })),
  },
});

/* ---- Connect2_LegacyShared ---- */

/** The locality of GetLocalityInformation (its output CacheableLocalityInformation), as it is. SignedPhotosPreload is
    not read: its PutCachedSignedPhotoURL loop is not ported. */
export const toLocalityInformation = (wire: LocalityInformationWire): LocalityInformation =>
  wire.CacheableLocalityInformation;

/** The inputs of GetBulkSubdivisions_V2: the cache keys (hall ids) as an OutSystems list. */
export const toBulkSubdivisionsInputs = (cacheKeys: string[]): BulkSubdivisionsInputsWire => ({
  CacheKeys: wireList(cacheKeys),
});

/** The answers of GetBulkSubdivisions_V2 (Results, unwrapped): the key, the error text and the record with the fields
    that the attendee rows read. */
export const toSubdivisionInformationResults = (wire: BulkSubdivisionsWire): SubdivisionInformationResult[] =>
  osList(wire.Results).map((r) => ({
    CacheKey: r.CacheKey,
    Error: r.Error,
    Value: {
      HouseholdListResponse: {
        List: osList(r.Value.HouseholdListResponse).map((h) => ({
          Id: h.Id,
          Name: h.Name,
          Family: h.Family,
          Location: h.Location,
          IsBookmarked: h.IsBookmarked,
          Photo340: {
            Bucket: h.Photo340.Bucket,
            Path: h.Photo340.Path,
            Type: h.Photo340.Type,
            SignedURL: h.Photo340.SignedURL,
          },
        })),
      },
      Subdivision: {
        Locality: {
          Id: r.Value.Subdivision.Locality.Id,
          Country: { Code: r.Value.Subdivision.Locality.Country.Code },
        },
      },
    },
  }));
