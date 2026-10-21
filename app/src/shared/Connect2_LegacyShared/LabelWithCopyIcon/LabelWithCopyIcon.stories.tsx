import type { Meta, StoryObj } from '@storybook/react-vite';
import { LabelWithCopyIcon } from './LabelWithCopyIcon';

const meta = {
  title: 'Shared/Connect2_LegacyShared/LabelWithCopyIcon',
  component: LabelWithCopyIcon,
} satisfies Meta<typeof LabelWithCopyIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (AssembleCommon_VirtualMeetingDetails_Entry, inside the meeting info dialog): the meeting id row. */
export const Default: Story = {
  args: {
    attributeValue: '845 2210 6631',
    placeholderLabel: <span data-expression="">Meeting Id</span>,
    placeholderIcon: <i className="icon connect-icon-copy font-size-h5 text-neutral-6 fa fa-flag fa-2x" data-icon="" />,
    placeholderValue: (
      <span className="text-neutral-7" data-expression="">
        845 2210 6631
      </span>
    ),
  },
};
