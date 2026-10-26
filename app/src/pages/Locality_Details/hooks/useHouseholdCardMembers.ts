import { useEffect, useState } from 'react';
import {
  fetchHouseholdCardMembers,
  type HouseholdCardMembers,
  type LazyImageItem,
  type LocalityHousehold,
} from '@/api/household';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
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
    @origin UBTConnect.Directory_Household_Blocks.Household_Card */
export function useHouseholdCardMembers(household: LocalityHousehold): HouseholdCardMembersView {
  const parameters = JSON.stringify(household);
  const [fetched, setFetched] = useState<{ parameters: string; data: HouseholdCardMembers } | null>(null);
  useEffect(() => {
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
