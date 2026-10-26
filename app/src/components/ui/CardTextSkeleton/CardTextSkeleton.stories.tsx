import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardTextSkeleton } from './CardTextSkeleton';

const meta = {
  title: 'Shared/Connect2_LegacyShared/NC_Card_Item_Text__Skeleton',
  component: CardTextSkeleton,
} satisfies Meta<typeof CardTextSkeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

/** AssembleEvents/loading: a text line of a loading event card (no ExtendedClass). */
export const V1: Story = { args: { id: 'b2-b4-b3-$b1' } };
