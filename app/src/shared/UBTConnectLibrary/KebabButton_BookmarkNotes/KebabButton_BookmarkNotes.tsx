// @os-block UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes
import { OSBlock } from '../../../components/OSBlock';
import { ContextMenu } from '../ContextMenu';
import { CustomContainer } from '../CustomContainer';
import { Position } from '../lib/staticEntities';

export interface KebabButton_BookmarkNotesProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** isEnable; default True. False adds `kebab-blocker` and disables the menu. */
  isEnable?: boolean;
  /** Event Edit. */
  onEdit?: () => void;
  /** Event Delete. */
  onDelete?: () => void;
}

const MAIN_CONTAINER_CLASS = 'ubt-kebab-menu';

/** The "more" menu of a note: Edit note / Delete note (migration/blocks/sources/
    UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.mvc.js: view :130-270, handlers :280-370). */
export function KebabButton_BookmarkNotes({ id, isEnable = true, onEdit, onDelete }: KebabButton_BookmarkNotesProps) {
  return (
    <OSBlock name="ConnectPatterns.KebabButton_BookmarkNotes" id={id}>
      <CustomContainer extendedClasses={MAIN_CONTAINER_CLASS}>
        <div className={isEnable ? undefined : 'kebab-blocker'} data-container="">
          <ContextMenu
            position={Position.Left}
            usePrimaryButon={false}
            isEnabled={isEnable}
            inContextMenuOptions={{
              HasSendGift: false,
              HasMarkAsRead: false,
              HasShare: false,
              Edit: { HasEdit: true, Label: 'Edit note' },
              Delete: { HasDelete: true, Label: 'Delete note' },
            }}
            onEventEdit={onEdit}
            onEventDelete={onDelete}
          />
        </div>
      </CustomContainer>
    </OSBlock>
  );
}
