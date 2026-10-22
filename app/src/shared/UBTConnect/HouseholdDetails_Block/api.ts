import { callAction } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type { Directory_Coordinates } from '../../UBTConnect_Utils/lib/structures';
import type { UI_HouseholdMember, UI_Screen_HouseholdDetails } from '../lib/structures';

/** Block variables OutSystems sends with both data actions (screenData.variables): the inputs and UserAge_Visibility.
    The other UI variables (tags, share sheet, timeline) are view state the server does not need. */
export type HouseholdDetailsCallInputs = {
  HouseholdId: string;
  isEnabled: boolean;
  In_ShowKebabMenu: boolean;
  In_CheckVisibility: boolean;
  In_IsSkeletonOnly: boolean;
  In_HideActions: boolean;
  UserAge_Visibility: boolean;
};

/** Outputs of DataActionGetHousehold, lists unwrapped. */
export interface GetHouseholdOutput {
  Household: UI_Screen_HouseholdDetails;
  Out_HouseholdMembers: UI_HouseholdMember[];
  Out_NonHouseholdMembers: UI_HouseholdMember[];
  isVisible: boolean;
}

/** DataActionGetHousehold (block controller getHousehold$DataActRefresh, mvc.js:1948-1976): fetched on demand only
    (Refresh_GetHouseholdDetail from ScreenEvent_OnReady / OnParametersChanged). */
export async function getHousehold(inputs: HouseholdDetailsCallInputs): Promise<GetHouseholdOutput> {
  const out = await callAction('UBTConnect', 'HouseholdDetails_Block/DataActionGetHousehold', inputs);
  return {
    Household: out.Household,
    Out_HouseholdMembers: osList(out.Out_HouseholdMembers),
    Out_NonHouseholdMembers: osList(out.Out_NonHouseholdMembers),
    isVisible: out.isVisible,
  };
}

/** DataActionGetHousehold_Coordinates (block controller getHousehold_Coordinates$DataActRefresh, mvc.js:1924-1947):
    fetched on demand only (Refresh_GetHouseholdCoordinates). */
export async function getHousehold_Coordinates(inputs: HouseholdDetailsCallInputs): Promise<Directory_Coordinates> {
  const out = await callAction('UBTConnect', 'HouseholdDetails_Block/DataActionGetHousehold_Coordinates', inputs);
  return out.HouseholdCoordinates;
}
