import type { Meta, StoryObj } from '@storybook/react-vite';
import { getFlagURLByCountryCode } from '../lib/actions';
import { Statistics_ListItem } from './Statistics_ListItem';

const meta = {
  title: 'Shared/UBTConnectLibrary/Statistics_ListItem',
  component: Statistics_ListItem,
} satisfies Meta<typeof Statistics_ListItem>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Directory statistics (not person data); masked counts get neutral values. */
const stats = (names: string[]) => names.map((Name, i) => ({ Name, Value: String(10 + i) }));
const flag = getFlagURLByCountryCode('AR');
/** BrowseCountries/default (pack: wrapper only): a country card. */
export const V1: Story = {
  args: {
    inExtendedClasses: 'country-flag',
    inStatisticsOptions: {
      Title: 'Argentina',
      AvatarURL: flag,
      Statistics: stats(['Localities', 'Brethren', 'Households', 'Brothers', 'Sisters']),
    },
  },
};
/** BrowseCountries/default: full markup. */
export const V2: Story = { args: V1.args };
/** BrowseDirectory/default: card with the subtitle line. */
export const V3: Story = {
  args: {
    inExtendedClasses: 'country-flag',
    inShowSubtitle: true,
    inStatisticsOptions: {
      Title: 'Example Locality',
      /* Aggregate counts as captured (the first one is masked). */
      Statistics: [
        { Name: 'Supper Meetings', Value: '1' },
        { Name: 'Brethren', Value: '95' },
        { Name: 'Households', Value: '25' },
        { Name: 'Brothers', Value: '53' },
        { Name: 'Sisters', Value: '42' },
      ],
    },
  },
};
