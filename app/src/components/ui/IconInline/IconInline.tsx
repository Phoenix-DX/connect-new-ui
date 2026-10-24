/** @origin UBTConnectLibrary.ConnectPatterns.IconInline_Internal */
// @os-block UBTConnectLibrary.ConnectPatterns.IconInline_Internal
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Icon } from '@/components/ui/Icon';
import { UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import type { InlineIcon } from './types';

export interface IconInlineProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inlineIcon?: InlineIcon;
}

export function IconInline({ id, inlineIcon = {} }: IconInlineProps) {
  const spacingSize = inlineIcon.SpacingSize ?? UBT_Size.ExtraSmall;
  return (
    <OSBlock name="ConnectPatterns.IconInline_Internal" id={id}>
      {inlineIcon.IconId && (
        <Icon
          inExtendedClasses={`${spacingSize !== '' ? `padding-right-${spacingSize}` : ''} inline-block`}
          inIconId={inlineIcon.IconId}
          inColorId={inlineIcon.IconColorId ?? ''}
          inSizeId={inlineIcon.IconSizeId ?? ''}
        />
      )}
    </OSBlock>
  );
}
