import type { Meta, StoryObj } from '@storybook/react-vite';
import { SupperMeeting_ImageCard_Content } from './SupperMeeting_ImageCard_Content';

const meta = {
  title: 'Shared/UBTConnect/SupperMeeting_ImageCard_Content',
  component: SupperMeeting_ImageCard_Content,
} satisfies Meta<typeof SupperMeeting_ImageCard_Content>;
export default meta;
type Story = StoryObj<typeof meta>;

/** SupperMeeting_Carousel/default (pack: wrapper only): card content of a supper meeting (fictional address). */
export const V1: Story = {
  args: {
    inSubdivisionCardContent: {
      Name: 'Zapiola (Main Meeting Room)',
      Address: '1450 Calle Zapiola, Bahia Blanca',
      BretherenCount: 39,
      BrothersCount: 20,
      SistersCount: 19,
      HouseholdCount: 11,
    },
    inShowAddress: true,
  },
};
/** SupperMeeting_Details/default: with the address (In_ShowAddress True; statistics and address collapsed). */
export const V2: Story = { args: V1.args };
