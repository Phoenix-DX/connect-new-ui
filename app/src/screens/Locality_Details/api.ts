import { callAction } from '@/api/client/callAction';
import { osList, wireList } from '@/legacy/os/os-wire';
import type { Tag } from '../../shared/UBTConnectLibrary/lib/structures';
import type {
  HouseholdMembers,
  InterchangeItem,
  LocalityDetails,
  LocalityHousehold,
  OneSchoolCard,
  SubdivisionCard,
} from './types';

/** Screen variables OutSystems sends with DataActionGet_LocalityDetails (the recorded call's inputs,
    app/src/mocks/fixtures/UBTConnect/DataActionGet_LocalityDetails/01-a5fd3a96.json). */
export interface LocalityDetailsCallInputs {
  TagsList: Tag[];
  HeaderIsScrolled: boolean;
  TagsList_SelectedTag: string;
  IsUserLocality: boolean;
  LocalityLabel: string;
  IsScreenInitialized: boolean;
  LocalityId: string;
  PreloadedLocalityLabel: string;
}

/** DataActionGet_LocalityDetails (Locality_Details.mvc.js controller get_LocalityDetails$DataActRefresh :1090-1110):
    fetch on demand, refreshed by ScreenEvent_OnReady. */
export async function getLocalityDetails(inputs: LocalityDetailsCallInputs): Promise<LocalityDetails> {
  const out = await callAction('UBTConnect', 'Locality_Details/DataActionGet_LocalityDetails', {
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
  const d = out.LocalityDetails;
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
}

type HouseholdWire = {
  HouseholdId?: string;
  HouseholdName?: string;
  ChildrenNames?: string;
  IsBookmarked?: boolean;
  LocalityName?: string;
  CountryName?: string;
};
const toHousehold = (w: HouseholdWire): LocalityHousehold => ({
  householdId: w.HouseholdId ?? '0',
  householdName: w.HouseholdName ?? '',
  childrenNames: w.ChildrenNames ?? '',
  isBookmarked: w.IsBookmarked ?? false,
  localityName: w.LocalityName ?? '',
  countryName: w.CountryName ?? '',
});
const toWire = (h: LocalityHousehold) => ({
  HouseholdId: h.householdId,
  HouseholdName: h.householdName,
  ChildrenNames: h.childrenNames,
  IsBookmarked: h.isBookmarked,
  LocalityName: h.localityName,
  CountryName: h.countryName,
});

/** DataActionGetLocalityHouseholds (Locality_Households_HouseholdList.mvc.js controller :340-368): the block variable
    In_LocalityId. */
export async function getLocalityHouseholds(in_LocalityId: string): Promise<LocalityHousehold[]> {
  const out = await callAction('UBTConnect', 'Locality_Households_HouseholdList/DataActionGetLocalityHouseholds', {
    In_LocalityId: in_LocalityId,
  });
  return osList(out.LocalityHouseholds).map(toHousehold);
}

/** DataActionGetMembers (Household_Card.mvc.js controller getMembers$DataActRefresh): the block variable Household. */
export async function getMembers(household: LocalityHousehold): Promise<HouseholdMembers> {
  const out = await callAction('UBTConnect', 'Household_Card/DataActionGetMembers', { Household: toWire(household) });
  return {
    members: osList(out.HouseholdMembers).map((m) => ({
      imageURL: m.ImageURL,
      entityId: m.EntityId,
      entityType: m.EntityType,
    })),
    visibleAvatars: out.VisibleAvatars,
  };
}

/* ---- Tags (feedback F1): Locality_Subdivisions, Locality_Interchange, Locality_OneSchoolGlobal. ---- */

const subdivisionToWire = (c: SubdivisionCard) => ({
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

/** Block variables OutSystems sends with DataActionGet_Subdivision_List (Locality_Subdivisions.mvc.js model :86-200). */
export interface SubdivisionListCallInputs {
  getSubdivisions_StartIndex: number;
  getSubdivisions_Offset: number;
  subdivision_Card_List: SubdivisionCard[];
  subdivision_Card_List_IsLoading: boolean;
  isPaginated: boolean;
  localityId: string;
}

/** DataActionGet_Subdivision_List (Locality_Subdivisions.mvc.js controller get_Subdivision_List$DataActRefresh
    :778-838): fetch on demand, refreshed by ScreenEvent_OnReady and OnScrollEnding_RefreshSubdivisions. */
export async function getSubdivisionList(inputs: SubdivisionListCallInputs): Promise<SubdivisionCard[]> {
  const out = await callAction('UBTConnect', 'Locality_Subdivisions/DataActionGet_Subdivision_List', {
    GetSubdivisions_StartIndex: inputs.getSubdivisions_StartIndex,
    GetSubdivisions_Offset: inputs.getSubdivisions_Offset,
    Subdivision_Card_List: wireList(inputs.subdivision_Card_List.map(subdivisionToWire)),
    Subdivision_Card_List_IsLoading: inputs.subdivision_Card_List_IsLoading,
    IsPaginated: inputs.isPaginated,
    LocalityId: inputs.localityId,
  });
  return osList(out.Out_Subdivision_Card_List).map((w) => ({
    subdivisionId: w.SubdivisionId,
    content: { ...w.Subdivision_Card_Content },
  }));
}

/** DataActionGetInterchangesByLocalityId (Locality_Interchange.mvc.js controller
    getInterchangesByLocalityId$DataActRefresh :388-450): the block input In_InterchangeLocalityId. */
export async function getInterchangesByLocalityId(in_InterchangeLocalityId: string): Promise<InterchangeItem[]> {
  const out = await callAction('UBTConnect', 'Locality_Interchange/DataActionGetInterchangesByLocalityId', {
    In_InterchangeLocalityId: in_InterchangeLocalityId,
  });
  return osList(out.Out_InterchangeList).map((w) => ({
    interchangeLocalityId: w.InterchangeLocalityId,
    interchangeLocalityName: w.InterchangeLocalityName,
    interchangeCountryName: w.InterchangeCountryName,
    interchangeDistance: w.InterchangeDistance,
    isBookmarked: w.IsBookmarked,
    interchangeStatistics: {
      Title: w.InterchangeStatistics.Title,
      Subtitle: w.InterchangeStatistics.Subtitle,
      AvatarURL: w.InterchangeStatistics.AvatarURL,
      Statistics: osList(w.InterchangeStatistics.Statistics).map((s) => ({ ...s })),
    },
  }));
}

const oneSchoolToWire = (c: OneSchoolCard) => ({
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

/** Block variables OutSystems sends with DataActionGet_OneSchoolGlobal_List (Locality_OneSchoolGlobal.mvc.js model
    :60-200). */
export interface OneSchoolGlobalListCallInputs {
  getOneSchoolGlobal_List_StartIndex: number;
  getOneSchoolGlobal_List_Offset: number;
  get_OneSchoolGlobal_List_IsLoading: boolean;
  out_OneSchoolGlobal_List2: OneSchoolCard[];
  in_LocalityId: string;
  in_LocalityTimezoneData: { TimezoneName: string; TimezoneOffset: string };
}

/** DataActionGet_OneSchoolGlobal_List (Locality_OneSchoolGlobal.mvc.js controller
    get_OneSchoolGlobal_List$DataActRefresh :612-672): fetch on demand, refreshed by ScreenEvent_OnReady and
    Handler_OnScrollEnding. */
export async function getOneSchoolGlobalList(inputs: OneSchoolGlobalListCallInputs): Promise<OneSchoolCard[]> {
  const out = await callAction('UBTConnect', 'Locality_OneSchoolGlobal/DataActionGet_OneSchoolGlobal_List', {
    GetOneSchoolGlobal_List_StartIndex: inputs.getOneSchoolGlobal_List_StartIndex,
    GetOneSchoolGlobal_List_Offset: inputs.getOneSchoolGlobal_List_Offset,
    Get_OneSchoolGlobal_List_IsLoading: inputs.get_OneSchoolGlobal_List_IsLoading,
    Out_OneSchoolGlobal_List2: wireList(inputs.out_OneSchoolGlobal_List2.map(oneSchoolToWire)),
    In_LocalityId: inputs.in_LocalityId,
    In_LocalityTimezoneData: inputs.in_LocalityTimezoneData,
  });
  return osList(out.Out_OneSchoolGlobal_List).map((w) => ({
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
}
