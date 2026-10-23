import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactPopupByMessage } from './ContactPopupByMessage';

const meta = {
  title: 'Shared/UBTConnect_Utils/ContactPopup_ByMessage',
  component: ContactPopupByMessage,
} satisfies Meta<typeof ContactPopupByMessage>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default: closed (ShowPopup False). */
export const V1: Story = {
  args: { id: 'b3-$b1', inContactByMessageData: { ContactPopupData: { ShowPopup: false }, ShowEmail: true } },
};
