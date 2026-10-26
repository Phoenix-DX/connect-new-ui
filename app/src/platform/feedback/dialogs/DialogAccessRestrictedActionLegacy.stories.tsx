import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogAccessRestrictedActionLegacy } from './DialogAccessRestrictedActionLegacy';

const meta = {
  title: 'Platform/feedback/DialogAccessRestrictedActionLegacy',
  component: DialogAccessRestrictedActionLegacy,
} satisfies Meta<typeof DialogAccessRestrictedActionLegacy>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: the free-subscription alert of the bookmark group, closed. */
export const V1: Story = { args: { id: 'b1-FreeSubscriptionAlert', scope: 'b1-b20' } };
