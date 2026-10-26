import type { Meta, StoryObj } from '@storybook/react-vite';
import { subdivisionHousehold } from '@/components/household/HouseholdGalleryCardList/mockData';
import { householdsOfSupperMeeting } from '@/mocks/fictional/directory';
import { getSkeletonList_UI_SubdivisionHousehold } from '@/lib/ubtConnect/actions';
import { SupperMeetingHouseholdList } from './SupperMeetingHouseholdList';

const meta = {
  title: 'Shared/UBTConnect/SupperMeeting_HouseholdList',
  component: SupperMeetingHouseholdList,
} satisfies Meta<typeof SupperMeetingHouseholdList>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Before GetSubdivisionHouseholds answers: the four skeleton rows. */
const loading = { isDataFetched: false, isError: false, households: getSkeletonList_UI_SubdivisionHousehold(4) };

/** SupperMeeting_Carousel/default (pack: wrapper only): the skeleton rows. */
export const V1: Story = { args: loading };
/** SupperMeeting_Details/default (the gallery list collapsed: own tests): the eleven households of supper meeting
    1210 in the directory cast (src/mocks/fictional/directory.ts), as the container mocks answer them. */
export const V2: Story = {
  args: {
    isDataFetched: true,
    isError: false,
    households: householdsOfSupperMeeting('1210').map(subdivisionHousehold),
  },
};
/** GetSubdivisionHouseholds failed: the Error status, the skeleton rows stay (not captured). */
export const Failed: Story = { args: { ...loading, isError: true } };
