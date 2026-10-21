import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListOfDaySelectors } from './ListOfDaySelectors';

const meta = {
  title: 'Shared/Connect2_OrbitMobile_MUI/ListOfDaySelectors',
  component: ListOfDaySelectors,
} satisfies Meta<typeof ListOfDaySelectors>;
export default meta;
type Story = StoryObj<typeof meta>;

/** EventDetail/default: a three-day event (23 to 25), the first day selected, weekday letter below each day. */
export const V1: Story = {
  args: {
    id: 'b1-b7-$b1',
    dateList: [
      { DateGroup: '2026-11-23', IsSelected: true },
      { DateGroup: '2026-11-24', IsSelected: false },
      { DateGroup: '2026-11-25', IsSelected: false },
    ],
    addWeekdayBelow: true,
  },
};

/** Not captured: weekday letters instead of the day of month, Sunday as "L" (Lord's Day Meal). */
export const Weekdays: Story = {
  args: {
    dateList: [
      { DateGroup: '2026-11-28', IsSelected: false },
      { DateGroup: '2026-11-29', IsSelected: true },
    ],
    showInWeekday: true,
    replaceSunday: true,
  },
};
