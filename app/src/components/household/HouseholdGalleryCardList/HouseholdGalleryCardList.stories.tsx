import { DataFetchStatus } from '@/components/ui/os/OSList';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { getSkeletonList_UI_SubdivisionHousehold } from '@/shared/UBTConnect/lib/actions';
import { HouseholdGalleryCardList } from './HouseholdGalleryCardList';
import { sampleSubdivisionHouseholds } from './mockData';

const meta = {
  title: 'Shared/UBTConnect/Household_GalleryCard_List',
  component: HouseholdGalleryCardList,
} satisfies Meta<typeof HouseholdGalleryCardList>;
export default meta;
type Story = StoryObj<typeof meta>;

/** SupperMeeting_Carousel/default (pack: wrapper only): the households of a supper meeting. */
export const V1: Story = { args: { inHouseholdGalleryCardList: sampleSubdivisionHouseholds(11), inIsLoading: false } };
/** SupperMeeting_Details/default: eleven households after load (cards collapsed: own tests). */
export const V2: Story = { args: V1.args };
/** SupperMeeting_Details/loading: the four skeleton rows of SupperMeeting_HouseholdList's OnReady while the data action
    has failed (List `list-error`). */
export const V3: Story = {
  args: {
    inHouseholdGalleryCardList: getSkeletonList_UI_SubdivisionHousehold(4),
    inIsLoading: true,
    inHouseholdGalleryCardListDataFetchStatus: DataFetchStatus.Error,
  },
};
