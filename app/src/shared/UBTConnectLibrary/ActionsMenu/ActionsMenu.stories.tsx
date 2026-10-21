import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionsMenu } from './ActionsMenu';

const meta = {
  title: 'Shared/UBTConnectLibrary/ActionsMenu',
  component: ActionsMenu,
} satisfies Meta<typeof ActionsMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default: household actions (bookmark, notes, gift, share) with labels. */
export const V1: Story = {
  args: {
    id: 'b33-$b2',
    inActionsMenuOptions: { HasBookmark: true, HasNotes: true, HasGift: true, HasShare: true },
  },
};
