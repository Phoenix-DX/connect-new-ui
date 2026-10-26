import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResultItemBadge } from './ResultItemBadge';

const meta = {
  title: 'Shared/Connect2_LegacyShared/NC_Result_Item_Badge',
  component: ResultItemBadge,
} satisfies Meta<typeof ResultItemBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

/** AssembleEvents/loading: the 73px date badge of a loading event card, default colour, no icon yet. */
export const V1: Story = { args: { id: 'b2-b4-b7-l1-75_0-$b5', size: '73px' } };
