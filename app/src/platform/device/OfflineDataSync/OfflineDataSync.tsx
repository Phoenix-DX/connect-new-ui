/** @origin UBTConnect.App_Common.OfflineDataSyncEvents */
// @os-block UBTConnect.App_Common.OfflineDataSyncEvents
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OfflineDataSyncCore } from '@/components/ui/OfflineDataSyncCore';

export interface OfflineDataSyncProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event OnSyncStart(SyncUnit). Not raised: the OSUI sync engine is not ported (README). */
  onSyncStart?: (syncUnit: string) => void;
  /** Event OnSyncComplete(SyncUnit). Not raised (README). */
  onSyncComplete?: (syncUnit: string) => void;
  /** Event OnSyncError(SyncUnit, ErrorMessage). Not raised (README). */
  onSyncError?: (syncUnit: string, errorMessage: string) => void;
}

/** UBTConnect's offline-sync wiring around OSUI OfflineDataSyncCore. Its handlers (OnConfigure →
    ConfigureOfflineDataSync with OfflineDataSyncConfiguration; OnSync → the empty OfflineDataSync action, then
    EndWithSuccess / EndWithSecurityError / EndWithError; OnSyncStart/Complete/Error → its own events:
    p:UBTConnect.App_Common.OfflineDataSyncEvents.mvc.js:255-456) only drive the OSUI sync engine, which is not ported
    (spec 12a: the sync action is empty). */
export function OfflineDataSync({ id }: OfflineDataSyncProps) {
  return (
    <OSBlock name="App_Common.OfflineDataSyncEvents" id={id}>
      <OfflineDataSyncCore />
    </OSBlock>
  );
}
