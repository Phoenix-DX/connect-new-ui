import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactByMessage_Wrapper } from './ContactByMessage_Wrapper';

const meta = {
  title: 'Shared/UBTConnect_Utils/ContactByMessage_Wrapper',
  component: ContactByMessage_Wrapper,
} satisfies Meta<typeof ContactByMessage_Wrapper>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default: closed (ShowPopup False). */
export const V1: Story = {
  args: {
    id: 'b33-$b3',
    inContactPopupData: { Email: 'julian.vitale@example.com', ContactPopupData: { ShowPopup: false } },
  },
};
