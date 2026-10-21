// @os-block UBTConnectLibrary.ConnectCorePatterns.ContextMenu
import { OSBlock } from '../../../components/OSBlock';
import { CircleButton_IconPrimary } from '../CircleButton_IconPrimary';
import { ContextMenu_Item } from '../ContextMenu_Item';
import { CustomContainer } from '../CustomContainer';
import { Icon } from '../Icon';
import { Position, UBT_Color, UBT_Icons, UBT_Shadow, UBT_Shape } from '../lib/staticEntities';
import { PopupMenu } from '../PopupMenu';
import type { ContextMenuOptions } from './types';

export interface ContextMenuProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_ContextMenuOptions: which options the menu shows (Edit / Delete with their own label). */
  inContextMenuOptions?: ContextMenuOptions;
  /** Position identifier; default Position.BottomLeft. */
  position?: string;
  /** isEnabled of the primary button (usePrimaryButon); default True. */
  isEnabled?: boolean;
  /** usePrimaryButon: the anchor is a CircleButton_IconPrimary instead of a plain icon. */
  usePrimaryButon?: boolean;
  /** Event Event_SendGift. */
  onEventSendGift?: () => void;
  /** Event Event_MarkAsRead. */
  onEventMarkAsRead?: () => void;
  /** Event Event_MarkAsUnread. */
  onEventMarkAsUnread?: () => void;
  /** Event Event_Edit. */
  onEventEdit?: () => void;
  /** Event Event_Share. */
  onEventShare?: () => void;
  /** Event Event_Delete. */
  onEventDelete?: () => void;
}

const MAIN_CONTAINER_CLASS = 'ubt-context-menu';

/** The "more" menu of feed items and profiles: a PopupMenu whose options are ContextMenu_Item blocks. */
export function ContextMenu({
  id,
  inContextMenuOptions: options = {},
  position = Position.BottomLeft,
  isEnabled = true,
  usePrimaryButon = false,
  onEventSendGift,
  onEventMarkAsRead,
  onEventMarkAsUnread,
  onEventEdit,
  onEventShare,
  onEventDelete,
}: ContextMenuProps) {
  // Each option is a clickable OutSystems Container around a ContextMenu_Item.
  const option = (show: boolean | undefined, onClick: (() => void) | undefined, label: string, iconId: string) =>
    show === true && (
      <div data-container="" style={{ cursor: 'pointer' }} onClick={onClick}>
        <ContextMenu_Item inLabel={label} inUBTIconsId={iconId} />
      </div>
    );
  return (
    <OSBlock name="ConnectCorePatterns.ContextMenu" id={id}>
      <PopupMenu
        position={position}
        anchor={
          usePrimaryButon ? (
            <CircleButton_IconPrimary isEnabled={isEnabled} iconId={UBT_Icons.MoreVertical} />
          ) : (
            <Icon inColorId={UBT_Color.Neutral7} inIconId={UBT_Icons.MoreVertical} />
          )
        }
        popupMenu={
          <CustomContainer
            options={{
              Background: { BackgroundColor: UBT_Color.Neutral0 },
              BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Soft } },
              ShadowId: UBT_Shadow.ExtraSmall,
            }}
            extendedClasses={MAIN_CONTAINER_CLASS}
          >
            {option(options.HasSendGift, onEventSendGift, 'Send a Gift', UBT_Icons.Gift)}
            {option(options.HasMarkAsRead, onEventMarkAsRead, 'Mark as Read', UBT_Icons.Letter)}
            {option(options.HasMarkAsUnread, onEventMarkAsUnread, 'Mark as Unread', UBT_Icons.Letter)}
            {option(options.Edit?.HasEdit, onEventEdit, options.Edit?.Label ?? '', UBT_Icons.Edit)}
            {option(options.HasShare, onEventShare, 'Share', UBT_Icons.Share)}
            {option(options.Delete?.HasDelete, onEventDelete, options.Delete?.Label ?? '', UBT_Icons.Delete)}
          </CustomContainer>
        }
      />
    </OSBlock>
  );
}
