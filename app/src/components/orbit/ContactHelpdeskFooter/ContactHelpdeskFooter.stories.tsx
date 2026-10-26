import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactHelpdeskFooter } from './ContactHelpdeskFooter';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/ContactHelpdesk_Footer',
  component: ContactHelpdeskFooter,
} satisfies Meta<typeof ContactHelpdeskFooter>;
export default meta;
type Story = StoryObj<typeof meta>;

/** EventDetail/default (also MilestoneDetail/default): the footer under the event details. */
export const V1: Story = { args: { id: 'b1-$b15' } };
