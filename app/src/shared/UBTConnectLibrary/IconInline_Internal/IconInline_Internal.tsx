// @os-block UBTConnectLibrary.ConnectPatterns.IconInline_Internal
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { InlineIcon } from './types';

export interface IconInline_InternalProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inlineIcon?: InlineIcon;
}

export function IconInline_Internal({ id, inlineIcon = {} }: IconInline_InternalProps) {
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
