import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChoiceDialog } from './ChoiceDialog';

const meta = {
  title: 'Shared/UBTConnect/Dialog_CustomChoice',
  component: ChoiceDialog,
} satisfies Meta<typeof ChoiceDialog>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Menu/default: the logout question, closed (UBTConnect.App_Menu.Menu.mvc.js:595-656). */
export const V1: Story = {
  args: {
    id: 'PopUp_Logout',
    scope: 'b15',
    placeholderHeader: 'Logout',
    placeholderBody: 'Are you sure you wish to logout?',
    placeholderButtonLabel: 'Yes',
    placeholderDismissButtonLabe: 'No',
  },
};
