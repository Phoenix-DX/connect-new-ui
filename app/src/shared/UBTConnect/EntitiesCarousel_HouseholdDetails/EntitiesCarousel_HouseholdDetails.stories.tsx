import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '../../../shell/mockUser';
import { isSignedIn, setClientVar, setSignedInUser } from '../../../shell/session';
import { CarouselTag } from '../CarouselTag';
import { HOUSEHOLD_DETAILS_ID } from '../HouseholdDetails_Block/mockData';
import { EntitiesCarousel_HouseholdDetails } from './EntitiesCarousel_HouseholdDetails';

const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
/** HouseholdDetails_Block runs inside the signed-in app (user information), with the query client and a router;
    bookmarks and notes are synched (as captured). */
const providers: Decorator = (Story) => {
  if (!isSignedIn()) setSignedInUser(MOCK_USER_ID);
  setClientVar('UBTConnect.Bookmarks_IsSynched', true);
  setClientVar('UBTConnect.Notes_IsSynched', true);
  return (
    <QueryClientProvider client={client}>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </QueryClientProvider>
  );
};

const meta = {
  title: 'Shared/UBTConnect/EntitiesCarousel_HouseholdDetails',
  component: EntitiesCarousel_HouseholdDetails,
  decorators: [providers],
} satisfies Meta<typeof EntitiesCarousel_HouseholdDetails>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default (pack variant 1): the first of 23 slides, inside the render buffer of the active element
    (In_IsSkeletonOnly False), EntitiesCarousel_Element's CarouselTag in the placeholder. */
export const V1: Story = {
  args: {
    id: 'b3-l1-1152_0-b2-$b3',
    inHouseholdId: HOUSEHOLD_DETAILS_ID,
    inIsSkeletonOnly: false,
    children: <CarouselTag id="b3-l1-1152_0-b2-$b4" inIndexCurrentItem={0} inTotalItems={23} />,
  },
};
