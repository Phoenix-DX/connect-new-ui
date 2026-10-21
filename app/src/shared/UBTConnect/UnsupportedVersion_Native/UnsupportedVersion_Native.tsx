// @os-block UBTConnect.App_Common.UnsupportedVersion_Native
import { NotCaptured } from '../../../components/NotCaptured';
import { OSBlock } from '../../../components/OSBlock';

export interface UnsupportedVersion_NativeProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** Shown only in the store app (decision U16: not built for the web); nothing captured. */
export function UnsupportedVersion_Native({ id }: UnsupportedVersion_NativeProps) {
  return (
    <OSBlock name="App_Common.UnsupportedVersion_Native" id={id}>
      <NotCaptured name="App_Common.UnsupportedVersion_Native (store app only, decision U16)" />
    </OSBlock>
  );
}
