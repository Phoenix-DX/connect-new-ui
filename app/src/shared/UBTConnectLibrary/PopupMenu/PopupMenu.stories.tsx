import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircleButton_IconPrimary } from '../CircleButton_IconPrimary';
import { Icon } from '../Icon';
import { PopupMenu } from './PopupMenu';

const meta = { title: 'Shared/UBTConnectLibrary/PopupMenu', component: PopupMenu } satisfies Meta<typeof PopupMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HomeFeed/default: ContextMenu of a feed item (closed; the menus were never opened in the captures) */
export const V1: Story = {
  args: { position: 'bottom-left', anchor: <Icon inColorId="neutral-7" inIconId="connect-icon-more_vertical" /> },
};
/** Profile/default: ContextMenu with the primary button, disabled (closed) */
export const V2: Story = {
  args: {
    position: 'left',
    anchor: <CircleButton_IconPrimary isEnabled={false} iconId="connect-icon-more_vertical" />,
  },
};
