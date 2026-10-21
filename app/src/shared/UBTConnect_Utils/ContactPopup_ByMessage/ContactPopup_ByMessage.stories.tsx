import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactPopup_ByMessage } from './ContactPopup_ByMessage';

const meta = {
  title: 'Shared/UBTConnect_Utils/ContactPopup_ByMessage',
  component: ContactPopup_ByMessage,
} satisfies Meta<typeof ContactPopup_ByMessage>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default: closed (ShowPopup False). */
export const V1: Story = {
  args: { id: 'b3-$b1', inContactByMessageData: { ContactPopupData: { ShowPopup: false }, ShowEmail: true } },
};
