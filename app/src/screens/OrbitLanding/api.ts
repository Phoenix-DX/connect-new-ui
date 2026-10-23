import { callAction } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type { HouseholdMember, HouseholdMemberWire, OrbitLandingVariablesWire } from './types';

/** Module and owner of both data actions (screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/
    ScreenBlock_OrbitLanding/…). */
const MODULE = 'Connect2_OrbitMobile_MUI';

export const toHouseholdMember = (w: HouseholdMemberWire): HouseholdMember => ({
  memberId: w.MemberId,
  firstName: w.FirstName,
  isSelected: w.IsSelected,
});

/** DataActionGet_HouseholdMembers (data action of ScreenBlock_OrbitLanding, on demand: Refresh_GetHouseholdMembers,
    ctrl :1895-1929; captured call 2, phase load). The block variables travel as screenData.variables. */
export async function getHouseholdMembers(vars: OrbitLandingVariablesWire): Promise<HouseholdMember[]> {
  const out = await callAction(MODULE, 'ScreenBlock_OrbitLanding/DataActionGet_HouseholdMembers', vars);
  return osList(out.Response).map(toHouseholdMember);
}

/* DataActionGet_EventsByMemberId (on demand: Refresh_GetEventsByMemberId, at load and again on a household member
   click; the server reads SelectedMemberId from the block variables) is in the domain api/event: the Orbit events and
   milestones of a member. This module keeps the name that the screen uses. */
export { fetchEventsByMemberId as getEventsByMemberId } from '@/api/event';
