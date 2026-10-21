import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog_AccessRestrictedAction_Legacy } from './Dialog_AccessRestrictedAction_Legacy';

const meta = {
  title: 'Shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy',
  component: Dialog_AccessRestrictedAction_Legacy,
} satisfies Meta<typeof Dialog_AccessRestrictedAction_Legacy>;
export default meta;
type Story = StoryObj<typeof meta>;

/** BookmarksByGroup/default: the free-subscription alert of the bookmark group, closed. */
export const V1: Story = { args: { id: 'b1-FreeSubscriptionAlert', scope: 'b1-b20' } };
