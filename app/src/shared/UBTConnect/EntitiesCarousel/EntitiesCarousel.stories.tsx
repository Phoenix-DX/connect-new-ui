import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { isSignedIn, setClientVar, setSignedInUser } from '@/platform/session/session';
import { HOUSEHOLD_DETAILS_ID } from '@/shared/UBTConnect/HouseholdDetails_Block/mockData';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';
import { EntitiesCarousel } from './EntitiesCarousel';

const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
/** The slides' details blocks run inside the signed-in app with the query client and a router; bookmarks and notes
    are synched (as captured). */
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
  title: 'Shared/UBTConnect/EntitiesCarousel',
  component: EntitiesCarousel,
  decorators: [providers],
} satisfies Meta<typeof EntitiesCarousel>;
export default meta;
type Story = StoryObj<typeof meta>;

/** HouseholdCarousel/default (pack variant 1): 23 households (the captured count; every slide shows the same fictional
    household), starting at the first one. */
export const V1: Story = {
  args: {
    id: '$b3',
    inEntitiesCarouselItems: Array.from({ length: 23 }, () => ({ EntityId: HOUSEHOLD_DETAILS_ID })),
    inStartingPosition: 0,
    inConnectEntityTypeId: Connect_Entity.Household,
  },
};
