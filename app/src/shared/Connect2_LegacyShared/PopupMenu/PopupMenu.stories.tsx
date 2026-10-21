import type { Meta, StoryObj } from '@storybook/react-vite';
import { PopupMenu } from './PopupMenu';

const meta = {
  title: 'Shared/Connect2_LegacyShared/PopupMenu',
  component: PopupMenu,
} satisfies Meta<typeof PopupMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: the popup of a household's ItemOptionsMenu (closed; no capture opened it), extended class
    backwards-compatibility, the ellipsis anchor inside ItemOptionsMenu's Anchor_Placeholder container. */
export const V1: Story = {
  args: {
    id: 'b1-l1-57_0-b5-$b1',
    extendedClass: 'backwards-compatibility',
    anchor: (
      <div id="b1-l1-57_0-b5-Anchor_Placeholder">
        <i className="icon padding-x-base fa fa-ellipsis-h fa-1x" data-icon="" />
      </div>
    ),
    popupMenu: <div className="context-menu-item">Menu item</div>,
  },
};
