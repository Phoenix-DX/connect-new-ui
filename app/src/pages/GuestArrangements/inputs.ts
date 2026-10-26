/** The route inputs of GuestArrangements, from the query string by their original names. The screen gives them to
    ScreenBlock_GuestArrangements (`toGuestArrangementsBlockInputs`) and uses In_EventId for ContactByEmailOrbitHelpdesk.
    @origin UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements */

import type { GuestArrangementsBlockInputs } from './hooks/guestArrangementsState';

export interface GuestArrangementsInputs {
  /** In_MilestoneId (Text). */
  In_MilestoneId: string;
  /** In_EventId (Long Integer, as text). */
  In_EventId: string;
  /** In_MemberId (Long Integer, as text): the guest. */
  In_MemberId: string;
  /** In_HostId (Long Integer, as text). */
  In_HostId: string;
  /** In_OrbitMilestoneTypeId (Text). */
  In_OrbitMilestoneTypeId: string;
  /** In_MilestoneTitle (Text). */
  In_MilestoneTitle: string;
  /** In_EventName (Text). */
  In_EventName: string;
}

/** The inputs from the query string. An absent Text input is "" and an absent Long Integer input is "0"; a value that
    is present stays as it is, also when it is empty. */
export function readGuestArrangementsInputs(params: URLSearchParams): GuestArrangementsInputs {
  return {
    In_MilestoneId: params.get('In_MilestoneId') ?? '',
    In_EventId: params.get('In_EventId') ?? '0',
    In_MemberId: params.get('In_MemberId') ?? '0',
    In_HostId: params.get('In_HostId') ?? '0',
    In_OrbitMilestoneTypeId: params.get('In_OrbitMilestoneTypeId') ?? '',
    In_MilestoneTitle: params.get('In_MilestoneTitle') ?? '',
    In_EventName: params.get('In_EventName') ?? '',
  };
}

/** The inputs that the screen gives ScreenBlock_GuestArrangements: In_PreloadMilestoneName = In_MilestoneTitle and
    In_PreloadEventName = In_EventName; the others by the same name. */
export function toGuestArrangementsBlockInputs(inputs: GuestArrangementsInputs): GuestArrangementsBlockInputs {
  return {
    In_MemberId: inputs.In_MemberId,
    In_EventId: inputs.In_EventId,
    In_HostId: inputs.In_HostId,
    In_MilestoneId: inputs.In_MilestoneId,
    In_PreloadEventName: inputs.In_EventName,
    In_PreloadMilestoneName: inputs.In_MilestoneTitle,
    In_OrbitMilestoneTypeId: inputs.In_OrbitMilestoneTypeId,
  };
}
