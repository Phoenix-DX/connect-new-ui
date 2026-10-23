import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollAnchor } from './ScrollAnchor';

const meta = {
  title: 'Shared/NavigationHandler/ScrollAnchor',
  component: ScrollAnchor,
} satisfies Meta<typeof ScrollAnchor>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: the anchor before each bookmark item (Id = the item id). */
export const V1: Story = { args: { id: 'b1-l1-57_0-$b3', idIn: '1001' } };
