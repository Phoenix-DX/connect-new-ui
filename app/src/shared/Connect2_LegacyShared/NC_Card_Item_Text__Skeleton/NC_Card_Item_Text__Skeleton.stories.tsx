import type { Meta, StoryObj } from '@storybook/react-vite';
import { NC_Card_Item_Text__Skeleton } from './NC_Card_Item_Text__Skeleton';

const meta = {
  title: 'Shared/Connect2_LegacyShared/NC_Card_Item_Text__Skeleton',
  component: NC_Card_Item_Text__Skeleton,
} satisfies Meta<typeof NC_Card_Item_Text__Skeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

/** AssembleEvents/loading: a text line of a loading event card (no ExtendedClass). */
export const V1: Story = { args: { id: 'b2-b4-b3-$b1' } };
