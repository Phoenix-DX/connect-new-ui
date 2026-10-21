import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog_CustomChoice } from './Dialog_CustomChoice';

const meta = {
  title: 'Shared/UBTConnect/Dialog_CustomChoice',
  component: Dialog_CustomChoice,
} satisfies Meta<typeof Dialog_CustomChoice>;
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
