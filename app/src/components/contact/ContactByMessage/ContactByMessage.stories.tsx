import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactByMessage } from './ContactByMessage';

const meta = {
  title: 'Shared/UBTConnect_Utils/ContactByMessage_Wrapper',
  component: ContactByMessage,
} satisfies Meta<typeof ContactByMessage>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default: closed (ShowPopup False). */
export const V1: Story = {
  args: {
    id: 'b33-$b3',
    inContactPopupData: { Email: 'julian.vitale@example.com', ContactPopupData: { ShowPopup: false } },
  },
};
