import type { Meta, StoryObj } from '@storybook/react-vite';
import { SupperMeetingCardStatistics } from './SupperMeetingCardStatistics';

const meta = {
  title: 'Shared/UBTConnect/SupperMeeting_ImageCard_Content_Statistics',
  component: SupperMeetingCardStatistics,
} satisfies Meta<typeof SupperMeetingCardStatistics>;
export default meta;
type Story = StoryObj<typeof meta>;

/** SupperMeeting_Carousel/default (pack: wrapper only): counts of a supper meeting. */
export const V1: Story = {
  args: { inBretherenCount: 39, inHouseholdCount: 11, inGenderSplit: '24 Brothers & 15 Sisters' },
};
/** SupperMeeting_Carousel/default: full markup. */
export const V2: Story = { args: V1.args };
