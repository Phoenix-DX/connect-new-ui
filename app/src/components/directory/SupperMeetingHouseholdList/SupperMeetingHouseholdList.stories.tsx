import type { Meta, StoryObj } from '@storybook/react-vite';
import { SupperMeetingHouseholdList } from './SupperMeetingHouseholdList';

const meta = {
  title: 'Shared/UBTConnect/SupperMeeting_HouseholdList',
  component: SupperMeetingHouseholdList,
} satisfies Meta<typeof SupperMeetingHouseholdList>;
export default meta;
type Story = StoryObj<typeof meta>;

/** SupperMeeting_Carousel/default (pack: wrapper only). Households from the fictional mock (mocks.ts). */
export const V1: Story = { args: { inSubdivisionId: '2820' } };
/** SupperMeeting_Details/default (the gallery list collapsed: own tests). */
export const V2: Story = { args: V1.args };
