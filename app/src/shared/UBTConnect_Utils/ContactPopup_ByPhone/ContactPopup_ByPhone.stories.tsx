import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactPopup_ByPhone } from './ContactPopup_ByPhone';

const meta = {
  title: 'Shared/UBTConnect_Utils/ContactPopup_ByPhone',
  component: ContactPopup_ByPhone,
} satisfies Meta<typeof ContactPopup_ByPhone>;
export default meta;
type Story = StoryObj<typeof meta>;

/** ContactUsDetails/default: closed (ShowPopup False). */
export const V1: Story = {
  args: { id: '$b24', inCallPopupData: { ContactPopupData: { ShowPopup: false }, Phone: '+54 291 555 0100' } },
};
