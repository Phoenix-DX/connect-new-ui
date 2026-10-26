import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatisticsList } from './StatisticsList';

const meta = {
  title: 'Shared/UBTConnect/StatisticsList',
  component: StatisticsList,
} satisfies Meta<typeof StatisticsList>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Directory statistics (not person data): masked names and counts get neutral values. */
const locality = (Id: string, Title: string, counts: [string, string, string, string, string]) => ({
  Id,
  StatisticsOptions: {
    Title,
    Statistics: ['Supper Meetings', 'Brethren', 'Households', 'Brothers', 'Sisters'].map((Name, i) => ({
      Name,
      Value: counts[i] ?? '',
    })),
  },
});
/** BrowseCountries/default (pack: wrapper only). */
export const V1: Story = { args: { inSearchPrompt: 'Search country' } };
/** BrowseDirectory/default: three locality cards with the subtitle line. */
export const V2: Story = {
  args: {
    inSearchPrompt: 'Search locality',
    inShowSubtitle: true,
    inStatistics: [
      locality('1', 'Example Locality', ['1', '95', '25', '53', '42']),
      locality('2', 'Second Locality', ['1', '135', '53', '82', '81']),
      locality('3', 'Third Locality', ['1', '139', '47', '68', '71']),
    ],
  },
};
/** BrowseCountries/loading: In_IsLoading with the screen's ten placeholder cards. */
export const V3: Story = {
  args: {
    inSearchPrompt: 'Search country',
    inIsLoading: true,
    inStatistics: Array.from({ length: 10 }, (_, i) => ({
      Id: String(i),
      StatisticsOptions: {
        Title: 'Australia',
        AvatarURL: '-',
        Statistics: [
          { Name: 'Locality', Value: '83' },
          { Name: 'Bretheren', Value: '10000' },
          { Name: 'Households', Value: '1000' },
          { Name: 'Brothers', Value: '1000' },
          { Name: 'Sisters', Value: '1000' },
        ],
      },
    })),
  },
};
