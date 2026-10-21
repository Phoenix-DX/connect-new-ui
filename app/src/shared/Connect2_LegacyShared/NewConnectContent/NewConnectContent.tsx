// @os-block Connect2_LegacyShared.Reusable.NewConnectContent
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';

export interface NewConnectContentProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Placeholder Content. */
  children?: ReactNode;
}

/** Content wrapper (p:migration/screens/AssembleEvents/analysis/sources/pretty/Connect2_LegacyShared.Reusable.
    NewConnectContent.mvc.js view): Placeholder Content with the style `ignore-backwards-compatibility-content`. No
    inputs, no actions. */
export function NewConnectContent({ id, children }: NewConnectContentProps) {
  return (
    <OSBlock name="Reusable.NewConnectContent" id={id}>
      <div className="ignore-backwards-compatibility-content">{children}</div>
    </OSBlock>
  );
}
