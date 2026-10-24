import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChoiceDialog } from './ChoiceDialog';

const meta = {
  title: 'Shared/UBTConnect/Dialog_CustomChoice',
  component: ChoiceDialog,
} satisfies Meta<typeof ChoiceDialog>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Menu/default: the logout question, closed. */
export const V1: Story = {
  args: {
    id: 'PopUp_Logout',
    scope: 'b15',
    header: 'Logout',
    body: 'Are you sure you wish to logout?',
    confirmLabel: 'Yes',
    dismissLabel: 'No',
  },
};
