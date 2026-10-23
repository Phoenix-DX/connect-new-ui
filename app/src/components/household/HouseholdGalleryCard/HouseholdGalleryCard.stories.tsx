import type { Meta, StoryObj } from '@storybook/react-vite';
import { sampleSubdivisionHouseholds } from '@/components/household/HouseholdGalleryCardList/mockData';
import { HouseholdGalleryCard } from './HouseholdGalleryCard';

const meta = {
  title: 'Shared/UBTConnect/Household_GalleryCard',
  component: HouseholdGalleryCard,
} satisfies Meta<typeof HouseholdGalleryCard>;
export default meta;
type Story = StoryObj<typeof meta>;

/** SupperMeeting_Carousel/default (pack: wrapper only): a household of the supper meeting (neutral mock names). */
export const V1: Story = {
  args: { subdivisionHouseholdGalleryCard: sampleSubdivisionHouseholds(1)[0], itemsPerRow: 2 },
};
/** SupperMeeting_Details/default: full markup (the household photo, UBT_LazyImage, is checked by its own tests). */
export const V2: Story = { args: V1.args };
