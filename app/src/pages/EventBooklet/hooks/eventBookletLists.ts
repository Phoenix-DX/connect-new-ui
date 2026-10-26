/** @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet */
import type { EventBookletMember, EventBookletSelectedFilters } from '@/api/event';
import type { LocalHelperRole } from '@/platform/storage/localEntities';
import type { DayFilter } from '@/lib/orbit/structures';
import type { BookletMembersByLocality, BookletMembersByRole } from '@/pages/EventBooklet/types';

/* The pure list helpers of the event booklet block: the grouping of the members and the filter checks. */

/** ListSort by OrderNo ascending (Long Integer). */
const byOrderNo = (list: readonly EventBookletMember[]): EventBookletMember[] =>
  [...list].sort((a, b) => Number(a.OrderNo) - Number(b.OrderNo));

/** GroupMembersByCountry(MembersList) → MembersByLocality: sort by OrderNo; for each member whose country is not
    grouped yet, its country's members, then one group per locality of that country (first-seen order) with that
    locality's members. */
export function groupMembersByCountry(membersList: readonly EventBookletMember[]): BookletMembersByLocality[] {
  const members = byOrderNo(membersList);
  const out: BookletMembersByLocality[] = [];
  for (const m of members) {
    if (out.some((g) => g.Country === m.Country)) continue;
    const byCountry = members.filter((x) => x.Country === m.Country);
    const temp: BookletMembersByLocality[] = [];
    for (const c of byCountry) {
      if (temp.some((g) => g.Locality === c.Locality)) continue;
      temp.push({
        Locality: c.Locality,
        Country: c.Country,
        Members: byCountry.filter((x) => x.Locality === c.Locality),
      });
    }
    out.push(...temp);
  }
  return out;
}

/** GroupHelpersByRole(MembersList) → HelpersByRole: sort by OrderNo; one group per role (first-seen order) with
    GroupMembersByCountry of that role's members. */
export function groupHelpersByRole(membersList: readonly EventBookletMember[]): BookletMembersByRole[] {
  const members = byOrderNo(membersList);
  const out: BookletMembersByRole[] = [];
  for (const m of members) {
    if (out.some((g) => g.Role === m.Role)) continue;
    out.push({ Role: m.Role, MembersByLocality: groupMembersByCountry(members.filter((x) => x.Role === m.Role)) });
  }
  return out;
}

/** CheckSelectedDates(DayFilterList) → HasSelected: True at the first selected day. */
export const checkSelectedDates = (dayFilterList: readonly DayFilter[]): boolean =>
  dayFilterList.some((d) => d.IsSelected === true);

/** GetHelperRoleByJSON_Name(In_JSON_Name, In_HelperRoles) → Out_HelperRoles: the first role with that JSON_Name,
    else the empty record (Label ""). */
export function getHelperRoleByJSON_Name(
  jsonName: string,
  helperRoles: readonly LocalHelperRole[],
): Pick<LocalHelperRole, 'Label' | 'JSON_Name'> {
  return helperRoles.find((r) => r.JSON_Name === jsonName) ?? { Label: '', JSON_Name: '' };
}

/** HasFiltersApplied of the OnAfterFetch actions: a search term, a selected day, a role, a country or a locality. */
export const filtersApplied = (f: EventBookletSelectedFilters): boolean =>
  f.SearchTerm !== '' ||
  checkSelectedDates(f.DateRange) ||
  f.HelperRoles.length > 0 ||
  f.Countries.length > 0 ||
  f.Localities.length > 0;
