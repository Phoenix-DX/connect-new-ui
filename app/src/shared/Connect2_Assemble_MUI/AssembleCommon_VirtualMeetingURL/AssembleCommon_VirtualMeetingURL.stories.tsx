import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { AssembleCommon_VirtualMeetingURL } from './AssembleCommon_VirtualMeetingURL';

const meta = {
  title: 'Shared/Connect2_Assemble_MUI/AssembleCommon_VirtualMeetingURL',
  component: AssembleCommon_VirtualMeetingURL,
  // OSLink navigates with the router
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AssembleCommon_VirtualMeetingURL>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (location row of a virtual meeting card): a Zoom link with id and passcode. */
export const WithLink: Story = {
  args: {
    scope: 'b7',
    virtualMeetingPlatform: 'Zoom',
    virtualMeetingURL: 'https://meet.example.com/j/84522106631',
    virtualMeetingId: '845 2210 6631',
    virtualMeetingPassword: 'Hall2026',
  },
};

/** Not captured: no link yet (no info icon either). */
export const NoLink: Story = { args: { scope: 'b8', virtualMeetingPlatform: 'Zoom' } };
