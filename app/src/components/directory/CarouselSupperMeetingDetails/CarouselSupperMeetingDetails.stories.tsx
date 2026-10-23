import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router';
import { CarouselTag } from '@/components/directory/CarouselTag';
import { CarouselSupperMeetingDetails } from './CarouselSupperMeetingDetails';

const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
/** SupperMeeting_DetailsBlock needs the query client and a router. The story does not set the synched bookmarks and
    notes (rule 4: no `platform/` import), so its call-to-action section stays loading until another story sets them
    (README). */
const providers: Decorator = (Story) => (
  <QueryClientProvider client={client}>
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  </QueryClientProvider>
);

const meta = {
  title: 'Shared/UBTConnect/EntitiesCarouse_lSupperMeetingDetails',
  component: CarouselSupperMeetingDetails,
  decorators: [providers],
} satisfies Meta<typeof CarouselSupperMeetingDetails>;
export default meta;
type Story = StoryObj<typeof meta>;

/** SupperMeeting_Carousel/default (pack variant 1): the first of 3 slides, EntitiesCarousel_Element's CarouselTag in
    the placeholder (the supper meeting of SupperMeeting_DetailsBlock's own stories). */
export const V1: Story = {
  args: {
    id: 'b3-l1-1164_0-b2-$b1',
    inSubdivisionId: '2820',
    children: <CarouselTag id="b3-l1-1164_0-b2-$b2" inIndexCurrentItem={0} inTotalItems={3} />,
  },
};
