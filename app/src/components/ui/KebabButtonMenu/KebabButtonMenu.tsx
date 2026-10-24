/** @origin UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu */
// @os-block UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu
import { OSBlock } from '@/components/ui/os/OSBlock';
import { ContextMenu } from '@/components/ui/ContextMenu';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Position } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface KebabButtonMenuProps {
  /** OutSystems instance id of the block. */
  id?: string;
  isEnable?: boolean;
  /** Event Edit (ContextMenu Event_Edit). */
  onEdit?: () => void;
  /** Event Share (ContextMenu Event_Share). */
  onShare?: () => void;
}

/** Profile kebab menu (p:UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc.js:147-213): a CustomContainer
    holding a left-positioned ContextMenu with the primary button, "Edit Profile" and Share. */
export function KebabButtonMenu({ id, isEnable = true, onEdit, onShare }: KebabButtonMenuProps) {
  return (
    <OSBlock name="ConnectCorePatterns.KebabButtonMenu" id={id}>
      <CustomContainer extendedClasses="ubt-kebab-menu">
        <ContextMenu
          usePrimaryButon
          position={Position.Left}
          inContextMenuOptions={{
            HasSendGift: false,
            HasMarkAsRead: false,
            HasShare: true,
            Edit: { HasEdit: true, Label: 'Edit Profile' },
          }}
          isEnabled={isEnable}
          onEventEdit={onEdit}
          onEventShare={onShare}
        />
      </CustomContainer>
    </OSBlock>
  );
}
