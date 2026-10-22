import { log } from '../../../lib/log';
import type { LocalHelperRole } from '@/platform/storage/localEntities';
import type { BookletMembersByLocality, BookletMembersByRole, DayFilter, EventBookletMember } from '../types';

/* Client actions of Connect2_OrbitMobile_MUI that ScreenBlock_EventBooklet calls, ported 1:1. `C:<n>` = line of
   migration/runtime-sources/Connect2_OrbitMobile_MUI.controller.js. */

/** ListSort by OrderNo ascending (Long Integer). */
const byOrderNo = (list: readonly EventBookletMember[]): EventBookletMember[] =>
  [...list].sort((a, b) => Number(a.OrderNo) - Number(b.OrderNo));

/** GroupMembersByCountry(MembersList) → MembersByLocality (C:5151-5282): sort by OrderNo; for each member whose
    country is not grouped yet, its country's members, then one group per locality of that country (first-seen
    order) with that locality's members. */
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

/** GroupHelpersByRole(MembersList) → HelpersByRole (C:5022-5110): sort by OrderNo; one group per role (first-seen
    order) with GroupMembersByCountry of that role's members. */
export function groupHelpersByRole(membersList: readonly EventBookletMember[]): BookletMembersByRole[] {
  const members = byOrderNo(membersList);
  const out: BookletMembersByRole[] = [];
  for (const m of members) {
    if (out.some((g) => g.Role === m.Role)) continue;
    out.push({ Role: m.Role, MembersByLocality: groupMembersByCountry(members.filter((x) => x.Role === m.Role)) });
  }
  return out;
}

/** CheckSelectedDates(DayFilterList) → HasSelected (C:1161-1205): True at the first selected day. */
export const checkSelectedDates = (dayFilterList: readonly DayFilter[]): boolean =>
  dayFilterList.some((d) => d.IsSelected === true);

/** GetHelperRoleByJSON_Name(In_JSON_Name, In_HelperRoles) → Out_HelperRoles (C:3696-3742): the first role with that
    JSON_Name, else the empty record (Label ""). */
export function getHelperRoleByJSON_Name(
  jsonName: string,
  helperRoles: readonly LocalHelperRole[],
): Pick<LocalHelperRole, 'Label' | 'JSON_Name'> {
  return helperRoles.find((r) => r.JSON_Name === jsonName) ?? { Label: '', JSON_Name: '' };
}

/** FocusOnInput(InputId) (C:1584-1636): focus the element 150 ms later, when it exists. */
export function focusOnInput(inputId: string): void {
  window.setTimeout(() => {
    document.getElementById(inputId)?.focus();
  }, 150);
}

/** BlurInput(In_InputId) (C:601-650): document.getElementById(In_InputId).blur(). */
export function blurInput(inputId: string): void {
  document.getElementById(inputId)?.blur();
}

/** OnApplicationEvent_ViewHousehold(AuditPayload_ViewHousehold: TargetHouseholdId, EventId, EventTitle, EventLocation)
    (SB :3718-3728). Telemetry is not wired in the mock phase (decision U17): the event goes to the log with its ids
    only. */
export function onApplicationEvent_ViewHousehold(targetHouseholdId: string, eventId: string): void {
  log.info('ApplicationEvent', { Event: 'ViewHousehold', TargetHouseholdId: targetHouseholdId, EventId: eventId });
}
