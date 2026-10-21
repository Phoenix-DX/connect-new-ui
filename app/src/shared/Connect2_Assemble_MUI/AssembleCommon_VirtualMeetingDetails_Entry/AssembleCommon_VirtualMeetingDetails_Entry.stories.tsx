import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { AssembleCommon_VirtualMeetingDetails_Entry } from './AssembleCommon_VirtualMeetingDetails_Entry';

const meta = {
  title: 'Shared/Connect2_Assemble_MUI/AssembleCommon_VirtualMeetingDetails_Entry',
  component: AssembleCommon_VirtualMeetingDetails_Entry,
  // OSLink navigates with the router
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AssembleCommon_VirtualMeetingDetails_Entry>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (meeting info dialog): the meeting link row, a link. */
export const MeetingLink: Story = {
  args: { label: 'Meeting Link', value: 'https://meet.example.com/j/84522106631', isURL: true },
};

/** Not captured: the passcode row, plain text. */
export const Passcode: Story = {
  args: { label: 'Passcode', value: 'Hall2026', isURL: false },
};
