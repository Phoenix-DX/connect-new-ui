import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';
import type { Event_Screen } from '../../shared/Connect2_OrbitMobile_MUI/lib/structures';

/* ---- Wire shapes (api.ts and mocks.ts only) ----
   The data action of ScreenBlock_AdminLanding and the screen's server action GetMilestoneScanFF, typed by the API
   contract (src/api/openapi.yaml; captured shape analysis/calls.md § DataActionGet_AdminEventsList). */

/** Endpoint of the data action of ScreenBlock_AdminLanding (screenservices/Connect2_OrbitMobile_MUI/
    Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding/DataActionGet_AdminEventsList). */
type AdminEventsListPath = PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_AdminLanding/DataActionGet_AdminEventsList'>;

export type Get_AdminEventsListWire = ActionOutputs<AdminEventsListPath>;

/** GetAdminOrbitEvents_ScreenRec: OrbitSummaryItem (AdminOrbitSummaryItemRec) + OrbitEventType. */
export type AdminOrbitEventsWire = Get_AdminEventsListWire['Response']['List'][number];

/** The block variables OutSystems sends with the data action (screenData.variables, analysis/calls.md: IsFetchingData,
    EventsSummary, UserFirstName, UserMemberId). EventsSummary echoes the client list and is left out, as in the other
    routes' data actions (the contract makes every variable optional). */
export type AdminLandingVariablesWire = Required<
  Pick<ActionInputs<AdminEventsListPath>, 'IsFetchingData' | 'UserFirstName' | 'UserMemberId'>
>;

export type GetMilestoneScanFFWire = ActionOutputs<PathOf<'UBTConnect', 'ActionGetMilestoneScanFF'>>;

/* ---- Domain (components) ---- */

/** One row of EventsSummary: the record Card_Event takes (the view's typeConvertRecord to Event_ScreenRec,
    ScreenBlock_AdminLanding.mvc.js view :301-308) and the row's TypeFriendly, which the card click passes on (:325). */
export interface AdminEventItem {
  event: Event_Screen;
  typeFriendly: string;
}
