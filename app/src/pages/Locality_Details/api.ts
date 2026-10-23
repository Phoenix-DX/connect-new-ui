import { callAction } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type { HouseholdMembers, LocalityHousehold } from './types';

/* The locality calls of the screen and its tag blocks are in the domain api/locality: DataActionGet_LocalityDetails
   (refreshed by ScreenEvent_OnReady), DataActionGet_Subdivision_List (Locality_Subdivisions: OnReady and
   OnScrollEnding_RefreshSubdivisions), DataActionGetInterchangesByLocalityId (Locality_Interchange: the block input
   In_InterchangeLocalityId) and DataActionGet_OneSchoolGlobal_List (Locality_OneSchoolGlobal: OnReady and
   Handler_OnScrollEnding). This module keeps the names that the screen and the blocks use. */
export {
  fetchInterchanges as getInterchangesByLocalityId,
  fetchLocalityDetails as getLocalityDetails,
  fetchOneSchoolCards as getOneSchoolGlobalList,
  fetchSubdivisionCards as getSubdivisionList,
} from '@/api/locality';

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
