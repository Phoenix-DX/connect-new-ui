import type { Meta, StoryObj } from '@storybook/react-vite';
import { FreeSubscriptionActionDialog } from './FreeSubscriptionActionDialog';

const meta = {
  title: 'Shared/Connect2_LegacyShared/FreeSubscriptionActionDialog',
  component: FreeSubscriptionActionDialog,
} satisfies Meta<typeof FreeSubscriptionActionDialog>;
export default meta;
type Story = StoryObj<typeof meta>;

/** LegacyShareObject/default: the dialog, closed (pack: dialog wrapper only) */
export const V1: Story = { args: { id: 'FreeSubscriptionAlert' } };
/** LegacyShareObject/default: whole, the closed ActionConfirmationDialog (Root > EventHub) */
export const V2: Story = { args: { id: 'FreeSubscriptionAlert' } };
