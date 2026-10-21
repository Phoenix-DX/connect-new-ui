import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContextMenu } from './ContextMenu';

const meta = { title: 'Shared/UBTConnectLibrary/ContextMenu', component: ContextMenu } satisfies Meta<
  typeof ContextMenu
>;
export default meta;
type Story = StoryObj<typeof meta>;

/* The options only show once the menu is opened (never done in the captures); mock options so the story opens a menu. */
const feedItem = { inContextMenuOptions: { HasMarkAsRead: true, HasShare: true } };

/** HomeFeed/default: feed item menu (closed) */
export const V1: Story = { args: feedItem };
/** HomeFeed/default: V1 with its whole content */
export const V2: Story = { args: feedItem };
/** Profile/default: primary button, disabled (closed) */
export const V3: Story = {
  args: { position: 'left', usePrimaryButon: true, isEnabled: false, inContextMenuOptions: { HasShare: true } },
};
