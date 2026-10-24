/** @origin UBTConnectLibrary.ConnectPatterns.ContextMenu_Item */
// @os-block UBTConnectLibrary.ConnectPatterns.ContextMenu_Item
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import { UBT_Color, UBT_IconSize, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface ContextMenuItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_UBT_IconsId: UBT_Icons identifier of the option icon. */
  inUBTIconsId?: string;
  /** In_Label: the option text. */
  inLabel?: string;
  /** In_UBT_IconColorId: UBT_Color identifier of the icon; Neutral7 when empty. */
  inUBTIconColorId?: string;
}

const MAIN_CONTAINER_CLASS = 'ubt-context-menu-option';

/** One option of ContextMenu: an IconText (icon + label) in a padded container. View from
    migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.ContextMenu_Item.mvc.js:171-260 (no events). */
export function ContextMenuItem({ id, inUBTIconsId = '', inLabel = '', inUBTIconColorId = '' }: ContextMenuItemProps) {
  return (
    <OSBlock name="ConnectPatterns.ContextMenu_Item" id={id}>
      <CustomContainer
        options={{ PaddingSize: { VerticalSizeId: UBT_Size.Base, HorizontalSizeId: UBT_Size.Small } }}
        extendedClasses={MAIN_CONTAINER_CLASS}
      >
        <IconText text={inLabel} spacingSize={UBT_Size.Small}>
          <Icon
            inIconId={inUBTIconsId}
            inColorId={inUBTIconColorId !== '' ? inUBTIconColorId : UBT_Color.Neutral7}
            inSizeId={UBT_IconSize.Medium_20}
          />
        </IconText>
      </CustomContainer>
    </OSBlock>
  );
}
