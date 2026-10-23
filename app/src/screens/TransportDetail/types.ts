import type { ActionOutputs, PathOf } from '@/api/client/callAction';

/* ---- Wire shapes (mocks.ts only) ----
   DataActionGet_TransportDetail of ScreenBlock_TransportDetail, typed by the API contract (no capture: shape from the
   contract, Connect2_OrbitMobile_BL.GetTransportDetails_ScreenRec). */

export type GetTransportDetailWire = ActionOutputs<
  PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_TransportDetail/DataActionGet_TransportDetail'>
>;
export type TransportLocationWire = GetTransportDetailWire['Response']['TransportDetail']['DepartureLocation'];

/* ---- Domain (components) ----
   Field names as in OutSystems. DateTimes stay OutSystems values as text, "" = NullDate(); Long Integers as text. The
   block variables that the data action sends and the transport (GetTransportDetails_ScreenRec: the milestone type,
   the locations, the stops, the seats and the travel info) are domain types of api/event; this module keeps the names
   that the screen uses. */
export type {
  SeatItem,
  StopItem,
  TransportDetailCallInputs as TransportDetailVariablesWire,
  TransportDetails,
  TransportLocation,
  TransportMilestoneType,
  TravelInfo,
} from '@/api/event';
