import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { isSignedIn, setClientVar, setSignedInUser } from '@/platform/session/session';
import { HOUSEHOLD_DETAILS_ID } from '@/containers/HouseholdDetails/mockData';
import { Connect_Entity } from '@/shared/UBTConnect/lib/staticEntities';
import { EntitiesCarouselElement } from './EntitiesCarouselElement';

const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
/** The details blocks run inside the signed-in app with the query client and a router; bookmarks and notes are
    synched (as captured). */
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
  title: 'Shared/UBTConnect/EntitiesCarousel_Element',
  component: EntitiesCarouselElement,
  decorators: [providers],
} satisfies Meta<typeof EntitiesCarouselElement>;
export default meta;
type Story = StoryObj<typeof meta>;

/** EntitiesCarousel's inputs right after OnInitialize: active element = StartingPosition 0, next active still -1,
    RenderBuffer 3. */
const household = {
  inConnectEntityTypeId: Connect_Entity.Household,
  inEntityId: HOUSEHOLD_DETAILS_ID,
  inCarouselLength: 23,
  inIndexActiveElement: 0,
  inIndexNextActiveElement: -1,
  inRenderBuffer: 3,
};

/** HouseholdCarousel/default (pack variant 1): element 0 of 23, inside the render buffer: the household details. */
export const V1: Story = { args: { ...household, id: 'b3-l1-1152_0-$b2', inIndexCurrentElement: 0 } };
/** HouseholdCarousel/default (pack variant 2): element 4 of 23, outside the render buffer: nothing rendered. */
export const V2: Story = { args: { ...household, id: 'b3-l1-1152_4-$b2', inIndexCurrentElement: 4 } };
/** SupperMeeting_Carousel/default (pack variant 3): element 0 of 3, the supper meeting details (the supper meeting of
    SupperMeeting_DetailsBlock's own stories). */
export const V3: Story = {
  args: {
    id: 'b3-l1-1164_0-$b2',
    inConnectEntityTypeId: Connect_Entity.SupperMeetings_aka_Subdivisions,
    inEntityId: '2820',
    inCarouselLength: 3,
    inIndexActiveElement: 0,
    inIndexNextActiveElement: -1,
    inIndexCurrentElement: 0,
    inRenderBuffer: 3,
  },
};
