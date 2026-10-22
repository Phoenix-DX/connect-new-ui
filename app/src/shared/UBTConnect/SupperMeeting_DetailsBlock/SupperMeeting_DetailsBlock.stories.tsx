import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router';
import { setClientVar } from '@/platform/session/session';
import { SupperMeeting_DetailsBlock } from './SupperMeeting_DetailsBlock';

const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
/** Directory_EntityDetailsActions needs the query client and a router; bookmarks and notes are synched (as captured). */
const providers: Decorator = (Story) => {
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
  title: 'Shared/UBTConnect/SupperMeeting_DetailsBlock',
  component: SupperMeeting_DetailsBlock,
  decorators: [providers],
} satisfies Meta<typeof SupperMeeting_DetailsBlock>;
export default meta;
type Story = StoryObj<typeof meta>;

/** SupperMeeting_Carousel/default (pack: wrapper only): the recorded supper meeting. */
export const V1: Story = { args: { inSubdivsionId: '2820' } };
/** SupperMeeting_Details/default: once DataActionGetSubdivision answered (nested content blocks collapsed). */
export const V2: Story = { args: V1.args };
/** SupperMeeting_Details/loading: the skeleton details while the data action has not answered. */
export const V3: Story = { args: V1.args };
