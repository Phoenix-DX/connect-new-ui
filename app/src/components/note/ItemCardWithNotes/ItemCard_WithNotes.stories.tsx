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

/** No TST capture shows the event time row (every captured Bookmarks and Notes card has NullDate event dates): the
    card without it. */
export const NoEventDates: Story = {};
/** The event time row of a timed event (TST publish of 2026-10-29): "7:30 PM on Tuesday, 10 November 2026". */
export const TimedEvent: Story = {
  args: { inEventStartDateTime: '2026-11-10T19:30:00', inEventEndDateTime: '2026-11-10T21:00:00' },
};
/** An all-day event on a Sunday (start at 00:00:00, end one day later): "On Lord's Day, 8 November 2026". */
export const AllDayEvent: Story = {
  args: { inEventStartDateTime: '2026-11-08T00:00:00', inEventEndDateTime: '2026-11-09T00:00:00' },
};
