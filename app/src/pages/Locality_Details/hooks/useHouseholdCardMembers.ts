import { useEffect, useRef } from 'react';
import {
  fetchHouseholdCardMembers,
  type HouseholdCardMembers,
  type LazyImageItem,
  type LocalityHousehold,
} from '@/api/household';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { Connect_Entity } from '@/lib/ubtConnectUtils/staticEntities';

/** What the household card renders. */
export interface HouseholdCardMembersView {
  /** GetMembers.IsDataFetched: stays true after the first answer. */
  isDataFetched: boolean;
  /** The member avatars of the current Household; two skeleton members while they load. */
  members: LazyImageItem[];
  /** GetMembers.VisibleAvatars of the last answer (0 before the first one). */
  visibleAvatars: number;
}

/** OnReady / OnParametersChanged: ListClear, then two skeleton members (EntityId "", EntityType Member). */
const SKELETON_MEMBERS: LazyImageItem[] = [
  { imageURL: '', entityId: '', entityType: Connect_Entity.Member },
  { imageURL: '', entityId: '', entityType: Connect_Entity.Member },
];

/** The data action GetMembers of a household card. OnReady and OnParametersChanged (the Household record compared by
    value): the skeleton members, then GetMembers unless HouseholdId is NullIdentifier. An answer for an older
    Household, or after the unmount, is dropped. A failed fetch goes to the flow handler.
    OnReady of a view restored from the cache ends (IsViewRestoredFromCache, Household_Card.mvc.js:478-490, JS
    :622-624): GetMembers lives in the view cache (decision U19, pattern P-BACK), so a back navigation keeps the avatars
    and makes no call. A restored card whose saved GetMembers has no data yet fetches (F40).
    @origin UBTConnect.Directory_Household_Blocks.Household_Card */
export function useHouseholdCardMembers(household: LocalityHousehold): HouseholdCardMembersView {
  const parameters = JSON.stringify(household);
  const [fetched, setFetched] = useViewState<{ parameters: string; data: HouseholdCardMembers } | null>(
    `Directory_Household_Blocks.Household_Card#${household.householdId}-GetMembers`,
    null,
  );
  const wasRestored = useWasRestoredFromCache();
  /** The Household of a card restored from the cache with its members: its OnReady ends. */
  const restoredParameters = useRef(wasRestored && fetched !== null ? fetched.parameters : null);
  useEffect(() => {
    if (restoredParameters.current === parameters) return;
    restoredParameters.current = null;
    if (household.householdId === '0') return;
    let alive = true;
    fetchHouseholdCardMembers(household).then((data) => {
      if (alive) setFetched({ parameters, data });
    }, raiseToFlowHandler);
    return () => {
      alive = false;
    };
    // Refresh on a new Household value (OnParametersChanged compares by value).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parameters]);

  const current = fetched?.parameters === parameters ? fetched.data : null;
  return {
    isDataFetched: fetched !== null,
    members: current?.members ?? SKELETON_MEMBERS,
    visibleAvatars: fetched?.data.visibleAvatars ?? 0,
  };
}
