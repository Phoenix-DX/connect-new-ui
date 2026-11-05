import type { Meta, StoryObj } from '@storybook/react-vite';
import { ItemCard_WithNotes } from './ItemCard_WithNotes';

const meta = {
  title: 'Shared/UBTConnectLibrary/ItemCard_WithNotes',
  component: ItemCard_WithNotes,
  args: {
    id: 'b8-$b1',
    inTitle: 'Harvest Thanksgiving Meeting',
    inSubtitle: 'Ashgrove Fields Locality',
    inLabel: 'Assemble Event',
    inTotalNotes: '2',
    avatarImage: { FallbackOptions: { Initials: 'AE' } },
  },
} satisfies Meta<typeof ItemCard_WithNotes>;
export default meta;
type Story = StoryObj<typeof meta>;

/** The card without a channel (live TST of 2026-11-05: the event time row is gone). */
export const Default: Story = {};
