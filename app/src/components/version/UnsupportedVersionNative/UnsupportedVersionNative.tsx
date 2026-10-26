/** @origin UBTConnect.App_Common.UnsupportedVersion_Native */
// @os-block UBTConnect.App_Common.UnsupportedVersion_Native
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface UnsupportedVersionNativeProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** Shown only in the store app (decision U16: not built for the web); nothing captured. */
export function UnsupportedVersionNative({ id }: UnsupportedVersionNativeProps) {
  return (
    <OSBlock name="App_Common.UnsupportedVersion_Native" id={id}>
      <NotCaptured name="App_Common.UnsupportedVersion_Native (store app only, decision U16)" />
    </OSBlock>
  );
}
