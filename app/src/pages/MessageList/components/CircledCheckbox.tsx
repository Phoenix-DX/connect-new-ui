// @os-block Connect2_LegacyShared.Reusable.CircledCheckbox
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface CircledCheckboxProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** Prefix of the widget ids inside the block. */
  prefix: string;
  /** Placeholder CheckboxPlaceholder. */
  checkbox: ReactNode;
}

/** CircledCheckbox (p:Connect2_LegacyShared.Reusable.CircledCheckbox.mvc.js view :140-153): the placeholder
    CheckboxPlaceholder with the class `circle-checkbox`. */
export function CircledCheckbox({ id, prefix, checkbox }: CircledCheckboxProps) {
  return (
    <OSBlock name="Reusable.CircledCheckbox" id={id}>
      <div className="circle-checkbox" id={`${prefix}CheckboxPlaceholder`}>
        {checkbox}
      </div>
    </OSBlock>
  );
}
