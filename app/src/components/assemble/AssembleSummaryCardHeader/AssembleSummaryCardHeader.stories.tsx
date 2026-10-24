import type { Meta, StoryObj } from '@storybook/react-vite';
import { AssembleSummaryCardHeader } from './AssembleSummaryCardHeader';

const meta = {
  title: 'Shared/Connect2_Assemble_MUI/AssembleSummaryCard__Header',
  component: AssembleSummaryCardHeader,
} satisfies Meta<typeof AssembleSummaryCardHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (AssembleSummaryCard): the label GetAssembleEventSummaryHeaderLabel builds. */
export const Default: Story = { args: { headerLabel: 'Prayer Meeting - Tuesday' } };
