import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactHelpdesk_Footer } from './ContactHelpdesk_Footer';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/ContactHelpdesk_Footer',
  component: ContactHelpdesk_Footer,
} satisfies Meta<typeof ContactHelpdesk_Footer>;
export default meta;
type Story = StoryObj<typeof meta>;

/** EventDetail/default (also MilestoneDetail/default): the footer under the event details. */
export const V1: Story = { args: { id: 'b1-$b15' } };
