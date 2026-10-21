import type { Meta, StoryObj } from '@storybook/react-vite';
import { AssembleSummaryCard__Header } from './AssembleSummaryCard__Header';

const meta = {
  title: 'Shared/Connect2_Assemble_MUI/AssembleSummaryCard__Header',
  component: AssembleSummaryCard__Header,
} satisfies Meta<typeof AssembleSummaryCard__Header>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Not captured (AssembleSummaryCard): the label GetAssembleEventSummaryHeaderLabel builds. */
export const Default: Story = { args: { headerLabel: 'Prayer Meeting - Tuesday' } };
