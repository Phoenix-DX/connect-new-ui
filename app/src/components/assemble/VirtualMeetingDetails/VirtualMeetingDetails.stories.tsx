import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { VirtualMeetingDetails } from './VirtualMeetingDetails';

const meta = {
  title: 'Shared/Connect2_Assemble_MUI/AssembleCommon_VirtualMeetingDetails',
  component: VirtualMeetingDetails,
  // OSLink navigates with the router
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof VirtualMeetingDetails>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (body of the meeting info dialog): link, id and passcode of a virtual prayer meeting. */
export const AllDetails: Story = {
  args: {
    virtualMeetingLink: 'https://meet.example.com/j/84522106631',
    virtualMeetingId: '845 2210 6631',
    virtualMeetingPassword: 'Hall2026',
  },
};

/** Not captured: a meeting with a link only. */
export const LinkOnly: Story = {
  args: { virtualMeetingLink: 'https://meet.example.com/j/84522106631' },
};
