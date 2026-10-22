import type { Meta, StoryObj } from '@storybook/react-vite';
import { osImage } from '@/legacy/os/os-assets';
import { withLoadedImages } from '@/shared/test/loadedImages';
import { Statistics_TypedItem } from './Statistics_TypedItem';

const meta = {
  title: 'Shared/UBTConnect/Statistics_TypedItem',
  component: Statistics_TypedItem,
} satisfies Meta<typeof Statistics_TypedItem>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Directory statistics (not person data): the masked locality name and counts get neutral values; the flag is a
   neutral local image (its URL is not compared). */
/** CountryDetails/default (pack: wrapper only): a locality card with supper meetings. */
export const V1: Story = {
  args: {
    uICountryStatistics: {
      Name: 'Example Locality',
      ImageURL: osImage('img/UBTConnect.ConnectLogo.svg'),
      UI_StatisticsTexts: { Members: '95', Households: '25', SupperMeetings: '1', Brothers: '53', Sisters: '42' },
    },
  },
};
/** CountryDetails/default: full markup (flag loaded, name, counts with supper meetings, chevron). */
export const V2: Story = { args: V1.args, decorators: [withLoadedImages] };
/** CountryList/default: a country card (flag loaded, counts with localities). */
export const V3: Story = {
  decorators: [withLoadedImages],
  args: {
    uICountryStatistics: {
      Name: 'Argentina',
      ImageURL: osImage('img/UBTConnect.ConnectLogo.svg'),
      UI_StatisticsTexts: { Members: '120', Households: '30', Localities: '4', Brothers: '60', Sisters: '60' },
    },
  },
};
