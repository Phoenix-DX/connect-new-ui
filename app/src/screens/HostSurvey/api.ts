import { callAction } from '@/api/client/callAction';
import { osList } from '@/legacy/os/os-wire';
import type { GetHostSurveyResult, HostSurvey, HostSurveyResponseWire, HostSurveyVariablesWire } from './types';

/** Module and owner of the data action (screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_HostSurvey/
    ScreenBlock_HostSurvey/DataActionGetHostSurvey). On demand (dataFetchDependentsGraph, HS :3540-3552): OnReady →
    RefreshData (HS :5490-5520), as captured (calls.md #1). HS = analysis/sources/pretty/
    Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc.js. */
const MODULE = 'Connect2_OrbitMobile_MUI';

/** The OutSystems null DateTime as it travels. */
const NULL_DATE_TIME = '1900-01-01T00:00:00';

/** OutSystems null DateTime / Date: kept as "" for the components (the formatters treat "" as null). */
const date = (value: string): string => (value.startsWith('1900-01-01') ? '' : value);

/** A DateTime screen input from the URL (shell/navigation/osNavigate.ts puts ISO texts there): "" when absent or the
    OutSystems null date. */
export const dateTimeInput = (value: string | null): string => (value === null ? '' : date(value));

/** GetHostSurveyResponse wire → the HostSurvey record of the block. */
function toHostSurvey(r: HostSurveyResponseWire): HostSurvey {
  return {
    SurveyInfo: {
      ...r.SurveyInfo,
      EventStartDateTime: date(r.SurveyInfo.EventStartDateTime),
      EventEndDateTime: date(r.SurveyInfo.EventEndDateTime),
    },
    Rooms: {
      AccommodationNote: r.Rooms.AccommodationNote,
      HostSurvey_RoomItem: osList(r.Rooms.HostSurvey_RoomItem).map((room) => ({ ...room, Beds: osList(room.Beds) })),
    },
    Meals: {
      MealNote: r.Meals.MealNote,
      MealItemInfo: osList(r.Meals.MealItemInfo).map((meal) => ({ ...meal, EventDate: date(meal.EventDate) })),
    },
    Helpers: { HelperNote: r.Helpers.HelperNote, HelperItemInfo: osList(r.Helpers.HelperItemInfo) },
    Vehicles: { HasVehicles: r.Vehicles.HasVehicles, VehicleItemInfo: osList(r.Vehicles.VehicleItemInfo) },
  };
}

/** DataActionGetHostSurvey (HS :4519-4547): outputs Response (GetHostSurveyResponse) and HasError. The server reads
    the block variables (In_EventId, In_MemberId); a null input date ("") travels as the null DateTime. */
export async function getHostSurvey(vars: HostSurveyVariablesWire): Promise<GetHostSurveyResult> {
  const out = await callAction(MODULE, 'ScreenBlock_HostSurvey/DataActionGetHostSurvey', {
    ...vars,
    In_EventStartDate: vars.In_EventStartDate || NULL_DATE_TIME,
    In_EventEndDate: vars.In_EventEndDate || NULL_DATE_TIME,
  });
  return { Response: toHostSurvey(out.Response), HasError: out.HasError };
}
