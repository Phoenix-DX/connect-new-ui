import type { Meta, StoryObj } from '@storybook/react-vite';
import { OrbitNoInformation } from './OrbitNoInformation';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/NoInformation_Orbit',
  component: OrbitNoInformation,
} satisfies Meta<typeof OrbitNoInformation>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HelpersDetail/default: the event has no helper (the screen's message). */
export const V1: Story = { args: { id: 'b1-$b7', message: 'There is no Helper available.' } };

/** OrbitAdminLanding/default: no event needs QR scanning (the screen's message). */
export const V2: Story = {
  args: {
    id: 'b1-$b4',
    message:
      'There are no events currently where QR scanning is required. If you have any questions, please contact your regional Orbit helpdesk.',
  },
};

/** Not captured: IsUrgent (red text with the circle-cross icon). */
export const Urgent: Story = {
  args: { message: 'The host survey closes today.', isUrgent: true },
};
