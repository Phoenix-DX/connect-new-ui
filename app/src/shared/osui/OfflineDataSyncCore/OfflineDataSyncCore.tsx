// @os-block OutSystemsUI_2_23.Private.OfflineDataSyncCore
import { useEffect, useLayoutEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { NetworkStatusChanged } from '../NetworkStatusChanged';

export interface OfflineDataSyncCoreProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event OnConfigure: raised once on initialize, after the block registers with the sync API. */
  onConfigure?: () => void;
  /** Event OnSync(SyncUnit). Not raised: the OSUI sync engine is not ported (README). */
  onSync?: (syncUnit: string) => void;
  /** Event OnSyncStart(SyncUnit). Not raised (README). */
  onSyncStart?: (syncUnit: string) => void;
  /** Event OnSyncComplete(SyncUnit). Not raised (README). */
  onSyncComplete?: (syncUnit: string) => void;
  /** Event OnSyncError(SyncUnit, ErrorMessage). Not raised (README). */
  onSyncError?: (syncUnit: string, errorMessage: string) => void;
}

/** OSUI OfflineDataSyncCore. OnInitialize registers with the OfflineDataSync API, then raises OnConfigure
    (p:OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js:394-397). The sync itself (StartOfflineDataSync on
    network-online / resume, OnSync, OnSyncStart/Complete/Error: :271-273, :446-582, :640-642) runs in
    scripts/OutSystemsUI_2_23.OfflineDataSync.js, which is not ported: UBTConnect's sync action is empty (spec 12a,
    UC:15118-15140). */
export function OfflineDataSyncCore({ id, onConfigure }: OfflineDataSyncCoreProps) {
  const latest = useRef(onConfigure);
  useLayoutEffect(() => {
    latest.current = onConfigure;
  });
  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    latest.current?.();
  }, []);
  return (
    <OSBlock name="Private.OfflineDataSyncCore" id={id}>
      <NetworkStatusChanged />
    </OSBlock>
  );
}
