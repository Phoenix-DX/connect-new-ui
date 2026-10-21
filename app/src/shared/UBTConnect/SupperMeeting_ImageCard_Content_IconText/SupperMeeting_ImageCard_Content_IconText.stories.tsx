import type { Meta, StoryObj } from '@storybook/react-vite';
import { getLookupConcepts } from '../../UBTConnectLibrary/lib/actions';
import { UBT_FontSize } from '../lib/staticEntities';
import { SupperMeeting_ImageCard_Content_IconText } from './SupperMeeting_ImageCard_Content_IconText';

const meta = {
  title: 'Shared/UBTConnect/SupperMeeting_ImageCard_Content_IconText',
  component: SupperMeeting_ImageCard_Content_IconText,
} satisfies Meta<typeof SupperMeeting_ImageCard_Content_IconText>;
export default meta;
type Story = StoryObj<typeof meta>;

const brethren = getLookupConcepts(false).Brethren;
/** SupperMeeting_Carousel/default (pack: wrapper only): brethren count line. */
export const V1: Story = {
  args: {
    inText: 'Brethren: 39',
    inFontSize: UBT_FontSize.ExtraSmall,
    inUBTIconId: brethren.Icon,
    inUBTColorId: brethren.Icon_Color,
  },
};
/** SupperMeeting_Carousel/default: full markup. */
export const V2: Story = { args: V1.args };
