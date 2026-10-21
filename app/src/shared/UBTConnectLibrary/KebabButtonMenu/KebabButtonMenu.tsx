// @os-block UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu
import { OSBlock } from '../../../components/OSBlock';
import { ContextMenu } from '../ContextMenu';
import { CustomContainer } from '../CustomContainer';
import { Position } from '../lib/staticEntities';

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
