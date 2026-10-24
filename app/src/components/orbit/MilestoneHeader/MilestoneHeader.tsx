/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader */
// @os-block Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader
import { useEffect, useMemo, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import {
  getLocalOrbitMilestoneTypeById,
  localOrbitMilestoneTypesRead,
  useOrbitStaticEntitiesVersion,
} from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';
import type { LocalOrbitMilestoneType } from './types';

export interface MilestoneHeaderProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_EventName (default ""). */
  inEventName?: string;
  /** In_MilestoneName (default ""). */
  inMilestoneName?: string;
  /** In_OrbitMilestoneTypeId: an OrbitMilestoneType identifier (default ""). */
  inOrbitMilestoneTypeId?: string;
}

/** Milestone header (MilestoneHeader.mvc.js view :196-250, OnReady :256-293): `orbit-milestone-header` with the event
    name and `orbit-milestone-sub-header`: the type's icon (`icon <MainIcon>`, no fa classes) and
    In_MilestoneName + " (" + Type + ")". OnReady reads the LocalOrbitMilestoneType record of
    In_OrbitMilestoneTypeId (GetLocalOrbitMilestoneTypeById) from the device database, which earlier app starts filled;
    the port reads the store's mirror of it at the first render and again after each load or sync of the store
    (CR-MilestoneDetail-4: a page opened by URL renders before the mirror is loaded or the app start has synced). Before
    the rows are read the record stays empty (OnReady still waits for the database); a missing row raises
    DataBaseException (Entity.get), which OnReady does not handle: it goes to the flow's handler (raiseToFlowHandler),
    once per read. */
export function MilestoneHeader({
  id,
  inEventName = '',
  inMilestoneName = '',
  inOrbitMilestoneTypeId = '',
}: MilestoneHeaderProps) {
  // OnReady (GetLocalOrbitMilestoneTypeById) reads once per store version; the lookup is synchronous here (the
  // original reads IndexedDB). The input is not a dependency: OnReady does not run again when it changes.
  const storeVersion = useOrbitStaticEntitiesVersion();
  const read = useMemo<{ record: LocalOrbitMilestoneType; error?: unknown }>(
    () => {
      if (!localOrbitMilestoneTypesRead()) return { record: {} };
      try {
        return { record: getLocalOrbitMilestoneTypeById(inOrbitMilestoneTypeId) };
      } catch (error) {
        return { record: {}, error };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [storeVersion],
  );
  const raised = useRef<unknown>(null);
  useEffect(() => {
    if (read.error === undefined || raised.current === read) return;
    raised.current = read;
    raiseToFlowHandler(read.error);
  }, [read]);
  const orbitMilestoneType = read.record;
  return (
    <OSBlock name="Orbit_Blocks.MilestoneHeader" id={id}>
      <div className="orbit-milestone-header" data-container="">
        <div className="full-width margin-bottom-base" data-container="">
          <span data-expression="">{inEventName}</span>
        </div>
        <div className="orbit-milestone-sub-header" data-container="">
          <i className={`icon ${orbitMilestoneType.MainIcon ?? ''}`} data-icon="" />
          <span className="font-size-0-9rem margin-left-s" data-expression="">
            {`${inMilestoneName} (${orbitMilestoneType.Type ?? ''})`}
          </span>
        </div>
      </div>
    </OSBlock>
  );
}
