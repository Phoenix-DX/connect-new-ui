import type { Meta, StoryObj } from '@storybook/react-vite';
import { AssembleSummaryCardRow } from './AssembleSummaryCardRow';

const meta = {
  title: 'Shared/Connect2_Assemble_MUI/AssembleSummary_Card_Row',
  component: AssembleSummaryCardRow,
} satisfies Meta<typeof AssembleSummaryCardRow>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (AssembleSummaryCard): the time row of a meeting card. */
export const TimeRow: Story = {
  args: {
    placeholderIconLeft: <i className="icon connect-icon-time-clock fa fa-flag fa-1x" data-icon="" />,
    placeholderContent: <span data-expression="">7:30 PM on Tuesday, 10 November 2026</span>,
  },
};
