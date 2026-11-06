import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

/** The Label placeholder as a small neutral tag.
    @origin Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Tag */
export function NC_Result_Item__Tag({ id, label }: { id: string; label?: ReactNode }) {
  const scope = id.replace(/\$/g, '');
  return (
    <OSBlock name="NewConnect_Utilities.NC_Result_Item__Tag" id={id}>
      <div
        className="font-size-xs text-neutral-9 background-neutral-2 padding-xs border-radius-soft width-fit-content OSInline"
        id={`${scope}-Label`}
      >
        {label}
      </div>
    </OSBlock>
  );
}
