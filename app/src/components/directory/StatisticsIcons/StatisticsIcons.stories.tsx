import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatisticsIcons } from './StatisticsIcons';

const meta = {
  title: 'Shared/UBTConnect/Statistics_Icons',
  component: StatisticsIcons,
} satisfies Meta<typeof StatisticsIcons>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Directory statistics (not person data); masked counts get neutral values. */
/** CountryDetails/default (pack: wrapper only): a locality card with supper meetings. */
export const V1: Story = {
  args: {
    uIStatisticsTexts: { Members: '95', Households: '25', SupperMeetings: '1', Brothers: '53', Sisters: '42' },
  },
};
/** CountryDetails/default: full markup, supper meetings column (SupperMeetings not ""). */
export const V2: Story = { args: V1.args };
/** CountryList/default: a country card, localities column (SupperMeetings ""). */
export const V3: Story = {
  args: {
    uIStatisticsTexts: { Members: '120', Households: '30', Localities: '4', Brothers: '60', Sisters: '60' },
  },
};
