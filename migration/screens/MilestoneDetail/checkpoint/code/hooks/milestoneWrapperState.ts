import type { GmpMilestoneHost } from '@/api/event';
import type { MilestoneBlockKind } from '@/api/event';
import type { MilestoneDetailInputs } from '@/pages/MilestoneDetail/inputs';
import { OrbitMilestoneType } from '@/lib/orbit/staticEntities';
import type { AccommodationHostInputs } from './accommodationHostState';

/** The state of ScreenBlock_MilestoneWrapper: its variables and the answer of DataActionGetGmpMilestoneHost. The view
    cache keeps all of it (P-BACK).
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper */
export interface MilestoneWrapperState {
  /** IsFetchingData: true while GetGmpMilestoneHost runs. */
  isFetchingData: boolean;
  /** UserMemberId (Long Integer as text). */
  userMemberId: string;
  /** GetGmpMilestoneHost.Response; the record defaults until the data action answers. */
  response: GmpMilestoneHost;
}

export type MilestoneWrapperAction =
  /** OnReady: IsFetchingData = True and UserMemberId, before GetGmpMilestoneHost. */
  | { type: 'fetchStarted'; userMemberId: string }
  /** OnAfterFetch of GetGmpMilestoneHost: the answer, IsFetchingData = False. */
  | { type: 'gmpMilestoneHostFetched'; response: GmpMilestoneHost };

/** GetGmpMilestoneHost.Response before the data action answers (record defaults). */
export const EMPTY_GMP_MILESTONE_HOST: GmpMilestoneHost = {
  MilestoneType: '',
  MilestoneTitle: '',
  HostId: '0',
  Status: { Success: false, ErrorMessage: '' },
};

/** The block variables after OnInitialize (record defaults). */
export const INITIAL_MILESTONE_WRAPPER_STATE: MilestoneWrapperState = {
  isFetchingData: false,
  userMemberId: '0',
  response: EMPTY_GMP_MILESTONE_HOST,
};

/** OutSystems TextToInteger: "0" for a text that is not an integer. */
export const textToInteger = (text: string): string => {
  const n = Number.parseInt(text, 10);
  return Number.isNaN(n) ? '0' : String(n);
};

/** The condition of OnReady on a new visit: GetGmpMilestoneHost runs from a notification, or when one of the optional
    inputs is missing (In_HostId 0, In_OrbitMilestoneTypeId or In_MilestoneName empty). */
export const fetchesAtStart = (inputs: MilestoneDetailInputs): boolean =>
  inputs.In_FromNotification ||
  inputs.In_HostId === '0' ||
  inputs.In_OrbitMilestoneTypeId === '' ||
  inputs.In_MilestoneName === '';

export function milestoneWrapperReducer(
  state: MilestoneWrapperState,
  action: MilestoneWrapperAction,
): MilestoneWrapperState {
  switch (action.type) {
    case 'fetchStarted':
      return { ...state, isFetchingData: true, userMemberId: action.userMemberId };
    case 'gmpMilestoneHostFetched':
      return { ...state, response: action.response, isFetchingData: false };
  }
}

/** What the block shows. */
export type MilestoneWrapperBody =
  /** From a notification while IsFetchingData: Skeleton_Loading (MilestoneWrapper). */
  | { kind: 'skeleton' }
  /** From a notification and GetGmpMilestoneHost.Response.Status.Success False: the "Event not found" layout. */
  | { kind: 'failed' }
  /** ScreenBlock_AccommodationHost with its inputs. */
  | { kind: 'accommodationHost'; inputs: AccommodationHostInputs }
  /** ScreenBlock_MealGuest, _MealHost, _MealHelper, _AccommodationGuest or _AccommodationHelper with its inputs (the
      same six inputs as ScreenBlock_AccommodationHost). */
  | { kind: 'milestoneBlock'; block: MilestoneBlockKind; inputs: AccommodationHostInputs }
  /** Any other milestone type: nothing. */
  | { kind: 'none' };

/** The block of each of the five other milestone types (the meal group, then the accommodation group of the
    compiled view, block:256-258 and :610-611; decision Q3 of Legacy_OrbitEventsFlow). */
const MILESTONE_BLOCK_OF_TYPE: Readonly<Record<string, MilestoneBlockKind>> = {
  [OrbitMilestoneType.MealGuest]: 'mealGuest',
  [OrbitMilestoneType.MealHost]: 'mealHost',
  [OrbitMilestoneType.MealHelper]: 'mealHelper',
  [OrbitMilestoneType.AccommodationGuest]: 'accommodationGuest',
  [OrbitMilestoneType.AccommodationHelper]: 'accommodationHelper',
};

/** The view of the block: from a notification, the skeleton while IsFetchingData and the Failed layout
    without Success; else the block of the milestone type (Response.MilestoneType from a notification, else
    In_OrbitMilestoneTypeId). From a notification with Success the child inputs take MilestoneType, HostId and
    MilestoneTitle of the answer. */
export function milestoneWrapperBody(
  state: MilestoneWrapperState,
  inputs: MilestoneDetailInputs,
): MilestoneWrapperBody {
  const r = state.response;
  if (inputs.In_FromNotification && state.isFetchingData) return { kind: 'skeleton' };
  if (inputs.In_FromNotification && !r.Status.Success) return { kind: 'failed' };
  const typeId = inputs.In_FromNotification ? r.MilestoneType : inputs.In_OrbitMilestoneTypeId;
  const fromAnswer = inputs.In_FromNotification && r.Status.Success;
  /* The inputs of every child block: MilestoneType, HostId and MilestoneTitle of the answer from a notification with
     Success, else the screen inputs. */
  const childInputs: AccommodationHostInputs = {
    In_OrbitMilestoneTypeId: fromAnswer ? r.MilestoneType : inputs.In_OrbitMilestoneTypeId,
    In_MilestoneId: inputs.In_MilestoneId,
    In_PreloadEventName: inputs.In_EventName,
    In_PreloadMilestoneName: fromAnswer ? r.MilestoneTitle : inputs.In_MilestoneName,
    In_HostId: fromAnswer ? r.HostId : inputs.In_HostId,
    In_EventId: inputs.In_EventId,
  };
  if (typeId === OrbitMilestoneType.AccommodationHost) return { kind: 'accommodationHost', inputs: childInputs };
  const block = MILESTONE_BLOCK_OF_TYPE[typeId];
  if (block !== undefined) return { kind: 'milestoneBlock', block, inputs: childInputs };
  return { kind: 'none' };
}
